import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CategorySection from "@/components/home/CategorySection";
import BrandStory from "@/components/home/BrandStory";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mocha Vista — Sip. Savour. Stay Awhile.",
  description:
    "From handcrafted coffee to irresistible bites, discover little moments of indulgence at Mocha Vista. Your everyday escape, served beautifully.",
};

const whyChooseUs = [
  {
    id: "wc1",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Carefully Prepared Favourites",
    desc: "Every item on our menu is prepared with attention and care. We believe great food starts with honest ingredients and a genuine love for the craft.",
  },
  {
    id: "wc2",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    title: "Coffee & Food for Every Mood",
    desc: "From a strong flat white to a refreshing mocktail, from a light sandwich to a hearty pizza — our menu is designed for every appetite and occasion.",
  },
  {
    id: "wc3",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "A Welcoming Café Experience",
    desc: "Mocha Vista is designed to be your comfortable corner — a space that feels warm and unhurried whether you are working, catching up, or simply pausing.",
  },
  {
    id: "wc4",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Convenient Ordering Options",
    desc: "Order online for delivery or takeaway, or visit us in person. We make it easy to enjoy Mocha Vista however you like, whenever you like.",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* A. Hero */}
        <HeroSection />

        {/* B. Featured Products */}
        <FeaturedProducts />

        {/* C. Browse by Category */}
        <CategorySection />

        {/* D. Brand Story */}
        <BrandStory />

        {/* E. Why Choose Us */}
        <section className="section" style={{ background: "var(--cream)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
              <span className="section-label">Why Mocha Vista</span>
              <h2 className="section-title">The Mocha Vista Promise</h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "2rem",
              }}
            >
              {whyChooseUs.map((item) => (
                <div
                  key={item.id}
                  className="promise-card"
                  style={{
                    padding: "2rem",
                    background: "var(--white)",
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "var(--cream)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                      color: "var(--caramel)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "var(--espresso)",
                      marginBottom: "0.625rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                      color: "var(--text-muted)",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

       

{/* F. Premium Menu Banner */}
<section
  style={{
    position: "relative",
    minHeight: "440px",
    padding: "3.5rem 1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    background: "#8F5E35",
    isolation: "isolate",
  }}
>
  <Image
    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=2000&q=90"
    alt="Freshly prepared gourmet pizza"
    fill
    priority
    sizes="100vw"
    style={{
      objectFit: "cover",
      objectPosition: "center 55%",
      zIndex: -2,
    }}
  />

  {/* Subtle caramel overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(143, 94, 53, 0.42)",
      zIndex: -1,
    }}
  />

  <div
    style={{
      position: "relative",
      maxWidth: "850px",
      textAlign: "center",
      margin: "0 auto",
    }}
  >
    <span
      style={{
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: "0.8rem",
        letterSpacing: "0.25em",
        fontWeight: 700,
        color: "#FFF0DC",
        textTransform: "uppercase",
      }}
    >
      A Taste Worth Exploring
    </span>

    <h2
      style={{
        fontFamily: "var(--font-cormorant), serif",
        fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
        fontWeight: 600,
        lineHeight: 1.1,
        color: "#FFF4E8",
        margin: "1.5rem 0",
      }}
    >
      Discover Something
      <br />
      Delicious at Mocha Vista
    </h2>

    <p
      style={{
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: "1rem",
        lineHeight: 1.9,
        color: "#FFFFFF",
        maxWidth: "650px",
        margin: "0 auto 2.5rem",
      }}
    >
      From handcrafted coffee to irresistible bites,
      discover your next favourite flavour.
    </p>

    <Link
      href="/menu"
      className="btn-primary"
      style={{
        display: "inline-flex",
        padding: "1.1rem 2.7rem",
        background: "#FFF4E8",
        color: "#8F5E35",
        border: "1px solid #FFF4E8",
        borderRadius: "6px",
        fontWeight: 700,
        letterSpacing: "0.08em",
        textDecoration: "none",
      }}
    >
      EXPLORE OUR MENU
    </Link>
  </div>
</section>



        {/* G. Testimonials */}
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
