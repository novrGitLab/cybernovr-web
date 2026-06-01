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
      title: "Global Inclusivity Scaling",
      desc: "Several Business Processes re-engineering projects executed to successfully incorporate robust cybersecurity frameworks for core financial sector players across Africa and Asia."
    },
    {
      year: "2013",
      title: "National Cybersecurity Policy",
      desc: "Actively participated in the formal development and architectural structuring of the landmark National Cybersecurity Policy and Strategy for Nigeria."
    },
    {
      year: "2018 to Date",
      title: "Corporate Cybersecurity & GRC",
      desc: "Developed comprehensive cybersecurity GRC Strategy models for tier-1 Payment Systems companies, commercial Banks, and other global corporate organisations."
    },
    {
      year: "2020",
      title: "Sectoral CSIRT Establishment",
      desc: "Participated directly in the technical setup and comprehensive operationalisation of the Sectoral CSIRT for the Nigerian Communication Sector."
    },
    {
      year: "2021",
      title: "eNaira Programme Management",
      desc: "Strategic design of the Programme Management framework for the eNaira digital asset engine, fully incorporating hardened cybersecurity verification boundaries."
    },
    {
      year: "2022",
      title: "ZIASS Limited Founded",
      desc: "Incorporated ZIASS Limited to pioneer advanced security engineering. The firm subsequently rebranded as CYBERNOVR in May 2025 to scale global operations."
    },
    {
      year: "2024",
      title: "Digital Public Infrastructure",
      desc: "Developed secure Digital Public Infrastructure (incorporating baseline Cybersecurity Requirements) for all Nigerian States as a milestone project of the Nigerian Governors Forum."
    },
    {
      year: "2025",
      title: "Communication Sector Framework",
      desc: "Executed further advanced cybersecurity development works for the Nigerian Communication Sector and the National Cybersecurity Coordination Centre (NCCC)."
    }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto space-y-16">
      
      {/* Header Panel */}
      <div className="border-b border-outline-variant/20 pb-10 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-black text-on-background tracking-tight uppercase mb-4">
          Our Journey
        </h1>
        <p className="italic text-primary border-l-4 border-primary pl-6 py-1 text-lg md:text-xl font-bold">
          From our founding to today, we have been committed to advancing cybersecurity for organizations of all sizes.
        </p>
      </div>

      {/* Responsive Linear Timeline Container Box */}
      <div className="relative max-w-4xl mx-auto pl-6 md:pl-0 before:absolute before:left-6 md:before:left-1/2 before:top-0 before:w-0.5 before:h-full before:bg-primary/20 space-y-12">
        {corporateMilestones.map((milestone, idx) => (
          <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
            
            {/* Context Left Panel (Flipped for symmetry on desktop screens) */}
            <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${idx % 2 === 0 ? "md:text-right md:pr-8" : "md:order-2 md:pl-8"}`}>
              <div className="p-6 bg-white border border-outline-variant/30 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="font-mono text-xs font-black text-primary uppercase block mb-1 tracking-widest">
                  {milestone.year}
                </span>
                <h3 className="text-lg font-extrabold text-on-surface mb-2 leading-tight">
                  {milestone.title}
                </h3>
                <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed opacity-90">
                  {milestone.desc}
                </p>
              </div>
            </div>
            
            {/* Timeline Center Bullet Anchor Point */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full z-10 shadow-sm top-7 md:top-auto"></div>

            {/* Ghost Label Year Layout Element */}
            <div className={`hidden md:block w-[45%] text-3xl font-black text-on-surface-variant/5 ${idx % 2 === 0 ? "md:order-2" : "text-right"}`}>
              {milestone.year}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}