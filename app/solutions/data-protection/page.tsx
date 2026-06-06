"use client";
import React, { useState } from "react";

export default function DataProtectionPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const capabilities = [
    { title: "Data Protection Impact Assessments (DPIAs)", desc: "Conducting robust privacy gap evaluations to locate system risks before rolling out customer-facing database layers." },
    { title: "Ecosystem Data Mapping Tracks", desc: "Tracing full data lifecycle transit paths to ensure personal information remains completely secured inside local networks." },
    { title: "AI Data Model Governance", desc: "Configuring privacy baselines to shield training models from data-leak vulnerabilities and unauthorized exposure." },
    { title: "Privacy Breach Management", desc: "Setting up automated containment scripts and mandatory regulatory disclosure reporting timelines." }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto space-y-20">
      
      {/* Header Panel */}
      <div className="border-b border-outline-variant/20 pb-10 max-w-4xl">
        <span className="inline-block font-mono text-primary text-xs font-black tracking-widest uppercase bg-primary/10 px-3 py-1 rounded w-fit block mb-4">
          Licensed Compliance Delivery
        </span>
        <h1 className="text-4xl font-black text-on-surface tracking-tight uppercase mb-2">
          Data Protection &amp; Privacy (NDPC)
        </h1>
        <p className="text-sm font-bold text-primary uppercase tracking-widest">
          Official Data Protection Compliance Organization (DPCO) Advisory Services
        </p>
        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed pt-6">
          As a licensed Data Protection Compliance Organization (DPCO), CYBERNOVR provides comprehensive audit matrices to align corporate records with the Nigeria Data Protection Act (NDPA) and global regulations like the GDPR. We ensure your personal data flows are fully protected.
        </p>
      </div>

      {/* Core Competencies */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-on-surface uppercase tracking-tight">DPCO Service Matrix</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((c, idx) => (
            <div key={idx} className="bg-white border border-outline-variant/30 p-6 md:p-8 rounded-xl shadow-sm flex gap-4 items-start">
              <span className="material-symbols-outlined text-primary text-3xl p-2 bg-primary/5 rounded shrink-0">gpp_good</span>
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
          <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Initialize NDPA Privacy Audit</h3>
          <p className="text-xs text-white/60">Enlist our DPCO division to perform your statutory annual compliance mapping filings.</p>
        </div>

        {formSubmitted ? (
          <div className="p-6 text-center bg-primary/10 border border-primary/30 rounded-lg space-y-2">
            <span className="material-symbols-outlined text-primary text-3xl">verified</span>
            <p className="text-sm font-bold text-white uppercase">Privacy Scoping Registered</p>
            <p className="text-xs text-white/60">A data protection analyst will connect with your compliance desk shortly.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
              <input type="email" placeholder="Corporate Email *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
            </div>
            <input type="text" placeholder="Estimated Number of Data Subjects (e.g., Users, Employees)" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
            <textarea rows={4} placeholder="Detail any existing privacy policies, active databases, or upcoming system frameworks..." className="w-full bg-white/5 border border-white/10 rounded p-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none" />
            <button type="submit" className="w-full bg-primary text-white py-4 font-bold rounded hover:bg-purple-900 active:scale-[0.99] transition-all text-xs uppercase tracking-widest shadow-lg">
              Launch Data Protection Audit
            </button>
          </form>
        )}
      </section>

    </div>
  );
}