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
    'kid-friendly': 'Crowd pleaser',
    'leftovers': 'Good leftovers',
    'high-protein': 'High protein',
    'veggie-forward': 'Veg heavy',
    'budget': 'Cheap',
    'special-occasion': 'Special',
    'no-cook': 'No cook',
    'low-carb': 'Lower carb',
    'comfort': 'Comfort food',
    'grill': 'Grill or broil',
    'dessert': 'Dessert'
  };

  R.tagLabel = function (tag) { return TAG_LABELS[tag] || U.titleCase(tag.replace(/-/g, ' ')); };

  R.styleVars = function (recipe) {
    return '--tint:' + U.tintFor(recipe) + ';';
  };

  /* -------------------------------------------------------------- card --- */

  R.card = function (recipe) {
    var fav = window.Store.isFavorite(recipe.id);
    var n = recipe.nutrition || {};

    return '' +
      '<article class="rcard" style="' + R.styleVars(recipe) + '">' +
        '<div class="rcard-thumb">' +
          '<span class="emoji" aria-hidden="true">' + U.emojiFor(recipe) + '</span>' +
          '<button class="fav-btn" type="button" data-fav="' + U.esc(recipe.id) + '"' +
            ' aria-pressed="' + (fav ? 'true' : 'false') + '"' +
            ' aria-label="' + (fav ? 'Remove' : 'Save') + ' ' + U.esc(recipe.title) + '">' +
            (fav ? '♥' : '♡') +
          '</button>' +
        '</div>' +
        '<div class="rcard-body">' +
          '<h3 class="rcard-title"><a href="#/recipe/' + U.esc(recipe.id) + '">' + U.esc(recipe.title) + '</a></h3>' +
          '<p class="rcard-blurb">' + U.esc(recipe.blurb) + '</p>' +
          '<div class="rcard-foot">' +
            (n.protein ? '<span class="pro">' + n.protein + 'g protein</span>' : '') +
            '<span class="meta">' + U.formatTime(recipe.totalTime) + ' &middot; ' + U.esc(recipe.difficulty) + '</span>' +
          '</div>' +
        '</div>' +
      '</article>';
  };

  R.cardGrid = function (list) {
    if (!list.length) return R.empty();
    return '<div class="card-grid">' + list.map(R.card).join('') + '</div>';
  };

  R.empty = function (msg) {
    return '<div class="empty-state">' +
      '<h3>' + U.esc(msg || 'Nothing matches those filters') + '</h3>' +
      '<p>Try clearing a filter, or search for something simpler like "chicken".</p>' +
      '</div>';
  };

  /* --------------------------------------------------------- mini list --- */

  R.miniItem = function (recipe) {
    var n = recipe.nutrition || {};
    return '<li><a href="#/recipe/' + U.esc(recipe.id) + '">' +
      '<span class="ml-emoji" style="' + R.styleVars(recipe) + '" aria-hidden="true">' + U.emojiFor(recipe) + '</span>' +
      '<span class="ml-body">' +
        '<span class="ml-title">' + U.esc(recipe.title) + '</span>' +
        '<span class="ml-meta">' + U.formatTime(recipe.totalTime) + ' &middot; ' + U.esc(recipe.difficulty) +
          (n.protein ? ' &middot; ' + n.protein + 'g protein' : '') + '</span>' +
      '</span></a></li>';
  };

  R.miniList = function (list) {
    return '<ul class="mini-list">' + list.map(R.miniItem).join('') + '</ul>';
  };

  /* --------------------------------------------------------- chip row --- */

  R.chipRow = function (recipe) {
    var out = [];
    out.push('<span class="chip chip-key">' + U.esc(recipe.protein) + '</span>');
    out.push('<span class="chip">' + U.esc(recipe.cuisine) + '</span>');
    out.push('<span class="chip">' + U.formatTime(recipe.totalTime) + '</span>');
    out.push('<span class="chip">' + U.esc(recipe.difficulty) + '</span>');
    for (var i = 0; i < recipe.tags.length && i < 3; i++) {
      out.push('<span class="chip">' + U.esc(R.tagLabel(recipe.tags[i])) + '</span>');
    }
    return '<div class="chip-row">' + out.join('') + '</div>';
  };

  /* -------------------------------------------------------- nutrition --- */

  // Protein leads, because that is the thing worth checking at a glance.
  R.nutrition = function (recipe) {
    var n = recipe.nutrition || {};
    if (!n.calories) return '';

    function cell(val, unit, label) {
      return '<div class="nut-cell"><span class="nut-val">' + val + (unit || '') + '</span>' +
             '<span class="nut-lab">' + label + '</span></div>';
    }

    return '' +
      '<div class="nutrition">' +
        '<div class="nut-lead">' +
          '<span class="nut-lead-val">' + (n.protein || 0) + 'g</span>' +
          '<span class="nut-lead-lab">protein per serving</span>' +
        '</div>' +
        '<div class="nut-grid">' +
          cell(n.calories, '', 'Calories') +
          cell(n.carbs, 'g', 'Carbs') +
          cell(n.fat, 'g', 'Fat') +
          (n.fiber != null ? cell(n.fiber, 'g', 'Fiber') : '') +
        '</div>' +
        '<p class="nut-note">Rough estimates for one serving.</p>' +
      '</div>';
  };

  /* ------------------------------------------------------ plate slots --- */

  R.plateSlots = function (recipe) {
    var p = recipe.plate || {};
    var rows = [['Protein', p.protein], ['Starch', p.starch], ['Veg', p.veg]];
    return '<dl class="plate">' + rows.map(function (row) {
      return '<div class="plate-row">' +
        '<dt>' + row[0] + '</dt>' +
        '<dd>' + (row[1] ? U.esc(row[1]) : '<span class="plate-gap">add a side</span>') + '</dd>' +
        '</div>';
    }).join('') + '</dl>';
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
    var n = recipe.nutrition || {};
    return '<div class="stat-strip">' +
      '<div class="stat"><b>' + U.formatTime(recipe.totalTime) + '</b><span>Total</span></div>' +
      '<div class="stat"><b>' + U.formatTime(recipe.activeTime) + '</b><span>Hands on</span></div>' +
      '<div class="stat"><b>' + servings + '</b><span>Servings</span></div>' +
      (n.protein ? '<div class="stat stat-key"><b>' + n.protein + 'g</b><span>Protein</span></div>' : '') +
      (n.calories ? '<div class="stat"><b>' + n.calories + '</b><span>Calories</span></div>' : '') +
      '</div>';
  };

  window.R = R;
})();
