"use client";

import React, { useState } from "react";
import { submitWeb3Form } from "@/app/web3forms";
import { toast } from "sonner";

export default function FooterNewsletter() {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("form_name", "newsletterSubscription");
      formData.append("form_source", "Footer");
      await submitWeb3Form(formData);
      setSucceeded(true);
      toast.success("Subscribed! You will receive threat intelligence updates.", {
        duration: 5000,
      });
      e.currentTarget.reset();
    } catch (err) {
      console.error("Subscription error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  if (succeeded) {
    return (
      <div className="text-emerald-400 text-sm font-medium py-2">
        Subscribed! You will receive threat intelligence updates.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center border-b border-white/20 pb-2">
      <input
        name="email"
        type="email"
        required
        placeholder="Enter your email"
        className="bg-transparent border-0 w-full text-sm focus:ring-0 text-white placeholder:text-white/30 outline-none"
      />
      <button
        type="submit"
        disabled={submitting}
        className="text-primary hover:translate-x-1 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="material-symbols-outlined">send</span>
      </button>
    </form>
  );
}
