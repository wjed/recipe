/* Vegetarian & egg mains. */
window.RECIPES = (window.RECIPES || []).concat([

{
  id: "chana-masala",
  title: "Chana Masala",
  blurb: "Chickpeas simmered in a deeply spiced tomato gravy. Cheap, filling, and better the next day.",
  emoji: "🍛", protein: "Vegetarian", cuisine: "Indian",
  totalTime: 45, activeTime: 20, difficulty: "Easy", servings: 4,
  plate: { protein: "Chickpeas and yogurt", starch: "Basmati rice", veg: "Tomato and onion" },
  nutrition: { calories: 625, protein: 28, carbs: 92, fat: 16, fiber: 19 },
  tags: ["budget", "make-ahead", "freezer-friendly", "dairy-free", "veggie-forward", "leftovers", "high-protein"],
  seasons: ["all"],
  ingredients: [
    { group: "Curry", items: [
      "3 tablespoons neutral oil",
      "1 large onion, finely diced",
      "5 cloves garlic, minced",
      "1 tablespoon grated ginger",
      "1 green chili, minced",
      "2 teaspoons ground cumin",
      "2 teaspoons ground coriander",
      "1 teaspoon garam masala",
      "1/2 teaspoon turmeric",
      "1/2 teaspoon cayenne",
      "1 (28 oz) can crushed tomatoes",
      "3 (15 oz) cans chickpeas, drained",
      "1 1/2 teaspoons kosher salt",
      "1 cup water",
      "2 tablespoons lemon juice",
      "1/2 cup chopped cilantro"
    ]},
    { group: "To serve", items: [
      "1 cup plain Greek yogurt",
      "1 1/2 cups basmati rice",
      "4 pieces naan"
    ]}
  ],
  steps: [
    "Heat the oil in a large pot over medium. Cook the onion 10 minutes, stirring often, until golden brown at the edges. Don't rush this. It's where the sweetness comes from.",
    "Add the garlic, ginger, and chili and cook 2 minutes.",
    "Add all the ground spices and stir constantly for 60 seconds, until fragrant. Toasting them in oil is what separates this from a bland curry.",
    "Pour in the tomatoes and salt and simmer 10 minutes, until the oil begins to separate at the edges.",
    "Add the chickpeas and water. Simmer 15 minutes.",
    "Mash about a cup of the chickpeas against the side of the pot to thicken the sauce.",
    "Stir in the lemon juice and half the cilantro. Taste for salt and lemon.",
    "Serve over basmati rice with naan, a big spoonful of yogurt, and the rest of the cilantro."
  ],
  tips: [
    "Whole spices are lovely but ground ones work fine as long as you toast them in the oil.",
    "A spoonful of yogurt on top cools it down for anyone who finds it too warm."
  ],
  makeAhead: "Better on day two and freezes for three months."
},

{
  id: "black-bean-sweet-potato-enchiladas",
  title: "Black Bean and Sweet Potato Enchiladas",
  blurb: "Roasted sweet potato and black beans rolled up under a smoky red sauce and a lot of cheese.",
  emoji: "🌯", protein: "Vegetarian", cuisine: "Mexican",
  totalTime: 65, activeTime: 30, difficulty: "Medium", servings: 6,
  plate: { protein: "Black beans", starch: "Tortillas", veg: "Sweet potato and peppers" },
  nutrition: { calories: 670, protein: 30, carbs: 80, fat: 28, fiber: 17 },
  tags: ["make-ahead", "comfort", "budget", "veggie-forward", "freezer-friendly", "kid-friendly"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Filling", items: [
      "2 large sweet potatoes, cut into 1/2-inch dice",
      "2 tablespoons olive oil",
      "1 onion, diced",
      "1 red bell pepper, diced",
      "3 cloves garlic, minced",
      "3 (15 oz) cans black beans, drained",
      "2 teaspoons ground cumin",
      "1 teaspoon smoked paprika",
      "1 1/2 teaspoons kosher salt",
      "1/2 cup chopped cilantro",
      "2 tablespoons lime juice"
    ]},
    { group: "Sauce and assembly", items: [
      "3 cups red enchilada sauce",
      "12 corn or flour tortillas",
      "3 1/2 cups shredded Monterey Jack or cheddar",
      "1/2 cup sour cream",
      "2 scallions, sliced"
    ]}
  ],
  steps: [
    "Heat the oven to 425F. Toss the sweet potato with 1 tablespoon oil and a pinch of salt and roast 25 minutes until tender and browned at the edges.",
    "Meanwhile, cook the onion and bell pepper in the remaining oil over medium heat 7 minutes. Add the garlic, cumin, and paprika and cook 1 minute.",
    "Stir in the black beans and salt and cook 3 minutes, mashing about a third of the beans.",
    "Fold in the roasted sweet potato, cilantro, and lime juice. Taste for salt.",
    "Lower the oven to 375F. Spread 1 cup of the enchilada sauce in a 9x13 dish.",
    "Warm the tortillas so they roll without cracking. Fill each with about 1/3 cup filling and a sprinkle of cheese, roll, and set seam side down in the dish.",
    "Pour the remaining sauce over the top and scatter with the rest of the cheese.",
    "Bake 25 minutes, until bubbling and browned. Rest 10 minutes, then top with sour cream and scallions."
  ],
  tips: [
    "Cold tortillas crack when you roll them. Ten seconds in a dry pan or a damp towel in the microwave fixes it.",
    "Leaving the enchiladas to rest before serving keeps them from collapsing when you lift them out."
  ],
  makeAhead: "Assemble up to two days ahead and bake from cold, adding 10 minutes."
},

{
  id: "vegetarian-chili",
  title: "Three-Bean Vegetarian Chili",
  blurb: "Thick, smoky, and hearty enough that nobody asks where the meat is.",
  emoji: "🌶️", protein: "Vegetarian", cuisine: "American",
  totalTime: 55, activeTime: 20, difficulty: "Easy", servings: 6,
  plate: { protein: "Beans and lentils", starch: "Corn and rice", veg: "Peppers, onions, tomato" },
  nutrition: { calories: 525, protein: 30, carbs: 88, fat: 9, fiber: 24 },
  tags: ["budget", "make-ahead", "freezer-friendly", "dairy-free", "veggie-forward", "comfort", "leftovers"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Chili", items: [
      "1 cup red lentils, rinsed",
      "2 tablespoons olive oil",
      "1 large onion, diced",
      "2 bell peppers, diced",
      "3 stalks celery, diced",
      "5 cloves garlic, minced",
      "3 tablespoons chili powder",
      "1 tablespoon ground cumin",
      "2 teaspoons smoked paprika",
      "1 teaspoon dried oregano",
      "2 tablespoons tomato paste",
      "1 (28 oz) can crushed tomatoes",
      "1 (15 oz) can black beans, drained",
      "1 (15 oz) can kidney beans, drained",
      "1 (15 oz) can pinto beans, drained",
      "1 1/2 cups corn kernels",
      "2 cups vegetable broth",
      "1 tablespoon cocoa powder",
      "2 teaspoons kosher salt",
      "1 tablespoon lime juice"
    ]},
    { group: "To serve", items: [
      "1 cup shredded cheddar",
      "1/2 cup sour cream",
      "1/2 cup chopped cilantro",
      "2 avocados, diced"
    ]}
  ],
  steps: [
    "Heat the oil in a large pot over medium-high. Cook the onion, peppers, and celery 10 minutes until softened and starting to brown.",
    "Add the garlic and cook 1 minute, then all the dried spices and the tomato paste. Stir constantly for 90 seconds.",
    "Add the crushed tomatoes, all three cans of beans, the red lentils, corn, broth, cocoa powder, and salt. The lentils break down and thicken the pot.",
    "Bring to a boil, then reduce to a low simmer and cook uncovered 30 to 40 minutes, stirring occasionally, until thick.",
    "Mash some of the beans against the side of the pot if you want it thicker still.",
    "Stir in the lime juice and taste carefully for salt. Chili needs more than you expect.",
    "Serve with cheese, sour cream, cilantro, and avocado."
  ],
  tips: [
    "The cocoa powder doesn't make it taste like chocolate. It adds a dark background note that makes the chili taste like it simmered all day.",
    "Chili is always better the next day. If you can make it ahead, do."
  ],
  makeAhead: "Keeps five days in the fridge and freezes for six months."
},

{
  id: "eggplant-parmesan",
  title: "Eggplant Parmesan",
  blurb: "Roasted rather than fried eggplant, layered with marinara and cheese until bubbling.",
  emoji: "🍆", protein: "Vegetarian", cuisine: "Italian",
  totalTime: 90, activeTime: 40, difficulty: "Medium", servings: 6,
  plate: { protein: "Cheese and eggplant", starch: "Breadcrumb crust", veg: "Eggplant and tomato" },
  nutrition: { calories: 575, protein: 31, carbs: 39, fat: 34, fiber: 8 },
  tags: ["comfort", "make-ahead", "veggie-forward", "special-occasion", "leftovers"],
  seasons: ["summer", "fall"],
  ingredients: [
    { group: "Eggplant", items: [
      "3 large eggplants, sliced into 1/2-inch rounds",
      "1 tablespoon kosher salt",
      "1 1/2 cups panko breadcrumbs",
      "1 cup grated Parmesan",
      "1 teaspoon Italian seasoning",
      "3 eggs, beaten",
      "1/2 cup all-purpose flour",
      "1/3 cup olive oil"
    ]},
    { group: "Assembly", items: [
      "4 cups marinara sauce",
      "1 1/2 lb fresh mozzarella, sliced",
      "1/2 cup grated Parmesan",
      "1/2 cup torn basil"
    ]}
  ],
  steps: [
    "Lay the eggplant slices on a rack, salt both sides, and leave 30 minutes. Beads of water will appear. Blot them dry. This removes bitterness and stops the finished dish being watery.",
    "Heat the oven to 425F and line two sheet pans with parchment.",
    "Toss the panko with 1 cup Parmesan, the Italian seasoning, and the olive oil until evenly damp.",
    "Coat each slice in flour, then egg, then the crumb mixture, pressing firmly.",
    "Spread on the pans in a single layer and bake 25 minutes, flipping once, until golden and crisp.",
    "Lower the oven to 400F. Spread 1 cup marinara in a 9x13 dish. Layer half the eggplant, 1 1/2 cups sauce, half the mozzarella, and some basil. Repeat.",
    "Finish with the remaining Parmesan and bake 25 to 30 minutes, until bubbling and browned.",
    "Rest 15 minutes before cutting, then scatter with the rest of the basil."
  ],
  tips: [
    "Salting and draining the eggplant is the step people skip and then wonder why the dish is soupy.",
    "Don't drown the layers in sauce. A thin coat between layers keeps the crust from dissolving."
  ],
  makeAhead: "Assemble a day ahead and bake from cold, adding 15 minutes."
},

{
  id: "lentil-shepherds-pie",
  title: "Lentil Shepherd's Pie",
  blurb: "Savory lentils and vegetables in a rich gravy under a golden mashed potato crust.",
  emoji: "🥧", protein: "Vegetarian", cuisine: "British",
  totalTime: 75, activeTime: 35, difficulty: "Medium", servings: 6,
  plate: { protein: "Lentils", starch: "Mashed potatoes", veg: "Carrots, peas, mushrooms" },
  nutrition: { calories: 585, protein: 29, carbs: 80, fat: 19, fiber: 18 },
  tags: ["comfort", "budget", "make-ahead", "freezer-friendly", "veggie-forward", "leftovers"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Filling", items: [
      "2 cups brown or green lentils, rinsed",
      "3 tablespoons olive oil",
      "1 large onion, diced",
      "3 carrots, diced",
      "3 stalks celery, diced",
      "10 oz mushrooms, chopped",
      "4 cloves garlic, minced",
      "3 tablespoons tomato paste",
      "2 tablespoons all-purpose flour",
      "3 cups vegetable broth",
      "2 tablespoons soy sauce",
      "1 tablespoon Worcestershire or balsamic vinegar",
      "1 tablespoon fresh thyme",
      "1 cup frozen peas",
      "1 1/2 teaspoons kosher salt"
    ]},
    { group: "Topping", items: [
      "2 1/2 lb russet potatoes, peeled and cubed",
      "5 tablespoons butter",
      "1/2 cup warm milk",
      "1 teaspoon salt",
      "1 cup grated sharp cheddar"
    ]}
  ],
  steps: [
    "Simmer the lentils in plenty of water 20 to 25 minutes, until tender but not falling apart. Drain.",
    "Boil the potatoes in salted water 18 minutes until very tender. Drain, steam dry, and mash with the butter, warm milk, and salt.",
    "Meanwhile, heat the oil in a large skillet over medium-high. Cook the onion, carrots, celery, and mushrooms 12 minutes, until the mushrooms have released their water and it has cooked away.",
    "Add the garlic and cook 1 minute, then the tomato paste and flour and cook 2 minutes more.",
    "Add the broth, soy sauce, Worcestershire, thyme, and salt. Simmer 8 minutes until thick.",
    "Stir in the cooked lentils and the peas. The filling should be thick, not soupy.",
    "Heat the oven to 400F. Spread the filling in a 9x13 dish, spoon the mash over starting from the edges, and rough the top with a fork. Scatter with Parmesan.",
    "Bake 30 minutes, until browned and bubbling at the edges. Rest 10 minutes before serving."
  ],
  tips: [
    "Mushrooms and soy sauce are doing the savory work here. Don't leave either out.",
    "Undercook the lentils slightly. They keep softening in the oven."
  ],
  makeAhead: "Assemble up to two days ahead, or freeze unbaked for three months."
},

{
  id: "crispy-tofu-stir-fry",
  title: "Crispy Tofu Stir-Fry",
  blurb: "Tofu with a crisp crust, tossed with vegetables in a garlic-ginger sauce.",
  emoji: "🥢", protein: "Vegetarian", cuisine: "Chinese",
  totalTime: 40, activeTime: 30, difficulty: "Medium", servings: 4,
  plate: { protein: "Tofu and edamame", starch: "Rice", veg: "Broccoli and peppers" },
  nutrition: { calories: 560, protein: 30, carbs: 63, fat: 21, fiber: 9 },
  tags: ["dairy-free", "veggie-forward", "budget", "high-protein", "leftovers"],
  seasons: ["all"],
  ingredients: [
    { group: "Tofu", items: [
      "2 blocks (14 oz each) extra-firm tofu",
      "3 tablespoons cornstarch",
      "1 teaspoon kosher salt",
      "4 tablespoons neutral oil"
    ]},
    { group: "Sauce", items: [
      "1/3 cup soy sauce",
      "2 tablespoons rice vinegar",
      "2 tablespoons brown sugar",
      "1 tablespoon cornstarch",
      "1/2 cup vegetable broth",
      "1 teaspoon sesame oil",
      "1 teaspoon chili garlic sauce"
    ]},
    { group: "Vegetables", items: [
      "1 1/2 cups shelled edamame",
      "1 head broccoli, cut into florets",
      "2 bell peppers, sliced",
      "5 cloves garlic, minced",
      "1 tablespoon grated ginger",
      "3 scallions, sliced",
      "4 cups cooked rice"
    ]}
  ],
  steps: [
    "Drain the tofu and press it: wrap each block in a clean towel, set a heavy pan on top, and leave 20 minutes. Squeezing out the water is what lets it crisp.",
    "Cut into 1-inch cubes and toss gently with the cornstarch and salt until evenly coated.",
    "Whisk the sauce ingredients together.",
    "Heat 3 tablespoons oil in a large nonstick or cast-iron skillet over medium-high. Add the tofu in a single layer and cook 10 to 12 minutes, turning every 3 minutes, until golden on most sides. Move to a plate.",
    "Add the remaining oil, then the broccoli, peppers, and edamame with 1/4 cup water. Cover and cook 3 minutes, then uncover and cook 3 minutes more.",
    "Add the garlic and ginger and stir 30 seconds.",
    "Whisk the sauce again and pour it in. Toss 2 minutes until thick and glossy, then return the tofu and toss gently.",
    "Scatter with scallions and serve over rice."
  ],
  tips: [
    "Extra-firm tofu only. Soft or silken tofu will disintegrate no matter how carefully you cook it.",
    "Add the tofu back at the very end and toss gently, or the crust you worked for goes soggy."
  ],
  makeAhead: "Press the tofu and mix the sauce in the morning."
},

{
  id: "falafel-bowls",
  title: "Baked Falafel Bowls",
  blurb: "Herby chickpea patties baked instead of fried, with hummus, salad, and tahini sauce.",
  emoji: "🧆", protein: "Vegetarian", cuisine: "Middle Eastern",
  totalTime: 50, activeTime: 30, difficulty: "Medium", servings: 4,
  plate: { protein: "Falafel and yogurt tahini", starch: "Pita and rice", veg: "Cucumber, tomato, greens" },
  nutrition: { calories: 675, protein: 28, carbs: 76, fat: 29, fiber: 15 },
  tags: ["make-ahead", "dairy-free", "veggie-forward", "budget", "high-protein"],
  seasons: ["spring", "summer"],
  ingredients: [
    { group: "Falafel", items: [
      "1 1/2 cups dried chickpeas, soaked overnight",
      "1 onion, roughly chopped",
      "5 cloves garlic",
      "1 cup packed parsley",
      "1 cup packed cilantro",
      "2 teaspoons ground cumin",
      "1 teaspoon ground coriander",
      "1/2 teaspoon baking powder",
      "3 tablespoons chickpea or all-purpose flour",
      "1 1/2 teaspoons kosher salt",
      "3 tablespoons olive oil"
    ]},
    { group: "Tahini sauce", items: [
      "1 cup plain Greek yogurt",
      "1/3 cup tahini",
      "3 tablespoons lemon juice",
      "1 clove garlic, grated",
      "4-6 tablespoons cold water",
      "1/4 teaspoon salt"
    ]},
    { group: "Bowls", items: [
      "2 cups cooked rice",
      "1 cup hummus",
      "1 cucumber, diced",
      "2 tomatoes, diced",
      "3 cups chopped romaine",
      "1/2 cup pickled turnips or red onion",
      "4 pitas, warmed"
    ]}
  ],
  steps: [
    "Drain the soaked chickpeas thoroughly. Don't use canned chickpeas. They're too wet and the falafel will fall apart.",
    "Pulse the chickpeas, onion, garlic, herbs, spices, salt, and flour in a food processor until it looks like coarse wet sand that holds together when squeezed. Don't puree it smooth.",
    "Stir in the baking powder and refrigerate 30 minutes.",
    "Heat the oven to 425F. Brush a sheet pan generously with olive oil.",
    "Form the mixture into 16 patties, about 2 inches wide, and set them on the oiled pan. Brush the tops with more oil.",
    "Bake 25 minutes, flipping at 15, until browned and crisp on both sides.",
    "Whisk the tahini with the lemon and garlic, it will seize, then loosen with cold water and whisk in the yogurt until pourable.",
    "Build bowls with rice, hummus, salad vegetables, falafel, pickles, and plenty of tahini sauce."
  ],
  tips: [
    "Dried soaked chickpeas are non-negotiable. This is the one recipe where the canned shortcut doesn't work.",
    "The mixture should just hold together. If it crumbles completely, pulse in another spoonful of flour."
  ],
  makeAhead: "The raw mixture keeps two days in the fridge, and shaped patties freeze well."
},

{
  id: "stuffed-peppers-quinoa",
  title: "Quinoa Stuffed Peppers",
  blurb: "Sweet roasted peppers packed with quinoa, black beans, and cheese. Naturally a complete plate.",
  emoji: "🫑", protein: "Vegetarian", cuisine: "Mexican",
  totalTime: 65, activeTime: 25, difficulty: "Easy", servings: 6,
  plate: { protein: "Beans and cheese", starch: "Quinoa", veg: "Bell peppers and corn" },
  nutrition: { calories: 535, protein: 28, carbs: 62, fat: 22, fiber: 14 },
  tags: ["make-ahead", "gluten-free", "veggie-forward", "high-protein", "leftovers", "budget"],
  seasons: ["summer", "fall"],
  ingredients: [
    { group: "Peppers", items: [
      "6 large bell peppers, halved lengthwise and seeded",
      "1 tablespoon olive oil",
      "1/2 teaspoon salt"
    ]},
    { group: "Filling", items: [
      "1 cup quinoa, rinsed",
      "2 cups vegetable broth",
      "2 tablespoons olive oil",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "2 (15 oz) cans black beans, drained",
      "1 1/2 cups corn kernels",
      "1 (14.5 oz) can diced tomatoes, drained",
      "2 teaspoons ground cumin",
      "1 teaspoon chili powder",
      "1 1/2 teaspoons kosher salt",
      "3 cups shredded Monterey Jack",
      "1/2 cup chopped cilantro",
      "2 tablespoons lime juice"
    ]}
  ],
  steps: [
    "Heat the oven to 400F. Rub the pepper halves with oil, season, and set cut side up in a baking dish. Roast 15 minutes to soften them.",
    "Meanwhile, simmer the quinoa in the broth, covered, 15 minutes. Rest 5 minutes off the heat, then fluff.",
    "Heat the oil in a skillet and cook the onion 6 minutes. Add the garlic, cumin, and chili powder and cook 1 minute.",
    "Stir in the beans, corn, tomatoes, and salt and cook 4 minutes.",
    "Fold the cooked quinoa into the skillet along with half the cheese, the cilantro, and the lime juice.",
    "Spoon the filling into the roasted pepper halves, mounding it up, and top with the remaining cheese.",
    "Bake 20 to 25 minutes, until the cheese is melted and browned and the peppers are tender.",
    "Rest 5 minutes before serving."
  ],
  tips: [
    "Pre-roasting the peppers matters. Stuffing them raw leaves you with crunchy peppers and overbaked filling.",
    "Halving them lengthwise rather than standing them upright makes them far easier to fill and to eat."
  ],
  makeAhead: "Fill the peppers a day ahead and bake from cold, adding 10 minutes."
},

{
  id: "shakshuka",
  title: "Shakshuka",
  blurb: "Eggs poached in a spiced tomato and pepper sauce, eaten straight from the skillet with bread.",
  emoji: "🍳", protein: "Eggs", cuisine: "Middle Eastern",
  totalTime: 35, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "Eggs and feta", starch: "Crusty bread", veg: "Peppers and tomatoes" },
  nutrition: { calories: 525, protein: 30, carbs: 34, fat: 31, fiber: 6 },
  tags: ["30-minutes", "one-pan", "budget", "veggie-forward", "high-protein", "comfort"],
  seasons: ["all"],
  ingredients: [
    { group: "Sauce", items: [
      "3 tablespoons olive oil",
      "1 onion, diced",
      "2 red bell peppers, diced",
      "5 cloves garlic, sliced",
      "2 teaspoons ground cumin",
      "2 teaspoons sweet paprika",
      "1/2 teaspoon cayenne",
      "2 tablespoons tomato paste",
      "1 (28 oz) can crushed tomatoes",
      "1 1/2 teaspoons kosher salt",
      "1 teaspoon sugar"
    ]},
    { group: "To finish", items: [
      "8 eggs",
      "1 cup crumbled feta",
      "1/4 cup chopped parsley",
      "1/4 cup chopped cilantro",
      "1 loaf crusty bread"
    ]}
  ],
  steps: [
    "Heat the oil in a large skillet over medium. Cook the onion and peppers 10 minutes, until soft and beginning to caramelize.",
    "Add the garlic and cook 1 minute, then the cumin, paprika, cayenne, and tomato paste. Stir 90 seconds.",
    "Add the crushed tomatoes, salt, and sugar. Simmer 12 to 15 minutes, until thick enough that a spoon dragged through leaves a trail.",
    "Taste and adjust the salt now. You can't easily season it once the eggs are in.",
    "Make eight wells in the sauce with the back of a spoon and crack an egg into each.",
    "Cover and cook 6 to 8 minutes on low, until the whites are just set and the yolks still runny. Check at 6 minutes; they go from perfect to hard quickly.",
    "Scatter with feta and herbs and serve straight from the pan with bread for scooping."
  ],
  tips: [
    "The sauce must be thick before the eggs go in, or they sink and poach unevenly.",
    "Breakfast, lunch, or dinner. It's one of the best cheap dinners there is."
  ],
  makeAhead: "The sauce keeps five days. Reheat it and crack in fresh eggs for a ten-minute dinner."
},

{
  id: "vegetable-frittata",
  title: "Vegetable and Goat Cheese Frittata",
  blurb: "A big open omelette that works for dinner, feeds a crowd, and is just as good at room temperature.",
  emoji: "🍳", protein: "Eggs", cuisine: "Italian",
  totalTime: 40, activeTime: 20, difficulty: "Easy", servings: 6,
  plate: { protein: "Eggs and cheese", starch: "Potato", veg: "Spinach, tomato, onion" },
  nutrition: { calories: 455, protein: 32, carbs: 19, fat: 29, fiber: 3 },
  tags: ["one-pan", "gluten-free", "budget", "make-ahead", "veggie-forward", "high-protein"],
  seasons: ["all"],
  ingredients: [
    { group: "Frittata", items: [
      "1 cup cottage cheese",
      "12 eggs",
      "1/3 cup whole milk",
      "1 1/2 teaspoons kosher salt",
      "1/2 teaspoon black pepper",
      "3 tablespoons olive oil",
      "1 onion, thinly sliced",
      "1 lb baby potatoes, thinly sliced",
      "5 oz baby spinach",
      "1 cup cherry tomatoes, halved",
      "8 oz goat cheese, crumbled",
      "2 tablespoons chopped chives"
    ]}
  ],
  steps: [
    "Heat the oven to 375F.",
    "Whisk the eggs, milk, cottage cheese, salt, and pepper until uniform, with no streaks of white. The cottage cheese melts in and keeps it tender.",
    "Heat the oil in a 10 or 12-inch oven-safe skillet over medium. Cook the potato slices and onion 12 minutes, covered, stirring occasionally, until the potatoes are tender.",
    "Add the spinach in handfuls, stirring until wilted. Spread everything into an even layer.",
    "Pour in the eggs and cook 3 to 4 minutes on the stove, gently pulling the set edges toward the center with a spatula so the raw egg runs underneath.",
    "Scatter the tomatoes and goat cheese over the top.",
    "Transfer to the oven and bake 12 to 15 minutes, until the center is just barely set with a slight wobble. It carries on cooking as it rests.",
    "Rest 5 minutes, then slide onto a board, scatter with chives, and cut into wedges."
  ],
  tips: [
    "Pull it from the oven while the center still wobbles slightly. A fully firm frittata in the oven is a rubbery one on the plate.",
    "Any leftover cooked vegetables work here. It's a good way to clear out the fridge."
  ],
  makeAhead: "Good warm, room temperature, or cold. Keeps three days."
},

{
  id: "black-bean-burgers",
  title: "Black Bean Burgers",
  blurb: "Veggie burgers that hold together and taste like something, with a smoky chipotle mayo.",
  emoji: "🍔", protein: "Vegetarian", cuisine: "American",
  totalTime: 45, activeTime: 30, difficulty: "Medium", servings: 4,
  plate: { protein: "Black beans and cheddar", starch: "Buns", veg: "Lettuce, tomato, onion" },
  nutrition: { calories: 590, protein: 25, carbs: 63, fat: 27, fiber: 13 },
  tags: ["budget", "make-ahead", "freezer-friendly", "veggie-forward", "kid-friendly"],
  seasons: ["summer"],
  ingredients: [
    { group: "Patties", items: [
      "2 (15 oz) cans black beans, drained and rinsed",
      "1 tablespoon olive oil",
      "1 onion, finely diced",
      "1 red bell pepper, finely diced",
      "4 cloves garlic, minced",
      "1 cup panko breadcrumbs",
      "2 eggs",
      "2 teaspoons ground cumin",
      "1 teaspoon smoked paprika",
      "1 teaspoon chili powder",
      "1 1/2 teaspoons kosher salt",
      "3 tablespoons olive oil for cooking"
    ]},
    { group: "Chipotle mayo", items: [
      "1/2 cup mayonnaise",
      "1 chipotle in adobo, minced",
      "1 tablespoon lime juice"
    ]},
    { group: "To serve", items: [
      "4 slices sharp cheddar",
      "4 burger buns, toasted",
      "4 leaves lettuce",
      "1 tomato, sliced",
      "1/2 red onion, thinly sliced",
      "1 avocado, sliced"
    ]}
  ],
  steps: [
    "Heat the oven to 350F. Spread the drained beans on a sheet pan and bake 15 minutes to dry them out. This is the important part. Wet beans make mushy burgers.",
    "Meanwhile, cook the onion and bell pepper in the oil over medium 8 minutes, until soft and any liquid has evaporated. Add the garlic and spices and cook 1 minute. Let cool.",
    "Mash about two thirds of the beans in a large bowl, leaving the rest whole for texture.",
    "Add the cooled vegetables, panko, eggs, and salt. Mix until it holds together when squeezed.",
    "Form into 4 thick patties and chill 20 minutes.",
    "Stir the chipotle mayo ingredients together.",
    "Heat the oil in a skillet over medium. Cook the patties 5 minutes per side, turning once carefully, until a firm crust forms. Lay a slice of cheddar on each in the last minute.",
    "Serve on toasted buns with chipotle mayo, lettuce, tomato, onion, and avocado."
  ],
  tips: [
    "Drying the beans in the oven and chilling the patties are the two things that stop veggie burgers falling apart.",
    "Flip once and only once. Every turn risks breaking them."
  ],
  makeAhead: "Freeze uncooked patties between sheets of parchment for three months."
},

{
  id: "cauliflower-steaks-chimichurri",
  title: "Roasted Cauliflower Steaks with Chimichurri",
  blurb: "Thick slabs of cauliflower roasted until sweet and browned, under a sharp green herb sauce.",
  emoji: "🥬", protein: "Vegetarian", cuisine: "Mediterranean",
  totalTime: 45, activeTime: 15, difficulty: "Easy", servings: 4,
  plate: { protein: "White beans and halloumi", starch: null, veg: "Cauliflower" },
  nutrition: { calories: 575, protein: 28, carbs: 34, fat: 38, fiber: 12 },
  tags: ["gluten-free", "dairy-free", "low-carb", "veggie-forward", "special-occasion"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Cauliflower", items: [
      "2 large heads cauliflower",
      "4 tablespoons olive oil",
      "1 1/2 teaspoons kosher salt",
      "1 teaspoon smoked paprika",
      "1/2 teaspoon black pepper"
    ]},
    { group: "Chimichurri", items: [
      "1 cup packed parsley, finely chopped",
      "1/4 cup packed cilantro, chopped",
      "3 cloves garlic, minced",
      "1/2 cup olive oil",
      "3 tablespoons red wine vinegar",
      "1/2 teaspoon red pepper flakes",
      "3/4 teaspoon kosher salt"
    ]},
    { group: "To serve", items: [
      "8 oz halloumi, sliced 1/2 inch thick",
      "2 (15 oz) cans white beans, drained and warmed",
      "1/3 cup toasted almonds, chopped",
      "1 lemon, cut into wedges"
    ]}
  ],
  steps: [
    "Heat the oven to 425F.",
    "Trim the leaves from each cauliflower but leave the core intact. It's what holds the steaks together. Stand each head upright and cut two 1-inch thick slabs from the center. Save the loose florets and roast them alongside.",
    "Brush the steaks on both sides with oil and season with the salt, paprika, and pepper.",
    "Arrange on a sheet pan with the loose florets and roast 20 minutes.",
    "Flip carefully with a wide spatula and roast 15 to 18 minutes more, until deeply browned and tender when pierced.",
    "Meanwhile, stir all the chimichurri ingredients together and let sit.",
    "Fry the halloumi in a dry hot pan, 2 minutes a side, until browned. Spoon the warm white beans onto plates, set a cauliflower steak and the halloumi on top, and spoon chimichurri over.",
    "Finish with toasted almonds and a squeeze of lemon."
  ],
  tips: [
    "You only get two proper steaks per head. The rest breaks into florets, which roast just as well.",
    "The cauliflower needs to be browned, not pale. Pale roasted cauliflower tastes like nothing."
  ],
  makeAhead: "Chimichurri keeps a week and improves after a day."
},

{
  id: "palak-paneer",
  title: "Palak Paneer",
  blurb: "Cubes of soft cheese in a silky, deeply green spinach curry.",
  emoji: "🥬", protein: "Vegetarian", cuisine: "Indian",
  totalTime: 45, activeTime: 35, difficulty: "Medium", servings: 4,
  plate: { protein: "Paneer and chickpeas", starch: "Basmati rice", veg: "Spinach" },
  nutrition: { calories: 555, protein: 29, carbs: 59, fat: 24, fiber: 11 },
  tags: ["gluten-free", "veggie-forward", "high-protein", "comfort", "make-ahead"],
  seasons: ["all"],
  ingredients: [
    { group: "Curry", items: [
      "1 (15 oz) can chickpeas, drained",
      "1 lb paneer, cut into 3/4-inch cubes",
      "1 1/2 lb fresh spinach",
      "3 tablespoons ghee or neutral oil",
      "1 large onion, finely diced",
      "5 cloves garlic, minced",
      "1 tablespoon grated ginger",
      "1 green chili, minced",
      "1 1/2 teaspoons ground cumin",
      "1 teaspoon ground coriander",
      "1/2 teaspoon turmeric",
      "1 teaspoon garam masala",
      "1 (14.5 oz) can diced tomatoes",
      "1/2 cup heavy cream",
      "1 1/2 teaspoons kosher salt",
      "1 tablespoon lemon juice"
    ]},
    { group: "To serve", items: [
      "1 1/2 cups basmati rice",
      "4 pieces naan"
    ]}
  ],
  steps: [
    "Bring a large pot of water to a boil. Add the spinach and cook just 45 seconds, then transfer immediately to a bowl of ice water. This locks in the bright green color.",
    "Squeeze the spinach dry, really dry, and blend it to a smooth puree with a splash of water.",
    "Heat 1 tablespoon of the ghee in a skillet over medium-high and fry the paneer cubes 4 minutes, turning, until golden on two sides. Move to a plate.",
    "Add the remaining ghee and cook the onion 8 minutes until golden.",
    "Add the garlic, ginger, and chili and cook 2 minutes. Add all the ground spices and stir 60 seconds.",
    "Add the tomatoes and cook 8 minutes, until thick and the oil separates at the edges.",
    "Stir in the spinach puree and salt and cook 5 minutes. No longer, or the color dulls.",
    "Add the cream, lemon juice, chickpeas, and paneer. Warm through 3 minutes and serve with rice and naan."
  ],
  tips: [
    "Blanching and shocking the spinach is what keeps the curry vivid green instead of army green.",
    "Frying the paneer first gives it a firmer edge that holds up in the sauce. Soaking it in hot salted water for 10 minutes first makes it even softer inside."
  ],
  makeAhead: "The spinach base can be made two days ahead; add cream and paneer when reheating."
},

{
  id: "roasted-cauliflower-tacos",
  title: "Roasted Cauliflower Tacos",
  blurb: "Spiced cauliflower roasted until charred, with avocado crema and quick pickled onions.",
  emoji: "🌮", protein: "Vegetarian", cuisine: "Mexican",
  totalTime: 40, activeTime: 20, difficulty: "Easy", servings: 4,
  plate: { protein: "Black beans and yogurt crema", starch: "Corn tortillas", veg: "Cauliflower and cabbage" },
  nutrition: { calories: 570, protein: 26, carbs: 74, fat: 19, fiber: 20 },
  tags: ["dairy-free", "budget", "veggie-forward", "gluten-free"],
  seasons: ["all"],
  ingredients: [
    { group: "Cauliflower", items: [
      "2 heads cauliflower, cut into small florets",
      "3 tablespoons olive oil",
      "2 teaspoons ground cumin",
      "2 teaspoons chili powder",
      "1 teaspoon smoked paprika",
      "1 1/2 teaspoons kosher salt"
    ]},
    { group: "Avocado crema", items: [
      "1 cup plain Greek yogurt",
      "2 avocados",
      "1/2 cup cilantro",
      "3 tablespoons lime juice",
      "1 clove garlic",
      "1/4 cup water",
      "1/2 teaspoon salt"
    ]},
    { group: "To serve", items: [
      "1 red onion, thinly sliced",
      "1/2 cup red wine vinegar",
      "2 (15 oz) cans black beans, warmed",
      "12 corn tortillas",
      "2 cups shredded cabbage",
      "1/2 cup chopped cilantro"
    ]}
  ],
  steps: [
    "Cover the sliced onion with the vinegar and a pinch of salt and sugar. Leave it while everything else cooks.",
    "Heat the oven to 450F. Toss the cauliflower with the oil, spices, and salt.",
    "Spread on two sheet pans, crowding is what stops it charring, and roast 25 to 30 minutes, tossing once, until dark brown at the edges.",
    "Blend all the crema ingredients until smooth, adding water until it pours.",
    "Warm the tortillas and the black beans.",
    "Build tacos with beans, roasted cauliflower, cabbage, pickled onions, cilantro, and a heavy drizzle of avocado crema."
  ],
  tips: [
    "450F and two pans. Cauliflower that steams instead of roasting is the difference between a great taco and a sad one.",
    "Small florets have more surface area, so more of them get charred."
  ],
  makeAhead: "The pickled onions and crema keep three days."
},

{
  id: "red-lentil-dal",
  title: "Red Lentil Dal",
  blurb: "Creamy, golden, and comforting, from a bag of lentils and a handful of spices.",
  emoji: "🍲", protein: "Vegetarian", cuisine: "Indian",
  totalTime: 40, activeTime: 15, difficulty: "Easy", servings: 4,
  plate: { protein: "Red lentils", starch: "Basmati rice", veg: "Tomato and spinach" },
  nutrition: { calories: 535, protein: 28, carbs: 87, fat: 10, fiber: 18 },
  tags: ["budget", "make-ahead", "freezer-friendly", "dairy-free", "veggie-forward", "comfort", "high-protein"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Dal", items: [
      "2 cups red lentils, rinsed",
      "4 cups water",
      "1 teaspoon turmeric",
      "1 1/2 teaspoons kosher salt",
      "1 (14.5 oz) can diced tomatoes",
      "5 oz baby spinach",
      "2 tablespoons lemon juice"
    ]},
    { group: "Tempered spices", items: [
      "3 tablespoons ghee or coconut oil",
      "1 teaspoon cumin seeds",
      "1 teaspoon mustard seeds",
      "1 onion, finely diced",
      "5 cloves garlic, minced",
      "1 tablespoon grated ginger",
      "1 green chili, minced",
      "1 teaspoon ground coriander",
      "1 teaspoon garam masala"
    ]},
    { group: "To serve", items: [
      "1 1/2 cups basmati rice",
      "1/2 cup chopped cilantro",
      "1/4 cup plain yogurt"
    ]}
  ],
  steps: [
    "Put the lentils, water, turmeric, and salt in a pot. Bring to a boil, skim off any foam, then simmer 20 minutes, until the lentils collapse into a loose puree.",
    "Stir in the tomatoes and cook 5 minutes more.",
    "Meanwhile, make the tempering: heat the ghee in a skillet over medium-high. Add the cumin and mustard seeds and wait for them to pop and sizzle, about 45 seconds.",
    "Add the onion and cook 8 minutes until browned at the edges.",
    "Add the garlic, ginger, and chili and cook 2 minutes, then the coriander and garam masala for 30 seconds.",
    "Pour the entire contents of the skillet into the lentils and stir. This is the step that makes dal taste like dal.",
    "Add the spinach and stir until wilted, then the lemon juice. Taste for salt.",
    "Serve over rice with cilantro and a spoonful of yogurt."
  ],
  tips: [
    "Red lentils need no soaking and cook in 20 minutes, which makes this one of the fastest cheap dinners going.",
    "The tempering step looks fussy and is where the flavor comes from. Don't stir the spices straight into the pot."
  ],
  makeAhead: "Keeps five days and freezes for three months. Thin with water when reheating."
},

{
  id: "halloumi-vegetable-traybake",
  title: "Halloumi and Vegetable Traybake",
  blurb: "Squeaky, salty cheese roasted with vegetables until golden. Fifteen minutes of work, one pan.",
  emoji: "🧀", protein: "Vegetarian", cuisine: "Mediterranean",
  totalTime: 45, activeTime: 15, difficulty: "Easy", servings: 4,
  plate: { protein: "Halloumi and chickpeas", starch: "Baby potatoes", veg: "Peppers, zucchini, tomato" },
  nutrition: { calories: 545, protein: 25, carbs: 44, fat: 30, fiber: 9 },
  tags: ["sheet-pan", "one-pan", "gluten-free", "veggie-forward", "high-protein"],
  seasons: ["summer"],
  ingredients: [
    { group: "Tray", items: [
      "2 blocks (8 oz each) halloumi, cut into thick slices",
      "1 lb baby potatoes, halved",
      "1 (15 oz) can chickpeas, drained and dried",
      "2 bell peppers, cut into chunks",
      "2 zucchini, cut into half-moons",
      "1 pint cherry tomatoes",
      "1 red onion, cut into wedges",
      "4 tablespoons olive oil",
      "2 teaspoons dried oregano",
      "1 teaspoon smoked paprika",
      "1 teaspoon kosher salt",
      "3 cloves garlic, minced"
    ]},
    { group: "To finish", items: [
      "2 tablespoons lemon juice",
      "1/4 cup chopped parsley",
      "2 tablespoons honey"
    ]}
  ],
  steps: [
    "Heat the oven to 425F.",
    "Toss the potatoes with 1 tablespoon oil and a pinch of salt. Roast on a large sheet pan 20 minutes.",
    "Toss the peppers, zucchini, tomatoes, onion, and chickpeas with 2 tablespoons oil, the oregano, paprika, garlic, and salt.",
    "Add them to the pan with the potatoes and roast 15 minutes.",
    "Toss the halloumi slices with the remaining oil, nestle them among the vegetables, and roast 10 to 12 minutes more, until the cheese is golden at the edges.",
    "Drizzle with the lemon juice and honey and scatter with parsley. Serve straight from the pan."
  ],
  tips: [
    "Halloumi doesn't melt, it browns. Add it near the end so it stays firm rather than drying out.",
    "The honey against the salty cheese is the thing that makes this taste finished rather than just healthy."
  ],
  makeAhead: null
},

{
  id: "sweet-potato-burrito-bowls",
  title: "Sweet Potato and Black Bean Burrito Bowls",
  blurb: "Roasted sweet potato, seasoned black beans, and cilantro-lime rice, built to order.",
  emoji: "🍠", protein: "Vegetarian", cuisine: "Mexican",
  totalTime: 45, activeTime: 20, difficulty: "Easy", servings: 4,
  plate: { protein: "Black beans, yogurt and cheese", starch: "Cilantro-lime rice", veg: "Sweet potato and peppers" },
  nutrition: { calories: 740, protein: 30, carbs: 96, fat: 27, fiber: 16 },
  tags: ["make-ahead", "budget", "dairy-free", "veggie-forward", "leftovers", "gluten-free"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Roasted vegetables", items: [
      "3 large sweet potatoes, cut into 3/4-inch dice",
      "2 bell peppers, sliced",
      "1 red onion, sliced",
      "3 tablespoons olive oil",
      "2 teaspoons ground cumin",
      "1 teaspoon chili powder",
      "1 teaspoon smoked paprika",
      "1 1/2 teaspoons kosher salt"
    ]},
    { group: "Beans and rice", items: [
      "1 1/2 cups long-grain rice",
      "1/2 cup chopped cilantro",
      "3 tablespoons lime juice",
      "2 (15 oz) cans black beans, drained",
      "1 teaspoon ground cumin",
      "2 cloves garlic, minced",
      "1/2 teaspoon salt"
    ]},
    { group: "To serve", items: [
      "1 cup shredded Monterey Jack",
      "1 cup plain Greek yogurt",
      "2 avocados, sliced",
      "1 cup pico de gallo",
      "1/2 cup pickled jalapenos",
      "1 lime, cut into wedges"
    ]}
  ],
  steps: [
    "Heat the oven to 425F. Toss the sweet potatoes, peppers, and onion with the oil, spices, and salt.",
    "Spread across two sheet pans and roast 30 minutes, tossing once, until the sweet potatoes are tender and browned at the edges.",
    "Cook the rice. When it's done, fork through the cilantro and lime juice.",
    "Warm the black beans in a small pot with the cumin, garlic, salt, and a splash of water, mashing a few against the side.",
    "Build the bowls: cilantro-lime rice, black beans, roasted vegetables, avocado, pico de gallo, jalapenos, then a spoonful of yogurt and a handful of cheese.",
    "Serve with lime wedges."
  ],
  tips: [
    "Cut the sweet potatoes uniformly. Mixed sizes give you some burnt and some raw.",
    "Everything keeps separately for four days, so this is an excellent Sunday-cook-for-the-week meal."
  ],
  makeAhead: "Roast the vegetables and cook the rice up to three days ahead."
},

{
  id: "mushroom-stroganoff",
  title: "Mushroom Stroganoff",
  blurb: "All the creamy, tangy comfort of the original, with mushrooms doing the savory heavy lifting.",
  emoji: "🍄", protein: "Vegetarian", cuisine: "Russian",
  totalTime: 40, activeTime: 35, difficulty: "Easy", servings: 4,
  plate: { protein: "Mushrooms and lentils", starch: "Egg noodles", veg: "Mushrooms and onion" },
  nutrition: { calories: 690, protein: 29, carbs: 82, fat: 28, fiber: 11 },
  tags: ["comfort", "budget", "veggie-forward"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Stroganoff", items: [
      "1/2 cup grated Parmesan",
      "1 1/2 cups cooked green lentils",
      "2 lb mixed mushrooms, thickly sliced",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "1 large onion, sliced",
      "4 cloves garlic, minced",
      "3 tablespoons all-purpose flour",
      "2 1/2 cups vegetable broth",
      "2 tablespoons soy sauce",
      "1 tablespoon Dijon mustard",
      "1 teaspoon smoked paprika",
      "3/4 cup sour cream",
      "1 1/2 teaspoons kosher salt",
      "1/4 cup chopped parsley"
    ]},
    { group: "To serve", items: [
      "12 oz wide egg noodles",
      "2 tablespoons butter"
    ]}
  ],
  steps: [
    "Heat 2 tablespoons of the butter and the oil in a large skillet over high. Add half the mushrooms in a single layer and leave them 4 minutes without stirring, until browned. Stir and cook 3 minutes more. Move to a plate and repeat with the rest.",
    "Lower the heat to medium. Melt the remaining butter and cook the onion 7 minutes until soft.",
    "Add the garlic and cook 1 minute, then stir in the flour and cook 2 minutes.",
    "Add the broth gradually, whisking, then the soy sauce, mustard, paprika, and salt. Simmer 6 minutes until thickened.",
    "Meanwhile, cook the noodles in salted water and toss with the butter.",
    "Return the mushrooms and the lentils to the sauce and warm through. The lentils give it the body meat would.",
    "Take the pan off the heat. Whisk a ladle of hot sauce into the sour cream, then stir that back into the pan so it doesn't curdle.",
    "Serve over the noodles with parsley."
  ],
  tips: [
    "Browning the mushrooms in two batches over high heat is the whole dish. Crowded mushrooms release water and stew.",
    "Soy sauce is the secret savory backbone that replaces the beef."
  ],
  makeAhead: "Make the sauce base ahead; stir in sour cream when reheating."
},

{
  id: "spinach-mushroom-quiche",
  title: "Spinach and Mushroom Quiche",
  blurb: "A custardy, deeply savory tart that's dinner with a salad and breakfast the next morning.",
  emoji: "🥧", protein: "Eggs", cuisine: "French",
  totalTime: 80, activeTime: 30, difficulty: "Medium", servings: 6,
  plate: { protein: "Eggs and cheese", starch: "Pastry crust", veg: "Spinach and mushrooms" },
  nutrition: { calories: 535, protein: 26, carbs: 25, fat: 37, fiber: 2 },
  tags: ["make-ahead", "comfort", "veggie-forward", "special-occasion", "leftovers"],
  seasons: ["all"],
  ingredients: [
    { group: "Crust", items: [
      "1 (9-inch) pie crust, store-bought or homemade"
    ]},
    { group: "Filling", items: [
      "2 tablespoons butter",
      "10 oz mushrooms, sliced",
      "1 onion, finely diced",
      "3 cloves garlic, minced",
      "8 oz fresh spinach",
      "8 eggs",
      "1 1/4 cups heavy cream",
      "2 cups grated Gruyere",
      "1/2 teaspoon nutmeg",
      "1 1/4 teaspoons kosher salt",
      "1/2 teaspoon black pepper"
    ]}
  ],
  steps: [
    "Heat the oven to 400F. Line the crust with parchment, fill with dried beans or pie weights, and blind bake 15 minutes. Remove the weights and bake 8 minutes more until the base looks dry.",
    "Meanwhile, melt the butter in a skillet over medium-high. Cook the mushrooms 8 minutes until browned and their liquid has evaporated.",
    "Add the onion and cook 6 minutes, then the garlic for 1 minute.",
    "Add the spinach in handfuls until wilted. Tip everything into a sieve and press out as much liquid as you can. Wet filling makes a soggy quiche.",
    "Lower the oven to 350F. Whisk the eggs, cream, nutmeg, salt, and pepper until smooth.",
    "Scatter half the Gruyere over the baked crust, spread the vegetables on top, then pour over the custard and finish with the rest of the cheese.",
    "Bake 35 to 40 minutes, until the center is just set with a slight wobble and the top is golden.",
    "Rest at least 20 minutes before cutting. It firms up as it cools and slices cleanly."
  ],
  tips: [
    "Blind baking the crust is what stands between you and a raw pastry bottom.",
    "Squeeze the vegetables dry. This is the most common quiche failure."
  ],
  makeAhead: "Bake a day ahead and serve at room temperature, or reheat at 325F for 15 minutes."
},

{
  id: "huevos-rancheros",
  title: "Huevos Rancheros",
  blurb: "Crisp tortillas, warm beans, ranchero sauce, and a fried egg on top. Dinner in twenty minutes.",
  emoji: "🍳", protein: "Eggs", cuisine: "Mexican",
  totalTime: 25, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "Eggs and beans", starch: "Corn tortillas", veg: "Tomato and pepper sauce" },
  nutrition: { calories: 605, protein: 32, carbs: 63, fat: 27, fiber: 16 },
  tags: ["30-minutes", "budget", "veggie-forward", "gluten-free", "high-protein"],
  seasons: ["all"],
  ingredients: [
    { group: "Ranchero sauce", items: [
      "2 tablespoons olive oil",
      "1 onion, diced",
      "1 jalapeno, minced",
      "3 cloves garlic, minced",
      "1 (14.5 oz) can fire-roasted diced tomatoes",
      "1 teaspoon ground cumin",
      "1 teaspoon chili powder",
      "1 teaspoon kosher salt"
    ]},
    { group: "To serve", items: [
      "8 corn tortillas",
      "3 tablespoons neutral oil",
      "2 (15 oz) cans refried or black beans, warmed",
      "8 eggs",
      "1 1/2 cups crumbled cotija or feta",
      "1 avocado, sliced",
      "1/2 cup chopped cilantro",
      "1 lime, cut into wedges"
    ]}
  ],
  steps: [
    "Heat the oil in a skillet over medium. Cook the onion and jalapeno 6 minutes, then the garlic for 1 minute.",
    "Add the tomatoes, cumin, chili powder, and salt. Simmer 10 minutes until thickened. Keep warm.",
    "In a separate pan, fry the tortillas in the neutral oil, about 45 seconds a side, until they blister and firm up but still bend. Drain on paper towels.",
    "Fry the eggs in the same pan, in batches, until the whites are set and the edges crisp but the yolks still runny.",
    "Build each plate: two tortillas, a spread of warm beans, a spoonful of ranchero sauce, then two eggs on top.",
    "Finish with cheese, avocado, cilantro, and a lime wedge."
  ],
  tips: [
    "Frying the tortillas briefly is what keeps them from going to mush under the sauce.",
    "Runny yolks are the sauce here. Cook the eggs last and serve immediately."
  ],
  makeAhead: "The ranchero sauce keeps five days and is good on almost everything."
},

{
  id: "white-bean-kale-gratin",
  title: "White Bean and Kale Gratin",
  blurb: "Creamy beans and greens under a crunchy Parmesan breadcrumb lid. Cheap, fast, and deeply satisfying.",
  emoji: "🫘", protein: "Vegetarian", cuisine: "Italian",
  totalTime: 45, activeTime: 20, difficulty: "Easy", servings: 4,
  plate: { protein: "White beans", starch: "Breadcrumb topping", veg: "Kale" },
  nutrition: { calories: 555, protein: 28, carbs: 53, fat: 26, fiber: 14 },
  tags: ["budget", "comfort", "veggie-forward", "make-ahead", "high-protein", "one-pan"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Gratin", items: [
      "3 tablespoons olive oil",
      "1 onion, diced",
      "5 cloves garlic, sliced",
      "1/2 teaspoon red pepper flakes",
      "1 large bunch kale, stemmed and torn",
      "3 (15 oz) cans cannellini beans, drained",
      "1 1/2 cups vegetable broth",
      "3/4 cup heavy cream",
      "2 teaspoons fresh thyme",
      "1 1/4 teaspoons kosher salt",
      "1 tablespoon lemon juice"
    ]},
    { group: "Topping", items: [
      "1 1/4 cups panko breadcrumbs",
      "1 1/4 cups grated Parmesan",
      "3 tablespoons olive oil"
    ]}
  ],
  steps: [
    "Heat the oven to 400F.",
    "Warm the oil in a large oven-safe skillet over medium. Cook the onion 7 minutes, then add the garlic and pepper flakes for 1 minute.",
    "Add the kale in handfuls, stirring until it wilts down, about 5 minutes.",
    "Stir in the beans, broth, cream, thyme, and salt. Simmer 8 minutes.",
    "Mash about a cup of the beans against the side of the pan to thicken everything. Stir in the lemon juice and taste for salt.",
    "Toss the panko with the Parmesan and olive oil and scatter it evenly over the top.",
    "Bake 18 to 20 minutes, until the topping is deep golden and the edges are bubbling.",
    "Rest 5 minutes before serving with crusty bread."
  ],
  tips: [
    "Mashing some of the beans is what turns broth into a creamy sauce without any flour.",
    "The topping must be an even layer or you get patches of burnt crumbs and patches of pale ones."
  ],
  makeAhead: "Make the bean base up to two days ahead; add the topping and bake fresh."
},

{
  id: "tofu-tikka-masala",
  title: "Tofu Tikka Masala",
  blurb: "Roasted marinated tofu in the creamy, tomato-rich sauce everybody already loves.",
  emoji: "🍛", protein: "Vegetarian", cuisine: "Indian",
  totalTime: 55, activeTime: 30, difficulty: "Medium", servings: 4,
  plate: { protein: "Tofu and chickpeas", starch: "Basmati rice", veg: "Tomato and onion" },
  nutrition: { calories: 615, protein: 31, carbs: 75, fat: 23, fiber: 12 },
  tags: ["veggie-forward", "high-protein", "make-ahead", "comfort", "gluten-free"],
  seasons: ["all"],
  ingredients: [
    { group: "Tofu", items: [
      "2 blocks (14 oz each) extra-firm tofu, pressed and cubed",
      "3/4 cup plain yogurt",
      "2 tablespoons lemon juice",
      "1 tablespoon grated ginger",
      "4 cloves garlic, minced",
      "2 teaspoons garam masala",
      "1 teaspoon turmeric",
      "1 teaspoon ground cumin",
      "1 teaspoon kosher salt",
      "2 tablespoons neutral oil"
    ]},
    { group: "Sauce", items: [
      "1 (15 oz) can chickpeas, drained",
      "3 tablespoons butter",
      "1 large onion, finely diced",
      "4 cloves garlic, minced",
      "1 tablespoon grated ginger",
      "1 tablespoon garam masala",
      "2 teaspoons ground cumin",
      "1 teaspoon ground coriander",
      "1/2 teaspoon cayenne",
      "1 (28 oz) can crushed tomatoes",
      "1 cup heavy cream",
      "1 1/2 teaspoons kosher salt",
      "1 teaspoon sugar",
      "1/2 cup chopped cilantro"
    ]},
    { group: "To serve", items: [
      "1 1/2 cups basmati rice",
      "4 pieces naan"
    ]}
  ],
  steps: [
    "Press the tofu 20 minutes, then cut into 1-inch cubes.",
    "Whisk the yogurt with the lemon juice, ginger, garlic, spices, and salt. Fold in the tofu and marinate 20 minutes.",
    "Heat the oven to 450F. Spread the tofu on an oiled sheet pan and roast 25 minutes, turning once, until browned at the edges.",
    "Meanwhile, melt the butter in a large pot over medium. Cook the onion 10 minutes until golden.",
    "Add the garlic and ginger for 2 minutes, then all the ground spices for 60 seconds.",
    "Add the tomatoes, salt, and sugar. Simmer 15 minutes, until darkened and thick.",
    "Stir in the cream and simmer 5 minutes. For a silkier sauce, blend it smooth with an immersion blender.",
    "Fold in the roasted tofu and the chickpeas, warm through 3 minutes, and finish with cilantro. Serve with rice and naan."
  ],
  tips: [
    "Roast the tofu separately and fold it in at the end. Simmering it in the sauce turns it spongy.",
    "The yogurt marinade tenderizes the surface and helps the spices stick."
  ],
  makeAhead: "The sauce keeps four days and freezes well; roast fresh tofu when you serve it."
}

]);
