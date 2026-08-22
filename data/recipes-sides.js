/* Sides, salads, breads & something sweet.
   These fill the gaps in a plate. The site suggests them automatically
   when a main is missing a vegetable or a starch. */
window.RECIPES = (window.RECIPES || []).concat([

/* ------------------------------------------------------------ vegetables -- */

{
  id: "garlic-butter-green-beans",
  title: "Garlic Butter Green Beans",
  blurb: "Crisp-tender beans tossed in garlic butter. Ten minutes and they go with almost anything.",
  emoji: "🫛", protein: "Vegetarian", cuisine: "American",
  type: "side", sideType: "veg", pairsWith: ["Chicken", "Beef", "Pork", "Fish", "Turkey", "Lamb"],
  totalTime: 15, activeTime: 15, difficulty: "Easy", servings: 4,
  plate: { protein: null, starch: null, veg: "Green beans" },
  nutrition: { calories: 115, protein: 3, carbs: 10, fat: 8, fiber: 4 },
  tags: ["30-minutes", "gluten-free", "veggie-forward", "budget", "kid-friendly"],
  seasons: ["all"],
  ingredients: [
    { group: "Beans", items: [
      "1 1/2 lb green beans, trimmed",
      "3 tablespoons butter",
      "4 cloves garlic, thinly sliced",
      "1 teaspoon kosher salt",
      "1 tablespoon lemon juice",
      "1/4 teaspoon red pepper flakes"
    ]}
  ],
  steps: [
    "Bring a large skillet of salted water to a boil. Add the beans and cook 4 minutes, until bright green and just tender.",
    "Drain the beans and wipe the pan dry.",
    "Melt the butter in the same pan over medium. Add the garlic and pepper flakes and cook 45 seconds, until fragrant but not browned.",
    "Return the beans and toss 2 minutes, until coated and heated through.",
    "Add the lemon juice and salt, toss once more, and serve."
  ],
  tips: [
    "Boiling then sauteing gives you tender beans with a buttery coating. Sauteing raw beans leaves them squeaky.",
    "For a make-ahead version, boil the beans and plunge them into ice water hours in advance, then finish in butter at the last minute."
  ],
  makeAhead: "Blanch the beans up to a day ahead and refrigerate."
},

{
  id: "roasted-broccoli-parmesan",
  title: "Roasted Broccoli with Parmesan",
  blurb: "Roasted hot enough to get crispy brown edges, then showered with cheese and lemon.",
  emoji: "🥦", protein: "Vegetarian", cuisine: "Italian",
  type: "side", sideType: "veg", pairsWith: ["Chicken", "Beef", "Pork", "Fish", "Shrimp", "Turkey"],
  totalTime: 30, activeTime: 8, difficulty: "Easy", servings: 4,
  plate: { protein: null, starch: null, veg: "Broccoli" },
  nutrition: { calories: 155, protein: 8, carbs: 12, fat: 10, fiber: 5 },
  tags: ["30-minutes", "gluten-free", "veggie-forward", "kid-friendly", "budget", "low-carb"],
  seasons: ["all"],
  ingredients: [
    { group: "Broccoli", items: [
      "2 large heads broccoli, cut into florets",
      "3 tablespoons olive oil",
      "4 cloves garlic, thinly sliced",
      "1 teaspoon kosher salt",
      "1/2 teaspoon black pepper",
      "1/2 cup grated Parmesan",
      "1 tablespoon lemon juice"
    ]}
  ],
  steps: [
    "Heat the oven to 425F. Put a sheet pan in the oven while it heats. A hot pan gives an immediate sear.",
    "Toss the broccoli with the oil, salt, and pepper. Make sure every piece is coated; dry spots don't brown.",
    "Spread on the hot pan in a single layer, cut sides down where possible, and roast 20 minutes without stirring.",
    "Scatter the garlic over and roast 4 minutes more, until the florets have dark crispy edges.",
    "Toss immediately with the Parmesan and lemon juice while still hot."
  ],
  tips: [
    "Don't stir halfway through. Uninterrupted contact with the pan is what creates the browned edges everybody wants.",
    "The little loose florets that fall off get the crispiest and are the best part."
  ],
  makeAhead: null
},

{
  id: "honey-glazed-carrots",
  title: "Honey Glazed Carrots",
  blurb: "Sweet, glossy carrots with butter and thyme. The side that children eat without complaint.",
  emoji: "🥕", protein: "Vegetarian", cuisine: "American",
  type: "side", sideType: "veg", pairsWith: ["Chicken", "Beef", "Pork", "Turkey", "Lamb"],
  totalTime: 30, activeTime: 12, difficulty: "Easy", servings: 4,
  plate: { protein: null, starch: null, veg: "Carrots" },
  nutrition: { calories: 165, protein: 2, carbs: 26, fat: 7, fiber: 5 },
  tags: ["30-minutes", "gluten-free", "kid-friendly", "budget", "veggie-forward", "make-ahead"],
  seasons: ["all"],
  ingredients: [
    { group: "Carrots", items: [
      "2 lb carrots, cut into thick diagonal slices",
      "3 tablespoons butter",
      "3 tablespoons honey",
      "1 teaspoon fresh thyme",
      "1 teaspoon kosher salt",
      "1 tablespoon apple cider vinegar",
      "2 tablespoons chopped parsley"
    ]}
  ],
  steps: [
    "Put the carrots in a wide skillet with the butter, honey, salt, and 1/2 cup water.",
    "Bring to a simmer, cover, and cook 12 minutes, until the carrots are just tender.",
    "Uncover and raise the heat. Cook 6 to 8 minutes, tossing occasionally, until the liquid reduces to a syrupy glaze that clings to the carrots.",
    "Add the thyme and vinegar and toss for 1 minute.",
    "Scatter with parsley and serve."
  ],
  tips: [
    "The vinegar at the end keeps this from being cloying. Sweet glazes need acid.",
    "Cut the carrots on a steep diagonal. More surface area means more glaze on every piece."
  ],
  makeAhead: "Cook through step 2 hours ahead and finish the glaze before serving."
},

{
  id: "roasted-brussels-sprouts-balsamic",
  title: "Roasted Brussels Sprouts with Balsamic",
  blurb: "Deeply caramelized sprouts with a sweet-sharp glaze. Even sprout skeptics come around.",
  emoji: "🥬", protein: "Vegetarian", cuisine: "American",
  type: "side", sideType: "veg", pairsWith: ["Chicken", "Beef", "Pork", "Turkey", "Fish"],
  totalTime: 35, activeTime: 10, difficulty: "Easy", servings: 4,
  plate: { protein: null, starch: null, veg: "Brussels sprouts" },
  nutrition: { calories: 175, protein: 6, carbs: 20, fat: 10, fiber: 6 },
  tags: ["gluten-free", "dairy-free", "veggie-forward", "low-carb", "budget"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Sprouts", items: [
      "2 lb Brussels sprouts, halved",
      "3 tablespoons olive oil",
      "1 1/2 teaspoons kosher salt",
      "1/2 teaspoon black pepper",
      "3 tablespoons balsamic vinegar",
      "1 tablespoon honey",
      "1/3 cup toasted pecans, chopped"
    ]}
  ],
  steps: [
    "Heat the oven to 425F.",
    "Toss the sprouts with the oil, salt, and pepper.",
    "Spread on a sheet pan with as many as possible cut side down. That flat surface against the hot pan is where the caramelization happens.",
    "Roast 25 to 28 minutes without stirring, until the cut sides are deep brown and the loose outer leaves are crisp.",
    "Whisk the balsamic and honey together and toss with the hot sprouts.",
    "Finish with the toasted pecans."
  ],
  tips: [
    "Pale, boiled-tasting sprouts are why people think they hate sprouts. Roast them until they look almost too dark.",
    "Don't throw away the loose leaves. They turn into crisps and are the best bit on the pan."
  ],
  makeAhead: "Trim and halve the sprouts a day ahead."
},

{
  id: "sauteed-garlic-spinach",
  title: "Sauteed Garlic Spinach",
  blurb: "A pound of spinach into a five-minute side. The fastest green on the table.",
  emoji: "🥬", protein: "Vegetarian", cuisine: "Italian",
  type: "side", sideType: "veg", pairsWith: ["Chicken", "Beef", "Pork", "Fish", "Shrimp", "Lamb", "Eggs"],
  totalTime: 10, activeTime: 10, difficulty: "Easy", servings: 4,
  plate: { protein: null, starch: null, veg: "Spinach" },
  nutrition: { calories: 105, protein: 5, carbs: 6, fat: 8, fiber: 4 },
  tags: ["30-minutes", "gluten-free", "dairy-free", "low-carb", "veggie-forward", "budget"],
  seasons: ["all"],
  ingredients: [
    { group: "Spinach", items: [
      "1 1/2 lb fresh spinach",
      "3 tablespoons olive oil",
      "5 cloves garlic, thinly sliced",
      "1/4 teaspoon red pepper flakes",
      "1 teaspoon kosher salt",
      "1 tablespoon lemon juice"
    ]}
  ],
  steps: [
    "Heat the oil in a very large pot or skillet over medium. Add the garlic and pepper flakes and cook 1 minute, until the garlic is pale gold.",
    "Add the spinach in large handfuls, tossing with tongs and waiting for each addition to wilt before adding more.",
    "Cook 3 to 4 minutes total, until all the spinach has collapsed.",
    "Tip the pan and pour off any watery liquid that has collected. This is what keeps it from being soggy.",
    "Season with the salt and lemon juice and serve immediately."
  ],
  tips: [
    "A pound and a half of raw spinach cooks down to about two cups. It always looks like too much.",
    "Draining off the released water at the end is the difference between sauteed spinach and spinach soup."
  ],
  makeAhead: null
},

{
  id: "roasted-asparagus-lemon",
  title: "Roasted Asparagus with Lemon",
  blurb: "Twelve minutes in a hot oven and a squeeze of lemon. Spring on a plate.",
  emoji: "🌱", protein: "Vegetarian", cuisine: "American",
  type: "side", sideType: "veg", pairsWith: ["Chicken", "Fish", "Shrimp", "Beef", "Eggs"],
  totalTime: 18, activeTime: 6, difficulty: "Easy", servings: 4,
  plate: { protein: null, starch: null, veg: "Asparagus" },
  nutrition: { calories: 105, protein: 5, carbs: 8, fat: 7, fiber: 4 },
  tags: ["30-minutes", "gluten-free", "low-carb", "veggie-forward", "dairy-free"],
  seasons: ["spring"],
  ingredients: [
    { group: "Asparagus", items: [
      "2 lb asparagus, woody ends snapped off",
      "3 tablespoons olive oil",
      "1 teaspoon kosher salt",
      "1/2 teaspoon black pepper",
      "1 lemon, zested and juiced",
      "1/4 cup shaved Parmesan"
    ]}
  ],
  steps: [
    "Heat the oven to 425F.",
    "Snap the woody ends off. Hold each spear near the base and bend until it breaks naturally at the right point.",
    "Toss with the oil, salt, and pepper and spread in a single layer on a sheet pan.",
    "Roast 10 to 14 minutes depending on thickness, until tender with browned tips.",
    "Finish with the lemon zest, juice, and shaved Parmesan while still hot."
  ],
  tips: [
    "Thin spears need 10 minutes, thick ones need 15. Cook them until a knife slides in with slight resistance.",
    "Overcooked asparagus goes limp and grey-green. Pull it while it still has a snap."
  ],
  makeAhead: null
},

{
  id: "creamed-corn",
  title: "Skillet Creamed Corn",
  blurb: "Sweet corn in a light cream sauce made from the corn itself. Better than the canned kind.",
  emoji: "🌽", protein: "Vegetarian", cuisine: "American",
  type: "side", sideType: "veg", pairsWith: ["Chicken", "Beef", "Pork", "Fish", "Turkey"],
  totalTime: 25, activeTime: 20, difficulty: "Easy", servings: 6,
  plate: { protein: null, starch: null, veg: "Corn" },
  nutrition: { calories: 225, protein: 6, carbs: 28, fat: 12, fiber: 3 },
  tags: ["30-minutes", "gluten-free", "kid-friendly", "comfort", "budget"],
  seasons: ["summer"],
  ingredients: [
    { group: "Corn", items: [
      "8 ears corn, kernels cut off, or 6 cups frozen corn",
      "3 tablespoons butter",
      "1 small onion, finely diced",
      "2 cloves garlic, minced",
      "3/4 cup heavy cream",
      "1/2 cup whole milk",
      "1 1/4 teaspoons kosher salt",
      "1/2 teaspoon black pepper",
      "2 tablespoons chopped chives"
    ]}
  ],
  steps: [
    "If using fresh corn, scrape the cobs with the back of a knife after cutting off the kernels. That milky liquid is where most of the flavor lives.",
    "Melt the butter in a large skillet over medium. Cook the onion 5 minutes, then the garlic 1 minute.",
    "Add the corn kernels and any scraped-off liquid and cook 5 minutes.",
    "Add the cream, milk, salt, and pepper. Simmer 8 minutes, until thickened.",
    "Blend about a cup of the mixture and stir it back in for a creamier texture without any flour.",
    "Taste for salt, scatter with chives, and serve."
  ],
  tips: [
    "Scraping the cobs is the step that separates good creamed corn from adequate creamed corn.",
    "Frozen corn works well year round. Don't thaw it first."
  ],
  makeAhead: "Keeps three days and reheats gently with a splash of milk."
},

{
  id: "roasted-cauliflower-cumin",
  title: "Cumin Roasted Cauliflower",
  blurb: "Browned, nutty florets with warm spices and a squeeze of lemon.",
  emoji: "🥬", protein: "Vegetarian", cuisine: "Middle Eastern",
  type: "side", sideType: "veg", pairsWith: ["Chicken", "Lamb", "Beef", "Fish", "Vegetarian"],
  totalTime: 35, activeTime: 8, difficulty: "Easy", servings: 4,
  plate: { protein: null, starch: null, veg: "Cauliflower" },
  nutrition: { calories: 145, protein: 5, carbs: 14, fat: 10, fiber: 6 },
  tags: ["gluten-free", "dairy-free", "low-carb", "veggie-forward", "budget"],
  seasons: ["all"],
  ingredients: [
    { group: "Cauliflower", items: [
      "2 large heads cauliflower, cut into florets",
      "4 tablespoons olive oil",
      "2 teaspoons ground cumin",
      "1 teaspoon smoked paprika",
      "1/2 teaspoon turmeric",
      "1 1/2 teaspoons kosher salt",
      "2 tablespoons lemon juice",
      "1/3 cup chopped parsley",
      "1/4 cup toasted pine nuts or almonds"
    ]}
  ],
  steps: [
    "Heat the oven to 450F.",
    "Toss the cauliflower with the oil, spices, and salt until evenly coated.",
    "Spread across two sheet pans in a single layer. Crowding is what turns roasted cauliflower into steamed cauliflower.",
    "Roast 25 to 30 minutes, tossing once at the halfway point, until deeply browned in places.",
    "Toss the hot cauliflower with the lemon juice, parsley, and toasted nuts."
  ],
  tips: [
    "Roast it until it looks slightly too brown. Pale cauliflower tastes of almost nothing.",
    "The small crumbly bits that break off get crispiest, so don't pick them out."
  ],
  makeAhead: "Cut the florets a day ahead."
},

{
  id: "braised-red-cabbage",
  title: "Sweet and Sour Braised Red Cabbage",
  blurb: "Glossy, tangy cabbage with apple and caraway. Excellent with pork and it improves overnight.",
  emoji: "🥬", protein: "Vegetarian", cuisine: "German",
  type: "side", sideType: "veg", pairsWith: ["Pork", "Beef", "Turkey", "Lamb"],
  totalTime: 55, activeTime: 15, difficulty: "Easy", servings: 6,
  plate: { protein: null, starch: null, veg: "Red cabbage and apple" },
  nutrition: { calories: 145, protein: 2, carbs: 24, fat: 5, fiber: 4 },
  tags: ["make-ahead", "gluten-free", "veggie-forward", "budget", "leftovers"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Cabbage", items: [
      "1 head red cabbage, cored and shredded",
      "2 tablespoons butter",
      "1 onion, sliced",
      "2 apples, peeled and sliced",
      "1/3 cup apple cider vinegar",
      "1/3 cup apple cider or water",
      "3 tablespoons brown sugar",
      "1 teaspoon caraway seeds",
      "1 bay leaf",
      "1 1/2 teaspoons kosher salt"
    ]}
  ],
  steps: [
    "Melt the butter in a large pot over medium. Cook the onion 5 minutes.",
    "Add all the remaining ingredients and stir well. The pot will look overfull; the cabbage collapses to a third of its volume.",
    "Cover and cook on low 40 minutes, stirring every 10 minutes.",
    "Uncover for the last 10 minutes if there's liquid left in the bottom, so it reduces and glazes the cabbage.",
    "Remove the bay leaf and taste. It should be balanced between sweet and sour. Adjust with a splash more vinegar or a pinch of sugar."
  ],
  tips: [
    "The vinegar keeps the cabbage a vivid purple. Without acid it turns an unappealing blue-grey.",
    "This is better on day two, which makes it ideal for a holiday table."
  ],
  makeAhead: "Keeps five days and reheats perfectly."
},

{
  id: "grilled-zucchini-herbs",
  title: "Grilled Zucchini with Herbs",
  blurb: "Charred, tender planks of zucchini with garlic, lemon, and a lot of fresh herbs.",
  emoji: "🥒", protein: "Vegetarian", cuisine: "Mediterranean",
  type: "side", sideType: "veg", pairsWith: ["Chicken", "Fish", "Shrimp", "Lamb", "Beef"],
  totalTime: 25, activeTime: 20, difficulty: "Easy", servings: 4,
  plate: { protein: null, starch: null, veg: "Zucchini" },
  nutrition: { calories: 125, protein: 3, carbs: 9, fat: 10, fiber: 3 },
  tags: ["30-minutes", "grill", "gluten-free", "dairy-free", "low-carb", "veggie-forward"],
  seasons: ["summer"],
  ingredients: [
    { group: "Zucchini", items: [
      "4 zucchini, sliced lengthwise 1/2 inch thick",
      "3 tablespoons olive oil",
      "1 1/2 teaspoons kosher salt",
      "1/2 teaspoon black pepper"
    ]},
    { group: "Herb dressing", items: [
      "3 tablespoons olive oil",
      "2 cloves garlic, grated",
      "2 tablespoons lemon juice",
      "1/3 cup chopped mixed basil, mint, and parsley",
      "1/4 teaspoon red pepper flakes"
    ]}
  ],
  steps: [
    "Salt the zucchini planks and leave them on a rack 10 minutes, then blot dry. This draws out water so they char rather than steam.",
    "Brush both sides with the oil and season with pepper.",
    "Heat a grill or grill pan to medium-high.",
    "Grill 3 to 4 minutes per side, until well marked and just tender. Don't move them around while they cook.",
    "Whisk the dressing ingredients together and spoon over the warm zucchini.",
    "Serve warm or at room temperature."
  ],
  tips: [
    "Salting and blotting first is what stops zucchini going watery and limp on the grill.",
    "Take it off while there's still a little bite. Zucchini goes from tender to mush quickly."
  ],
  makeAhead: "Good at room temperature, so it can be grilled an hour ahead."
},

{
  id: "roasted-carrots-tahini",
  title: "Roasted Carrots with Tahini",
  blurb: "Sweet, blistered carrots under a lemony tahini drizzle with herbs and seeds.",
  emoji: "🥕", protein: "Vegetarian", cuisine: "Middle Eastern",
  type: "side", sideType: "veg", pairsWith: ["Chicken", "Lamb", "Beef", "Fish", "Vegetarian"],
  totalTime: 40, activeTime: 12, difficulty: "Easy", servings: 4,
  plate: { protein: null, starch: null, veg: "Carrots" },
  nutrition: { calories: 235, protein: 5, carbs: 22, fat: 15, fiber: 6 },
  tags: ["gluten-free", "dairy-free", "veggie-forward", "make-ahead", "budget"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Carrots", items: [
      "2 lb carrots, halved lengthwise",
      "3 tablespoons olive oil",
      "1 teaspoon ground cumin",
      "1 teaspoon kosher salt",
      "1 tablespoon honey"
    ]},
    { group: "Tahini drizzle", items: [
      "1/3 cup tahini",
      "3 tablespoons lemon juice",
      "1 clove garlic, grated",
      "4-6 tablespoons cold water",
      "1/4 teaspoon salt"
    ]},
    { group: "To finish", items: [
      "1/4 cup chopped parsley",
      "3 tablespoons pumpkin seeds",
      "1/2 teaspoon sumac or paprika"
    ]}
  ],
  steps: [
    "Heat the oven to 425F.",
    "Toss the carrots with the oil, cumin, and salt and spread cut side down on a sheet pan.",
    "Roast 28 to 32 minutes, until tender and browned along the cut side.",
    "Drizzle with the honey and toss on the pan.",
    "Whisk the tahini with the lemon juice and garlic. It will seize into a paste. Keep whisking in cold water a spoonful at a time until it pours.",
    "Arrange the carrots on a platter, spoon the tahini over, and finish with parsley, pumpkin seeds, and sumac."
  ],
  tips: [
    "Tahini seizing when you add lemon is normal. Cold water and persistent whisking bring it back every time.",
    "Halving the carrots lengthwise gives you a flat face that caramelizes against the pan."
  ],
  makeAhead: "The tahini sauce keeps a week in the fridge."
},

{
  id: "buttered-peas-mint",
  title: "Buttered Peas with Mint",
  blurb: "Five minutes, three ingredients, and it makes a plate look finished.",
  emoji: "🫛", protein: "Vegetarian", cuisine: "British",
  type: "side", sideType: "veg", pairsWith: ["Chicken", "Beef", "Pork", "Fish", "Lamb", "Turkey"],
  totalTime: 10, activeTime: 10, difficulty: "Easy", servings: 4,
  plate: { protein: null, starch: null, veg: "Peas" },
  nutrition: { calories: 155, protein: 7, carbs: 18, fat: 7, fiber: 6 },
  tags: ["30-minutes", "gluten-free", "kid-friendly", "budget", "veggie-forward"],
  seasons: ["all"],
  ingredients: [
    { group: "Peas", items: [
      "1 1/2 lb frozen peas",
      "3 tablespoons butter",
      "3 tablespoons chopped mint",
      "1 teaspoon kosher salt",
      "1 teaspoon lemon juice",
      "1/4 teaspoon black pepper"
    ]}
  ],
  steps: [
    "Bring a pot of salted water to a boil. Add the frozen peas and cook 3 minutes, just until hot and bright green.",
    "Drain well and return them to the warm pot off the heat.",
    "Add the butter and toss until it melts and coats the peas.",
    "Stir in the mint, salt, pepper, and lemon juice and serve right away."
  ],
  tips: [
    "Frozen peas are picked and frozen within hours and are usually better than the fresh ones at the store.",
    "Don't overcook them. Three minutes is plenty; longer turns them khaki and starchy."
  ],
  makeAhead: null
},

{
  id: "sauteed-mushrooms-thyme",
  title: "Sauteed Mushrooms with Thyme",
  blurb: "Deeply browned mushrooms with garlic, butter, and a splash of sherry.",
  emoji: "🍄", protein: "Vegetarian", cuisine: "French",
  type: "side", sideType: "veg", pairsWith: ["Beef", "Chicken", "Pork", "Lamb", "Eggs"],
  totalTime: 25, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: null, starch: null, veg: "Mushrooms" },
  nutrition: { calories: 165, protein: 6, carbs: 8, fat: 12, fiber: 2 },
  tags: ["30-minutes", "gluten-free", "low-carb", "veggie-forward", "comfort"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Mushrooms", items: [
      "2 lb mixed mushrooms, thickly sliced",
      "3 tablespoons butter",
      "2 tablespoons olive oil",
      "4 cloves garlic, minced",
      "1 tablespoon fresh thyme leaves",
      "1/4 cup dry sherry or white wine",
      "1 1/4 teaspoons kosher salt",
      "1/2 teaspoon black pepper",
      "2 tablespoons chopped parsley"
    ]}
  ],
  steps: [
    "Heat 1 tablespoon butter and 1 tablespoon oil in a large skillet over high heat.",
    "Add half the mushrooms in a single layer and leave them completely alone for 4 minutes. They will release water, then reabsorb it, then brown.",
    "Stir and cook 3 minutes more, until well browned. Move to a bowl and repeat with the second batch.",
    "Return all the mushrooms to the pan with the last of the butter, the garlic, and the thyme. Cook 1 minute.",
    "Pour in the sherry and cook 2 minutes, scraping the pan, until it has almost evaporated.",
    "Season with the salt and pepper and finish with parsley."
  ],
  tips: [
    "Two batches, high heat, and no stirring for the first four minutes. Crowded mushrooms steam in their own liquid and stay grey.",
    "Don't salt them until the end. Salt draws out water and delays the browning."
  ],
  makeAhead: null
},

{
  id: "green-beans-almondine",
  title: "Green Beans Almondine",
  blurb: "The classic: blanched beans tossed in brown butter with toasted almonds and lemon.",
  emoji: "🌰", protein: "Vegetarian", cuisine: "French",
  type: "side", sideType: "veg", pairsWith: ["Chicken", "Fish", "Turkey", "Beef", "Pork"],
  totalTime: 25, activeTime: 20, difficulty: "Easy", servings: 6,
  plate: { protein: null, starch: null, veg: "Green beans" },
  nutrition: { calories: 185, protein: 5, carbs: 12, fat: 14, fiber: 5 },
  tags: ["30-minutes", "gluten-free", "special-occasion", "veggie-forward", "make-ahead"],
  seasons: ["all"],
  ingredients: [
    { group: "Beans", items: [
      "2 lb green beans, trimmed",
      "5 tablespoons butter",
      "3/4 cup sliced almonds",
      "3 cloves garlic, minced",
      "1 1/2 teaspoons kosher salt",
      "2 tablespoons lemon juice",
      "1/2 teaspoon black pepper"
    ]}
  ],
  steps: [
    "Bring a large pot of well-salted water to a boil. Cook the beans 4 minutes, until bright green and crisp-tender.",
    "Drain and plunge them into a bowl of ice water to stop the cooking and lock in the color. Drain again and pat dry.",
    "Toast the almonds in a dry skillet over medium 3 minutes, until golden. Tip them out.",
    "Melt the butter in the same skillet over medium. Keep cooking 3 minutes after it foams, until the solids at the bottom turn golden brown and it smells nutty.",
    "Add the garlic and cook 30 seconds, then add the beans and toss 2 minutes until heated through.",
    "Add the almonds, lemon juice, salt, and pepper, toss, and serve."
  ],
  tips: [
    "Brown butter goes from nutty to burnt in seconds. Pull it off the heat as soon as it smells like toasted hazelnuts.",
    "Blanching and shocking in ice water lets you do everything but the final toss hours in advance."
  ],
  makeAhead: "Blanch and shock the beans up to a day ahead."
},

/* --------------------------------------------------------------- starches -- */

{
  id: "creamy-mashed-potatoes",
  title: "Creamy Mashed Potatoes",
  blurb: "Smooth, buttery, seasoned. The foundation of half the dinners in this collection.",
  emoji: "🥔", protein: "Vegetarian", cuisine: "American",
  type: "side", sideType: "starch", pairsWith: ["Beef", "Chicken", "Pork", "Turkey", "Lamb"],
  totalTime: 35, activeTime: 25, difficulty: "Easy", servings: 6,
  plate: { protein: null, starch: "Potatoes", veg: null },
  nutrition: { calories: 305, protein: 6, carbs: 42, fat: 14, fiber: 4 },
  tags: ["gluten-free", "comfort", "kid-friendly", "budget", "make-ahead"],
  seasons: ["all"],
  ingredients: [
    { group: "Potatoes", items: [
      "3 lb Yukon gold potatoes, peeled and cut into even chunks",
      "1 tablespoon kosher salt for the water",
      "8 tablespoons butter, cubed",
      "1 cup whole milk or half-and-half, warmed",
      "1 1/2 teaspoons kosher salt",
      "1/2 teaspoon white pepper"
    ]}
  ],
  steps: [
    "Put the potatoes in a pot of cold, well-salted water. Starting cold means they cook evenly instead of going mushy outside and raw inside.",
    "Bring to a boil and simmer 18 to 20 minutes, until a knife slides in with no resistance.",
    "Drain and return them to the hot dry pot for 2 minutes, shaking occasionally, to steam off the surface moisture.",
    "Mash with a masher or push through a ricer for the smoothest result.",
    "Add the butter first and stir until melted, then the warm milk gradually until it's the texture you want.",
    "Season with salt and white pepper and taste. Potatoes take a surprising amount of salt."
  ],
  tips: [
    "Never use a food processor or blender. It overworks the starch and turns potatoes into wallpaper paste.",
    "Butter before milk. Coating the starch in fat first keeps the mash from getting gluey."
  ],
  makeAhead: "Keep warm in a covered bowl over simmering water for up to 2 hours, or reheat with extra milk."
},

{
  id: "crispy-roast-potatoes",
  title: "Crispy Roast Potatoes",
  blurb: "Shattering crust, fluffy middle. Parboiling and roughing them up is the secret.",
  emoji: "🥔", protein: "Vegetarian", cuisine: "British",
  type: "side", sideType: "starch", pairsWith: ["Chicken", "Beef", "Pork", "Lamb", "Fish", "Turkey"],
  totalTime: 65, activeTime: 20, difficulty: "Easy", servings: 6,
  plate: { protein: null, starch: "Potatoes", veg: null },
  nutrition: { calories: 285, protein: 5, carbs: 44, fat: 11, fiber: 4 },
  tags: ["gluten-free", "dairy-free", "comfort", "kid-friendly", "budget", "special-occasion"],
  seasons: ["all"],
  ingredients: [
    { group: "Potatoes", items: [
      "3 lb russet or Yukon gold potatoes, peeled and cut into large chunks",
      "1 tablespoon kosher salt for the water",
      "1/2 teaspoon baking soda",
      "5 tablespoons olive oil or duck fat",
      "6 cloves garlic, smashed",
      "3 sprigs rosemary",
      "1 1/2 teaspoons kosher salt"
    ]}
  ],
  steps: [
    "Heat the oven to 450F and put a sheet pan with the oil on it in to heat.",
    "Boil the potatoes in salted water with the baking soda for 10 minutes, until the outsides are soft but the centers still firm.",
    "Drain them in a colander and let them steam dry for 3 minutes.",
    "Shake the colander hard for 15 seconds. The outsides should break down into a rough, starchy paste. That fluffy exterior is what turns into crust.",
    "Carefully tip the potatoes onto the hot oiled pan and turn to coat. They should sizzle on contact.",
    "Roast 25 minutes, then turn each one and add the garlic and rosemary. Roast 20 to 25 minutes more, until deep golden and audibly crunchy.",
    "Season with salt and serve immediately."
  ],
  tips: [
    "The baking soda raises the pH and helps the surface break down. It makes a visible difference.",
    "Preheating the oil is essential. Cold oil soaks in; hot oil sears immediately."
  ],
  makeAhead: "Parboil and rough up the potatoes hours ahead; roast just before serving."
},

{
  id: "rice-pilaf",
  title: "Buttery Rice Pilaf",
  blurb: "Toasted rice cooked in broth so every grain is separate and savory.",
  emoji: "🍚", protein: "Vegetarian", cuisine: "American",
  type: "side", sideType: "starch", pairsWith: ["Chicken", "Fish", "Shrimp", "Lamb", "Beef", "Turkey"],
  totalTime: 30, activeTime: 12, difficulty: "Easy", servings: 6,
  plate: { protein: null, starch: "Rice", veg: null },
  nutrition: { calories: 245, protein: 5, carbs: 42, fat: 6, fiber: 1 },
  tags: ["30-minutes", "budget", "kid-friendly", "gluten-free", "make-ahead"],
  seasons: ["all"],
  ingredients: [
    { group: "Pilaf", items: [
      "1 1/2 cups long-grain rice",
      "3 tablespoons butter",
      "1 small onion, finely diced",
      "2 cloves garlic, minced",
      "3 cups chicken or vegetable broth",
      "1 bay leaf",
      "1 teaspoon kosher salt",
      "1/4 cup chopped parsley",
      "1/4 cup toasted slivered almonds, optional"
    ]}
  ],
  steps: [
    "Rinse the rice under cold water until the water runs clear, then drain it well.",
    "Melt the butter in a saucepan over medium. Cook the onion 5 minutes until soft, then the garlic 1 minute.",
    "Add the rice and stir for 2 to 3 minutes, until the grains smell toasty and look slightly translucent at the edges.",
    "Add the broth, bay leaf, and salt. Bring to a boil, then reduce to the lowest heat, cover, and cook 18 minutes.",
    "Take it off the heat and let it stand, still covered, for 10 minutes. Don't lift the lid.",
    "Fluff with a fork and stir in the parsley and almonds."
  ],
  tips: [
    "Toasting the rice in butter before adding liquid is what makes it pilaf rather than plain rice.",
    "The ten-minute rest off the heat lets the moisture even out. Skipping it gives you wet rice on the bottom."
  ],
  makeAhead: "Keeps three days; reheat with a splash of broth."
},

{
  id: "garlic-parmesan-orzo",
  title: "Garlic Parmesan Orzo",
  blurb: "Creamy, cheesy little pasta that comes together in fifteen minutes in one pot.",
  emoji: "🍚", protein: "Vegetarian", cuisine: "Italian",
  type: "side", sideType: "starch", pairsWith: ["Chicken", "Fish", "Shrimp", "Beef", "Lamb"],
  totalTime: 20, activeTime: 20, difficulty: "Easy", servings: 6,
  plate: { protein: null, starch: "Orzo", veg: null },
  nutrition: { calories: 285, protein: 10, carbs: 40, fat: 10, fiber: 2 },
  tags: ["30-minutes", "kid-friendly", "budget", "comfort", "one-pan"],
  seasons: ["all"],
  ingredients: [
    { group: "Orzo", items: [
      "1 1/2 cups orzo",
      "3 tablespoons butter",
      "5 cloves garlic, minced",
      "3 1/2 cups chicken or vegetable broth",
      "3/4 cup grated Parmesan",
      "1/4 cup heavy cream",
      "1 teaspoon kosher salt",
      "1/2 teaspoon black pepper",
      "2 tablespoons chopped parsley",
      "1 tablespoon lemon juice"
    ]}
  ],
  steps: [
    "Melt the butter in a saucepan over medium. Add the orzo and toast 3 minutes, stirring, until lightly golden.",
    "Add the garlic and cook 1 minute.",
    "Pour in the broth and bring to a simmer. Cook uncovered 10 to 12 minutes, stirring often, until the orzo is tender and most of the liquid has been absorbed.",
    "Take it off the heat and stir in the Parmesan, cream, salt, and pepper.",
    "Add the lemon juice and parsley. Serve immediately. It thickens quickly as it sits."
  ],
  tips: [
    "Stir often. Orzo cooked in a small amount of liquid sticks to the bottom of the pan if you leave it.",
    "If it stiffens up before serving, loosen it with a splash of hot broth."
  ],
  makeAhead: null
},

{
  id: "maple-roasted-sweet-potatoes",
  title: "Maple Roasted Sweet Potatoes",
  blurb: "Caramelized edges, soft centers, and just enough maple to make it feel like a treat.",
  emoji: "🍠", protein: "Vegetarian", cuisine: "American",
  type: "side", sideType: "starch", pairsWith: ["Chicken", "Pork", "Turkey", "Beef", "Fish"],
  totalTime: 40, activeTime: 10, difficulty: "Easy", servings: 6,
  plate: { protein: null, starch: "Sweet potatoes", veg: null },
  nutrition: { calories: 235, protein: 3, carbs: 40, fat: 8, fiber: 6 },
  tags: ["gluten-free", "dairy-free", "kid-friendly", "veggie-forward", "budget"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Sweet potatoes", items: [
      "3 lb sweet potatoes, cut into 1-inch cubes",
      "3 tablespoons olive oil",
      "3 tablespoons maple syrup",
      "1 teaspoon smoked paprika",
      "1/2 teaspoon cinnamon",
      "1 1/2 teaspoons kosher salt",
      "1/4 teaspoon cayenne",
      "2 tablespoons chopped sage or parsley"
    ]}
  ],
  steps: [
    "Heat the oven to 425F.",
    "Toss the sweet potato cubes with the oil, paprika, cinnamon, salt, and cayenne.",
    "Spread across two sheet pans in a single layer, leaving space between the pieces.",
    "Roast 20 minutes, then flip and roast 12 minutes more.",
    "Drizzle with the maple syrup, toss on the pan, and roast a final 5 minutes to caramelize it.",
    "Scatter with herbs and serve."
  ],
  tips: [
    "Add the maple syrup near the end. From the start it would burn long before the potatoes are cooked.",
    "The cayenne isn't enough to taste hot. It keeps the sweetness in check."
  ],
  makeAhead: "Cut the potatoes a day ahead."
},

{
  id: "potato-gratin",
  title: "Potato Gratin",
  blurb: "Thin potatoes baked in cream and garlic under a browned, bubbling cheese crust.",
  emoji: "🧀", protein: "Vegetarian", cuisine: "French",
  type: "side", sideType: "starch", pairsWith: ["Beef", "Lamb", "Chicken", "Pork"],
  totalTime: 90, activeTime: 25, difficulty: "Medium", servings: 8,
  plate: { protein: null, starch: "Potatoes", veg: null },
  nutrition: { calories: 385, protein: 11, carbs: 32, fat: 25, fiber: 3 },
  tags: ["comfort", "make-ahead", "special-occasion", "gluten-free", "kid-friendly"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Gratin", items: [
      "3 1/2 lb Yukon gold potatoes, peeled and sliced 1/8 inch thick",
      "2 cups heavy cream",
      "1 cup whole milk",
      "5 cloves garlic, smashed",
      "3 sprigs thyme",
      "1/2 teaspoon nutmeg",
      "2 teaspoons kosher salt",
      "1/2 teaspoon black pepper",
      "2 cups shredded Gruyere",
      "1/2 cup grated Parmesan",
      "2 tablespoons butter"
    ]}
  ],
  steps: [
    "Heat the oven to 375F and butter a 9x13 baking dish.",
    "Slice the potatoes thinly and evenly. A mandoline makes this much easier. Don't rinse them; the surface starch helps thicken the cream.",
    "Put the cream, milk, garlic, thyme, nutmeg, salt, and pepper in a wide pot. Add the potato slices and bring to a gentle simmer.",
    "Cook 8 minutes, stirring gently, until the cream thickens noticeably and the potatoes are partly tender. This step is what guarantees they cook through evenly.",
    "Discard the thyme sprigs. Transfer half the potatoes to the dish, spreading them level, and scatter over half the Gruyere.",
    "Add the rest of the potatoes and all the remaining cream, then top with the rest of the Gruyere and the Parmesan. Dot with butter.",
    "Bake 45 to 55 minutes, until deep golden and bubbling at the edges and a knife meets no resistance.",
    "Rest 20 minutes before serving so it sets enough to cut."
  ],
  tips: [
    "Simmering the potatoes in the cream first is the single technique that prevents the dreaded crunchy-potato gratin.",
    "Don't rinse the sliced potatoes. That starch is doing the thickening."
  ],
  makeAhead: "Assemble a day ahead and bake from cold, adding 20 minutes."
},

{
  id: "cilantro-lime-rice",
  title: "Cilantro Lime Rice",
  blurb: "Fluffy rice with a whole lot of lime and herbs. The base of every burrito bowl.",
  emoji: "🍚", protein: "Vegetarian", cuisine: "Mexican",
  type: "side", sideType: "starch", pairsWith: ["Chicken", "Beef", "Pork", "Fish", "Shrimp", "Vegetarian"],
  totalTime: 30, activeTime: 10, difficulty: "Easy", servings: 6,
  plate: { protein: null, starch: "Rice", veg: null },
  nutrition: { calories: 235, protein: 4, carbs: 44, fat: 5, fiber: 1 },
  tags: ["30-minutes", "gluten-free", "dairy-free", "budget", "kid-friendly", "make-ahead"],
  seasons: ["all"],
  ingredients: [
    { group: "Rice", items: [
      "1 1/2 cups long-grain white rice",
      "2 1/4 cups water or broth",
      "1 tablespoon neutral oil",
      "1 teaspoon kosher salt",
      "1 bay leaf"
    ]},
    { group: "To finish", items: [
      "3 tablespoons lime juice",
      "1 teaspoon lime zest",
      "3/4 cup finely chopped cilantro",
      "1 tablespoon olive oil"
    ]}
  ],
  steps: [
    "Rinse the rice under cold water until it runs clear. This removes surface starch and keeps the grains separate.",
    "Combine the rice, water, oil, salt, and bay leaf in a saucepan. Bring to a boil.",
    "Reduce to the lowest heat, cover, and cook 18 minutes without lifting the lid.",
    "Take off the heat and rest, covered, 10 minutes.",
    "Remove the bay leaf and fluff with a fork.",
    "Fold in the lime juice, zest, cilantro, and olive oil. Taste for salt and lime."
  ],
  tips: [
    "Add the lime and cilantro after cooking, not during. Heat destroys both.",
    "Use more cilantro than you think you need. It should look green, not white with flecks."
  ],
  makeAhead: "Keeps three days; refresh with a squeeze of lime when reheating."
},

{
  id: "buttered-egg-noodles",
  title: "Buttered Egg Noodles",
  blurb: "The five-minute side that catches gravy better than anything else.",
  emoji: "🍜", protein: "Vegetarian", cuisine: "American",
  type: "side", sideType: "starch", pairsWith: ["Beef", "Chicken", "Pork", "Turkey"],
  totalTime: 15, activeTime: 15, difficulty: "Easy", servings: 6,
  plate: { protein: null, starch: "Egg noodles", veg: null },
  nutrition: { calories: 285, protein: 8, carbs: 42, fat: 10, fiber: 2 },
  tags: ["30-minutes", "kid-friendly", "budget", "comfort"],
  seasons: ["all"],
  ingredients: [
    { group: "Noodles", items: [
      "12 oz wide egg noodles",
      "4 tablespoons butter",
      "1 1/4 teaspoons kosher salt",
      "1/2 teaspoon black pepper",
      "3 tablespoons chopped parsley or dill",
      "1/4 cup grated Parmesan, optional"
    ]}
  ],
  steps: [
    "Bring a large pot of well-salted water to a boil.",
    "Cook the noodles according to the package, usually 7 to 8 minutes, until tender.",
    "Reserve 1/2 cup of the cooking water, then drain.",
    "Return the noodles to the warm pot with the butter and toss until it melts and coats every strand, adding a splash of the cooking water to help it cling.",
    "Season with salt and pepper, stir in the herbs and Parmesan, and serve immediately."
  ],
  tips: [
    "Salt the water. It's the only chance to season the noodles from the inside.",
    "A splash of the starchy cooking water makes the butter coat rather than pool."
  ],
  makeAhead: null
},

{
  id: "herbed-couscous",
  title: "Herbed Couscous",
  blurb: "Ten minutes, no cooking, and a pile of fresh herbs. The easiest starch on the list.",
  emoji: "🌿", protein: "Vegetarian", cuisine: "Moroccan",
  type: "side", sideType: "starch", pairsWith: ["Chicken", "Lamb", "Fish", "Shrimp", "Vegetarian"],
  totalTime: 15, activeTime: 10, difficulty: "Easy", servings: 6,
  plate: { protein: null, starch: "Couscous", veg: null },
  nutrition: { calories: 245, protein: 7, carbs: 42, fat: 6, fiber: 3 },
  tags: ["30-minutes", "budget", "make-ahead", "no-cook", "veggie-forward"],
  seasons: ["all"],
  ingredients: [
    { group: "Couscous", items: [
      "1 1/2 cups couscous",
      "1 3/4 cups boiling chicken or vegetable broth",
      "2 tablespoons butter or olive oil",
      "1 teaspoon kosher salt"
    ]},
    { group: "To finish", items: [
      "1/2 cup chopped parsley",
      "1/4 cup chopped mint",
      "2 scallions, sliced",
      "2 tablespoons lemon juice",
      "2 tablespoons olive oil",
      "1/3 cup toasted almonds, optional"
    ]}
  ],
  steps: [
    "Put the couscous, butter, and salt in a heatproof bowl.",
    "Pour the boiling broth over, stir once, and cover tightly with a plate or foil.",
    "Leave 10 minutes without disturbing it.",
    "Uncover and fluff thoroughly with a fork, breaking up every clump.",
    "Fold in the herbs, scallions, lemon juice, olive oil, and almonds. Taste for salt."
  ],
  tips: [
    "Couscous isn't a grain that needs boiling. It's tiny pasta that only needs hot liquid and a lid.",
    "Fluff it with a fork. Stirring with a spoon compacts it into a paste."
  ],
  makeAhead: "Good warm or at room temperature; keeps three days."
},

{
  id: "creamy-polenta",
  title: "Creamy Parmesan Polenta",
  blurb: "Soft, buttery, and cheesy. The best possible landing pad for anything braised.",
  emoji: "🌽", protein: "Vegetarian", cuisine: "Italian",
  type: "side", sideType: "starch", pairsWith: ["Beef", "Chicken", "Pork", "Lamb", "Shrimp"],
  totalTime: 40, activeTime: 30, difficulty: "Easy", servings: 6,
  plate: { protein: null, starch: "Polenta", veg: null },
  nutrition: { calories: 305, protein: 11, carbs: 34, fat: 15, fiber: 2 },
  tags: ["gluten-free", "comfort", "budget", "kid-friendly"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Polenta", items: [
      "1 1/2 cups coarse polenta or cornmeal",
      "5 cups chicken or vegetable broth",
      "1 cup whole milk",
      "1 1/2 teaspoons kosher salt",
      "4 tablespoons butter",
      "1 cup grated Parmesan",
      "1/2 teaspoon black pepper"
    ]}
  ],
  steps: [
    "Bring the broth and milk to a simmer in a heavy pot.",
    "Pour the polenta in slowly in a thin stream, whisking constantly. Adding it all at once guarantees lumps.",
    "Add the salt and reduce the heat to as low as it will go.",
    "Cook 30 minutes, whisking every 5 minutes and scraping the bottom and corners of the pot.",
    "The polenta is ready when it pulls away from the sides slightly and no longer tastes gritty.",
    "Take it off the heat and beat in the butter, Parmesan, and pepper. Serve immediately."
  ],
  tips: [
    "Instant polenta takes 5 minutes and is fine on a weeknight. Coarse polenta is better and takes 30.",
    "It stiffens as it cools. Loosen it with hot broth or milk right before serving."
  ],
  makeAhead: "Leftover polenta sets firm. Cut it into slabs and pan-fry them in butter."
},

{
  id: "coconut-rice",
  title: "Coconut Rice",
  blurb: "Rich, faintly sweet rice that cools down anything spicy sitting next to it.",
  emoji: "🥥", protein: "Vegetarian", cuisine: "Thai",
  type: "side", sideType: "starch", pairsWith: ["Chicken", "Fish", "Shrimp", "Pork", "Vegetarian"],
  totalTime: 30, activeTime: 8, difficulty: "Easy", servings: 6,
  plate: { protein: null, starch: "Rice", veg: null },
  nutrition: { calories: 305, protein: 5, carbs: 46, fat: 11, fiber: 1 },
  tags: ["30-minutes", "gluten-free", "dairy-free", "budget", "kid-friendly"],
  seasons: ["all"],
  ingredients: [
    { group: "Rice", items: [
      "1 1/2 cups jasmine rice",
      "1 (14 oz) can coconut milk",
      "3/4 cup water",
      "1 teaspoon kosher salt",
      "1 tablespoon sugar",
      "1 stalk lemongrass, bruised, optional",
      "2 tablespoons toasted coconut flakes"
    ]}
  ],
  steps: [
    "Rinse the rice until the water runs clear, then drain well.",
    "Combine the rice, coconut milk, water, salt, sugar, and lemongrass in a saucepan.",
    "Bring to a gentle boil, stirring once so nothing sticks to the bottom.",
    "Reduce to the lowest heat, cover, and cook 18 minutes.",
    "Rest off the heat, still covered, for 10 minutes.",
    "Remove the lemongrass, fluff with a fork, and finish with toasted coconut flakes."
  ],
  tips: [
    "Coconut milk scorches more easily than water. Keep the heat low and don't stir after it comes to a boil.",
    "Full-fat coconut milk gives a much better texture than the light version."
  ],
  makeAhead: "Best fresh, but reheats with a splash of coconut milk."
},

/* ----------------------------------------------------------------- salads -- */

{
  id: "simple-green-salad",
  title: "Simple Green Salad with House Vinaigrette",
  blurb: "The salad that goes with everything, and a mustard vinaigrette worth memorizing.",
  emoji: "🥗", protein: "Vegetarian", cuisine: "French",
  type: "side", sideType: "salad", pairsWith: ["Chicken", "Beef", "Pork", "Fish", "Shrimp", "Lamb", "Turkey", "Eggs", "Vegetarian"],
  totalTime: 10, activeTime: 10, difficulty: "Easy", servings: 6,
  plate: { protein: null, starch: null, veg: "Mixed greens" },
  nutrition: { calories: 135, protein: 2, carbs: 5, fat: 13, fiber: 2 },
  tags: ["30-minutes", "no-cook", "gluten-free", "dairy-free", "veggie-forward", "budget"],
  seasons: ["all"],
  ingredients: [
    { group: "Vinaigrette", items: [
      "1/2 cup olive oil",
      "3 tablespoons red wine vinegar",
      "1 tablespoon Dijon mustard",
      "1 small shallot, minced",
      "1 teaspoon honey",
      "3/4 teaspoon kosher salt",
      "1/4 teaspoon black pepper"
    ]},
    { group: "Salad", items: [
      "10 oz mixed greens or butter lettuce",
      "1/2 cucumber, thinly sliced",
      "1/4 red onion, thinly sliced",
      "1/4 cup chopped chives or parsley"
    ]}
  ],
  steps: [
    "Put all the vinaigrette ingredients in a jar and shake hard for 20 seconds, until thickened and creamy. The mustard is what holds the oil and vinegar together.",
    "Taste the dressing on a leaf, not from a spoon. It should taste slightly too sharp on its own.",
    "Put the greens, cucumber, and onion in a wide bowl.",
    "Drizzle over about half the dressing and toss gently with your hands, adding more only if the leaves still look dry.",
    "Scatter with herbs and serve immediately."
  ],
  tips: [
    "Dress the salad at the last possible moment. Dressed greens wilt within a few minutes.",
    "Use less dressing than you think. Leaves should be lightly coated, never sitting in a puddle."
  ],
  makeAhead: "The vinaigrette keeps two weeks in the fridge. Shake before using."
},

{
  id: "caesar-salad",
  title: "Caesar Salad",
  blurb: "Crisp romaine, garlicky croutons, and a proper anchovy dressing.",
  emoji: "🥬", protein: "Vegetarian", cuisine: "American",
  type: "side", sideType: "salad", pairsWith: ["Chicken", "Beef", "Fish", "Shrimp"],
  totalTime: 25, activeTime: 20, difficulty: "Easy", servings: 6,
  plate: { protein: null, starch: "Croutons", veg: "Romaine" },
  nutrition: { calories: 245, protein: 8, carbs: 14, fat: 18, fiber: 2 },
  tags: ["30-minutes", "veggie-forward", "comfort", "special-occasion"],
  seasons: ["all"],
  ingredients: [
    { group: "Croutons", items: [
      "4 cups torn day-old bread",
      "3 tablespoons olive oil",
      "1 clove garlic, grated",
      "1/4 teaspoon salt"
    ]},
    { group: "Dressing", items: [
      "1/2 cup mayonnaise",
      "1/3 cup grated Parmesan",
      "2 tablespoons lemon juice",
      "2 teaspoons Dijon mustard",
      "4 anchovy fillets, minced",
      "1 clove garlic, grated",
      "1 teaspoon Worcestershire sauce",
      "2 tablespoons water",
      "1/2 teaspoon black pepper"
    ]},
    { group: "Salad", items: [
      "3 romaine hearts, chopped",
      "1/2 cup shaved Parmesan"
    ]}
  ],
  steps: [
    "Heat the oven to 400F. Toss the bread with the oil, garlic, and salt and bake 12 minutes, until golden and crunchy.",
    "Whisk all the dressing ingredients together until smooth. Taste it. It should be sharp, salty, and assertive.",
    "Make sure the romaine is completely dry. Wet leaves repel dressing and dilute it.",
    "Toss the romaine with about two thirds of the dressing.",
    "Add the croutons and toss briefly, then finish with shaved Parmesan and more black pepper."
  ],
  tips: [
    "The anchovies don't taste fishy. They taste like Caesar dressing. Without them it's just garlic mayonnaise.",
    "Dry the lettuce in a salad spinner or with a towel. It's the most common reason a Caesar tastes watery."
  ],
  makeAhead: "The dressing keeps five days and the croutons three."
},

{
  id: "greek-salad",
  title: "Greek Salad",
  blurb: "No lettuce, just tomatoes, cucumber, olives, and a slab of feta with oregano and oil.",
  emoji: "🫒", protein: "Vegetarian", cuisine: "Greek",
  type: "side", sideType: "salad", pairsWith: ["Chicken", "Lamb", "Fish", "Shrimp", "Beef"],
  totalTime: 15, activeTime: 15, difficulty: "Easy", servings: 6,
  plate: { protein: "Feta", starch: null, veg: "Tomato, cucumber, pepper" },
  nutrition: { calories: 215, protein: 6, carbs: 11, fat: 17, fiber: 3 },
  tags: ["30-minutes", "no-cook", "gluten-free", "veggie-forward", "budget", "make-ahead"],
  seasons: ["summer"],
  ingredients: [
    { group: "Salad", items: [
      "4 ripe tomatoes, cut into wedges",
      "1 English cucumber, cut into thick half-moons",
      "1 green bell pepper, sliced",
      "1/2 red onion, thinly sliced",
      "3/4 cup kalamata olives",
      "8 oz block feta"
    ]},
    { group: "Dressing", items: [
      "1/3 cup good olive oil",
      "2 tablespoons red wine vinegar",
      "1 1/2 teaspoons dried oregano",
      "1 teaspoon kosher salt",
      "1/2 teaspoon black pepper"
    ]}
  ],
  steps: [
    "Put the tomatoes, cucumber, pepper, and onion in a wide shallow bowl.",
    "Whisk the olive oil, vinegar, half the oregano, salt, and pepper together and pour it over.",
    "Toss gently and let the salad sit 10 minutes so the tomatoes release some juice into the dressing.",
    "Scatter the olives over the top.",
    "Lay the whole block of feta on top, don't crumble it, and sprinkle with the remaining oregano and a final drizzle of olive oil."
  ],
  tips: [
    "A whole block of feta on top is how it's served in Greece, and it tastes creamier than pre-crumbled feta.",
    "This only works with ripe tomatoes. In winter, use cherry tomatoes instead."
  ],
  makeAhead: "Chop the vegetables an hour ahead but dress it just before serving."
},

{
  id: "cucumber-tomato-salad",
  title: "Cucumber Tomato Salad",
  blurb: "Cool, sharp, and crunchy. Ten minutes and it lifts any heavy plate.",
  emoji: "🥒", protein: "Vegetarian", cuisine: "Mediterranean",
  type: "side", sideType: "salad", pairsWith: ["Chicken", "Beef", "Pork", "Lamb", "Fish", "Shrimp", "Vegetarian"],
  totalTime: 15, activeTime: 15, difficulty: "Easy", servings: 6,
  plate: { protein: null, starch: null, veg: "Cucumber and tomato" },
  nutrition: { calories: 115, protein: 2, carbs: 9, fat: 9, fiber: 2 },
  tags: ["30-minutes", "no-cook", "gluten-free", "dairy-free", "veggie-forward", "budget", "low-carb"],
  seasons: ["summer"],
  ingredients: [
    { group: "Salad", items: [
      "2 English cucumbers, sliced",
      "1 1/2 lb tomatoes, cut into chunks",
      "1/2 red onion, very thinly sliced",
      "1/3 cup chopped dill",
      "1/4 cup chopped parsley"
    ]},
    { group: "Dressing", items: [
      "1/4 cup olive oil",
      "3 tablespoons red wine vinegar",
      "1 clove garlic, grated",
      "1 teaspoon honey",
      "1 teaspoon kosher salt",
      "1/2 teaspoon black pepper"
    ]}
  ],
  steps: [
    "Soak the sliced onion in cold water for 10 minutes, then drain. This takes the harsh raw bite out of it.",
    "Whisk all the dressing ingredients together.",
    "Combine the cucumber, tomatoes, and drained onion in a bowl.",
    "Pour over the dressing, add the herbs, and toss.",
    "Let it sit 10 minutes before serving so the flavors settle, then toss again."
  ],
  tips: [
    "Soaking sliced raw onion in cold water is a small step that makes a real difference to how it tastes.",
    "Salt the tomatoes lightly first if they're watery, and pour off the liquid before dressing."
  ],
  makeAhead: "Best within an hour of dressing, though it keeps a day."
},

{
  id: "kale-apple-walnut-salad",
  title: "Kale, Apple and Walnut Salad",
  blurb: "A sturdy salad that gets better as it sits, with sharp cheese and a maple dressing.",
  emoji: "🍎", protein: "Vegetarian", cuisine: "American",
  type: "side", sideType: "salad", pairsWith: ["Chicken", "Pork", "Turkey", "Beef", "Fish"],
  totalTime: 20, activeTime: 20, difficulty: "Easy", servings: 6,
  plate: { protein: null, starch: null, veg: "Kale and apple" },
  nutrition: { calories: 265, protein: 7, carbs: 18, fat: 19, fiber: 4 },
  tags: ["30-minutes", "no-cook", "make-ahead", "gluten-free", "veggie-forward", "special-occasion"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Salad", items: [
      "2 large bunches kale, stems removed and leaves thinly sliced",
      "2 crisp apples, thinly sliced",
      "3/4 cup toasted walnuts, chopped",
      "3/4 cup shaved Parmesan or crumbled blue cheese",
      "1/2 cup dried cranberries"
    ]},
    { group: "Dressing", items: [
      "1/3 cup olive oil",
      "3 tablespoons apple cider vinegar",
      "2 tablespoons maple syrup",
      "1 tablespoon Dijon mustard",
      "1 clove garlic, grated",
      "3/4 teaspoon kosher salt"
    ]}
  ],
  steps: [
    "Strip the kale leaves from the stems and slice them into thin ribbons.",
    "Whisk the dressing ingredients together in a jar.",
    "Put the kale in a large bowl, pour over half the dressing, and massage it with your hands for a full minute. The leaves will darken, soften, and shrink noticeably. This is what makes raw kale pleasant to eat.",
    "Let it sit 10 minutes.",
    "Add the apples, walnuts, cheese, and cranberries with the remaining dressing and toss.",
    "Taste for salt and serve."
  ],
  tips: [
    "Massaging the kale isn't optional. Unmassaged raw kale is tough and bitter.",
    "This is the rare salad that holds up dressed, so it's a good one to bring somewhere."
  ],
  makeAhead: "Keeps two days dressed and stays crisp."
},

{
  id: "creamy-coleslaw",
  title: "Creamy Coleslaw",
  blurb: "Crunchy, tangy, and not too sweet. The thing every sandwich and barbecue plate needs.",
  emoji: "🥬", protein: "Vegetarian", cuisine: "American",
  type: "side", sideType: "salad", pairsWith: ["Pork", "Chicken", "Beef", "Fish", "Shrimp"],
  totalTime: 20, activeTime: 20, difficulty: "Easy", servings: 8,
  plate: { protein: null, starch: null, veg: "Cabbage and carrot" },
  nutrition: { calories: 175, protein: 2, carbs: 12, fat: 14, fiber: 3 },
  tags: ["30-minutes", "no-cook", "make-ahead", "gluten-free", "budget", "kid-friendly", "veggie-forward"],
  seasons: ["summer"],
  ingredients: [
    { group: "Slaw", items: [
      "1 small head green cabbage, finely shredded",
      "1/4 head red cabbage, finely shredded",
      "3 carrots, grated",
      "4 scallions, thinly sliced",
      "1 teaspoon kosher salt"
    ]},
    { group: "Dressing", items: [
      "3/4 cup mayonnaise",
      "3 tablespoons apple cider vinegar",
      "1 tablespoon Dijon mustard",
      "2 tablespoons sugar",
      "1 teaspoon celery seed",
      "1/2 teaspoon black pepper",
      "1/2 teaspoon kosher salt"
    ]}
  ],
  steps: [
    "Toss the shredded cabbage with the teaspoon of salt in a colander and leave it 15 minutes over the sink.",
    "Squeeze out the released water with your hands. This is what keeps the slaw from turning into a soupy mess an hour later.",
    "Whisk all the dressing ingredients together.",
    "Combine the drained cabbage, carrots, and scallions in a large bowl and pour over the dressing.",
    "Toss thoroughly and refrigerate at least 30 minutes before serving.",
    "Taste and adjust with more vinegar for sharpness or sugar for sweetness."
  ],
  tips: [
    "Salting and draining the cabbage first is the difference between coleslaw that holds up and coleslaw that goes watery.",
    "It improves after an hour in the fridge as the flavors settle."
  ],
  makeAhead: "Better made 2 hours ahead; keeps three days."
},

{
  id: "caprese-salad",
  title: "Caprese Salad",
  blurb: "Tomatoes, mozzarella, basil, and good olive oil. Nothing to hide behind, so use ripe tomatoes.",
  emoji: "🍅", protein: "Vegetarian", cuisine: "Italian",
  type: "side", sideType: "salad", pairsWith: ["Chicken", "Beef", "Fish", "Shrimp", "Pork"],
  totalTime: 10, activeTime: 10, difficulty: "Easy", servings: 4,
  plate: { protein: "Mozzarella", starch: null, veg: "Tomatoes and basil" },
  nutrition: { calories: 265, protein: 13, carbs: 8, fat: 21, fiber: 2 },
  tags: ["30-minutes", "no-cook", "gluten-free", "veggie-forward", "special-occasion", "low-carb"],
  seasons: ["summer"],
  ingredients: [
    { group: "Salad", items: [
      "1 1/2 lb ripe tomatoes, thickly sliced",
      "1 lb fresh mozzarella, sliced",
      "1 cup basil leaves",
      "1/4 cup good extra-virgin olive oil",
      "1 tablespoon balsamic vinegar or glaze",
      "1 teaspoon flaky salt",
      "1/2 teaspoon black pepper"
    ]}
  ],
  steps: [
    "Take the mozzarella out of the fridge 30 minutes ahead. Cold cheese is rubbery and tastes of nothing.",
    "Slice the tomatoes and lay them on a platter. Season them with half the salt and let them sit 5 minutes.",
    "Layer the mozzarella slices in among the tomatoes, overlapping them.",
    "Tuck the basil leaves throughout. Tear the large ones rather than cutting them, which bruises less.",
    "Drizzle generously with olive oil, then the balsamic, and finish with the remaining flaky salt and black pepper."
  ],
  tips: [
    "This is a four-ingredient dish, so each one has to be good. Out-of-season tomatoes make a sad caprese.",
    "Salt the tomatoes a few minutes early. It draws out juice that mixes with the oil into a light dressing."
  ],
  makeAhead: null
},

/* ----------------------------------------------------------------- breads -- */

{
  id: "garlic-bread",
  title: "Proper Garlic Bread",
  blurb: "Crisp on the outside, soft and buttery inside, with real garlic and herbs.",
  emoji: "🥖", protein: "Vegetarian", cuisine: "Italian",
  type: "side", sideType: "bread", pairsWith: ["Beef", "Chicken", "Pork", "Fish", "Shrimp", "Vegetarian"],
  totalTime: 25, activeTime: 10, difficulty: "Easy", servings: 8,
  plate: { protein: null, starch: "Bread", veg: null },
  nutrition: { calories: 265, protein: 6, carbs: 28, fat: 15, fiber: 1 },
  tags: ["30-minutes", "kid-friendly", "budget", "comfort"],
  seasons: ["all"],
  ingredients: [
    { group: "Bread", items: [
      "1 large baguette or ciabatta loaf, halved lengthwise",
      "8 tablespoons butter, softened",
      "6 cloves garlic, grated",
      "1/3 cup grated Parmesan",
      "1/4 cup chopped parsley",
      "1/2 teaspoon kosher salt",
      "1/4 teaspoon red pepper flakes"
    ]}
  ],
  steps: [
    "Heat the oven to 400F.",
    "Mash the softened butter with the garlic, Parmesan, parsley, salt, and pepper flakes until completely combined.",
    "Spread it thickly over both cut halves, right to the edges. The edges are where it burns if they're bare.",
    "Put the halves cut side up on a sheet pan and bake 12 minutes, until the butter is bubbling and the edges are golden.",
    "Switch to the broiler for 1 to 2 minutes for a browned top, watching it constantly.",
    "Cut into thick slices and serve hot."
  ],
  tips: [
    "Grate the garlic rather than chopping it. Chopped pieces scorch into bitter specks; grated garlic melts into the butter.",
    "Don't wrap it in foil. Foil steams the bread soft when the whole point is crunch."
  ],
  makeAhead: "The garlic butter keeps two weeks in the fridge and freezes for months."
},

{
  id: "buttermilk-biscuits",
  title: "Buttermilk Biscuits",
  blurb: "Tall, flaky, and pulling apart in layers.",
  emoji: "🥐", protein: "Vegetarian", cuisine: "Southern",
  type: "side", sideType: "bread", pairsWith: ["Chicken", "Pork", "Beef", "Turkey"],
  totalTime: 35, activeTime: 20, difficulty: "Medium", servings: 8,
  plate: { protein: null, starch: "Biscuits", veg: null },
  nutrition: { calories: 285, protein: 5, carbs: 32, fat: 15, fiber: 1 },
  tags: ["comfort", "kid-friendly", "budget", "make-ahead", "30-minutes"],
  seasons: ["all"],
  ingredients: [
    { group: "Biscuits", items: [
      "3 cups all-purpose flour",
      "1 tablespoon baking powder",
      "1 teaspoon baking soda",
      "1 tablespoon sugar",
      "1 1/2 teaspoons kosher salt",
      "12 tablespoons very cold butter, cubed",
      "1 1/4 cups cold buttermilk",
      "2 tablespoons melted butter for brushing"
    ]}
  ],
  steps: [
    "Heat the oven to 450F. Freeze the cubed butter for 10 minutes first. cold butter is the entire secret.",
    "Whisk the flour, baking powder, baking soda, sugar, and salt together.",
    "Cut in the cold butter with your fingertips or a pastry cutter until the largest pieces are the size of peas. Don't overwork it; visible butter pieces become steam pockets, which become layers.",
    "Pour in the cold buttermilk and stir with a fork just until a shaggy dough forms. It should look undermixed.",
    "Tip onto a floured surface and pat into a rectangle. Fold it in thirds like a letter, then pat out and fold again. Repeat once more. Three folds total.",
    "Pat to 1 inch thick and cut with a floured round cutter, pressing straight down without twisting. Twisting seals the edges and stops them rising.",
    "Set them on a sheet pan with sides touching, brush the tops with melted butter, and bake 14 to 16 minutes until tall and golden."
  ],
  tips: [
    "Everything cold, and handle the dough as little as you can. Warm, overworked dough gives you hockey pucks.",
    "Biscuits placed with sides touching support each other and rise higher than ones spread apart."
  ],
  makeAhead: "Freeze cut raw biscuits on a tray, then bag them. Bake from frozen with 4 extra minutes."
},

{
  id: "skillet-cornbread",
  title: "Skillet Cornbread",
  blurb: "Crisp brown crust from a hot cast-iron pan, tender and just barely sweet inside.",
  emoji: "🌽", protein: "Vegetarian", cuisine: "Southern",
  type: "side", sideType: "bread", pairsWith: ["Beef", "Pork", "Chicken", "Turkey", "Vegetarian"],
  totalTime: 40, activeTime: 12, difficulty: "Easy", servings: 8,
  plate: { protein: null, starch: "Cornbread", veg: null },
  nutrition: { calories: 265, protein: 6, carbs: 34, fat: 12, fiber: 2 },
  tags: ["comfort", "kid-friendly", "budget"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Cornbread", items: [
      "1 1/2 cups yellow cornmeal",
      "1 cup all-purpose flour",
      "3 tablespoons sugar",
      "1 tablespoon baking powder",
      "1 teaspoon baking soda",
      "1 1/2 teaspoons kosher salt",
      "2 cups buttermilk",
      "2 eggs",
      "6 tablespoons butter, melted",
      "3 tablespoons butter or bacon fat for the pan"
    ]}
  ],
  steps: [
    "Put a 10-inch cast-iron skillet in the oven and heat it to 425F. The pan must be hot before the batter goes in.",
    "Whisk the cornmeal, flour, sugar, baking powder, baking soda, and salt together.",
    "In another bowl, whisk the buttermilk, eggs, and melted butter.",
    "Pour the wet into the dry and stir just until combined. A few lumps are fine. Overmixing makes it tough.",
    "Take the hot skillet out and add the 3 tablespoons of butter, swirling until it melts and foams.",
    "Pour the batter in; it should sizzle audibly at the edges. That sizzle is your crust forming.",
    "Bake 22 to 25 minutes, until golden and a skewer comes out clean.",
    "Rest 10 minutes, then turn out or cut into wedges in the pan."
  ],
  tips: [
    "A screaming hot, well-greased pan is what gives cornbread its signature crunchy edge.",
    "For a savory Southern-style version, cut the sugar to one tablespoon."
  ],
  makeAhead: "Best the day it's made; leftovers are excellent toasted in butter."
},

/* --------------------------------------------------------------- desserts -- */

{
  id: "apple-crisp",
  title: "Apple Crisp",
  blurb: "Soft cinnamon apples under a buttery oat crumble. The easiest good dessert there is.",
  emoji: "🍎", protein: "Vegetarian", cuisine: "American",
  type: "side", sideType: "dessert",
  totalTime: 65, activeTime: 20, difficulty: "Easy", servings: 8,
  plate: { protein: null, starch: "Oat topping", veg: "Apples" },
  nutrition: { calories: 385, protein: 4, carbs: 58, fat: 16, fiber: 5 },
  tags: ["dessert", "comfort", "make-ahead", "kid-friendly", "budget"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Filling", items: [
      "3 lb apples, peeled and sliced 1/2 inch thick",
      "1/3 cup granulated sugar",
      "2 tablespoons all-purpose flour",
      "2 tablespoons lemon juice",
      "1 1/2 teaspoons cinnamon",
      "1/4 teaspoon nutmeg",
      "1/4 teaspoon salt"
    ]},
    { group: "Crisp topping", items: [
      "1 cup old-fashioned rolled oats",
      "3/4 cup all-purpose flour",
      "3/4 cup brown sugar",
      "1/2 teaspoon cinnamon",
      "1/2 teaspoon salt",
      "10 tablespoons cold butter, cubed",
      "1/2 cup chopped pecans, optional"
    ]},
    { group: "To serve", items: [
      "Vanilla ice cream"
    ]}
  ],
  steps: [
    "Heat the oven to 375F and butter a 9x13 baking dish.",
    "Toss the sliced apples with the sugar, flour, lemon juice, cinnamon, nutmeg, and salt. Spread in the dish.",
    "For the topping, combine the oats, flour, brown sugar, cinnamon, and salt.",
    "Rub the cold butter in with your fingertips until you have a mixture of crumbs and pea-sized lumps. The lumps are what become crunchy clusters.",
    "Stir in the pecans and scatter the topping evenly over the apples.",
    "Bake 45 to 50 minutes, until the topping is deep golden and the filling bubbles thickly around the edges.",
    "Rest 15 minutes and serve warm with vanilla ice cream."
  ],
  tips: [
    "Use a mix of apples. Some that hold their shape like Honeycrisp, and some that break down like McIntosh.",
    "Wait for the bubbling. If the filling isn't bubbling at the edges, the flour hasn't thickened it yet."
  ],
  makeAhead: "Assemble a day ahead and bake fresh, or reheat leftovers at 325F."
},

{
  id: "chocolate-chip-cookies",
  title: "Brown Butter Chocolate Chip Cookies",
  blurb: "Crisp edges, chewy middles, and a deep toffee flavor from browning the butter.",
  emoji: "🍪", protein: "Vegetarian", cuisine: "American",
  type: "side", sideType: "dessert",
  totalTime: 90, activeTime: 30, difficulty: "Medium", servings: 24,
  plate: { protein: null, starch: "Cookies", veg: null },
  nutrition: { calories: 215, protein: 3, carbs: 28, fat: 11, fiber: 1 },
  tags: ["dessert", "make-ahead", "freezer-friendly", "kid-friendly", "comfort"],
  seasons: ["all"],
  ingredients: [
    { group: "Cookies", items: [
      "1 cup butter",
      "1 1/4 cups brown sugar",
      "1/2 cup granulated sugar",
      "2 eggs plus 1 egg yolk",
      "2 teaspoons vanilla extract",
      "2 3/4 cups all-purpose flour",
      "1 teaspoon baking soda",
      "1 1/2 teaspoons kosher salt",
      "12 oz chocolate chips or chopped chocolate",
      "Flaky salt for finishing"
    ]}
  ],
  steps: [
    "Melt the butter in a saucepan over medium and keep cooking 5 to 6 minutes, swirling, until the milk solids at the bottom turn golden brown and it smells like toffee. Pour it into a large bowl, scraping in every brown speck, and cool 15 minutes.",
    "Whisk in both sugars, then the eggs, extra yolk, and vanilla. Beat hard for a full minute until glossy.",
    "Whisk the flour, baking soda, and salt together, then fold into the wet mixture just until no dry flour remains.",
    "Fold in the chocolate.",
    "Chill the dough at least 1 hour, ideally 24. This is what deepens the flavor and stops the cookies spreading thin.",
    "Heat the oven to 375F and line two sheet pans with parchment.",
    "Scoop golf-ball-sized mounds and space them well apart, 8 per pan.",
    "Bake 10 to 12 minutes, until the edges are set and golden but the centers still look slightly underdone. They finish setting on the pan.",
    "Sprinkle with flaky salt and cool on the pan 5 minutes before moving them."
  ],
  tips: [
    "Pull them when the middles still look soft. Cookies baked until the center looks done come out hard.",
    "Chilling the dough overnight makes a noticeable difference. It's the one shortcut worth not taking."
  ],
  makeAhead: "Freeze scooped dough balls; bake from frozen with 2 extra minutes."
},

{
  id: "fudgy-brownies",
  title: "Fudgy Brownies",
  blurb: "Dense, glossy-topped, and chocolatey. One bowl and no mixer.",
  emoji: "🍫", protein: "Vegetarian", cuisine: "American",
  type: "side", sideType: "dessert",
  totalTime: 55, activeTime: 15, difficulty: "Easy", servings: 16,
  plate: { protein: null, starch: "Brownies", veg: null },
  nutrition: { calories: 265, protein: 4, carbs: 32, fat: 15, fiber: 2 },
  tags: ["dessert", "make-ahead", "kid-friendly", "comfort", "budget"],
  seasons: ["all"],
  ingredients: [
    { group: "Brownies", items: [
      "10 tablespoons butter",
      "8 oz dark chocolate, chopped",
      "1 1/4 cups granulated sugar",
      "1/2 cup brown sugar",
      "4 eggs",
      "2 teaspoons vanilla extract",
      "3/4 cup all-purpose flour",
      "1/3 cup cocoa powder",
      "1 teaspoon kosher salt",
      "4 oz chocolate chips"
    ]}
  ],
  steps: [
    "Heat the oven to 350F. Line a 9x9 pan with parchment, leaving overhang on two sides to lift them out later.",
    "Melt the butter and chopped chocolate together in a large bowl set over simmering water, or in short bursts in the microwave. Let it cool 5 minutes.",
    "Whisk in both sugars, then the eggs one at a time, then the vanilla.",
    "Whisk hard for a full minute. This dissolves the sugar and is what creates the shiny, crackly top.",
    "Sift in the flour, cocoa, and salt and fold just until combined. Stop as soon as the flour disappears.",
    "Fold in the chocolate chips and spread in the pan.",
    "Bake 30 to 35 minutes, until the top is set and a skewer in the center comes out with moist crumbs, not clean batter and not clean.",
    "Cool completely in the pan, at least 2 hours, before lifting out and cutting."
  ],
  tips: [
    "A clean skewer means overbaked brownies. Moist crumbs is the target.",
    "They do need to cool completely before cutting or they fall apart. Cut them with a hot, wiped knife."
  ],
  makeAhead: "Better on day two. Keep in an airtight tin for four days."
},

{
  id: "berry-crumble",
  title: "Mixed Berry Crumble",
  blurb: "Jammy berries under a crunchy almond crumble. Frozen berries work all year.",
  emoji: "🫐", protein: "Vegetarian", cuisine: "British",
  type: "side", sideType: "dessert",
  totalTime: 60, activeTime: 15, difficulty: "Easy", servings: 8,
  plate: { protein: null, starch: "Crumble topping", veg: "Berries" },
  nutrition: { calories: 345, protein: 5, carbs: 52, fat: 15, fiber: 6 },
  tags: ["dessert", "make-ahead", "kid-friendly", "budget", "freezer-friendly"],
  seasons: ["summer"],
  ingredients: [
    { group: "Filling", items: [
      "2 1/2 lb mixed berries, fresh or frozen",
      "1/2 cup granulated sugar",
      "3 tablespoons cornstarch",
      "2 tablespoons lemon juice",
      "1 teaspoon lemon zest",
      "1/4 teaspoon salt"
    ]},
    { group: "Crumble", items: [
      "1 cup all-purpose flour",
      "3/4 cup rolled oats",
      "3/4 cup brown sugar",
      "1/2 cup sliced almonds",
      "1/2 teaspoon cinnamon",
      "1/2 teaspoon salt",
      "10 tablespoons cold butter, cubed"
    ]}
  ],
  steps: [
    "Heat the oven to 375F and butter a 9x13 dish.",
    "Toss the berries with the sugar, cornstarch, lemon juice and zest, and salt. Don't thaw frozen berries first.",
    "Spread the fruit in the dish.",
    "Combine the flour, oats, brown sugar, almonds, cinnamon, and salt.",
    "Rub in the cold butter with your fingertips until you have coarse crumbs with some larger clumps.",
    "Scatter the crumble evenly over the fruit, leaving some gaps for steam to escape.",
    "Bake 45 to 50 minutes, until the topping is golden and the fruit bubbles thickly at the edges.",
    "Rest 20 minutes before serving. The filling thickens as it cools."
  ],
  tips: [
    "Cornstarch is what stops berry desserts being a purple puddle. Don't reduce it.",
    "Frozen berries need no thawing and often taste better than out-of-season fresh ones."
  ],
  makeAhead: "Assemble and freeze unbaked; bake from frozen with 15 extra minutes."
},

{
  id: "banana-bread",
  title: "Brown Sugar Banana Bread",
  blurb: "Moist, deeply banana-flavored, and better the day after you bake it.",
  emoji: "🍌", protein: "Vegetarian", cuisine: "American",
  type: "side", sideType: "dessert",
  totalTime: 75, activeTime: 15, difficulty: "Easy", servings: 10,
  plate: { protein: null, starch: "Quick bread", veg: "Bananas" },
  nutrition: { calories: 295, protein: 4, carbs: 44, fat: 12, fiber: 2 },
  tags: ["dessert", "make-ahead", "freezer-friendly", "kid-friendly", "budget", "comfort"],
  seasons: ["all"],
  ingredients: [
    { group: "Bread", items: [
      "4 very ripe bananas, mashed",
      "1/2 cup butter, melted",
      "3/4 cup brown sugar",
      "2 eggs",
      "1/4 cup sour cream or Greek yogurt",
      "2 teaspoons vanilla extract",
      "1 3/4 cups all-purpose flour",
      "1 teaspoon baking soda",
      "1 teaspoon cinnamon",
      "1 teaspoon kosher salt",
      "3/4 cup chopped walnuts or chocolate chips, optional"
    ]}
  ],
  steps: [
    "Heat the oven to 350F. Butter a 9x5 loaf pan and line it with a strip of parchment.",
    "Mash the bananas thoroughly. The blacker and softer they are, the better the bread.",
    "Whisk in the melted butter, brown sugar, eggs, sour cream, and vanilla.",
    "In another bowl, whisk the flour, baking soda, cinnamon, and salt.",
    "Fold the dry into the wet just until no streaks of flour remain. Overmixing makes it tough and rubbery.",
    "Fold in the walnuts or chocolate chips and pour into the pan.",
    "Bake 55 to 65 minutes, until a skewer in the center comes out with a few moist crumbs. Tent with foil if the top browns too fast.",
    "Cool in the pan 15 minutes, then turn out onto a rack to cool completely."
  ],
  tips: [
    "Bananas that look too far gone are exactly right. If yours are still yellow, bake them at 350F for 15 minutes to ripen them fast.",
    "Don't overmix. Fold until the flour just disappears and then stop."
  ],
  makeAhead: "Better on day two. Freezes whole or in slices for three months."
},

{
  id: "no-bake-cheesecake",
  title: "No-Bake Lemon Cheesecake",
  blurb: "Cool, tangy, and set in the fridge with no oven at all. Make it the day before.",
  emoji: "🍋", protein: "Vegetarian", cuisine: "American",
  type: "side", sideType: "dessert",
  totalTime: 260, activeTime: 25, difficulty: "Easy", servings: 10,
  plate: { protein: null, starch: "Biscuit base", veg: null },
  nutrition: { calories: 425, protein: 6, carbs: 34, fat: 30, fiber: 1 },
  tags: ["dessert", "make-ahead", "no-cook", "special-occasion", "kid-friendly"],
  seasons: ["spring", "summer"],
  ingredients: [
    { group: "Base", items: [
      "10 oz graham crackers or digestive biscuits, crushed",
      "10 tablespoons butter, melted",
      "3 tablespoons sugar",
      "1/4 teaspoon salt"
    ]},
    { group: "Filling", items: [
      "24 oz cream cheese, at room temperature",
      "1 cup powdered sugar",
      "1 1/4 cups cold heavy cream",
      "1/3 cup lemon juice",
      "2 tablespoons lemon zest",
      "2 teaspoons vanilla extract",
      "1/4 teaspoon salt"
    ]},
    { group: "To serve", items: [
      "2 cups mixed berries",
      "2 tablespoons lemon zest"
    ]}
  ],
  steps: [
    "Mix the crushed biscuits with the melted butter, sugar, and salt until it looks like wet sand.",
    "Press firmly into the base and slightly up the sides of a 9-inch springform pan. Use the flat bottom of a glass to compact it.",
    "Chill the base while you make the filling.",
    "Beat the room-temperature cream cheese with the powdered sugar until completely smooth with no lumps. Cold cream cheese will stay lumpy no matter how long you beat it.",
    "Beat in the lemon juice, zest, vanilla, and salt.",
    "In a separate bowl, whip the cold cream to stiff peaks.",
    "Fold the whipped cream into the cream cheese mixture in three additions, keeping as much air as you can.",
    "Spread over the base, smooth the top, and refrigerate at least 4 hours, ideally overnight, until firm.",
    "Release the springform, top with berries and lemon zest, and serve."
  ],
  tips: [
    "Room-temperature cream cheese and cold cream. Getting these two backwards is why no-bake cheesecakes go lumpy or refuse to set.",
    "Overnight is better than four hours. It sets firmer and slices more cleanly."
  ],
  makeAhead: "Made specifically to be prepared a day ahead. Keeps three days."
},

{
  id: "affogato",
  title: "Affogato",
  blurb: "Vanilla ice cream with hot espresso poured over it. Two ingredients, one minute.",
  emoji: "☕", protein: "Vegetarian", cuisine: "Italian",
  type: "side", sideType: "dessert",
  totalTime: 5, activeTime: 5, difficulty: "Easy", servings: 4,
  plate: { protein: null, starch: null, veg: null },
  nutrition: { calories: 235, protein: 4, carbs: 26, fat: 13, fiber: 0 },
  tags: ["dessert", "30-minutes", "no-cook", "special-occasion", "gluten-free"],
  seasons: ["all"],
  ingredients: [
    { group: "Affogato", items: [
      "4 large scoops good vanilla ice cream",
      "4 shots hot espresso, or 1 cup very strong hot coffee",
      "2 tablespoons amaretto or Frangelico, optional",
      "2 tablespoons chopped toasted hazelnuts",
      "1 oz dark chocolate, shaved"
    ]}
  ],
  steps: [
    "Chill four small glasses or cups in the freezer for 10 minutes if you have time.",
    "Put a scoop of ice cream in each glass.",
    "Brew the espresso and pour it over the ice cream immediately, at the table if you can. The melting is the whole point.",
    "Add a splash of liqueur if using.",
    "Finish with hazelnuts and shaved chocolate and serve at once with a spoon."
  ],
  tips: [
    "Make the coffee last and pour it over immediately. Coffee that has sat and cooled won't melt the ice cream.",
    "Use the best vanilla ice cream you can find. With two ingredients there's nowhere to hide."
  ],
  makeAhead: null
}

]);
