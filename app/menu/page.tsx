import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MenuClient from "@/components/menu/MenuClient";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Menu — Mocha Vista",
  description:
    "Browse our complete menu of handcrafted coffee, pizzas, burgers, pasta, sandwiches, fries, mocktails, Chinese food, and desserts.",
};

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh", background: "var(--cream)" }}>
        <Suspense fallback={<div style={{ height: "50vh", display: "flex", alignItems: "center", justifyContent: "center" }}>Loading menu…</div>}>
          <MenuClient />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
