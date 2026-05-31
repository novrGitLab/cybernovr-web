"use client";
import React, { useState } from "react";

export default function IndustriesMasterPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const industryData = [
    {
      tabLabel: "Banking",
      title: "Banking & Institutional Asset Defense",
      tagline: "Securing High-Value Capital & Sovereign Reserves",
      desc: "Hardened protective perimeters engineered to secure core financial architectures, validate international clearing houses, and shield sensitive database grids against organized threat actors.",
      stat1: "100%",
      stat1Label: "Data Sovereignty Compliance",
      stat2: "< 2ms",
      stat2Label: "Threat Mitigation Latency",
      bulletTitle: "Banking Mandates",
      bullets: [
        "Hardened core banking ledger integrations.",
        "End-to-end encrypted financial transactions.",
        "Real-time fraud prevention intelligence logs."
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAj7RdRfwL9dcrst1yU3wP-9Re797LN_qMclNYtJs0w6Q83RBhadZ9IANDWhHRKdCgLQrClCijapBhsN9IlxVj6NtLBdIsI2pyg03JNWzW--l2pTaTi6BR1fUCzr8MzYPzbaZTDXEhGAin6a3ayycnm0_p_M4TKLoG138PYwqPYwW1_XCSGQv6RPJQ5JGnz_mHFAM87yfqPZUfjqSE_EzFSRRupnPF7qP4rvJjficnqcOlZrg8zdA6lGixkI1Q3lT-mJdYXGgIC5And"
    },
    {
      tabLabel: "Telecoms",
      title: "Telecommunications Infrastructure Security",
      tagline: "Shielding Critical Network Signal Channels",
      desc: "Deploying deep-packet filtering engines and automated zero-day blockers to secure massive broadband channels, cellular hubs, and critical data transit pipelines from interception.",
      stat1: "99.999%",
      stat1Label: "Signal Uptime Architecture",
      stat2: "Zero",
      stat2Label: "Perimeter Infiltrations Allowed",
      bulletTitle: "Network Focus",
      bullets: [
        "Advanced perimeter gateway defenses.",
        "Signaling system payload protocol isolation.",
        "Decentralized cloud network redundancy maps."
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhIyk76t5L9YWBVpMkz_EijlJ-Oa_h_8yKK7jmRtMMfSVzyLIilORP_2effqeXZUFoyXgPLB_zb-2FoaGHMIM7QTezNfa1GmAbxZaEFbpAXrEF6ANOMDe_hhkupM6dzTyHYGwu_VUHNBQn4MGgMUsPF01qqmc2_2ThOWBj8onnM3pKQfXsIxYgAmGxgX2OhZakSqBdhCbWgFvwtI_LBoPSifHX8WBKARk308PGpKi47mDDXeAlsccJ6rWP0vBt2TEbx-wULngghdVC"
    },
    {
      tabLabel: "Fintech",
      title: "High-Velocity Fintech Network Shielding",
      tagline: "Real-Time Protection for Rapid Decentralized Ledgers",
      desc: "Architecting high-frequency validation systems built specifically for high-volume transactions, open API application networks, and consumer banking wallets.",
      stat1: "98.7%",
      stat1Label: "Exploit Accuracy Identification",
      stat2: "30B+",
      stat2Label: "Correlated Transaction Logs Evaluated",
      bulletTitle: "Fintech Gateways",
      bullets: [
        "Microservice-level API authentication paths.",
        "Automated continuous compliance monitoring.",
        "Polymorphic transaction verification shields."
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfV1vifN5CVUpGRvC0_rOY7w2k7bFW3IQf_mG_ySnkMCqN1-589scev2By04HDOnmCYxpl2EJ5Xx8IDu8loEEFVosAlmcakuw4fP8BsmZi49b4sgVMftZhKznXtYkv2MlbcILztdvYWaXIpa_5D6u7iFdthQemEibaFtaVRM2-nUEBS76sxI6Meo-A-spYpEZVK2UlvldE6kB9fsuPiHISFG4hNZpK9MhmlSysNoHNIMgT6-3K-SmqORFrPbDnC_bWildTo121BjtB"
    },
    {
      tabLabel: "ICS/SCADA",
      title: "Industrial Control Systems (ICS/SCADA) Protection",
      tagline: "Defending Hardware Networks & National Utility Assets",
      desc: "Specialized low-latency operational network separation strategies designed to safely isolate utility power switches, water systems, and factories from external grid compromises.",
      stat1: "100%",
      stat1Label: "Hardware Air-Gap Security Compliance",
      stat2: "< 1ms",
      stat2Label: "Fault Detection Flag Alerts",
      bulletTitle: "Technical Controls",
      bullets: [
        "Uncompromising operational boundary air-gapping.",
        "Legacy protocol structural payload audits.",
        "Predictive physical anomaly analytics."
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAj7RdRfwL9dcrst1yU3wP-9Re797LN_qMclNYtJs0w6Q83RBhadZ9IANDWhHRKdCgLQrClCijapBhsN9IlxVj6NtLBdIsI2pyg03JNWzW--l2pTaTi6BR1fUCzr8MzYPzbaZTDXEhGAin6a3ayycnm0_p_M4TKLoG138PYwqPYwW1_XCSGQv6RPJQ5JGnz_mHFAM87yfqPZUfjqSE_EzFSRRupnPF7qP4rvJjficnqcOlZrg8zdA6lGixkI1Q3lT-mJdYXGgIC5And"
    },
    {
      tabLabel: "Sovereign State",
      title: "Sovereign State & Public Infrastructure Security",
      tagline: "National Level Cybersecurity Framework Defense",
      desc: "Strategic military-grade monitoring frameworks built to counter global cyber warfare, defend database sovereignty, and protect foundational digital infrastructure.",
      stat1: "Top Tier",
      stat1Label: "Sovereign Intelligence Architecture",
      stat2: "Continuous",
      stat2Label: "Regulatory Compliance Mapping",
      bulletTitle: "State Measures",
      bullets: [
        "Advanced international threat vector tracking.",
        "Hardened secure civic registry networks.",
        "Inter-agency national crisis playbook alignment."
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhIyk76t5L9YWBVpMkz_EijlJ-Oa_h_8yKK7jmRtMMfSVzyLIilORP_2effqeXZUFoyXgPLB_zb-2FoaGHMIM7QTezNfa1GmAbxZaEFbpAXrEF6ANOMDe_hhkupM6dzTyHYGwu_VUHNBQn4MGgMUsPF01qqmc2_2ThOWBj8onnM3pKQfXsIxYgAmGxgX2OhZakSqBdhCbWgFvwtI_LBoPSifHX8WBKARk308PGpKi47mDDXeAlsccJ6rWP0vBt2TEbx-wULngghdVC"
    }
  ];

  const current = industryData[activeIndex];

  return (
    <div className="pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto">
      {/* Top Header Section with Logo Placement */}
      <div className="border-b border-outline-variant/20 pb-10 mb-12 max-w-4xl">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-on-background">TARGETED INDUSTRIES BY</h1>
          <img src="/logo.png" alt="" className="h-8 w-auto object-contain" />
        </div>
        <p className="italic text-primary border-l-4 border-primary pl-6 py-1 mb-6 text-xl font-bold">
          Sovereign Protection for Critical Ecosystems
        </p>
        <p className="text-on-surface-variant text-base leading-relaxed">
          Select an industrial sector below to visualize our custom protection frameworks, specific threat response metrics, and tailored technical defenses.
        </p>
      </div>

      {/* Dynamic Selector Bar */}
      <div className="flex flex-wrap gap-2 border-b border-outline-variant/20 pb-4 mb-12">
        {industryData.map((ind, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`px-6 py-3 rounded-DEFAULT text-sm font-bold tracking-wider transition-all uppercase ${
              activeIndex === idx
                ? "bg-primary text-white shadow-lg"
                : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            {ind.tabLabel}
          </button>
        ))}
      </div>

      {/* Main Dynamic Layout Panel (Reconstructed from the image layouts) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start transition-all duration-300">
        
        {/* Left Informational Block */}
        <div className="lg:col-span-7 space-y-8 animate-fadeIn">
          <h2 className="text-4xl font-black text-on-background tracking-tight leading-tight">
            {current.title}
          </h2>
          <p className="text-primary italic font-semibold text-lg">
            {current.tagline}
          </p>
          <p className="text-on-surface-variant text-base leading-relaxed max-w-2xl">
            {current.desc}
          </p>

          {/* Bullet Feature Lists */}
          <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/10 max-w-2xl">
            <h4 className="text-xs uppercase font-bold tracking-wider text-primary mb-4">
              {current.bulletTitle}
            </h4>
            <ul className="space-y-3">
              {current.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-medium text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-lg">verified</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Dashboard Statistics Grid & Graphics */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-xl overflow-hidden shadow-2xl bg-surface-container relative border border-outline-variant/30 aspect-[4/3]">
            <img src={current.image} alt="" className="w-full h-full object-cover grayscale" />
            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
          </div>

          {/* Condensed Metric Block Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-lowest p-6 border border-outline-variant/30 rounded-lg text-center">
              <h3 className="text-3xl font-black text-primary leading-none mb-1">{current.stat1}</h3>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tight">{current.stat1Label}</p>
            </div>
            <div className="bg-surface-container-lowest p-6 border border-outline-variant/30 rounded-lg text-center">
              <h3 className="text-3xl font-black text-on-background leading-none mb-1">{current.stat2}</h3>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-tight">{current.stat2Label}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}