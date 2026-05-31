"use client";
import React, { useState } from "react";

export default function NovrSOCPage() {
  const [tabIndex, setTabIndex] = useState(0);

  const tabData = [
    {
      title: "Continuous Real-time Monitoring",
      desc: "We leverage advanced SIEM and XDR technologies to provide a unified view of your security posture, correlating billions of events to find the single needle in the haystack."
    },
    {
      title: "Rapid Incident Response",
      desc: "Our elite task force activates within minutes of detection, neutralizing threats and initiating containment protocols to minimize operational disruption."
    },
    {
      title: "Vulnerability Management",
      desc: "Continuous scanning and expert-led assessments to identify and prioritize remediations before attackers can exploit weaknesses."
    },
    {
      title: "Compliance Reporting",
      desc: "Automated, audit-ready reports tailored to CBN, NCC, and PCI-DSS requirements, reducing the burden on your internal compliance teams."
    },
    {
      title: "Digital Forensics",
      desc: "Deep-dive analysis of post-incident data to understand root causes, preserve evidence, and strengthen future defensive postures."
    },
    {
      title: "Endpoint Security",
      desc: "Next-gen protection for every device in your fleet, ensuring that the perimeter extends to the very edge of your network."
    },
    {
      title: "Cloud Defense",
      desc: "Native security integrations for Azure, AWS, and GCP environments, ensuring consistent policy enforcement across hybrid cloud infrastructures."
    },
    {
      title: "Advisory Services",
      desc: "Strategic guidance from veteran security practitioners to align your technical security roadmap with enterprise business goals."
    }
  ];

  return (
    <div className="pt-20">
      {/* Module 2: Hero */}
      <section className="relative min-h-[819px] flex items-center bg-gradient-to-b from-[#FFFFFF] to-[#F3F4F6] py-section-gap overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
          <div className="md:col-span-7 flex flex-col justify-center">
            <span className="inline-block font-mono text-primary text-label-sm tracking-widest uppercase mb-4 px-3 py-1 bg-primary/10 rounded-lg w-fit">
              24/7/365 AI-Powered Managed SOC
            </span>
            <h1 className="text-5xl md:text-[64px] md:leading-[72px] font-black mb-6 text-on-background">
              NovrSOC: High Precision.<br/><span class="text-primary">Accurate Protection.</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl mb-10">
              24/7 Monitoring and Management of Your Assets Against Cyber Threats. Professional-grade vigilance powered by proprietary intelligence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-primary text-white font-bold rounded-DEFAULT hover:bg-red-700 transition-all active:scale-95">
                Request a Demo
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-DEFAULT hover:bg-primary/5 transition-all active:scale-95">
                Contact Us
              </button>
            </div>
          </div>
          <div className="md:col-span-1 hidden md:flex justify-center">
            <div className="w-px h-full bg-outline-variant/30"></div>
          </div>
          <div className="md:col-span-4 flex items-center">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-outline-variant/30 shadow-2xl relative group">
              <span className="material-symbols-outlined text-primary text-[48px] mb-6">security</span>
              <h3 className="text-xl font-bold mb-4">Cyber Threat Intelligence</h3>
              <p className="text-sm text-on-surface-variant mb-6">
                Global & local threat intelligence to proactively defend against emerging threats before they impact your perimeter.
              </p>
              <a className="inline-flex items-center text-primary font-bold gap-2 border-b border-transparent hover:border-primary transition-all" href="#">
                View Threat Map
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
          <div className="text-[300px] font-black uppercase leading-none select-none">NOVR</div>
        </div>
      </section>

      {/* Module 3: Trust Banner */}
      <section className="bg-surface-container-lowest py-16 border-y border-outline-variant/10">
        <div className="max-w-[1536px] mx-auto px-margin-desktop">
          <div className="flex flex-col md:flex-row items-center justify-between gap-gutter">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white p-2 rounded-lg shadow-sm flex items-center justify-center">
                <img alt="NCC-CSIRT Badge" className="max-h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDja4v_-T_yR91w2olD4zo6iq-J-hbU6fpPJ3KcuA84BwOzJ4Vb438zd0X2tvp85Arc2T1hiJDJ-8kjYONp6WsXqLxhlpA5Gey42eoWj67xdm7hUSN5en7dug4E-WcZEtLQv2xYq3lRbGtpOBGVr4fuOgEF0I_F6nXasw3ieQstNR3APBmevOmJVRn6fCjXReQc56Xl5Z7G68vBpmK-7LIFWgB4jVLnoArgrdJP_OzdGCnkrX-J74lF4gqfyJ1aVGYB3C_TIJITglT3"/>
              </div>
              <div>
                <h4 className="text-xl font-bold text-on-background">Protect Nigeria, Defend Your Business.</h4>
                <p className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Certified Sovereignty in Intelligence</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-10 opacity-60 font-black text-xl text-on-surface-variant">
              <div>CBN</div><div>NCC</div><div>NDPC</div><div>PCI-DSS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Module 4: 6 Pillars */}
      <section className="bg-surface py-section-gap">
        <div className="max-w-[1536px] mx-auto px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">The Pillars of Resilience</h2>
            <div className="h-1 w-24 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              { icon: "psychology", title: "AI-Powered Threat Detection", desc: "Continuous behavioral analysis to identify sophisticated attack patterns." },
              { icon: "verified", title: "98.7% Accuracy Engine", desc: "Drastic reduction in false positives through deep-learning filtering." },
              { icon: "history_toggle_off", title: "24/7/365 SOC", desc: "Our team of analysts never sleeps, ensuring around-the-clock defense." },
              { icon: "robot", title: "Intelligent Automation", desc: "SOAR capabilities to mitigate threats at machine speed." },
              { icon: "hub", title: "Actionable Intelligence", desc: "Strategic reports and technical data for immediate risk reduction." },
              { icon: "account_balance", title: "Enterprise-Grade Security", desc: "Hardened infrastructure designed for high-compliance industries." }
            ].map((p, i) => (
              <div key={i} className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <span className="material-symbols-outlined text-primary text-[48px] mb-6">{p.icon}</span>
                <h3 className="text-lg font-bold mb-4">{p.title}</h3>
                <p className="text-sm text-on-surface-variant">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module 5: Deep-Dive */}
      <section className="bg-surface-container py-section-gap overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2 mb-8">
                {tabData.map((tab, idx) => (
                  <button
                    key={idx}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${tabIndex === idx ? "bg-primary text-white" : "bg-surface-container-highest text-on-surface-variant hover:bg-surface-variant"}`}
                    onClick={() => setTabIndex(idx)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
              <div className="min-h-[250px] transition-opacity duration-300">
                <h3 className="text-3xl font-bold mb-6 text-on-background">{tabData[tabIndex].title}</h3>
                <p className="text-base text-on-surface-variant mb-8 leading-relaxed">{tabData[tabIndex].desc}</p>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-square bg-surface-container-highest rounded-2xl overflow-hidden shadow-2xl relative">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj7RdRfwL9dcrst1yU3wP-9Re797LN_qMclNYtJs0w6Q83RBhadZ9IANDWhHRKdCgLQrClCijapBhsN9IlxVj6NtLBdIsI2pyg03JNWzW--l2pTaTi6BR1fUCzr8MzYPzbaZTDXEhGAin6a3ayycnm0_p_M4TKLoG138PYwqPYwW1_XCSGQv6RPJQ5JGnz_mHFAM87yfqPZUfjqSE_EzFSRRupnPF7qP4rvJjficnqcOlZrg8zdA6lGixkI1Q3lT-mJdYXGgIC5And" alt="" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-xs font-bold tracking-widest uppercase">System Status: Optimal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}