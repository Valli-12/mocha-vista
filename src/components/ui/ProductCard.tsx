"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { MenuItem } from "@/data/menu";
import { formatINR } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import DietBadge from "./DietBadge";
import { Plus } from "lucide-react";

interface ProductCardProps {
  item: MenuItem;
  priority?: boolean;
}

export default function ProductCard({ item, priority = false }: ProductCardProps) {
  const { addItem } = useCart();

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
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-[#201b19]/10 shadow-xs hover:shadow-xl hover:border-[#b98254]/30 hover:-translate-y-1 transition-all duration-300">
      {/* Product Image Link */}
      <Link
        href={`/menu/${item.slug}`}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-[#f5ebdd]"
        aria-label={`View details for ${item.name}`}
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Dietary badge */}
        {item.isVegetarian !== undefined && (
          <div className="absolute top-3 left-3 z-10">
            <DietBadge isVegetarian={item.isVegetarian} />
          </div>
        )}

        {/* Unavailable overlay */}
        {!item.isAvailable && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#201b19]/70 backdrop-blur-xs">
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#f5ebdd] px-3 py-1 border border-[#f5ebdd]/30 rounded">
              Currently Unavailable
            </span>
          </div>
        )}
      </Link>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-5">
        <span className="font-sans text-[11px] font-semibold tracking-widest uppercase text-[#b98254] mb-1.5">
          {item.category}
        </span>

        <Link href={`/menu/${item.slug}`} className="group-hover:text-[#b98254] transition-colors">
          <h3 className="font-serif text-xl font-semibold text-[#201b19] line-clamp-1 mb-2">
            {item.name}
          </h3>
        </Link>

        <p className="font-sans text-xs text-[#5a4a3a] leading-relaxed line-clamp-2 mb-4 flex-1">
          {item.description}
        </p>

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-3 border-t border-[#201b19]/5 mt-auto">
          <span className="font-serif text-xl font-semibold text-[#201b19]">
            {formatINR(item.price)}
          </span>

          {item.isAvailable ? (
            <button
              onClick={handleAddToCart}
              id={`add-to-cart-${item.id}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-white bg-[#b98254] hover:bg-[#8f5e35] shadow-xs hover:shadow-sm active:scale-95 transition-all"
              aria-label={`Add ${item.name} to cart`}
            >
              <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Add</span>
            </button>
          ) : (
            <span className="text-xs font-medium text-[#9b8272]">
              Unavailable
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

