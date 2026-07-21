"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

interface Industry {
  name: string;
  title: string;
  desc: string;
}

export default function IndustryTabs({ industries }: { industries: Industry[] }) {
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-zinc-100 pb-6">
        {industries.map((ind, i) => (
          <button key={i} onClick={() => setSelectedIndustry(i)} className={`px-5 py-2.5 rounded-md text-sm font-black uppercase tracking-wider transition-all whitespace-nowrap border ${selectedIndustry === i ? "bg-purple-600 border-purple-600 text-white shadow-sm font-black" : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-zinc-100 font-bold"}`}>
            <span>{ind.name}</span>
          </button>
        ))}
      </div>

      <div className="bg-purple-950 text-white border border-purple-900/40 p-8 md:p-12 rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[260px] shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-transparent to-transparent pointer-events-none" />
        <div className="lg:col-span-8 space-y-4 relative z-10 text-left">
          <h3 className="text-xl md:text-2xl font-black text-white leading-tight uppercase tracking-tight">
            {industries[selectedIndustry].title}
          </h3>
          <p className="text-purple-200 text-[13px] md:text-[15px] leading-relaxed max-w-3xl font-normal">
            {industries[selectedIndustry].desc}
          </p>
        </div>
        <div className="lg:col-span-4 flex lg:justify-end relative z-10 w-full">
          <Link href="/solutions" className="w-full lg:w-auto bg-red-600 hover:bg-red-700 text-white font-black text-[13px] uppercase tracking-widest px-6 py-4 rounded-md text-center transition-all shadow-md font-mono">
            Review Industry Use-Case
          </Link>
        </div>
      </div>
    </>
  );
}
