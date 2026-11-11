/* ===== Writing: 32 đề hoàn chỉnh, phòng thi 50 phút, chấm tự động + bài mẫu ===== */
route("writing", (view, args) => {
  if (args[0] === "test") return wrRunner(view, WRITING_TESTS.find(t => t.id === args[1]));
  if (args[0] === "lesson") return lessonPage(view, "writing", args[1]);
  crumbs([["Tổng quan", "#/"], ["Writing", ""]]);
  const done = WRITING_TESTS.filter(t => Store.data.results[t.id]).length;
  const icons = { art: "🎨", book: "📚", business: "💼", car: "🚗", college: "🎓", community: "🏘️", computer: "💻", debate: "🗣️", english: "🇬🇧", fashion: "👗", film: "🎬", fitness: "🏋️", food: "🍲", home: "🏠", museum: "🏛️", music: "🎵", nature: "🌿", photography: "📷", power: "💪", reading: "📖", science: "🔬", social: "🤝", technology: "📱", television: "📺", travel: "✈️", walking: "🚶" };
  const ic = t => icons[t.title.toLowerCase().split(" ")[0]] || "✍️";
  view.innerHTML = `
  <div class="page-head t-writing"><div class="ico tinted">✍️</div><div><h1>Writing – 32 đề có đáp án mẫu</h1>
  <p>Mỗi đề gồm đủ 4 phần như đề thật (5 tin nhắn · form 20–30 từ · 3 câu chat 30–40 từ · 2 email). Bài làm được đếm từ, kiểm tra bố cục, phát hiện lỗi và đối chiếu bài mẫu từ tài liệu "Đáp án 32 đề Aptis Writing".</p></div></div>
  <div class="sec-title"><h2>📘 Bài học</h2></div>
  <div class="lesson-list t-writing">${LESSONS.filter(l => l.skill === "writing").map(l => `<a href="#/writing/lesson/${l.id}"><span class="em">${l.icon}</span><span><b>${h(l.title)}</b></span><span class="done">${Store.data.lessons[l.id] ? '<span class="pill good">✓ Đã học</span>' : ""}</span></a>`).join("")}</div>
  <div class="sec-title"><h2>📝 32 đề Writing</h2><span class="pill">${done}/32 đã làm</span></div>
  <div class="tiles t-writing">${WRITING_TESTS.map(t => { const r = Store.data.results[t.id]; return `<a class="tile" href="#/writing/test/${t.id}"><div class="thumb">${ic(t)}</div><div class="tb"><b>${h(t.id.replace("W", "Đề "))}: ${h(t.title)}</b><small>${h(t.p2.q.slice(0, 48))}…</small><br>${r ? `<span class="pill good">Tốt nhất ${r.best}/50 · ${cefrOf("writing", r.best)}</span>` : `<span class="pill">Chưa làm</span>`}</div></a>`; }).join("")}</div>`;
});

function wrRunner(view, t) {
  if (!t) return go("#/writing");
  crumbs([["Tổng quan", "#/"], ["Writing", "#/writing"], [t.title, ""]]);
  const club = t.title.replace(/\s*\(.*\)/, "");
  const st = { p1: t.p1.map(() => ""), p2: "", p3: t.p3.map(() => ""), v: 0, e1: "", e2: "", res: {} };
  const saved = Store.data.drafts?.[t.id]; if (saved) Object.assign(st, saved, { res: {} });
  const persist = () => { Store.data.drafts ||= {}; Store.data.drafts[t.id] = { p1: st.p1, p2: st.p2, p3: st.p3, v: st.v, e1: st.e1, e2: st.e2 }; Store.save(); };
  let timer; onLeave(() => timer && timer.stop());
  view.innerHTML = `<div class="exam-bar t-writing"><b>✍️ ${h(t.title)}</b><span class="timer" id="tm">50:00</span><button class="btn sm" id="tStart">▶ Bấm giờ 50 phút</button><span class="spacer"></span><button class="btn sm primary" id="submitAll">📊 Nộp bài & chấm toàn bộ</button></div>
  <div class="tabs" id="tabs">${["Part 1", "Part 2", "Part 3", "Part 4", "Kết quả"].map((x, i) => `<button data-t="${i}" class="${i ? "" : "on"}">${x}</button>`).join("")}</div><div id="pane"></div>`;
  $("#tStart").onclick = () => { timer && timer.stop(); timer = countdown(50 * 60, l => { $("#tm").textContent = fmtTime(l); $("#tm").classList.toggle("low", l < 300); }, () => { toast("Hết giờ! Hệ thống tự chấm bài."); submitAll(); }); $("#tStart").textContent = "↺ Bấm lại"; };
  $$("#tabs button").forEach(b => b.onclick = () => tab(+b.dataset.t));
  $("#submitAll").onclick = () => submitAll();
  const wcLine = (txt, lo, hi) => { const n = wc(txt); return `<div class="wc ${n >= lo && n <= hi ? "ok" : n > 0 ? "bad" : ""}">${n} từ · yêu cầu ${lo}–${hi}</div>`; };
  const bindWC = (ta, lo, hi, set) => { ta.oninput = () => { set(ta.value); persist(); ta.nextElementSibling.outerHTML = wcLine(ta.value, lo, hi); }; };

  function tab(i) {
    $$("#tabs button").forEach(b => b.classList.toggle("on", +b.dataset.t === i));
    const P = $("#pane");
    if (i === 0) {
      P.innerHTML = `<div class="card"><p><b>Part 1.</b> You want to join the ${h(club)}. You have 5 messages from a member of the club. Write short answers (1–5 words) to each message. <span class="pill">⏱ 3 phút</span></p>
      ${t.p1.map((q, k) => `<div class="p1row"><div>💬 ${h(q.q)}</div><div><input type="text" data-k="${k}" value="${h(st.p1[k])}" placeholder="1–5 words"><div class="small muted model-a" style="display:${st.res.p1 ? "block" : "none"}">Gợi ý: ${h(q.a)}</div></div></div>`).join("")}
      <div class="row" style="margin-top:12px"><button class="btn primary" id="chk">✔ Chấm Part 1</button></div><div id="r"></div></div>`;
      $$("input[data-k]", P).forEach(inp => inp.oninput = () => { st.p1[+inp.dataset.k] = inp.value; persist(); });
      $("#chk").onclick = () => { st.res.p1 = Scorer.writingP1(st.p1); showP1(); };
      if (st.res.p1) showP1();
      function showP1() { const r = st.res.p1; $$(".model-a", P).forEach(x => x.style.display = "block");
        $("#r").innerHTML = `<div class="callout" style="margin-top:12px"><b>Điểm Part 1: ${r.score}/3</b><ul class="fb">${r.items.map((x, k) => `<li>${x.ok ? "✅" : x.words === 0 ? "⬜ Chưa trả lời" : "⚠️ Quá " + x.words + " từ (tối đa 5)"} – ${h(t.p1[k].q)}</li>`).join("")}</ul></div>`; }
    }
    if (i === 1) {
      P.innerHTML = `<div class="card"><p><b>Part 2.</b> You are a new member of the ${h(club)}. Fill in the form. Write in sentences. Use 20–30 words. <span class="pill">⏱ 7 phút</span></p>
      <div class="wr-email" style="border-left-color:var(--writing)"><b>📋 ${h(t.p2.q)}</b></div><textarea id="ta">${h(st.p2)}</textarea>${wcLine(st.p2, 20, 30)}
      <div class="row" style="margin-top:8px"><button class="btn primary" id="chk">🤖 Chấm Part 2</button>${claudeBtn()}</div><div id="r"></div></div>`;
      bindWC($("#ta"), 20, 30, v => st.p2 = v);
      $("#chk").onclick = () => { st.res.p2 = Scorer.writingShort(st.p2, 20, 30, t.p2.q); st.res.p2.max = 5; st.res.p2.cefr = lvl(st.res.p2.score, 5); rep($("#r"), st.res.p2, st.p2, t.p2.a); };
      bindClaude("Part 2 form (20-30 words)", t.p2.q, () => st.p2, 5, r => { st.res.p2 = r; rep($("#r"), r, st.p2, t.p2.a); });
      if (st.res.p2) rep($("#r"), st.res.p2, st.p2, t.p2.a);
    }
    if (i === 2) {
      P.innerHTML = `<div class="card"><p><b>Part 3.</b> You are communicating with other members of the ${h(club)} in the chat room. Reply to their questions. Write in sentences. Use 30–40 words per answer. <span class="pill">⏱ 10 phút</span></p>
      ${t.p3.map((q, k) => `<div class="chat-q"><span class="avatar" style="background:var(--writing)">${h(q.who[0])}</span><div class="bubble"><b>${h(q.who)}:</b> ${h(q.q)}</div></div><textarea data-k="${k}">${h(st.p3[k])}</textarea>${wcLine(st.p3[k], 30, 40)}<div id="r${k}"></div>`).join("")}
      <div class="row" style="margin-top:8px"><button class="btn primary" id="chk">🤖 Chấm Part 3</button></div></div>`;
      $$("textarea[data-k]", P).forEach(ta => bindWC(ta, 30, 40, v => st.p3[+ta.dataset.k] = v));
      $("#chk").onclick = () => { st.res.p3 = t.p3.map((q, k) => { const r = Scorer.writingShort(st.p3[k], 30, 40, q.q); r.max = 5; r.cefr = lvl(r.score, 5); return r; }); showP3(); };
      if (st.res.p3) showP3();
      function showP3() { st.res.p3.forEach((r, k) => rep($("#r" + k), r, st.p3[k], t.p3[k].a, `Câu ${t.p3[k].who}`)); }
    }
    if (i === 3) {
      const V = t.p4[st.v];
      P.innerHTML = `<div class="card">${t.p4.length > 1 ? `<div class="row" style="margin-bottom:8px"><span class="small muted">Đề có ${t.p4.length} phiên bản Part 4:</span>${t.p4.map((x, k) => `<button class="btn sm ${k === st.v ? "primary" : ""}" data-v="${k}">Version ${k + 1}</button>`).join("")}</div>` : ""}
      <p><b>Part 4.</b> ${h(V.intro.replace(/^Part 4[^:]*:\s*/, ""))} <span class="pill">⏱ 30 phút</span></p>
      <div class="wr-email">${h(V.email.join("\n"))}</div>
      <h4>📨 Task 1: ${h(V.tasks[0].task)}</h4><textarea id="e1" style="min-height:130px">${h(st.e1)}</textarea>${wcLine(st.e1, 40, 50)}<div id="r1"></div>
      <h4>🏛️ Task 2: ${h(V.tasks[1].task)}</h4><textarea id="e2" style="min-height:260px">${h(st.e2)}</textarea>${wcLine(st.e2, 120, 150)}<div id="r2"></div>
      <div class="row" style="margin-top:8px"><button class="btn primary" id="chk">🤖 Chấm Part 4</button>${claudeBtn()}</div></div>`;
      $$("[data-v]", P).forEach(b => b.onclick = () => { st.v = +b.dataset.v; persist(); tab(3); });
      bindWC($("#e1"), 40, 50, v => st.e1 = v); bindWC($("#e2"), 120, 150, v => st.e2 = v);
      const show4 = () => { rep($("#r1"), st.res.e1, st.e1, V.tasks[0].sample, "Email thân mật"); rep($("#r2"), st.res.e2, st.e2, V.tasks[1].sample, "Email trang trọng"); };
      $("#chk").onclick = () => { st.res.e1 = Scorer.writingEmail(st.e1, false); st.res.e2 = Scorer.writingEmail(st.e2, true); [st.res.e1, st.res.e2].forEach(r => { r.max = 6; r.cefr = lvl(r.score, 6); }); show4(); };
      bindClaude("Part 4: informal email (~50 words) and formal email (120-150 words)", V.email.join("\n") + "\nTasks: " + V.tasks.map(x => x.task).join(" | "), () => "INFORMAL EMAIL:\n" + st.e1 + "\n\nFORMAL EMAIL:\n" + st.e2, 6, r => { $("#r2").innerHTML = ""; rep($("#r1"), r, st.e1 + "\n\n" + st.e2, V.tasks[0].sample + "\n\n" + V.tasks[1].sample, "Part 4 – Claude"); });
      if (st.res.e1) show4();
    }
    if (i === 4) summaryPane();
    attachSay(P);
  }
  const lvl = (s, max) => { const r = s / max; return r >= .9 ? "B2 trở lên" : r >= .7 ? "B1" : r >= .45 ? "A2" : r > 0 ? "A1" : "A0"; };
  function claudeBtn() { return Store.settings.apiKey ? `<button class="btn" id="cl">✨ Chấm bằng Claude</button>` : ""; }
  function bindClaude(part, task, getText, max, done) {
    const b = $("#cl"); if (!b) return;
    b.onclick = async () => { b.disabled = true; b.textContent = "⏳ Đang chấm…"; try { const r = await Scorer.claude("writing", { part, task, candidate_answer: getText(), max_score: max }); r.source = "Chấm bởi Claude"; r.words = wc(getText()); done(r); } catch (e) { toast(e.message, 5000); } b.disabled = false; b.textContent = "✨ Chấm bằng Claude"; };
  }
  function rep(el, r, text, model, title) {
    if (!r) return; if (!wc(text)) { el.innerHTML = `<div class="small muted">⬜ Chưa có bài làm cho phần này. <details style="margin-top:6px"><summary>📌 Xem bài mẫu</summary><p class="ex">${h(model)}</p></details></div>`; attachSay(el); return; }
    el.innerHTML = Scorer.reportHTML(r, { color: "var(--writing)", text, model, title: title || "Kết quả chấm" });
    Scorer.bindReport(el, model); $$("details", el).forEach(d => d.open = false);
  }
  function submitAll() {
    timer && timer.stop();
    st.res.p1 = Scorer.writingP1(st.p1);
    st.res.p2 = Scorer.writingShort(st.p2, 20, 30, t.p2.q); st.res.p2.max = 5; st.res.p2.cefr = lvl(st.res.p2.score, 5);
    st.res.p3 = t.p3.map((q, k) => { const r = Scorer.writingShort(st.p3[k], 30, 40, q.q); r.max = 5; r.cefr = lvl(r.score, 5); return r; });
    st.res.e1 = Scorer.writingEmail(st.e1, false); st.res.e2 = Scorer.writingEmail(st.e2, true);
    [st.res.e1, st.res.e2].forEach(r => { r.max = 6; r.cefr = lvl(r.score, 6); });
    tab(4);
  }
  function summaryPane() {
    const P = $("#pane");
    if (!st.res.e2) { P.innerHTML = `<div class="card"><p>Bấm <b>📊 Nộp bài & chấm toàn bộ</b> để xem điểm tổng.</p></div>`; return; }
    const p1 = st.res.p1.score / 3, p2 = st.res.p2.score / 5, p3 = st.res.p3.reduce((a, r) => a + r.score, 0) / 15, p4 = (st.res.e1.score * 0.35 + st.res.e2.score * 0.65) / 6;
    const scale = toScale(p1 * 0.1 + p2 * 0.2 + p3 * 0.3 + p4 * 0.4), lv = cefrOf("writing", scale);
    Store.result(t.id, { skill: "writing", title: t.title, scale, cefr: lv });
    P.innerHTML = `<div class="card t-writing"><div class="result-banner"><div class="score-big" style="--p:${scale * 2};--c:var(--writing)"><span>${scale}<small>/ 50</small></span></div>
      <div><h2 style="margin:0">Kết quả ${h(t.title)}</h2><p class="muted" style="margin:.2em 0">Điểm ước lượng theo trọng số Part 1 (10%), Part 2 (20%), Part 3 (30%), Part 4 (40%).</p><span class="pill good">Trình độ ước lượng: ${lv}</span> <span class="pill">Ngưỡng B1 = 26 · B2 = 40</span></div></div>
      <table class="tbl" style="margin-top:12px"><thead><tr><th>Phần</th><th>Điểm</th><th>Ghi chú</th></tr></thead><tbody>
      <tr><td>Part 1</td><td><b>${st.res.p1.score}</b>/3</td><td>${st.res.p1.items.filter(x => x.ok).length}/5 câu đạt yêu cầu 1–5 từ</td></tr>
      <tr><td>Part 2</td><td><b>${st.res.p2.score}</b>/5</td><td>${st.res.p2.words} từ</td></tr>
      <tr><td>Part 3</td><td><b>${(st.res.p3.reduce((a, r) => a + r.score, 0) / 3).toFixed(1)}</b>/5</td><td>${st.res.p3.map(r => r.words + " từ").join(" · ")}</td></tr>
      <tr><td>Part 4 – thân mật</td><td><b>${st.res.e1.score}</b>/6</td><td>${st.res.e1.words} từ</td></tr>
      <tr><td>Part 4 – trang trọng</td><td><b>${st.res.e2.score}</b>/6</td><td>${st.res.e2.words} từ</td></tr></tbody></table>
      <p class="small muted">Mở từng tab Part để xem nhận xét chi tiết và bài mẫu. Bài làm được lưu tự động trên trình duyệt.</p>
      <div class="row"><button class="btn" id="clear">🗑 Xoá bài làm, làm lại</button><a class="btn" href="#/writing">← Danh sách đề</a></div></div>`;
    $("#clear").onclick = () => { Object.assign(st, { p1: t.p1.map(() => ""), p2: "", p3: t.p3.map(() => ""), e1: "", e2: "", res: {} }); persist(); tab(0); };
  }
  tab(0);
}
