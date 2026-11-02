import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero" aria-label="Hero">
      {/* Background image */}
      <div className="hero-image">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=85"
          alt="Mocha Vista café ambience — warm lighting, artisan coffee, beautiful food"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Warm overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(32,27,25,0.72) 0%, rgba(32,27,25,0.45) 60%, rgba(89,96,74,0.3) 100%)",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="hero-content">
        <div style={{ maxWidth: 680 }}>
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--caramel)",
              marginBottom: "1.25rem",
            }}
          >
            ✦ &nbsp; Sip. Savour. Stay Awhile.
          </span>

          <h1
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 600,
              color: "var(--cream)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            Your Everyday Escape,
            <br />
            <em style={{ fontStyle: "italic", color: "#e8c89a" }}>
              Served Beautifully.
            </em>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: "rgba(245,235,221,0.8)",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: 520,
            }}
          >
            From handcrafted coffee to irresistible bites, discover little
            moments of indulgence at Mocha Vista.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/menu" className="btn-primary">
              Explore Our Menu
            </Link>
            <Link
              href="/menu"
              className="btn-secondary"
              style={{ borderColor: "rgba(245,235,221,0.6)", color: "var(--cream)" }}
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: 0.6,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--cream)",
          }}
        >
          Scroll
        </span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          style={{ color: "var(--cream)" }}
        >
          <rect
            x="1"
            y="1"
            width="14"
            height="22"
            rx="7"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="8" cy="8" r="2" fill="currentColor">
            <animate
              attributeName="cy"
              values="8;14;8"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </section>
  );
}
