"use client";
import React, { useState, useEffect } from "react";

interface CarouselImage {
  src: string;
  alt: string;
  desc?: string;
}

export default function ImageCarousel({ images }: { images: CarouselImage[] }) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [prevCarouselIndex, setPrevCarouselIndex] = useState(0);

  useEffect(() => {
    const carouselTimer = setInterval(() => {
      setPrevCarouselIndex(carouselIndex);
      setCarouselIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(carouselTimer);
  }, [carouselIndex, images.length]);

  return (
    <div className="w-full relative group">
      <div className="w-full aspect-[5/4] overflow-hidden relative rounded-xl">
        {images.map((img, i) => {
          const isActive = i === carouselIndex;
          const isWrapping = prevCarouselIndex === images.length - 1 && carouselIndex === 0;
          return (
            <div key={i} className={`absolute inset-0 ${isWrapping ? isActive ? "opacity-100 z-10" : "opacity-0 z-0" : `transition-opacity duration-700 ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"}`}`}>
              <img src={img.src} alt={img.alt} width={800} height={600} className="w-full h-full object-cover object-top" />
              {img.desc && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pb-5">
                  <p className="text-white text-xs font-bold leading-snug">{img.desc}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-1.5 mt-3">
        {images.map((_, i) => (
          <button key={i} onClick={() => setCarouselIndex(i)} aria-label={`Go to slide ${i + 1}`} className={`h-1.5 rounded-full transition-all duration-300 ${i === carouselIndex ? "w-6 bg-red-600" : "w-2 bg-zinc-300"}`} />
        ))}
      </div>
    </div>
  );
}
