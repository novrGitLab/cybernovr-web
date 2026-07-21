"use client";
import React, { useState } from "react";
import { submitWeb3Form } from "@/app/web3forms";
import { Bell, CheckCircle2 } from "lucide-react";

export default function AlertSubscriptionForm() {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    try {
      const formData = new FormData(form);
      formData.append("form_name", "novralertSubscription");
      formData.append("form_source", "Home Page - NovrALERT Modal");
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
        <h4 className="text-[15px] font-black uppercase tracking-wide text-zinc-900">Subscription Successful</h4>
        <p className="text-xs text-zinc-500 max-w-xs mx-auto font-medium">You will receive threat intelligence updates.</p>
        <button onClick={() => setSucceeded(false)} className="text-[13px] text-red-600 hover:text-red-700 font-mono font-bold uppercase tracking-wider mt-2">Subscribe Another Email</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label className="text-[13px] font-bold text-zinc-400 font-mono uppercase tracking-wider">Corporate Email</label>
        <input name="email" type="email" placeholder="analyst@secure-domain.com" required className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-[15px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/30 transition-all font-normal" />
      </div>
      <button type="submit" disabled={submitting} className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-[13px] uppercase tracking-widest py-3.5 rounded-lg transition-all shadow-md font-mono flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
        {submitting ? "Submitting..." : <>Receive Alert Broadcasts <Bell className="h-3.5 w-3.5" /></>}
      </button>
    </form>
  );
}
