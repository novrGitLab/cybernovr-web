"use client";
import React illumination from "react";

export default function TheTeamPage() {
  const corporateArchitects = [
    { name: "Dr. Kazeem Durodoye", role: "Chief Executive Officer", label: "Executive Leadership" },
    { name: "Mr. Ibrahim Oladeji", role: "Chief Information Officer", label: "Information Operations" },
    { name: "Fisayomi Adeyemi", role: "Design Engineering Specialist", label: "UI/UX & Product Design" },
    { name: "Chiamaka Prisca", role: "Full-Stack Software Engineer", label: "Technical Infrastructure" },
    { name: "Abubakar Usman Damilare", role: "Product-Led Designer & Founder", label: "Product Management" }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto space-y-16">
      
      {/* Structural Heading */}
      <div className="border-b border-outline-variant/20 pb-10 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-black text-on-background tracking-tight uppercase mb-4">
          The Defense Matrix
        </h1>
        <p className="italic text-primary border-l-4 border-primary pl-6 py-1 text-lg md:text-xl font-bold">
          Our multi-disciplinary team combines elite infrastructure design, product leadership, and deep cybersecurity intelligence to secure sovereign assets.
        </p>
      </div>

      {/* Operational Personnel Profile Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {corporateArchitects.map((member, i) => (
          <div key={i} className="bg-white border border-outline-variant/30 rounded-xl p-6 flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg group">
            <div className="space-y-4">
              {/* Profile Graphic Stand-in Frame container box */}
              <div className="aspect-square w-full rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant/20 relative overflow-hidden border border-outline-variant/10">
                <span className="material-symbols-outlined text-6xl group-hover:scale-105 transition-transform duration-500">account_circle</span>
                <span className="absolute bottom-3 left-3 bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded tracking-wider uppercase shadow-sm">
                  {member.label}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-on-surface group-hover:text-primary transition-colors duration-200">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-on-surface-variant mt-0.5 opacity-80">
                  {member.role}
                </p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-outline-variant/10 flex gap-4 text-on-surface-variant/60">
              <span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary transition-colors">share</span>
              <span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary transition-colors">alternate_email</span>
            </div>
          </div>
        ))}

        {/* Dynamic Growth Invitation Blueprint Slot card item */}
        <div className="border border-dashed border-primary/40 rounded-xl p-8 flex flex-col items-center justify-center text-center bg-primary/[0.02]">
          <span className="material-symbols-outlined text-4xl text-primary opacity-60 mb-4 animate-pulse">group_add</span>
          <h3 className="text-lg font-bold text-on-surface mb-1">Grow with us</h3>
          <p className="text-xs text-on-surface-variant max-w-xs leading-relaxed opacity-90">
            Currently seeking Intelligence Analysts, Vulnerability Engineers, and Platform Cryptographers worldwide.
          </p>
        </div>
      </div>

    </div>
  );
}