/* ===== Luyện phản xạ nói theo chủ đề (shadowing) =====
   Quy trình theo tài liệu: Lượt 1 nghe (hiện chữ + giọng đọc chậm) → Lượt 2–3 đọc theo → tự nói với từ khóa
   → trả lời câu hỏi có đếm giờ → xem & nghe đáp án mẫu → nói lại. */
const Drill = {
  token: 0,
  rate() { return Math.min(parseFloat(Store.settings.ttsRate) || 0.92, 0.85); },
  say(text) { return new Promise(res => { TTS.stop(); TTS.speak(text, { gender: "W", rate: this.rate(), onend: res }); }); },
  readTime(text) { return clamp(Math.round(wc(text) * 0.55 + 1.5), 3, 40); },
  match(target, heard) {
    const T = wordsOf(target).map(w => w.toLowerCase()), H = new Set(wordsOf(heard).map(w => w.toLowerCase()));
    if (!T.length || !H.size) return null; return Math.round(T.filter(w => H.has(w)).length / T.length * 100);
  },
  /* chờ n giây, hiển thị đồng hồ; có thể ghi âm + nhận dạng giọng nói */
  wait(sec, { clockEl, barEl, listen, onText } = {}) {
    const my = this.token;
    return new Promise(res => {
      if (listen && Rec.supported) Rec.start((f, i) => onText && onText((f + i).trim()));
      const t = countdown(sec, l => { if (my !== this.token) { t.stop(); return; } if (clockEl) clockEl.textContent = fmtTime(l); if (barEl) barEl.style.width = (100 - l / sec * 100) + "%"; },
        () => { const heard = listen && Rec.active ? Rec.stop() : ""; res(heard); });
      this._timer = t; this._res = () => { t.stop(); const heard = Rec.active ? Rec.stop() : ""; res(heard); };
    });
  },
  skip() { this._res && this._res(); },
  stop() { this.token++; this._timer && this._timer.stop(); if (Rec.active) Rec.stop(); TTS.stop(); }
};

route("drill", (view, args) => {
  if (args[0]) return drillTopic(view, DRILLS.find(d => d.id === args[0]));
  crumbs([["Tổng quan", "#/"], ["Luyện phản xạ theo chủ đề", ""]]);
  view.innerHTML = `<div class="page-head t-speaking"><div class="ico tinted">🗣️</div><div><h1>Luyện phản xạ nói theo chủ đề</h1>
  <p>${DRILLS.length} chủ đề từ vựng hay gặp trong Aptis (tinh thần, sức khỏe, tiền bạc, kiến thức, địa điểm, con người, đồ ăn, giao thông, mua sắm, công nghệ…), luyện theo đúng quy trình trong tài liệu của Ms Mai Hien.</p></div></div>
  <div class="card"><h3>🔁 Quy trình luyện mỗi chủ đề</h3>
  <div class="formula"><span>① Từ vựng – bấm 🔊 nghe từng cụm</span>➜<span>② Câu ngắn: nghe 1 lượt → đọc theo 2 lượt</span>➜<span>③ Cả đoạn: nghe → đọc theo → tự nói chỉ nhìn từ khóa</span>➜<span>④ Câu hỏi: tự trả lời 30″/45″ → nghe đáp án mẫu → nói lại</span></div>
  <p class="small muted">Máy đọc chậm (tối đa 0,85) để dễ nghe theo. Khi đọc theo/tự nói, nếu dùng Chrome hoặc Edge, hệ thống nghe và báo % số từ bạn nói khớp với câu mẫu; lượt nói lại được chấm theo tiêu chí Aptis.</p></div>
  <div class="grid g4" style="margin-top:16px">${DRILLS.map(d => `<a class="card skill-card t-speaking" href="#/drill/${d.id}"><div class="head"><span class="em">${d.icon}</span><b>${h(d.title)}</b></div><span class="small muted">${h(d.en)} · ${d.sentences.length} câu · ${d.practice.length} câu hỏi</span><br>${Store.data.lessons["drill-" + d.id] ? '<span class="pill good">✓ Đã luyện</span>' : ""}</a>`).join("")}</div>`;
});

function drillTopic(view, d) {
  if (!d) return go("#/drill");
  crumbs([["Tổng quan", "#/"], ["Luyện phản xạ", "#/drill"], [d.title, ""]]);
  onLeave(() => Drill.stop());
  const idx = DRILLS.indexOf(d);
  view.innerHTML = `<div class="page-head t-speaking"><div class="ico tinted">${d.icon}</div><div><h1>${h(d.title)} <span class="muted" style="font-weight:500">· ${h(d.en)}</span></h1>${d.note ? `<p>${h(d.note)}</p>` : ""}</div></div>
  <div class="card"><h3>① Từ vựng</h3><table class="tbl"><tbody>${d.vocab.map(([e, v]) => `<tr><td class="ex"><b>${h(e)}</b></td><td class="muted">${h(v)}</td></tr>`).join("")}</tbody></table></div>
  <div class="card"><div class="row"><h3 style="margin:0">② Câu ngắn – nghe và đọc theo</h3><span class="spacer"></span><button class="btn primary" id="runS">▶ Luyện tự động</button><button class="btn" id="stopS">⏹ Dừng</button></div>
    <p class="small muted">Mỗi câu: lượt 1 máy đọc, lượt 2 và 3 bạn đọc theo trong thời gian hiển thị (thời gian tính theo độ dài câu).</p>
    <div class="phase" id="sPhase"><div class="clock" id="sClock">--:--</div><div style="flex:1"><div class="small" id="sLbl">Bấm “Luyện tự động” để bắt đầu, hoặc bấm 🔊 ở từng câu.</div><div class="bar"><i id="sBar"></i></div></div><button class="btn sm" id="sSkip">⏭</button></div>
    <div id="sList">${d.sentences.map((s, i) => `<div class="order-item" data-i="${i}" style="margin:6px 0"><span class="pill">${i + 1}</span><span style="flex:1" class="ex">${h(s)}</span><span class="small muted heard"></span></div>`).join("")}</div></div>
  <div class="card"><h3>③ Cả đoạn – đọc theo rồi tự nói với từ khóa</h3>${d.paragraphs.map((p, i) => `<div class="q" data-p="${i}"><div class="ptext transcript" style="font-size:15.5px">${h(p.text)}</div>
    <div class="tags keys" style="margin:8px 0;display:none">${p.keys.map(k => `<span>${h(k)}</span>`).join("")}</div>
    <div class="row"><button class="btn sm blue" data-act="listen">▶ Nghe (karaoke)</button><button class="btn sm" data-act="follow">🗣️ Đọc theo</button><button class="btn sm rec" data-act="self">🎯 Tự nói với từ khóa</button><span class="spacer"></span><span class="clock small" style="font-weight:800"></span></div><div class="pres small" style="margin-top:6px"></div></div>`).join("")}</div>
  <div class="card"><h3>④ Luyện trả lời câu hỏi</h3><p class="small muted">Lượt 1: tự trả lời trong 30″/45″ → máy hiện và đọc đáp án mẫu → Lượt 2: nói lại, hệ thống chấm theo tiêu chí Aptis.</p>
    ${d.practice.map((q, i) => `<div class="q" data-q="${i}"><div class="row"><b style="flex:1">${i + 1}. ${h(q.q)}</b><span class="pill">⏱ ${q.sec}″</span>${q.sup ? '<span class="tag-sup">Đáp án GV soạn</span>' : ""}<button class="btn sm primary" data-act="go">▶ Bắt đầu</button></div>
      <div class="phase" style="display:none"><div class="clock">00:00</div><div style="flex:1"><div class="small lbl"></div><div class="bar"><i></i></div></div><button class="btn sm" data-act="skip">⏭</button></div>
      <div class="out"></div></div>`).join("")}</div>
  <div class="row" style="margin-top:14px">${idx > 0 ? `<a class="btn" href="#/drill/${DRILLS[idx - 1].id}">← ${h(DRILLS[idx - 1].title)}</a>` : ""}<span class="spacer"></span><button class="btn primary" id="doneD">${Store.data.lessons["drill-" + d.id] ? "✓ Đã luyện" : "✔ Đánh dấu đã luyện"}</button>${idx < DRILLS.length - 1 ? `<a class="btn" href="#/drill/${DRILLS[idx + 1].id}">${h(DRILLS[idx + 1].title)} →</a>` : ""}</div>`;
  attachSay(view);
  $("#doneD").onclick = () => { Store.lessonDone("drill-" + d.id); $("#doneD").textContent = "✓ Đã luyện"; toast("Đã lưu tiến độ."); };

  /* ② câu ngắn */
  const rows = $$("#sList .order-item"), clock = $("#sClock"), bar = $("#sBar"), lbl = $("#sLbl");
  $("#sSkip").onclick = () => Drill.skip();
  $("#stopS").onclick = () => { Drill.stop(); lbl.textContent = "Đã dừng."; rows.forEach(r => r.classList.remove("right")); };
  $("#runS").onclick = async () => {
    Drill.stop(); const my = Drill.token;
    for (let i = 0; i < d.sentences.length; i++) {
      const s = d.sentences[i], row = rows[i]; rows.forEach(r => r.classList.toggle("right", r === row)); row.scrollIntoView({ block: "center", behavior: "smooth" });
      lbl.textContent = `Câu ${i + 1} · Lượt 1: nghe`; clock.textContent = "🔊"; bar.style.width = "0";
      await Drill.say(s); if (my !== Drill.token) return;
      for (const turn of [2, 3]) {
        lbl.innerHTML = `Câu ${i + 1} · Lượt ${turn}: <b>đọc theo</b> ${Rec.supported ? '<span class="rec-dot"></span>' : ""}`;
        const heard = await Drill.wait(Drill.readTime(s), { clockEl: clock, barEl: bar, listen: true }); if (my !== Drill.token) return;
        const m = Drill.match(s, heard); if (m != null) $(".heard", row).textContent = `khớp ${m}%`;
      }
    }
    rows.forEach(r => r.classList.remove("right")); lbl.textContent = "✅ Xong phần câu ngắn. Chuyển sang luyện cả đoạn."; clock.textContent = "✓";
  };

  /* ③ đoạn văn */
  $$("[data-p]", view).forEach(box => {
    const p = d.paragraphs[+box.dataset.p], txt = $(".ptext", box), keys = $(".keys", box), ck = $(".clock", box), res = $(".pres", box);
    const show = () => { txt.style.display = ""; keys.style.display = "none"; };
    $('[data-act="listen"]', box).onclick = () => { Drill.stop(); show(); karaoke(txt, p.text); };
    const doSpeak = async (hide) => {
      Drill.stop(); const my = Drill.token;
      txt.textContent = p.text; txt.classList.remove("karaoke");
      if (hide) { txt.style.display = "none"; keys.style.display = "flex"; } else show();
      const sec = Math.round(Drill.readTime(p.text) * (hide ? 1.3 : 1));
      res.innerHTML = `<span class="rec-dot"></span> ${hide ? "Tự nói dựa vào từ khóa" : "Đọc theo đoạn văn"} – ${sec} giây ${Rec.supported ? "" : "(trình duyệt không hỗ trợ nhận dạng giọng nói – vẫn luyện bình thường)"}`;
      const heard = await Drill.wait(sec, { clockEl: ck, listen: true }); if (my !== Drill.token) return;
      show(); const m = Drill.match(p.text, heard);
      res.innerHTML = m != null ? `Bạn nói được <b>${m}%</b> số từ của đoạn mẫu.${m < 60 ? " Hãy nghe lại và luyện thêm một lượt." : " Tốt lắm!"}<div class="transcript" style="margin-top:6px">${h(heard)}</div>` : "Hết giờ. Hãy so sánh với đoạn mẫu và luyện thêm một lượt.";
      ck.textContent = "";
    };
    $('[data-act="follow"]', box).onclick = () => doSpeak(false);
    $('[data-act="self"]', box).onclick = () => doSpeak(true);
  });

  /* ④ câu hỏi */
  $$("[data-q]", view).forEach(box => {
    const q = d.practice[+box.dataset.q], ph = $(".phase", box), out = $(".out", box), lblq = $(".lbl", box), ckq = $(".clock", box), barq = $(".bar i", box);
    $('[data-act="skip"]', box).onclick = () => Drill.skip();
    $('[data-act="go"]', box).onclick = async () => {
      Drill.stop(); const my = Drill.token; ph.style.display = "flex"; out.innerHTML = "";
      await Drill.say(q.q); if (my !== Drill.token) return;
      lblq.innerHTML = `<span class="rec-dot"></span> Lượt 1: tự trả lời`;
      const a1 = await Drill.wait(q.sec, { clockEl: ckq, barEl: barq, listen: true }); if (my !== Drill.token) return;
      out.innerHTML = `${a1 ? `<p class="small"><b>Lượt 1 bạn nói:</b> ${h(a1)}</p>` : ""}<div class="model"><b>📌 Đáp án mẫu</b><div class="kbox transcript" style="margin-top:6px"></div></div>`;
      lblq.textContent = "Nghe đáp án mẫu…"; ckq.textContent = "🔊";
      await new Promise(r => { karaoke($(".kbox", out), q.a); const iv = setInterval(() => { if (!speechSynthesis.speaking || my !== Drill.token) { clearInterval(iv); r(); } }, 300); });
      if (my !== Drill.token) return;
      lblq.innerHTML = `<span class="rec-dot"></span> Lượt 2: nói lại (có thể nhìn đáp án mẫu)`;
      const a2 = await Drill.wait(q.sec, { clockEl: ckq, barEl: barq, listen: true }); if (my !== Drill.token) return;
      lblq.textContent = "Hoàn thành."; ckq.textContent = "✓";
      const typed = document.createElement("div");
      typed.innerHTML = `<h4>Lượt 2 – lời nói của bạn <span class="small muted">(sửa lại hoặc gõ nếu micro chưa ghi nhận)</span></h4><textarea>${h(a2)}</textarea><div class="row" style="margin-top:6px"><button class="btn sm primary">🤖 Chấm điểm AI</button></div><div class="rep" style="margin-top:8px"></div>`;
      out.appendChild(typed);
      const sc = () => { const t = $("textarea", typed).value; const r = Scorer.speaking({ part: q.sec >= 45 ? 2 : 1, qi: q.sec >= 45 ? 1 : 0, question: q.q, text: t, seconds: q.sec, model: q.a }); $(".rep", typed).innerHTML = Scorer.reportHTML(r, { text: t, title: "Kết quả lượt 2" }); Scorer.bindReport($(".rep", typed)); };
      $("button", typed).onclick = sc; if (wc(a2) > 3) sc();
    };
  });
}
