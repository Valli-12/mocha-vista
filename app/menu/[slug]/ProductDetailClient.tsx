"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatINR } from "@/lib/utils";
import type { MenuItem } from "@/data/menu";

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
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Category label */}
      <p
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "0.72rem",
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--caramel)",
        }}
      >
        {item.category}
      </p>

      {/* Name */}
      <h1
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 600,
          color: "var(--espresso)",
          lineHeight: 1.1,
          margin: 0,
        }}
      >
        {item.name}
      </h1>

      {/* Price */}
      <p
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "1.75rem",
          fontWeight: 600,
          color: "var(--espresso)",
        }}
      >
        {formatINR(effectivePrice)}
        {addOnTotal > 0 && (
          <span
            style={{
              fontSize: "1.1rem",
              color: "var(--caramel)",
              marginLeft: "0.5rem",
            }}
          >
            + {formatINR(addOnTotal)} add-ons
          </span>
        )}
      </p>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "0.95rem",
          lineHeight: 1.8,
          color: "var(--text-secondary)",
        }}
      >
        {item.description}
      </p>

      <hr className="divider" />

      {/* Variants */}
      {item.variants && item.variants.length > 0 && (
        <div>
          <label
            className="form-label"
            style={{ marginBottom: "0.75rem", display: "block" }}
          >
            Size / Variant
          </label>
          <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
            {item.variants.map((v) => (
              <button
                key={v.name}
                id={`variant-${v.name.replace(/\s+/g, "-").toLowerCase()}`}
                className={`filter-chip ${selectedVariant?.name === v.name ? "active" : ""}`}
                onClick={() => setSelectedVariant(v)}
                style={{ padding: "0.5rem 1.25rem" }}
              >
                {v.name}
                {v.price !== item.price && (
                  <span style={{ marginLeft: "0.375rem", opacity: 0.75 }}>
                    {formatINR(v.price)}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Add-ons */}
      {item.addOns && item.addOns.length > 0 && (
        <div>
          <label className="form-label" style={{ marginBottom: "0.75rem", display: "block" }}>
            Add-ons (optional)
          </label>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {item.addOns.map((ao) => (
              <label
                key={ao.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  cursor: "pointer",
                  padding: "0.625rem 0.875rem",
                  borderRadius: "var(--radius)",
                  border: `1.5px solid ${selectedAddOns.includes(ao.id) ? "var(--caramel)" : "var(--border)"}`,
                  background: selectedAddOns.includes(ao.id) ? "rgba(185,130,84,0.06)" : "transparent",
                  transition: "all 0.2s",
                }}
              >
                <input
                  type="checkbox"
                  id={`addon-${ao.id}`}
                  checked={selectedAddOns.includes(ao.id)}
                  onChange={() => toggleAddOn(ao.id)}
                  style={{ accentColor: "var(--caramel)" }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                    flex: 1,
                  }}
                >
                  {ao.name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.875rem",
                    color: "var(--caramel)",
                    fontWeight: 600,
                  }}
                >
                  + {formatINR(ao.price)}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Special instructions */}
      <div>
        <label htmlFor="special-instructions" className="form-label">
          Special Instructions (optional)
        </label>
        <textarea
          id="special-instructions"
          className="form-input"
          rows={3}
          placeholder="E.g. extra spicy, no onions, etc."
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          style={{ resize: "vertical" }}
        />
      </div>

      {/* Quantity + Add to Cart */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div className="qty-control" aria-label="Quantity selector">
          <button
            id="product-qty-decrease"
            className="qty-btn"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="qty-value" aria-live="polite">
            {quantity}
          </span>
          <button
            id="product-qty-increase"
            className="qty-btn"
            onClick={() => setQuantity(quantity + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button
          id="product-add-to-cart"
          className="btn-primary"
          style={{ flex: 1, minWidth: 180 }}
          onClick={handleAddToCart}
          disabled={!item.isAvailable}
        >
          {!item.isAvailable
            ? "Currently Unavailable"
            : added
            ? "✓ Added to Cart"
            : `Add to Cart — ${formatINR(lineTotal)}`}
        </button>
      </div>
    </div>
  );
}
