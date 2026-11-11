/* ===== Aptis Dashboard – core utilities (router, storage, TTS, helpers) ===== */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const h = (s) => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const wordsOf = (t) => (String(t || "").trim().match(/[A-Za-zÀ-ỹ0-9'’-]+/g) || []);
const wc = (t) => wordsOf(t).length;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const LETTERS = "ABCDEFGHIJ";

/* ---------- Skills meta & official CEFR cut scores (Aptis General, Scoring System v2.1) ---------- */
const SKILLS = {
  speaking: { name: "Speaking", icon: "🎤", color: "var(--speaking)" },
  writing: { name: "Writing", icon: "✍️", color: "var(--writing)" },
  reading: { name: "Reading", icon: "📖", color: "var(--reading)" },
  listening: { name: "Listening", icon: "🎧", color: "var(--listening)" },
  core: { name: "Grammar & Vocab", icon: "🧩", color: "var(--core)" }
};
const CUTS = {
  listening: { A1: 8, A2: 16, B1: 24, B2: 34, C: 42 },
  reading: { A1: 8, A2: 16, B1: 26, B2: 38, C: 46 },
  writing: { A1: 6, A2: 18, B1: 26, B2: 40, C: 48 },
  speaking: { A1: 4, A2: 16, B1: 26, B2: 41, C: 48 }
};
function cefrOf(skill, score) {
  const c = CUTS[skill]; if (!c || score == null) return "—";
  let lv = "A0"; for (const k of ["A1", "A2", "B1", "B2", "C"]) if (score >= c[k]) lv = k; return lv;
}
/* Quy đổi tỉ lệ đúng (0–1) sang thang 0–50 ước lượng cho Reading/Listening/Core */
const toScale = (ratio) => Math.round(clamp(ratio, 0, 1) * 50);

/* ---------- Storage ---------- */
const Store = {
  key: "aptis-trang-v1",
  data: null,
  load() { try { this.data = JSON.parse(localStorage.getItem(this.key)) || {}; } catch (e) { this.data = {}; }
    this.data.results ||= {}; this.data.lessons ||= {}; this.data.log ||= []; this.data.settings ||= {}; return this.data; },
  save() { try { localStorage.setItem(this.key, JSON.stringify(this.data)); } catch (e) {} },
  result(id, obj) {
    const prev = this.data.results[id];
    const r = { ...obj, date: new Date().toISOString() };
    r.best = Math.max(prev?.best ?? 0, obj.scale ?? 0);
    r.attempts = (prev?.attempts || 0) + 1;
    this.data.results[id] = r;
    this.data.log.unshift({ id, skill: obj.skill, title: obj.title, scale: obj.scale, date: r.date });
    this.data.log = this.data.log.slice(0, 40);
    this.save();
  },
  lessonDone(id) { this.data.lessons[id] = Date.now(); this.save(); },
  get settings() { return this.data.settings; },
  setSetting(k, v) { this.data.settings[k] = v; this.save(); }
};
Store.load();

/* ---------- Toast ---------- */
function toast(msg, ms = 2600) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove("show"), ms); }

/* ---------- Seeded shuffle (để phương án trắc nghiệm không luôn ở vị trí A) ---------- */
function seedRand(str) { let s = 0; for (const c of String(str)) s = (s * 31 + c.charCodeAt(0)) >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
function shuffledIdx(n, seed) { const r = seedRand(seed); const a = [...Array(n).keys()]; for (let i = n - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

/* ---------- Text-to-Speech ---------- */
const TTS = {
  voices: [],
  init() {
    if (!("speechSynthesis" in window)) return;
    const load = () => { this.voices = speechSynthesis.getVoices().filter(v => /^en/i.test(v.lang)); };
    load(); speechSynthesis.onvoiceschanged = load;
  },
  pick(gender) {
    const v = this.voices; if (!v.length) return null;
    const female = /female|samantha|victoria|karen|moira|tessa|serena|libby|sonia|hazel|susan|zira|aria|jenny|emma|kate|fiona|google uk english female|google us english/i;
    const male = /\bmale|daniel|alex|fred|george|ryan|guy|david|mark|arthur|oliver|thomas|google uk english male/i;
    const gb = v.filter(x => /en-GB/i.test(x.lang));
    const pool = gb.length ? gb.concat(v) : v;
    const re = gender === "M" ? male : female;
    return pool.find(x => re.test(x.name) && !(gender === "M" && /female/i.test(x.name))) || pool[gender === "M" ? Math.min(1, pool.length - 1) : 0];
  },
  speak(text, { gender = "W", rate, onboundary, onend } = {}) {
    if (!("speechSynthesis" in window)) { toast("Trình duyệt không hỗ trợ đọc giọng nói (TTS)."); onend && onend(); return; }
    const u = new SpeechSynthesisUtterance(text);
    const v = this.pick(gender); if (v) u.voice = v;
    u.lang = v?.lang || "en-GB";
    u.rate = rate ?? (parseFloat(Store.settings.ttsRate) || 0.92);
    u.pitch = gender === "M" ? 0.82 : 1.08;
    if (onboundary) u.onboundary = onboundary;
    u.onend = () => onend && onend(); u.onerror = () => onend && onend();
    speechSynthesis.speak(u);
    return u;
  },
  /* Đọc một kịch bản nhiều lượt lời; trả về Promise */
  playScript(lines, { onLine } = {}) {
    return new Promise(res => {
      speechSynthesis.cancel(); let i = 0;
      const next = () => {
        if (i >= lines.length) { onLine && onLine(-1); return res(); }
        const L = lines[i]; onLine && onLine(i);
        this.speak(L.t, { gender: L.sp === "M" ? "M" : "W", onend: () => { i++; setTimeout(next, 380); } });
      };
      next();
    });
  },
  stop() { if ("speechSynthesis" in window) speechSynthesis.cancel(); }
};
TTS.init();

/* Gắn nút 🔊 cho mọi phần tử .ex trong vùng chứa */
function attachSay(root) {
  $$(".ex", root).forEach(el => {
    if (el.querySelector(":scope > .say")) return;
    const b = document.createElement("button"); b.className = "say"; b.title = "Nghe phát âm mẫu"; b.textContent = "🔊";
    b.onclick = (e) => { e.stopPropagation(); TTS.stop(); TTS.speak(el.textContent.replace("🔊", "").trim(), { gender: "W" }); };
    el.appendChild(b);
  });
}

/* Đọc "karaoke": tô sáng từng từ khi máy đọc – minh họa trực quan cho bài mẫu */
function karaoke(container, text, gender = "W") {
  TTS.stop();
  const toks = text.split(/(\s+)/);
  let pos = 0; const spans = [];
  container.innerHTML = toks.map(t => { if (/^\s+$/.test(t)) { pos += t.length; return t; } const s = pos; pos += t.length; spans.push({ s, e: pos }); return `<span data-s="${s}">${h(t)}</span>`; }).join("");
  container.classList.add("karaoke");
  const els = $$("span", container);
  TTS.speak(text, { gender, onboundary: (ev) => {
      const ci = ev.charIndex; let k = spans.findIndex(sp => ci >= sp.s && ci < sp.e); if (k < 0) return;
      els.forEach(e => e.classList.remove("on")); els[k]?.classList.add("on");
    }, onend: () => els.forEach(e => e.classList.remove("on")) });
}

/* ---------- SVG progress ring ---------- */
function ringSVG(pct, color, size = 64, stroke = 7) {
  const r = (size - stroke) / 2, c = 2 * Math.PI * r, off = c * (1 - clamp(pct, 0, 1));
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="${Math.round(pct * 100)}%">
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--line)" stroke-width="${stroke}"/>
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round"
      stroke-dasharray="${c}" stroke-dashoffset="${off}" transform="rotate(-90 ${size / 2} ${size / 2})"/>
    <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" font-size="${size / 4.6}" font-weight="700" fill="var(--ink)">${Math.round(pct * 100)}%</text></svg>`;
}

/* ---------- Router ---------- */
const Routes = {};
function route(name, fn) { Routes[name] = fn; }
function go(hash) { location.hash = hash; }
let cleanupFns = [];
function onLeave(fn) { cleanupFns.push(fn); }
function render() {
  cleanupFns.forEach(f => { try { f(); } catch (e) {} }); cleanupFns = [];
  TTS.stop();
  const parts = (location.hash.replace(/^#\/?/, "") || "").split("/").filter(Boolean);
  const key = parts[0] || "home";
  $$("#nav a").forEach(a => a.classList.toggle("active", a.dataset.r === key));
  $("#sidebar").classList.remove("open");
  $("#topRight").innerHTML = "";
  const fn = Routes[key] || Routes.home;
  const view = $("#view"); view.innerHTML = "";
  fn(view, parts.slice(1));
  attachSay(view);
  window.scrollTo(0, 0);
}
function crumbs(items) {
  $("#crumbs").innerHTML = items.map((it, i) => i === items.length - 1 ? `<b>${h(it[0])}</b>` : `<a href="${it[1]}">${h(it[0])}</a>`).join(" › ");
}
window.addEventListener("hashchange", render);
document.addEventListener("DOMContentLoaded", () => {
  $("#menuBtn").onclick = () => $("#sidebar").classList.toggle("open");
  render();
});

/* ---------- Timer helper ---------- */
function fmtTime(s) { s = Math.max(0, Math.round(s)); return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`; }
function countdown(seconds, onTick, onDone) {
  const end = Date.now() + seconds * 1000; let stopped = false;
  const tick = () => { if (stopped) return; const left = (end - Date.now()) / 1000; onTick(Math.max(0, left)); if (left <= 0) { stopped = true; onDone && onDone(); } else setTimeout(tick, 200); };
  tick(); return { stop() { stopped = true; } };
}
