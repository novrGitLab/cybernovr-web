"use client";
import React, { useState } from "react";
import { submitWeb3Form } from "@/app/web3forms";
import { CheckCircle2 } from "lucide-react";

export default function NovrSOCForm() {
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

  if (succeeded) {
    return (
      <div className="py-10 text-center flex flex-col items-center justify-center space-y-3">
        <CheckCircle2 className="h-12 w-12 text-emerald-500 animate-bounce" />
        <h4 className="text-[15px] font-black uppercase tracking-wide text-zinc-900">Request Submitted</h4>
        <p className="text-xs text-zinc-500 max-w-xs mx-auto font-medium">Our team will be in touch within 24 hours.</p>
        <button onClick={() => setSucceeded(false)} className="text-[13px] text-red-600 hover:text-red-700 font-mono font-bold uppercase tracking-wider mt-2">Submit Another Request</button>
      </div>
    );
  }

  return (
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
      <button type="submit" disabled={submitting} className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-black uppercase tracking-widest rounded shadow-xl transition-all text-xs font-mono disabled:opacity-50 disabled:cursor-not-allowed">
        {submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
