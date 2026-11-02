import Image from "next/image";

export default function BrandStory() {
  return (
    <section
      className="section"
      style={{ background: "var(--espresso)", overflow: "hidden" }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
            alignItems: "center",
          }}
        >
          {/* Image */}
          <div
            style={{
              position: "relative",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              aspectRatio: "4/5",
              boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=85"
              alt="A barista crafting coffee at Mocha Vista"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(32,27,25,0.35) 0%, transparent 60%)",
              }}
            />
            {/* Accent detail */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "-1.5rem",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                border: "1.5px solid rgba(185,130,84,0.4)",
              }}
            />
          </div>

          {/* Text */}
          <div>
            <span className="section-label" style={{ color: "var(--caramel)" }}>
              Our Story
            </span>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                color: "var(--cream)",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              A Place Where Every Detail is Considered
            </h2>
            <div
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.9,
                color: "rgba(245,235,221,0.72)",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <p>
                Mocha Vista was born from a simple belief: that a great café
                experience is about more than what&apos;s on the plate. It is
                about the warmth of the space, the care put into every cup, and
                the feeling that you can slow down and truly savour a moment.
              </p>
              <p>
                Our kitchen is a place of craft. Every dish on our menu is
                thoughtfully assembled — using quality ingredients, honest
                recipes, and a genuine desire to make your experience memorable.
                From the first espresso of the morning to the last dessert of
                the evening, we take pride in what we serve.
              </p>
              <p>
                Whether you are joining us for a quiet solo coffee, a long lunch
                with a friend, or a relaxed evening — Mocha Vista is your
                place. Pull up a chair. Stay awhile.
              </p>
            </div>

            {/* Values */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.25rem",
                marginTop: "2rem",
              }}
            >
              {[
                { label: "Quality", desc: "Carefully chosen ingredients" },
                { label: "Comfort", desc: "A welcoming space for all" },
                { label: "Craft", desc: "Thoughtfully prepared food" },
                { label: "Memory", desc: "Moments worth returning for" },
              ].map((v) => (
                <div key={v.label}>
                  <div
                    style={{
                      width: 32,
                      height: 2,
                      background: "var(--caramel)",
                      marginBottom: "0.5rem",
                    }}
                    aria-hidden="true"
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "var(--cream)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {v.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "0.8rem",
                      color: "rgba(245,235,221,0.55)",
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
