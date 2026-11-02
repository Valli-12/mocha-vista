"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type NavLink = { href: string; label: string };

export default function MobileMenu({
  navLinks,
  pathname,
}: {
  navLinks: NavLink[];
  pathname: string;
}) {
  const [open, setOpen] = useState(false);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Hamburger Button — visible on mobile */}
      <button
        className="icon-btn"
        id="mobile-menu-btn"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(!open)}
        style={{ display: "none" }}
        // CSS shows it on mobile via media query below
      >
        {open ? (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        )}
      </button>

      {/* Backdrop */}
      {open && (
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(32,27,25,0.5)",
            zIndex: 99,
          }}
        />
      )}

      {/* Drawer */}
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "280px",
          background: "var(--cream)",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          padding: "2rem 1.5rem",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.3rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--espresso)",
            }}
          >
            Mocha Vista
          </span>
          <button
            className="icon-btn"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul style={{ listStyle: "none", margin: 0, padding: 0, flex: 1 }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  display: "block",
                  padding: "1rem 0",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "1rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color:
                    pathname === link.href
                      ? "var(--caramel)"
                      : "var(--espresso)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--border)",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/cart"
              style={{
                display: "block",
                padding: "1rem 0",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "1rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "var(--espresso)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border)",
              }}
            >
              Cart
            </Link>
          </li>
        </ul>

        <div style={{ marginTop: "auto", paddingTop: "1.5rem" }}>
          <Link href="/menu" className="btn-primary" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            Order Now
          </Link>
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          #mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
