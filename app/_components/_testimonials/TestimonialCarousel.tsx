"use client";

import { useState, useCallback, useMemo } from "react";
import TestimonialCard from "../_cards/TestimonialCard";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarSrc?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  /** Number of cards visible per page on desktop */
  perPage?: number;
}

export default function TestimonialCarousel({
  testimonials,
  perPage = 3,
}: TestimonialCarouselProps) {
  const pages = useMemo(() => {
    const result: Testimonial[][] = [];
    for (let i = 0; i < testimonials.length; i += perPage) {
      result.push(testimonials.slice(i, i + perPage));
    }
    return result;
  }, [testimonials, perPage]);

  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <div className="w-full">
      {/* Carousel viewport */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {pages.map((page, pageIndex) => (
            <div
              key={pageIndex}
              className="w-full shrink-0 grid grid-cols-1 md:grid-cols-3 gap-6 px-1"
            >
              {page.map((testimonial, cardIndex) => (
                <TestimonialCard
                  key={`${pageIndex}-${cardIndex}`}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                  avatarSrc={testimonial.avatarSrc}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      {pages.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Go to page ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === activeIndex
                  ? "w-8 bg-primary-blue"
                  : "w-8 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
