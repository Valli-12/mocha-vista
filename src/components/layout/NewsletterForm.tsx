
"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Thank you for subscribing!");
  }

  return (
    <div className="mv-newsletter-form-container">
      <form className="mv-newsletter-form" onSubmit={handleSubmit}>
        <label htmlFor="mv-newsletter-email" className="mv-sr-only">
          Your email address
        </label>

        <input
          id="mv-newsletter-email"
          name="email"
          type="email"
          placeholder="Your email address"
          autoComplete="email"
          required
        />

        <button type="submit">
          SUBSCRIBE
        </button>
      </form>

      <p className="mv-demo-note" aria-live="polite">
        {message}
      </p>
    </div>
  );
}
