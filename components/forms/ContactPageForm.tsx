"use client";
import React, { useState } from "react";
import { submitWeb3Form } from "@/app/web3forms";
import { ChevronDown, CheckCircle2 } from "lucide-react";

export default function ContactPageForm() {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    try {
      const formData = new FormData(form);
      formData.append("form_name", "contactMessage");
      formData.append("form_source", "Contacts Page");
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
        <h4 className="text-[15px] font-black uppercase tracking-wide text-white">Request Submitted</h4>
        <p className="text-xs text-zinc-400 max-w-xs mx-auto font-medium">Our team will be in touch within 24 hours.</p>
        <button type="button" onClick={() => setSucceeded(false)} className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 font-bold rounded text-[13px] uppercase tracking-widest font-mono transition-all">
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="text-[13px] font-bold text-zinc-300 font-mono uppercase tracking-wider">Name *</label>
          <input type="text" name="name" placeholder="Your full name" required className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-[13px] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal" />
        </div>
        <div className="space-y-1">
          <label className="text-[13px] font-bold text-zinc-300 font-mono uppercase tracking-wider">Email *</label>
          <input type="email" name="email" placeholder="you@company.com" required className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-[13px] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[13px] font-bold text-zinc-300 font-mono uppercase tracking-wider">Company</label>
          <input type="text" name="company" placeholder="Company Name" className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-[13px] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal" />
        </div>
        <div className="space-y-1">
          <label className="text-[13px] font-bold text-zinc-300 font-mono uppercase tracking-wider">Phone</label>
          <input type="tel" name="phone" placeholder="Contact number" inputMode="numeric" pattern="[0-9+\-\s()]+" title="Please enter a valid phone number" className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-[13px] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal" />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-[13px] font-bold text-zinc-300 font-mono uppercase tracking-wider">Service of Interest</label>
        <div className="relative">
          <select name="service" className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-[13px] text-white focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all appearance-none cursor-pointer font-normal">
            <option value="" className="bg-zinc-950 text-white">Select a Service</option>
            <option value="training" className="bg-zinc-950 text-white">Cybersecurity Training</option>
            <option value="novrsoc" className="bg-zinc-950 text-white">NovrSOC</option>
            <option value="novrgrc" className="bg-zinc-950 text-white">NovrGRC</option>
            <option value="novrradar" className="bg-zinc-950 text-white">NovrRADAR</option>
            <option value="professional" className="bg-zinc-950 text-white">Professional Services</option>
          </select>
          <ChevronDown className="h-4 w-4 text-zinc-400 absolute right-4 top-3.5 pointer-events-none" />
        </div>
      </div>
      <div className="space-y-1.5">
        <label className="text-[13px] font-bold text-zinc-300 font-mono uppercase tracking-wider">Message *</label>
        <textarea rows={5} name="message" placeholder="Send your message; we will respond within 1-2 business days" required className="w-full bg-zinc-900 border border-zinc-700 rounded p-4 text-[13px] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all resize-none font-normal" />
      </div>
      <button type="submit" disabled={submitting} className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-black rounded shadow-xl transition-all text-[13px] uppercase tracking-widest font-mono disabled:opacity-50">
        Send Message
      </button>
    </form>
  );
}
