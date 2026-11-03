import Link from "next/link";
import NewsletterForm from "./NewsletterForm";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const year = 2026;

  return (
    <footer className="w-full bg-[#201b19] text-[#f5ebdd] font-sans overflow-hidden">
      {/* VISIT US SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 max-w-md">
            <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-[#b98254] mb-3">
              Visit Our Café
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#f5ebdd] leading-tight mb-4">
              Step In. Stay Awhile.
            </h2>
            <div className="flex items-center gap-3 my-4 text-[#b98254]">
              <span className="w-12 h-[1px] bg-[#f5ebdd]/20" />
              <span className="text-xl">❧</span>
              <span className="w-12 h-[1px] bg-[#f5ebdd]/20" />
            </div>
            <p className="text-sm sm:text-base text-[#f5ebdd]/75 leading-relaxed mb-6 font-sans">
              Come for the artisanal coffee, stay for the warm ambience and crafted food. Whether meeting friends, catching up on work, or enjoying quiet solitude.
            </p>

            <div className="space-y-3 mb-8 text-xs text-[#f5ebdd]/80 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#b98254] shrink-0 mt-0.5" />
                <span>Hi-tension Road, Kompally, Hyderabad, Telangana 500100</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#b98254] shrink-0" />
                <span>Open Daily: 8:00 AM – 11:30 PM</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#b98254] shrink-0" />
                <span>+91 98765 43210</span>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Hi-tension+Road+Kompally+Hyderabad+Telangana+500100"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#b98254] hover:bg-[#8f5e35] text-white text-xs font-bold tracking-widest uppercase transition-all shadow-md hover:-translate-y-0.5"
              >
                Get Directions
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-[#f5ebdd]/30 hover:border-[#f5ebdd] text-[#f5ebdd] text-xs font-bold tracking-widest uppercase transition-all"
              >
                Contact &amp; Hours
              </Link>
            </div>
          </div>

          {/* Right Gallery Column */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            <div
              className="h-56 sm:h-72 rounded-xl bg-cover bg-center shadow-md hover:-translate-y-1 transition-transform duration-300"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=700&q=85')",
              }}
              role="img"
              aria-label="Mocha Vista café seating area"
            />
            <div
              className="h-56 sm:h-72 rounded-xl bg-cover bg-center shadow-md hover:-translate-y-1 transition-transform duration-300"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1534778101976-62847782c213?w=700&q=85')",
              }}
              role="img"
              aria-label="Fresh latte art and pastry"
            />
            <div
              className="h-56 sm:h-72 rounded-xl bg-cover bg-center shadow-md col-span-2 sm:col-span-1 hover:-translate-y-1 transition-transform duration-300"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&q=85')",
              }}
              role="img"
              aria-label="Outdoor terrace seating"
            />
          </div>
        </div>
      </section>

      {/* NEWSLETTER & SOCIAL SECTION */}
      <section className="border-t border-b border-[#f5ebdd]/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5 flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#b98254]/15 text-[#b98254] shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#f5ebdd] mb-1">
                Stay in the Loop
              </h3>
              <p className="text-xs sm:text-sm text-[#f5ebdd]/70 font-sans">
                Subscribe for private tasting invitations, secret menu drops, and seasonal specials.
              </p>
            </div>
          </div>

          <div className="md:col-span-4">
            <NewsletterForm />
          </div>

          <div className="md:col-span-3 flex md:justify-end items-center gap-5">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#f5ebdd]/60 font-sans">
              Follow:
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Mocha Vista on Instagram"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-[#f5ebdd]/10 hover:bg-[#b98254] hover:text-white text-[#f5ebdd] transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Mocha Vista on Facebook"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-[#f5ebdd]/10 hover:bg-[#b98254] hover:text-white text-[#f5ebdd] transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM LEGAL BAR */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#f5ebdd]/60 font-sans">
        <p className="m-0">
          © {year} Mocha Vista Café. All Rights Reserved.
        </p>
        <nav className="flex items-center gap-6" aria-label="Legal links">
          <Link href="/privacy" className="hover:text-[#b98254] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#b98254] transition-colors">
            Terms &amp; Conditions
          </Link>
        </nav>
      </div>
    </footer>
  );
}
