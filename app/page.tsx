"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [blogIndex, setBlogIndex] = useState(0);

  const rotatingBlogInsights = [
    {
      title: "Advanced Firewall Penetration Trends in 2026",
      desc: "Explore how next-generation attackers are bypassing traditional firewall logic using polymorphic code fragments and decentralized command structures globally.",
    },
    {
      title: "Sovereign Threat Vectors & Ransomware Metrics",
      desc: "Deep forensic evaluation mapping of infrastructure injection paths targeting enterprise financial database networks locally.",
    }
  ];

  useEffect(() => {
    if (rotatingBlogInsights.length <= 1) return;
    
    const timer = setInterval(() => {
      setBlogIndex((prevIndex) => (prevIndex + 1) % rotatingBlogInsights.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [rotatingBlogInsights.length]);

  // Safe fallback to prevent runtime undefined crashes
  const currentInsight = rotatingBlogInsights[blogIndex] || rotatingBlogInsights[0];

  return (
    <>
      {/* [Module 2: Hero Section] */}
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
                <p>The modern threat landscape demands more than just defense; it requires an anticipatory architecture built on precision. Cybernovr Intelligence provides the infrastructure for tomorrow&apos;s security today.</p>
                <p>Our proprietary AI-driven detection systems work in symphony with human elite incident responders to ensure that your critical assets remain untouchable, regardless of the complexity of the attack vector.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 font-bold rounded-DEFAULT hover:brightness-110 active:scale-95 transition-all text-xs uppercase tracking-widest">
                  Request A Demo
                </button>
                <button className="w-full sm:w-auto border-2 border-primary text-primary px-8 py-4 font-bold rounded-DEFAULT hover:bg-primary/5 transition-all text-xs uppercase tracking-widest">
                  Enroll At Academy
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 w-full pt-8 lg:pt-4 border-t lg:border-t-0 lg:border-l border-outline-variant/20 lg:pl-8 space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-black text-primary flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Cyber Security Insights
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
              <button className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mt-4 hover:gap-3 transition-all self-start">
                Visit The Blog <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* [Homepage About Summary Section] */}
      <section className="py-16 bg-surface-container-low border-y border-outline-variant/10 px-margin-desktop max-w-[1536px] mx-auto rounded-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface">About Cybernovr</h2>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              Since 2008, CYBERNOVR has emerged as a leading cybersecurity organization dedicated to delivering comprehensive services in Governance, Risk, and Compliance (GRC) management. With a strong focus on Critical Infrastructure (CI) protection, Digital Transformation, and cybersecurity training, the company has built a reputation for excellence and innovation in the field.
            </p>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              With over 50 years of combined experience in cybersecurity practice, we bring extensive industry knowledge and expertise in Information Assurance and IT Security. Our commitment is backed by strict adherence to our Service Level Agreements, ensuring reliability you can count on.
            </p>
            
            <div className="space-y-3 pt-2">
              <p className="text-sm font-bold uppercase tracking-wider text-primary">Our Core Strengths:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  <span>Industry-leading security expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  <span>Comprehensive threat protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  <span>24/7 monitoring and support</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  <span>Customized security solutions</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/about" className="inline-flex bg-primary text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded shadow hover:brightness-110 transition-all">
                Learn More About Us
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-xl border border-outline-variant/20 bg-white">
              <img alt="About Operations Matrix" className="w-full aspect-[4/3] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfV1vifN5CVUpGRvC0_rOY7w2k7bFW3IQf_mG_ySnkMCqN1-589scev2By04HDOnmCYxpl2EJ5Xx8IDu8loEEFVosAlmcakuw4fP8BsmZi49b4sgVMftZhKznXtYkv2MlbcILztdvYWaXIpa_5D6u7iFdthQemEibaFtaVRM2-nUEBS76sxI6Meo-A-spYpEZVK2UlvldE6kB9fsuPiHISFG4hNZpK9MhmlSysNoHNIMgT6-3K-SmqORFrPbDnC_bWildTo121BjtB" />
            </div>
          </div>
        </div>
      </section>

      {/* [Module 3: Statistics Banner] */}
      <section className="w-full bg-primary text-white py-12 my-12">
        <div className="max-w-[1536px] mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <div className="relative w-36 h-36 flex items-center justify-center bg-white/5 rounded-full border border-white/10 shadow-inner">
              <span className="material-symbols-outlined text-4xl text-white opacity-80">shield_with_heart</span>
            </div>
          </div>
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center md:text-left">
            <div>
              <h4 className="text-3xl md:text-5xl font-black leading-none tracking-tight">50+</h4>
              <p className="text-[10px] text-white/70 uppercase tracking-widest mt-1.5 font-bold">Client Protected</p>
            </div>
            <div>
              <h4 className="text-3xl md:text-5xl font-black leading-none tracking-tight">99.9</h4>
              <p className="text-[10px] text-white/70 uppercase tracking-widest mt-1.5 font-bold">Uptime Percentage</p>
            </div>
            <div>
              <h4 className="text-3xl md:text-5xl font-black leading-none tracking-tight">24/7</h4>
              <p className="text-[10px] text-white/70 uppercase tracking-widest mt-1.5 font-bold">Security Support</p>
            </div>
            <div>
              <h4 className="text-3xl md:text-5xl font-black leading-none tracking-tight">10+</h4>
              <p className="text-[10px] text-white/70 uppercase tracking-widest mt-1.5 font-bold">Security Experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* [Testimonials Section] */}
      <section className="py-16 bg-white px-margin-desktop max-w-[1536px] mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface">Client Testimonials</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto text-sm">
              Read how Cybernovr secures critical transactions and enterprise infrastructure metrics globally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Executive Director", corp: "West African Telecommunications Group", text: "Cybernovr managed response modules successfully containerized a massive grid threat vector. Uncompromising availability and rapid deployment speed." },
              { name: "Chief Information Officer", corp: "Commercial Microfinance Clearing House", text: "The automated regulatory mapping features saved our compliance teams weeks of auditing verification work for PCI-DSS frameworks." },
              { name: "Lead Cloud Infrastructure Architect", corp: "Fintech Settlement Gateway Provider", text: "Exceptional low-latency threat scanning integration benchmarks. SecuBreach maps system faults with unparalleled operational accuracy metrics." }
            ].map((test, i) => (
              <div key={i} className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/10 flex flex-col justify-between space-y-4">
                <p className="text-on-surface-variant text-sm italic leading-relaxed">&quot;{test.text}&quot;</p>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">{test.name}</h4>
                  <p className="text-[11px] font-medium text-primary uppercase tracking-wider mt-0.5">{test.corp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [Module 5: Partners Showcase Component] */}
      <section className="py-16 bg-surface-container-low text-center px-margin-desktop max-w-[1536px] mx-auto rounded-xl my-12">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface">Our Partners</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto text-sm">
              We collaborate with industry-leading technology providers to deliver the best security solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center gap-8 max-w-5xl mx-auto py-4 opacity-50 grayscale hover:opacity-90 transition-all duration-300">
            <span className="font-mono text-xl font-bold text-on-surface-variant">IGO</span>
            <span className="font-mono text-xl font-bold text-on-surface-variant">CENTRALEYES</span>
            <span className="font-mono text-xl font-bold text-on-surface-variant">PROOFPOINT</span>
            <span className="font-mono text-xl font-bold text-on-surface-variant">WHALEBONE</span>
            <span className="font-mono text-xl font-bold text-on-surface-variant">TENABLE</span>
            <span className="font-mono text-xl font-bold text-on-surface-variant">DARKTRACE</span>
          </div>
        </div>
      </section>

      {/* [Module 6: Contact Audit Form Container Box] */}
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