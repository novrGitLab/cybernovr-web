"use client";
import React from "react";
import { FileDown, Shield, Database, Cpu } from "lucide-react";

export default function ResourcesWhitePapersPage() {
  const whitepapers = [
    {
      title: "Cyber Threat Trends Report",
      desc: "This report provides insights into the latest cyber threat trends and security recommendations.",
      icon: Shield,
      link: "/whitepapers/cyber-threat-trends-report.pdf"
    },
    {
      title: "NDPC Compliance Guide",
      desc: "A comprehensive guide for organizations to align with Nigeria Data Protection Act requirements.",
      icon: Database,
      link: "#"
    },
    {
      title: "5G Infrastructure Security",
      desc: "Critical security considerations for protecting 5G network infrastructure in Nigeria.",
      icon: Cpu,
      link: "#"
    }
  ];

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-12 bg-white text-zinc-900 antialiased">
      <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left">
        <span className="inline-block font-mono text-red-700 text-[11px] md:text-[15px] font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded mb-4">
          INDUSTRY LEADING WHITEPAPERS
        </span>
        <h1 className="text-2xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-2">White Papers</h1>
        <p className="text-zinc-600 text-[13px] md:text-[15px] leading-relaxed font-normal">
          Read or download whitepapers to stay ahead of emerging threats and industry trends.
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
                  <h3 className="text-[15px] font-bold text-zinc-900 mb-2 uppercase tracking-tight leading-snug">{paper.title}</h3>
                  <p className="text-zinc-600 text-[11px] md:text-[13px] leading-relaxed font-normal">{paper.desc}</p>
                </div>
              </div>
              <a href={paper.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-red-700 hover:text-red-600 font-bold text-[13px] uppercase tracking-wider transition-all font-mono group/btn self-start">
                Download White Paper <FileDown className="h-4 w-4 group-hover/btn:translate-y-0.5 transition-transform" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
