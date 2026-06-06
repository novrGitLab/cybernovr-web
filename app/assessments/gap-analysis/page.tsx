"use client";
import React, { useState } from "react";

export default function GapAnalysisAssessmentPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const steps = [
    { step: "A", title: "Control Baseline Mapping", desc: "Extracting present operational data metrics and mapping them directly onto international cybersecurity framework parameters." },
    { step: "B", title: "Infrastructure Gap Discovery", desc: "Isolating weak enforcement loops, missing verification ledgers, and unmapped database access records cleanly." },
    { step: "C", title: "Risk Prioritization Analysis", desc: "Scoring identified gaps based on statutory regulatory impact and calculating real operational defense scores." },
    { step: "D", title: "Remediation Roadmap Design", desc: "Generating a definitive compliance engineering checklist to quickly patch administrative faults and guarantee clean audit results." }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto space-y-20">
      
      {/* Top Header Block */}
      <div className="border-b border-outline-variant/20 pb-10 max-w-4xl">
        <span className="inline-block font-mono text-primary text-xs font-black tracking-widest uppercase bg-primary/10 px-3 py-1 rounded w-fit block mb-4">
          Framework Readiness Assessment
        </span>
        <h1 className="text-4xl font-black text-on-surface tracking-tight uppercase mb-2">
          Infosec Audits &amp; Gap Analysis
        </h1>
        <p className="text-sm font-bold text-primary uppercase tracking-widest">
          Strategic System Analysis &amp; Compliance Readiness Evaluation
        </p>
        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed pt-6">
          CYBERNOVR conducts comprehensive information security audits to align enterprise workflows with global frameworks. Our gap analysis reviews isolate procedural deficiencies and administrative flaws, giving management teams a reliable roadmap to cross-border statutory compliance.
        </p>
      </div>

      {/* Operational Steps Progress Grid */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-on-surface uppercase tracking-tight">The Auditing Lifecycle</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white border border-outline-variant/30 p-6 rounded-xl flex flex-col justify-between space-y-4 hover:border-primary/20 transition-colors shadow-sm">
              <div className="space-y-2">
                <span className="font-mono text-xs font-black text-primary bg-primary/10 px-2 py-0.5 rounded">PHASE {s.step}</span>
                <h4 className="text-base font-bold text-on-surface leading-tight pt-1">{s.title}</h4>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed opacity-95">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dark Cyberpunk Registration Form Component */}
      <section className="bg-[#191c1e] text-white rounded-xl border border-white/10 p-8 md:p-12 shadow-2xl max-w-3xl mx-auto">
        <div className="mb-8 text-center md:text-left">
          <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Launch Gap Analysis Audit</h3>
          <p className="text-xs text-white/60">Enlist our information security compliance division to evaluate your corporate framework readiness.</p>
        </div>

        {formSubmitted ? (
          <div className="p-6 text-center bg-primary/10 border border-primary/30 rounded-lg space-y-2">
            <span className="material-symbols-outlined text-primary text-3xl">verified</span>
            <p className="text-sm font-bold text-white uppercase">Gap Audit Scheduled</p>
            <p className="text-xs text-white/60">A lead infrastructure compliance practitioner will initialize control metrics with your office shortly.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
              <input type="email" placeholder="Corporate Email *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
            </div>
            <input type="text" placeholder="Primary Target Compliance Framework (e.g., ISO 27001, SOC 2, NDPA)" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
            <textarea rows={4} placeholder="Describe active policy systems or infrastructure deployment configurations you want audited..." className="w-full bg-white/5 border border-white/10 rounded p-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none" />
            <button type="submit" className="w-full bg-primary text-white py-4 font-bold rounded hover:bg-purple-900 active:scale-[0.99] transition-all text-xs uppercase tracking-widest shadow-lg">
              Deploy Audit Scanners
            </button>
          </form>
        )}
      </section>

    </div>
  );
}