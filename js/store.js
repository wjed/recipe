/* ==========================================================================
   store.js - everything that needs to survive a page refresh.
   Uses localStorage, but degrades to an in-memory object if it is unavailable
   (private browsing, or some phones when opening a file:// page).
   ========================================================================== */
(function () {
  'use strict';

  var KEY = 'sundayDinner.v1';

  var DEFAULTS = {
    favorites: [],      // recipe ids
    plan: {             // this Sunday's menu
      main: null,
      side1: null,
      side2: null,
      dessert: null
    },
    checked: {},        // recipeId -> { ing: [indexes], step: [indexes] }
    servings: {},       // recipeId -> chosen serving count
    history: [],        // recently suggested ids, so "another idea" does not repeat
    shopChecked: []     // ticked-off shopping list lines
  };

  var memoryOnly = false;
  var state = load();

  function load() {
    try {
      var raw = window.localStorage.getItem(KEY);
      if (!raw) return clone(DEFAULTS);
      var parsed = JSON.parse(raw);
      var merged = clone(DEFAULTS);
      for (var k in parsed) if (merged.hasOwnProperty(k)) merged[k] = parsed[k];
      // guard against a half-written plan object from an older version
      if (!merged.plan || typeof merged.plan !== 'object') merged.plan = clone(DEFAULTS.plan);
      return merged;
    } catch (e) {
      memoryOnly = true;
      return clone(DEFAULTS);
    }
  }

  function save() {
    if (memoryOnly) return;
    try {
      window.localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      memoryOnly = true;
    }
  }

  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  var listeners = [];
  function emit() {
    for (var i = 0; i < listeners.length; i++) listeners[i]();
  }

  var Store = {
    onChange: function (fn) { listeners.push(fn); },

    /* ------------------------------------------------------- favorites --- */

    favorites: function () { return state.favorites.slice(); },

    isFavorite: function (id) { return state.favorites.indexOf(id) !== -1; },

    toggleFavorite: function (id) {
      var i = state.favorites.indexOf(id);
      if (i === -1) state.favorites.push(id);
      else state.favorites.splice(i, 1);
      save();
      emit();
      return i === -1;
    },

    /* ------------------------------------------------------------ plan --- */

    plan: function () { return state.plan; },

    setPlanSlot: function (slot, id) {
      if (!DEFAULTS.plan.hasOwnProperty(slot)) return;
      state.plan[slot] = id;
      state.shopChecked = [];
      save();
      emit();
    },

    clearPlan: function () {
      state.plan = clone(DEFAULTS.plan);
      state.shopChecked = [];
      save();
      emit();
    },

    planCount: function () {
      var n = 0;
      for (var k in state.plan) if (state.plan[k]) n++;
      return n;
    },

    /* --------------------------------------------------- checkbox state -- */

    getChecked: function (recipeId, kind) {
      var rec = state.checked[recipeId];
      return (rec && rec[kind]) ? rec[kind] : [];
    },

    toggleChecked: function (recipeId, kind, index) {
      if (!state.checked[recipeId]) state.checked[recipeId] = { ing: [], step: [] };
      var rec = state.checked[recipeId];
      if (!rec[kind]) rec[kind] = [];
      var i = rec[kind].indexOf(index);
      if (i === -1) rec[kind].push(index);
      else rec[kind].splice(i, 1);
      save();
      return i === -1;
    },

    clearChecked: function (recipeId) {
      delete state.checked[recipeId];
      save();
    },

    /* -------------------------------------------------------- servings --- */

    getServings: function (recipeId, fallback) {
      var v = state.servings[recipeId];
      return (typeof v === 'number' && v > 0) ? v : fallback;
    },

    setServings: function (recipeId, n) {
      state.servings[recipeId] = n;
      save();
    },

    /* --------------------------------------------------------- history --- */

    history: function () { return state.history.slice(); },

    remember: function (id) {
      state.history.unshift(id);
      state.history = state.history.slice(0, 12);
      save();
    },

    /* --------------------------------------------------- shopping list --- */

    shopChecked: function () { return state.shopChecked.slice(); },

    toggleShop: function (line) {
      var i = state.shopChecked.indexOf(line);
      if (i === -1) state.shopChecked.push(line);
      else state.shopChecked.splice(i, 1);
      save();
      return i === -1;
    },

    resetShop: function () { state.shopChecked = []; save(); emit(); },

    /* ------------------------------------------------------------ meta --- */

    isMemoryOnly: function () { return memoryOnly; }
  };

  window.Store = Store;
})();
