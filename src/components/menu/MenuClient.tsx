"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/data/menu";
import { categories } from "@/data/categories";
import { formatINR } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

type SortOption = "default" | "price-asc" | "price-desc" | "name-asc";

export default function MenuClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { addItem } = useCart();

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
    <>
      {/* Premium Menu Hero */}
<section
  className="menu-hero"
  style={{
    backgroundImage: `
      linear-gradient(
        90deg,
        rgba(24, 17, 13, 0.78),
        rgba(24, 17, 13, 0.48),
        rgba(24, 17, 13, 0.65)
      ),
      url('/coffee.jpg')
    `,
  }}
>
  <div className="menu-hero-content">
    <span className="menu-hero-label">Explore</span>

    <h1>Our Menu</h1>

    <p>
      From morning coffee to evening desserts — everything
      prepared with care and served with warmth.
    </p>
  </div>
</section>

      {/* Controls */}
      <div
        style={{
          background: "var(--cream)",
          borderBottom: "1px solid var(--border)",
          position: "sticky",
          top: 68,
          zIndex: 30,
        }}
      >
        <div
          className="container"
          style={{ padding: "1rem 1.5rem" }}
        >
          {/* Category chips */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              overflowX: "auto",
              paddingBottom: "0.75rem",
              scrollbarWidth: "none",
            }}
          >
            {allCategories.map((cat) => (
              <button
                key={cat}
                id={`cat-filter-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                className={`filter-chip ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search + Filters row */}
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {/* Search */}
            <div className="search-input-wrapper" style={{ flex: "1 1 240px" }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                id="menu-search"
                className="form-input"
                type="search"
                placeholder="Search dishes…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search menu"
              />
            </div>

            {/* Veg filter */}
            <button
              id="veg-filter-btn"
              className={`filter-chip ${vegOnly ? "active" : ""}`}
              onClick={() => { setVegOnly(!vegOnly); setNonVegOnly(false); }}
              style={{ borderColor: vegOnly ? undefined : "#22863a", color: vegOnly ? undefined : "#22863a" }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#22863a",
                  border: "1.5px solid #22863a",
                  flexShrink: 0,
                  display: "inline-block",
                }}
              />
              Veg Only
            </button>

            {/* Non-veg filter */}
            <button
              id="nonveg-filter-btn"
              className={`filter-chip ${nonVegOnly ? "active" : ""}`}
              onClick={() => { setNonVegOnly(!nonVegOnly); setVegOnly(false); }}
              style={{ borderColor: nonVegOnly ? undefined : "#cb2431", color: nonVegOnly ? undefined : "#cb2431" }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#cb2431",
                  border: "1.5px solid #cb2431",
                  flexShrink: 0,
                  display: "inline-block",
                }}
              />
              Non-Veg
            </button>

            {/* Sort */}
            <select
              id="menu-sort"
              className="form-input"
              style={{ width: "auto", paddingRight: "2rem", cursor: "pointer" }}
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              aria-label="Sort menu items"
            >
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A–Z</option>
            </select>

            {/* Clear */}
            {hasActiveFilters && (
              <button
                id="clear-filters-btn"
                className="filter-chip"
                onClick={clearFilters}
                style={{ color: "var(--caramel)", borderColor: "var(--caramel)" }}
              >
                ✕ Clear All
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      <div
        className="container"
        style={{ padding: "1.75rem 1.5rem 3rem" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.875rem",
              color: "var(--text-muted)",
            }}
          >
            Showing{" "}
            <strong style={{ color: "var(--espresso)" }}>
              {filtered.length}
            </strong>{" "}
            {filtered.length === 1 ? "item" : "items"}
            {selectedCategory !== "All" ? ` in ${selectedCategory}` : ""}
          </p>
        </div>

        {filtered.length === 0 ? (
          /* Empty state */
          <div
            style={{
              textAlign: "center",
              padding: "5rem 1rem",
              color: "var(--text-muted)",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "1.75rem",
                color: "var(--espresso)",
                marginBottom: "0.5rem",
              }}
            >
              No items found
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.9rem",
                marginBottom: "1.5rem",
              }}
            >
              Try a different search term or remove some filters.
            </p>
            <button className="btn-secondary" onClick={clearFilters}>
              Clear Filters
            </button>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {filtered.map((item) => (
              <article key={item.id} className="product-card">
                <Link
                  href={`/menu/${item.slug}`}
                  className="product-card-image"
                  style={{ display: "block" }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
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
                  {!item.isAvailable && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(32,27,25,0.65)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          color: "var(--cream)",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        Unavailable
                      </span>
                    </div>
                  )}
                </Link>
                <div className="product-card-body">
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--caramel)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.category}
                  </p>
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
                      }}
                    >
                      {item.name}
                    </h3>
                  </Link>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.83rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                      marginBottom: "1rem",
                      flex: 1,
                    }}
                  >
                    {item.description.length > 80
                      ? item.description.slice(0, 78) + "…"
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
                    {item.isAvailable ? (
                      <button
                        id={`add-to-cart-${item.id}`}
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
                        Add
                      </button>
                    ) : (
                      <span
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontSize: "0.78rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        Unavailable
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
