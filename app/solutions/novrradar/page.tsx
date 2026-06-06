"use client";
import React, { useState } from "react";

export default function NovrRadarPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const points = [
    { icon: "visibility_off", t: "Passive Monitoring", d: "Deploys non-intrusively directly at main internet gateway boundaries without altering network traffic speed benchmarks." },
    { icon: "stream", t: "Metadata Analysis Only", d: "Safely dissects raw IP values, ports, protocols, and routing flow architectures to identify systematic threat signatures." },
    { icon: "privacy_tip", t: "Absolute Privacy Preserved", d: "Zero content-level packet or message payload extraction occurs, fully maintaining privacy and compliance." },
    { icon: "radar", t: "AI-Powered Intelligence", d: "Maps unmapped novel zero-day exploits and malware sequences utilizing highly advanced neural network filters." }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto space-y-20">
      
      {/* Main Header Block */}
      <div className="border-b border-outline-variant/20 pb-10 text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block font-mono text-primary text-xs font-black tracking-widest uppercase bg-primary/10 px-4 py-1 rounded-full w-fit mx-auto">
          Gateway Protection Engine
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-on-surface tracking-tight uppercase">
          NovrRADAR
        </h1>
        <p className="text-sm font-bold text-primary uppercase tracking-widest">
          AI-Powered Passive Gateway IoC Threat Detection Solution
        </p>
        <p className="text-on-surface-variant text-sm md:text-base pt-4 leading-relaxed">
          NovrRADAR functions at primary internet gateway nodes to actively isolate active Indicators of Compromise (IoCs). By scanning network metadata patterns exclusively, it provides continuous visibility while completely safeguarding structural data privacy.
        </p>
      </div>

      {/* 4 Feature Cards Layout Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {points.map((p, idx) => (
          <div key={idx} className="bg-white border border-outline-variant/30 p-6 rounded-xl shadow-sm flex gap-4 items-start hover:border-primary/20 transition-all">
            <span className="material-symbols-outlined text-primary text-2xl p-2 bg-primary/5 rounded shrink-0">{p.icon}</span>
            <div className="space-y-1">
              <h3 className="font-bold text-on-surface text-base">{p.t}</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed opacity-95">{p.d}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Built-in Dark Form Box Card Panel Section */}
      <section className="bg-[#191c1e] text-white rounded-xl border border-white/10 p-8 md:p-12 shadow-2xl max-w-3xl mx-auto">
        <div className="mb-8 text-center md:text-left">
          <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Request Gateway Deployment Blueprint</h3>
          <p className="text-xs text-white/60">Consult with our network security experts to define your boundary parameters.</p>
        </div>

        {formSubmitted ? (
          <div className="p-6 text-center bg-primary/10 border border-primary/30 rounded-lg space-y-2">
            <span className="material-symbols-outlined text-primary text-3xl">verified</span>
            <p className="text-sm font-bold text-white uppercase">Integration Ticket Staged</p>
            <p className="text-xs text-white/60">Our gateway infrastructure engineers will schedule an operations briefing within 24 hours.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
              <input type="email" placeholder="Corporate Email *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
            </div>
            <input type="text" placeholder="Estimated Gateway Network Traffic Volume (e.g., 10Gbps)" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
            <textarea rows={4} placeholder="Outline your primary edge routing architectures or edge gateway configurations..." className="w-full bg-white/5 border border-white/10 rounded p-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none" />
            <button type="submit" className="w-full bg-primary text-white py-4 font-bold rounded hover:bg-purple-900 active:scale-[0.99] transition-all text-xs uppercase tracking-widest shadow-lg">
              Generate Integration Blueprint
            </button>
          </form>
        )}
      </section>

    </div>
  );
}