# Sunday Dinner

A recipe site built for Mom (Sarah), for the Sunday dinners the three of us have
every week — her, me, and Karolina.

The idea is simple: press one button on the front page and it tells you what to
make. Every dinner is built around a **real plate — a protein, a starch, and a
vegetable** — rather than "here's a pizza." If a recipe is missing one of the
three, the site suggests a side to fill the gap.

**225 recipes**: 183 dinners and 42 sides, salads, breads and desserts, all with
full step-by-step instructions, ingredient lists, and per-serving nutrition.

## What it does

- **Tonight** — one big button that picks a dinner for you, with a "give me
  another" and filters for protein / under 45 minutes / easy only. It remembers
  the last dozen suggestions so it won't repeat itself.
- **All Recipes** — search plus filters for protein, time, effort and style
  (one-pan, sheet-pan, slow-cooker, make-ahead, kid-friendly, gluten-free…).
- **Recipe pages** — a servings scaler that rescales every ingredient, tick-off
  ingredients and steps that survive a screen lock, nutrition, tips, make-ahead
  notes, suggested sides, and a print layout.
- **Sunday Plan** — build a menu (main + two sides + dessert), see the nutrition
  for the whole meal, and get a shopping list sorted by supermarket aisle.
  "Build me a whole menu" does it all in one press.
- **Saved** — heart anything to keep it.

## Running it

There is no build step and there are no dependencies. Open `index.html` in a
browser and it works — including straight off the disk, no server needed.

To serve it locally:

```bash
python -m http.server 8770
```

Then visit http://localhost:8770.

## Hosting it

It is a static site, so GitHub Pages serves it as-is: **Settings → Pages →
Deploy from a branch → `main` / root**. Routing is hash-based (`#/recipe/...`)
precisely so it works on Pages and from a local file with no server config.

## Adding a recipe

Recipes live in `data/recipes-*.js`. Each file appends to a global array, so
adding one means copying an existing entry and editing it. The shape:

```js
{
  id: "kebab-case-and-unique",
  title: "...", blurb: "one sentence", emoji: "🍗",
  protein: "Chicken",            // Chicken|Beef|Pork|Turkey|Lamb|Fish|Shrimp|Eggs|Vegetarian
  cuisine: "American",
  totalTime: 45, activeTime: 15, // minutes
  difficulty: "Easy",            // Easy|Medium|Ambitious
  servings: 4,
  type: "main",                  // or "side" (+ sideType: veg|starch|salad|bread|dessert)
  plate: { protein: "...", starch: "...", veg: "..." },   // null for anything it lacks
  nutrition: { calories, protein, carbs, fat, fiber },    // per serving
  tags: ["one-pan", "comfort"],
  seasons: ["fall", "winter"],
  karolina: true,                // the kid-approved badge
  ingredients: [{ group: "Chicken", items: ["1 1/2 lb chicken thighs", ...] }],
  steps: ["...", "..."],
  tips: ["..."],
  makeAhead: "... or null"
}
```

Two rules that matter:

1. **Write quantities in plain ASCII** — `2`, `1/2`, `1 1/2`, `2-3`. The servings
   scaler parses the leading quantity and renders it as `½`, `1½` and so on.
   Typing a `½` directly into the data will break scaling for that line.
2. **Don't lie in the tags.** `30-minutes` means `totalTime` is 35 or under.

After editing, **bump the `?v=` number on every asset in `index.html`** so
browsers pick up the change instead of serving a cached copy.

## Checking your work

`scripts/validate.js` checks the whole library: duplicate ids, unknown proteins
or tags, `activeTime` greater than `totalTime`, unparseable quantities, nutrition
whose macros don't add up to its calorie count, mains that can't be paired with a
side, filters that would return an empty page, and ingredients the shopping list
can't file under an aisle.

```bash
node scripts/validate.js
```

It exits non-zero if anything is actually wrong.

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

Nothing is uploaded anywhere. There's no account and no server — saved recipes
and the Sunday plan live in the browser on whichever device you're using.

Nutrition figures are careful estimates meant to give a sense of balance, not
lab-measured values, and they aren't medical advice.
