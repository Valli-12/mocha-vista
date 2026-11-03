"use client";

import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type CartItem = {
  id: string;
  productId?: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variant?: string;
  addOns?: string[];
  specialInstructions?: string;
};

export function getCartItemId(
  productId: string,
  variant?: string,
  addOns?: string[]
): string {
  const v = variant ? variant.trim().toLowerCase() : "standard";
  const a = addOns && addOns.length > 0 ? [...addOns].sort().join("-") : "none";
  return `${productId}__${v}__${a}`;
}

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "HYDRATE"; payload: CartItem[] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      }
      return { items: [...state.items, action.payload] };
    }
    case "REMOVE_ITEM":
      return {
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_QUANTITY":
      if (action.payload.quantity <= 0) {
        return {
          items: state.items.filter((item) => item.id !== action.payload.id),
        };
      }
      return {
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case "CLEAR_CART":
      return { items: [] };
    case "HYDRATE":
      return { items: action.payload };
    default:
      return state;
  }
}

type ToastData = {
  id: string;
  message: string;
  itemName?: string;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  toast: ToastData | null;
  dismissToast: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

const STORAGE_KEY = "mv_cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [toast, setToast] = useState<ToastData | null>(null);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as CartItem[];
        if (Array.isArray(parsed)) {
          dispatch({ type: "HYDRATE", payload: parsed });
        }
      }
    } catch {
      // Ignore storage errors in private browsing or SSR
    }
  }, []);

  // Persist to localStorage on every change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // Ignore storage errors
    }
  }, [state.items]);

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  const addItem = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
    setToast({
      id: `${item.id}-${Date.now()}`,
      message: `Added to cart`,
      itemName: item.name,
    });
  };

  // Auto-dismiss toast
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      setToast(null);
    }, 3200);
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem: (id) => dispatch({ type: "REMOVE_ITEM", payload: id }),
        updateQuantity: (id, quantity) =>
          dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } }),
        clearCart: () => dispatch({ type: "CLEAR_CART" }),
        totalItems,
        subtotal,
        toast,
        dismissToast: () => setToast(null),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
