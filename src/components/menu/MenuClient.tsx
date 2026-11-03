"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { menuItems } from "@/data/menu";
import { categories } from "@/data/categories";
import ProductCard from "@/components/ui/ProductCard";
import { Search, X, SlidersHorizontal, Sparkles } from "lucide-react";

type SortOption = "default" | "price-asc" | "price-desc" | "name-asc";

export default function MenuClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialCategory = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [search, setSearch] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [nonVegOnly, setNonVegOnly] = useState(false);
  const [sort, setSort] = useState<SortOption>("default");

  const allCategories = ["All", ...categories.map((c) => c.slug)];

  const filtered = useMemo(() => {
    let result = [...menuItems];

    if (selectedCategory !== "All") {
      result = result.filter((item) => item.category === selectedCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      );
    }

    if (vegOnly) {
      result = result.filter((item) => item.isVegetarian === true);
    }

    if (nonVegOnly) {
      result = result.filter((item) => item.isVegetarian === false);
    }

    if (sort === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [selectedCategory, search, vegOnly, nonVegOnly, sort]);

  function handleCategoryChange(cat: string) {
    setSelectedCategory(cat);
    const params = new URLSearchParams(searchParams.toString());
    if (cat === "All") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    router.replace(`/menu?${params.toString()}`, { scroll: false });
  }

  function clearFilters() {
    setSelectedCategory("All");
    setSearch("");
    setVegOnly(false);
    setNonVegOnly(false);
    setSort("default");
    router.replace("/menu", { scroll: false });
  }

  const hasActiveFilters =
    selectedCategory !== "All" ||
    search.trim() !== "" ||
    vegOnly ||
    nonVegOnly ||
    sort !== "default";

  return (
    <div className="pb-12">
      {/* Premium Menu Hero Banner */}
      <section className="relative min-h-[220px] md:min-h-[260px] flex items-center justify-center overflow-hidden bg-[#201b19] text-[#f5ebdd] px-6 py-10 md:py-12">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=85"
            alt="Mocha Vista café menu background"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#201b19] via-[#201b19]/60 to-transparent" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.28em] uppercase text-[#b98254] mb-3 font-sans">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Handcrafted With Heart</span>
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-semibold mb-4 tracking-tight">
            Our Menu
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#f5ebdd]/80 max-w-lg mx-auto leading-relaxed">
            From single-origin beans and artisanal pastries to stone-baked sourdough pizzas, hand-pressed burgers, and fresh pasta.
          </p>
        </div>
      </section>

      {/* Sticky Filter Controls */}
      <div className="sticky top-[70px] z-30 bg-[#f5ebdd]/95 backdrop-blur-md border-b border-[#201b19]/10 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
          {/* Horizontal Category Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none font-sans">
            {allCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  id={`cat-filter-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all ${
                    isSelected
                      ? "bg-[#201b19] text-[#f5ebdd] shadow-sm"
                      : "bg-white/80 text-[#5a4a3a] border border-[#201b19]/10 hover:border-[#b98254] hover:text-[#201b19]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search & Dietary Filters Row */}
          <div className="flex flex-wrap items-center gap-3 font-sans">
            {/* Search Input */}
            <div className="relative flex-1 min-w-[220px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9b8272]" />
              <input
                id="menu-search"
                type="search"
                placeholder="Search coffee, pizzas, burgers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#201b19]/15 bg-white text-xs sm:text-sm text-[#201b19] placeholder:text-[#9b8272] focus:outline-none focus:border-[#b98254] focus:ring-1 focus:ring-[#b98254] transition-all"
                aria-label="Search menu items"
              />
            </div>

            {/* Veg Only Toggle */}
            <button
              onClick={() => {
                setVegOnly(!vegOnly);
                setNonVegOnly(false);
              }}
              className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
                vegOnly
                  ? "bg-emerald-700 text-white border-emerald-700 shadow-xs"
                  : "bg-white text-emerald-800 border-emerald-700/30 hover:border-emerald-700"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 border border-current" />
              <span>Veg Only</span>
            </button>

            {/* Non-Veg Toggle */}
            <button
              onClick={() => {
                setNonVegOnly(!nonVegOnly);
                setVegOnly(false);
              }}
              className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
                nonVegOnly
                  ? "bg-rose-700 text-white border-rose-700 shadow-xs"
                  : "bg-white text-rose-800 border-rose-700/30 hover:border-rose-700"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-600 border border-current" />
              <span>Non-Veg</span>
            </button>

            {/* Sort Select */}
            <div className="relative">
              <select
                id="menu-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                aria-label="Sort menu items"
                className="appearance-none pl-3.5 pr-8 py-2.5 rounded-xl border border-[#201b19]/15 bg-white text-xs font-medium text-[#201b19] focus:outline-none focus:border-[#b98254] cursor-pointer"
              >
                <option value="default">Sort: Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
              </select>
              <SlidersHorizontal className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#9b8272] pointer-events-none" />
            </div>

            {/* Clear All */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold text-[#b98254] hover:text-[#8f5e35] transition-colors ml-auto"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Catalog Results Grid */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <div className="flex items-center justify-between mb-6 text-xs font-sans text-[#5a4a3a]">
          <p>
            Showing{" "}
            <strong className="text-[#201b19] font-bold">
              {filtered.length}
            </strong>{" "}
            {filtered.length === 1 ? "item" : "items"}
            {selectedCategory !== "All" ? ` in ${selectedCategory}` : ""}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24 px-6 bg-white/60 backdrop-blur-xs rounded-3xl border border-[#201b19]/10 max-w-md mx-auto">
            <span className="text-4xl block mb-4">🔍</span>
            <h2 className="font-serif text-3xl font-semibold text-[#201b19] mb-2">
              No Dishes Found
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#5a4a3a] leading-relaxed mb-6">
              We couldn&apos;t find anything matching your search. Try resetting filters or browsing all categories.
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 rounded-lg bg-[#b98254] hover:bg-[#8f5e35] text-white text-xs font-bold uppercase tracking-wider transition-colors font-sans"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filtered.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
