/* ==========================================================================
   render.js - HTML builders. Every function returns a string.
   All interpolated recipe text goes through U.esc().
   ========================================================================== */
(function () {
  'use strict';

  var U = window.U;
  var R = {};

  /* ------------------------------------------------------------- chips --- */

  var TAG_LABELS = {
    'one-pan': 'One pan',
    'sheet-pan': 'Sheet pan',
    'slow-cooker': 'Slow cooker',
    'make-ahead': 'Make ahead',
    'freezer-friendly': 'Freezes well',
    '30-minutes': '30 minutes',
    'gluten-free': 'Gluten free',
    'dairy-free': 'Dairy free',
    'kid-friendly': 'Kid approved',
    'leftovers': 'Great leftovers',
    'high-protein': 'High protein',
    'veggie-forward': 'Veggie forward',
    'budget': 'Budget friendly',
    'special-occasion': 'Special occasion',
    'no-cook': 'No cook',
    'low-carb': 'Lower carb',
    'comfort': 'Comfort food',
    'grill': 'Grill or broil',
    'instant-pot': 'Pressure cooker'
  };

  R.tagLabel = function (tag) { return TAG_LABELS[tag] || U.titleCase(tag.replace(/-/g, ' ')); };

  R.styleVars = function (recipe) {
    var p = U.paletteFor(recipe);
    return '--c1:' + p[0] + ';--c2:' + p[1] + ';';
  };

  /* -------------------------------------------------------------- card --- */

  R.card = function (recipe) {
    var fav = window.Store.isFavorite(recipe.id);
    var plate = recipe.plate || {};
    var bits = [];
    if (plate.protein) bits.push('<span>🍗 ' + U.esc(plate.protein) + '</span>');
    if (plate.starch)  bits.push('<span>🥔 ' + U.esc(plate.starch) + '</span>');
    if (plate.veg)     bits.push('<span>🥬 ' + U.esc(plate.veg) + '</span>');

    return '' +
      '<article class="rcard" style="' + R.styleVars(recipe) + '">' +
        '<div class="rcard-thumb">' +
          '<span class="emoji" aria-hidden="true">' + U.emojiFor(recipe) + '</span>' +
          (recipe.karolina ? '<span class="badge-kid">Karolina pick</span>' : '') +
          '<button class="fav-btn" type="button" data-fav="' + U.esc(recipe.id) + '"' +
            ' aria-pressed="' + (fav ? 'true' : 'false') + '"' +
            ' aria-label="' + (fav ? 'Remove' : 'Save') + ' ' + U.esc(recipe.title) + '">' +
            (fav ? '♥' : '♡') +
          '</button>' +
        '</div>' +
        '<div class="rcard-body">' +
          '<h3 class="rcard-title"><a href="#/recipe/' + U.esc(recipe.id) + '">' + U.esc(recipe.title) + '</a></h3>' +
          '<p class="rcard-blurb">' + U.esc(recipe.blurb) + '</p>' +
          '<div class="rcard-meta">' +
            '<span>⏱ ' + U.formatTime(recipe.totalTime) + '</span>' +
            '<span class="dot">·</span><span>' + U.esc(recipe.difficulty) + '</span>' +
            (recipe.nutrition.calories
              ? '<span class="dot">·</span><span>' + recipe.nutrition.calories + ' cal</span>' +
                '<span class="dot">·</span><span>' + recipe.nutrition.protein + 'g protein</span>'
              : '') +
          '</div>' +
          (bits.length ? '<div class="rcard-plate">' + bits.join('') + '</div>' : '') +
        '</div>' +
      '</article>';
  };

  R.cardGrid = function (list) {
    if (!list.length) return R.empty();
    return '<div class="card-grid">' + list.map(R.card).join('') + '</div>';
  };

  R.empty = function (msg) {
    return '<div class="empty-state">' +
      '<span class="big" aria-hidden="true">🍳</span>' +
      '<h3>' + U.esc(msg || 'Nothing matches those filters') + '</h3>' +
      '<p>Try clearing a filter or searching for something simpler, like &ldquo;chicken&rdquo;.</p>' +
      '</div>';
  };

  /* --------------------------------------------------------- mini list --- */

  R.miniItem = function (recipe) {
    return '<li><a href="#/recipe/' + U.esc(recipe.id) + '">' +
      '<span class="ml-emoji" style="' + R.styleVars(recipe) + '" aria-hidden="true">' + U.emojiFor(recipe) + '</span>' +
      '<span class="ml-body">' +
        '<span class="ml-title">' + U.esc(recipe.title) + '</span><br>' +
        '<span class="ml-meta">' + U.formatTime(recipe.totalTime) + ' · ' + U.esc(recipe.difficulty) + '</span>' +
      '</span></a></li>';
  };

  R.miniList = function (list) {
    return '<ul class="mini-list">' + list.map(R.miniItem).join('') + '</ul>';
  };

  /* --------------------------------------------------------- chip row --- */

  R.chipRow = function (recipe) {
    var out = [];
    out.push('<span class="chip chip-green">' + U.esc(recipe.protein) + '</span>');
    out.push('<span class="chip">' + U.esc(recipe.cuisine) + '</span>');
    out.push('<span class="chip">⏱ ' + U.formatTime(recipe.totalTime) + '</span>');
    out.push('<span class="chip">' + U.esc(recipe.difficulty) + '</span>');
    for (var i = 0; i < recipe.tags.length && i < 4; i++) {
      out.push('<span class="chip chip-clay">' + U.esc(R.tagLabel(recipe.tags[i])) + '</span>');
    }
    return '<div class="chip-row">' + out.join('') + '</div>';
  };

  /* -------------------------------------------------------- nutrition --- */

  R.nutrition = function (recipe) {
    var n = recipe.nutrition || {};
    if (!n.calories) return '';

    var pCal = (n.protein || 0) * 4;
    var cCal = (n.carbs || 0) * 4;
    var fCal = (n.fat || 0) * 9;
    var sum = pCal + cCal + fCal || 1;
    var pPct = Math.round(pCal / sum * 100);
    var cPct = Math.round(cCal / sum * 100);
    var fPct = Math.max(0, 100 - pPct - cPct);

    function cell(val, unit, label) {
      return '<div class="nut-cell"><span class="nut-val">' + val + (unit || '') + '</span>' +
             '<span class="nut-lab">' + label + '</span></div>';
    }

    return '' +
      '<div class="nutrition">' +
        '<h3>What&rsquo;s on the plate</h3>' +
        '<p class="nut-note">Per serving, roughly &mdash; a friendly estimate, not a lab result.</p>' +
        '<div class="nut-grid">' +
          cell(n.calories, '', 'Calories') +
          cell(n.protein, 'g', 'Protein') +
          cell(n.carbs, 'g', 'Carbs') +
          cell(n.fat, 'g', 'Fat') +
          (n.fiber != null ? cell(n.fiber, 'g', 'Fiber') : '') +
        '</div>' +
        '<div class="balance-bar" role="img" aria-label="Calories from protein ' + pPct +
          ' percent, carbohydrate ' + cPct + ' percent, fat ' + fPct + ' percent">' +
          '<i class="bb-p" style="width:' + pPct + '%"></i>' +
          '<i class="bb-c" style="width:' + cPct + '%"></i>' +
          '<i class="bb-f" style="width:' + fPct + '%"></i>' +
        '</div>' +
        '<div class="balance-key">' +
          '<span><i class="bb-p"></i> Protein ' + pPct + '%</span>' +
          '<span><i class="bb-c"></i> Carbs ' + cPct + '%</span>' +
          '<span><i class="bb-f"></i> Fat ' + fPct + '%</span>' +
        '</div>' +
      '</div>';
  };

  /* ------------------------------------------------------ plate slots --- */

  R.plateSlots = function (recipe) {
    var p = recipe.plate || {};
    var rows = [
      ['The protein', p.protein, '🍗'],
      ['The starch',  p.starch,  '🥔'],
      ['The veg',     p.veg,     '🥬']
    ];
    return '<div class="pick-plate">' + rows.map(function (row) {
      return '<div class="plate-slot">' +
        '<div class="slot-label">' + row[2] + ' ' + row[0] + '</div>' +
        '<div class="slot-value">' + (row[1] ? U.esc(row[1]) : '<span style="color:var(--ink-3)">add a side</span>') + '</div>' +
        '</div>';
    }).join('') + '</div>';
  };

  /* ------------------------------------------------------ ingredients --- */

  R.ingredients = function (recipe, factor) {
    var checked = window.Store.getChecked(recipe.id, 'ing');
    var idx = 0;
    var html = '';

    for (var g = 0; g < recipe.ingredients.length; g++) {
      var grp = recipe.ingredients[g];
      html += '<div class="ing-group">';
      if (grp.group) html += '<h3>' + U.esc(grp.group) + '</h3>';
      html += '<ul class="ing-list">';
      for (var i = 0; i < grp.items.length; i++) {
        var parts = U.scaleIngredient(grp.items[i], factor);
        var on = checked.indexOf(idx) !== -1;
        html += '<li><label>' +
          '<input type="checkbox" data-ing="' + idx + '"' + (on ? ' checked' : '') + '>' +
          '<span>' + (parts.qty ? '<b class="ing-qty">' + U.esc(parts.qty) + '</b> ' : '') +
          U.esc(parts.rest) + '</span>' +
          '</label></li>';
        idx++;
      }
      html += '</ul></div>';
    }
    return html;
  };

  /* ------------------------------------------------------------ steps --- */

  R.steps = function (recipe) {
    var done = window.Store.getChecked(recipe.id, 'step');
    return '<ol class="steps">' + recipe.steps.map(function (s, i) {
      return '<li class="' + (done.indexOf(i) !== -1 ? 'done' : '') + '">' +
        '<span class="step-text" data-step="' + i + '" role="button" tabindex="0">' + U.esc(s) + '</span>' +
        '</li>';
    }).join('') + '</ol>';
  };

  /* ------------------------------------------------------------- misc --- */

  R.statStrip = function (recipe, servings) {
    return '<div class="stat-strip">' +
      '<div class="stat"><b>' + U.formatTime(recipe.totalTime) + '</b><span>Total</span></div>' +
      '<div class="stat"><b>' + U.formatTime(recipe.activeTime) + '</b><span>Hands on</span></div>' +
      '<div class="stat"><b>' + servings + '</b><span>Servings</span></div>' +
      '<div class="stat"><b>' + U.esc(recipe.difficulty) + '</b><span>Effort</span></div>' +
      (recipe.nutrition.calories
        ? '<div class="stat"><b>' + recipe.nutrition.calories + '</b><span>Cal / serving</span></div>'
        : '') +
      '</div>';
  };

  window.R = R;
})();
