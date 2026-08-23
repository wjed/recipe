/* ==========================================================================
   data.js - the recipe index: normalising, searching, filtering, pairing.
   Reads the global RECIPES array that the data/*.js files push into.
   ========================================================================== */
(function () {
  'use strict';

  var raw = window.RECIPES || [];
  var all = [];
  var byId = Object.create(null);
  var problems = [];

  /* ----------------------------------------------------- normalisation --- */

  for (var i = 0; i < raw.length; i++) {
    var r = raw[i];
    if (!r || !r.id) { problems.push('recipe #' + i + ' has no id'); continue; }
    if (byId[r.id]) { problems.push('duplicate id: ' + r.id); continue; }

    r.type = r.type || 'main';
    r.tags = r.tags || [];
    r.tips = r.tips || [];
    r.seasons = r.seasons || ['all'];
    r.servings = r.servings || 4;
    r.activeTime = r.activeTime || r.totalTime;
    r.difficulty = r.difficulty || 'Easy';
    r.plate = r.plate || {};
    r.nutrition = r.nutrition || {};

    // A flat ingredient list is easier for search and shopping lists.
    r._flat = [];
    for (var g = 0; g < (r.ingredients || []).length; g++) {
      var grp = r.ingredients[g];
      for (var k = 0; k < grp.items.length; k++) r._flat.push(grp.items[k]);
    }

    // Pre-computed lowercase haystack, so searching stays fast while typing.
    r._hay = [
      r.title, r.blurb, r.protein, r.cuisine,
      r.tags.join(' '),
      (r.plate.protein || '') + ' ' + (r.plate.starch || '') + ' ' + (r.plate.veg || ''),
      r._flat.join(' ')
    ].join(' ').toLowerCase();

    r._titleLower = r.title.toLowerCase();
    // no spaces or hyphens, so "stirfry" still finds "stir-fry"
    r._squashed = r._hay.replace(/[\s-]/g, '');

    all.push(r);
    byId[r.id] = r;
  }

  var mains = all.filter(function (r) { return r.type === 'main'; });
  var sides = all.filter(function (r) { return r.type === 'side'; });

  /* ------------------------------------------------------------ search --- */

  /* ------------------------------------------------- typo forgiveness --- */

  // Every word that appears in a title, protein, cuisine or tag. Used to map a
  // misspelling back onto something real, because this gets typed on a phone.
  var vocab = null;
  function buildVocab() {
    var set = Object.create(null);
    for (var i = 0; i < all.length; i++) {
      var r = all[i];
      var words = (r.title + ' ' + r.protein + ' ' + r.cuisine + ' ' + r.tags.join(' '))
        .toLowerCase().split(/[^a-z]+/);
      for (var w = 0; w < words.length; w++) {
        if (words[w].length > 2) set[words[w]] = 1;
      }
    }
    vocab = Object.keys(set);
  }

  // Bounded Damerau-Levenshtein: bails as soon as the distance exceeds max.
  // Swapping two neighbouring letters counts as one edit, not two, because
  // "chikcen" is a far more common slip than any single wrong letter.
  function within(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return false;
    var prev2 = [], prev = [], cur = [], i, j;
    for (j = 0; j <= b.length; j++) prev[j] = j;
    for (i = 1; i <= a.length; i++) {
      cur = [i];
      var best = cur[0];
      for (j = 1; j <= b.length; j++) {
        cur[j] = Math.min(
          prev[j] + 1,
          cur[j - 1] + 1,
          prev[j - 1] + (a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1)
        );
        if (i > 1 && j > 1 &&
            a.charAt(i - 1) === b.charAt(j - 2) &&
            a.charAt(i - 2) === b.charAt(j - 1)) {
          cur[j] = Math.min(cur[j], prev2[j - 2] + 1);
        }
        if (cur[j] < best) best = cur[j];
      }
      if (best > max) return false;
      prev2 = prev;
      prev = cur;
    }
    return prev[b.length] <= max;
  }

  // "brocolli" -> "broccoli". Short words get one edit, longer ones two.
  function nearestWord(term) {
    if (!vocab) buildVocab();
    var max = term.length <= 4 ? 1 : (term.length <= 7 ? 1 : 2);
    var best = null, bestD = max + 1;
    for (var i = 0; i < vocab.length; i++) {
      var v = vocab[i];
      if (Math.abs(v.length - term.length) > max) continue;
      if (v.charAt(0) !== term.charAt(0)) continue;   // first letter is rarely the typo
      for (var d = 1; d <= max; d++) {
        if (within(term, v, d)) { if (d < bestD) { bestD = d; best = v; } break; }
      }
    }
    return best;
  }

  // Corrects each term that matches nothing at all. Returns the terms actually
  // used plus any substitutions, so the page can say what it searched for.
  function resolveTerms(terms) {
    var used = [], fixes = [], dead = [];
    for (var t = 0; t < terms.length; t++) {
      var term = terms[t];
      var hits = false;
      for (var i = 0; i < all.length && !hits; i++) {
        if (all[i]._hay.indexOf(term) !== -1 || all[i]._squashed.indexOf(term) !== -1) hits = true;
      }
      if (hits) { used.push(term); continue; }
      var fixed = nearestWord(term);
      if (fixed) { used.push(fixed); fixes.push([term, fixed]); }
      else { used.push(term); dead.push(term); }
    }
    return { terms: used, fixes: fixes, dead: dead };
  }

  function score(recipe, terms) {
    var total = 0;
    for (var t = 0; t < terms.length; t++) {
      var term = terms[t];
      // _squashed drops spaces and hyphens, so "stirfry" finds "stir-fry"
      var inHay = recipe._hay.indexOf(term) !== -1;
      if (!inHay && recipe._squashed.indexOf(term.replace(/[\s-]/g, '')) === -1) return 0;
      if (recipe._titleLower.indexOf(term) !== -1) total += 10;
      else if ((recipe.protein || '').toLowerCase().indexOf(term) !== -1) total += 6;
      else if (recipe.tags.join(' ').toLowerCase().indexOf(term) !== -1) total += 4;
      else total += inHay ? 1 : 0.5;
    }
    return total;
  }

  var SORTS = {
    relevance: null, // handled specially
    quickest:  function (a, b) { return a.totalTime - b.totalTime; },
    easiest:   function (a, b) { return diffRank(a) - diffRank(b) || a.totalTime - b.totalTime; },
    protein:   function (a, b) { return (b.nutrition.protein || 0) - (a.nutrition.protein || 0); },
    lightest:  function (a, b) { return (a.nutrition.calories || 0) - (b.nutrition.calories || 0); },
    az:        function (a, b) { return a.title.localeCompare(b.title); }
  };

  function diffRank(r) {
    return r.difficulty === 'Easy' ? 0 : r.difficulty === 'Medium' ? 1 : 2;
  }

  var lastFixes = [];     // [[typed, used]] from the most recent query
  var lastIgnored = [];   // words dropped so the search could return something

  function collect(list, terms) {
    var out = [];
    for (var i = 0; i < list.length; i++) {
      var sc = score(list[i], terms);
      if (sc > 0) out.push({ r: list[i], s: sc });
    }
    return out;
  }

  function query(opts) {
    opts = opts || {};
    var list = opts.type === 'side' ? sides.slice()
             : opts.type === 'all'  ? all.slice()
             : mains.slice();

    // ---- filters
    if (opts.proteins && opts.proteins.length) {
      list = list.filter(function (r) { return opts.proteins.indexOf(r.protein) !== -1; });
    }
    if (opts.difficulty && opts.difficulty.length) {
      list = list.filter(function (r) { return opts.difficulty.indexOf(r.difficulty) !== -1; });
    }
    if (opts.maxTime) {
      list = list.filter(function (r) { return r.totalTime <= opts.maxTime; });
    }
    if (opts.tags && opts.tags.length) {
      list = list.filter(function (r) {
        for (var i = 0; i < opts.tags.length; i++) {
          if (r.tags.indexOf(opts.tags[i]) === -1) return false;
        }
        return true;
      });
    }
    if (opts.ids) {
      list = list.filter(function (r) { return opts.ids.indexOf(r.id) !== -1; });
    }
    // "cooking tonight": drop anything that needs marinating or chilling first
    if (opts.noAhead) {
      list = list.filter(function (r) { return !r.ahead; });
    }

    // ---- text
    var q = (opts.q || '').trim().toLowerCase();
    lastFixes = []; lastIgnored = [];
    if (q) {
      var resolved = resolveTerms(q.split(/\s+/).filter(Boolean));
      var terms = resolved.terms;
      lastFixes = resolved.fixes;

      var scored = collect(list, terms);

      // Every term has to match, which means one unrecognised word kills the
      // whole search. If that happens, drop the dead words and try again
      // rather than showing nothing.
      if (!scored.length && resolved.dead.length && resolved.dead.length < terms.length) {
        var kept = terms.filter(function (t) { return resolved.dead.indexOf(t) === -1; });
        scored = collect(list, kept);
        if (scored.length) lastIgnored = resolved.dead.slice();
      }
      scored.sort(function (a, b) { return b.s - a.s || a.r.title.localeCompare(b.r.title); });
      list = scored.map(function (x) { return x.r; });
      if (opts.sort && opts.sort !== 'relevance' && SORTS[opts.sort]) list.sort(SORTS[opts.sort]);
    } else {
      var sorter = SORTS[opts.sort] || SORTS.az;
      list.sort(sorter);
    }

    return list;
  }

  /* ----------------------------------------------------------- pairing --- */

  // A main "needs" a side when its own plate is missing a component.
  function needsOf(main) {
    var need = [];
    if (!main.plate.veg)    need.push('veg');
    if (!main.plate.starch) need.push('starch');
    return need;
  }

  function pairFor(main, seed) {
    var out = [];
    var need = needsOf(main);
    var used = Object.create(null);

    function take(kinds) {
      var pool = sides.filter(function (s) {
        return kinds.indexOf(s.sideType) !== -1 && !used[s.id] &&
               (!s.pairsWith || s.pairsWith.indexOf(main.protein) !== -1);
      });
      if (!pool.length) {
        pool = sides.filter(function (s) { return kinds.indexOf(s.sideType) !== -1 && !used[s.id]; });
      }
      if (!pool.length) return null;
      var idx = (typeof seed === 'number')
        ? (window.U.hash(main.id + ':' + kinds.join('') + ':' + seed) % pool.length)
        : Math.floor(Math.random() * pool.length);
      var chosen = pool[idx];
      used[chosen.id] = true;
      return chosen;
    }

    for (var i = 0; i < need.length && out.length < 2; i++) {
      var s = take(need[i] === 'veg' ? ['veg', 'salad'] : ['starch']);
      if (s) out.push(s);
    }
    // A main that is already a full plate still deserves one easy extra, and a
    // salad sits better next to a finished dinner than a second hot vegetable.
    if (!out.length) {
      var extra = take(['salad']) || take(['bread', 'veg']);
      if (extra) out.push(extra);
    }
    return out;
  }

  /* -------------------------------------------------------- suggestion --- */

  function currentSeason() {
    var m = new Date().getMonth();            // 0 = January
    if (m <= 1 || m === 11) return 'winter';
    if (m <= 4) return 'spring';
    if (m <= 7) return 'summer';
    return 'fall';
  }

  function suggest(filters) {
    var pool = query(filters || {});
    if (!pool.length) return null;

    var recent = window.Store ? window.Store.history() : [];
    var fresh = pool.filter(function (r) { return recent.indexOf(r.id) === -1; });
    var from = fresh.length ? fresh : pool;

    // Lean towards things that suit the time of year, without ruling anything
    // out. Stew in August is allowed, just less likely.
    var season = currentSeason();
    var inSeason = from.filter(function (r) {
      return r.seasons.indexOf(season) !== -1 || r.seasons.indexOf('all') !== -1;
    });
    if (inSeason.length >= 8 && Math.random() < 0.75) from = inSeason;

    return from[Math.floor(Math.random() * from.length)];
  }

  /* ----------------------------------------------------------- related --- */

  function related(recipe, limit) {
    limit = limit || 4;
    var scored = all
      .filter(function (r) { return r.id !== recipe.id && r.type === recipe.type; })
      .map(function (r) {
        var s = 0;
        if (r.protein === recipe.protein) s += 5;
        if (r.cuisine === recipe.cuisine) s += 3;
        for (var i = 0; i < recipe.tags.length; i++) {
          if (r.tags.indexOf(recipe.tags[i]) !== -1) s += 2;
        }
        if (Math.abs(r.totalTime - recipe.totalTime) <= 15) s += 1;
        return { r: r, s: s };
      })
      .filter(function (x) { return x.s > 0; });

    scored.sort(function (a, b) { return b.s - a.s || a.r.title.localeCompare(b.r.title); });
    return scored.slice(0, limit).map(function (x) { return x.r; });
  }

  /* ------------------------------------------------------------ facets --- */

  function facets() {
    var proteins = Object.create(null), tags = Object.create(null);
    for (var i = 0; i < mains.length; i++) {
      proteins[mains[i].protein] = (proteins[mains[i].protein] || 0) + 1;
      for (var t = 0; t < mains[i].tags.length; t++) {
        tags[mains[i].tags[t]] = (tags[mains[i].tags[t]] || 0) + 1;
      }
    }
    return { proteins: proteins, tags: tags };
  }

  /* ----------------------------------------------------- shopping list --- */

  // Ordered rules - the first match wins, so the narrow "this would otherwise
  // land in the wrong aisle" cases have to come before the broad ones.
  // (Chicken broth is not meat; apple cider vinegar is not produce.)
  var AISLES = [
    ['Pantry', /\b(broth|stock|bouillon|apple cider vinegar|rice vinegar|wine vinegar|balsamic|peanut butter|almond butter|coconut milk|tomato paste|tomato sauce|marinara|enchilada sauce|salsa|barbecue sauce|hot sauce|soy sauce|fish sauce|oyster sauce|worcestershire|breadcrumbs?|panko|egg noodles|adobo|anchovy|anchovies|hummus|tzatziki|pico de gallo|coleslaw|tartar sauce|horseradish|jam|preserves|beer)\b/i],
    ['Pantry', /\b(cans?|canned|jarred)\b/i],
    ['Produce', /\b(lettuce|romaine)\b/i],
    ['Frozen', /\b(frozen|ice cream)\b/i],

    ['Spices & Baking', /\b(kosher salt|flaky salt|sea salt|table salt|black pepper|white pepper|peppercorns?|red pepper flakes|cayenne|paprika|cumin|ground coriander|chili powder|cinnamon|nutmeg|allspice|cardamom|ground cloves|caraway|celery seed|turmeric|curry powder|garam masala|berbere|harissa|cajun seasoning|old bay|sumac|saffron|italian seasoning|bay lea(?:f|ves)|guajillo|ancho|dried chiles?|garlic powder|onion powder|mustard powder|baking powder|baking soda|vanilla|yeast|cocoa|dried (?:oregano|thyme|basil|dill|sage|rosemary|marjoram|mint))\b/i],
    ['Spices & Baking', /\b(salt|seasoning|extract)\b/i],

    ['Bakery', /\b(bread(?!crumb)|rolls?|buns?|tortillas?|pita|pitas|naan|baguette|ciabatta|biscuits?|english muffin|pie crust)\b/i],

    ['Meat & Seafood', /\b(chicken|beef|pork|steaks?|ground (?:beef|pork|turkey|lamb|chicken)|turkey|lamb|bacon|sausages?|kielbasa|andouille|chorizo|prosciutto|pancetta|ham|salmon|shrimp|cod|tilapia|halibut|tuna|scallops?|clams?|fish|mahi|chops?|tenderloin|brisket|short ribs?|ribeye|sirloin|flank|skirt|roast|thighs?|breasts?|drumsticks?|hock)\b/i],

    ['Dairy & Eggs', /\b(milk|buttermilk|butter|heavy cream|sour cream|half-and-half|cream cheese|creme fraiche|cream|yogurt|cheese|parmesan|pecorino|cheddar|mozzarella|gruyere|feta|ricotta|cotija|queso|halloumi|paneer|swiss|provolone|monterey jack|kefalotyri|eggs?|ghee)\b/i],

    ['Produce', /\b(onions?|garlic|shallots?|carrots?|celery|potato(?:es)?|tomato(?:es)?|lemons?|limes?|oranges?|apples?|pears?|broccoli|broccolini|cauliflower|spinach|kale|lettuce|romaine|escarole|arugula|cabbage|zucchini|squash|butternut|bell peppers?|peppers?|poblano|jalapenos?|chilies|chili|chile|mushrooms?|shiitake|cremini|green beans?|asparagus|brussels|sweet potato(?:es)?|cucumbers?|avocados?|cilantro|parsley|basil|thyme|rosemary|dill|mint|sage|oregano|chives|tofu|okra|scallions?|green onions?|leeks?|ginger|galangal|lemongrass|corn|peas|snap peas|edamame|beets?|radish|radishes|chard|bok choy|eggplants?|apricots?|berries|blueberries|bananas?|fennel|sprouts|salad|greens|herbs?|parsnips?|turnips?)\b/i],

    ['Pantry', /\b(oil|vinegar|flour|sugar|honey|maple|molasses|rice|pasta|spaghetti|linguine|penne|orzo|macaroni|lasagna|orecchiette|pappardelle|rigatoni|farfalle|fusilli|trofie|ditalini|vermicelli|tagliatelle|tonnarelli|shells|lo mein|noodles?|gnocchi|couscous|quinoa|barley|farro|polenta|grits|cornmeal|oats|lentils?|beans?|chickpeas?|hominy|mustard|mayonnaise|ketchup|relish|pickles?|olives?|capers|cornstarch|tahini|coconut|wine|sherry|mirin|sake|marsala|amaretto|frangelico|liqueur|rum|brandy|tamarind|gochujang|miso|curry paste|chocolate|chips|nuts|almonds?|walnuts?|pecans?|cashews?|peanuts?|pine nuts|hazelnuts?|pistachios?|pumpkin seeds|sesame|raisins?|cranberries|dates|graham|crackers|espresso|coffee)\b/i]
  ];

  function aisleFor(line) {
    for (var i = 0; i < AISLES.length; i++) {
      if (AISLES[i][1].test(line)) return AISLES[i][0];
    }
    return 'Other';
  }

  // Plain tap water is not a shopping list item. "sparkling water", "coconut
  // water" and the like still are, so only skip lines that END in water.
  function isTapWater(line) {
    return /water\s*$/i.test(line) && !/(sparkling|coconut|rose|tonic|soda)/i.test(line);
  }

  var UNIT = '(?:cups?|tablespoons?|teaspoons?|tbsp|tsp|lbs?|pounds?|oz|ounces?|cans?|' +
             'cloves?|sprigs?|stalks?|heads?|bunch(?:es)?|pints?|quarts?|slices?|' +
             'pieces?|blocks?|ears?|sticks?|packages?)';
  var AMOUNT_RE = new RegExp('^([\\d\\s/.-]+(?:\\([^)]*\\)\\s*)?(?:' + UNIT + '\\b)?)\\s*(.*)$', 'i');

  // "2 teaspoons kosher salt" -> { amount: "2 teaspoons", name: "kosher salt" }
  function splitAmount(line) {
    var m = AMOUNT_RE.exec(line);
    if (!m || !m[2]) return { amount: '', name: line };
    return { amount: m[1].trim(), name: m[2].trim() };
  }

  // Two recipes both wanting kosher salt should be one line on the list, not
  // two. Match on the ingredient minus its quantity.
  function shoppingKey(line) {
    return line.toLowerCase()
      .replace(/\([^)]*\)/g, ' ')
      .replace(/^[\d\s/.-]+/, '')
      .replace(/\b(cups?|tablespoons?|teaspoons?|tbsp|tsp|lbs?|pounds?|oz|ounces?|cans?|cloves?|sprigs?|stalks?|heads?|bunch(es)?|pints?|quarts?|slices?|pieces?|blocks?|ears?)\b/g, ' ')
      .replace(/[^a-z ]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // Collects every ingredient from the planned recipes, grouped by aisle.
  // One line per ingredient, with each recipe's amount listed under it, so
  // combining never hides the fact that they wanted different quantities.
  function shoppingList(recipeIds) {
    var groups = {}, order = [], seen = {};
    for (var i = 0; i < recipeIds.length; i++) {
      var r = byId[recipeIds[i]];
      if (!r) continue;
      for (var j = 0; j < r._flat.length; j++) {
        var line = r._flat[j];
        if (isTapWater(line)) continue;

        var split = splitAmount(line);
        var key = shoppingKey(line);

        if (key && seen[key]) {
          seen[key].needs.push({ amount: split.amount, from: r.title });
          // once two recipes want it, lead with the bare ingredient so no
          // single recipe's amount reads like the total
          seen[key].line = split.name;
          continue;
        }

        var aisle = aisleFor(line);
        if (!groups[aisle]) { groups[aisle] = []; order.push(aisle); }
        var entry = { line: line, needs: [{ amount: split.amount, from: r.title }] };
        if (key) seen[key] = entry;
        groups[aisle].push(entry);
      }
    }
    var aisleOrder = ['Produce', 'Meat & Seafood', 'Dairy & Eggs', 'Bakery', 'Pantry', 'Spices & Baking', 'Frozen', 'Other'];
    order.sort(function (a, b) { return aisleOrder.indexOf(a) - aisleOrder.indexOf(b); });
    return order.map(function (name) { return { aisle: name, items: groups[name] }; });
  }

  /* --------------------------------------------------------------- api --- */

  window.DB = {
    all:      function () { return all.slice(); },
    mains:    function () { return mains.slice(); },
    sides:    function () { return sides.slice(); },
    byId:     function (id) { return byId[id] || null; },
    count:    function () { return all.length; },
    mainCount: function () { return mains.length; },
    sideCount: function () { return sides.length; },
    query: query,
    suggest: suggest,
    pairFor: pairFor,
    related: related,
    facets: facets,
    shoppingList: shoppingList,
    season: currentSeason,
    problems: function () { return problems.slice(); },
    lastCorrections: function () { return lastFixes.slice(); },
    lastIgnored: function () { return lastIgnored.slice(); }
  };
})();
