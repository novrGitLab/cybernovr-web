"use client";
import React, { useState } from "react";
import { ShieldAlert, CheckSquare, FileText, Layers, CheckCircle2, X } from "lucide-react";

export default function NovrGRCPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", domain: "", goals: "" });

  const modules = [
    { title: "Risk Management Matrix", desc: "Automates multi-tier risk identification, quantification maps, mitigation treatment controls, and live asset metric tracking.", icon: ShieldAlert },
    { title: "Compliance Mapping Suite", desc: "Maps internal network parameters instantly onto strict regulatory standards including SOC 2, ISO 27001, PCI DSS, GDPR, and NDPA.", icon: CheckSquare },
    { title: "Audit Log Management", desc: "Maintains an unalterable audit-ready repository ledger, coordinating workflow tickets and internal verification controls cleanly.", icon: FileText },
    { title: "Third-Party Assessment", desc: "Scores vendor parameter risks, monitors data transit liabilities, and evaluates supply chain vulnerabilities.", icon: Layers }
  ];

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-20 w-full bg-white text-zinc-900 antialiased">
      
      {/* Top Heading */}
      <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left">
        <span className="inline-block font-mono text-red-700 text-xs font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded mb-4">
          Automated Compliance Suite
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-2">
          NovrGRC Platform
        </h1>
        <p className="text-xs md:text-sm font-bold text-zinc-400 uppercase tracking-widest font-mono">
          Next-Generation Multi-Tenanted Governance, Risk &amp; Compliance Management
        </p>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed pt-6 font-normal">
          NovrGRC delivers complete, multi-tenanted visibility of enterprise cyber risks and regulatory alignment. By blending automated risk quantification models with real-time cyber posture scoring, the platform eliminates manual auditing bottlenecks and unifies policy enforcement across disparate teams.
        </p>
      </div>

      {/* Modules Framework */}
      <section className="space-y-6 text-left">
        <h2 className="text-sm font-black uppercase tracking-widest text-zinc-400">Platform Core Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl space-y-4 hover:border-purple-900/20 transition-all duration-300 shadow-sm">
                <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">{m.title}</h3>
                  <p className="text-zinc-600 text-xs md:text-sm leading-relaxed mt-2 font-normal">{m.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Corporate High-Contrast Form Box */}
      <section className="bg-zinc-950 text-white rounded-2xl border border-zinc-900 p-8 md:p-12 shadow-2xl max-w-3xl mx-auto text-left">
        <div className="mb-8 space-y-1">
          <span className="text-[9px] font-black font-mono tracking-widest text-red-500 bg-red-600/10 border border-red-500/20 px-2.5 py-1 rounded uppercase">PROVISIONING</span>
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white pt-2">Initialize NovrGRC Access</h3>
          <p className="text-xs text-zinc-400 font-medium leading-relaxed">Request multi-tenant environment access logs and standard integration matrices.</p>
        </div>

        {formSubmitted ? (
          <div className="p-8 text-center bg-purple-950/[0.02] border-2 border-dashed border-purple-900/20 rounded-xl flex flex-col items-center justify-center space-y-3">
            <CheckCircle2 className="h-12 w-12 text-emerald-500 animate-bounce" />
            <p className="text-base font-bold text-white uppercase tracking-wider font-mono">Inquiry Staged Successfully</p>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed font-medium">A GRC implementation strategist will coordinate your audit profile within 12 hours.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider">Full Name *</label>
                <input type="text" placeholder="Your name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all font-medium" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider">Corporate Email *</label>
                <input type="email" placeholder="you@company.com" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all font-medium" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider">Enterprise Domain *</label>
              <input type="text" placeholder="company.com" required value={formData.domain} onChange={(e) => setFormData({...formData, domain: e.target.value})} className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all font-medium" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider block">Compliance Parameters</label>
              <textarea rows={4} placeholder="Outline your regulatory baseline goals..." value={formData.goals} onChange={(e) => setFormData({...formData, goals: e.target.value})} className="w-full bg-zinc-900 border border-zinc-700 rounded p-4 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all resize-none font-medium" />
            </div>
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-black uppercase tracking-widest rounded shadow-xl transition-all text-xs font-mono">
              Initialize Compliance Audit
            </button>
          </form>
        )}
      </section>

    </div>
  );
}