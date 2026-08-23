/* Chicken & turkey mains. */
window.RECIPES = (window.RECIPES || []).concat([

{
  id: "lemon-herb-roast-chicken",
  title: "Lemon-Herb Roast Chicken with Potatoes and Green Beans",
  blurb: "One roasting pan: a golden bird, potatoes cooked in the drippings, green beans at the end.",
  emoji: "🍗", protein: "Chicken", cuisine: "American",
  totalTime: 95, activeTime: 20, difficulty: "Easy", servings: 4,
  plate: { protein: "Roast chicken", starch: "Baby potatoes", veg: "Green beans" },
  nutrition: { calories: 585, protein: 46, carbs: 34, fat: 29, fiber: 6 },
  tags: ["one-pan", "comfort", "gluten-free", "leftovers", "special-occasion"],
  seasons: ["fall", "winter", "spring"],
  ingredients: [
    { group: "Chicken", items: [
      "1 (4 lb) whole chicken",
      "2 tablespoons butter, softened",
      "1 lemon, halved",
      "4 sprigs fresh thyme",
      "1 1/2 teaspoons kosher salt",
      "1/2 teaspoon black pepper"
    ]},
    { group: "The pan", items: [
      "1 1/2 lb baby potatoes, halved",
      "1 onion, cut into thick wedges",
      "3 tablespoons olive oil",
      "12 oz green beans, trimmed",
      "4 cloves garlic, smashed"
    ]}
  ],
  steps: [
    "Heat the oven to 425F. Take the chicken out of the fridge while the oven heats so it's not fridge-cold going in.",
    "Pat the chicken very dry with paper towels, inside and out. Dry skin is the secret to crisp skin.",
    "Rub the softened butter all over the skin. Season generously with the salt and pepper, including a pinch inside the cavity. Tuck the thyme and both lemon halves inside.",
    "Toss the potatoes, onion, and garlic with the olive oil and a pinch of salt. Spread them in a large roasting pan and set the chicken on top, breast side up.",
    "Roast for 60 minutes. The potatoes underneath will be cooking in the drippings.",
    "Scatter the green beans around the chicken, give the potatoes a stir, and roast 15 to 20 minutes more, until the thickest part of the thigh reads 165F.",
    "Move the chicken to a board and let it rest 15 minutes before carving. Cutting early loses the juice.",
    "Squeeze the roasted lemon halves over the vegetables, scrape up the browned bits, and serve everything from the pan."
  ],
  tips: [
    "No meat thermometer? Pierce the thigh where it meets the body. The juice should run clear, not pink.",
    "Save the carcass. Simmered with an onion and a carrot for two hours it makes stock for next week's soup."
  ],
  makeAhead: "Salt the chicken and leave it uncovered in the fridge overnight. The skin dries out and roasts up noticeably crisper."
},

{
  id: "skillet-chicken-mustard-pan-sauce",
  title: "Skillet Chicken Thighs with Mustard Pan Sauce",
  blurb: "Crispy-skinned thighs and a glossy mustard sauce built in the same pan, in about half an hour.",
  emoji: "🍗", protein: "Chicken", cuisine: "French",
  totalTime: 35, activeTime: 30, difficulty: "Easy", servings: 4,
  plate: { protein: "Chicken thighs", starch: null, veg: null },
  nutrition: { calories: 430, protein: 34, carbs: 6, fat: 29, fiber: 1 },
  tags: ["one-pan", "30-minutes", "low-carb", "gluten-free", "comfort"],
  seasons: ["all"],
  ingredients: [
    { group: "Chicken", items: [
      "8 bone-in skin-on chicken thighs",
      "1 teaspoon kosher salt",
      "1/2 teaspoon black pepper",
      "1 tablespoon olive oil"
    ]},
    { group: "Pan sauce", items: [
      "1 shallot, minced",
      "3/4 cup chicken broth",
      "2 tablespoons Dijon mustard",
      "1/3 cup heavy cream",
      "1 tablespoon fresh thyme leaves",
      "1 teaspoon lemon juice"
    ]}
  ],
  steps: [
    "Pat the thighs dry and season both sides with the salt and pepper.",
    "Heat the oil in a large skillet over medium heat. Lay the thighs in skin side down and leave them alone for 12 to 14 minutes, until the skin is deep golden and releases easily.",
    "Flip and cook 8 minutes more, until cooked through. Move to a plate.",
    "Pour off all but about a tablespoon of fat. Add the shallot and cook 1 minute, until softened.",
    "Pour in the broth, scraping the browned bits off the bottom, and simmer until reduced by half, about 3 minutes.",
    "Whisk in the mustard and cream. Simmer 2 minutes until it coats a spoon. Stir in the thyme and lemon juice.",
    "Return the thighs to the pan skin side up, spooning sauce around, not over, the skin so it stays crisp."
  ],
  tips: [
    "Start the thighs in a cold-ish pan over medium, not high heat. Rushing the skin makes it stick and tear.",
    "Serve over mashed potatoes or rice. The sauce needs something to soak into."
  ],
  makeAhead: null
},

{
  id: "chicken-piccata",
  title: "Chicken Piccata",
  blurb: "Thin cutlets in a lemon and caper butter sauce. Ready in 30 minutes.",
  emoji: "🍋", protein: "Chicken", cuisine: "Italian",
  totalTime: 30, activeTime: 30, difficulty: "Easy", servings: 4,
  plate: { protein: "Chicken cutlets", starch: null, veg: null },
  nutrition: { calories: 395, protein: 39, carbs: 14, fat: 19, fiber: 1 },
  tags: ["30-minutes", "comfort", "special-occasion"],
  seasons: ["all"],
  ingredients: [
    { group: "Chicken", items: [
      "1 1/2 lb boneless skinless chicken breasts",
      "1/3 cup all-purpose flour",
      "1 teaspoon kosher salt",
      "1/2 teaspoon black pepper",
      "2 tablespoons olive oil"
    ]},
    { group: "Sauce", items: [
      "3 tablespoons butter",
      "2 cloves garlic, minced",
      "3/4 cup chicken broth",
      "1/4 cup fresh lemon juice",
      "3 tablespoons capers, drained",
      "1/4 cup chopped parsley"
    ]}
  ],
  steps: [
    "Slice each breast in half horizontally to make thin cutlets. Put them between two sheets of plastic and pound to an even 1/4 inch.",
    "Stir the flour, salt, and pepper together on a plate. Dredge each cutlet, shaking off the extra.",
    "Heat the oil in a large skillet over medium-high. Cook the cutlets in two batches, 3 minutes a side, until golden. Move to a plate.",
    "Lower the heat to medium. Melt 1 tablespoon of the butter, add the garlic, and cook 30 seconds. Don't let it brown.",
    "Pour in the broth and lemon juice, scraping the bottom of the pan. Simmer 3 minutes until slightly reduced.",
    "Turn off the heat. Swirl in the remaining 2 tablespoons butter until the sauce turns glossy, then stir in the capers and parsley.",
    "Return the cutlets and any juices to the pan, turn to coat, and serve right away."
  ],
  tips: [
    "Even thickness matters more than thinness. A lopsided cutlet cooks unevenly no matter what.",
    "Add the butter off the heat. Boiling it breaks the sauce and it goes greasy."
  ],
  makeAhead: "Pound and dredge the cutlets in the morning and keep them on a plate in the fridge, covered."
},

{
  id: "honey-garlic-chicken",
  title: "Honey Garlic Chicken with Broccoli and Rice",
  blurb: "Sticky, sweet-savory chicken that kids inhale, with broccoli steamed right on top of the rice.",
  emoji: "🍯", protein: "Chicken", cuisine: "Asian",
  totalTime: 35, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "Chicken thighs", starch: "Jasmine rice", veg: "Broccoli" },
  nutrition: { calories: 545, protein: 38, carbs: 62, fat: 15, fiber: 4 },
  tags: ["30-minutes", "kid-friendly", "dairy-free", "budget", "leftovers"],
  seasons: ["all"],
  ingredients: [
    { group: "Chicken", items: [
      "1 1/2 lb boneless skinless chicken thighs, cut into chunks",
      "2 tablespoons cornstarch",
      "1/2 teaspoon salt",
      "2 tablespoons neutral oil"
    ]},
    { group: "Sauce", items: [
      "1/3 cup honey",
      "1/4 cup soy sauce",
      "5 cloves garlic, minced",
      "1 tablespoon rice vinegar",
      "1 teaspoon grated fresh ginger",
      "1/2 teaspoon red pepper flakes"
    ]},
    { group: "To serve", items: [
      "1 1/2 cups jasmine rice",
      "1 large head broccoli, cut into florets",
      "2 scallions, sliced",
      "1 teaspoon sesame seeds"
    ]}
  ],
  steps: [
    "Start the rice: rinse it, then cook with 2 1/4 cups water, covered, for 15 minutes. In the last 5 minutes, lay the broccoli on top of the rice to steam.",
    "Toss the chicken chunks with the cornstarch and salt until evenly coated.",
    "Whisk all the sauce ingredients together in a bowl.",
    "Heat the oil in a large skillet over medium-high. Add the chicken in a single layer and leave it 3 minutes to brown before stirring. Cook 6 to 8 minutes total.",
    "Pour in the sauce. It will bubble and thicken fast. Stir for 2 to 3 minutes until it clings to the chicken.",
    "Fluff the rice and broccoli together. Spoon the chicken over the top and finish with scallions and sesame seeds."
  ],
  tips: [
    "The cornstarch coating is what makes the sauce cling instead of pooling at the bottom of the pan.",
    "Halve the honey and it becomes a much more grown-up dish."
  ],
  makeAhead: "Mix the sauce up to three days ahead and keep it in a jar in the fridge."
},

{
  id: "chicken-marsala",
  title: "Chicken Marsala",
  blurb: "Golden cutlets and a deep mushroom-wine sauce. Special enough for company, easy enough for a Tuesday.",
  emoji: "🍄", protein: "Chicken", cuisine: "Italian",
  totalTime: 40, activeTime: 40, difficulty: "Medium", servings: 4,
  plate: { protein: "Chicken cutlets", starch: null, veg: "Mushrooms" },
  nutrition: { calories: 445, protein: 41, carbs: 16, fat: 21, fiber: 2 },
  tags: ["comfort", "special-occasion", "leftovers"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Chicken", items: [
      "1 1/2 lb boneless skinless chicken breasts, halved horizontally",
      "1/3 cup all-purpose flour",
      "1 teaspoon kosher salt",
      "1/2 teaspoon black pepper",
      "2 tablespoons olive oil"
    ]},
    { group: "Sauce", items: [
      "10 oz cremini mushrooms, sliced",
      "2 tablespoons butter",
      "2 cloves garlic, minced",
      "3/4 cup dry Marsala wine",
      "3/4 cup chicken broth",
      "1/3 cup heavy cream",
      "2 tablespoons chopped parsley"
    ]}
  ],
  steps: [
    "Pound the cutlets to an even 1/4 inch. Dredge in the seasoned flour and shake off the excess.",
    "Heat the oil in a large skillet over medium-high. Brown the cutlets in batches, 3 minutes a side. Move to a plate.",
    "Add the butter and mushrooms to the pan. Spread them out and don't stir for 4 minutes. That's how they brown instead of steam. Then stir and cook 4 minutes more.",
    "Add the garlic and cook 30 seconds.",
    "Pour in the Marsala and let it bubble hard for 2 minutes, scraping up everything stuck to the pan.",
    "Add the broth and simmer 5 minutes until reduced by about a third. Stir in the cream and simmer 2 minutes more.",
    "Slide the chicken back in with its juices, warm through for 2 minutes, and scatter parsley over the top."
  ],
  tips: [
    "Use dry Marsala, not sweet, unless you want dessert sauce. If you can't find it, dry sherry works.",
    "Crowded mushrooms steam and go grey. Use your biggest pan or brown them in two batches."
  ],
  makeAhead: "The whole dish reheats gently in a covered skillet with a splash of broth."
},

{
  id: "greek-chicken-bowls",
  title: "Greek Chicken Bowls",
  blurb: "Lemony oregano chicken over rice with cucumber, tomato, and a garlicky yogurt sauce. Meal-prep gold.",
  emoji: "🥙", protein: "Chicken", cuisine: "Greek",
  totalTime: 40, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "Marinated chicken", starch: "Lemon rice", veg: "Cucumber and tomato" },
  nutrition: { calories: 560, protein: 42, carbs: 55, fat: 19, fiber: 5 },
  tags: ["make-ahead", "high-protein", "leftovers", "veggie-forward"],
  seasons: ["spring", "summer"],
  ingredients: [
    { group: "Chicken", items: [
      "1 1/2 lb boneless skinless chicken thighs",
      "3 tablespoons olive oil",
      "3 tablespoons lemon juice",
      "3 cloves garlic, minced",
      "2 teaspoons dried oregano",
      "1 teaspoon kosher salt"
    ]},
    { group: "Bowls", items: [
      "1 1/2 cups long-grain rice",
      "1 lemon, zested and juiced",
      "1 English cucumber, diced",
      "2 cups cherry tomatoes, halved",
      "1/2 red onion, thinly sliced",
      "1/2 cup crumbled feta",
      "1/3 cup kalamata olives"
    ]},
    { group: "Yogurt sauce", items: [
      "1 cup plain Greek yogurt",
      "1 clove garlic, grated",
      "1 tablespoon lemon juice",
      "2 tablespoons chopped dill",
      "1/4 teaspoon salt"
    ]}
  ],
  steps: [
    "Whisk the chicken marinade ingredients in a bowl, add the thighs, and turn to coat. Let sit 20 minutes on the counter, or up to overnight in the fridge.",
    "Cook the rice according to the package. When it's done, fork through the lemon zest and juice.",
    "Stir the yogurt sauce ingredients together and taste for salt.",
    "Heat a grill pan or heavy skillet over medium-high. Cook the thighs 5 to 6 minutes a side, until charred at the edges and cooked through. Rest 5 minutes, then slice.",
    "Toss the cucumber, tomatoes, and red onion with a pinch of salt and a drizzle of olive oil.",
    "Build the bowls: rice, chicken, vegetables, feta, olives, and a generous spoonful of yogurt sauce."
  ],
  tips: [
    "Thighs stay juicy even if you overshoot the timing. Breasts are less forgiving here.",
    "Everything keeps separately in the fridge for four days, which makes this a great Sunday-cook-for-the-week dish."
  ],
  makeAhead: "Marinate the chicken and make the yogurt sauce the night before."
},

{
  id: "baked-chicken-parmesan",
  title: "Baked Chicken Parmesan",
  blurb: "All the crunch of the fried version from a hot oven, with a green salad standing in for the pile of pasta.",
  emoji: "🧀", protein: "Chicken", cuisine: "Italian",
  totalTime: 45, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "Breaded chicken", starch: "Breadcrumb crust", veg: "Marinara and salad" },
  nutrition: { calories: 520, protein: 48, carbs: 28, fat: 24, fiber: 4 },
  tags: ["comfort", "kid-friendly", "leftovers"],
  seasons: ["all"],
  ingredients: [
    { group: "Chicken", items: [
      "4 boneless skinless chicken breasts (about 6 oz each)",
      "1 cup panko breadcrumbs",
      "1/2 cup grated Parmesan",
      "1 teaspoon Italian seasoning",
      "1/2 teaspoon garlic powder",
      "2 eggs, beaten",
      "1/3 cup all-purpose flour",
      "3 tablespoons olive oil",
      "1 teaspoon kosher salt"
    ]},
    { group: "To finish", items: [
      "2 cups marinara sauce",
      "1 1/2 cups shredded mozzarella",
      "1/4 cup torn basil"
    ]}
  ],
  steps: [
    "Heat the oven to 425F. Set a wire rack on a sheet pan if you have one. It keeps the bottom crust from going soggy.",
    "Pound the breasts to an even 1/2 inch and season with the salt.",
    "Toss the panko with the Parmesan, Italian seasoning, garlic powder, and olive oil until the crumbs look evenly damp. This is what makes them brown without frying.",
    "Set up three plates: flour, beaten egg, and the panko mixture. Coat each breast in that order, pressing the crumbs on firmly.",
    "Bake 18 to 20 minutes, until the crust is deep golden and the chicken reads 160F.",
    "Spoon marinara over each piece, leaving the edges of the crust bare, and top with mozzarella.",
    "Return to the oven 5 to 7 minutes, until the cheese is melted and bubbling. Scatter basil over the top and rest 5 minutes before serving."
  ],
  tips: [
    "Tossing the panko with oil first is the single trick that makes oven-baked breading taste fried.",
    "Sauce only the middle. Bare edges stay crunchy and give you something to bite into."
  ],
  makeAhead: "Bread the cutlets and refrigerate up to a day ahead, uncovered, on a rack."
},

{
  id: "chicken-fajitas",
  title: "Sizzling Chicken Fajitas",
  blurb: "Charred peppers and onions, smoky chicken, warm tortillas, and everyone builds their own.",
  emoji: "🌶️", protein: "Chicken", cuisine: "Mexican",
  totalTime: 35, activeTime: 30, difficulty: "Easy", servings: 4,
  plate: { protein: "Chicken strips", starch: "Tortillas", veg: "Peppers and onions" },
  nutrition: { calories: 490, protein: 40, carbs: 42, fat: 18, fiber: 7 },
  tags: ["30-minutes", "kid-friendly", "dairy-free", "budget", "veggie-forward"],
  seasons: ["all"],
  ingredients: [
    { group: "Chicken", items: [
      "1 1/2 lb boneless skinless chicken breasts, sliced into strips",
      "2 tablespoons olive oil",
      "2 teaspoons chili powder",
      "1 1/2 teaspoons ground cumin",
      "1 teaspoon smoked paprika",
      "1 teaspoon kosher salt",
      "2 tablespoons lime juice"
    ]},
    { group: "Vegetables", items: [
      "3 bell peppers (mixed colors), sliced",
      "1 large onion, sliced",
      "1 tablespoon olive oil"
    ]},
    { group: "To serve", items: [
      "8 flour or corn tortillas",
      "1 lime, cut into wedges",
      "1/2 cup chopped cilantro",
      "1 avocado, sliced"
    ]}
  ],
  steps: [
    "Toss the chicken strips with the oil, spices, salt, and lime juice. Let sit while you slice the vegetables.",
    "Heat a large cast-iron or heavy skillet over high until it's hot.",
    "Add the peppers and onion with a tablespoon of oil. Cook 6 to 7 minutes, stirring only occasionally, until they have black edges but still have some bite. Move to a plate.",
    "Add the chicken in a single layer. Leave it 3 minutes to char, then stir and cook 3 to 4 minutes more until just cooked through.",
    "Return the vegetables to the pan and toss everything together for a minute.",
    "Warm the tortillas directly over a gas flame or in a dry pan, 20 seconds a side.",
    "Serve from the skillet with lime, cilantro, and avocado on the side."
  ],
  tips: [
    "High heat and a hot dry pan are what matters. A crowded lukewarm pan gives you steamed peppers.",
    "Slice the chicken across the grain so the strips stay tender."
  ],
  makeAhead: "The spice-rubbed chicken can marinate up to 8 hours in the fridge."
},

{
  id: "roast-chicken-thighs-sweet-potato",
  title: "Roasted Chicken Thighs with Sweet Potatoes and Brussels Sprouts",
  blurb: "One pan, forty minutes, and the whole plate cooks together while the chicken fat crisps the sprouts.",
  emoji: "🍠", protein: "Chicken", cuisine: "American",
  totalTime: 50, activeTime: 15, difficulty: "Easy", servings: 4,
  plate: { protein: "Chicken thighs", starch: "Sweet potatoes", veg: "Brussels sprouts" },
  nutrition: { calories: 555, protein: 36, carbs: 41, fat: 26, fiber: 8 },
  tags: ["sheet-pan", "one-pan", "gluten-free", "dairy-free", "veggie-forward"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Everything", items: [
      "8 bone-in skin-on chicken thighs",
      "2 large sweet potatoes, cut into 1-inch chunks",
      "1 lb Brussels sprouts, halved",
      "1 red onion, cut into wedges",
      "3 tablespoons olive oil",
      "2 teaspoons smoked paprika",
      "1 teaspoon garlic powder",
      "1 1/2 teaspoons kosher salt",
      "1/2 teaspoon black pepper",
      "1 tablespoon maple syrup"
    ]}
  ],
  steps: [
    "Heat the oven to 425F.",
    "Toss the sweet potatoes, sprouts, and onion with 2 tablespoons of the oil, half the salt, and the pepper. Spread on a large sheet pan. Use two pans rather than crowding one.",
    "Pat the thighs dry. Rub with the remaining oil, the paprika, garlic powder, and remaining salt.",
    "Nestle the thighs skin side up among the vegetables, giving each one space.",
    "Roast 40 to 45 minutes, until the skin is crisp and the thighs read 175F. Thighs are happiest cooked past 165F. They get more tender, not less.",
    "Drizzle the maple syrup over the vegetables, toss them in the pan drippings, and serve."
  ],
  tips: [
    "Cut the sweet potatoes no bigger than an inch or they will still be firm when the chicken is done.",
    "Sprouts cut side down against the pan get the deepest caramelization."
  ],
  makeAhead: "Chop all the vegetables the day before and keep them in a bag in the fridge."
},

{
  id: "arroz-con-pollo",
  title: "Arroz con Pollo",
  blurb: "Chicken and rice cooked together in one pot until the rice tastes like everything above it.",
  emoji: "🥘", protein: "Chicken", cuisine: "Latin",
  totalTime: 60, activeTime: 25, difficulty: "Medium", servings: 6,
  plate: { protein: "Chicken thighs", starch: "Saffron rice", veg: "Peppers and peas" },
  nutrition: { calories: 570, protein: 35, carbs: 58, fat: 20, fiber: 4 },
  tags: ["one-pan", "comfort", "budget", "leftovers", "dairy-free"],
  seasons: ["all"],
  ingredients: [
    { group: "Chicken", items: [
      "8 bone-in skin-on chicken thighs",
      "1 1/2 teaspoons kosher salt",
      "1 teaspoon ground cumin",
      "2 tablespoons olive oil"
    ]},
    { group: "Rice", items: [
      "1 onion, diced",
      "1 red bell pepper, diced",
      "4 cloves garlic, minced",
      "2 cups long-grain rice",
      "1 (14.5 oz) can diced tomatoes",
      "3 1/2 cups chicken broth",
      "1/2 teaspoon saffron threads or 1 teaspoon turmeric",
      "1 cup frozen peas",
      "1/2 cup chopped cilantro",
      "1 lime, cut into wedges"
    ]}
  ],
  steps: [
    "Season the thighs with the salt and cumin. Heat the oil in a wide Dutch oven over medium-high and brown them skin side down, 6 minutes, then 3 on the other side. Move to a plate.",
    "Pour off all but 2 tablespoons of fat. Add the onion and bell pepper and cook 6 minutes until soft.",
    "Add the garlic and cook 1 minute, then stir in the rice and toast it for 2 minutes until the grains look chalky.",
    "Add the tomatoes with their juice, the broth, and the saffron. Bring to a boil and taste the liquid. It should taste slightly too salty, because the rice will absorb it.",
    "Nestle the thighs back in skin side up, so the skin sits above the liquid. Reduce to a bare simmer, cover, and cook 25 minutes.",
    "Scatter the peas over the top, cover again, and cook 5 minutes more off the heat.",
    "Fluff gently, scatter with cilantro, and serve with lime wedges."
  ],
  tips: [
    "Don't stir once the rice is simmering. Stirring makes it gluey.",
    "Keeping the chicken skin above the liquid is what keeps it from going flabby."
  ],
  makeAhead: null
},

{
  id: "oven-fried-buttermilk-chicken",
  title: "Buttermilk Oven-Fried Chicken",
  blurb: "Craggy, crunchy, deeply seasoned chicken with none of the pot of hot oil.",
  emoji: "🍗", protein: "Chicken", cuisine: "American",
  totalTime: 55, activeTime: 25, difficulty: "Medium", servings: 4,
  ahead: { mins: 240, note: "Brines at least 4 hours, so start it in the morning" },
  plate: { protein: "Crispy chicken", starch: "Crumb crust", veg: null },
  nutrition: { calories: 510, protein: 44, carbs: 26, fat: 25, fiber: 2 },
  tags: ["comfort", "kid-friendly", "make-ahead"],
  seasons: ["all"],
  ingredients: [
    { group: "Brine", items: [
      "2 lb bone-in chicken pieces",
      "1 1/2 cups buttermilk",
      "1 tablespoon kosher salt",
      "1 teaspoon hot sauce"
    ]},
    { group: "Coating", items: [
      "2 cups panko breadcrumbs",
      "1/2 cup all-purpose flour",
      "2 teaspoons paprika",
      "1 1/2 teaspoons garlic powder",
      "1 teaspoon onion powder",
      "1 teaspoon black pepper",
      "1 teaspoon kosher salt",
      "1/4 cup melted butter"
    ]}
  ],
  steps: [
    "Whisk the buttermilk, salt, and hot sauce in a bowl. Submerge the chicken, cover, and refrigerate at least 4 hours, ideally overnight.",
    "Heat the oven to 400F and set a wire rack in a sheet pan.",
    "Toss the panko with the melted butter until every crumb is coated, then mix in the flour and all the seasonings.",
    "Lift each piece of chicken out of the buttermilk, letting the extra drip off, and press it firmly into the crumbs on all sides. Really press. Loose crumbs fall off.",
    "Arrange on the rack, not touching, and bake 35 to 40 minutes until deep golden and 165F at the bone.",
    "Rest 5 minutes before serving."
  ],
  tips: [
    "The rack matters. Sitting directly on the pan steams the underside soft.",
    "Buttermilk substitute: a tablespoon of lemon juice stirred into a cup of milk, left 5 minutes."
  ],
  makeAhead: "Brine up to 24 hours ahead. The longer soak makes a real difference to how juicy it is."
},

{
  id: "chicken-broccoli-stir-fry",
  title: "Chicken and Broccoli Stir-Fry",
  blurb: "Faster than takeout and lighter too, with a garlicky brown sauce that clings to everything.",
  emoji: "🥦", protein: "Chicken", cuisine: "Chinese",
  totalTime: 25, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "Chicken breast", starch: "Rice", veg: "Broccoli" },
  nutrition: { calories: 480, protein: 41, carbs: 49, fat: 12, fiber: 5 },
  tags: ["30-minutes", "dairy-free", "high-protein", "budget", "veggie-forward"],
  seasons: ["all"],
  ingredients: [
    { group: "Chicken", items: [
      "1 1/4 lb chicken breast, thinly sliced",
      "1 tablespoon cornstarch",
      "1 tablespoon soy sauce",
      "2 tablespoons neutral oil"
    ]},
    { group: "Sauce", items: [
      "1/3 cup chicken broth",
      "3 tablespoons soy sauce",
      "1 tablespoon oyster sauce",
      "1 tablespoon rice vinegar",
      "2 teaspoons sugar",
      "1 tablespoon cornstarch",
      "1 teaspoon sesame oil"
    ]},
    { group: "Vegetables", items: [
      "1 large head broccoli, cut into small florets",
      "4 cloves garlic, minced",
      "1 tablespoon grated ginger",
      "4 cups cooked rice, to serve"
    ]}
  ],
  steps: [
    "Toss the sliced chicken with the cornstarch and soy sauce. Let it sit 10 minutes while you prep everything else. This keeps it silky.",
    "Whisk all the sauce ingredients in a small bowl and keep it next to the stove. Stir-frying moves too fast to measure mid-cook.",
    "Heat 1 tablespoon oil in a wok or large skillet over high. Add the broccoli and 3 tablespoons water, cover, and steam 2 minutes. Uncover and cook 1 minute more until bright green. Move to a plate.",
    "Add the remaining oil and the chicken in a single layer. Leave 2 minutes to brown, then stir-fry 2 minutes more until just cooked.",
    "Add the garlic and ginger and stir 30 seconds until fragrant.",
    "Return the broccoli, whisk the sauce again, and pour it in. Toss constantly for 1 to 2 minutes until it thickens and coats everything.",
    "Serve immediately over rice."
  ],
  tips: [
    "Have every single thing chopped and next to the stove before you turn on the heat. There's no time once it starts.",
    "Whisk the sauce again right before pouring. The cornstarch settles to the bottom."
  ],
  makeAhead: "Slice the chicken and mix the sauce in the morning; the cooking takes 10 minutes."
},

{
  id: "pesto-chicken-blistered-tomatoes",
  title: "Pesto Chicken with Blistered Tomatoes",
  blurb: "Four ingredients doing a lot of work. The tomatoes burst into an instant sauce.",
  emoji: "🍅", protein: "Chicken", cuisine: "Italian",
  totalTime: 30, activeTime: 20, difficulty: "Easy", servings: 4,
  plate: { protein: "Chicken breast", starch: null, veg: "Cherry tomatoes" },
  nutrition: { calories: 420, protein: 42, carbs: 9, fat: 24, fiber: 2 },
  tags: ["30-minutes", "one-pan", "low-carb", "gluten-free", "high-protein"],
  seasons: ["summer"],
  ingredients: [
    { group: "Everything", items: [
      "4 boneless skinless chicken breasts",
      "1/2 cup basil pesto",
      "2 pints cherry tomatoes",
      "2 tablespoons olive oil",
      "1 teaspoon kosher salt",
      "1/2 teaspoon black pepper",
      "1/2 cup torn fresh mozzarella",
      "1/4 cup torn basil"
    ]}
  ],
  steps: [
    "Heat the oven to 425F.",
    "Pound the breasts to an even thickness and season with salt and pepper.",
    "Spread half the pesto over the chicken and let it sit 10 minutes.",
    "Toss the tomatoes with the olive oil and a pinch of salt in a baking dish. Nestle the chicken among them.",
    "Roast 20 to 24 minutes, until the tomatoes have split and the chicken reads 160F.",
    "Dot with the mozzarella and return to the oven 3 minutes, just until it slumps.",
    "Spoon the remaining pesto over the top, scatter with basil, and crush a few tomatoes into the pan juices to make a sauce."
  ],
  tips: [
    "Serve with bread or orzo. The tomato-pesto juices in the bottom of the dish are the best part.",
    "Store-bought pesto is fine here. Look for one where olive oil, not sunflower oil, is listed first."
  ],
  makeAhead: null
},

{
  id: "chicken-souvlaki-skewers",
  title: "Chicken Souvlaki Skewers",
  blurb: "Bright lemon-oregano chicken off the grill or the broiler, with warm pita and tzatziki.",
  emoji: "🍢", protein: "Chicken", cuisine: "Greek",
  totalTime: 40, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "Chicken skewers", starch: "Pita", veg: "Tomato and cucumber" },
  nutrition: { calories: 505, protein: 43, carbs: 38, fat: 20, fiber: 4 },
  tags: ["grill", "make-ahead", "high-protein", "leftovers"],
  seasons: ["summer", "spring"],
  ingredients: [
    { group: "Marinade", items: [
      "1 1/2 lb boneless skinless chicken thighs, cut into 1 1/2-inch cubes",
      "1/4 cup olive oil",
      "3 tablespoons lemon juice",
      "4 cloves garlic, minced",
      "1 tablespoon dried oregano",
      "1 teaspoon kosher salt",
      "1/2 teaspoon black pepper"
    ]},
    { group: "To serve", items: [
      "4 pita breads",
      "1 cup tzatziki",
      "2 tomatoes, sliced",
      "1/2 red onion, thinly sliced",
      "1 cucumber, sliced"
    ]}
  ],
  steps: [
    "Whisk the marinade ingredients together, add the chicken, and refrigerate at least 30 minutes, up to overnight.",
    "If using wooden skewers, soak them in water 20 minutes so they don't burn.",
    "Thread the chicken onto skewers, leaving a little space between pieces so the heat can get around them.",
    "Heat a grill or grill pan to medium-high, or set an oven rack 6 inches under the broiler.",
    "Cook 10 to 12 minutes, turning every 3 minutes, until charred in spots and cooked through.",
    "Rest 5 minutes. Warm the pitas for 30 seconds a side while you wait.",
    "Serve the skewers with pita, tzatziki, and the sliced vegetables."
  ],
  tips: [
    "Crowded skewers steam instead of char. Leave gaps.",
    "The marinade doubles as a dressing if you set some aside before the raw chicken goes in."
  ],
  makeAhead: "Marinate overnight and thread the skewers in the morning."
},

{
  id: "creamy-spinach-chicken",
  title: "Creamy Spinach and Sun-Dried Tomato Chicken",
  blurb: "A rich-tasting skillet dinner that's quietly low in carbs, with a pound of spinach hidden in the sauce.",
  emoji: "🥬", protein: "Chicken", cuisine: "Italian",
  totalTime: 30, activeTime: 30, difficulty: "Easy", servings: 4,
  plate: { protein: "Chicken breast", starch: null, veg: "Spinach" },
  nutrition: { calories: 450, protein: 43, carbs: 11, fat: 26, fiber: 3 },
  tags: ["30-minutes", "one-pan", "low-carb", "gluten-free", "comfort"],
  seasons: ["all"],
  ingredients: [
    { group: "Chicken", items: [
      "4 boneless skinless chicken breasts",
      "1 teaspoon kosher salt",
      "1/2 teaspoon black pepper",
      "1 teaspoon Italian seasoning",
      "2 tablespoons olive oil"
    ]},
    { group: "Sauce", items: [
      "3 cloves garlic, minced",
      "1/2 cup sun-dried tomatoes, sliced",
      "3/4 cup chicken broth",
      "3/4 cup heavy cream",
      "1/2 cup grated Parmesan",
      "10 oz fresh spinach"
    ]}
  ],
  steps: [
    "Pound the breasts to an even thickness and season with salt, pepper, and Italian seasoning.",
    "Heat the oil in a large skillet over medium-high. Sear the chicken 5 to 6 minutes a side until golden and just cooked through. Move to a plate.",
    "Lower the heat to medium. Add the garlic and sun-dried tomatoes and cook 1 minute.",
    "Pour in the broth and scrape up the browned bits. Simmer 2 minutes.",
    "Stir in the cream and Parmesan and simmer 3 minutes until slightly thickened.",
    "Add the spinach in handfuls, stirring until each one wilts before adding the next. It looks like far too much and then it's not.",
    "Return the chicken and its juices to the pan, spoon sauce over, and serve."
  ],
  tips: [
    "Ten ounces of raw spinach cooks down to about a cup. Don't be alarmed by the mountain.",
    "Sun-dried tomatoes packed in oil are softer and more flavorful than the dry ones."
  ],
  makeAhead: null
},

{
  id: "chicken-shawarma-bowls",
  title: "Chicken Shawarma Bowls",
  blurb: "Warm-spiced roasted chicken over rice with pickled onions and a lemony tahini drizzle.",
  emoji: "🌯", protein: "Chicken", cuisine: "Middle Eastern",
  totalTime: 50, activeTime: 20, difficulty: "Easy", servings: 4,
  plate: { protein: "Spiced chicken", starch: "Rice", veg: "Salad and pickled onion" },
  nutrition: { calories: 590, protein: 43, carbs: 54, fat: 23, fiber: 6 },
  tags: ["make-ahead", "high-protein", "dairy-free", "leftovers", "veggie-forward"],
  seasons: ["all"],
  ingredients: [
    { group: "Chicken", items: [
      "2 lb boneless skinless chicken thighs",
      "1/4 cup olive oil",
      "2 teaspoons ground cumin",
      "2 teaspoons paprika",
      "1 teaspoon ground coriander",
      "1/2 teaspoon ground cinnamon",
      "1/2 teaspoon turmeric",
      "4 cloves garlic, minced",
      "3 tablespoons lemon juice",
      "1 1/2 teaspoons kosher salt"
    ]},
    { group: "Pickled onions", items: [
      "1 red onion, very thinly sliced",
      "1/2 cup red wine vinegar",
      "1 teaspoon sugar",
      "1/2 teaspoon salt"
    ]},
    { group: "Tahini sauce", items: [
      "1/3 cup tahini",
      "3 tablespoons lemon juice",
      "1 clove garlic, grated",
      "4-6 tablespoons cold water",
      "1/4 teaspoon salt"
    ]},
    { group: "Bowls", items: [
      "3 cups cooked rice",
      "2 cups chopped romaine",
      "2 tomatoes, diced",
      "1/2 cup chopped parsley"
    ]}
  ],
  steps: [
    "Toss the chicken with all the marinade ingredients. Let it sit 30 minutes, or overnight in the fridge.",
    "Meanwhile, cover the sliced onion with the vinegar, sugar, and salt. Leave 30 minutes. It will turn bright pink.",
    "Whisk the tahini with the lemon juice and garlic. It will seize into a paste. Keep whisking in cold water a tablespoon at a time until it loosens into a pourable sauce.",
    "Heat the oven to 425F. Spread the chicken on a sheet pan in a single layer.",
    "Roast 25 to 30 minutes, until the edges are dark and crisp. For extra char, broil the last 2 minutes.",
    "Rest 5 minutes, then chop into rough pieces.",
    "Build the bowls: rice, chicken, romaine, tomato, pickled onions, parsley, and a heavy drizzle of tahini."
  ],
  tips: [
    "Tahini seizing up is normal and alarming the first time. Cold water and persistence fix it.",
    "The pickled onions keep two weeks in the fridge and improve almost any sandwich."
  ],
  makeAhead: "Marinate the chicken, pickle the onions, and make the sauce a day ahead."
},

{
  id: "balsamic-chicken-roasted-vegetables",
  title: "Balsamic Chicken with Roasted Vegetables",
  blurb: "A tangy glaze that turns sticky in the oven, over a pan of whatever vegetables need using up.",
  emoji: "🍇", protein: "Chicken", cuisine: "Italian",
  totalTime: 45, activeTime: 15, difficulty: "Easy", servings: 4,
  plate: { protein: "Chicken thighs", starch: "Baby potatoes", veg: "Zucchini and peppers" },
  nutrition: { calories: 520, protein: 35, carbs: 39, fat: 24, fiber: 6 },
  tags: ["sheet-pan", "one-pan", "gluten-free", "dairy-free", "budget"],
  seasons: ["summer", "fall"],
  ingredients: [
    { group: "Glaze", items: [
      "1/3 cup balsamic vinegar",
      "3 tablespoons olive oil",
      "2 tablespoons honey",
      "1 tablespoon Dijon mustard",
      "4 cloves garlic, minced",
      "1 teaspoon dried thyme",
      "1 teaspoon kosher salt"
    ]},
    { group: "Pan", items: [
      "8 bone-in skin-on chicken thighs",
      "1 lb baby potatoes, halved",
      "2 zucchini, cut into thick half-moons",
      "2 bell peppers, cut into chunks",
      "1 red onion, cut into wedges",
      "2 tablespoons olive oil"
    ]}
  ],
  steps: [
    "Whisk the glaze ingredients together. Pour half over the chicken and let it sit 20 minutes.",
    "Heat the oven to 425F.",
    "Toss the potatoes with 1 tablespoon oil and a pinch of salt, spread on a sheet pan, and roast 15 minutes on their own. They need the head start.",
    "Toss the zucchini, peppers, and onion with the remaining oil.",
    "Push the potatoes aside, add the other vegetables and the chicken thighs skin side up, and roast 30 minutes more.",
    "Brush the remaining glaze over the chicken and roast 5 minutes to set it, watching that it doesn't burn.",
    "Rest 5 minutes and serve straight from the pan."
  ],
  tips: [
    "Potatoes take roughly twice as long as zucchini. The staggered start is what keeps the zucchini from turning to mush.",
    "Honey burns fast. Save the second half of the glaze for the very end."
  ],
  makeAhead: "Mix the glaze up to a week ahead."
},

{
  id: "chicken-caesar-dinner-salad",
  title: "Grilled Chicken Caesar Dinner Salad",
  blurb: "A proper meal-sized salad with warm sliced chicken and garlicky homemade croutons.",
  emoji: "🥗", protein: "Chicken", cuisine: "American",
  totalTime: 35, activeTime: 30, difficulty: "Easy", servings: 4,
  plate: { protein: "Grilled chicken", starch: "Croutons", veg: "Romaine" },
  nutrition: { calories: 465, protein: 42, carbs: 22, fat: 24, fiber: 4 },
  tags: ["30-minutes", "high-protein", "veggie-forward", "grill"],
  seasons: ["summer", "spring"],
  ingredients: [
    { group: "Chicken", items: [
      "1 1/2 lb boneless skinless chicken breasts",
      "2 tablespoons olive oil",
      "1 teaspoon kosher salt",
      "1/2 teaspoon black pepper",
      "1/2 teaspoon garlic powder"
    ]},
    { group: "Croutons", items: [
      "4 cups torn day-old bread",
      "3 tablespoons olive oil",
      "1 clove garlic, grated",
      "1/4 teaspoon salt"
    ]},
    { group: "Dressing", items: [
      "1/2 cup mayonnaise",
      "1/4 cup grated Parmesan",
      "2 tablespoons lemon juice",
      "2 teaspoons Dijon mustard",
      "3 anchovy fillets, minced, or 1 teaspoon anchovy paste",
      "1 clove garlic, grated",
      "2 tablespoons water"
    ]},
    { group: "Salad", items: [
      "3 romaine hearts, chopped",
      "1/2 cup shaved Parmesan"
    ]}
  ],
  steps: [
    "Heat the oven to 400F. Toss the bread with the oil, garlic, and salt and bake 12 minutes until golden and crunchy.",
    "Whisk all the dressing ingredients together. Taste it. It should be sharp and salty, since the lettuce will mute it.",
    "Pound the chicken to an even thickness, rub with oil, and season.",
    "Grill or pan-sear over medium-high, 5 to 6 minutes a side, until 160F. Rest 5 minutes, then slice thickly.",
    "Toss the romaine with about two thirds of the dressing, adding more only if it looks dry.",
    "Pile onto plates, add the warm chicken and croutons, and finish with shaved Parmesan and plenty of black pepper."
  ],
  tips: [
    "The anchovy doesn't taste fishy. It tastes like Caesar dressing. Leave it out and the dressing tastes like mayonnaise.",
    "Dress the leaves right before serving or they wilt into soup."
  ],
  makeAhead: "Dressing keeps five days; croutons keep three in a sealed jar."
},

{
  id: "teriyaki-chicken-bowls",
  title: "Teriyaki Chicken Rice Bowls",
  blurb: "Glossy homemade teriyaki, no bottle needed, over rice with quick-cooked vegetables.",
  emoji: "🍚", protein: "Chicken", cuisine: "Japanese",
  totalTime: 35, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "Chicken thighs", starch: "Rice", veg: "Carrots and snap peas" },
  nutrition: { calories: 535, protein: 37, carbs: 63, fat: 14, fiber: 4 },
  tags: ["30-minutes", "kid-friendly", "dairy-free", "budget", "leftovers"],
  seasons: ["all"],
  ingredients: [
    { group: "Sauce", items: [
      "1/3 cup soy sauce",
      "3 tablespoons mirin or 2 tablespoons honey",
      "2 tablespoons brown sugar",
      "1 tablespoon rice vinegar",
      "1 teaspoon grated ginger",
      "2 cloves garlic, minced",
      "1 tablespoon cornstarch mixed with 2 tablespoons water"
    ]},
    { group: "Bowls", items: [
      "1 1/2 lb boneless skinless chicken thighs",
      "1 tablespoon neutral oil",
      "1 1/2 cups short-grain rice",
      "2 carrots, thinly sliced",
      "8 oz snap peas",
      "2 scallions, sliced",
      "1 teaspoon sesame seeds"
    ]}
  ],
  steps: [
    "Cook the rice according to the package directions.",
    "Combine everything for the sauce except the cornstarch slurry in a small pot. Simmer 3 minutes, then whisk in the slurry and cook 1 minute until it turns glossy. Set aside.",
    "Heat the oil in a large skillet over medium-high. Cook the thighs 6 minutes a side until browned and cooked through. Rest on a board.",
    "In the same pan, add the carrots and snap peas with 2 tablespoons water. Cover and cook 3 minutes until crisp-tender.",
    "Slice the chicken and return it to the pan. Pour over about three quarters of the sauce and toss to coat.",
    "Serve over rice with the rest of the sauce, scallions, and sesame seeds."
  ],
  tips: [
    "Homemade teriyaki keeps two weeks in the fridge and is a fraction of the sugar of the bottled kind.",
    "Slicing the chicken after it rests, not before cooking, keeps far more juice inside."
  ],
  makeAhead: "Make a double batch of sauce and keep half in a jar."
},

{
  id: "chicken-tinga-tacos",
  title: "Chicken Tinga Tacos",
  blurb: "Smoky chipotle shredded chicken that simmers itself while you set the table.",
  emoji: "🌮", protein: "Chicken", cuisine: "Mexican",
  totalTime: 45, activeTime: 20, difficulty: "Easy", servings: 6,
  plate: { protein: "Shredded chicken", starch: "Corn tortillas", veg: "Cabbage slaw" },
  nutrition: { calories: 445, protein: 34, carbs: 38, fat: 17, fiber: 7 },
  tags: ["make-ahead", "freezer-friendly", "budget", "dairy-free", "leftovers"],
  seasons: ["all"],
  ingredients: [
    { group: "Tinga", items: [
      "2 lb boneless skinless chicken thighs",
      "1 tablespoon olive oil",
      "1 large onion, sliced",
      "4 cloves garlic, minced",
      "1 (28 oz) can crushed tomatoes",
      "2-3 chipotle peppers in adobo, minced",
      "1 tablespoon adobo sauce from the can",
      "1 teaspoon dried oregano",
      "1 teaspoon ground cumin",
      "1 1/2 teaspoons kosher salt"
    ]},
    { group: "To serve", items: [
      "12 corn tortillas",
      "3 cups shredded cabbage",
      "2 tablespoons lime juice",
      "1/2 cup crumbled cotija or feta",
      "1 avocado, sliced",
      "1/2 cup chopped cilantro"
    ]}
  ],
  steps: [
    "Heat the oil in a Dutch oven over medium-high. Brown the thighs 4 minutes a side. They won't cook through yet. Move to a plate.",
    "Add the onion to the pot and cook 6 minutes until soft and lightly browned. Add the garlic and cook 1 minute.",
    "Stir in the tomatoes, chipotles, adobo sauce, oregano, cumin, and salt. Return the chicken with any juices.",
    "Simmer covered on low for 25 minutes, until the chicken shreds easily with a fork.",
    "Lift the chicken out, shred it with two forks, and return it to the sauce. Simmer uncovered 5 minutes to thicken.",
    "Toss the cabbage with the lime juice and a pinch of salt.",
    "Warm the tortillas and build tacos with chicken, slaw, cheese, avocado, and cilantro."
  ],
  tips: [
    "Start with two chipotles. You can always stir in more; you can't take heat out.",
    "The rest of the can of chipotles freezes well spooned into an ice cube tray."
  ],
  makeAhead: "The tinga is better on day two and freezes for three months."
},

{
  id: "herb-butter-chicken-breast",
  title: "Herb Butter Chicken Breast with Smashed Potatoes",
  blurb: "Chicken breast basted in herb butter, with crispy smashed potatoes alongside.",
  emoji: "🧈", protein: "Chicken", cuisine: "American",
  totalTime: 55, activeTime: 30, difficulty: "Medium", servings: 4,
  plate: { protein: "Chicken breast", starch: "Smashed potatoes", veg: null },
  nutrition: { calories: 560, protein: 45, carbs: 34, fat: 27, fiber: 4 },
  tags: ["comfort", "gluten-free", "special-occasion"],
  seasons: ["all"],
  ingredients: [
    { group: "Potatoes", items: [
      "1 1/2 lb baby potatoes",
      "3 tablespoons olive oil",
      "1 teaspoon kosher salt"
    ]},
    { group: "Chicken", items: [
      "4 boneless skinless chicken breasts",
      "1 teaspoon kosher salt",
      "1/2 teaspoon black pepper",
      "1 tablespoon olive oil",
      "4 tablespoons butter",
      "4 cloves garlic, smashed",
      "4 sprigs thyme",
      "2 sprigs rosemary",
      "1 tablespoon lemon juice"
    ]}
  ],
  steps: [
    "Heat the oven to 450F. Boil the potatoes in well-salted water 18 minutes, until a knife slides in easily. Drain and let steam dry 5 minutes.",
    "Put the potatoes on a sheet pan and crush each one flat with the bottom of a glass. Drizzle with the oil and salt and roast 25 minutes until the edges are lacy and crisp.",
    "Meanwhile, pound the breasts to an even thickness and season well.",
    "Heat the oil in a heavy skillet over medium-high. Sear the chicken 5 minutes without moving it, until deeply golden. Flip.",
    "Add the butter, garlic, thyme, and rosemary. As the butter foams, tilt the pan and spoon it over the chicken continuously for 3 to 4 minutes, until it reads 160F.",
    "Move the chicken to a board and rest 5 minutes. Stir the lemon juice into the pan butter.",
    "Slice the chicken, spoon the herb butter over, and serve with the potatoes."
  ],
  tips: [
    "Basting isn't fussiness. The hot butter cooks the top while the pan cooks the bottom, so the breast finishes faster and drier heat never gets to it.",
    "Let the potatoes steam dry after draining. Wet potatoes never crisp."
  ],
  makeAhead: "Boil and smash the potatoes earlier in the day; roast them just before dinner."
},

{
  id: "chicken-cordon-bleu-bake",
  title: "Chicken Cordon Bleu Bake",
  blurb: "All the ham, Swiss, and crunch of the rolled version with none of the toothpicks.",
  emoji: "🥪", protein: "Chicken", cuisine: "French",
  totalTime: 50, activeTime: 20, difficulty: "Easy", servings: 6,
  plate: { protein: "Chicken and ham", starch: "Crumb topping", veg: null },
  nutrition: { calories: 530, protein: 46, carbs: 20, fat: 29, fiber: 1 },
  tags: ["comfort", "kid-friendly", "make-ahead", "leftovers"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Bake", items: [
      "2 lb boneless skinless chicken breasts, cut into large chunks",
      "1 teaspoon kosher salt",
      "1/2 teaspoon black pepper",
      "8 oz sliced deli ham, chopped",
      "8 oz Swiss cheese, shredded"
    ]},
    { group: "Sauce", items: [
      "3 tablespoons butter",
      "3 tablespoons all-purpose flour",
      "2 cups milk",
      "2 tablespoons Dijon mustard",
      "1/4 teaspoon nutmeg",
      "1/2 teaspoon salt"
    ]},
    { group: "Topping", items: [
      "1 1/2 cups panko breadcrumbs",
      "3 tablespoons melted butter",
      "2 tablespoons chopped parsley"
    ]}
  ],
  steps: [
    "Heat the oven to 375F and butter a 9x13 baking dish.",
    "Season the chicken and spread it in the dish. Scatter the ham over the top.",
    "Melt the butter in a saucepan over medium. Whisk in the flour and cook 1 minute until it smells nutty.",
    "Add the milk a splash at a time, whisking constantly, until smooth. Simmer 4 minutes until it thickens enough to coat a spoon. Stir in the mustard, nutmeg, and salt.",
    "Pour the sauce over the chicken and ham, then scatter the Swiss over the top.",
    "Toss the panko with the melted butter and sprinkle it evenly across the dish.",
    "Bake 30 to 35 minutes, until bubbling at the edges and deep golden on top. Rest 10 minutes, scatter with parsley, and serve."
  ],
  tips: [
    "Adding cold milk gradually to the roux is what prevents lumps. Dumping it in all at once is where it goes wrong.",
    "Serve with something sharp and green. A lemony salad cuts the richness."
  ],
  makeAhead: "Assemble through the cheese layer a day ahead; add the crumbs just before baking."
},

{
  id: "jerk-chicken-rice-peas",
  title: "Jerk-Spiced Chicken with Rice and Peas",
  blurb: "Warm allspice heat on the chicken and coconut rice underneath to cool it down.",
  emoji: "🌴", protein: "Chicken", cuisine: "Caribbean",
  totalTime: 60, activeTime: 25, difficulty: "Medium", servings: 4,
  ahead: { mins: 120, note: "Marinates at least 2 hours before it goes in the oven" },
  plate: { protein: "Jerk chicken", starch: "Coconut rice and beans", veg: null },
  nutrition: { calories: 625, protein: 40, carbs: 62, fat: 24, fiber: 8 },
  tags: ["make-ahead", "dairy-free", "leftovers", "grill"],
  seasons: ["summer"],
  ingredients: [
    { group: "Jerk marinade", items: [
      "8 bone-in skin-on chicken thighs",
      "4 scallions, roughly chopped",
      "3 cloves garlic",
      "1 tablespoon grated ginger",
      "1 Scotch bonnet or jalapeno, seeded",
      "2 tablespoons soy sauce",
      "2 tablespoons lime juice",
      "2 tablespoons brown sugar",
      "1 tablespoon ground allspice",
      "1 teaspoon dried thyme",
      "1/2 teaspoon cinnamon",
      "1 1/2 teaspoons kosher salt",
      "3 tablespoons olive oil"
    ]},
    { group: "Rice and peas", items: [
      "1 1/2 cups long-grain rice",
      "1 (14 oz) can coconut milk",
      "1 cup water",
      "1 (15 oz) can kidney beans, drained",
      "2 scallions, sliced",
      "3 sprigs thyme",
      "1 teaspoon salt"
    ]}
  ],
  steps: [
    "Blend all the marinade ingredients except the chicken into a rough paste.",
    "Rub it all over the thighs, getting under the skin where you can. Refrigerate at least 2 hours, ideally overnight.",
    "For the rice, combine the coconut milk, water, beans, scallions, thyme, and salt in a pot. Bring to a boil, stir in the rice, cover, and cook on the lowest heat 20 minutes. Rest 10 minutes off the heat before fluffing.",
    "Heat the oven to 425F. Arrange the thighs skin side up on a foil-lined sheet pan.",
    "Roast 35 to 40 minutes, until the skin is dark and the meat reads 175F.",
    "Broil the last 2 minutes for char, watching closely. The sugar in the marinade goes from caramelized to burnt quickly.",
    "Rest 5 minutes and serve over the rice and peas."
  ],
  tips: [
    "Scotch bonnets are hot. Half a pepper with the seeds out is plenty for most people.",
    "Wear gloves handling the pepper, or wash your hands twice before touching your face."
  ],
  makeAhead: "The marinade keeps a week in the fridge and freezes well."
},

{
  id: "chicken-milanese-arugula",
  title: "Chicken Milanese with Arugula Salad",
  blurb: "A crisp cutlet the size of the plate with a pile of peppery salad dressed right on top.",
  emoji: "🥬", protein: "Chicken", cuisine: "Italian",
  totalTime: 30, activeTime: 30, difficulty: "Easy", servings: 4,
  plate: { protein: "Breaded cutlet", starch: "Breadcrumb crust", veg: "Arugula and tomato" },
  nutrition: { calories: 495, protein: 44, carbs: 24, fat: 25, fiber: 3 },
  tags: ["30-minutes", "veggie-forward", "special-occasion"],
  seasons: ["spring", "summer"],
  ingredients: [
    { group: "Cutlets", items: [
      "1 1/2 lb chicken breasts, halved horizontally",
      "1/2 cup all-purpose flour",
      "2 eggs, beaten",
      "1 1/2 cups panko breadcrumbs",
      "1/2 cup grated Parmesan",
      "1 teaspoon kosher salt",
      "1/2 teaspoon black pepper",
      "1/3 cup olive oil for frying"
    ]},
    { group: "Salad", items: [
      "5 oz arugula",
      "1 cup cherry tomatoes, halved",
      "1/4 red onion, thinly sliced",
      "2 tablespoons lemon juice",
      "3 tablespoons olive oil",
      "Shaved Parmesan, to finish"
    ]}
  ],
  steps: [
    "Pound the cutlets thin. A quarter inch, no thicker.",
    "Set out three plates: flour, egg, and panko mixed with the Parmesan, salt, and pepper.",
    "Coat each cutlet in flour, then egg, then press firmly into the crumbs.",
    "Heat the oil in a large skillet over medium-high until a crumb sizzles on contact. Fry the cutlets two at a time, 2 to 3 minutes a side, until deep golden.",
    "Drain on a rack, not paper towels, and season with a pinch of salt while still hot.",
    "Whisk the lemon juice and oil with a pinch of salt. Toss with the arugula, tomatoes, and onion right before serving.",
    "Put a cutlet on each plate, pile the salad on top, and finish with shaved Parmesan."
  ],
  tips: [
    "Salt the cutlet the moment it leaves the pan. Salt doesn't stick once the surface cools.",
    "A rack keeps the underside crisp; paper towels trap steam and soften it."
  ],
  makeAhead: null
},

{
  id: "apricot-dijon-chicken",
  title: "Apricot Dijon Chicken with Rice Pilaf",
  blurb: "Three pantry ingredients make a sweet-sharp glaze that looks like you tried much harder.",
  emoji: "🍑", protein: "Chicken", cuisine: "American",
  totalTime: 45, activeTime: 15, difficulty: "Easy", servings: 4,
  plate: { protein: "Chicken thighs", starch: "Rice pilaf", veg: null },
  nutrition: { calories: 545, protein: 36, carbs: 55, fat: 19, fiber: 3 },
  tags: ["one-pan", "budget", "kid-friendly", "dairy-free", "make-ahead"],
  seasons: ["all"],
  ingredients: [
    { group: "Chicken", items: [
      "8 bone-in skin-on chicken thighs",
      "1 1/2 teaspoons kosher salt",
      "1/2 teaspoon black pepper",
      "1/2 cup apricot preserves",
      "3 tablespoons Dijon mustard",
      "2 tablespoons soy sauce",
      "2 cloves garlic, minced"
    ]},
    { group: "Pilaf", items: [
      "1 1/2 cups long-grain rice",
      "2 tablespoons butter",
      "1 small onion, diced",
      "3 cups chicken broth",
      "1/4 cup chopped parsley",
      "1/4 cup toasted slivered almonds"
    ]}
  ],
  steps: [
    "Heat the oven to 400F. Season the thighs on both sides.",
    "Whisk the preserves, mustard, soy sauce, and garlic together.",
    "Arrange the thighs skin side up in a baking dish and brush half the glaze over them.",
    "Roast 35 minutes, brushing with the remaining glaze at the 20-minute mark.",
    "Meanwhile, melt the butter in a saucepan and cook the onion 5 minutes. Add the rice and toast 2 minutes, then add the broth, bring to a boil, cover, and cook on low 18 minutes.",
    "Fluff the rice with the parsley and almonds.",
    "If the chicken skin isn't as dark as you want, broil 2 minutes. Rest 5 minutes and serve over the pilaf."
  ],
  tips: [
    "Any jam works. Peach, orange marmalade, even fig. The mustard is what keeps it from being cloying.",
    "Toast the almonds in a dry pan for 3 minutes; it's worth the extra pan."
  ],
  makeAhead: "The glaze keeps two weeks in a jar in the fridge."
},

{
  id: "chicken-sausage-peppers",
  title: "Chicken Sausage with Peppers and Onions",
  blurb: "A weeknight standby: everything roasts together, and it's just as good in a roll as on a plate.",
  emoji: "🌭", protein: "Chicken", cuisine: "Italian",
  totalTime: 40, activeTime: 10, difficulty: "Easy", servings: 4,
  plate: { protein: "Chicken sausage", starch: "Baby potatoes", veg: "Peppers and onions" },
  nutrition: { calories: 460, protein: 28, carbs: 40, fat: 22, fiber: 6 },
  tags: ["sheet-pan", "one-pan", "budget", "dairy-free", "leftovers"],
  seasons: ["all"],
  ingredients: [
    { group: "Sheet pan", items: [
      "6 Italian chicken sausages",
      "3 bell peppers, sliced thick",
      "2 onions, sliced thick",
      "1 lb baby potatoes, halved",
      "3 tablespoons olive oil",
      "1 teaspoon Italian seasoning",
      "1/2 teaspoon red pepper flakes",
      "1 teaspoon kosher salt",
      "2 tablespoons balsamic vinegar"
    ]}
  ],
  steps: [
    "Heat the oven to 425F.",
    "Toss the potatoes with 1 tablespoon oil and a pinch of salt. Spread on a sheet pan and roast 15 minutes.",
    "Toss the peppers and onions with the remaining oil, Italian seasoning, red pepper flakes, and salt.",
    "Add the peppers, onions, and sausages to the pan, nudging the potatoes over to make room.",
    "Roast 22 to 25 minutes, turning the sausages once, until they're browned and the peppers are soft with dark edges.",
    "Drizzle the balsamic over everything and toss right on the pan before serving."
  ],
  tips: [
    "Slice the peppers thick. Thin strips disappear into the pan.",
    "Leftovers make an excellent frittata or sandwich filling the next day."
  ],
  makeAhead: null
},

{
  id: "turkey-meatballs-marinara",
  title: "Baked Turkey Meatballs in Marinara",
  blurb: "Light, tender meatballs that hold together, baked not fried, over whatever you like.",
  emoji: "🍝", protein: "Turkey", cuisine: "Italian",
  totalTime: 45, activeTime: 25, difficulty: "Easy", servings: 5,
  plate: { protein: "Turkey meatballs", starch: null, veg: "Tomato sauce" },
  nutrition: { calories: 385, protein: 34, carbs: 18, fat: 20, fiber: 4 },
  tags: ["make-ahead", "freezer-friendly", "kid-friendly", "high-protein", "leftovers"],
  seasons: ["all"],
  ingredients: [
    { group: "Meatballs", items: [
      "2 lb ground turkey (93 percent lean)",
      "3/4 cup panko breadcrumbs",
      "1/2 cup whole milk",
      "1/2 cup grated Parmesan",
      "1 egg",
      "4 cloves garlic, minced",
      "1/4 cup chopped parsley",
      "1 1/2 teaspoons kosher salt",
      "1 teaspoon dried oregano",
      "1/2 teaspoon black pepper"
    ]},
    { group: "Sauce", items: [
      "1 (28 oz) can crushed tomatoes",
      "2 tablespoons olive oil",
      "3 cloves garlic, sliced",
      "1/2 teaspoon red pepper flakes",
      "1 teaspoon salt",
      "1/4 cup torn basil"
    ]}
  ],
  steps: [
    "Heat the oven to 400F and line a sheet pan with parchment.",
    "Soak the panko in the milk for 5 minutes until it turns to paste. This is what keeps lean turkey from going dry and bouncy.",
    "Add everything else for the meatballs and mix with your hands just until combined. Overmixing makes them tough.",
    "Roll into 24 balls, about 1 1/2 inches each, and space them on the pan.",
    "Bake 18 to 20 minutes, until browned and cooked through.",
    "Meanwhile, warm the oil in a wide pot, add the garlic and pepper flakes, and cook 1 minute. Add the tomatoes and salt and simmer 15 minutes.",
    "Slide the meatballs into the sauce, simmer 5 minutes to marry, and finish with basil."
  ],
  tips: [
    "Wet your hands before rolling and the mixture won't stick to you.",
    "Freeze the cooked meatballs on a tray, then bag them. They go straight into sauce from frozen."
  ],
  makeAhead: "Roll the raw meatballs a day ahead, or freeze cooked ones for three months."
}

]);
