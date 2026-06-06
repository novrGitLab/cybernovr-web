"use client";
import React, { useState } from "react";

export default function NovrGRCPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const modules = [
    { title: "Risk Management Matrix", desc: "Automates multi-tier risk identification, quantification maps, mitigation treatment controls, and live asset metric tracking." },
    { title: "Compliance Mapping Suite", desc: "Maps internal network parameters instantly onto strict regulatory standards including SOC 2, ISO 27001, PCI DSS, GDPR, and NDPA." },
    { title: "Audit Log Management", desc: "Maintains an unalterable audit-ready repository ledger, coordinating workflow tickets and internal verification controls cleanly." },
    { title: "Third-Party Assessment", desc: "Scores vendor parameter risks, monitors data transit liabilities, and evaluates supply chain vulnerabilities." }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto space-y-20">
      
      {/* Top Heading */}
      <div className="border-b border-outline-variant/20 pb-10 max-w-4xl">
        <span className="inline-block font-mono text-primary text-xs font-black tracking-widest uppercase bg-primary/10 px-3 py-1 rounded w-fit block mb-4">
          Automated Compliance Suite
        </span>
        <h1 className="text-4xl font-black text-on-surface tracking-tight uppercase mb-2">
          NovrGRC Platform
        </h1>
        <p className="text-sm font-bold text-primary uppercase tracking-widest">
          Next-Generation Multi-Tenanted Governance, Risk &amp; Compliance Management
        </p>
        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed pt-6">
          NovrGRC delivers complete, multi-tenanted visibility of enterprise cyber risks and regulatory alignment. By blending automated risk quantification models with real-time cyber posture scoring, the platform eliminates manual auditing bottlenecks and unifies policy enforcement across disparate teams.
        </p>
      </div>

      {/* Modules Framework */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-on-surface uppercase tracking-tight">Platform Core Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((m, idx) => (
            <div key={idx} className="bg-white border border-outline-variant/30 p-6 md:p-8 rounded-xl shadow-sm space-y-3">
              <span className="material-symbols-outlined text-primary text-2xl p-2 bg-primary/5 rounded w-fit block">hub</span>
              <h3 className="text-lg font-bold text-on-surface leading-tight">{m.title}</h3>
              <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed opacity-90">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dark Cyberpunk Form Container */}
      <section className="bg-[#191c1e] text-white rounded-xl border border-white/10 p-8 md:p-12 shadow-2xl max-w-3xl mx-auto">
        <div className="mb-8 text-center md:text-left">
          <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Initialize NovrGRC Access</h3>
          <p className="text-xs text-white/60">Request multi-tenant environment access logs and standard integration matrices.</p>
        </div>

        {formSubmitted ? (
          <div className="p-6 text-center bg-primary/10 border border-primary/30 rounded-lg space-y-2">
            <span className="material-symbols-outlined text-primary text-3xl">verified</span>
            <p className="text-sm font-bold text-white uppercase">Inquiry Staged Successfully</p>
            <p className="text-xs text-white/60">A GRC implementation strategist will coordinate your audit profile within 12 hours.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
              <input type="email" placeholder="Corporate Email *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
            </div>
            <input type="text" placeholder="Enterprise Domain" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
            <textarea rows={4} placeholder="Outline your regulatory baseline goals (e.g., ISO 27001, SOC 2, NDPA alignment)..." className="w-full bg-white/5 border border-white/10 rounded p-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none" />
            <button type="submit" className="w-full bg-primary text-white py-4 font-bold rounded hover:bg-purple-900 active:scale-[0.99] transition-all text-xs uppercase tracking-widest shadow-lg">
              Initialize Compliance Audit
            </button>
          </form>
        )}
      </section>

    </div>
  );
}