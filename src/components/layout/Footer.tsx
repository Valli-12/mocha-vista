
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8z" />
      </svg>
    ),
  },
 
];

export default function Footer() {
  const year = 2026;

  return (
    <footer className="mv-footer">

      {/* VISIT US SECTION */}
      <section className="mv-visit-section">
        <div className="mv-visit-content">
         

          <h2>Visit Us Today</h2>

          <div className="mv-visit-divider">
            <span />
            <span className="mv-coffee-bean">❧</span>
            <span />
          </div>

          <p>
            We&apos;d love to welcome you to our café.
            Come for the coffee, stay for the
            good vibes!
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Hi-tension+Road+Kompally+Hyderabad+Telangana+500100"
            target="_blank"
            rel="noopener noreferrer"
            className="mv-location-button"
          >
            FIND OUR LOCATION
          </a>
        </div>

        <div className="mv-visit-gallery">
          <div
            className="mv-visit-image mv-image-one"
            role="img"
            aria-label="Mocha Vista café exterior"
          />
          <div
            className="mv-visit-image mv-image-two"
            role="img"
            aria-label="Freshly prepared latte art"
          />
          <div
            className="mv-visit-image mv-image-three"
            role="img"
            aria-label="Warm and welcoming café interior"
          />
        </div>
      </section>

      {/* NEWSLETTER AND SOCIAL SECTION */}
      <section className="mv-newsletter-section">

        <div className="mv-newsletter-intro">
          <div className="mv-newsletter-icon" aria-hidden="true">
            <svg viewBox="0 0 64 64" fill="currentColor">
              <path d="M31 55C17 53 5 41 5 27c0-9 7-16 15-14 7 2 12 11 11 20-1-13-5-22-11-29 14 7 21 19 19 32 5-10 4-23-1-32 13 12 16 29 8 41-4 6-9 9-15 10Z" />
              <path d="M33 55C44 51 57 40 59 27c1-9-6-16-14-14-7 2-12 11-12 20 1-13 5-22 11-29-14 7-21 19-19 32-5-10-4-23 1-32-13 12-16 29-8 41 4 6 9 9 15 10Z" />
            </svg>
          </div>

          <div>
            <h3>Stay in the Loop</h3>
            <p>
              Subscribe to get updates on new menu
              items, special offers, and events.
            </p>
          </div>
        </div>

        <div className="mv-newsletter-wrapper">
          <NewsletterForm />
        </div>

        <div className="mv-follow-us">
          <h3>Follow Us</h3>

          <div className="mv-follow-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Mocha Vista on ${social.name}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </section>

      {/* BOTTOM COPYRIGHT SECTION */}
      <div className="mv-footer-bottom">
        <p className="mv-footer-copyright">
          © {year} Mocha Vista. All Rights Reserved.
        </p>

        <nav className="mv-legal-links" aria-label="Legal">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
        </nav>
      </div>

    </footer>
  );
}
