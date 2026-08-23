/* Pasta, rice, grains. */
window.RECIPES = (window.RECIPES || []).concat([

{
  id: "spaghetti-bolognese",
  title: "Slow-Simmered Spaghetti Bolognese",
  blurb: "A slow meat sauce with milk and wine, simmered until thick and glossy.",
  emoji: "🍝", protein: "Beef", cuisine: "Italian",
  totalTime: 195, activeTime: 30, difficulty: "Medium", servings: 6,
  plate: { protein: "Beef and pork", starch: "Spaghetti", veg: "Carrot, celery, onion, tomato" },
  nutrition: { calories: 640, protein: 36, carbs: 68, fat: 24, fiber: 6 },
  tags: ["comfort", "make-ahead", "freezer-friendly", "leftovers", "special-occasion", "kid-friendly"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Sauce", items: [
      "1 lb ground beef",
      "1/2 lb ground pork",
      "3 tablespoons olive oil",
      "2 tablespoons butter",
      "1 large onion, finely diced",
      "2 carrots, finely diced",
      "3 stalks celery, finely diced",
      "4 cloves garlic, minced",
      "3 tablespoons tomato paste",
      "1 cup dry white or red wine",
      "1 cup whole milk",
      "1 (28 oz) can crushed tomatoes",
      "1 cup beef broth",
      "1 bay leaf",
      "1/2 teaspoon nutmeg",
      "2 teaspoons kosher salt"
    ]},
    { group: "To serve", items: [
      "1 1/2 lb spaghetti or tagliatelle",
      "1 cup grated Parmesan",
      "1/4 cup torn basil"
    ]}
  ],
  steps: [
    "Heat the oil and butter in a heavy pot over medium. Cook the onion, carrot, and celery slowly for 12 to 15 minutes, until completely soft and sweet. This base is the foundation. Don't rush it.",
    "Add the garlic and cook 1 minute.",
    "Raise the heat and add both meats. Break them up and brown well, 10 minutes, until no liquid remains and the meat starts to sizzle in fat.",
    "Stir in the tomato paste and cook 3 minutes until it darkens.",
    "Pour in the wine and simmer until it has almost entirely evaporated, about 6 minutes.",
    "Add the milk and simmer until it too has mostly cooked away, about 8 minutes. This is the traditional step that makes the meat tender and the sauce round.",
    "Add the tomatoes, broth, bay leaf, nutmeg, and salt. Bring to a bare simmer, partly cover, and cook 2 to 2 1/2 hours, stirring occasionally. Add water if it gets too dry.",
    "Cook the pasta in well-salted water to al dente. Reserve a cup of pasta water, drain, then toss the pasta directly into the sauce with a splash of the water and half the Parmesan."
  ],
  tips: [
    "The milk step sounds strange and is what separates real bolognese from a tomato meat sauce. Don't skip it.",
    "Always toss the pasta in the sauce rather than ladling sauce on top. It's the difference between coated pasta and pasta with a puddle."
  ],
  makeAhead: "Even better on day two. Freezes for three months."
},

{
  id: "baked-ziti",
  title: "Baked Ziti",
  blurb: "Ricotta, mozzarella, and a good tomato sauce baked until the top goes brown and chewy at the edges.",
  emoji: "🧀", protein: "Beef", cuisine: "Italian",
  totalTime: 70, activeTime: 30, difficulty: "Easy", servings: 8,
  plate: { protein: "Beef and cheese", starch: "Ziti", veg: "Tomato sauce" },
  nutrition: { calories: 610, protein: 33, carbs: 58, fat: 27, fiber: 5 },
  tags: ["comfort", "make-ahead", "freezer-friendly", "kid-friendly", "leftovers", "budget"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Sauce", items: [
      "1 lb Italian sausage, casings removed",
      "1 lb ground beef",
      "2 tablespoons olive oil",
      "1 onion, diced",
      "5 cloves garlic, minced",
      "2 (28 oz) cans crushed tomatoes",
      "1 teaspoon dried oregano",
      "1/2 teaspoon red pepper flakes",
      "2 teaspoons kosher salt",
      "1/4 cup torn basil"
    ]},
    { group: "Assembly", items: [
      "1 1/2 lb ziti or penne",
      "2 cups whole milk ricotta",
      "1 egg",
      "1/2 cup grated Parmesan",
      "1 lb mozzarella, shredded"
    ]}
  ],
  steps: [
    "Heat the oil in a large pot over medium-high. Brown the sausage and beef 10 minutes, breaking them up. Drain most of the fat.",
    "Add the onion and cook 6 minutes, then the garlic for 1 minute.",
    "Add the tomatoes, oregano, pepper flakes, and salt. Simmer 20 minutes, then stir in the basil.",
    "Meanwhile, boil the pasta in well-salted water for 2 minutes less than the package says. It finishes cooking in the oven, and fully cooked pasta turns to mush.",
    "Stir the ricotta with the egg and Parmesan.",
    "Heat the oven to 375F. Toss the drained pasta with about two thirds of the sauce.",
    "Layer in a 9x13 dish: half the pasta, dollops of the ricotta mixture, half the mozzarella, then the rest of the pasta, the remaining sauce, and the rest of the mozzarella.",
    "Cover with foil and bake 25 minutes, then uncover and bake 20 minutes more, until browned and bubbling. Rest 15 minutes before serving."
  ],
  tips: [
    "Undercooking the pasta by two minutes is the important part. It won't be undercooked when it comes out.",
    "Whole-milk ricotta only. The low-fat kind goes grainy and watery in the oven."
  ],
  makeAhead: "Assemble up to two days ahead, or freeze unbaked for three months. Bake from cold with 20 minutes added."
},

{
  id: "pasta-primavera",
  title: "Pasta Primavera",
  blurb: "A pan of spring vegetables tossed with pasta in a light lemon-Parmesan sauce.",
  emoji: "🥕", protein: "Vegetarian", cuisine: "Italian",
  totalTime: 35, activeTime: 30, difficulty: "Easy", servings: 4,
  plate: { protein: "White beans and Parmesan", starch: "Penne", veg: "Asparagus, zucchini, peas, tomato" },
  nutrition: { calories: 715, protein: 32, carbs: 93, fat: 24, fiber: 13 },
  tags: ["30-minutes", "veggie-forward", "kid-friendly", "budget"],
  seasons: ["spring", "summer"],
  ingredients: [
    { group: "Pasta", items: [
      "1 (15 oz) can cannellini beans, drained",
      "1 lb penne or farfalle",
      "3 tablespoons olive oil",
      "2 tablespoons butter",
      "1 bunch asparagus, cut into 2-inch pieces",
      "2 zucchini, cut into half-moons",
      "1 cup frozen peas",
      "1 pint cherry tomatoes, halved",
      "4 cloves garlic, minced",
      "1 lemon, zested and juiced",
      "1 1/2 cups grated Parmesan",
      "1/4 cup chopped basil",
      "1 1/2 teaspoons kosher salt",
      "1/2 teaspoon red pepper flakes"
    ]}
  ],
  steps: [
    "Bring a large pot of well-salted water to a boil and start the pasta.",
    "Heat the oil in a large skillet over medium-high. Cook the asparagus and zucchini 5 minutes, until crisp-tender and browned in spots.",
    "Add the garlic and pepper flakes and cook 1 minute.",
    "Add the tomatoes, peas, and drained beans and cook 3 minutes, just until the tomatoes begin to slump.",
    "Reserve 1 1/2 cups of the pasta water, then drain the pasta and add it to the skillet.",
    "Add the butter, lemon zest and juice, Parmesan, and 1 cup of the pasta water. Toss hard over medium heat for 2 minutes. The starch, cheese, and water emulsify into a light sauce that clings.",
    "Add more pasta water if it looks dry, then stir in the basil and taste for salt."
  ],
  tips: [
    "Everything hinges on the pasta water. Tossing pasta, cheese, and starchy water together makes the sauce; draining it away leaves you with oily pasta.",
    "Whatever is good at the market works here. This is a template, not a rulebook."
  ],
  makeAhead: null
},

{
  id: "one-pot-tomato-spinach-pasta",
  title: "One-Pot Creamy Tomato and Spinach Pasta",
  blurb: "Pasta cooked right in the sauce, so there's one pot and no colander. Twenty-five minutes, start to finish.",
  emoji: "🍅", protein: "Vegetarian", cuisine: "Italian",
  totalTime: 25, activeTime: 20, difficulty: "Easy", servings: 4,
  plate: { protein: "Ricotta and Parmesan", starch: "Penne", veg: "Tomato and spinach" },
  nutrition: { calories: 715, protein: 31, carbs: 83, fat: 30, fiber: 7 },
  tags: ["30-minutes", "one-pan", "budget", "kid-friendly", "veggie-forward", "comfort"],
  seasons: ["all"],
  ingredients: [
    { group: "Everything", items: [
      "1 cup whole milk ricotta",
      "1 lb penne",
      "2 tablespoons olive oil",
      "1 onion, diced",
      "5 cloves garlic, minced",
      "1/2 teaspoon red pepper flakes",
      "1 (28 oz) can crushed tomatoes",
      "3 1/2 cups vegetable broth",
      "1 1/2 teaspoons kosher salt",
      "1 teaspoon dried oregano",
      "5 oz baby spinach",
      "3/4 cup heavy cream",
      "1 1/2 cups grated Parmesan",
      "1/4 cup torn basil"
    ]}
  ],
  steps: [
    "Heat the oil in a wide, deep pot over medium. Cook the onion 6 minutes until soft.",
    "Add the garlic and pepper flakes and cook 1 minute.",
    "Add the tomatoes, broth, salt, and oregano and bring to a boil.",
    "Stir in the dry pasta. Reduce to a strong simmer and cook uncovered 12 to 14 minutes, stirring every couple of minutes so nothing sticks to the bottom.",
    "The pasta is done when tender and the liquid has reduced into a thick sauce. If it looks dry too early, add a splash of broth.",
    "Add the spinach in handfuls and stir until wilted.",
    "Take the pot off the heat and stir in the cream and Parmesan. Dollop the ricotta over the top and finish with basil."
  ],
  tips: [
    "Stir more often than feels necessary. Pasta cooking in a small amount of liquid will glue itself to the pot if you leave it.",
    "The starch that would normally go down the drain stays in the pot here, which is exactly why the sauce is creamy."
  ],
  makeAhead: null
},

{
  id: "mushroom-risotto",
  title: "Mushroom Risotto",
  blurb: "Twenty minutes of stirring turns rice and stock into something creamy.",
  emoji: "🍚", protein: "Vegetarian", cuisine: "Italian",
  totalTime: 50, activeTime: 45, difficulty: "Medium", servings: 4,
  plate: { protein: "Parmesan", starch: "Arborio rice", veg: "Mushrooms" },
  nutrition: { calories: 720, protein: 31, carbs: 74, fat: 32, fiber: 4 },
  tags: ["comfort", "veggie-forward", "special-occasion", "gluten-free"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Risotto", items: [
      "1 1/2 cups arborio or carnaroli rice",
      "6 cups vegetable or chicken broth",
      "1 lb mixed mushrooms, sliced",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "1 onion, finely diced",
      "3 cloves garlic, minced",
      "3/4 cup dry white wine",
      "2 1/4 cups grated Parmesan",
      "1 tablespoon fresh thyme",
      "1 1/2 teaspoons kosher salt",
      "1 tablespoon lemon juice"
    ]}
  ],
  steps: [
    "Bring the broth to a simmer in a saucepan and keep it hot. Adding cold broth to risotto stops the cooking each time and makes it gluey.",
    "Heat the oil and 1 tablespoon butter in a wide pan over high. Cook the mushrooms in two batches, 5 minutes each, until well browned. Season and set aside.",
    "Lower the heat to medium. Melt 1 tablespoon butter and cook the onion 6 minutes until translucent. Add the garlic for 1 minute.",
    "Add the rice and stir 2 minutes, until the grains look translucent at the edges with a white dot in the center.",
    "Pour in the wine and stir until it has almost completely absorbed.",
    "Add the hot broth one ladle at a time, stirring often, waiting until each addition is nearly absorbed before adding the next. This takes 18 to 22 minutes.",
    "Start tasting at 18 minutes. The rice should be tender with the faintest bite at the center, and the whole thing should ripple slowly when you shake the pan.",
    "Take it off the heat. Beat in the remaining 2 tablespoons butter, the Parmesan, thyme, and lemon juice, then fold in the mushrooms. Serve at once."
  ],
  tips: [
    "Risotto waits for nobody. Have everyone at the table before you finish it.",
    "The final beating in of cold butter and cheese off the heat is what makes it creamy. Do it vigorously."
  ],
  makeAhead: null
},

{
  id: "orecchiette-sausage-broccolini",
  title: "Orecchiette with Sausage and Broccolini",
  blurb: "Spicy sausage, charred greens, and pasta shaped like little ears that catch everything.",
  emoji: "🥦", protein: "Pork", cuisine: "Italian",
  totalTime: 30, activeTime: 30, difficulty: "Easy", servings: 4,
  plate: { protein: "Italian sausage", starch: "Orecchiette", veg: "Broccolini" },
  nutrition: { calories: 625, protein: 30, carbs: 68, fat: 26, fiber: 6 },
  tags: ["30-minutes", "one-pan", "veggie-forward", "leftovers"],
  seasons: ["all"],
  ingredients: [
    { group: "Everything", items: [
      "1 lb orecchiette",
      "1 lb hot Italian sausage, casings removed",
      "1 1/2 lb broccolini, cut into 2-inch pieces",
      "3 tablespoons olive oil",
      "6 cloves garlic, thinly sliced",
      "1/2 teaspoon red pepper flakes",
      "1 lemon, zested and juiced",
      "1 cup grated Parmesan",
      "1 1/2 teaspoons kosher salt",
      "2 tablespoons butter"
    ]}
  ],
  steps: [
    "Bring a large pot of well-salted water to a boil. Cook the orecchiette to al dente, adding the broccolini for the last 2 minutes. Reserve 2 cups pasta water before draining.",
    "Meanwhile, heat 2 tablespoons of the oil in a large skillet over medium-high. Add the sausage and break it into rough chunks. Brown 8 minutes without stirring much. You want real color, not crumbles.",
    "Push the sausage aside, add the remaining oil, garlic, and pepper flakes, and cook 1 minute.",
    "Add the drained pasta and broccolini to the skillet along with 1 cup of the pasta water and the butter.",
    "Toss over medium heat for 2 minutes, until the water and fat emulsify into a glossy sauce.",
    "Add the Parmesan, lemon zest, and lemon juice and toss again, loosening with more pasta water as needed."
  ],
  tips: [
    "Cooking the broccolini in the pasta water saves a pan and seasons it at the same time.",
    "Break the sausage into big pieces rather than fine crumbles. You want to bite into it."
  ],
  makeAhead: null
},

{
  id: "pesto-genovese",
  title: "Pesto Pasta with Green Beans and Potatoes",
  blurb: "The traditional Genoese way: potatoes and beans cooked in the same pot as the pasta, all tossed with basil pesto.",
  emoji: "🌿", protein: "Vegetarian", cuisine: "Italian",
  totalTime: 35, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "White beans, pine nuts and Parmesan", starch: "Trofie and potatoes", veg: "Green beans and basil" },
  nutrition: { calories: 835, protein: 32, carbs: 97, fat: 36, fiber: 12 },
  tags: ["30-minutes", "one-pan", "veggie-forward", "kid-friendly"],
  seasons: ["summer"],
  ingredients: [
    { group: "Pesto", items: [
      "3 cups packed basil leaves",
      "1/2 cup pine nuts",
      "3 cloves garlic",
      "1 1/2 cups grated Parmesan",
      "3/4 cup olive oil",
      "1 teaspoon kosher salt"
    ]},
    { group: "Pasta", items: [
      "1 (15 oz) can cannellini beans, drained",
      "1 lb trofie, fusilli, or linguine",
      "12 oz small potatoes, cut into 1/2-inch cubes",
      "12 oz green beans, cut into 2-inch pieces",
      "2 tablespoons butter"
    ]}
  ],
  steps: [
    "Toast the pine nuts in a dry pan over medium 3 minutes, until fragrant and lightly golden. Let them cool.",
    "Blend the basil, pine nuts, garlic, Parmesan, and salt, drizzling in the olive oil, until it's a coarse green sauce. Don't over-blend it into a smooth paste.",
    "Bring a large pot of well-salted water to a boil. Add the potatoes and cook 6 minutes.",
    "Add the pasta and cook according to the package, adding the green beans for the final 4 minutes.",
    "Reserve 1 1/2 cups pasta water, then drain everything together.",
    "Return it all to the warm pot off the heat. Add the beans, the butter, the pesto, and half a cup of pasta water.",
    "Toss thoroughly, adding more water until it's glossy and coats everything. Never heat pesto directly. It turns bitter and dull."
  ],
  tips: [
    "Add pesto off the heat. Cooking it destroys both the color and the fresh basil flavor.",
    "The potatoes sound odd with pasta and are completely traditional. They soak up the pesto and are the best bit."
  ],
  makeAhead: "Pesto keeps a week under a film of olive oil, and freezes in ice cube trays for months."
},

{
  id: "broccoli-mac-and-cheese",
  title: "Baked Broccoli Mac and Cheese",
  blurb: "A real cheese sauce, no powder, with broccoli cooked right in and a crunchy top.",
  emoji: "🧀", protein: "Vegetarian", cuisine: "American",
  totalTime: 50, activeTime: 30, difficulty: "Easy", servings: 6,
  plate: { protein: "Cheese and milk", starch: "Macaroni", veg: "Broccoli" },
  nutrition: { calories: 701, protein: 31, carbs: 63, fat: 37, fiber: 5 },
  tags: ["comfort", "kid-friendly", "make-ahead", "budget", "veggie-forward"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Pasta", items: [
      "1 lb elbow macaroni",
      "1 large head broccoli, cut into small florets"
    ]},
    { group: "Cheese sauce", items: [
      "5 tablespoons butter",
      "5 tablespoons all-purpose flour",
      "4 cups whole milk, warmed",
      "1 teaspoon mustard powder",
      "1/2 teaspoon smoked paprika",
      "1/4 teaspoon nutmeg",
      "1 1/2 teaspoons kosher salt",
      "4 cups shredded sharp cheddar",
      "1 cup shredded Gruyere"
    ]},
    { group: "Topping", items: [
      "1 1/4 cups panko breadcrumbs",
      "3 tablespoons melted butter",
      "1/2 cup grated Parmesan"
    ]}
  ],
  steps: [
    "Heat the oven to 375F. Butter a 9x13 dish.",
    "Boil the macaroni 2 minutes short of al dente, adding the broccoli for the last 2 minutes. Drain.",
    "Melt the butter in a large saucepan over medium. Whisk in the flour and cook 2 minutes.",
    "Add the warm milk gradually, whisking constantly, until smooth. Simmer 5 minutes until it thickens enough to coat a spoon.",
    "Take it off the heat and stir in the mustard powder, paprika, nutmeg, and salt, then the cheeses a handful at a time until melted. Off-heat melting keeps the sauce smooth instead of grainy.",
    "Fold in the pasta and broccoli and pour into the dish.",
    "Toss the panko with the melted butter and Parmesan and scatter over the top.",
    "Bake 22 to 25 minutes, until bubbling at the edges and golden on top. Rest 10 minutes before serving."
  ],
  tips: [
    "Shred your own cheese. Pre-shredded is coated in starch to stop it clumping, and that starch makes a gritty sauce.",
    "Never boil the sauce after the cheese goes in, or it splits."
  ],
  makeAhead: "Assemble a day ahead and bake from cold, adding 12 minutes."
},

{
  id: "spinach-ricotta-shells",
  title: "Spinach and Ricotta Stuffed Shells",
  blurb: "Big pasta shells filled with creamy spinach ricotta, baked under marinara and mozzarella.",
  emoji: "🐚", protein: "Vegetarian", cuisine: "Italian",
  totalTime: 70, activeTime: 35, difficulty: "Medium", servings: 6,
  plate: { protein: "Ricotta and cheese", starch: "Pasta shells", veg: "Spinach and tomato" },
  nutrition: { calories: 582, protein: 30, carbs: 59, fat: 26, fiber: 6 },
  tags: ["make-ahead", "freezer-friendly", "comfort", "veggie-forward", "kid-friendly", "leftovers"],
  seasons: ["all"],
  ingredients: [
    { group: "Filling", items: [
      "24 jumbo pasta shells",
      "2 lb fresh spinach, or 20 oz frozen, thawed",
      "2 cups whole milk ricotta",
      "1 1/2 cups shredded mozzarella",
      "1 1/4 cups grated Parmesan",
      "1 egg",
      "3 cloves garlic, minced",
      "1/2 teaspoon nutmeg",
      "1 1/4 teaspoons kosher salt",
      "1/2 teaspoon black pepper"
    ]},
    { group: "Sauce and top", items: [
      "4 cups marinara sauce",
      "1 1/2 cups shredded mozzarella",
      "1/4 cup torn basil"
    ]}
  ],
  steps: [
    "Boil the shells 2 minutes less than the package says. Drain and spread them on a sheet pan so they don't stick together.",
    "Wilt the spinach in a dry pan, then let it cool and squeeze out every bit of water you can. Wet spinach makes watery shells. Chop it roughly.",
    "Mix the spinach with the ricotta, mozzarella, Parmesan, egg, garlic, nutmeg, salt, and pepper.",
    "Heat the oven to 375F. Spread 1 1/2 cups of the marinara in a 9x13 dish.",
    "Fill each shell with about 2 tablespoons of the mixture and arrange them open side up in the dish.",
    "Spoon the remaining sauce over and around the shells and scatter the mozzarella on top.",
    "Cover with foil and bake 25 minutes, then uncover and bake 15 minutes more until bubbling and browned.",
    "Rest 10 minutes and finish with basil."
  ],
  tips: [
    "Squeezing the spinach dry is the most important step in the whole recipe.",
    "A piping bag or a zip bag with a corner snipped off fills the shells in half the time."
  ],
  makeAhead: "Assemble up to two days ahead, or freeze unbaked for three months."
},

{
  id: "butternut-gnocchi-sage",
  title: "Gnocchi with Butternut Squash and Brown Butter Sage",
  blurb: "Crisped gnocchi, roasted squash, and brown butter, in half an hour.",
  emoji: "🎃", protein: "Vegetarian", cuisine: "Italian",
  totalTime: 40, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "White beans and Parmesan", starch: "Gnocchi", veg: "Butternut squash and kale" },
  nutrition: { calories: 800, protein: 33, carbs: 86, fat: 38, fiber: 12 },
  tags: ["veggie-forward", "comfort", "special-occasion"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Everything", items: [
      "1 (15 oz) can cannellini beans, drained",
      "1 medium butternut squash, peeled and cut into 3/4-inch cubes",
      "2 lb potato gnocchi",
      "6 tablespoons butter",
      "3 tablespoons olive oil",
      "20 fresh sage leaves",
      "4 cloves garlic, sliced",
      "1 bunch kale, stemmed and torn",
      "1/2 cup chopped walnuts",
      "1 3/4 cups grated Parmesan",
      "1 1/2 teaspoons kosher salt",
      "1 tablespoon lemon juice"
    ]}
  ],
  steps: [
    "Heat the oven to 425F. Toss the squash and the drained beans with 2 tablespoons oil and half the salt and roast 25 minutes, until the squash is tender and the beans have crisped.",
    "Toast the walnuts in a dry skillet 3 minutes and set aside.",
    "Heat the remaining oil in a large skillet over medium-high. Add the gnocchi straight from the package, no boiling, in a single layer. Cook 6 to 8 minutes, turning occasionally, until golden and crisp on several sides. Move to a plate.",
    "Lower the heat to medium. Add the butter and let it foam, then keep cooking 3 minutes until the milk solids at the bottom turn golden brown and it smells nutty.",
    "Add the sage leaves and garlic and cook 45 seconds. The sage will crisp.",
    "Add the kale and cook 3 minutes until wilted.",
    "Return the gnocchi and squash, add the lemon juice, and toss gently. Finish with the walnuts and Parmesan."
  ],
  tips: [
    "Pan-frying shelf-stable gnocchi without boiling gives you a crisp shell and a chewy middle. It's better than the boiled version.",
    "Brown butter goes from nutty to burnt in seconds. Watch the color and pull it early."
  ],
  makeAhead: "Roast the squash a day ahead."
},

{
  id: "spaghetti-carbonara",
  title: "Spaghetti Carbonara",
  blurb: "Eggs, cheese, pork, and pepper. Four ingredients, no cream, and all about the technique.",
  emoji: "🥓", protein: "Pork", cuisine: "Italian",
  totalTime: 25, activeTime: 25, difficulty: "Medium", servings: 4,
  plate: { protein: "Eggs and pancetta", starch: "Spaghetti", veg: null },
  nutrition: { calories: 670, protein: 33, carbs: 67, fat: 30, fiber: 3 },
  tags: ["30-minutes", "comfort", "budget"],
  seasons: ["all"],
  ingredients: [
    { group: "Everything", items: [
      "1 lb spaghetti",
      "8 oz guanciale or pancetta, cut into thick matchsticks",
      "4 egg yolks",
      "2 whole eggs",
      "2 cups finely grated Pecorino Romano",
      "2 teaspoons coarsely ground black pepper",
      "1 teaspoon kosher salt"
    ]}
  ],
  steps: [
    "Bring a large pot of salted water to a boil. Use slightly less salt than usual. The pork and Pecorino are both salty.",
    "Put the pancetta in a cold skillet and cook over medium 8 to 10 minutes, until the fat has rendered and the pieces are crisp. Turn off the heat and leave the fat in the pan.",
    "Whisk the egg yolks, whole eggs, Pecorino, and black pepper into a thick paste in a large bowl.",
    "Cook the spaghetti to al dente. Reserve 2 cups of pasta water before draining.",
    "Add about 1/2 cup of the hot pasta water to the egg mixture in a thin stream while whisking hard. This warms the eggs gradually so they don't scramble.",
    "Add the drained hot pasta to the skillet with the pork and toss to coat in the fat.",
    "Take the pan completely off the heat, wait 30 seconds, then pour in the egg mixture and toss constantly and vigorously. The residual heat cooks the eggs into a silky sauce.",
    "Loosen with more pasta water until it's glossy and flows. Serve immediately with more Pecorino and pepper."
  ],
  tips: [
    "The pan must be off the heat when the eggs go in. This is the single point where carbonara succeeds or becomes scrambled eggs with pasta.",
    "There's no cream in carbonara. The silkiness comes from egg, cheese, fat, and starchy water, emulsified."
  ],
  makeAhead: null
},

{
  id: "sesame-noodles-chicken",
  title: "Sesame Noodles with Chicken and Cucumber",
  blurb: "Nutty, savory noodles served cool or at room temperature. Perfect for a hot evening.",
  emoji: "🍜", protein: "Chicken", cuisine: "Chinese",
  totalTime: 30, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "Chicken", starch: "Noodles", veg: "Cucumber and carrot" },
  nutrition: { calories: 585, protein: 38, carbs: 62, fat: 22, fiber: 5 },
  tags: ["30-minutes", "make-ahead", "dairy-free", "leftovers", "no-cook"],
  seasons: ["summer"],
  ingredients: [
    { group: "Sauce", items: [
      "1/3 cup tahini or smooth peanut butter",
      "3 tablespoons soy sauce",
      "2 tablespoons rice vinegar",
      "2 tablespoons toasted sesame oil",
      "1 tablespoon honey",
      "3 cloves garlic, grated",
      "1 tablespoon grated ginger",
      "1 teaspoon chili garlic sauce",
      "4-6 tablespoons warm water"
    ]},
    { group: "Noodles", items: [
      "1 lb lo mein or spaghetti",
      "1 1/2 lb cooked chicken, shredded",
      "1 English cucumber, julienned",
      "2 carrots, julienned",
      "4 scallions, sliced",
      "1/2 cup chopped cilantro",
      "2 tablespoons sesame seeds",
      "1/2 cup roasted peanuts, chopped"
    ]}
  ],
  steps: [
    "Whisk all the sauce ingredients except the water together. It will be very thick.",
    "Whisk in warm water a tablespoon at a time until it's the consistency of heavy cream and pours easily.",
    "Cook the noodles according to the package, then rinse under cold water and drain very well. Rinsing removes the surface starch that would otherwise glue them together.",
    "Toss the cold noodles with about three quarters of the sauce until every strand is coated.",
    "Add the chicken, cucumber, carrots, and half the scallions and toss again.",
    "Add more sauce if it looks dry. Cold noodles absorb sauce as they sit.",
    "Top with the remaining scallions, cilantro, sesame seeds, and peanuts."
  ],
  tips: [
    "Leftover roast chicken or a store-bought rotisserie chicken makes this a fifteen-minute dinner.",
    "Make extra sauce. It keeps two weeks and is excellent on rice bowls and as a salad dressing."
  ],
  makeAhead: "Better after an hour in the fridge; keeps three days."
},

{
  id: "pad-thai",
  title: "Chicken Pad Thai",
  blurb: "Sweet, sour, and salty rice noodles with egg, peanuts, and lime. Prep everything first, then it takes five minutes.",
  emoji: "🥜", protein: "Chicken", cuisine: "Thai",
  totalTime: 40, activeTime: 30, difficulty: "Medium", servings: 4,
  plate: { protein: "Chicken and egg", starch: "Rice noodles", veg: "Bean sprouts and scallion" },
  nutrition: { calories: 615, protein: 36, carbs: 72, fat: 20, fiber: 4 },
  tags: ["dairy-free", "leftovers"],
  seasons: ["all"],
  ingredients: [
    { group: "Sauce", items: [
      "1/4 cup fish sauce",
      "1/4 cup tamarind paste, or 3 tablespoons lime juice plus 1 tablespoon rice vinegar",
      "1/3 cup palm or brown sugar",
      "1 tablespoon soy sauce",
      "1 teaspoon chili flakes"
    ]},
    { group: "Stir-fry", items: [
      "12 oz flat rice noodles",
      "1 lb chicken breast, thinly sliced",
      "3 tablespoons neutral oil",
      "4 cloves garlic, minced",
      "3 eggs, beaten",
      "3 cups bean sprouts",
      "5 scallions, cut into 2-inch pieces",
      "1/2 cup roasted peanuts, chopped",
      "2 limes, cut into wedges",
      "1/2 cup cilantro"
    ]}
  ],
  steps: [
    "Soak the rice noodles in hot tap water 25 to 30 minutes, until pliable but still firm. Don't boil them. They finish cooking in the pan.",
    "Whisk the sauce ingredients until the sugar dissolves. Taste it: it should be aggressively sweet, sour, and salty all at once.",
    "Have absolutely everything chopped and beside the stove. Pad Thai cooks in five minutes and there's no time to prep mid-cook.",
    "Heat 2 tablespoons oil in a wok or large skillet over high. Cook the chicken 3 minutes until just done. Move to a plate.",
    "Add the remaining oil and the garlic and cook 20 seconds.",
    "Push everything to one side, pour the eggs into the empty space, and scramble them roughly for 30 seconds.",
    "Add the drained noodles and the sauce. Toss constantly for 2 to 3 minutes, until the noodles absorb the sauce and turn glossy.",
    "Return the chicken, add the bean sprouts and scallions, and toss 1 minute more. The sprouts should stay crunchy. Serve with peanuts, lime, and cilantro."
  ],
  tips: [
    "Soaked, not boiled. Boiled rice noodles turn to paste the moment they hit a hot pan.",
    "Tamarind is what makes it taste like the restaurant version. Lime and vinegar are a decent substitute but not the same thing."
  ],
  makeAhead: "Mix the sauce up to two weeks ahead."
},

{
  id: "baked-feta-pasta",
  title: "Baked Feta and Tomato Pasta",
  blurb: "A block of feta and a tray of tomatoes roast into a creamy sauce with almost no effort.",
  emoji: "🍅", protein: "Vegetarian", cuisine: "Mediterranean",
  totalTime: 45, activeTime: 10, difficulty: "Easy", servings: 4,
  plate: { protein: "Feta and chickpeas", starch: "Pasta", veg: "Cherry tomatoes and spinach" },
  nutrition: { calories: 775, protein: 34, carbs: 94, fat: 30, fiber: 11 },
  tags: ["one-pan", "budget", "kid-friendly", "veggie-forward"],
  seasons: ["summer"],
  ingredients: [
    { group: "Everything", items: [
      "1 (15 oz) can chickpeas, drained and dried",
      "2 pints cherry tomatoes",
      "1 1/2 blocks (12 oz) feta",
      "1/3 cup olive oil",
      "5 cloves garlic, smashed",
      "1 teaspoon dried oregano",
      "1/2 teaspoon red pepper flakes",
      "1 teaspoon kosher salt",
      "1 lb short pasta",
      "3 oz baby spinach",
      "1/2 cup torn basil",
      "1 tablespoon lemon juice"
    ]}
  ],
  steps: [
    "Heat the oven to 400F.",
    "Put the tomatoes, chickpeas, and garlic in a baking dish, set the feta in the middle, and pour the olive oil over everything.",
    "Scatter with the oregano, pepper flakes, and salt.",
    "Bake 35 minutes, until the tomatoes have burst and the feta is soft and lightly browned at the edges.",
    "Meanwhile, cook the pasta in well-salted water to al dente. Reserve 1 1/2 cups pasta water before draining.",
    "Take the dish out and mash the feta, tomatoes, and garlic together with a fork into a rough, creamy sauce.",
    "Add the spinach and the hot drained pasta with a cup of pasta water and toss until everything is coated and the spinach wilts.",
    "Finish with the lemon juice and basil, loosening with more pasta water if needed."
  ],
  tips: [
    "Use a block of feta in brine, not the pre-crumbled kind. Crumbled feta is drier and won't go creamy.",
    "The lemon juice at the end is what stops it tasting flat and heavy."
  ],
  makeAhead: null
},

{
  id: "farro-roasted-vegetable-salad",
  title: "Warm Farro Salad with Roasted Vegetables",
  blurb: "Chewy grains, sweet roasted vegetables, feta, and a mustard vinaigrette. Good hot, warm, or cold.",
  emoji: "🥗", protein: "Vegetarian", cuisine: "Mediterranean",
  totalTime: 50, activeTime: 20, difficulty: "Easy", servings: 4,
  plate: { protein: "Chickpeas and feta", starch: "Farro", veg: "Squash, peppers, red onion" },
  nutrition: { calories: 695, protein: 30, carbs: 84, fat: 28, fiber: 17 },
  tags: ["make-ahead", "veggie-forward", "leftovers", "budget", "high-protein"],
  seasons: ["fall"],
  ingredients: [
    { group: "Grains and vegetables", items: [
      "1 1/2 cups farro",
      "1 butternut squash, peeled and cubed",
      "2 red bell peppers, cut into chunks",
      "1 red onion, cut into wedges",
      "2 (15 oz) cans chickpeas, drained and dried",
      "4 tablespoons olive oil",
      "1 1/2 teaspoons kosher salt",
      "1 teaspoon smoked paprika"
    ]},
    { group: "Dressing", items: [
      "1/3 cup olive oil",
      "3 tablespoons red wine vinegar",
      "1 tablespoon Dijon mustard",
      "1 teaspoon honey",
      "1 clove garlic, grated",
      "1/2 teaspoon salt"
    ]},
    { group: "To finish", items: [
      "1 1/2 cups crumbled feta",
      "1/2 cup chopped parsley",
      "1/3 cup toasted pumpkin seeds",
      "3 cups arugula"
    ]}
  ],
  steps: [
    "Heat the oven to 425F.",
    "Toss the squash, peppers, onion, and chickpeas with the oil, salt, and paprika. Spread across two sheet pans and roast 30 minutes, tossing once, until browned at the edges.",
    "Meanwhile, simmer the farro in plenty of salted water 25 to 30 minutes, until tender but still chewy. Drain.",
    "Whisk the dressing ingredients together in a jar.",
    "Toss the warm farro with half the dressing. Warm grains soak it up better than cold ones.",
    "Fold in the roasted vegetables and chickpeas, then the arugula, which will wilt slightly from the residual heat.",
    "Add the rest of the dressing, the feta, parsley, and pumpkin seeds. Taste for salt and acid."
  ],
  tips: [
    "Dress the grains while warm. This one detail is the difference between a bland grain salad and a good one.",
    "Any hardy grain works. Barley, wheat berries, or brown rice."
  ],
  makeAhead: "Keeps four days and is good cold for lunch."
},

{
  id: "couscous-chickpea-bowls",
  title: "Harissa Chickpea and Couscous Bowls",
  blurb: "Spiced chickpeas over fluffy couscous with herbs, olives, and a cooling yogurt drizzle.",
  emoji: "🥘", protein: "Vegetarian", cuisine: "Moroccan",
  totalTime: 35, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "Chickpeas", starch: "Couscous", veg: "Peppers, tomato, herbs" },
  nutrition: { calories: 673, protein: 31, carbs: 92, fat: 20, fiber: 18 },
  tags: ["30-minutes", "budget", "veggie-forward", "make-ahead", "high-protein"],
  seasons: ["all"],
  ingredients: [
    { group: "Chickpeas", items: [
      "3 (15 oz) cans chickpeas, drained and dried",
      "3 tablespoons olive oil",
      "2 tablespoons harissa paste",
      "1 onion, sliced",
      "1 red bell pepper, sliced",
      "3 cloves garlic, minced",
      "1 teaspoon ground cumin",
      "1 teaspoon ground coriander",
      "1 (14.5 oz) can diced tomatoes",
      "1 1/4 teaspoons kosher salt",
      "1 tablespoon honey"
    ]},
    { group: "Couscous", items: [
      "1 1/2 cups couscous",
      "1 3/4 cups boiling vegetable broth",
      "2 tablespoons butter or olive oil",
      "1/2 teaspoon salt"
    ]},
    { group: "To serve", items: [
      "2 cups plain Greek yogurt",
      "1 tablespoon lemon juice",
      "1/2 cup chopped parsley",
      "1/2 cup chopped mint",
      "1/2 cup green olives, halved",
      "1/3 cup toasted almonds"
    ]}
  ],
  steps: [
    "Put the couscous, butter, and salt in a bowl. Pour over the boiling broth, cover tightly, and leave 10 minutes. Fluff thoroughly with a fork.",
    "Heat the oil in a large skillet over medium-high. Cook the onion and bell pepper 7 minutes.",
    "Add the garlic, cumin, and coriander and cook 1 minute.",
    "Stir in the harissa and cook 1 minute, then add the chickpeas, tomatoes, salt, and honey.",
    "Simmer 12 minutes, until thickened and the chickpeas have taken on the color of the sauce.",
    "Stir the yogurt with the lemon juice and a pinch of salt.",
    "Build the bowls: couscous, the chickpea stew, a drizzle of lemon yogurt, then herbs, olives, and almonds."
  ],
  tips: [
    "Harissa varies enormously in heat between brands. Start with one tablespoon and taste before adding more.",
    "Couscous isn't a grain that needs boiling. Just hot liquid and ten minutes under a lid."
  ],
  makeAhead: "The chickpea stew keeps four days and freezes well."
},

{
  id: "cacio-e-pepe-broccoli",
  title: "Cacio e Pepe with Charred Broccoli",
  blurb: "The three-ingredient Roman classic, with blistered broccoli added so it becomes an actual dinner.",
  emoji: "🧀", protein: "Vegetarian", cuisine: "Italian",
  totalTime: 30, activeTime: 30, difficulty: "Medium", servings: 4,
  plate: { protein: "Pecorino", starch: "Spaghetti", veg: "Broccoli" },
  nutrition: { calories: 643, protein: 32, carbs: 69, fat: 27, fiber: 6 },
  tags: ["30-minutes", "budget", "veggie-forward", "comfort"],
  seasons: ["all"],
  ingredients: [
    { group: "Everything", items: [
      "1 lb spaghetti or tonnarelli",
      "1 large head broccoli, cut into florets",
      "3 tablespoons olive oil",
      "3 1/2 cups finely grated Pecorino Romano",
      "1 tablespoon coarsely ground black pepper",
      "3 tablespoons butter",
      "1 teaspoon kosher salt"
    ]}
  ],
  steps: [
    "Bring a pot of salted water to a boil. Use less salt than usual, since Pecorino is very salty. Use only about two thirds the usual amount of water so it gets extra starchy.",
    "Heat the oil in a large skillet over high. Add the broccoli and cook 7 minutes, stirring rarely, until charred in spots and crisp-tender. Season and set aside.",
    "Toast the black pepper in the same dry skillet over medium for 45 seconds, until fragrant.",
    "Cook the pasta to al dente. Reserve 2 cups of the very starchy pasta water.",
    "Put the grated Pecorino in a bowl and whisk in about 1/2 cup of the pasta water, a little at a time, until it forms a smooth, thick paste with no lumps.",
    "Add the butter and 1/2 cup pasta water to the skillet with the pepper and swirl over low heat.",
    "Add the drained pasta and toss, then take the pan off the heat entirely and add the cheese paste, tossing hard and constantly.",
    "Loosen with more pasta water until it's glossy and coats each strand. Fold in the broccoli and serve immediately."
  ],
  tips: [
    "Off the heat and a cheese paste, not dry cheese. Dropping grated Pecorino into a hot pan makes stringy clumps every time.",
    "Less water in the pot means more concentrated starch, which is what makes the sauce hold together."
  ],
  makeAhead: null
}

]);
