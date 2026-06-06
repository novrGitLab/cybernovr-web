"use client";
import React, { useState } from "react";

export default function ComplianceManagementPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const frameworks = [
    { name: "SOC 2 Type II", standard: "Trust Services Criteria" },
    { name: "ISO 27001:2022", standard: "Information Security Management" },
    { name: "PCI DSS 4.0", standard: "Payment Card Industry Protection" },
    { name: "HIPAA Security", standard: "Healthcare Information Privacy" },
    { name: "GDPR / NDPA", standard: "Data Protection & Privacy Compliance" },
    { name: "NIST CSF", standard: "National Infrastructure Framework" },
    { name: "COBIT", standard: "Enterprise IT Governance" },
    { name: "CIS Controls", standard: "Critical Security Benchmarks" }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto space-y-20">
      
      {/* Header Panel */}
      <div className="border-b border-outline-variant/20 pb-10 max-w-4xl">
        <span className="inline-block font-mono text-primary text-xs font-black tracking-widest uppercase bg-primary/10 px-3 py-1 rounded w-fit block mb-4">
          Professional Security Service
        </span>
        <h1 className="text-4xl font-black text-on-surface tracking-tight uppercase mb-2">
          Compliance Management
        </h1>
        <p className="text-sm font-bold text-primary uppercase tracking-widest">
          International Security Framework Alignment &amp; Audit Acceleration
        </p>
        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed pt-6">
          CYBERNOVR facilitates structured, continuous compliance alignment with international cybersecurity standards, data protection acts, and critical financial sector security requirements. We design and execute target control metrics to turn complex regulatory audits into a seamless process.
        </p>
      </div>

      {/* Frameworks Grid */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-on-surface uppercase tracking-tight">Supported Frameworks</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {frameworks.map((fw, idx) => (
            <div key={idx} className="bg-white border border-outline-variant/30 p-5 rounded-lg shadow-sm text-center space-y-1 hover:border-primary/30 transition-colors">
              <span className="material-symbols-outlined text-primary text-xl block mb-1">verified_user</span>
              <h4 className="font-mono text-xs font-black text-on-surface">{fw.name}</h4>
              <p className="text-[10px] text-on-surface-variant/70 tracking-wide leading-tight">{fw.standard}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dark Cyberpunk Intake Form Component */}
      <section className="bg-[#191c1e] text-white rounded-xl border border-white/10 p-8 md:p-12 shadow-2xl max-w-3xl mx-auto">
        <div className="mb-8 text-center md:text-left">
          <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Initialize Compliance Alignment</h3>
          <p className="text-xs text-white/60">Schedule an internal gap analysis to map controls and prepare for formal audits.</p>
        </div>

        {formSubmitted ? (
          <div className="p-6 text-center bg-primary/10 border border-primary/30 rounded-lg space-y-2">
            <span className="material-symbols-outlined text-primary text-3xl">verified</span>
            <p className="text-sm font-bold text-white uppercase">Compliance Ticket Staged</p>
            <p className="text-xs text-white/60">A compliance engineer will contact your technical operations desk shortly.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
              <input type="email" placeholder="Corporate Email *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
            </div>
            <input type="text" placeholder="Primary Target Framework (e.g., ISO 27001, PCI DSS)" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
            <textarea rows={4} placeholder="Describe your target audit deadlines or active security framework objectives..." className="w-full bg-white/5 border border-white/10 rounded p-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none" />
            <button type="submit" className="w-full bg-primary text-white py-4 font-bold rounded hover:bg-purple-900 active:scale-[0.99] transition-all text-xs uppercase tracking-widest shadow-lg">
              Launch Gap Analysis
            </button>
          </form>
        )}
      </section>

    </div>
  );
}