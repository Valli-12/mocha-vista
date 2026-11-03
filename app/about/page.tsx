import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story & Heritage — Mocha Vista",
  description:
    "Learn about Mocha Vista's dedication to artisanal coffee, honest kitchen craft, and creating a welcoming sanctuary in Kompally, Hyderabad.",
  openGraph: {
    title: "The Story Behind Mocha Vista Café",
    description: "More than just a coffee. A place to belong, unwind, and savour life.",
  },
};

const values = [
  {
    number: "01",
    title: "Crafted With Care",
    description:
      "Every cup of single-origin coffee, every stone-baked crust, and every little detail is prepared with unhurried mindfulness.",
  },
  {
    number: "02",
    title: "Quality Without Compromise",
    description:
      "We source directly from conscientious growers and local producers to bring pure, honest flavours to every table.",
  },
  {
    number: "03",
    title: "Moments That Matter",
    description:
      "From quiet morning espresso rituals to evening rooftop conversations, we design our café as a comforting sanctuary.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#f5ebdd] text-[#201b19] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=2200&q=90"
            alt="Warm and inviting Mocha Vista café ambience"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-[#201b19]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#201b19]/85 via-[#201b19]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#201b19]/90 via-transparent to-[#201b19]/25" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-16 pb-20 md:pb-28 pt-36">
          <span className="inline-block text-[#b98254] text-xs md:text-sm tracking-[0.35em] uppercase mb-6 font-semibold font-sans">
            The Story Behind Mocha Vista
          </span>

          <h1 className="font-serif text-[#f5ebdd] text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] max-w-5xl drop-shadow-md">
            More Than
            <br />
            Just A <span className="italic text-[#e8c89a]">Coffee.</span>
          </h1>

          <p className="text-[#f5ebdd]/85 max-w-lg mt-8 text-base md:text-lg leading-relaxed font-sans">
            A little escape from the everyday. A sanctuary where beautiful flavours, meaningful conversations, and the love of genuine craft come together.
          </p>

          <div className="mt-10 flex items-center gap-6 flex-wrap font-sans">
            <Link
              href="/menu"
              className="px-8 py-4 bg-[#b98254] hover:bg-[#f5ebdd] text-[#201b19] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl"
            >
              Discover Our Menu
            </Link>

            <a
              href="#story"
              className="inline-flex items-center gap-2 text-[#f5ebdd] hover:text-[#b98254] text-xs tracking-[0.2em] uppercase font-semibold transition-colors"
            >
              <span>Our Story</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Side Branding */}
        <div className="absolute bottom-10 right-8 hidden md:block text-[#f5ebdd]/60 text-xs tracking-[0.3em] font-sans [writing-mode:vertical-rl]">
          EST. WITH PASSION · MOCHA VISTA
        </div>
      </section>

      {/* BRAND INTRODUCTION */}
      <section id="story" className="py-12 md:py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#201b19]/10">
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85"
                alt="A passionate barista pulling fresh espresso shots"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#b98254] text-white p-6 md:p-8 rounded-2xl shadow-xl max-w-[210px]">
              <p className="font-serif text-3xl italic leading-tight">A little</p>
              <p className="font-serif text-3xl font-semibold leading-tight">extraordinary.</p>
            </div>
          </div>

          <div className="md:col-span-6 md:pl-8 pt-6 md:pt-0">
            <span className="text-[#b98254] text-xs tracking-[0.3em] uppercase mb-4 block font-semibold font-sans">
              A Place To Belong
            </span>

            <h2 className="font-serif text-4xl sm:text-6xl text-[#201b19] leading-[1.08] mb-8">
              It Starts With
              <br />
              <span className="italic text-[#8f5e35]">A Feeling.</span>
            </h2>

            <p className="text-[#5a4a3a] leading-relaxed text-base mb-6 font-sans">
              At Mocha Vista, we believe a café is far more than a physical space. It is a feeling — the warmth of your favourite roast, the comforting aroma of baked bread, and the reassuring presence of a table waiting just for you.
            </p>

            <p className="text-[#5a4a3a] leading-relaxed text-base mb-10 font-sans">
              Inspired by international café culture and honest Mediterranean hospitality, we bring together handcrafted coffee, stone-baked pizzas, hearty burgers, and comforting desserts in an environment designed for leisurely connection.
            </p>

            <div className="border-t border-[#201b19]/15 pt-6 flex justify-between items-center">
              <span className="font-serif italic text-2xl text-[#201b19]">
                The Mocha Vista Experience
              </span>
              <Sparkles className="w-5 h-5 text-[#b98254]" />
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-12 md:py-16 px-6 md:px-16 bg-white/40 border-t border-b border-[#201b19]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-[#b98254] text-xs tracking-[0.3em] uppercase mb-3 block font-semibold font-sans">
                Our Guiding Philosophy
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl text-[#201b19]">
                Made With <span className="italic text-[#8f5e35]">Intention.</span>
              </h2>
            </div>

            <p className="text-[#5a4a3a] max-w-sm text-sm sm:text-base leading-relaxed font-sans">
              Three simple beliefs guide everything that enters our kitchen and every cup poured from our bar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 border-t border-[#201b19]/10 divide-y md:divide-y-0 md:divide-x divide-[#201b19]/10">
            {values.map((value) => (
              <div
                key={value.number}
                className="py-10 md:py-14 md:px-8 first:pl-0 last:pr-0 group"
              >
                <span className="text-[#b98254] text-sm tracking-widest font-mono font-bold">
                  {value.number}
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#201b19] mt-6 mb-4 group-hover:text-[#b98254] transition-colors duration-300">
                  {value.title}
                </h3>

                <p className="text-[#5a4a3a] text-sm leading-relaxed font-sans">
                  {value.description}
                </p>

                <div className="mt-8 text-[#b98254]">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="px-6 md:px-16 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 relative h-[360px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1500&q=85"
                alt="Warm and inviting café interior"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="md:col-span-5 grid grid-rows-2 gap-6">
              <div className="relative h-[200px] md:h-[238px] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=85"
                  alt="Artisan pour over coffee"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="relative h-[200px] md:h-[238px] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=85"
                  alt="Freshly baked artisan croissants"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="font-serif italic text-3xl md:text-5xl text-[#201b19]">
              A space to slow down. A reason to stay.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="relative bg-[#201b19] text-[#f5ebdd] py-14 md:py-18 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-32 -left-20 w-96 h-96 border border-[#f5ebdd] rounded-full" />
          <div className="absolute -bottom-48 -right-20 w-[500px] h-[500px] border border-[#f5ebdd] rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="uppercase tracking-[0.3em] text-xs text-[#b98254] font-semibold mb-4 block font-sans">
            Your Table Is Waiting
          </span>

          <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
            Make Room For
            <br />
            <span className="italic text-[#e8c89a]">Something Beautiful.</span>
          </h2>

          <p className="max-w-lg mx-auto text-sm sm:text-base leading-relaxed mb-10 text-[#f5ebdd]/80 font-sans">
            Discover your next favourite coffee, savour stone-baked pizzas, and make everyday moments a little more extraordinary.
          </p>

          <Link
            href="/menu"
            className="inline-block bg-[#b98254] hover:bg-[#f5ebdd] hover:text-[#201b19] text-white px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded shadow-xl"
          >
            Explore Our Menu
          </Link>
        </div>
      </section>
    </main>
  );
}
