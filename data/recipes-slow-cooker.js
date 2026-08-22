/* Slow cooker meals - start them in the morning, forget about them. */
window.RECIPES = (window.RECIPES || []).concat([

{
  id: "slow-cooker-pulled-pork",
  title: "Slow Cooker Pulled Pork",
  blurb: "Eight hours of doing nothing gets you enough tender pork for sandwiches, tacos, and bowls all week.",
  emoji: "🐖", protein: "Pork", cuisine: "American",
  totalTime: 500, activeTime: 20, difficulty: "Easy", servings: 10,
  plate: { protein: "Pork shoulder", starch: "Buns", veg: "Slaw" },
  nutrition: { calories: 465, protein: 38, carbs: 32, fat: 20, fiber: 3 },
  tags: ["slow-cooker", "make-ahead", "freezer-friendly", "budget", "leftovers", "dairy-free", "kid-friendly"],
  seasons: ["all"], karolina: true,
  ingredients: [
    { group: "Pork", items: [
      "5 lb boneless pork shoulder",
      "2 tablespoons brown sugar",
      "1 tablespoon smoked paprika",
      "1 tablespoon kosher salt",
      "2 teaspoons garlic powder",
      "2 teaspoons onion powder",
      "1 teaspoon mustard powder",
      "1 teaspoon black pepper",
      "1 teaspoon cayenne"
    ]},
    { group: "Braise", items: [
      "2 onions, sliced",
      "1 cup chicken broth",
      "1/2 cup apple cider vinegar",
      "3 tablespoons tomato paste",
      "2 tablespoons Worcestershire sauce",
      "2 tablespoons brown sugar"
    ]},
    { group: "To serve", items: [
      "12 burger buns",
      "1 1/2 cups barbecue sauce",
      "4 cups coleslaw",
      "Pickles"
    ]}
  ],
  steps: [
    "Mix all the rub ingredients and massage them into the pork on every surface. If you have time, do this the night before and refrigerate uncovered.",
    "Scatter the onions across the bottom of the slow cooker and set the pork on top.",
    "Whisk the broth, vinegar, tomato paste, Worcestershire, and brown sugar and pour it around - not over - the pork so the rub stays on the meat.",
    "Cover and cook on low 8 hours, or high 5 hours. Do not lift the lid; every peek adds 20 minutes.",
    "The pork is done when a fork twists in it with no resistance at all. If it still resists, give it another hour - it will get there.",
    "Lift the pork out and shred it with two forks, discarding large lumps of fat.",
    "Skim the fat off the cooking liquid, then pour about a cup of the remaining juices back over the shredded pork so it stays moist.",
    "Serve on buns with barbecue sauce, coleslaw, and pickles."
  ],
  tips: [
    "Pork shoulder, sometimes labeled Boston butt, is the only cut for this. Loin will be dry no matter what you do.",
    "Do not drown it in barbecue sauce in the pot. Sauce at the table keeps the leftovers flexible for tacos and bowls."
  ],
  makeAhead: "Keeps five days in its juices and freezes for three months."
},

{
  id: "slow-cooker-beef-ragu",
  title: "Slow Cooker Beef Ragu",
  blurb: "Beef that falls into strands in a rich tomato sauce, ready to be tossed with pappardelle.",
  emoji: "🍝", protein: "Beef", cuisine: "Italian",
  totalTime: 490, activeTime: 25, difficulty: "Easy", servings: 6,
  plate: { protein: "Beef chuck", starch: "Pappardelle", veg: "Tomato, carrot, onion" },
  nutrition: { calories: 645, protein: 44, carbs: 62, fat: 24, fiber: 6 },
  tags: ["slow-cooker", "comfort", "make-ahead", "freezer-friendly", "leftovers", "special-occasion"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Beef", items: [
      "3 lb beef chuck roast",
      "2 teaspoons kosher salt",
      "1 teaspoon black pepper",
      "2 tablespoons olive oil"
    ]},
    { group: "Sauce", items: [
      "1 large onion, diced",
      "3 carrots, diced",
      "3 stalks celery, diced",
      "6 cloves garlic, minced",
      "3 tablespoons tomato paste",
      "1 cup red wine",
      "1 (28 oz) can crushed tomatoes",
      "1 cup beef broth",
      "2 bay leaves",
      "1 tablespoon dried oregano",
      "1 teaspoon red pepper flakes",
      "1 Parmesan rind, optional"
    ]},
    { group: "To serve", items: [
      "1 1/2 lb pappardelle or rigatoni",
      "1 cup grated Parmesan",
      "1/2 cup torn basil"
    ]}
  ],
  steps: [
    "Season the beef all over. Heat the oil in a skillet over medium-high and sear it hard on all sides, about 12 minutes total. Skipping this step costs you most of the flavor.",
    "Put the beef in the slow cooker.",
    "In the same skillet, cook the onion, carrots, and celery 8 minutes. Add the garlic and tomato paste and cook 2 minutes.",
    "Pour in the wine and scrape the pan clean, simmering 3 minutes.",
    "Tip everything into the slow cooker along with the tomatoes, broth, bay leaves, oregano, pepper flakes, and Parmesan rind.",
    "Cover and cook on low 8 hours, until the beef shreds easily.",
    "Shred the beef directly in the sauce with two forks and remove the bay leaves and rind. If the sauce is thin, leave the lid off on high for 30 minutes.",
    "Cook the pasta, reserve a cup of pasta water, and toss the drained pasta with the ragu and a splash of the water. Serve with Parmesan and basil."
  ],
  tips: [
    "Sear the beef even though it means an extra pan. Slow cookers cannot brown, and unbrowned beef ragu tastes flat.",
    "Any leftover ragu is superb on polenta or baked into a lasagna."
  ],
  makeAhead: "Better on day two. Freezes for three months."
},

{
  id: "slow-cooker-salsa-chicken",
  title: "Slow Cooker Salsa Chicken",
  blurb: "Three ingredients and four hours for shredded chicken that goes into tacos, bowls, salads, everything.",
  emoji: "🌮", protein: "Chicken", cuisine: "Mexican",
  totalTime: 250, activeTime: 10, difficulty: "Easy", servings: 6,
  plate: { protein: "Shredded chicken", starch: "Rice or tortillas", veg: "Salsa and peppers" },
  nutrition: { calories: 345, protein: 42, carbs: 18, fat: 11, fiber: 4 },
  tags: ["slow-cooker", "make-ahead", "freezer-friendly", "budget", "high-protein", "leftovers", "gluten-free", "dairy-free"],
  seasons: ["all"],
  ingredients: [
    { group: "Chicken", items: [
      "3 lb boneless skinless chicken thighs",
      "2 cups salsa or salsa verde",
      "1 onion, sliced",
      "1 (4 oz) can diced green chiles",
      "2 teaspoons ground cumin",
      "1 teaspoon chili powder",
      "1 teaspoon dried oregano",
      "1 1/2 teaspoons kosher salt",
      "2 tablespoons lime juice"
    ]},
    { group: "To serve", items: [
      "4 cups cooked rice or 12 tortillas",
      "1 (15 oz) can black beans, warmed",
      "1 cup shredded cheese",
      "1 avocado, sliced",
      "1/2 cup chopped cilantro",
      "1/2 cup sour cream"
    ]}
  ],
  steps: [
    "Put the chicken, salsa, onion, green chiles, cumin, chili powder, oregano, and salt in the slow cooker and stir to coat.",
    "Cover and cook on low 4 to 5 hours, or high 2 1/2 hours.",
    "Shred the chicken directly in the pot with two forks.",
    "Stir in the lime juice and let it sit uncovered 10 minutes so the meat soaks the sauce back up.",
    "If it looks watery, tip some liquid off - chicken releases a lot as it cooks.",
    "Serve over rice or in tortillas with beans, cheese, avocado, cilantro, and sour cream."
  ],
  tips: [
    "Thighs, not breasts. Breasts go stringy and dry over several hours; thighs only get better.",
    "This is the most useful thing to have in the fridge on a Monday. It becomes four different dinners."
  ],
  makeAhead: "Keeps four days and freezes for three months."
},

{
  id: "mississippi-pot-roast",
  title: "Mississippi Pot Roast",
  blurb: "Five ingredients, eight hours, and a tangy, buttery roast that shreds into a pile of itself.",
  emoji: "🍖", protein: "Beef", cuisine: "American",
  totalTime: 500, activeTime: 15, difficulty: "Easy", servings: 6,
  plate: { protein: "Chuck roast", starch: "Mashed potatoes", veg: "Pepperoncini and onion" },
  nutrition: { calories: 605, protein: 45, carbs: 34, fat: 32, fiber: 4 },
  tags: ["slow-cooker", "comfort", "make-ahead", "leftovers", "budget", "gluten-free"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Roast", items: [
      "4 lb beef chuck roast",
      "1 1/2 teaspoons kosher salt",
      "1 teaspoon black pepper",
      "2 tablespoons olive oil",
      "1 onion, sliced",
      "8 tablespoons butter",
      "10-12 pepperoncini peppers, plus 1/3 cup of their brine",
      "1 tablespoon dried dill",
      "1 teaspoon garlic powder",
      "1 teaspoon onion powder",
      "1/2 cup beef broth"
    ]},
    { group: "To serve", items: [
      "2 1/2 lb potatoes, mashed",
      "1/4 cup chopped parsley"
    ]}
  ],
  steps: [
    "Season the roast well. Heat the oil in a skillet over high and sear it on all sides, about 10 minutes total, until deeply browned.",
    "Scatter the onion in the slow cooker and set the roast on top.",
    "Sprinkle the dill, garlic powder, and onion powder over the meat.",
    "Lay the butter on top in slices, scatter the pepperoncini around, and pour in the brine and broth.",
    "Cover and cook on low 8 hours. Do not add more liquid - the beef and butter make plenty.",
    "Shred the beef in the pot with two forks and stir it through the buttery, tangy juices.",
    "Serve over mashed potatoes with plenty of the sauce and a scatter of parsley."
  ],
  tips: [
    "Pepperoncini are mild. They provide tang and only a whisper of heat, so do not be shy with them.",
    "Leftovers make outstanding sandwiches on a toasted roll with provolone."
  ],
  makeAhead: "Keeps four days and reheats well in its own juices."
},

{
  id: "slow-cooker-white-chicken-chili",
  title: "Slow Cooker White Chicken Chili",
  blurb: "Creamy, mild, and full of white beans and green chiles. A good one for a crowd.",
  emoji: "🫘", protein: "Chicken", cuisine: "American",
  totalTime: 250, activeTime: 15, difficulty: "Easy", servings: 6,
  plate: { protein: "Chicken and white beans", starch: "White beans and corn", veg: "Peppers, corn, chiles" },
  nutrition: { calories: 445, protein: 40, carbs: 42, fat: 13, fiber: 10 },
  tags: ["slow-cooker", "make-ahead", "freezer-friendly", "high-protein", "budget", "leftovers", "comfort"],
  seasons: ["fall", "winter"], karolina: true,
  ingredients: [
    { group: "Chili", items: [
      "2 1/2 lb boneless skinless chicken thighs",
      "3 (15 oz) cans cannellini or great northern beans, drained",
      "2 (4 oz) cans diced green chiles",
      "1 large onion, diced",
      "1 poblano pepper, diced",
      "5 cloves garlic, minced",
      "2 teaspoons ground cumin",
      "1 teaspoon dried oregano",
      "1 teaspoon ground coriander",
      "1/2 teaspoon cayenne",
      "2 teaspoons kosher salt",
      "4 cups chicken broth",
      "1 1/2 cups corn kernels"
    ]},
    { group: "To finish", items: [
      "4 oz cream cheese, cubed",
      "1/2 cup sour cream",
      "3 tablespoons lime juice",
      "1/2 cup chopped cilantro",
      "1 cup shredded Monterey Jack",
      "1 avocado, diced",
      "Tortilla chips"
    ]}
  ],
  steps: [
    "Put the chicken, beans, green chiles, onion, poblano, garlic, all the spices, salt, and broth in the slow cooker.",
    "Cover and cook on low 5 hours, or high 3 hours.",
    "Shred the chicken directly in the pot with two forks.",
    "Mash about a cup of the beans against the side of the pot to thicken the chili.",
    "Add the corn and the cubed cream cheese, cover, and cook 20 minutes more, stirring once or twice until the cream cheese has fully melted in.",
    "Stir in the sour cream, lime juice, and cilantro off the heat. Taste for salt.",
    "Serve topped with Monterey Jack, avocado, and tortilla chips."
  ],
  tips: [
    "Cut the cream cheese into small cubes and let it sit out first, or it takes forever to melt smoothly.",
    "Add the dairy at the end. Hours in a slow cooker would split it."
  ],
  makeAhead: "Freeze before adding the dairy; stir it in when you reheat."
},

{
  id: "slow-cooker-barbacoa",
  title: "Slow Cooker Beef Barbacoa",
  blurb: "Smoky, faintly spicy shredded beef with lime and cloves. Better than the burrito place.",
  emoji: "🌯", protein: "Beef", cuisine: "Mexican",
  totalTime: 500, activeTime: 20, difficulty: "Easy", servings: 8,
  plate: { protein: "Beef chuck", starch: "Rice or tortillas", veg: "Onion, cilantro, lime" },
  nutrition: { calories: 425, protein: 42, carbs: 12, fat: 23, fiber: 2 },
  tags: ["slow-cooker", "make-ahead", "freezer-friendly", "gluten-free", "dairy-free", "high-protein", "leftovers"],
  seasons: ["all"],
  ingredients: [
    { group: "Beef", items: [
      "4 lb beef chuck roast, cut into 4 large chunks",
      "2 teaspoons kosher salt",
      "1 teaspoon black pepper",
      "2 tablespoons olive oil"
    ]},
    { group: "Sauce", items: [
      "4 chipotle peppers in adobo, plus 2 tablespoons sauce",
      "5 cloves garlic",
      "1/3 cup lime juice",
      "3 tablespoons apple cider vinegar",
      "1 cup beef broth",
      "1 tablespoon ground cumin",
      "1 tablespoon dried oregano",
      "1/2 teaspoon ground cloves",
      "3 bay leaves"
    ]},
    { group: "To serve", items: [
      "16 corn tortillas or 6 cups cooked rice",
      "1 white onion, diced",
      "1 cup chopped cilantro",
      "3 limes, cut into wedges"
    ]}
  ],
  steps: [
    "Season the beef chunks. Heat the oil in a skillet over high and sear them on all sides, about 12 minutes total.",
    "Blend the chipotles, adobo sauce, garlic, lime juice, vinegar, broth, cumin, oregano, and cloves until smooth.",
    "Put the beef in the slow cooker, pour the sauce over, and tuck in the bay leaves.",
    "Cover and cook on low 8 hours, until the beef falls apart when pressed with a spoon.",
    "Shred the beef in the pot with two forks and remove the bay leaves.",
    "Leave it in the sauce for 15 minutes so the meat drinks it back up.",
    "For crisp edges, spread some on a sheet pan, spoon over a little of the liquid, and broil 5 minutes.",
    "Serve in tortillas or over rice with onion, cilantro, and lime."
  ],
  tips: [
    "The ground cloves sound strange and are what makes barbacoa taste like barbacoa. Use a light hand but do not skip them.",
    "The cooking liquid is too good to throw away. Freeze it and use it to reheat leftovers."
  ],
  makeAhead: "Keeps five days in its juices and freezes for three months."
},

{
  id: "slow-cooker-chicken-tikka-masala",
  title: "Slow Cooker Chicken Tikka Masala",
  blurb: "The takeout favorite made in a slow cooker, with the sauce finished properly at the end.",
  emoji: "🍛", protein: "Chicken", cuisine: "Indian",
  totalTime: 260, activeTime: 25, difficulty: "Easy", servings: 6,
  plate: { protein: "Chicken thighs", starch: "Basmati rice", veg: "Tomato and onion" },
  nutrition: { calories: 545, protein: 42, carbs: 48, fat: 21, fiber: 4 },
  tags: ["slow-cooker", "make-ahead", "freezer-friendly", "comfort", "high-protein", "leftovers", "gluten-free"],
  seasons: ["all"], karolina: true,
  ingredients: [
    { group: "Chicken", items: [
      "3 lb boneless skinless chicken thighs, cut into large chunks",
      "1 cup plain yogurt",
      "2 tablespoons lemon juice",
      "1 tablespoon garam masala",
      "2 teaspoons ground cumin",
      "1 teaspoon turmeric",
      "2 teaspoons kosher salt"
    ]},
    { group: "Sauce", items: [
      "2 onions, finely diced",
      "6 cloves garlic, minced",
      "2 tablespoons grated ginger",
      "1 (28 oz) can crushed tomatoes",
      "3 tablespoons tomato paste",
      "1 tablespoon garam masala",
      "2 teaspoons paprika",
      "1 teaspoon ground coriander",
      "1/2 teaspoon cayenne",
      "1 teaspoon sugar"
    ]},
    { group: "To finish", items: [
      "1 cup heavy cream",
      "3 tablespoons butter",
      "1/2 cup chopped cilantro",
      "2 cups basmati rice, cooked",
      "6 pieces naan"
    ]}
  ],
  steps: [
    "Toss the chicken with the yogurt, lemon juice, garam masala, cumin, turmeric, and salt. Marinate at least 30 minutes, or overnight in the fridge.",
    "Put the onions, garlic, ginger, tomatoes, tomato paste, and all the sauce spices in the slow cooker and stir together.",
    "Add the marinated chicken along with all the yogurt marinade and stir to combine.",
    "Cover and cook on low 4 to 5 hours, or high 2 1/2 hours.",
    "For a silkier sauce, lift out the chicken pieces, blend the sauce smooth with an immersion blender, and return the chicken.",
    "Stir in the cream and butter and let it warm through 10 minutes with the lid off.",
    "Taste for salt, stir in most of the cilantro, and serve over basmati rice with naan."
  ],
  tips: [
    "The yogurt may look curdled during cooking. Blending the sauce and adding cream at the end fixes it completely.",
    "Slow cookers add no evaporation, so the sauce can be loose. Leave the lid off for the last half hour to thicken it."
  ],
  makeAhead: "Freeze before adding the cream, for three months."
},

{
  id: "slow-cooker-honey-garlic-chicken",
  title: "Slow Cooker Honey Garlic Chicken Thighs",
  blurb: "Five minutes of work in the morning, sticky glazed chicken by dinner.",
  emoji: "🍯", protein: "Chicken", cuisine: "Asian",
  totalTime: 250, activeTime: 10, difficulty: "Easy", servings: 6,
  plate: { protein: "Chicken thighs", starch: "Rice", veg: null },
  nutrition: { calories: 465, protein: 38, carbs: 48, fat: 13, fiber: 1 },
  tags: ["slow-cooker", "kid-friendly", "budget", "dairy-free", "make-ahead", "leftovers"],
  seasons: ["all"], karolina: true,
  ingredients: [
    { group: "Chicken", items: [
      "3 lb boneless skinless chicken thighs",
      "1/2 cup honey",
      "1/2 cup soy sauce",
      "1/4 cup ketchup",
      "8 cloves garlic, minced",
      "1 tablespoon grated ginger",
      "2 tablespoons rice vinegar",
      "1 teaspoon red pepper flakes",
      "3 tablespoons cornstarch mixed with 3 tablespoons water"
    ]},
    { group: "To serve", items: [
      "4 cups cooked rice",
      "1 lb steamed broccoli",
      "3 scallions, sliced",
      "1 tablespoon sesame seeds"
    ]}
  ],
  steps: [
    "Whisk the honey, soy sauce, ketchup, garlic, ginger, vinegar, and pepper flakes together.",
    "Put the chicken in the slow cooker and pour the sauce over.",
    "Cover and cook on low 4 hours, or high 2 1/2 hours.",
    "Lift the chicken out onto a plate. Whisk the cornstarch slurry into the liquid in the pot.",
    "Cover and cook on high 15 minutes, until the sauce thickens into a proper glaze.",
    "Return the chicken and turn it to coat. For deeper color, spread it on a sheet pan and broil 3 minutes.",
    "Serve over rice with steamed broccoli, scallions, and sesame seeds."
  ],
  tips: [
    "Thickening at the end is what turns a watery slow cooker liquid into a glaze that actually clings.",
    "The broiler step takes three minutes and makes it look and taste far better."
  ],
  makeAhead: "Mix the sauce up to a week ahead."
},

{
  id: "slow-cooker-chicken-wild-rice-soup",
  title: "Slow Cooker Chicken and Wild Rice Soup",
  blurb: "Creamy, nutty, and thick with vegetables. The soup for the coldest week of the year.",
  emoji: "🍚", protein: "Chicken", cuisine: "American",
  totalTime: 380, activeTime: 20, difficulty: "Easy", servings: 6,
  plate: { protein: "Chicken", starch: "Wild rice", veg: "Carrot, celery, mushrooms" },
  nutrition: { calories: 465, protein: 34, carbs: 46, fat: 17, fiber: 5 },
  tags: ["slow-cooker", "comfort", "make-ahead", "leftovers", "budget"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Soup", items: [
      "2 lb boneless skinless chicken thighs",
      "1 1/2 cups wild rice blend, rinsed",
      "1 onion, diced",
      "4 carrots, diced",
      "3 stalks celery, diced",
      "8 oz mushrooms, sliced",
      "4 cloves garlic, minced",
      "8 cups chicken broth",
      "2 bay leaves",
      "1 tablespoon fresh thyme",
      "1 1/2 teaspoons kosher salt",
      "1/2 teaspoon black pepper"
    ]},
    { group: "To finish", items: [
      "4 tablespoons butter",
      "1/3 cup all-purpose flour",
      "1 1/2 cups heavy cream",
      "2 tablespoons lemon juice",
      "1/4 cup chopped parsley"
    ]}
  ],
  steps: [
    "Put the chicken, rice, onion, carrots, celery, mushrooms, garlic, broth, bay leaves, thyme, salt, and pepper in the slow cooker.",
    "Cover and cook on low 6 hours, until the rice is tender and split open.",
    "Lift out the chicken, shred it, and return it to the pot. Remove the bay leaves.",
    "In a saucepan, melt the butter and whisk in the flour. Cook 2 minutes, then whisk in the cream slowly until smooth. Simmer 3 minutes until thickened.",
    "Stir the cream mixture into the slow cooker and cook on high 15 minutes more.",
    "Add the lemon juice and parsley and taste for salt.",
    "If it is thicker than you like, thin it with hot broth - wild rice keeps absorbing liquid."
  ],
  tips: [
    "Making a roux separately gives you a much smoother, thicker soup than just pouring cream in.",
    "Wild rice takes longer than white rice and holds its texture over a long cook, which is why it works here."
  ],
  makeAhead: "Keeps four days; thin with broth when reheating."
},

{
  id: "slow-cooker-turkey-chili",
  title: "Slow Cooker Turkey Chili",
  blurb: "A lighter chili that still tastes like it simmered all day, because it did.",
  emoji: "🌶️", protein: "Turkey", cuisine: "American",
  totalTime: 380, activeTime: 20, difficulty: "Easy", servings: 6,
  plate: { protein: "Ground turkey and beans", starch: "Beans and corn", veg: "Peppers, onion, tomato" },
  nutrition: { calories: 425, protein: 36, carbs: 46, fat: 11, fiber: 13 },
  tags: ["slow-cooker", "make-ahead", "freezer-friendly", "high-protein", "budget", "leftovers", "gluten-free"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Chili", items: [
      "2 lb ground turkey",
      "2 tablespoons olive oil",
      "2 onions, diced",
      "2 bell peppers, diced",
      "5 cloves garlic, minced",
      "3 tablespoons chili powder",
      "1 tablespoon ground cumin",
      "2 teaspoons smoked paprika",
      "1 teaspoon dried oregano",
      "3 tablespoons tomato paste",
      "1 (28 oz) can crushed tomatoes",
      "2 (15 oz) cans kidney or black beans, drained",
      "1 1/2 cups corn kernels",
      "2 cups chicken broth",
      "2 teaspoons kosher salt",
      "1 tablespoon lime juice"
    ]},
    { group: "To serve", items: [
      "1 cup shredded cheddar",
      "1/2 cup sour cream",
      "4 scallions, sliced",
      "1 avocado, diced"
    ]}
  ],
  steps: [
    "Heat the oil in a skillet over medium-high and brown the turkey 8 minutes, breaking it up. Ground turkey is lean and will not brown in a slow cooker, so this step matters.",
    "Add the onions and peppers and cook 6 minutes. Add the garlic, all the spices, and the tomato paste and stir 90 seconds.",
    "Tip everything into the slow cooker with the tomatoes, beans, corn, broth, and salt.",
    "Cover and cook on low 6 hours, or high 3 1/2 hours.",
    "If it is looser than you want, leave the lid off on high for the last 30 minutes.",
    "Stir in the lime juice and taste carefully for salt.",
    "Serve with cheddar, sour cream, scallions, and avocado."
  ],
  tips: [
    "Browning the turkey and blooming the spices on the stove first is the difference between good chili and beige stew.",
    "Ground turkey thigh has more fat and flavor than breast, if your store carries it."
  ],
  makeAhead: "Better the next day. Freezes for three months."
},

{
  id: "slow-cooker-korean-short-ribs",
  title: "Slow Cooker Korean Short Ribs",
  blurb: "Sweet-savory braised short ribs that slide off the bone, over rice with quick cucumbers.",
  emoji: "🥩", protein: "Beef", cuisine: "Korean",
  totalTime: 500, activeTime: 25, difficulty: "Easy", servings: 6,
  plate: { protein: "Short ribs", starch: "Rice", veg: "Cucumber and scallion" },
  nutrition: { calories: 665, protein: 44, carbs: 52, fat: 30, fiber: 3 },
  tags: ["slow-cooker", "special-occasion", "make-ahead", "dairy-free", "comfort", "leftovers"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Ribs", items: [
      "4 lb bone-in beef short ribs",
      "2 teaspoons kosher salt",
      "1 teaspoon black pepper",
      "2 tablespoons neutral oil"
    ]},
    { group: "Braise", items: [
      "3/4 cup soy sauce",
      "1/2 cup brown sugar",
      "1 pear or apple, grated",
      "1 onion, sliced",
      "10 cloves garlic, minced",
      "2 tablespoons grated ginger",
      "2 tablespoons rice vinegar",
      "2 tablespoons gochujang",
      "1 tablespoon sesame oil",
      "1 cup beef broth"
    ]},
    { group: "To serve", items: [
      "4 cups cooked short-grain rice",
      "1 English cucumber, thinly sliced",
      "2 tablespoons rice vinegar",
      "4 scallions, sliced",
      "1 tablespoon sesame seeds"
    ]}
  ],
  steps: [
    "Season the short ribs and sear them in the oil over high heat, about 3 minutes per side, until well browned.",
    "Whisk all the braise ingredients together.",
    "Put the ribs in the slow cooker and pour the sauce over.",
    "Cover and cook on low 8 hours, until the meat pulls away from the bone with almost no effort.",
    "Toss the cucumber with the rice vinegar and a pinch of salt and refrigerate.",
    "Lift the ribs out. Skim the fat off the sauce - there will be a lot - then simmer the sauce in a pot for 10 minutes to concentrate it.",
    "Return the ribs to the reduced sauce and turn to coat.",
    "Serve over rice with the quick cucumbers, scallions, and sesame seeds."
  ],
  tips: [
    "The grated pear is a Korean technique that tenderizes the meat and adds a clean sweetness. It is worth including.",
    "Chill the finished dish and lift the solid fat off the top - it is by far the easiest way to degrease it."
  ],
  makeAhead: "Make a day ahead specifically so you can lift the fat off cold. Reheat gently."
},

{
  id: "slow-cooker-chicken-cacciatore",
  title: "Slow Cooker Chicken Cacciatore",
  blurb: "Chicken braised with peppers, mushrooms, and tomatoes until it falls apart. Rustic and forgiving.",
  emoji: "🍅", protein: "Chicken", cuisine: "Italian",
  totalTime: 380, activeTime: 25, difficulty: "Easy", servings: 6,
  plate: { protein: "Chicken thighs", starch: "Polenta or pasta", veg: "Peppers, mushrooms, tomato" },
  nutrition: { calories: 485, protein: 38, carbs: 38, fat: 20, fiber: 6 },
  tags: ["slow-cooker", "comfort", "make-ahead", "freezer-friendly", "gluten-free", "leftovers", "veggie-forward"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Chicken", items: [
      "8 bone-in skin-on chicken thighs",
      "2 teaspoons kosher salt",
      "1 teaspoon black pepper",
      "2 tablespoons olive oil"
    ]},
    { group: "Braise", items: [
      "1 onion, sliced",
      "2 bell peppers, sliced",
      "10 oz mushrooms, sliced",
      "5 cloves garlic, minced",
      "3/4 cup dry red wine",
      "1 (28 oz) can crushed tomatoes",
      "2 tablespoons tomato paste",
      "1 tablespoon dried oregano",
      "1 teaspoon red pepper flakes",
      "2 bay leaves",
      "1/2 cup pitted olives"
    ]},
    { group: "To serve", items: [
      "6 cups cooked polenta or 1 lb pasta",
      "1/2 cup grated Parmesan",
      "1/4 cup chopped parsley"
    ]}
  ],
  steps: [
    "Season the thighs and brown them skin side down in the oil over medium-high, 6 minutes, then 3 minutes on the other side. Move to the slow cooker.",
    "In the same skillet, cook the onion, peppers, and mushrooms 8 minutes, until the mushroom liquid has cooked off.",
    "Add the garlic and cook 1 minute, then pour in the wine and simmer 3 minutes, scraping the pan.",
    "Tip everything into the slow cooker with the tomatoes, tomato paste, oregano, pepper flakes, and bay leaves.",
    "Cover and cook on low 6 hours.",
    "Stir in the olives and remove the bay leaves. If the sauce is thin, leave the lid off on high for 30 minutes.",
    "Serve over polenta or pasta with Parmesan and parsley."
  ],
  tips: [
    "The skin will not stay crisp through a long braise. Brown it anyway - that is where the flavor of the sauce comes from.",
    "Bone-in thighs make a far richer sauce than boneless. The bones are doing real work."
  ],
  makeAhead: "Better on day two. Freezes for three months."
},

{
  id: "slow-cooker-butter-chicken",
  title: "Slow Cooker Butter Chicken",
  blurb: "Mild, creamy, and fragrant with warm spices. The one everyone at the table agrees on.",
  emoji: "🧈", protein: "Chicken", cuisine: "Indian",
  totalTime: 260, activeTime: 20, difficulty: "Easy", servings: 6,
  plate: { protein: "Chicken thighs", starch: "Basmati rice", veg: "Tomato and onion" },
  nutrition: { calories: 585, protein: 40, carbs: 46, fat: 27, fiber: 4 },
  tags: ["slow-cooker", "comfort", "kid-friendly", "make-ahead", "freezer-friendly", "gluten-free", "leftovers"],
  seasons: ["all"], karolina: true,
  ingredients: [
    { group: "Sauce", items: [
      "3 lb boneless skinless chicken thighs, cut into chunks",
      "2 onions, finely diced",
      "6 cloves garlic, minced",
      "2 tablespoons grated ginger",
      "1 (28 oz) can crushed tomatoes",
      "3 tablespoons tomato paste",
      "1 tablespoon garam masala",
      "2 teaspoons ground cumin",
      "2 teaspoons paprika",
      "1 teaspoon ground coriander",
      "1/2 teaspoon turmeric",
      "1/4 teaspoon cayenne",
      "2 teaspoons kosher salt",
      "1 teaspoon sugar"
    ]},
    { group: "To finish", items: [
      "6 tablespoons butter",
      "1 cup heavy cream",
      "1 teaspoon garam masala",
      "1/2 cup chopped cilantro",
      "2 cups basmati rice, cooked",
      "6 pieces naan"
    ]}
  ],
  steps: [
    "Put the chicken, onions, garlic, ginger, tomatoes, tomato paste, all the spices, salt, and sugar in the slow cooker and stir well.",
    "Cover and cook on low 4 hours, or high 2 1/2 hours.",
    "Lift the chicken pieces out with a slotted spoon and set aside.",
    "Blend the sauce until completely smooth with an immersion blender. This is what gives butter chicken its signature velvety texture.",
    "Stir the butter into the hot sauce a tablespoon at a time until it melts in, then the cream and the extra teaspoon of garam masala.",
    "Return the chicken and warm through 15 minutes with the lid off.",
    "Taste for salt, stir in the cilantro, and serve with rice and naan."
  ],
  tips: [
    "Blending the sauce and adding the butter and cream at the very end is the whole technique. Everything before that is just building flavor.",
    "Adding the butter off a rolling boil, a piece at a time, keeps the sauce glossy rather than oily."
  ],
  makeAhead: "Freeze before adding the butter and cream."
},

{
  id: "slow-cooker-jambalaya",
  title: "Slow Cooker Jambalaya",
  blurb: "Sausage, chicken, and shrimp with rice and the Cajun trinity, all in one pot.",
  emoji: "🍤", protein: "Chicken", cuisine: "Cajun",
  totalTime: 260, activeTime: 25, difficulty: "Easy", servings: 6,
  plate: { protein: "Chicken, sausage, shrimp", starch: "Rice", veg: "Peppers, celery, onion" },
  nutrition: { calories: 585, protein: 42, carbs: 52, fat: 22, fiber: 4 },
  tags: ["slow-cooker", "comfort", "high-protein", "leftovers", "special-occasion", "dairy-free"],
  seasons: ["all"],
  ingredients: [
    { group: "Jambalaya", items: [
      "1 1/2 lb boneless skinless chicken thighs, cut into chunks",
      "1 lb andouille sausage, sliced",
      "1 large onion, diced",
      "2 green bell peppers, diced",
      "4 stalks celery, diced",
      "5 cloves garlic, minced",
      "1 (28 oz) can diced tomatoes",
      "3 cups chicken broth",
      "2 tablespoons Cajun seasoning",
      "1 teaspoon dried thyme",
      "1 teaspoon smoked paprika",
      "1/2 teaspoon cayenne",
      "2 bay leaves",
      "1 1/2 teaspoons kosher salt"
    ]},
    { group: "To finish", items: [
      "1 1/2 cups long-grain rice",
      "1 lb large shrimp, peeled and deveined",
      "4 scallions, sliced",
      "1/4 cup chopped parsley",
      "Hot sauce"
    ]}
  ],
  steps: [
    "Brown the sausage in a skillet over medium-high 5 minutes, then add it to the slow cooker with the chicken.",
    "Add the onion, peppers, celery, garlic, tomatoes, broth, all the seasonings, bay leaves, and salt. Stir.",
    "Cover and cook on low 4 hours.",
    "Stir in the rice, cover, and cook on high 45 minutes to 1 hour, until the rice is tender and has absorbed most of the liquid.",
    "Scatter the shrimp over the top, cover, and cook 15 minutes more, just until they are pink and curled.",
    "Remove the bay leaves and taste for salt.",
    "Stir in the scallions and parsley and serve with hot sauce."
  ],
  tips: [
    "Add the rice partway through, not at the start, or it turns to porridge over four hours.",
    "Shrimp go in last and need only fifteen minutes. Any longer and they are rubber."
  ],
  makeAhead: "Best fresh once the rice is in, though the base can be made ahead."
},

{
  id: "slow-cooker-coconut-chickpea-curry",
  title: "Slow Cooker Coconut Chickpea Curry",
  blurb: "A creamy, gently spiced curry from cupboard ingredients, ready when you get home.",
  emoji: "🥥", protein: "Vegetarian", cuisine: "Indian",
  totalTime: 380, activeTime: 15, difficulty: "Easy", servings: 6,
  plate: { protein: "Chickpeas", starch: "Rice", veg: "Sweet potato, tomato, spinach" },
  nutrition: { calories: 485, protein: 15, carbs: 72, fat: 18, fiber: 14 },
  tags: ["slow-cooker", "budget", "make-ahead", "freezer-friendly", "dairy-free", "veggie-forward", "high-protein", "gluten-free"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Curry", items: [
      "3 (15 oz) cans chickpeas, drained",
      "2 large sweet potatoes, cut into 1-inch cubes",
      "1 large onion, diced",
      "6 cloves garlic, minced",
      "2 tablespoons grated ginger",
      "2 (14 oz) cans coconut milk",
      "1 (14.5 oz) can diced tomatoes",
      "3 tablespoons tomato paste",
      "2 tablespoons curry powder",
      "2 teaspoons ground cumin",
      "1 teaspoon turmeric",
      "1 teaspoon ground coriander",
      "1/2 teaspoon cayenne",
      "2 teaspoons kosher salt",
      "1 cup vegetable broth"
    ]},
    { group: "To finish", items: [
      "6 oz baby spinach",
      "3 tablespoons lime juice",
      "1/2 cup chopped cilantro",
      "3 cups cooked basmati rice",
      "6 pieces naan"
    ]}
  ],
  steps: [
    "Put everything except the finishing ingredients in the slow cooker and stir well.",
    "Cover and cook on low 6 hours, or high 3 1/2 hours, until the sweet potatoes are completely tender.",
    "Mash a few pieces of sweet potato and a scoop of the chickpeas against the side of the pot to thicken the curry.",
    "Add the spinach and stir until it wilts, about 3 minutes with the lid on.",
    "Stir in the lime juice and taste for salt - it will need more than you expect.",
    "Scatter with cilantro and serve over rice with naan."
  ],
  tips: [
    "The lime juice at the end is what lifts this out of flatness. Coconut curries without acid taste heavy.",
    "Full-fat coconut milk is worth it. The light version makes a thin, watery curry."
  ],
  makeAhead: "Keeps five days and freezes three months."
},

{
  id: "slow-cooker-french-dip",
  title: "Slow Cooker French Dip Sandwiches",
  blurb: "Beef slow-braised in savory broth, piled on toasted rolls with melted cheese and a cup of jus for dipping.",
  emoji: "🥪", protein: "Beef", cuisine: "American",
  totalTime: 500, activeTime: 20, difficulty: "Easy", servings: 6,
  plate: { protein: "Beef chuck", starch: "Rolls", veg: "Onions" },
  nutrition: { calories: 625, protein: 46, carbs: 42, fat: 29, fiber: 3 },
  tags: ["slow-cooker", "comfort", "make-ahead", "leftovers", "kid-friendly"],
  seasons: ["fall", "winter"], karolina: true,
  ingredients: [
    { group: "Beef", items: [
      "4 lb beef chuck roast",
      "2 teaspoons kosher salt",
      "1 teaspoon black pepper",
      "2 tablespoons olive oil",
      "2 onions, sliced",
      "6 cloves garlic, smashed",
      "4 cups beef broth",
      "2 tablespoons Worcestershire sauce",
      "2 tablespoons soy sauce",
      "1 tablespoon Dijon mustard",
      "4 sprigs thyme",
      "2 bay leaves"
    ]},
    { group: "Sandwiches", items: [
      "6 crusty sandwich rolls",
      "12 slices provolone or Swiss",
      "3 tablespoons butter, softened",
      "1/4 cup prepared horseradish"
    ]}
  ],
  steps: [
    "Season the roast and sear it hard in the oil on all sides, about 12 minutes total.",
    "Put the onions and garlic in the slow cooker and set the roast on top.",
    "Add the broth, Worcestershire, soy sauce, mustard, thyme, and bay leaves.",
    "Cover and cook on low 8 hours, until the beef shreds with no resistance.",
    "Lift the beef out and shred it. Strain the cooking liquid, skim off the fat, and keep it hot - this is your jus.",
    "Toss the shredded beef with about a cup of the jus so it stays juicy.",
    "Butter the cut sides of the rolls and toast them under the broiler until golden.",
    "Pile the beef on the rolls, top with cheese, and broil 2 minutes until melted. Serve with horseradish and a small bowl of hot jus for dipping."
  ],
  tips: [
    "Toast the rolls properly. Untoasted bread turns to paste the moment it meets the jus.",
    "Strain and degrease the jus or it will be greasy rather than savory."
  ],
  makeAhead: "The beef and jus keep four days and reheat perfectly together."
}

]);
