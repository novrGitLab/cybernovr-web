"use client";
import React from "react";

export default function OurJourneyPage() {
  const corporateMilestones = [
    {
      year: "2008",
      title: "First Cybersecurity Conference",
      desc: "Co-organised the first Cybersecurity conference in Nigeria, setting a foundational baseline for regional operational dialogue."
    },
    {
      year: "2009-2012",
      title: "Re-Engineering for Resilience",
      desc: "Several Business Processes re-engineering projects executed to successfully incorporate robust cybersecurity frameworks for core financial sector players across Africa and Asia."
    },
    {
      year: "2013",
      title: "National Cybersecurity Policy",
      desc: "Participated in the development of the National Cybersecurity Policy and Strategy for the Office of the National Security Adviser (ONSA)."
    },
    {
      year: "2018 to Date",
      title: "Corporate Cybersecurity & GRC",
      desc: "Developed cybersecurity strategies for leading Payment Systems companies, Deposit Money Banks, and other global corporate organisations."
    },
    {
      year: "2020",
      title: "Sectoral CSIRT Establishment",
      desc: "Development and operationalisation of the Sectoral CSIRT for the Nigerian Communication Sector."
    },
    {
      year: "2021",
      title: "eNaira Programme Management",
      desc: "Programme Management for the Central Bank of Nigeria Digital Currency (eNaira) fully incorporating cybersecurity."
    },
    {
      year: "2022",
      title: "ZIASS Limited Founded",
      desc: "Incorporated ZIASS Limited to develop frontline cybersecurity products and manage professional cybersecurity services. ZIASS was rebranded as CYBERNOVR in May 2025."
    },
    {
      year: "2024",
      title: "Digital Public Infrastructure",
      desc: "Developed secure Digital Public Infrastructure (incorporating baseline Cybersecurity Requirements) for all Nigerian States as a milestone project of the Nigerian Governors Forum (NGF)."
    },
    {
      year: "2025",
      title: "Sectoral Cyber Resilience Framework",
      desc: "Executed further cybersecurity professional works and development of resilience frameworks for the Nigerian Communications Sector and the National Cybersecurity Coordination Centre (NCCC)."
    }
  ];

  return (
    /* ADJUSTED TOP MARGINS FOR UNIFORM NAV BAR SPACING */
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-16 bg-white text-zinc-900 antialiased">
      
      {/* Header Panel */}
      <div className="border-b border-zinc-200 pb-10 max-w-4xl text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-4">
          Our Journey
        </h1>
        <p className="italic text-red-700 border-l-2 border-red-700 pl-4 py-0.5 text-base font-semibold tracking-wide">
          Almost two decades of providing information assurance and services in cybersecurity risk management, critical information infrastructure protection, and cybersecurity capacity building for critical stakeholders.
        </p>
      </div>

      {/* Professional Linear Timeline Container Box */}
      <div className="relative max-w-4xl mx-auto pl-6 md:pl-0 before:absolute before:left-6 md:before:left-1/2 before:top-0 before:w-0.5 before:h-full before:bg-zinc-200 space-y-12">
        {corporateMilestones.map((milestone, idx) => (
          <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group text-left">
            
            {/* Context Left Panel (Flipped symmetrically for tidy alignment on large desktop viewports) */}
            <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${idx % 2 === 0 ? "md:text-right md:pr-8" : "md:order-2 md:pl-8"}`}>
              {/* REFINED SLATE PURPLE MINIMALIST CONTAINER TEXT BOX EFFECT */}
              <div className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl shadow-sm hover:border-purple-900/20 transition-all duration-300">
                <span className="font-mono text-xs font-black text-red-700 uppercase block mb-1 tracking-widest">
                  {milestone.year}
                </span>
                <h3 className="text-base font-bold text-zinc-900 mb-2 leading-tight uppercase tracking-tight">
                  {milestone.title}
                </h3>
                <p className="text-zinc-600 text-xs md:text-sm leading-relaxed font-normal">
                  {milestone.desc}
                </p>
              </div>
            </div>
            
            {/* Timeline Center Bullet Anchor Point */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-red-700 rounded-full z-10 shadow-sm top-7 md:top-auto"></div>

            {/* Ghost Label Year Layout Element */}
            <div className={`hidden md:block w-[45%] text-4xl font-black text-zinc-200/40 tracking-tighter select-none font-mono ${idx % 2 === 0 ? "md:order-2 pl-4 text-left" : "text-right pr-4"}`}>
              {milestone.year}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}