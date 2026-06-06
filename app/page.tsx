"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [blogIndex, setBlogIndex] = useState(0);
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const rotatingBlogInsights = [
    {
      title: "Monday Threat Briefing",
      desc: "Active threats targeting the subscriber's sector, emerging risks, and one recommended action for the week ahead.",
    },
    {
      title: "Deep Threat Engineering Reports",
      desc: "Detailed technical analysis of a specific threat or vulnerability including real-world case examples and preventative measures.",
    }
  ];

  const softwareSolutions = [
    {
      name: "NovrSOC",
      tagline: "AI-Powered Managed SOC (MSSP)",
      desc: "AI-powered autonomous cyber defense with 24/7 monitoring and management of your assets against cyber threats. Deploys self-learning AI that detects and responds to novel threats in real time across cloud, email, OT, and network environments.",
      path: "/solutions/novrsoc"
    },
    {
      name: "NovrGRC",
      tagline: "Automated Governance & Strategy Suite",
      desc: "Next-generation GRC platform providing complete visibility of cyber risks and compliance. Automates workflows for risk, compliance, and audit across international standards with real-time cyber posture scoring.",
      path: "/solutions/novrgrc"
    },
    {
      name: "SecuBreach",
      tagline: "Vulnerability Threat & Exposure Management",
      desc: "Nigeria's #1 vulnerability management solution. Bridges vulnerability management and regulatory compliance, integrating the NIST CVE database with ML heuristics for autonomous, continuous framework monitoring.",
      path: "/solutions/secubreach"
    }
  ];

  const industryVerticals = [
    { name: "Telecoms", icon: "cell_tower", title: "Securing High-Capacity Cellular Signaling Overlays", desc: "Setting up deep packet monitoring parameters at edge internet gateway hubs, performing 5G infrastructure threat evaluations, and operationalizing Sectoral CSIRTs natively to withstand highly complex nation-state APT disruption matrices." },
    { name: "Banking", icon: "account_balance", title: "Hardening High-Velocity Financial Settlement Ecosystems", desc: "Securing relational core banking databases, eNaira CBDC platform transaction flows, clearing switches, and cross-border API gateways seamlessly to adhere fully to structural CBN directives and PCI DSS 4.0 regulations." },
    { name: "Oil & Gas", icon: "factory", title: "Protecting Operational Technology & SCADA Boundary Nodes", desc: "Isolating industrial automation matrices, telemetry logging circuits, and physical terminal relays securely using absolute air-gapped zero-trust architecture parameters to prevent remote malware injections." },
    { name: "Fintech", icon: "payments", title: "Continuous Risk Assessment for Digital Wallets & Gateways", desc: "Deploying automated risk quantification tools and continuous vulnerability discovery pipelines across serverless logic to shield payment switches from advanced data interception threats." },
    { name: "Government", icon: "gavel", title: "Sovereign Digital Public Infrastructure (DPI) Hardening", desc: "Designing comprehensive, unalterable cybersecurity frameworks for state execution programs, secure information frameworks, and country-wide network grids to guarantee administrative data confidentiality." }
  ];

  useEffect(() => {
    if (rotatingBlogInsights.length <= 1) return;
    const timer = setInterval(() => {
      setBlogIndex((prevIndex) => (prevIndex + 1) % rotatingBlogInsights.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [rotatingBlogInsights.length]);

  const currentInsight = rotatingBlogInsights[blogIndex] || rotatingBlogInsights[0];

  return (
    <>
      {/* [Module 1: Hero Section] */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-section-gap px-margin-desktop max-w-[1536px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-gutter items-start">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-on-surface tracking-tight leading-none">
              Secure Your Digital <br /> Future With
            </h1>
            <div className="pt-1 max-w-xs md:max-w-md">
              <img src="/logo.png" alt="CYBERNOVR" className="w-full h-auto object-contain" />
            </div>
            <div className="pt-4 space-y-6">
              <p className="italic text-primary border-l-4 border-primary pl-6 py-1 text-lg md:text-xl font-bold">
                Resilience is in our DNA
              </p>
              <div className="max-w-2xl space-y-4 text-on-surface-variant text-sm md:text-base leading-relaxed">
                <p>CYBERNOVR is a cybersecurity firm dedicated to building resilience for Critical Information Infrastructures across Africa and beyond. Our business is driven towards attaining a 360-degree cybersecurity resilience for your business, utilizing the core technical philosophy that &quot;It is Possible&quot;.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 font-bold rounded-DEFAULT hover:brightness-110 active:scale-95 transition-all text-xs uppercase tracking-widest">
                  Request A Demo
                </button>
                <Link href="/academy" className="w-full sm:w-auto border-2 border-primary text-primary px-8 py-4 font-bold rounded-DEFAULT hover:bg-primary/5 transition-all text-xs uppercase tracking-widest text-center">
                  Enroll At Academy
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 w-full pt-8 lg:pt-4 border-t lg:border-t-0 lg:border-l border-outline-variant/20 lg:pl-8 space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-black text-primary flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Intelligence Feed 
            </h3>
            <div className="bg-surface-container-low p-6 md:p-8 rounded-xl border border-outline-variant/10 min-h-[200px] flex flex-col justify-between shadow-sm">
              <div className="space-y-2">
                <p className="text-base md:text-lg font-bold text-on-surface leading-tight">
                  {currentInsight.title} 
                </p>
                <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed line-clamp-3">
                  {currentInsight.desc}
                </p>
              </div>
              <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mt-4 hover:gap-3 transition-all self-start">
                Visit The Blog <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* [Module 2: About Mini Section] */}
      <section className="py-16 bg-surface-container-low border-y border-outline-variant/10 px-margin-desktop max-w-[1536px] mx-auto rounded-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface">About Cybernovr</h2>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              Established in 2008, CYBERNOVR delivers comprehensive services in Governance, Risk, and Compliance (GRC) management, Critical Information Infrastructure Protection, and specialized educational frameworks.
            </p>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              With 17 years of national and international cybersecurity leadership, we bring verified expertise across Information Assurance and IT Security. Our technical team has actively designed frameworks for central banking currencies, communication sector CSIRTs, and secure digital public infrastructures across entire states.
            </p>
          </div>
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="w-full max-w-xl rounded-xl overflow-hidden shadow-xl border border-outline-variant/20 bg-white">
              <img alt="About Operations Center" className="w-full aspect-[16/10] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfV1vifN5CVUpGRvC0_rOY7w2k7bFW3IQf_mG_ySnkMCqN1-589scev2By04HDOnmCYxpl2EJ5Xx8IDu8loEEFVosAlmcakuw4fP8BsmZi49b4sgVMftZhKznXtYkv2MlbcILztdvYWaXIpa_5D6u7iFdthQemEibaFtaVRM2-nUEBS76sxI6Meo-A-spYpEZVK2UlvldE6kB9fsuPiHISFG4hNZpK9MhmlSysNoHNIMgT6-3K-SmqORFrPbDnC_bWildTo121BjtB" />
            </div>
          </div>
        </div>
      </section>

      {/* [NEW Module 3: Our Core Software Solutions - Mapped directly from image_10c98a.png layout] */}
      <section className="py-20 px-margin-desktop max-w-[1536px] mx-auto text-center space-y-12">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-on-surface">Our Core Software Solutions</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {softwareSolutions.map((sol, idx) => (
            <div key={idx} className="bg-white border border-outline-variant/30 p-8 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[300px] group">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">layers</span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-on-surface group-hover:text-primary transition-colors">{sol.name}</h3>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mt-0.5">{sol.tagline} </p>
                </div>
                <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed line-clamp-4">{sol.desc} </p>
              </div>
              <Link href={sol.path} className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-primary pt-6 group-hover:gap-2.5 transition-all">
                Console Access <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* [NEW Module 4: Tailored Protection for Critical Sectors - Tab Matrix From image_10c98a.png] */}
      <section className="py-20 bg-surface-container-low px-margin-desktop max-w-[1536px] mx-auto rounded-xl border border-outline-variant/10 space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black uppercase tracking-tight text-on-surface">Tailored Protection for Critical Sectors</h2>
          <p className="text-on-surface-variant text-sm max-w-xl mx-auto">Providing certified sovereignty in risk engineering across vital state and banking verticals.</p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 border-b border-outline-variant/20 pb-6">
          {industryVerticals.map((ind, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndustry(i)}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${
                selectedIndustry === i 
                  ? "bg-primary text-white border-primary shadow-sm" 
                  : "bg-white border-outline-variant/30 text-on-surface-variant hover:bg-surface"
              }`}
            >
              <span className="material-symbols-outlined text-sm">{ind.icon}</span>
              <span>{ind.name}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Panel Window Frame */}
        <div className="bg-white border border-outline-variant/20 p-8 md:p-12 rounded-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[260px] animate-fadeIn">
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-xl md:text-2xl font-black text-on-surface leading-tight">
              {industryVerticals[selectedIndustry].title}
            </h3>
            <p className="text-on-surface-variant text-sm md:text-base leading-relaxed max-w-3xl">
              {industryVerticals[selectedIndustry].desc}
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link href="/industries" className="w-full lg:w-auto bg-inverse-surface hover:bg-primary text-white font-bold text-xs uppercase tracking-widest px-6 py-4 rounded text-center transition-all shadow-sm">
              Review Industry Use-Case
            </Link>
          </div>
        </div>
      </section>

      {/* [NEW Module 5: CEAP Academy Testimonial Block - Injected right from image_10c98a.png template] */}
      <section className="py-20 px-margin-desktop max-w-[1536px] mx-auto bg-white border border-outline-variant/30 rounded-xl my-12 text-center relative overflow-hidden">
        <div className="absolute top-6 left-6 text-on-surface-variant/5 text-9xl font-serif select-none pointer-events-none font-black leading-none">“</div>
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <p className="text-lg md:text-xl text-on-surface font-medium leading-relaxed italic">
            &quot;The CEAP Academy has completely transformed our operational security posture. Cybernovr doesn&apos;t just provide software; they provide a foundation of knowledge and vigilance that feels rawly integrated with our daily operations. Our systems have never been more secure.&quot;
          </p>
          <div className="pt-2">
            <h4 className="text-sm font-black text-on-surface uppercase tracking-wider">Chief Information Security Officer</h4>
            <p className="text-[11px] font-mono font-bold text-primary tracking-widest uppercase mt-0.5">International Financial Institution</p>
          </div>
        </div>
      </section>

      {/* [Module 6: Statistics Banner] */}
      <section className="w-full bg-primary text-white py-12 my-12">
        <div className="max-w-[1536px] mx-auto px-margin-desktop grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="text-3xl md:text-4xl font-black leading-none tracking-tight">17+</h4>
            <p className="text-[10px] text-white/70 uppercase tracking-widest mt-1.5 font-bold">Years Experience </p>
          </div>
          <div>
            <h4 className="text-3xl md:text-4xl font-black leading-none tracking-tight">6</h4>
            <p className="text-[10px] text-white/70 uppercase tracking-widest mt-1.5 font-bold">Countries Served </p>
          </div>
          <div>
            <h4 className="text-3xl md:text-4xl font-black leading-none tracking-tight">30+</h4>
            <p className="text-[10px] text-white/70 uppercase tracking-widest mt-1.5 font-bold">National Projects </p>
          </div>
          <div>
            <h4 className="text-3xl md:text-4xl font-black leading-none tracking-tight">2</h4>
            <p className="text-[10px] text-white/70 uppercase tracking-widest mt-1.5 font-bold">Global Offices </p>
          </div>
        </div>
      </section>

      {/* [Global Partners Showcase Component] */}
      <section className="py-16 bg-surface-container-low text-center px-margin-desktop max-w-[1536px] mx-auto rounded-xl my-12">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface">Our Global Partners</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto text-sm">
              We collaborate with industry-leading technology providers to deliver elite security solutions across environments.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center gap-8 max-w-5xl mx-auto py-4 font-mono text-xs font-black tracking-widest text-on-surface-variant/50 uppercase">
            <span>Darktrace </span>
            <span>Tenable </span>
            <span>Proofpoint </span>
            <span>Whalebone </span>
            <span>Sectigo </span>
            <span>izoologic </span>
          </div>
        </div>
      </section>

      {/* [Contact Audit Form Container Box] */}
      <section className="pb-16 md:pb-section-gap px-margin-desktop max-w-[1536px] mx-auto pt-4">
        <div className="bg-inverse-surface rounded-xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-black/10">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-white uppercase tracking-tight">Let&apos;s Secure Your Business</h2>
              <p className="text-white/70 italic text-sm md:text-base leading-relaxed">
                &quot;In the digital age, security isn&apos;t an option—it&apos;s the foundation of existence.&quot;
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white/5 backdrop-blur-md p-8 md:p-16">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-5">
                <input className="w-full bg-transparent border-0 border-b border-white/10 pb-2 text-white placeholder:text-white/20 text-sm focus:ring-0 focus:border-primary transition-all outline-none" placeholder="Full Name" type="text" required />
                <input className="w-full bg-transparent border-0 border-b border-white/10 pb-2 text-white placeholder:text-white/20 text-sm focus:ring-0 focus:border-primary transition-all outline-none" placeholder="Corporate Email" type="email" required />
                <input className="w-full bg-transparent border-0 border-b border-white/10 pb-2 text-white placeholder:text-white/20 text-sm focus:ring-0 focus:border-primary transition-all outline-none" placeholder="Company Domain" type="text" required />
                <div className="space-y-2 pt-2">
                  <label className="text-[11px] uppercase tracking-widest text-white/40 block font-bold">Custom Parameters</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded p-3 text-white text-sm placeholder:text-white/20 focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none transition-all outline-none" placeholder="Describe system criteria metrics..."></textarea>
                </div>
              </div>
              <button className="w-full bg-primary text-white py-4 font-bold uppercase tracking-widest rounded shadow-lg hover:brightness-110 transition-all text-xs" type="submit">
                Initialize Security Audit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}