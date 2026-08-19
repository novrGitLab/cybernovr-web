"use client";
import React, { useState } from "react";
import { submitWeb3Form } from "@/app/web3forms";
import { CheckCircle2 } from "lucide-react";

interface ContactFormProps {
  formName: string;
  formSource: string;
}

export default function ContactForm({ formName, formSource }: ContactFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    try {
      const formData = new FormData(form);
      formData.append("form_name", formName);
      formData.append("form_source", formSource);
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
        <button onClick={() => setSucceeded(false)} className="text-[13px] text-red-600 hover:text-red-700 font-mono font-bold uppercase tracking-wider mt-2">
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-5">
        <div className="space-y-1">
          <label className="text-[13px] font-bold text-zinc-300 font-mono uppercase tracking-wider">Full Name *</label>
          <input name="name" className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-[13px] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal" placeholder="Your name" type="text" required />
        </div>
        <div className="space-y-1">
          <label className="text-[13px] font-bold text-zinc-300 font-mono uppercase tracking-wider">Corporate Email *</label>
          <input name="email" className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-[13px] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal" placeholder="you@company.com" type="email" required />
        </div>
        <div className="space-y-1">
          <label className="text-[13px] font-bold text-zinc-300 font-mono uppercase tracking-wider">Phone Number *</label>
          <input name="phone" className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-[15px] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal" placeholder="Contact Phone Number" type="tel" inputMode="numeric" pattern="[0-9+\-\s()]+" title="Please enter a valid phone number" onKeyDown={(e) => { if (!/[0-9+\-\s()]/.test(e.key) && !["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight"].includes(e.key)) { e.preventDefault(); } }} required />
        </div>
        <div className="space-y-1.5 pt-1">
          <label className="text-[13px] font-bold text-zinc-300 font-mono uppercase tracking-wider block">Comments</label>
          <textarea name="comments" rows={4} className="w-full bg-zinc-900 border border-zinc-700 rounded p-4 text-[13px] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all resize-none font-normal" placeholder="How may we help you?" />
        </div>
      </div>
      <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-black uppercase tracking-widest rounded shadow-xl transition-all text-[13px] font-mono disabled:opacity-50 disabled:cursor-not-allowed" type="submit" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
