import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mocha Vista — Sip. Savour. Stay Awhile.",
  description:
    "From handcrafted coffee to irresistible bites, discover little moments of indulgence at Mocha Vista. Premium café experience with thoughtfully prepared food.",
  keywords: "café, coffee, food, mocha vista, restaurant, burgers, pizza, pasta",
  openGraph: {
    title: "Mocha Vista — Sip. Savour. Stay Awhile.",
    description:
      "A little indulgence in every moment. Handcrafted coffee and beautiful food at Mocha Vista.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full`}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-full flex flex-col">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
