"use client";
import React, { useState } from "react";

export default function DueDiligencePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const pillars = [
    { title: "Risk Profiling Diagnostics", desc: "Comprehensive structural discovery mapping to evaluate target system vulnerabilities and isolate inherited software liabilities." },
    { title: "Penetration Testing Runs", desc: "Rigorous mock exploitation campaigns targeting cloud boundaries and data switches to find latent security flaws." },
    { title: "IoC Pattern Identification", desc: "Scanning network logs and transaction metadata stacks to intercept pre-existing Indicators of Compromise safely." },
    { title: "Remediation Cost Assessment", desc: "Quantifying explicit financial and engineering costs required to bring target networks up to baseline corporate compliance standards." }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto space-y-20">
      
      {/* Header Panel */}
      <div className="border-b border-outline-variant/20 pb-10 max-w-4xl">
        <span className="inline-block font-mono text-primary text-xs font-black tracking-widest uppercase bg-primary/10 px-3 py-1 rounded w-fit block mb-4">
          Professional Advisory Delivery
        </span>
        <h1 className="text-4xl font-black text-on-surface tracking-tight uppercase mb-2">
          Cybersecurity Due Diligence
        </h1>
        <p className="text-sm font-bold text-primary uppercase tracking-widest">
          Pre-Transaction Security Posture Evaluation &amp; Liability Isolation
        </p>
        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed pt-6">
          CYBERNOVR manages comprehensive technical cybersecurity due diligence assessments prior to corporate mergers, acquisitions, venture partnerships, or major transaction switches. Our specialized engineering diagnostics minimize technical risk by identifying latent liabilities before closing.
        </p>
      </div>

      {/* Grid Pillars */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-on-surface uppercase tracking-tight">Audit Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, idx) => (
            <div key={idx} className="bg-white border border-outline-variant/30 p-6 md:p-8 rounded-xl shadow-sm flex gap-4 items-start">
              <span className="material-symbols-outlined text-primary text-3xl p-2 bg-primary/5 rounded shrink-0">lock_reset</span>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-on-surface leading-tight">{p.title}</h3>
                <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed opacity-90">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dark Cyberpunk Intake Form Component */}
      <section className="bg-[#191c1e] text-white rounded-xl border border-white/10 p-8 md:p-12 shadow-2xl max-w-3xl mx-auto">
        <div className="mb-8 text-center md:text-left">
          <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Request Due Diligence Review</h3>
          <p className="text-xs text-white/60">Initialize an end-to-end security audit for upcoming transactions or infrastructure acquisitions.</p>
        </div>

        {formSubmitted ? (
          <div className="p-6 text-center bg-primary/10 border border-primary/30 rounded-lg space-y-2">
            <span className="material-symbols-outlined text-primary text-3xl">verified</span>
            <p className="text-sm font-bold text-white uppercase">Diligence Request Staged</p>
            <p className="text-xs text-white/60">Our corporate advisory desk will coordinate non-disclosure agreements with your team within 24 hours.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
              <input type="email" placeholder="Corporate Email *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
            </div>
            <input type="text" placeholder="Target Industry Sector (e.g., Fintech, Infrastructure)" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
            <textarea rows={4} placeholder="Outline timeline constraints or specific transaction parameter scopes securely..." className="w-full bg-white/5 border border-white/10 rounded p-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none" />
            <button type="submit" className="w-full bg-primary text-white py-4 font-bold rounded hover:bg-purple-900 active:scale-[0.99] transition-all text-xs uppercase tracking-widest shadow-lg">
              Initialize Advisory Review
            </button>
          </form>
        )}
      </section>

    </div>
  );
}