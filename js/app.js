(function () {
  'use strict';

  // ---- Exam rules (dmv.virginia.gov "The Knowledge Exam") ----
  var PART1 = { count: 10, pass: 10, name: 'Traffic Signs' };
  var PART2 = { count: 30, pass: 24, name: 'General Knowledge' };
  var NUM_TESTS = 15;
  var BANK_SEED = 20261004;
  var STORE_KEY = 'vaDmvPractice.v1';

  var VA = window.VA || {};
  // Part 1 is road signs only; picture questions about signals, lane-use
  // signals and pavement markings join the Part 2 pool.
  var NON_SIGN_TOPICS = { 'Traffic Signals': true, 'Lane Use Signals': true, 'Pavement Markings': true };
  var ALL_SIGN_QS = VA.signQuestions || [];
  var SIGN_BANK = ALL_SIGN_QS.filter(function (q) { return !NON_SIGN_TOPICS[q.topic]; });
  var GENERAL_BANK = (VA.generalQuestions || []).concat(ALL_SIGN_QS.filter(function (q) { return NON_SIGN_TOPICS[q.topic]; }));
  var ART = VA.signArt || {};
  var BY_ID = {};
  SIGN_BANK.concat(GENERAL_BANK).forEach(function (q) { BY_ID[q.id] = q; });

  var app = document.getElementById('app');
  var statusEl = document.getElementById('topbar-status');

  // ---- Deterministic randomness ----
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function shuffle(arr, rnd) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rnd() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  // Deal questions into tests from repeated shuffles of the bank so every
  // question is used about equally often and none repeats within one test.
  function deal(bank, perTest, numTests, seed, keyOf) {
    var distinct = {};
    bank.forEach(function (q) { distinct[keyOf(q)] = true; });
    if (Object.keys(distinct).length < perTest) {
      throw new Error('Question bank too small: need ' + perTest + ' distinct items.');
    }
    var rnd = mulberry32(seed);
    var queue = [];
    var tests = [];
    for (var t = 0; t < numTests; t++) {
      var picked = [];
      var used = {};
      var i = 0;
      while (picked.length < perTest) {
        if (i >= queue.length) queue = queue.concat(shuffle(bank, rnd));
        var q = queue[i];
        if (used[keyOf(q)]) { i++; continue; }
        used[keyOf(q)] = true;
        picked.push(q);
        queue.splice(i, 1);
      }
      tests.push(picked);
    }
    return tests;
  }

  function optionOrder(q, rnd) {
    var idx = q.options.map(function (_, i) { return i; });
    return q.fixedOrder ? idx : shuffle(idx, rnd);
  }

  function buildExam(seed, signQs, generalQs) {
    var rnd = mulberry32(seed ^ 0x9E3779B9);
    function item(q) { return { q: q, order: optionOrder(q, rnd) }; }
    return { 1: signQs.map(item), 2: generalQs.map(item) };
  }

  var fixedTests = null;
  function getFixedTests() {
    if (!fixedTests) {
      var s = deal(SIGN_BANK, PART1.count, NUM_TESTS, BANK_SEED, function (q) { return q.art; });
      var g = deal(GENERAL_BANK, PART2.count, NUM_TESTS, BANK_SEED + 1, function (q) { return q.id; });
      fixedTests = s.map(function (signs, i) { return { signs: signs, general: g[i] }; });
    }
    return fixedTests;
  }

  // testNo 1..15 → fixed practice test; testNo 0 → random exam from `seed`.
  function examFor(testNo, seed) {
    if (testNo > 0) {
      var t = getFixedTests()[testNo - 1];
      return buildExam(BANK_SEED + testNo, t.signs, t.general);
    }
    var s = deal(SIGN_BANK, PART1.count, 1, seed, function (q) { return q.art; })[0];
    var g = deal(GENERAL_BANK, PART2.count, 1, seed + 1, function (q) { return q.id; })[0];
    return buildExam(seed, s, g);
  }

  // ---- Storage ----
  function loadStore() {
    try {
      var s = JSON.parse(localStorage.getItem(STORE_KEY));
      if (s && Array.isArray(s.history)) return s;
    } catch (e) { /* corrupted or unavailable storage → start fresh */ }
    return { history: [], settings: { stopOnFail: true, instantFeedback: false }, inProgress: null };
  }
  var store = loadStore();
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* private mode */ }
  }

  // ---- Helpers ----
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  var LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];
  function pct(n, d) { return d ? Math.round((n / d) * 1000) / 10 : 0; }
  function fmtDuration(sec) {
    var m = Math.floor(sec / 60), s = sec % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }
  function fmtDate(iso) {
    var d = new Date(iso);
    return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) +
      ' ' + d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
  }
  function testLabel(testNo) { return testNo > 0 ? 'Practice Test ' + testNo : 'Random Exam'; }
  function setStatus(html) { statusEl.innerHTML = html || ''; }

  // ---- Exam session ----
  var session = null; // { testNo, seed, exam, part, idx, responses:{1:[],2:[]}, selected, revealed, startedAt, elapsedBefore }
  var timerId = null;

  function startExam(testNo, seed) {
    session = {
      testNo: testNo,
      seed: seed,
      exam: examFor(testNo, seed),
      part: 1,
      idx: 0,
      responses: { 1: [], 2: [] },
      selected: null,
      revealed: false,
      startedAt: Date.now(),
      elapsedBefore: 0
    };
    persistSession();
    renderQuestion();
  }

  function persistSession() {
    if (!session) { store.inProgress = null; save(); return; }
    store.inProgress = {
      testNo: session.testNo,
      seed: session.seed,
      part: session.part,
      responses: session.responses,
      elapsed: elapsedSec()
    };
    save();
  }

  function resumeExam() {
    var p = store.inProgress;
    session = {
      testNo: p.testNo,
      seed: p.seed,
      exam: examFor(p.testNo, p.seed),
      part: p.part,
      idx: p.responses[p.part].length,
      responses: p.responses,
      selected: null,
      revealed: false,
      startedAt: Date.now(),
      elapsedBefore: p.elapsed || 0
    };
    if (session.idx >= session.exam[session.part].length) { advance(); return; }
    renderQuestion();
  }

  function elapsedSec() {
    if (!session) return 0;
    return session.elapsedBefore + Math.floor((Date.now() - session.startedAt) / 1000);
  }

  function tally(part) {
    var r = session.responses[part];
    var correct = r.filter(function (x) { return x.correct; }).length;
    return { correct: correct, wrong: r.length - correct, answered: r.length };
  }

  function currentItem() { return session.exam[session.part][session.idx]; }

  function submitAnswer() {
    if (!session || session.selected === null || session.revealed) return;
    var it = currentItem();
    var choice = it.order[session.selected];
    session.responses[session.part].push({ id: it.q.id, order: it.order, choice: choice, correct: choice === it.q.answer });
    persistSession();
    if (store.settings.instantFeedback) {
      session.revealed = true;
      renderQuestion();
    } else {
      advance();
    }
  }

  // Decide what happens after an answered question.
  function advance() {
    var cfg = session.part === 1 ? PART1 : PART2;
    var t = tally(session.part);
    var maxWrong = cfg.count - cfg.pass;
    var failed = t.wrong > maxWrong;
    var partDone = t.answered >= cfg.count;

    if (failed && (store.settings.stopOnFail || partDone)) { finish(session.part === 1 ? 'part1' : 'part2'); return; }
    if (partDone) {
      if (session.part === 1) { renderPartBreak(); return; }
      finish(null);
      return;
    }
    session.idx = t.answered;
    session.selected = null;
    session.revealed = false;
    renderQuestion();
  }

  function finish(failedPart) {
    stopTimer();
    var t1 = tally(1), t2 = tally(2);
    var p1Passed = t1.correct >= PART1.pass;
    var p2Passed = p1Passed && t2.correct >= PART2.pass;
    var responses = [];
    [1, 2].forEach(function (part) {
      session.responses[part].forEach(function (r) {
        responses.push({ part: part, id: r.id, order: r.order, choice: r.choice });
      });
    });
    var record = {
      key: Date.now(),
      testNo: session.testNo,
      seed: session.seed,
      date: new Date().toISOString(),
      durationSec: elapsedSec(),
      p1: { correct: t1.correct, answered: t1.answered },
      p2: { correct: t2.correct, answered: t2.answered },
      passed: p1Passed && p2Passed,
      failedPart: p1Passed ? (p2Passed ? null : 2) : 1,
      terminatedEarly: !!failedPart && (failedPart === 'part1' ? t1.answered < PART1.count : t2.answered < PART2.count),
      responses: responses
    };
    store.history.unshift(record);
    session = null;
    store.inProgress = null;
    save();
    renderResult(record, true);
  }

  function quitExam() {
    if (!confirm('Quit this exam? Your progress will not be scored.')) return;
    stopTimer();
    session = null;
    store.inProgress = null;
    save();
    renderHome();
  }

  function startTimer() {
    stopTimer();
    timerId = setInterval(function () {
      var el = document.getElementById('timer');
      if (el && session) el.textContent = fmtDuration(elapsedSec());
    }, 1000);
  }
  function stopTimer() { clearInterval(timerId); timerId = null; }

  // ---- Views ----
  function bestFor(testNo) {
    var best = null;
    store.history.forEach(function (h) {
      if (h.testNo !== testNo) return;
      if (!best || scoreValue(h) > scoreValue(best)) best = h;
    });
    return best;
  }
  function scoreValue(h) { return (h.passed ? 1000 : 0) + h.p1.correct * 31 + h.p2.correct; }
  function attemptsFor(testNo) { return store.history.filter(function (h) { return h.testNo === testNo; }); }

  function scoreLine(h) {
    if (h.failedPart === 1) return 'Signs ' + h.p1.correct + '/' + h.p1.answered + (h.p1.answered < PART1.count ? ' (stopped)' : '');
    return 'Signs ' + h.p1.correct + '/10 · Knowledge ' + h.p2.correct + '/' + (h.p2.answered < PART2.count ? h.p2.answered + ' (stopped)' : PART2.count);
  }

  function renderHome() {
    stopTimer();
    session = null;
    setStatus('');
    var h = store.history;
    var passes = h.filter(function (x) { return x.passed; }).length;
    var full2 = h.filter(function (x) { return x.p2.answered === PART2.count; });
    var avg2 = full2.length ? Math.round(full2.reduce(function (a, x) { return a + x.p2.correct; }, 0) / full2.length * 10) / 10 : null;
    var passedTests = {};
    h.forEach(function (x) { if (x.passed && x.testNo > 0) passedTests[x.testNo] = true; });

    var cards = '';
    for (var n = 1; n <= NUM_TESTS; n++) {
      var best = bestFor(n);
      var tries = attemptsFor(n).length;
      var badge = !best ? '<span class="badge badge-new">Not taken</span>'
        : best.passed ? '<span class="badge badge-pass">Passed</span>'
        : '<span class="badge badge-fail">Not passed</span>';
      cards += '<button class="test-card" data-test="' + n + '">' +
        '<span class="test-num">' + n + '</span>' +
        '<span class="test-body"><span class="test-title">Practice Test ' + n + '</span>' +
        '<span class="test-meta">' + (best ? 'Best: ' + esc(scoreLine(best)) + ' · ' + tries + ' attempt' + (tries === 1 ? '' : 's') : '10 sign + 30 knowledge questions') + '</span></span>' +
        badge + '</button>';
    }

    var resume = '';
    if (store.inProgress) {
      var ip = store.inProgress;
      resume = '<div class="notice"><div><strong>Exam in progress:</strong> ' + esc(testLabel(ip.testNo)) +
        ' — Part ' + ip.part + ', question ' + (ip.responses[ip.part].length + 1) + '.</div>' +
        '<div class="notice-actions"><button class="btn btn-primary" id="resume">Resume</button>' +
        '<button class="btn btn-ghost" id="discard">Discard</button></div></div>';
    }

    var hist = '';
    if (h.length) {
      hist = '<section class="panel"><div class="panel-head"><h2>Attempt history</h2>' +
        '<button class="btn btn-ghost btn-small" id="clear-history">Clear history</button></div>' +
        '<div class="table-wrap"><table class="history"><thead><tr><th>Date</th><th>Exam</th><th>Part 1</th><th>Part 2</th><th>Time</th><th>Result</th><th></th></tr></thead><tbody>' +
        h.slice(0, 50).map(function (x) {
          return '<tr><td>' + esc(fmtDate(x.date)) + '</td><td>' + esc(testLabel(x.testNo)) + '</td>' +
            '<td>' + x.p1.correct + '/' + PART1.count + '</td>' +
            '<td>' + (x.failedPart === 1 ? '<span class="muted">—</span>' : x.p2.correct + '/' + PART2.count + ' <span class="muted">(' + pct(x.p2.correct, PART2.count) + '%)</span>') + '</td>' +
            '<td>' + fmtDuration(x.durationSec) + '</td>' +
            '<td>' + (x.passed ? '<span class="badge badge-pass">Pass</span>' : '<span class="badge badge-fail">Fail</span>') + '</td>' +
            '<td><button class="btn btn-link" data-review="' + x.key + '">Review</button></td></tr>';
        }).join('') + '</tbody></table></div></section>';
    }

    app.innerHTML =
      '<section class="hero">' +
        '<div><h1>Virginia Driver Knowledge Exam</h1>' +
        '<p class="lead">Fifteen full-length practice exams built from the Virginia Driver’s Manual, scored exactly like the DMV computer test.</p>' +
        '<ul class="rules">' +
          '<li><strong>Part 1 — Traffic Signs:</strong> 10 questions. You must answer <strong>all 10</strong> correctly to continue.</li>' +
          '<li><strong>Part 2 — General Knowledge:</strong> 30 questions. You must answer <strong>at least 24</strong> (80%) correctly to pass.</li>' +
        '</ul></div>' +
        '<div class="stats">' +
          stat('Tests passed', Object.keys(passedTests).length + ' / ' + NUM_TESTS) +
          stat('Attempts', h.length + (h.length ? ' <small>(' + passes + ' pass)</small>' : '')) +
          stat('Avg. Part 2', avg2 === null ? '—' : avg2 + ' / 30') +
        '</div>' +
      '</section>' +
      resume +
      '<section class="panel"><div class="panel-head"><h2>Practice exams</h2>' +
        '<button class="btn btn-secondary btn-small" id="random-exam">Random exam</button></div>' +
        '<div class="test-grid">' + cards + '</div></section>' +
      '<section class="panel settings"><h2>Exam settings</h2>' +
        toggle('stopOnFail', 'End the exam as soon as passing is no longer possible', 'Like the DMV computer: one missed sign question, or a 7th miss in Part 2, ends the exam.') +
        toggle('instantFeedback', 'Show the correct answer after each question', 'Study mode. Turn off to simulate test day.') +
      '</section>' +
      hist;

    app.querySelectorAll('[data-test]').forEach(function (b) {
      b.addEventListener('click', function () { renderIntro(Number(b.getAttribute('data-test')), 0); });
    });
    app.querySelectorAll('[data-review]').forEach(function (b) {
      b.addEventListener('click', function () {
        var key = Number(b.getAttribute('data-review'));
        var rec = store.history.filter(function (x) { return x.key === key; })[0];
        if (rec) renderResult(rec, false);
      });
    });
    app.querySelectorAll('[data-setting]').forEach(function (inp) {
      inp.addEventListener('change', function () {
        store.settings[inp.getAttribute('data-setting')] = inp.checked;
        save();
      });
    });
    on('random-exam', function () { renderIntro(0, Math.floor(Math.random() * 2147483647)); });
    on('resume', resumeExam);
    on('discard', function () {
      if (!confirm('Discard the exam in progress?')) return;
      store.inProgress = null; save(); renderHome();
    });
    on('clear-history', function () {
      if (!confirm('Delete all attempt history? This cannot be undone.')) return;
      store.history = []; save(); renderHome();
    });
    window.scrollTo(0, 0);
  }

  function stat(label, value) {
    return '<div class="stat"><span class="stat-value">' + value + '</span><span class="stat-label">' + esc(label) + '</span></div>';
  }
  function toggle(key, label, hint) {
    return '<label class="toggle"><input type="checkbox" data-setting="' + key + '"' + (store.settings[key] ? ' checked' : '') + '>' +
      '<span class="toggle-ui" aria-hidden="true"></span><span><span class="toggle-label">' + esc(label) + '</span>' +
      '<span class="toggle-hint">' + esc(hint) + '</span></span></label>';
  }
  function on(id, fn) { var el = document.getElementById(id); if (el) el.addEventListener('click', fn); }

  function renderIntro(testNo, seed) {
    if (store.inProgress && !confirm('Starting a new exam discards the one in progress. Continue?')) return;
    store.inProgress = null; save();
    setStatus('');
    app.innerHTML =
      '<section class="kiosk intro">' +
        '<h1>' + esc(testLabel(testNo)) + '</h1>' +
        '<p class="lead">Read each question and choose the best answer. Once you submit an answer you cannot go back.</p>' +
        '<ol class="intro-steps">' +
          '<li><span class="step-num">1</span><div><strong>Traffic Signs</strong><br>10 questions · all 10 must be correct</div></li>' +
          '<li><span class="step-num">2</span><div><strong>General Knowledge</strong><br>30 questions · 24 correct to pass (80%)</div></li>' +
        '</ol>' +
        '<p class="muted">' + (store.settings.stopOnFail ? 'Test-day rules: the exam ends as soon as a passing score is no longer possible.' : 'All questions will be shown even after a passing score is no longer possible.') +
        (store.settings.instantFeedback ? ' Study mode is on: answers are revealed after each question.' : '') +
        ' Keyboard: press A–D to choose, Enter to submit.</p>' +
        '<div class="actions"><button class="btn btn-ghost" id="back">Back</button>' +
        '<button class="btn btn-primary btn-large" id="begin">Begin exam</button></div>' +
      '</section>';
    on('back', renderHome);
    on('begin', function () { startExam(testNo, seed); });
    document.getElementById('begin').focus();
  }

  function renderQuestion() {
    var cfg = session.part === 1 ? PART1 : PART2;
    var it = currentItem();
    var q = it.q;
    var t = tally(session.part);
    var revealed = session.revealed;
    var given = revealed ? session.responses[session.part][session.idx] : null;

    var dots = '';
    for (var i = 0; i < cfg.count; i++) {
      var r = session.responses[session.part][i];
      var cls = i === session.idx ? 'dot current' : r ? (store.settings.instantFeedback ? (r.correct ? 'dot ok' : 'dot bad') : 'dot done') : 'dot';
      dots += '<span class="' + cls + '"></span>';
    }

    var opts = it.order.map(function (origIdx, i) {
      var cls = 'option';
      if (session.selected === i) cls += ' selected';
      if (revealed) {
        if (origIdx === q.answer) cls += ' correct';
        else if (given && origIdx === given.choice) cls += ' wrong';
      }
      return '<button class="' + cls + '" data-opt="' + i + '"' + (revealed ? ' disabled' : '') + '>' +
        '<span class="opt-letter">' + LETTERS[i] + '</span><span class="opt-text">' + esc(q.options[origIdx]) + '</span></button>';
    }).join('');

    var feedback = '';
    if (revealed) {
      feedback = '<div class="feedback ' + (given.correct ? 'feedback-ok' : 'feedback-bad') + '">' +
        '<strong>' + (given.correct ? 'Correct.' : 'Incorrect.') + '</strong> ' + esc(q.explain || '') +
        (q.ref ? '<div class="ref">' + esc(q.ref) + '</div>' : '') + '</div>';
    }

    var counter = store.settings.instantFeedback
      ? '<span class="pill pill-ok">' + t.correct + ' correct</span><span class="pill pill-bad">' + t.wrong + ' incorrect</span>'
      : '';

    setStatus('<span class="timer" title="Elapsed time">⏱ <span id="timer">' + fmtDuration(elapsedSec()) + '</span></span>' +
      '<button class="btn btn-ghost btn-small btn-on-dark" id="quit">Quit</button>');

    app.innerHTML =
      '<section class="kiosk">' +
        '<div class="kiosk-head">' +
          '<div><div class="part-label">Part ' + session.part + ' of 2 · ' + esc(cfg.name) + '</div>' +
          '<div class="q-count">Question ' + (session.idx + 1) + ' of ' + cfg.count + '</div></div>' +
          '<div class="counters">' + counter + '</div>' +
        '</div>' +
        '<div class="dots" aria-hidden="true">' + dots + '</div>' +
        '<div class="question' + (q.art ? ' has-art' : '') + '">' +
          (q.art ? '<div class="sign-art">' + (ART[q.art] || '') + '</div>' : '') +
          '<div class="q-main"><h2 class="q-text">' + esc(q.q) + '</h2>' +
          '<div class="options" role="group">' + opts + '</div>' + feedback + '</div>' +
        '</div>' +
        '<div class="actions">' +
          (revealed
            ? '<button class="btn btn-primary btn-large" id="next">' + nextLabel() + '</button>'
            : '<button class="btn btn-primary btn-large" id="submit"' + (session.selected === null ? ' disabled' : '') + '>Submit answer</button>') +
        '</div>' +
      '</section>';

    app.querySelectorAll('[data-opt]').forEach(function (b) {
      b.addEventListener('click', function () { selectOption(Number(b.getAttribute('data-opt'))); });
    });
    on('submit', submitAnswer);
    on('next', advance);
    on('quit', quitExam);
    startTimer();
  }

  function nextLabel() {
    var cfg = session.part === 1 ? PART1 : PART2;
    var t = tally(session.part);
    var failed = t.wrong > cfg.count - cfg.pass;
    if ((failed && store.settings.stopOnFail) || (t.answered >= cfg.count && session.part === 2)) return 'See results';
    if (t.answered >= cfg.count) return failed ? 'See results' : 'Continue to Part 2';
    return 'Next question';
  }

  function selectOption(i) {
    if (!session || session.revealed) return;
    session.selected = i;
    app.querySelectorAll('[data-opt]').forEach(function (b) {
      b.classList.toggle('selected', Number(b.getAttribute('data-opt')) === i);
    });
    var s = document.getElementById('submit');
    if (s) s.disabled = false;
  }

  function renderPartBreak() {
    stopTimer();
    session.part = 2;
    session.idx = 0;
    session.selected = null;
    session.revealed = false;
    persistSession();
    setStatus('<span class="timer">⏱ <span id="timer">' + fmtDuration(elapsedSec()) + '</span></span>');
    app.innerHTML =
      '<section class="kiosk intro">' +
        '<div class="stamp stamp-pass small">Part 1 passed</div>' +
        '<h1>Traffic Signs: 10 of 10 correct</h1>' +
        '<p class="lead">You may now begin Part 2 — General Knowledge. 30 questions; you need 24 correct to pass.</p>' +
        '<div class="actions"><button class="btn btn-primary btn-large" id="begin2">Begin Part 2</button></div>' +
      '</section>';
    on('begin2', function () { session.startedAt = Date.now(); session.elapsedBefore = store.inProgress.elapsed; renderQuestion(); });
    document.getElementById('begin2').focus();
  }

  function renderResult(rec, fresh) {
    stopTimer();
    setStatus('');
    var p1ok = rec.p1.correct >= PART1.pass;
    var p2ok = p1ok && rec.p2.correct >= PART2.pass;
    var reason = '';
    if (rec.failedPart === 1) {
      reason = rec.terminatedEarly
        ? 'The exam ended after question ' + rec.p1.answered + ' of Part 1. Every traffic sign question must be answered correctly.'
        : 'You answered ' + rec.p1.correct + ' of 10 sign questions correctly. All 10 are required to move on to Part 2.';
    } else if (rec.failedPart === 2) {
      var wrong = rec.p2.answered - rec.p2.correct;
      reason = rec.terminatedEarly
        ? 'The exam ended after question ' + rec.p2.answered + ' of Part 2 — with ' + wrong + ' incorrect answers, a passing score (24 of 30) was no longer possible.'
        : 'You answered ' + rec.p2.correct + ' of 30 correctly; 24 are required to pass.';
    } else {
      reason = 'You met the passing standard on both parts of the knowledge exam.';
    }

    var items = rec.responses.map(function (r) {
      return { part: r.part, q: BY_ID[r.id], order: r.order, choice: r.choice };
    }).filter(function (x) { return x.q; });
    var missed = items.filter(function (x) { return x.choice !== x.q.answer; });

    var topicMiss = {};
    missed.forEach(function (x) { var k = x.q.topic || 'Other'; topicMiss[k] = (topicMiss[k] || 0) + 1; });
    var topicList = Object.keys(topicMiss).sort(function (a, b) { return topicMiss[b] - topicMiss[a]; });

    var p2cell = p1ok
      ? '<td>' + rec.p2.correct + ' / ' + PART2.count + (rec.p2.answered < PART2.count ? ' <span class="muted">(' + rec.p2.answered + ' answered)</span>' : '') + '</td><td>' + pct(rec.p2.correct, PART2.count) + '%</td><td>24 (80%)</td><td>' + (p2ok ? '<span class="badge badge-pass">Pass</span>' : '<span class="badge badge-fail">Fail</span>') + '</td>'
      : '<td colspan="2" class="muted">Not administered</td><td>24 (80%)</td><td><span class="muted">—</span></td>';

    app.innerHTML =
      '<section class="kiosk result">' +
        '<div class="result-head">' +
          '<div class="stamp ' + (rec.passed ? 'stamp-pass' : 'stamp-fail') + '">' + (rec.passed ? 'PASS' : 'FAIL') + '</div>' +
          '<div><h1>' + esc(testLabel(rec.testNo)) + ' — ' + (rec.passed ? 'Passed' : 'Not passed') + '</h1>' +
          '<p class="lead">' + esc(reason) + '</p>' +
          '<p class="muted">' + esc(fmtDate(rec.date)) + ' · Time ' + fmtDuration(rec.durationSec) + '</p></div>' +
        '</div>' +
        '<div class="table-wrap"><table class="score-sheet"><thead><tr><th>Section</th><th>Score</th><th>Percent</th><th>Required</th><th>Result</th></tr></thead><tbody>' +
          '<tr><td>Part 1 — Traffic Signs</td><td>' + rec.p1.correct + ' / ' + PART1.count + (rec.p1.answered < PART1.count ? ' <span class="muted">(' + rec.p1.answered + ' answered)</span>' : '') + '</td><td>' + pct(rec.p1.correct, PART1.count) + '%</td><td>10 (100%)</td><td>' + (p1ok ? '<span class="badge badge-pass">Pass</span>' : '<span class="badge badge-fail">Fail</span>') + '</td></tr>' +
          '<tr><td>Part 2 — General Knowledge</td>' + p2cell + '</tr>' +
        '</tbody></table></div>' +
        (topicList.length ? '<div class="topics"><h3>Study these topics</h3><div class="topic-chips">' +
          topicList.map(function (k) { return '<span class="chip">' + esc(k) + ' <b>' + topicMiss[k] + '</b></span>'; }).join('') + '</div></div>' : '') +
        '<div class="actions">' +
          '<button class="btn btn-ghost" id="home">All exams</button>' +
          '<button class="btn btn-secondary" id="retake">' + (rec.testNo > 0 ? 'Retake Test ' + rec.testNo : 'New random exam') + '</button>' +
          (rec.testNo > 0 && rec.testNo < NUM_TESTS ? '<button class="btn btn-primary" id="next-test">Practice Test ' + (rec.testNo + 1) + ' →</button>' : '') +
        '</div>' +
      '</section>' +
      '<section class="panel review"><div class="panel-head"><h2>Answer review</h2>' +
        '<div class="seg" role="tablist"><button class="seg-btn active" data-filter="missed">Missed (' + missed.length + ')</button>' +
        '<button class="seg-btn" data-filter="all">All answered (' + items.length + ')</button></div></div>' +
        '<div id="review-list"></div></section>';

    function drawList(filter) {
      var list = filter === 'missed' ? missed : items;
      var el = document.getElementById('review-list');
      if (!list.length) { el.innerHTML = '<p class="muted">No missed questions — nice work.</p>'; return; }
      el.innerHTML = list.map(function (x) {
        var q = x.q;
        var ok = x.choice === q.answer;
        var n = items.indexOf(x);
        var partIdx = items.filter(function (y, j) { return y.part === x.part && j <= n; }).length;
        return '<article class="review-item ' + (ok ? 'ri-ok' : 'ri-bad') + '">' +
          (q.art ? '<div class="sign-art small">' + (ART[q.art] || '') + '</div>' : '') +
          '<div class="ri-body"><div class="ri-meta">Part ' + x.part + ' · Q' + partIdx + ' · ' + esc(q.topic || '') + '</div>' +
          '<div class="ri-q">' + esc(q.q) + '</div><ul class="ri-opts">' +
          x.order.map(function (o, i) {
            var c = o === q.answer ? 'is-correct' : (o === x.choice ? 'is-wrong' : '');
            var tag = o === q.answer ? ' <span class="tag tag-ok">Correct answer</span>' : (o === x.choice ? ' <span class="tag tag-bad">Your answer</span>' : '');
            if (o === q.answer && o === x.choice) tag = ' <span class="tag tag-ok">Your answer ✓</span>';
            return '<li class="' + c + '"><b>' + LETTERS[i] + '.</b> ' + esc(q.options[o]) + tag + '</li>';
          }).join('') + '</ul>' +
          (q.explain ? '<div class="ri-explain">' + esc(q.explain) + (q.ref ? ' <span class="ref">' + esc(q.ref) + '</span>' : '') + '</div>' : '') +
          '</div></article>';
      }).join('');
    }
    drawList(missed.length ? 'missed' : 'all');
    if (!missed.length) {
      app.querySelectorAll('.seg-btn').forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-filter') === 'all'); });
    }
    app.querySelectorAll('.seg-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        app.querySelectorAll('.seg-btn').forEach(function (x) { x.classList.toggle('active', x === b); });
        drawList(b.getAttribute('data-filter'));
      });
    });
    on('home', renderHome);
    on('retake', function () { renderIntro(rec.testNo, rec.testNo > 0 ? 0 : Math.floor(Math.random() * 2147483647)); });
    on('next-test', function () { renderIntro(rec.testNo + 1, 0); });
    window.scrollTo(0, 0);
    if (fresh) document.getElementById(rec.testNo > 0 && rec.testNo < NUM_TESTS ? 'next-test' : 'home').focus();
  }

  // ---- Keyboard ----
  document.addEventListener('keydown', function (e) {
    if (!session || e.metaKey || e.ctrlKey || e.altKey) return;
    var k = e.key.toUpperCase();
    var idx = LETTERS.indexOf(k);
    if (idx === -1 && /^[1-4]$/.test(k)) idx = Number(k) - 1;
    if (idx >= 0 && idx < 4 && document.querySelector('[data-opt]')) { selectOption(idx); e.preventDefault(); return; }
    if (e.key === 'Enter') {
      var btn = document.getElementById('submit') || document.getElementById('next');
      if (btn && !btn.disabled) { btn.click(); e.preventDefault(); }
    }
  });

  document.getElementById('brand').addEventListener('click', function () {
    if (session && !confirm('Leave the exam? You can resume it later from the home screen.')) return;
    renderHome();
  });

  if (!SIGN_BANK.length || !GENERAL_BANK.length) {
    var missing = [];
    if (!SIGN_BANK.length) missing.push('<code>data/signs.js</code> (traffic signs, Part 1)');
    if (!GENERAL_BANK.length) missing.push('<code>data/gk-*.js</code> (general knowledge, Part 2)');
    app.innerHTML = '<section class="panel"><h2>Question bank not loaded</h2><p>Missing: ' + missing.join(', ') + '.</p></section>';
    return;
  }
  renderHome();
})();
