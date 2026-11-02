export type Variant = {
  name: string;
  price: number;
};

export type AddOn = {
  id: string;
  name: string;
  price: number;
};

export type MenuItem = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isVegetarian?: boolean;
  isAvailable: boolean;
  variants?: Variant[];
  addOns?: AddOn[];
  featured?: boolean;
  stockQty?: number;
};

export const menuItems: MenuItem[] = [
  // ── COFFEE ──────────────────────────────────────────────
  {
    id: "c1",
    name: "Café Mocha",
    slug: "cafe-mocha",
    description:
      "A velvety blend of rich espresso, steamed milk, and dark chocolate, crowned with whipped cream and a dusting of cocoa.",
    price: 299,
    category: "Coffee",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    featured: true,
    stockQty: 50,
    variants: [
      { name: "Regular", price: 299 },
      { name: "Large", price: 349 },
    ],
    addOns: [
      { id: "ao1", name: "Extra Espresso Shot", price: 50 },
      { id: "ao2", name: "Oat Milk", price: 40 },
      { id: "ao3", name: "Hazelnut Syrup", price: 30 },
    ],
  },
  {
    id: "c2",
    name: "Classic Cappuccino",
    slug: "classic-cappuccino",
    description:
      "Perfectly balanced espresso, velvety steamed milk, and a thick layer of foam — timeless and elegant.",
    price: 249,
    category: "Coffee",
    image:
      "https://images.unsplash.com/photo-1561882468-9110d70d4940?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    stockQty: 60,
    variants: [
      { name: "Regular", price: 249 },
      { name: "Large", price: 299 },
    ],
    addOns: [
      { id: "ao1", name: "Extra Espresso Shot", price: 50 },
      { id: "ao2", name: "Oat Milk", price: 40 },
    ],
  },
  {
    id: "c3",
    name: "Cold Brew",
    slug: "cold-brew",
    description:
      "Slowly steeped for 12 hours, our cold brew delivers a smooth, rich flavour that's never bitter. Served over ice.",
    price: 329,
    category: "Coffee",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    stockQty: 30,
    variants: [
      { name: "Regular", price: 329 },
      { name: "Large", price: 379 },
    ],
    addOns: [
      { id: "ao2", name: "Oat Milk", price: 40 },
      { id: "ao4", name: "Vanilla Syrup", price: 30 },
    ],
  },
  {
    id: "c4",
    name: "Flat White",
    slug: "flat-white",
    description:
      "Two ristretto shots and silky microfoam milk — a bold yet smooth espresso experience for the discerning palate.",
    price: 279,
    category: "Coffee",
    image:
      "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    stockQty: 45,
    variants: [
      { name: "Regular", price: 279 },
      { name: "Large", price: 329 },
    ],
  },
  // ── PIZZA ────────────────────────────────────────────────
  {
    id: "p1",
    name: "Margherita Pizza",
    slug: "margherita-pizza",
    description:
      "Classic Neapolitan pizza with San Marzano tomato sauce, fresh mozzarella, basil, and a drizzle of extra-virgin olive oil.",
    price: 449,
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    featured: true,
    stockQty: 25,
    variants: [
      { name: 'Small (8")', price: 449 },
      { name: 'Medium (10")', price: 549 },
      { name: 'Large (12")', price: 649 },
    ],
    addOns: [
      { id: "ao5", name: "Extra Cheese", price: 80 },
      { id: "ao6", name: "Jalapeños", price: 40 },
      { id: "ao7", name: "Olives", price: 50 },
    ],
  },
  {
    id: "p2",
    name: "Spicy Arrabbiata Pizza",
    slug: "spicy-arrabbiata-pizza",
    description:
      "Fiery arrabbiata sauce, bell peppers, red chillies, onions, and mozzarella on a hand-stretched thin crust.",
    price: 499,
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    stockQty: 20,
    variants: [
      { name: 'Small (8")', price: 499 },
      { name: 'Medium (10")', price: 599 },
      { name: 'Large (12")', price: 699 },
    ],
  },
  {
    id: "p3",
    name: "BBQ Chicken Pizza",
    slug: "bbq-chicken-pizza",
    description:
      "Smoky BBQ sauce, tender grilled chicken, red onions, and mozzarella finished with a drizzle of garlic butter.",
    price: 599,
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
    isVegetarian: false,
    isAvailable: true,
    stockQty: 18,
    variants: [
      { name: 'Small (8")', price: 599 },
      { name: 'Medium (10")', price: 699 },
      { name: 'Large (12")', price: 799 },
    ],
  },
  {
    id: "p4",
    name: "Paneer Tikka Pizza",
    slug: "paneer-tikka-pizza",
    description:
      "Tandoori-marinated paneer, capsicum, and onions on a spiced tomato base — a desi twist on an Italian classic.",
    price: 549,
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    stockQty: 22,
    variants: [
      { name: 'Small (8")', price: 549 },
      { name: 'Medium (10")', price: 649 },
      { name: 'Large (12")', price: 749 },
    ],
  },
  // ── BURGERS ──────────────────────────────────────────────
  {
    id: "b1",
    name: "Crispy Paneer Burger",
    slug: "crispy-paneer-burger",
    description:
      "Golden-fried paneer patty, house slaw, chipotle mayo, pickled onions, and melted cheese in a toasted brioche bun.",
    price: 349,
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    featured: true,
    stockQty: 35,
    variants: [
      { name: "Single", price: 349 },
      { name: "Double Patty", price: 449 },
    ],
    addOns: [
      { id: "ao8", name: "Extra Cheese", price: 50 },
      { id: "ao9", name: "Bacon Strips", price: 80 },
      { id: "ao10", name: "Avocado", price: 70 },
    ],
  },
  {
    id: "b2",
    name: "Classic Chicken Burger",
    slug: "classic-chicken-burger",
    description:
      "Juicy grilled chicken breast, iceberg lettuce, tomato, pickles, and signature café sauce in a sesame bun.",
    price: 399,
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
    isVegetarian: false,
    isAvailable: true,
    stockQty: 30,
    variants: [
      { name: "Single", price: 399 },
      { name: "Double Patty", price: 499 },
    ],
  },
  {
    id: "b3",
    name: "Mushroom Swiss Burger",
    slug: "mushroom-swiss-burger",
    description:
      "Sautéed mixed mushrooms, Swiss cheese, caramelised onions, and truffle mayo in a toasted brioche bun.",
    price: 379,
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1596662951482-0bc5e5c61e25?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    stockQty: 28,
    variants: [
      { name: "Single", price: 379 },
      { name: "Double Patty", price: 479 },
    ],
  },
  {
    id: "b4",
    name: "Spicy Beef Burger",
    slug: "spicy-beef-burger",
    description:
      "100g hand-pressed beef patty, ghost pepper sauce, jalapeños, pickles, and cheddar in a toasted bun.",
    price: 449,
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=600&q=80",
    isVegetarian: false,
    isAvailable: true,
    stockQty: 20,
    variants: [
      { name: "Single", price: 449 },
      { name: "Double Patty", price: 549 },
    ],
  },
  // ── PASTA ────────────────────────────────────────────────
  {
    id: "pa1",
    name: "Alfredo Pasta",
    slug: "alfredo-pasta",
    description:
      "Al dente fettuccine in a luxuriously creamy Parmesan Alfredo sauce, with garlic butter and fresh herbs.",
    price: 379,
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    featured: true,
    stockQty: 25,
    variants: [
      { name: "Regular", price: 379 },
      { name: "Large", price: 449 },
    ],
    addOns: [
      { id: "ao11", name: "Grilled Chicken", price: 100 },
      { id: "ao12", name: "Extra Parmesan", price: 50 },
      { id: "ao13", name: "Sautéed Mushrooms", price: 70 },
    ],
  },
  {
    id: "pa2",
    name: "Arrabbiata Penne",
    slug: "arrabbiata-penne",
    description:
      "Penne in a bold, spicy tomato and garlic sauce with fresh chillies, basil, and a drizzle of olive oil.",
    price: 329,
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    stockQty: 30,
    variants: [
      { name: "Regular", price: 329 },
      { name: "Large", price: 399 },
    ],
  },
  {
    id: "pa3",
    name: "Pesto Chicken Pasta",
    slug: "pesto-chicken-pasta",
    description:
      "Rotini tossed in house-made basil pesto, cherry tomatoes, grilled chicken, and pine nuts.",
    price: 429,
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1473093226555-0d73c3ae9784?w=600&q=80",
    isVegetarian: false,
    isAvailable: true,
    stockQty: 22,
    variants: [
      { name: "Regular", price: 429 },
      { name: "Large", price: 499 },
    ],
  },
  {
    id: "pa4",
    name: "Rose Sauce Pasta",
    slug: "rose-sauce-pasta",
    description:
      "Penne in a delicate rose sauce — a perfect harmony of tomato and cream — with sun-dried tomatoes and herbs.",
    price: 399,
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1548921441-89c8bd86ffb7?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    stockQty: 20,
    variants: [
      { name: "Regular", price: 399 },
      { name: "Large", price: 469 },
    ],
  },
  // ── SANDWICHES ───────────────────────────────────────────
  {
    id: "s1",
    name: "Grilled Veggie Sandwich",
    slug: "grilled-veggie-sandwich",
    description:
      "Zucchini, capsicum, mushrooms, and pesto on sourdough — grilled to golden perfection with melted brie.",
    price: 299,
    category: "Sandwiches",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    stockQty: 40,
  },
  {
    id: "s2",
    name: "Smoked Chicken Club",
    slug: "smoked-chicken-club",
    description:
      "Triple-decker club with smoked chicken, avocado, crispy bacon, tomato, and house aioli on toasted white bread.",
    price: 359,
    category: "Sandwiches",
    image:
      "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=600&q=80",
    isVegetarian: false,
    isAvailable: true,
    stockQty: 25,
  },
  {
    id: "s3",
    name: "Caprese Panini",
    slug: "caprese-panini",
    description:
      "Fresh mozzarella, heirloom tomatoes, basil, and aged balsamic glaze in a pressed ciabatta panini.",
    price: 279,
    category: "Sandwiches",
    image:
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    stockQty: 35,
  },
  {
    id: "s4",
    name: "Tuna Melt",
    slug: "tuna-melt",
    description:
      "Albacore tuna salad with capers, celery, and cheddar cheese, grilled on whole grain bread.",
    price: 319,
    category: "Sandwiches",
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80",
    isVegetarian: false,
    isAvailable: true,
    stockQty: 20,
  },
  // ── FRIES ────────────────────────────────────────────────
  {
    id: "f1",
    name: "Peri-Peri Fries",
    slug: "peri-peri-fries",
    description:
      "Crispy hand-cut fries tossed in our signature peri-peri spice blend, served with sour cream dip.",
    price: 199,
    category: "Fries",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    featured: true,
    stockQty: 60,
    variants: [
      { name: "Regular", price: 199 },
      { name: "Large", price: 249 },
    ],
  },
  {
    id: "f2",
    name: "Classic Salted Fries",
    slug: "classic-salted-fries",
    description:
      "Golden, crispy hand-cut potato fries with sea salt — the perfect companion to any meal.",
    price: 169,
    category: "Fries",
    image:
      "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    stockQty: 80,
    variants: [
      { name: "Regular", price: 169 },
      { name: "Large", price: 219 },
    ],
  },
  {
    id: "f3",
    name: "Loaded Cheese Fries",
    slug: "loaded-cheese-fries",
    description:
      "Crispy fries smothered in molten cheddar sauce, spring onions, and pickled jalapeños.",
    price: 249,
    category: "Fries",
    image:
      "https://images.unsplash.com/photo-1630851840633-f96999247032?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    stockQty: 45,
    variants: [
      { name: "Regular", price: 249 },
      { name: "Large", price: 299 },
    ],
  },
  {
    id: "f4",
    name: "Truffle Parmesan Fries",
    slug: "truffle-parmesan-fries",
    description:
      "Thin-cut fries drizzled with truffle oil and topped with shaved Parmesan and fresh parsley.",
    price: 279,
    category: "Fries",
    image:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    stockQty: 30,
    variants: [
      { name: "Regular", price: 279 },
      { name: "Large", price: 329 },
    ],
  },
  // ── MOCKTAILS ────────────────────────────────────────────
  {
    id: "m1",
    name: "Mango Basil Smash",
    slug: "mango-basil-smash",
    description:
      "Fresh Alphonso mango purée, muddled basil, lemon juice, and soda — refreshing and vibrant.",
    price: 249,
    category: "Mocktails",
    image:
      "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    stockQty: 50,
  },
  {
    id: "m2",
    name: "Rose Lychee Cooler",
    slug: "rose-lychee-cooler",
    description:
      "Lychee juice, rose syrup, lemon, and sparkling water — floral, fruity, and effortlessly elegant.",
    price: 229,
    category: "Mocktails",
    image:
      "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    stockQty: 45,
  },
  {
    id: "m3",
    name: "Virgin Mojito",
    slug: "virgin-mojito",
    description:
      "Classic mojito reinvented — fresh mint, lime juice, raw sugar, and a splash of soda over crushed ice.",
    price: 199,
    category: "Mocktails",
    image:
      "https://images.unsplash.com/photo-1609951651556-5334e2706168?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    stockQty: 55,
    variants: [
      { name: "Classic", price: 199 },
      { name: "Strawberry", price: 219 },
      { name: "Watermelon", price: 219 },
    ],
  },
  {
    id: "m4",
    name: "Passionfruit Fizz",
    slug: "passionfruit-fizz",
    description:
      "Tangy passionfruit purée, a hint of ginger, lime zest, and chilled sparkling water.",
    price: 239,
    category: "Mocktails",
    image:
      "https://images.unsplash.com/photo-1587129308680-dd0e3d21b08c?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    stockQty: 40,
  },
  // ── CHINESE FOOD ─────────────────────────────────────────
  {
    id: "ch1",
    name: "Veg Hakka Noodles",
    slug: "veg-hakka-noodles",
    description:
      "Wok-tossed Hakka noodles with crisp vegetables, soy sauce, and aromatic sesame oil — a café classic.",
    price: 279,
    category: "Chinese Food",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    stockQty: 30,
    variants: [
      { name: "Half", price: 279 },
      { name: "Full", price: 379 },
    ],
  },
  {
    id: "ch2",
    name: "Chicken Manchurian",
    slug: "chicken-manchurian",
    description:
      "Crispy chicken in a tangy, spicy Manchurian sauce with ginger, garlic, spring onions, and bell peppers.",
    price: 359,
    category: "Chinese Food",
    image:
      "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80",
    isVegetarian: false,
    isAvailable: true,
    stockQty: 25,
    variants: [
      { name: "Dry", price: 359 },
      { name: "Gravy", price: 379 },
    ],
  },
  {
    id: "ch3",
    name: "Crispy Chilli Paneer",
    slug: "crispy-chilli-paneer",
    description:
      "Golden-fried paneer cubes tossed with bell peppers, onions, green chillies, and a tangy Indo-Chinese sauce.",
    price: 329,
    category: "Chinese Food",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    stockQty: 28,
    variants: [
      { name: "Dry", price: 329 },
      { name: "Gravy", price: 349 },
    ],
  },
  {
    id: "ch4",
    name: "Egg Fried Rice",
    slug: "egg-fried-rice",
    description:
      "Wok-tossed basmati rice with scrambled eggs, spring onions, soy sauce, and a touch of toasted sesame.",
    price: 249,
    category: "Chinese Food",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80",
    isVegetarian: false,
    isAvailable: true,
    stockQty: 35,
    variants: [
      { name: "Half", price: 249 },
      { name: "Full", price: 349 },
    ],
  },
  // ── DESSERTS ─────────────────────────────────────────────
  {
    id: "d1",
    name: "Chocolate Lava Cake",
    slug: "chocolate-lava-cake",
    description:
      "Warm, rich dark chocolate cake with a molten centre, served with a scoop of vanilla bean ice cream.",
    price: 279,
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    featured: true,
    stockQty: 30,
    addOns: [
      { id: "ao14", name: "Extra Ice Cream Scoop", price: 60 },
      { id: "ao15", name: "Caramel Drizzle", price: 40 },
      { id: "ao16", name: "Berry Compote", price: 50 },
    ],
  },
  {
    id: "d2",
    name: "New York Cheesecake",
    slug: "new-york-cheesecake",
    description:
      "Dense, creamy New York-style cheesecake on a buttered biscuit base, served with a seasonal berry coulis.",
    price: 259,
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    stockQty: 25,
  },
  {
    id: "d3",
    name: "Tiramisu",
    slug: "tiramisu",
    description:
      "Authentic Italian tiramisu with espresso-soaked ladyfingers, mascarpone cream, and a dusting of cocoa.",
    price: 289,
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    stockQty: 20,
  },
  {
    id: "d4",
    name: "Creme Brulee",
    slug: "creme-brulee",
    description:
      "Silky vanilla custard beneath a perfectly caramelised sugar crust — classic, refined, and irresistible.",
    price: 299,
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&q=80",
    isVegetarian: true,
    isAvailable: true,
    stockQty: 15,
  },
];

export const featuredItems = menuItems.filter((item) => item.featured);
