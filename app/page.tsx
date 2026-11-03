import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CategorySection from "@/components/home/CategorySection";
import BrandStory from "@/components/home/BrandStory";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Link from "next/link";
import Image from "next/image";
import { Coffee, HeartHandshake, Home, ShoppingBag, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mocha Vista — Sip. Savour. Stay Awhile.",
  description:
    "From handcrafted single-origin coffee to stone-baked sourdough pizzas and artisan desserts. Experience little moments of indulgence at Mocha Vista.",
};

const whyChooseUs = [
  {
    id: "wc1",
    icon: HeartHandshake,
    title: "Carefully Prepared Favourites",
    desc: "Every dish is assembled with honest ingredients, artisanal technique, and a genuine passion for kitchen craft.",
  },
  {
    id: "wc2",
    icon: Coffee,
    title: "Coffee & Bites for Every Mood",
    desc: "From intense espresso extractions to soothing coolers, gourmet burgers, and rich Italian pasta for all appetites.",
  },
  {
    id: "wc3",
    icon: Home,
    title: "A Welcoming Sanctuary",
    desc: "Designed as an unhurried haven — warm ambient lighting, comfortable seating, and an open terrace for connection.",
  },
  {
    id: "wc4",
    icon: ShoppingBag,
    title: "Effortless Ordering",
    desc: "Seamless takeaway and doorstep delivery, or dine-in reservations made simple whenever you crave indulgence.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* A. Hero Section */}
      <HeroSection />

      {/* B. Featured Products (Chef's Picks) */}
      <FeaturedProducts />

      {/* C. Browse by Category */}
      <CategorySection />

      {/* D. Brand Story & Values */}
      <BrandStory />

      {/* E. Why Choose Us / The Mocha Vista Promise */}
      <section className="py-12 md:py-16 bg-[#f5ebdd] border-t border-[#201b19]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-8 md:mb-10">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#b98254] block mb-2 font-sans">
              Why Mocha Vista
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#201b19] tracking-tight">
              The Mocha Vista Promise
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="p-8 rounded-3xl bg-white border border-[#201b19]/10 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#f5ebdd] text-[#b98254] mb-6 shrink-0">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[#201b19] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#5a4a3a] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* F. Premium Menu Banner */}
      <section className="relative min-h-[360px] flex items-center justify-center overflow-hidden bg-[#201b19] text-[#f5ebdd] py-14 px-6">
        <Image
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=2000&q=90"
          alt="Freshly baked artisan pizza"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />

        {/* Caramel and Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#201b19]/90 via-[#8f5e35]/50 to-[#201b19]/90" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[0.28em] uppercase text-[#e8c89a] block mb-3 font-sans">
            A Taste Worth Exploring
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-[#f5ebdd] leading-tight mb-6">
            Discover Something Delicious
            <br />
            at Mocha Vista
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#f5ebdd]/85 max-w-xl mx-auto leading-relaxed mb-8">
            From single-origin beans and flaky pastries to rich pasta and wood-fired pies, find your next comforting indulgence.
          </p>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#f5ebdd] hover:bg-[#b98254] hover:text-white text-[#201b19] text-xs font-bold tracking-widest uppercase transition-all shadow-xl font-sans group"
          >
            <span>Explore Complete Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* G. Testimonials */}
      <TestimonialsSection />
    </main>
  );
}
