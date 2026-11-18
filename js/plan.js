/* ===== Lộ trình 60 ngày đếm ngược đến ngày thi ===== */
const PLAN_KIND = {
  sp: { icon: "🎤", color: "var(--speaking)", name: "Speaking" },
  wr: { icon: "✍️", color: "var(--writing)", name: "Writing" },
  rd: { icon: "📖", color: "var(--reading)", name: "Reading" },
  ls: { icon: "🎧", color: "var(--listening)", name: "Listening" },
  gv: { icon: "🧩", color: "var(--core)", name: "Grammar & Vocab" },
  dr: { icon: "🗣️", color: "var(--speaking)", name: "Phản xạ" },
  lib: { icon: "📚", color: "var(--ink-3)", name: "Tài liệu" },
  gen: { icon: "💡", color: "var(--ink-3)", name: "Chung" }
};
const Plan60 = {
  get done() { return (Store.data.plan60 ||= {}); },
  key: (d, i) => d + "-" + i,
  localDate(s) { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); },
  today() { return new Date(new Date().toDateString()); },
  /* Ngày 60 là ngày liền trước ngày thi → Ngày k rơi vào (ngày thi − (61 − k)) */
  dateOf(d) { const ex = Store.settings.examDate; if (!ex) return null; const t = this.localDate(ex); t.setDate(t.getDate() - (61 - d)); return t; },
  daysLeft() { const ex = Store.settings.examDate; return ex ? Math.round((this.localDate(ex) - this.today()) / 864e5) : null; },
  dayDone(day) { return day.tasks.filter((_, i) => this.done[this.key(day.d, i)]).length; },
  firstOpen() { const d = PLAN60.days.find(x => this.dayDone(x) < x.tasks.length); return d ? d.d : 60; },
  /* Ngày hiện tại: theo lịch đếm ngược nếu đã đặt ngày thi, nếu chưa thì là ngày đầu tiên chưa hoàn thành */
  current() { const left = this.daysLeft(); if (left == null) return { d: this.firstOpen(), mode: "free" };
    if (left > 60) return { d: 1, mode: "before", left }; if (left <= 0) return { d: 60, mode: left === 0 ? "exam" : "after", left };
    return { d: 61 - left, mode: "count", left }; },
  autoHint(t) { if (!t.id) return ""; const r = Store.data.results[t.id]; if (r) return `<span class="pill good">Đã có kết quả: ${r.best}/50</span>`; if (Store.data.lessons[t.id]) return `<span class="pill good">✓ Đã học</span>`; return ""; }
};
const fmtD = d => d ? d.toLocaleDateString("vi-VN", { weekday: "short", day: "2-digit", month: "2-digit" }) : "";

route("plan", (view, args) => {
  crumbs([["Tổng quan", "#/"], ["Lộ trình 60 ngày", ""]]);
  const P = PLAN60, cur = Plan60.current(), left = Plan60.daysLeft();
  const total = P.days.reduce((a, d) => a + d.tasks.length, 0);
  const doneN = P.days.reduce((a, d) => a + Plan60.dayDone(d), 0);
  const daysFull = P.days.filter(d => Plan60.dayDone(d) === d.tasks.length).length;
  const ex = Store.settings.examDate;
  const status = cur.mode === "count" ? `Hôm nay là <b>Ngày ${cur.d}/60</b> của lộ trình`
    : cur.mode === "before" ? `Lộ trình bắt đầu ngày <b>${fmtD(Plan60.dateOf(1))}</b> (còn ${cur.left - 60} ngày nữa). Chị có thể học trước từ Ngày 1.`
    : cur.mode === "exam" ? `<b>Hôm nay là ngày thi.</b> Chúc chị bình tĩnh và làm bài tốt!`
    : cur.mode === "after" ? `Ngày thi đã qua. Chị có thể đặt ngày thi mới để bắt đầu lộ trình khác.`
    : `Chưa đặt ngày thi – lộ trình đang theo tiến độ tự học: <b>Ngày ${cur.d}</b> là ngày đầu tiên chưa hoàn thành.`;
  view.innerHTML = `
  <div class="page-head"><div class="ico tinted">🗓️</div><div><h1>Lộ trình 60 ngày đếm ngược đến ngày thi</h1>
  <p>60 ngày học, mỗi ngày khoảng 60–110 phút, đi từ dễ đến khó qua 5 giai đoạn. Mọi bài học, đề luyện và tài liệu đều mở ngay trong website. Đánh dấu ✔ từng việc khi hoàn thành – tiến độ lưu trên trình duyệt.</p></div></div>
  <div class="grid g2 plan-top">
    <div class="card countdown plan-cd">${left != null && left >= 0 ? `<span class="muted small">⏳ Còn đến ngày thi (${Plan60.localDate(ex).toLocaleDateString("vi-VN")})</span><div class="big">${left} <small>ngày</small></div>` : `<span class="muted small">⏳ Đặt ngày thi để lộ trình tự đếm ngược</span>`}
      <div class="row" style="margin-top:8px;gap:6px"><input type="date" id="pex" value="${h(ex || "")}"><button class="btn sm" id="psave">${ex ? "Đổi ngày thi" : "Lưu ngày thi"}</button></div>
      <p class="small" style="margin:.6em 0 0">${status}</p></div>
    <div class="card"><h3 style="margin-top:0">📈 Tiến độ</h3>
      <div class="plan-bar"><i style="width:${Math.round(doneN / total * 100)}%"></i></div>
      <p class="small muted">${doneN}/${total} việc đã xong · ${daysFull}/60 ngày hoàn thành</p>
      <div class="plan-phases">${P.phases.map(ph => { const ds = P.days.filter(d => d.d >= ph.from && d.d <= ph.to); const n = ds.reduce((a, d) => a + d.tasks.length, 0), k = ds.reduce((a, d) => a + Plan60.dayDone(d), 0);
        return `<a href="#ph${ph.from}" class="ph-chip ${cur.d >= ph.from && cur.d <= ph.to ? "on" : ""}"><b>Ngày ${ph.from}–${ph.to}</b><span>${h(ph.title.replace(/^Giai đoạn \d – /, ""))}</span><small>${k}/${n}</small></a>`; }).join("")}</div>
      <div class="row" style="margin-top:10px"><button class="btn sm primary" id="goToday">📍 Mở ngày ${cur.d}</button><button class="btn sm" id="pexp">Mở/đóng tất cả</button><button class="btn sm" id="preset">↺ Xóa đánh dấu</button></div></div>
  </div>
  ${P.phases.map(ph => `<div class="sec-title" id="ph${ph.from}"><h2>${h(ph.title)}</h2><span class="small muted">Ngày ${ph.from}–${ph.to}</span></div>
    <p class="muted small" style="margin-top:-6px">${h(ph.desc)}</p>
    <div class="plan-days">${P.days.filter(d => d.d >= ph.from && d.d <= ph.to).map(dayHTML).join("")}</div>`).join("")}`;

  function dayHTML(day) {
    const n = Plan60.dayDone(day), all = n === day.tasks.length, mins = day.tasks.reduce((a, t) => a + (t.m || 0), 0);
    const date = Plan60.dateOf(day.d), isCur = day.d === cur.d;
    return `<details class="card plan-day ${all ? "done" : ""} ${isCur ? "today" : ""}" id="day${day.d}" ${isCur ? "open" : ""}>
      <summary><span class="dnum">${all ? "✓" : day.d}</span><span class="dt"><b>Ngày ${day.d}${isCur && cur.mode === "count" ? " · Hôm nay" : ""}</b><span>${h(day.title)}</span></span>
      <span class="dmeta">${date ? fmtD(date) + " · " : ""}${n}/${day.tasks.length} việc · ~${mins}′</span></summary>
      <ul class="plan-tasks">${day.tasks.map((t, i) => { const K = PLAN_KIND[t.k] || PLAN_KIND.gen, k = Plan60.key(day.d, i), ok = !!Plan60.done[k];
        return `<li class="${ok ? "ok" : ""}"><input type="checkbox" data-k="${k}" ${ok ? "checked" : ""} aria-label="Đánh dấu hoàn thành">
          <span class="kind" style="--c:${K.color}" title="${K.name}">${K.icon}</span>
          <div><a href="${t.h}">${h(t.t)}</a> <span class="small muted">· ${t.m}′</span> ${Plan60.autoHint(t)}${t.n ? `<div class="small muted">${h(t.n)}</div>` : ""}</div></li>`; }).join("")}</ul></details>`;
  }
  $("#psave").onclick = () => { const v = $("#pex").value; if (!v) return toast("Chọn ngày thi trước."); Store.setSetting("examDate", v); toast("Đã lưu ngày thi – lộ trình đã tự sắp lịch."); render(); };
  $("#goToday").onclick = () => { const el = $("#day" + cur.d); el.open = true; el.scrollIntoView({ behavior: "smooth", block: "start" }); };
  let allOpen = false; $("#pexp").onclick = () => { allOpen = !allOpen; $$(".plan-day").forEach(d => d.open = allOpen); };
  $("#preset").onclick = () => { if (!confirm("Xóa toàn bộ đánh dấu hoàn thành của lộ trình 60 ngày?")) return; Store.data.plan60 = {}; Store.save(); render(); };
  $$(".plan-tasks input").forEach(c => c.onchange = () => {
    Plan60.done[c.dataset.k] = c.checked; if (!c.checked) delete Plan60.done[c.dataset.k]; Store.save();
    c.closest("li").classList.toggle("ok", c.checked);
    const det = c.closest(".plan-day"), d = +det.id.slice(3), day = PLAN60.days[d - 1], n = Plan60.dayDone(day);
    det.classList.toggle("done", n === day.tasks.length); $(".dnum", det).textContent = n === day.tasks.length ? "✓" : d;
    $(".dmeta", det).textContent = $(".dmeta", det).textContent.replace(/\d+\/\d+ việc/, `${n}/${day.tasks.length} việc`);
    if (n === day.tasks.length) toast(`🎉 Hoàn thành Ngày ${d}!`);
  });
  if (args[0] && /^\d+$/.test(args[0])) setTimeout(() => { const el = $("#day" + args[0]); if (el) { el.open = true; el.scrollIntoView({ block: "start" }); } }, 50);
});

/* Thẻ "Hôm nay" cho trang Tổng quan */
function planTodayCard() {
  const cur = Plan60.current(), day = PLAN60.days[cur.d - 1], n = Plan60.dayDone(day);
  return `<div class="card plan-home"><div class="row" style="justify-content:space-between;align-items:flex-start"><div><span class="muted small">🗓️ Lộ trình 60 ngày${cur.mode === "count" ? ` · còn ${cur.left} ngày đến kỳ thi` : cur.mode === "free" ? " · chưa đặt ngày thi" : ""}</span>
    <h3 style="margin:.2em 0">Ngày ${cur.d}: ${h(day.title)}</h3></div><a class="btn sm primary" href="#/plan/${cur.d}">Xem lộ trình →</a></div>
    <ul class="plan-tasks compact">${day.tasks.map((t, i) => { const K = PLAN_KIND[t.k] || PLAN_KIND.gen, ok = !!Plan60.done[Plan60.key(day.d, i)];
      return `<li class="${ok ? "ok" : ""}"><span class="kind" style="--c:${K.color}">${ok ? "✔" : K.icon}</span><div><a href="${t.h}">${h(t.t)}</a> <span class="small muted">· ${t.m}′</span></div></li>`; }).join("")}</ul>
    <p class="small muted" style="margin:.4em 0 0">${n}/${day.tasks.length} việc đã xong hôm nay.</p></div>`;
}
