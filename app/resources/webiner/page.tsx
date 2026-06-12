"use client";
import React from "react";
import { Video, Shield, Calendar, Play } from "lucide-react";

export default function ResourcesWebinarsPage() {
  const webinars = [
    {
      title: "Defending Critical Infrastructure against APTs",
      time: "Mon, June 15, 2026 | 11:00 AM WAT",
      desc: "A panel analyzing multi-vector strikes on telecoms and banking networks. Explore real-world case studies of nation-state actor methodologies."
    }
  ];

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-12 bg-white text-zinc-900 antialiased">
      <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left">
        <span className="inline-block font-mono text-red-700 text-xs font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded mb-4">
          Video Briefings &amp; Streams
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-2">Webinars</h1>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal">
          On-demand digital operations panels mapping corporate security architectures and perimeter defense lines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {webinars.map((web, idx) => (
          <div key={idx} className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-sm">
            <div className="md:col-span-5 aspect-[16/10] bg-zinc-950 rounded-lg flex flex-col items-center justify-center p-4 border border-zinc-800 relative overflow-hidden group">
              <Play className="h-10 w-10 text-red-600 group-hover:scale-110 transition-transform cursor-pointer" />
              <span className="text-[8px] font-mono text-zinc-500 tracking-widest mt-2 uppercase">STREAM STREAMING READY</span>
            </div>
            <div className="md:col-span-7 space-y-3">
              <span className="flex items-center gap-1 text-[9px] font-mono font-bold text-zinc-400 uppercase"><Video className="h-3 w-3 text-red-700" /> Digital Archive</span>
              <h3 className="text-base font-bold text-zinc-900 uppercase tracking-tight">{web.title}</h3>
              <p className="text-zinc-400 font-mono text-[10px] font-bold">{web.time}</p>
              <p className="text-zinc-600 text-xs font-normal leading-relaxed pt-1">{web.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}