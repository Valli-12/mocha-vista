"use client";

import { useState, type FormEvent } from "react";
import { Check, ArrowRight } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email || !email.includes("@")) return;
    setStatus("success");
    setMessage("Thank you! You're now on our private tasting list.");
    setEmail("");
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <label htmlFor="mv-newsletter-email" className="sr-only">
          Your email address
        </label>
        <input
          id="mv-newsletter-email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 min-w-0 h-11 px-4 text-xs sm:text-sm bg-[#f5ebdd]/10 border border-[#f5ebdd]/20 rounded-lg text-[#f5ebdd] placeholder:text-[#f5ebdd]/40 focus:outline-none focus:border-[#b98254] focus:ring-1 focus:ring-[#b98254] transition-all font-sans"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-1.5 h-11 px-5 rounded-lg bg-[#b98254] hover:bg-[#8f5e35] text-white text-xs font-bold tracking-wider uppercase transition-colors shrink-0 font-sans"
        >
          <span>Join</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </form>

      {status === "success" && (
        <p className="flex items-center gap-1.5 mt-2 text-xs text-[#b98254] font-medium font-sans animate-in fade-in duration-200">
          <Check className="w-3.5 h-3.5" />
          <span>{message}</span>
        </p>
      )}
    </div>
  );
}
