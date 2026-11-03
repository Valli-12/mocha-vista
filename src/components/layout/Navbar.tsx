"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import MobileMenu from "./MobileMenu";
import { ShoppingBag, MapPin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();

  return (
    <header className="navbar sticky top-0 z-40 bg-[#f5ebdd]/95 backdrop-blur-md border-b border-[#201b19]/10 transition-shadow">
      <nav className="navbar-inner max-w-7xl mx-auto h-[70px] px-6 flex items-center justify-between" aria-label="Main navigation">
        {/* Wordmark */}
        <Link
          href="/"
          className="wordmark font-serif text-2xl font-bold tracking-[0.14em] uppercase text-[#201b19] hover:text-[#b98254] transition-colors"
          aria-label="Mocha Vista Home"
        >
          Mocha Vista
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links hidden md:flex items-center gap-8 list-none m-0 p-0" role="list">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative py-1 font-sans text-xs font-semibold tracking-widest uppercase transition-colors duration-200 ${
                    isActive ? "text-[#201b19] font-bold" : "text-[#5a4a3a] hover:text-[#201b19]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#b98254]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action Icons */}
        <div className="nav-icons flex items-center gap-3">
          {/* Visit / Find Café Link */}
          <Link
            href="/contact"
            className="flex items-center justify-center w-10 h-10 rounded-full text-[#5a4a3a] hover:text-[#201b19] hover:bg-[#201b19]/5 transition-colors"
            id="location-icon-btn"
            aria-label="Visit us & directions"
            title="Café Location & Hours"
          >
            <MapPin className="w-5 h-5 stroke-[1.8]" />
          </Link>

          {/* Cart Icon */}
          <Link
            href="/cart"
            className="relative flex items-center justify-center w-10 h-10 rounded-full text-[#5a4a3a] hover:text-[#201b19] hover:bg-[#201b19]/5 transition-colors"
            id="cart-icon-btn"
            aria-label={`Shopping cart, ${totalItems} item${totalItems !== 1 ? "s" : ""}`}
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
            {totalItems > 0 && (
              <span
                className="absolute top-1.5 right-1.5 flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-[#b98254] text-white text-[10px] font-bold font-sans shadow-xs animate-in zoom-in-75 duration-200"
                aria-hidden="true"
              >
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile menu toggle */}
          <MobileMenu navLinks={navLinks} pathname={pathname} />
        </div>
      </nav>
    </header>
  );
}
