"use client";
import React from "react";
import { Terminal, Calendar, MapPin, ArrowRight } from "lucide-react";
import { events } from "./data";

export default function ResourcesEventsPage() {
  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-12 bg-white text-zinc-900 antialiased">
      <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left">
        <span className="inline-block font-mono text-red-700 text-xs font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded mb-4">
          Tactical Engagements &amp; Briefings
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-2">Corporate Events</h1>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal">
          Register to secure virtual seats for interactive labs, technical product rollouts, and defensive engineering events.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {events.map((event, idx) => (
          <div key={idx} className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl flex flex-col justify-between space-y-6 shadow-sm group hover:border-purple-900/30 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
                <Terminal className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-zinc-900 uppercase tracking-tight leading-snug">{event.title}</h3>
                <div className="space-y-1 font-mono text-[10px] font-bold text-zinc-400">
                  <div className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> <span>{event.time}</span></div>
                  <div className="flex items-center gap-1.5"><MapPin className="h-3 w-3" /> <span>{event.location}</span></div>
                </div>
                <p className="text-zinc-600 text-xs md:text-sm leading-relaxed pt-2 font-normal">{event.desc}</p>
              </div>
            </div>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-xs font-black tracking-widest uppercase transition-all font-mono shadow-sm flex items-center justify-center gap-1.5">
              Register for Event <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}