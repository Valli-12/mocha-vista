export type Category = {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
};

export const categories: Category[] = [
  {
    id: "cat-pizza",
    name: "Pizza",
    slug: "Pizza",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
    description: "Hand-stretched, stone-baked perfection",
  },
  {
    id: "cat-burgers",
    name: "Burgers",
    slug: "Burgers",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
    description: "Stacked, sauced and irresistible",
  },
  {
    id: "cat-pasta",
    name: "Pasta",
    slug: "Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
    description: "Al dente, every time",
  },
  {
    id: "cat-sandwiches",
    name: "Sandwiches",
    slug: "Sandwiches",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80",
    description: "Pressed and layered with flavour",
  },
  {
    id: "cat-fries",
    name: "Fries",
    slug: "Fries",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80",
    description: "Crispy sides for every mood",
  },
  {
    id: "cat-coffee",
    name: "Coffee",
    slug: "Coffee",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80",
    description: "Expertly crafted, lovingly served",
  },
  {
    id: "cat-mocktails",
    name: "Mocktails",
    slug: "Mocktails",
    image:
      "https://images.unsplash.com/photo-1546171753-97d7676e4602?w=400&q=80",
    description: "Refreshing sips, zero compromise",
  },
  {
    id: "cat-chinese",
    name: "Chinese Food",
    slug: "Chinese Food",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80",
    description: "Bold, wok-tossed flavours",
  },
  {
    id: "cat-desserts",
    name: "Desserts",
    slug: "Desserts",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80",
    description: "Sweet endings, perfectly crafted",
  },
];
