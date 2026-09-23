/* Permit Quest: Indiana - game engine */
(function () {
  "use strict";

  var LEVELS = [
    { xp: 0,    name: "Parking Lot" },
    { xp: 100,  name: "Neighborhood" },
    { xp: 250,  name: "Country Roads" },
    { xp: 450,  name: "Small Town" },
    { xp: 700,  name: "Highway" },
    { xp: 1000, name: "City Streets" },
    { xp: 1500, name: "Hoosier Road Star" }
  ];
  var BADGES = [
    { id: "first",   ico: "\uD83D\uDE97", nm: "First Drive",   ds: "Finish your first round" },
    { id: "perfect", ico: "\u2B50",       nm: "Perfect 10",    ds: "10 for 10 in a round" },
    { id: "streak5", ico: "\uD83D\uDD25", nm: "Hot Streak",    ds: "5 correct in a row" },
    { id: "streak10",ico: "\uD83C\uDF89", nm: "Unstoppable",   ds: "10 correct in a row" },
    { id: "signs",   ico: "\uD83D\uDEA7", nm: "Sign Sleuth",   ds: "15 Signs questions right" },
    { id: "signpics",ico: "\uD83E\uDEA7", nm: "Sign Spotter",  ds: "15 Sign Pictures right" },
    { id: "speed",   ico: "\u23F1\uFE0F", nm: "Speed Scholar", ds: "15 Speed Limits right" },
    { id: "comeback",ico: "\uD83D\uDCAA", nm: "Comeback Kid",  ds: "Clear your Fix-It pile" }
  ];
  var ROUND_LEN = 10, FUEL_MAX = 5;
  var CHEERS = ["Nice!", "Correct!", "You got it!", "Smooth driving!", "Right on!", "Nailed it!"];
  var STREAK_CHEERS = { 3: "3 in a row, rolling!", 5: "5 straight, on fire!", 8: "8 straight, unstoppable!", 10: "10 straight, legendary!" };

  var store = load() || { xp: 0, badges: [], review: [], bestStreak: 0, rounds: 0, catRight: {} };
  var state = null;

  function load() { try { return JSON.parse(localStorage.getItem("permitQuestIN")); } catch (e) { return null; } }
  function save() { try { localStorage.setItem("permitQuestIN", JSON.stringify(store)); } catch (e) {} }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function el(id) { return document.getElementById(id); }
  function show(id) {
    ["screen-home", "screen-quiz", "screen-result"].forEach(function (s) { el(s).classList.toggle("active", s === id); });
    window.scrollTo(0, 0);
  }

  /* ---------- confetti ---------- */
  var cv = el("confetti"), ctx = cv.getContext("2d"), parts = [], raf = null;
  function sizeCanvas() { cv.width = innerWidth; cv.height = innerHeight; }
  addEventListener("resize", sizeCanvas); sizeCanvas();
  function burst(n) {
    var colors = ["#ffb020", "#37d67a", "#4aa8ff", "#ff5d5d", "#ffcf6b", "#ffffff"];
    for (var i = 0; i < (n || 80); i++) {
      parts.push({ x: innerWidth / 2 + (Math.random() - .5) * 200, y: innerHeight * .35,
        vx: (Math.random() - .5) * 10, vy: Math.random() * -9 - 2, s: Math.random() * 7 + 3,
        c: colors[i % colors.length], r: Math.random() * Math.PI, vr: (Math.random() - .5) * .3, life: 90 + Math.random() * 40 });
    }
    if (!raf) tick();
  }
  function tick() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    parts = parts.filter(function (p) { return p.life > 0; });
    parts.forEach(function (p) {
      p.x += p.vx; p.y += p.vy; p.vy += .28; p.r += p.vr; p.life--;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
      ctx.fillStyle = p.c; ctx.globalAlpha = Math.min(1, p.life / 40);
      ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * .6); ctx.restore();
    });
    raf = parts.length ? requestAnimationFrame(tick) : (ctx.clearRect(0, 0, cv.width, cv.height), null);
  }

  /* ---------- levels & badges ---------- */
  function levelFor(xp) { var l = 0; LEVELS.forEach(function (L, i) { if (xp >= L.xp) l = i; }); return l; }
  function award(id) {
    if (store.badges.indexOf(id) < 0) { store.badges.push(id); save(); return true; }
    return false;
  }
  function badgeDef(id) { return BADGES.filter(function (b) { return b.id === id; })[0]; }

  /* ---------- home ---------- */
  var CATS = ["All"].concat(Array.from(new Set(QUESTIONS.map(function (q) { return q.cat; }))));
  var activeCat = "All";
  function renderHome() {
    var li = levelFor(store.xp), next = LEVELS[li + 1];
    el("stat-level").textContent = li + 1;
    el("stat-xp").textContent = store.xp;
    el("stat-streak").textContent = store.bestStreak;
    el("stat-badges").textContent = store.badges.length + "/" + BADGES.length;
    el("level-name").textContent = LEVELS[li].name;
    el("level-fill").style.width = next ? Math.min(100, 100 * (store.xp - LEVELS[li].xp) / (next.xp - LEVELS[li].xp)) + "%" : "100%";
    el("review-count").textContent = store.review.length;
    var chips = el("category-chips"); chips.innerHTML = "";
    CATS.forEach(function (c) {
      var b = document.createElement("button");
      b.className = "chip" + (c === activeCat ? " on" : "");
      b.textContent = c;
      b.onclick = function () { activeCat = c; renderHome(); };
      chips.appendChild(b);
    });
    var wall = el("badge-wall"); wall.innerHTML = "";
    BADGES.forEach(function (b) {
      var d = document.createElement("div");
      d.className = "badge" + (store.badges.indexOf(b.id) >= 0 ? " earned" : "");
      d.innerHTML = '<span class="ico">' + b.ico + "</span><span class='nm'>" + b.nm + "</span><span class='ds'>" + b.ds + "</span>";
      wall.appendChild(d);
    });
  }

  /* ---------- quiz engine ---------- */
  function poolFor(cat) {
    var p = QUESTIONS.filter(function (q) { return cat === "All" || q.cat === cat; });
    return p;
  }
  function startRound(mode) {
    var pool, title;
    if (mode === "review") {
      pool = store.review.map(function (i) { return QUESTIONS[i]; }).filter(Boolean);
      if (!pool.length) { alert("Your Fix-It pile is empty. Nice work!"); return; }
      title = "Fix-It Round";
    } else {
      pool = shuffle(poolFor(activeCat));
      title = activeCat === "All" ? "Practice Drive" : activeCat;
    }
    var picked = shuffle(pool).slice(0, ROUND_LEN);
    state = { mode: mode, title: title, qs: picked, idx: 0, fuel: FUEL_MAX, streak: 0,
              best: 0, right: 0, xpGain: 0, missed: [], newBadges: [], answered: 0 };
    renderQ();
    show("screen-quiz");
  }
  function qIndex(q) { return QUESTIONS.indexOf(q); }

  function renderQ() {
    var q = state.qs[state.idx];
    el("q-counter").textContent = "Question " + (state.idx + 1) + " of " + state.qs.length;
    el("q-cat").textContent = q.cat;
    el("q-text").textContent = q.q;
    var sfig = el("q-sign");
    if (q.sign && window.SIGNS && SIGNS[q.sign]) { sfig.innerHTML = SIGNS[q.sign]; sfig.style.display = "flex"; }
    else { sfig.innerHTML = ""; sfig.style.display = "none"; }
    var order = shuffle([0, 1, 2, 3]);
    var box = el("answers"); box.innerHTML = "";
    order.forEach(function (oi, pos) {
      var b = document.createElement("button");
      b.className = "answer";
      b.innerHTML = "<b>" + "ABCD"[pos] + ".</b> " + q.options[oi];
      b.onclick = function () { answer(q, oi, b); };
      box.appendChild(b);
    });
    var fuel = el("fuel"); fuel.innerHTML = "";
    for (var i = 0; i < FUEL_MAX; i++) {
      var c = document.createElement("span");
      c.className = "cell " + (i < state.fuel ? "full" : "empty");
      fuel.appendChild(c);
    }
    el("streak-num").textContent = state.streak;
    el("streak-display").classList.toggle("cold", state.streak === 0);
    el("xp-round").textContent = state.xpGain;
    var pct = state.idx / state.qs.length * 100;
    el("road-fill").style.width = pct + "%";
    el("road-car").style.left = pct + "%";
    el("feedback").classList.add("hidden");
  }

  function answer(q, picked, btn) {
    var btns = el("answers").children;
    for (var i = 0; i < btns.length; i++) btns[i].disabled = true;
    var fb = el("feedback"), head = el("feedback-head");
    state.answered++;
    if (picked === q.answer) {
      state.right++; state.streak++;
      state.best = Math.max(state.best, state.streak);
      var gain = 10 + (state.streak > 1 ? (state.streak - 1) * 2 : 0);
      state.xpGain += gain; store.xp += gain;
      store.catRight[q.cat] = (store.catRight[q.cat] || 0) + 1;
      if (state.mode === "review") {
        var ri = store.review.indexOf(qIndex(q));
        if (ri >= 0) store.review.splice(ri, 1);
      }
      btn.classList.add("correct");
      for (var k = 0; k < btns.length; k++) if (btns[k] !== btn) btns[k].classList.add("dim");
      var msg = STREAK_CHEERS[state.streak] || CHEERS[Math.floor(Math.random() * CHEERS.length)];
      head.textContent = msg + " (+" + gain + " XP)";
      el("feedback-why").textContent = q.why;
      el("feedback-ref").textContent = "Indiana Driver's Manual, " + q.ref;
      fb.className = "feedback good";
      burst(state.streak >= 3 ? 140 : 80);
      checkStreakBadges();
    } else {
      state.streak = 0; state.fuel--;
      var qi = qIndex(q);
      if (state.mode !== "review" && store.review.indexOf(qi) < 0 && qi >= 0) store.review.push(qi);
      btn.classList.add("wrong");
      for (var m = 0; m < btns.length; m++) {
        var b = btns[m];
        if (b.textContent.slice(3).trim() === q.options[q.answer] || b.innerHTML.indexOf(q.options[q.answer]) > -1) { /* handled below */ }
      }
      markCorrect(q);
      head.textContent = "Not quite. The answer is: " + q.options[q.answer];
      el("feedback-why").textContent = q.why;
      el("feedback-ref").textContent = "Indiana Driver's Manual, " + q.ref;
      fb.className = "feedback bad";
      state.missed.push(q);
      el("btn-next").textContent = state.fuel <= 0 ? "See results" : "Got it, next question";
    }
    store.bestStreak = Math.max(store.bestStreak, state.best);
    save();
    fb.classList.remove("hidden");
    fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  function markCorrect(q) {
    var btns = el("answers").children;
    for (var i = 0; i < btns.length; i++) {
      var t = btns[i].textContent;
      if (t.slice(3).trim() === q.options[q.answer]) { btns[i].classList.add("correct"); }
      else btns[i].classList.add("dim");
    }
  }
  function checkStreakBadges() {
    if (state.streak >= 5 && award("streak5")) state.newBadges.push("streak5");
    if (state.streak >= 10 && award("streak10")) state.newBadges.push("streak10");
    if ((store.catRight["Signs & Signals"] || 0) >= 15 && award("signs")) state.newBadges.push("signs");
    if ((store.catRight["Sign Pictures"] || 0) >= 15 && award("signpics")) state.newBadges.push("signpics");
    if ((store.catRight["Speed Limits"] || 0) >= 15 && award("speed")) state.newBadges.push("speed");
  }

  el("btn-next").onclick = function () {
    state.idx++;
    if (state.fuel <= 0 || state.idx >= state.qs.length) { finish(); }
    else renderQ();
  };

  function finish() {
    store.rounds++;
    if (store.rounds === 1 && award("first")) state.newBadges.push("first");
    if (state.answered > 0 && state.right === state.answered && state.right >= 5 && award("perfect")) state.newBadges.push("perfect");
    if (state.mode === "review" && store.review.length === 0 && award("comeback")) state.newBadges.push("comeback");
    save();
    var acc = state.answered ? Math.round(100 * state.right / state.answered) : 0;
    el("result-badge").textContent = state.title;
    el("result-title").textContent =
      acc === 100 ? "Flawless run!" :
      acc >= 80 ? "Nice driving!" :
      acc >= 60 ? "Getting there!" : "Keep practicing!";
    el("result-sub").textContent = state.fuel <= 0
      ? "You ran out of fuel this round. Review the misses below, then hit the road again."
      : "Every miss is now in your Fix-It pile so you can nail it next time.";
    el("r-score").textContent = state.right + "/" + state.answered;
    el("r-acc").textContent = acc + "%";
    el("r-xp").textContent = "+" + state.xpGain;
    el("r-streak").textContent = state.best;
    var nb = el("new-badges"); nb.innerHTML = "";
    var nbc = el("new-badges-card");
    if (state.newBadges.length) {
      nbc.style.display = "block";
      state.newBadges.forEach(function (id) {
        var d = badgeDef(id), div = document.createElement("div");
        div.className = "badge earned";
        div.innerHTML = '<span class="ico">' + d.ico + "</span><span class='nm'>" + d.nm + "</span><span class='ds'>" + d.ds + "</span>";
        nb.appendChild(div);
      });
    } else nbc.style.display = "none";
    var ml = el("missed-list"); ml.innerHTML = "";
    if (!state.missed.length) {
      ml.innerHTML = '<p class="ok-msg">Nothing missed. Clean sheet!</p>';
    } else state.missed.forEach(function (q) {
      var d = document.createElement("div");
      d.className = "miss";
      var pic = (q.sign && window.SIGNS && SIGNS[q.sign]) ? '<div class="sign-fig small">' + SIGNS[q.sign] + "</div>" : "";
      d.innerHTML = pic + "<b>Q:</b> " + q.q + "<p><b>A:</b> " + q.options[q.answer] + ". " + q.why + "</p>";
      ml.appendChild(d);
    });
    show("screen-result");
    if (acc === 100) burst(160);
  }

  /* ---------- wire up ---------- */
  el("btn-start").onclick = function () { startRound("practice"); };
  el("btn-review").onclick = function () { startRound("review"); };
  el("btn-again").onclick = function () { startRound(state && state.mode === "review" ? "review" : "practice"); };
  el("btn-home").onclick = function () { renderHome(); show("screen-home"); };

  renderHome();
})();
