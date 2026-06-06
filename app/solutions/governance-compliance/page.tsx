"use client";
import React, { useState } from "react";

export default function GovernanceCompliancePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const capabilities = [
    { title: "Strategic Security Governance", desc: "Formulating robust corporate cyber governance rules aligned with institutional data frameworks and multi-tenant security structures." },
    { title: "Policy Analysis & Drafting", desc: "Automating operational policy alignment to match national directives, critical frameworks, and internal performance logs cleanly." },
    { title: "Ecosystem Security Baselines", desc: "Establishing deep corporate parameter controls to stabilize infrastructure behavior across edge boundaries." },
    { title: "Strategic Oversight Logs", desc: "Providing executive-level auditing matrices to evaluate cybersecurity controls and measure long-term enterprise resilience." }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto space-y-20">
      
      {/* Header Panel */}
      <div className="border-b border-outline-variant/20 pb-10 max-w-4xl">
        <span className="inline-block font-mono text-primary text-xs font-black tracking-widest uppercase bg-primary/10 px-3 py-1 rounded w-fit block mb-4">
          Professional Consulting Delivery
        </span>
        <h1 className="text-4xl font-black text-on-surface tracking-tight uppercase mb-2">
          Governance &amp; Cybersecurity Compliance
        </h1>
        <p className="text-sm font-bold text-primary uppercase tracking-widest">
          Comprehensive Governance Architecture For Critical Information Infrastructure
        </p>
        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed pt-6">
          CYBERNOVR specializes in defining robust cybersecurity governance frameworks utilizing holistic GRC practices. By pairing strategic board-level advisory with automated data validation systems, we map technical controls cleanly against sovereign expectations, eliminating operational policy gaps.
        </p>
      </div>

      {/* Core Capabilities */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-on-surface uppercase tracking-tight">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((c, idx) => (
            <div key={idx} className="bg-white border border-outline-variant/30 p-6 md:p-8 rounded-xl shadow-sm flex gap-4 items-start">
              <span className="material-symbols-outlined text-primary text-3xl p-2 bg-primary/5 rounded shrink-0">gavel</span>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-on-surface leading-tight">{c.title}</h3>
                <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed opacity-90">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dark Cyberpunk Intake Form Component */}
      <section className="bg-[#191c1e] text-white rounded-xl border border-white/10 p-8 md:p-12 shadow-2xl max-w-3xl mx-auto">
        <div className="mb-8 text-center md:text-left">
          <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Initiate Governance Framework</h3>
          <p className="text-xs text-white/60">Schedule a scoping briefing session with our principal GRC advisory consultants.</p>
        </div>

        {formSubmitted ? (
          <div className="p-6 text-center bg-primary/10 border border-primary/30 rounded-lg space-y-2">
            <span className="material-symbols-outlined text-primary text-3xl">verified</span>
            <p className="text-sm font-bold text-white uppercase">Consultation Staged</p>
            <p className="text-xs text-white/60">An advisory coordinator will verify your institutional domain logs shortly.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
              <input type="email" placeholder="Corporate Email *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
            </div>
            <input type="text" placeholder="Company / Organization Name" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
            <textarea rows={4} placeholder="Describe your current governance infrastructure gaps or policy objectives..." className="w-full bg-white/5 border border-white/10 rounded p-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none" />
            <button type="submit" className="w-full bg-primary text-white py-4 font-bold rounded hover:bg-purple-900 active:scale-[0.99] transition-all text-xs uppercase tracking-widest shadow-lg">
              Initialize Scoping Protocol
            </button>
          </form>
        )}
      </section>

    </div>
  );
}