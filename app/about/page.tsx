"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Milestone, Briefcase } from "lucide-react";

export default function CorporateAboutHub() {
  const corporateSectors = [
    {
      title: "Our Journey",
      subtitle: "Phase Horizons & Milestones",
      desc: "Track the historical timeline, strategic structural frameworks, and national security audits built since inception.",
      link: "/about/journey",
      icon: Milestone
    },
    {
      title: "Careers",
      subtitle: "Active Open Vacancies",
      desc: "Join the continuous ranks. Explore remote product engineering, UI/UX roles, and secure mission listings.",
      link: "/about/careers",
      icon: Briefcase
    }
  ];

  // Restored and aligned all four core management experts, including Mr. Karl Ugokwe [cite: 1, 104, 112, 120]
  const workers = [
    { 
      name: "Dr. Kazeem Durodoye", 
      role: "CEO — Managing Director", 
      bio: "30+ years ICT experience. World Bank Consultant on Cybersecurity for Nigeria Communications Sector. Led National Cybersecurity Policy & Strategy, NCC-CSIRT, eNaira.",
      img: "worker-1.jpg" 
    },
    { 
      name: "Akinwale Mayomi Aisida", 
      role: "Senior Product Manager", 
      bio: "Cybersecurity Researcher, Canadian Institute of Cybersecurity, Univ. of New Brunswick. Head of Threat Intelligence team specializing in ML, AI, and deep learning.",
      img: "worker-2.jpg" 
    },
    { 
      name: "Mr. Karl Ugokwe", 
      role: "Senior Technical Solutions Manager", 
      bio: "Cybersecurity Specialist focused on enterprise technical solutions integrations, baseline systems architecture, and comprehensive technical account management.",
      img: "worker-4.jpg" 
    }
  ];

  const interns = [
    { name: "Abubakar Usman Damilare", role: "Threat Intelligence Intern", img: "intern-1.jpg" },
    { name: "Technical Intern 2", role: "GRC Engineering Intern", img: "intern-2.jpg" },
    { name: "Technical Intern 3", role: "Security Operations Intern", img: "intern-3.jpg" }
  ];

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-20 w-full bg-white text-zinc-900 antialiased">
      
      {/* Institutional Header Block */}
      <div className="border-b border-zinc-200 pb-10 max-w-4xl text-left">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 uppercase">INSIDE</h1>
          <img src="/logo.png" alt="CYBERNOVR" className="h-10 w-auto object-contain" />
        </div>
        <p className="italic text-red-700 border-l-2 border-red-700 pl-4 py-0.5 text-base font-semibold tracking-wide">
          Resilience is in our DNA [cite: 1, 5]
        </p>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed mt-4 font-normal">
          Cybernovr provides unshakeable, institutional-grade digital defense metrics across global networks. Navigate through our designated timeline history profile, elite technical staff directories, or explore your career entry paths within our engineering centers below.
        </p>
      </div>

      {/* ========================================================================= */}
      {/* EXECUTIVE TEAM LAYOUTS - RECTANGULAR, PROFESSIONAL SUBTLE PURPLE ACCENT */}
      {/* ========================================================================= */}
      <section className="space-y-16 text-left">
        
        {/* Core Workers Matrix */}
        <div className="space-y-6">
          <div className="border-b border-zinc-100 pb-2">
            <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400">Our Operations Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {workers.map((member, i) => (
              <div key={i} className="p-4 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl space-y-4 hover:border-purple-900/30 transition-all duration-300">
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative">
                  <img 
                    src={`/assets/team/${member.img}`} 
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                      const fallback = document.getElementById(`fb-rect-worker-${i}`);
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div id={`fb-rect-worker-${i}`} className="hidden absolute inset-0 items-center justify-center bg-zinc-50 text-zinc-400 text-xs font-mono tracking-widest">
                    PHOTO PLACEHOLDER
                  </div>
                </div>
                <div className="pt-1">
                  <h4 className="text-base font-bold text-zinc-900 tracking-tight">{member.name}</h4>
                  <p className="text-xs text-red-700 font-mono font-bold tracking-wider mt-0.5 uppercase">{member.role}</p>
                  <p className="text-zinc-500 text-[11px] leading-relaxed line-clamp-3 mt-2 font-medium">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Interns Matrix */}
        <div className="space-y-6">
          <div className="border-b border-zinc-100 pb-2">
            <h2 className="text-sm font-black uppercase tracking-widest text-zinc-400">Design &amp; Technical Interns</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {interns.map((member, i) => (
              <div key={i} className="p-4 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl space-y-4 hover:border-purple-900/30 transition-all duration-300">
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative">
                  <img 
                    src={`/assets/team/${member.img}`} 
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                      const fallback = document.getElementById(`fb-rect-intern-${i}`);
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div id={`fb-rect-intern-${i}`} className="hidden absolute inset-0 items-center justify-center bg-zinc-50 text-zinc-400 text-xs font-mono tracking-widest">
                    PHOTO PLACEHOLDER
                  </div>
                </div>
                <div className="pt-1">
                  <h4 className="text-base font-bold text-zinc-900 tracking-tight">{member.name}</h4>
                  <p className="text-xs text-red-700 font-mono font-bold tracking-wider mt-0.5 uppercase">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Team Gallery Navigation Call */}
        <div className="border-2 border-purple-900/10 bg-purple-950/[0.02] p-6 md:p-8 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-zinc-900 uppercase tracking-tight">Cybernovr Operations Collective</h3>
            <p className="text-xs text-zinc-500 font-medium">Bespoke technical directories mapping our inter-disciplinary engineering and product management ranks.</p>
          </div>
          <Link href="/about/team" className="text-red-700 hover:text-red-600 font-bold uppercase text-xs tracking-widest font-mono flex items-center gap-2 whitespace-nowrap pt-1 sm:pt-0 group">
            View Full Team Profile <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* CORPORATE SECTORS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-zinc-200 text-left">
        {corporateSectors.map((sector, index) => {
          const Icon = sector.icon;
          return (
            <div key={index} className="p-6 md:p-8 bg-purple-950/[0.01] border-2 border-purple-900/5 hover:border-purple-900/20 rounded-2xl flex flex-col justify-between transition-all duration-300 shadow-sm">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest font-mono block">{sector.subtitle}</span>
                  <h3 className="text-xl font-bold text-zinc-900 uppercase tracking-tight">{sector.title}</h3>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed font-normal">{sector.desc}</p>
              </div>
              <div className="pt-6">
                <Link href={sector.link} className="inline-flex items-center gap-1.5 text-red-700 hover:text-red-600 font-bold uppercase text-xs tracking-widest font-mono group">
                  Learn More <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}