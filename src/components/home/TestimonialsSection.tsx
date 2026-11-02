"use client";

import { useState } from "react";
import Image from "next/image";

interface TestimonialSpotlight {
  id: string;
  image: string;
  alt: string;
  leftReview: {
    avatar: string;
    name: string;
    rating: number;
    text: string;
  };
  rightReview: {
    avatar: string;
    name: string;
    rating: number;
    text: string;
  };
}

const spotlights: TestimonialSpotlight[] = [
  {
    id: "spotlight-1",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1000&q=85",
    alt: "Authentic culinary spread served on terrace at Mocha Vista",
    leftReview: {
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face",
      name: "Tapaswini Samant",
      rating: 5,
      text: "I enjoyed the unique taste in all food served. Nice service today. I recommend 5/5.",
    },
    rightReview: {
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
      name: "Tanmay Swain",
      rating: 5,
      text: "Very good food quality. Nice top view and roof top ambience. Must visit place. Staffs are very supportive and suggest perfect as per your need.",
    },
  },
  {
    id: "spotlight-2",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1000&q=85",
    alt: "Artisan espresso and croissant in cafe setting",
    leftReview: {
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
      name: "Ananya Deshmukh",
      rating: 5,
      text: "The Hazelnut Cappuccino is heavenly! Perfect roast, not overly sweet. Lovely quiet corner to read and unwind.",
    },
    rightReview: {
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",
      name: "Vikram Rathore",
      rating: 5,
      text: "Hands down the best cold brew and waffles in the city. The terrace seating in the evening is simply magical.",
    },
  },
  {
    id: "spotlight-3",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1000&q=85",
    alt: "Wood-fired artisanal pizza with fresh toppings",
    leftReview: {
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face",
      name: "Meera Sen",
      rating: 5,
      text: "The Truffle Mushroom Pizza is out of this world! Dough is wonderfully light and airy. 10/10 dining experience.",
    },
    rightReview: {
      avatar:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&h=120&fit=crop&crop=face",
      name: "Karan Malhotra",
      rating: 5,
      text: "Celebrated our anniversary dinner here. The staff went above and beyond to make it memorable. Truly loved it!",
    },
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const activeItem = spotlights[currentIndex];

  const handleSlideChange = (newIndex: number) => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsFading(false);
    }, 220);
  };

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + spotlights.length) % spotlights.length;
    handleSlideChange(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % spotlights.length;
    handleSlideChange(nextIdx);
  };

  return (
    <section className="section testimonials-spotlight-section">
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Guests Say</h2>
        </div>

        {/* Ambient Rooftop Scene Container */}
        <div className="testimonials-rooftop-stage">
          {/* Outdoor rooftop terrace background */}
          <div className="testimonials-stage-bg">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
              alt="Mocha Vista rooftop café terrace ambience"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              style={{ objectFit: "cover", objectPosition: "center 40%" }}
            />
            <div className="testimonials-stage-overlay" />
          </div>

          {/* Center Instagram Post Frame with Floating Bubbles */}
          <div
            className={`insta-post-wrapper ${isFading ? "testimonials-fading" : ""}`}
            key={activeItem.id}
          >
            {/* The Instagram Post Card */}
            <div className="insta-post-card">
              {/* Post Header with 3 dots */}
              <div className="insta-post-header">
                <div style={{ flex: 1 }} />
                <div className="insta-menu-dots" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#262626">
                    <circle cx="12" cy="5" r="2.2" />
                    <circle cx="12" cy="12" r="2.2" />
                    <circle cx="12" cy="19" r="2.2" />
                  </svg>
                </div>
              </div>

              {/* Post Photo — arrows overlaid inside */}
              <div className="insta-media-container">
                <Image
                  src={activeItem.image}
                  alt={activeItem.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 520px"
                  style={{ objectFit: "cover" }}
                  priority
                />

                {/* ← Prev arrow overlaid on photo (left edge) */}
                <button
                  type="button"
                  className="insta-arrow-btn insta-arrow-prev"
                  onClick={handlePrev}
                  aria-label="Previous review"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                {/* → Next arrow overlaid on photo (right edge) */}
                <button
                  type="button"
                  className="insta-arrow-btn insta-arrow-next"
                  onClick={handleNext}
                  aria-label="Next review"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>

                {/* Slide indicator dots inside image (bottom center) */}
                <div className="insta-photo-dots" aria-hidden="true">
                  {spotlights.map((_, i) => (
                    <span
                      key={i}
                      className={`insta-photo-dot${i === currentIndex ? " active" : ""}`}
                    />
                  ))}
                </div>
              </div>

              {/* Action Bar (Heart, Comment, Share, Bookmark) */}
              <div className="insta-post-footer">
                <div className="insta-actions-left">
                  {/* Heart Button */}
                  <button
                    type="button"
                    className="insta-icon"
                    onClick={() => setIsLiked(!isLiked)}
                    aria-label={isLiked ? "Unlike post" : "Like post"}
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill={isLiked ? "#ed4956" : "none"}
                      stroke={isLiked ? "#ed4956" : "#262626"}
                      strokeWidth="2"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>
                  {/* Comment Bubble */}
                  <span className="insta-icon" aria-label="Comment">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </span>
                  {/* Share Paper Plane */}
                  <span className="insta-icon" aria-label="Share">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </span>
                </div>

                {/* Bookmark on the Right */}
                <span className="insta-icon" aria-label="Bookmark">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                </span>
              </div>
            </div>

            {/* FLOATING SPEECH BUBBLE 1 (Top Left) */}
            <div className="testimonial-speech-bubble bubble-left">
              <div className="bubble-header">
                <div className="bubble-avatar">
                  <Image
                    src={activeItem.leftReview.avatar}
                    alt={activeItem.leftReview.name}
                    width={44}
                    height={44}
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                </div>
                <div className="bubble-info">
                  <h4 className="bubble-author">{activeItem.leftReview.name}</h4>
                  <div className="bubble-stars" aria-label={`${activeItem.leftReview.rating} out of 5 stars`}>
                    {"★".repeat(activeItem.leftReview.rating)}
                  </div>
                </div>
              </div>
              <div className="bubble-divider" />
              <p className="bubble-text">{activeItem.leftReview.text}</p>
              <span className="bubble-beak beak-bottom-right" aria-hidden="true" />
            </div>

            {/* FLOATING SPEECH BUBBLE 2 (Bottom Right) */}
            <div className="testimonial-speech-bubble bubble-right">
              <div className="bubble-header">
                <div className="bubble-avatar">
                  <Image
                    src={activeItem.rightReview.avatar}
                    alt={activeItem.rightReview.name}
                    width={44}
                    height={44}
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                </div>
                <div className="bubble-info">
                  <h4 className="bubble-author">{activeItem.rightReview.name}</h4>
                  <div className="bubble-stars" aria-label={`${activeItem.rightReview.rating} out of 5 stars`}>
                    {"★".repeat(activeItem.rightReview.rating)}
                  </div>
                </div>
              </div>
              <div className="bubble-divider" />
              <p className="bubble-text">{activeItem.rightReview.text}</p>
              <span className="bubble-beak beak-bottom-left" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
