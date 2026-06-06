"use client";
import React from "react";

export default function TheTeamPage() {
  const corporateArchitects = [
    {
      name: "Dr. Kazeem Durodoye",
      role: "CEO — Managing Director",
      label: "Executive Leadership",
      about: "30+ years of ICT experience. World Bank Consultant on Cybersecurity for the Nigeria Communications Sector. Led the development of the National Cybersecurity Policy & Strategy, NCC-CSIRT, and the eNaira platform.",
      certs: "CISM · CGEIT · MCP · PMP · Ph.D Information Systems (Univ. of Ibadan) · Fellow: NCS, CPCRN, ASIST, Canadian IT Professionals"
    },
    {
      name: "Akinwale Mayomi Aisida",
      role: "Senior Product Manager",
      label: "Threat Intelligence",
      about: "Cybersecurity Researcher at the Canadian Institute of Cybersecurity, University of New Brunswick. Heads the core Threat Intelligence division specializing in ML, AI, and deep learning algorithms.",
      certs: "PyTorch · Keras · TensorFlow · Python · scikit-learn · Expert in Intrusion Detection, Zero-day Attacks, and Threat Intelligence"
    },
    {
      name: "Mr. Karl Ugokwe",
      role: "Senior Technical Solutions Manager",
      label: "Technical Solutions",
      about: "Cybersecurity Specialist focused on enterprise technical solutions integrations, baseline systems architecture, and comprehensive technical account management.",
      certs: "GCPC-ISC2 (CC) · Hagital (CC) · B.Sc · Expert in VMDR (vulnerability management detection and response) and Compliance management"
    }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto space-y-16">
      
      {/* Structural Heading */}
      <div className="border-b border-outline-variant/20 pb-10 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-black text-on-background tracking-tight uppercase mb-4">
          Key Management
        </h1>
        <p className="italic text-primary border-l-4 border-primary pl-6 py-1 text-lg md:text-xl font-bold">
          Experienced leadership driving cybersecurity resilience across Africa and beyond.
        </p>
      </div>

      {/* Operational Personnel Profile Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {corporateArchitects.map((member, i) => (
          <div key={i} className="bg-white border border-outline-variant/30 rounded-xl p-6 flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg group">
            <div className="space-y-4">
              <div className="aspect-[4/3] w-full rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant/20 relative overflow-hidden border border-outline-variant/10">
                <span className="material-symbols-outlined text-6xl group-hover:scale-105 transition-transform duration-500">account_circle</span>
                <span className="absolute bottom-3 left-3 bg-primary type-white text-[10px] font-bold px-2.5 py-1 rounded tracking-wider uppercase shadow-sm">
                  {member.label}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-on-surface group-hover:text-primary transition-colors duration-200">
                  {member.name}
                </h3>
                <p className="text-xs font-mono font-bold text-primary uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-xs text-on-surface-variant leading-relaxed pt-1">
                  {member.about}
                </p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-outline-variant/10 space-y-2">
              <span className="text-[10px] uppercase tracking-wider font-bold text-on-surface-variant/50 block">Credentials</span>
              <p className="text-[11px] font-mono font-medium text-on-surface-variant leading-normal bg-surface p-2.5 rounded border border-outline-variant/10">
                {member.certs}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}