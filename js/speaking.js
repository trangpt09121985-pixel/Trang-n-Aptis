/* ===== Speaking: trang chính, phòng thi mô phỏng, chấm điểm AI ===== */
const SP_INSTR = {
  1: "Part 1: In this part, I'm going to ask you three short questions about yourself and your interests. You will have 30 seconds to reply to each question.",
  2: "Part 2: In this part, I'm going to ask you to describe a picture. Then I will ask you two questions about it. You will have 45 seconds for each response.",
  3: "Part 3: In this part, I'm going to ask you to compare two pictures, and I will then ask you two questions about them. You will have 45 seconds for each response.",
  4: "Part 4: In this part, I'm going to show you a picture and ask you three questions. You will have one minute to think about your answers before you start speaking. You will have two minutes to answer all three questions."
};
const P4_ICON = ["🌟", "🎁", "⏳", "🧭", "🗓️", "🌍", "🤝", "🔄", "🧗", "🎵", "🏅", "👥", "📚", "🤗"];

function spItems(test) {
  const items = [];
  test.p1.forEach((q, i) => items.push({ part: 1, qi: i, q: q.q, a: q.a, sup: q.sup, sec: 30 }));
  test.p2.qs.forEach((q, i) => items.push({ part: 2, qi: i, q: q.q, a: q.a, sup: q.sup, sec: 45, img: test.p2.img }));
  test.p3.qs.forEach((q, i) => items.push({ part: 3, qi: i, q: q.q, a: q.a, sup: q.sup, sec: 45, img: test.p3.img }));
  const p4 = test.p4.qs;
  items.push({ part: 4, qi: 0, q: p4.map(x => x.q).join(" "), qs: p4.map(x => x.q), a: p4.map(x => x.a).join(" "), sec: 120, prep: 60, icon: P4_ICON[(parseInt(test.id.slice(1)) - 1) % P4_ICON.length] });
  return items;
}

route("speaking", (view, args) => {
  if (args[0] === "test") return spRunner(view, SPEAKING_TESTS.find(t => t.id === args[1]));
  if (args[0] === "p3") { const s = SPEAKING_P3_EXTRA.find(t => t.id === args[1]); return spRunner(view, s, s.qs.map((q, i) => ({ part: 3, qi: i, q: q.q, a: q.a, sup: q.sup, sec: 45, img: s.img }))); }
  if (args[0] === "lesson") return lessonPage(view, "speaking", args[1]);
  if (args[0] === "free") return spFree(view);
  crumbs([["Tổng quan", "#/"], ["Speaking", ""]]);
  const done = SPEAKING_TESTS.filter(t => Store.data.results[t.id]).length;
  view.innerHTML = `
  <div class="page-head t-speaking"><div class="ico tinted">🎤</div><div><h1>Speaking – Luyện nói & chấm điểm AI</h1>
  <p>14 đề hoàn chỉnh (4 phần, 42 hình ảnh), 4 bộ Part 3 bổ sung, 7 bài học từ tài liệu ôn tập. Ghi âm trực tiếp, chuyển giọng nói thành văn bản và chấm theo tiêu chí Aptis.</p></div></div>
  <div class="card t-speaking" style="border-left:4px solid var(--speaking)">
    <div class="row"><b>🤖 Cách hệ thống chấm Speaking hoạt động</b><span class="spacer"></span><a class="btn sm" href="#/speaking/free">🎯 Luyện tự do 1 câu hỏi bất kỳ</a></div>
    <p class="small" style="margin:.4em 0 0">① Máy đọc câu hỏi như phòng thi thật → ② bạn bấm <b>Bắt đầu nói</b>, đồng hồ đếm ngược 30″/45″/2′ (Part 4 có 1′ chuẩn bị) → ③ trình duyệt ghi âm và chuyển lời nói thành chữ (Chrome/Edge) – bạn có thể sửa hoặc gõ trực tiếp → ④ bấm <b>Chấm điểm AI</b>: hệ thống phân tích 5 tiêu chí (nhiệm vụ, độ dài/trôi chảy, ngữ pháp, từ vựng, liên kết), đối chiếu checklist 8 bước tả tranh, chỉ ra lỗi và gợi ý câu sửa → ⑤ nghe lại giọng mình và xem <b>bài mẫu đọc karaoke</b>. Nếu đã nhập Claude API key ở <a href="#/settings">Cài đặt</a>, có thể chấm thêm bằng Claude.</p>
  </div>
  <div class="sec-title"><h2>📘 Bài học</h2></div>
  <div class="lesson-list t-speaking">${LESSONS.filter(l => l.skill === "speaking").map(l => `<a href="#/speaking/lesson/${l.id}"><span class="em">${l.icon}</span><span><b>${h(l.title)}</b></span><span class="done">${Store.data.lessons[l.id] ? '<span class="pill good">✓ Đã học</span>' : ""}</span></a>`).join("")}</div>
  <div class="sec-title"><h2>📝 14 đề Speaking hoàn chỉnh</h2><span class="pill">${done}/14 đã làm</span></div>
  <div class="tiles t-speaking">${SPEAKING_TESTS.map(t => { const r = Store.data.results[t.id]; return `<a class="tile" href="#/speaking/test/${t.id}"><div class="thumb" style="background-image:url('${t.p2.img[0]}')"></div><div class="tb"><b>${h(t.title)}</b><small>P1: ${h(t.p1[0].q.slice(0, 34))}…</small><br>${r ? `<span class="pill good">Tốt nhất ${r.best}/50 · ${cefrOf("speaking", r.best)}</span>` : `<span class="pill">Chưa làm</span>`}</div></a>`; }).join("")}</div>
  <div class="sec-title"><h2>🖼️ Part 3 bổ sung (so sánh 2 tranh)</h2></div>
  <div class="tiles t-speaking">${SPEAKING_P3_EXTRA.map(t => `<a class="tile" href="#/speaking/p3/${t.id}"><div class="thumb" style="background-image:url('${t.img[0]}')"></div><div class="tb"><b>${h(t.title)}</b><small>3 câu · 45 giây/câu</small></div></a>`).join("")}</div>`;
});

function spRunner(view, test, itemsOverride) {
  if (!test) return go("#/speaking");
  const items = itemsOverride || spItems(test);
  const full = !itemsOverride;
  crumbs([["Tổng quan", "#/"], ["Speaking", "#/speaking"], [test.title, ""]]);
  const state = { i: 0, answers: items.map(() => ({ text: "", res: null, audio: null, seconds: null })), auto: false };
  let timer = null;
  onLeave(() => { timer && timer.stop(); if (Rec.active) Rec.stop(); });

  view.innerHTML = `<div class="exam-bar t-speaking"><b>🎤 ${h(test.title)}</b><div class="qnav" id="qnav"></div><span class="spacer"></span>
    <label class="small row" style="gap:6px"><input type="checkbox" id="autoNext"> Thi liên tục (tự chuyển câu)</label>
    <button class="btn sm primary" id="finishBtn">📊 Kết quả toàn bài</button></div><div id="stage"></div><div id="report"></div>`;
  $("#autoNext").onchange = e => state.auto = e.target.checked;
  $("#finishBtn").onclick = () => summary();

  function nav() {
    let html = "", last = 0;
    items.forEach((it, k) => { if (it.part !== last) { html += `<button class="sep">P${it.part}</button>`; last = it.part; }
      html += `<button class="${k === state.i ? "cur" : state.answers[k].res ? "done" : ""}" data-k="${k}">${it.part === 4 ? "★" : it.qi + 1}</button>`; });
    $("#qnav").innerHTML = html;
    $$("#qnav button[data-k]").forEach(b => b.onclick = () => { stopAll(); state.i = +b.dataset.k; show(); });
  }
  function stopAll() { timer && timer.stop(); if (Rec.active) { const t = Rec.stop(); const a = state.answers[state.i]; if (t && !a.text) a.text = t; } TTS.stop(); }

  function show() {
    nav(); $("#report").innerHTML = "";
    const it = items[state.i], ans = state.answers[state.i];
    const imgs = it.img ? `<div class="sp-imgs ${it.img.length > 1 ? "two" : ""}">${it.img.map(s => `<img src="${s}" alt="Speaking picture">`).join("")}</div>`
      : `<div class="sp-noimg tinted">${it.part === 1 ? "🙋" : it.icon || "🌟"}<small>${it.part === 1 ? "Personal information" : "Part 4 – personal experience & opinion"}</small></div>`;
    const qHtml = it.part === 4 ? `<ol class="qbox" style="font-size:16.5px;padding-left:20px">${it.qs.map(q => `<li>${h(q)}</li>`).join("")}</ol>` : `<div class="qbox">${h(it.q)} ${it.sup ? '<span class="tag-sup" title="Câu hỏi giáo viên bổ sung để đủ cấu trúc đề">GV bổ sung</span>' : ""}</div>`;
    $("#stage").innerHTML = `<div class="card t-speaking"><div class="sp-stage"><div>${imgs}</div><div>
      <span class="part-tag">Part ${it.part}${it.part < 4 ? ` · Câu ${it.qi + 1}` : ""}</span> <span class="pill">⏱ ${it.prep ? "1′ chuẩn bị + " : ""}${it.sec >= 60 ? it.sec / 60 + " phút" : it.sec + " giây"}</span>
      <p class="small muted" style="margin:8px 0 2px">${h(SP_INSTR[it.part])}</p>
      ${qHtml}
      <div class="row"><button class="btn sm" id="hearQ">🔊 Nghe câu hỏi</button>${it.part === 4 ? "" : ""}</div>
      <div class="phase" id="phase"><div class="clock" id="clock">${fmtTime(it.prep || it.sec)}</div><div style="flex:1"><div class="small" id="phaseLbl">Sẵn sàng. Bấm “Bắt đầu” khi bạn sẵn sàng.</div><div class="bar"><i id="pbar"></i></div></div></div>
      ${it.prep ? `<textarea id="notes" placeholder="Ghi chú nhanh trong 1 phút chuẩn bị (từ khóa cho 3 câu hỏi)…" style="min-height:70px"></textarea>` : ""}
      <div class="row" style="margin-top:10px"><button class="btn rec" id="startBtn">🎙️ ${it.prep ? "Bắt đầu chuẩn bị" : "Bắt đầu nói"}</button><button class="btn" id="stopBtn" disabled>⏹ Dừng</button>
        <span class="spacer"></span><button class="btn sm ghost" id="prevBtn">← Câu trước</button><button class="btn sm" id="nextBtn">Câu tiếp →</button></div>
    </div></div>
    <h4 style="margin-top:16px">📝 Lời nói được chuyển thành chữ <span class="muted small">(có thể sửa lại cho đúng điều bạn đã nói, hoặc gõ câu trả lời nếu không dùng micro)</span></h4>
    <textarea id="ans" placeholder="${Rec.supported ? "Bấm Bắt đầu nói – lời nói sẽ hiện ở đây…" : "Trình duyệt này không hỗ trợ nhận dạng giọng nói – hãy gõ câu trả lời (khuyên dùng Chrome hoặc Edge để nói)."}">${h(ans.text)}</textarea>
    <div class="wc" id="wcount"></div>
    <div id="audioBox"></div>
    <div class="row" style="margin-top:8px"><button class="btn primary" id="scoreBtn">🤖 Chấm điểm AI</button>${Store.settings.apiKey ? `<button class="btn" id="claudeBtn">✨ Chấm bằng Claude</button>` : ""}<button class="btn ghost" id="modelBtn">📌 Xem bài mẫu</button></div></div>`;
    const ta = $("#ans");
    const upd = () => { ans.text = ta.value; $("#wcount").textContent = wc(ta.value) + " từ"; };
    ta.oninput = upd; upd();
    if (ans.audio) $("#audioBox").innerHTML = `<audio controls src="${ans.audio}" style="width:100%;margin-top:8px"></audio>`;
    if (ans.res) showReport();
    $("#hearQ").onclick = () => { TTS.stop(); TTS.speak(it.part === 4 ? it.qs.join(" ") : it.q, { gender: "W" }); };
    $("#prevBtn").onclick = () => { if (state.i > 0) { stopAll(); state.i--; show(); } };
    $("#nextBtn").onclick = () => { stopAll(); if (state.i < items.length - 1) { state.i++; show(); } else summary(); };
    $("#modelBtn").onclick = () => { ans._showModel = true; showReport(true); };
    $("#scoreBtn").onclick = () => { stopAll(); doScore(); };
    if ($("#claudeBtn")) $("#claudeBtn").onclick = async () => {
      stopAll(); const b = $("#claudeBtn"); b.disabled = true; b.textContent = "⏳ Claude đang chấm…";
      try { const r = await Scorer.claude("speaking", { part: it.part, question: it.part === 4 ? it.qs : it.q, time_limit_seconds: it.sec, candidate_transcript: ans.text, max_score: it.part === 4 ? 6 : 5 });
        r.source = "Chấm bởi Claude"; r.words = wc(ans.text); ans.res = r; showReport(); nav(); }
      catch (e) { toast(e.message, 5000); } b.disabled = false; b.textContent = "✨ Chấm bằng Claude";
    };
    $("#startBtn").onclick = () => start(it, ans);
    $("#stopBtn").onclick = () => finishRec(it, ans);
    setTimeout(() => TTS.speak(it.part === 4 ? it.qs.join(" ") : it.q, { gender: "W" }), 350);
  }

  function start(it, ans) {
    TTS.stop(); $("#startBtn").disabled = true; $("#stopBtn").disabled = false;
    const ph = $("#phase"), lbl = $("#phaseLbl"), bar = $("#pbar"), clock = $("#clock");
    const speak = () => {
      ph.classList.remove("prep"); lbl.innerHTML = `<span class="rec-dot"></span> Đang ghi âm – hãy nói bằng tiếng Anh…`;
      Rec.onAudio = (url) => { ans.audio = url; $("#audioBox") && ($("#audioBox").innerHTML = `<audio controls src="${url}" style="width:100%;margin-top:8px"></audio>`); };
      Rec.start((fin, interim) => { const ta = $("#ans"); if (!ta) return; ta.value = (fin + interim).trim(); ans.text = ta.value; $("#wcount").textContent = wc(ta.value) + " từ"; });
      timer = countdown(it.sec, l => { clock.textContent = fmtTime(l); bar.style.width = (100 - l / it.sec * 100) + "%"; clock.style.color = l < 6 ? "var(--bad)" : ""; }, () => finishRec(it, ans));
    };
    if (it.prep) {
      ph.classList.add("prep"); lbl.textContent = "⏳ Thời gian chuẩn bị (1 phút) – ghi chú từ khóa cho 3 câu hỏi.";
      $("#stopBtn").textContent = "⏭ Bỏ qua chuẩn bị";
      $("#stopBtn").onclick = () => { timer.stop(); $("#stopBtn").textContent = "⏹ Dừng"; $("#stopBtn").onclick = () => finishRec(it, ans); speak(); };
      timer = countdown(it.prep, l => { clock.textContent = fmtTime(l); bar.style.width = (100 - l / it.prep * 100) + "%"; }, () => { $("#stopBtn").textContent = "⏹ Dừng"; $("#stopBtn").onclick = () => finishRec(it, ans); speak(); });
    } else speak();
  }
  function finishRec(it, ans) {
    timer && timer.stop();
    const t = Rec.stop(); ans.seconds = Rec.seconds;
    const ta = $("#ans"); if (ta && t && wc(t) > wc(ta.value)) ta.value = t; if (ta) ans.text = ta.value;
    $("#startBtn").disabled = false; $("#stopBtn").disabled = true; $("#startBtn").textContent = "🔁 Nói lại";
    $("#phaseLbl").textContent = "Đã dừng. Kiểm tra phần chữ bên dưới rồi bấm Chấm điểm AI.";
    setTimeout(() => { doScore(); if (state.auto) setTimeout(() => { if (state.i < items.length - 1) { state.i++; show(); } else summary(); }, 2500); }, 700);
  }
  function doScore() {
    const it = items[state.i], ans = state.answers[state.i];
    ans.text = $("#ans").value;
    ans.res = Scorer.speaking({ part: it.part, qi: it.qi, question: it.q, text: ans.text, seconds: ans.seconds, model: it.a });
    showReport(); nav();
  }
  function showReport(modelOnly) {
    const it = items[state.i], ans = state.answers[state.i];
    const el = $("#report");
    if (modelOnly && !ans.res) { el.innerHTML = `<div class="card"><h3>📌 Bài mẫu – ${h(it.part === 4 ? "Part 4" : it.q)}</h3><p class="ex" style="font-size:15.5px">${h(it.a)}</p><button class="btn sm blue" data-karaoke>▶ Xem minh họa đọc mẫu (karaoke)</button><div class="kara-box transcript" style="margin-top:8px;display:none"></div></div>`; Scorer.bindReport(el, it.a); el.scrollIntoView({ behavior: "smooth" }); return; }
    el.innerHTML = Scorer.reportHTML(ans.res, { color: "var(--speaking)", text: ans.text, model: it.a, title: `Kết quả Part ${it.part}${it.part < 4 ? " · Câu " + (it.qi + 1) : ""}` });
    Scorer.bindReport(el, it.a); el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function summary() {
    stopAll();
    const byPart = {};
    items.forEach((it, k) => { const r = state.answers[k].res; (byPart[it.part] ||= []).push(r ? r.score : 0); });
    const parts = Object.keys(byPart).map(Number).sort();
    const rows = parts.map(p => { const arr = byPart[p]; const avg = arr.reduce((a, b) => a + b, 0) / arr.length; return { p, avg: Math.round(avg * 10) / 10, max: p === 4 ? 6 : 5, n: arr.length, done: items.filter((it, k) => it.part === p && state.answers[k].res).length }; });
    const totalRatio = rows.reduce((a, r) => a + r.avg / r.max, 0) / rows.length;
    const scale = toScale(totalRatio), lv = cefrOf("speaking", scale);
    const answered = state.answers.filter(a => a.res).length;
    $("#stage").innerHTML = ""; $("#report").innerHTML = `<div class="card t-speaking"><div class="result-banner"><div class="score-big" style="--p:${scale * 2};--c:var(--speaking)"><span>${scale}<small>/ 50</small></span></div>
      <div><h2 style="margin:0">Kết quả ${h(test.title)}</h2><p class="muted" style="margin:.2em 0">Đã chấm ${answered}/${items.length} câu. Điểm thang 50 là ước lượng quy đổi từ điểm từng phần.</p><span class="pill good">Trình độ ước lượng: ${lv}</span> <span class="pill">Ngưỡng B1 = 26 · B2 = 41</span></div></div>
      <table class="tbl" style="margin-top:14px"><thead><tr><th>Phần</th><th>Số câu đã chấm</th><th>Điểm trung bình</th></tr></thead><tbody>${rows.map(r => `<tr><td>Part ${r.p}</td><td>${r.done}/${r.n}</td><td><b>${r.avg}</b> / ${r.max}</td></tr>`).join("")}</tbody></table>
      <div class="row"><button class="btn" id="again">↺ Làm lại từ đầu</button><a class="btn" href="#/speaking">← Danh sách đề</a></div></div>`;
    $("#again").onclick = () => { state.answers.forEach(a => { a.text = ""; a.res = null; a.audio = null; }); state.i = 0; show(); };
    if (answered) Store.result(test.id, { skill: "speaking", title: test.title, scale, cefr: lv });
    nav();
  }
  show();
}

function spFree(view) {
  crumbs([["Tổng quan", "#/"], ["Speaking", "#/speaking"], ["Luyện tự do", ""]]);
  view.innerHTML = `<div class="page-head t-speaking"><div class="ico tinted">🎯</div><div><h1>Luyện tự do – chấm 1 câu bất kỳ</h1><p>Nhập câu hỏi (ví dụ từ đề thầy cô giao), chọn phần thi, nói hoặc gõ câu trả lời, hệ thống chấm ngay.</p></div></div>
  <div class="card"><div class="grid g2"><div><label class="small muted">Câu hỏi</label><input type="text" id="fq" value="What do you like doing in your free time?"></div>
  <div><label class="small muted">Phần thi / loại câu</label><select id="fp"><option value="1|0">Part 1 – câu hỏi cá nhân (30″)</option><option value="2|0">Part 2 – tả 1 bức tranh (45″)</option><option value="2|1">Part 2/3 – câu hỏi ý kiến (45″)</option><option value="3|0">Part 3 – so sánh 2 tranh (45″)</option><option value="4|0">Part 4 – kể chuyện + ý kiến (2′)</option></select></div></div>
  <div class="phase" style="margin-top:12px"><div class="clock" id="clock">00:30</div><div style="flex:1"><div class="small" id="lbl">Sẵn sàng</div><div class="bar"><i id="pbar"></i></div></div></div>
  <div class="row"><button class="btn rec" id="go">🎙️ Bắt đầu nói</button><button class="btn" id="st" disabled>⏹ Dừng</button></div>
  <textarea id="ans" style="margin-top:10px" placeholder="Lời nói của bạn sẽ hiện ở đây, hoặc gõ câu trả lời…"></textarea><div class="wc" id="w"></div>
  <div class="row" style="margin-top:8px"><button class="btn primary" id="sc">🤖 Chấm điểm AI</button>${Store.settings.apiKey ? `<button class="btn" id="cl">✨ Chấm bằng Claude</button>` : ""}</div></div><div id="report" style="margin-top:16px"></div>`;
  let timer; onLeave(() => { timer && timer.stop(); Rec.active && Rec.stop(); });
  const sec = () => ({ 1: 30, 2: 45, 3: 45, 4: 120 })[+$("#fp").value.split("|")[0]];
  $("#fp").onchange = () => $("#clock").textContent = fmtTime(sec());
  $("#ans").oninput = () => $("#w").textContent = wc($("#ans").value) + " từ";
  $("#go").onclick = () => { const S = sec(); $("#go").disabled = true; $("#st").disabled = false; $("#lbl").innerHTML = '<span class="rec-dot"></span> Đang ghi âm…';
    Rec.start((f, i) => { $("#ans").value = (f + i).trim(); $("#w").textContent = wc($("#ans").value) + " từ"; });
    timer = countdown(S, l => { $("#clock").textContent = fmtTime(l); $("#pbar").style.width = (100 - l / S * 100) + "%"; }, () => $("#st").click()); };
  $("#st").onclick = () => { timer && timer.stop(); const t = Rec.stop(); if (t && wc(t) > wc($("#ans").value)) $("#ans").value = t; $("#go").disabled = false; $("#st").disabled = true; $("#lbl").textContent = "Đã dừng"; $("#sc").click(); };
  const run = () => { const [p, qi] = $("#fp").value.split("|").map(Number); return { part: p, qi, question: $("#fq").value, text: $("#ans").value, seconds: Rec.seconds }; };
  $("#sc").onclick = () => { const a = run(); const r = Scorer.speaking(a); $("#report").innerHTML = Scorer.reportHTML(r, { text: a.text }); Scorer.bindReport($("#report")); };
  if ($("#cl")) $("#cl").onclick = async () => { const a = run(); $("#cl").disabled = true; try { const r = await Scorer.claude("speaking", { part: a.part, question: a.question, candidate_transcript: a.text, max_score: a.part === 4 ? 6 : 5 }); r.source = "Chấm bởi Claude"; r.words = wc(a.text); $("#report").innerHTML = Scorer.reportHTML(r, { text: a.text }); Scorer.bindReport($("#report")); } catch (e) { toast(e.message, 5000); } $("#cl").disabled = false; };
}
