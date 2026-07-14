"use client";
import React, { useState } from "react";
import { Video, Calendar, ArrowRight, X, CheckCircle2 } from "lucide-react";
import { useForm } from "@formspree/react";
import { webinars } from "./data";

export default function ResourcesWebinarsPage() {
  const [selectedWebinar, setSelectedWebinar] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [state, handleSubmit, reset] = useForm("webinarInquiry");

  const openForm = (webinarTitle: string) => {
    setSelectedWebinar(webinarTitle);
    setIsFormOpen(true);
  };

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-12 bg-white text-zinc-900 antialiased">
      <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left">
        <span className="inline-block font-mono text-red-700 text-[11px] md:text-[15px] font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded mb-4">
          ON-DEMAND CYBERSECURITY WEBINARS
        </span>
        <h1 className="text-2xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-2">Webinars</h1>
        <p className="text-zinc-600 text-[13px] md:text-[15px] leading-relaxed font-normal">
          Register for upcoming cybersecurity webinars and access on-demand recordings from our experts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {webinars.map((web, idx) => (
          <div key={idx} className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl flex flex-col justify-between space-y-5 shadow-sm hover:border-purple-900/30 transition-all duration-300 group">
            <div className="space-y-3">
              <div className="flex items-center gap-1.5 text-[13px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
                <Calendar className="h-3 w-3 text-red-700" /> {web.date}
              </div>
              <h3 className="text-[15px] font-bold text-zinc-900 uppercase tracking-tight leading-snug group-hover:text-red-700 transition-colors">{web.title}</h3>
              <p className="text-zinc-600 text-[11px] md:text-[13px] leading-relaxed font-normal">{web.desc}</p>
            </div>
            <button
              onClick={() => openForm(web.title)}
              className="inline-flex items-center justify-center gap-1.5 border-2 border-red-600 bg-white hover:bg-red-600 text-red-700 hover:text-white font-bold text-[13px] uppercase tracking-widest px-5 py-3 rounded-lg transition-all font-mono shadow-sm group/btn"
            >
              Register Now <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>
        ))}
      </div>

      {/* Webinar Registration Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm">
          <div className="bg-white border border-zinc-200 text-zinc-900 rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative text-left space-y-6">
            <button
              onClick={() => { reset(); setIsFormOpen(false); }}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {!state.succeeded ? (
              <>
                <div className="space-y-1">
                  <span className="text-[11px] font-black font-mono tracking-widest text-red-700 bg-purple-950/[0.04] border border-purple-900/10 px-2.5 py-1 rounded uppercase">Webinar Registration</span>
                  <h3 className="text-lg font-black uppercase tracking-tight pt-2">Register for Webinar</h3>
                  <p className="text-[13px] text-zinc-500 font-medium leading-relaxed">
                    Fill out the form below to register for this webinar. Our team will send you the access details.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="webinarTitle" value={selectedWebinar} />

                  <div className="space-y-1">
                    <label className="text-[13px] font-black uppercase tracking-wider text-zinc-400 font-mono">Selected Webinar</label>
                    <div className="w-full bg-purple-950/[0.04] border border-purple-900/10 rounded-lg px-4 py-3 text-[13px] text-purple-900 font-bold">
                      {selectedWebinar}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[13px] font-black uppercase tracking-wider text-zinc-400 font-mono">Full Name *</label>
                    <input
                      type="text" required placeholder="Your name"
                      name="name"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-[13px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[13px] font-black uppercase tracking-wider text-zinc-400 font-mono">Corporate Email *</label>
                      <input
                        type="email" required placeholder="you@company.com"
                        name="email"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-[13px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[13px] font-black uppercase tracking-wider text-zinc-400 font-mono">Phone Number</label>
                      <input
                        type="tel" placeholder="Contact Phone Number"
                        inputMode="numeric" pattern="[0-9+\-\s()]+" title="Please enter a valid phone number"
                        onKeyDown={(e) => { if (!/[0-9+\-\s()]/.test(e.key) && !['Backspace','Delete','Tab','ArrowLeft','ArrowRight'].includes(e.key)) { e.preventDefault(); } }}
                        name="phone"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-[13px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[13px] font-black uppercase tracking-wider text-zinc-400 font-mono">Comments</label>
                    <textarea
                      rows={3} placeholder="Any questions or specific topics you'd like covered?"
                      name="comments"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-4 text-[13px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-[13px] uppercase tracking-widest py-3.5 rounded-lg transition-all shadow-md font-mono disabled:opacity-50"
                  >
                    {state.submitting ? "Submitting..." : "Register"}
                  </button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center flex flex-col items-center justify-center space-y-3">
                <CheckCircle2 className="h-12 w-12 text-emerald-600 animate-bounce" />
                <h3 className="text-[15px] font-black uppercase tracking-wider">Registration Submitted</h3>
                <p className="text-xs text-zinc-500 max-w-xs mx-auto font-medium">You will receive webinar access details at your email address.</p>
                <button
                  type="button"
                  onClick={() => { reset(); setIsFormOpen(false); }}
                  className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 font-bold rounded text-[13px] uppercase tracking-widest font-mono transition-all"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
