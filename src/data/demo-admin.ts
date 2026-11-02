// ── Sample admin demo data ──────────────────────────────────
// All records are sample data for UI demonstration only.

export type OrderStatus =
  | "Pending"
  | "Preparing"
  | "Ready"
  | "Delivered"
  | "Cancelled";

export type OrderType = "Delivery" | "Takeaway";

export type DemoOrder = {
  id: string;
  orderNumber: string;
  customer: string;
  items: { name: string; qty: number; price: number }[];
  total: number;
  status: OrderStatus;
  type: OrderType;
  createdAt: string;
};

export type InventoryItem = {
  id: string;
  name: string;
  category: string;
  stockQty: number;
  unit: string;
  reorderThreshold: number;
};

export const demoOrders: DemoOrder[] = [
  {
    id: "ord1",
    orderNumber: "MV-1001",
    customer: "Arjun Mehta",
    items: [
      { name: "Café Mocha", qty: 2, price: 299 },
      { name: "Margherita Pizza", qty: 1, price: 449 },
    ],
    total: 1047,
    status: "Delivered",
    type: "Delivery",
    createdAt: "2026-10-26T09:30:00",
  },
  {
    id: "ord2",
    orderNumber: "MV-1002",
    customer: "Priya Sharma",
    items: [
      { name: "Crispy Paneer Burger", qty: 1, price: 349 },
      { name: "Peri-Peri Fries", qty: 1, price: 199 },
      { name: "Virgin Mojito", qty: 2, price: 199 },
    ],
    total: 946,
    status: "Preparing",
    type: "Takeaway",
    createdAt: "2026-10-26T10:15:00",
  },
  {
    id: "ord3",
    orderNumber: "MV-1003",
    customer: "Rohan Das",
    items: [
      { name: "Alfredo Pasta", qty: 1, price: 379 },
      { name: "Classic Cappuccino", qty: 2, price: 249 },
    ],
    total: 877,
    status: "Pending",
    type: "Delivery",
    createdAt: "2026-10-26T11:00:00",
  },
  {
    id: "ord4",
    orderNumber: "MV-1004",
    customer: "Sneha Nair",
    items: [
      { name: "Chocolate Lava Cake", qty: 2, price: 279 },
      { name: "Cold Brew", qty: 2, price: 329 },
    ],
    total: 1216,
    status: "Ready",
    type: "Takeaway",
    createdAt: "2026-10-26T11:45:00",
  },
  {
    id: "ord5",
    orderNumber: "MV-1005",
    customer: "Vikram Iyer",
    items: [
      { name: "BBQ Chicken Pizza", qty: 1, price: 599 },
      { name: "Loaded Cheese Fries", qty: 1, price: 249 },
      { name: "Mango Basil Smash", qty: 1, price: 249 },
    ],
    total: 1097,
    status: "Delivered",
    type: "Delivery",
    createdAt: "2026-10-26T12:30:00",
  },
  {
    id: "ord6",
    orderNumber: "MV-1006",
    customer: "Ananya Kapoor",
    items: [
      { name: "Tiramisu", qty: 2, price: 289 },
      { name: "Flat White", qty: 2, price: 279 },
    ],
    total: 1136,
    status: "Cancelled",
    type: "Takeaway",
    createdAt: "2026-10-26T13:10:00",
  },
  {
    id: "ord7",
    orderNumber: "MV-1007",
    customer: "Kartik Reddy",
    items: [
      { name: "Veg Hakka Noodles", qty: 1, price: 279 },
      { name: "Crispy Chilli Paneer", qty: 1, price: 329 },
    ],
    total: 608,
    status: "Pending",
    type: "Delivery",
    createdAt: "2026-10-26T14:00:00",
  },
  {
    id: "ord8",
    orderNumber: "MV-1008",
    customer: "Meera Pillai",
    items: [
      { name: "Smoked Chicken Club", qty: 1, price: 359 },
      { name: "Truffle Parmesan Fries", qty: 1, price: 279 },
      { name: "Rose Lychee Cooler", qty: 1, price: 229 },
    ],
    total: 867,
    status: "Preparing",
    type: "Delivery",
    createdAt: "2026-10-26T14:45:00",
  },
];

export const inventoryItems: InventoryItem[] = [
  { id: "inv1", name: "Espresso Beans", category: "Coffee", stockQty: 12, unit: "kg", reorderThreshold: 5 },
  { id: "inv2", name: "Whole Milk", category: "Dairy", stockQty: 30, unit: "L", reorderThreshold: 10 },
  { id: "inv3", name: "Oat Milk", category: "Dairy", stockQty: 8, unit: "L", reorderThreshold: 10 },
  { id: "inv4", name: "Pizza Dough", category: "Pizza", stockQty: 15, unit: "kg", reorderThreshold: 8 },
  { id: "inv5", name: "Mozzarella Cheese", category: "Dairy", stockQty: 6, unit: "kg", reorderThreshold: 5 },
  { id: "inv6", name: "Paneer", category: "Dairy", stockQty: 4, unit: "kg", reorderThreshold: 5 },
  { id: "inv7", name: "Chicken Breast", category: "Proteins", stockQty: 10, unit: "kg", reorderThreshold: 5 },
  { id: "inv8", name: "Brioche Buns", category: "Bakery", stockQty: 40, unit: "pcs", reorderThreshold: 20 },
  { id: "inv9", name: "Potatoes", category: "Vegetables", stockQty: 25, unit: "kg", reorderThreshold: 10 },
  { id: "inv10", name: "Pasta (Fettuccine)", category: "Dry Goods", stockQty: 8, unit: "kg", reorderThreshold: 5 },
  { id: "inv11", name: "Cocoa Powder", category: "Dry Goods", stockQty: 3, unit: "kg", reorderThreshold: 2 },
  { id: "inv12", name: "Dark Chocolate", category: "Dry Goods", stockQty: 2, unit: "kg", reorderThreshold: 3 },
  { id: "inv13", name: "Fresh Basil", category: "Herbs", stockQty: 1, unit: "bunches", reorderThreshold: 3 },
  { id: "inv14", name: "Heavy Cream", category: "Dairy", stockQty: 5, unit: "L", reorderThreshold: 4 },
  { id: "inv15", name: "Sourdough Bread", category: "Bakery", stockQty: 12, unit: "loaves", reorderThreshold: 8 },
];

export const salesData = [
  { day: "Mon", sales: 18400 },
  { day: "Tue", sales: 22100 },
  { day: "Wed", sales: 19800 },
  { day: "Thu", sales: 25600 },
  { day: "Fri", sales: 31200 },
  { day: "Sat", sales: 38900 },
  { day: "Sun", sales: 34500 },
];

export const popularProducts = [
  { name: "Café Mocha", orders: 48, revenue: 14352 },
  { name: "Margherita Pizza", orders: 35, revenue: 15715 },
  { name: "Crispy Paneer Burger", orders: 42, revenue: 14658 },
  { name: "Alfredo Pasta", orders: 29, revenue: 10991 },
  { name: "Chocolate Lava Cake", orders: 38, revenue: 10602 },
  { name: "Peri-Peri Fries", orders: 61, revenue: 12139 },
];
