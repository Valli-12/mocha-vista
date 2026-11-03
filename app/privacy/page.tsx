import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Mocha Vista",
  description: "Privacy Policy and data practices for Mocha Vista Café.",
};

export default function PrivacyPage() {
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
          <Shield className="w-6 h-6" />
          <span className="text-xs font-bold tracking-widest uppercase font-sans">
            Legal &amp; Privacy
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#201b19] mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-sm text-[#5a4a3a] leading-relaxed font-sans border-t border-[#201b19]/10 pt-8">
          <p>
            Welcome to Mocha Vista. We respect your privacy and are committed to protecting any personal information you share with us. This policy outlines how information is gathered and used across our website and demonstration ordering services.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#201b19] pt-4">
            1. Information We Collect
          </h2>
          <p>
            When placing a demo order or submitting a table reservation request, we may collect your name, email address, phone number, and delivery preferences. All interactions are stored locally in your browser during your active session.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#201b19] pt-4">
            2. How We Use Information
          </h2>
          <p>
            Information provided is utilized strictly to provide simulated ordering confirmations, reply to guest inquiries, and improve our hospitality experience. We do not sell or monetize personal customer details.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#201b19] pt-4">
            3. Cookies &amp; Local Storage
          </h2>
          <p>
            We use browser local storage solely to remember your chosen cart items and preferences between page visits for your convenience.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#201b19] pt-4">
            4. Contact
          </h2>
          <p>
            For questions regarding our privacy practices or menu information, reach us directly at <strong className="text-[#201b19]">hello@mochavista.com</strong>.
          </p>
        </div>
      </div>
    </main>
  );
}

