"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import MobileMenu from "./MobileMenu";

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
    <>
      

      {/* Main Navbar */}
      <header className="navbar">
        <nav className="navbar-inner" aria-label="Main navigation">
          {/* Wordmark */}
          <Link href="/" className="wordmark" aria-label="Mocha Vista Home">
            Mocha Vista
          </Link>

          {/* Desktop Links */}
          <ul className="nav-links" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "active" : ""}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="nav-icons">
            {/* Cart */}
            <Link
              href="/cart"
              className="icon-btn"
              id="cart-icon-btn"
              aria-label={`Shopping cart, ${totalItems} item${totalItems !== 1 ? "s" : ""}`}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              {totalItems > 0 && (
                <span className="cart-badge" aria-hidden="true">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Account */}
            <Link
              href="/admin/dashboard"
              className="icon-btn"
              id="account-icon-btn"
              aria-label="Admin dashboard"
              title="Admin Dashboard"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Link>

            {/* Mobile menu toggle */}
            <MobileMenu navLinks={navLinks} pathname={pathname} />
          </div>
        </nav>
      </header>
    </>
  );
}
