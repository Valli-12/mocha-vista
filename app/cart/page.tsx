"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatINR } from "@/lib/utils";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();

  const estimatedTax = Math.round(subtotal * 0.05);
  const deliveryFee = subtotal > 0 ? 49 : 0;
  const total = subtotal + estimatedTax + deliveryFee;

  return (
    <main className="min-h-[80vh] bg-[#f5ebdd] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#b98254] block mb-1 font-sans">
              Your Order
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#201b19]">
              Shopping Bag
            </h1>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-medium font-sans">
            <span>🛒</span>
            <span>Demo Mode — simulated ordering without live payment</span>
          </div>
        </div>

        {items.length === 0 ? (
          /* Empty state */
          <div className="text-center py-20 px-6 bg-white/70 backdrop-blur-xs rounded-3xl border border-[#201b19]/10 shadow-sm max-w-2xl mx-auto">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#b98254]/15 text-[#b98254] mx-auto mb-6">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <h2 className="font-serif text-3xl font-semibold text-[#201b19] mb-3">
              Your Cart is Empty
            </h2>
            <p className="font-sans text-sm text-[#5a4a3a] max-w-sm mx-auto leading-relaxed mb-8">
              Looks like you haven&apos;t added any delicious bites or coffee yet. Explore our menu to start your order.
            </p>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#b98254] hover:bg-[#8f5e35] text-white text-xs font-bold tracking-widest uppercase transition-all shadow-md font-sans"
            >
              <span>Explore The Menu</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Items List */}
            <div className="lg:col-span-8 bg-white/80 backdrop-blur-xs rounded-3xl border border-[#201b19]/10 shadow-sm p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 border-b border-[#201b19]/10 mb-6">
                <h2 className="font-serif text-2xl font-semibold text-[#201b19]">
                  {items.length} {items.length === 1 ? "Item" : "Items"} Selected
                </h2>
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#b98254] hover:text-[#8f5e35] uppercase tracking-wider font-sans transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Add More Items</span>
                </Link>
              </div>

              <div className="divide-y divide-[#201b19]/10">
                {items.map((item) => (
                  <div key={item.id} className="py-6 first:pt-2 last:pb-2 flex flex-col sm:flex-row items-start gap-5">
                    {/* Thumbnail */}
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-[#f5ebdd] shrink-0 border border-[#201b19]/10">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-serif text-xl font-semibold text-[#201b19] mb-1">
                            {item.name}
                          </h3>
                          {item.variant && (
                            <p className="font-sans text-xs font-medium text-[#b98254]">
                              Size: {item.variant}
                            </p>
                          )}
                          {item.addOns && item.addOns.length > 0 && (
                            <p className="font-sans text-xs text-[#5a4a3a]">
                              + {item.addOns.join(", ")}
                            </p>
                          )}
                          {item.specialInstructions && (
                            <p className="font-sans text-xs text-[#9b8272] italic mt-1">
                              Note: {item.specialInstructions}
                            </p>
                          )}
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="font-serif text-xl font-semibold text-[#201b19]">
                            {formatINR(item.price * item.quantity)}
                          </p>
                          {item.quantity > 1 && (
                            <p className="font-sans text-[11px] text-[#9b8272]">
                              {formatINR(item.price)} each
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Controls row */}
                      <div className="flex items-center gap-6 mt-4">
                        {/* Stepper */}
                        <div className="inline-flex items-center border border-[#201b19]/20 rounded-lg bg-white overflow-hidden shadow-2xs">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-[#f5ebdd] text-[#201b19] transition-colors"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-10 text-center font-sans text-xs font-bold text-[#201b19]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-[#f5ebdd] text-[#201b19] transition-colors"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="inline-flex items-center gap-1 text-xs text-rose-700 hover:text-rose-900 font-sans transition-colors"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary Card */}
            <div className="lg:col-span-4 bg-white/90 backdrop-blur-xs rounded-3xl border border-[#201b19]/10 shadow-sm p-6 sm:p-8 sticky top-28">
              <h2 className="font-serif text-2xl font-semibold text-[#201b19] pb-4 border-b border-[#201b19]/10 mb-6">
                Order Summary
              </h2>

              <div className="space-y-3.5 font-sans text-sm mb-6">
                <div className="flex justify-between text-[#5a4a3a]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#201b19]">{formatINR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-[#5a4a3a]">
                  <span>Estimated GST (5%)</span>
                  <span>{formatINR(estimatedTax)}</span>
                </div>
                <div className="flex justify-between text-[#5a4a3a]">
                  <span>Packaging &amp; Delivery</span>
                  <span>{deliveryFee === 0 ? "Free" : formatINR(deliveryFee)}</span>
                </div>
                <div className="pt-4 border-t border-[#201b19]/10 flex justify-between items-baseline">
                  <span className="font-serif text-xl font-semibold text-[#201b19]">Total</span>
                  <span className="font-serif text-2xl font-bold text-[#201b19]">{formatINR(total)}</span>
                </div>
              </div>

              <div className="space-y-3 font-sans">
                <Link
                  href="/checkout"
                  className="w-full inline-flex items-center justify-center py-4 rounded-xl bg-[#b98254] hover:bg-[#8f5e35] text-white text-xs font-bold tracking-widest uppercase transition-all shadow-md active:scale-98"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  href="/menu"
                  className="w-full inline-flex items-center justify-center py-3.5 rounded-xl border border-[#201b19]/20 hover:border-[#201b19] text-[#201b19] text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
