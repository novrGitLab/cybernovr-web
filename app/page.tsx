"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
// FIXED: Restored Globe and explicitly bundled all required structural icon vector references
import { Monitor, FileSpreadsheet, ShieldAlert, Globe, ArrowRight, Bell, CheckCircle2, X, Terminal, ShieldCheck, Star } from 'lucide-react';

export default function Home() {
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Dynamic Animated Metrics States [cite: 56, 60]
  const [vulnerabilitiesCount, setVulnerabilitiesCount] = useState(0);
  const [frameworksCount, setFrameworksCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);

  const COMPANY_CONTACTS = {
    emails: {
      general: "info@cybernovr.com",
      incidentResponse: "incident@cybernovr.com",
      alerts: "alerts@cybernovr.com"
    },
    socials: {
      linkedin: "#",
      x: "#",
      instagram: "#",
      facebook: "#",
      tiktok: "#"
    }
  };

  const realTimeThreatStream = [
    { origin: "SecuBreach", event: "Critical RCE Exploit identified in downstream perimeter gateway nodes.", tier: "CRITICAL" },
    { origin: "NovrSOC", event: "Brute-force identity injection matrix intercepted and contained at 02:14 UTC.", tier: "HIGH" },
    { origin: "NovrGRC", event: "Automated framework drift detected across external active compliance records.", tier: "INFO" },
    { origin: "NovrAlert", event: "Active ransomware overlay vector targeting high-capacity cellular switches.", tier: "CRITICAL" }
  ];

  const softwareSolutions = [
    { name: "NovrSOC", tagline: "AI-Powered Managed SOC (MSSP)", desc: "AI-powered autonomous cyber defense with 24/7 monitoring and management of your assets against cyber threats.", path: "/solutions/novrsoc", logo: "novrsoc.jpg" },
    { name: "NovrGRC", tagline: "Automated Governance & Strategy Suite", desc: "Next-generation GRC platform providing complete visibility of cyber risks and compliance.", path: "/solutions/novrgrc", logo: "novrgrc.jpg" },
    { name: "SecuBreach", tagline: "Vulnerability Threat & Exposure Management", desc: "Nigeria's #1 vulnerability management solution. Bridges vulnerability management and regulatory compliance.", path: "/solutions/secubreach", logo: "secubreach.jpg" },
    { name: "NovrRadar", tagline: "Global Live Threat IOC & IOA Engine", desc: "Advanced predictive threat analysis platform performing continuous indicator tracking.", path: "/solutions/novrradar", logo: "novrradar.png" }
  ];

  // Configured with the exact 7 matrix targets from your interface layout screenshot
  const industryVerticals = [
    { name: "Banking", title: "Hardening High-Velocity Financial Settlement Ecosystems", desc: "Securing relational core banking databases, CBDC platform transaction flows, clearing switches, and cross-border API gateways." },
    { name: "Communication", title: "Securing High-Capacity Cellular Signaling Overlays", desc: "Setting up deep packet monitoring parameters at edge internet gateway hubs, performing 5G infrastructure threat evaluations, and operationalizing Sectoral CSIRTs natively." },
    { name: "Fintech", title: "Continuous Risk Assessment for Digital Wallets & Gateways", desc: "Deploying automated risk quantification tools and continuous vulnerability discovery pipelines across serverless logic." },
    { name: "Energy", title: "Protecting Operational Technology & SCADA Boundary Nodes", desc: "Isolating industrial automation matrices, telemetry logging circuits, and physical terminal relays securely using absolute air-gapped zero-trust architecture parameters." },
    { name: "Government", title: "Sovereign Digital Public Infrastructure (DPI) Hardening", desc: "Designing comprehensive, unalterable cybersecurity frameworks for state execution programs, secure information frameworks, and country-wide networks." },
    { name: "Education", title: "Securing Academic Infrastructure & Student Data Matrix Assets", desc: "Protecting cloud learning repositories, student database nodes, identity management platforms, and privacy profiles across institutions." },
    { name: "Health", title: "Shielding Healthcare Information Frameworks & Medical Records", desc: "Harden cryptographic vaults handling diagnostic arrays, hospital registry endpoints, and healthcare logistics networks seamlessly." }
  ];

  const activeTestimonials = [
    { text: "The CEAP Academy has completely transformed our operational security posture. Cybernovr doesn't just provide software; they provide a foundation of knowledge and vigilance that feels rawly integrated with our daily operations. Our systems have never been more secure.", author: "Chief Information Security Officer", firm: "International Financial Institution" },
    { text: "NovrGRC enabled our risk engineering team to drop tracking overhead times by 78%. We map compliance requirements seamlessly across regional boundaries now with total transparency.", author: "Director of Enterprise Infrastructure", firm: "Pan-African Telecom Provider" },
    { text: "During simulated red team adversarial campaigns, SecuBreach flagged parameter exposure vectors that traditional vulnerability assessment systems completely missed. Remarkable accuracy benchmarks.", author: "Head of Security Architecture", firm: "Fintech Settlement Gateway Group" }
  ];

  // Clean, sequential nomenclature mapping for partner images
  const partners = ['pat1', 'pat2', 'pat3', 'pat4', 'pat5', 'pat6'];

  // Smooth Ascending Metrics Counting Animation Logic
  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000;

    const animateMetrics = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setExperienceCount(Math.floor(progress * 17)); // [cite: 56]
      setVulnerabilitiesCount(Math.floor(progress * 4820));
      setFrameworksCount(Math.floor(progress * 7));
      setProjectsCount(Math.floor(progress * 30)); // [cite: 60]

      if (progress < 1) {
        requestAnimationFrame(animateMetrics);
      }
    };

    requestAnimationFrame(animateMetrics);
  }, []);

  // Timed 8-second index slider loop for active testimonials
  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % activeTestimonials.length);
    }, 8000);
    return () => clearInterval(testimonialTimer);
  }, []);

  const scrollToContactForm = () => {
    const target = document.getElementById('contact-gateway');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAlertSubscription = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscriberEmail) {
      setSubscriptionSuccess(true);
      setTimeout(() => {
        setIsAlertModalOpen(false);
        setSubscriptionSuccess(false);
        setSubscriberEmail("");
      }, 2500);
    }
  };

  return (
    <div className="w-full space-y-4 bg-zinc-50 overflow-x-hidden text-zinc-900 antialiased">
      
      {/* [Module 1: Hero Section] */}
      <section className="pt-24 md:pt-28 pb-6 md:pb-10 px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1536px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-4 text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-zinc-950 tracking-tight leading-none uppercase">
              Secure Your Digital <br /> Future With us
            </h1>

            <div className="pt-2 space-y-6">
              <p className="italic border-l-4 border-red-600 pl-6 py-1 text-lg md:text-xl font-bold text-zinc-800">
                Resilience is in our DNA
              </p>
              <div className="max-w-2xl space-y-4 text-zinc-600 text-sm md:text-base leading-relaxed font-normal">
                <p>CYBERNOVR is a cybersecurity firm dedicated to building resilience for Critical Information Infrastructures across Africa and beyond. Our business is driven towards attaining a 360-degree cybersecurity resilience for your business, utilizing the core technical philosophy that "It is Possible".</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button 
                  onClick={scrollToContactForm}
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold rounded-md active:scale-95 transition-all text-xs uppercase tracking-widest shadow-md flex items-center justify-center gap-2 font-mono"
                >
                  Request A Demo <ArrowRight className="h-4 w-4" />
                </button>
                <Link href="/academy" className="w-full sm:w-auto border-2 border-zinc-200 hover:border-red-600 text-zinc-700 hover:text-red-600 px-8 py-4 font-bold rounded-md hover:bg-zinc-50 transition-all text-xs uppercase tracking-widest text-center font-mono">
                  Enroll At Academy
                </Link>
              </div>
            </div>
          </div>

          {/* DYNAMIC RADAR INTERCEPT GRAPHIC COMPONENT */}
          <div className="lg:col-span-5 w-full relative pt-12 lg:pt-0">
            <div className="relative rounded-2xl overflow-hidden border border-purple-800/30 bg-purple-950 p-6 shadow-2xl h-[360px] flex flex-col justify-between">
              
              <div className="absolute inset-0 bg-black/50 rounded-t-2xl border-b border-white/5 overflow-hidden flex items-center justify-center">
                <div className="absolute w-72 h-72 border border-emerald-500/10 rounded-full flex items-center justify-center">
                  <div className="w-52 h-52 border border-emerald-500/20 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 border border-emerald-500/30 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 border border-emerald-500/40 rounded-full" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute w-full h-[1px] bg-emerald-500/10" />
                <div className="absolute h-full w-[1px] bg-emerald-500/10" />
                <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-transparent via-transparent to-emerald-500/20 animate-spin" style={{ animationDuration: '4s' }} />

                <div className="absolute top-1/4 left-1/3 z-10 text-center">
                  <span className="w-2.5 h-2.5 bg-red-600 rounded-full block animate-ping duration-1000" />
                  <span className="w-2 h-2 bg-red-500 rounded-full block -mt-2 shadow-[0_0_8px_#ef4444]" />
                  <span className="font-mono text-[8px] text-red-400 font-bold block bg-black/60 px-1 rounded mt-0.5 border border-red-500/20">CRITICAL INTRUSION</span>
                </div>

                <div className="absolute bottom-1/3 right-1/4 z-10 text-center">
                  <span className="w-2.5 h-2.5 bg-amber-500 rounded-full block animate-ping duration-1000" style={{ animationDelay: '0.5s' }} />
                  <span className="w-2 h-2 bg-amber-500 rounded-full block -mt-2 shadow-[0_0_8px_#f59e0b]" />
                  <span className="font-mono text-[8px] text-amber-400 font-bold block bg-black/60 px-1 rounded mt-0.5 border border-amber-500/20">HIGH EXPLOIT</span>
                </div>
              </div>

              <div className="w-full relative z-20 pt-2 mt-auto bg-purple-950 flex flex-col gap-3">
                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <p className="font-mono text-[10px] font-black text-white/80 uppercase tracking-widest">Live Attack Radar</p>
                  </div>
                  <span className="font-mono text-[9px] bg-red-600/20 border border-red-500/30 text-red-400 px-2 py-0.5 rounded font-black tracking-wider uppercase">NovrAlert Engine</span>
                </div>

                <button 
                  onClick={() => setIsAlertModalOpen(true)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3.5 font-black uppercase tracking-widest rounded-lg transition-all shadow-md flex items-center justify-center gap-2 font-mono text-xs"
                >
                  <Bell className="h-3.5 w-3.5" /> Receive Alert Broadcasts
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* VAPT & IS AUDIT ADVISORY INJECTED PANELS FROM CAPTURED SNIPPET */}
      {/* ========================================================================= */}
      <section className="py-6 px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1536px] mx-auto text-left grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl space-y-4 hover:border-purple-900/20 transition-all duration-300">
          <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
            <Terminal className="h-5 w-5" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-zinc-900 tracking-tight uppercase">Vulnerability Assessment &amp; Penetration Testing (VAPT)</h3>
            <span className="text-[10px] font-mono font-black tracking-widest text-red-600 block uppercase">Technical Security &amp; Threat Validation</span>
            <p className="text-zinc-600 text-xs md:text-sm leading-relaxed font-normal">Comprehensive active testing of digital perimeters, cloud architectures, RESTful APIs, and core software infrastructures to safely isolate exploitable gaps before threat actors leverage them.</p>
          </div>
          <button onClick={scrollToContactForm} className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest text-red-600 font-mono uppercase hover:text-red-500 pt-2 group">
            Initialize Scoping Console <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl space-y-4 hover:border-purple-900/20 transition-all duration-300">
          <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-zinc-900 tracking-tight uppercase">Information Security Audits &amp; Gap Analysis</h3>
            <span className="text-[10px] font-mono font-black tracking-widest text-red-600 block uppercase">Compliance Readiness &amp; Strategy Auditing</span>
            <p className="text-zinc-600 text-xs md:text-sm leading-relaxed font-normal">Detailed administrative and structural security posture evaluations mapping internal controls directly to regional and international legal standards (SOC 2, ISO 27001, NDPA, CBN directives).</p>
          </div>
          <button onClick={scrollToContactForm} className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest text-red-600 font-mono uppercase hover:text-red-500 pt-2 group">
            Initialize Scoping Console <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* [Module 2: About Mini Section] */}
      <section className="py-12 my-2 bg-white border-y border-zinc-200 px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1536px] mx-auto rounded-xl shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4 text-left">
            <h2 className="text-2xl md:text-3xl font-black text-zinc-950 uppercase tracking-tight">About Cybernovr</h2>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed font-normal">
              Established in 2008, CYBERNOVR delivers comprehensive services in Governance, Risk, and Compliance (GRC) management, Critical Information Infrastructure Protection, and specialized educational frameworks.
            </p>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed font-normal">
              With 17 years of national and international cybersecurity leadership, we bring verified expertise across Information Assurance and IT Security. Our technical team has actively designed frameworks for central banking currencies, communication sector CSIRTs, and secure digital public infrastructures across entire states.
            </p>
          </div>
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="w-full max-w-xl rounded-2xl overflow-hidden border border-purple-800/30 bg-purple-950 shadow-2xl p-1 relative group">
              <div className="w-full aspect-[16/10] bg-zinc-950 rounded-xl flex flex-col items-center justify-center p-6 relative overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
                <Globe className="h-10 w-10 text-red-500 opacity-60 group-hover:rotate-45 transition-transform duration-700" />
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mt-4 font-black">Operations Graphics Hub</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [Module 3: Our Software Solutions] */}
      <section className="py-10 pt-2 px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1536px] mx-auto text-center space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-zinc-950">Our Software Solutions</h2>
          <div className="w-12 h-1 bg-red-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {softwareSolutions.map((sol, idx) => (
            <div key={idx} className="bg-white border-2 border-zinc-200 p-6 rounded-xl shadow-sm hover:border-red-600/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[320px] group">
              <div className="space-y-4">
                <div className="h-10 w-auto flex items-center justify-start">
                  <img 
                    src={`/assets/brand/${sol.logo}`} 
                    alt={`${sol.name} Product Logo`} 
                    className="h-8 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                      const fallback = document.getElementById(`fb-sol-${idx}`);
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <span id={`fb-sol-${idx}`} className="hidden font-mono font-black text-sm uppercase tracking-wider text-purple-950">{sol.name}</span>
                </div>
                <div>
                  <h3 className="text-lg font-black text-zinc-950 group-hover:text-red-600 transition-colors uppercase tracking-tight">{sol.name}</h3>
                  <p className="text-[10px] font-mono font-bold text-red-500 uppercase tracking-widest mt-0.5">{sol.tagline}</p>
                </div>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed line-clamp-4 font-normal">{sol.desc}</p>
              </div>
              <button 
                onClick={scrollToContactForm} 
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-red-600 pt-4 hover:text-red-400 group-hover:gap-2.5 transition-all text-left font-mono"
              >
                Request a Demo <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* [Module 4: Tailored Protection for Critical Sectors] */}
      <section className="py-16 bg-white px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1536px] mx-auto rounded-xl border border-zinc-200 space-y-10 shadow-sm">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-zinc-950">Tailored Protection for Critical Sectors</h2>
          <p className="text-zinc-700 text-sm md:text-base max-w-2xl mx-auto font-semibold leading-relaxed">Providing certified sovereignty in risk engineering across vital state and banking verticals.</p>
        </div>

        {/* Updated Horizontal Button Bar Configured with All 7 Industry Targets */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-zinc-100 pb-6">
          {industryVerticals.map((ind, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndustry(i)}
              className={`px-5 py-2.5 rounded-md text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap border ${
                selectedIndustry === i 
                  ? "bg-purple-600 border-purple-600 text-white shadow-sm font-black" 
                  : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-zinc-100 font-bold"
              }`}
            >
              <span>{ind.name}</span>
            </button>
          ))}
        </div>

        <div className="bg-purple-950 text-white border border-purple-900/40 p-8 md:p-12 rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[260px] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-transparent to-transparent pointer-events-none" />
          <div className="lg:col-span-8 space-y-4 relative z-10 text-left">
            <h3 className="text-xl md:text-2xl font-black text-white leading-tight uppercase tracking-tight">
              {industryVerticals[selectedIndustry].title}
            </h3>
            <p className="text-purple-200 text-xs md:text-sm leading-relaxed max-w-3xl font-normal">
              {industryVerticals[selectedIndustry]?.desc}
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end relative z-10 w-full">
            <Link href="/solutions" className="w-full lg:w-auto bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest px-6 py-4 rounded-md text-center transition-all shadow-md font-mono">
              Review Industry Use-Case
            </Link>
          </div>
        </div>
      </section>

      {/* [Module 5: CEAP Academy Testimonial Block] */}
      <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1536px] mx-auto bg-white border border-zinc-200 rounded-xl text-center relative overflow-hidden shadow-sm min-h-[260px] flex items-center justify-center">
        <div className="absolute top-6 left-6 text-zinc-100 text-9xl font-serif select-none pointer-events-none font-black leading-none">“</div>
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="flex justify-center gap-1 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
          </div>
          <p className="text-base md:text-lg text-zinc-800 font-semibold leading-relaxed italic transition-opacity duration-500">
            "{activeTestimonials[testimonialIndex].text}"
          </p>
          <div className="pt-2">
            <h4 className="text-xs md:text-sm font-black text-zinc-950 uppercase tracking-wider">{activeTestimonials[testimonialIndex].author}</h4>
            <p className="text-[10px] font-mono font-black text-red-500 tracking-widest uppercase mt-0.5">{activeTestimonials[testimonialIndex].firm}</p>
          </div>
        </div>
      </section>

      {/* [Module 6: Statistics Banner] */}
      <section className="w-full bg-purple-950 text-white border-y border-purple-900/30 py-12 shadow-inner relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center font-mono relative z-10">
          <div>
            <h4 className="text-3xl md:text-4xl font-black text-white leading-none tracking-tight">{experienceCount}+</h4>
            <p className="text-[9px] text-purple-300 uppercase tracking-widest mt-2 font-black">Years Experience</p>
          </div>
          <div>
            <h4 className="text-3xl md:text-4xl font-black text-red-500 leading-none tracking-tight">{vulnerabilitiesCount}+</h4>
            <p className="text-[9px] text-purple-300 uppercase tracking-widest mt-2 font-black">Vulnerabilities Remediated</p>
          </div>
          <div>
            <h4 className="text-3xl md:text-4xl font-black text-white leading-none tracking-tight">{frameworksCount}</h4>
            <p className="text-[9px] text-purple-300 uppercase tracking-widest mt-2 font-black">Compliance Frameworks</p>
          </div>
          <div>
            <h4 className="text-3xl md:text-4xl font-black text-white leading-none tracking-tight">{projectsCount}+</h4>
            <p className="text-[9px] text-purple-300 uppercase tracking-widest mt-2 font-black">National Projects</p>
          </div>
        </div>
      </section>

      {/* [Global Partners Showcase Component] - INFINITE CAROUSEL ANIMATION FROM LEFT TO RIGHT */}
      <section className="py-12 bg-white text-center px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1536px] mx-auto rounded-xl border border-zinc-200 shadow-sm overflow-hidden relative">
        <div className="space-y-6">
          <div className="space-y-1.5">
            <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-tight">Our Global Partners</h2>
            <p className="text-zinc-500 max-w-xl mx-auto text-xs md:text-sm font-medium">
              We collaborate with industry-leading technology providers to deliver elite security solutions across environments.
            </p>
          </div>
          
          <div className="relative w-full flex items-center overflow-hidden py-4">
            <div className="flex space-x-16 animate-marqueeLeftToRight min-w-full shrink-0 items-center justify-around">
              {partners.concat(partners).map((partner, i) => (
                <img 
                  key={`${partner}-${i}`}
                  src={`/assets/partners/${partner}.png`}
                  alt="Technology partner mark"
                  className="h-8 md:h-10 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer max-w-[140px]"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* [Contact Audit Form Container Box] - INTERACTIVE FOCUS PURPLE GLOW */}
      <section id="contact-gateway" className="pb-16 px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1536px] mx-auto pt-2">
        <div className="bg-zinc-950 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-zinc-900 transition-all duration-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]">
          <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white/[0.02]">
            <div className="space-y-4 text-left">
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">Let's Secure Your Business</h2>
              <p className="text-zinc-400 italic text-sm md:text-base leading-relaxed font-semibold">
                "In the digital age, security isn't an option—it's the foundation of existence."
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white/[0.04] p-8 md:p-16 text-left">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Security audit request submitted safely."); }}>
              <div className="space-y-5">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider">Full Name *</label>
                  <input className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal" placeholder="Your name" type="text" required />
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider">Corporate Email *</label>
                  <input className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal" placeholder="you@company.com" type="email" required />
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider">Phone Number *</label>
                  <input className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal" placeholder="Contact phone layout" type="tel" required />
                </div>
                
                <div className="space-y-1.5 pt-1">
                  <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider block">Comments</label>
                  <textarea rows={4} className="w-full bg-zinc-900 border border-zinc-700 rounded p-4 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all resize-none font-normal" placeholder="Describe architectural inquiries..."></textarea>
                </div>
              </div>
              
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-black uppercase tracking-widest rounded shadow-xl transition-all text-xs font-mono" type="submit">
                Initialize Security Audit
              </button>
            </form>
          </div>
        </div>
        <div className="text-center pt-6">
          <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 font-bold">Operations: Alausa, Ikeja, Lagos, Nigeria.</span>
        </div>
      </section>

      {/* Subscription Modal Box Portal Trigger */}
      {isAlertModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-purple-950 border border-purple-800 text-white rounded-2xl max-w-md w-full p-6 md:p-8 shadow-2xl relative text-left space-y-6">
            <button onClick={() => setIsAlertModalOpen(false)} className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors">
              <X className="h-5 w-5" />
            </button>

            {!subscriptionSuccess ? (
              <>
                <div className="space-y-2">
                  <div className="w-10 h-10 bg-red-600/10 border border-red-500/30 rounded-xl flex items-center justify-center text-red-500">
                    <Bell className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight pt-1">Subscribe to Threat Alerts</h3>
                  <p className="text-xs text-purple-200 leading-relaxed font-medium">
                    Intelligence feeds will route directly through <span className="font-mono text-red-400">{COMPANY_CONTACTS.emails.alerts}</span>.
                  </p>
                </div>

                <form onSubmit={handleAlertSubscription} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-purple-300 font-mono">Corporate Email</label>
                    <input 
                      type="email" placeholder="analyst@secure-domain.com" value={subscriberEmail}
                      onChange={(e) => setSubscriberEmail(e.target.value)} required
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all font-medium"
                    />
                  </div>
                  <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest py-3.5 rounded-lg transition-all shadow-md font-mono">
                    Activate Threat Monitoring
                  </button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center flex flex-col items-center justify-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="h-12 w-12 text-emerald-500 animate-bounce" />
                <h3 className="text-base font-black uppercase tracking-wider">Subscription Successful</h3>
                <p className="text-xs text-purple-200 max-w-xs mx-auto font-medium">Threat feed monitoring pipelines are initializing.</p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}