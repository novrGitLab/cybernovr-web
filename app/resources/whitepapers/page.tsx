"use client";
import React from "react";
import { FileDown, Shield, Database, Cpu } from "lucide-react";

export default function ResourcesWhitePapersPage() {
  const whitepapers = [
    {
      title: "API Shielding for High-Velocity Fintech Networks",
      desc: "Technical framework for securing RESTful endpoints in real-time banking ecosystems, focusing on zero-trust validation.",
      icon: Shield
    },
    {
      title: "The CISO Playbook: Implementing NDPA Compliance",
      desc: "A step-by-step roadmap for data protection officers to align corporate infrastructure with Nigeria Data Protection Act mandates.",
      icon: Database
    },
    {
      title: "Securing Industrial SCADA Control Systems",
      desc: "Critical infrastructure protection strategies for manufacturing and power grid assets against targeted APT campaigns.",
      icon: Cpu
    }
  ];

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-12 bg-white text-zinc-900 antialiased">
      <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left">
        <span className="inline-block font-mono text-red-700 text-xs font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded mb-4">
          Architectural Framework Repository
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-2">White Papers</h1>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal">
          Validated architectural blueprints, administrative templates, and compliance matrices deployed across global infrastructures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {whitepapers.map((paper, idx) => {
          const Icon = paper.icon;
          return (
            <div key={idx} className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl flex flex-col justify-between space-y-6 shadow-sm group hover:border-purple-900/30 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900 mb-2 uppercase tracking-tight leading-snug">{paper.title}</h3>
                  <p className="text-zinc-600 text-xs md:text-sm leading-relaxed font-normal">{paper.desc}</p>
                </div>
              </div>
              <button className="inline-flex items-center gap-1.5 text-red-700 hover:text-red-600 font-bold text-xs uppercase tracking-wider transition-all font-mono group/btn self-start">
                Download Technical Document <FileDown className="h-4 w-4 group-hover/btn:translate-y-0.5 transition-transform" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}