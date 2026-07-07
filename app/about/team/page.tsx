"use client";
import React, { Suspense, useEffect } from "react";
import { ShieldCheck, GraduationCap } from "lucide-react";
import { useSearchParams } from "next/navigation";

function TheTeamContent() {
  const searchParams = useSearchParams();
  const person = searchParams.get("person");

  useEffect(() => {
    if (person) {
      const el = document.getElementById(person);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("ring-2", "ring-red-600", "ring-offset-2");
        setTimeout(() => {
          el.classList.remove("ring-2", "ring-red-600", "ring-offset-2");
        }, 2000);
      }
    }
  }, [person]);
  // STRICTLY THREE EXECUTIVE ENTRIES
  const corporateArchitects = [
    {
      name: "Dr. Kazeem Durodoye",
      role: "CEO — Managing Director",
      label: "Executive Leadership",
      about:
        "30+ years of ICT experience. World Bank Consultant on Cybersecurity for the Nigeria Communications Sector. Led the development of the National Cybersecurity Policy & Strategy, NCC-CSIRT, and the eNaira platform.",
      certs:
        "CISM · CGEIT · MCB · PMP · Ph.D Information Systems (Univ. of Ibadan) · Fellow: NCS, CPCRN, ASIST, Canadian IT Professionals",
      img: "worker-1.png",
      type: "executive",
    },
    {
      name: "Mr. Akinwale Mayomi Aisida",
      role: "Head of Threat Intelligence",
      label: "Threat Intelligence",
      about:
        "Cybersecurity Researcher at the Canadian Institute of Cybersecurity, University of New Brunswick. Specializes in ML/AI-driven intrusion detection, zero-day attack identification, and threat intelligence modeling.",
      certs:
        "PyTorch · Keras · TensorFlow · Python · NumPy · Pandas · scikit-learn · Matplotlib · CNNs, RNNs, LSTMs, Autoencoders",
      img: "worker-2.jpg",
      type: "executive",
    },
    {
      name: "Mr. Karl Ugokwe",
      role: "Senior Technical Solutions Manager",
      label: "Technical Solutions",
      about:
        "Cybersecurity Specialist focused on enterprise technical solutions integrations, baseline systems architecture, and comprehensive technical account management.",
      certs:
        "GCPC-ISC2 (CC) · Hagital (CC) · B.Sc · Expert in VMDR (vulnerability management detection and response) and Compliance management",
      img: "worker-4.png",
      type: "executive",
    },
    {
      name: "Mr. Mark O. Okechukwu",
      role: "Business Development Manager",
      label: "Information Operations",
      about:
        "30+ years of ICT experience. World Bank Consultant on Cybersecurity. UNODC Consultant on security technologies. Led several national technology projects for ONSA, NCC, CBN, etc.",
      certs:
        "Enterprise IT Leadership · Security Operations · Digital Transformation · Infrastructure Architecture",
      img: "worker-3.jpeg",
      type: "executive",
    },
    {
      name: "Chiamaka Prisca",
      role: "CEAP Manager, Novr Academy",
      label: "Academy Operations",
      about:
        "Manages the Cybersecurity Education and Awareness Program (CEAP) at Novr Academy, overseeing curriculum delivery and student engagement.",
      certs:
        "Program Management · Cybersecurity Education · Curriculum Development · Stakeholder Engagement",
      img: "intern-2.jpg",
      type: "executive",
    },
  ];

  // STRICTLY THREE INTERN ENTRIES
  const interns = [
    {
      name: "Abubakar Usman Damilare",
      role: "Threat Intelligence Intern",
      img: "intern-1.jpg",
      label: "Operations",
    },
    {
      name: "Adebayo Adedeji Enoch",
      role: "IT Lead",
      img: "worker-5.png",
      label: "Technical",
    },
    {
      name: "Adeyemi Fisayomi",
      role: "Technical Intern",
      img: "intern-3.jpg",
      label: "Defense",
    },
    {
      name: "Chukwuezugo Monwuba",
      role: "Cybersecurity Intern",
      img: "worker-6.jpeg",
      label: "Security",
    },
  ];

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-16 bg-white text-zinc-900 antialiased">
      {/* Structural Heading */}
      <div className="border-b border-zinc-200 pb-10 max-w-4xl text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-4">
          Key Management
        </h1>
        <p className="italic text-red-700 border-l-2 border-red-700 pl-4 py-0.5 text-base font-semibold tracking-wide">
          Experienced leadership driving cybersecurity resilience across Africa
          and beyond.
        </p>
      </div>

      {/* Core Leadership Grid Matrix (Locked to 3 Slots) */}
      <div className="space-y-6 text-left">
        <div className="border-b border-zinc-100 pb-2">
          <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400">
            Executive Directory
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {corporateArchitects.map((member, i) => (
            <div
              key={i}
              id={member.name}
              className="p-5 bg-purple-950/[0.01] border border-purple-900/5 rounded-xl flex flex-col justify-between space-y-6 transition-all duration-300 shadow-sm group hover:border-purple-900/10"
            >
              <div className="space-y-4">
                {/* Object-Contain System for Frame Preservation */}
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative flex items-center justify-center">
                  <img
                    src={`/assets/team/${member.img}`}
                    alt={member.name}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                      const fallback = document.getElementById(
                        `fb-team-worker-${i}`,
                      );
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div
                    id={`fb-team-worker-${i}`}
                    className="hidden absolute inset-0 items-center justify-center bg-zinc-50 text-zinc-400"
                  >
                    <ShieldCheck className="h-10 w-10 opacity-40 text-purple-900" />
                  </div>
                  <span className="absolute bottom-3 left-3 bg-zinc-950 text-white text-[9px] font-black font-mono px-2.5 py-1 rounded tracking-wider uppercase border border-white/10 shadow-md">
                    {member.label}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono font-bold text-red-700 uppercase tracking-wider">
                    {member.role}
                  </p>
                  <p className="text-zinc-600 text-xs md:text-sm leading-relaxed pt-1 font-normal">
                    {member.about}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-200/60 space-y-2">
                <span className="text-[9px] uppercase tracking-wider font-bold text-zinc-400 block font-mono">
                  Credentials
                </span>
                <p className="text-[11px] font-mono font-medium text-zinc-700 leading-normal bg-zinc-50 p-3 rounded-lg border border-zinc-200">
                  {member.certs}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interns Section Grid (Locked to 3 Slots) */}
      <div className="space-y-6 text-left pt-6">
        <div className="border-b border-zinc-100 pb-2">
          <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400">
            Technical Interns
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interns.map((member, i) => (
            <div
              key={i}
              id={member.name}
              className="p-5 bg-purple-950/[0.01] border border-purple-900/5 rounded-xl flex flex-col justify-between space-y-4 transition-all duration-300 shadow-sm group hover:border-purple-900/10"
            >
              <div className="space-y-4">
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative flex items-center justify-center">
                  <img
                    src={`/assets/team/${member.img}`}
                    alt={member.name}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                      const fallback = document.getElementById(
                        `fb-team-intern-${i}`,
                      );
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div
                    id={`fb-team-intern-${i}`}
                    className="hidden absolute inset-0 items-center justify-center bg-zinc-50 text-zinc-400"
                  >
                    <GraduationCap className="h-10 w-10 opacity-40 text-purple-900" />
                  </div>
                  <span className="absolute bottom-3 left-3 bg-zinc-950 text-white text-[9px] font-black font-mono px-2.5 py-1 rounded tracking-wider uppercase border border-white/10 shadow-md">
                    {member.label}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono font-bold text-red-700 uppercase tracking-wider mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TheTeamPage() {
  return (
    <Suspense>
      <TheTeamContent />
    </Suspense>
  );
}
