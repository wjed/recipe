/* ==========================================================================
   kitchen.js - the two things you want while actually cooking:
   a screen that stays on, and timers you can start from the recipe itself.
   ========================================================================== */
(function () {
  'use strict';

  var U = window.U;
  var K = {};

  /* ----------------------------------------------------------- wake lock -- */

  var lock = null;
  var wantLock = false;

  function supported() { return 'wakeLock' in navigator; }

  function acquire() {
    if (!supported() || !wantLock || document.visibilityState !== 'visible') return;
    navigator.wakeLock.request('screen').then(function (l) {
      lock = l;
      lock.addEventListener('release', function () { lock = null; });
    }).catch(function () {
      // denied (low battery, or the browser said no). Leave the toggle honest.
      wantLock = false;
      lock = null;
      paintWakeButton();
      U.toast('This device would not keep the screen on');
    });
  }

  function release() {
    wantLock = false;
    if (lock) { try { lock.release(); } catch (e) {} lock = null; }
  }

  K.wakeSupported = supported;
  K.wakeIsOn = function () { return wantLock; };

  K.toggleWake = function () {
    if (wantLock) { release(); U.toast('Screen can sleep again'); }
    else { wantLock = true; acquire(); U.toast('Screen will stay on while this page is open'); }
    paintWakeButton();
  };

  function paintWakeButton() {
    var b = document.querySelector('[data-act="wake"]');
    if (!b) return;
    b.setAttribute('aria-pressed', wantLock ? 'true' : 'false');
    b.textContent = wantLock ? 'Screen staying on' : 'Keep screen on';
  }
  K.paintWakeButton = paintWakeButton;

  // the lock is dropped whenever the tab is hidden, so take it back on return
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible' && wantLock && !lock) acquire();
  });

  /* -------------------------------------------------------------- timers -- */

  var timers = [];      // { id, label, endsAt, remaining, done, paused }
  var ticker = null;
  var nextId = 1;
  var audio = null;

  function fmt(sec) {
    sec = Math.max(0, Math.round(sec));
    var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    var mm = (h ? String(m).padStart(2, '0') : String(m));
    return (h ? h + ':' : '') + mm + ':' + String(s).padStart(2, '0');
  }

  // A short double beep, synthesised so there is no audio file to ship.
  function beep() {
    try {
      if (!audio) audio = new (window.AudioContext || window.webkitAudioContext)();
      if (audio.state === 'suspended') audio.resume();
      [0, 0.42, 0.84].forEach(function (offset) {
        var osc = audio.createOscillator(), gain = audio.createGain();
        osc.type = 'sine';
        osc.frequency.value = 880;
        gain.gain.setValueAtTime(0.0001, audio.currentTime + offset);
        gain.gain.exponentialRampToValueAtTime(0.32, audio.currentTime + offset + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + offset + 0.32);
        osc.connect(gain); gain.connect(audio.destination);
        osc.start(audio.currentTime + offset);
        osc.stop(audio.currentTime + offset + 0.34);
      });
    } catch (e) { /* muted device, the tray still shows it is done */ }
  }

  K.start = function (seconds, label) {
    // Creating the AudioContext inside the tap keeps it unblocked later.
    try {
      if (!audio) audio = new (window.AudioContext || window.webkitAudioContext)();
      if (audio.state === 'suspended') audio.resume();
    } catch (e) {}

    timers.push({
      id: nextId++,
      label: label || 'Timer',
      endsAt: Date.now() + seconds * 1000,
      remaining: seconds,
      done: false,
      paused: false
    });
    paint();
    run();
    U.toast('Timer set for ' + fmt(seconds));
  };

  K.cancel = function (id) {
    timers = timers.filter(function (t) { return t.id !== id; });
    paint();
    if (!timers.length) stop();
  };

  K.togglePause = function (id) {
    var t = timers.filter(function (x) { return x.id === id; })[0];
    if (!t || t.done) return;
    if (t.paused) { t.endsAt = Date.now() + t.remaining * 1000; t.paused = false; }
    else { t.remaining = (t.endsAt - Date.now()) / 1000; t.paused = true; }
    paint();
  };

  K.count = function () { return timers.length; };

  function run() { if (!ticker) ticker = setInterval(tick, 500); }
  function stop() { if (ticker) { clearInterval(ticker); ticker = null; } }

  function tick() {
    var changed = false;
    timers.forEach(function (t) {
      if (t.done || t.paused) return;
      var left = (t.endsAt - Date.now()) / 1000;
      if (left <= 0) {
        t.done = true;
        changed = true;
        beep();
        if (navigator.vibrate) navigator.vibrate([300, 120, 300]);
        U.toast('Timer done: ' + t.label);
      }
    });
    paint();
    if (changed && timers.every(function (t) { return t.done; })) stop();
  }

  // The tray is fixed to the bottom, so the page needs to reserve exactly its
  // height. Measuring beats guessing, since the height depends on how many
  // timers are running.
  function reserveSpace(tray) {
    var h = (tray && !tray.hidden) ? tray.offsetHeight : 0;
    document.documentElement.style.setProperty('--tray-h', h + 'px');
  }

  function paint() {
    var tray = document.getElementById('timerTray');
    if (!tray) return;
    if (!timers.length) { tray.hidden = true; tray.innerHTML = ''; reserveSpace(tray); return; }

    tray.hidden = false;
    tray.innerHTML = timers.map(function (t) {
      var left = t.done ? 0 : (t.paused ? t.remaining : (t.endsAt - Date.now()) / 1000);
      return '<div class="timer' + (t.done ? ' is-done' : '') + '">' +
        '<span class="timer-time">' + (t.done ? 'Done' : fmt(left)) + '</span>' +
        '<span class="timer-label">' + U.esc(t.label) + '</span>' +
        (t.done ? '' :
          '<button class="timer-btn" data-act="timerPause" data-id="' + t.id + '">' +
            (t.paused ? 'Resume' : 'Pause') + '</button>') +
        '<button class="timer-btn" data-act="timerCancel" data-id="' + t.id + '"' +
          ' aria-label="' + (t.done ? 'Dismiss' : 'Cancel') + ' timer">' +
          (t.done ? 'Dismiss' : '×') + '</button>' +
        '</div>';
    }).join('');
    reserveSpace(tray);
  }

  K.paintTimers = paint;

  window.Kitchen = K;
})();
