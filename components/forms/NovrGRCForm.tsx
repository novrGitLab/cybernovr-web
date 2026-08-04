"use client";
import React, { useState } from "react";
import { submitWeb3Form } from "@/app/web3forms";
import { CheckCircle2 } from "lucide-react";

export default function NovrGRCForm() {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    try {
      const formData = new FormData(form);
      formData.append("form_name", "novrgrcDemo");
      formData.append("form_source", "NovrGRC Page");
      await submitWeb3Form(formData);
      setSucceeded(true);
      form.reset();
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  if (succeeded) {
    return (
      <div className="p-8 text-center bg-purple-950/[0.02] border-2 border-dashed border-purple-900/20 rounded-xl flex flex-col items-center justify-center space-y-3">
        <CheckCircle2 className="h-12 w-12 text-emerald-500 animate-bounce" />
        <p className="text-base font-bold text-white uppercase tracking-wider font-mono">Request Submitted</p>
        <p className="text-xs text-zinc-400 max-w-sm leading-relaxed font-medium">Our team will be in touch within 24 hours.</p>
        <button type="button" onClick={() => setSucceeded(false)} className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 font-bold rounded text-[13px] uppercase tracking-widest font-mono transition-all">
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider">Full Name *</label>
          <input type="text" placeholder="Your name" required name="name" className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all font-medium" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider">Corporate Email *</label>
          <input type="email" placeholder="you@company.com" required name="email" className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all font-medium" />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider">Company *</label>
        <input type="text" placeholder="company.com" required name="company" className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all font-medium" />
      </div>
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider block">How May We Help?</label>
        <textarea rows={4} placeholder="Outline your regulatory baseline goals..." name="comments" className="w-full bg-zinc-900 border border-zinc-700 rounded p-4 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all resize-none font-medium" />
      </div>
      <button type="submit" disabled={submitting} className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-black uppercase tracking-widest rounded shadow-xl transition-all text-xs font-mono disabled:opacity-50">
        Submit
      </button>
    </form>
  );
}
