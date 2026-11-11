/* ===== Reading · Listening · Grammar & Vocabulary – trình làm bài trắc nghiệm có giải thích ===== */
function skillHome(view, skill, tests, cfg) {
  crumbs([["Tổng quan", "#/"], [SKILLS[skill].name, ""]]);
  const done = tests.filter(t => Store.data.results[t.id]).length;
  view.innerHTML = `<div class="page-head t-${skill}"><div class="ico tinted">${SKILLS[skill].icon}</div><div><h1>${cfg.title}</h1><p>${cfg.desc}</p></div></div>
  ${cfg.structure ? `<div class="card"><h3>🧱 Cấu trúc phần thi</h3>${cfg.structure}</div>` : ""}
  ${cfg.lessons ? `<div class="sec-title"><h2>📘 Bài học</h2></div><div class="lesson-list t-${skill}">${LESSONS.filter(l => l.skill === skill).map(l => `<a href="#/${skill}/lesson/${l.id}"><span class="em">${l.icon}</span><span><b>${h(l.title)}</b></span><span class="done">${Store.data.lessons[l.id] ? '<span class="pill good">✓ Đã học</span>' : ""}</span></a>`).join("")}</div>` : ""}
  <div class="sec-title"><h2>📝 Đề thi hoàn chỉnh</h2><span class="pill">${done}/${tests.length} đã làm</span></div>
  <div class="tiles t-${skill}">${tests.map(t => { const r = Store.data.results[t.id]; return `<a class="tile" href="#/${skill}/test/${t.id}"><div class="thumb">${SKILLS[skill].icon}</div><div class="tb"><b>${h(t.title)}</b><small>⏱ ${t.time} phút · ${cfg.count(t)} câu</small><br>${r ? `<span class="pill good">Tốt nhất ${r.best}/50${skill !== "core" ? " · " + cefrOf(skill, r.best) : ""}</span>` : `<span class="pill">Chưa làm</span>`}</div></a>`; }).join("")}</div>
  ${cfg.extra || ""}`;
}

/* Bộ khung chung: tabs theo Part, timer, chấm điểm, lưu kết quả */
function quizRunner(view, skill, test, buildParts) {
  crumbs([["Tổng quan", "#/"], [SKILLS[skill].name, "#/" + skill], [test.title, ""]]);
  const Q = { instant: true, submitted: false, items: [] };   // items: {key, correct(), answered()}
  let timer; onLeave(() => timer && timer.stop());
  const parts = buildParts(Q);
  view.innerHTML = `<div class="exam-bar t-${skill}"><b>${SKILLS[skill].icon} ${h(test.title)}</b><span class="timer" id="tm">${fmtTime(test.time * 60)}</span><button class="btn sm" id="tStart">▶ Bấm giờ ${test.time} phút</button>
    <label class="small row" style="gap:6px"><input type="checkbox" id="inst" checked> Hiện giải thích ngay khi chọn</label><span class="spacer"></span><span class="pill" id="prog"></span><button class="btn sm primary" id="sub">📊 Nộp bài</button></div>
    <div class="tabs" id="tabs">${parts.map((p, i) => `<button data-t="${i}" class="${i ? "" : "on"}">${h(p.short)}</button>`).join("")}<button data-t="res">Kết quả</button></div>
    <div id="panes">${parts.map((p, i) => `<div class="pane" data-p="${i}" style="${i ? "display:none" : ""}"><div class="card"><h3>${h(p.title)}</h3><p class="muted small" style="margin-top:-4px">${h(p.instr || "")}</p><div class="pbody"></div></div></div>`).join("")}<div class="pane" data-p="res" style="display:none"></div></div>`;
  parts.forEach((p, i) => p.mount($(`.pane[data-p="${i}"] .pbody`)));
  const tabTo = (k) => { $$("#tabs button").forEach(b => b.classList.toggle("on", b.dataset.t == k)); $$(".pane").forEach(p => p.style.display = p.dataset.p == k ? "" : "none"); TTS.stop(); window.scrollTo(0, 0); };
  $$("#tabs button").forEach(b => b.onclick = () => tabTo(b.dataset.t));
  $("#inst").onchange = e => { Q.instant = e.target.checked; };
  $("#tStart").onclick = () => { timer && timer.stop(); $("#inst").checked = false; Q.instant = false; toast("Chế độ thi thử: giải thích sẽ hiện sau khi nộp bài."); timer = countdown(test.time * 60, l => { $("#tm").textContent = fmtTime(l); $("#tm").classList.toggle("low", l < 120); }, () => { toast("Hết giờ – hệ thống tự nộp bài."); submit(); }); };
  const prog = () => { $("#prog").textContent = `Đã làm ${Q.items.filter(x => x.answered()).length}/${Q.items.length}`; };
  Q.onChange = prog; prog();
  $("#sub").onclick = () => { const left = Q.items.filter(x => !x.answered()).length; if (left && !confirm(`Còn ${left} câu chưa làm. Vẫn nộp bài?`)) return; submit(); };
  function submit() {
    timer && timer.stop(); Q.submitted = true; parts.forEach(p => p.reveal());
    const correct = Q.items.filter(x => x.correct()).length, total = Q.items.length;
    const scale = toScale(correct / total), lv = skill === "core" ? "—" : cefrOf(skill, scale);
    Store.result(test.id, { skill, title: test.title, scale, cefr: lv, raw: `${correct}/${total}` });
    const per = parts.map(p => { const its = Q.items.filter(x => x.part === p); return `<tr><td>${h(p.title)}</td><td><b>${its.filter(x => x.correct()).length}</b>/${its.length}</td></tr>`; }).join("");
    $('.pane[data-p="res"]').innerHTML = `<div class="card t-${skill}"><div class="result-banner"><div class="score-big" style="--p:${scale * 2};--c:var(--${skill})"><span>${scale}<small>/ 50</small></span></div>
      <div><h2 style="margin:0">Đúng ${correct}/${total} câu</h2><p class="muted" style="margin:.2em 0">Điểm thang 50 quy đổi theo tỉ lệ câu đúng (ước lượng; British Council dùng thang quy đổi riêng cho từng kỹ năng).</p>
      ${skill !== "core" ? `<span class="pill good">Trình độ ước lượng: ${lv}</span> <span class="pill">Ngưỡng B1 = ${CUTS[skill].B1} · B2 = ${CUTS[skill].B2}</span>` : `<span class="pill">Điểm Core dùng để nâng bậc CEFR khi kỹ năng sát ngưỡng</span>`}</div></div>
      <table class="tbl" style="margin-top:12px"><thead><tr><th>Phần</th><th>Đúng</th></tr></thead><tbody>${per}</tbody></table>
      <p class="small">👉 Mở lại từng tab để xem <b>đáp án, giải thích và bằng chứng được tô vàng</b> trong bài đọc / lời thoại.</p>
      <div class="row"><button class="btn" onclick="render()">↺ Làm lại</button><a class="btn" href="#/${skill}">← Danh sách đề</a></div></div>`;
    tabTo("res");
  }
  return Q;
}

/* ---------- Thành phần câu hỏi ---------- */
function mcqBlock(Q, part, key, opts, answer, explain, extraAfter) {
  // opts: array of strings; answer: index in original; render shuffled
  const order = shuffledIdx(opts.length, key);
  let sel = null; const el = document.createElement("div");
  el.innerHTML = `<div class="opts">${order.map((oi, k) => `<button class="opt" data-o="${oi}"><span class="k">${LETTERS[k]}</span><span>${h(opts[oi])}</span></button>`).join("")}</div><div class="explain"></div>`;
  const ex = $(".explain", el);
  const reveal = () => { $$(".opt", el).forEach(b => { const o = +b.dataset.o; b.classList.toggle("right", o === answer); b.classList.toggle("wrong", o === sel && o !== answer); });
    ex.className = "explain show " + (sel === answer ? "ok" : "no"); ex.innerHTML = `<b>${sel === answer ? "✅ Chính xác!" : sel == null ? "⬜ Chưa trả lời." : "❌ Chưa đúng."}</b> Đáp án: <b>${h(opts[answer])}</b>. ${h(explain)}`; extraAfter && extraAfter(); };
  $$(".opt", el).forEach(b => b.onclick = () => { if (Q.submitted) return; sel = +b.dataset.o; $$(".opt", el).forEach(x => x.classList.toggle("sel", x === b)); Q.onChange && Q.onChange(); if (Q.instant) reveal(); });
  Q.items.push({ key, part, correct: () => sel === answer, answered: () => sel != null });
  return { el, reveal };
}
function audioBox(lines, { onPlayed } = {}) {
  const el = document.createElement("div"); let plays = 0;
  el.className = "audio-box";
  el.innerHTML = `<button class="btn sm blue">▶ Nghe</button><div class="wave"><i></i><i></i><i></i><i></i><i></i></div><span class="plays">Lượt nghe: 0/2</span><span class="small muted">Giọng đọc máy (TTS)</span>`;
  const btn = $("button", el), wave = $(".wave", el), pl = $(".plays", el);
  btn.onclick = async () => {
    if (el._free !== true && plays >= 2) { toast("Như đề thật, mỗi đoạn chỉ được nghe tối đa 2 lần."); return; }
    plays++; pl.textContent = `Lượt nghe: ${plays}/2`; btn.disabled = true; wave.classList.add("on");
    await TTS.playScript(lines); wave.classList.remove("on"); btn.disabled = false; btn.textContent = "↻ Nghe lại"; onPlayed && onPlayed();
  };
  return { el, free() { el._free = true; pl.textContent = "Nghe không giới hạn (đã nộp/đã xem đáp án)"; } };
}
function scriptBlock(lines, ev = []) {
  const el = document.createElement("div"); el.className = "script";
  el.innerHTML = `<b class="small muted">📜 Lời thoại (tô vàng = câu chứa đáp án):</b>` + lines.map((L, i) => `<p class="${ev.includes(i) ? "hl" : ""}"><b>${L.sp === "M" ? "👨" : "👩"}</b>${h(L.t)}</p>`).join("");
  return el;
}
function markEvidence(container, text) {
  if (!text) return; const html = container.innerHTML; const t = h(text);
  if (html.includes(t)) container.innerHTML = html.replace(t, `<span class="hl">${t}</span>`);
}

/* ================= READING ================= */
route("reading", (view, args) => {
  if (args[0] === "test") return readingTest(view, READING_TESTS.find(t => t.id === args[1]));
  skillHome(view, "reading", READING_TESTS, {
    title: "Reading – Đọc hiểu", desc: "2 đề hoàn chỉnh theo đúng 4 phần của đề thật (35 phút). Sau mỗi câu có giải thích bằng tiếng Việt và câu bằng chứng được tô vàng ngay trong bài đọc.",
    count: () => 29,
    structure: `<table class="tbl"><thead><tr><th>Phần</th><th>Dạng bài</th><th>Số câu</th></tr></thead><tbody>
    <tr><td>Part 1</td><td>Sentence comprehension – chọn từ điền vào 5 chỗ trống (3 lựa chọn)</td><td>5</td></tr>
    <tr><td>Part 2</td><td>Text cohesion – sắp xếp câu thành đoạn văn (2 bài, câu đầu cho sẵn)</td><td>2 × 5</td></tr>
    <tr><td>Part 3</td><td>Opinion matching – ghép 7 nhận định với 4 người</td><td>7</td></tr>
    <tr><td>Part 4</td><td>Long text – chọn tiêu đề cho 7 đoạn (8 tiêu đề, 1 thừa)</td><td>7</td></tr></tbody></table>`
  });
});
function readingTest(view, test) {
  if (!test) return go("#/reading");
  quizRunner(view, "reading", test, Q => test.parts.map((p, pi) => {
    const P = { title: p.title, instr: p.instr, short: p.title.split("–")[0].trim() + (p.title.includes("Task") ? " " + p.title.match(/Task \d/)[0].replace("Task ", "T") : "") };
    if (p.type === "gap") {
      P.mount = (body) => {
        const sels = [];
        body.innerHTML = `<div class="gap-text"><p style="margin:0 0 6px">${h(p.head)}</p>${p.items.map((it, k) => { const ord = shuffledIdx(it.options.length, test.id + pi + k); return `${h(it.pre)} <span class="gap-n">${k + 1}</span><select data-k="${k}"><option value="">— chọn —</option>${ord.map(o => `<option value="${o}">${h(it.options[o])}</option>`).join("")}</select> ${h(it.post)} `; }).join("")}<p style="margin:6px 0 0">${h(p.tail)}</p></div><div class="exps"></div>`;
        const exps = $(".exps", body);
        p.items.forEach((it, k) => { const s = $(`select[data-k="${k}"]`, body); sels[k] = s;
          const ex = document.createElement("div"); ex.className = "explain"; exps.appendChild(ex);
          const rv = () => { const ok = s.value !== "" && +s.value === it.answer; s.classList.toggle("right", ok); s.classList.toggle("wrong", s.value !== "" && !ok); ex.className = "explain show " + (ok ? "ok" : "no"); ex.innerHTML = `<b>${k + 1}. ${ok ? "✅" : "❌"} ${h(it.options[it.answer])}</b> – ${h(it.explain)}`; };
          s.onchange = () => { Q.onChange(); if (Q.instant) rv(); }; s._rv = rv;
          Q.items.push({ part: P, correct: () => s.value !== "" && +s.value === it.answer, answered: () => s.value !== "" }); });
        P.reveal = () => sels.forEach(s => { s._rv(); s.disabled = true; });
      };
    }
    if (p.type === "order") {
      P.mount = (body) => {
        const ord = shuffledIdx(p.sentences.length, test.id + "ord" + pi);
        body.innerHTML = `<div class="order-list"><div class="order-item first"><span class="pill">1</span>${h(p.first)}</div>${ord.map(si => `<div class="order-item" data-si="${si}"><select><option value="">Vị trí</option>${p.sentences.map((_, k) => `<option value="${k}">${k + 2}</option>`).join("")}</select><span>${h(p.sentences[si])}</span></div>`).join("")}</div><div class="explain"></div>`;
        const rows = $$(".order-item[data-si]", body), ex = $(".explain", body);
        const rv = () => { rows.forEach(r => { const s = $("select", r), ok = s.value !== "" && +s.value === +r.dataset.si; r.classList.toggle("right", ok); r.classList.toggle("wrong", s.value !== "" && !ok); });
          ex.className = "explain show ok"; ex.innerHTML = `<b>🔗 Thứ tự đúng & dấu hiệu liên kết:</b><ol start="1" style="margin:6px 0 0;padding-left:20px"><li>${h(p.first)}</li>${p.sentences.map((s, k) => `<li><b>${h(s)}</b><br><span class="muted">${h(p.clues[k])}</span></li>`).join("")}</ol>`; };
        rows.forEach(r => { const s = $("select", r); s.onchange = () => { Q.onChange(); if (Q.instant && rows.every(x => $("select", x).value !== "")) rv(); };
          Q.items.push({ part: P, correct: () => s.value !== "" && +s.value === +r.dataset.si, answered: () => s.value !== "" }); });
        P.reveal = () => { rv(); rows.forEach(r => $("select", r).disabled = true); };
      };
    }
    if (p.type === "opinion") {
      const colors = ["#2a78d6", "#eb6834", "#1baf7a", "#6250d6"];
      P.mount = (body) => {
        body.innerHTML = `<div class="people">${p.people.map((pp, k) => `<div class="person" data-k="${k}"><b><span class="avatar" style="background:${colors[k]}">${h(pp.name.replace(/^(Mr|Mrs|Dr|Ms)\s+/, "")[0])}</span>${h(pp.name)}</b><div class="ptext">${h(pp.text)}</div></div>`).join("")}</div>
        <h4>Who…?</h4>${p.items.map((it, k) => `<div class="q"><div class="row"><span class="qt" style="margin:0;flex:1">${k + 1}. Who ${h(it.s)}</span><select data-k="${k}" style="width:auto"><option value="">— chọn người —</option>${p.people.map((pp, j) => `<option value="${j}">${h(pp.name)}</option>`).join("")}</select></div><div class="explain"></div></div>`).join("")}`;
        const rvs = p.items.map((it, k) => { const q = $$(".q", body)[k], s = $("select", q), ex = $(".explain", q);
          const rv = () => { const ok = s.value !== "" && +s.value === it.answer; s.className = ok ? "right" : s.value !== "" ? "wrong" : ""; ex.className = "explain show " + (ok ? "ok" : "no");
            ex.innerHTML = `<b>${ok ? "✅" : "❌"} ${h(p.people[it.answer].name)}</b> – ${h(it.explain)}<span class="ev">“${h(it.ev)}”</span>`; markEvidence($(`.person[data-k="${it.answer}"] .ptext`, body), it.ev); };
          s.onchange = () => { Q.onChange(); if (Q.instant) rv(); };
          Q.items.push({ part: P, correct: () => s.value !== "" && +s.value === it.answer, answered: () => s.value !== "" }); return () => { rv(); s.disabled = true; }; });
        P.reveal = () => rvs.forEach(f => f());
      };
    }
    if (p.type === "headings") {
      P.mount = (body) => {
        const hord = shuffledIdx(p.headings.length, test.id + "hd");
        body.innerHTML = `<div class="callout"><b>Headings:</b><ol type="A" style="margin:6px 0 0">${hord.map(i => `<li>${h(p.headings[i])}</li>`).join("")}</ol></div><h3 style="text-align:center">${h(p.textTitle)}</h3>
        <div class="long-text">${p.paragraphs.map((pa, k) => `<div class="para"><div class="ph"><span class="pill">Đoạn ${k + 1}</span><select data-k="${k}"><option value="">— chọn tiêu đề —</option>${hord.map((i, j) => `<option value="${i}">${LETTERS[j]}. ${h(p.headings[i])}</option>`).join("")}</select></div><div>${h(pa.text)}</div><div class="explain"></div></div>`).join("")}</div>`;
        const rvs = p.paragraphs.map((pa, k) => { const box = $$(".para", body)[k], s = $("select", box), ex = $(".explain", box);
          const rv = () => { const ok = s.value !== "" && +s.value === pa.answer; s.className = ok ? "right" : s.value !== "" ? "wrong" : ""; ex.className = "explain show " + (ok ? "ok" : "no"); ex.innerHTML = `<b>${ok ? "✅" : "❌"} ${h(p.headings[pa.answer])}</b> – ${h(pa.explain)}`; };
          s.onchange = () => { Q.onChange(); if (Q.instant) rv(); };
          Q.items.push({ part: P, correct: () => s.value !== "" && +s.value === pa.answer, answered: () => s.value !== "" }); return () => { rv(); s.disabled = true; }; });
        P.reveal = () => rvs.forEach(f => f());
      };
    }
    return P;
  }));
}

/* ================= LISTENING ================= */
route("listening", (view, args) => {
  if (args[0] === "test") return listeningTest(view, LISTENING_TESTS.find(t => t.id === args[1]));
  skillHome(view, "listening", LISTENING_TESTS, {
    title: "Listening – Nghe hiểu", desc: "2 đề hoàn chỉnh (40 phút). Âm thanh được đọc bằng giọng máy của trình duyệt, giọng nam/nữ riêng, giới hạn 2 lượt nghe như thi thật. Sau khi trả lời, lời thoại hiện ra với câu chứa đáp án được tô vàng.",
    count: t => t.parts.reduce((a, p) => a + (p.items ? (p.type === "monologue" ? p.items.length * 2 : p.items.length) : p.speakers ? p.speakers.length : p.dialogs.reduce((x, d) => x + d.items.length, 0)), 0),
    structure: `<table class="tbl"><thead><tr><th>Phần</th><th>Dạng bài</th><th>Số câu</th></tr></thead><tbody>
    <tr><td>Part 1</td><td>Information recognition – nghe tin nhắn/hội thoại ngắn, chọn thông tin (số, giờ, địa điểm…)</td><td>13</td></tr>
    <tr><td>Part 2</td><td>Information matching – ghép 4 người nói với 6 thông tin</td><td>4</td></tr>
    <tr><td>Part 3</td><td>Opinion matching – ý kiến thuộc về Man / Woman / Both</td><td>2 × 4</td></tr>
    <tr><td>Part 4</td><td>Monologue – thái độ, ý định, quan điểm người nói</td><td>2 × 2</td></tr></tbody></table>
    <p class="small muted">Mẹo: âm thanh dùng giọng tiếng Anh có sẵn trên máy. Trên Windows/Chrome có giọng "Google UK English"; trên iPhone/Mac có "Daniel", "Serena"… Tốc độ đọc chỉnh trong <a href="#/settings">Cài đặt</a>.</p>`,
    extra: mnemonicCard()
  });
});
function mnemonicCard() {
  const key = k => k.split(" ").map(c => `<b class="${c}">${c}</b>`).join(" ");
  return `<div class="sec-title"><h2>🧠 Bảng ghi nhớ Listening Part 3 (Man / Woman / Both)</h2></div>
  <div class="card"><div class="grid g2"><div><p class="small">Bảng do học viên sưu tầm: mỗi cụm từ tiếng Việt mã hoá thứ tự đáp án 4 nhận định theo chủ đề. Giải mã theo chữ cái đầu: <b style="color:var(--listening)">M = Man</b>, <b style="color:var(--speaking)">W/V = Woman</b>, <b style="color:var(--good)">B = Both</b>.</p>
  <div class="callout small">⚠️ Đây là mẹo truyền miệng, không phải tài liệu chính thức. Thứ tự nhận định trong đề thật có thể khác – luôn nghe để xác nhận. Hai hội thoại luyện tập trong mỗi đề Listening ở dashboard được biên soạn theo các chủ đề này để bạn luyện cách nghe "đồng ý / không đồng ý".</div>
  <figure class="fig"><img src="assets/img/lessons/listening-p3-mnemonic.jpg" alt="Bảng ghi nhớ Listening Part 3"></figure></div>
  <div><table class="tbl"><thead><tr><th>#</th><th>Chủ đề</th><th>Câu nhớ</th><th>Đáp án</th></tr></thead><tbody>${LISTENING_MNEMONIC.map(m => `<tr><td>${m.n}</td><td>${h(m.topic)}</td><td>${h(m.phrase)}</td><td class="mn-key">${key(m.key)}</td></tr>`).join("")}</tbody></table>
  <button class="btn sm" id="mnQuiz" onclick="mnemonicQuiz()">🎲 Tự kiểm tra trí nhớ</button><div id="mnq"></div></div></div></div>`;
}
function mnemonicQuiz() {
  const m = LISTENING_MNEMONIC[Math.floor(Math.random() * LISTENING_MNEMONIC.length)];
  $("#mnq").innerHTML = `<div class="q"><div class="qt">Chủ đề <b>${h(m.topic)}</b> – thứ tự đáp án là gì?</div><input type="text" id="mni" placeholder="Ví dụ: W B M B"><div class="row" style="margin-top:6px"><button class="btn sm" id="mnc">Kiểm tra</button></div><div class="explain" id="mne"></div></div>`;
  $("#mnc").onclick = () => { const v = $("#mni").value.toUpperCase().replace(/V/g, "W").replace(/[^MWB]/g, ""); const ok = v === m.key.replace(/ /g, ""); $("#mne").className = "explain show " + (ok ? "ok" : "no"); $("#mne").innerHTML = `${ok ? "✅ Chính xác!" : "❌ Chưa đúng."} ${h(m.phrase)} → <b>${m.key}</b>`; };
}
function listeningTest(view, test) {
  if (!test) return go("#/listening");
  const audios = [];
  const Qr = quizRunner(view, "listening", test, Q => test.parts.map((p, pi) => {
    const P = { title: p.title, instr: p.instr, short: p.title.split("–")[0].trim() };
    if (p.type === "mcq") P.mount = body => {
      const rvs = p.items.map((it, k) => {
        const box = document.createElement("div"); box.className = "q"; box.innerHTML = `<div class="qt">${k + 1}. ${h(it.q)}</div>`;
        const au = audioBox(it.script); audios.push(au); box.appendChild(au.el);
        const sc = scriptBlock(it.script, it.ev);
        const m = mcqBlock(Q, P, test.id + "m" + k, it.options, it.answer, it.explain, () => { sc.classList.add("show"); au.free(); });
        box.appendChild(m.el); box.appendChild(sc); body.appendChild(box); return m.reveal; });
      P.reveal = () => rvs.forEach(f => f());
    };
    if (p.type === "match") P.mount = body => {
      body.innerHTML = `<div class="callout"><b>Information:</b><ol type="A" style="margin:6px 0 0">${p.options.map(o => `<li>${h(o)}</li>`).join("")}</ol></div>`;
      const rvs = p.speakers.map((sp, k) => {
        const box = document.createElement("div"); box.className = "q"; box.innerHTML = `<div class="row"><b style="flex:1">🗣️ ${h(sp.name)}</b><select style="width:auto"><option value="">— chọn thông tin —</option>${p.options.map((o, j) => `<option value="${j}">${LETTERS[j]}. ${h(o)}</option>`).join("")}</select></div>`;
        const au = audioBox(sp.script); audios.push(au); box.appendChild(au.el);
        const ex = document.createElement("div"); ex.className = "explain"; const sc = scriptBlock(sp.script, [0]);
        box.appendChild(ex); box.appendChild(sc); body.appendChild(box);
        const s = $("select", box);
        const rv = () => { const ok = s.value !== "" && +s.value === sp.answer; s.className = ok ? "right" : s.value !== "" ? "wrong" : ""; ex.className = "explain show " + (ok ? "ok" : "no"); ex.innerHTML = `<b>${ok ? "✅" : "❌"} ${LETTERS[sp.answer]}. ${h(p.options[sp.answer])}</b> – ${h(sp.explain)}`; sc.classList.add("show"); au.free(); };
        s.onchange = () => { Q.onChange(); if (Q.instant) rv(); };
        Q.items.push({ part: P, correct: () => s.value !== "" && +s.value === sp.answer, answered: () => s.value !== "" });
        return () => { rv(); s.disabled = true; }; });
      P.reveal = () => rvs.forEach(f => f());
    };
    if (p.type === "opinion") P.mount = body => {
      const rvs = [];
      p.dialogs.forEach((d, di) => {
        const box = document.createElement("div"); box.className = "q";
        box.innerHTML = `<div class="qt">💬 Hội thoại ${di + 1}: ${h(d.topic)}</div>`;
        const au = audioBox(d.script); audios.push(au); box.appendChild(au.el);
        const sc = scriptBlock(d.script, []); const done = new Set();
        d.items.forEach((it, k) => {
          const row = document.createElement("div"); row.style.margin = "10px 0";
          row.innerHTML = `<div class="row"><span style="flex:1">${k + 1}. ${h(it.s)}</span><div class="mbw">${["M", "W", "B"].map(x => `<button data-v="${x}">${{ M: "👨 Man", W: "👩 Woman", B: "👫 Both" }[x]}</button>`).join("")}</div></div><div class="explain"></div>`;
          box.appendChild(row); let sel = null; const ex = $(".explain", row);
          const rv = () => { $$(".mbw button", row).forEach(b => { b.classList.toggle("right", b.dataset.v === it.answer); b.classList.toggle("wrong", b.dataset.v === sel && sel !== it.answer); });
            ex.className = "explain show " + (sel === it.answer ? "ok" : "no"); ex.innerHTML = `<b>${sel === it.answer ? "✅" : "❌"} ${{ M: "Man", W: "Woman", B: "Both" }[it.answer]}</b> – ${h(it.explain)}`;
            it.ev.forEach(i => $$("p", sc)[i]?.classList.add("hl")); done.add(k); if (Q.submitted || done.size === d.items.length) { sc.classList.add("show"); au.free(); } };
          $$(".mbw button", row).forEach(b => b.onclick = () => { if (Q.submitted) return; sel = b.dataset.v; $$(".mbw button", row).forEach(x => x.classList.toggle("sel", x === b)); Q.onChange(); if (Q.instant) rv(); });
          Q.items.push({ part: P, correct: () => sel === it.answer, answered: () => sel != null }); rvs.push(rv);
        });
        const mn = document.createElement("p"); mn.className = "small muted"; mn.style.display = "none"; mn.innerHTML = `🧠 Đối chiếu bảng ghi nhớ: <b>${h(d.mnemonic)}</b>`; box.appendChild(mn); rvs.push(() => mn.style.display = "block");
        box.appendChild(sc); body.appendChild(box);
      });
      P.reveal = () => rvs.forEach(f => f());
    };
    if (p.type === "monologue") P.mount = body => {
      const rvs = [];
      p.items.forEach((it, k) => {
        const box = document.createElement("div"); box.className = "q"; box.innerHTML = `<div class="qt">🎙️ ${k + 1}. ${h(it.intro)}</div>`;
        const au = audioBox(it.script); audios.push(au); box.appendChild(au.el);
        const allEv = [...new Set(it.questions.flatMap(q => q.ev))]; const sc = scriptBlock(it.script, allEv);
        it.questions.forEach((q, j) => { const t = document.createElement("div"); t.className = "qt"; t.style.marginTop = "10px"; t.textContent = `${String.fromCharCode(97 + j)}) ${q.q}`; box.appendChild(t);
          const m = mcqBlock(Q, P, test.id + "mono" + k + j, q.options, q.answer, q.explain, () => { sc.classList.add("show"); au.free(); }); box.appendChild(m.el); rvs.push(m.reveal); });
        box.appendChild(sc); body.appendChild(box);
      });
      P.reveal = () => rvs.forEach(f => f());
    };
    return P;
  }));
}

/* ================= GRAMMAR & VOCABULARY ================= */
route("core", (view, args) => {
  if (args[0] === "test") return coreTest(view, CORE_TESTS.find(t => t.id === args[1]));
  if (args[0] === "lesson") return lessonPage(view, "core", args[1]);
  skillHome(view, "core", CORE_TESTS, {
    title: "Grammar & Vocabulary (Core)", desc: "2 đề hoàn chỉnh 50 câu (25 phút), 3 bài học từ vựng – ngữ pháp từ tài liệu Buổi 1, 2, 5. Mỗi câu có giải thích quy tắc bằng tiếng Việt.", lessons: true,
    count: () => 50,
    structure: `<table class="tbl"><thead><tr><th>Phần</th><th>Dạng bài</th><th>Số câu</th></tr></thead><tbody>
    <tr><td>Grammar</td><td>Chọn từ đúng hoàn thành câu (3 lựa chọn) – chủ yếu ngữ pháp viết, một số câu ngữ pháp nói</td><td>25</td></tr>
    <tr><td>Vocabulary</td><td>Từ đồng nghĩa · dùng từ trong câu · định nghĩa · kết hợp từ (chọn từ trong danh sách 10 từ)</td><td>25</td></tr></tbody></table>`
  });
});
function coreTest(view, test) {
  if (!test) return go("#/core");
  quizRunner(view, "core", test, Q => {
    const G = { title: "Part 1 – Grammar (25 câu)", short: "Grammar", instr: "Choose the word or phrase that best completes each sentence." };
    G.mount = body => { const rvs = test.grammar.map((g, k) => { const box = document.createElement("div"); box.className = "q"; box.innerHTML = `<div class="qt">${k + 1}. ${h(g.q).replace("___", '<span style="border-bottom:2px solid var(--ink);padding:0 22px"></span>')}</div>`;
        const m = mcqBlock(Q, G, test.id + "g" + k, g.options, g.answer, g.explain); box.appendChild(m.el); body.appendChild(box); return m.reveal; });
      G.reveal = () => rvs.forEach(f => f()); };
    const V = test.vocab.map((task, ti) => {
      const P = { title: "Vocabulary – " + task.title, short: "Vocab " + (ti + 1), instr: task.instr };
      P.mount = body => {
        const bank = [...task.bank].sort();
        body.innerHTML = `<p class="tags">${bank.map(b => `<span>${h(b)}</span>`).join("")}</p>` + task.items.map((it, k) => `<div class="q"><div class="row"><span class="qt" style="flex:1;margin:0">${k + 1}. ${h(it.prompt)}</span><select style="width:auto"><option value="">— chọn —</option>${bank.map(b => `<option>${h(b)}</option>`).join("")}</select></div><div class="explain"></div></div>`).join("");
        const rvs = task.items.map((it, k) => { const q = $$(".q", body)[k], s = $("select", q), ex = $(".explain", q);
          const rv = () => { const ok = s.value === it.answer; s.className = ok ? "right" : s.value ? "wrong" : ""; ex.className = "explain show " + (ok ? "ok" : "no"); ex.innerHTML = `<b>${ok ? "✅" : "❌"} ${h(it.answer)}</b> – ${h(it.explain)} <button class="say" onclick="TTS.speak('${h(it.answer)}')">🔊</button>`; };
          s.onchange = () => { Q.onChange(); if (Q.instant) rv(); };
          Q.items.push({ part: P, correct: () => s.value === it.answer, answered: () => !!s.value }); return () => { rv(); s.disabled = true; }; });
        P.reveal = () => rvs.forEach(f => f());
      };
      return P;
    });
    return [G, ...V];
  });
}
