"use client";
import React from "react";
import { ShieldCheck, GraduationCap } from "lucide-react";

export default function TheTeamPage() {
  const corporateArchitects = [
    {
      name: "Dr. Kazeem Durodoye",
      role: "CEO — Managing Director",
      label: "Executive Leadership",
      about: "30+ years of ICT experience. World Bank Consultant on Cybersecurity for the Nigeria Communications Sector. Led the development of the National Cybersecurity Policy & Strategy, NCC-CSIRT, and the eNaira platform[cite: 107, 108].",
      certs: "CISM · CGEIT · MCP · PMP · Ph.D Information Systems (Univ. of Ibadan) · Fellow: NCS, CPCRN, ASIST, Canadian IT Professionals [cite: 110, 111]",
      img: "worker-1.jpg",
      type: "executive"
    },
    {
      name: "Akinwale Mayomi Aisida",
      role: "Senior Product Manager",
      label: "Threat Intelligence",
      about: "Cybersecurity Researcher at the Canadian Institute of Cybersecurity, University of New Brunswick. Heads the core Threat Intelligence division specializing in ML, AI, and deep learning algorithms[cite: 115, 116].",
      certs: "PyTorch · Keras · TensorFlow · Python · scikit-learn · Expert in Intrusion Detection, Zero-day Attacks, and Threat Intelligence [cite: 118, 119]",
      img: "worker-2.jpg",
      type: "executive"
    },
    {
      name: "Mr. Ibrahim Oladeji",
      role: "Chief Information Officer",
      label: "Enterprise Architecture",
      about: "20+ years architecting enterprise digital transformation, ERP systems, and operational efficiency across public and private sectors[cite: 123]. Driven by the core philosophy to 'Keep Thinking' across every infrastructure layer[cite: 127].",
      certs: "CISA · COBIT5 · PMP · MBA · MSc Information Science · Expert in ERP & Business Process Automation [cite: 125, 126]",
      img: "worker-3.jpg",
      type: "executive"
    },
    {
      name: "Mr. Karl Ugokwe",
      role: "Senior Technical Solutions Manager",
      label: "Technical Solutions",
      about: "Cybersecurity Specialist focused on enterprise technical solutions integrations, baseline systems architecture, and comprehensive technical account management.",
      certs: "GCPC-ISC2 (CC) · Hagital (CC) · B.Sc · Expert in VMDR (vulnerability management detection and response) and Compliance management",
      img: "worker-4.jpg",
      type: "executive"
    }
  ];

  const interns = [
    { name: "Technical Intern 1", role: "Threat Intelligence Intern", img: "intern-1.jpg", label: "Operations" },
    { name: "Technical Intern 2", role: "GRC Engineering Intern", img: "intern-2.jpg", label: "Governance" },
    { name: "Technical Intern 3", role: "Security Operations Intern", img: "intern-3.jpg", label: "Defense" }
  ];

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-16 bg-white text-zinc-900 antialiased">
      
      {/* Structural Heading */}
      <div className="border-b border-zinc-200 pb-10 max-w-4xl text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-4">
          Key Management [cite: 102]
        </h1>
        <p className="italic text-red-700 border-l-2 border-red-700 pl-4 py-0.5 text-base font-semibold tracking-wide">
          Experienced leadership driving cybersecurity resilience across Africa and beyond[cite: 103].
        </p>
      </div>

      {/* Core Leadership Grid Matrix */}
      <div className="space-y-6 text-left">
        <div className="border-b border-zinc-100 pb-2">
          <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400">Executive Directory</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {corporateArchitects.map((member, i) => (
            <div key={i} className="p-5 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl flex flex-col justify-between space-y-6 transition-all duration-300 shadow-sm group">
              <div className="space-y-4">
                <div className="w-full aspect-[4/3] bg-zinc-100 border border-zinc-200 rounded-lg overflow-hidden relative">
                  <img 
                    src={`/assets/team/${member.img}`} 
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                      const fallback = document.getElementById(`fb-team-worker-${i}`);
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div id={`fb-team-worker-${i}`} className="hidden absolute inset-0 items-center justify-center bg-zinc-50 text-zinc-400">
                    <ShieldCheck className="h-10 w-10 opacity-40 text-purple-900" />
                  </div>
                  <span className="absolute bottom-3 left-3 bg-zinc-950 text-white text-[9px] font-black font-mono px-2.5 py-1 rounded tracking-wider uppercase border border-white/10 shadow-md">
                    {member.label}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-zinc-900 tracking-tight">{member.name}</h3>
                  <p className="text-xs font-mono font-bold text-red-700 uppercase tracking-wider">{member.role}</p>
                  <p className="text-zinc-600 text-xs md:text-sm leading-relaxed pt-1 font-normal">{member.about}</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-zinc-200/60 space-y-2">
                <span className="text-[9px] uppercase tracking-wider font-bold text-zinc-400 block font-mono">Credentials</span>
                <p className="text-[11px] font-mono font-medium text-zinc-700 leading-normal bg-zinc-50 p-3 rounded-lg border border-zinc-200">
                  {member.certs}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interns Section Grid */}
      <div className="space-y-6 text-left pt-6">
        <div className="border-b border-zinc-100 pb-2">
          <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400">Technical Interns</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interns.map((member, i) => (
            <div key={i} className="p-5 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl flex flex-col justify-between space-y-4 transition-all duration-300 shadow-sm group">
              <div className="space-y-4">
                <div className="w-full aspect-[4/3] bg-zinc-100 border border-zinc-200 rounded-lg overflow-hidden relative">
                  <img 
                    src={`/assets/team/${member.img}`} 
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                      const fallback = document.getElementById(`fb-team-intern-${i}`);
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div id={`fb-team-intern-${i}`} className="hidden absolute inset-0 items-center justify-center bg-zinc-50 text-zinc-400">
                    <GraduationCap className="h-10 w-10 opacity-40 text-purple-900" />
                  </div>
                  <span className="absolute bottom-3 left-3 bg-zinc-950 text-white text-[9px] font-black font-mono px-2.5 py-1 rounded tracking-wider uppercase border border-white/10 shadow-md">
                    {member.label}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900 tracking-tight">{member.name}</h3>
                  <p className="text-xs font-mono font-bold text-red-700 uppercase tracking-wider mt-0.5">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}