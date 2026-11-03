"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavLink = { href: string; label: string };

export default function MobileMenu({
  navLinks,
  pathname,
}: {
  navLinks: NavLink[];
  pathname: string;
}) {
  const [open, setOpen] = useState(false);

  // Close helper
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Handle escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        handleClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, handleClose]);

  return (
    <>
      {/* Hamburger Button — visible only on mobile */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-[#5a4a3a] hover:text-[#201b19] hover:bg-[#201b19]/5 transition-colors"
        id="mobile-menu-btn"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Backdrop */}
      {open && (
        <div
          aria-hidden="true"
          onClick={handleClose}
          className="fixed inset-0 z-40 bg-[#201b19]/60 backdrop-blur-xs transition-opacity"
        />
      )}

      {/* Drawer */}
      <nav
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 bottom-0 z-50 flex flex-col w-[290px] max-w-[85vw] bg-[#f5ebdd] p-6 shadow-2xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between pb-6 border-b border-[#201b19]/10">
          <Link
            href="/"
            onClick={handleClose}
            className="font-serif text-xl font-bold tracking-widest uppercase text-[#201b19]"
          >
            Mocha Vista
          </Link>
          <button
            onClick={handleClose}
            aria-label="Close menu"
            className="flex items-center justify-center w-9 h-9 rounded-full text-[#5a4a3a] hover:text-[#201b19] hover:bg-[#201b19]/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <ul className="flex flex-col flex-1 py-6 space-y-1 list-none m-0 p-0 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={handleClose}
                  className={`block py-3 px-3 rounded-lg font-sans text-sm font-semibold tracking-wider uppercase transition-colors ${
                    isActive
                      ? "text-[#b98254] bg-[#201b19]/5"
                      : "text-[#201b19] hover:text-[#b98254] hover:bg-[#201b19]/5"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/cart"
              onClick={handleClose}
              className={`block py-3 px-3 rounded-lg font-sans text-sm font-semibold tracking-wider uppercase transition-colors ${
                pathname === "/cart"
                  ? "text-[#b98254] bg-[#201b19]/5"
                  : "text-[#201b19] hover:text-[#b98254] hover:bg-[#201b19]/5"
              }`}
            >
              Cart
            </Link>
          </li>
        </ul>

        <div className="pt-4 border-t border-[#201b19]/10">
          <Link
            href="/menu"
            onClick={handleClose}
            className="btn-primary w-full flex justify-center text-center py-3.5 text-xs font-semibold tracking-widest"
          >
            Order Now
          </Link>
        </div>
      </nav>
    </>
  );
}
