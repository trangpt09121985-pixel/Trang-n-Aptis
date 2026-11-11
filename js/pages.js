/* ===== Trang tổng quan, cấu trúc đề, mẹo, tài liệu gốc, cài đặt, bài học ===== */
const COUNTS = () => ({ speaking: SPEAKING_TESTS.length, writing: WRITING_TESTS.length, reading: READING_TESTS.length, listening: LISTENING_TESTS.length, core: CORE_TESTS.length });
function bestBySkill() {
  const out = {}; Object.keys(SKILLS).forEach(s => out[s] = { best: null, done: 0 });
  Object.entries(Store.data.results).forEach(([id, r]) => { const s = r.skill; if (!out[s]) return; out[s].done++; out[s].best = Math.max(out[s].best ?? 0, r.best ?? r.scale ?? 0); });
  return out;
}

route("home", (view) => {
  crumbs([["Tổng quan", ""]]);
  const B = bestBySkill(), C = COUNTS(), name = Store.settings.name || "Phạm Thị Thu Trang";
  const totalTests = Object.values(C).reduce((a, b) => a + b, 0), doneTests = Object.values(B).reduce((a, b) => a + b.done, 0);
  const lessonsDone = Object.keys(Store.data.lessons).length;
  const four = ["listening", "reading", "speaking", "writing"]; const lv = four.map(s => B[s].best != null ? cefrOf(s, B[s].best) : null);
  const order = ["A0", "A1", "A2", "B1", "B2", "C"]; const overall = lv.every(Boolean) ? order[Math.min(...lv.map(x => order.indexOf(x)))] : "—";
  const exam = Store.settings.examDate; const days = exam ? Math.ceil((new Date(exam) - new Date(new Date().toDateString())) / 864e5) : null;
  view.innerHTML = `
  <div class="hero"><div class="card hero-main"><div class="deco">🎓</div><h1>Chào chị ${h(name.split(" ").slice(-2).join(" "))}! 👋</h1>
    <p>Dashboard ôn thi <b>Aptis General</b>: 5 thành phần thi, ${totalTests} đề hoàn chỉnh, chấm Speaking & Writing tự động, mẹo thi tổng hợp.</p>
    <div class="hero-stats"><div><b>${doneTests}/${totalTests}</b><span>đề đã luyện</span></div><div><b>${lessonsDone}/${LESSONS.length}</b><span>bài học đã xong</span></div><div><b>${overall}</b><span>CEFR ước lượng (4 kỹ năng)</span></div></div></div>
    <div class="card countdown">${days != null ? `<span class="muted small">⏳ Còn đến ngày thi (${new Date(exam).toLocaleDateString("vi-VN")})</span><div class="big">${days >= 0 ? days : 0} <span style="font-size:18px">ngày</span></div><span class="small muted">${days > 28 ? "Gợi ý: mỗi tuần 1 đề Speaking + 2 đề Writing + 1 đề Reading/Listening." : days >= 0 ? "Giai đoạn nước rút: làm đề thi thử có bấm giờ mỗi ngày." : "Ngày thi đã qua – cập nhật ngày thi mới trong Cài đặt."}</span>`
      : `<span class="muted small">⏳ Đặt ngày thi để xem đếm ngược</span><input type="date" id="exd"><button class="btn sm" id="exs" style="margin-top:6px">Lưu ngày thi</button>`}</div></div>
  <div class="grid g5">${Object.entries(SKILLS).map(([k, s]) => { const b = B[k]; return `<a class="card skill-card t-${k}" href="#/${k}"><div class="head"><span class="em">${s.icon}</span><b>${s.name}</b></div>
    <div class="ring">${ringSVG(b.done / C[k], s.color, 62)}<div class="lbl"><b>${b.best != null ? b.best + "/50" : "—"}</b><span>${b.best != null ? (k === "core" ? "điểm tốt nhất" : "tốt nhất · " + cefrOf(k, b.best)) : "chưa có điểm"}</span><br><span>${b.done}/${C[k]} đề</span></div></div></a>`; }).join("")}</div>
  <div class="grid g2" style="margin-top:16px">
    <div class="card"><h3>📊 Điểm tốt nhất so với ngưỡng B1 / B2</h3><p class="small muted" style="margin-top:-6px">Thang 0–50 · ngưỡng theo Aptis Scoring System (British Council). Rê chuột lên thanh để xem chi tiết.</p><div id="chart" class="chart-wrap"></div>
      <div class="legend"><span><i style="background:#2a78d6"></i>Điểm tốt nhất</span><span><i style="background:#8a8880;height:10px;width:2px"></i>Ngưỡng B1</span><span><i style="background:#1b1a18;height:10px;width:2px"></i>Ngưỡng B2</span></div></div>
    <div class="card"><h3>🕘 Hoạt động gần đây</h3>${Store.data.log.length ? `<ul class="activity">${Store.data.log.slice(0, 8).map(l => `<li>${SKILLS[l.skill]?.icon || "•"} <b>${h(l.title)}</b> – ${l.scale}/50 <span class="muted small">· ${new Date(l.date).toLocaleString("vi-VN", { dateStyle: "short", timeStyle: "short" })}</span></li>`).join("")}</ul>` : `<p class="muted">Chưa có bài làm nào. Bắt đầu với <a href="#/speaking/test/S01">Speaking Test 1</a> hoặc <a href="#/core/test/C01">Grammar & Vocab Test 1</a>.</p>`}</div></div>
  <div class="sec-title"><h2>🗓️ Lộ trình gợi ý 4 tuần</h2><span class="small muted">Đánh dấu khi hoàn thành – lưu trên trình duyệt</span></div>
  <div class="grid g4" id="plan"></div>
  <div class="sec-title"><h2>🚀 Truy cập nhanh</h2></div>
  <div class="grid g4">
    <a class="card skill-card t-speaking" href="#/speaking/free"><div class="head"><span class="em">🎯</span><b>Luyện nói tự do + AI chấm</b></div><span class="small muted">Nói 1 câu bất kỳ, nhận điểm & sửa lỗi ngay.</span></a>
    <a class="card skill-card t-writing" href="#/writing/lesson/wr-p4"><div class="head"><span class="em">📧</span><b>Khung email Part 4</b></div><span class="small muted">3 dạng đề, 10 gợi ý dùng cho mọi đề.</span></a>
    <a class="card skill-card t-listening" href="#/listening"><div class="head"><span class="em">🧠</span><b>Bảng nhớ Listening P3</b></div><span class="small muted">15 chủ đề Man / Woman / Both.</span></a>
    <a class="card skill-card t-tips" href="#/tips"><div class="head"><span class="em">💡</span><b>Tổng hợp mẹo thi</b></div><span class="small muted">Mẹo theo từng kỹ năng + nguồn chính thức.</span></a></div>`;
  if ($("#exs")) $("#exs").onclick = () => { const v = $("#exd").value; if (!v) return toast("Chọn ngày thi trước."); Store.setSetting("examDate", v); render(); };
  drawChart($("#chart"), B);
  const PLAN = [
    ["Tuần 1 – Nền tảng", ["Học 3 bài Grammar & Vocab", "Làm Core Test 1", "Học 5 mẹo phát triển ý + tả tranh", "Speaking Test 1–2", "Writing: học khung Part 1–3"]],
    ["Tuần 2 – Kỹ năng đọc nghe", ["Reading Test 1", "Listening Test 1", "Học bảng nhớ Listening P3", "Speaking Test 3–5", "Writing Đề 1–4"]],
    ["Tuần 3 – Viết & nói nâng cao", ["Học khung email Part 4", "Writing Đề 5–12", "Speaking Test 6–10", "Học 4 câu chuyện Part 4", "Core Test 2"]],
    ["Tuần 4 – Thi thử", ["Reading Test 2 (bấm giờ)", "Listening Test 2 (bấm giờ)", "Speaking Test 11–14 (thi liên tục)", "Writing 3 đề bấm giờ 50′", "Ôn mẹo thi + bài lỗi sai"]]];
  const pl = Store.data.plan ||= {};
  $("#plan").innerHTML = PLAN.map(([t, items], wi) => `<div class="card"><h3>${t}</h3>${items.map((it, ii) => { const k = wi + "-" + ii; return `<label class="row small" style="gap:8px;margin:5px 0;flex-wrap:nowrap;align-items:flex-start"><input type="checkbox" data-k="${k}" ${pl[k] ? "checked" : ""} style="margin-top:4px">${h(it)}</label>`; }).join("")}</div>`).join("");
  $$("#plan input").forEach(c => c.onchange = () => { pl[c.dataset.k] = c.checked; Store.save(); });
});

/* Biểu đồ thanh ngang: điểm tốt nhất mỗi kỹ năng + vạch ngưỡng B1/B2 (một chuỗi dữ liệu → một màu) */
function drawChart(el, B) {
  const keys = ["listening", "reading", "speaking", "writing", "core"];
  const W = 520, rowH = 40, padL = 130, padR = 46, top = 10, H = top + keys.length * rowH + 26;
  const x = v => padL + v / 50 * (W - padL - padR);
  let s = `<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Điểm tốt nhất theo kỹ năng">`;
  [0, 10, 20, 30, 40, 50].forEach(t => s += `<line x1="${x(t)}" x2="${x(t)}" y1="${top}" y2="${H - 22}" stroke="var(--line)" stroke-width="1"/><text x="${x(t)}" y="${H - 6}" font-size="11" fill="var(--ink-3)" text-anchor="middle">${t}</text>`);
  keys.forEach((k, i) => {
    const y = top + i * rowH + 8, v = B[k].best;
    s += `<text x="${padL - 10}" y="${y + 14}" font-size="12.5" fill="var(--ink-2)" text-anchor="end">${SKILLS[k].icon} ${SKILLS[k].name}</text>`;
    s += `<rect x="${x(0)}" y="${y + 2}" width="${x(50) - x(0)}" height="20" rx="4" fill="var(--surface-2)"/>`;
    if (v != null) s += `<rect class="bar" data-k="${k}" x="${x(0)}" y="${y + 2}" width="${Math.max(4, x(v) - x(0))}" height="20" rx="4" fill="#2a78d6"/><text x="${x(v) + 6}" y="${y + 16}" font-size="12" font-weight="700" fill="var(--ink)">${v}</text>`;
    else s += `<text x="${x(0) + 8}" y="${y + 16}" font-size="11.5" fill="var(--ink-3)">chưa có điểm</text>`;
    if (CUTS[k]) { s += `<line x1="${x(CUTS[k].B1)}" x2="${x(CUTS[k].B1)}" y1="${y - 2}" y2="${y + 26}" stroke="#8a8880" stroke-width="2" stroke-dasharray="3 2"/><line x1="${x(CUTS[k].B2)}" x2="${x(CUTS[k].B2)}" y1="${y - 2}" y2="${y + 26}" stroke="#1b1a18" stroke-width="2"/>`; }
    s += `<rect class="hit" data-k="${k}" x="0" y="${y - 4}" width="${W}" height="${rowH - 4}" fill="transparent"/>`;
  });
  el.innerHTML = s + `</svg><div class="chart-tip"></div>`;
  const tip = $(".chart-tip", el);
  $$(".hit", el).forEach(r => { r.onmousemove = e => { const k = r.dataset.k, v = B[k].best; const rc = el.getBoundingClientRect();
      tip.innerHTML = `<b>${SKILLS[k].name}</b><br>${v != null ? `Tốt nhất: ${v}/50` + (CUTS[k] ? ` · ${cefrOf(k, v)}` : "") : "Chưa có điểm"}${CUTS[k] ? `<br>B1 ≥ ${CUTS[k].B1} · B2 ≥ ${CUTS[k].B2}` : "<br>Không quy đổi CEFR"}<br>${B[k].done} đề đã làm`;
      tip.style.left = Math.min(e.clientX - rc.left + 12, rc.width - 170) + "px"; tip.style.top = (e.clientY - rc.top + 12) + "px"; tip.style.opacity = 1; };
    r.onmouseleave = () => tip.style.opacity = 0; });
}

route("structure", (view) => {
  crumbs([["Tổng quan", "#/"], ["Cấu trúc đề thi", ""]]);
  view.innerHTML = `<div class="page-head t-slate"><div class="ico tinted">🗂️</div><div><h1>Cấu trúc đề thi Aptis General</h1><p>Thi trên máy tính, gồm 5 thành phần. Mỗi kỹ năng được báo điểm thang 0–50 kèm trình độ CEFR; phần Grammar & Vocabulary chỉ báo điểm số.</p></div></div>
  <div class="card"><table class="tbl"><thead><tr><th>Thành phần</th><th>Thời gian</th><th>Các phần</th><th>Chấm</th></tr></thead><tbody>
  <tr><td>🧩 Grammar & Vocabulary (Core)</td><td>25 phút</td><td>25 câu ngữ pháp (3 lựa chọn) + 25 câu từ vựng (đồng nghĩa, định nghĩa, dùng từ, kết hợp từ)</td><td>Máy chấm, 0–50</td></tr>
  <tr><td>📖 Reading</td><td>35 phút</td><td>P1 Sentence comprehension · P2 Text cohesion (2 bài sắp xếp câu) · P3 Opinion matching (4 người, 7 câu) · P4 Long text (~750 từ, 7 đoạn, 8 tiêu đề)</td><td>Máy chấm, 0–50 + CEFR</td></tr>
  <tr><td>🎧 Listening</td><td>40 phút</td><td>P1 Information recognition · P2 Information matching (4 người, 6 thông tin) · P3 Opinion matching (Man/Woman/Both) · P4 Monologue (thái độ, quan điểm). Mỗi đoạn nghe tối đa 2 lần.</td><td>Máy chấm, 0–50 + CEFR</td></tr>
  <tr><td>✍️ Writing</td><td>50 phút</td><td>P1 5 câu 1–5 từ · P2 form 20–30 từ · P3 3 câu chat 30–40 từ · P4 email thân mật ~50 từ + email trang trọng 120–150 từ</td><td>Giám khảo, 0–50 + CEFR</td></tr>
  <tr><td>🎤 Speaking</td><td>~12 phút</td><td>P1 3 câu cá nhân (30″) · P2 tả tranh + 2 câu (45″) · P3 so sánh 2 tranh + 2 câu (45″) · P4 3 câu, 1′ chuẩn bị, 2′ nói</td><td>Giám khảo, 0–50 + CEFR</td></tr></tbody></table></div>
  <div class="grid g2" style="margin-top:16px"><div class="card"><h3>🎯 Ngưỡng điểm CEFR (thang 0–50)</h3><table class="tbl"><thead><tr><th>Kỹ năng</th><th>A1</th><th>A2</th><th>B1</th><th>B2</th><th>C</th></tr></thead><tbody>
  ${Object.entries(CUTS).map(([k, c]) => `<tr><td>${SKILLS[k].icon} ${SKILLS[k].name}</td><td>${c.A1}</td><td>${c.A2}</td><td><b>${c.B1}</b></td><td><b>${c.B2}</b></td><td>${c.C}</td></tr>`).join("")}</tbody></table>
  <p class="small muted">Nguồn: Aptis Scoring System v2.1, British Council (Aptis General, bản 2020). Số trong bảng là điểm bắt đầu của mỗi bậc.</p></div>
  <div class="card"><h3>🧮 Cách tính kết quả</h3><ul class="fb"><li>Mỗi kỹ năng: điểm 0–50 và một bậc CEFR riêng. Thi đủ 4 kỹ năng có thêm tổng điểm /200 và CEFR tổng.</li><li>Điểm Grammar & Vocabulary không cộng vào tổng, nhưng nếu điểm kỹ năng nằm sát dưới một ngưỡng và điểm Core cao, kỹ năng đó được nâng lên bậc kế tiếp.</li><li>Speaking & Writing chấm theo thang từng phần (Part 1: 0–5, Part 2–3: 0–5, Part 4: 0–6) dựa trên hoàn thành nhiệm vụ, ngữ pháp, từ vựng, phát âm/chính tả, trôi chảy và liên kết.</li></ul>
  <p class="small muted">Điểm trong dashboard này là <b>ước lượng</b> để theo dõi tiến bộ, không phải điểm chính thức.</p></div></div>`;
});

route("tips", (view) => {
  crumbs([["Tổng quan", "#/"], ["Mẹo thi Aptis", ""]]);
  view.innerHTML = `<div class="page-head t-tips"><div class="ico tinted">💡</div><div><h1>Tổng hợp mẹo thi Aptis</h1><p>Mẹo tổng hợp từ tài liệu ôn tập của chị và hướng dẫn chính thức của British Council (Candidate Guide 2023, Scoring System v2.1).</p></div></div>
  <div class="grid g2">${TIPS.map(t => `<div class="card t-${t.color === "coral" ? "speaking" : t.color === "violet" ? "writing" : t.color === "teal" ? "reading" : t.color === "blue" ? "listening" : t.color === "amber" ? "core" : "slate"}" style="border-top:4px solid var(--c)"><h3>${t.icon} ${h(t.title)}</h3><ul class="fb">${t.items.map(i => `<li>${h(i)}</li>`).join("")}</ul></div>`).join("")}</div>
  ${mnemonicCard()}
  <div class="sec-title"><h2>🔗 Nguồn chính thức & video</h2></div>
  <div class="card"><ul class="fb">${OFFICIAL_LINKS.map(l => `<li><a href="${l.url}" target="_blank" rel="noopener">${h(l.title)}</a></li>`).join("")}</ul>
  <p class="small muted">Trang “Aptis Speaking test” của British Council có video demo bài thi nói – nên xem 1 lần để quen giao diện ghi âm.</p></div>`;
});

route("library", (view, args) => {
  crumbs([["Tổng quan", "#/"], ["Tài liệu gốc", ""]]);
  const cur = LIBRARY.find(d => d.id === args[0]) || LIBRARY[0];
  view.innerHTML = `<div class="page-head t-slate"><div class="ico tinted">📚</div><div><h1>Tài liệu gốc</h1><p>${LIBRARY.length} tài liệu ôn tập chị đã cung cấp, chuyển sang định dạng web để đọc trực tiếp và tra cứu.</p></div></div>
  <div class="grid" style="grid-template-columns:280px 1fr"><div class="card lib-list" style="padding:10px">${LIBRARY.map(d => `<a href="#/library/${d.id}" class="${d.id === cur.id ? "on" : ""}">${d.icon} ${h(d.title)}</a>`).join("")}</div>
  <div><div class="row" style="margin-bottom:8px"><b>${cur.icon} ${h(cur.title)}</b><span class="spacer"></span><a class="btn sm" href="${cur.file}" target="_blank">↗ Mở tab mới</a></div><iframe class="doc" src="${cur.file}" title="${h(cur.title)}"></iframe></div></div>`;
  if (innerWidth < 760) view.querySelector(".grid").style.gridTemplateColumns = "1fr";
});

route("settings", (view) => {
  crumbs([["Tổng quan", "#/"], ["Cài đặt", ""]]);
  const S = Store.settings;
  view.innerHTML = `<div class="page-head t-slate"><div class="ico tinted">⚙️</div><div><h1>Cài đặt</h1><p>Mọi thiết lập và tiến độ chỉ lưu trên trình duyệt này (localStorage), không gửi lên máy chủ nào.</p></div></div>
  <div class="grid g2"><div class="card"><h3>👤 Thông tin</h3><label class="small muted">Họ tên</label><input type="text" id="nm" value="${h(S.name || "Phạm Thị Thu Trang")}"><label class="small muted" style="display:block;margin-top:10px">Ngày thi dự kiến</label><input type="date" id="ed" value="${h(S.examDate || "")}"></div>
  <div class="card"><h3>🔊 Giọng đọc & nhận dạng giọng nói</h3><label class="small muted">Tốc độ đọc (Listening & bài mẫu): <b id="rv">${S.ttsRate || 0.92}</b></label><input type="range" id="rt" min="0.7" max="1.15" step="0.01" value="${S.ttsRate || 0.92}" style="width:100%">
    <label class="small muted" style="display:block;margin-top:10px">Giọng tiếng Anh khi nhận dạng lời nói</label><select id="sl"><option value="en-US">English (US) – nhận dạng tốt nhất trên Chrome</option><option value="en-GB">English (UK)</option></select>
    <div class="row" style="margin-top:10px"><button class="btn sm" id="tv">▶ Thử giọng nữ</button><button class="btn sm" id="tm">▶ Thử giọng nam</button><span class="small muted">${TTS.voices.length} giọng tiếng Anh trên máy</span></div>
    <p class="small muted">${Rec.supported ? "✅ Trình duyệt hỗ trợ nhận dạng giọng nói." : "⚠️ Trình duyệt này chưa hỗ trợ nhận dạng giọng nói – hãy dùng Chrome hoặc Edge (máy tính/Android). Bạn vẫn có thể gõ câu trả lời để được chấm."}</p></div>
  <div class="card"><h3>✨ Chấm bằng Claude (tuỳ chọn)</h3><p class="small">Bộ chấm mặc định chạy ngay trên trình duyệt, không cần mạng. Nếu có Claude API key (từ console.anthropic.com), có thể bật thêm nút “Chấm bằng Claude” để nhận nhận xét chi tiết hơn. Key chỉ lưu trên máy này và được gửi trực tiếp tới api.anthropic.com khi bấm chấm.</p>
    <label class="small muted">API key</label><input type="password" id="ak" value="${h(S.apiKey || "")}" placeholder="sk-ant-...">
    <label class="small muted" style="display:block;margin-top:8px">Model</label><input type="text" id="md" value="${h(S.model || "claude-sonnet-5-5")}">
    <p class="small muted">⚠️ Không đưa key vào mã nguồn khi đẩy lên GitHub. Mỗi lần chấm sẽ tính phí theo tài khoản API của chị.</p></div>
  <div class="card"><h3>💾 Sao lưu tiến độ</h3><p class="small">Xuất tiến độ ra tệp JSON để chuyển sang máy khác, hoặc nhập lại.</p><div class="row"><button class="btn sm" id="ex">⬇ Xuất tiến độ</button><label class="btn sm">⬆ Nhập tiến độ<input type="file" id="im" accept="application/json" hidden></label><button class="btn sm" id="rs" style="color:var(--bad)">🗑 Xoá toàn bộ tiến độ</button></div></div></div>
  <div class="row" style="margin-top:16px"><button class="btn primary" id="sv">💾 Lưu cài đặt</button></div>`;
  $("#sl").value = S.srLang || "en-US";
  $("#rt").oninput = e => $("#rv").textContent = e.target.value;
  $("#tv").onclick = () => TTS.speak("Hello, this is the female voice for your Aptis listening practice.", { gender: "W", rate: +$("#rt").value });
  $("#tm").onclick = () => TTS.speak("Hello, this is the male voice for your Aptis listening practice.", { gender: "M", rate: +$("#rt").value });
  $("#sv").onclick = () => { Object.assign(Store.data.settings, { name: $("#nm").value.trim(), examDate: $("#ed").value, ttsRate: $("#rt").value, srLang: $("#sl").value, apiKey: $("#ak").value.trim(), model: $("#md").value.trim() }); Store.save(); toast("Đã lưu cài đặt."); };
  $("#ex").onclick = () => { const d = { ...Store.data, settings: { ...Store.data.settings, apiKey: "" } }; const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify(d, null, 1)], { type: "application/json" })); a.download = "aptis-tien-do.json"; a.click(); };
  $("#im").onchange = e => { const f = e.target.files[0]; if (!f) return; f.text().then(t => { try { const d = JSON.parse(t); d.settings = { ...d.settings, apiKey: Store.settings.apiKey }; Store.data = d; Store.save(); Store.load(); toast("Đã nhập tiến độ."); } catch (err) { toast("Tệp không hợp lệ."); } }); };
  $("#rs").onclick = () => { if (confirm("Xoá toàn bộ điểm, bài làm và tiến độ? Không thể hoàn tác.")) { const keep = Store.data.settings; Store.data = { settings: keep }; Store.save(); Store.load(); toast("Đã xoá tiến độ."); } };
});

function lessonPage(view, skill, id) {
  const L = LESSONS.find(l => l.id === id); if (!L) return go("#/" + skill);
  crumbs([["Tổng quan", "#/"], [SKILLS[skill].name, "#/" + skill], [L.title, ""]]);
  const list = LESSONS.filter(l => l.skill === skill), idx = list.indexOf(L);
  view.innerHTML = `<div class="page-head t-${skill}"><div class="ico tinted">${L.icon}</div><div><h1>${h(L.title)}</h1><p class="small">Bấm 🔊 cạnh mỗi câu mẫu để nghe phát âm.</p></div></div>
  <div class="card lesson">${L.html}</div>
  <div class="row" style="margin-top:14px">${idx > 0 ? `<a class="btn" href="#/${skill}/lesson/${list[idx - 1].id}">← ${h(list[idx - 1].title)}</a>` : ""}<span class="spacer"></span>
  <button class="btn primary" id="done">${Store.data.lessons[id] ? "✓ Đã học xong" : "✔ Đánh dấu đã học"}</button>${idx < list.length - 1 ? `<a class="btn" href="#/${skill}/lesson/${list[idx + 1].id}">${h(list[idx + 1].title)} →</a>` : ""}</div>`;
  $("#done").onclick = () => { Store.lessonDone(id); $("#done").textContent = "✓ Đã học xong"; toast("Đã lưu tiến độ bài học."); };
  if ($("#adj-exercise")) $("#adj-exercise").innerHTML = `<h4>✏️ Bài tập điền tính từ (Ex1 – Buổi 1)</h4><p class="small muted">Tự điền vào chỗ trống, sau đó bấm “Gợi ý đáp án”. Có nhiều đáp án đúng.</p>` + ADJ_EXERCISE.map((e, k) => `<div class="q"><div class="qt">${k + 1}. ${h(e.s)}</div><input type="text" placeholder="Điền các tính từ, cách nhau bằng dấu /"><div class="row" style="margin-top:6px"><button class="btn sm" data-k="${k}">💡 Gợi ý đáp án</button></div><div class="explain"></div></div>`).join("");
  $$("#adj-exercise button[data-k]").forEach(b => b.onclick = () => { const ex = b.closest(".q").querySelector(".explain"); ex.className = "explain show ok"; ex.innerHTML = "<b>Gợi ý:</b> " + h(ADJ_EXERCISE[+b.dataset.k].a); });
  if ($("#eding-quiz")) { const Q = { instant: true, items: [], onChange() {} }; const box = $("#eding-quiz"); box.innerHTML = `<h4>✏️ Luyện nhanh -ed / -ing</h4>`;
    EDING_QUIZ.forEach((q, k) => { const d = document.createElement("div"); d.className = "q"; d.innerHTML = `<div class="qt">${k + 1}. ${h(q.q)}</div>`; d.appendChild(mcqBlock(Q, null, "ed" + k, q.options, q.answer, q.ex).el); box.appendChild(d); }); }
  attachSay(view);
}
