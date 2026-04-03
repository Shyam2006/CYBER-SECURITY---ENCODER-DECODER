const RECIPES = [
  // ─── COCKTAILS ───────────────────────────────────────────────────────────────
  {
    id: 1,
    name: "Classic Mojito",
    type: "cocktail",
    tags: ["cocktail", "tropical", "classic"],
    badge: "Alcoholic",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&q=80",
    description: "A timeless Cuban cocktail with fresh mint, zesty lime, and a hint of sweetness balanced by white rum and sparkling soda.",
    difficulty: "Easy",
    time: "5 min",
    serves: "1",
    ingredients: [
      "60 ml white rum",
      "30 ml fresh lime juice",
      "2 tsp white sugar",
      "6–8 fresh mint leaves",
      "Soda water, to top",
      "Crushed ice",
      "Lime wheel & mint sprig to garnish"
    ],
    instructions: [
      "Place mint leaves and sugar in a highball glass. Gently muddle to release the mint oils — don't shred the leaves.",
      "Add lime juice and stir to dissolve the sugar.",
      "Fill the glass with crushed ice.",
      "Pour in the white rum and stir gently to combine.",
      "Top with chilled soda water and stir once more.",
      "Garnish with a lime wheel and a sprig of fresh mint. Serve immediately."
    ],
    tip: "Slap the mint sprig between your palms before garnishing to release extra aroma."
  },
  {
    id: 2,
    name: "Aperol Spritz",
    type: "cocktail",
    tags: ["cocktail", "classic"],
    badge: "Alcoholic",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
    description: "Italy's beloved aperitivo — vibrant orange Aperol meets crisp Prosecco and a splash of soda for the perfect pre-dinner drink.",
    difficulty: "Easy",
    time: "3 min",
    serves: "1",
    ingredients: [
      "90 ml Prosecco",
      "60 ml Aperol",
      "30 ml soda water",
      "Ice cubes",
      "Orange slice to garnish"
    ],
    instructions: [
      "Fill a large wine glass generously with ice cubes.",
      "Pour in the Prosecco first to preserve the bubbles.",
      "Add the Aperol.",
      "Top with a splash of soda water.",
      "Give it a very gentle stir.",
      "Garnish with a fresh orange slice and serve immediately."
    ],
    tip: "Always add Prosecco before Aperol for the best colour gradient effect."
  },
  {
    id: 3,
    name: "Old Fashioned",
    type: "cocktail",
    tags: ["cocktail", "classic"],
    badge: "Alcoholic",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80",
    description: "The quintessential whiskey cocktail — a bold, spirit-forward drink that lets the bourbon shine with a touch of sweetness and bitters.",
    difficulty: "Easy",
    time: "5 min",
    serves: "1",
    ingredients: [
      "60 ml bourbon or rye whiskey",
      "1 sugar cube (or 1 tsp simple syrup)",
      "2 dashes Angostura bitters",
      "1 dash orange bitters",
      "Large ice cube",
      "Orange peel & cocktail cherry to garnish"
    ],
    instructions: [
      "Place the sugar cube in a rocks glass and saturate with both bitters.",
      "Add a splash of water and muddle until the sugar is mostly dissolved.",
      "Fill the glass with a large ice cube.",
      "Pour the whiskey over the ice.",
      "Stir slowly for about 30 seconds to chill and dilute properly.",
      "Express an orange peel over the glass, run it around the rim, then add it as garnish along with a cherry."
    ],
    tip: "A single large ice cube melts more slowly, keeping your drink colder and less diluted."
  },
  {
    id: 4,
    name: "Piña Colada",
    type: "cocktail",
    tags: ["cocktail", "tropical"],
    badge: "Alcoholic",
    image: "https://images.unsplash.com/photo-1587223962930-cb7f31384c19?w=600&q=80",
    description: "Escape to the tropics with this creamy Puerto Rican classic — sweet pineapple, rich coconut cream, and smooth white rum blended to perfection.",
    difficulty: "Easy",
    time: "5 min",
    serves: "1",
    ingredients: [
      "60 ml white rum",
      "60 ml coconut cream",
      "120 ml fresh pineapple juice",
      "1 cup crushed ice",
      "Pineapple slice & maraschino cherry to garnish"
    ],
    instructions: [
      "Add the rum, coconut cream, pineapple juice, and crushed ice to a blender.",
      "Blend on high for 20–30 seconds until smooth and creamy.",
      "Pour into a chilled hurricane or tall glass.",
      "Garnish with a pineapple slice and a maraschino cherry.",
      "Serve immediately with a wide straw."
    ],
    tip: "Use frozen pineapple chunks instead of ice for an extra thick, fruity blend without dilution."
  },
  {
    id: 5,
    name: "Margarita",
    type: "cocktail",
    tags: ["cocktail", "classic"],
    badge: "Alcoholic",
    image: "https://images.unsplash.com/photo-1556855810-ac404aa91e85?w=600&q=80",
    description: "A balanced, zesty classic — tequila, fresh lime juice, and triple sec come together in one of the world's most beloved cocktails.",
    difficulty: "Easy",
    time: "5 min",
    serves: "1",
    ingredients: [
      "60 ml tequila blanco",
      "30 ml triple sec / Cointreau",
      "30 ml fresh lime juice",
      "Salt for rim",
      "Ice cubes",
      "Lime wheel to garnish"
    ],
    instructions: [
      "Run a lime wedge around the rim of a margarita glass, then dip into a plate of flaky salt.",
      "Fill a cocktail shaker with ice.",
      "Add tequila, triple sec, and fresh lime juice.",
      "Shake vigorously for 15 seconds until very cold.",
      "Strain into the prepared glass over fresh ice.",
      "Garnish with a lime wheel and serve."
    ],
    tip: "Chill your glass in the freezer for 10 minutes before serving for the best experience."
  },
  {
    id: 6,
    name: "Negroni",
    type: "cocktail",
    tags: ["cocktail", "classic"],
    badge: "Alcoholic",
    image: "https://images.unsplash.com/photo-1568644396922-5c3bfae12521?w=600&q=80",
    description: "A bittersweet Italian icon — equal parts gin, Campari, and sweet vermouth create a beautifully complex and aromatic cocktail.",
    difficulty: "Easy",
    time: "3 min",
    serves: "1",
    ingredients: [
      "30 ml gin",
      "30 ml Campari",
      "30 ml sweet red vermouth",
      "Large ice cube",
      "Orange peel to garnish"
    ],
    instructions: [
      "Add gin, Campari, and sweet vermouth to a mixing glass filled with ice.",
      "Stir for 30 seconds until well chilled and properly diluted.",
      "Strain into a rocks glass over a large ice cube.",
      "Express an orange peel over the drink to release the oils.",
      "Garnish with the orange peel and serve."
    ],
    tip: "A Negroni improves with time — batch-make a bottle and let it rest in the fridge for a week for a rounder, smoother result."
  },
  {
    id: 7,
    name: "Dark & Stormy",
    type: "cocktail",
    tags: ["cocktail", "tropical"],
    badge: "Alcoholic",
    image: "https://images.unsplash.com/photo-1560508180-03f285f67ded?w=600&q=80",
    description: "Bermuda's signature drink — spicy dark rum floated over zingy ginger beer with a squeeze of lime, bold and refreshing.",
    difficulty: "Easy",
    time: "3 min",
    serves: "1",
    ingredients: [
      "60 ml dark rum (Gosling's Black Seal preferred)",
      "120 ml ginger beer",
      "15 ml fresh lime juice",
      "Ice cubes",
      "Lime wedge to garnish"
    ],
    instructions: [
      "Fill a tall glass with ice cubes.",
      "Pour in the ginger beer and lime juice.",
      "Gently float the dark rum over the back of a spoon on top.",
      "Garnish with a lime wedge.",
      "Stir lightly just before drinking to combine."
    ],
    tip: "For the best float effect, pour the rum very slowly over the back of a bar spoon."
  },
  {
    id: 8,
    name: "Espresso Martini",
    type: "cocktail",
    tags: ["cocktail", "dessert", "classic"],
    badge: "Alcoholic",
    image: "https://images.unsplash.com/photo-1612197527762-8cfb6b618c97?w=600&q=80",
    description: "A coffee lover's cocktail — rich espresso meets vodka and coffee liqueur in this smooth, indulgent after-dinner treat.",
    difficulty: "Medium",
    time: "5 min",
    serves: "1",
    ingredients: [
      "50 ml vodka",
      "30 ml coffee liqueur (Kahlúa)",
      "30 ml freshly brewed espresso (cooled)",
      "5 ml simple syrup (optional)",
      "Ice cubes",
      "3 coffee beans to garnish"
    ],
    instructions: [
      "Brew a fresh espresso shot and let it cool for 2–3 minutes.",
      "Fill a cocktail shaker with ice.",
      "Add vodka, coffee liqueur, espresso, and simple syrup if using.",
      "Shake very vigorously for at least 15 seconds — the key to a frothy top.",
      "Double-strain into a chilled martini glass.",
      "Garnish with three coffee beans placed in the centre of the foam."
    ],
    tip: "The hardest shake you can manage creates the signature thick, creamy foam on top."
  },
  {
    id: 9,
    name: "Strawberry Daiquiri",
    type: "cocktail",
    tags: ["cocktail", "tropical", "dessert"],
    badge: "Alcoholic",
    image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=600&q=80",
    description: "A fruity, frozen twist on the classic daiquiri — fresh strawberries, white rum, and lime juice blended with ice for a vibrant summer treat.",
    difficulty: "Easy",
    time: "5 min",
    serves: "1",
    ingredients: [
      "60 ml white rum",
      "30 ml fresh lime juice",
      "15 ml simple syrup",
      "6–8 fresh strawberries (hulled)",
      "1 cup crushed ice",
      "Strawberry & lime to garnish"
    ],
    instructions: [
      "Add strawberries to the blender and blend briefly to puree.",
      "Add rum, lime juice, simple syrup, and crushed ice.",
      "Blend until smooth and slushy.",
      "Taste and adjust sweetness with more syrup if needed.",
      "Pour into a chilled coupe or hurricane glass.",
      "Garnish with a fresh strawberry on the rim and a lime wheel."
    ],
    tip: "Freeze the strawberries beforehand for a thicker, more intense flavour without watering it down."
  },

  // ─── MOCKTAILS ───────────────────────────────────────────────────────────────
  {
    id: 10,
    name: "Virgin Mojito",
    type: "mocktail",
    tags: ["mocktail", "classic", "tropical"],
    badge: "Alcohol-Free",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80",
    description: "All the freshness of a classic Mojito without the alcohol — crisp mint, zingy lime, and effervescent soda create a perfect refresher.",
    difficulty: "Easy",
    time: "5 min",
    serves: "1",
    ingredients: [
      "30 ml fresh lime juice",
      "2 tsp sugar or simple syrup",
      "8–10 fresh mint leaves",
      "Soda water, to top",
      "Crushed ice",
      "Lime wheel & mint sprig to garnish"
    ],
    instructions: [
      "Place mint leaves and sugar in a tall glass.",
      "Muddle gently to release the mint's essential oils.",
      "Add the lime juice and stir until the sugar dissolves.",
      "Fill the glass generously with crushed ice.",
      "Top with chilled soda water.",
      "Stir gently, then garnish with a lime wheel and mint sprig."
    ],
    tip: "Add a splash of coconut water instead of soda for a tropical twist."
  },
  {
    id: 11,
    name: "Sunrise Mocktail",
    type: "mocktail",
    tags: ["mocktail", "tropical"],
    badge: "Alcohol-Free",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600&q=80",
    description: "A visually stunning mocktail inspired by Tequila Sunrise — layers of orange juice and grenadine create a gorgeous gradient effect.",
    difficulty: "Easy",
    time: "5 min",
    serves: "1",
    ingredients: [
      "150 ml fresh orange juice",
      "60 ml pineapple juice",
      "15 ml grenadine syrup",
      "Ice cubes",
      "Orange slice & cherry to garnish"
    ],
    instructions: [
      "Fill a tall glass with ice cubes.",
      "Pour in the orange juice followed by the pineapple juice.",
      "Very slowly pour the grenadine down the side of the glass — it will sink to the bottom creating the 'sunrise' effect.",
      "Do not stir — let the gradient show.",
      "Garnish with an orange slice and a maraschino cherry.",
      "Serve immediately and stir just before drinking."
    ],
    tip: "The slower you pour the grenadine, the cleaner the colour gradient will be."
  },
  {
    id: 12,
    name: "Watermelon Lemonade Fizz",
    type: "mocktail",
    tags: ["mocktail", "tropical"],
    badge: "Alcohol-Free",
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=600&q=80",
    description: "A refreshing summer mocktail with juicy watermelon, tangy lemonade, and a sparkling finish — the ultimate backyard drink.",
    difficulty: "Easy",
    time: "10 min",
    serves: "2",
    ingredients: [
      "2 cups cubed fresh watermelon (seedless)",
      "60 ml fresh lemon juice",
      "30 ml simple syrup",
      "240 ml sparkling water",
      "Ice cubes",
      "Watermelon slice & lemon round to garnish",
      "Fresh mint optional"
    ],
    instructions: [
      "Blend watermelon chunks until smooth, then strain through a fine mesh sieve.",
      "In a pitcher, combine watermelon juice, lemon juice, and simple syrup. Stir well.",
      "Fill two tall glasses with ice.",
      "Pour the watermelon lemonade base into each glass (about 2/3 full).",
      "Top each glass with sparkling water.",
      "Garnish with a small watermelon wedge, lemon round, and fresh mint."
    ],
    tip: "Freeze watermelon cubes overnight and use them as ice cubes to avoid dilution."
  },
  {
    id: 13,
    name: "Mango Chilli Mocktail",
    type: "mocktail",
    tags: ["mocktail", "tropical"],
    badge: "Alcohol-Free",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
    description: "Bold and exciting — sweet mango nectar with a kick of fresh chilli and a lime tajin rim for a mocktail that keeps you coming back.",
    difficulty: "Easy",
    time: "5 min",
    serves: "1",
    ingredients: [
      "120 ml mango nectar or fresh mango juice",
      "15 ml fresh lime juice",
      "1/2 tsp agave or honey",
      "2–3 slices fresh red chilli (adjust to taste)",
      "60 ml sparkling water",
      "Ice cubes",
      "Tajin or chilli-lime salt for rim",
      "Mango slice & chilli to garnish"
    ],
    instructions: [
      "Rim a glass with lime juice, then dip into tajin or chilli-lime salt.",
      "Fill the glass with ice.",
      "In a shaker, combine mango juice, lime juice, agave, and chilli slices.",
      "Muddle the chilli lightly, then shake with ice for 10 seconds.",
      "Strain over the ice in the prepared glass.",
      "Top with sparkling water and garnish with a mango slice and chilli."
    ],
    tip: "Remove chilli seeds for less heat, or add a pinch of cayenne if you like it extra spicy."
  },
  {
    id: 14,
    name: "Blueberry Lavender Lemonade",
    type: "mocktail",
    tags: ["mocktail", "dessert"],
    badge: "Alcohol-Free",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    description: "Elegant and floral — blueberry puree meets lavender simple syrup and fresh lemon juice for a truly sophisticated alcohol-free drink.",
    difficulty: "Medium",
    time: "15 min",
    serves: "2",
    ingredients: [
      "1 cup fresh blueberries",
      "60 ml fresh lemon juice",
      "45 ml lavender simple syrup*",
      "240 ml still or sparkling water",
      "Ice cubes",
      "Lemon slice & blueberries to garnish",
      "*Simmer 1:1 sugar & water with 2 tsp dried lavender for 10 min, then strain"
    ],
    instructions: [
      "Blend blueberries until smooth. Push through a fine sieve to remove skins.",
      "Make lavender simple syrup: simmer equal parts sugar and water with dried lavender for 10 minutes, then strain and cool.",
      "In a pitcher, combine blueberry puree, lemon juice, and lavender syrup.",
      "Taste and adjust sweetness.",
      "Fill two glasses with ice and pour in the mixture.",
      "Top with still or sparkling water. Garnish with lemon slices and a few whole blueberries."
    ],
    tip: "The lavender syrup keeps in the fridge for up to 2 weeks — make a big batch in advance."
  },
  {
    id: 15,
    name: "Cucumber Mint Cooler",
    type: "mocktail",
    tags: ["mocktail", "classic"],
    badge: "Alcohol-Free",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80",
    description: "Clean, crisp, and cooling — fresh cucumber and mint with a hint of lime and soda make this the most refreshing drink for a warm day.",
    difficulty: "Easy",
    time: "5 min",
    serves: "1",
    ingredients: [
      "6–8 thin slices English cucumber",
      "8 fresh mint leaves",
      "20 ml fresh lime juice",
      "15 ml simple syrup",
      "150 ml tonic water or soda",
      "Ice cubes",
      "Cucumber ribbon & mint to garnish"
    ],
    instructions: [
      "In a tall glass, muddle cucumber slices and mint leaves gently.",
      "Add lime juice and simple syrup. Stir to combine.",
      "Fill the glass with ice cubes.",
      "Top with tonic water or soda and stir lightly.",
      "Use a vegetable peeler to create a long cucumber ribbon for garnish.",
      "Add the cucumber ribbon to the glass along with a sprig of fresh mint."
    ],
    tip: "Use tonic water instead of plain soda for a subtle bitter note that balances the sweetness beautifully."
  },
  {
    id: 16,
    name: "Strawberry Basil Smash",
    type: "mocktail",
    tags: ["mocktail", "dessert"],
    badge: "Alcohol-Free",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=600&q=80",
    description: "A sophisticated non-alcoholic smash — ripe strawberries and fragrant basil muddled together with lemon and soda for a restaurant-worthy drink.",
    difficulty: "Easy",
    time: "5 min",
    serves: "1",
    ingredients: [
      "5–6 fresh strawberries (hulled, halved)",
      "4 fresh basil leaves",
      "20 ml fresh lemon juice",
      "15 ml honey or simple syrup",
      "Soda water to top",
      "Crushed ice",
      "Strawberry half & basil leaf to garnish"
    ],
    instructions: [
      "Place strawberries, basil, and honey into a cocktail shaker.",
      "Muddle well until the strawberries release their juices and basil is fragrant.",
      "Add lemon juice and a handful of ice.",
      "Shake vigorously for 10 seconds.",
      "Double-strain into a glass filled with crushed ice.",
      "Top with soda water. Garnish with a strawberry half and a basil leaf."
    ],
    tip: "Thai basil adds a more exotic, anise-like flavour if you want something different from Italian basil."
  },
  {
    id: 17,
    name: "Coconut Pineapple Fizz",
    type: "mocktail",
    tags: ["mocktail", "tropical", "dessert"],
    badge: "Alcohol-Free",
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&q=80",
    description: "A tropical paradise in a glass — creamy coconut milk meets sweet pineapple juice with a fizzy finish for the ultimate beach drink.",
    difficulty: "Easy",
    time: "5 min",
    serves: "1",
    ingredients: [
      "90 ml coconut milk",
      "90 ml pineapple juice",
      "10 ml fresh lime juice",
      "10 ml simple syrup",
      "60 ml sparkling water",
      "Crushed ice",
      "Pineapple wedge & toasted coconut to garnish"
    ],
    instructions: [
      "In a shaker, combine coconut milk, pineapple juice, lime juice, and simple syrup.",
      "Add ice and shake for 10 seconds.",
      "Fill a glass with crushed ice.",
      "Strain the mixture into the glass.",
      "Top with sparkling water and stir gently.",
      "Garnish with a pineapple wedge and a sprinkle of toasted shredded coconut."
    ],
    tip: "Toast the coconut in a dry pan over medium heat for 2 minutes for a nutty, caramelised garnish."
  },
  {
    id: 18,
    name: "Spiced Apple Cider Punch",
    type: "mocktail",
    tags: ["mocktail", "classic", "dessert"],
    badge: "Alcohol-Free",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&q=80",
    description: "Warm autumn in a glass — spiced apple cider with cinnamon, star anise, and ginger, served warm or chilled for year-round enjoyment.",
    difficulty: "Easy",
    time: "15 min",
    serves: "4",
    ingredients: [
      "1 litre fresh apple cider",
      "1 cinnamon stick",
      "3 star anise",
      "4 cloves",
      "1 inch fresh ginger (sliced)",
      "30 ml fresh lemon juice",
      "2 tbsp honey",
      "Apple slice & cinnamon to garnish"
    ],
    instructions: [
      "In a saucepan over medium heat, combine apple cider with cinnamon stick, star anise, cloves, and ginger.",
      "Bring to a gentle simmer (do not boil).",
      "Simmer for 10 minutes to infuse the spices.",
      "Remove from heat and add honey and lemon juice. Stir well.",
      "Strain through a fine sieve.",
      "Serve warm in mugs, or cool completely and serve over ice. Garnish with apple slices and a cinnamon stick."
    ],
    tip: "Make a large batch and refrigerate for up to 5 days — it actually tastes better after the flavours meld overnight."
  }
];
