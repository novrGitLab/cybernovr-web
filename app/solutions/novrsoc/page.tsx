"use client";
import React, { useState } from "react";
import { submitWeb3Form } from "@/app/web3forms";
import { Brain, Cloud, ShieldAlert, Fingerprint, CheckCircle2 } from "lucide-react";

export default function NovrSOCPage() {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    try {
      const formData = new FormData(form);
      formData.append("form_name", "novrsocDemo");
      formData.append("form_source", "NovrSOC Page");
      await submitWeb3Form(formData);
      setSucceeded(true);
      form.reset();
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const pillars = [
    { icon: Brain, title: "Threat Management", desc: "Provides threat visibility (map), incident management, alerting, and communication." },
    { icon: Cloud, title: "Threat Response", desc: "Determine the level of risk to the organization posed by the suspect domain/URL/App." },
    { icon: ShieldAlert, title: "Threat Advisory (NovrAlert)", desc: "Updated threat advisories and dark web alerts, including threat actors, status, and recommendations." },
    { icon: Fingerprint, title: "Social Suite", desc: "Monitoring social media platforms and sites for trademark infringement and unauthorized accounts." }
  ];

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-20 w-full bg-white text-zinc-900 antialiased">
      
      {/* Top Main Heading Block */}
      <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left">
        <span className="inline-block font-mono text-red-700 text-xs font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded mb-4">
          Flagship SOC Platform
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-2">
          NovrSOC
        </h1>
        <p className="text-xs md:text-sm font-bold text-zinc-400 uppercase tracking-widest font-mono">
          AI-DRIVEN PLATFORM FOR 24/7 SOC OPERATIONS
        </p>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed pt-6 font-normal">
          Professional-grade 24/7/365 security monitoring, SIEM, and threat management of your assets with high-precision incident response, automated SOAR playbooks, and a digital forensic platform.
        </p>
      </div>

      {/* Core Technology Pillars */}
      <section className="space-y-6 text-left">
        <h2 className="text-sm md:text-[15px] font-black uppercase tracking-widest text-zinc-400">System Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl flex gap-4 items-start hover:border-purple-900/20 transition-all duration-300 shadow-sm">
                <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-zinc-900 uppercase tracking-tight">{p.title}</h3>
                  <p className="text-zinc-600 text-xs md:text-sm leading-relaxed font-normal">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Corporate High-Contrast Form Box */}
      <section className="bg-zinc-950 text-white rounded-2xl border border-zinc-900 p-8 md:p-12 shadow-2xl max-w-3xl mx-auto text-left">
        <div className="mb-8 space-y-1">
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">Request a Demo</h3>
          <p className="text-xs text-zinc-400 font-medium leading-relaxed">Please complete this form. A member of our team will reach out to schedule a demo.</p>
        </div>

        {succeeded ? (
          <div className="py-10 text-center flex flex-col items-center justify-center space-y-3">
            <CheckCircle2 className="h-12 w-12 text-emerald-500 animate-bounce" />
            <h4 className="text-[15px] font-black uppercase tracking-wide text-zinc-900">
              Request Submitted
            </h4>
            <p className="text-xs text-zinc-500 max-w-xs mx-auto font-medium">
              Our team will be in touch within 24 hours.
            </p>
            <button onClick={() => setSucceeded(false)} className="text-[13px] text-red-600 hover:text-red-700 font-mono font-bold uppercase tracking-wider mt-2">
              Submit Another Request
            </button>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider">Full Name *</label>
                <input type="text" name="name" placeholder="Your name" required className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all font-medium" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider">Corporate Email *</label>
                <input type="email" name="email" placeholder="you@company.com" required className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all font-medium" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider">Company Name *</label>
              <input type="text" name="company" placeholder="Enterprise entity name" required className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all font-medium" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider block">Comments</label>
              <textarea name="comments" rows={4} placeholder="Describe your asset landscape or endpoint monitoring needs..." className="w-full bg-zinc-900 border border-zinc-700 rounded p-4 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all resize-none font-medium" />
            </div>
            <button type="submit"               disabled={submitting} className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-black uppercase tracking-widest rounded shadow-xl transition-all text-xs font-mono disabled:opacity-50 disabled:cursor-not-allowed">
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </section>

    </div>
  );
}