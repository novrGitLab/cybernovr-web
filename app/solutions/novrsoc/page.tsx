"use client";
import React, { useState } from "react";

export default function NovrSOCPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const pillars = [
    { icon: "psychology", title: "Self-Learning AI Engine", desc: "Advanced autonomous defense layers that detect and neutralize novel attack variants in real time across your ecosystem." },
    { icon: "cloud_done", title: "Cross-Environment Coverage", desc: "Omnipresent visibility and protection engineered specifically for Cloud, Enterprise Email, OT, and hybrid network layers." },
    { icon: "crisis_alert", title: "Threat Response Hotline", desc: "Rapid 24/7 emergency containment loops backed by elite defensive countermeasure specialists." },
    { icon: "fingerprint", title: "Expert Digital Forensics", desc: "Comprehensive, court-admissible post-incident forensics to safely isolate breach vectors and identify threat actor profiles." }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto space-y-20">
      
      {/* Top Main Heading Block */}
      <div className="border-b border-outline-variant/20 pb-10 max-w-4xl">
        <span className="inline-block font-mono text-primary text-xs font-black tracking-widest uppercase bg-primary/10 px-3 py-1 rounded w-fit block mb-4">
          Flagship MSSP Platform
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight uppercase mb-2">
          NovrSOC
        </h1>
        <p className="text-sm font-bold text-primary uppercase tracking-widest">
          AI-Powered Autonomous Cyber Defence &amp; 24/7 Security Operations
        </p>
        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed pt-6">
          NovrSOC delivers professional-grade, 24/7/365 monitoring and management of your digital assets against evolving threats. Powered by self-learning AI heuristics and integrated automation, it brings institutional-grade security architecture to enterprise environments with high precision and accurate protection.
        </p>
      </div>

      {/* Core Technology Pillars */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-on-surface uppercase tracking-tight">System Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, idx) => (
            <div key={idx} className="bg-white border border-outline-variant/30 p-6 md:p-8 rounded-xl shadow-sm flex gap-4 items-start">
              <span className="material-symbols-outlined text-primary text-3xl p-2 bg-primary/5 rounded shrink-0">{p.icon}</span>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-on-surface leading-tight">{p.title}</h3>
                <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed opacity-90">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrated Dark Cyberpunk Contact Form Card Block */}
      <section className="bg-[#191c1e] text-white rounded-xl border border-white/10 p-8 md:p-12 shadow-2xl max-w-3xl mx-auto">
        <div className="mb-8 text-center md:text-left">
          <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Request NovrSOC Demo Console</h3>
          <p className="text-xs text-white/60">Initialize an enterprise proof-of-concept pipeline with our security architects.</p>
        </div>

        {formSubmitted ? (
          <div className="p-6 text-center bg-primary/10 border border-primary/30 rounded-lg space-y-2">
            <span className="material-symbols-outlined text-primary text-3xl">verified</span>
            <p className="text-sm font-bold text-white uppercase">Console Staged Successfully</p>
            <p className="text-xs text-white/60">An operations coordinator will contact your corporate domain shortly.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
              <input type="email" placeholder="Corporate Email *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
            </div>
            <input type="text" placeholder="Company Name" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
            <textarea rows={4} placeholder="Describe your asset landscape or endpoint monitoring needs..." className="w-full bg-white/5 border border-white/10 rounded p-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none" />
            <button type="submit" className="w-full bg-primary text-white py-4 font-bold rounded hover:bg-purple-900 active:scale-[0.99] transition-all text-xs uppercase tracking-widest shadow-lg">
              Deploy Sandbox Console
            </button>
          </form>
        )}
      </section>

    </div>
  );
}