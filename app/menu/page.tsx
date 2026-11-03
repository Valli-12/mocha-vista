import type { Metadata } from "next";
import MenuClient from "@/components/menu/MenuClient";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Complete Menu — Mocha Vista",
  description:
    "Explore handcrafted coffee, artisan sourdough pizzas, juicy gourmet burgers, fresh pasta, crisp fries, and decadent desserts at Mocha Vista.",
};

export default function MenuPage() {
  return (
    <main className="min-h-[80vh] bg-[#f5ebdd]">
      <Suspense
        fallback={
          <div className="h-[50vh] flex flex-col items-center justify-center gap-3 text-[#5a4a3a] font-sans">
            <div className="w-8 h-8 rounded-full border-2 border-[#b98254] border-t-transparent animate-spin" />
            <p className="text-sm font-medium tracking-wider uppercase">
              Loading Mocha Vista Menu…
            </p>
          </div>
        }
      >
        <MenuClient />
      </Suspense>
    </main>
  );
}
