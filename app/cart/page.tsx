"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";
import { formatINR } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();

  const estimatedTax = Math.round(subtotal * 0.05);
  const deliveryFee = subtotal > 0 ? 49 : 0;
  const total = subtotal + estimatedTax + deliveryFee;

  return (
    <>
      <Navbar />
      <main style={{ background: "var(--cream)", minHeight: "80vh" }}>
        <div className="container" style={{ padding: "2rem 1.5rem" }}>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "var(--espresso)",
              marginBottom: "0.5rem",
            }}
          >
            Your Cart
          </h1>
          <div className="demo-banner" style={{ marginBottom: "2rem" }}>
            🛒 &nbsp; This is a demo cart. No real orders are placed.
          </div>

          {items.length === 0 ? (
            /* Empty state */
            <div
              style={{
                textAlign: "center",
                padding: "5rem 1rem",
                background: "var(--white)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border)",
              }}
            >
              <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🧺</div>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "1.75rem",
                  color: "var(--espresso)",
                  marginBottom: "0.75rem",
                }}
              >
                Your cart is empty
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.9rem",
                  color: "var(--text-muted)",
                  marginBottom: "1.5rem",
                }}
              >
                Add some items from our menu to get started.
              </p>
              <Link href="/menu" className="btn-primary">
                Browse the Menu
              </Link>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr min(360px, 100%)",
                gap: "2rem",
                alignItems: "start",
              }}
            >
              {/* Items list */}
              <div
                style={{
                  background: "var(--white)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--border)",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                    paddingBottom: "0.75rem",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      color: "var(--espresso)",
                    }}
                  >
                    {items.length} {items.length === 1 ? "Item" : "Items"}
                  </h2>
                  <Link
                    href="/menu"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.825rem",
                      color: "var(--caramel)",
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    + Continue Shopping
                  </Link>
                </div>

                {items.map((item) => (
                  <div key={item.id} className="cart-item">
                    {/* Thumbnail */}
                    <div
                      style={{
                        position: "relative",
                        width: 80,
                        height: 80,
                        borderRadius: "var(--radius)",
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    {/* Details */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-cormorant), serif",
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "var(--espresso)",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {item.name}
                      </h3>
                      {item.variant && (
                        <p
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.78rem",
                            color: "var(--text-muted)",
                          }}
                        >
                          {item.variant}
                        </p>
                      )}
                      {item.addOns && item.addOns.length > 0 && (
                        <p
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.75rem",
                            color: "var(--text-muted)",
                          }}
                        >
                          + {item.addOns.join(", ")}
                        </p>
                      )}
                      {item.specialInstructions && (
                        <p
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.75rem",
                            color: "var(--text-muted)",
                            fontStyle: "italic",
                          }}
                        >
                          Note: {item.specialInstructions}
                        </p>
                      )}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                          marginTop: "0.75rem",
                        }}
                      >
                        {/* Qty */}
                        <div className="qty-control">
                          <button
                            id={`cart-decrease-${item.id}`}
                            className="qty-btn"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            −
                          </button>
                          <span className="qty-value" aria-live="polite">
                            {item.quantity}
                          </span>
                          <button
                            id={`cart-increase-${item.id}`}
                            className="qty-btn"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            +
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          id={`cart-remove-${item.id}`}
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.name}`}
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.78rem",
                            color: "#e53e3e",
                            padding: 0,
                            transition: "opacity 0.2s",
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Line price */}
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <p
                        style={{
                          fontFamily: "var(--font-cormorant), serif",
                          fontSize: "1.15rem",
                          fontWeight: 600,
                          color: "var(--espresso)",
                        }}
                      >
                        {formatINR(item.price * item.quantity)}
                      </p>
                      {item.quantity > 1 && (
                        <p
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.75rem",
                            color: "var(--text-muted)",
                          }}
                        >
                          {formatINR(item.price)} each
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div
                style={{
                  background: "var(--white)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--border)",
                  padding: "1.5rem",
                  position: "sticky",
                  top: "100px",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    color: "var(--espresso)",
                    marginBottom: "1.25rem",
                    paddingBottom: "0.75rem",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  Order Summary
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.875rem", color: "var(--text-secondary)" }}>Subtotal</span>
                    <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.875rem", fontWeight: 600, color: "var(--espresso)" }}>{formatINR(subtotal)}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                      Est. Tax (5%) <em style={{ fontWeight: 400, opacity: 0.7 }}>placeholder</em>
                    </span>
                    <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.875rem", color: "var(--espresso)" }}>{formatINR(estimatedTax)}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                      Delivery Fee <em style={{ fontWeight: 400, opacity: 0.7 }}>placeholder</em>
                    </span>
                    <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.875rem", color: "var(--espresso)" }}>{formatINR(deliveryFee)}</span>
                  </div>
                  <hr className="divider" />
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.2rem", fontWeight: 600, color: "var(--espresso)" }}>Total</span>
                    <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.3rem", fontWeight: 600, color: "var(--espresso)" }}>{formatINR(total)}</span>
                  </div>
                </div>

                <Link href="/checkout" className="btn-primary" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                  Proceed to Checkout
                </Link>
                <Link
                  href="/menu"
                  className="btn-secondary"
                  style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "0.75rem" }}
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
