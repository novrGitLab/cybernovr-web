"use client";
import React from "react";
import { Briefcase, Eye, Target, BookmarkCheck } from "lucide-react";

export default function CorporateCareersPage() {
  const organizationalValues = [
    { title: "Customer Delight", desc: "Committed to absolute satisfaction — we won't stop until clients are delighted and their critical infrastructure is protected.", icon: BookmarkCheck },
    { title: "Integrity", desc: "Unwavering honesty and transparent architectural metrics with clients and internally.", icon: Target },
    { title: "Innovation", desc: "Relentless innovation; cutting-edge solutions, sandboxed lab environments, and continuous technical capacity learning.", icon: Eye },
    { title: "People", desc: "Our team is the driving force; we nurture the highest technical quality standards across engineering operations.", icon: Briefcase },
    { title: "Resilience", desc: "We build robust, reliable, and highly adaptable defensive systems for ourselves and our enterprise clients alike.", icon: BookmarkCheck }
  ];

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-16 bg-white text-zinc-900 antialiased">
      {/* Module: Vision / Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch text-left">
        <div className="bg-purple-950/[0.02] border border-purple-900/10 p-8 rounded-xl flex flex-col justify-center space-y-3 shadow-sm">
          <h2 className="text-[12px] font-black uppercase tracking-widest text-zinc-400 font-mono">
            Our Vision Blueprint
          </h2>
          <h3 className="text-lg md:text-xl font-bold text-zinc-900 leading-tight uppercase tracking-tight">
            To achieve resilience of your Critical Information Infrastructure.
          </h3>
        </div>
        <div className="bg-purple-950/[0.02] border border-purple-900/10 p-8 rounded-xl flex flex-col justify-center space-y-3 shadow-sm">
          <h2 className="text-[12px] font-black uppercase tracking-widest text-zinc-400 font-mono">
            Our Mission Objective
          </h2>
          <p className="text-[11px] md:text-[13px] text-zinc-600 leading-relaxed font-medium">
            To work with you to strengthen the resilience of your information
            assets. We will pinpoint your unique risks, prioritise your defences
            and help you achieve cybersecurity resilience of your critical
            services. These, we will deliver to your delight.
          </p>
        </div>
      </div>

      {/* Module: Core Cultural Values */}
      <section className="space-y-8 text-left">
        <div className="border-b border-zinc-100 pb-2">
          <h2 className="text-sm font-black uppercase tracking-widest text-zinc-400">
            Our Corporate Values
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizationalValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white border-2 border-zinc-100 p-6 rounded-xl space-y-4 shadow-sm hover:border-purple-900/20 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 rounded-lg flex items-center justify-center text-red-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="text-[15px] font-bold text-zinc-900 tracking-tight">
                  {val.title}
                </h4>
                <p className="text-zinc-600 text-[11px] md:text-[13px] leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Updated Module: Open Vacancies */}
      <section id="hiring" className="space-y-6 text-left">
        <div className="border-b border-zinc-100 pb-2">
          <h2 className="text-sm font-black uppercase tracking-widest text-zinc-400">
            We Are Hiring
          </h2>
        </div>

        <div className="p-8 border-2 border-purple-900/10 rounded-xl bg-purple-950/[0.02] space-y-4">
          <div className="space-y-1">
            <h4 className="text-[15px] font-bold text-zinc-900 uppercase tracking-wide">
              Head, Business Development
            </h4>
            <p className="text-[10px] font-mono font-bold text-red-600 tracking-widest uppercase">
              Full-Time · Lagos, Nigeria
            </p>
          </div>
          <p className="text-xs text-zinc-600 leading-relaxed font-medium">
            We require the services of an experienced candidate to take our
            products, initiatives, and services to market. He/She will lead a
            dynamic team of product and technical sales team members to achieve
            our corporate marketing and sales objectives. A Master&apos;s degree
            and 5-7 years of business development experience in banking or
            fintech are required. Send a cover letter and resume to
            info@cybernovr.com
          </p>
        </div>
      </section>
    </div>
  );
}