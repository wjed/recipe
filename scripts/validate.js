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
const DIFFICULTY = ['Easy','Medium'];   // nothing here should be a project
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

const PROTEIN_FLOOR = 30;   // grams per serving, every main must clear this
const MAX_STEPS = 9;        // keep it to something you can hold in your head
const MAX_INGREDIENTS = 24;
const MAX_ACTIVE = 45;      // minutes of actual hands-on work

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

  // Simple enough for a weeknight. Sarah wants to put something in a pan,
  // not manage three components or heat a pot of frying oil.
  if (r.steps && r.steps.length > MAX_STEPS) {
    err(at(`${r.steps.length} steps, limit is ${MAX_STEPS}`));
  }
  if (r._flat && r._flat.length > MAX_INGREDIENTS) {
    err(at(`${r._flat.length} ingredients, limit is ${MAX_INGREDIENTS}`));
  }
  if (r.activeTime > MAX_ACTIVE) {
    err(at(`${r.activeTime} min of hands-on work, limit is ${MAX_ACTIVE}`));
  }
  {
    const method = (r.steps || []).join(' ').toLowerCase();
    const fussy = [
      [/inches of oil|deep-fry|deep fry/, 'deep frying'],
      [/\broux\b/, 'making a roux'],
      [/soaked overnight|soak.{0,20}overnight/, 'overnight soaking'],
      [/food processor/, 'needing a food processor'],
      [/blind bake/, 'blind baking']
    ];
    for (const [re, label] of fussy) {
      if (re.test(method)) err(at(`involves ${label}, which is more than this box is for`));
    }
  }

  // A step that says "refrigerate at least 4 hours" makes the stated time a
  // lie unless the recipe also declares how far ahead you have to start.
  const REQUIRED_WAIT = /(?:at least|refrigerate|marinate|brine|soak|chill|cool completely in the pan,?)\s*(?:it\s*)?(\d+)\s*(hours?|hrs?)\b/gi;
  let needsAhead = 0;
  for (const step of (r.steps || [])) {
    REQUIRED_WAIT.lastIndex = 0;
    let m;
    while ((m = REQUIRED_WAIT.exec(step))) {
      const ctx = step.slice(Math.max(0, m.index - 24), m.index + 6).toLowerCase();
      if (/up to|ideally|or /.test(ctx)) continue;   // an optional upper bound
      needsAhead = Math.max(needsAhead, +m[1] * 60);
    }
  }
  if (needsAhead >= 60 && r.totalTime < needsAhead) {
    if (!r.ahead || !r.ahead.mins) {
      err(at(`steps require ${needsAhead} min of waiting but totalTime is ${r.totalTime} and there is no ahead:{}`));
    } else if (r.ahead.mins < needsAhead) {
      err(at(`ahead.mins is ${r.ahead.mins} but the steps require ${needsAhead}`));
    }
  }
  if (r.ahead && (!r.ahead.note || r.ahead.note.length < 12)) {
    err(at('ahead needs a note explaining what to start early'));
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
console.log(`  busiest recipe: ${Math.max(...R.map(r => r.steps.length))} steps, ` +
  `${Math.max(...R.map(r => r._flat.length))} ingredients, ` +
  `${Math.max(...R.map(r => r.activeTime))} min hands on`);
console.log(`  avg steps: ${(R.reduce((a, r) => a + r.steps.length, 0) / R.length).toFixed(1)}`);
console.log(`  avg ingredients: ${(R.reduce((a, r) => a + r._flat.length, 0) / R.length).toFixed(1)}`);

/* ------------------------------------------------------------- contrast --
   The colour tokens are checked here rather than in a browser, because the bug
   this guards against (dark text landing on a dark panel in dark mode) stays
   invisible until someone opens the page in the wrong theme. */

function hexToRgb(h) {
  h = h.trim().replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16) };
}
function relLum(c) {
  const a = [c.r, c.g, c.b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}
function contrast(fg, bg) {
  const L1 = relLum(hexToRgb(fg)), L2 = relLum(hexToRgb(bg));
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
}
function parseTokens(block) {
  const out = {};
  const re = /--([a-z0-9-]+):\s*(#[0-9a-fA-F]{3,8})\s*;/g;
  let m;
  while ((m = re.exec(block))) out[m[1]] = m[2];
  return out;
}

console.log(`
=== COLOUR CONTRAST ===`);
const cssSrc = fs.readFileSync(path.join(ROOT, 'css', 'style.css'), 'utf8');
const lightBlock = (cssSrc.match(/:root\s*\{([\s\S]*?)\}/) || [])[1] || '';
const darkBlock = (cssSrc.match(/:root:not\(\[data-theme="light"\]\)\s*\{([\s\S]*?)\}/) || [])[1] || '';
const themes = { light: parseTokens(lightBlock), dark: parseTokens(darkBlock) };

const utilSrc = fs.readFileSync(path.join(ROOT, 'js', 'util.js'), 'utf8');
const tints = [];
const tintRe = /(\w+):\s*\['(#[0-9a-f]{6})',\s*'(#[0-9a-f]{6})'\]/gi;
let tm;
while ((tm = tintRe.exec(utilSrc))) tints.push({ name: tm[1], light: tm[2], dark: tm[3] });

const PAIRS = [
  ['ink', 'paper', 4.5, 'body text'],
  ['ink', 'card', 4.5, 'text on cards'],
  ['ink', 'sunk', 4.5, 'text on sunken panels'],
  ['ink-2', 'card', 4.5, 'secondary text on cards'],
  ['ink-2', 'sunk', 4.5, 'secondary text on panels'],
  ['ink-2', 'paper', 4.5, 'secondary text on page'],
  ['ink-3', 'card', 4.5, 'quiet text on cards'],
  ['ink-3', 'sunk', 4.5, 'quiet text on panels'],
  ['ink-3', 'paper', 4.5, 'quiet text on page'],
  ['clay', 'card', 4.5, 'protein numbers'],
  ['clay', 'sunk', 4.5, 'protein numbers on panels'],
  ['clay', 'paper', 4.5, 'eyebrows'],
  ['accent', 'paper', 4.5, 'links'],
  ['accent', 'card', 4.5, 'links on cards'],
  ['accent-deep', 'card', 4.5, 'key chip text'],
  ['paper', 'accent', 4.5, 'primary button text'],
  ['paper', 'clay', 4.5, 'saved-count bubble'],
  ['berry', 'card', 3, 'saved heart']
];

let worst = { ratio: 99, label: '' };
for (const theme of ['light', 'dark']) {
  const t = themes[theme];
  for (const [fg, bg, min, where] of PAIRS) {
    if (!t[fg] || !t[bg]) { err(`contrast: ${theme} theme missing token --${!t[fg] ? fg : bg}`); continue; }
    const r = contrast(t[fg], t[bg]);
    if (r < worst.ratio) worst = { ratio: r, label: `${theme} ${fg}/${bg}` };
    if (r < min) err(`contrast: ${theme} ${where} (--${fg} on --${bg}) is ${r.toFixed(2)}:1, needs ${min}:1`);
  }
  // tinted panels carry normal --ink text, so both tint variants have to work
  for (const tint of tints) {
    const bg = theme === 'light' ? tint.light : tint.dark;
    const r = contrast(t['ink'], bg);
    if (r < worst.ratio) worst = { ratio: r, label: `${theme} ink on ${tint.name} tint` };
    if (r < 4.5) err(`contrast: ${theme} text on the ${tint.name} tint (${bg}) is ${r.toFixed(2)}:1, needs 4.5:1`);
  }
}
console.log(`  ${PAIRS.length * 2 + tints.length * 2} token pairs checked across both themes`);
console.log(`  tightest: ${worst.label} at ${worst.ratio.toFixed(2)}:1`);

/* ------------------------------------------------------------ parseable --
   validate.js only executes util/store/data/render, so a syntax error in
   app.js, kitchen.js or sw.js would ship silently. Parse every script that
   index.html actually loads. */

console.log(`\n=== SCRIPTS PARSE ===`);
{
  const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
  const srcs = [];
  const tag = /<script[^>]+src="([^"]+)"/g;
  let m;
  while ((m = tag.exec(html))) srcs.push(m[1].split("?")[0]);
  srcs.push("sw.js");

  let okCount = 0;
  for (const rel of srcs) {
    const f = path.join(ROOT, rel);
    if (!fs.existsSync(f)) { err(`index.html loads ${rel} but the file is missing`); continue; }
    try {
      new Function(fs.readFileSync(f, "utf8"));
      okCount++;
    } catch (e) {
      err(`${rel} does not parse: ${e.message}`);
    }
  }
  console.log(`  ${okCount}/${srcs.length} scripts parse`);

  // the service worker caches exact versioned URLs, so the numbers must agree
  const swSrc = fs.readFileSync(path.join(ROOT, "sw.js"), "utf8");
  const swVer = (swSrc.match(/var VERSION = (\d+)/) || [])[1];
  const pageVers = [...new Set((html.match(/\?v=(\d+)/g) || []).map(v => v.slice(3)))];
  if (pageVers.length !== 1) {
    err(`index.html mixes asset versions: ${pageVers.join(", ")}`);
  } else if (pageVers[0] !== swVer) {
    err(`index.html is on v${pageVers[0]} but sw.js VERSION is ${swVer}`);
  } else {
    console.log(`  assets and service worker both on v${swVer}`);
  }
}

/* --------------------------------------------------------- source hygiene --
   A backslash-b that survives one too many rounds of escaping becomes a real
   backspace character. The regex then silently never matches, and the rule it
   belongs to quietly passes. Catch that here rather than in production. */

console.log(`
=== SOURCE HYGIENE ===`);
{
  const roots = ['js', 'scripts', 'css', 'data'];
  const files = ['index.html', 'sw.js', 'manifest.webmanifest'].map(f => path.join(ROOT, f));
  for (const dir of roots) {
    const d = path.join(ROOT, dir);
    if (!fs.existsSync(d)) continue;
    for (const f of fs.readdirSync(d)) {
      if (/\.(js|css|json)$/.test(f)) files.push(path.join(d, f));
    }
  }
  // Compared by code point rather than by regex, so this check cannot
  // itself fall victim to the escaping problem it exists to catch.
  const ok = new Set([9, 10, 13]);            // tab, newline, carriage return
  const show = (str) => Array.from(str).map((c) => {
    const n = c.charCodeAt(0);
    if (n === 10 || n === 13) return " ";
    return n < 32 ? "<0x" + n.toString(16) + ">" : c;
  }).join("");

  let hits = 0;
  for (const f of files) {
    if (!fs.existsSync(f)) continue;
    const src = fs.readFileSync(f, "utf8");
    for (let i = 0; i < src.length; i++) {
      const n = src.charCodeAt(i);
      if (n < 32 && !ok.has(n)) {
        hits++;
        const near = show(src.slice(Math.max(0, i - 40), i + 12));
        err("stray control character 0x" + n.toString(16) + " in " +
            path.relative(ROOT, f) + ": ..." + near + "...");
      }
    }
  }
  console.log(`  ${files.length} source files scanned, ${hits} stray control characters`);
}

// --- results
console.log(`\n=== RESULT ===`);
console.log(`errors:   ${errors.length}`);
errors.slice(0, 60).forEach(e => console.log('  ERR  ' + e));
if (errors.length > 60) console.log(`  ... and ${errors.length - 60} more`);
console.log(`warnings: ${warnings.length}`);
warnings.slice(0, 40).forEach(w => console.log('  warn ' + w));
if (warnings.length > 40) console.log(`  ... and ${warnings.length - 40} more`);

process.exit(errors.length ? 1 : 0);
