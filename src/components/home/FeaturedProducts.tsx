import Link from "next/link";
import { featuredItems } from "@/data/menu";
import ProductCard from "@/components/ui/ProductCard";
import { ArrowRight } from "lucide-react";

export default function FeaturedProducts() {
  return (
    <section id="featured" className="py-12 md:py-16 bg-[#f5ebdd]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#b98254] block mb-2 font-sans">
              Chef&apos;s Curated Selections
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#201b19] tracking-tight">
              Featured Favourites
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#5a4a3a] mt-3 max-w-lg leading-relaxed">
              A handpicked selection of our most loved preparations — balanced flavours crafted with authentic ingredients.
            </p>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#201b19] hover:text-[#b98254] group font-sans transition-colors self-start md:self-end"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Responsive Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
