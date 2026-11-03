import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[75vh] md:min-h-[80vh] flex items-center overflow-hidden bg-[#201b19]" aria-label="Hero">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=85"
          alt="Mocha Vista café ambience with warm artisanal lighting and coffee craft"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40 scale-105 motion-safe:animate-[subtle-zoom_20s_ease-out_forwards]"
        />
      </div>

      {/* Warm Ambient Overlays */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-r from-[#201b19]/90 via-[#201b19]/65 to-[#201b19]/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-0 bg-gradient-to-t from-[#201b19] via-transparent to-[#201b19]/30"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 sm:py-12 lg:py-12">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 font-sans text-xs font-bold tracking-[0.28em] uppercase text-[#b98254] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sip. Savour. Stay Awhile.</span>
          </span>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-[#f5ebdd] leading-[1.05] tracking-tight mb-6">
            Your Everyday Escape,
            <br />
            <em className="font-serif italic text-[#e8c89a]">
              Served Beautifully.
            </em>
          </h1>

          <p className="font-sans text-base sm:text-lg text-[#f5ebdd]/80 leading-relaxed mb-10 max-w-xl">
            From single-origin pour-overs to stone-baked sourdough pizzas and handcrafted desserts — discover little moments of indulgence at Mocha Vista.
          </p>

          <div className="flex items-center gap-4 flex-wrap font-sans">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#b98254] hover:bg-[#8f5e35] text-white text-xs font-bold tracking-[0.16em] uppercase shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              Explore Our Menu
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-[#f5ebdd]/30 hover:border-[#f5ebdd] text-[#f5ebdd] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#f5ebdd]/5 transition-all"
            >
              Visit &amp; Reserve
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#featured"
        aria-label="Scroll down to featured favorites"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#f5ebdd]/60 hover:text-[#f5ebdd] transition-colors"
      >
        <span className="font-sans text-[10px] tracking-[0.25em] uppercase font-semibold">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
