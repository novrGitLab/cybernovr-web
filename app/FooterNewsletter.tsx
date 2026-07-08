"use client";

import React, { useEffect } from "react";
import { useForm } from "@formspree/react";
import { toast } from "sonner";

export default function FooterNewsletter() {
  const [state, handleSubmit, reset] = useForm("newsletterSubscription");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Subscribed! You will receive threat intelligence updates.", {
        duration: 5000,
      });
      reset();
    }
  }, [state.succeeded, reset]);

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
        disabled={state.submitting}
        className="text-primary hover:translate-x-1 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="material-symbols-outlined">send</span>
      </button>
    </form>
  );
}
