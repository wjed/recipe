/* ==========================================================================
   app.js - hash router, views and event wiring.
   Hash routing is deliberate: it works from GitHub Pages and equally well
   from a file:// double-click, with no server and no build step.
   ========================================================================== */
(function () {
  'use strict';

  var U = window.U, R = window.R, DB = window.DB, Store = window.Store;
  var main = document.getElementById('main');

  var currentView = null;      // which view is mounted right now
  var pickerState = { current: null, filters: {} };

  /* ------------------------------------------------------------ routing -- */

  function parseHash() {
    var h = location.hash.replace(/^#/, '') || '/';
    var qIndex = h.indexOf('?');
    var path = qIndex === -1 ? h : h.slice(0, qIndex);
    var query = qIndex === -1 ? '' : h.slice(qIndex + 1);

    var params = {};
    query.split('&').forEach(function (pair) {
      if (!pair) return;
      var kv = pair.split('=');
      params[decodeURIComponent(kv[0])] = decodeURIComponent((kv[1] || '').replace(/\+/g, ' '));
    });

    return { parts: path.split('/').filter(Boolean), params: params };
  }

  function buildHash(path, params) {
    var q = Object.keys(params || {})
      .filter(function (k) { return params[k] !== '' && params[k] != null; })
      .map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]); })
      .join('&');
    return '#' + path + (q ? '?' + q : '');
  }

  function route() {
    var r = parseHash();
    var name = r.parts[0] || 'home';

    closeNav();

    switch (name) {
      case 'browse':    viewBrowse(r.params);            break;
      case 'recipe':    viewRecipe(r.parts[1]);          break;
      case 'plan':      viewPlan();                      break;
      case 'favorites': viewFavorites();                 break;
      case 'transfer':  viewTransfer(r.params);          break;
      case 'help':      viewHelp();                      break;
      case 'home':      viewHome();                      break;
      default:          viewNotFound();                  break;
    }

    markNav(name);
  }

  function markNav(name) {
    var links = document.querySelectorAll('.primary-nav a');
    for (var i = 0; i < links.length; i++) {
      var nav = links[i].getAttribute('data-nav');
      if (nav === name) links[i].setAttribute('aria-current', 'page');
      else links[i].removeAttribute('aria-current');
    }
  }

  function setView(html, viewName, keepScroll) {
    main.innerHTML = html;
    if (currentView !== viewName && !keepScroll) window.scrollTo(0, 0);
    currentView = viewName;
  }

  /* --------------------------------------------------------------- home -- */

  function sundayGreeting() {
    var now = new Date();
    var day = now.getDay();              // 0 = Sunday
    if (day === 0) return 'Happy Sunday, Sarah.';
    var away = 7 - day;
    if (away === 1) return 'One more sleep until Sunday dinner.';
    return away + ' days until Sunday dinner.';
  }

  function viewHome() {
    if (!pickerState.current) {
      pickerState.current = DB.suggest(pickerState.filters);
      if (pickerState.current) Store.remember(pickerState.current.id);
    }

    var quick    = DB.query({ maxTime: 40, sort: 'quickest' }).slice(0, 4);
    var protein  = DB.query({ sort: 'protein' }).slice(0, 4);
    var classics = DB.query({ tags: ['comfort'], sort: 'az' }).slice(0, 4);
    var veg      = DB.query({ tags: ['veggie-forward'], sort: 'az' }).slice(0, 4);

    var html = '' +
      '<section class="hero"><div class="wrap hero-inner">' +
        '<p class="hero-greeting">' + U.esc(sundayGreeting()) + '</p>' +
        '<h1>What should we make for dinner?</h1>' +
        '<p class="lede">A real protein, something starchy, something green.</p>' +
        '<div class="hero-actions">' +
          '<button class="btn btn-primary btn-lg" data-act="reroll">Give me an idea</button>' +
          '<a class="btn btn-secondary btn-lg" href="#/browse">Browse all ' + DB.count() + '</a>' +
        '</div>' +
      '</div></section>' +

      '<div class="wrap pick-wrap">' +
        '<div id="pickHost">' + pickHtml() + '</div>' +
      '</div>' +

      section('Quick nights', 'On the table in 40 minutes or less.', quick, '#/browse?t=40&sort=quickest') +
      section('Most protein', 'The heaviest hitters in the box.', protein, '#/browse?sort=protein') +
      section('Slow and cozy', 'For when you have the afternoon.', classics, '#/browse?tag=comfort') +
      section('Veg heavy', 'Where the vegetables do most of the work.', veg, '#/browse?tag=veggie-forward');

    setView(html, 'home');
  }

  function section(title, note, list, moreHref) {
    if (!list.length) return '';
    return '<div class="wrap section">' +
      '<div class="section-head">' +
        '<h2>' + title + '</h2>' +
        '<a class="section-note" href="' + moreHref + '">See more →</a>' +
      '</div>' +
      '<p class="section-note" style="margin:0 0 16px">' + note + '</p>' +
      R.cardGrid(list) +
      '</div>';
  }

  function pickHtml() {
    var r = pickerState.current;
    if (!r) {
      return '<div class="pick"><div class="pick-body">' + R.empty('No recipe matches those filters') +
        '<button class="btn btn-secondary" data-act="clearPickFilters">Clear the filters</button>' +
        '</div></div>';
    }

    var sides = DB.pairFor(r, U.hash(r.id));
    var sidesHtml = '';
    if (sides.length) {
      sidesHtml = '<div class="pick-sides"><h3>Serve it with</h3>' + R.miniList(sides) + '</div>';
    }

    var fav = Store.isFavorite(r.id);

    return '' +
      '<div class="pick">' +
        '<div class="pick-top" style="' + R.styleVars(r) + '">' +
          '<span class="pick-emoji" aria-hidden="true">' + U.emojiFor(r) + '</span>' +
          '<div>' +
            '<p class="eyebrow">Tonight</p>' +
            '<h2 class="pick-title"><a href="#/recipe/' + U.esc(r.id) + '">' + U.esc(r.title) + '</a></h2>' +
            '<p class="pick-blurb">' + U.esc(r.blurb) + '</p>' +
          '</div>' +
        '</div>' +
        '<div class="pick-body">' +
          '<div class="pick-cols">' +
            '<div>' + R.plateSlots(r) + '</div>' +
            '<div>' + R.nutrition(r) + '</div>' +
          '</div>' +
          sidesHtml +
          '<div class="pick-actions">' +
            '<a class="btn btn-primary" href="#/recipe/' + U.esc(r.id) + '">See the recipe</a>' +
            '<button class="btn btn-secondary" data-act="reroll">Another idea</button>' +
            '<button class="btn btn-secondary" data-act="planThis" data-id="' + U.esc(r.id) + '">Add to plan</button>' +
            '<button class="btn btn-ghost" data-fav="' + U.esc(r.id) + '" aria-pressed="' + (fav ? 'true' : 'false') + '">' +
              (fav ? '♥ Saved' : '♡ Save this') + '</button>' +
          '</div>' +
          '<div class="pick-filters">' +
            '<p class="section-note">Narrow it down</p>' +
            pickFilters() +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function pickFilters() {
    var f = pickerState.filters;
    var proteins = ['Chicken', 'Beef', 'Pork', 'Fish', 'Shrimp', 'Vegetarian'];
    var out = ['<div class="chip-row">'];

    out.push(chipBtn('Any protein', !f.proteins || !f.proteins.length, 'pickProtein', ''));
    proteins.forEach(function (p) {
      out.push(chipBtn(p, !!(f.proteins && f.proteins.indexOf(p) !== -1), 'pickProtein', p));
    });
    out.push(chipBtn('Under 45 min', f.maxTime === 45, 'pickTime', '45'));
    out.push(chipBtn('Easy only', !!(f.difficulty && f.difficulty.length), 'pickEasy', '1'));
    out.push(chipBtn('Cooking tonight', !!f.noAhead, 'pickNow', '1'));
    out.push('</div>');
    return out.join('');
  }

  function chipBtn(label, pressed, act, value) {
    return '<button class="chip chip-btn" type="button" data-act="' + act + '" data-value="' + U.esc(value) + '"' +
      ' aria-pressed="' + (pressed ? 'true' : 'false') + '">' + U.esc(label) + '</button>';
  }

  function reroll() {
    var next = DB.suggest(pickerState.filters);
    pickerState.current = next;
    if (next) Store.remember(next.id);

    var host = document.getElementById('pickHost');
    if (!host) return;
    host.innerHTML = pickHtml();
    revealPick(host);
  }

  // Deliberately does not scroll. Moving the page under someone who just
  // pressed a button is worse than them glancing down a few centimetres, so
  // the hero is kept short enough that the card is already in view.
  function revealPick(host) {
    var card = host.querySelector('.pick');
    if (!card) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    card.classList.remove('is-new');
    void card.offsetWidth;            // restart the animation
    card.classList.add('is-new');
  }

  function refreshPick() {
    var host = document.getElementById('pickHost');
    if (host) host.innerHTML = pickHtml();
  }

  /* ------------------------------------------------------------- browse -- */

  var PROTEINS = ['Chicken', 'Beef', 'Pork', 'Turkey', 'Lamb', 'Fish', 'Shrimp', 'Eggs', 'Vegetarian'];
  var TIMES = [['30', '30 min or less'], ['45', '45 min or less'], ['60', '1 hour or less']];
  var TAGS = ['one-pan', 'sheet-pan', 'slow-cooker', 'comfort', 'veggie-forward', 'kid-friendly',
              'make-ahead', 'high-protein', 'gluten-free', 'dairy-free', 'low-carb', 'budget',
              'leftovers', 'freezer-friendly', 'grill', 'special-occasion'];

  var filtersOpen = false;   // phone only, the rows are always shown on desktop

  function activeFilterCount(o) {
    return (o.proteins ? o.proteins.length : 0) + (o.tags ? o.tags.length : 0) +
           (o.difficulty ? o.difficulty.length : 0) + (o.maxTime ? 1 : 0) +
           (o.noAhead ? 1 : 0) + (o.type && o.type !== 'main' ? 1 : 0);
  }

  function paramsToOpts(p) {
    return {
      q: p.q || '',
      proteins: p.p ? p.p.split(',') : [],
      maxTime: p.t ? parseInt(p.t, 10) : 0,
      tags: p.tag ? p.tag.split(',') : [],
      difficulty: p.d ? p.d.split(',') : [],
      noAhead: p.now === '1',
      type: p.type || 'main',
      sort: p.sort || (p.q ? 'relevance' : 'az')
    };
  }

  function viewBrowse(p) {
    var opts = paramsToOpts(p);
    var results = DB.query(opts);

    // Re-rendering the whole view on every keystroke would steal focus from the
    // search box, so an already-mounted browse view only refreshes its results.
    if (currentView === 'browse' && document.getElementById('results')) {
      updateBrowseChrome(p, opts, results);
      return;
    }

    var html = '' +
      '<div class="wrap section browse-head" style="padding-top:22px">' +
        '<h1 style="margin-bottom:.2em">The recipe box</h1>' +
        '<p class="lede">' + DB.mainCount() + ' dinners and ' + DB.sideCount() +
          ' sides &amp; sweets. Search it, or tap the buttons to narrow things down.</p>' +
      '</div>' +

      '<div class="toolbar"><div class="wrap">' +
        '<div class="searchbox">' +
          '<span class="s-ico" aria-hidden="true">🔍</span>' +
          '<label class="sr-only" for="q">Search recipes</label>' +
          '<input id="q" type="search" placeholder="Search: chicken, salmon, potatoes, taco…" value="' + U.esc(opts.q) + '" autocomplete="off">' +
          '<button class="s-clear" type="button" data-act="clearQ" aria-label="Clear search"' +
            (opts.q ? '' : ' hidden') + '>✕</button>' +
        '</div>' +
        '<button class="filter-toggle" type="button" data-act="toggleFilters"' +
          ' aria-expanded="' + (filtersOpen ? 'true' : 'false') + '" aria-controls="filterRows">' +
          'Filters' + (activeFilterCount(opts) ? ' <span class="filter-count">' +
            activeFilterCount(opts) + '</span>' : '') +
        '</button>' +
        '<div id="filterRows" class="filter-rows' + (filtersOpen ? ' open' : '') + '">' +
          filterRows(opts) +
        '</div>' +
      '</div></div>' +

      '<div class="wrap">' +
        '<div class="result-bar">' +
          '<span id="resultCount">' + countLabel(results.length) + '</span>' +
          '<span>' +
            '<label class="sr-only" for="sortSel">Sort by</label>' +
            '<select id="sortSel">' + sortOptions(opts.sort) + '</select> ' +
            '<button class="btn btn-ghost btn-sm" data-act="clearAll">Reset</button>' +
          '</span>' +
        '</div>' +
        '<div id="results">' + R.cardGrid(results) + '</div>' +
      '</div>';

    setView(html, 'browse');
    wireBrowse();
  }

  function filterRows(opts) {
    var out = '';

    out += '<div class="filter-row"><span class="filter-label">Show</span><div class="filter-scroll">' +
      chipBtn('Dinners', opts.type === 'main', 'fType', 'main') +
      chipBtn('Sides & sweets', opts.type === 'side', 'fType', 'side') +
      chipBtn('Everything', opts.type === 'all', 'fType', 'all') +
      '</div></div>';

    out += '<div class="filter-row"><span class="filter-label">Main</span><div class="filter-scroll">' +
      chipBtn('Any', !opts.proteins.length, 'fProtein', '') +
      PROTEINS.map(function (x) {
        return chipBtn(x, opts.proteins.indexOf(x) !== -1, 'fProtein', x);
      }).join('') + '</div></div>';

    out += '<div class="filter-row"><span class="filter-label">Time</span><div class="filter-scroll">' +
      chipBtn('Any', !opts.maxTime, 'fTime', '') +
      TIMES.map(function (t) {
        return chipBtn(t[1], opts.maxTime === parseInt(t[0], 10), 'fTime', t[0]);
      }).join('') +
      chipBtn('Easy only', opts.difficulty.indexOf('Easy') !== -1, 'fEasy', 'Easy') +
      chipBtn('No planning ahead', opts.noAhead, 'fNow', '1') +
      '</div></div>';

    out += '<div class="filter-row"><span class="filter-label">Style</span><div class="filter-scroll">' +
      TAGS.map(function (t) {
        return chipBtn(R.tagLabel(t), opts.tags.indexOf(t) !== -1, 'fTag', t);
      }).join('') + '</div></div>';

    return out;
  }

  function sortOptions(current) {
    var opts = [
      ['az', 'A to Z'], ['quickest', 'Quickest first'], ['easiest', 'Easiest first'],
      ['protein', 'Most protein'], ['lightest', 'Lightest first'], ['relevance', 'Best match']
    ];
    return opts.map(function (o) {
      return '<option value="' + o[0] + '"' + (current === o[0] ? ' selected' : '') + '>' + o[1] + '</option>';
    }).join('');
  }

  function countLabel(n) {
    var base = n === 0 ? 'No recipes found' : n === 1 ? '1 recipe' : n + ' recipes';
    var fixes = DB.lastCorrections(), ignored = DB.lastIgnored();
    var note = '';
    if (fixes.length) {
      note = ' for ' + fixes.map(function (f) { return '"' + U.esc(f[1]) + '"'; }).join(' and ');
    } else if (ignored.length) {
      note = ', ignoring ' + ignored.map(function (w) { return '"' + U.esc(w) + '"'; }).join(' and ');
    }
    return base + note;
  }

  function updateBrowseChrome(p, opts, results) {
    document.getElementById('results').innerHTML = R.cardGrid(results);
    document.getElementById('resultCount').textContent = countLabel(results.length);

    var sortSel = document.getElementById('sortSel');
    if (sortSel && sortSel.value !== opts.sort) sortSel.value = opts.sort;

    var input = document.getElementById('q');
    if (input && input.value !== opts.q && document.activeElement !== input) input.value = opts.q;

    var clear = document.querySelector('[data-act="clearQ"]');
    if (clear) clear.hidden = !opts.q;

    // Rebuild only the chip rows, leaving the search input untouched.
    var rows = document.querySelectorAll('.toolbar .filter-row');
    var fresh = document.createElement('div');
    fresh.innerHTML = filterRows(opts);
    var freshRows = fresh.querySelectorAll('.filter-row');
    for (var i = 0; i < rows.length && i < freshRows.length; i++) {
      rows[i].innerHTML = freshRows[i].innerHTML;
    }
  }

  function wireBrowse() {
    var input = document.getElementById('q');
    if (input) {
      input.addEventListener('input', U.debounce(function () {
        setParam('q', input.value.trim());
      }, 220));
    }
    var sortSel = document.getElementById('sortSel');
    if (sortSel) sortSel.addEventListener('change', function () { setParam('sort', sortSel.value); });
  }

  function setParam(key, value) {
    var r = parseHash();
    var p = r.params;
    if (value === '' || value == null) delete p[key];
    else p[key] = value;
    location.hash = buildHash('/browse', p);
  }

  function toggleListParam(key, value) {
    var r = parseHash();
    var p = r.params;
    if (!value) { delete p[key]; location.hash = buildHash('/browse', p); return; }
    var list = p[key] ? p[key].split(',') : [];
    var i = list.indexOf(value);
    if (i === -1) list.push(value); else list.splice(i, 1);
    if (list.length) p[key] = list.join(','); else delete p[key];
    location.hash = buildHash('/browse', p);
  }

  /* ------------------------------------------------------------- recipe -- */

  function viewRecipe(id) {
    var r = DB.byId(id);
    if (!r) { viewNotFound(); return; }

    var servings = Store.getServings(r.id, r.servings);
    var factor = servings / r.servings;
    var fav = Store.isFavorite(r.id);
    var sides = DB.pairFor(r, U.hash(r.id));
    var more = DB.related(r, 4);

    var html = '' +
      '<section class="recipe-hero" style="' + R.styleVars(r) + '"><div class="wrap recipe-hero-inner">' +
        '<p class="crumb"><a href="#/browse">← All recipes</a></p>' +
        '<span class="recipe-emoji" aria-hidden="true">' + U.emojiFor(r) + '</span>' +
        '<h1>' + U.esc(r.title) + '</h1>' +
        '<p class="lede">' + U.esc(r.blurb) + '</p>' +
        R.chipRow(r) +
        R.statStrip(r, servings) +
      '</div></section>' +

      '<div class="wrap"><div class="recipe-layout">' +

        '<div>' +
          '<div class="panel">' +
            '<h2>Ingredients</h2>' +
            '<div class="serving-ctl">' +
              '<span class="label">Serves</span>' +
              '<span class="stepper">' +
                '<button type="button" data-act="serv" data-value="-1" aria-label="Fewer servings">−</button>' +
                '<span class="count" id="servCount">' + servings + '</span>' +
                '<button type="button" data-act="serv" data-value="1" aria-label="More servings">+</button>' +
              '</span>' +
              (servings !== r.servings
                ? '<button class="btn btn-ghost btn-sm" data-act="servReset">Reset</button>' : '') +
            '</div>' +
            '<div id="ingHost">' + R.ingredients(r, factor) + '</div>' +
          '</div>' +

          '<div class="panel">' +
            '<h2>The plate</h2>' +
            R.plateSlots(r) +
          '</div>' +

          (R.nutrition(r) ? '<div class="panel"><h2>Nutrition</h2>' + R.nutrition(r) + '</div>' : '') +
        '</div>' +

        '<div>' +
          (r.ahead ? '<div class="callout callout-warn"><p><strong>Start early</strong>' +
            U.esc(r.ahead.note) + '</p></div>' : '') +
          (r.makeAhead ? callout('Get ahead', r.makeAhead) : '') +
          '<div class="panel">' +
            '<div class="section-head" style="margin-bottom:6px">' +
              '<h2 style="margin:0">Method</h2>' +
              (window.Kitchen && Kitchen.wakeSupported()
                ? '<button class="btn btn-ghost btn-sm" data-act="wake" aria-pressed="' +
                  (Kitchen.wakeIsOn() ? 'true' : 'false') + '">' +
                  (Kitchen.wakeIsOn() ? 'Screen staying on' : 'Keep screen on') + '</button>'
                : '') +
            '</div>' +
            '<p class="section-note" style="margin-bottom:16px">Tap a step to cross it off. ' +
              'Tap any time to start a timer.</p>' +
            R.steps(r) +
          '</div>' +

          (r.tips && r.tips.length
            ? '<div class="panel"><h2>Notes</h2><ul class="tip-list">' +
              r.tips.map(function (t) { return '<li><span>' + U.esc(t) + '</span></li>'; }).join('') +
              '</ul></div>'
            : '') +

          (sides.length
            ? '<div class="panel"><h2>Serve it with</h2>' + R.miniList(sides) + '</div>'
            : '') +

          '<div class="panel">' +
            '<h2>Save it</h2>' +
            '<div class="chip-row" style="gap:10px">' +
              '<button class="btn btn-primary" data-act="planThis" data-id="' + U.esc(r.id) + '">Add to plan</button>' +
              '<button class="btn btn-secondary" data-fav="' + U.esc(r.id) + '" aria-pressed="' + (fav ? 'true' : 'false') + '">' +
                (fav ? '♥ Saved' : '♡ Save this') + '</button>' +
              '<button class="btn btn-secondary" data-act="print">Print</button>' +
              '<button class="btn btn-ghost" data-act="resetChecks" data-id="' + U.esc(r.id) + '">Clear check marks</button>' +
            '</div>' +
          '</div>' +

          (more.length
            ? '<div class="panel"><h2>More like this</h2>' + R.miniList(more) + '</div>'
            : '') +
        '</div>' +

      '</div></div>';

    setView(html, 'recipe:' + r.id);
    main.focus();
  }

  function callout(title, body) {
    return '<div class="callout">' +
      '<p><strong>' + U.esc(title) + '</strong>' + U.esc(body) + '</p></div>';
  }

  /* --------------------------------------------------------------- plan -- */

  var SLOTS = [
    ['main',    'Main dish',   'Pick a main'],
    ['side1',   'Side one',    'Something green'],
    ['side2',   'Side two',    'Something starchy'],
    ['dessert', 'Dessert',     'Optional']
  ];

  function viewPlan() {
    var plan = Store.plan();
    var ids = SLOTS.map(function (s) { return plan[s[0]]; }).filter(Boolean);

    var slotsHtml = SLOTS.map(function (s) {
      var r = plan[s[0]] ? DB.byId(plan[s[0]]) : null;
      if (!r) {
        return '<div class="plan-slot">' +
          '<span class="ps-emoji" aria-hidden="true">＋</span>' +
          '<span class="ps-body"><span class="ps-label">' + s[1] + '</span>' +
            '<div class="ps-empty">' + s[2] + '</div></span>' +
          '<span class="ps-actions">' +
            '<a class="btn btn-ghost btn-sm" href="' + slotBrowseHref(s[0]) + '">Choose</a>' +
          '</span></div>';
      }
      return '<div class="plan-slot" style="' + R.styleVars(r) + '">' +
        '<span class="ps-emoji" aria-hidden="true">' + U.emojiFor(r) + '</span>' +
        '<span class="ps-body">' +
          '<span class="ps-label">' + s[1] + '</span>' +
          '<div class="ps-title"><a href="#/recipe/' + U.esc(r.id) + '">' + U.esc(r.title) + '</a></div>' +
          '<span class="ml-meta">' + U.formatTime(r.totalTime) + ' · ' + U.esc(r.difficulty) +
            (r.nutrition.calories ? ' · ' + r.nutrition.calories + ' cal' : '') + '</span>' +
        '</span>' +
        '<span class="ps-actions">' +
          '<button class="icon-btn" data-act="unplan" data-slot="' + s[0] + '" aria-label="Remove ' + U.esc(r.title) + '">✕</button>' +
        '</span></div>';
    }).join('');

    var totals = planTotals(ids);
    var list = DB.shoppingList(ids);
    var checkedLines = Store.shopChecked();

    var shopHtml = ids.length
      ? list.map(function (grp) {
          return '<p class="shop-cat">' + U.esc(grp.aisle) + '</p><ul class="shop-list">' +
            grp.items.map(function (it) {
              var on = checkedLines.indexOf(it.line) !== -1;
              // one recipe: just name it. Several: list each amount, so the
              // quantities are never quietly merged into one.
              var sub = it.needs.length === 1
                ? U.esc(it.needs[0].from)
                : it.needs.map(function (n) {
                    return U.esc((n.amount ? n.amount + ' ' : '') + 'for ' + n.from);
                  }).join(', ');
              return '<li><label><input type="checkbox" data-shop="' + U.esc(it.line) + '"' +
                (on ? ' checked' : '') + '><span>' + U.esc(it.line) +
                '<br><small style="color:var(--ink-3)">' + sub + '</small></span></label></li>';
            }).join('') + '</ul>';
        }).join('')
      : '<p class="section-note">Add a recipe and the shopping list writes itself.</p>';

    var html = '' +
      '<div class="wrap section" style="padding-top:26px">' +
        '<h1>This Sunday&rsquo;s plan</h1>' +
        '<p class="lede">Build the menu here. The shopping list writes itself, ' +
          'and it stays on this device until you change it.</p>' +

        '<div class="plan-grid" style="margin-top:26px">' +
          '<div>' +
            slotsHtml +
            (ids.length ? '<div class="panel" style="margin-top:18px">' +
              '<h2>The whole meal</h2>' +
              '<p class="nut-note">Adding up one serving of each dish.</p>' +
              '<div class="nut-grid">' +
                '<div class="nut-cell"><span class="nut-val">' + totals.calories + '</span><span class="nut-lab">Calories</span></div>' +
                '<div class="nut-cell"><span class="nut-val">' + totals.protein + 'g</span><span class="nut-lab">Protein</span></div>' +
                '<div class="nut-cell"><span class="nut-val">' + totals.carbs + 'g</span><span class="nut-lab">Carbs</span></div>' +
                '<div class="nut-cell"><span class="nut-val">' + totals.fat + 'g</span><span class="nut-lab">Fat</span></div>' +
                '<div class="nut-cell"><span class="nut-val">' + totals.fiber + 'g</span><span class="nut-lab">Fiber</span></div>' +
              '</div>' +
              '<p class="nut-note" style="margin:14px 0 0">Longest cook time on the menu: <strong>' +
                U.formatTime(totals.longest) + '</strong>.</p>' +
            '</div>' : '') +
            '<div class="chip-row" style="gap:10px;margin-top:16px">' +
              '<button class="btn btn-secondary" data-act="surpriseMenu">Build me a menu</button>' +
              (ids.length ? '<button class="btn btn-ghost" data-act="clearPlan">Clear the plan</button>' : '') +
            '</div>' +
          '</div>' +

          '<div class="panel">' +
            '<div class="section-head" style="margin-bottom:10px">' +
              '<h2 style="margin:0">Shopping list</h2>' +
              (ids.length ? '<button class="btn btn-ghost btn-sm" data-act="print">Print</button>' : '') +
            '</div>' +
            shopHtml +
            (ids.length ? '<button class="btn btn-ghost btn-sm" data-act="resetShop" style="margin-top:14px">Untick everything</button>' : '') +
          '</div>' +
        '</div>' +
      '</div>';

    setView(html, 'plan');
  }

  function slotBrowseHref(slot) {
    if (slot === 'main') return '#/browse?type=main';
    if (slot === 'dessert') return '#/browse?type=side&tag=dessert';
    return '#/browse?type=side';
  }

  function planTotals(ids) {
    var t = { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, longest: 0 };
    ids.forEach(function (id) {
      var r = DB.byId(id);
      if (!r) return;
      var n = r.nutrition || {};
      t.calories += n.calories || 0;
      t.protein  += n.protein  || 0;
      t.carbs    += n.carbs    || 0;
      t.fat      += n.fat      || 0;
      t.fiber    += n.fiber    || 0;
      t.longest = Math.max(t.longest, r.totalTime || 0);
    });
    return t;
  }

  function surpriseMenu() {
    var mainPick = DB.suggest({});
    if (!mainPick) return;
    Store.setPlanSlot('main', mainPick.id);
    var pair = DB.pairFor(mainPick);
    Store.setPlanSlot('side1', pair[0] ? pair[0].id : null);
    Store.setPlanSlot('side2', pair[1] ? pair[1].id : null);
    U.toast('A whole menu, ready to go');
    viewPlan();
  }

  function addToPlan(id) {
    var r = DB.byId(id);
    if (!r) return;
    var plan = Store.plan();

    if (r.type === 'main') {
      Store.setPlanSlot('main', r.id);
      U.toast('Added as the main');
    } else if (r.sideType === 'dessert') {
      Store.setPlanSlot('dessert', r.id);
      U.toast('Added as dessert');
    } else if (!plan.side1) {
      Store.setPlanSlot('side1', r.id);
      U.toast('Added as a side');
    } else if (!plan.side2) {
      Store.setPlanSlot('side2', r.id);
      U.toast('Added as a side');
    } else {
      Store.setPlanSlot('side1', r.id);
      U.toast('Swapped into side one');
    }
  }

  /* ---------------------------------------------------------- favorites -- */

  function viewFavorites() {
    var ids = Store.favorites();
    var list = DB.query({ type: 'all', ids: ids, sort: 'az' });

    var html = '<div class="wrap section" style="padding-top:26px">' +
      '<h1 style="margin-bottom:.2em">Saved recipes</h1>' +
      '<p class="lede">The ones you tapped the heart on. They live in this browser, ' +
        'on this device.</p>' +
      (list.length
        ? '<div style="margin-top:26px">' + R.cardGrid(list) + '</div>'
        : '<div class="empty-state">' +
          '<h3>Nothing saved yet</h3>' +
          '<p>Tap the little heart on any recipe and it will show up here.</p>' +
          '<p style="margin-top:18px"><a class="btn btn-primary" href="#/browse">Go find something</a></p></div>') +
      transferPanel() +
      '</div>';

    setView(html, 'favorites');
  }

  /* ---------------------------------------------------- moving devices -- */

  // The whole saved list is a handful of recipe ids, so it fits in a link.
  // Send yourself the link, open it on the other device, done. No account.
  function transferLink() {
    var payload = U.pack(Store.exportState());
    if (!payload) return null;
    var base = location.origin + location.pathname;
    if (location.protocol === 'file:') base = location.href.split('#')[0];
    return base + '#/transfer?d=' + payload;
  }

  function transferPanel() {
    var saved = Store.favorites().length;
    var planned = Store.planCount();
    if (!saved && !planned) return '';

    var link = transferLink();
    if (!link) return '';

    return '<div class="panel transfer" style="margin-top:30px">' +
      '<h2>Use these on another device</h2>' +
      '<p class="section-note" style="margin-bottom:14px">' +
        'This link carries your ' + saved + ' saved recipe' + (saved === 1 ? '' : 's') +
        (planned ? ' and this Sunday&rsquo;s plan' : '') + '. ' +
        'Text or email it to yourself, open it on the other phone or computer, ' +
        'and everything lands there. Keep the message and it doubles as a backup.</p>' +
      '<div class="transfer-row">' +
        '<label class="sr-only" for="xferLink">Transfer link</label>' +
        '<input id="xferLink" type="text" readonly value="' + U.esc(link) + '">' +
        '<button class="btn btn-primary" data-act="copyLink">Copy link</button>' +
      '</div>' +
      '</div>';
  }

  function viewTransfer(params) {
    var payload = params.d ? U.unpack(params.d) : null;

    if (!payload || payload.v !== 1) {
      setView('<div class="wrap section"><div class="empty-state">' +
        '<h1>That link did not work</h1>' +
        '<p>It may have been cut short by the app you sent it through. ' +
        'Try sending it again, and check the whole thing came across.</p>' +
        '<p style="margin-top:18px"><a class="btn btn-primary" href="#/favorites">Go to saved recipes</a></p>' +
        '</div></div>', 'transfer');
      return;
    }

    var incoming = (payload.f || []).filter(function (id) { return DB.byId(id); });
    var list = DB.query({ type: 'all', ids: incoming, sort: 'az' });
    var p = payload.p || {};
    var planIds = [p.m, p.a, p.b, p.d].filter(function (id) { return id && DB.byId(id); });
    var here = Store.favorites().length;

    var html = '<div class="wrap section" style="padding-top:26px">' +
      '<h1 style="margin-bottom:.2em">Bring these over?</h1>' +
      '<p class="lede">This link is carrying ' + incoming.length + ' saved recipe' +
        (incoming.length === 1 ? '' : 's') +
        (planIds.length ? ' and a Sunday plan' : '') + '. ' +
        (here ? 'You already have ' + here + ' saved on this device.' : 'Nothing is saved on this device yet.') +
      '</p>' +

      '<div class="chip-row" style="gap:10px;margin:22px 0 30px">' +
        '<button class="btn btn-primary" data-act="doImport" data-mode="merge" data-d="' + U.esc(params.d) + '">' +
          (here ? 'Add to what is here' : 'Bring them over') + '</button>' +
        (here ? '<button class="btn btn-secondary" data-act="doImport" data-mode="replace" data-d="' + U.esc(params.d) + '">' +
          'Replace what is here</button>' : '') +
        '<a class="btn btn-ghost" href="#/favorites">Cancel</a>' +
      '</div>' +

      (list.length ? R.cardGrid(list) : '<p class="section-note">None of those recipes exist any more.</p>') +
      '</div>';

    setView(html, 'transfer');
  }

  /* --------------------------------------------------------------- help -- */

  function viewHelp() {
    var html = '<div class="wrap section" style="padding-top:26px"><div class="prose">' +
      '<h1>How it works</h1>' +
      '<p class="lede">Short version: press the big button on the front page. ' +
        'The rest is extra.</p>' +

      '<h2>The front page</h2>' +
      '<p>Press <strong>Give me an idea</strong> and it picks a dinner. Don\'t like it? ' +
        'Press <strong>Another idea</strong>. It remembers the last dozen so it won\'t keep ' +
        'handing you the same thing. Underneath you can narrow it down to chicken only, ' +
        'under 45 minutes, or easy only.</p>' +

      '<h2>Every dinner is a full plate</h2>' +
      '<p>Each one lists what it brings: <strong>a protein, a starch, and a vegetable</strong>. ' +
        'If a recipe is missing one of the three, the site suggests a side to fill the gap.</p>' +
      '<p>Every dinner in here has at least 25g of protein per serving. You can sort the whole ' +
        'box by protein from the <strong>All Recipes</strong> page.</p>' +

      '<h2>Serving sizes</h2>' +
      '<p>Recipes are written for four. Use the <strong>+</strong> and <strong>&minus;</strong> ' +
        'buttons next to "Serves" and every ingredient amount rescales itself.</p>' +
      '<p>It does the maths literally, so it will happily tell you to buy one and a half whole ' +
        'chickens. Round those to something you can buy. The cooking times stay about the same.</p>' +

      '<h2>Cooking from your phone</h2>' +
      '<p>Tap an ingredient to cross it off. Tap a step to grey it out. It remembers where you ' +
        'were if the screen goes dark or you close the tab.</p>' +
      '<p>Any time written in a step is a button. Tap <strong>25 minutes</strong> and a timer ' +
        'starts at the bottom of the screen. It beeps when it is up, and you can run several ' +
        'at once. For a range like 8 to 10 minutes it times the shorter one, so you check early. ' +
        'Timers run while the site is open and stop if you close the tab.</p>' +
      '<p>There is a <strong>Keep screen on</strong> button next to the method, so the phone ' +
        'does not lock while your hands are covered in flour.</p>' +

      '<h2>It works without internet</h2>' +
      '<p>After the first visit the whole site is stored on the device, so it opens even with ' +
        'no signal in the kitchen. Add it to your home screen and it behaves like an app.</p>' +

      '<h2>Recipes that need a head start</h2>' +
      '<p>A few need marinating or chilling before you can start, and the stated ' +
        'time does not cover that. Those show <strong>plan 4h ahead</strong> on the ' +
        'card and say so at the top of the recipe. If you are cooking right now, ' +
        'tap <strong>No planning ahead</strong> on the All Recipes page and they ' +
        'drop out of the list.</p>' +

      '<h2>The Sunday plan</h2>' +
      '<p>Add a main and a couple of sides and it adds up the whole meal, then builds a shopping ' +
        'list sorted the way you walk through the store. <strong>Build me a menu</strong> does ' +
        'the whole thing in one press.</p>' +

      '<h2>Put it on your home screen</h2>' +
      '<p><strong>iPhone:</strong> open it in Safari, tap the share button, then ' +
        '<em>Add to Home Screen</em>.<br>' +
        '<strong>Android:</strong> open it in Chrome, tap the three dots, then ' +
        '<em>Add to Home screen</em>.<br>' +
        'It will sit there like an app.</p>' +

      '<h2>The nutrition numbers</h2>' +
      '<p>Estimates for one serving, there to give a rough sense of balance. Is there enough ' +
        'protein, is there fiber, is this a heavy night or a light one. They are not ' +
        'lab-measured and they are not medical advice.</p>' +

      '<h2>Where do saved recipes live?</h2>' +
      '<p>In the browser, on the device you saved them from. There is no account and no ' +
        'server, and nothing is uploaded anywhere. That keeps it simple and private, but ' +
        'it does mean the phone and the computer each keep their own list.</p>' +

      '<h2>Getting them onto another device</h2>' +
      '<p>At the bottom of <strong>Saved</strong> there is a link that carries your saved ' +
        'recipes and your Sunday plan inside it. Press <strong>Copy link</strong>, text or ' +
        'email it to yourself, then open it on the other phone or computer. It asks before ' +
        'it changes anything.</p>' +
      '<p>Keep that message and it doubles as a backup. If the browser ever forgets ' +
        'everything, open the link again and it all comes back.</p>' +
      '</div></div>';

    setView(html, 'help');
  }

  function viewNotFound() {
    setView('<div class="wrap section"><div class="empty-state">' +
      '<h1>We could not find that one</h1>' +
      '<p>It may have been renamed. Try the recipe box instead.</p>' +
      '<p style="margin-top:18px"><a class="btn btn-primary" href="#/browse">Browse all recipes</a></p>' +
      '</div></div>', 'notfound');
  }

  /* -------------------------------------------------------------- events -- */

  document.addEventListener('click', function (e) {
    var favBtn = e.target.closest('[data-fav]');
    if (favBtn) {
      e.preventDefault();
      var id = favBtn.getAttribute('data-fav');
      var added = Store.toggleFavorite(id);
      var r = DB.byId(id);
      U.toast(added ? '♥ Saved to your list' : 'Removed from saved');
      syncFavButtons(id, added);
      if (currentView === 'favorites') viewFavorites();
      return;
    }

    var btn = e.target.closest('[data-act]');
    if (!btn) return;
    var act = btn.getAttribute('data-act');
    var value = btn.getAttribute('data-value');

    switch (act) {
      case 'reroll':
        reroll();
        break;

      case 'pickProtein':
        if (!value) pickerState.filters.proteins = [];
        else {
          var ps = pickerState.filters.proteins || [];
          pickerState.filters.proteins = (ps.length === 1 && ps[0] === value) ? [] : [value];
        }
        reroll();
        break;

      case 'pickTime':
        pickerState.filters.maxTime = pickerState.filters.maxTime === 45 ? 0 : 45;
        reroll();
        break;

      case 'pickEasy':
        pickerState.filters.difficulty =
          (pickerState.filters.difficulty && pickerState.filters.difficulty.length) ? [] : ['Easy'];
        reroll();
        break;

      case 'pickNow':
        pickerState.filters.noAhead = !pickerState.filters.noAhead;
        reroll();
        break;

      case 'clearPickFilters':
        pickerState.filters = {};
        reroll();
        break;

      case 'fProtein': toggleListParam('p', value); break;
      case 'fTag':     toggleListParam('tag', value); break;
      case 'fEasy':    toggleListParam('d', value); break;
      case 'fNow': {
        var rn = parseHash();
        if (rn.params.now) delete rn.params.now; else rn.params.now = '1';
        location.hash = buildHash('/browse', rn.params);
        break;
      }
      case 'fTime': {
        var r0 = parseHash();
        if (!value || r0.params.t === value) delete r0.params.t;
        else r0.params.t = value;
        location.hash = buildHash('/browse', r0.params);
        break;
      }
      case 'fType': {
        var r1 = parseHash();
        if (value === 'main') delete r1.params.type;
        else r1.params.type = value;
        location.hash = buildHash('/browse', r1.params);
        break;
      }
      case 'clearQ': {
        var inp = document.getElementById('q');
        if (inp) inp.value = '';
        setParam('q', '');
        if (inp) inp.focus();
        break;
      }
      case 'clearAll':
        location.hash = '#/browse';
        break;

      case 'toggleFilters': {
        filtersOpen = !filtersOpen;
        var rows = document.getElementById('filterRows');
        if (rows) rows.classList.toggle('open', filtersOpen);
        btn.setAttribute('aria-expanded', filtersOpen ? 'true' : 'false');
        break;
      }

      case 'serv': {
        var rid = currentView.split(':')[1];
        var rec = DB.byId(rid);
        if (!rec) break;
        var cur = Store.getServings(rid, rec.servings);
        var next = Math.min(24, Math.max(1, cur + parseInt(value, 10)));
        Store.setServings(rid, next);
        refreshServings(rec, next);
        break;
      }
      case 'servReset': {
        var rid2 = currentView.split(':')[1];
        var rec2 = DB.byId(rid2);
        if (!rec2) break;
        Store.setServings(rid2, rec2.servings);
        viewRecipe(rid2);
        break;
      }
      case 'resetChecks':
        Store.clearChecked(btn.getAttribute('data-id'));
        viewRecipe(btn.getAttribute('data-id'));
        U.toast('Check marks cleared');
        break;

      case 'print':
        window.print();
        break;

      case 'planThis':
        addToPlan(btn.getAttribute('data-id'));
        updateNavCounts();
        break;

      case 'unplan':
        Store.setPlanSlot(btn.getAttribute('data-slot'), null);
        viewPlan();
        break;

      case 'clearPlan':
        Store.clearPlan();
        viewPlan();
        U.toast('Plan cleared');
        break;

      case 'surpriseMenu':
        surpriseMenu();
        break;

      case 'wake':
        if (window.Kitchen) Kitchen.toggleWake();
        break;

      case 'timerStart': {
        e.preventDefault();
        e.stopPropagation();
        if (!window.Kitchen) break;
        var secs = parseInt(btn.getAttribute('data-secs'), 10);
        Kitchen.start(secs, btn.getAttribute('data-label') || 'Timer');
        break;
      }

      case 'timerPause':
        if (window.Kitchen) Kitchen.togglePause(parseInt(btn.getAttribute('data-id'), 10));
        break;

      case 'timerCancel':
        if (window.Kitchen) Kitchen.cancel(parseInt(btn.getAttribute('data-id'), 10));
        break;

      case 'copyLink': {
        var input = document.getElementById('xferLink');
        if (!input) break;
        Promise.resolve(U.copy(input.value, input)).then(function (ok) {
          U.toast(ok ? 'Link copied. Send it to yourself.' : 'Press and hold the link to copy it.');
        });
        break;
      }

      case 'doImport': {
        var data = U.unpack(btn.getAttribute('data-d'));
        var res = Store.importState(data, btn.getAttribute('data-mode'), function (id) {
          return !!DB.byId(id);
        });
        if (!res) { U.toast('That link did not work'); break; }
        var bits = [];
        if (res.added) bits.push(res.added + ' recipe' + (res.added === 1 ? '' : 's') + ' saved');
        if (res.already) bits.push(res.already + ' already here');
        if (res.planned) bits.push('plan restored');
        U.toast(bits.length ? bits.join(', ') : 'Nothing new to bring over');
        updateNavCounts();
        location.hash = '#/favorites';
        break;
      }

      case 'resetShop':
        Store.resetShop();
        viewPlan();
        break;
    }
  });

  // Ingredient + step + shopping checkboxes
  document.addEventListener('change', function (e) {
    var t = e.target;

    if (t.hasAttribute && t.hasAttribute('data-ing')) {
      var rid = currentView.split(':')[1];
      Store.toggleChecked(rid, 'ing', parseInt(t.getAttribute('data-ing'), 10));
    }
    if (t.hasAttribute && t.hasAttribute('data-shop')) {
      Store.toggleShop(t.getAttribute('data-shop'));
    }
  });

  // Tapping a step crosses it off. The timer chips sit inside the step text,
  // so a tap on one must not also tick the step off.
  document.addEventListener('click', function (e) {
    if (e.target.closest('.timer-chip')) return;
    var step = e.target.closest('[data-step]');
    if (!step || currentView.indexOf('recipe:') !== 0) return;
    toggleStep(step);
  });

  function toggleStep(step) {
    var rid = currentView.split(':')[1];
    var i = parseInt(step.getAttribute('data-step'), 10);
    var on = Store.toggleChecked(rid, 'step', i);
    var li = step.closest('li');
    li.classList.toggle('done', on);
    var tick = li.querySelector('.step-tick');
    if (tick) tick.setAttribute('aria-pressed', on ? 'true' : 'false');
  }

  function refreshServings(recipe, servings) {
    var host = document.getElementById('ingHost');
    var count = document.getElementById('servCount');
    if (count) count.textContent = servings;
    if (host) host.innerHTML = R.ingredients(recipe, servings / recipe.servings);
    var stat = document.querySelectorAll('.stat b')[2];
    if (stat) stat.textContent = servings;
  }

  function syncFavButtons(id, isFav) {
    var nodes = document.querySelectorAll('[data-fav="' + id + '"]');
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].setAttribute('aria-pressed', isFav ? 'true' : 'false');
      if (nodes[i].classList.contains('fav-btn')) {
        nodes[i].textContent = isFav ? '♥' : '♡';
      } else {
        nodes[i].textContent = isFav ? '♥ Saved' : '♡ Save this';
      }
    }
    updateNavCounts();
  }

  function updateNavCounts() {
    var el = document.getElementById('favCount');
    if (!el) return;
    var n = Store.favorites().length;
    el.textContent = n;
    el.hidden = n === 0;
  }

  /* ----------------------------------------------------------- nav menu -- */

  var navToggle = document.getElementById('navToggle');
  var primaryNav = document.getElementById('primaryNav');

  navToggle.addEventListener('click', function () {
    var open = primaryNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  function closeNav() {
    primaryNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  /* -------------------------------------------------------------- start -- */

  window.addEventListener('hashchange', route);

  var tally = document.getElementById('recipeTally');
  if (tally) {
    tally.textContent = DB.mainCount() + ' dinners and ' + DB.sideCount() + ' sides & sweets';
  }

  if (DB.problems().length && window.console) {
    console.warn('Recipe data problems:', DB.problems());
  }

  updateNavCounts();
  route();
  document.body.classList.add('ready');

  /* --------------------------------------------------------- offline -- */

  // Caching the whole site means it still works on bad kitchen wifi, and
  // opens instantly from the home screen.
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {
        // no offline support, everything else carries on working
      });
    });

    // When a new version takes over, reload once so the page and its cached
    // assets are from the same build.
    var reloading = false;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (reloading) return;
      reloading = true;
      location.reload();
    });
  }
})();
