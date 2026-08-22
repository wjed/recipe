/* Soups, stews & braises. */
window.RECIPES = (window.RECIPES || []).concat([

{
  id: "classic-beef-stew",
  title: "Classic Beef Stew",
  blurb: "Beef braised until it falls apart, with potatoes and carrots in a rich, glossy gravy.",
  emoji: "🍲", protein: "Beef", cuisine: "American",
  totalTime: 180, activeTime: 35, difficulty: "Medium", servings: 6,
  plate: { protein: "Beef chuck", starch: "Potatoes", veg: "Carrots, celery, peas" },
  nutrition: { calories: 545, protein: 42, carbs: 42, fat: 21, fiber: 6 },
  tags: ["comfort", "make-ahead", "freezer-friendly", "one-pan", "leftovers", "budget"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Beef", items: [
      "3 lb beef chuck, cut into 1 1/2-inch cubes",
      "2 teaspoons kosher salt",
      "1 teaspoon black pepper",
      "1/3 cup all-purpose flour",
      "3 tablespoons olive oil"
    ]},
    { group: "Stew", items: [
      "2 onions, diced",
      "4 carrots, cut into thick coins",
      "3 stalks celery, sliced",
      "5 cloves garlic, minced",
      "3 tablespoons tomato paste",
      "1 1/2 cups dry red wine",
      "5 cups beef broth",
      "1 1/2 lb potatoes, cut into 1 1/2-inch chunks",
      "2 bay leaves",
      "4 sprigs thyme",
      "1 tablespoon Worcestershire sauce",
      "1 cup frozen peas",
      "1/4 cup chopped parsley"
    ]}
  ],
  steps: [
    "Pat the beef very dry, season with the salt and pepper, and toss with the flour until lightly coated.",
    "Heat the oil in a Dutch oven over medium-high. Brown the beef in three batches, 5 minutes per batch, without crowding. Rushing this by dumping it all in gives you grey, steamed meat. Move to a plate.",
    "Add the onions, carrots, and celery and cook 8 minutes.",
    "Add the garlic and tomato paste and cook 3 minutes, until the paste darkens.",
    "Pour in the wine and scrape the bottom of the pot thoroughly. Simmer 5 minutes.",
    "Return the beef with the broth, bay leaves, thyme, and Worcestershire. Bring to a bare simmer, cover, and cook on low for 1 1/2 hours.",
    "Add the potatoes and cook uncovered 45 minutes more, until the beef pulls apart and the gravy has thickened.",
    "Stir in the peas and parsley, taste for salt, and let it sit 10 minutes before serving."
  ],
  tips: [
    "If the beef is still tough, it needs more time, not more heat. Collagen breaks down slowly.",
    "Stew is always better the next day. Cool it completely and reheat gently."
  ],
  makeAhead: "Make up to three days ahead; freezes for three months."
},

{
  id: "chicken-noodle-soup",
  title: "Real Chicken Noodle Soup",
  blurb: "Made with bone-in chicken so the broth actually tastes like chicken. The cure for everything.",
  emoji: "🍜", protein: "Chicken", cuisine: "American",
  totalTime: 75, activeTime: 25, difficulty: "Easy", servings: 6,
  plate: { protein: "Chicken", starch: "Egg noodles", veg: "Carrot, celery, onion" },
  nutrition: { calories: 385, protein: 34, carbs: 38, fat: 10, fiber: 4 },
  tags: ["comfort", "make-ahead", "budget", "kid-friendly", "leftovers", "one-pan"],
  seasons: ["fall", "winter"], karolina: true,
  ingredients: [
    { group: "Broth", items: [
      "3 lb bone-in chicken thighs and drumsticks",
      "10 cups water",
      "2 onions, halved",
      "3 carrots, halved",
      "3 stalks celery, halved",
      "6 cloves garlic, smashed",
      "1 bunch parsley stems",
      "2 bay leaves",
      "1 tablespoon kosher salt",
      "1 teaspoon black peppercorns"
    ]},
    { group: "Soup", items: [
      "3 carrots, sliced",
      "3 stalks celery, sliced",
      "1 onion, diced",
      "2 tablespoons butter",
      "8 oz wide egg noodles",
      "2 tablespoons lemon juice",
      "1/4 cup chopped dill",
      "1/4 cup chopped parsley"
    ]}
  ],
  steps: [
    "Put all the broth ingredients in a large pot and bring to a bare simmer. Skim off the grey foam that rises in the first ten minutes.",
    "Simmer gently, uncovered, 45 minutes. Never let it boil hard - a rolling boil makes cloudy, greasy broth.",
    "Lift out the chicken and set aside. Strain the broth and discard the vegetables, which have given everything they have.",
    "When the chicken is cool enough to handle, pull the meat off the bones in large shreds and discard the skin and bones.",
    "Melt the butter in the empty pot and cook the fresh diced onion, carrots, and celery 8 minutes.",
    "Pour the strained broth back in and bring to a simmer. Add the noodles and cook according to the package.",
    "Return the shredded chicken, then stir in the lemon juice and herbs. Taste carefully for salt - broth almost always needs more than you think."
  ],
  tips: [
    "Cook the noodles separately if you plan on leftovers. Noodles left in soup overnight swell up and go mushy.",
    "The lemon juice at the end is what makes it taste bright instead of flat."
  ],
  makeAhead: "The broth and chicken keep four days and freeze for three months. Add fresh noodles when reheating."
},

{
  id: "minestrone",
  title: "Minestrone",
  blurb: "A whole garden in a pot with beans and pasta. Endlessly adaptable to what needs using up.",
  emoji: "🥬", protein: "Vegetarian", cuisine: "Italian",
  totalTime: 60, activeTime: 25, difficulty: "Easy", servings: 6,
  plate: { protein: "Cannellini beans", starch: "Small pasta", veg: "Zucchini, kale, tomato, carrot" },
  nutrition: { calories: 345, protein: 15, carbs: 56, fat: 8, fiber: 12 },
  tags: ["budget", "veggie-forward", "make-ahead", "freezer-friendly", "leftovers", "comfort"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Soup", items: [
      "3 tablespoons olive oil",
      "1 large onion, diced",
      "3 carrots, diced",
      "3 stalks celery, diced",
      "5 cloves garlic, minced",
      "2 tablespoons tomato paste",
      "1 (28 oz) can diced tomatoes",
      "8 cups vegetable broth",
      "1 Parmesan rind, if you have one",
      "2 (15 oz) cans cannellini beans, drained",
      "2 zucchini, diced",
      "1 bunch kale, stemmed and chopped",
      "1 cup small pasta such as ditalini",
      "2 teaspoons kosher salt",
      "1 teaspoon dried oregano",
      "2 bay leaves"
    ]},
    { group: "To serve", items: [
      "1/2 cup grated Parmesan",
      "1/4 cup chopped basil",
      "2 tablespoons good olive oil"
    ]}
  ],
  steps: [
    "Heat the oil in a large pot over medium. Cook the onion, carrots, and celery 10 minutes until softened.",
    "Add the garlic and tomato paste and cook 2 minutes.",
    "Add the tomatoes, broth, Parmesan rind, oregano, bay leaves, and salt. Simmer 20 minutes.",
    "Add the beans and zucchini and cook 8 minutes.",
    "Add the pasta and cook according to the package, about 9 minutes.",
    "Stir in the kale and cook 4 minutes more, until tender.",
    "Fish out the bay leaves and Parmesan rind. Taste for salt.",
    "Serve with grated Parmesan, basil, and a drizzle of good olive oil over each bowl."
  ],
  tips: [
    "Save Parmesan rinds in the freezer. Dropped into any soup they add a savory depth you cannot get another way.",
    "Cook the pasta separately if you want leftovers, since it keeps absorbing broth."
  ],
  makeAhead: "Keeps five days. Freeze without the pasta and add it fresh."
},

{
  id: "butternut-squash-soup",
  title: "Roasted Butternut Squash Soup",
  blurb: "Velvety, faintly sweet, and made deeper by roasting the squash instead of boiling it.",
  emoji: "🎃", protein: "Vegetarian", cuisine: "American",
  totalTime: 60, activeTime: 20, difficulty: "Easy", servings: 6,
  plate: { protein: null, starch: "Squash", veg: "Butternut squash, apple, onion" },
  nutrition: { calories: 265, protein: 5, carbs: 38, fat: 11, fiber: 7 },
  tags: ["make-ahead", "freezer-friendly", "veggie-forward", "gluten-free", "comfort", "budget"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Soup", items: [
      "1 large butternut squash, halved and seeded",
      "2 onions, cut into wedges",
      "1 apple, quartered",
      "6 cloves garlic, unpeeled",
      "4 tablespoons olive oil",
      "1 1/2 teaspoons kosher salt",
      "5 cups vegetable broth",
      "1 tablespoon grated ginger",
      "1/2 teaspoon nutmeg",
      "1/4 teaspoon cayenne",
      "1/2 cup heavy cream",
      "1 tablespoon maple syrup",
      "1 tablespoon apple cider vinegar"
    ]},
    { group: "To serve", items: [
      "1/3 cup toasted pumpkin seeds",
      "1/4 cup sour cream",
      "2 tablespoons chopped sage"
    ]}
  ],
  steps: [
    "Heat the oven to 425F. Brush the cut sides of the squash with oil, season, and put it cut side down on a sheet pan with the onions, apple, and garlic.",
    "Roast 40 to 45 minutes, until the squash is completely tender and the edges of the onions are dark.",
    "Squeeze the garlic out of its skins and scoop the squash flesh away from the skin.",
    "Put everything in a pot with the broth, ginger, nutmeg, and cayenne. Simmer 10 minutes.",
    "Blend until completely smooth - an immersion blender works, but a countertop blender gives a silkier result. Fill it no more than half full with hot liquid.",
    "Return to the pot and stir in the cream, maple syrup, and vinegar. Taste for salt.",
    "Serve with pumpkin seeds, a swirl of sour cream, and sage."
  ],
  tips: [
    "Roasting rather than boiling the squash is the entire difference. Boiled squash soup tastes watery and flat.",
    "The splash of vinegar at the end wakes it up. Without acid, sweet soups taste heavy."
  ],
  makeAhead: "Keeps five days and freezes three months. Add the cream when reheating."
},

{
  id: "tomato-soup-grilled-cheese",
  title: "Tomato Soup with Grilled Cheese",
  blurb: "A proper roasted tomato soup and a crisp, buttery sandwich. Nobody outgrows this.",
  emoji: "🥪", protein: "Vegetarian", cuisine: "American",
  totalTime: 55, activeTime: 30, difficulty: "Easy", servings: 4,
  plate: { protein: "Cheddar", starch: "Bread", veg: "Tomatoes" },
  nutrition: { calories: 585, protein: 22, carbs: 52, fat: 33, fiber: 6 },
  tags: ["comfort", "kid-friendly", "budget", "veggie-forward", "make-ahead"],
  seasons: ["fall", "winter"], karolina: true,
  ingredients: [
    { group: "Soup", items: [
      "2 (28 oz) cans whole peeled tomatoes, drained",
      "1 onion, cut into wedges",
      "6 cloves garlic, peeled",
      "4 tablespoons olive oil",
      "1 1/2 teaspoons kosher salt",
      "1 teaspoon sugar",
      "3 cups vegetable broth",
      "1/2 cup heavy cream",
      "1/2 cup torn basil",
      "1 tablespoon butter"
    ]},
    { group: "Grilled cheese", items: [
      "8 slices good bread",
      "6 tablespoons butter, softened",
      "8 oz sharp cheddar, shredded",
      "4 oz Gruyere, shredded"
    ]}
  ],
  steps: [
    "Heat the oven to 425F. Spread the drained tomatoes, onion, and garlic on a sheet pan, toss with the oil, salt, and sugar, and roast 35 minutes until charred at the edges.",
    "Scrape everything, including the browned bits, into a pot with the broth. Simmer 10 minutes.",
    "Blend until smooth, then stir in the cream, basil, and butter. Taste for salt.",
    "For the sandwiches, butter the outside of every slice of bread.",
    "Build each sandwich with both cheeses and set it butter side down in a cold skillet.",
    "Cook over medium-low for 4 to 5 minutes a side. Low and slow is what melts the cheese through before the bread burns.",
    "Cut the sandwiches on the diagonal and serve with the soup."
  ],
  tips: [
    "Roasting canned tomatoes concentrates them and adds the char you would get from summer tomatoes.",
    "Start the grilled cheese in a cold pan over medium-low. High heat gives you a burnt sandwich with cold cheese inside."
  ],
  makeAhead: "The soup keeps five days and freezes well."
},

{
  id: "split-pea-ham-soup",
  title: "Split Pea and Ham Soup",
  blurb: "Thick, smoky, and filling, from a bag of dried peas and a ham hock. Costs almost nothing.",
  emoji: "🫛", protein: "Pork", cuisine: "American",
  totalTime: 105, activeTime: 20, difficulty: "Easy", servings: 6,
  plate: { protein: "Ham and split peas", starch: "Split peas", veg: "Carrot, celery, onion" },
  nutrition: { calories: 425, protein: 30, carbs: 52, fat: 10, fiber: 20 },
  tags: ["budget", "make-ahead", "freezer-friendly", "comfort", "high-protein", "leftovers"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Soup", items: [
      "1 lb dried green split peas, rinsed",
      "1 smoked ham hock, or 2 cups diced ham",
      "3 tablespoons olive oil",
      "1 large onion, diced",
      "3 carrots, diced",
      "3 stalks celery, diced",
      "4 cloves garlic, minced",
      "8 cups chicken broth or water",
      "2 bay leaves",
      "1 teaspoon dried thyme",
      "1 1/2 teaspoons kosher salt",
      "1/2 teaspoon black pepper",
      "2 tablespoons apple cider vinegar"
    ]}
  ],
  steps: [
    "Heat the oil in a large pot over medium. Cook the onion, carrots, and celery 10 minutes until soft.",
    "Add the garlic and cook 1 minute.",
    "Add the split peas, ham hock, broth, bay leaves, thyme, salt, and pepper.",
    "Bring to a boil, then reduce to a low simmer and cook, partly covered, 75 to 90 minutes, stirring occasionally so nothing sticks to the bottom.",
    "The soup is ready when the peas have completely collapsed and it is thick enough to hold a spoon upright for a moment.",
    "Lift out the ham hock. Pull off the meat, chop it, and stir it back in. Discard the bone and skin.",
    "Stir in the vinegar and taste for salt - how much you need depends entirely on how salty the ham was.",
    "If it is thicker than you like, thin with hot broth."
  ],
  tips: [
    "Split peas do not need soaking. They break down on their own in about 90 minutes.",
    "The vinegar at the end cuts through the richness. Without it the soup tastes muddy."
  ],
  makeAhead: "Thickens considerably in the fridge; thin with broth when reheating. Freezes three months."
},

{
  id: "chicken-tortilla-soup",
  title: "Chicken Tortilla Soup",
  blurb: "A brothy, smoky soup you finish with everything you like: avocado, lime, cheese, crisp tortillas.",
  emoji: "🌽", protein: "Chicken", cuisine: "Mexican",
  totalTime: 50, activeTime: 25, difficulty: "Easy", servings: 6,
  plate: { protein: "Chicken and beans", starch: "Tortilla strips", veg: "Tomato, corn, peppers" },
  nutrition: { calories: 425, protein: 34, carbs: 40, fat: 15, fiber: 9 },
  tags: ["make-ahead", "freezer-friendly", "budget", "leftovers", "high-protein", "gluten-free"],
  seasons: ["all"],
  ingredients: [
    { group: "Soup", items: [
      "2 lb boneless skinless chicken thighs",
      "2 tablespoons olive oil",
      "1 large onion, diced",
      "1 red bell pepper, diced",
      "5 cloves garlic, minced",
      "2 chipotle peppers in adobo, minced",
      "2 teaspoons ground cumin",
      "1 tablespoon chili powder",
      "1 teaspoon dried oregano",
      "1 (28 oz) can crushed tomatoes",
      "6 cups chicken broth",
      "1 (15 oz) can black beans, drained",
      "1 1/2 cups corn kernels",
      "2 teaspoons kosher salt",
      "3 tablespoons lime juice"
    ]},
    { group: "To serve", items: [
      "6 corn tortillas, cut into strips",
      "3 tablespoons neutral oil",
      "2 avocados, diced",
      "1 cup crumbled cotija or shredded Monterey Jack",
      "1/2 cup chopped cilantro",
      "1/2 cup sour cream",
      "2 limes, cut into wedges"
    ]}
  ],
  steps: [
    "Heat the oven to 400F. Toss the tortilla strips with the oil and a pinch of salt and bake 12 minutes, tossing once, until crisp. Set aside.",
    "Heat the olive oil in a large pot over medium-high. Cook the onion and bell pepper 7 minutes.",
    "Add the garlic, chipotles, cumin, chili powder, and oregano and cook 90 seconds.",
    "Add the tomatoes, broth, and salt and bring to a simmer.",
    "Add the whole chicken thighs and simmer 20 minutes, until cooked through.",
    "Lift out the chicken, shred it with two forks, and return it to the pot.",
    "Add the beans and corn and simmer 5 minutes more. Stir in the lime juice and taste for salt.",
    "Serve in bowls and let everyone add their own tortilla strips, avocado, cheese, cilantro, and sour cream."
  ],
  tips: [
    "Poaching the chicken directly in the soup means the broth gets all the flavor and you dirty one fewer pan.",
    "Keep the tortilla strips on the side. Stirred in, they go soft within a minute."
  ],
  makeAhead: "The soup base keeps four days and freezes three months. Bake the strips fresh."
},

{
  id: "beef-chili",
  title: "Beef Chili",
  blurb: "Thick, dark, and properly spiced, with a long enough simmer that everything melts together.",
  emoji: "🌶️", protein: "Beef", cuisine: "American",
  totalTime: 105, activeTime: 25, difficulty: "Easy", servings: 6,
  plate: { protein: "Ground beef and beans", starch: "Beans", veg: "Peppers, onion, tomato" },
  nutrition: { calories: 505, protein: 35, carbs: 42, fat: 21, fiber: 12 },
  tags: ["comfort", "make-ahead", "freezer-friendly", "budget", "leftovers", "high-protein", "one-pan"],
  seasons: ["fall", "winter"], karolina: true,
  ingredients: [
    { group: "Chili", items: [
      "2 1/2 lb ground beef (85 percent lean)",
      "2 tablespoons olive oil",
      "2 onions, diced",
      "2 bell peppers, diced",
      "6 cloves garlic, minced",
      "1/4 cup chili powder",
      "2 tablespoons ground cumin",
      "1 tablespoon smoked paprika",
      "2 teaspoons dried oregano",
      "1 teaspoon cinnamon",
      "3 tablespoons tomato paste",
      "1 (28 oz) can crushed tomatoes",
      "2 cups beef broth",
      "1 (15 oz) can kidney beans, drained",
      "1 (15 oz) can pinto beans, drained",
      "1 tablespoon cocoa powder",
      "2 teaspoons kosher salt",
      "1 tablespoon apple cider vinegar"
    ]},
    { group: "To serve", items: [
      "1 1/2 cups shredded cheddar",
      "1/2 cup sour cream",
      "4 scallions, sliced",
      "1 cup corn chips"
    ]}
  ],
  steps: [
    "Heat the oil in a large pot over high. Brown the beef in two batches, 8 minutes each, pressing it flat and leaving it to crust before breaking it up. Drain off most of the fat.",
    "Lower the heat to medium. Cook the onions and peppers 8 minutes.",
    "Add the garlic and cook 1 minute, then all the dried spices and the tomato paste. Stir constantly 2 minutes - blooming the spices in fat is what makes chili taste like chili and not like dust.",
    "Return the beef, then add the tomatoes, broth, beans, cocoa powder, and salt.",
    "Bring to a boil, then reduce to a low simmer and cook uncovered 60 to 75 minutes, stirring occasionally, until thick and dark.",
    "Stir in the vinegar and taste carefully for salt.",
    "Serve with cheddar, sour cream, scallions, and corn chips."
  ],
  tips: [
    "Give it the full hour of simmering. Chili made in 30 minutes tastes like spiced ground beef.",
    "Cocoa and cinnamon are background notes, not flavors you should be able to identify. They add depth."
  ],
  makeAhead: "Notably better on day two. Freezes for six months."
},

{
  id: "new-england-clam-chowder",
  title: "New England Clam Chowder",
  blurb: "Creamy, bacony, and full of potatoes and clams. A bowl of the coast in winter.",
  emoji: "🍚", protein: "Shrimp", cuisine: "American",
  totalTime: 55, activeTime: 35, difficulty: "Medium", servings: 6,
  plate: { protein: "Clams", starch: "Potatoes", veg: "Onion and celery" },
  nutrition: { calories: 465, protein: 24, carbs: 38, fat: 25, fiber: 3 },
  tags: ["comfort", "special-occasion", "make-ahead"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Chowder", items: [
      "6 slices bacon, chopped",
      "3 tablespoons butter",
      "1 large onion, diced",
      "3 stalks celery, diced",
      "4 cloves garlic, minced",
      "1/3 cup all-purpose flour",
      "4 cups clam juice",
      "1 1/2 lb Yukon gold potatoes, cut into 1/2-inch dice",
      "2 bay leaves",
      "1 teaspoon fresh thyme",
      "3 (6.5 oz) cans chopped clams, drained with juice reserved",
      "2 cups heavy cream",
      "1 1/4 teaspoons kosher salt",
      "1/2 teaspoon black pepper",
      "2 tablespoons chopped parsley"
    ]},
    { group: "To serve", items: [
      "Oyster crackers or crusty bread"
    ]}
  ],
  steps: [
    "Cook the bacon in a large pot over medium until crisp, 8 minutes. Lift it out and set aside, leaving the fat.",
    "Add the butter, onion, and celery to the bacon fat and cook 8 minutes until soft. Add the garlic for 1 minute.",
    "Stir in the flour and cook 2 minutes.",
    "Add the clam juice and the reserved juice from the cans gradually, whisking to keep it smooth.",
    "Add the potatoes, bay leaves, and thyme. Simmer 15 to 18 minutes, until the potatoes are tender.",
    "Mash a few potatoes against the side of the pot to thicken the chowder naturally.",
    "Stir in the cream and the clams and warm through gently for 5 minutes. Do not let it boil after the clams go in - they turn rubbery within a minute.",
    "Season, then serve topped with the crisp bacon, parsley, and crackers."
  ],
  tips: [
    "Canned clams are already cooked. They only need warming through at the very end.",
    "Chowder thickens a lot as it sits. Thin it with a little extra clam juice or milk when reheating."
  ],
  makeAhead: "Best fresh, but keeps two days. Reheat gently without boiling."
},

{
  id: "broccoli-cheddar-soup",
  title: "Broccoli Cheddar Soup",
  blurb: "Thick, cheesy, and full of broccoli - the kind you want in a bread bowl on a cold night.",
  emoji: "🥦", protein: "Vegetarian", cuisine: "American",
  totalTime: 45, activeTime: 25, difficulty: "Easy", servings: 6,
  plate: { protein: "Cheddar", starch: "Bread", veg: "Broccoli and carrot" },
  nutrition: { calories: 425, protein: 19, carbs: 24, fat: 29, fiber: 4 },
  tags: ["comfort", "kid-friendly", "veggie-forward", "budget"],
  seasons: ["fall", "winter"], karolina: true,
  ingredients: [
    { group: "Soup", items: [
      "5 tablespoons butter",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "1/3 cup all-purpose flour",
      "3 cups chicken or vegetable broth",
      "2 cups whole milk",
      "1 cup half-and-half",
      "2 large heads broccoli, cut into small florets",
      "2 carrots, grated",
      "1/2 teaspoon mustard powder",
      "1/4 teaspoon nutmeg",
      "1 1/2 teaspoons kosher salt",
      "1/2 teaspoon black pepper",
      "4 cups shredded sharp cheddar"
    ]}
  ],
  steps: [
    "Melt the butter in a large pot over medium. Cook the onion 6 minutes, then the garlic for 1 minute.",
    "Stir in the flour and cook 2 minutes.",
    "Add the broth gradually, whisking to keep it smooth, then the milk and half-and-half.",
    "Add the broccoli, carrots, mustard powder, nutmeg, salt, and pepper. Simmer 15 minutes, until the broccoli is very tender.",
    "For a smoother soup, blend about a third of it and stir it back in. Leave the rest chunky.",
    "Take the pot off the heat entirely. Add the cheddar in handfuls, stirring until each addition melts before adding more.",
    "Taste for salt and serve immediately with bread."
  ],
  tips: [
    "The pot must be off the heat before the cheese goes in. Boiling cheese sauce separates into oil and grit.",
    "Shred your own cheddar - pre-shredded cheese is coated with starch that makes the soup gritty."
  ],
  makeAhead: "Best fresh. Reheat very gently over low heat, never boiling."
},

{
  id: "italian-wedding-soup",
  title: "Italian Wedding Soup",
  blurb: "Tiny meatballs, little pasta, and greens in a clear, savory broth. Light but genuinely filling.",
  emoji: "🧆", protein: "Turkey", cuisine: "Italian",
  totalTime: 55, activeTime: 40, difficulty: "Medium", servings: 6,
  plate: { protein: "Meatballs", starch: "Acini di pepe", veg: "Escarole and carrot" },
  nutrition: { calories: 385, protein: 28, carbs: 34, fat: 15, fiber: 4 },
  tags: ["comfort", "make-ahead", "kid-friendly", "leftovers", "high-protein"],
  seasons: ["fall", "winter"], karolina: true,
  ingredients: [
    { group: "Meatballs", items: [
      "1 lb ground turkey or chicken",
      "1/2 lb ground pork",
      "1/2 cup panko breadcrumbs",
      "1/3 cup milk",
      "1/2 cup grated Parmesan",
      "1 egg",
      "3 cloves garlic, minced",
      "1/4 cup chopped parsley",
      "1 teaspoon kosher salt",
      "1/2 teaspoon black pepper"
    ]},
    { group: "Soup", items: [
      "2 tablespoons olive oil",
      "1 onion, finely diced",
      "3 carrots, diced",
      "3 stalks celery, diced",
      "4 cloves garlic, minced",
      "10 cups chicken broth",
      "1 cup acini di pepe or orzo",
      "1 head escarole or 6 oz spinach, chopped",
      "1 1/2 teaspoons kosher salt",
      "1/2 cup grated Parmesan",
      "2 tablespoons lemon juice"
    ]}
  ],
  steps: [
    "Soak the panko in the milk 5 minutes, then mix in all the other meatball ingredients with your hands until just combined.",
    "Roll into very small meatballs, about 3/4 inch - roughly 50 of them. Small is the point in this soup.",
    "Heat the oil in a large pot over medium. Cook the onion, carrots, and celery 8 minutes, then the garlic for 1 minute.",
    "Add the broth and salt and bring to a gentle simmer.",
    "Drop the meatballs in and simmer 12 minutes, until cooked through. Do not stir hard or they break apart.",
    "Add the pasta and cook according to the package, about 8 minutes.",
    "Stir in the escarole and cook 3 minutes until wilted.",
    "Off the heat, stir in the Parmesan and lemon juice. Taste for salt and serve with more Parmesan."
  ],
  tips: [
    "Roll the meatballs small. Big ones turn this from a delicate soup into a heavy stew.",
    "A rolling boil breaks the meatballs apart. Keep it at a gentle simmer throughout."
  ],
  makeAhead: "Freeze raw meatballs on a tray, then bag them; drop them into the soup from frozen with 4 extra minutes."
},

{
  id: "lentil-soup",
  title: "Hearty Lentil Soup",
  blurb: "Cheap, fast, and quietly one of the most satisfying things you can make from a cupboard.",
  emoji: "🍲", protein: "Vegetarian", cuisine: "Mediterranean",
  totalTime: 50, activeTime: 15, difficulty: "Easy", servings: 6,
  plate: { protein: "Brown lentils", starch: "Lentils", veg: "Carrot, celery, tomato, spinach" },
  nutrition: { calories: 325, protein: 18, carbs: 48, fat: 8, fiber: 16 },
  tags: ["budget", "make-ahead", "freezer-friendly", "dairy-free", "veggie-forward", "high-protein", "comfort"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Soup", items: [
      "1 1/2 cups brown or green lentils, rinsed",
      "3 tablespoons olive oil",
      "1 large onion, diced",
      "3 carrots, diced",
      "3 stalks celery, diced",
      "5 cloves garlic, minced",
      "2 tablespoons tomato paste",
      "2 teaspoons ground cumin",
      "1 teaspoon smoked paprika",
      "1 teaspoon dried thyme",
      "1 (14.5 oz) can diced tomatoes",
      "7 cups vegetable broth",
      "2 bay leaves",
      "1 1/2 teaspoons kosher salt",
      "5 oz baby spinach",
      "3 tablespoons lemon juice",
      "1/4 cup chopped parsley"
    ]}
  ],
  steps: [
    "Heat the oil in a large pot over medium. Cook the onion, carrots, and celery 10 minutes.",
    "Add the garlic and cook 1 minute, then the tomato paste, cumin, paprika, and thyme. Stir 90 seconds.",
    "Add the lentils, tomatoes, broth, bay leaves, and salt.",
    "Bring to a boil, then reduce to a simmer and cook 30 to 35 minutes, until the lentils are tender but still holding their shape.",
    "For a thicker soup, blend about two cups and stir it back in.",
    "Add the spinach and stir until wilted, about 2 minutes.",
    "Stir in the lemon juice and parsley. Taste for salt - lentils absorb a lot of it.",
    "Serve with crusty bread and a drizzle of olive oil."
  ],
  tips: [
    "Do not salt lentils heavily at the very start of cooking; they can stay firm. Season properly at the end.",
    "The lemon juice is essential. Lentil soup without acid tastes flat no matter how much salt you add."
  ],
  makeAhead: "Keeps five days and freezes three months. Thickens in the fridge - thin with broth."
},

{
  id: "tom-kha-gai",
  title: "Coconut Chicken Soup (Tom Kha Gai)",
  blurb: "Fragrant, sour, and creamy all at once, with lemongrass, lime, and coconut milk.",
  emoji: "🥥", protein: "Chicken", cuisine: "Thai",
  totalTime: 40, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "Chicken", starch: "Jasmine rice", veg: "Mushrooms and herbs" },
  nutrition: { calories: 465, protein: 32, carbs: 38, fat: 22, fiber: 3 },
  tags: ["dairy-free", "gluten-free", "comfort", "high-protein"],
  seasons: ["all"],
  ingredients: [
    { group: "Soup", items: [
      "1 1/2 lb boneless skinless chicken thighs, thinly sliced",
      "2 (14 oz) cans coconut milk",
      "3 cups chicken broth",
      "3 stalks lemongrass, bruised and cut into 3-inch pieces",
      "6 slices fresh galangal or ginger",
      "6 kaffir lime leaves, or 2 teaspoons lime zest",
      "10 oz mushrooms, sliced",
      "3 tablespoons fish sauce",
      "1 tablespoon brown sugar",
      "1/4 cup lime juice",
      "2 Thai chilies, sliced",
      "1/2 cup cilantro leaves",
      "3 scallions, sliced"
    ]},
    { group: "To serve", items: [
      "1 1/2 cups jasmine rice"
    ]}
  ],
  steps: [
    "Start the rice.",
    "Bring the broth, lemongrass, galangal, and lime leaves to a simmer in a pot. Simmer 10 minutes to infuse, then fish out the aromatics if you like - they are for flavor, not eating.",
    "Add the coconut milk and bring back to a gentle simmer. Do not boil hard, or the coconut milk splits.",
    "Add the mushrooms and simmer 4 minutes.",
    "Add the sliced chicken and simmer 5 minutes, until just cooked through.",
    "Take the pot off the heat. Stir in the fish sauce, brown sugar, and lime juice.",
    "Taste and adjust: it should be sour first, then salty, with a little sweetness behind it. Add more lime or fish sauce as needed.",
    "Serve over rice with chilies, cilantro, and scallions."
  ],
  tips: [
    "Add the lime juice off the heat. Boiling it makes it taste bitter rather than bright.",
    "Lemongrass and galangal are worth a trip to an Asian grocer, and both freeze well for months."
  ],
  makeAhead: "Best fresh, but keeps two days. Reheat gently without boiling."
},

{
  id: "french-onion-soup",
  title: "French Onion Soup",
  blurb: "An hour of patient onion caramelizing, then bread and melted Gruyere under the broiler.",
  emoji: "🧅", protein: "Vegetarian", cuisine: "French",
  totalTime: 105, activeTime: 45, difficulty: "Medium", servings: 4,
  plate: { protein: "Gruyere", starch: "Baguette", veg: "Onions" },
  nutrition: { calories: 545, protein: 24, carbs: 48, fat: 29, fiber: 5 },
  tags: ["comfort", "special-occasion", "budget", "veggie-forward", "make-ahead"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Soup", items: [
      "4 lb yellow onions, thinly sliced",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "1 teaspoon sugar",
      "1 1/2 teaspoons kosher salt",
      "4 cloves garlic, minced",
      "1/3 cup dry sherry or white wine",
      "8 cups beef or vegetable broth",
      "4 sprigs thyme",
      "2 bay leaves",
      "1 tablespoon balsamic vinegar",
      "1/2 teaspoon black pepper"
    ]},
    { group: "To finish", items: [
      "1 baguette, sliced 3/4 inch thick",
      "3 cups shredded Gruyere",
      "1/2 cup grated Parmesan"
    ]}
  ],
  steps: [
    "Melt the butter and oil in a very large pot over medium. Add the onions, sugar, and salt.",
    "Cook, stirring every five minutes, for 45 to 60 minutes. They will go from pale to soft to golden to deep amber. There is no shortcut here - high heat burns them without developing the sweetness.",
    "If a brown film builds on the bottom of the pot, add a splash of water and scrape it up. That film is pure flavor.",
    "Add the garlic and cook 1 minute, then pour in the sherry and simmer 3 minutes.",
    "Add the broth, thyme, and bay leaves and simmer 25 minutes. Stir in the vinegar and pepper and taste for salt.",
    "Toast the baguette slices until dry and crisp.",
    "Ladle the soup into oven-safe bowls, float two toasts on each, and pile the Gruyere and Parmesan on top.",
    "Broil 3 to 4 minutes, until the cheese is melted, bubbling, and browned at the edges. Serve immediately and warn everyone that the bowls are very hot."
  ],
  tips: [
    "Four pounds of onions cooks down to almost nothing. It always looks like too many and never is.",
    "Toast the bread properly dry. Soft bread dissolves into the soup instantly."
  ],
  makeAhead: "The soup base keeps four days and freezes well. Add bread and cheese when serving."
},

{
  id: "chicken-and-dumplings",
  title: "Chicken and Dumplings",
  blurb: "Fluffy dumplings steamed on top of a creamy chicken stew. The definition of comfort.",
  emoji: "🥟", protein: "Chicken", cuisine: "American",
  totalTime: 70, activeTime: 35, difficulty: "Medium", servings: 6,
  plate: { protein: "Chicken", starch: "Dumplings", veg: "Carrots, celery, peas" },
  nutrition: { calories: 585, protein: 36, carbs: 48, fat: 27, fiber: 4 },
  tags: ["comfort", "kid-friendly", "one-pan", "budget", "leftovers"],
  seasons: ["fall", "winter"], karolina: true,
  ingredients: [
    { group: "Stew", items: [
      "2 lb boneless skinless chicken thighs",
      "4 tablespoons butter",
      "1 large onion, diced",
      "4 carrots, sliced",
      "3 stalks celery, sliced",
      "4 cloves garlic, minced",
      "1/3 cup all-purpose flour",
      "6 cups chicken broth",
      "1 cup heavy cream",
      "1 tablespoon fresh thyme",
      "1 1/2 teaspoons kosher salt",
      "1/2 teaspoon black pepper",
      "1 cup frozen peas",
      "1/4 cup chopped parsley"
    ]},
    { group: "Dumplings", items: [
      "2 cups all-purpose flour",
      "1 tablespoon baking powder",
      "1 teaspoon kosher salt",
      "3 tablespoons cold butter, cubed",
      "1 cup whole milk",
      "2 tablespoons chopped chives"
    ]}
  ],
  steps: [
    "Melt the butter in a large Dutch oven over medium. Cook the onion, carrots, and celery 8 minutes. Add the garlic for 1 minute.",
    "Stir in the flour and cook 2 minutes.",
    "Add the broth gradually, whisking. Add the thyme, salt, and pepper.",
    "Add the whole chicken thighs and simmer 20 minutes, until cooked through. Lift them out, shred, and return to the pot along with the cream and peas.",
    "For the dumplings, whisk the flour, baking powder, and salt. Rub in the cold butter with your fingertips until it looks like coarse crumbs. Stir in the milk and chives just until a shaggy dough forms - do not overwork it.",
    "Bring the stew to a gentle simmer. Drop the dough in rounded tablespoons over the surface, leaving space between them; they double in size.",
    "Cover tightly and simmer 15 minutes without lifting the lid. The dumplings steam rather than boil, and peeking lets the steam out.",
    "Check that a dumpling is cooked through, scatter with parsley, and serve."
  ],
  tips: [
    "Do not lift the lid. Trapped steam is what makes the dumplings light instead of dense.",
    "Overworking the dumpling dough develops gluten and turns them into rubber balls. Mix until it just comes together."
  ],
  makeAhead: "The stew base keeps three days; make dumplings fresh when you reheat."
},

{
  id: "pozole-rojo",
  title: "Pozole Rojo",
  blurb: "A deep red chile broth with pork and hominy, finished at the table with cabbage, radish, and lime.",
  emoji: "🌽", protein: "Pork", cuisine: "Mexican",
  totalTime: 180, activeTime: 40, difficulty: "Ambitious", servings: 8,
  plate: { protein: "Pork shoulder", starch: "Hominy", veg: "Cabbage, radish, onion" },
  nutrition: { calories: 505, protein: 36, carbs: 38, fat: 24, fiber: 8 },
  tags: ["make-ahead", "special-occasion", "gluten-free", "dairy-free", "leftovers", "freezer-friendly"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Pork", items: [
      "3 lb boneless pork shoulder, cut into 2-inch chunks",
      "1 onion, halved",
      "8 cloves garlic",
      "2 bay leaves",
      "1 tablespoon kosher salt",
      "12 cups water"
    ]},
    { group: "Chile sauce", items: [
      "6 dried guajillo chiles, stemmed and seeded",
      "3 dried ancho chiles, stemmed and seeded",
      "4 cloves garlic",
      "1 teaspoon dried oregano",
      "1 teaspoon ground cumin"
    ]},
    { group: "To finish", items: [
      "2 (25 oz) cans hominy, drained and rinsed",
      "1 tablespoon kosher salt"
    ]},
    { group: "Garnishes", items: [
      "3 cups shredded cabbage",
      "1 bunch radishes, thinly sliced",
      "1 white onion, diced",
      "1/2 cup chopped cilantro",
      "3 limes, cut into wedges",
      "1 tablespoon dried oregano",
      "Tostadas or tortilla chips"
    ]}
  ],
  steps: [
    "Put the pork, onion, garlic, bay leaves, salt, and water in a large pot. Bring to a boil and skim off the foam.",
    "Reduce to a simmer and cook 2 hours, until the pork is completely tender.",
    "Meanwhile, toast the dried chiles in a dry skillet over medium for 30 seconds a side, until fragrant. Do not let them blacken or the whole pot turns bitter.",
    "Cover the toasted chiles with boiling water and soak 20 minutes until soft.",
    "Blend the softened chiles with the garlic, oregano, cumin, and 1 1/2 cups of their soaking liquid until completely smooth. Strain through a sieve, pressing hard, and discard the solids.",
    "Lift the pork out and shred it roughly. Strain the broth and return it to the pot.",
    "Add the chile sauce, shredded pork, and hominy to the broth. Simmer 30 minutes and season with salt.",
    "Serve in wide bowls and let everyone pile on cabbage, radish, onion, cilantro, oregano, and lime."
  ],
  tips: [
    "Straining the chile sauce is what makes the broth silky instead of gritty. It is worth the extra step.",
    "The garnishes are not optional decoration - the crunch and acid are half of what makes pozole work."
  ],
  makeAhead: "Better the next day. Keeps four days and freezes three months."
},

{
  id: "moroccan-chickpea-stew",
  title: "Moroccan Chickpea and Squash Stew",
  blurb: "Warmly spiced, a little sweet, and thick with chickpeas and squash. Serve over couscous.",
  emoji: "🥘", protein: "Vegetarian", cuisine: "Moroccan",
  totalTime: 50, activeTime: 20, difficulty: "Easy", servings: 6,
  plate: { protein: "Chickpeas", starch: "Couscous", veg: "Squash, tomato, spinach" },
  nutrition: { calories: 425, protein: 15, carbs: 72, fat: 11, fiber: 14 },
  tags: ["budget", "make-ahead", "freezer-friendly", "dairy-free", "veggie-forward", "comfort", "high-protein"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Stew", items: [
      "3 tablespoons olive oil",
      "1 large onion, diced",
      "4 cloves garlic, minced",
      "1 tablespoon grated ginger",
      "2 teaspoons ground cumin",
      "2 teaspoons ground coriander",
      "1 teaspoon cinnamon",
      "1 teaspoon smoked paprika",
      "1/2 teaspoon turmeric",
      "1/4 teaspoon cayenne",
      "2 tablespoons tomato paste",
      "1 (28 oz) can diced tomatoes",
      "4 cups vegetable broth",
      "1 medium butternut squash, peeled and cubed",
      "2 (15 oz) cans chickpeas, drained",
      "1/2 cup dried apricots, chopped",
      "1 1/2 teaspoons kosher salt",
      "5 oz baby spinach",
      "2 tablespoons lemon juice"
    ]},
    { group: "To serve", items: [
      "2 cups couscous",
      "1/2 cup chopped cilantro",
      "1/3 cup toasted almonds",
      "1/2 cup plain yogurt"
    ]}
  ],
  steps: [
    "Heat the oil in a large pot over medium. Cook the onion 8 minutes until soft and golden at the edges.",
    "Add the garlic and ginger and cook 1 minute, then all the ground spices and the tomato paste. Stir constantly 90 seconds.",
    "Add the tomatoes, broth, squash, chickpeas, apricots, and salt.",
    "Bring to a boil, then simmer 25 to 30 minutes, until the squash is tender and the stew has thickened.",
    "Mash a few pieces of squash against the side of the pot to thicken it further.",
    "Stir in the spinach until wilted, then the lemon juice. Taste for salt.",
    "Prepare the couscous with boiling broth, covered, for 10 minutes, then fluff.",
    "Serve the stew over couscous with cilantro, almonds, and a spoonful of yogurt."
  ],
  tips: [
    "The dried apricots melt into the stew and balance the spices. Raisins or dates work too.",
    "Cinnamon in a savory dish sounds odd and is the reason this tastes Moroccan rather than generic."
  ],
  makeAhead: "Better on day two. Freezes for three months."
},

{
  id: "beef-barley-soup",
  title: "Beef and Barley Soup",
  blurb: "Thick with tender beef, chewy barley, and mushrooms. One pot, one long simmer, six good meals.",
  emoji: "🍲", protein: "Beef", cuisine: "American",
  totalTime: 135, activeTime: 30, difficulty: "Easy", servings: 6,
  plate: { protein: "Beef chuck", starch: "Pearl barley", veg: "Carrot, celery, mushrooms" },
  nutrition: { calories: 445, protein: 34, carbs: 46, fat: 14, fiber: 8 },
  tags: ["comfort", "make-ahead", "freezer-friendly", "budget", "leftovers", "one-pan"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Soup", items: [
      "2 lb beef chuck, cut into 3/4-inch cubes",
      "2 teaspoons kosher salt",
      "1 teaspoon black pepper",
      "3 tablespoons olive oil",
      "1 large onion, diced",
      "4 carrots, diced",
      "3 stalks celery, diced",
      "10 oz mushrooms, sliced",
      "5 cloves garlic, minced",
      "2 tablespoons tomato paste",
      "1 cup pearl barley",
      "9 cups beef broth",
      "2 bay leaves",
      "1 tablespoon fresh thyme",
      "2 tablespoons Worcestershire sauce",
      "1/4 cup chopped parsley"
    ]}
  ],
  steps: [
    "Season the beef and brown it in the oil over medium-high in two batches, 5 minutes per batch. Move to a plate.",
    "Add the onion, carrots, celery, and mushrooms and cook 10 minutes, until the mushrooms have released their liquid and it has cooked away.",
    "Add the garlic and tomato paste and cook 2 minutes.",
    "Return the beef with the broth, bay leaves, thyme, and Worcestershire. Bring to a simmer, cover, and cook 1 hour.",
    "Add the barley and simmer uncovered 45 minutes more, until both the beef and barley are tender.",
    "The soup will thicken considerably as the barley releases its starch. Add more broth if you prefer it brothier.",
    "Taste for salt, stir in the parsley, and serve."
  ],
  tips: [
    "Barley keeps absorbing liquid overnight. Leftovers will be closer to a stew - just thin them with broth.",
    "Add the barley partway through rather than at the start, or it turns to porridge by the time the beef is tender."
  ],
  makeAhead: "Keeps five days and freezes three months."
},

{
  id: "potato-leek-soup",
  title: "Potato Leek Soup",
  blurb: "Silky and simple, from four ingredients and about half an hour. Elegant enough for company.",
  emoji: "🥔", protein: "Vegetarian", cuisine: "French",
  totalTime: 45, activeTime: 20, difficulty: "Easy", servings: 6,
  plate: { protein: null, starch: "Potatoes", veg: "Leeks" },
  nutrition: { calories: 305, protein: 6, carbs: 42, fat: 13, fiber: 5 },
  tags: ["budget", "make-ahead", "veggie-forward", "gluten-free", "comfort", "freezer-friendly"],
  seasons: ["fall", "winter", "spring"],
  ingredients: [
    { group: "Soup", items: [
      "4 large leeks, white and light green parts, sliced",
      "4 tablespoons butter",
      "2 lb Yukon gold potatoes, peeled and cubed",
      "6 cups chicken or vegetable broth",
      "3 cloves garlic, minced",
      "2 bay leaves",
      "1 1/2 teaspoons kosher salt",
      "1/2 teaspoon white pepper",
      "3/4 cup heavy cream",
      "1 tablespoon lemon juice"
    ]},
    { group: "To serve", items: [
      "3 tablespoons chopped chives",
      "6 slices bacon, crisped and crumbled, optional",
      "Good olive oil"
    ]}
  ],
  steps: [
    "Slice the leeks and put them in a bowl of cold water. Swish them around and lift them out, leaving the grit behind. Leeks are always sandy and rinsing them under a tap does not get it all.",
    "Melt the butter in a large pot over medium-low. Add the leeks with a pinch of salt and cook 12 minutes, stirring, until completely soft but not browned. Color here would muddy the pale color of the finished soup.",
    "Add the garlic and cook 1 minute.",
    "Add the potatoes, broth, bay leaves, salt, and white pepper. Simmer 20 minutes, until the potatoes fall apart when pressed.",
    "Remove the bay leaves. Blend until completely smooth.",
    "Stir in the cream and lemon juice and taste for salt.",
    "Serve with chives, bacon if using, and a thread of good olive oil."
  ],
  tips: [
    "Use a blender rather than a food processor, and do not over-blend. Overworked potato turns gluey.",
    "Served cold with extra cream, this becomes vichyssoise."
  ],
  makeAhead: "Keeps four days. Freeze before adding the cream."
},

{
  id: "chicken-sausage-gumbo",
  title: "Chicken and Sausage Gumbo",
  blurb: "Built on a dark roux, with andouille and chicken over rice. Patient cooking, enormous payoff.",
  emoji: "🍚", protein: "Chicken", cuisine: "Cajun",
  totalTime: 150, activeTime: 60, difficulty: "Ambitious", servings: 8,
  plate: { protein: "Chicken and sausage", starch: "Rice", veg: "Peppers, celery, onion, okra" },
  nutrition: { calories: 585, protein: 36, carbs: 48, fat: 27, fiber: 4 },
  tags: ["comfort", "make-ahead", "special-occasion", "leftovers", "freezer-friendly"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Roux", items: [
      "3/4 cup neutral oil",
      "3/4 cup all-purpose flour"
    ]},
    { group: "Gumbo", items: [
      "2 lb boneless skinless chicken thighs, cut into chunks",
      "1 lb andouille sausage, sliced",
      "2 onions, diced",
      "2 green bell peppers, diced",
      "4 stalks celery, diced",
      "6 cloves garlic, minced",
      "8 cups chicken broth",
      "2 bay leaves",
      "1 tablespoon Cajun seasoning",
      "1 teaspoon dried thyme",
      "1/2 teaspoon cayenne",
      "2 teaspoons kosher salt",
      "12 oz okra, sliced",
      "6 scallions, sliced",
      "1/4 cup chopped parsley"
    ]},
    { group: "To serve", items: [
      "2 cups long-grain rice, cooked",
      "Hot sauce"
    ]}
  ],
  steps: [
    "Brown the sausage in a large heavy pot over medium-high, 6 minutes. Lift it out. Brown the chicken 6 minutes and lift that out too.",
    "Make the roux: add the oil to the pot and whisk in the flour. Cook over medium-low, whisking constantly, for 30 to 45 minutes.",
    "The roux will go from blond to peanut butter to the color of milk chocolate. That last color is what you want. Do not walk away and do not stop whisking - if black specks appear it has burned and you must start over.",
    "Add the onions, peppers, and celery all at once; they will stop the roux cooking further. Cook 8 minutes.",
    "Add the garlic and cook 1 minute.",
    "Whisk in the broth a cup at a time, keeping it smooth. Add the bay leaves, Cajun seasoning, thyme, cayenne, and salt.",
    "Return the chicken and sausage. Simmer, partly covered, 1 hour, skimming any fat that rises.",
    "Add the okra and cook 20 minutes more. Stir in the scallions and parsley and serve over rice with hot sauce."
  ],
  tips: [
    "The roux is the entire dish and it cannot be rushed. Put on a podcast and commit to the whisking.",
    "If the roux burns even slightly, throw it out and start again. Burnt roux ruins the whole pot and there is no fixing it."
  ],
  makeAhead: "Genuinely better on day two. Freezes for three months."
}

]);
