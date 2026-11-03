import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions — Mocha Vista",
  description: "Terms and conditions for using Mocha Vista Café services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-[75vh] bg-[#f5ebdd] py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-14 rounded-3xl shadow-sm border border-[#201b19]/10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b98254] hover:text-[#8f5e35] mb-8 font-sans transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-3 text-[#b98254] mb-4">
          <FileText className="w-6 h-6" />
          <span className="text-xs font-bold tracking-widest uppercase font-sans">
            Terms of Service
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#201b19] mb-8">
          Terms &amp; Conditions
        </h1>

        <div className="space-y-6 text-sm text-[#5a4a3a] leading-relaxed font-sans border-t border-[#201b19]/10 pt-8">
          <p>
            By accessing or using the Mocha Vista website, you agree to comply with the terms and conditions outlined below.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#201b19] pt-4">
            1. Menu &amp; Availability
          </h2>
          <p>
            All prices are quoted in Indian Rupees (INR) and are subject to applicable taxes. Menu items, prices, and special offerings are subject to availability and may vary seasonally.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#201b19] pt-4">
            2. Orders &amp; Checkout Demonstration
          </h2>
          <p>
            Online ordering features on this website demonstrate the user experience. No real payments are processed and transactions are simulated for presentation purposes.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#201b19] pt-4">
            3. Dietary &amp; Allergen Information
          </h2>
          <p>
            While we take care to denote vegetarian and non-vegetarian selections accurately, our kitchen prepares items containing nuts, dairy, gluten, and eggs. Please advise our staff of any severe allergies before ordering.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#201b19] pt-4">
            4. Inquiries
          </h2>
          <p>
            For reservation inquiries or customer support, please contact us at <strong className="text-[#201b19]">+91 98765 43210</strong>.
          </p>
        </div>
      </div>
    </main>
  );
}

