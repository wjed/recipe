/* Fish & shellfish mains. */
window.RECIPES = (window.RECIPES || []).concat([

{
  id: "sheet-pan-salmon-asparagus",
  title: "Sheet Pan Salmon with Asparagus and Potatoes",
  blurb: "The whole balanced plate on one pan in half an hour, with lemon-dill butter melting over everything.",
  emoji: "🐟", protein: "Fish", cuisine: "American",
  totalTime: 45, activeTime: 15, difficulty: "Easy", servings: 4,
  plate: { protein: "Salmon fillets", starch: "Baby potatoes", veg: "Asparagus" },
  nutrition: { calories: 545, protein: 42, carbs: 33, fat: 26, fiber: 5 },
  tags: ["sheet-pan", "one-pan", "gluten-free", "high-protein"],
  seasons: ["spring", "summer"],
  ingredients: [
    { group: "Pan", items: [
      "4 salmon fillets (6 oz each), skin on",
      "1 1/2 lb baby potatoes, halved",
      "1 lb asparagus, woody ends snapped off",
      "3 tablespoons olive oil",
      "1 1/2 teaspoons kosher salt",
      "1/2 teaspoon black pepper"
    ]},
    { group: "Lemon-dill butter", items: [
      "4 tablespoons butter, softened",
      "2 tablespoons chopped dill",
      "1 lemon, zested",
      "1 tablespoon lemon juice",
      "2 cloves garlic, grated"
    ]}
  ],
  steps: [
    "Heat the oven to 425F.",
    "Toss the potatoes with 2 tablespoons oil and half the salt. Spread cut side down on a sheet pan and roast 20 minutes.",
    "Mash all the lemon-dill butter ingredients together in a small bowl.",
    "Toss the asparagus with the remaining oil and a pinch of salt.",
    "Push the potatoes to one side. Add the asparagus and set the salmon fillets skin side down in the middle. Season the fish and dot each fillet with the lemon butter.",
    "Roast 12 to 14 minutes, until the salmon flakes at the thickest part and reads 125F to 130F for slightly translucent centers.",
    "Squeeze extra lemon over everything and serve straight from the pan."
  ],
  tips: [
    "Salmon keeps cooking after it leaves the oven. Pulling it at 125F gives you moist fish; 145F gives you chalk.",
    "The potatoes need a 20-minute head start. Everything on one pan from the beginning means raw potatoes and destroyed salmon."
  ],
  makeAhead: "Make the compound butter up to a week ahead; it is good on almost any fish or vegetable."
},

{
  id: "garlic-butter-shrimp-rice",
  title: "Garlic Butter Shrimp with Rice and Broccolini",
  blurb: "Fifteen minutes from cold pan to dinner, and the garlic butter sauce is the whole reason.",
  emoji: "🍤", protein: "Shrimp", cuisine: "American",
  totalTime: 25, activeTime: 20, difficulty: "Easy", servings: 4,
  plate: { protein: "Shrimp", starch: "Rice", veg: "Broccolini" },
  nutrition: { calories: 470, protein: 34, carbs: 48, fat: 15, fiber: 4 },
  tags: ["30-minutes", "one-pan", "high-protein", "gluten-free", "kid-friendly"],
  seasons: ["all"], karolina: true,
  ingredients: [
    { group: "Shrimp", items: [
      "1 1/2 lb large shrimp, peeled and deveined",
      "4 tablespoons butter",
      "1 tablespoon olive oil",
      "6 cloves garlic, minced",
      "1/2 teaspoon red pepper flakes",
      "1/4 cup white wine or chicken broth",
      "3 tablespoons lemon juice",
      "1/4 cup chopped parsley",
      "1 teaspoon kosher salt"
    ]},
    { group: "To serve", items: [
      "1 1/2 cups long-grain rice",
      "1 lb broccolini, trimmed",
      "1 tablespoon olive oil"
    ]}
  ],
  steps: [
    "Start the rice according to the package directions.",
    "Pat the shrimp completely dry and season with the salt. Wet shrimp steam instead of searing.",
    "Cook the broccolini in a large skillet with the oil and 1/4 cup water, covered, 4 minutes. Uncover and cook 2 minutes until the water is gone and the stems are tender. Move to a plate.",
    "Wipe the pan. Heat the olive oil and 1 tablespoon of the butter over medium-high. Add the shrimp in a single layer and cook 90 seconds a side, until just pink and opaque. Move to the plate with the broccolini.",
    "Lower the heat to medium. Add the remaining butter and the garlic and pepper flakes and cook 45 seconds - do not let the garlic brown.",
    "Add the wine and lemon juice and simmer 2 minutes, scraping the pan.",
    "Return the shrimp and broccolini, toss in the sauce for 30 seconds, add the parsley, and serve over rice."
  ],
  tips: [
    "Shrimp are done the second they curl into a loose C. A tight O means overcooked.",
    "Frozen shrimp are usually better than the thawed ones at the counter, which were frozen anyway. Thaw them under cold running water in 5 minutes."
  ],
  makeAhead: null
},

{
  id: "baked-cod-lemon-herb",
  title: "Baked Cod with Lemon and Herbs",
  blurb: "Mild, flaky, and quietly excellent - a fifteen-minute fish that even fish skeptics eat.",
  emoji: "🐠", protein: "Fish", cuisine: "Mediterranean",
  totalTime: 25, activeTime: 10, difficulty: "Easy", servings: 4,
  plate: { protein: "Cod fillets", starch: null, veg: "Cherry tomatoes" },
  nutrition: { calories: 285, protein: 36, carbs: 7, fat: 13, fiber: 2 },
  tags: ["30-minutes", "low-carb", "gluten-free", "high-protein", "kid-friendly"],
  seasons: ["all"], karolina: true,
  ingredients: [
    { group: "Fish", items: [
      "4 cod fillets (6 oz each)",
      "3 tablespoons olive oil",
      "1 pint cherry tomatoes, halved",
      "4 cloves garlic, thinly sliced",
      "1 lemon, half sliced and half juiced",
      "2 tablespoons chopped parsley",
      "1 tablespoon chopped dill",
      "1 teaspoon kosher salt",
      "1/2 teaspoon black pepper",
      "2 tablespoons butter"
    ]}
  ],
  steps: [
    "Heat the oven to 400F.",
    "Pat the cod dry and season both sides with the salt and pepper.",
    "Scatter the tomatoes and garlic in a baking dish and drizzle with 2 tablespoons of the oil.",
    "Set the fillets on top, drizzle with the remaining oil and the lemon juice, and lay a lemon slice on each fillet. Dot with the butter.",
    "Bake 12 to 15 minutes, until the fish is opaque and flakes when you press it with a fork.",
    "Scatter with the herbs and spoon the tomato-lemon pan juices over each fillet."
  ],
  tips: [
    "Cod fillets vary a lot in thickness. Start checking at 12 minutes if yours are thin.",
    "If the fillets look watery when you unwrap them, salt them and leave 10 minutes, then pat dry - it firms up the texture."
  ],
  makeAhead: null
},

{
  id: "shrimp-scampi",
  title: "Shrimp Scampi with Linguine",
  blurb: "White wine, garlic, butter, lemon. Twenty minutes and it tastes like a night out.",
  emoji: "🍝", protein: "Shrimp", cuisine: "Italian",
  totalTime: 25, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "Shrimp", starch: "Linguine", veg: "Parsley and lemon" },
  nutrition: { calories: 585, protein: 38, carbs: 62, fat: 20, fiber: 3 },
  tags: ["30-minutes", "comfort", "special-occasion"],
  seasons: ["all"],
  ingredients: [
    { group: "Everything", items: [
      "1 1/2 lb large shrimp, peeled and deveined",
      "12 oz linguine",
      "5 tablespoons butter",
      "3 tablespoons olive oil",
      "8 cloves garlic, thinly sliced",
      "1/2 teaspoon red pepper flakes",
      "3/4 cup dry white wine",
      "1/4 cup lemon juice",
      "1/2 cup chopped parsley",
      "1/2 cup grated Parmesan",
      "1 1/2 teaspoons kosher salt"
    ]}
  ],
  steps: [
    "Bring a large pot of well-salted water to a boil and cook the linguine to just under al dente. Reserve 1 1/2 cups of the pasta water before draining.",
    "Meanwhile, pat the shrimp dry and season with half the salt.",
    "Heat the oil and 2 tablespoons of the butter in a large skillet over medium-high. Cook the shrimp 90 seconds a side until just pink. Move to a plate.",
    "Lower the heat to medium. Add the garlic and pepper flakes and cook 1 minute until fragrant and barely golden.",
    "Pour in the wine and simmer 3 minutes until reduced by half.",
    "Add the lemon juice, the remaining butter, and 1 cup of the pasta water. Swirl the pan until the sauce turns creamy and slightly thick.",
    "Add the drained pasta and toss for 1 minute, letting it finish cooking in the sauce. Add more pasta water if it looks tight.",
    "Return the shrimp with the parsley and Parmesan, toss, and serve at once."
  ],
  tips: [
    "The starchy pasta water is what makes the butter and wine into an actual sauce instead of a puddle. Do not forget to save it.",
    "Cook the shrimp separately and add them back at the end, or they turn to rubber while the sauce reduces."
  ],
  makeAhead: null
},

{
  id: "blackened-salmon-bowls",
  title: "Blackened Salmon Bowls",
  blurb: "A dark, spicy crust on the salmon, cooled down by avocado and a lime-yogurt drizzle.",
  emoji: "🥑", protein: "Fish", cuisine: "American",
  totalTime: 35, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "Salmon", starch: "Brown rice", veg: "Corn, avocado, cabbage" },
  nutrition: { calories: 610, protein: 42, carbs: 52, fat: 27, fiber: 9 },
  tags: ["high-protein", "gluten-free", "veggie-forward", "leftovers", "make-ahead"],
  seasons: ["summer"],
  ingredients: [
    { group: "Blackening spice", items: [
      "4 salmon fillets (6 oz each)",
      "1 tablespoon smoked paprika",
      "1 teaspoon garlic powder",
      "1 teaspoon onion powder",
      "1 teaspoon dried thyme",
      "1/2 teaspoon cayenne",
      "1 teaspoon kosher salt",
      "1/2 teaspoon black pepper",
      "2 tablespoons neutral oil"
    ]},
    { group: "Bowls", items: [
      "3 cups cooked brown rice",
      "1 1/2 cups corn kernels",
      "2 cups shredded red cabbage",
      "1 avocado, sliced",
      "1/2 cup chopped cilantro",
      "1 lime, cut into wedges"
    ]},
    { group: "Lime yogurt", items: [
      "3/4 cup plain Greek yogurt",
      "2 tablespoons lime juice",
      "1 clove garlic, grated",
      "1/4 teaspoon salt"
    ]}
  ],
  steps: [
    "Mix all the spices together and rub them firmly onto the flesh side of the salmon fillets.",
    "Whisk the lime yogurt ingredients together.",
    "Heat the oil in a cast-iron skillet over medium-high until it just begins to smoke. Open a window - blackening makes smoke.",
    "Lay the fillets spice side down and cook 3 to 4 minutes without moving them, until the crust is very dark.",
    "Flip carefully and cook 3 minutes more, until the fish flakes at the edges.",
    "Char the corn in the same pan for 2 minutes while the salmon rests.",
    "Build the bowls: rice, cabbage, corn, salmon, avocado, cilantro, a heavy drizzle of lime yogurt, and a lime wedge."
  ],
  tips: [
    "Blackened means very dark, not burnt. The paprika and thyme are what darken, not scorched fish.",
    "Cast iron holds heat better than nonstick and gives a much better crust."
  ],
  makeAhead: "Mix a jar of the spice blend and keep it for months; it is excellent on chicken too."
},

{
  id: "fish-tacos-slaw",
  title: "Crispy Fish Tacos with Cabbage Slaw",
  blurb: "Lightly battered white fish, crunchy slaw, and a chipotle crema, in warm corn tortillas.",
  emoji: "🌮", protein: "Fish", cuisine: "Mexican",
  totalTime: 40, activeTime: 35, difficulty: "Medium", servings: 4,
  plate: { protein: "White fish", starch: "Corn tortillas", veg: "Cabbage slaw" },
  nutrition: { calories: 545, protein: 34, carbs: 48, fat: 24, fiber: 7 },
  tags: ["kid-friendly", "veggie-forward"],
  seasons: ["summer"], karolina: true,
  ingredients: [
    { group: "Fish", items: [
      "1 1/2 lb cod or halibut, cut into strips",
      "3/4 cup all-purpose flour",
      "1/2 cup cornstarch",
      "1 teaspoon baking powder",
      "1 teaspoon kosher salt",
      "1 teaspoon smoked paprika",
      "1 cup cold sparkling water or beer",
      "3 cups neutral oil for frying"
    ]},
    { group: "Slaw", items: [
      "4 cups shredded cabbage",
      "1/4 red onion, thinly sliced",
      "3 tablespoons lime juice",
      "1 tablespoon olive oil",
      "1/2 teaspoon salt",
      "1/2 cup chopped cilantro"
    ]},
    { group: "Chipotle crema", items: [
      "1/2 cup sour cream",
      "1/4 cup mayonnaise",
      "1 chipotle in adobo, minced",
      "1 tablespoon lime juice"
    ]},
    { group: "To serve", items: [
      "12 corn tortillas",
      "2 limes, cut into wedges"
    ]}
  ],
  steps: [
    "Toss the slaw ingredients together and let them sit - the cabbage softens slightly and the lime seasons it through.",
    "Stir the crema ingredients together.",
    "Whisk the flour, cornstarch, baking powder, salt, and paprika. Just before frying, whisk in the cold sparkling water until it is the texture of thin pancake batter. Lumps are fine.",
    "Heat 2 inches of oil in a heavy pot to 365F. If you have no thermometer, a drop of batter should sizzle and float immediately.",
    "Pat the fish dry, dip each strip in the batter, let the excess drip off, and lower it into the oil. Fry 3 or 4 pieces at a time for 3 to 4 minutes, until golden and crisp.",
    "Drain on a rack and salt right away.",
    "Warm the tortillas, then build: fish, slaw, crema, and a squeeze of lime."
  ],
  tips: [
    "The batter must be cold and the oil must be hot. That contrast is what makes it crisp instead of greasy.",
    "Do not crowd the pot - each piece drops the oil temperature, and cool oil means soggy batter."
  ],
  makeAhead: "Slaw and crema can be made a day ahead. Batter and fry at the last minute."
},

{
  id: "miso-glazed-salmon",
  title: "Miso Glazed Salmon with Bok Choy",
  blurb: "A sweet-savory lacquer that caramelizes under the broiler in four minutes.",
  emoji: "🍶", protein: "Fish", cuisine: "Japanese",
  totalTime: 30, activeTime: 15, difficulty: "Easy", servings: 4,
  plate: { protein: "Salmon", starch: "Rice", veg: "Bok choy" },
  nutrition: { calories: 505, protein: 40, carbs: 44, fat: 18, fiber: 3 },
  tags: ["30-minutes", "dairy-free", "high-protein", "make-ahead"],
  seasons: ["all"],
  ingredients: [
    { group: "Glaze", items: [
      "4 salmon fillets (6 oz each)",
      "3 tablespoons white miso paste",
      "2 tablespoons mirin",
      "1 tablespoon soy sauce",
      "1 tablespoon honey",
      "1 teaspoon grated ginger",
      "1 teaspoon rice vinegar"
    ]},
    { group: "To serve", items: [
      "1 1/2 cups short-grain rice",
      "1 lb baby bok choy, halved",
      "1 tablespoon sesame oil",
      "2 cloves garlic, sliced",
      "2 scallions, sliced",
      "1 teaspoon sesame seeds"
    ]}
  ],
  steps: [
    "Whisk all the glaze ingredients until smooth. Spread it over the salmon fillets and let them sit 15 minutes, or up to 4 hours in the fridge.",
    "Cook the rice according to the package.",
    "Set an oven rack about 6 inches below the broiler and heat the broiler to high. Line a sheet pan with foil.",
    "Broil the salmon 6 to 8 minutes, until the glaze is bubbling and darkened in spots and the fish flakes. Watch it closely from minute 5 - miso and honey go from caramelized to burnt fast.",
    "Meanwhile, heat the sesame oil in a skillet over medium-high. Add the garlic and bok choy cut side down and cook 3 minutes, then add 2 tablespoons water, cover, and steam 2 minutes.",
    "Serve the salmon over rice with the bok choy, scallions, and sesame seeds."
  ],
  tips: [
    "White miso is mild and sweet; red miso is much saltier and will overpower the fish.",
    "A foil-lined pan saves you from scrubbing burnt glaze off a sheet pan."
  ],
  makeAhead: "Glaze the salmon in the morning - it only improves with a few hours of marinating."
},

{
  id: "shrimp-fried-rice",
  title: "Shrimp Fried Rice",
  blurb: "The best possible use for leftover rice, with egg, peas, and shrimp in fifteen minutes.",
  emoji: "🍚", protein: "Shrimp", cuisine: "Chinese",
  totalTime: 20, activeTime: 20, difficulty: "Easy", servings: 4,
  plate: { protein: "Shrimp and egg", starch: "Rice", veg: "Peas, carrot, scallion" },
  nutrition: { calories: 465, protein: 30, carbs: 52, fat: 15, fiber: 4 },
  tags: ["30-minutes", "budget", "kid-friendly", "dairy-free", "leftovers"],
  seasons: ["all"], karolina: true,
  ingredients: [
    { group: "Fried rice", items: [
      "4 cups cold cooked rice, at least a day old",
      "1 lb small shrimp, peeled and deveined",
      "3 tablespoons neutral oil",
      "3 eggs, beaten",
      "1 cup frozen peas and carrots",
      "4 cloves garlic, minced",
      "1 tablespoon grated ginger",
      "4 scallions, sliced, whites and greens separated"
    ]},
    { group: "Sauce", items: [
      "3 tablespoons soy sauce",
      "1 tablespoon oyster sauce",
      "1 teaspoon sesame oil",
      "1/2 teaspoon white pepper"
    ]}
  ],
  steps: [
    "Break up the cold rice with your hands so there are no clumps. Cold, dry, day-old rice is the single most important thing here.",
    "Mix the sauce ingredients in a small bowl.",
    "Heat 1 tablespoon oil in a wok or large skillet over high. Add the beaten eggs and scramble quickly, 30 seconds, until just set. Move to a plate.",
    "Add another tablespoon of oil and the shrimp. Cook 90 seconds a side until pink. Move to the plate.",
    "Add the last tablespoon of oil, then the garlic, ginger, and scallion whites. Stir 30 seconds.",
    "Add the rice and press it into the pan. Let it sit 1 minute to toast, then toss. Repeat twice more - this is how you get the slightly crispy grains.",
    "Add the peas and carrots and the sauce. Toss 1 minute, then return the egg, shrimp, and scallion greens and toss to combine."
  ],
  tips: [
    "Fresh rice is too wet and turns to mush. If you must, spread fresh rice on a sheet pan and refrigerate uncovered for an hour.",
    "White pepper tastes different from black and is what makes this taste like takeout."
  ],
  makeAhead: "Cook rice a day ahead specifically for this."
},

{
  id: "honey-garlic-salmon",
  title: "Honey Garlic Salmon",
  blurb: "A sticky pan glaze that takes four ingredients and turns salmon into something kids ask for.",
  emoji: "🍯", protein: "Fish", cuisine: "American",
  totalTime: 20, activeTime: 20, difficulty: "Easy", servings: 4,
  plate: { protein: "Salmon", starch: null, veg: null },
  nutrition: { calories: 425, protein: 39, carbs: 20, fat: 21, fiber: 0 },
  tags: ["30-minutes", "one-pan", "dairy-free", "kid-friendly", "high-protein"],
  seasons: ["all"], karolina: true,
  ingredients: [
    { group: "Everything", items: [
      "4 salmon fillets (6 oz each)",
      "1 teaspoon kosher salt",
      "1/2 teaspoon black pepper",
      "2 tablespoons olive oil",
      "1/3 cup honey",
      "5 cloves garlic, minced",
      "3 tablespoons soy sauce",
      "3 tablespoons lemon juice",
      "1/4 teaspoon red pepper flakes",
      "2 tablespoons butter"
    ]}
  ],
  steps: [
    "Pat the salmon dry and season with the salt and pepper.",
    "Whisk the honey, garlic, soy sauce, lemon juice, and pepper flakes together.",
    "Heat the oil in a large skillet over medium-high. Add the salmon flesh side down and sear 4 minutes until golden.",
    "Flip the fillets and pour the sauce into the pan around them.",
    "Cook 3 to 4 minutes, tilting the pan and spooning the bubbling sauce over the fish constantly, until it thickens into a glaze and the salmon reads 125F.",
    "Take the pan off the heat, swirl in the butter, and spoon the last of the glaze over each fillet."
  ],
  tips: [
    "Honey burns quickly. If the glaze is darkening faster than the fish is cooking, pull the pan off the heat for a moment.",
    "Serve with rice and a green vegetable - the glaze is good on everything it touches."
  ],
  makeAhead: null
},

{
  id: "oven-fish-and-chips",
  title: "Oven Fish and Chips",
  blurb: "Crunchy panko-crusted cod and proper thick chips, without a vat of oil.",
  emoji: "🍟", protein: "Fish", cuisine: "British",
  totalTime: 60, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "Baked cod", starch: "Oven chips", veg: "Peas" },
  nutrition: { calories: 565, protein: 42, carbs: 58, fat: 17, fiber: 7 },
  tags: ["comfort", "kid-friendly", "budget"],
  seasons: ["all"], karolina: true,
  ingredients: [
    { group: "Chips", items: [
      "2 1/2 lb russet potatoes, cut into thick chips",
      "3 tablespoons neutral oil",
      "1 1/2 teaspoons kosher salt"
    ]},
    { group: "Fish", items: [
      "4 cod fillets (6 oz each)",
      "1 1/2 cups panko breadcrumbs",
      "3 tablespoons olive oil",
      "1/2 cup all-purpose flour",
      "2 eggs, beaten",
      "1 teaspoon kosher salt",
      "1/2 teaspoon black pepper",
      "1 teaspoon malt vinegar powder or 1 teaspoon paprika"
    ]},
    { group: "To serve", items: [
      "3 cups frozen peas",
      "1 tablespoon butter",
      "1 lemon, cut into wedges",
      "Tartar sauce"
    ]}
  ],
  steps: [
    "Heat the oven to 450F. Soak the cut potatoes in cold water 20 minutes, then dry them very thoroughly with a towel.",
    "Toss the chips with the oil and salt and spread on a sheet pan in a single layer. Roast 25 minutes.",
    "Meanwhile, toss the panko with the olive oil until evenly damp, then mix in the salt, pepper, and paprika.",
    "Set out flour, egg, and the panko mixture. Coat each fillet in that order, pressing the crumbs on well.",
    "Flip the chips and push them to one side. Add the fish on a piece of parchment on the same pan, or use a second pan.",
    "Roast 15 to 18 minutes more, until the crust is deep golden and the fish flakes.",
    "Simmer the peas 3 minutes, drain, and crush roughly with the butter and a pinch of salt.",
    "Serve with lemon, tartar sauce, and plenty of vinegar."
  ],
  tips: [
    "Drying the potatoes is the entire difference between crisp chips and steamed ones.",
    "Pre-toasting the panko in oil gives you the golden color that oven-baked breading otherwise never reaches."
  ],
  makeAhead: null
},

{
  id: "mediterranean-baked-cod",
  title: "Mediterranean Baked Cod with Tomatoes and Olives",
  blurb: "A one-dish fish braise with capers, olives, and enough sauce to spoon over everything.",
  emoji: "🫒", protein: "Fish", cuisine: "Mediterranean",
  totalTime: 35, activeTime: 15, difficulty: "Easy", servings: 4,
  plate: { protein: "Cod", starch: null, veg: "Tomatoes and olives" },
  nutrition: { calories: 330, protein: 37, carbs: 12, fat: 15, fiber: 3 },
  tags: ["30-minutes", "one-pan", "low-carb", "gluten-free", "dairy-free", "high-protein"],
  seasons: ["summer", "fall"],
  ingredients: [
    { group: "Everything", items: [
      "4 cod fillets (6 oz each)",
      "3 tablespoons olive oil",
      "1 onion, thinly sliced",
      "4 cloves garlic, sliced",
      "1 (14.5 oz) can diced tomatoes",
      "1/2 cup kalamata olives, halved",
      "2 tablespoons capers, drained",
      "1 teaspoon dried oregano",
      "1/2 teaspoon red pepper flakes",
      "1 teaspoon kosher salt",
      "2 tablespoons lemon juice",
      "1/4 cup chopped parsley"
    ]}
  ],
  steps: [
    "Heat the oven to 400F.",
    "Warm 2 tablespoons of the oil in an oven-safe skillet over medium. Cook the onion 6 minutes until soft.",
    "Add the garlic, oregano, and pepper flakes and cook 1 minute.",
    "Stir in the tomatoes, olives, capers, and half the salt. Simmer 8 minutes until slightly thickened.",
    "Pat the cod dry, season with the remaining salt, and nestle the fillets into the sauce, spooning a little over the tops.",
    "Transfer to the oven and bake 12 to 14 minutes, until the fish flakes easily.",
    "Finish with the lemon juice, parsley, and the last tablespoon of olive oil."
  ],
  tips: [
    "The olives and capers are already salty. Season the sauce lightly and taste before adding more.",
    "Crusty bread or orzo turns this from a light meal into a full dinner."
  ],
  makeAhead: "Make the tomato base up to two days ahead; add the fish and bake when you want to eat."
},

{
  id: "shrimp-and-grits",
  title: "Shrimp and Grits",
  blurb: "Creamy cheese grits under smoky shrimp in a bacon pan sauce. Weekend food on a weeknight schedule.",
  emoji: "🥣", protein: "Shrimp", cuisine: "Southern",
  totalTime: 45, activeTime: 35, difficulty: "Medium", servings: 4,
  plate: { protein: "Shrimp", starch: "Cheese grits", veg: "Scallions and peppers" },
  nutrition: { calories: 620, protein: 38, carbs: 45, fat: 31, fiber: 2 },
  tags: ["comfort", "special-occasion", "gluten-free"],
  seasons: ["all"],
  ingredients: [
    { group: "Grits", items: [
      "1 cup stone-ground grits",
      "3 cups chicken broth",
      "1 cup whole milk",
      "3 tablespoons butter",
      "1 cup shredded sharp cheddar",
      "1 teaspoon kosher salt"
    ]},
    { group: "Shrimp", items: [
      "1 1/2 lb large shrimp, peeled and deveined",
      "6 slices bacon, chopped",
      "1 red bell pepper, diced",
      "4 cloves garlic, minced",
      "1 teaspoon smoked paprika",
      "1/2 teaspoon cayenne",
      "3/4 cup chicken broth",
      "2 tablespoons lemon juice",
      "4 scallions, sliced",
      "1 teaspoon kosher salt"
    ]}
  ],
  steps: [
    "Bring the broth and milk to a simmer. Whisk in the grits slowly so they do not clump, then reduce the heat to very low.",
    "Cook the grits 25 to 30 minutes, whisking every 5 minutes, until thick and creamy. Stir in the butter, cheese, and salt at the end.",
    "Meanwhile, cook the bacon in a large skillet over medium until crisp, 8 minutes. Lift it out, leaving the fat.",
    "Add the bell pepper to the bacon fat and cook 4 minutes. Add the garlic, paprika, and cayenne and cook 1 minute.",
    "Pat the shrimp dry, season with the salt, and add to the pan. Cook 90 seconds a side.",
    "Pour in the broth and lemon juice and simmer 2 minutes, scraping the pan, until slightly reduced.",
    "Spoon the grits into bowls, top with the shrimp and sauce, and scatter with bacon and scallions."
  ],
  tips: [
    "Stone-ground grits take real time and taste completely different from instant. Start them before anything else.",
    "If the grits stiffen while you wait, whisk in a splash of hot milk to loosen them."
  ],
  makeAhead: null
},

{
  id: "salmon-cakes",
  title: "Salmon Cakes with Dill Sauce",
  blurb: "Crisp outside, tender inside, and made from a can if that is what is in the cupboard.",
  emoji: "🥘", protein: "Fish", cuisine: "American",
  totalTime: 35, activeTime: 30, difficulty: "Easy", servings: 4,
  plate: { protein: "Salmon cakes", starch: "Breadcrumbs", veg: "Onion and celery" },
  nutrition: { calories: 415, protein: 33, carbs: 22, fat: 22, fiber: 2 },
  tags: ["30-minutes", "budget", "make-ahead", "high-protein", "kid-friendly"],
  seasons: ["all"], karolina: true,
  ingredients: [
    { group: "Cakes", items: [
      "1 1/2 lb cooked salmon, flaked, or 3 (14 oz) cans, drained",
      "1 cup panko breadcrumbs",
      "2 eggs",
      "1/3 cup mayonnaise",
      "1 small onion, finely diced",
      "2 stalks celery, finely diced",
      "2 tablespoons chopped dill",
      "2 tablespoons lemon juice",
      "1 tablespoon Dijon mustard",
      "1 teaspoon kosher salt",
      "1/2 teaspoon black pepper",
      "3 tablespoons olive oil for frying"
    ]},
    { group: "Dill sauce", items: [
      "3/4 cup sour cream",
      "2 tablespoons chopped dill",
      "1 tablespoon lemon juice",
      "1 teaspoon Dijon mustard",
      "1 clove garlic, grated"
    ]}
  ],
  steps: [
    "Stir the dill sauce ingredients together and refrigerate.",
    "Combine everything for the cakes except the oil in a large bowl, folding gently so the salmon stays in flakes rather than turning to paste.",
    "Form into 8 patties, about 3/4 inch thick. Chill 15 minutes - this is what keeps them from falling apart in the pan.",
    "Heat the oil in a large skillet over medium.",
    "Cook the cakes 4 minutes per side, in batches, until deep golden and heated through. Turn them once only, gently.",
    "Drain briefly on a rack and serve with the dill sauce and lemon wedges."
  ],
  tips: [
    "Chilling the formed patties is the difference between salmon cakes and salmon scramble.",
    "Leftover roasted salmon from earlier in the week is the ideal starting point."
  ],
  makeAhead: "Form the patties up to a day ahead and keep them covered in the fridge."
},

{
  id: "coconut-curry-shrimp",
  title: "Coconut Curry Shrimp",
  blurb: "A fragrant, gently spiced curry that comes together in the time it takes to cook rice.",
  emoji: "🍛", protein: "Shrimp", cuisine: "Thai",
  totalTime: 30, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "Shrimp", starch: "Jasmine rice", veg: "Peppers and spinach" },
  nutrition: { calories: 545, protein: 32, carbs: 52, fat: 23, fiber: 4 },
  tags: ["30-minutes", "one-pan", "dairy-free", "gluten-free", "veggie-forward"],
  seasons: ["all"],
  ingredients: [
    { group: "Curry", items: [
      "1 1/2 lb large shrimp, peeled and deveined",
      "2 tablespoons neutral oil",
      "1 onion, sliced",
      "1 red bell pepper, sliced",
      "4 cloves garlic, minced",
      "1 tablespoon grated ginger",
      "3 tablespoons red curry paste",
      "1 (14 oz) can coconut milk",
      "1 tablespoon fish sauce",
      "1 tablespoon brown sugar",
      "2 tablespoons lime juice",
      "5 oz baby spinach",
      "1/2 cup chopped cilantro"
    ]},
    { group: "To serve", items: [
      "1 1/2 cups jasmine rice"
    ]}
  ],
  steps: [
    "Start the rice.",
    "Heat the oil in a large skillet over medium-high. Cook the onion and bell pepper 5 minutes until they begin to soften.",
    "Add the garlic and ginger and cook 1 minute.",
    "Push everything aside, add the curry paste to the bare pan, and fry it 1 minute until it darkens and smells fragrant. This step is what wakes the paste up.",
    "Pour in the coconut milk, fish sauce, and brown sugar. Simmer 5 minutes.",
    "Add the shrimp and cook 3 minutes, just until pink and curled.",
    "Stir in the spinach until wilted, then the lime juice. Taste and adjust with more lime or fish sauce.",
    "Serve over rice with cilantro."
  ],
  tips: [
    "Frying the curry paste in oil before adding liquid makes a dramatic difference. Stirring it straight into coconut milk tastes flat.",
    "Full-fat coconut milk only. Light coconut milk makes a thin, sad curry."
  ],
  makeAhead: null
},

{
  id: "sheet-pan-shrimp-vegetables",
  title: "Sheet Pan Lemon Shrimp with Vegetables",
  blurb: "Everything roasts at once, the shrimp go in for the last five minutes, and dinner is done.",
  emoji: "🍤", protein: "Shrimp", cuisine: "Mediterranean",
  totalTime: 35, activeTime: 15, difficulty: "Easy", servings: 4,
  plate: { protein: "Shrimp", starch: "Baby potatoes", veg: "Zucchini, peppers, tomatoes" },
  nutrition: { calories: 425, protein: 33, carbs: 36, fat: 16, fiber: 6 },
  tags: ["sheet-pan", "one-pan", "gluten-free", "dairy-free", "high-protein", "veggie-forward"],
  seasons: ["summer"],
  ingredients: [
    { group: "Pan", items: [
      "1 1/2 lb large shrimp, peeled and deveined",
      "1 lb baby potatoes, quartered",
      "2 zucchini, cut into half-moons",
      "1 red bell pepper, cut into chunks",
      "1 pint cherry tomatoes",
      "1 red onion, cut into wedges",
      "4 tablespoons olive oil",
      "5 cloves garlic, minced",
      "2 teaspoons dried oregano",
      "1 1/2 teaspoons kosher salt",
      "1/2 teaspoon red pepper flakes",
      "1 lemon, zested and juiced",
      "1/4 cup chopped parsley"
    ]}
  ],
  steps: [
    "Heat the oven to 425F.",
    "Toss the potatoes with 1 tablespoon oil and a pinch of salt. Spread on a large sheet pan and roast 18 minutes.",
    "Toss the zucchini, pepper, tomatoes, and onion with 2 tablespoons oil, half the garlic, the oregano, and salt.",
    "Add them to the pan with the potatoes and roast 12 minutes more.",
    "Toss the shrimp with the remaining oil, garlic, pepper flakes, and lemon zest.",
    "Scatter the shrimp over the vegetables and roast 5 to 6 minutes, just until pink.",
    "Squeeze the lemon juice over the whole pan, scatter with parsley, and serve."
  ],
  tips: [
    "Shrimp need five minutes, potatoes need thirty. Adding them at the same time is the classic mistake.",
    "Use your largest pan or split across two. Crowded vegetables steam and never brown."
  ],
  makeAhead: null
},

{
  id: "teriyaki-salmon-bowls",
  title: "Teriyaki Salmon Rice Bowls",
  blurb: "Glazed salmon over rice with quick-pickled cucumber and edamame. Great hot or cold the next day.",
  emoji: "🍱", protein: "Fish", cuisine: "Japanese",
  totalTime: 30, activeTime: 20, difficulty: "Easy", servings: 4,
  plate: { protein: "Salmon", starch: "Rice", veg: "Cucumber and edamame" },
  nutrition: { calories: 575, protein: 42, carbs: 58, fat: 19, fiber: 5 },
  tags: ["30-minutes", "dairy-free", "high-protein", "make-ahead", "leftovers"],
  seasons: ["all"],
  ingredients: [
    { group: "Salmon", items: [
      "4 salmon fillets (6 oz each)",
      "1/4 cup soy sauce",
      "2 tablespoons mirin",
      "2 tablespoons honey",
      "1 tablespoon rice vinegar",
      "1 teaspoon grated ginger",
      "2 cloves garlic, minced",
      "2 teaspoons cornstarch mixed with 1 tablespoon water"
    ]},
    { group: "Bowls", items: [
      "1 1/2 cups short-grain rice",
      "1 English cucumber, thinly sliced",
      "3 tablespoons rice vinegar",
      "1 teaspoon sugar",
      "1 1/2 cups shelled edamame",
      "2 scallions, sliced",
      "1 teaspoon sesame seeds",
      "1 avocado, sliced"
    ]}
  ],
  steps: [
    "Cook the rice. Toss the cucumber with the vinegar, sugar, and a pinch of salt and set aside.",
    "Simmer the soy sauce, mirin, honey, vinegar, ginger, and garlic in a small pot for 3 minutes. Whisk in the cornstarch slurry and cook 1 minute until glossy.",
    "Heat the broiler with a rack 6 inches from the element. Line a pan with foil.",
    "Brush the salmon with half the glaze and broil 7 to 9 minutes, brushing again halfway, until the fish flakes and the glaze is bubbling.",
    "Steam or boil the edamame 3 minutes.",
    "Build bowls with rice, salmon, pickled cucumber, edamame, and avocado.",
    "Drizzle with the remaining glaze and finish with scallions and sesame seeds."
  ],
  tips: [
    "Cornstarch is what turns a thin marinade into a glaze that actually clings.",
    "These pack well for lunch - the salmon is good cold."
  ],
  makeAhead: "Make the glaze and pickle the cucumbers up to three days ahead."
},

{
  id: "garlic-butter-scallops",
  title: "Seared Scallops with Garlic Butter",
  blurb: "Golden crust, sweet centers, and a lemon-butter pan sauce. Ten minutes and genuinely restaurant quality.",
  emoji: "🐚", protein: "Shrimp", cuisine: "French",
  totalTime: 20, activeTime: 20, difficulty: "Medium", servings: 4,
  plate: { protein: "Sea scallops", starch: null, veg: null },
  nutrition: { calories: 320, protein: 29, carbs: 6, fat: 19, fiber: 0 },
  tags: ["30-minutes", "low-carb", "gluten-free", "special-occasion", "high-protein"],
  seasons: ["all"],
  ingredients: [
    { group: "Everything", items: [
      "1 1/2 lb large sea scallops",
      "1 teaspoon kosher salt",
      "1/2 teaspoon black pepper",
      "2 tablespoons neutral oil",
      "4 tablespoons butter",
      "5 cloves garlic, minced",
      "3 tablespoons lemon juice",
      "1/4 cup chopped parsley",
      "1/4 cup dry white wine"
    ]}
  ],
  steps: [
    "Pull off the small tough side muscle from each scallop if it is still attached.",
    "Pat the scallops as dry as you possibly can, then leave them on paper towels 10 minutes and pat again. Moisture is the enemy of a sear.",
    "Season both flat sides just before cooking - salting early draws out water.",
    "Heat the oil in a heavy skillet over high until it is just smoking.",
    "Add the scallops in a single layer, not touching. Cook 2 minutes without moving them, until a deep golden crust forms.",
    "Flip, add the butter and garlic, and cook 60 to 90 seconds while spooning the butter over. The centers should still be slightly translucent. Move to a plate.",
    "Add the wine and lemon juice to the pan, simmer 1 minute, stir in the parsley, and pour over the scallops."
  ],
  tips: [
    "Buy dry-packed scallops if you can. Wet-packed ones are treated with a solution that makes them weep and refuse to brown.",
    "Overcooked scallops turn rubbery in about thirty seconds. Pull them while the middle still looks underdone."
  ],
  makeAhead: null
},

{
  id: "tuna-nicoise-salad",
  title: "Tuna Nicoise Salad",
  blurb: "A composed plate of potatoes, green beans, egg, and tuna with a sharp mustard vinaigrette.",
  emoji: "🥗", protein: "Fish", cuisine: "French",
  totalTime: 35, activeTime: 30, difficulty: "Easy", servings: 4,
  plate: { protein: "Tuna and eggs", starch: "Baby potatoes", veg: "Green beans and tomatoes" },
  nutrition: { calories: 495, protein: 34, carbs: 32, fat: 26, fiber: 7 },
  tags: ["make-ahead", "gluten-free", "high-protein", "veggie-forward", "no-cook"],
  seasons: ["summer"],
  ingredients: [
    { group: "Vinaigrette", items: [
      "1/3 cup olive oil",
      "3 tablespoons red wine vinegar",
      "1 tablespoon Dijon mustard",
      "1 shallot, minced",
      "1 teaspoon honey",
      "1/2 teaspoon kosher salt"
    ]},
    { group: "Salad", items: [
      "1 lb baby potatoes, halved",
      "12 oz green beans, trimmed",
      "4 eggs",
      "2 (5 oz) cans good tuna in olive oil, drained",
      "1 pint cherry tomatoes, halved",
      "1/2 cup nicoise or kalamata olives",
      "1/4 red onion, thinly sliced",
      "2 tablespoons capers",
      "1 head butter lettuce, leaves separated"
    ]}
  ],
  steps: [
    "Whisk the vinaigrette ingredients together in a jar.",
    "Boil the potatoes in salted water 14 minutes until tender. Lift them out with a slotted spoon and toss immediately with 2 tablespoons of the vinaigrette while still warm - they absorb it.",
    "Drop the green beans into the same water and cook 3 minutes, until bright and crisp-tender. Move straight into ice water to stop the cooking.",
    "Lower the eggs into the same pot and boil 8 minutes for jammy yolks. Cool in the ice water, then peel and halve.",
    "Arrange the lettuce on a large platter and lay everything else on top in separate piles: potatoes, beans, tuna, tomatoes, eggs, olives, onion, and capers.",
    "Spoon the rest of the vinaigrette over the whole platter and finish with black pepper."
  ],
  tips: [
    "Dressing the potatoes while hot is the trick that keeps this from tasting bland in the middle.",
    "Tuna packed in olive oil is worth the extra dollar here - water-packed tuna is dry and shreds."
  ],
  makeAhead: "Cook the potatoes, beans, and eggs a day ahead and assemble in ten minutes."
},

{
  id: "lemon-pepper-tilapia",
  title: "Lemon Pepper Tilapia with Rice Pilaf",
  blurb: "A budget weeknight fish that cooks in eight minutes, with plenty of lemon and butter.",
  emoji: "🍋", protein: "Fish", cuisine: "American",
  totalTime: 30, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "Tilapia", starch: "Rice pilaf", veg: null },
  nutrition: { calories: 445, protein: 38, carbs: 44, fat: 13, fiber: 2 },
  tags: ["30-minutes", "budget", "high-protein", "kid-friendly"],
  seasons: ["all"], karolina: true,
  ingredients: [
    { group: "Fish", items: [
      "4 tilapia fillets (6 oz each)",
      "1/3 cup all-purpose flour",
      "1 1/2 teaspoons kosher salt",
      "1 1/2 teaspoons coarse black pepper",
      "1 lemon, zested",
      "2 tablespoons olive oil",
      "3 tablespoons butter",
      "3 tablespoons lemon juice",
      "2 tablespoons chopped parsley"
    ]},
    { group: "Pilaf", items: [
      "1 1/2 cups long-grain rice",
      "2 tablespoons butter",
      "1 small onion, diced",
      "3 cups chicken broth",
      "1/4 cup chopped parsley"
    ]}
  ],
  steps: [
    "For the pilaf, melt the butter in a saucepan and cook the onion 5 minutes. Add the rice and toast 2 minutes, then add the broth, bring to a boil, cover, and cook on low 18 minutes. Fluff with the parsley.",
    "Mix the flour, salt, pepper, and lemon zest on a plate.",
    "Pat the tilapia dry and dredge each fillet, shaking off the excess.",
    "Heat the oil in a large skillet over medium-high. Cook the fillets 3 minutes on the first side, until golden.",
    "Flip carefully with a wide spatula and cook 2 to 3 minutes more, until the fish flakes. Move to plates.",
    "Add the butter and lemon juice to the pan, swirl for 30 seconds until foaming, and stir in the parsley.",
    "Pour the lemon butter over the fish and serve with the pilaf."
  ],
  tips: [
    "Tilapia is thin and delicate. Use a wide spatula and flip once, decisively.",
    "This works with any thin white fish - flounder, sole, or catfish."
  ],
  makeAhead: null
},

{
  id: "salmon-en-papillote",
  title: "Salmon in Parchment with Vegetables",
  blurb: "Fish steamed in its own paper packet with lemon and herbs. No pans to wash and it looks like a gift.",
  emoji: "📦", protein: "Fish", cuisine: "French",
  totalTime: 35, activeTime: 15, difficulty: "Easy", servings: 4,
  plate: { protein: "Salmon", starch: null, veg: "Zucchini, fennel, tomato" },
  nutrition: { calories: 395, protein: 40, carbs: 12, fat: 21, fiber: 4 },
  tags: ["30-minutes", "low-carb", "gluten-free", "dairy-free", "high-protein", "veggie-forward"],
  seasons: ["spring", "summer"],
  ingredients: [
    { group: "Packets", items: [
      "4 salmon fillets (6 oz each)",
      "2 zucchini, thinly sliced",
      "1 fennel bulb, thinly sliced",
      "1 pint cherry tomatoes, halved",
      "1 lemon, thinly sliced",
      "4 tablespoons olive oil",
      "1/4 cup dry white wine",
      "4 sprigs dill",
      "4 sprigs thyme",
      "1 1/2 teaspoons kosher salt",
      "1/2 teaspoon black pepper"
    ]}
  ],
  steps: [
    "Heat the oven to 400F. Cut four large sheets of parchment, about 15 inches square.",
    "Toss the zucchini, fennel, and tomatoes with 2 tablespoons of the oil and half the salt.",
    "Pile a quarter of the vegetables on one half of each parchment sheet, leaving a wide border.",
    "Set a salmon fillet on top of each pile. Season, drizzle with the remaining oil, add a tablespoon of wine, and top with lemon slices and herb sprigs.",
    "Fold the parchment over and crimp the open edges in small overlapping folds, working around the curve, to seal the packet completely. It needs to be airtight to steam properly.",
    "Set the packets on a sheet pan and bake 15 to 17 minutes. They will puff up.",
    "Serve each packet on a plate and let everyone tear theirs open at the table - the burst of steam is the best part."
  ],
  tips: [
    "The packet must be well sealed or the steam escapes and the fish roasts dry instead of steaming.",
    "Aluminum foil works if you have no parchment, though it will not puff as dramatically."
  ],
  makeAhead: "Assemble the packets in the morning and refrigerate; add 3 minutes to the bake time."
}

]);
