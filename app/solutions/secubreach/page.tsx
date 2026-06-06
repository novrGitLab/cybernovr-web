"use client";
import React, { useState } from "react";

export default function SecuBreachPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const capabilities = [
    { icon: "bolt", t: "Zero-Touch Autonomous Operations", d: "Passive, continuous monitoring vectors that discover exposures around the clock with zero manual scheduling loops." },
    { icon: "troubleshoot", t: "CVE Criticality Matching Engine", d: "Correlates the complete global NIST CVE index with custom heuristic models to score risks by real exploitability levels." },
    { icon: "language", t: "Global Blacklist Correlation", d: "Cross-checks active asset headers with primary directories like Spamhaus, CBL, and UCEPROTECT dynamically." },
    { icon: "description", t: "Creative Remediation Reports", d: "Generates step-by-step developer blueprints mapped straight from threat discovery to successful regulatory verification." }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto space-y-20">
      
      {/* Heading Header */}
      <div className="border-b border-outline-variant/20 pb-10 max-w-4xl">
        <span className="inline-block font-mono text-primary text-xs font-black tracking-widest uppercase bg-primary/10 px-3 py-1 rounded w-fit block mb-4">
          Risk &amp; Vulnerability Platform
        </span>
        <h1 className="text-4xl font-black text-on-surface tracking-tight uppercase mb-2">
          SecuBreach
        </h1>
        <p className="text-sm font-bold text-primary uppercase tracking-widest">
          Nigeria’s #1 Vulnerability Threat &amp; Exposure Management Solution
        </p>
        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed pt-6">
          SecuBreach bridges the gap between raw web asset scanning and enterprise regulatory compliance mapping. By pairing passive, continuous monitoring with automated threat prioritization logic, it scans networks and web applications comprehensively to identify bugs before external adversaries do.
        </p>
      </div>

      {/* Grid Capability Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((c, i) => (
          <div key={i} className="bg-white border border-outline-variant/30 p-6 rounded-xl flex flex-col justify-between space-y-4 hover:border-primary/30 transition-colors shadow-sm">
            <div className="space-y-3">
              <span className="material-symbols-outlined text-primary text-3xl">{c.icon}</span>
              <h4 className="text-base font-bold text-on-surface leading-snug">{c.t}</h4>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed opacity-95">{c.d}</p>
          </div>
        ))}
      </section>

      {/* Cyberpunk Contact Form Card Component */}
      <section className="bg-[#191c1e] text-white rounded-xl border border-white/10 p-8 md:p-12 shadow-2xl max-w-3xl mx-auto">
        <div className="mb-8 text-center md:text-left">
          <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Initialize Threat Exposure Assessment</h3>
          <p className="text-xs text-white/60">Deploy SecuBreach scanners against external corporate network parameters.</p>
        </div>

        {formSubmitted ? (
          <div className="p-6 text-center bg-primary/10 border border-primary/30 rounded-lg space-y-2">
            <span className="material-symbols-outlined text-primary text-3xl">verified</span>
            <p className="text-sm font-bold text-white uppercase">Exposure Scan Provisioned</p>
            <p className="text-xs text-white/60">An implementation analyst will initialize target parameters with your ops team shortly.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
              <input type="email" placeholder="Corporate Email *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
            </div>
            <input type="text" placeholder="Target Domain URL (e.g., company.com)" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
            <textarea rows={4} placeholder="Detail specific application endpoints or infrastructure systems to safely target..." className="w-full bg-white/5 border border-white/10 rounded p-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none" />
            <button type="submit" className="w-full bg-primary text-white py-4 font-bold rounded hover:bg-purple-900 active:scale-[0.99] transition-all text-xs uppercase tracking-widest shadow-lg">
              Launch Perimeter Scan
            </button>
          </form>
        )}
      </section>

    </div>
  );
}