"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Check, ShoppingBag, X } from "lucide-react";

export default function Toast() {
  const { toast, dismissToast } = useCart();

  if (!toast) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3.5 max-w-sm px-4 py-3 bg-[#201b19] text-[#f5ebdd] border border-[#b98254]/40 rounded-xl shadow-2xl backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#b98254] text-white shrink-0">
        <Check className="w-4 h-4 stroke-[2.5]" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs tracking-wider uppercase text-[#b98254] font-medium font-sans">
          {toast.message}
        </p>
        <p className="text-sm font-semibold truncate font-serif text-[#f5ebdd]">
          {toast.itemName}
        </p>
      </div>

      <Link
        href="/cart"
        className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#201b19] bg-[#f5ebdd] hover:bg-[#b98254] hover:text-white rounded-md transition-colors"
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        <span>Cart</span>
      </Link>

      <button
        onClick={dismissToast}
        aria-label="Dismiss notification"
        className="text-[#f5ebdd]/60 hover:text-[#f5ebdd] p-1 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

