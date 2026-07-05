"use client";
import React from "react";
import { Image } from "lucide-react";

export default function ResourcesGalleryPage() {
  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-12 bg-white text-zinc-900 antialiased">
      <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left">
        <span className="inline-block font-mono text-red-700 text-xs font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded mb-4">
          Photo Gallery
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-2">Gallery</h1>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal">
          A visual showcase of our events, training sessions, and cybersecurity initiatives.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
        <Image className="h-16 w-16 text-zinc-300" />
        <h3 className="text-lg font-bold text-zinc-400 uppercase tracking-tight">Gallery Coming Soon</h3>
        <p className="text-sm text-zinc-400 max-w-md">Photos from our events, training sessions, and initiatives will be available here shortly.</p>
      </div>
    </div>
  );
}
