/* ===== Chấm điểm tự động (AI mô phỏng theo tiêu chí Aptis) + chấm bằng Claude API (tuỳ chọn) =====
   Bộ chấm ngoại tuyến phân tích văn bản (transcript) theo 5 tiêu chí của British Council:
   hoàn thành nhiệm vụ, độ dài/trôi chảy, ngữ pháp, từ vựng, liên kết. Đây là điểm ƯỚC LƯỢNG để luyện tập,
   không thay thế giám khảo. */
const Scorer = (() => {
  const STOP = new Set("a an the and or but so to of in on at for with by from is are was were be been am do does did have has had i you he she it we they me my your his her our their this that these those what which who when where why how there here very can could would should will about as if not no yes than then too also some any many much more most just like really".split(" "));
  const LINKERS = ["because", "so", "however", "besides", "also", "first", "second", "third", "finally", "another reason", "in addition", "moreover", "although", "but", "for example", "such as", "therefore", "for me", "in my opinion", "i think", "i believe", "both", "while", "whereas", "on the other hand", "in short", "then", "after that", "at first", "in the end", "when", "last", "furthermore", "as a result", "personally", "to sum up", "overall"];
  const ADV = ["affordable", "convenient", "beneficial", "practical", "feasible", "effective", "meaningful", "essential", "necessary", "hospitable", "stunning", "peaceful", "relaxing", "memorable", "delighted", "proud", "relieved", "grateful", "broaden", "confident", "independent", "communication", "environment", "pollution", "comfortable", "popular", "enjoyable", "valuable", "crowded", "polluted", "stressful", "passionate", "experience", "opportunity", "appreciate", "encourage", "suitable", "economical", "excited", "exciting", "fascinating", "impressive", "reliable", "humorous", "kind-hearted", "focused", "stay healthy", "keep fit", "reduce stress", "share happy moments", "limited budgets", "low income", "prevent", "improve", "develop", "knowledge", "skills", "anywhere at any time", "advantages", "disadvantages", "attractions", "depending on", "preferences", "nervous", "thrilled", "disappointed", "surprised", "challenging", "achievable", "recommend", "advisable"];
  const BASIC = { good: "beneficial / useful / great", nice: "pleasant / lovely / beautiful", bad: "harmful / unpleasant", "a lot of": "many / a great deal of", thing: "(gọi tên cụ thể sự vật)", big: "large / huge", happy: "delighted / thrilled / excited" };
  const FILLERS = /\b(um+|uh+|erm*|ah+|hmm+)\b/gi;
  const PAST = /\b(was|were|had|did|went|saw|felt|got|made|took|came|gave|bought|met|thought|told|said|left|became|began|ate|drank|found|knew|heard|wore|won|ran|sat|stood|spent|taught|brought|could|wanted|decided|tried|visited|helped|played|watched|learned|learnt|lived|started|finished|received|arrived|enjoyed|stayed|travelled|traveled|asked|passed|changed|moved|waited|practised|practiced|prepared|invited|organised|organized|called|walked|worked|studied|liked|loved|needed|used|planned|cooked|cleaned|opened)\b/gi;
  const ERR = [
    [/\b(he|she|it|my (?:mother|father|friend|sister|brother|husband|wife|son|daughter))\s+(go|have|do|like|want|play|watch|live|work|study|eat|need|make|take|love|enjoy|help|look|think)\b/gi, "Chủ ngữ ngôi 3 số ít → động từ thêm -s/-es (he goes, she likes, it helps)."],
    [/\b(people|they|we|you)\s+(is|was|has)\b/gi, "Chủ ngữ số nhiều → dùng are / were / have (people are…)."],
    [/\bi\s+(is|are|has)\b/gi, "Sau 'I' dùng am / have (I am, I have)."],
    [/\b(?:i|i'm|i am)\s+agree\b/gi, "'agree' là động từ: nói 'I agree', không nói 'I am agree'."],
    [/\bmore\s+(better|easier|bigger|cheaper|faster|worse|happier)\b/gi, "Không dùng 'more' với tính từ đã thêm -er (better, easier)."],
    [/\b(i|we)\s+(am|was|were|feel|felt|get|got)\s+(boring|tiring|exciting|interesting|relaxing|surprising|disappointing|confusing)\b/gi, "Cảm xúc của NGƯỜI dùng -ed: I was bored / tired / excited (không dùng -ing)."],
    [/\b(?:didn't|did not|doesn't|does not|don't|do not)\s+(\w+ed|went|saw|got|made|took|came|gave|bought|met)\b/gi, "Sau do/does/did (not) dùng động từ nguyên mẫu (didn't go, didn't see)."],
    [/\ba\s+(?!u|eu|one\b|once\b)([aeio]\w+)/gi, "Trước danh từ bắt đầu bằng nguyên âm dùng 'an' (an apple, an interesting…)."],
    [/\bvery\s+like\b/gi, "Nói 'really like' hoặc 'like … very much', không nói 'very like'."],
    [/\b(?:doesn't|don't)\s+has\b/gi, "Sau doesn't/don't dùng 'have'."],
    [/\bmany\s+(money|information|time|water|traffic|homework|knowledge|advice|furniture)\b/gi, "Danh từ không đếm được dùng 'much' hoặc 'a lot of'."],
    [/\bdiscuss\s+about\b/gi, "'discuss' không đi với 'about' (discuss the problem)."],
    [/\bmarried\s+with\b/gi, "Nói 'married to someone'."],
    [/\b(?:can|could|should|must|will|would|may|might)\s+(?:to\s+)\w+/gi, "Sau động từ khuyết thiếu (can, should, will…) không dùng 'to'."],
    [/\bpeoples\b/gi, "'people' đã là số nhiều, không thêm -s."],
    [/\b(?:informations|advices|furnitures|homeworks|equipments)\b/gi, "Danh từ không đếm được không thêm -s."]
  ];
  const lc = s => String(s || "").toLowerCase();
  const stem = w => w.toLowerCase().replace(/['’]s$/, "").replace(/(ing|ed|es|s)$/, "");
  const content = t => [...new Set(wordsOf(t).map(w => w.toLowerCase()).filter(w => w.length > 2 && !STOP.has(w)))];
  const sentences = t => String(t).split(/[.!?]+/).map(s => s.trim()).filter(s => wc(s) > 0);
  const has = (t, re) => re.test(lc(t));
  const countLinkers = t => { const L = lc(t); return LINKERS.filter(k => new RegExp("\\b" + k.replace(/ /g, "\\s+") + "\\b").test(L)); };
  const overlap = (a, b) => { const A = content(a).map(stem), B = new Set(content(b).map(stem)); if (!A.length) return 0; return A.filter(x => B.has(x)).length / A.length; };

  function findErrors(text) {
    const out = [];
    for (const [re, msg] of ERR) { re.lastIndex = 0; let m; while ((m = re.exec(text))) { out.push({ match: m[0], msg }); if (out.length > 12) break; } }
    return out;
  }
  function vocabInfo(text) {
    const W = wordsOf(text).map(w => w.toLowerCase());
    const uniq = new Set(W).size, ttr = W.length ? uniq / W.length : 0;
    const L = lc(text);
    const adv = ADV.filter(k => L.includes(k));
    const basic = Object.keys(BASIC).filter(k => new RegExp("\\b" + k + "\\b").test(L) && (L.match(new RegExp("\\b" + k + "\\b", "g")) || []).length >= 2);
    return { ttr, adv, basic };
  }
  function complexity(text) {
    const L = lc(text); let n = 0;
    [/\bbecause\b/, /\balthough\b|\bthough\b|\beven if\b/, /\bwhich\b|\bwho\b|\bwhose\b|\bwhere\b(?!\s+do)/, /\bif\b/, /\b\w+er than\b|\bmore \w+ than\b|\bthe most\b/, /\bhad\s+\w+(ed|en|ne|wn)\b/, /\b(helps?|allows?)\s+(me|us|them|people)\b/, /\bso that\b|\bin order to\b/, /\bwhen i\b|\bwhile\b/, /\bhave been\b|\bhas been\b|\bhave \w+ed\b/].forEach(r => { if (r.test(L)) n++; });
    return n;
  }

  /* ----- Speaking task types & checklists ----- */
  function sType(part, qi) {
    if (part === 1) return "personal";
    if (part === 2 && qi === 0) return "describe";
    if (part === 3 && qi === 0) return "compare";
    if (part === 4) return "story";
    return "opinion";
  }
  const PEOPLE = /\b(i can see|there (is|are)|i see)\b[^.]*\b(people|person|man|men|woman|women|child|children|boy|girl|family|couple|teacher|students?|friends?|kids?|baby|father|mother|son|daughter|player|doctor|worker)/;
  const PLACE = /\b(in|at|on|by)\s+(a|an|the|his|her|their)?\s*(park|room|living room|bedroom|kitchen|office|street|classroom|house|home|garden|beach|restaurant|gym|shop|store|market|supermarket|field|forest|city|road|stage|library|cafe|café|balcony|farm|factory|mountains?|countryside|desert|hall|concert|school|sea|lake|river|boat|car|bus|train)\b|\b(indoors|outdoors|outside|at home)\b/;
  function checklist(type, text, q) {
    const L = lc(text); const items = [];
    const add = (label, ok, tip) => items.push({ label, ok: !!ok, tip });
    if (type === "describe") {
      add("👥 Người: thấy ai, đoán quan hệ", PEOPLE.test(L), "In the picture, I can see two people, a man and a child. I think they are father and son.");
      add("📍 Họ đang ở đâu", PLACE.test(L), "They are in the park.");
      add("🏃 Đang làm gì (be + V-ing)", /\b(is|are)\s+\w+ing\b/.test(L), "They are playing football.");
      add("🙂 Trông họ thế nào (look + adj)", /\b(looks?|seems?)\s+(very\s+|really\s+|so\s+)?\w+/.test(L), "They look happy, so I think they are enjoying their time.");
      add("🪑 Đồ vật xung quanh", /\b(on the (table|wall|floor|ground)|behind (them|him|her)|next to|around (them|him|her)|in front of|beside)\b/.test(L), "Behind them, I can see some trees.");
      add("🏞️ Background", /background/.test(L), "In the background, I can see a mountain.");
      add("☀️ Thời tiết", /weather|sunny|raining|rainy|snow|cold|hot|warm|sun is shining/.test(L), "The weather is very nice. It is sunny and perfect for outdoor activities.");
      add("💬 Cảm xúc người nói", /(i (really )?(like|love) this (picture|photo))|reminds me/.test(L), "I really like this picture because it reminds me of my family.");
    } else if (type === "compare") {
      add("Mở đầu tổng quát 'The two pictures show…'", /the two (pictures|photos) show|both pictures/.test(L), "The two pictures show people learning in different places.");
      add("Tả bức tranh thứ nhất", /(first|1st) (picture|photo)/.test(L), "In the first picture, I can see…");
      add("Tả bức tranh thứ hai", /(second|2nd|other) (picture|photo)/.test(L), "In the second picture, I can see…");
      add("Hoạt động (be + V-ing)", /\b(is|are)\s+\w+ing\b/.test(L), "They are cooking in the kitchen.");
      add("Trạng thái / cảm xúc (look + adj)", /\b(looks?|seems?)\s+\w+/.test(L), "They look focused.");
      add("So sánh / đối chiếu", /\b(both|while|whereas|but|different|similar|however|on the other hand|in contrast)\b/.test(L), "Both pictures show…, but in the first picture…");
    } else if (type === "story") {
      const past = (text.match(PAST) || []).length;
      add("Thì quá khứ khi kể chuyện (≥ 4 động từ)", past >= 4, "Last year, I went to… We visited… I felt…");
      add("Mốc thời gian (Last…, … ago, When I was…)", /\b(last (year|month|week|summer|weekend)|\w+ (years?|months?|weeks?) ago|when i was|yesterday|in 20\d\d)\b/.test(L), "Last summer, I visited…");
      add("Diễn tả cảm xúc (felt / was + adj)", /\b(felt|was|were)\s+(so\s+|very\s+|really\s+|a little\s+)?(happy|excited|nervous|proud|relieved|surprised|worried|tired|stressed|delighted|grateful|scared|disappointed|upset|relaxed|confident|thrilled|sad|angry)/.test(L), "At first, I felt nervous, but then I felt proud of myself.");
      add("Trình tự (At first / Then / After that / In the end)", /\b(at first|then|after that|later|in the end|finally|before|after)\b/.test(L), "At first… Then… In the end…");
      add("Trả lời câu hỏi trừu tượng (ý kiến chung)", /\b(i think|in my opinion|i believe|people should|it is important|personally)\b/.test(L), "I think it is important because…");
      add("Lý do & ví dụ", /\b(because|for example|such as|since)\b/.test(L), "…because it helps people…");
      add("Câu kết", /(never forget|still in my mind|in short|to sum up|overall|one of the (best|most))/.test(L), "Although this happened a long time ago, everything is still in my mind.");
    } else {
      const isChoice = /\bprefer|\bor\b|which|compare|difference|advantages|better|rather/.test(lc(q));
      add("Trả lời trực tiếp câu hỏi", overlap(q, text) >= 0.2 || /^(yes|no|i |my |in my|both|people|some)/.test(L.trim()), "Nhắc lại từ khóa của câu hỏi trong câu đầu tiên.");
      add("Lý do (because / It is + adj / It helps…)", /\b(because|since|as it|it is|it's|they are|it helps|it allows|so i can)\b/.test(L), "…because it is fast and convenient.");
      add("Thông tin mở rộng (với ai, khi nào, ví dụ)", /\b(with (my|our)|at the weekend|every|usually|often|sometimes|for example|such as|in the (morning|evening)|after work)\b/.test(L), "I often do it with my friends at the weekend.");
      add("Ý kiến / cảm xúc cá nhân", /\b(i (really )?(like|love|enjoy|prefer)|for me|in my opinion|i think|i believe|personally)\b/.test(L), "For me, I prefer… / I really like it.");
      add("Từ nối phát triển ý (Besides, Also, However…)", /\b(besides|also|however|moreover|in addition|another|second|first)\b/.test(L), "Besides, … / However, …");
      if (isChoice && type === "opinion") add("Khung so sánh 'Both… Some people… For me…'", /\bboth\b|some people|most people|others/.test(L), "Both have different attractions, depending on people's interests.");
    }
    return items;
  }
  const TARGET = { 1: [40, 70], 2: [60, 110], 3: [60, 110], 4: [150, 260] };
  const SEC = { 1: 30, 2: 45, 3: 45, 4: 120 };
  function partCEFR(part, s) {
    if (part === 4) return ["A0", "A1/A2", "B1 (thấp)", "B1 (cao)", "B2 (thấp)", "B2 (cao)", "C"][Math.round(s)] || "—";
    if (part === 1) return ["A0", "A1", "A1+", "A2", "A2+", "B1 trở lên"][Math.round(s)] || "—";
    return ["A1", "A2 (thấp)", "A2 (cao)", "B1 (thấp)", "B1 (cao)", "B2 trở lên"][Math.round(s)] || "—";
  }

  function speaking({ part, qi = 0, question, text, seconds, model }) {
    text = String(text || "").trim();
    const W = wc(text), type = sType(part, qi);
    const max = part === 4 ? 6 : 5;
    const res = { type, words: W, max, criteria: [], checklist: [], strengths: [], fixes: [], errors: [], wpm: null };
    if (W < 4) { res.score = 0; res.cefr = partCEFR(part, 0); res.fixes.push("Câu trả lời quá ngắn hoặc chưa ghi nhận được lời nói. Hãy nói ít nhất 3–4 câu hoàn chỉnh."); res.criteria = [["Hoàn thành nhiệm vụ", 0], ["Độ dài & trôi chảy", 0], ["Ngữ pháp", 0], ["Từ vựng", 0], ["Liên kết", 0]]; return res; }
    const cl = checklist(type, text, question); res.checklist = cl;
    const clRatio = cl.filter(c => c.ok).length / cl.length;
    const rel = Math.max(overlap(question, text), model ? overlap(model, text) * 1.3 : 0);
    let task = clRatio * 5; if (rel < 0.1 && type !== "describe" && type !== "compare") task *= 0.6;
    const [tmin, tgood] = TARGET[part];
    let len = W >= tgood ? 5 : W >= tmin ? 3.5 + 1.5 * (W - tmin) / (tgood - tmin) : 3.5 * W / tmin;
    const fillers = (text.match(FILLERS) || []).length;
    if (seconds && seconds > 5) { res.wpm = Math.round(W / (seconds / 60)); if (res.wpm < 70) len -= 0.7; }
    const andSo = (lc(text).match(/\b(and|so)\b/g) || []).length, sents = Math.max(1, sentences(text).length);
    len -= Math.min(1.2, fillers * 0.25);
    const errs = findErrors(text); res.errors = errs;
    const cx = complexity(text);
    let gram = clamp(2.6 + Math.min(2.4, cx * 0.45) - errs.length * 0.7, 0, 5);
    if (type === "story" && (text.match(PAST) || []).length < 3) gram -= 1;
    const v = vocabInfo(text);
    let vocab = clamp(1.4 + (W >= 25 ? v.ttr * 2.2 : 1) + v.adv.length * 0.35 - v.basic.length * 0.3, 0, 5);
    const links = countLinkers(text);
    let coh = clamp(1 + links.length * 0.55 - (andSo / sents > 1.6 ? 0.8 : 0), 0, 5);
    len = clamp(len, 0, 5); gram = clamp(gram, 0, 5);
    const raw = task * 0.3 + len * 0.2 + gram * 0.2 + vocab * 0.15 + coh * 0.15;
    res.score = Math.round(clamp(raw * max / 5, 0, max) * 2) / 2;
    res.cefr = partCEFR(part, Math.round(res.score));
    res.criteria = [["Hoàn thành nhiệm vụ", task], ["Độ dài & trôi chảy", len], ["Ngữ pháp", gram], ["Từ vựng", vocab], ["Liên kết", coh]].map(([n, x]) => [n, Math.round(x * 10) / 10]);
    // feedback
    const okItems = cl.filter(c => c.ok), miss = cl.filter(c => !c.ok);
    if (okItems.length >= Math.ceil(cl.length * 0.7)) res.strengths.push(`Bao quát tốt yêu cầu (${okItems.length}/${cl.length} ý trong checklist).`);
    if (W >= tgood) res.strengths.push(`Độ dài tốt: ${W} từ (mục tiêu ${tmin}–${tgood}+ từ cho ${SEC[part]} giây).`);
    if (links.length >= 3) res.strengths.push("Dùng từ nối đa dạng: " + links.slice(0, 6).join(", ") + ".");
    if (v.adv.length >= 3) res.strengths.push("Từ vựng tốt: " + v.adv.slice(0, 6).join(", ") + ".");
    if (cx >= 3) res.strengths.push("Có cấu trúc câu phức (because/which/if/so sánh…).");
    miss.slice(0, 4).forEach(c => res.fixes.push(`Thiếu: ${c.label} → ví dụ: “${c.tip}”`));
    if (W < tmin) res.fixes.push(`Câu trả lời ngắn (${W} từ). Mục tiêu tối thiểu ${tmin} từ – áp dụng 5 mẹo phát triển ý: thêm lý do, thêm hoạt động thứ hai, thêm mặt đối lập, thêm thông tin cá nhân.`);
    if (andSo / sents > 1.6) res.fixes.push("Dùng 'and/so' quá nhiều – thay bằng Besides, Also, Therefore, However.");
    if (fillers >= 3) res.fixes.push(`Có ${fillers} từ đệm (um/uh). Hãy dùng câu "câu giờ" tự nhiên: "Well, let me think…", "That's an interesting question."`);
    if (res.wpm && res.wpm < 70) res.fixes.push(`Tốc độ nói chậm (${res.wpm} từ/phút). Mục tiêu 90–130 từ/phút: luyện nói theo bài mẫu bằng chức năng đọc karaoke.`);
    v.basic.forEach(b => res.fixes.push(`Lặp lại từ đơn giản “${b}” – thử thay bằng: ${BASIC[b]}.`));
    if (links.length < 2) res.fixes.push("Thiếu từ nối. Gợi ý: First, … Second, … Besides, … However, …");
    return res;
  }

  /* ----- Writing ----- */
  const SMS = /\b(u|r|ur|gonna|wanna|pls|plz|thx|coz|cuz|btw|lol)\b/gi;
  const CONTR = /\b\w+'(s|m|re|ve|ll|d|t)\b|\b\w+n't\b/gi;
  function wrRange(W, lo, hi) { if (W === 0) return 0; if (W >= lo && W <= hi) return 1; if (W < lo) return clamp(W / lo, 0, 1) * 0.85; return clamp(1 - (W - hi) / hi, 0.4, 1) * 0.9; }
  function writingShort(text, lo, hi, q) {
    const W = wc(text), L = lc(text); const r = { words: W, checklist: [], errors: findErrors(text), fixes: [], strengths: [] };
    const add = (label, ok, tip) => r.checklist.push({ label, ok: !!ok, tip });
    add(`Độ dài ${lo}–${hi} từ (hiện có ${W})`, W >= lo && W <= hi + 5, `Viết ${lo}–${hi} từ.`);
    add("Viết thành câu hoàn chỉnh (viết hoa, dấu chấm)", /^[A-Z]/.test(text.trim()) && /[.!?]\s*$/.test(text.trim()), "Bắt đầu bằng chữ hoa, kết thúc bằng dấu chấm.");
    add("Trả lời đúng câu hỏi", overlap(q, text) >= 0.15, "Nhắc lại từ khóa của câu hỏi.");
    add("Có lý do / giải thích", /\b(because|since|so|it is|it's|as|therefore|it helps)\b/.test(L), "…because it is…");
    add("Từ nối / mở rộng ý", countLinkers(text).length >= 2 || /\b(also|besides|sometimes|for example|such as)\b/.test(L), "Besides, … / For example, …");
    const sms = text.match(SMS) || []; if (sms.length) r.fixes.push("Không dùng chữ viết tắt kiểu tin nhắn: " + [...new Set(sms)].join(", "));
    const ratio = r.checklist.filter(c => c.ok).length / r.checklist.length;
    let s = 5 * (0.45 * wrRange(W, lo, hi) + 0.4 * ratio + 0.15 * clamp(complexity(text) / 3, 0, 1)) - r.errors.length * 0.4 - sms.length * 0.5;
    r.score = Math.round(clamp(s, 0, 5) * 2) / 2;
    r.checklist.filter(c => !c.ok).forEach(c => r.fixes.push("Cần: " + c.label + " → " + c.tip));
    return r;
  }
  function writingEmail(text, formal) {
    const W = wc(text), L = lc(text), T = text.trim(); const r = { words: W, checklist: [], errors: findErrors(text), fixes: [], strengths: [] };
    const add = (label, ok, tip) => r.checklist.push({ label, ok: !!ok, tip });
    const [lo, hi] = formal ? [120, 150] : [40, 50];
    add(`Độ dài ${lo}–${hi} từ (hiện có ${W})`, formal ? (W >= 115 && W <= 165) : (W >= 35 && W <= 65), formal ? "Viết 120–150 từ." : "Viết khoảng 50 từ.");
    if (formal) {
      add("Lời chào trang trọng (Dear Manager / Dear Sir or Madam)", /^dear\s+(sir|madam|manager|mr|mrs|ms|club|president|organiser|organizer|members?)/i.test(T), "Dear Manager,");
      add("Nêu mục đích viết (I am writing…)", /i am writing|i'm writing|i would like to (share|express|offer)/.test(L), "I am writing this email to share my opinions about…");
      add("Nhắc lại thông tin trong đề", /as stated|according to|i have been informed|i was informed|mentioned in|in the recent email/.test(L), "As stated in the email, our club is planning to…");
      add("Bày tỏ cảm xúc", /\b(delighted|excited|happy|pleased|disappointed|worried|sad|concerned|glad)\b/.test(L), "I was truly delighted to hear the news.");
      add("Ít nhất 2 gợi ý", (L.match(/\b(we should|i suggest|it is (a good idea|better|advisable) (for us )?to|i (highly )?recommend|first(ly)?,|second(ly)?,|another idea|in addition)\b/g) || []).length >= 2, "First, we should… Second, it is advisable for us to…");
      add("Gợi ý có lý do", /\b(because|as|since|so that|therefore|which)\b/.test(L), "…because it can attract more members.");
      add("Câu kết lịch sự", /look forward|hopefully|thank you for your|i hope/.test(L), "Thank you for your consideration. I look forward to hearing your thoughts.");
      add("Ký tên trang trọng (Best regards / Yours sincerely)", /(best regards|kind regards|yours sincerely|yours faithfully|regards)/.test(L), "Best regards,");
      const c = text.match(CONTR) || []; if (c.length > 1) r.fixes.push(`Email trang trọng nên tránh viết tắt (${[...new Set(c)].slice(0, 5).join(", ")}) → I am, do not, it is…`);
      r._contr = c.length;
    } else {
      add("Lời chào thân mật (Hi / Hello + tên)", /^(hi|hello|hey|dear)\b/i.test(T), "Hi Jane,");
      add("Câu hỏi thăm (How's it going? / How are you?)", /how('s| is) it going|how are you|hope you('re| are)|it's me/.test(L), "How's it going?");
      add("Nêu tình huống & cảm xúc", /\b(excited|happy|sad|delighted|worried|glad|surprised|disappointed)\b/.test(L), "I was so excited to hear that.");
      add("Gợi ý cho câu lạc bộ", /\b(should|let's|how about|why don't|i think we|i suggest)\b/.test(L), "I think we should…");
      add("Mời bạn trao đổi (What do you think? / Let's talk…)", /what do you think|let's (talk|meet|discuss)|let me know/.test(L), "What do you think? Let's talk about it later.");
      add("Lời kết thân mật (See you / Love / Best)", /(see you|love|best wishes|cheers|take care|best,)/.test(L), "See you soon,");
    }
    const sms = text.match(SMS) || []; if (sms.length) r.fixes.push("Không dùng chữ viết tắt kiểu tin nhắn: " + [...new Set(sms)].join(", "));
    const ratio = r.checklist.filter(c => c.ok).length / r.checklist.length;
    const v = vocabInfo(text);
    let s = 6 * (0.3 * wrRange(W, lo, hi) + 0.45 * ratio + 0.1 * clamp(complexity(text) / 4, 0, 1) + 0.15 * clamp(v.adv.length / 5, 0, 1)) - r.errors.length * 0.35 - sms.length * 0.5 - (formal ? Math.max(0, (r._contr || 0) - 1) * 0.2 : 0);
    r.score = Math.round(clamp(s, 0, 6) * 2) / 2;
    if (ratio >= 0.8) r.strengths.push("Bố cục email đầy đủ các thành phần cần thiết.");
    if (v.adv.length >= 3) r.strengths.push("Từ vựng tốt: " + v.adv.slice(0, 6).join(", ") + ".");
    r.checklist.filter(c => !c.ok).forEach(c => r.fixes.push("Cần: " + c.label + " → “" + c.tip + "”"));
    return r;
  }
  function writingP1(answers) {
    const items = answers.map(a => { const W = wc(a); return { words: W, ok: W >= 1 && W <= 5, long: W > 5 }; });
    const ok = items.filter(i => i.ok).length;
    return { items, score: Math.round(3 * ok / answers.length * 2) / 2, max: 3 };
  }

  /* ----- Claude API (tuỳ chọn) ----- */
  async function claude(kind, payload) {
    const key = Store.settings.apiKey; if (!key) throw new Error("Chưa nhập Claude API key trong mục Cài đặt.");
    const model = Store.settings.model || "claude-sonnet-5-5";
    const sys = `You are an experienced British Council Aptis examiner (Aptis General). Score the candidate strictly using the official Aptis ${kind} marking scale for the given part (task fulfilment, grammar range and accuracy, vocabulary range and accuracy, ${kind === "speaking" ? "pronunciation (infer only from transcript), fluency" : "punctuation and spelling"}, cohesion). The candidate is Vietnamese. Write ALL feedback in Vietnamese, concise and specific, quoting the candidate's own words when correcting them. Return ONLY valid JSON with this shape: {"score": number, "max": number, "cefr": string, "criteria": [["Tên tiêu chí", number 0-5]], "strengths": [string], "fixes": [string], "corrections": [{"wrong": string, "right": string, "why": string}], "improved": string}`;
    const body = { model, max_tokens: 1500, system: sys, messages: [{ role: "user", content: JSON.stringify(payload) }] };
    const r = await fetch("https://api.anthropic.com/v1/messages", { method: "POST", headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true" }, body: JSON.stringify(body) });
    if (!r.ok) throw new Error("Claude API lỗi " + r.status + ": " + (await r.text()).slice(0, 200));
    const j = await r.json(); const txt = j.content?.map(c => c.text || "").join("") || "";
    const m = txt.match(/\{[\s\S]*\}/); if (!m) throw new Error("Không đọc được kết quả JSON.");
    return JSON.parse(m[0]);
  }

  /* ----- Render helpers ----- */
  function highlight(text, errors) {
    let html = h(text);
    const L = LINKERS.slice().sort((a, b) => b.length - a.length);
    [...new Set(errors.map(e => e.match))].forEach(mt => { const e = errors.find(x => x.match === mt); const m = h(mt); html = html.split(/(<[^>]+>)/).map(seg => seg.startsWith("<") ? seg : seg.split(m).join(`<mark title="${h(e.msg).replace(/[a-z]/gi, c => "&#" + c.charCodeAt(0) + ";")}">${m}</mark>`)).join(""); });
    const re = new RegExp("\\b(" + L.map(x => x.replace(/ /g, "\\s+")).join("|") + ")\\b", "gi");
    return html.split(/(<[^>]+>)/).map(seg => seg.startsWith("<") ? seg : seg.replace(re, '<span class="lk">$1</span>')).join("");
  }
  function reportHTML(res, { color = "var(--speaking)", text = "", model = "", title = "Kết quả chấm điểm AI" } = {}) {
    const pct = res.max ? res.score / res.max * 100 : 0;
    return `<div class="card" style="--c:${color}">
      <div class="score-head"><div class="score-big" style="--p:${pct}"><span>${res.score}<small>/ ${res.max}</small></span></div>
        <div><h3 style="margin:0">${title}</h3><div class="row" style="margin-top:4px"><span class="pill">Trình độ ước lượng: <b>&nbsp;${h(res.cefr || "—")}</b></span>${res.words != null ? `<span class="pill">${res.words} từ</span>` : ""}${res.wpm ? `<span class="pill">${res.wpm} từ/phút</span>` : ""}${res.source ? `<span class="pill good">${h(res.source)}</span>` : `<span class="pill">Chấm tự động theo tiêu chí Aptis</span>`}</div></div></div>
      ${res.criteria?.length ? `<div style="margin-top:12px">${res.criteria.map(([n, v]) => `<div class="crit"><span>${h(n)}</span><div class="b"><i style="width:${clamp(v / 5, 0, 1) * 100}%"></i></div><b>${v}</b></div>`).join("")}</div>` : ""}
      ${res.checklist?.length ? `<h4>Checklist nội dung</h4><ul class="checklist">${res.checklist.map(c => `<li>${c.ok ? "✅" : "⬜"} ${h(c.label)}</li>`).join("")}</ul>` : ""}
      ${text ? `<h4>Bài của bạn <span class="muted small">(<mark>đỏ</mark> = lỗi cần sửa · <span class="lk">xanh</span> = từ nối)</span></h4><div class="transcript">${highlight(text, res.errors || [])}</div>` : ""}
      ${res.errors?.length ? `<h4>Lỗi ngữ pháp phát hiện</h4><ul class="fb">${res.errors.slice(0, 8).map(e => `<li><b>“${h(e.match)}”</b> – ${h(e.msg)}</li>`).join("")}</ul>` : ""}
      ${res.corrections?.length ? `<h4>Sửa lỗi</h4><ul class="fb">${res.corrections.map(c => `<li><s>${h(c.wrong)}</s> → <b>${h(c.right)}</b> <span class="muted">${h(c.why || "")}</span></li>`).join("")}</ul>` : ""}
      ${res.strengths?.length ? `<h4>👍 Điểm mạnh</h4><ul class="fb">${res.strengths.map(s => `<li>${h(s)}</li>`).join("")}</ul>` : ""}
      ${res.fixes?.length ? `<h4>🛠️ Cần cải thiện</h4><ul class="fb">${res.fixes.map(s => `<li>${h(s)}</li>`).join("")}</ul>` : ""}
      ${res.improved ? `<h4>✨ Bài viết lại gợi ý</h4><div class="model ex">${h(res.improved)}</div>` : ""}
      ${model ? `<details><summary>📌 Bài mẫu tham khảo (từ tài liệu ôn tập)</summary><div class="model"><p class="ex" style="margin:0;background:none;border:none;padding:0">${h(model)}</p><div class="row" style="margin-top:8px"><button class="btn sm blue" data-karaoke>▶ Xem minh họa đọc mẫu (karaoke)</button></div><div class="kara-box transcript" style="margin-top:8px;display:none"></div></div></details>` : ""}
    </div>`;
  }
  function bindReport(el, model) {
    const b = $("[data-karaoke]", el); if (b) b.onclick = () => { const box = $(".kara-box", el); box.style.display = "block"; karaoke(box, model); };
    attachSay(el);
  }
  return { speaking, writingShort, writingEmail, writingP1, claude, reportHTML, bindReport, findErrors, sType };
})();

/* ===== Nhận dạng giọng nói (Web Speech API) + ghi âm (MediaRecorder) ===== */
const Rec = {
  supported: !!(window.SpeechRecognition || window.webkitSpeechRecognition),
  start(onText) {
    this.final = ""; this.active = true; this.t0 = Date.now(); this.onText = onText;
    this._audio(); if (!this.supported) return;
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const r = new SR(); this.r = r; r.lang = Store.settings.srLang || "en-US"; r.continuous = true; r.interimResults = true;
    r.onresult = (e) => { let interim = ""; for (let i = e.resultIndex; i < e.results.length; i++) { const t = e.results[i][0].transcript; if (e.results[i].isFinal) this.final += t.trim() + ". "; else interim += t; } this.onText && this.onText(this.final, interim); };
    r.onerror = (e) => { if (e.error === "not-allowed") { toast("Bạn cần cho phép trình duyệt dùng micro."); this.active = false; } };
    r.onend = () => { if (this.active) { try { r.start(); } catch (e) {} } };
    try { r.start(); } catch (e) {}
  },
  async _audio() {
    this.blobUrl = null;
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.chunks = []; this.mr = new MediaRecorder(this.stream);
      this.mr.ondataavailable = e => this.chunks.push(e.data);
      this.mr.onstop = () => { this.blobUrl = URL.createObjectURL(new Blob(this.chunks, { type: this.mr.mimeType || "audio/webm" })); this.onAudio && this.onAudio(this.blobUrl); this.stream.getTracks().forEach(t => t.stop()); };
      this.mr.start();
    } catch (e) { /* không có micro: vẫn cho phép gõ câu trả lời */ }
  },
  stop() {
    this.active = false; this.seconds = (Date.now() - this.t0) / 1000;
    try { this.r && this.r.stop(); } catch (e) {}
    try { this.mr && this.mr.state !== "inactive" && this.mr.stop(); } catch (e) {}
    return this.final.trim();
  }
};
