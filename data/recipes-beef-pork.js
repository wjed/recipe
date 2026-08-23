/* Beef, pork & lamb mains. */
window.RECIPES = (window.RECIPES || []).concat([

{
  id: "classic-pot-roast",
  title: "Classic Pot Roast with Carrots and Potatoes",
  blurb: "Three hours in the oven and the beef pulls apart with a fork. Potatoes and carrots cook in the same pot.",
  emoji: "🍖", protein: "Beef", cuisine: "American",
  totalTime: 225, activeTime: 30, difficulty: "Medium", servings: 6,
  plate: { protein: "Chuck roast", starch: "Potatoes", veg: "Carrots and onions" },
  nutrition: { calories: 615, protein: 48, carbs: 38, fat: 30, fiber: 6 },
  tags: ["one-pan", "comfort", "make-ahead", "leftovers", "special-occasion", "gluten-free"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Beef", items: [
      "3 1/2 lb beef chuck roast",
      "2 teaspoons kosher salt",
      "1 teaspoon black pepper",
      "2 tablespoons olive oil"
    ]},
    { group: "The pot", items: [
      "2 onions, cut into wedges",
      "6 carrots, cut into 2-inch pieces",
      "1 1/2 lb baby potatoes",
      "6 cloves garlic, smashed",
      "3 tablespoons tomato paste",
      "1 cup dry red wine",
      "3 cups beef broth",
      "4 sprigs thyme",
      "2 bay leaves",
      "1 tablespoon Worcestershire sauce"
    ]}
  ],
  steps: [
    "Heat the oven to 325F. Pat the roast completely dry and season it hard on all sides. A roast this size needs more salt than feels right.",
    "Heat the oil in a Dutch oven over medium-high. Sear the roast 4 to 5 minutes per side until a deep brown crust forms on every surface. Don't rush this; it's where most of the flavor comes from. Move to a plate.",
    "Add the onions and cook 5 minutes. Stir in the tomato paste and cook 2 minutes until it darkens to brick red.",
    "Pour in the wine and scrape the bottom of the pot clean. Simmer 3 minutes.",
    "Add the broth, Worcestershire, thyme, and bay leaves. Return the roast and any juices. The liquid should come about two thirds up the meat.",
    "Cover and put it in the oven for 2 1/2 hours.",
    "Add the carrots, potatoes, and garlic, tucking them around the meat. Cover and cook 1 hour more, until the beef shreds when you twist a fork in it.",
    "Rest 20 minutes. Skim the fat, pull the roast into large pieces, and serve in shallow bowls with the vegetables and plenty of the broth."
  ],
  tips: [
    "Chuck is the cut for this. Leaner roasts turn stringy no matter how long you cook them.",
    "If the meat is tough it needs more time, not less. Tough means the collagen hasn't broken down yet."
  ],
  makeAhead: "Better the next day. Cool completely, refrigerate, lift off the solid fat, and reheat gently at 300F."
},

{
  id: "steak-chimichurri-potatoes",
  title: "Seared Steak with Chimichurri and Crispy Potatoes",
  blurb: "A proper steak dinner at home, with a bright green herb sauce that cuts right through the richness.",
  emoji: "🥩", protein: "Beef", cuisine: "Argentinian",
  totalTime: 50, activeTime: 35, difficulty: "Medium", servings: 4,
  plate: { protein: "Sirloin steak", starch: "Crispy potatoes", veg: "Herb sauce" },
  nutrition: { calories: 640, protein: 46, carbs: 33, fat: 36, fiber: 4 },
  tags: ["gluten-free", "special-occasion", "high-protein", "dairy-free"],
  seasons: ["all"],
  ingredients: [
    { group: "Chimichurri", items: [
      "1 cup packed parsley, finely chopped",
      "3 tablespoons fresh oregano, or 1 tablespoon dried",
      "4 cloves garlic, minced",
      "1/2 cup olive oil",
      "3 tablespoons red wine vinegar",
      "1/2 teaspoon red pepper flakes",
      "3/4 teaspoon kosher salt"
    ]},
    { group: "Potatoes", items: [
      "1 1/2 lb Yukon gold potatoes, cut into 1-inch cubes",
      "3 tablespoons olive oil",
      "1 teaspoon kosher salt",
      "1 teaspoon smoked paprika"
    ]},
    { group: "Steak", items: [
      "2 lb sirloin or strip steak, about 1 1/4 inches thick",
      "1 1/2 teaspoons kosher salt",
      "1 teaspoon black pepper",
      "1 tablespoon neutral oil",
      "2 tablespoons butter"
    ]}
  ],
  steps: [
    "Stir all the chimichurri ingredients together and let it sit at room temperature at least 30 minutes. It gets better the longer it waits.",
    "Heat the oven to 425F. Toss the potatoes with oil, salt, and paprika and roast 35 minutes, flipping once, until crisp.",
    "Take the steaks out of the fridge 30 minutes before cooking and season them generously on both sides.",
    "Heat the oil in a heavy skillet over high until it just starts to smoke. Lay the steaks in and don't touch them for 4 minutes.",
    "Flip, add the butter, and cook 3 to 4 minutes more for medium-rare (130F), basting with the foaming butter.",
    "Move the steaks to a board and rest 10 minutes. This is where the juice redistributes. Cutting early pours it onto the board.",
    "Slice across the grain, spoon chimichurri over, and serve with the potatoes."
  ],
  tips: [
    "A meat thermometer removes all the guessing: 125F rare, 130F medium-rare, 140F medium.",
    "Slicing across the grain shortens the muscle fibers and makes even a chewy cut tender."
  ],
  makeAhead: "Chimichurri keeps a week in the fridge; bring it back to room temperature before serving."
},

{
  id: "meatloaf-roasted-carrots",
  title: "Glazed Meatloaf with Roasted Carrots",
  blurb: "Juicy, well-seasoned, and glazed twice so the top goes sticky and dark.",
  emoji: "🍞", protein: "Beef", cuisine: "American",
  totalTime: 80, activeTime: 20, difficulty: "Easy", servings: 6,
  plate: { protein: "Beef and pork loaf", starch: null, veg: "Roasted carrots" },
  nutrition: { calories: 480, protein: 33, carbs: 26, fat: 27, fiber: 4 },
  tags: ["comfort", "kid-friendly", "make-ahead", "leftovers", "budget", "freezer-friendly"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Loaf", items: [
      "1 1/2 lb ground beef (80/20)",
      "1/2 lb ground pork",
      "1 cup panko breadcrumbs",
      "1/2 cup whole milk",
      "1 onion, grated",
      "3 cloves garlic, minced",
      "2 eggs",
      "2 tablespoons Worcestershire sauce",
      "1 1/2 teaspoons kosher salt",
      "1 teaspoon dried thyme",
      "1/2 teaspoon black pepper"
    ]},
    { group: "Glaze", items: [
      "3/4 cup ketchup",
      "3 tablespoons brown sugar",
      "1 tablespoon apple cider vinegar",
      "1 teaspoon Dijon mustard"
    ]},
    { group: "Carrots", items: [
      "2 lb carrots, cut into batons",
      "2 tablespoons olive oil",
      "1/2 teaspoon salt"
    ]}
  ],
  steps: [
    "Heat the oven to 375F. Line a sheet pan with foil.",
    "Soak the panko in the milk for 5 minutes until it's a soft paste.",
    "Add the rest of the loaf ingredients and mix with your hands until just combined. Stop as soon as it comes together.",
    "Shape into a free-form loaf about 9 by 5 inches on the sheet pan. A free-form loaf browns on all sides; a loaf pan steams the edges.",
    "Whisk the glaze ingredients and brush a third of it over the top.",
    "Toss the carrots with oil and salt and scatter them around the loaf.",
    "Bake 40 minutes. Brush with another third of the glaze and bake 20 minutes more, until the loaf reads 160F.",
    "Brush with the last of the glaze and rest 15 minutes before slicing. It firms up as it cools and slices much more cleanly."
  ],
  tips: [
    "Grate the onion rather than chopping it. You get the flavor and moisture without crunchy raw bits.",
    "Cold leftover meatloaf on toasted bread with more ketchup is arguably the point of making meatloaf."
  ],
  makeAhead: "Mix and shape the loaf a day ahead, or freeze it raw, wrapped tight, for three months."
},

{
  id: "beef-broccoli",
  title: "Beef and Broccoli",
  blurb: "Tender slices of beef in a glossy brown sauce, on the table faster than delivery would arrive.",
  emoji: "🥦", protein: "Beef", cuisine: "Chinese",
  totalTime: 30, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "Flank steak", starch: "Rice", veg: "Broccoli" },
  nutrition: { calories: 520, protein: 38, carbs: 51, fat: 17, fiber: 5 },
  tags: ["30-minutes", "dairy-free", "high-protein", "leftovers", "veggie-forward"],
  seasons: ["all"],
  ingredients: [
    { group: "Beef", items: [
      "1 1/4 lb flank steak, thinly sliced across the grain",
      "1 tablespoon cornstarch",
      "1 tablespoon soy sauce",
      "1 teaspoon baking soda",
      "2 tablespoons neutral oil"
    ]},
    { group: "Sauce", items: [
      "1/2 cup beef broth",
      "3 tablespoons soy sauce",
      "2 tablespoons oyster sauce",
      "1 tablespoon brown sugar",
      "1 tablespoon cornstarch",
      "1 teaspoon sesame oil"
    ]},
    { group: "The rest", items: [
      "1 large head broccoli, cut into florets",
      "4 cloves garlic, minced",
      "1 tablespoon grated ginger",
      "4 cups cooked rice"
    ]}
  ],
  steps: [
    "Toss the sliced beef with the cornstarch, soy sauce, and baking soda. Let it sit 15 minutes. The baking soda is a restaurant trick that keeps cheap beef tender.",
    "Rinse the beef briefly and pat dry. Whisk the sauce ingredients together.",
    "Heat 1 tablespoon oil in a wok or large skillet over high. Add the broccoli with 3 tablespoons water, cover, steam 2 minutes, then uncover and cook 1 minute. Move to a plate.",
    "Add the remaining oil. Spread the beef in a single layer and leave it 90 seconds to sear, then stir-fry 1 minute more. It should still be slightly pink.",
    "Add the garlic and ginger and stir 30 seconds.",
    "Return the broccoli, whisk the sauce, and pour it in. Toss 1 to 2 minutes until thick and glossy.",
    "Serve over rice immediately."
  ],
  tips: [
    "Slice the flank steak across the grain, and slice it while it's partly frozen if you want really thin pieces.",
    "Don't skip rinsing off the baking soda or the dish tastes faintly soapy."
  ],
  makeAhead: null
},

{
  id: "cottage-pie",
  title: "Cottage Pie",
  blurb: "Beef and vegetables in gravy under a browned mashed potato crust.",
  emoji: "🥧", protein: "Beef", cuisine: "British",
  totalTime: 75, activeTime: 35, difficulty: "Medium", servings: 6,
  plate: { protein: "Ground beef", starch: "Mashed potato top", veg: "Carrots, peas, onion" },
  nutrition: { calories: 545, protein: 31, carbs: 47, fat: 26, fiber: 6 },
  tags: ["comfort", "make-ahead", "freezer-friendly", "kid-friendly", "budget", "leftovers"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Filling", items: [
      "2 lb ground beef",
      "2 tablespoons olive oil",
      "1 large onion, diced",
      "3 carrots, diced",
      "3 stalks celery, diced",
      "4 cloves garlic, minced",
      "3 tablespoons tomato paste",
      "2 tablespoons all-purpose flour",
      "1 1/2 cups beef broth",
      "2 tablespoons Worcestershire sauce",
      "1 tablespoon fresh thyme",
      "1 cup frozen peas",
      "1 1/2 teaspoons kosher salt"
    ]},
    { group: "Topping", items: [
      "2 1/2 lb russet potatoes, peeled and cubed",
      "6 tablespoons butter",
      "1/2 cup warm milk",
      "1/2 cup grated cheddar",
      "1 teaspoon salt"
    ]}
  ],
  steps: [
    "Boil the potatoes in salted water 18 to 20 minutes until completely tender. Drain and let them steam dry 5 minutes.",
    "Mash with the butter, warm milk, and salt until smooth. Stir in half the cheddar. Set aside.",
    "Meanwhile, brown the beef in the oil over medium-high, 8 minutes, breaking it up. Drain off most of the fat.",
    "Add the onion, carrots, and celery and cook 8 minutes until softened. Add the garlic and cook 1 minute.",
    "Stir in the tomato paste and flour and cook 2 minutes.",
    "Add the broth, Worcestershire, thyme, and salt. Simmer 10 minutes until thick enough that a spoon leaves a trail. Stir in the peas.",
    "Heat the oven to 400F. Spread the filling in a 9x13 dish and spoon the mash over it, starting at the edges so the filling can't bubble up the sides. Rough up the surface with a fork and scatter the remaining cheddar over.",
    "Bake 25 to 30 minutes, until bubbling and browned on top. Rest 10 minutes before serving."
  ],
  tips: [
    "The filling must be thick before it goes in the dish. A loose filling turns the mash into soup.",
    "Fork ridges on top catch the heat and give you crispy peaks."
  ],
  makeAhead: "Assemble completely, refrigerate up to two days, then bake 45 minutes from cold."
},

{
  id: "pork-tenderloin-apples",
  title: "Roast Pork Tenderloin with Apples and Onions",
  blurb: "Lean, quick-roasting pork with sweet apples collapsing into the pan around it.",
  emoji: "🍎", protein: "Pork", cuisine: "American",
  totalTime: 40, activeTime: 20, difficulty: "Easy", servings: 4,
  plate: { protein: "Pork tenderloin", starch: null, veg: "Apples and onions" },
  nutrition: { calories: 405, protein: 40, carbs: 26, fat: 15, fiber: 4 },
  tags: ["one-pan", "gluten-free", "high-protein", "special-occasion"],
  seasons: ["fall"],
  ingredients: [
    { group: "Pork", items: [
      "2 pork tenderloins (about 1 1/4 lb each)",
      "1 1/2 teaspoons kosher salt",
      "1 teaspoon black pepper",
      "1 teaspoon dried sage",
      "2 tablespoons olive oil"
    ]},
    { group: "Pan", items: [
      "3 firm apples, cut into thick wedges",
      "2 onions, sliced",
      "3 sprigs thyme",
      "1/2 cup apple cider",
      "1 tablespoon whole grain mustard",
      "2 tablespoons butter"
    ]}
  ],
  steps: [
    "Heat the oven to 425F. Pat the tenderloins dry and rub with salt, pepper, and sage.",
    "Heat the oil in an oven-safe skillet over medium-high. Sear the pork on all sides, about 8 minutes total, until well browned. Move to a plate.",
    "Add the onions to the pan and cook 4 minutes. Add the apples and thyme and cook 3 minutes more.",
    "Pour in the cider and scrape the pan. Stir in the mustard.",
    "Nestle the tenderloins on top and transfer the skillet to the oven.",
    "Roast 15 to 18 minutes, until the pork reads 145F at the thickest point. Pork is meant to be slightly pink in the middle.",
    "Rest the pork on a board 10 minutes. Swirl the butter into the apples, slice the pork thickly, and serve together."
  ],
  tips: [
    "145F and a 10-minute rest is the difference between juicy pork and the dry pork of the 1980s.",
    "Use a firm apple like Honeycrisp, Braeburn, or Granny Smith. Softer ones turn to sauce."
  ],
  makeAhead: null
},

{
  id: "pork-chops-mustard-cream",
  title: "Pork Chops with Mustard Cream Sauce",
  blurb: "Thick chops seared hard, finished with a sharp cream sauce made from the pan drippings.",
  emoji: "🐖", protein: "Pork", cuisine: "French",
  totalTime: 30, activeTime: 30, difficulty: "Easy", servings: 4,
  plate: { protein: "Bone-in pork chops", starch: null, veg: null },
  nutrition: { calories: 490, protein: 42, carbs: 5, fat: 33, fiber: 0 },
  tags: ["30-minutes", "one-pan", "low-carb", "gluten-free", "comfort"],
  seasons: ["all"],
  ingredients: [
    { group: "Chops", items: [
      "4 bone-in pork chops, 1 1/4 inches thick",
      "1 1/2 teaspoons kosher salt",
      "1 teaspoon black pepper",
      "1 tablespoon neutral oil",
      "2 tablespoons butter"
    ]},
    { group: "Sauce", items: [
      "1 shallot, minced",
      "3/4 cup chicken broth",
      "2 tablespoons Dijon mustard",
      "1 tablespoon whole grain mustard",
      "1/2 cup heavy cream",
      "1 tablespoon chopped tarragon or parsley"
    ]}
  ],
  steps: [
    "Take the chops out of the fridge 30 minutes ahead. Pat dry and season heavily on both sides.",
    "Heat the oil in a heavy skillet over medium-high until shimmering. Sear the chops 5 minutes without moving them.",
    "Flip, add the butter, and cook 4 to 5 minutes more, spooning butter over, until they read 145F. Rest on a board.",
    "Pour off all but a tablespoon of fat. Cook the shallot 1 minute.",
    "Add the broth and scrape up the browned bits. Simmer 3 minutes until reduced by half.",
    "Whisk in both mustards and the cream and simmer 2 to 3 minutes until it coats a spoon.",
    "Stir in the herbs and any juice from the resting board, then spoon the sauce over the chops."
  ],
  tips: [
    "Thin chops overcook before they brown. Ask the butcher for chops at least an inch thick.",
    "Stand the chops on their fat edge for a minute with tongs to render it. It seasons the whole pan."
  ],
  makeAhead: null
},

{
  id: "pork-carnitas",
  title: "Oven Pork Carnitas",
  blurb: "Pork shoulder slow-roasted until it shreds, then broiled so the edges go crisp and lacy.",
  emoji: "🌮", protein: "Pork", cuisine: "Mexican",
  totalTime: 240, activeTime: 25, difficulty: "Easy", servings: 8,
  plate: { protein: "Shredded pork", starch: "Corn tortillas", veg: "Onion, cilantro, lime" },
  nutrition: { calories: 470, protein: 36, carbs: 30, fat: 23, fiber: 5 },
  tags: ["make-ahead", "freezer-friendly", "budget", "dairy-free", "leftovers", "special-occasion"],
  seasons: ["all"],
  ingredients: [
    { group: "Pork", items: [
      "4 lb boneless pork shoulder, cut into 3-inch chunks",
      "1 tablespoon kosher salt",
      "1 tablespoon ground cumin",
      "2 teaspoons dried oregano",
      "1 teaspoon black pepper",
      "1 onion, quartered",
      "6 cloves garlic, smashed",
      "2 oranges, juiced (keep the spent halves)",
      "2 limes, juiced",
      "2 bay leaves",
      "1 cup water"
    ]},
    { group: "To serve", items: [
      "16 corn tortillas",
      "1 white onion, finely diced",
      "1 cup chopped cilantro",
      "2 limes, cut into wedges",
      "1 cup salsa verde"
    ]}
  ],
  steps: [
    "Heat the oven to 300F. Toss the pork chunks with the salt, cumin, oregano, and pepper.",
    "Put the pork in a Dutch oven with the onion, garlic, both juices, the spent orange halves, bay leaves, and water.",
    "Cover and roast 3 hours, until the pork falls apart when pressed with a spoon.",
    "Lift the pork out and shred it with two forks, discarding any large pieces of fat. Strain the cooking liquid and skim off the fat, keeping the flavorful juice underneath.",
    "Spread the shredded pork on a sheet pan and spoon over about a cup of the reserved juices.",
    "Broil 5 to 8 minutes, until the top edges are browned and crisp. Toss, spoon over a little more juice, and broil 3 minutes more.",
    "Serve in warm tortillas with onion, cilantro, lime, and salsa verde."
  ],
  tips: [
    "The crisping step is the whole difference between carnitas and plain pulled pork. Don't skip it.",
    "Any leftover cooking liquid is liquid gold. Freeze it and use it to reheat the pork without drying it out."
  ],
  makeAhead: "Cook and shred up to three days ahead; crisp under the broiler right before serving."
},

{
  id: "korean-beef-bowls",
  title: "Korean-Style Beef Bowls",
  blurb: "Sweet-savory ground beef over rice with quick cucumbers. Fifteen minutes of actual work.",
  emoji: "🍚", protein: "Beef", cuisine: "Korean",
  totalTime: 25, activeTime: 20, difficulty: "Easy", servings: 4,
  plate: { protein: "Ground beef", starch: "Rice", veg: "Cucumber and carrot" },
  nutrition: { calories: 555, protein: 34, carbs: 58, fat: 20, fiber: 3 },
  tags: ["30-minutes", "budget", "kid-friendly", "dairy-free", "leftovers"],
  seasons: ["all"],
  ingredients: [
    { group: "Beef", items: [
      "1 1/2 lb ground beef",
      "1 tablespoon sesame oil",
      "5 cloves garlic, minced",
      "1 tablespoon grated ginger",
      "1/3 cup soy sauce",
      "3 tablespoons brown sugar",
      "1 tablespoon gochujang or sriracha",
      "1 teaspoon rice vinegar"
    ]},
    { group: "Bowls", items: [
      "4 cups cooked rice",
      "1 English cucumber, thinly sliced",
      "2 tablespoons rice vinegar",
      "1 teaspoon sugar",
      "2 carrots, grated",
      "4 scallions, sliced",
      "1 tablespoon sesame seeds",
      "4 eggs, fried (optional)"
    ]}
  ],
  steps: [
    "Toss the cucumber with the vinegar, sugar, and a pinch of salt. Leave it while you cook everything else.",
    "Heat the sesame oil in a large skillet over medium-high. Brown the beef 6 to 7 minutes, breaking it up. Drain off excess fat.",
    "Add the garlic and ginger and cook 1 minute until fragrant.",
    "Stir in the soy sauce, brown sugar, gochujang, and vinegar. Simmer 3 minutes until the sauce reduces and clings to the meat.",
    "If using, fry the eggs in a separate pan until the whites are set and the yolks still runny.",
    "Build bowls with rice, beef, quick cucumbers, grated carrot, scallions, and sesame seeds. Top each with an egg."
  ],
  tips: [
    "Gochujang is worth buying. It keeps for months and makes almost anything taste more interesting.",
    "This is the fastest real dinner in the whole collection. Keep the ingredients on hand for emergencies."
  ],
  makeAhead: "The beef reheats perfectly, so it's excellent for lunches."
},

{
  id: "beef-stroganoff",
  title: "Beef Stroganoff",
  blurb: "Tender strips of beef and mushrooms in a tangy sour cream sauce over buttered noodles.",
  emoji: "🍄", protein: "Beef", cuisine: "Russian",
  totalTime: 45, activeTime: 40, difficulty: "Medium", servings: 5,
  plate: { protein: "Sirloin strips", starch: "Egg noodles", veg: "Mushrooms" },
  nutrition: { calories: 610, protein: 40, carbs: 52, fat: 27, fiber: 4 },
  tags: ["comfort", "leftovers", "kid-friendly"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Beef", items: [
      "1 1/2 lb sirloin steak, sliced into thin strips",
      "1 1/2 teaspoons kosher salt",
      "1/2 teaspoon black pepper",
      "2 tablespoons neutral oil"
    ]},
    { group: "Sauce", items: [
      "3 tablespoons butter",
      "1 large onion, sliced",
      "16 oz cremini mushrooms, sliced",
      "3 cloves garlic, minced",
      "3 tablespoons all-purpose flour",
      "2 1/2 cups beef broth",
      "1 tablespoon Dijon mustard",
      "1 tablespoon Worcestershire sauce",
      "3/4 cup sour cream",
      "1/4 cup chopped parsley"
    ]},
    { group: "To serve", items: [
      "12 oz wide egg noodles",
      "2 tablespoons butter"
    ]}
  ],
  steps: [
    "Pat the beef dry and season. Heat the oil in a large skillet over high and sear the strips in two batches, 90 seconds a side. They should stay pink inside. Move to a plate.",
    "Lower the heat to medium. Melt the butter, add the onion and mushrooms, and cook 10 minutes until browned and the liquid has cooked off.",
    "Add the garlic and cook 1 minute. Stir in the flour and cook 2 minutes.",
    "Add the broth gradually, whisking, then the mustard and Worcestershire. Simmer 8 minutes until it thickens.",
    "Meanwhile, boil the noodles in salted water and toss them with the butter.",
    "Take the pan off the heat. Whisk a ladle of hot sauce into the sour cream first, then stir that mixture back into the pan. This stops it curdling.",
    "Return the beef and its juices, warm through 1 minute without boiling, and serve over the noodles with parsley."
  ],
  tips: [
    "Never boil the sauce after the sour cream goes in. It splits and turns grainy.",
    "The beef finishes cooking in the sauce, so pull it early at the searing stage."
  ],
  makeAhead: "Make the mushroom sauce base ahead; add beef and sour cream when reheating."
},

{
  id: "smash-burgers",
  title: "Smash Burgers with Oven Fries",
  blurb: "Thin, craggy, deeply browned patties with crisp edges. Better than most restaurants, honestly.",
  emoji: "🍔", protein: "Beef", cuisine: "American",
  totalTime: 50, activeTime: 30, difficulty: "Easy", servings: 4,
  plate: { protein: "Beef patties", starch: "Oven fries and buns", veg: "Lettuce, tomato, onion" },
  nutrition: { calories: 720, protein: 40, carbs: 55, fat: 38, fiber: 5 },
  tags: ["comfort", "kid-friendly", "budget"],
  seasons: ["all"],
  ingredients: [
    { group: "Fries", items: [
      "2 lb russet potatoes, cut into 1/2-inch sticks",
      "3 tablespoons neutral oil",
      "1 teaspoon kosher salt",
      "1/2 teaspoon garlic powder"
    ]},
    { group: "Burgers", items: [
      "1 1/2 lb ground beef (80/20)",
      "1 1/2 teaspoons kosher salt",
      "1 teaspoon black pepper",
      "8 slices American or cheddar cheese",
      "4 burger buns",
      "2 tablespoons butter, softened"
    ]},
    { group: "To serve", items: [
      "1/2 cup mayonnaise",
      "2 tablespoons ketchup",
      "1 tablespoon pickle relish",
      "1 tomato, sliced",
      "4 leaves lettuce",
      "1/2 onion, thinly sliced"
    ]}
  ],
  steps: [
    "Heat the oven to 450F. Soak the cut potatoes in cold water 20 minutes, then dry them very thoroughly. Toss with oil, salt, and garlic powder and roast 35 to 40 minutes, flipping once.",
    "Stir the mayonnaise, ketchup, and relish together for the sauce.",
    "Divide the beef into 8 loose balls. Don't compact them. Handle the meat as little as possible.",
    "Butter the cut sides of the buns and toast them face down in a skillet until golden. Set aside.",
    "Heat a cast-iron skillet or griddle over high until very hot. Put two balls in the pan and immediately smash each flat with a stiff spatula, hard, for about 10 seconds.",
    "Season, cook 90 seconds until the edges are dark and lacy, then scrape underneath with the spatula and flip. Add cheese and cook 45 seconds more.",
    "Repeat with the rest. Stack two patties per bun with sauce, lettuce, tomato, and onion, and serve with the fries."
  ],
  tips: [
    "Smash within the first 10 seconds of the patty hitting the pan. After that the crust has set and it won't spread.",
    "Scrape rather than lift when flipping. All the browned crust is stuck to the pan and that's the best part."
  ],
  makeAhead: null
},

{
  id: "sausage-white-bean-skillet",
  title: "Italian Sausage and White Bean Skillet",
  blurb: "Sausage, beans, and greens in one pan in 25 minutes, and it costs almost nothing to make.",
  emoji: "🫘", protein: "Pork", cuisine: "Italian",
  totalTime: 30, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "Italian sausage", starch: "Cannellini beans", veg: "Kale and tomato" },
  nutrition: { calories: 505, protein: 30, carbs: 38, fat: 26, fiber: 11 },
  tags: ["one-pan", "30-minutes", "budget", "high-protein", "veggie-forward", "leftovers"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Skillet", items: [
      "1 lb Italian sausage, casings removed",
      "1 tablespoon olive oil",
      "1 onion, diced",
      "4 cloves garlic, sliced",
      "1/2 teaspoon red pepper flakes",
      "2 (15 oz) cans cannellini beans, drained",
      "1 (14.5 oz) can diced tomatoes",
      "1 cup chicken broth",
      "1 bunch kale, stems removed and leaves torn",
      "1 teaspoon kosher salt",
      "1/2 cup grated Parmesan",
      "2 tablespoons lemon juice"
    ]}
  ],
  steps: [
    "Heat the oil in a large skillet over medium-high. Add the sausage and break it into chunks. Brown 7 minutes without stirring too much.",
    "Add the onion and cook 5 minutes until soft. Add the garlic and pepper flakes and cook 1 minute.",
    "Stir in the beans, tomatoes, broth, and salt. Simmer 8 minutes.",
    "Mash about a quarter of the beans against the side of the pan with a spoon. This thickens the whole thing into something saucy instead of soupy.",
    "Add the kale in handfuls, stirring until wilted, about 4 minutes.",
    "Off the heat, stir in the Parmesan and lemon juice. Taste and add salt if needed.",
    "Serve in bowls with crusty bread."
  ],
  tips: [
    "Mashing some of the beans is the trick that makes this taste like it simmered for an hour.",
    "Spinach works if you have no kale. Add it at the very end since it wilts in seconds."
  ],
  makeAhead: "Keeps four days and reheats beautifully with a splash of broth."
},

{
  id: "braised-short-ribs",
  title: "Red Wine Braised Short Ribs",
  blurb: "Three hours in the oven for beef that falls off the bone, in a thick red wine sauce.",
  emoji: "🍷", protein: "Beef", cuisine: "French",
  totalTime: 240, activeTime: 40, difficulty: "Ambitious", servings: 6,
  plate: { protein: "Short ribs", starch: null, veg: "Carrots and onion" },
  nutrition: { calories: 690, protein: 45, carbs: 18, fat: 45, fiber: 3 },
  tags: ["comfort", "make-ahead", "special-occasion", "gluten-free"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Ribs", items: [
      "5 lb bone-in beef short ribs",
      "2 teaspoons kosher salt",
      "1 teaspoon black pepper",
      "2 tablespoons neutral oil"
    ]},
    { group: "Braise", items: [
      "2 onions, diced",
      "4 carrots, diced",
      "3 stalks celery, diced",
      "6 cloves garlic, smashed",
      "3 tablespoons tomato paste",
      "1 bottle (750 ml) dry red wine",
      "3 cups beef broth",
      "6 sprigs thyme",
      "2 bay leaves",
      "1 tablespoon balsamic vinegar"
    ]}
  ],
  steps: [
    "Heat the oven to 325F. Season the ribs all over, generously, and let them sit 20 minutes.",
    "Heat the oil in a large Dutch oven over medium-high. Sear the ribs in batches, 3 minutes per side, until every surface is deeply browned. This takes about 20 minutes and isn't the place to hurry. Move to a plate.",
    "Pour off all but 2 tablespoons of fat. Add the onions, carrots, and celery and cook 8 minutes.",
    "Add the garlic and tomato paste and cook 3 minutes, until the paste turns dark red and sticks to the pot.",
    "Pour in the wine and bring to a boil, scraping the bottom. Boil hard 8 to 10 minutes, until reduced by half. This cooks off the raw alcohol edge.",
    "Add the broth, thyme, and bay leaves. Return the ribs bone side up; the liquid should come three quarters of the way up.",
    "Cover and braise in the oven 3 hours, until a fork twists in the meat with no resistance.",
    "Lift the ribs out. Strain the sauce, skim the fat, and simmer it on the stove 10 minutes to concentrate. Stir in the balsamic and pour over the ribs."
  ],
  tips: [
    "Make it a day ahead. Chilling lets you lift the fat off in one solid sheet, and the flavor deepens overnight.",
    "Serve over mashed potatoes, polenta, or buttered noodles. You need something to catch the sauce."
  ],
  makeAhead: "Better made one to two days ahead. Reheat covered at 325F for 40 minutes."
},

{
  id: "sloppy-joes",
  title: "Homemade Sloppy Joes",
  blurb: "Way better than the can, with real vegetables cooked into the sauce where nobody notices them.",
  emoji: "🥪", protein: "Beef", cuisine: "American",
  totalTime: 35, activeTime: 25, difficulty: "Easy", servings: 6,
  plate: { protein: "Ground beef", starch: "Buns", veg: "Peppers, onion, carrot" },
  nutrition: { calories: 445, protein: 27, carbs: 41, fat: 19, fiber: 4 },
  tags: ["30-minutes", "kid-friendly", "budget", "freezer-friendly", "leftovers"],
  seasons: ["all"],
  ingredients: [
    { group: "Filling", items: [
      "2 lb ground beef",
      "1 tablespoon olive oil",
      "1 onion, finely diced",
      "1 red bell pepper, finely diced",
      "1 carrot, grated",
      "4 cloves garlic, minced",
      "1 cup ketchup",
      "1/4 cup tomato paste",
      "2 tablespoons brown sugar",
      "1 tablespoon Worcestershire sauce",
      "1 tablespoon apple cider vinegar",
      "1 teaspoon smoked paprika",
      "1 teaspoon mustard powder",
      "1 teaspoon kosher salt",
      "1/2 cup water"
    ]},
    { group: "To serve", items: [
      "6 burger buns, toasted",
      "1 cup shredded cabbage or coleslaw"
    ]}
  ],
  steps: [
    "Heat the oil in a large skillet over medium-high. Brown the beef 8 minutes, breaking it up. Drain off most of the fat.",
    "Add the onion, bell pepper, and grated carrot and cook 6 minutes until softened.",
    "Add the garlic and cook 1 minute.",
    "Stir in everything else and bring to a simmer.",
    "Cook uncovered 12 to 15 minutes, stirring now and then, until thick enough to hold its shape on a spoon.",
    "Taste and adjust. It should be a little sweet, a little tangy, and quite savory.",
    "Pile onto toasted buns and top with a tangle of cabbage for crunch."
  ],
  tips: [
    "Grated carrot melts into the sauce completely and adds sweetness without sugar.",
    "Toasting the buns isn't optional unless you enjoy the sandwich falling apart."
  ],
  makeAhead: "Freezes for three months. Make a double batch."
},

{
  id: "pork-schnitzel",
  title: "Pork Schnitzel with Cucumber Salad",
  blurb: "Paper-thin cutlets in a golden crust with a sharp, cold cucumber salad to cut through it.",
  emoji: "🍋", protein: "Pork", cuisine: "German",
  totalTime: 40, activeTime: 40, difficulty: "Medium", servings: 4,
  plate: { protein: "Pork cutlets", starch: "Breadcrumb crust", veg: "Cucumber salad" },
  nutrition: { calories: 545, protein: 42, carbs: 30, fat: 27, fiber: 2 },
  tags: ["comfort", "kid-friendly", "special-occasion"],
  seasons: ["spring", "summer"],
  ingredients: [
    { group: "Cucumber salad", items: [
      "2 English cucumbers, very thinly sliced",
      "1/2 red onion, thinly sliced",
      "1/4 cup white wine vinegar",
      "2 tablespoons sour cream",
      "1 tablespoon sugar",
      "2 tablespoons chopped dill",
      "1/2 teaspoon salt"
    ]},
    { group: "Schnitzel", items: [
      "2 lb boneless pork loin, cut into 8 slices",
      "1/2 cup all-purpose flour",
      "3 eggs, beaten",
      "2 cups fine breadcrumbs",
      "1 1/2 teaspoons kosher salt",
      "1/2 teaspoon black pepper",
      "1/2 cup neutral oil",
      "1 lemon, cut into wedges"
    ]}
  ],
  steps: [
    "Toss the cucumbers with the salt and let them sit 15 minutes, then squeeze out the water. Stir in the vinegar, sour cream, sugar, onion, and dill and refrigerate.",
    "Put each pork slice between plastic and pound to 1/4 inch. thin. Season both sides.",
    "Set up flour, egg, and breadcrumbs on three plates.",
    "Coat each cutlet in flour, then egg, then breadcrumbs. Press lightly, not firmly. Schnitzel crust should be loose and puffed, not glued on.",
    "Heat the oil in a large skillet over medium-high; it should be about 1/4 inch deep and shimmer when ready.",
    "Fry one or two at a time, 2 minutes a side, spooning hot oil over the top so the crust puffs away from the meat. Drain on a rack.",
    "Serve immediately with lemon wedges and the cold cucumber salad."
  ],
  tips: [
    "Swirling the pan while it fries lifts the crust off the meat. That gap is what makes real schnitzel.",
    "Fry in batches and keep finished cutlets in a 200F oven; crowding drops the oil temperature and makes them greasy."
  ],
  makeAhead: "The cucumber salad is better made two hours ahead."
},

{
  id: "steak-fajita-bowls",
  title: "Steak Fajita Bowls",
  blurb: "Charred skirt steak and blistered peppers over cilantro-lime rice with black beans.",
  emoji: "🌶️", protein: "Beef", cuisine: "Mexican",
  totalTime: 40, activeTime: 30, difficulty: "Easy", servings: 4,
  plate: { protein: "Skirt steak", starch: "Rice and black beans", veg: "Peppers and onions" },
  nutrition: { calories: 625, protein: 42, carbs: 58, fat: 24, fiber: 10 },
  tags: ["high-protein", "dairy-free", "leftovers", "veggie-forward", "grill"],
  seasons: ["summer"],
  ingredients: [
    { group: "Steak", items: [
      "1 1/2 lb skirt or flank steak",
      "3 tablespoons lime juice",
      "2 tablespoons olive oil",
      "2 teaspoons ground cumin",
      "1 teaspoon chili powder",
      "3 cloves garlic, minced",
      "1 1/2 teaspoons kosher salt"
    ]},
    { group: "Bowls", items: [
      "1 1/2 cups long-grain rice",
      "1/2 cup chopped cilantro",
      "3 tablespoons lime juice",
      "1 (15 oz) can black beans, drained and warmed",
      "3 bell peppers, sliced",
      "1 large onion, sliced",
      "1 tablespoon olive oil",
      "1 avocado, sliced",
      "1/2 cup pico de gallo"
    ]}
  ],
  steps: [
    "Whisk the steak marinade and pour it over the meat. Leave 30 minutes at room temperature.",
    "Cook the rice. When it's done, fork through the cilantro and lime juice.",
    "Heat a heavy skillet or grill pan over high. Cook the peppers and onion with the oil, 7 minutes, until blistered but still crisp. Move to a plate.",
    "Wipe the pan, get it very hot again, and sear the steak 3 to 4 minutes a side for medium-rare.",
    "Rest the steak 10 minutes, then slice thinly across the grain.",
    "Build bowls: cilantro rice, black beans, peppers and onions, sliced steak, avocado, and pico de gallo."
  ],
  tips: [
    "Skirt steak has a very obvious grain. Find it, then cut perpendicular to it or the steak will be chewy.",
    "Don't marinate longer than a few hours. The lime juice starts to cure the surface and turns it grey."
  ],
  makeAhead: "Cook the rice and beans ahead; the steak takes 8 minutes."
},

{
  id: "swedish-meatballs",
  title: "Swedish Meatballs",
  blurb: "Small, tender, nutmeg-scented meatballs in a silky cream gravy over mashed potatoes.",
  emoji: "🧆", protein: "Beef", cuisine: "Swedish",
  totalTime: 55, activeTime: 40, difficulty: "Medium", servings: 5,
  plate: { protein: "Beef and pork meatballs", starch: "Mashed potatoes", veg: null },
  nutrition: { calories: 640, protein: 34, carbs: 44, fat: 36, fiber: 4 },
  tags: ["comfort", "kid-friendly", "make-ahead", "freezer-friendly"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Meatballs", items: [
      "1 lb ground beef",
      "1/2 lb ground pork",
      "3/4 cup panko breadcrumbs",
      "1/2 cup whole milk",
      "1 small onion, grated",
      "1 egg",
      "1/2 teaspoon ground nutmeg",
      "1/4 teaspoon ground allspice",
      "1 1/2 teaspoons kosher salt",
      "1/2 teaspoon black pepper",
      "2 tablespoons butter for frying"
    ]},
    { group: "Gravy", items: [
      "4 tablespoons butter",
      "1/4 cup all-purpose flour",
      "3 cups beef broth",
      "3/4 cup heavy cream",
      "1 tablespoon Worcestershire sauce",
      "1 teaspoon Dijon mustard"
    ]},
    { group: "To serve", items: [
      "2 lb potatoes, mashed",
      "1/4 cup chopped parsley",
      "Lingonberry or cranberry jam"
    ]}
  ],
  steps: [
    "Soak the panko in the milk 5 minutes. Add the rest of the meatball ingredients except the butter and mix gently with your hands.",
    "Roll into small balls, about 1 inch. Roughly 40 of them. Chill 15 minutes if you have time; they hold their shape better.",
    "Melt the butter in a large skillet over medium. Brown the meatballs in batches, rolling them around, about 6 minutes each batch. They don't need to be cooked through yet. Move to a plate.",
    "In the same pan, melt the gravy butter and whisk in the flour. Cook 2 minutes until it smells toasty.",
    "Add the broth slowly, whisking constantly, until smooth. Simmer 5 minutes until it thickens.",
    "Whisk in the cream, Worcestershire, and mustard.",
    "Return the meatballs to the gravy and simmer gently 10 minutes, until cooked through and the gravy coats them.",
    "Serve over mashed potatoes with parsley and a spoonful of jam on the side."
  ],
  tips: [
    "The nutmeg and allspice are what make these Swedish rather than Italian. Don't leave them out.",
    "Small meatballs, gently simmered, stay tender. Big ones need longer and toughen up."
  ],
  makeAhead: "Freeze browned meatballs for three months; finish them in fresh gravy."
},

{
  id: "cuban-mojo-pork",
  title: "Cuban Mojo Pork with Black Beans and Rice",
  blurb: "Citrus-and-garlic marinated pork shoulder roasted until the outside is dark and the inside falls apart.",
  emoji: "🍊", protein: "Pork", cuisine: "Cuban",
  totalTime: 270, activeTime: 30, difficulty: "Medium", servings: 8,
  ahead: { mins: 480, note: "Marinates at least 8 hours, so start it the day before" },
  plate: { protein: "Roast pork", starch: "Rice and black beans", veg: "Onions" },
  nutrition: { calories: 610, protein: 42, carbs: 52, fat: 25, fiber: 9 },
  tags: ["make-ahead", "special-occasion", "dairy-free", "gluten-free", "leftovers"],
  seasons: ["all"],
  ingredients: [
    { group: "Mojo marinade", items: [
      "4 lb boneless pork shoulder",
      "1 cup orange juice",
      "1/2 cup lime juice",
      "12 cloves garlic, minced",
      "1/2 cup olive oil",
      "2 tablespoons dried oregano",
      "1 tablespoon ground cumin",
      "1 tablespoon kosher salt",
      "1 onion, sliced"
    ]},
    { group: "Black beans", items: [
      "2 (15 oz) cans black beans, undrained",
      "1 tablespoon olive oil",
      "1 onion, diced",
      "1 green bell pepper, diced",
      "4 cloves garlic, minced",
      "1 teaspoon ground cumin",
      "1 bay leaf",
      "1 tablespoon red wine vinegar"
    ]},
    { group: "To serve", items: [
      "2 cups long-grain rice, cooked",
      "1 lime, cut into wedges",
      "1/2 cup chopped cilantro"
    ]}
  ],
  steps: [
    "Blend or whisk all the marinade ingredients except the onion. Score the pork fat in a crosshatch and put it in a bag or dish with the marinade and sliced onion. Refrigerate at least 8 hours, ideally 24.",
    "Heat the oven to 300F. Put the pork and marinade in a roasting pan, fat side up, and cover tightly with foil.",
    "Roast 3 1/2 hours, until a fork twists easily in the meat.",
    "Uncover, raise the heat to 425F, and roast 25 minutes more until the top is dark and crackling.",
    "Meanwhile, cook the onion and pepper in the oil 7 minutes. Add the garlic and cumin and cook 1 minute. Add the beans with their liquid and the bay leaf and simmer 20 minutes. Stir in the vinegar.",
    "Rest the pork 20 minutes, then pull it into large chunks and toss with some of the pan juices.",
    "Serve with rice, black beans, lime, and cilantro."
  ],
  tips: [
    "Sour orange is traditional; the orange-and-lime mix here is the standard substitute and works perfectly.",
    "Leftovers make Cuban sandwiches, which some people consider the real reason to make this."
  ],
  makeAhead: "Marinate a full 24 hours. The cooked pork keeps four days and freezes well."
},

{
  id: "pork-green-bean-stir-fry",
  title: "Pork and Green Bean Stir-Fry",
  blurb: "Blistered green beans and savory ground pork with a garlicky sauce, over rice in 25 minutes.",
  emoji: "🫛", protein: "Pork", cuisine: "Chinese",
  totalTime: 25, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "Ground pork", starch: "Rice", veg: "Green beans" },
  nutrition: { calories: 495, protein: 30, carbs: 50, fat: 19, fiber: 5 },
  tags: ["30-minutes", "budget", "dairy-free", "veggie-forward", "leftovers"],
  seasons: ["summer", "fall"],
  ingredients: [
    { group: "Stir-fry", items: [
      "1 lb ground pork",
      "1 1/2 lb green beans, trimmed and halved",
      "2 tablespoons neutral oil",
      "5 cloves garlic, minced",
      "1 tablespoon grated ginger",
      "3 scallions, sliced"
    ]},
    { group: "Sauce", items: [
      "3 tablespoons soy sauce",
      "1 tablespoon rice vinegar",
      "1 tablespoon brown sugar",
      "1 teaspoon chili garlic sauce",
      "1 teaspoon sesame oil",
      "1/4 cup water"
    ]},
    { group: "To serve", items: [
      "4 cups cooked rice"
    ]}
  ],
  steps: [
    "Whisk the sauce ingredients together and set aside.",
    "Heat 1 tablespoon oil in a large skillet or wok over high. Add the green beans and cook 6 to 8 minutes, stirring only every couple of minutes, until they're blistered and wrinkled in spots. Move to a plate.",
    "Add the remaining oil and the pork. Break it up and brown 5 minutes.",
    "Add the garlic and ginger and stir 30 seconds.",
    "Return the beans, pour in the sauce, and toss 2 minutes until everything is coated and glossy.",
    "Scatter with scallions and serve over rice."
  ],
  tips: [
    "Let the beans sit still in the hot pan. Constant stirring steams them; patience blisters them.",
    "Ground chicken or turkey works, though pork has the fat that makes this taste rich."
  ],
  makeAhead: null
},

{
  id: "lamb-chops-mint",
  title: "Pan-Seared Lamb Chops with Mint Gremolata",
  blurb: "A hard sear and a sharp green herb sauce. On the table in 30 minutes.",
  emoji: "🍖", protein: "Lamb", cuisine: "Mediterranean",
  totalTime: 30, activeTime: 30, difficulty: "Medium", servings: 4,
  plate: { protein: "Lamb chops", starch: null, veg: "Herb gremolata" },
  nutrition: { calories: 495, protein: 38, carbs: 4, fat: 36, fiber: 1 },
  tags: ["30-minutes", "low-carb", "gluten-free", "special-occasion", "high-protein"],
  seasons: ["spring"],
  ingredients: [
    { group: "Lamb", items: [
      "12 lamb rib chops, about 1 inch thick",
      "2 teaspoons kosher salt",
      "1 teaspoon black pepper",
      "1 tablespoon olive oil",
      "3 cloves garlic, smashed",
      "2 tablespoons butter",
      "3 sprigs rosemary"
    ]},
    { group: "Mint gremolata", items: [
      "1/2 cup finely chopped mint",
      "1/4 cup finely chopped parsley",
      "1 lemon, zested",
      "2 cloves garlic, minced",
      "1/3 cup olive oil",
      "1 tablespoon lemon juice",
      "1/2 teaspoon salt"
    ]}
  ],
  steps: [
    "Take the chops out of the fridge 30 minutes ahead and season them well on both sides.",
    "Stir all the gremolata ingredients together and set aside.",
    "Heat the oil in a heavy skillet over medium-high until it shimmers.",
    "Sear the chops in batches, 3 minutes on the first side without moving them.",
    "Flip and add the butter, garlic, and rosemary. Baste with the foaming butter for 2 minutes, until the chops read 130F for medium-rare.",
    "Rest on a warm plate 5 minutes.",
    "Spoon the mint gremolata over the chops just before serving."
  ],
  tips: [
    "Lamb rib chops are small and cook fast. Thirty seconds too long takes them from pink to grey.",
    "Serve with potatoes or a grain salad. The gremolata is good on everything on the plate."
  ],
  makeAhead: "Gremolata can be made two hours ahead; any longer and the mint darkens."
},

{
  id: "pork-chops-apple-cabbage",
  title: "Pork Chops with Braised Red Cabbage",
  blurb: "Sweet and sour cabbage cooks itself while you sear the chops.",
  emoji: "🥬", protein: "Pork", cuisine: "German",
  totalTime: 60, activeTime: 25, difficulty: "Easy", servings: 4,
  plate: { protein: "Pork chops", starch: null, veg: "Red cabbage and apple" },
  nutrition: { calories: 460, protein: 40, carbs: 26, fat: 22, fiber: 6 },
  tags: ["gluten-free", "low-carb", "make-ahead", "veggie-forward", "comfort"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Cabbage", items: [
      "1 small head red cabbage, shredded",
      "2 tablespoons butter",
      "1 onion, sliced",
      "2 apples, peeled and sliced",
      "1/3 cup apple cider vinegar",
      "1/3 cup apple cider",
      "3 tablespoons brown sugar",
      "1 teaspoon caraway seeds",
      "1 teaspoon kosher salt"
    ]},
    { group: "Chops", items: [
      "4 bone-in pork chops, 1 1/4 inches thick",
      "1 1/2 teaspoons kosher salt",
      "1 teaspoon black pepper",
      "1 tablespoon neutral oil",
      "2 tablespoons butter",
      "3 sprigs thyme"
    ]}
  ],
  steps: [
    "Melt the butter in a large pot over medium. Cook the onion 5 minutes, then add the cabbage, apples, vinegar, cider, brown sugar, caraway, and salt.",
    "Cover and cook on low 40 minutes, stirring every 10 minutes, until the cabbage is soft and glossy. Uncover for the last 10 minutes if it looks watery.",
    "Meanwhile, season the chops and let them sit at room temperature.",
    "Heat the oil in a heavy skillet over medium-high. Sear the chops 5 minutes without moving them.",
    "Flip, add the butter and thyme, and baste 4 to 5 minutes more until they read 145F.",
    "Rest the chops 8 minutes.",
    "Pile the cabbage on plates and set a chop on top, with any pan juices poured over."
  ],
  tips: [
    "The cabbage is even better the next day and reheats perfectly, so make it ahead if you can.",
    "Caraway is the flavor you recognize but can't name in good red cabbage. Worth buying a jar."
  ],
  makeAhead: "Cabbage keeps five days in the fridge."
},

{
  id: "beef-tacos-picadillo",
  title: "Beef Picadillo Tacos",
  blurb: "Ground beef simmered with tomato, warm spices, and a touch of sweetness. Not the seasoning packet.",
  emoji: "🌮", protein: "Beef", cuisine: "Mexican",
  totalTime: 35, activeTime: 25, difficulty: "Easy", servings: 5,
  plate: { protein: "Ground beef", starch: "Tortillas", veg: "Potato, carrot, tomato" },
  nutrition: { calories: 470, protein: 30, carbs: 40, fat: 21, fiber: 6 },
  tags: ["30-minutes", "budget", "kid-friendly", "dairy-free", "freezer-friendly"],
  seasons: ["all"],
  ingredients: [
    { group: "Picadillo", items: [
      "1 1/2 lb ground beef",
      "1 tablespoon olive oil",
      "1 onion, diced",
      "1 russet potato, cut into small dice",
      "1 carrot, diced small",
      "4 cloves garlic, minced",
      "1 (14.5 oz) can diced tomatoes",
      "2 tablespoons tomato paste",
      "1 1/2 teaspoons ground cumin",
      "1 teaspoon dried oregano",
      "1/2 teaspoon cinnamon",
      "1/3 cup raisins",
      "1/2 cup beef broth",
      "1 1/2 teaspoons kosher salt"
    ]},
    { group: "To serve", items: [
      "12 corn tortillas",
      "1 cup shredded lettuce",
      "1/2 cup crumbled queso fresco",
      "2 limes, cut into wedges",
      "Hot sauce"
    ]}
  ],
  steps: [
    "Heat the oil in a large skillet over medium-high. Brown the beef 7 minutes, breaking it up, then drain most of the fat.",
    "Add the onion, potato, and carrot and cook 8 minutes until the potato begins to soften.",
    "Add the garlic, cumin, oregano, and cinnamon and cook 1 minute until fragrant.",
    "Stir in the tomatoes, tomato paste, broth, raisins, and salt.",
    "Simmer 12 to 15 minutes, until the potatoes are tender and most of the liquid has cooked away.",
    "Taste for salt. It should be savory with a faint sweetness from the raisins and cinnamon.",
    "Serve in warm tortillas with lettuce, cheese, lime, and hot sauce."
  ],
  tips: [
    "Dice the potato small, about 1/4 inch, or it won't cook through in time.",
    "The raisins sound wrong and taste right. If you truly object, leave them out and add a teaspoon of sugar."
  ],
  makeAhead: "Keeps four days and freezes three months. Good over rice too."
},

{
  id: "bangers-onion-gravy",
  title: "Sausages with Onion Gravy and Mash",
  blurb: "Deeply browned onions cooked down into gravy, over sausages and a mountain of mashed potato.",
  emoji: "🥔", protein: "Pork", cuisine: "British",
  totalTime: 55, activeTime: 35, difficulty: "Easy", servings: 4,
  plate: { protein: "Pork sausages", starch: "Mashed potatoes", veg: "Onions" },
  nutrition: { calories: 690, protein: 30, carbs: 58, fat: 39, fiber: 6 },
  tags: ["comfort", "budget", "kid-friendly"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Mash", items: [
      "2 1/2 lb Yukon gold potatoes, peeled and cubed",
      "6 tablespoons butter",
      "3/4 cup warm milk",
      "1 1/2 teaspoons kosher salt"
    ]},
    { group: "Sausages and gravy", items: [
      "8 good pork sausages",
      "1 tablespoon neutral oil",
      "3 large onions, thinly sliced",
      "2 tablespoons butter",
      "1 teaspoon sugar",
      "3 tablespoons all-purpose flour",
      "2 1/2 cups beef broth",
      "1 tablespoon Worcestershire sauce",
      "1 teaspoon Dijon mustard",
      "4 sprigs thyme"
    ]}
  ],
  steps: [
    "Boil the potatoes in well-salted water 18 minutes until completely tender. Drain, steam dry, then mash with the butter, warm milk, and salt.",
    "Meanwhile, heat the oil in a large skillet over medium. Brown the sausages slowly, turning, about 12 minutes, until cooked through. Move to a plate.",
    "Add the butter, onions, and sugar to the same pan with a pinch of salt. Cook 18 to 20 minutes over medium-low, stirring often, until deep golden and jammy. This is the whole dish. Don't rush it.",
    "Stir in the flour and cook 2 minutes.",
    "Add the broth gradually, whisking, then the Worcestershire, mustard, and thyme. Simmer 8 minutes until thickened.",
    "Return the sausages to the gravy and warm through 3 minutes.",
    "Serve over the mash with the gravy poured generously over everything."
  ],
  tips: [
    "Onions need twenty real minutes to caramelize. High heat browns them without sweetening them.",
    "Warm the milk before it goes into the potatoes; cold milk makes gluey mash."
  ],
  makeAhead: "The gravy keeps three days and reheats well."
},

{
  id: "bacon-wrapped-pork-loin",
  title: "Bacon-Wrapped Pork Loin with Root Vegetables",
  blurb: "A whole roast with a bacon lattice that bastes it while it cooks. Impressive, and mostly hands-off.",
  emoji: "🥓", protein: "Pork", cuisine: "American",
  totalTime: 90, activeTime: 25, difficulty: "Medium", servings: 6,
  plate: { protein: "Pork loin", starch: "Potatoes and parsnips", veg: "Carrots" },
  nutrition: { calories: 600, protein: 45, carbs: 38, fat: 29, fiber: 7 },
  tags: ["one-pan", "special-occasion", "gluten-free", "leftovers", "comfort"],
  seasons: ["fall", "winter"],
  ingredients: [
    { group: "Pork", items: [
      "3 lb boneless pork loin roast",
      "10 slices bacon",
      "2 teaspoons kosher salt",
      "1 teaspoon black pepper",
      "1 tablespoon dried sage",
      "1 tablespoon brown sugar",
      "3 cloves garlic, minced"
    ]},
    { group: "Vegetables", items: [
      "1 1/2 lb baby potatoes, halved",
      "4 carrots, cut into chunks",
      "3 parsnips, cut into chunks",
      "1 onion, cut into wedges",
      "3 tablespoons olive oil",
      "1 teaspoon salt",
      "4 sprigs thyme"
    ]}
  ],
  steps: [
    "Heat the oven to 375F. Pat the loin dry and rub all over with the salt, pepper, sage, brown sugar, and garlic.",
    "Lay the bacon slices side by side, slightly overlapping, and set the loin across them. Wrap the bacon up and over, tucking the ends underneath so it holds.",
    "Toss the vegetables with the oil, salt, and thyme and spread them in a roasting pan.",
    "Set the pork on top of the vegetables, bacon seam side down.",
    "Roast 55 to 65 minutes, until the pork reads 145F at the center.",
    "If the bacon isn't crisp, run it under the broiler for 3 minutes, watching closely.",
    "Rest the roast 15 minutes on a board before slicing thickly. Toss the vegetables in the pan drippings and serve alongside."
  ],
  tips: [
    "Pork loin is very lean and goes from juicy to dry in about five minutes. A thermometer is the whole difference.",
    "Tucking the bacon ends underneath saves you from having to tie the roast."
  ],
  makeAhead: "Season and wrap the loin the night before; it roasts straight from the fridge with 10 minutes added."
}

]);
