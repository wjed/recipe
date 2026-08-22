/* ==========================================================================
   util.js - small helpers with no dependencies.
   Everything hangs off window.U so the other files can share it.
   ========================================================================== */
(function () {
  'use strict';

  var U = {};

  /* ---------------------------------------------------------- escaping --- */

  var ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

  U.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return ESC[c]; });
  };

  /* ------------------------------------------------------------ numbers --- */

  // Quantities in the recipe data are written in plain ASCII:
  //   "2", "1/2", "1 1/2", "0.5", "2-3". This parses that leading quantity.
  var NUM = '(?:\\d+\\s+\\d+\\/\\d+|\\d+\\/\\d+|\\d+(?:\\.\\d+)?)';
  var QTY_RE = new RegExp('^(' + NUM + ')(\\s*(?:-|to)\\s*)(' + NUM + ')|^(' + NUM + ')');

  function toNumber(str) {
    str = String(str).trim();
    var mixed = str.match(/^(\d+)\s+(\d+)\/(\d+)$/);
    if (mixed) return +mixed[1] + (+mixed[2] / +mixed[3]);
    var frac = str.match(/^(\d+)\/(\d+)$/);
    if (frac) return +frac[1] / +frac[2];
    return parseFloat(str);
  }
  U.toNumber = toNumber;

  var FRACTIONS = [
    [0,     ''],
    [0.125, '⅛'], // 1/8
    [0.25,  '¼'], // 1/4
    [1 / 3, '⅓'], // 1/3
    [0.375, '⅜'], // 3/8
    [0.5,   '½'], // 1/2
    [0.625, '⅝'], // 5/8
    [2 / 3, '⅔'], // 2/3
    [0.75,  '¾'], // 3/4
    [0.875, '⅞'], // 7/8
    [1,     '']
  ];

  // Turn 1.5 into "1 1/2" (with a real fraction glyph). Big numbers just round.
  function formatNumber(n) {
    if (!isFinite(n) || n <= 0) return '0';
    if (n >= 10) return String(Math.round(n));
    // Scaling a recipe down can produce a sliver of a teaspoon. An eighth is the
    // smallest amount anyone can actually measure, so stop there.
    if (n < 0.125) return '⅛';

    var whole = Math.floor(n);
    var rest = n - whole;

    var best = FRACTIONS[0], bestGap = Infinity;
    for (var i = 0; i < FRACTIONS.length; i++) {
      var gap = Math.abs(FRACTIONS[i][0] - rest);
      if (gap < bestGap) { bestGap = gap; best = FRACTIONS[i]; }
    }
    if (best[0] === 1) { whole += 1; best = FRACTIONS[0]; }

    if (whole === 0 && best[1] === '') return '⅛';
    if (whole === 0) return best[1];
    if (best[1] === '') return String(whole);
    return whole + ' ' + best[1];
  }
  U.formatNumber = formatNumber;

  // Split "1 1/2 lb chicken thighs" into { qty: "1 1/2", rest: "lb chicken thighs" },
  // scaling the quantity by `factor`. Text with no leading number passes through.
  U.scaleIngredient = function (line, factor) {
    var m = QTY_RE.exec(line);
    if (!m) return { qty: '', rest: line };

    var qty, consumed;
    if (m[1]) {
      // a range, e.g. "2-3 cups"
      qty = formatNumber(toNumber(m[1]) * factor) + '–' + formatNumber(toNumber(m[3]) * factor);
      consumed = m[0].length;
    } else {
      qty = formatNumber(toNumber(m[4]) * factor);
      consumed = m[4].length;
    }
    return { qty: qty, rest: line.slice(consumed).trim() };
  };

  /* --------------------------------------------------------------- time --- */

  U.formatTime = function (min) {
    min = Math.round(min || 0);
    if (min < 60) return min + ' min';
    var h = Math.floor(min / 60), m = min % 60;
    if (!m) return h + (h === 1 ? ' hr' : ' hrs');
    return h + ' hr ' + m + ' min';
  };

  U.formatTimeShort = function (min) {
    min = Math.round(min || 0);
    if (min < 60) return min + 'm';
    var h = Math.floor(min / 60), m = min % 60;
    return m ? h + 'h ' + m + 'm' : h + 'h';
  };

  /* --------------------------------------------------------------- misc --- */

  U.hash = function (str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = (h * 16777619) >>> 0;
    }
    return h >>> 0;
  };

  U.pick = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };

  U.shuffle = function (arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };

  U.uniq = function (arr) {
    var seen = Object.create(null), out = [];
    for (var i = 0; i < arr.length; i++) {
      var k = String(arr[i]);
      if (!seen[k]) { seen[k] = 1; out.push(arr[i]); }
    }
    return out;
  };

  U.slug = function (s) {
    return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  };

  U.titleCase = function (s) {
    return String(s).replace(/\b[a-z]/g, function (c) { return c.toUpperCase(); });
  };

  /* ------------------------------------------------------------- colour --- */

  // One flat, muted tint per protein, in a light and a dark version.
  // Both are needed: a tinted panel holds normal themed text and controls, so
  // the panel has to follow the colour scheme or the two end up fighting.
  var TINTS = {
    Chicken:    ['#f4e3c4', '#3a3020'],
    Beef:       ['#eed3c8', '#3a2822'],
    Pork:       ['#f2dbd4', '#3a2a26'],
    Turkey:     ['#eeddc3', '#382f20'],
    Lamb:       ['#e6d2c6', '#352b23'],
    Fish:       ['#d3e2ea', '#22303a'],
    Shrimp:     ['#f6d8cb', '#3c2a22'],
    Vegetarian: ['#dee9d4', '#26301f'],
    Eggs:       ['#f8ebc6', '#3a3220'],
    Side:       ['#e6e8dc', '#2c2d24']
  };
  var TINT_FALLBACK = ['#e9e5db', '#2e2b22'];

  U.tintFor = function (recipe) {
    return TINTS[recipe.type === 'side' ? 'Side' : recipe.protein] || TINT_FALLBACK;
  };

  var DEFAULT_EMOJI = {
    Chicken: '🍗', Beef: '🥩', Pork: '🥓',
    Turkey: '🦃', Lamb: '🍖', Fish: '🐟',
    Shrimp: '🍤', Vegetarian: '🥦', Eggs: '🍳'
  };

  U.emojiFor = function (recipe) {
    return recipe.emoji || DEFAULT_EMOJI[recipe.protein] || '🍽️';
  };

  /* ------------------------------------------------------------ packing --- */

  // base64url, so the packed state survives being pasted into a text message
  // or an address bar without anything mangling it.
  U.pack = function (obj) {
    try {
      var bytes = new TextEncoder().encode(JSON.stringify(obj));
      var bin = '';
      for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
      return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    } catch (e) { return null; }
  };

  U.unpack = function (str) {
    try {
      var b64 = String(str).replace(/-/g, '+').replace(/_/g, '/');
      while (b64.length % 4) b64 += '=';
      var bin = atob(b64);
      var bytes = new Uint8Array(bin.length);
      for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      return JSON.parse(new TextDecoder().decode(bytes));
    } catch (e) { return null; }
  };

  // Copies text, falling back to selecting it when the clipboard API is blocked.
  U.copy = function (text, inputEl) {
    function fallback() {
      if (!inputEl) return false;
      inputEl.focus();
      inputEl.setSelectionRange(0, inputEl.value.length);
      try { return document.execCommand('copy'); } catch (e) { return false; }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(
        function () { return true; },
        function () { return fallback(); }
      );
    }
    return Promise.resolve(fallback());
  };

  /* -------------------------------------------------------------- toast --- */

  var toastTimer = null;
  U.toast = function (msg) {
    var el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('show'); }, 2600);
  };

  /* ---------------------------------------------------------------- dom --- */

  U.el = function (tag, attrs, html) {
    var node = document.createElement(tag);
    if (attrs) for (var k in attrs) if (attrs.hasOwnProperty(k)) node.setAttribute(k, attrs[k]);
    if (html != null) node.innerHTML = html;
    return node;
  };

  U.debounce = function (fn, wait) {
    var t = null;
    return function () {
      var args = arguments, self = this;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(self, args); }, wait);
    };
  };

  window.U = U;
})();
