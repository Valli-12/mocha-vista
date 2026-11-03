"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatINR } from "@/lib/utils";
import { Check, ShieldCheck, ArrowLeft, Truck, Store, CreditCard, Smartphone, Wallet, Banknote } from "lucide-react";

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
    if (!form.name.trim()) errs.name = "Full name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "A valid email address is required";
    if (!form.phone.trim() || !/^\+?[\d\s-]{8,}$/.test(form.phone))
      errs.phone = "A valid phone number is required";
    if (orderType === "delivery" && !form.address.trim())
      errs.address = "Delivery address is required for delivery orders";
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
      <main className="min-h-[80vh] bg-[#f5ebdd] py-16 sm:py-24 px-6 flex items-center justify-center">
        <div className="max-w-lg w-full bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-[#201b19]/10 text-center">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 mx-auto mb-6">
            <Check className="w-10 h-10 stroke-[2.5]" />
          </div>

          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#b98254] block mb-2 font-sans">
            Order Simulated Successfully
          </span>

          <h1 className="font-serif text-4xl font-semibold text-[#201b19] mb-4">
            Order Received!
          </h1>

          <div className="p-3.5 mb-6 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-sans leading-relaxed">
            ⚠️ <strong>Frontend Demo Mode:</strong> No payment was debited and no actual restaurant order was transmitted.
          </div>

          <p className="font-sans text-sm text-[#5a4a3a] leading-relaxed mb-8">
            Thank you, <strong className="text-[#201b19]">{form.name}</strong>! In production, our kitchen would begin preparation and a receipt would be sent to <strong className="text-[#201b19]">{form.email}</strong>.
          </p>

          <Link
            href="/menu"
            className="inline-flex items-center justify-center w-full py-4 rounded-xl bg-[#201b19] hover:bg-[#b98254] text-[#f5ebdd] text-xs font-bold tracking-widest uppercase transition-all shadow-md font-sans"
          >
            Return to Menu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[80vh] bg-[#f5ebdd] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#b98254] block mb-1 font-sans">
              Checkout
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#201b19]">
              Complete Your Order
            </h1>
          </div>
          <Link
            href="/cart"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#b98254] hover:text-[#8f5e35] uppercase tracking-wider font-sans"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Cart</span>
          </Link>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20 px-6 bg-white/70 rounded-3xl border border-[#201b19]/10 max-w-lg mx-auto">
            <p className="font-sans text-sm text-[#5a4a3a] mb-6">
              Your cart is currently empty.
            </p>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#b98254] text-white text-xs font-bold tracking-widest uppercase font-sans"
            >
              Browse The Menu
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Form Details */}
            <div className="lg:col-span-7 space-y-8">
              {/* Customer Info */}
              <section className="bg-white/85 backdrop-blur-xs p-6 sm:p-8 rounded-3xl border border-[#201b19]/10 shadow-sm font-sans">
                <h2 className="font-serif text-2xl font-semibold text-[#201b19] mb-6">
                  1. Contact Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <label htmlFor="checkout-name" className="block text-xs font-semibold uppercase tracking-wider text-[#5a4a3a] mb-2">
                      Full Name *
                    </label>
                    <input
                      id="checkout-name"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#201b19] focus:outline-none focus:ring-1 transition-all ${
                        touched.name && errors.name
                          ? "border-rose-400 focus:ring-rose-400 bg-rose-50/20"
                          : "border-[#201b19]/15 focus:border-[#b98254] focus:ring-[#b98254] bg-[#f5ebdd]/10"
                      }`}
                    />
                    {touched.name && errors.name && (
                      <p className="text-xs text-rose-600 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="checkout-email" className="block text-xs font-semibold uppercase tracking-wider text-[#5a4a3a] mb-2">
                      Email Address *
                    </label>
                    <input
                      id="checkout-email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#201b19] focus:outline-none focus:ring-1 transition-all ${
                        touched.email && errors.email
                          ? "border-rose-400 focus:ring-rose-400 bg-rose-50/20"
                          : "border-[#201b19]/15 focus:border-[#b98254] focus:ring-[#b98254] bg-[#f5ebdd]/10"
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p className="text-xs text-rose-600 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="checkout-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#5a4a3a] mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="checkout-phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      onBlur={() => handleBlur("phone")}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#201b19] focus:outline-none focus:ring-1 transition-all ${
                        touched.phone && errors.phone
                          ? "border-rose-400 focus:ring-rose-400 bg-rose-50/20"
                          : "border-[#201b19]/15 focus:border-[#b98254] focus:ring-[#b98254] bg-[#f5ebdd]/10"
                      }`}
                    />
                    {touched.phone && errors.phone && (
                      <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>
              </section>

              {/* Order Mode (Delivery vs Takeaway) */}
              <section className="bg-white/85 backdrop-blur-xs p-6 sm:p-8 rounded-3xl border border-[#201b19]/10 shadow-sm font-sans">
                <h2 className="font-serif text-2xl font-semibold text-[#201b19] mb-6">
                  2. Fulfilment Preference
                </h2>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <label
                    className={`flex items-center gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      orderType === "delivery"
                        ? "border-[#b98254] bg-[#b98254]/5 text-[#201b19]"
                        : "border-[#201b19]/10 hover:border-[#201b19]/20 text-[#5a4a3a]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="orderType"
                      checked={orderType === "delivery"}
                      onChange={() => setOrderType("delivery")}
                      className="sr-only"
                    />
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-xs text-[#b98254]">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Delivery</p>
                      <p className="text-xs text-[#9b8272]">Direct to doorstep</p>
                    </div>
                  </label>

                  <label
                    className={`flex items-center gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      orderType === "takeaway"
                        ? "border-[#b98254] bg-[#b98254]/5 text-[#201b19]"
                        : "border-[#201b19]/10 hover:border-[#201b19]/20 text-[#5a4a3a]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="orderType"
                      checked={orderType === "takeaway"}
                      onChange={() => setOrderType("takeaway")}
                      className="sr-only"
                    />
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-xs text-[#b98254]">
                      <Store className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Takeaway</p>
                      <p className="text-xs text-[#9b8272]">Pick up at café</p>
                    </div>
                  </label>
                </div>

                {orderType === "delivery" && (
                  <div className="space-y-4 pt-2">
                    <div>
                      <label htmlFor="checkout-address" className="block text-xs font-semibold uppercase tracking-wider text-[#5a4a3a] mb-2">
                        Delivery Address *
                      </label>
                      <textarea
                        id="checkout-address"
                        rows={3}
                        placeholder="Apartment/Villa, Street address, Area, Landmark, PIN code"
                        value={form.address}
                        onChange={(e) => handleChange("address", e.target.value)}
                        onBlur={() => handleBlur("address")}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#201b19] focus:outline-none focus:ring-1 transition-all resize-none ${
                          touched.address && errors.address
                            ? "border-rose-400 focus:ring-rose-400 bg-rose-50/20"
                            : "border-[#201b19]/15 focus:border-[#b98254] focus:ring-[#b98254] bg-[#f5ebdd]/10"
                        }`}
                      />
                      {touched.address && errors.address && (
                        <p className="text-xs text-rose-600 mt-1">{errors.address}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="checkout-delivery-instructions" className="block text-xs font-semibold uppercase tracking-wider text-[#5a4a3a] mb-2">
                        Delivery Instructions (Optional)
                      </label>
                      <input
                        id="checkout-delivery-instructions"
                        type="text"
                        placeholder="E.g. Ring doorbell, leave with security guard..."
                        value={form.deliveryInstructions}
                        onChange={(e) => handleChange("deliveryInstructions", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#201b19]/15 text-sm text-[#201b19] focus:outline-none focus:border-[#b98254] focus:ring-1 focus:ring-[#b98254] bg-[#f5ebdd]/10 transition-all"
                      />
                    </div>
                  </div>
                )}
              </section>

              {/* Payment Method */}
              <section className="bg-white/85 backdrop-blur-xs p-6 sm:p-8 rounded-3xl border border-[#201b19]/10 shadow-sm font-sans">
                <h2 className="font-serif text-2xl font-semibold text-[#201b19] mb-6">
                  3. Payment Method
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4">
                  {[
                    { id: "card", label: "Credit / Debit Card", icon: CreditCard },
                    { id: "upi", label: "UPI / QR Code", icon: Smartphone },
                    { id: "wallet", label: "Digital Wallet", icon: Wallet },
                    { id: "cod", label: "Pay on Delivery", icon: Banknote },
                  ].map((pm) => {
                    const Icon = pm.icon;
                    const isSelected = paymentMethod === pm.id;
                    return (
                      <label
                        key={pm.id}
                        className={`flex items-center gap-3 p-3.5 rounded-2xl border-2 cursor-pointer transition-all ${
                          isSelected
                            ? "border-[#b98254] bg-[#b98254]/5 text-[#201b19]"
                            : "border-[#201b19]/10 hover:border-[#201b19]/20 text-[#5a4a3a]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          checked={isSelected}
                          onChange={() => setPaymentMethod(pm.id as PaymentMethod)}
                          className="sr-only"
                        />
                        <Icon className="w-5 h-5 text-[#b98254]" />
                        <span className="text-sm font-medium">{pm.label}</span>
                      </label>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2 text-xs text-[#9b8272] pt-2">
                  <ShieldCheck className="w-4 h-4 text-[#b98254]" />
                  <span>256-Bit SSL Encrypted simulated payment gateway</span>
                </div>
              </section>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-5 bg-white/95 backdrop-blur-xs p-6 sm:p-8 rounded-3xl border border-[#201b19]/10 shadow-lg sticky top-28">
              <h2 className="font-serif text-2xl font-semibold text-[#201b19] pb-4 border-b border-[#201b19]/10 mb-6">
                Your Order ({items.length})
              </h2>

              <div className="space-y-4 max-h-72 overflow-y-auto pr-1 divide-y divide-[#201b19]/5 mb-6 font-sans">
                {items.map((item) => (
                  <div key={item.id} className="pt-3 first:pt-0 flex justify-between items-start gap-4">
                    <div>
                      <p className="text-sm font-semibold text-[#201b19]">
                        {item.name} <span className="text-[#9b8272] font-normal">× {item.quantity}</span>
                      </p>
                      {item.variant && (
                        <p className="text-xs text-[#b98254] font-medium">{item.variant}</p>
                      )}
                    </div>
                    <span className="text-sm font-semibold text-[#201b19] shrink-0">
                      {formatINR(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 font-sans text-sm pb-6 border-b border-[#201b19]/10 mb-6">
                <div className="flex justify-between text-[#5a4a3a]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#201b19]">{formatINR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-[#5a4a3a]">
                  <span>Estimated Tax (5%)</span>
                  <span>{formatINR(estimatedTax)}</span>
                </div>
                <div className="flex justify-between text-[#5a4a3a]">
                  <span>{orderType === "delivery" ? "Delivery Fee" : "Takeaway Packaging"}</span>
                  <span>{deliveryFee === 0 ? "Free" : formatINR(deliveryFee)}</span>
                </div>
                <div className="pt-3 border-t border-[#201b19]/10 flex justify-between items-baseline">
                  <span className="font-serif text-xl font-semibold text-[#201b19]">Total</span>
                  <span className="font-serif text-3xl font-bold text-[#201b19]">{formatINR(total)}</span>
                </div>
              </div>

              <button
                type="submit"
                id="place-order-btn"
                className="w-full py-4 rounded-xl bg-[#b98254] hover:bg-[#8f5e35] text-white text-xs font-bold tracking-widest uppercase transition-all shadow-md active:scale-98 font-sans"
              >
                Place Simulated Order — {formatINR(total)}
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
