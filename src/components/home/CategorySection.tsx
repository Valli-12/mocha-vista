import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";

export default function CategorySection() {
  return (
    <section className="section" style={{ background: "var(--cream)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
          <span className="section-label">Explore</span>
          <h2 className="section-title">Browse by Category</h2>
          <p
            className="section-subtitle"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            Whatever you&apos;re in the mood for — from a warming espresso to a
            perfectly crafted burger.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "1rem",
          }}
        >
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/menu?category=${encodeURIComponent(cat.slug)}`}
              className="category-card"
              aria-label={`Browse ${cat.name}`}
              id={`category-${cat.id}`}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 640px) 50vw, 200px"
                style={{ objectFit: "cover" }}
              />
              <div className="category-card-overlay">
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "1.15rem",
                      fontWeight: 600,
                      color: "var(--cream)",
                      marginBottom: "0.15rem",
                    }}
                  >
                    {cat.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.72rem",
                      color: "rgba(245,235,221,0.7)",
                      letterSpacing: "0.04em",
                    }}
                  >
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
