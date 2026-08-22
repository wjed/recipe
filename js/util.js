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

  // Light pastel gradient pairs. Recipe heroes and card thumbs put dark text on
  // these, so they must stay light in BOTH colour schemes - hence literal hex.
  var PALETTES = {
    Chicken:    [['#fbe7c2', '#f6d9a8'], ['#f7e3bd', '#efd3a4'], ['#fceccb', '#f3ddb0']],
    Beef:       [['#f3d3c8', '#e9bcae'], ['#efd0c4', '#e2b7a6'], ['#f6d8cc', '#eabfb0']],
    Pork:       [['#f7d9d4', '#eec0b8'], ['#f4d6ce', '#e8bcb1'], ['#fadfd8', '#f0c6bc']],
    Turkey:     [['#f0dcc0', '#e3c8a4'], ['#f4e0c6', '#e7cdaa'], ['#eed9bb', '#e0c49e']],
    Lamb:       [['#e8d2c6', '#d8bcaa'], ['#eed8cb', '#dfc2b0'], ['#e4cec1', '#d4b7a4']],
    Fish:       [['#cfe3ee', '#b3d1e2'], ['#d5e7f0', '#b9d5e5'], ['#c9dfeb', '#addcdf']],
    Shrimp:     [['#fbd8ca', '#f5bfab'], ['#fde0d3', '#f7c8b5'], ['#f9d3c3', '#f2b9a3']],
    Vegetarian: [['#dcebd0', '#c2dcb2'], ['#e2eed8', '#c9e0ba'], ['#d6e8ca', '#bcd8ab']],
    Eggs:       [['#fdeec4', '#f8dfa2'], ['#fbe9bd', '#f4d99c'], ['#fef1cd', '#fae3ad']],
    Side:       [['#e6e9d8', '#d2d8bf'], ['#eaece0', '#d8dcc7'], ['#e2e7d3', '#cdd5b8']]
  };
  var FALLBACK = [['#e6efe6', '#f3ece1']];

  U.paletteFor = function (recipe) {
    var set = PALETTES[recipe.type === 'side' ? 'Side' : recipe.protein] || FALLBACK;
    return set[U.hash(recipe.id) % set.length];
  };

  var DEFAULT_EMOJI = {
    Chicken: '🍗', Beef: '🥩', Pork: '🥓',
    Turkey: '🦃', Lamb: '🍖', Fish: '🐟',
    Shrimp: '🍤', Vegetarian: '🥦', Eggs: '🍳'
  };

  U.emojiFor = function (recipe) {
    return recipe.emoji || DEFAULT_EMOJI[recipe.protein] || '🍽️';
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
