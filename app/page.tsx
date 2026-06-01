"use client";
import React, { useState, useEffect } from "react";

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
    },
    {
      title: "Automated Zero-Day Incident Response Control",
      desc: "Deploying deep-packet filtering engines and automated blockers to isolate compromised cloud perimeter segments cleanly.",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBlogIndex((prevIndex) => (prevIndex + 1) % rotatingBlogInsights.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* [Module 2: Asymmetrical Hero Section] */}
      <section className="pt-28 md:pt-40 pb-12 md:pb-section-gap px-6 md:px-margin-desktop max-w-[1536px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-gutter items-start">
          
          {/* Main Title Layout Column: Pulled together to eliminate formatting gaps */}
          <div className="lg:col-span-8 space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-on-surface tracking-tight leading-none">
              Secure Your Digital <br /> Future With
            </h1>
            
            {/* Fine-tuned logo spacing wrapper based on image_41a79a.png visual bugs */}
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

          {/* Right Rotating Blog Column */}
          <div className="lg:col-span-4 w-full pt-8 lg:pt-4 border-t lg:border-t-0 lg:border-l border-outline-variant/20 lg:pl-8 space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-black text-primary flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Cyber Security Insights
            </h3>
            
            <div className="bg-surface-container-low p-6 md:p-8 rounded-xl border border-outline-variant/10 min-h-[200px] flex flex-col justify-between shadow-sm">
              <div className="space-y-2">
                <p className="text-base md:text-lg font-bold text-on-surface leading-tight transition-all duration-500">
                  {rotatingBlogInsights[blogIndex].title}
                </p>
                <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed line-clamp-3">
                  {rotatingBlogInsights[blogIndex].desc}
                </p>
              </div>
              <button className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mt-4 hover:gap-3 transition-all self-start">
                Visit The Blog
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* [Module 3: Statistics Purple Banner Framework - Rebuilt for Mobile Responsiveness based on image_419f5e.png] */}
      <section className="w-full bg-primary text-white py-12">
        <div className="max-w-[1536px] mx-auto px-6 md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Centered Decorative Shield Emblem Grid Node */}
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <div className="relative w-36 h-36 flex items-center justify-center bg-white/5 rounded-full border border-white/10 shadow-inner">
              <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <span className="material-symbols-outlined text-4xl text-white opacity-80">shield_with_heart</span>
            </div>
          </div>
          
          {/* Mobile-First Metric Text Layout Block */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 text-center md:text-left">
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

      {/* [Module 4: Why Cybernovr - hardcoded CSOC Flex alignment placement] */}
      <section className="bg-surface-container-low py-16 px-6 md:px-margin-desktop">
        <div className="max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Why Cybernovr</h2>
            <p className="text-base text-primary font-bold">Certified. Trusted. Relentless.</p>
            <ul className="space-y-4">
              {[
                { title: "ISO27001 & SOC2 Type II Certified", desc: "Meeting the world's most rigorous compliance standards for data security." },
                { title: "AI-Enhanced Threat Automation", desc: "Zero-day vulnerabilities identified and neutralized in milliseconds." },
                { title: "Seamless Infrastructure Integration", desc: "Deploy across hybrid, cloud, or on-prem environments with zero friction." }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded-full text-base shrink-0">check</span>
                  <div>
                    <p className="text-base font-bold text-on-surface">{item.title}</p>
                    <p className="text-on-surface-variant text-xs mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-6 w-full flex justify-center">
            <div className="w-full max-w-xl rounded-xl overflow-hidden shadow-xl border border-outline-variant/20 bg-white">
              <img alt="Operations Center" className="w-full aspect-[4/3] object-cover grayscale" src="https://lh3.googleusercontent.com/aida/ADBb0uh69KcCZmw9HNKXPVxJUacSwa8I3SiisiwkcNBbRKYak09wiSw-s7ZIMWQoNB_K8GwDmwtfBklBJvOBL8WaQNGFM0oDFPzVKE67roNJfzMcDF_XDpB91GBrgGl5MggbU8H4hSsH8ld6DimoQPAlR-rLGEWbtexuLxLtUex0_l4Wu04CmOSk4SzkgKS9RqYgsmqLlSc_Xdgz3BZ59jnfgMVIYbTOiynXfmCiRxmZq2eu8dap82M8TOykPtAA" />
            </div>
          </div>
        </div>
      </section>

      {/* [Module 5: Dynamic Partners Showcase Component - Updated based on image_4149bd.png] */}
      <section className="py-16 bg-white border-t border-outline-variant/10 text-center px-6">
        <div className="max-w-[1536px] mx-auto space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface">Our Partners</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto text-sm">
              We collaborate with industry-leading technology providers to deliver the best security solutions.
            </p>
          </div>
          
          {/* Mapped Partner Image Asset Matrix Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center gap-8 max-w-5xl mx-auto py-4 opacity-50 grayscale hover:opacity-90 transition-all duration-300">
            <img src="/partners/igo.png" alt="IGO" className="h-8 mx-auto object-contain" />
            <img src="/partners/centraleyes.png" alt="Centraleyes" className="h-6 mx-auto object-contain" />
            <img src="/partners/proofpoint.png" alt="Proofpoint" className="h-6 mx-auto object-contain" />
            <img src="/partners/whalebone.png" alt="Whalebone" className="h-7 mx-auto object-contain" />
            <img src="/partners/tenable.png" alt="Tenable" className="h-6 mx-auto object-contain" />
            <img src="/partners/darktrace.png" alt="Darktrace" className="h-5 mx-auto object-contain" />
          </div>
          
          <div className="pt-2">
            <button className="bg-primary-container text-white px-6 py-3 font-semibold text-xs rounded uppercase tracking-wider hover:brightness-110 transition-all inline-flex items-center gap-2 shadow-sm">
              Explore Our Products
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* [Module 6: Contact Audit Form Container Box] */}
      <section className="pb-16 md:pb-section-gap px-6 md:px-margin-desktop max-w-[1536px] mx-auto pt-12">
        <div className="bg-inverse-surface rounded-xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-black/10">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-white uppercase tracking-tight">Let&apos;s Secure Your Business</h2>
              <p className="text-white/70 italic text-sm md:text-base leading-relaxed">
                &quot;In the digital age, security isn&apos;t an option—it&apos;s the foundation of existence.&quot;
              </p>
              <div className="flex items-center gap-4 pt-4">
                <span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
                <div>
                  <p className="text-sm font-bold text-white uppercase tracking-wider">Direct Advisory</p>
                  <p className="text-white/60 text-xs mt-0.5">Speak with our lead security architects.</p>
                </div>
              </div>
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