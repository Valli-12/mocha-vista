import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  const pillars = [
    { label: "Direct Sourcing", desc: "Conscientiously sourced single-origin beans" },
    { label: "Slow Kitchen", desc: "Stone-baked sourdough crusts and fresh sauces" },
    { label: "Sanctuary Ambience", desc: "Warm lighting, soft seating and peaceful patio" },
    { label: "Warm Hospitality", desc: "Attentive care in every interaction" },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#201b19] text-[#f5ebdd] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image Side */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#f5ebdd]/10">
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=85"
                alt="A barista crafting coffee at Mocha Vista"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#201b19]/60 to-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Accent floating pill */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#b98254] text-white p-5 sm:p-6 rounded-2xl shadow-xl max-w-[200px]">
              <span className="font-serif text-2xl sm:text-3xl font-semibold italic block leading-tight">
                Crafted Daily
              </span>
              <span className="font-sans text-[11px] uppercase tracking-wider text-white/80 block mt-1">
                With Passion &amp; Care
              </span>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7 lg:pl-6">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#b98254] block mb-3 font-sans">
              Our Philosophy
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#f5ebdd] leading-tight mb-6">
              A Place Where Every Detail is Considered
            </h2>

            <div className="space-y-4 font-sans text-sm sm:text-base text-[#f5ebdd]/75 leading-relaxed mb-10">
              <p>
                Mocha Vista was founded on a simple conviction: that a memorable café experience extends far beyond the plate. It lives in the quiet warmth of the morning sun through the terrace, the gentle clink of ceramic cups, and the knowledge that you can linger without being rushed.
              </p>
              <p>
                Our baristas dial in our espresso daily to honor the subtle tasting notes of chocolate, caramel, and citrus. In the kitchen, our chefs hand-stretch dough, prepare fresh reductions, and balance spices to deliver food that feels both comforting and distinctly refined.
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#f5ebdd]/15 mb-8">
              {pillars.map((item) => (
                <div key={item.label}>
                  <div className="w-8 h-0.5 bg-[#b98254] mb-2.5" />
                  <h3 className="font-serif text-lg font-semibold text-[#f5ebdd] mb-1">
                    {item.label}
                  </h3>
                  <p className="font-sans text-xs text-[#f5ebdd]/60">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#b98254] hover:text-white group font-sans transition-colors"
            >
              <span>Read Our Full Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
