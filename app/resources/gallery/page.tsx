"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Play, Images } from "lucide-react";
import { galleryItems, GalleryItemType } from "./data";

type FilterType = "all" | "photo" | "video";

export default function ResourcesGalleryPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = filter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.type === filter);

  const photoCount = galleryItems.filter((i) => i.type === "photo").length;
  const videoCount = galleryItems.filter((i) => i.type === "video").length;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, goNext, goPrev]);

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-10 bg-white text-zinc-900 antialiased">

      {/* Header */}
      <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left">
        <span className="inline-block font-mono text-red-700 text-xs font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded mb-4">
          Photo &amp; Video Gallery
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-2">Gallery</h1>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal">
          A visual showcase of our events, training sessions, and cybersecurity initiatives.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {([
          { key: "all" as FilterType, label: "All", count: galleryItems.length },
          { key: "photo" as FilterType, label: "Photos", count: photoCount },
          { key: "video" as FilterType, label: "Videos", count: videoCount },
        ]).map((tab) => (
          <button
            key={tab.key}
            onClick={() => { setFilter(tab.key); setLightboxIndex(null); }}
            className={`px-5 py-2.5 rounded-md text-xs font-black uppercase tracking-wider transition-all border ${
              filter === tab.key
                ? "bg-red-600 border-red-600 text-white shadow-sm"
                : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-zinc-100"
            }`}
          >
            {tab.label}
            <span className="ml-1.5 font-mono text-[10px] opacity-70">({tab.count})</span>
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {filtered.map((item, i) => (
          <div
            key={item.src}
            className="break-inside-avoid mb-4 relative group cursor-pointer overflow-hidden rounded-xl border border-zinc-200 hover:border-purple-900/30 transition-all duration-300"
            onClick={() => openLightbox(i)}
          >
            {item.type === "photo" ? (
              <Image
                src={item.src}
                alt="Gallery photo"
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            ) : (
              <div className="relative bg-zinc-900 aspect-[4/3]">
                <video
                  src={item.src}
                  preload="metadata"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-6 w-6 text-white ml-0.5" fill="white" />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="h-5 w-5 text-white" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-2 sm:left-4 z-50 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-2 sm:right-4 z-50 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>

          {/* Content */}
          <div className="w-full h-full flex items-center justify-center p-4 sm:p-12" onClick={(e) => e.stopPropagation()}>
            {filtered[lightboxIndex]?.type === "photo" ? (
              <Image
                src={filtered[lightboxIndex].src}
                alt="Gallery photo"
                width={1600}
                height={1200}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                sizes="100vw"
                priority
              />
            ) : (
              <video
                src={filtered[lightboxIndex].src}
                controls
                autoPlay
                className="max-w-full max-h-[85vh] rounded-lg"
              />
            )}
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-white/50 tracking-widest">
            {lightboxIndex + 1} / {filtered.length}
          </div>
        </div>
      )}

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
          <Images className="h-16 w-16 text-zinc-300" />
          <h3 className="text-lg font-bold text-zinc-400 uppercase tracking-tight">No items found</h3>
        </div>
      )}
    </div>
  );
}
