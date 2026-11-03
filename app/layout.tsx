import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Toast from "@/components/ui/Toast";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mocha Vista — Sip. Savour. Stay Awhile.",
    template: "%s | Mocha Vista",
  },
  description:
    "From handcrafted single-origin coffee to stone-baked sourdough pizzas and artisan desserts. Experience little moments of indulgence at Mocha Vista.",
  keywords: [
    "café",
    "coffee",
    "specialty coffee",
    "mocha vista",
    "artisan pizza",
    "burgers",
    "pasta",
    "kompally café",
    "hyderabad café",
  ],
  authors: [{ name: "Mocha Vista" }],
  openGraph: {
    title: "Mocha Vista — Sip. Savour. Stay Awhile.",
    description:
      "A little indulgence in every moment. Handcrafted coffee and beautiful food at Mocha Vista.",
    type: "website",
    locale: "en_IN",
    siteName: "Mocha Vista",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-full flex flex-col bg-[#f5ebdd] text-[#201b19] antialiased selection:bg-[#b98254]/20 selection:text-[#201b19]">
        <CartProvider>
          <Navbar />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
