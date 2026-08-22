/* QA validator for the Sunday Dinner recipe data + core logic.
   Run with: node validate.js <projectRoot> */
const fs = require('fs');
const path = require('path');

// defaults to the repo root, so `node scripts/validate.js` works from anywhere
const ROOT = process.argv[2] || path.join(__dirname, '..');

// --- fake browser globals so the site's own files can be required as-is
global.window = {};
global.document = {
  getElementById: () => null,
  createElement: () => ({ setAttribute() {}, set innerHTML(v) {}, get innerHTML() { return ''; }, querySelectorAll: () => [] }),
  querySelectorAll: () => [],
  addEventListener: () => {}
};
global.setTimeout = setTimeout;
global.clearTimeout = clearTimeout;

const DATA_FILES = [
  'recipes-chicken', 'recipes-beef-pork', 'recipes-seafood', 'recipes-vegetarian',
  'recipes-pasta-grains', 'recipes-soups-stews', 'recipes-sheet-pan',
  'recipes-slow-cooker', 'recipes-global', 'recipes-sides'
];

const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

// --- load data
for (const f of DATA_FILES) {
  const p = path.join(ROOT, 'data', f + '.js');
  if (!fs.existsSync(p)) { err(`MISSING FILE: data/${f}.js`); continue; }
  try {
    new Function('window', fs.readFileSync(p, 'utf8'))(global.window);
  } catch (e) {
    err(`PARSE ERROR in data/${f}.js: ${e.message}`);
  }
}

// --- load the app's own modules
for (const f of ['util', 'store', 'data', 'render']) {
  const p = path.join(ROOT, 'js', f + '.js');
  try {
    new Function('window', 'document', fs.readFileSync(p, 'utf8'))(global.window, global.document);
  } catch (e) {
    err(`PARSE ERROR in js/${f}.js: ${e.message}`);
  }
}

const R = global.window.RECIPES || [];
const DB = global.window.DB;
const U = global.window.U;

console.log(`\n=== LOADED ===`);
console.log(`recipes parsed: ${R.length}`);
if (DB) console.log(`mains: ${DB.mainCount()}  sides: ${DB.sideCount()}  index problems: ${JSON.stringify(DB.problems())}`);

// --- vocabularies that the UI depends on
const PROTEINS = ['Chicken','Beef','Pork','Turkey','Lamb','Fish','Shrimp','Eggs','Vegetarian'];
const DIFFICULTY = ['Easy','Medium','Ambitious'];
const SIDE_TYPES = ['veg','starch','salad','bread','dessert','starter'];
const SEASONS = ['all','spring','summer','fall','winter'];
// tags offered as filter buttons on the browse page (js/app.js TAGS)
const BROWSE_TAGS = ['one-pan','sheet-pan','slow-cooker','comfort','veggie-forward','kid-friendly',
  'make-ahead','high-protein','gluten-free','dairy-free','low-carb','budget','leftovers',
  'freezer-friendly','grill','special-occasion'];
// tags that have a human label in js/render.js TAG_LABELS
const LABELLED_TAGS = ['one-pan','sheet-pan','slow-cooker','make-ahead','freezer-friendly','30-minutes',
  'gluten-free','dairy-free','kid-friendly','leftovers','high-protein','veggie-forward','budget',
  'special-occasion','no-cook','low-carb','comfort','grill','dessert'];

const PROTEIN_FLOOR = 25;   // grams per serving, every main must clear this

const ids = new Set();
const tagUse = {};

for (const r of R) {
  const at = (m) => `[${r.id || '??'}] ${m}`;

  // identity
  if (!r.id) { err(at('missing id')); continue; }
  if (ids.has(r.id)) err(at('DUPLICATE id'));
  ids.add(r.id);
  if (!/^[a-z0-9-]+$/.test(r.id)) err(at('id is not kebab-case'));

  // required text
  for (const f of ['title', 'blurb', 'emoji', 'protein', 'cuisine']) {
    if (!r[f]) err(at(`missing ${f}`));
  }
  if (r.title && r.title.length > 70) warn(at(`long title (${r.title.length} chars)`));
  if (r.blurb && r.blurb.length > 165) warn(at(`long blurb (${r.blurb.length} chars)`));

  // enums
  if (!PROTEINS.includes(r.protein)) err(at(`protein "${r.protein}" is not filterable`));
  if (!DIFFICULTY.includes(r.difficulty)) err(at(`difficulty "${r.difficulty}" unknown`));

  // times & servings
  if (!(r.totalTime > 0)) err(at('totalTime missing or zero'));
  if (!(r.activeTime > 0)) err(at('activeTime missing or zero'));
  if (r.activeTime > r.totalTime) err(at(`activeTime ${r.activeTime} > totalTime ${r.totalTime}`));
  if (!(r.servings > 0)) err(at('servings missing'));

  // the "30-minutes" tag must not lie
  if ((r.tags || []).includes('30-minutes') && r.totalTime > 35) {
    err(at(`tagged 30-minutes but totalTime is ${r.totalTime}`));
  }

  // type / sideType
  if (!['main', 'side'].includes(r.type || 'main')) err(at(`bad type "${r.type}"`));
  if (r.type === 'side') {
    if (!SIDE_TYPES.includes(r.sideType)) err(at(`side has bad sideType "${r.sideType}"`));
    if (r.sideType === 'dessert' && !(r.tags || []).includes('dessert')) {
      err(at('dessert is not tagged "dessert" so the plan page cannot link to it'));
    }
    if (r.pairsWith) {
      for (const p of r.pairsWith) if (!PROTEINS.includes(p)) err(at(`pairsWith has unknown protein "${p}"`));
    }
  } else {
    // Will's rule: a dinner has to come with a real protein, not just carbs.
    if (!r.plate || !r.plate.protein) err(at('main has no plate.protein'));
    if ((r.nutrition || {}).protein < PROTEIN_FLOOR) {
      err(at(`main has only ${(r.nutrition || {}).protein}g protein (floor is ${PROTEIN_FLOOR}g)`));
    }
  }

  // tags
  for (const t of (r.tags || [])) {
    tagUse[t] = (tagUse[t] || 0) + 1;
    if (!LABELLED_TAGS.includes(t) && t !== 'dessert') warn(at(`tag "${t}" has no label in render.js`));
  }

  // seasons
  for (const s of (r.seasons || [])) if (!SEASONS.includes(s)) err(at(`unknown season "${s}"`));

  // nutrition
  const n = r.nutrition || {};
  if (!n.calories) { err(at('no nutrition.calories')); }
  else {
    const fromMacros = (n.protein || 0) * 4 + (n.carbs || 0) * 4 + (n.fat || 0) * 9;
    const drift = Math.abs(fromMacros - n.calories) / n.calories;
    if (drift > 0.28) {
      warn(at(`macros imply ${Math.round(fromMacros)} cal but calories says ${n.calories} (${Math.round(drift * 100)}% off)`));
    }
    if (n.calories > 900) warn(at(`very high calories: ${n.calories}`));
    if (r.type === 'main' && n.calories < 200) warn(at(`very low calories for a main: ${n.calories}`));
  }

  // ingredients
  if (!r.ingredients || !r.ingredients.length) err(at('no ingredients'));
  else {
    let count = 0;
    for (const g of r.ingredients) {
      if (!g.items || !g.items.length) err(at('ingredient group with no items'));
      for (const line of (g.items || [])) {
        count++;
        if (typeof line !== 'string' || !line.trim()) err(at('empty ingredient line'));
        // unicode fractions in source data break the ASCII scaler
        if (/[½¼¾⅓⅔⅛⅜⅝⅞]/.test(line)) err(at(`ingredient uses a unicode fraction: "${line}"`));
        // quantity must survive a round trip through the scaler
        const scaled = U.scaleIngredient(line, 2);
        if (/^\d/.test(line) && !scaled.qty) err(at(`quantity not parsed: "${line}"`));
        if (scaled.qty && /NaN|undefined/.test(scaled.qty)) err(at(`bad scale of "${line}" -> "${scaled.qty}"`));
      }
    }
    if (count < 3) warn(at(`only ${count} ingredients`));
  }

  // house style: no em dashes, and no " - " standing in for one
  const copy = [r.blurb, r.makeAhead || ''].concat(r.steps || [], r.tips || []).join(' ');
  if (/—/.test(copy)) err(at('copy contains an em dash'));
  if (/ - /.test(copy)) err(at('copy uses " - " as a dash'));
  if ('karolina' in r) err(at('still has the karolina flag'));

  // prose hygiene: sentences start capitalised, no doubled punctuation or spaces
  for (const line of [r.blurb, r.makeAhead].concat(r.steps || [], r.tips || [])) {
    if (!line) continue;
    if (/^[a-z]/.test(line)) err(at(`sentence starts lowercase: "${line.slice(0, 50)}"`));
    if (/  /.test(line)) err(at(`double space: "${line.slice(0, 50)}"`));
    if (/\.\s*\.|,,|\s,/.test(line)) err(at(`punctuation artifact: "${line.slice(0, 50)}"`));
  }

  // steps
  if (!r.steps || r.steps.length < 3) err(at(`only ${(r.steps || []).length} steps`));
  for (const s of (r.steps || [])) {
    if (typeof s !== 'string' || s.trim().length < 15) err(at(`suspiciously short step: "${s}"`));
  }

  // straight-quote hygiene: the data is rendered through esc(), curly quotes are fine,
  // but stray double quotes in JS strings would already have failed to parse.
}

// --- scaler round trip on a few known shapes
console.log(`\n=== SCALER SPOT CHECK ===`);
const checks = [
  ['1 (4 lb) whole chicken', 2],
  ['1 1/2 lb chicken thighs', 2],
  ['1/2 teaspoon black pepper', 0.5],
  ['2-3 cups broth', 2],
  ['4-6 tablespoons cold water', 0.5],
  ['Salt and pepper to taste', 2],
  ['1 (14.5 oz) can diced tomatoes', 3],
  ['1/4 teaspoon cayenne', 0.25],
  ['12 oz linguine', 0.5],
  ['1 tablespoon kosher salt', 1.5]
];
for (const [line, f] of checks) {
  const s = U.scaleIngredient(line, f);
  console.log(`  x${f}  "${line}"  ->  ${s.qty ? `[${s.qty}] ` : ''}${s.rest}`);
  if (/NaN|undefined/.test(s.qty + s.rest)) err(`SCALER produced NaN for "${line}"`);
}

// --- pairing: every main must be able to complete its plate
console.log(`\n=== PAIRING ===`);
let noPair = 0;
for (const m of DB.mains()) {
  const sides = DB.pairFor(m, U.hash(m.id));
  if (!sides.length) { noPair++; err(`[${m.id}] pairFor returned no sides`); }
  for (const s of sides) if (s.type !== 'side') err(`[${m.id}] paired with a non-side: ${s.id}`);
}
console.log(`  mains with no pairing: ${noPair}`);

// --- search sanity
console.log(`\n=== SEARCH ===`);
for (const q of ['chicken', 'salmon', 'potato', 'taco', 'vegetarian', 'quick', 'zzzznope']) {
  console.log(`  "${q}" -> ${DB.query({ q, type: 'all' }).length} results`);
}

// --- filter coverage: every browse filter button must return something
console.log(`\n=== FILTER COVERAGE ===`);
for (const p of PROTEINS) {
  const n = DB.query({ proteins: [p] }).length;
  console.log(`  protein ${p.padEnd(11)} -> ${n} mains`);
  if (n === 0) err(`protein filter "${p}" returns nothing`);
}
for (const t of BROWSE_TAGS) {
  const n = DB.query({ tags: [t] }).length;
  if (n === 0) err(`browse tag filter "${t}" returns no mains`);
}
for (const t of [30, 45, 60]) {
  const n = DB.query({ maxTime: t }).length;
  console.log(`  <= ${t} min -> ${n} mains`);
  if (n === 0) err(`time filter ${t} returns nothing`);
}
const desserts = DB.query({ type: 'side', tags: ['dessert'] });
console.log(`  desserts -> ${desserts.length}`);
if (!desserts.length) err('plan page dessert link returns nothing');

// tags in the data that are not offered as a filter (informational)
const unfiltered = Object.keys(tagUse).filter(t => !BROWSE_TAGS.includes(t));
console.log(`\n  tags used but not on the filter bar: ${unfiltered.join(', ')}`);

// --- home page section queries must not be empty
console.log(`\n=== HOME SECTIONS ===`);
const sections = {
  'quick (<=40m)': DB.query({ maxTime: 40 }).length,
  'comfort': DB.query({ tags: ['comfort'] }).length,
  'veggie-forward': DB.query({ tags: ['veggie-forward'] }).length,
  'most protein': DB.query({ sort: 'protein' }).length
};
for (const [k, v] of Object.entries(sections)) {
  console.log(`  ${k.padEnd(16)} -> ${v}`);
  if (v < 4) err(`home section "${k}" has only ${v} recipes (needs 4)`);
}

// --- shopping list aisles
console.log(`\n=== SHOPPING LIST ===`);
const sample = DB.shoppingList([DB.mains()[0].id, DB.sides()[0].id]);
let other = 0, total = 0;
for (const m of DB.mains().slice(0, 40)) {
  for (const g of DB.shoppingList([m.id])) {
    total += g.items.length;
    if (g.aisle === 'Other') other += g.items.length;
  }
}
console.log(`  sample groups: ${sample.map(g => g.aisle).join(', ')}`);
console.log(`  uncategorised across 40 mains: ${other}/${total} (${Math.round(other / total * 100)}%)`);
if (other / total > 0.25) warn(`${Math.round(other / total * 100)}% of shopping lines land in "Other"`);

// --- distribution report
console.log(`\n=== DISTRIBUTION ===`);
const byProtein = {}, byDiff = {}, byCuisine = {};
for (const r of R) {
  byProtein[r.protein] = (byProtein[r.protein] || 0) + 1;
  byDiff[r.difficulty] = (byDiff[r.difficulty] || 0) + 1;
  byCuisine[r.cuisine] = (byCuisine[r.cuisine] || 0) + 1;
}
console.log('  protein:', byProtein);
console.log('  effort :', byDiff);
console.log('  cuisines:', Object.keys(byCuisine).length);
console.log(`  protein floor: ${PROTEIN_FLOOR}g | lowest main: ${Math.min(...DB.mains().map(r => r.nutrition.protein))}g`);
console.log(`  avg steps: ${(R.reduce((a, r) => a + r.steps.length, 0) / R.length).toFixed(1)}`);
console.log(`  avg ingredients: ${(R.reduce((a, r) => a + r._flat.length, 0) / R.length).toFixed(1)}`);

// --- results
console.log(`\n=== RESULT ===`);
console.log(`errors:   ${errors.length}`);
errors.slice(0, 60).forEach(e => console.log('  ERR  ' + e));
if (errors.length > 60) console.log(`  ... and ${errors.length - 60} more`);
console.log(`warnings: ${warnings.length}`);
warnings.slice(0, 40).forEach(w => console.log('  warn ' + w));
if (warnings.length > 40) console.log(`  ... and ${warnings.length - 40} more`);

process.exit(errors.length ? 1 : 0);
