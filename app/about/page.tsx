"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Milestone, Briefcase, Eye, Target, Heart, ShieldCheck, Lightbulb, Users, RefreshCcw } from "lucide-react";

export default function CorporateAboutHub() {
  const corporateSectors = [
    {
      title: "Our Journey",
      subtitle: "Our Horizons & Milestones",
      desc: "Since 2008, we've been committed to advancing cybersecurity for organizations of all sizes.",
      link: "/about/journey",
      icon: Milestone
    },
    {
      title: "Careers",
      subtitle: "Open Vacancies",
      desc: "We welcome you to the world of possibilities, where we give you all the freedom to achieve your best",
      link: "/about/careers#hiring",
      icon: Briefcase
    }
  ];

  // Core management experts
  const workers = [
    {
      name: "Dr. Kazeem Durodoye",
      role: "CEO — Managing Director",
      bio: "30+ years ICT experience. World Bank Consultant on Cybersecurity for Nigeria Communications Sector. Led National Cybersecurity Policy & Strategy, NCC-CSIRT, eNaira.",
      img: "worker-1.png",
    },
    {
      name: "Mr. Akinwale Mayomi Aisida",
      role: "Head of Threat Intelligence",
      bio: "Cybersecurity Researcher at the Canadian Institute of Cybersecurity, University of New Brunswick. Specializes in ML/AI-driven intrusion detection, zero-day attack identification, and threat intelligence modeling.",
      img: "worker-2.jpg",
    },
    {
      name: "Mr. Karl Ugokwe",
      role: "Senior Technical Solutions Manager",
      bio: "Cybersecurity Specialist focused on enterprise technical solutions integrations, baseline systems architecture, and comprehensive technical account management.",
      img: "worker-4.png",
    },
    {
      name: "Mr. Mark O. Okechukwu",
      role: "Business Development Manager",
      bio: "30+ years of ICT experience. World Bank Consultant on Cybersecurity. UNODC Consultant on security technologies. Led several national technology projects for ONSA, NCC, CBN, etc.",
      img: "worker-3.jpeg",
    },
    {
      name: "Chiamaka Prisca",
      role: "CEAP Manager, Novr Academy",
      bio: "Manages the Cybersecurity Education and Awareness Program (CEAP) at Novr Academy, overseeing curriculum delivery and student engagement.",
      img: "intern-2.jpg",
    },
  ];

  const interns = [
    { name: "Abubakar Usman Damilare", role: "Threat Intelligence Intern", img: "intern-1.jpg" },
    { name: "Adebayo Adedeji Enoch", role: "IT Lead", img: "worker-5.png" },
    { name: "Adeyemi Fisayomi", role: "Technical Intern", img: "intern-3.jpg" },
    { name: "Chukwuezugo Monwuba", role: "Cybersecurity Intern", img: "worker-6.jpeg" },
  ];

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-20 w-full bg-white text-zinc-900 antialiased">
      {/* Institutional Header Block */}
      <div className="border-b border-zinc-200 pb-10 max-w-4xl text-left">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 uppercase mb-4">
          About Cybernovr
        </h1>
        <p className="text-zinc-600 text-sm md:text-xl leading-relaxed mt-4 font-normal">
          At Cybernovr, we take a holistic and comprehensive approach to cyber
          resilience. It&apos;s not just about one or two aspects of security or
          recovery program, but a 360-degree view encompassing all facets of
          your organization&apos;s digital ecosystem and its ability to
          withstand and bounce back from cyber incidents. Welcome to our world….
          #cyber360resilience
        </p>
      </div>

      {/* Vision / Mission / Core Values Section */}
      <section className="space-y-8 text-left">
        {/* Row 1: Vision + Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-950/[0.02] border border-purple-900/10 p-6 rounded-xl space-y-3 shadow-sm">
            <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 rounded-lg flex items-center justify-center text-red-700">
              <Eye className="h-5 w-5" />
            </div>
            <h3 className="text-base font-black uppercase tracking-widest text-zinc-400 font-mono">
              Our Vision
            </h3>
            <p className="text-lg font-bold text-zinc-900 leading-tight uppercase tracking-tight">
              To achieve resilience of your Critical Information Infrastructure.
            </p>
          </div>
          <div className="bg-purple-950/[0.02] border border-purple-900/10 p-6 rounded-xl space-y-3 shadow-sm">
            <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 rounded-lg flex items-center justify-center text-red-700">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="text-base font-black uppercase tracking-widest text-zinc-400 font-mono">
              Our Mission
            </h3>
            <p className="text-lg text-zinc-600 leading-relaxed font-medium">
              To work with you to strengthen the resilience of your information
              assets. We will pinpoint your unique risks, prioritise your
              defences and help you achieve cybersecurity resilience of your
              critical services. These, we will deliver to your delight.
            </p>
          </div>
        </div>
        {/* Row 2: Core Values */}
        <div className="space-y-6">
          <div className="border-b border-zinc-100 pb-2">
            <h2 className="text-base font-black uppercase tracking-widest text-zinc-400">
              Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-purple-950/[0.02] border border-purple-900/10 p-6 rounded-xl space-y-3 shadow-sm">
              <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 rounded-lg flex items-center justify-center text-red-700">
                <Heart className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">
                Customer Delight
              </h4>
              <p className="text-base text-zinc-600 leading-relaxed font-medium">
                We are committed to customer satisfaction and won't stop until
                our clients are delighted. We take the time to understand their
                unique cybersecurity needs, deliver outstanding services, and
                prioritise the protection of their information infrastructure.
              </p>
            </div>
            <div className="bg-purple-950/[0.02] border border-purple-900/10 p-6 rounded-xl space-y-3 shadow-sm">
              <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 rounded-lg flex items-center justify-center text-red-700">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">
                Integrity
              </h4>
              <p className="text-base text-zinc-600 leading-relaxed font-medium">
                We are committed to unwavering honesty, transparency, and a
                strong moral compass to maintain trust both internally and with
                our clients. We acknowledge our mistakes, learn from them, and
                continuously strive to do what is right for our clients and
                society.
              </p>
            </div>
            <div className="bg-purple-950/[0.02] border border-purple-900/10 p-6 rounded-xl space-y-3 shadow-sm">
              <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 rounded-lg flex items-center justify-center text-red-700">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">
                Innovation
              </h4>
              <p className="text-base text-zinc-600 leading-relaxed font-medium">
                We are committed to relentless innovation, creating cutting-edge
                solutions while swiftly adapting to new challenges. We foster a
                culture of continuous learning and challenge the norm to achieve
                our philosophy of <span className="text-red-700">"It is Possible"</span>.
              </p>
            </div>
            <div className="bg-purple-950/[0.02] border border-purple-900/10 p-6 rounded-xl space-y-3 shadow-sm">
              <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 rounded-lg flex items-center justify-center text-red-700">
                <Users className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">
                People
              </h4>
              <p className="text-base text-zinc-600 leading-relaxed font-medium">
                We are committed to guiding our team to uphold the highest
                standards of quality in solutions, services, and incident
                response. Our people are the driving force behind our success,
                and we deeply appreciate their contributions.
              </p>
            </div>
            <div className="bg-purple-950/[0.02] border border-purple-900/10 p-6 rounded-xl space-y-3 shadow-sm">
              <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 rounded-lg flex items-center justify-center text-red-700">
                <RefreshCcw className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">
                Resilience
              </h4>
              <p className="text-base text-zinc-600 leading-relaxed font-medium">
                We are committed to achieving cybersecurity resilience on
                ourselves the same way we are to our clients. This commitment
                drives us to build robust, reliable, and adaptable systems and
                processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* EXECUTIVE TEAM LAYOUTS - RECTANGULAR, PROFESSIONAL SUBTLE PURPLE ACCENT */}
      {/* ========================================================================= */}
      <section className="space-y-16 text-left">
        {/* Core Workers Matrix */}
        <div className="space-y-6">
          <div className="border-b border-zinc-100 pb-2">
            <h2 className="text-base font-black uppercase tracking-widest text-zinc-400">
              Our Management Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {workers.map((member, i) => (
              <Link
                href={`/about/team?person=${encodeURIComponent(member.name)}`}
                key={i}
                className="block p-4 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl space-y-4 hover:border-purple-900/30 transition-all duration-300 cursor-pointer"
              >
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative">
                  <img
                    src={`/assets/team/${member.img}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                      const fallback = document.getElementById(
                        `fb-rect-worker-${i}`,
                      );
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div
                    id={`fb-rect-worker-${i}`}
                    className="hidden absolute inset-0 items-center justify-center bg-zinc-50 text-zinc-400 text-xs font-mono tracking-widest"
                  >
                    PHOTO PLACEHOLDER
                  </div>
                </div>
                <div className="pt-1">
                  <h4 className="text-base font-bold text-zinc-900 tracking-tight">
                    {member.name}
                  </h4>
                  <p className="text-xs text-red-700 font-mono font-bold tracking-wider mt-0.5 uppercase">
                    {member.role}
                  </p>
                  <p className="text-zinc-500 text-[11px] leading-relaxed line-clamp-3 mt-2 font-medium">
                    {member.bio}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Technical Interns Matrix */}
        <div className="space-y-6">
          <div className="border-b border-zinc-100 pb-2">
            <h2 className="text-md font-black uppercase tracking-widest text-zinc-400">
              Technical Interns
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {interns.map((member, i) => (
              <Link
                href={`/about/team?person=${encodeURIComponent(member.name)}`}
                key={i}
                className="block p-4 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl space-y-4 hover:border-purple-900/30 transition-all duration-300 cursor-pointer"
              >
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative">
                  <img
                    src={`/assets/team/${member.img}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                      const fallback = document.getElementById(
                        `fb-rect-intern-${i}`,
                      );
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div
                    id={`fb-rect-intern-${i}`}
                    className="hidden absolute inset-0 items-center justify-center bg-zinc-50 text-zinc-400 text-xs font-mono tracking-widest"
                  >
                    PHOTO PLACEHOLDER
                  </div>
                </div>
                <div className="pt-1">
                  <h4 className="text-base font-bold text-zinc-900 tracking-tight">
                    {member.name}
                  </h4>
                  <p className="text-xs text-red-700 font-mono font-bold tracking-wider mt-0.5 uppercase">
                    {member.role}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Full Team Gallery Navigation Call */}
        <div className="border-2 border-purple-900/10 bg-purple-950/[0.02] p-6 md:p-8 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-zinc-900 uppercase tracking-tight">
              What Drives Us
            </h3>
            <p className="text-xs text-zinc-500 font-medium">
              Attaining a 360-degree cybersecurity resilience for your business.
              We keep thinking because we know <span className="text-red-700 font-bold">It is POSSIBLE</span>.
            </p>
          </div>
          <Link
            href="/about/team"
            className="text-red-700 hover:text-red-600 font-bold uppercase text-xs tracking-widest font-mono flex items-center gap-2 whitespace-nowrap pt-1 sm:pt-0 group"
          >
            View Full Team Profile{" "}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* CORPORATE SECTORS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-zinc-200 text-left">
        {corporateSectors.map((sector, index) => {
          const Icon = sector.icon;
          return (
            <div
              key={index}
              className="p-6 md:p-8 bg-purple-950/[0.01] border-2 border-purple-900/5 hover:border-purple-900/20 rounded-2xl flex flex-col justify-between transition-all duration-300 shadow-sm"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest font-mono block">
                    {sector.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-zinc-900 uppercase tracking-tight">
                    {sector.title}
                  </h3>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed font-normal">
                  {sector.desc}
                </p>
              </div>
              <div className="pt-6">
                <Link
                  href={sector.link}
                  className="inline-flex items-center gap-1.5 text-red-700 hover:text-red-600 font-bold uppercase text-xs tracking-widest font-mono group"
                >
                  Learn More{" "}
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}