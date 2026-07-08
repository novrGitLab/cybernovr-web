"use client";
import React, { useState } from "react";
// FIXED: Replaced 'FileLines' with the valid export name 'FileText' to pass compilation
import { Zap, Search, Globe, FileText, CheckCircle2 } from "lucide-react";

export default function SecuBreachPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", url: "", targetDetails: "" });

  const capabilities = [
    { icon: Zap, t: "Passive Scanning", d: "No packet injection or content access, ensuring safe monitoring." },
    { icon: Search, t: "CVE-Driven Engine", d: "Advanced detection engine based on Common Vulnerabilities and Exposures." },
    { icon: Globe, t: "Metadata-Only", d: "Inspection strictly via metadata to ensure legal compliance." },
    { icon: FileText, t: "Regulatory Tagging", d: "Context-aware tagging for GDPR, HIPAA, SOX, PCI, NDPA, etc." }
  ];

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-20 w-full bg-white text-zinc-900 antialiased">
      
      {/* Heading Header */}
      <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left">
        <span className="inline-block font-mono text-red-700 text-xs font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded w-fit block mb-4">
          Vulnerability Management Platform
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-2">
          SecuBreach
        </h1>
        <p className="text-xs md:text-sm font-bold text-zinc-400 uppercase tracking-widest font-mono">
          Nigeria’s #1 Vulnerability Management Solution
        </p>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed pt-6 font-normal">
          Key Benefits<br />✓ Identifies vulnerabilities without disrupting operations.<br />✓ Context-aware regulatory tagging for compliance.<br />✓ Centralized or distributed deployment options.
        </p>
      </div>

      {/* Grid Capability Cards */}
      <section className="space-y-6 text-left">
        <div className="border-b border-zinc-100 pb-2">
          <h2 className="text-sm md:text-[15px] font-black uppercase tracking-widest text-zinc-400">Secure Your Infrastructure with SecuBreach</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl flex flex-col justify-between space-y-6 hover:border-purple-900/20 transition-all duration-300 shadow-sm">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold text-zinc-900 uppercase tracking-tight leading-snug">{c.t}</h4>
                </div>
                <p className="text-zinc-600 text-xs md:text-sm leading-relaxed font-normal">{c.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Corporate High-Contrast Form Box */}
      <section className="bg-zinc-950 text-white rounded-2xl border border-zinc-900 p-8 md:p-12 shadow-2xl max-w-3xl mx-auto text-left">
        <div className="mb-8 space-y-1">
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">LEARN HOW OUR AI-POWERED VULNERABILITY MANAGEMENT SYSTEM CAN PROTECT YOUR ORGANISATION.</h3>
          <p className="text-xs text-zinc-400 font-medium leading-relaxed">Please complete this form. A member of our team will reach out to schedule a demo.</p>
        </div>

        {formSubmitted ? (
          <div className="p-8 text-center bg-purple-950/[0.02] border-2 border-dashed border-purple-900/20 rounded-xl flex flex-col items-center justify-center space-y-3">
            <CheckCircle2 className="h-12 w-12 text-emerald-500 animate-bounce" />
            <p className="text-base font-bold text-white uppercase tracking-wider font-mono">Exposure Scan Provisioned</p>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed font-medium">An implementation analyst will initialize target parameters with your ops team shortly.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider">Full Name *</label>
                <input type="text" placeholder="Your name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-all font-medium" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider">Corporate Email *</label>
                <input type="email" placeholder="you@company.com" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-all font-medium" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider">Target Domain URL *</label>
              <input type="text" placeholder="company.com" required value={formData.url} onChange={(e) => setFormData({...formData, url: e.target.value})} className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-all font-medium" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider block">Comment</label>
              <textarea rows={4} placeholder="Detail specific application endpoints or infrastructure systems to safely target..." value={formData.targetDetails} onChange={(e) => setFormData({...formData, targetDetails: e.target.value})} className="w-full bg-zinc-900 border border-zinc-700 rounded p-4 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-all resize-none font-medium" />
            </div>
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-black uppercase tracking-widest rounded shadow-xl transition-all text-xs font-mono">
              Submit
            </button>
          </form>
        )}
      </section>

    </div>
  );
}