"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Check,
  Send,
  Sparkles,
  Calendar,
  Armchair,
} from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  guests: string;
  date: string;
  timeSlot: string;
  seatingPreference: string;
  message: string;
}

const defaultReservationDate = "2026-11-03";

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    date: defaultReservationDate,
    timeSlot: "19:30",
    seatingPreference: "Rooftop Terrace",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [confCode, setConfCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    const code = (form.name.length * 37 + form.email.length * 53) % 9000 + 1000;
    setConfCode(`MV-RES-${code}`);
    setSubmitted(true);
  };

  return (
    <main className="min-h-[80vh] bg-[#f5ebdd] pb-16">
      {/* Header Banner */}
      <section className="relative py-14 md:py-20 bg-[#17120f] overflow-hidden text-center">
        {/* Ambient Background Image */}
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
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#17120f]/90 via-[#17120f]/80 to-[#17120f]" />

        {/* Text Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 text-[#e5a968] font-sans">
            <Sparkles className="w-4 h-4" />
            <span>Connect &amp; Reserve</span>
          </span>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white leading-tight drop-shadow-md">
            We&apos;d Love to Welcome You
          </h1>

          <p className="font-sans text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-[#f5ebdd]/85">
            Planning a celebratory dinner, casual brunch, or quiet coffee morning? Reach out directly or reserve your table at our café in Kompally.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl shadow-2xl flex flex-col justify-between bg-[#201b19] border border-[#b98254]/30 text-[#f5ebdd]">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-sans text-[#e5a968]">
                Location &amp; Hours
              </span>
              <h2 className="font-serif text-3xl font-semibold mb-8 text-white">
                Visit Mocha Vista
              </h2>

              <div className="space-y-6 text-sm font-sans">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#b98254]/25 text-[#e5a968] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1 text-white">
                      Our Address
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#f5ebdd]/85">
                      Hi-tension Road, Kompally,
                      <br />
                      Hyderabad, Telangana 500100
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#b98254]/25 text-[#e5a968] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1 text-white">
                      Operating Hours
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#f5ebdd]/85">
                      Monday – Sunday: 8:00 AM – 11:30 PM
                      <br />
                      Kitchen Closes: 11:00 PM
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#b98254]/25 text-[#e5a968] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1 text-white">
                      Phone Enquiries
                    </h3>
                    <p className="text-xs sm:text-sm text-[#f5ebdd]/85">
                      +91 98765 43210 / +91 40 1234 5678
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#b98254]/25 text-[#e5a968] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1 text-white">
                      Email
                    </h3>
                    <p className="text-xs sm:text-sm text-[#f5ebdd]/85">
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
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#b98254] hover:bg-[#8f5e35] text-white text-xs font-bold tracking-widest uppercase transition-all shadow-lg active:scale-98"
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Table Reservation / Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-[#201b19]/10">
            {submitted ? (
              <div className="py-8 text-center font-sans">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto mb-6">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#b98254] block mb-2">
                  Reservation Simulated
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#201b19] mb-3">
                  Table Booked for {form.name}!
                </h3>
                <p className="text-sm text-[#5a4a3a] max-w-md mx-auto leading-relaxed mb-6">
                  Thank you! We&apos;ve reserved your spot for{" "}
                  <strong className="text-[#201b19]">{form.guests} guests</strong> on{" "}
                  <strong className="text-[#201b19]">{form.date}</strong> at{" "}
                  <strong className="text-[#201b19]">{form.timeSlot}</strong> ({form.seatingPreference}).
                </p>

                <div className="bg-[#f5ebdd]/50 rounded-2xl p-5 max-w-md mx-auto mb-8 border border-[#201b19]/10 text-left text-xs text-[#5a4a3a] space-y-2">
                  <div className="flex justify-between pb-2 border-b border-[#201b19]/10 font-medium">
                    <span>Confirmation Code</span>
                    <span className="font-mono text-[#201b19] font-bold">{confCode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Guest Contact:</span>
                    <span className="text-[#201b19] font-semibold">{form.phone || form.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Seating Zone:</span>
                    <span className="text-[#201b19] font-semibold">{form.seatingPreference}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3.5 rounded-xl bg-[#201b19] text-[#f5ebdd] text-xs font-semibold tracking-wider uppercase hover:bg-[#b98254] transition-colors"
                >
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#b98254] block mb-1 font-sans">
                    Table Booking &amp; Concierge
                  </span>
                  <h2 className="font-serif text-3xl font-semibold text-[#201b19]">
                    Reserve a Table or Say Hello
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-[#5a4a3a] mt-1.5">
                    We accept reservations up to 30 days in advance. Walk-ins are always welcomed subject to availability.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans">
                  {/* Name */}
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

                  {/* Email */}
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

                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#5a4a3a] mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#201b19]/15 text-sm text-[#201b19] placeholder:text-[#9b8272] focus:outline-none focus:border-[#b98254] focus:ring-1 focus:ring-[#b98254] transition-all bg-[#f5ebdd]/10"
                    />
                  </div>

                  {/* Guests */}
                  <div>
                    <label htmlFor="contact-guests" className="block text-xs font-semibold uppercase tracking-wider text-[#5a4a3a] mb-2">
                      Number of Guests
                    </label>
                    <select
                      id="contact-guests"
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#201b19]/15 text-sm text-[#201b19] focus:outline-none focus:border-[#b98254] focus:ring-1 focus:ring-[#b98254] transition-all bg-[#f5ebdd]/10 cursor-pointer"
                    >
                      <option value="1">1 Person (Solo table)</option>
                      <option value="2">2 People (Date / Pair)</option>
                      <option value="4">4 People (Family &amp; Friends)</option>
                      <option value="6">6 People (Celebration group)</option>
                      <option value="8+">8+ Large Gathering</option>
                    </select>
                  </div>

                  {/* Reservation Date */}
                  <div>
                    <label htmlFor="contact-date" className="block text-xs font-semibold uppercase tracking-wider text-[#5a4a3a] mb-2 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#b98254]" />
                      <span>Reservation Date</span>
                    </label>
                    <input
                      id="contact-date"
                      type="date"
                      min={defaultReservationDate}
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#201b19]/15 text-sm text-[#201b19] focus:outline-none focus:border-[#b98254] focus:ring-1 focus:ring-[#b98254] transition-all bg-[#f5ebdd]/10 cursor-pointer"
                    />
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label htmlFor="contact-time" className="block text-xs font-semibold uppercase tracking-wider text-[#5a4a3a] mb-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#b98254]" />
                      <span>Preferred Time</span>
                    </label>
                    <select
                      id="contact-time"
                      value={form.timeSlot}
                      onChange={(e) => setForm({ ...form, timeSlot: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#201b19]/15 text-sm text-[#201b19] focus:outline-none focus:border-[#b98254] focus:ring-1 focus:ring-[#b98254] transition-all bg-[#f5ebdd]/10 cursor-pointer"
                    >
                      <optgroup label="Brunch & Afternoon">
                        <option value="09:00">09:00 AM — Morning Brew</option>
                        <option value="11:30">11:30 AM — Early Brunch</option>
                        <option value="13:00">01:00 PM — Lunch Service</option>
                        <option value="15:30">03:30 PM — Coffee &amp; Pastry</option>
                      </optgroup>
                      <optgroup label="Evening & Dinner">
                        <option value="18:00">06:00 PM — Sunset Terrace</option>
                        <option value="19:30">07:30 PM — Prime Dinner</option>
                        <option value="20:45">08:45 PM — Late Dinner</option>
                        <option value="22:00">10:00 PM — Dessert &amp; Nightcap</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* Seating Preference */}
                <div className="font-sans">
                  <label htmlFor="contact-seating" className="block text-xs font-semibold uppercase tracking-wider text-[#5a4a3a] mb-2 flex items-center gap-1.5">
                    <Armchair className="w-3.5 h-3.5 text-[#b98254]" />
                    <span>Seating Ambience Preference</span>
                  </label>
                  <select
                    id="contact-seating"
                    value={form.seatingPreference}
                    onChange={(e) => setForm({ ...form, seatingPreference: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#201b19]/15 text-sm text-[#201b19] focus:outline-none focus:border-[#b98254] focus:ring-1 focus:ring-[#b98254] transition-all bg-[#f5ebdd]/10 cursor-pointer"
                  >
                    <option value="Rooftop Terrace">Rooftop Terrace (Open-air breeze &amp; garden lamps)</option>
                    <option value="Indoor AC Dining">Indoor AC Dining (Quiet ambiance, wooden booths)</option>
                    <option value="Patio Lounge">Patio Lounge (Casual sofas &amp; natural sunlight)</option>
                    <option value="Espresso Bar">Espresso Bar (High chairs with barista counter view)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-[#5a4a3a] mb-2 font-sans">
                    Special Requests or Occasion (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="E.g. Celebrating an anniversary, birthday dessert candle, wheelchair accessibility, or allergy notes..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#201b19]/15 text-sm text-[#201b19] placeholder:text-[#9b8272] focus:outline-none focus:border-[#b98254] focus:ring-1 focus:ring-[#b98254] transition-all bg-[#f5ebdd]/10 resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#b98254] hover:bg-[#8f5e35] text-white text-xs font-bold tracking-widest uppercase transition-all shadow-md active:scale-98 font-sans cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Reservation Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
