"use client";
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  text: string;
  author: string;
  firm: string;
}

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(testimonialTimer);
  }, [testimonials.length]);

  return (
    <div className="max-w-3xl mx-auto space-y-6 relative z-10">
      <div className="flex justify-center gap-1 text-amber-500 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="text-base md:text-lg text-zinc-800 font-semibold leading-relaxed italic transition-opacity duration-500">
        &ldquo;{testimonials[testimonialIndex].text}&rdquo;
      </p>
      <div className="pt-2">
        <h4 className="text-sm md:text-base font-black text-zinc-950 uppercase tracking-wider">
          {testimonials[testimonialIndex].author}
        </h4>
        <p className="text-sm font-mono font-black text-red-600 tracking-widest uppercase mt-0.5">
          {testimonials[testimonialIndex].firm}
        </p>
      </div>
    </div>
  );
}
