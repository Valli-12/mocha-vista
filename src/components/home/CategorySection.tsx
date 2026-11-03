import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";

export default function CategorySection() {
  return (
    <section className="py-12 md:py-16 bg-[#f5ebdd] border-t border-[#201b19]/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#b98254] block mb-2 font-sans">
            Explore By Flavour
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#201b19] tracking-tight mb-4">
            Browse by Category
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#5a4a3a] leading-relaxed">
            From sunrise flat whites to wood-fired pizzas and decadent desserts — discover the variety crafted daily in our kitchen.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/menu?category=${encodeURIComponent(cat.slug)}`}
              className="group relative block aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300"
              aria-label={`Browse ${cat.name}`}
              id={`category-${cat.id}`}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#201b19]/90 via-[#201b19]/35 to-transparent group-hover:from-[#201b19]/95 transition-all duration-300 flex items-end p-5">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#f5ebdd] mb-1">
                    {cat.name}
                  </h3>
                  <p className="font-sans text-[11px] text-[#f5ebdd]/75 line-clamp-1 tracking-wide">
                    {cat.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
