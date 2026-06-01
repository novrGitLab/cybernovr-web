"use client";
import React from "react";

export default function CorporateCareersPage() {
  const organizationalValues = [
    { title: "Customer Delight", desc: "We are committed to customer satisfaction and won't stop until our clients are delighted. We prioritize the absolute structural protection of their critical parameters.", icon: "sentiment_very_satisfied" },
    { title: "Integrity", desc: "We are committed to unwavering honesty, transparency, and a strong moral compass to maintain unshakeable trust both internally and with our global enterprise clients.", icon: "gavel" },
    { title: "Innovation", desc: "We are committed to relentless technical innovation, creating cutting-edge defensive solutions while swiftly adapting to new challenges in a multi-polar world.", icon: "psychology" },
    { title: "People", desc: "We are committed to guiding our engineering teams to uphold the highest technical standards. Our people are the driving force behind our structural defense network success.", icon: "groups" },
    { title: "Resilience", desc: "We are committed to achieving cybersecurity resilience on ourselves the same way we are to our clients. This drives us to build robust, reliable, and adaptable systems.", icon: "shield" }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto space-y-24">
      
      {/* Module: Vision / Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-stretch">
        <div className="bg-white border border-outline-variant/30 p-8 md:p-10 rounded-xl flex flex-col justify-center space-y-3">
          <h2 className="text-xs font-black uppercase tracking-widest text-primary">Our Vision Blueprint</h2>
          <h3 className="text-2xl font-extrabold text-on-surface leading-tight">To achieve resilience of your Critical Information Infrastructure.</h3>
        </div>
        <div className="bg-surface-container-low p-8 md:p-10 rounded-xl flex flex-col justify-center space-y-3 border border-outline-variant/10">
          <h2 className="text-xs font-black uppercase tracking-widest text-primary">Our Mission Objective</h2>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
            To work with you to strengthen the resilience of your information assets. We will pinpoint your unique risks, prioritise your defences and help you achieve cybersecurity resilience of your critical services. These, we will deliver to your delight.
          </p>
        </div>
      </div>

      {/* Module: Core Cultural Values */}
      <section className="space-y-12">
        <div className="max-w-xl">
          <h2 className="text-3xl font-extrabold text-on-surface tracking-tight uppercase">Our Corporate Values</h2>
          <div className="w-16 h-1 bg-primary mt-2"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizationalValues.map((val, idx) => (
            <div key={idx} className="bg-white p-6 border border-outline-variant/20 rounded-xl space-y-4">
              <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-xl">{val.icon}</span>
              </div>
              <h4 className="text-base font-extrabold text-on-surface">{val.title}</h4>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed opacity-90">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Updated Module: No Active Vacancies Available Container */}
      <section className="space-y-6">
        <div className="max-w-xl">
          <h2 className="text-3xl font-extrabold text-on-surface tracking-tight uppercase">Open Vacancies</h2>
          <p className="text-sm text-on-surface-variant mt-2">Join our roster database for future intelligence ops.</p>
        </div>
        
        {/* Clean, dark status display card */}
        <div className="p-10 border border-dashed border-outline-variant/50 rounded-xl bg-surface-container-low/50 flex flex-col items-center justify-center text-center space-y-3">
          <span className="material-symbols-outlined text-4xl text-on-surface-variant opacity-40 animate-pulse">work_off</span>
          <h4 className="text-lg font-bold text-on-surface uppercase tracking-wide">No Vacancies Available</h4>
          <p className="text-xs text-on-surface-variant max-w-sm leading-relaxed">
            All tactical missions and deployment operations roles are currently occupied. Check back during our next quarter framework evaluation loop.
          </p>
        </div>
      </section>

    </div>
  );
}