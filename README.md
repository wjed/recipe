# Sunday Dinner

A recipe site built for Mom, for the family dinner we have every Sunday.

Press one button on the front page and it tells you what to make. Every dinner
is built around a **real plate: a protein, a starch, and a vegetable**. If a
recipe is missing one of the three, the site suggests a side to fill the gap.

**225 recipes**: 181 dinners and 44 sides, salads, breads, starters and
desserts, all with full step-by-step instructions and per-serving nutrition.

**Every dinner clears 25g of protein per serving.** That is enforced by the
validator, not by eye, so a recipe that drops below it fails the build.

## What it does

- **Tonight** picks a dinner for you. "Another idea" rerolls, and it remembers
  the last dozen so it will not repeat itself. Narrow it to one protein, under
  45 minutes, or easy only.
- **All Recipes** has search plus filters for protein, time, effort and style,
  and sorts by most protein, quickest, or easiest.
- **Recipe pages** have a servings scaler that rewrites every quantity,
  tick-off ingredients and steps that survive a screen lock, and a print layout.
- **Sunday Plan** builds a menu, totals the nutrition, and writes a shopping
  list sorted by supermarket aisle. "Build me a menu" does it in one press.
- **Saved** keeps anything you heart.

## Running it

No build step, no dependencies. Open `index.html` in a browser and it works,
including straight off the disk with no server.

To serve it locally:

```bash
python -m http.server 8770
```

## Hosting it

It is a static site, so GitHub Pages serves it as-is: **Settings, Pages, Deploy
from a branch, `main` / root**. Routing is hash-based (`#/recipe/...`) so it
works on Pages and from a local file with no server config.

## Adding a recipe

Recipes live in `data/recipes-*.js`. Each file appends to a global array, so
adding one means copying an existing entry and editing it.

```js
{
  id: "kebab-case-and-unique",
  title: "...", blurb: "one sentence", emoji: "🍗",
  protein: "Chicken",            // Chicken|Beef|Pork|Turkey|Lamb|Fish|Shrimp|Eggs|Vegetarian
  cuisine: "American",
  totalTime: 45, activeTime: 15, // minutes
  difficulty: "Easy",            // Easy|Medium|Ambitious
  servings: 4,
  type: "main",                  // or "side" (+ sideType: veg|starch|salad|bread|dessert|starter)
  plate: { protein: "...", starch: "...", veg: "..." },   // null for anything it lacks
  nutrition: { calories, protein, carbs, fat, fiber },    // per serving
  tags: ["one-pan", "comfort"],
  seasons: ["fall", "winter"],
  ingredients: [{ group: "Chicken", items: ["1 1/2 lb chicken thighs", ...] }],
  steps: ["...", "..."],
  tips: ["..."],
  makeAhead: "... or null"
}
```

Four rules that matter:

1. **A main needs a named `plate.protein` and at least 25g of protein.** Below
   that it belongs in `sides`, or it needs more protein in it.
2. **Write quantities in plain ASCII**: `2`, `1/2`, `1 1/2`, `2-3`. The scaler
   parses the leading quantity and renders it as `½`, `1½` and so on. Typing a
   `½` directly into the data breaks scaling for that line.
3. **House style: no em dashes**, and no `" - "` standing in for one. Start a
   new sentence instead. Contractions are fine and preferred.
4. **Do not lie in the tags.** `30-minutes` means `totalTime` is 35 or under.

After editing, **bump the `?v=` number on every asset in `index.html`** so
browsers pick up the change instead of serving a cached copy.

## Checking your work

`scripts/validate.js` checks the whole library: duplicate ids, unknown proteins
or tags, the protein floor, times that contradict each other, unparseable
quantities, nutrition whose macros do not add up to its calories, mains that
cannot be paired with a side, filters that would return an empty page,
ingredients the shopping list cannot file under an aisle, and prose problems
like em dashes, doubled spaces or sentences starting lowercase.

```bash
node scripts/validate.js
```

It exits non-zero if anything is wrong.

## Layout

```
index.html              page shell, loads everything
css/style.css           all styling, light + dark, print styles
js/util.js              quantity scaling, fractions, time formatting, colours
js/store.js             favourites, plan, tick-boxes (localStorage)
js/data.js              the index: search, filters, pairing, shopping aisles
js/render.js            HTML builders
js/app.js               hash router and the views
data/recipes-*.js       the recipes
scripts/validate.js     the QA check
```

## Where the saved data lives

There is no database and nothing to set up. Saved recipes, the Sunday plan and
the tick-boxes live in `localStorage`, which is a small store built into the
browser. No account, no server, nothing uploaded.

The tradeoff is that it is per-device. So the bottom of the **Saved** page
builds a link with the whole saved list packed into it (base64url in the hash,
a few hundred characters). Text it to yourself, open it on the other device,
and it asks whether to merge or replace. Keeping that message also makes it a
backup, since opening the link again restores everything.

`Store.exportState()` and `Store.importState()` handle it. Import filters out
ids that no longer exist, so an old link still restores everything else instead
of failing.

Nutrition figures are estimates meant to give a sense of balance, not
lab-measured values, and they are not medical advice.
