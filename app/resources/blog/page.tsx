"use client";
import React from "react";
import { FileText, Clock, User, ArrowRight } from "lucide-react";

export default function ResourcesBlogPage() {
  const blogPosts = [
    {
      title: "Deconstructing Phishing Heuristics Across Relational Networks",
      time: "Updated 2 Days Ago",
      desc: "An analytical deep-dive parsing how modern defensive configurations detect and drop deceptive multi-stage email payloads before baseline endpoint contact."
    }
  ];

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-12 bg-white text-zinc-900 antialiased">
      <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left">
        <span className="inline-block font-mono text-red-700 text-xs font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded mb-4">
          Technical Publication Feed
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-2">Corporate Blog</h1>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal">
          In-depth technical papers, analytical deep-dives, and research writeups engineered by our threat response squads.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {blogPosts.map((post, idx) => (
          <article key={idx} className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl flex flex-col justify-between space-y-6 shadow-sm group hover:border-purple-900/30 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-900 leading-snug group-hover:text-red-700 transition-colors uppercase tracking-tight">{post.title}</h3>
                <div className="flex items-center gap-4 text-[10px] font-mono font-bold text-zinc-400 mt-2">
                  <span className="flex items-center gap-1"><User className="h-3 w-3" /> Intelligence Unit</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.time}</span>
                </div>
                <p className="text-zinc-600 text-xs md:text-sm leading-relaxed mt-4 font-normal">{post.desc}</p>
              </div>
            </div>
            <button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white py-3 rounded-lg text-xs font-black tracking-widest uppercase transition-all font-mono flex items-center justify-center gap-1.5">
              Read Full Post <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}