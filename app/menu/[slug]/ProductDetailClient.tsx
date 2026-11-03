"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatINR } from "@/lib/utils";
import type { MenuItem } from "@/data/menu";
import { Minus, Plus, ShoppingBag, Check } from "lucide-react";

export default function ProductDetailClient({ item }: { item: MenuItem }) {
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(
    item.variants ? item.variants[0] : null
  );
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState("");
  const [added, setAdded] = useState(false);

  const effectivePrice = selectedVariant ? selectedVariant.price : item.price;
  const addOnTotal = item.addOns
    ? item.addOns
        .filter((ao) => selectedAddOns.includes(ao.id))
        .reduce((sum, ao) => sum + ao.price, 0)
    : 0;
  const lineTotal = (effectivePrice + addOnTotal) * quantity;

  function toggleAddOn(id: string) {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  function handleAddToCart() {
    const addOnNames = item.addOns
      ? item.addOns
          .filter((ao) => selectedAddOns.includes(ao.id))
          .map((ao) => ao.name)
      : [];

    addItem({
      id: `${item.id}-${selectedVariant?.name ?? "default"}-${selectedAddOns.join("-")}`,
      name: item.name,
      price: effectivePrice + addOnTotal,
      image: item.image,
      quantity,
      variant: selectedVariant?.name,
      addOns: addOnNames,
      specialInstructions: instructions || undefined,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  }

  return (
    <div className="flex flex-col space-y-6 font-sans">
      {/* Category kicker */}
      <div>
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#b98254] block mb-1">
          {item.category}
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-[#201b19] tracking-tight leading-tight">
          {item.name}
        </h1>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="font-serif text-3xl sm:text-4xl font-bold text-[#201b19]">
          {formatINR(effectivePrice)}
        </span>
        {addOnTotal > 0 && (
          <span className="text-xs font-semibold uppercase tracking-wider text-[#b98254]">
            + {formatINR(addOnTotal)} in custom add-ons
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-[#5a4a3a] leading-relaxed">
        {item.description}
      </p>

      <div className="w-full h-px bg-[#201b19]/10" />

      {/* Size / Variant Options */}
      {item.variants && item.variants.length > 0 && (
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#5a4a3a] mb-3">
            Select Size / Variant
          </label>
          <div className="flex flex-wrap gap-2.5">
            {item.variants.map((v) => {
              const isSelected = selectedVariant?.name === v.name;
              return (
                <button
                  key={v.name}
                  id={`variant-${v.name.replace(/\s+/g, "-").toLowerCase()}`}
                  onClick={() => setSelectedVariant(v)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all border ${
                    isSelected
                      ? "bg-[#201b19] text-[#f5ebdd] border-[#201b19] shadow-xs"
                      : "bg-white text-[#5a4a3a] border-[#201b19]/15 hover:border-[#b98254]"
                  }`}
                >
                  <span>{v.name}</span>
                  {v.price !== item.price && (
                    <span className="ml-1.5 opacity-80 font-normal">
                      ({formatINR(v.price)})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Add-ons */}
      {item.addOns && item.addOns.length > 0 && (
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#5a4a3a] mb-3">
            Custom Add-ons (Optional)
          </label>
          <div className="space-y-2">
            {item.addOns.map((ao) => {
              const isChecked = selectedAddOns.includes(ao.id);
              return (
                <label
                  key={ao.id}
                  className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                    isChecked
                      ? "border-[#b98254] bg-[#b98254]/5 text-[#201b19]"
                      : "border-[#201b19]/10 hover:border-[#201b19]/25 text-[#5a4a3a] bg-white/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id={`addon-${ao.id}`}
                      checked={isChecked}
                      onChange={() => toggleAddOn(ao.id)}
                      className="w-4 h-4 rounded text-[#b98254] focus:ring-[#b98254] border-gray-300"
                    />
                    <span className="text-xs sm:text-sm font-medium">{ao.name}</span>
                  </div>
                  <span className="text-xs font-semibold text-[#b98254]">
                    + {formatINR(ao.price)}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      )}

      {/* Special Kitchen Notes */}
      <div>
        <label htmlFor="special-instructions" className="block text-xs font-bold uppercase tracking-wider text-[#5a4a3a] mb-2">
          Special Preparation Requests
        </label>
        <textarea
          id="special-instructions"
          rows={2}
          placeholder="E.g. Extra hot, no sugar, oat milk substitution..."
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-[#201b19]/15 text-xs sm:text-sm text-[#201b19] placeholder:text-[#9b8272] bg-white/70 focus:outline-none focus:border-[#b98254] focus:ring-1 focus:ring-[#b98254] transition-all resize-none"
        />
      </div>

      {/* Quantity Stepper & Add Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        {/* Stepper */}
        <div className="inline-flex items-center justify-between border border-[#201b19]/20 rounded-xl bg-white p-1 shrink-0">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#f5ebdd] text-[#201b19] transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-12 text-center font-bold text-sm text-[#201b19]" aria-live="polite">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#f5ebdd] text-[#201b19] transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Action Button */}
        <button
          onClick={handleAddToCart}
          id="product-add-to-cart"
          disabled={!item.isAvailable}
          className={`flex-1 py-4 px-6 rounded-xl text-xs font-bold tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2 ${
            !item.isAvailable
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : added
              ? "bg-emerald-700 text-white"
              : "bg-[#b98254] hover:bg-[#8f5e35] text-white hover:shadow-lg active:scale-98"
          }`}
        >
          {added ? (
            <>
              <Check className="w-4 h-4 stroke-[2.5]" />
              <span>Added to Bag!</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Cart — {formatINR(lineTotal)}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
