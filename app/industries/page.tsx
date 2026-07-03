"use client";
import React, { useState, useEffect } from "react";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function IndustriesMasterPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    setImgFailed(false);
  }, [activeIndex]);

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
      image: "/assets/industries/banking.jpg"
    },
    {
      tabLabel: "Communication",
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
      image: "/assets/industries/communication.jpg"
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
      image: "/assets/industries/fintech.jpg"
    },
    {
      tabLabel: "Energy",
      title: "Operational Technology & SCADA Boundary Protection",
      tagline: "Defending Hardware Networks & National Energy Infrastructure",
      desc: "Specialized low-latency operational network separation strategies designed to safely isolate utility power switches, pipeline telemetry grids, and physical terminal relays from external grid compromises.",
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
      image: "/assets/industries/Energy.webp"
    },
    {
      tabLabel: "Government",
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
      image: "/assets/industries/government.webp"
    },
    {
      tabLabel: "Education",
      title: "Educational Networks & Learning Database Security",
      tagline: "Shielding Student Information Registries & Academic LMS Clusters",
      desc: "Deploying high-precision authorization firewalls and dataset protection models to secure student records, shield connected campuses, and eliminate single points of failure across learning management networks.",
      stat1: "100%",
      stat1Label: "Academic Privacy Sovereignty",
      stat2: "Zero",
      stat2Label: "Database Exposure Incident Records",
      bulletTitle: "Educational Measures",
      bullets: [
        "Secure student directory credential access.",
        "Automated cross-campus network separation.",
        "Longitudinal training repository encryption maps."
      ],
      image: "/assets/industries/education.jpg"
    },
    {
      tabLabel: "Health",
      title: "Healthcare Ecosystems & Protected Medical Records Security",
      tagline: "Hardening Critical Telemetry Loops & Patient Registries",
      desc: "Architecting rigorous zero-trust boundaries to insulate life-critical diagnostic equipment, guarantee real-time healthcare telemetry availability, and defend electronic medical records from malicious manipulation.",
      stat1: "Fully Compliant",
      stat1Label: "Global Privacy Framework Directives",
      stat2: "< 5ms",
      stat2Label: "Anomalous Endpoint Isolation Latency",
      bulletTitle: "Healthcare Mandates",
      bullets: [
        "Rigorous medical database entry verification.",
        "Protected network boundaries for diagnostics.",
        "Automated continuous exploit scanning loops."
      ],
      image: "/assets/industries/health.jpg"
    }
  ];

  const current = industryData[activeIndex];

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto w-full bg-white text-zinc-900 antialiased">
      
      {/* Institutional Header Block */}
      <div className="border-b border-zinc-200 pb-10 mb-12 max-w-4xl text-left">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 uppercase">INDUSTRIES WE SERVE</h1>
        </div>
        <p className="italic text-red-700 border-l-2 border-red-700 pl-4 py-0.5 text-base font-semibold tracking-wide">
          Cyber resilience for critical ecosystems
        </p>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed mt-4 font-normal">
          Select an industrial sector below to visualize our custom protection frameworks, specific threat response metrics, and tailored technical defenses.
        </p>
      </div>

      {/* Selector Matrix Bar */}
      <div className="flex flex-wrap gap-2 border-b border-zinc-100 pb-6 mb-12">
        {industryData.map((ind, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`px-5 py-2.5 rounded-md text-xs font-mono font-black tracking-wider transition-all uppercase border ${
              activeIndex === idx
                ? "bg-red-600 border-red-600 text-white shadow-sm"
                : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-zinc-100"
            }`}
          >
            {ind.tabLabel}
          </button>
        ))}
      </div>

      {/* Main Dynamic Layout Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Informational Block */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight leading-tight uppercase">
            {current.title}
          </h2>
          <p className="text-red-700 italic font-semibold text-base md:text-lg border-l-2 border-red-700 pl-4 py-0.5">
            {current.tagline}
          </p>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
            {current.desc}
          </p>

          {/* Bullet Feature Lists */}
          <div className="bg-purple-950/[0.01] border-2 border-purple-900/5 p-6 md:p-8 rounded-xl max-w-2xl shadow-sm">
            <h4 className="text-xs uppercase font-mono font-black tracking-widest text-zinc-400 mb-4">
              {current.bulletTitle}
            </h4>
            <ul className="space-y-4">
              {current.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs md:text-sm font-medium text-zinc-700">
                  <ShieldCheck className="h-5 w-5 text-red-700 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Dashboard Statistics Grid & Graphics */}
        <div className="lg:col-span-5 space-y-6 w-full">
          {/* Rectangular Image Mask Frame Area */}
          <div className="rounded-xl overflow-hidden aspect-[4/3] w-full flex items-center justify-center relative group shadow-sm">
            <img 
              key={activeIndex}
              src={current.image} 
              alt={`${current.tabLabel} architecture deployment`} 
              className={`w-full h-full object-cover ${imgFailed ? 'hidden' : ''}`}
              onError={() => setImgFailed(true)}
            />
            <div className={`${imgFailed ? 'flex' : 'hidden'} absolute inset-0 items-center justify-center font-mono text-xs uppercase text-zinc-400 tracking-widest font-bold bg-zinc-50`}>
              {current.tabLabel} SYSTEM VISUALIZATION
            </div>
          </div>

          {/* Condensed Metric Block Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-purple-950/[0.02] p-5 border border-purple-900/10 rounded-xl text-center shadow-sm">
              <h3 className="text-2xl md:text-3xl font-mono font-black text-red-700 leading-none mb-1">{current.stat1}</h3>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider font-mono">{current.stat1Label}</p>
            </div>
            <div className="bg-purple-950/[0.02] p-5 border border-purple-900/10 rounded-xl text-center shadow-sm">
              <h3 className="text-2xl md:text-3xl font-mono font-black text-zinc-900 leading-none mb-1">{current.stat2}</h3>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider font-mono">{current.stat2Label}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}