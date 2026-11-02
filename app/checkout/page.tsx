"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";
import { formatINR } from "@/lib/utils";

type OrderType = "delivery" | "takeaway";
type PaymentMethod = "card" | "upi" | "cod" | "wallet";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    deliveryInstructions: "",
  });
  const [orderType, setOrderType] = useState<OrderType>("delivery");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const estimatedTax = Math.round(subtotal * 0.05);
  const deliveryFee = orderType === "delivery" && subtotal > 0 ? 49 : 0;
  const total = subtotal + estimatedTax + deliveryFee;

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "A valid email is required";
    if (!form.phone.trim() || !/^\+?[\d\s-]{8,}$/.test(form.phone))
      errs.phone = "A valid phone number is required";
    if (orderType === "delivery" && !form.address.trim())
      errs.address = "Delivery address is required";
    return errs;
  }

  function handleBlur(field: string) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate());
  }

  function handleChange(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) setErrors(validate());
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allTouched: Record<string, boolean> = {};
    Object.keys(form).forEach((k) => (allTouched[k] = true));
    setTouched(allTouched);
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0 && items.length > 0) {
      setSubmitted(true);
      clearCart();
    }
  }

  if (submitted) {
    return (
      <>
        <Navbar />
        <main style={{ background: "var(--cream)", minHeight: "80vh" }}>
          <div
            className="container"
            style={{
              padding: "3rem 1.5rem",
              textAlign: "center",
              maxWidth: 600,
            }}
          >
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🎉</div>
            <h1
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "2.5rem",
                fontWeight: 600,
                color: "var(--espresso)",
                marginBottom: "1rem",
              }}
            >
              Order Received!
            </h1>
            <div className="demo-banner" style={{ marginBottom: "1.5rem", justifyContent: "center" }}>
              ⚠️ &nbsp; This is a demo. No real order has been placed and no payment was processed.
            </div>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              Thank you, <strong>{form.name}</strong>! In a live implementation, your order would be confirmed and you would receive a confirmation at {form.email}.
            </p>
            <Link href="/menu" className="btn-primary">
              Back to Menu
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

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
            Checkout
          </h1>
          <div className="demo-banner" style={{ marginBottom: "2rem" }}>
            ⚠️ &nbsp; Demo mode — no real payment is collected and no order is placed.
          </div>

          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
              <p style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                Your cart is empty.
              </p>
              <Link href="/menu" className="btn-primary">Browse the Menu</Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{
                display: "grid",
                gridTemplateColumns: "1fr min(380px, 100%)",
                gap: "2rem",
                alignItems: "start",
              }}
            >
              {/* Left: Form fields */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {/* Customer info */}
                <section
                  style={{
                    background: "var(--white)",
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid var(--border)",
                    padding: "1.5rem",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      color: "var(--espresso)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    Your Details
                  </h2>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    {/* Name */}
                    <div style={{ gridColumn: "1 / -1" }}>
                      <label htmlFor="checkout-name" className="form-label">Full Name *</label>
                      <input
                        id="checkout-name"
                        type="text"
                        className="form-input"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        autoComplete="name"
                      />
                      {touched.name && errors.name && (
                        <p id="name-error" style={{ color: "#e53e3e", fontSize: "0.78rem", marginTop: "0.25rem", fontFamily: "var(--font-inter), sans-serif" }}>
                          {errors.name}
                        </p>
                      )}
                    </div>
                    {/* Email */}
                    <div>
                      <label htmlFor="checkout-email" className="form-label">Email *</label>
                      <input
                        id="checkout-email"
                        type="email"
                        className="form-input"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        aria-invalid={!!errors.email}
                        autoComplete="email"
                      />
                      {touched.email && errors.email && (
                        <p style={{ color: "#e53e3e", fontSize: "0.78rem", marginTop: "0.25rem", fontFamily: "var(--font-inter), sans-serif" }}>
                          {errors.email}
                        </p>
                      )}
                    </div>
                    {/* Phone */}
                    <div>
                      <label htmlFor="checkout-phone" className="form-label">Phone *</label>
                      <input
                        id="checkout-phone"
                        type="tel"
                        className="form-input"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        onBlur={() => handleBlur("phone")}
                        aria-invalid={!!errors.phone}
                        autoComplete="tel"
                      />
                      {touched.phone && errors.phone && (
                        <p style={{ color: "#e53e3e", fontSize: "0.78rem", marginTop: "0.25rem", fontFamily: "var(--font-inter), sans-serif" }}>
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </section>

                {/* Order type */}
                <section
                  style={{
                    background: "var(--white)",
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid var(--border)",
                    padding: "1.5rem",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      color: "var(--espresso)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    Order Type
                  </h2>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    {(["delivery", "takeaway"] as const).map((type) => (
                      <label
                        key={type}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.625rem",
                          padding: "0.875rem 1.25rem",
                          border: `1.5px solid ${orderType === type ? "var(--caramel)" : "var(--border)"}`,
                          borderRadius: "var(--radius)",
                          cursor: "pointer",
                          flex: 1,
                          background: orderType === type ? "rgba(185,130,84,0.06)" : "transparent",
                          transition: "all 0.2s",
                        }}
                      >
                        <input
                          type="radio"
                          name="order-type"
                          value={type}
                          checked={orderType === type}
                          onChange={() => setOrderType(type)}
                          style={{ accentColor: "var(--caramel)" }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            color: "var(--espresso)",
                            textTransform: "capitalize",
                          }}
                        >
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>

                  {orderType === "delivery" && (
                    <div style={{ marginTop: "1rem" }}>
                      <label htmlFor="checkout-address" className="form-label">Delivery Address *</label>
                      <textarea
                        id="checkout-address"
                        className="form-input"
                        rows={3}
                        placeholder="Street address, city, PIN code…"
                        value={form.address}
                        onChange={(e) => handleChange("address", e.target.value)}
                        onBlur={() => handleBlur("address")}
                        style={{ resize: "vertical" }}
                        aria-invalid={!!errors.address}
                        autoComplete="street-address"
                      />
                      {touched.address && errors.address && (
                        <p style={{ color: "#e53e3e", fontSize: "0.78rem", marginTop: "0.25rem", fontFamily: "var(--font-inter), sans-serif" }}>
                          {errors.address}
                        </p>
                      )}
                      <div style={{ marginTop: "1rem" }}>
                        <label htmlFor="checkout-instructions" className="form-label">Delivery Instructions (optional)</label>
                        <input
                          id="checkout-instructions"
                          type="text"
                          className="form-input"
                          placeholder="E.g. ring the bell, leave at door…"
                          value={form.deliveryInstructions}
                          onChange={(e) => handleChange("deliveryInstructions", e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </section>

                {/* Payment */}
                <section
                  style={{
                    background: "var(--white)",
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid var(--border)",
                    padding: "1.5rem",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      color: "var(--espresso)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Payment Method
                  </h2>
                  <div className="demo-banner" style={{ marginBottom: "1rem" }}>
                    🔒 &nbsp; No real payment is collected in this demo.
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                    {([
                      { id: "card", label: "Credit / Debit Card", icon: "💳" },
                      { id: "upi", label: "UPI", icon: "📱" },
                      { id: "wallet", label: "Digital Wallet", icon: "👛" },
                      { id: "cod", label: "Cash on Delivery", icon: "💵" },
                    ] as const).map((pm) => (
                      <label
                        key={pm.id}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          padding: "0.875rem 1.25rem",
                          border: `1.5px solid ${paymentMethod === pm.id ? "var(--caramel)" : "var(--border)"}`,
                          borderRadius: "var(--radius)",
                          cursor: "pointer",
                          background: paymentMethod === pm.id ? "rgba(185,130,84,0.06)" : "transparent",
                          transition: "all 0.2s",
                        }}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={pm.id}
                          checked={paymentMethod === pm.id}
                          onChange={() => setPaymentMethod(pm.id)}
                          style={{ accentColor: "var(--caramel)" }}
                        />
                        <span style={{ fontSize: "1.2rem" }}>{pm.icon}</span>
                        <span
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            color: "var(--espresso)",
                          }}
                        >
                          {pm.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right: Order summary */}
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
                    marginBottom: "1rem",
                    paddingBottom: "0.75rem",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  Order Summary
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1rem" }}>
                  {items.map((item) => (
                    <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.875rem", color: "var(--espresso)", fontWeight: 500 }}>
                          {item.name}{" "}
                          <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>
                            × {item.quantity}
                          </span>
                        </p>
                        {item.variant && (
                          <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.72rem", color: "var(--text-muted)" }}>
                            {item.variant}
                          </p>
                        )}
                      </div>
                      <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.875rem", color: "var(--espresso)", fontWeight: 500, flexShrink: 0 }}>
                        {formatINR(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
                <hr className="divider" style={{ marginBottom: "0.75rem" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.875rem", color: "var(--text-secondary)" }}>Subtotal</span>
                    <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.875rem", fontWeight: 600 }}>{formatINR(subtotal)}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.875rem", color: "var(--text-secondary)" }}>Tax (est.)</span>
                    <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.875rem" }}>{formatINR(estimatedTax)}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.875rem", color: "var(--text-secondary)" }}>Delivery Fee</span>
                    <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "0.875rem" }}>{deliveryFee === 0 ? "Free" : formatINR(deliveryFee)}</span>
                  </div>
                  <hr className="divider" />
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.2rem", fontWeight: 600, color: "var(--espresso)" }}>Total</span>
                    <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.3rem", fontWeight: 600, color: "var(--espresso)" }}>{formatINR(total)}</span>
                  </div>
                </div>
                <button
                  id="place-order-btn"
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", display: "flex", justifyContent: "center" }}
                >
                  Place Order
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
