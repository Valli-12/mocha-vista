"use client";

import Link from "next/link";
import Image from "next/image";
import { featuredItems } from "@/data/menu";
import { formatINR } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export default function FeaturedProducts() {
  const { addItem } = useCart();

  return (
    <section className="section" style={{ background: "var(--cream)" }}>
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "1.75rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <span className="section-label">Chef&apos;s Picks</span>
            <h2 className="section-title">Featured Favourites</h2>
            <p className="section-subtitle">
              A curated selection of the dishes our guests love most — each one
              prepared with care.
            </p>
          </div>
          <Link href="/menu" className="btn-secondary">
            View Full Menu
          </Link>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {featuredItems.map((item) => (
            <article key={item.id} className="product-card">
              {/* Image */}
              <Link href={`/menu/${item.slug}`} className="product-card-image" style={{ display: "block" }}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                {/* Diet badge */}
                {item.isVegetarian !== undefined && (
                  <div
                    aria-label={item.isVegetarian ? "Vegetarian" : "Non-vegetarian"}
                    style={{
                      position: "absolute",
                      top: "0.75rem",
                      left: "0.75rem",
                      background: "white",
                      borderRadius: "4px",
                      padding: "3px 6px",
                      border: `1.5px solid ${item.isVegetarian ? "#22863a" : "#cb2431"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      className={`diet-dot ${item.isVegetarian ? "veg" : "nonveg"}`}
                    />
                  </div>
                )}
              </Link>

              {/* Body */}
              <div className="product-card-body">
                <Link
                  href={`/menu/${item.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "var(--espresso)",
                      marginBottom: "0.375rem",
                      transition: "color 0.2s",
                    }}
                  >
                    {item.name}
                  </h3>
                </Link>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                    flex: 1,
                  }}
                >
                  {item.description.length > 90
                    ? item.description.slice(0, 88) + "…"
                    : item.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "auto",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      color: "var(--espresso)",
                    }}
                  >
                    {formatINR(item.price)}
                  </span>
                  <button
                    id={`add-to-cart-featured-${item.id}`}
                    className="btn-caramel"
                    onClick={() =>
                      addItem({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                        quantity: 1,
                      })
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
