"use client";
import React, { useState } from "react";

export default function VaptAssessmentPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const scopeTargets = [
    { title: "External Perimeter Testing", desc: "Simulating external adversary playbooks against boundary firewalls, network routing endpoints, and public cloud surfaces." },
    { title: "Web Application & API Auditing", desc: "Rigorous vulnerability mapping across RESTful layers and applications matching OWASP Top 10 parameters." },
    { title: "Internal Network Diagnostics", desc: "Evaluating privilege escalation vectors and payload traversal boundaries safely from inside localized subnets." },
    { title: "Configuration Fault Discovery", desc: "Detecting misconfigured security headers, default setup credentials, and unpatched infrastructure systems." }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto space-y-20">
      
      {/* Top Header Block */}
      <div className="border-b border-outline-variant/20 pb-10 max-w-4xl">
        <span className="inline-block font-mono text-primary text-xs font-black tracking-widest uppercase bg-primary/10 px-3 py-1 rounded w-fit block mb-4">
          Technical Testing Protocol
        </span>
        <h1 className="text-4xl font-black text-on-surface tracking-tight uppercase mb-2">
          VAPT Services
        </h1>
        <p className="text-sm font-bold text-primary uppercase tracking-widest">
          Vulnerability Assessment &amp; Deep Penetration Testing
        </p>
        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed pt-6">
          Our VAPT delivery engineers highly precise testing operations to actively validate system boundaries. By safely simulating multi-vector attack scenarios against your enterprise infrastructure, we discover critical vulnerabilities before external malicious threat groups can compromise your network assets.
        </p>
      </div>

      {/* Target Competencies */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-on-surface uppercase tracking-tight">Testing Scope Matrix</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scopeTargets.map((target, idx) => (
            <div key={idx} className="bg-white border border-outline-variant/30 p-6 md:p-8 rounded-xl shadow-sm flex gap-4 items-start">
              <span className="material-symbols-outlined text-primary text-3xl p-2 bg-primary/5 rounded shrink-0">biometric_pest_control</span>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-on-surface leading-tight">{target.title}</h3>
                <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed opacity-90">{target.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dark Cyberpunk Registration Form */}
      <section className="bg-[#191c1e] text-white rounded-xl border border-white/10 p-8 md:p-12 shadow-2xl max-w-3xl mx-auto">
        <div className="mb-8 text-center md:text-left">
          <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Request VAPT Testing Run</h3>
          <p className="text-xs text-white/60">Define your system perimeters to coordinate a secure code or network infiltration test.</p>
        </div>

        {formSubmitted ? (
          <div className="p-6 text-center bg-primary/10 border border-primary/30 rounded-lg space-y-2">
            <span className="material-symbols-outlined text-primary text-3xl">verified</span>
            <p className="text-sm font-bold text-white uppercase">VAPT Protocol Initialized</p>
            <p className="text-xs text-white/60">Our offensive security principal will coordinate secure scope validation keys with your engineering leads.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
              <input type="email" placeholder="Corporate Email *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
            </div>
            <input type="text" placeholder="Testing Scope URLs / IP Subnet Blocks *" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" />
            <textarea rows={4} placeholder="Describe target architecture parameters, active endpoint counts, or testing environment window rules..." className="w-full bg-white/5 border border-white/10 rounded p-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none" />
            <button type="submit" className="w-full bg-primary text-white py-4 font-bold rounded hover:bg-purple-900 active:scale-[0.99] transition-all text-xs uppercase tracking-widest shadow-lg">
              Initialize Pentest Evaluation
            </button>
          </form>
        )}
      </section>

    </div>
  );
}