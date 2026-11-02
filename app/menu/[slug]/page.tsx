import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { menuItems } from "@/data/menu";
import { formatINR } from "@/lib/utils";
import ProductDetailClient from "./ProductDetailClient";

export async function generateStaticParams() {
  return menuItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata(
  props: PageProps<"/menu/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const item = menuItems.find((i) => i.slug === slug);
  if (!item) return { title: "Not Found — Mocha Vista" };
  return {
    title: `${item.name} — Mocha Vista`,
    description: item.description,
  };
}

export default async function ProductPage(props: PageProps<"/menu/[slug]">) {
  const { slug } = await props.params;
  const item = menuItems.find((i) => i.slug === slug);

  if (!item) notFound();

  const related = menuItems
    .filter((i) => i.category === item.category && i.id !== item.id)
    .slice(0, 4);

  return (
    <>
      <Navbar />
      <main style={{ background: "var(--cream)", minHeight: "80vh" }}>
        {/* Breadcrumb */}
        <div
          style={{
            borderBottom: "1px solid var(--border)",
            background: "var(--cream)",
          }}
        >
          <div className="container" style={{ padding: "1rem 1.5rem" }}>
            <nav aria-label="Breadcrumb">
              <ol
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                  flexWrap: "wrap",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.82rem",
                  color: "var(--text-muted)",
                }}
              >
                <li>
                  <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li>
                  <Link href="/menu" style={{ color: "var(--text-muted)", textDecoration: "none" }}>
                    Menu
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li>
                  <Link
                    href={`/menu?category=${encodeURIComponent(item.category)}`}
                    style={{ color: "var(--text-muted)", textDecoration: "none" }}
                  >
                    {item.category}
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
                <li aria-current="page" style={{ color: "var(--espresso)", fontWeight: 500 }}>
                  {item.name}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Product Detail */}
        <div className="container" style={{ padding: "3rem 1.5rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Image */}
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                aspectRatio: "1/1",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              {item.isVegetarian !== undefined && (
                <div
                  aria-label={item.isVegetarian ? "Vegetarian" : "Non-vegetarian"}
                  style={{
                    position: "absolute",
                    top: "1rem",
                    left: "1rem",
                    background: "white",
                    borderRadius: "4px",
                    padding: "4px 8px",
                    border: `1.5px solid ${item.isVegetarian ? "#22863a" : "#cb2431"}`,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: item.isVegetarian ? "#22863a" : "#cb2431",
                  }}
                >
                  <span
                    className={`diet-dot ${item.isVegetarian ? "veg" : "nonveg"}`}
                  />
                  {item.isVegetarian ? "Veg" : "Non-Veg"}
                </div>
              )}
            </div>

            {/* Detail */}
            <ProductDetailClient item={item} />
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <div style={{ marginTop: "4rem" }}>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "1.75rem",
                  fontWeight: 600,
                  color: "var(--espresso)",
                  marginBottom: "1.5rem",
                }}
              >
                You May Also Like
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/menu/${rel.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <article
                      style={{
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius-lg)",
                        overflow: "hidden",
                        transition: "transform 0.25s, box-shadow 0.25s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "";
                        (e.currentTarget as HTMLElement).style.boxShadow = "";
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          aspectRatio: "4/3",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={rel.image}
                          alt={rel.name}
                          fill
                          sizes="250px"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div style={{ padding: "1rem" }}>
                        <h3
                          style={{
                            fontFamily: "var(--font-cormorant), serif",
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            color: "var(--espresso)",
                            marginBottom: "0.25rem",
                          }}
                        >
                          {rel.name}
                        </h3>
                        <p
                          style={{
                            fontFamily: "var(--font-cormorant), serif",
                            fontSize: "1rem",
                            color: "var(--caramel)",
                            fontWeight: 600,
                          }}
                        >
                          {formatINR(rel.price)}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
