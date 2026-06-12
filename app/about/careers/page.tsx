"use client";
import React from "react";
import { Briefcase, Eye, Target, BookmarkCheck } from "lucide-react";

export default function CorporateCareersPage() {
  const organizationalValues = [
    { title: "Customer Delight", desc: "Committed to absolute satisfaction — we won't stop until clients are delighted and their critical infrastructure metrics are protected.", icon: BookmarkCheck },
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
          <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400 font-mono">Our Vision Blueprint</h2>
          <h3 className="text-xl md:text-2xl font-bold text-zinc-900 leading-tight uppercase tracking-tight">To achieve resilience of your Critical Information Infrastructure.</h3>
        </div>
        <div className="bg-purple-950/[0.02] border border-purple-900/10 p-8 rounded-xl flex flex-col justify-center space-y-3 shadow-sm">
          <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400 font-mono">Our Mission Objective</h2>
          <p className="text-xs md:text-sm text-zinc-600 leading-relaxed font-medium">
            To work with you to strengthen the resilience of your information assets. We will pinpoint your unique risks, prioritise your defences and help you achieve cybersecurity resilience of your critical services. These, we will deliver to your delight.
          </p>
        </div>
      </div>

      {/* Module: Core Cultural Values */}
      <section className="space-y-8 text-left">
        <div className="border-b border-zinc-100 pb-2">
          <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400">Our Corporate Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizationalValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="bg-white border-2 border-zinc-100 p-6 rounded-xl space-y-4 shadow-sm hover:border-purple-900/20 transition-all duration-300">
                <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 rounded-lg flex items-center justify-center text-red-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="text-base font-bold text-zinc-900 tracking-tight">{val.title}</h4>
                <p className="text-zinc-600 text-xs md:text-sm leading-relaxed font-normal">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Updated Module: Open Vacancies */}
      <section className="space-y-6 text-left">
        <div className="border-b border-zinc-100 pb-2">
          <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400">Open Vacancies</h2>
        </div>
        
        {/* Clean status display card matching the standardized institutional aesthetic */}
        <div className="p-10 border-2 border-dashed border-zinc-200 rounded-xl bg-purple-950/[0.01] flex flex-col items-center justify-center text-center space-y-3">
          <h4 className="text-base font-bold text-zinc-900 uppercase tracking-wide">No Active Vacancies Available</h4>
          <p className="text-xs text-zinc-500 max-w-md leading-relaxed font-medium">
            All operational engineering squads and framework deployment desks are currently fully occupied. Future roster intakes occur during standard quarter framework evaluation loops.
          </p>
        </div>
      </section>

    </div>
  );
}