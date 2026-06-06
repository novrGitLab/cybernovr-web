"use client";
import React from "react";

export default function BlogIntelligencePage() {
  const briefingCadence = [
    {
      title: "Monday Threat Briefing",
      type: "Emerging Risks",
      desc: "Active vectors targeting subscriber industry verticals, critical exposures, and one concrete tactical security action for the operational week ahead[cite: 730]."
    },
    {
      title: "Deep Threat Engineering Reports",
      type: "Advanced Analysis",
      desc: "Granular structural post-mortems of a specific software exploit or vulnerability vector, incorporating real-world case documentation and strict patch strategies[cite: 735]."
    },
    {
      title: "Friday Wind-Down Digest",
      type: "Regulatory Compliance",
      desc: "End-of-week intelligence summation: critical events reviewed, upcoming trends profiled, and one vital compliance, audit, or legislative parameter mapped[cite: 734]."
    },
    {
      title: "Flash Alerts Dispatch",
      type: "Emergency Broadcast",
      desc: "Short, critical operational updates transmitted within 6 hours of a verified major infrastructure breach affecting the subscriber's vertical sector[cite: 732]."
    }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto space-y-16">
      
      {/* Top Header */}
      <div className="border-b border-outline-variant/20 pb-10 max-w-4xl">
        <span className="inline-block font-mono text-primary text-xs font-black tracking-widest uppercase bg-primary/10 px-3 py-1 rounded w-fit block mb-4">
          CyberNovr Intelligence Briefings
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-on-background tracking-tight uppercase mb-2">
          Strategic Briefing Matrix
        </h1>
        <p className="text-sm font-bold text-on-surface-variant opacity-80">
          Sector-Specific Cybersecurity Intelligence Delivered Directly to Your Inbox [cite: 727]
        </p>
      </div>

      {/* Briefing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {briefingCadence.map((brief, idx) => (
          <article key={idx} className="bg-white border border-outline-variant/30 p-8 rounded-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-outline-variant/10 pb-3">
                <span className="text-[10px] font-mono font-black text-primary uppercase tracking-widest">{brief.type}</span>
                <span className="material-symbols-outlined text-primary text-xl">mail</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface leading-tight">
                {brief.title}
              </h3>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed opacity-95">
                {brief.desc}
              </p>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}