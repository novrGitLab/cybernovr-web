"use client";
import React from "react";
import Link from "next/link";

export default function AssessmentsHubPage() {
  const assessmentTracks = [
    {
      title: "Vulnerability Assessment & Penetration Testing (VAPT)",
      tagline: "Technical Security & Threat Validation",
      desc: "Comprehensive active testing of digital perimeters, cloud architectures, RESTful APIs, and core software infrastructures to safely isolate exploitable gaps before threat actors leverage them.",
      path: "/assessments/vapt",
      icon: "biometric_pest_control"
    },
    {
      title: "Information Security Audits & Gap Analysis",
      tagline: "Compliance Readiness & Strategy Auditing",
      desc: "Detailed administrative and structural security posture evaluations mapping internal controls directly to regional and international legal standards (SOC 2, ISO 27001, NDPA, CBN directives).",
      path: "/assessments/gap-analysis",
      icon: "assignment_turned_in"
    }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto space-y-16">
      
      {/* Top Banner Heading */}
      <div className="border-b border-outline-variant/20 pb-10 max-w-4xl">
        <span className="text-xs font-mono font-black tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded w-fit block mb-4">
          Security Auditing Matrix
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-on-surface tracking-tight uppercase mb-4 leading-none">
          Risk &amp; Vulnerability Assessments
        </h1>
        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
          CYBERNOVR engineers robust evaluation mechanisms to analyze, score, and prioritize information asset risks. Select an assessment operational track below to initialize systemic boundary inspections.
        </p>
      </div>

      {/* Two Tracks Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {assessmentTracks.map((track, idx) => (
          <div key={idx} className="bg-white border border-outline-variant/30 rounded-xl p-8 flex flex-col justify-between space-y-6 shadow-sm hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">{track.icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-on-surface group-hover:text-primary transition-colors leading-tight">
                  {track.title}
                </h3>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-1">{track.tagline}</p>
              </div>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed opacity-90">{track.desc}</p>
            </div>
            <Link href={track.path} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary group-hover:gap-3 transition-all pt-2 self-start">
              Initialize Scoping Console <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}