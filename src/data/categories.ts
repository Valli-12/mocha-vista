export type Category = {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
};

export const categories: Category[] = [
  {
    id: "cat-coffee",
    name: "Coffee",
    slug: "Coffee",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80",
    description: "Expertly roasted, lovingly poured specialty espresso and brew",
  },
  {
    id: "cat-pizza",
    name: "Pizza",
    slug: "Pizza",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
    description: "Hand-stretched sourdough, stone-baked to crisp perfection",
  },
  {
    id: "cat-burgers",
    name: "Burgers",
    slug: "Burgers",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
    description: "Brioche buns, artisanal patties, and signature house sauces",
  },
  {
    id: "cat-pasta",
    name: "Pasta",
    slug: "Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
    description: "Al dente fresh pasta tossed in slowly simmered sauces",
  },
  {
    id: "cat-sandwiches",
    name: "Sandwiches",
    slug: "Sandwiches",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80",
    description: "Artisan sourdough and focaccia pressed with gourmet fillings",
  },
  {
    id: "cat-fries",
    name: "Fries",
    slug: "Fries",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80",
    description: "Golden hand-cut fries and seasoned crunch platters",
  },
  {
    id: "cat-chinese",
    name: "Chinese Food",
    slug: "Chinese Food",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80",
    description: "Wok-tossed noodles, dumplings, and bold aromatic sizzlers",
  },
  {
    id: "cat-mocktails",
    name: "Mocktails",
    slug: "Mocktails",
    image:
      "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=400&q=80",
    description: "Cold-pressed botanicals, sparkling tonics, and fruit fusions",
  },
  {
    id: "cat-desserts",
    name: "Desserts",
    slug: "Desserts",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80",
    description: "Warm Belgian waffles, rich cheesecakes, and molten fudge",
  },
];
