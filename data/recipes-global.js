/* Dinners from further afield. Including a few Polish ones for the Jedrzejczak side. */
window.RECIPES = (window.RECIPES || []).concat([

{
  id: "chicken-adobo",
  title: "Filipino Chicken Adobo",
  blurb: "Soy sauce, vinegar, garlic, and bay. Four ingredients that turn into something far bigger than the sum.",
  emoji: "🍗", protein: "Chicken", cuisine: "Filipino",
  totalTime: 60, activeTime: 15, difficulty: "Easy", servings: 4,
  plate: { protein: "Chicken thighs", starch: "Rice", veg: null },
  nutrition: { calories: 505, protein: 38, carbs: 46, fat: 18, fiber: 1 },
  tags: ["one-pan", "budget", "make-ahead", "dairy-free", "leftovers", "comfort"],
  seasons: ["all"],
  ingredients: [
    { group: "Adobo", items: [
      "8 bone-in skin-on chicken thighs",
      "1/2 cup soy sauce",
      "1/2 cup white or cane vinegar",
      "12 cloves garlic, smashed",
      "6 bay leaves",
      "2 teaspoons whole black peppercorns",
      "1 tablespoon brown sugar",
      "1 cup water",
      "2 tablespoons neutral oil"
    ]},
    { group: "To serve", items: [
      "4 cups cooked rice",
      "3 scallions, sliced"
    ]}
  ],
  steps: [
    "Combine the chicken, soy sauce, vinegar, garlic, bay leaves, peppercorns, and sugar in a bowl and marinate 30 minutes, or overnight.",
    "Lift the chicken out and pat it dry, reserving all the marinade.",
    "Heat the oil in a wide pot over medium-high and brown the chicken skin side down 6 minutes, then 3 on the other side.",
    "Pour in the reserved marinade and the water. Bring to a boil and let it bubble uncovered for 5 minutes without stirring. This cooks off the harsh edge of the raw vinegar.",
    "Reduce to a simmer, cover, and cook 25 minutes.",
    "Uncover and simmer 15 minutes more, until the sauce reduces to a glossy, syrupy glaze that coats the chicken.",
    "Taste. It should be salty, sour, and faintly sweet all at once. Serve over rice with scallions and plenty of the sauce."
  ],
  tips: [
    "Don't stir during the first five minutes of boiling. It's the traditional rule and it does mellow the vinegar.",
    "Adobo is famously better the next day, and it keeps for a week because the vinegar preserves it."
  ],
  makeAhead: "Improves over two to three days in the fridge."
},

{
  id: "beef-bulgogi",
  title: "Beef Bulgogi",
  blurb: "Thin ribeye in a sweet-savory marinade, seared hard and fast, with rice and quick vegetables.",
  emoji: "🥩", protein: "Beef", cuisine: "Korean",
  totalTime: 45, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "Ribeye", starch: "Rice", veg: "Lettuce, cucumber, scallion" },
  nutrition: { calories: 585, protein: 40, carbs: 54, fat: 22, fiber: 3 },
  tags: ["make-ahead", "dairy-free", "high-protein", "grill", "special-occasion"],
  seasons: ["all"],
  ingredients: [
    { group: "Marinade", items: [
      "2 lb ribeye or sirloin, sliced paper thin",
      "1 Asian pear or apple, grated",
      "1/2 cup soy sauce",
      "3 tablespoons brown sugar",
      "2 tablespoons sesame oil",
      "8 cloves garlic, minced",
      "1 tablespoon grated ginger",
      "1 onion, thinly sliced",
      "1/2 teaspoon black pepper"
    ]},
    { group: "To serve", items: [
      "4 cups cooked short-grain rice",
      "1 head butter or red leaf lettuce",
      "1 English cucumber, sliced",
      "4 scallions, sliced",
      "1 tablespoon sesame seeds",
      "1/2 cup ssamjang or gochujang"
    ]}
  ],
  steps: [
    "Freeze the beef for 30 minutes, then slice it as thinly as you possibly can against the grain. Partly frozen meat is far easier to slice thin.",
    "Mix all the marinade ingredients and fold in the beef. Marinate at least 30 minutes, up to overnight.",
    "Heat a large cast-iron skillet or grill pan over high until it's smoking.",
    "Add the beef in a single layer, in batches. Crowding steams it. Cook 2 minutes without moving it, then toss for 1 minute more until the edges char.",
    "Repeat with the remaining beef, wiping the pan between batches if it gets too wet.",
    "Serve with rice, lettuce leaves for wrapping, cucumber, scallions, sesame seeds, and ssamjang."
  ],
  tips: [
    "The grated pear tenderizes the beef with natural enzymes and adds a clean sweetness. It's the traditional ingredient and it matters.",
    "Cook in batches over the highest heat you have. This is a searing dish, not a simmering one."
  ],
  makeAhead: "Marinate overnight; the beef cooks in five minutes."
},

{
  id: "vietnamese-lemongrass-pork-bowls",
  title: "Vietnamese Lemongrass Pork Bowls",
  blurb: "Charred, caramelized pork over cool rice noodles with herbs, pickles, and nuoc cham.",
  emoji: "🍜", protein: "Pork", cuisine: "Vietnamese",
  totalTime: 50, activeTime: 30, difficulty: "Medium", servings: 4,
  plate: { protein: "Pork shoulder", starch: "Rice noodles", veg: "Herbs, cucumber, pickled carrot" },
  nutrition: { calories: 605, protein: 36, carbs: 68, fat: 21, fiber: 5 },
  tags: ["make-ahead", "dairy-free", "grill", "leftovers", "veggie-forward"],
  seasons: ["summer"],
  ingredients: [
    { group: "Pork", items: [
      "2 lb pork shoulder, thinly sliced",
      "3 stalks lemongrass, tender core only, minced",
      "6 cloves garlic, minced",
      "3 tablespoons fish sauce",
      "3 tablespoons brown sugar",
      "2 tablespoons soy sauce",
      "2 tablespoons neutral oil",
      "1 teaspoon black pepper"
    ]},
    { group: "Nuoc cham", items: [
      "1/4 cup fish sauce",
      "1/4 cup lime juice",
      "3 tablespoons sugar",
      "1/2 cup warm water",
      "2 cloves garlic, minced",
      "1 red chili, sliced"
    ]},
    { group: "Bowls", items: [
      "12 oz rice vermicelli",
      "2 carrots, julienned",
      "1/4 cup rice vinegar",
      "1 teaspoon sugar",
      "1 English cucumber, julienned",
      "2 cups mixed mint, cilantro, and basil",
      "3 cups shredded lettuce",
      "1/2 cup chopped roasted peanuts"
    ]}
  ],
  steps: [
    "Mix all the pork marinade ingredients and fold in the sliced pork. Marinate at least 30 minutes, or overnight.",
    "Toss the julienned carrot with the rice vinegar, sugar, and a pinch of salt and leave to pickle.",
    "Whisk the nuoc cham ingredients until the sugar dissolves. Taste: it should be sour, salty, and sweet in roughly equal measure.",
    "Cook the vermicelli according to the package, rinse under cold water, and drain very well.",
    "Heat a grill pan or heavy skillet over high until smoking. Cook the pork in batches in a single layer, 2 to 3 minutes a side, until the edges are charred and caramelized.",
    "Build the bowls: lettuce, noodles, pork, pickled carrot, cucumber, and a big handful of herbs.",
    "Pour the nuoc cham over each bowl and finish with peanuts."
  ],
  tips: [
    "The sugar in the marinade is what gives the char. Get the pan hot and don't move the meat around.",
    "Use far more herbs than feels reasonable. In Vietnamese bowls they're a vegetable, not a garnish."
  ],
  makeAhead: "Marinate the pork and pickle the carrots a day ahead."
},

{
  id: "tortilla-espanola",
  title: "Tortilla Espanola",
  blurb: "The Spanish potato omelette: soft potatoes, sweet onion, and eggs, cooked slowly into a thick round.",
  emoji: "🥚", protein: "Eggs", cuisine: "Spanish",
  totalTime: 55, activeTime: 40, difficulty: "Medium", servings: 6,
  plate: { protein: "Eggs and Manchego", starch: "Potatoes", veg: "Onion" },
  nutrition: { calories: 565, protein: 26, carbs: 33, fat: 37, fiber: 3 },
  tags: ["budget", "make-ahead", "gluten-free", "veggie-forward", "comfort", "leftovers"],
  seasons: ["all"],
  ingredients: [
    { group: "Tortilla", items: [
      "1 cup grated Manchego or aged cheddar",
      "2 lb Yukon gold potatoes, peeled and thinly sliced",
      "1 large onion, thinly sliced",
      "1 1/2 cups olive oil, for cooking the potatoes",
      "12 eggs",
      "2 teaspoons kosher salt"
    ]},
    { group: "To serve", items: [
      "Crusty bread",
      "Green salad"
    ]}
  ],
  steps: [
    "Heat the olive oil in a 10-inch nonstick skillet over medium-low. Add the potatoes and onion with a teaspoon of the salt.",
    "Cook gently 25 minutes, stirring occasionally, until the potatoes are completely soft but not browned. They should be poaching in the oil, not frying.",
    "Drain the potatoes and onion in a colander set over a bowl, saving the oil. Let them cool 5 minutes.",
    "Beat the eggs with the remaining salt in a large bowl, stir in the cheese, then fold in the warm potatoes. Let this sit 10 minutes so the potatoes soak up some egg.",
    "Wipe the skillet and return 2 tablespoons of the reserved oil. Heat over medium.",
    "Pour in the mixture, spread it evenly, and cook 6 to 8 minutes, running a spatula around the edge to keep it loose, until the bottom is set and golden.",
    "Put a large plate over the pan and, in one confident motion, invert the tortilla onto it. Slide it back into the pan raw side down.",
    "Cook 4 to 5 minutes more, until just set with a slightly soft center. Rest 10 minutes, then cut into wedges and serve warm or at room temperature."
  ],
  tips: [
    "The flip is the only hard part. Use a plate wider than the pan, hold it tight against the rim, and commit. Hesitation is what makes it fall apart.",
    "The oil isn't wasted. Strain it and use it for roasting potatoes or in salad dressings for weeks."
  ],
  makeAhead: "Traditionally eaten at room temperature, so it's ideal made hours ahead."
},

{
  id: "chicken-tagine-olives",
  title: "Chicken Tagine with Olives and Lemon",
  blurb: "Slow-braised chicken with warm spices, briny olives, and preserved lemon over couscous.",
  emoji: "🍋", protein: "Chicken", cuisine: "Moroccan",
  totalTime: 75, activeTime: 25, difficulty: "Medium", servings: 6,
  plate: { protein: "Chicken thighs", starch: "Couscous", veg: "Onion, olives, herbs" },
  nutrition: { calories: 585, protein: 40, carbs: 52, fat: 24, fiber: 6 },
  tags: ["one-pan", "make-ahead", "dairy-free", "special-occasion", "leftovers", "comfort"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Chicken", items: [
      "8 bone-in skin-on chicken thighs",
      "2 teaspoons kosher salt",
      "1 teaspoon black pepper",
      "3 tablespoons olive oil"
    ]},
    { group: "Tagine", items: [
      "2 onions, thinly sliced",
      "6 cloves garlic, minced",
      "1 tablespoon grated ginger",
      "2 teaspoons ground cumin",
      "2 teaspoons ground coriander",
      "1 teaspoon turmeric",
      "1 teaspoon paprika",
      "1/2 teaspoon cinnamon",
      "1/2 teaspoon saffron threads, optional",
      "2 cups chicken broth",
      "1 cup green olives, pitted",
      "1 preserved lemon, rinsed and chopped, or 1 lemon plus 1 tablespoon zest",
      "1/2 cup chopped cilantro",
      "1/2 cup chopped parsley"
    ]},
    { group: "To serve", items: [
      "2 cups couscous",
      "1/3 cup toasted almonds"
    ]}
  ],
  steps: [
    "Season the chicken. Heat the oil in a wide heavy pot over medium-high and brown the thighs skin side down 7 minutes, then 3 on the other side. Move to a plate.",
    "Pour off all but 2 tablespoons of fat. Cook the onions 10 minutes, until soft and golden.",
    "Add the garlic and ginger for 1 minute, then all the ground spices and the saffron. Stir 60 seconds.",
    "Pour in the broth and scrape the bottom of the pot.",
    "Return the chicken skin side up, so the skin stays above the liquid. Cover and simmer gently 35 minutes.",
    "Add the olives and preserved lemon and simmer uncovered 15 minutes more, until the sauce has reduced and thickened.",
    "Prepare the couscous with boiling broth, covered, 10 minutes, then fluff.",
    "Stir most of the herbs into the tagine and taste for salt. The olives and preserved lemon are salty, so check before adding more. Serve over couscous with almonds and the remaining herbs."
  ],
  tips: [
    "Preserved lemon is worth seeking out. If you can't find it, use fresh lemon zest plus a squeeze of juice, added at the end.",
    "Keep the chicken skin above the liquid line and it stays browned rather than going soft."
  ],
  makeAhead: "Better the next day. Keeps four days."
},

{
  id: "ropa-vieja",
  title: "Ropa Vieja",
  blurb: "Shredded beef braised with peppers and olives until it looks like the old clothes it's named for.",
  emoji: "🫑", protein: "Beef", cuisine: "Cuban",
  totalTime: 195, activeTime: 30, difficulty: "Medium", servings: 6,
  plate: { protein: "Flank steak", starch: "Rice and black beans", veg: "Peppers, onions, tomato" },
  nutrition: { calories: 585, protein: 42, carbs: 56, fat: 20, fiber: 8 },
  tags: ["make-ahead", "freezer-friendly", "dairy-free", "gluten-free", "leftovers", "comfort"],
  seasons: ["all"],
  ingredients: [
    { group: "Beef", items: [
      "3 lb flank steak, cut into large pieces",
      "2 teaspoons kosher salt",
      "1 teaspoon black pepper",
      "3 tablespoons olive oil"
    ]},
    { group: "Braise", items: [
      "2 onions, sliced",
      "3 bell peppers (mixed colors), sliced",
      "8 cloves garlic, minced",
      "3 tablespoons tomato paste",
      "1 (28 oz) can crushed tomatoes",
      "1 cup dry white wine",
      "2 cups beef broth",
      "2 teaspoons ground cumin",
      "2 teaspoons dried oregano",
      "1 teaspoon smoked paprika",
      "2 bay leaves",
      "3/4 cup pimiento-stuffed green olives",
      "2 tablespoons capers",
      "1/2 cup chopped cilantro"
    ]},
    { group: "To serve", items: [
      "4 cups cooked rice",
      "1 (15 oz) can black beans, warmed",
      "2 limes, cut into wedges"
    ]}
  ],
  steps: [
    "Season the beef and sear it in the oil over high heat, 4 minutes per side, until well browned. Move to a plate.",
    "Cook the onions and peppers in the same pot 10 minutes, until soft and starting to color.",
    "Add the garlic for 1 minute, then the tomato paste and cook 2 minutes.",
    "Pour in the wine and simmer 4 minutes, scraping the pot.",
    "Add the tomatoes, broth, cumin, oregano, paprika, and bay leaves. Return the beef.",
    "Cover and simmer on low 2 to 2 1/2 hours, until the beef shreds easily with a fork.",
    "Lift the beef out, shred it, and return it to the pot with the olives and capers. Simmer uncovered 20 minutes to thicken.",
    "Stir in the cilantro and taste for salt. Serve over rice with black beans and lime."
  ],
  tips: [
    "Flank steak has a very pronounced grain, which is exactly why it shreds into those long strands.",
    "The olives and capers provide the salt. Season the braise lightly and adjust right at the end."
  ],
  makeAhead: "Better on day two. Freezes for three months."
},

{
  id: "chicken-paprikash",
  title: "Chicken Paprikash",
  blurb: "Hungarian comfort food: chicken in a deep red paprika and sour cream sauce over egg noodles.",
  emoji: "🌶️", protein: "Chicken", cuisine: "Hungarian",
  totalTime: 60, activeTime: 30, difficulty: "Easy", servings: 5,
  plate: { protein: "Chicken thighs", starch: "Egg noodles", veg: "Onion and peppers" },
  nutrition: { calories: 625, protein: 40, carbs: 54, fat: 27, fiber: 4 },
  tags: ["comfort", "one-pan", "make-ahead", "leftovers", "budget"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Chicken", items: [
      "8 bone-in skin-on chicken thighs",
      "2 teaspoons kosher salt",
      "1 teaspoon black pepper",
      "2 tablespoons neutral oil"
    ]},
    { group: "Sauce", items: [
      "3 large onions, finely diced",
      "2 red bell peppers, diced",
      "4 cloves garlic, minced",
      "1/4 cup sweet Hungarian paprika",
      "1 tablespoon tomato paste",
      "2 cups chicken broth",
      "1 cup sour cream",
      "2 tablespoons all-purpose flour",
      "1 teaspoon kosher salt"
    ]},
    { group: "To serve", items: [
      "12 oz wide egg noodles",
      "2 tablespoons butter",
      "1/4 cup chopped parsley"
    ]}
  ],
  steps: [
    "Season the thighs and brown them in the oil over medium-high, skin side down 7 minutes, then 3 on the other side. Move to a plate.",
    "Pour off all but 2 tablespoons of fat. Cook the onions and peppers 12 minutes over medium, until very soft and sweet. This large quantity of onion is the body of the sauce.",
    "Add the garlic and cook 1 minute.",
    "Take the pot off the heat completely and stir in the paprika and tomato paste. Paprika scorches and turns bitter in seconds over direct heat, which is why the pot comes off the stove.",
    "Return to medium heat, add the broth, and bring to a simmer.",
    "Nestle the chicken back in, cover, and simmer 30 minutes, until cooked through.",
    "Whisk the sour cream with the flour in a bowl, then whisk in a ladle of the hot sauce before stirring it all back into the pot. Simmer 3 minutes without boiling.",
    "Serve over buttered egg noodles with parsley."
  ],
  tips: [
    "Use fresh, good sweet Hungarian paprika. A quarter cup of stale supermarket paprika will taste like dust.",
    "Tempering the sour cream with hot liquid first is what stops it splitting."
  ],
  makeAhead: "Make the base ahead; add sour cream when reheating."
},

{
  id: "thai-basil-chicken",
  title: "Thai Basil Chicken (Pad Krapow)",
  blurb: "Fiery, garlicky minced chicken with a mountain of basil, over rice with a crispy fried egg.",
  emoji: "🌿", protein: "Chicken", cuisine: "Thai",
  totalTime: 25, activeTime: 20, difficulty: "Easy", servings: 4,
  plate: { protein: "Ground chicken and egg", starch: "Jasmine rice", veg: "Green beans and basil" },
  nutrition: { calories: 545, protein: 38, carbs: 52, fat: 20, fiber: 3 },
  tags: ["30-minutes", "dairy-free", "budget", "high-protein", "leftovers"],
  seasons: ["all"],
  ingredients: [
    { group: "Stir-fry", items: [
      "1 1/2 lb ground chicken or turkey",
      "3 tablespoons neutral oil",
      "8 cloves garlic, minced",
      "4 Thai chilies, minced, or 1 teaspoon red pepper flakes",
      "1 onion, sliced",
      "8 oz green beans, cut into 1-inch pieces",
      "3 cups Thai basil leaves, or Italian basil"
    ]},
    { group: "Sauce", items: [
      "3 tablespoons oyster sauce",
      "2 tablespoons fish sauce",
      "1 tablespoon soy sauce",
      "1 tablespoon brown sugar",
      "2 tablespoons water"
    ]},
    { group: "To serve", items: [
      "4 cups cooked jasmine rice",
      "4 eggs",
      "3 tablespoons oil for frying"
    ]}
  ],
  steps: [
    "Whisk the sauce ingredients together.",
    "Heat the oil in a wok or large skillet over high. Add the garlic and chilies and stir 20 seconds. Just until fragrant, not browned.",
    "Add the chicken and press it flat. Leave it 2 minutes to brown before breaking it up, then cook 3 minutes more.",
    "Add the onion and green beans and stir-fry 3 minutes.",
    "Pour in the sauce and toss 2 minutes, until it reduces and coats the meat.",
    "Turn off the heat and add all the basil at once, tossing until it just wilts. It looks like far too much and collapses to nothing.",
    "In a separate pan, fry the eggs in hot oil until the whites are crisp and bubbly at the edges and the yolks still runny.",
    "Serve the chicken over rice with a fried egg on top."
  ],
  tips: [
    "Add the basil off the heat at the very last second. Cooked basil turns black and loses everything that makes it worth using.",
    "The crispy fried egg isn't optional in Thailand and shouldn't be here either. Use plenty of hot oil."
  ],
  makeAhead: null
},

{
  id: "massaman-beef-curry",
  title: "Massaman Beef Curry",
  blurb: "A mild, rich curry with potatoes and peanuts, warm with cinnamon and cardamom.",
  emoji: "🥥", protein: "Beef", cuisine: "Thai",
  totalTime: 150, activeTime: 25, difficulty: "Medium", servings: 6,
  plate: { protein: "Beef chuck", starch: "Potatoes and rice", veg: "Onion and potato" },
  nutrition: { calories: 665, protein: 40, carbs: 58, fat: 31, fiber: 6 },
  tags: ["comfort", "make-ahead", "dairy-free", "gluten-free", "special-occasion", "leftovers"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Curry", items: [
      "3 lb beef chuck, cut into 1 1/2-inch cubes",
      "2 tablespoons neutral oil",
      "1/2 cup massaman curry paste",
      "2 (14 oz) cans coconut milk",
      "2 cups beef broth",
      "1 1/2 lb potatoes, cut into large chunks",
      "2 onions, cut into wedges",
      "3 tablespoons fish sauce",
      "3 tablespoons palm or brown sugar",
      "3 tablespoons tamarind paste or lime juice",
      "1 cinnamon stick",
      "4 cardamom pods",
      "3 bay leaves",
      "1 cup roasted peanuts"
    ]},
    { group: "To serve", items: [
      "3 cups cooked jasmine rice",
      "1/2 cup cilantro",
      "1 lime, cut into wedges"
    ]}
  ],
  steps: [
    "Pat the beef dry and brown it in the oil over high heat in two batches, 5 minutes each. Move to a plate.",
    "Scoop the thick cream from the top of one can of coconut milk into the pot. Cook 3 minutes until it separates and the oil comes out.",
    "Add the curry paste and fry it in that oil for 3 minutes, until deeply fragrant. This is the step that makes the curry taste like a curry.",
    "Return the beef with the rest of the coconut milk, the broth, cinnamon, cardamom, and bay leaves.",
    "Simmer gently, partly covered, for 1 1/2 hours.",
    "Add the potatoes, onions, fish sauce, sugar, and tamarind. Simmer 40 minutes more, until the beef is completely tender and the potatoes are soft.",
    "Stir in the peanuts and taste. It should be balanced between salty, sweet, and sour. Adjust with more fish sauce, sugar, or tamarind.",
    "Serve over jasmine rice with cilantro and lime."
  ],
  tips: [
    "Frying the paste in separated coconut cream is the traditional technique and it doubles the depth of flavor.",
    "Massaman is the mildest of the Thai curries, which makes it a good one for a table with different heat tolerances."
  ],
  makeAhead: "Better the next day. Keeps four days and freezes three months."
},

{
  id: "peruvian-roast-chicken",
  title: "Peruvian Roast Chicken with Green Sauce",
  blurb: "Cumin and lime marinated chicken with a bright, spicy green sauce that people put on everything.",
  emoji: "🍗", protein: "Chicken", cuisine: "Peruvian",
  totalTime: 100, activeTime: 25, difficulty: "Medium", servings: 4,
  ahead: { mins: 240, note: "Marinates at least 4 hours, so start it in the morning" },
  plate: { protein: "Roast chicken", starch: "Roasted potatoes", veg: "Green sauce and salad" },
  nutrition: { calories: 625, protein: 46, carbs: 34, fat: 33, fiber: 4 },
  tags: ["one-pan", "make-ahead", "gluten-free", "special-occasion", "high-protein"],
  seasons: ["all"],
  ingredients: [
    { group: "Chicken", items: [
      "1 (4 lb) whole chicken, spatchcocked",
      "1/4 cup lime juice",
      "3 tablespoons soy sauce",
      "3 tablespoons olive oil",
      "8 cloves garlic, minced",
      "1 tablespoon ground cumin",
      "1 tablespoon paprika",
      "1 teaspoon dried oregano",
      "2 teaspoons kosher salt",
      "1 teaspoon black pepper"
    ]},
    { group: "Potatoes", items: [
      "2 lb baby potatoes, halved",
      "2 tablespoons olive oil",
      "1 teaspoon salt"
    ]},
    { group: "Green sauce", items: [
      "1 cup packed cilantro",
      "2 jalapenos, seeded",
      "1/2 cup mayonnaise",
      "1/4 cup sour cream",
      "2 cloves garlic",
      "2 tablespoons lime juice",
      "1/4 cup grated Parmesan",
      "1/2 teaspoon salt"
    ]}
  ],
  steps: [
    "To spatchcock, cut out the backbone with kitchen shears and press the bird flat, breaking the breastbone. It cooks faster and more evenly this way.",
    "Whisk all the marinade ingredients, rub them over and under the skin, and refrigerate at least 4 hours, ideally overnight.",
    "Heat the oven to 425F. Toss the potatoes with oil and salt and spread them in a roasting pan.",
    "Set the chicken skin side up on top of the potatoes.",
    "Roast 50 to 60 minutes, until the skin is dark and crisp and the thigh reads 165F.",
    "Meanwhile, blend all the green sauce ingredients until completely smooth. Taste for salt and lime.",
    "Rest the chicken 15 minutes, then cut into pieces and serve with the potatoes and a generous amount of green sauce."
  ],
  tips: [
    "Spatchcocking cuts roasting time by a third and gives you crisp skin across the whole bird.",
    "Make double the green sauce. It goes on eggs, sandwiches, roasted vegetables, and everything else for the next week."
  ],
  makeAhead: "Marinate overnight; the sauce keeps five days."
},

{
  id: "kofta-kebabs-tahini",
  title: "Kofta Kebabs with Tahini Sauce",
  blurb: "Spiced ground meat skewers off the broiler with warm flatbread, salad, and tahini.",
  emoji: "🍢", protein: "Lamb", cuisine: "Middle Eastern",
  totalTime: 40, activeTime: 30, difficulty: "Easy", servings: 4,
  plate: { protein: "Lamb and beef kofta", starch: "Flatbread", veg: "Tomato, cucumber, parsley" },
  nutrition: { calories: 605, protein: 38, carbs: 42, fat: 32, fiber: 6 },
  tags: ["grill", "high-protein", "make-ahead", "freezer-friendly"],
  seasons: ["summer"],
  ingredients: [
    { group: "Kofta", items: [
      "1 lb ground lamb",
      "1 lb ground beef",
      "1 onion, grated and squeezed dry",
      "5 cloves garlic, minced",
      "1/2 cup finely chopped parsley",
      "2 teaspoons ground cumin",
      "2 teaspoons ground coriander",
      "1 teaspoon smoked paprika",
      "1/2 teaspoon cinnamon",
      "1/2 teaspoon allspice",
      "2 teaspoons kosher salt",
      "1/2 teaspoon black pepper"
    ]},
    { group: "Tahini sauce", items: [
      "1/2 cup tahini",
      "1/4 cup lemon juice",
      "2 cloves garlic, grated",
      "6-8 tablespoons cold water",
      "1/2 teaspoon salt"
    ]},
    { group: "To serve", items: [
      "4 flatbreads or pitas",
      "2 tomatoes, diced",
      "1 cucumber, diced",
      "1/2 red onion, thinly sliced",
      "1 cup parsley leaves",
      "2 tablespoons sumac, optional"
    ]}
  ],
  steps: [
    "Mix all the kofta ingredients with your hands for a full 2 minutes. Unlike burgers, kofta benefits from being worked. It becomes slightly sticky, which is what holds it on the skewer.",
    "Chill the mixture 20 minutes.",
    "Shape into 12 sausage shapes around flat metal skewers, or into oblong patties if you have no skewers.",
    "Whisk the tahini with the lemon juice and garlic. It will seize into a stiff paste. Keep whisking in cold water a tablespoon at a time until it pours smoothly.",
    "Heat the broiler with a rack 6 inches from the element, or heat a grill to medium-high.",
    "Broil the kofta 5 minutes per side, until browned and cooked through.",
    "Toss the tomato, cucumber, onion, and parsley with a squeeze of lemon and a pinch of salt.",
    "Serve the kofta in warm flatbread with the salad, plenty of tahini sauce, and a sprinkle of sumac."
  ],
  tips: [
    "Squeeze the grated onion dry. Wet onion makes the mixture slump off the skewers.",
    "Flat skewers grip the meat and stop it spinning when you turn them. Round ones let everything rotate."
  ],
  makeAhead: "Shape the kofta a day ahead, or freeze raw for three months."
},

{
  id: "kielbasa-cabbage-potatoes",
  title: "Kielbasa with Cabbage and Potatoes",
  blurb: "A Polish weeknight staple: browned sausage, soft cabbage, and buttery potatoes in one pan.",
  emoji: "🥔", protein: "Pork", cuisine: "Polish",
  totalTime: 45, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "Kielbasa", starch: "Potatoes", veg: "Cabbage and onion" },
  nutrition: { calories: 705, protein: 32, carbs: 47, fat: 45, fiber: 8 },
  tags: ["one-pan", "budget", "comfort", "leftovers", "gluten-free", "dairy-free"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Everything", items: [
      "2 lb kielbasa, cut into thick coins",
      "1 1/2 lb baby potatoes, halved",
      "1 small head green cabbage, cored and roughly chopped",
      "2 onions, sliced",
      "3 tablespoons neutral oil",
      "3 tablespoons butter",
      "5 cloves garlic, minced",
      "1 teaspoon caraway seeds",
      "1 teaspoon smoked paprika",
      "1 1/2 teaspoons kosher salt",
      "1/2 teaspoon black pepper",
      "1/2 cup chicken broth",
      "2 tablespoons apple cider vinegar",
      "1/4 cup chopped dill"
    ]}
  ],
  steps: [
    "Boil the potatoes in salted water 12 minutes until just tender. Drain.",
    "Heat 1 tablespoon oil in a very large skillet over medium-high. Brown the kielbasa 6 minutes, turning, until the edges are crisp. Move to a plate.",
    "Add the remaining oil and the onions and cook 6 minutes.",
    "Add the cabbage in batches as it wilts down, along with the caraway, paprika, salt, and pepper. Cook 10 minutes, until softened with browned edges.",
    "Add the garlic and cook 1 minute.",
    "Push everything aside, add the butter and the drained potatoes, and let them brown for 4 minutes without stirring.",
    "Return the kielbasa, add the broth, and cook 3 minutes until it has mostly cooked away.",
    "Stir in the vinegar and dill and taste for salt."
  ],
  tips: [
    "Caraway is the flavor that makes this taste Polish rather than generic. Don't skip it.",
    "The splash of vinegar at the end lifts the whole pan. Cabbage and sausage both need acid."
  ],
  makeAhead: "Keeps four days and reheats well in a hot skillet."
},

{
  id: "pierogi-kielbasa-onions",
  title: "Pierogi with Caramelized Onions and Kielbasa",
  blurb: "Potato dumplings crisped in butter with sweet onions and sausage. Sunday supper at Babcia's.",
  emoji: "🥟", protein: "Pork", cuisine: "Polish",
  totalTime: 45, activeTime: 35, difficulty: "Easy", servings: 4,
  plate: { protein: "Kielbasa", starch: "Pierogi", veg: "Onions and cabbage" },
  nutrition: { calories: 665, protein: 26, carbs: 62, fat: 35, fiber: 5 },
  tags: ["comfort", "budget", "kid-friendly", "leftovers"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Everything", items: [
      "2 lb frozen potato and cheese pierogi",
      "1 lb kielbasa, sliced into coins",
      "3 large onions, thinly sliced",
      "6 tablespoons butter",
      "2 tablespoons neutral oil",
      "1 teaspoon sugar",
      "1 1/2 teaspoons kosher salt",
      "1/2 teaspoon black pepper",
      "2 tablespoons apple cider vinegar"
    ]},
    { group: "To serve", items: [
      "3/4 cup sour cream",
      "1/4 cup chopped dill",
      "3 scallions, sliced"
    ]}
  ],
  steps: [
    "Melt 3 tablespoons of the butter in a large skillet over medium-low. Add the onions, sugar, and a pinch of salt.",
    "Cook 25 minutes, stirring every few minutes, until deep golden and jammy. This is the backbone of the dish and it can't be hurried.",
    "Meanwhile, bring a large pot of salted water to a boil. Cook the pierogi 4 minutes, until they float. Drain gently.",
    "Push the onions to one side of the skillet. Add the oil and brown the kielbasa 5 minutes until the edges crisp. Combine with the onions and move everything to a bowl.",
    "Add the remaining butter to the skillet over medium-high. Add the drained pierogi in a single layer and cook 3 minutes per side, until golden and crisp. Work in batches if needed.",
    "Return the onions and kielbasa to the pan, add the vinegar, and toss for a minute.",
    "Serve with sour cream, dill, and scallions."
  ],
  tips: [
    "Boil the pierogi first, then pan-fry. Frying frozen pierogi directly leaves the middle cold.",
    "Don't crowd the pan when frying them or they steam and stay pale instead of crisping."
  ],
  makeAhead: "Caramelize the onions up to five days ahead. They keep beautifully."
},

{
  id: "chicken-satay-peanut",
  title: "Chicken Satay with Peanut Sauce",
  blurb: "Turmeric-marinated skewers off the grill with a rich peanut sauce and cucumber salad.",
  emoji: "🍢", protein: "Chicken", cuisine: "Indonesian",
  totalTime: 50, activeTime: 30, difficulty: "Easy", servings: 4,
  plate: { protein: "Chicken thighs", starch: "Rice", veg: "Cucumber salad" },
  nutrition: { calories: 605, protein: 44, carbs: 52, fat: 25, fiber: 4 },
  tags: ["grill", "make-ahead", "dairy-free", "high-protein", "kid-friendly"],
  seasons: ["summer"],
  ingredients: [
    { group: "Marinade", items: [
      "2 lb boneless skinless chicken thighs, cut into strips",
      "1 (14 oz) can coconut milk, half reserved for the sauce",
      "3 cloves garlic, minced",
      "1 tablespoon grated ginger",
      "1 tablespoon ground coriander",
      "2 teaspoons turmeric",
      "1 teaspoon ground cumin",
      "2 tablespoons brown sugar",
      "2 tablespoons fish sauce",
      "1 1/2 teaspoons kosher salt"
    ]},
    { group: "Peanut sauce", items: [
      "3/4 cup smooth peanut butter",
      "Reserved coconut milk",
      "3 tablespoons soy sauce",
      "2 tablespoons brown sugar",
      "2 tablespoons lime juice",
      "1 tablespoon red curry paste",
      "2-4 tablespoons water"
    ]},
    { group: "To serve", items: [
      "4 cups cooked jasmine rice",
      "1 English cucumber, diced",
      "1/4 red onion, thinly sliced",
      "3 tablespoons rice vinegar",
      "1/3 cup chopped peanuts",
      "1/2 cup cilantro"
    ]}
  ],
  steps: [
    "Whisk half the coconut milk with the rest of the marinade ingredients. Add the chicken strips and marinate at least 30 minutes, or overnight.",
    "Soak wooden skewers in water 20 minutes if using.",
    "For the sauce, warm the reserved coconut milk in a small pot. Whisk in the peanut butter, soy sauce, brown sugar, curry paste, and lime juice. Simmer 3 minutes, thinning with water until it pours thickly.",
    "Toss the cucumber and red onion with the rice vinegar and a pinch of salt.",
    "Thread the chicken onto skewers in a loose ribbon rather than packing it tight.",
    "Grill or broil 4 to 5 minutes per side, until charred at the edges and cooked through.",
    "Serve the skewers over rice with the peanut sauce, cucumber salad, chopped peanuts, and cilantro."
  ],
  tips: [
    "Reserve half the coconut milk before the raw chicken goes in, so it can safely go into the sauce.",
    "Thread the strips in loose waves so more surface area meets the heat and chars."
  ],
  makeAhead: "The peanut sauce keeps a week and is good on noodles, rice, and roasted vegetables."
},

{
  id: "misir-wot",
  title: "Misir Wot (Ethiopian Red Lentils)",
  blurb: "Red lentils stewed with berbere and spiced butter until deeply savory. Eat it with your hands and injera.",
  emoji: "🍲", protein: "Vegetarian", cuisine: "Ethiopian",
  totalTime: 55, activeTime: 20, difficulty: "Easy", servings: 5,
  plate: { protein: "Red lentils", starch: "Injera or rice", veg: "Onion and tomato" },
  nutrition: { calories: 505, protein: 27, carbs: 77, fat: 11, fiber: 20 },
  tags: ["budget", "veggie-forward", "dairy-free", "make-ahead", "freezer-friendly", "high-protein", "comfort"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Stew", items: [
      "2 1/2 cups red lentils, rinsed",
      "3 large onions, very finely diced",
      "1/4 cup neutral oil",
      "6 cloves garlic, minced",
      "2 tablespoons grated ginger",
      "3-4 tablespoons berbere spice blend",
      "2 tablespoons tomato paste",
      "6 cups water or vegetable broth",
      "2 teaspoons kosher salt",
      "2 tablespoons butter or niter kibbeh"
    ]},
    { group: "To serve", items: [
      "Injera, flatbread, or rice",
      "1 1/2 cups plain yogurt",
      "1/2 cup chopped cilantro"
    ]}
  ],
  steps: [
    "Cook the onions in a dry pot over medium heat for 8 minutes, stirring, until they release their moisture and start to stick. This dry-cooking step is traditional and concentrates their sweetness.",
    "Add the oil and cook 10 minutes more, until the onions are soft and deep golden.",
    "Add the garlic and ginger and cook 2 minutes.",
    "Add the berbere and tomato paste and stir constantly for 2 minutes. Berbere burns easily, so keep it moving.",
    "Add the lentils, water, and salt. Bring to a boil, then simmer 30 minutes, stirring occasionally, until the lentils have collapsed into a thick stew.",
    "Stir in the butter at the end for richness and gloss.",
    "Taste for salt and heat. Serve with injera or rice, a spoonful of yogurt, and cilantro."
  ],
  tips: [
    "Berbere blends vary enormously in heat. Start with three tablespoons and add more once you have tasted it.",
    "The huge quantity of finely diced onion isn't a mistake. It melts down and becomes the body of the stew."
  ],
  makeAhead: "Better the next day. Keeps five days and freezes three months."
},

{
  id: "goan-fish-curry",
  title: "Goan Fish Curry",
  blurb: "Flaky white fish in a tangy coconut and tamarind curry, bright with chile and ginger.",
  emoji: "🐟", protein: "Fish", cuisine: "Indian",
  totalTime: 40, activeTime: 30, difficulty: "Medium", servings: 4,
  plate: { protein: "White fish", starch: "Rice", veg: "Tomato and onion" },
  nutrition: { calories: 505, protein: 38, carbs: 48, fat: 19, fiber: 4 },
  tags: ["dairy-free", "gluten-free", "high-protein", "one-pan"],
  seasons: ["all"],
  ingredients: [
    { group: "Curry", items: [
      "2 lb firm white fish such as cod or halibut, cut into large chunks",
      "3 tablespoons coconut or neutral oil",
      "1 large onion, thinly sliced",
      "6 cloves garlic, minced",
      "2 tablespoons grated ginger",
      "2 green chilies, slit lengthwise",
      "1 tablespoon ground coriander",
      "2 teaspoons ground cumin",
      "1 teaspoon turmeric",
      "1 teaspoon paprika",
      "1/2 teaspoon cayenne",
      "2 tomatoes, chopped",
      "1 (14 oz) can coconut milk",
      "3 tablespoons tamarind paste, or 3 tablespoons lime juice",
      "1 1/2 teaspoons kosher salt",
      "1/2 cup water"
    ]},
    { group: "To serve", items: [
      "3 cups cooked basmati rice",
      "1/2 cup cilantro",
      "1 lime, cut into wedges"
    ]}
  ],
  steps: [
    "Season the fish chunks with a little salt and turmeric and leave them while you build the sauce.",
    "Heat the oil in a wide pan over medium. Cook the onion 8 minutes until soft and golden.",
    "Add the garlic, ginger, and chilies and cook 2 minutes.",
    "Add all the ground spices and stir 60 seconds, until fragrant.",
    "Add the tomatoes and cook 5 minutes, mashing them down, until they break apart and the oil separates.",
    "Pour in the coconut milk, tamarind, salt, and water. Simmer 8 minutes, until slightly thickened.",
    "Lower the fish gently into the sauce in a single layer. Simmer 6 to 8 minutes, spooning sauce over but not stirring, until the fish is just opaque and flakes.",
    "Taste for salt and sourness, scatter with cilantro, and serve over rice with lime."
  ],
  tips: [
    "Don't stir once the fish goes in. Spoon sauce over it instead, or it will break into flakes.",
    "Tamarind is what makes this distinctly Goan. Lime juice works but gives a sharper, less rounded sourness."
  ],
  makeAhead: "Make the sauce ahead; add fresh fish when you reheat it."
}

]);
