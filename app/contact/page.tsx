"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Clock, Phone, Mail, Check, Send, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  return (
    <main className="min-h-[80vh] bg-[#f5ebdd] pb-16">
      {/* Header Banner with Guaranteed High-Contrast White Text */}
      <section className="relative py-14 md:py-18 bg-[#17120f] overflow-hidden">
        {/* Subtle Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
            alt="Mocha Vista café seating terrace"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25"
          />
        </div>

        {/* Deep Contrast Overlays */}
        <div className="absolute inset-0 z-0 bg-[#17120f]/80" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#17120f] via-transparent to-[#17120f]/60" />

        {/* Text Container with Direct Inline Colors to Guarantee Contrast */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span
            style={{ color: "#E5AD78" }}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 font-sans"
          >
            <Sparkles className="w-4 h-4" />
            <span>Connect &amp; Reserve</span>
          </span>

          <h1
            style={{ color: "#FFFFFF", textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            We&apos;d Love to Welcome You
          </h1>

          <p
            style={{ color: "#F5EBDD", textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}
            className="font-sans text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Planning a celebratory dinner, casual brunch, or quiet coffee morning? Reach out directly or visit our café in Kompally.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Card */}
          <div
            style={{ backgroundColor: "#201B19", borderColor: "rgba(185, 130, 84, 0.25)" }}
            className="lg:col-span-5 p-8 sm:p-10 rounded-3xl shadow-2xl flex flex-col justify-between border"
          >
            <div>
              <span
                style={{ color: "#E5AD78" }}
                className="text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-sans"
              >
                Location &amp; Hours
              </span>
              <h2
                style={{ color: "#FFFFFF" }}
                className="font-serif text-3xl font-semibold mb-8"
              >
                Visit Mocha Vista
              </h2>

              <div className="space-y-6 text-sm font-sans">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#b98254]/25 text-[#E5AD78] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 style={{ color: "#FFFFFF" }} className="font-semibold text-base mb-1">
                      Our Address
                    </h3>
                    <p style={{ color: "#F5EBDD" }} className="text-xs sm:text-sm leading-relaxed opacity-90">
                      Hi-tension Road, Kompally,
                      <br />
                      Hyderabad, Telangana 500100
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#b98254]/25 text-[#E5AD78] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 style={{ color: "#FFFFFF" }} className="font-semibold text-base mb-1">
                      Operating Hours
                    </h3>
                    <p style={{ color: "#F5EBDD" }} className="text-xs sm:text-sm leading-relaxed opacity-90">
                      Monday – Sunday: 8:00 AM – 11:30 PM
                      <br />
                      Kitchen Closes: 11:00 PM
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#b98254]/25 text-[#E5AD78] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 style={{ color: "#FFFFFF" }} className="font-semibold text-base mb-1">
                      Phone Enquiries
                    </h3>
                    <p style={{ color: "#F5EBDD" }} className="text-xs sm:text-sm opacity-90">
                      +91 98765 43210 / +91 40 1234 5678
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#b98254]/25 text-[#E5AD78] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 style={{ color: "#FFFFFF" }} className="font-semibold text-base mb-1">
                      Email
                    </h3>
                    <p style={{ color: "#F5EBDD" }} className="text-xs sm:text-sm opacity-90">
                      hello@mochavista.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#f5ebdd]/15">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Hi-tension+Road+Kompally+Hyderabad+Telangana+500100"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "#B98254", color: "#FFFFFF" }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl hover:bg-[#8f5e35] text-xs font-bold tracking-widest uppercase transition-all shadow-lg active:scale-98"
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Table Reservation / Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-[#201b19]/10">
            {submitted ? (
              <div className="py-12 text-center font-sans">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto mb-6">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="font-serif text-3xl font-semibold text-[#201b19] mb-3">
                  Reservation Request Received
                </h3>
                <p className="text-sm text-[#5a4a3a] max-w-md mx-auto leading-relaxed mb-8">
                  Thank you, <strong className="text-[#201b19]">{form.name}</strong>! Our host team has received your note. In a live environment, a confirmation SMS would be sent to {form.phone || form.email}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-lg bg-[#201b19] text-[#f5ebdd] text-xs font-semibold tracking-wider uppercase hover:bg-[#b98254] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#b98254] block mb-1 font-sans">
                    Table Booking &amp; Feedback
                  </span>
                  <h2 className="font-serif text-3xl font-semibold text-[#201b19]">
                    Reserve a Table or Say Hello
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-[#5a4a3a] mb-2">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#201b19]/15 text-sm text-[#201b19] placeholder:text-[#9b8272] focus:outline-none focus:border-[#b98254] focus:ring-1 focus:ring-[#b98254] transition-all bg-[#f5ebdd]/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-[#5a4a3a] mb-2">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#201b19]/15 text-sm text-[#201b19] placeholder:text-[#9b8272] focus:outline-none focus:border-[#b98254] focus:ring-1 focus:ring-[#b98254] transition-all bg-[#f5ebdd]/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#5a4a3a] mb-2">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#201b19]/15 text-sm text-[#201b19] placeholder:text-[#9b8272] focus:outline-none focus:border-[#b98254] focus:ring-1 focus:ring-[#b98254] transition-all bg-[#f5ebdd]/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-guests" className="block text-xs font-semibold uppercase tracking-wider text-[#5a4a3a] mb-2">
                      Number of Guests
                    </label>
                    <select
                      id="contact-guests"
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#201b19]/15 text-sm text-[#201b19] focus:outline-none focus:border-[#b98254] focus:ring-1 focus:ring-[#b98254] transition-all bg-[#f5ebdd]/10"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="4">4 People</option>
                      <option value="6">6 People</option>
                      <option value="8+">8+ Large Gathering</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-[#5a4a3a] mb-2 font-sans">
                    Special Requests or Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell us if it's an anniversary, preferred seating (indoor vs rooftop), or dietary requests..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#201b19]/15 text-sm text-[#201b19] placeholder:text-[#9b8272] focus:outline-none focus:border-[#b98254] focus:ring-1 focus:ring-[#b98254] transition-all bg-[#f5ebdd]/10 resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#b98254] hover:bg-[#8f5e35] text-white text-xs font-bold tracking-widest uppercase transition-all shadow-md active:scale-98 font-sans"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Reservation Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
