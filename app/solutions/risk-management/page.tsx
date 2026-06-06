"use client";
import React, { useState } from "react";

export default function RiskManagementPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const matrices = [
    { title: "Risk Identification Matrix", desc: "Systematic mapping of data assets, infrastructure targets, cloud perimeters, and boundary transit exposures." },
    { title: "Advanced Risk Assessment", desc: "Quantifying structural risk metrics based on likelihood factors, adversary profiles, and system exposure levels." },
    { title: "Treatment Optimization", desc: "Configuring hardened security controls and deploying targeted technical remediations to safely mitigate threats." },
    { title: "Continuous Monitoring Loops", desc: "Proactive, real-time risk validation tracking to capture changing anomalies across the enterprise environment." }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto space-y-20">
      
      {/* Header Panel */}
      <div className="border-b border-outline-variant/20 pb-10 max-w-4xl">
        <span className="inline-block font-mono text-primary text-xs font-black tracking-widest uppercase bg-primary/10 px-3 py-1 rounded w-fit block mb-4">
          Professional Consulting Delivery
        </span>
        <h1 className="text-4xl font-black text-on-surface tracking-tight uppercase mb-2">
          Risk Management Advisory
        </h1>
        <p className="text-sm font-bold text-primary uppercase tracking-widest">
          Comprehensive Risk Identification, Treatment &amp; Posture Optimization
        </p>
        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed pt-6">
          CYBERNOVR delivers professional risk identification, assessment, treatment, and monitoring parameters engineered for high-stakes digital assets. Our structured methodologies cover organizational, technical, physical, and legal security parameters deployed natively across the **4Rs of cybersecurity resilience**.
        </p>
      </div>

      {/* Pillars Grid */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-on-surface uppercase tracking-tight">The 4-Step Risk Lifecycle</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matrices.map((m, idx) => (
            <div key={idx} className="bg-white border border-outline-variant/30 p-6 md:p-8 rounded-xl shadow-sm flex gap-4 items-start">
              <span className="material-symbols-outlined text-primary text-3xl p-2 bg-primary/5 rounded shrink-0">shield_with_heart</span>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-on-surface leading-tight">{m.title}</h3>
                <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed opacity-90">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dark Cyberpunk Intake Form Component */}
      <section className="bg-[#191c1e] text-white rounded-xl border border-white/10 p-8 md:p-12 shadow-2xl max-w-3xl mx-auto">
        <div className="mb-8 text-center md:text-left">
          <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Deploy Risk Assessment</h3>
          <p className="text-xs text-white/60">Initialize an infrastructure-wide risk mapping evaluation with our defensive architects.</p>
        </div>

        {formSubmitted ? (
          <div className="p-6 text-center bg-primary/10 border border-primary/30 rounded-lg space-y-2">
            <span className="material-symbols-outlined text-primary text-3xl">verified</span>
            <p className="text-sm font-bold text-white uppercase">Assessment Profile Registered</p>
            <p className="text-xs text-white/60">A risk quantification engineer will initialize target parameters with your team shortly.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
              <input type="email" placeholder="Corporate Email *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
            </div>
            <input type="text" placeholder="Estimated Asset Scope Size (e.g., Endpoints, Cloud Nodes)" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
            <textarea rows={4} placeholder="Describe your primary infrastructure footprint or core compliance parameters..." className="w-full bg-white/5 border border-white/10 rounded p-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none" />
            <button type="submit" className="w-full bg-primary text-white py-4 font-bold rounded hover:bg-purple-900 active:scale-[0.99] transition-all text-xs uppercase tracking-widest shadow-lg">
              Launch Risk Audit
            </button>
          </form>
        )}
      </section>

    </div>
  );
}