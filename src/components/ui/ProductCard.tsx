"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { MenuItem } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import DietBadge from "./DietBadge";
import { Plus, Check, Sparkles } from "lucide-react";

interface ProductCardProps {
  item: MenuItem;
  priority?: boolean;
}

export default function ProductCard({ item, priority = false }: ProductCardProps) {
  const { addItem, items } = useCart();
  const [imgSrc, setImgSrc] = useState(item.image);
  const [hasError, setHasError] = useState(false);
  const [addedRecently, setAddedRecently] = useState(false);

  // Keep track of how many of this item are currently in the cart
  const inCartCount = items
    .filter((cartItem) => cartItem.id === item.id)
    .reduce((total, cartItem) => total + cartItem.quantity, 0);

  // Clear "Added" badge state after 1.4 seconds
  useEffect(() => {
    if (!addedRecently) return;
    const timer = setTimeout(() => {
      setAddedRecently(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, [addedRecently]);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!item.isAvailable) return;

    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    });

    setAddedRecently(true);
  };

  return (
    <article className="group relative flex flex-col h-full bg-white rounded-2xl border border-[#201b19]/8 shadow-[0_2px_12px_-4px_rgba(32,27,25,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(32,27,25,0.12)] hover:border-[#b98254]/35 hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden">
      {/* Product Image Link & Badges */}
      <Link
        href={`/menu/${item.slug}`}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-[#e8decb]"
        aria-label={`View details for ${item.name}`}
      >
        <Image
          src={imgSrc}
          alt={item.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
          onError={() => {
            if (!hasError) {
              setHasError(true);
              setImgSrc("/coffee.jpg");
            }
          }}
        />

        {/* Ambient base vignette to ground image */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent pointer-events-none opacity-60 group-hover:opacity-85 transition-opacity" />

        {/* Dietary badge (Veg / Non-Veg) */}
        {item.isVegetarian !== undefined && (
          <div className="absolute top-3 left-3 z-10">
            <DietBadge isVegetarian={item.isVegetarian} showText className="shadow-sm" />
          </div>
        )}

        {/* Curated item badge (e.g. Bestseller, Must Try) - only when explicitly set */}
        {item.badge && (
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#201b19]/85 text-[#f5ebdd] backdrop-blur-md text-[10px] font-semibold tracking-wider uppercase border border-white/10 shadow-xs">
              <Sparkles className="w-2.5 h-2.5 text-[#e5a968]" />
              <span>{item.badge}</span>
            </span>
          </div>
        )}

        {/* Unavailable overlay */}
        {!item.isAvailable && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#201b19]/75 backdrop-blur-xs">
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#f5ebdd] px-3.5 py-1.5 border border-[#f5ebdd]/30 rounded-full bg-[#201b19]/60">
              Sold Out
            </span>
          </div>
        )}
      </Link>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-5">
        {/* Category & Variant Indicator */}
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="font-sans text-[10.5px] font-bold tracking-[0.2em] uppercase text-[#b98254]">
            {item.category}
          </span>
          {item.variants && item.variants.length > 1 && (
            <span className="text-[10px] font-medium text-[#9b8272] tracking-wide">
              {item.variants.length} Sizes
            </span>
          )}
        </div>

        {/* Dish Name */}
        <Link href={`/menu/${item.slug}`} className="block focus:outline-hidden">
          <h3 className="font-serif text-lg md:text-[21px] font-semibold text-[#201b19] tracking-tight group-hover:text-[#b98254] transition-colors duration-200 line-clamp-1 leading-snug">
            {item.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="font-sans text-xs text-[#5a4a3a] leading-relaxed line-clamp-2 mt-1.5 mb-4 flex-1">
          {item.description}
        </p>

        {/* Price & Action Row */}
        <div className="flex items-center justify-between pt-3.5 border-t border-[#201b19]/6 mt-auto">
          {/* Price with sans-serif currency glyph & bold serif number */}
          <div className="flex flex-col">
            <span className="text-[9.5px] uppercase font-bold tracking-widest text-[#9b8272] font-sans">
              Price
            </span>
            <div className="flex items-baseline gap-0.5 mt-0.5">
              <span className="font-sans text-xs font-bold text-[#8f5e35]">₹</span>
              <span className="font-serif text-2xl font-bold text-[#201b19] tracking-tight leading-none">
                {item.price}
              </span>
            </div>
          </div>

          {/* Action Button */}
          {item.isAvailable ? (
            <button
              type="button"
              onClick={handleAddToCart}
              id={`add-to-cart-${item.id}`}
              aria-label={`Add ${item.name} to cart`}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-200 active:scale-95 cursor-pointer ${
                addedRecently
                  ? "bg-[#2b6e3f] text-white shadow-xs ring-2 ring-[#2b6e3f]/25"
                  : "bg-[#201b19] hover:bg-[#b98254] text-white shadow-xs hover:shadow-md"
              }`}
            >
              {addedRecently ? (
                <>
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Add</span>
                  {inCartCount > 0 && (
                    <span className="ml-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-white/20 text-[10px] font-bold">
                      {inCartCount}
                    </span>
                  )}
                </>
              )}
            </button>
          ) : (
            <span className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#9b8272] bg-[#f5ebdd]/70">
              Sold Out
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
