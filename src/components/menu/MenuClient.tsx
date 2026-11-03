"use client";

import { useState, useMemo, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { menuItems } from "@/data/menu";
import { categories } from "@/data/categories";
import ProductCard from "@/components/ui/ProductCard";
import {
  Search,
  X,
  SlidersHorizontal,
  Sparkles,
  UtensilsCrossed,
  RotateCcw,
} from "lucide-react";

type SortOption = "default" | "price-asc" | "price-desc" | "name-asc";

export default function MenuClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Directly derive active category from URL query parameters (single source of truth)
  const selectedCategory = searchParams.get("category") || "All";
  const [search, setSearch] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [nonVegOnly, setNonVegOnly] = useState(false);
  const [sort, setSort] = useState<SortOption>("default");

  const categoryScrollRef = useRef<HTMLDivElement>(null);

  // Compute live counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: menuItems.length };
    for (const item of menuItems) {
      counts[item.category] = (counts[item.category] || 0) + 1;
    }
    return counts;
  }, []);

  const allCategories = useMemo(
    () => ["All", ...categories.map((c) => c.slug)],
    []
  );

  // Filtered and sorted menu items
  const filtered = useMemo(() => {
    let result = [...menuItems];

    if (selectedCategory !== "All") {
      result = result.filter((item) => item.category === selectedCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim();
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

  // Group items by category for the full "All" book view
  const isDefaultFullView =
    selectedCategory === "All" &&
    !search.trim() &&
    !vegOnly &&
    !nonVegOnly &&
    sort === "default";

  const groupedByCategory = useMemo(() => {
    if (!isDefaultFullView) return [];
    return categories
      .map((cat) => ({
        category: cat,
        items: menuItems.filter((item) => item.category === cat.slug),
      }))
      .filter((group) => group.items.length > 0);
  }, [isDefaultFullView]);

  function handleCategoryChange(cat: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (cat === "All") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    const query = params.toString();
    router.replace(`/menu${query ? `?${query}` : ""}`, { scroll: false });
  }

  function clearFilters() {
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

  // Active category metadata if a single category is chosen
  const activeCategoryMeta = categories.find((c) => c.slug === selectedCategory);

  return (
    <div className="pb-16 bg-[#f5ebdd] min-h-screen">
      {/* ── 1. PREMIUM MENU HERO BANNER ──────────────────────── */}
      <section className="relative min-h-[240px] md:min-h-[290px] flex items-center justify-center overflow-hidden bg-[#201b19] text-[#f5ebdd] px-6 py-12">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=85"
            alt="Mocha Vista café ambiance and espresso bar"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#201b19] via-[#201b19]/65 to-black/40" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-[0.22em] uppercase text-[#e5a968] mb-4 font-sans">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artisanal Kitchen & Espresso Bar</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">
            The Complete Menu
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#f5ebdd]/85 max-w-xl mx-auto leading-relaxed">
            From single-origin roasts and sourdough Neapolitan pizzas to brioche burgers and hand-rolled pasta.
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-6 pt-6 border-t border-white/10 text-xs font-sans text-[#f5ebdd]/75">
            <span className="flex items-center gap-1.5">
              <strong className="text-white font-bold">36</strong> Handcrafted Dishes
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <strong className="text-white font-bold">9</strong> Culinary Categories
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <strong className="text-white font-bold">100%</strong> Fresh Ingredients
            </span>
          </div>
        </div>
      </section>

      {/* ── 2. STICKY FILTER & SEARCH CONTROLS ──────────────── */}
      <div className="sticky top-[64px] md:top-[72px] z-30 bg-[#f5ebdd]/95 backdrop-blur-md border-b border-[#201b19]/10 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 space-y-3">
          {/* Horizontal Category Scroll Bar */}
          <div
            ref={categoryScrollRef}
            className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none font-sans"
            role="tablist"
            aria-label="Filter menu by category"
          >
            {allCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count = categoryCounts[cat] || 0;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isSelected}
                  id={`cat-filter-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                  onClick={() => handleCategoryChange(cat)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#201b19] text-[#f5ebdd] shadow-xs ring-2 ring-[#b98254]/40 scale-102"
                      : "bg-white/85 text-[#5a4a3a] border border-[#201b19]/8 hover:border-[#b98254]/50 hover:text-[#201b19] hover:bg-white"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isSelected
                        ? "bg-[#b98254] text-white"
                        : "bg-[#201b19]/8 text-[#685648]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search, Dietary & Sorting Toolbar */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 font-sans">
            {/* Search Input */}
            <div className="relative flex-1 min-w-[200px] sm:min-w-[260px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9b8272] pointer-events-none" />
              <input
                id="menu-search"
                type="search"
                placeholder="Search preparations, ingredients, roasts…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-9 py-2 rounded-xl border border-[#201b19]/12 bg-white text-xs sm:text-sm text-[#201b19] placeholder:text-[#9b8272] focus:outline-none focus:border-[#b98254] focus:ring-1 focus:ring-[#b98254] transition-all shadow-2xs"
                aria-label="Search menu items"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#9b8272] hover:text-[#201b19] rounded-md transition-colors"
                  aria-label="Clear search query"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Veg Only Toggle */}
            <button
              type="button"
              onClick={() => {
                setVegOnly(!vegOnly);
                setNonVegOnly(false);
              }}
              aria-pressed={vegOnly}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                vegOnly
                  ? "bg-[#1e6b2c] text-white border-[#1e6b2c] shadow-xs"
                  : "bg-white text-[#1e6b2c] border-[#1e6b2c]/30 hover:border-[#1e6b2c] shadow-2xs"
              }`}
            >
              <span className="flex items-center justify-center w-3 h-3 rounded-[2.5px] border border-current p-[1.5px] shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
              </span>
              <span>Veg Only</span>
            </button>

            {/* Non-Veg Toggle */}
            <button
              type="button"
              onClick={() => {
                setNonVegOnly(!nonVegOnly);
                setVegOnly(false);
              }}
              aria-pressed={nonVegOnly}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                nonVegOnly
                  ? "bg-[#b31d28] text-white border-[#b31d28] shadow-xs"
                  : "bg-white text-[#b31d28] border-[#b31d28]/30 hover:border-[#b31d28] shadow-2xs"
              }`}
            >
              <span className="flex items-center justify-center w-3 h-3 rounded-[2.5px] border border-current p-[1.5px] shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
              </span>
              <span>Non-Veg</span>
            </button>

            {/* Sort Select */}
            <div className="relative">
              <select
                id="menu-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                aria-label="Sort menu items"
                className="appearance-none pl-3 pr-8 py-2 rounded-xl border border-[#201b19]/12 bg-white text-xs font-medium text-[#201b19] focus:outline-none focus:border-[#b98254] focus:ring-1 focus:ring-[#b98254] cursor-pointer shadow-2xs"
              >
                <option value="default">Sort: Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
              </select>
              <SlidersHorizontal className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#9b8272] pointer-events-none" />
            </div>

            {/* Clear All Reset */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-[#8f5e35] hover:text-[#201b19] transition-colors ml-auto cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Active Filter Chips Strip */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 pt-1 font-sans text-xs">
              <span className="text-[11px] font-medium text-[#8a7263]">
                Active filters:
              </span>
              {selectedCategory !== "All" && (
                <button
                  type="button"
                  onClick={() => handleCategoryChange("All")}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#201b19]/8 text-[#201b19] hover:bg-[#201b19]/15 transition-colors font-medium text-[11px]"
                >
                  Category: {selectedCategory}
                  <X className="w-3 h-3" />
                </button>
              )}
              {search.trim() && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#201b19]/8 text-[#201b19] hover:bg-[#201b19]/15 transition-colors font-medium text-[11px]"
                >
                  Keyword: &quot;{search.trim()}&quot;
                  <X className="w-3 h-3" />
                </button>
              )}
              {vegOnly && (
                <button
                  type="button"
                  onClick={() => setVegOnly(false)}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors font-medium text-[11px]"
                >
                  Diet: Vegetarian
                  <X className="w-3 h-3" />
                </button>
              )}
              {nonVegOnly && (
                <button
                  type="button"
                  onClick={() => setNonVegOnly(false)}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 hover:bg-rose-200 transition-colors font-medium text-[11px]"
                >
                  Diet: Non-Vegetarian
                  <X className="w-3 h-3" />
                </button>
              )}
              {sort !== "default" && (
                <button
                  type="button"
                  onClick={() => setSort("default")}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#201b19]/8 text-[#201b19] hover:bg-[#201b19]/15 transition-colors font-medium text-[11px]"
                >
                  Sorted
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── 3. MAIN CATALOG PRESENTATION ────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        {/* If Default Full View: Group by Category Sections */}
        {isDefaultFullView ? (
          <div className="space-y-14">
            {groupedByCategory.map(({ category, items }) => (
              <section
                key={category.id}
                id={`section-${category.slug.replace(/\s+/g, "-").toLowerCase()}`}
                className="scroll-mt-36"
              >
                {/* Category Group Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 mb-6 border-b border-[#201b19]/10">
                  <div>
                    <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#b98254] font-sans">
                      Category Collection
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#201b19] tracking-tight mt-0.5">
                      {category.name}
                    </h2>
                    <p className="font-sans text-xs sm:text-sm text-[#5a4a3a] mt-1 max-w-xl">
                      {category.description}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#8a7263] font-sans shrink-0">
                    {items.length} {items.length === 1 ? "preparation" : "preparations"}
                  </span>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
                  {items.map((item) => (
                    <ProductCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          /* Focused Filtered Grid View */
          <div>
            {/* Header for Filtered Search/Category */}
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#201b19]/8 text-xs font-sans text-[#5a4a3a]">
              <div>
                <p>
                  Showing{" "}
                  <strong className="text-[#201b19] font-bold text-sm">
                    {filtered.length}
                  </strong>{" "}
                  {filtered.length === 1 ? "preparation" : "preparations"}
                  {selectedCategory !== "All" && (
                    <span> in <strong className="text-[#201b19]">{selectedCategory}</strong></span>
                  )}
                </p>
                {activeCategoryMeta && (
                  <p className="text-[#685648] text-xs mt-0.5">
                    {activeCategoryMeta.description}
                  </p>
                )}
              </div>
            </div>

            {/* Zero Results State */}
            {filtered.length === 0 ? (
              <div className="text-center py-20 px-6 bg-white/70 backdrop-blur-xs rounded-3xl border border-[#201b19]/10 max-w-lg mx-auto shadow-xs my-8">
                <div className="w-14 h-14 rounded-2xl bg-[#201b19]/8 flex items-center justify-center mx-auto mb-4 text-[#8f5e35]">
                  <UtensilsCrossed className="w-7 h-7" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-[#201b19] mb-2 tracking-tight">
                  No Dishes Found
                </h2>
                <p className="font-sans text-xs sm:text-sm text-[#5a4a3a] leading-relaxed mb-6 max-w-sm mx-auto">
                  We couldn&apos;t find any preparations matching your active filters. Try adjusting your search keyword or clearing dietary options.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#201b19] hover:bg-[#b98254] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 font-sans shadow-xs cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              </div>
            ) : (
              /* Filtered Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
                {filtered.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
