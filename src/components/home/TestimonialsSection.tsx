"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Share2, Star } from "lucide-react";

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
      text: "Very good food quality. Nice top view and rooftop ambience. Staff are very supportive and suggest perfect options as per your mood.",
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

  const handleSlideChange = useCallback(
    (newIndex: number) => {
      if (isFading) return;
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setIsFading(false);
      }, 200);
    },
    [isFading]
  );

  const handlePrev = useCallback(() => {
    const nextIdx = (currentIndex - 1 + spotlights.length) % spotlights.length;
    handleSlideChange(nextIdx);
  }, [currentIndex, handleSlideChange]);

  const handleNext = useCallback(() => {
    const nextIdx = (currentIndex + 1) % spotlights.length;
    handleSlideChange(nextIdx);
  }, [currentIndex, handleSlideChange]);

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handlePrev, handleNext]);

  return (
    <section className="py-12 md:py-16 bg-[#f5ebdd] overflow-hidden" aria-label="Guest Testimonials">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-8 md:mb-10">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#b98254] block mb-2 font-sans">
            Stories From Our Tables
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#201b19] tracking-tight">
            What Our Guests Say
          </h2>
        </div>

        {/* Ambient Stage Container */}
        <div className="relative max-w-5xl mx-auto min-h-[580px] rounded-3xl p-6 sm:p-14 flex items-center justify-center">
          {/* Outdoor Background Image */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
              alt="Mocha Vista rooftop café terrace ambience"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#201b19]/45 backdrop-blur-xs" />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute left-3 sm:left-6 z-30 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-[#201b19] shadow-lg backdrop-blur-md transition-all hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute right-3 sm:right-6 z-30 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white text-[#201b19] shadow-lg backdrop-blur-md transition-all hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Center Post Card Wrapper */}
          <div
            className={`relative z-20 w-full max-w-sm sm:max-w-md mx-auto transition-all duration-200 ${
              isFading ? "opacity-30 scale-98" : "opacity-100 scale-100"
            }`}
          >
            {/* Left Floating Speech Bubble (Desktop) */}
            <div className="hidden lg:block absolute -left-36 top-10 z-30 w-72 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/60">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#b98254]/30 shrink-0">
                  <Image
                    src={activeItem.leftReview.avatar}
                    alt={activeItem.leftReview.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-sans text-xs font-bold text-[#201b19]">
                    {activeItem.leftReview.name}
                  </h3>
                  <div className="flex text-amber-500">
                    {[...Array(activeItem.leftReview.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="font-sans text-xs text-[#5a4a3a] leading-relaxed">
                &ldquo;{activeItem.leftReview.text}&rdquo;
              </p>
            </div>

            {/* Right Floating Speech Bubble (Desktop) */}
            <div className="hidden lg:block absolute -right-36 bottom-6 z-30 w-76 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/60">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#b98254]/30 shrink-0">
                  <Image
                    src={activeItem.rightReview.avatar}
                    alt={activeItem.rightReview.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-sans text-xs font-bold text-[#201b19]">
                    {activeItem.rightReview.name}
                  </h3>
                  <div className="flex text-amber-500">
                    {[...Array(activeItem.rightReview.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="font-sans text-xs text-[#5a4a3a] leading-relaxed">
                &ldquo;{activeItem.rightReview.text}&rdquo;
              </p>
            </div>

            {/* Post Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/80">
              {/* Header */}
              <div className="flex items-center justify-between p-3.5 border-b border-gray-100 font-sans">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[10px] font-bold text-[#201b19]">
                      MV
                    </div>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-900 leading-none">
                      mochavista.cafe
                    </span>
                    <span className="block text-[10px] text-gray-500 leading-none mt-1">
                      Kompally, Hyderabad
                    </span>
                  </div>
                </div>
                <span className="text-gray-400 text-xs">•••</span>
              </div>

              {/* Media */}
              <div className="relative aspect-square w-full bg-[#201b19]">
                <Image
                  src={activeItem.image}
                  alt={activeItem.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, 400px"
                  className="object-cover"
                />
              </div>

              {/* Footer */}
              <div className="p-3.5 font-sans">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-4 text-gray-800">
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className={`hover:scale-110 transition-transform ${
                        isLiked ? "text-rose-600" : ""
                      }`}
                      aria-label="Like post"
                    >
                      <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                    </button>
                    <MessageCircle className="w-5 h-5" />
                    <Share2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-gray-700">
                    428 likes
                  </span>
                </div>
                <p className="text-xs text-gray-800 line-clamp-2">
                  <strong className="mr-1.5">mochavista.cafe</strong>
                  {activeItem.alt}
                </p>
              </div>
            </div>

            {/* Mobile Reviews stacked below */}
            <div className="lg:hidden mt-4 space-y-3">
              <div className="bg-white/95 p-4 rounded-xl shadow-md border border-white/80 font-sans">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#201b19]">
                    {activeItem.leftReview.name}
                  </span>
                  <div className="flex text-amber-500">
                    {[...Array(activeItem.leftReview.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[#5a4a3a]">
                  &ldquo;{activeItem.leftReview.text}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {spotlights.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => handleSlideChange(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 transition-all rounded-full ${
                currentIndex === idx
                  ? "w-8 bg-[#b98254]"
                  : "w-2 bg-[#201b19]/25 hover:bg-[#201b19]/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
