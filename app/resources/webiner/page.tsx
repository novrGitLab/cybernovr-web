"use client";
import React from "react";
import { Video, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { webinars } from "./data";

export default function ResourcesWebinarsPage() {
  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-12 bg-white text-zinc-900 antialiased">
      <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left">
        <span className="inline-block font-mono text-red-700 text-xs font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded mb-4">
          ON-DEMAND CYBERSECURITY WEBINARS
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-2">Webinars</h1>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal">
          Register for upcoming cybersecurity webinars and access on-demand recordings from our experts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {webinars.map((web, idx) => (
          <div key={idx} className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl flex flex-col justify-between space-y-5 shadow-sm hover:border-purple-900/30 transition-all duration-300 group">
            <div className="space-y-3">
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
                <Calendar className="h-3 w-3 text-red-700" /> {web.date}
              </div>
              <h3 className="text-base font-bold text-zinc-900 uppercase tracking-tight leading-snug group-hover:text-red-700 transition-colors">{web.title}</h3>
              <p className="text-zinc-600 text-xs md:text-sm leading-relaxed font-normal">{web.desc}</p>
            </div>
            <Link href="/contacts" className="inline-flex items-center justify-center gap-1.5 border-2 border-red-600 bg-white hover:bg-red-600 text-red-700 hover:text-white font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-lg transition-all font-mono shadow-sm group/btn">
              Register Now <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
