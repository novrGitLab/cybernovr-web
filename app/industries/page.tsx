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
      title: "Banking and Financial Sector Resilience",
      tagline: "Securing High-Value Capital & Sovereign Reserves",
      desc: "We help leading players in the financial sector understand key risks in the sector and build resilience into the fabric of their core operations.",
      stat1: "100%",
      stat1Label: "Cyber Resilience Compliance",
      stat2: "< 2ms",
      stat2Label: "Threat Mitigation Latency",
      bulletTitle: "Resilience in Action",
      bullets: [
        "Strong cybersecurity governance: Ensure Board and executive management oversight over cybersecurity and integrate security policies into core operations",
        "Enhance operational resilience: Ability to effectively identify, prevent, withstand, and rapidly recover from cyber incidents and return to Business-As-Usual.",
        "Protect sensitive customer data: Protect the confidentiality, integrity, and availability of financial data to build and maintain consumer confidence",
        "Risk-Based Approach: Need to prioritize security investments, controls, and risk mitigation strategies based on the specific vulnerability and threat profiles",
        "Threat Intelligence and Reporting: Collective sector threat intelligence for the common good."
      ],
      image: "/assets/industries/banking.webp"
    },
    {
      tabLabel: "Communication",
      title: "Telecommunications Infrastructure Resilience",
      tagline: "Protecting Critical National Information Infrastructure",
      desc: "Being a critical driver of the digital economy, we help leading players in the sector to understand the mission of..Beyond Profit.",
      stat1: ">95%",
      stat1Label: "Availability for critical telecom services",
      stat2: "< 24 hours",
      stat2Label: "to restore critical operations",
      bulletTitle: "Resilience Goals of the Sector",
      bullets: [
        "Cyber Resilience Posture: We help key sector players to maintain a unified and consistent cyber-resilient posture across the communications sector",
        "Protection of Communications Infrastructure: We help key sector players to enhance protection and resilience of their critical infrastructure",
        "Unified Compliance: We help key sector players to align and consistently implement requisite national laws, frameworks and international best practices",
        "Sector-wide Capacity for Threat Intelligence: We help key sector players to anticipate, detect, respond to, and recover from cyber attacks",
        "Protect consumer data: We help key sector players to safeguard sensitive consumer data, privacy and trust in digital services"
      ],
      image: "/assets/industries/communication.webp"
    },
    {
      tabLabel: "Fintech",
      title: "Achieving Resilience in High-Velocity Fintech Sector",
      tagline: "Continuous, secure financial operations",
      desc: "Ensuring service continuity, protecting sensitive client data, and preserving consumer trust \u2014 even in the face of inevitable security breaches.",
      stat1: "98.7%",
      stat1Label: "of Controls implemented",
      stat2: "10x faster",
      stat2Label: "MTTR",
      bulletTitle: "We Help Leading Fintechs to",
      bullets: [
        "Service Continuity & Availability: We help leading sector players to maintain service availability while under attack from threats like DDoS or ransomware",
        "Data Integrity & Privacy Protection: We help leading sector players to safeguard client funds, Personally Identifiable Information (PII), and financial records against unauthorized access",
        "Regulatory Compliance: We help leading sector players to meet the evolving speed of compliance to regulatory frameworks and provisions to achieve baseline security and operational standards",
        "Risk Management: We help leading sector players to understand the threats and risks they face in their day-to-day operations"
      ],
      image: "/assets/industries/fintech.webp"
    },
    {
      tabLabel: "Energy",
      title: "Operational Technology & SCADA Resilience",
      tagline: "Achieving Resilience in Information & Operational Technologies",
      desc: "We help your organization to preserve physical and operational safety while enabling rapid recovery of industrial control systems when a cyberattack breaches perimeter defenses.",
      stat1: "100%",
      stat1Label: "Hardware Air-Gap Security Compliance",
      stat2: "< 1ms",
      stat2Label: "Fault Detection Flag Alerts",
      bulletTitle: "Cyber Resilience of IT and OT Environments",
      bullets: [
        "Safeguarding Human Life and Physical Assets: We prioritize the continuous, safe operation of equipment to prevent catastrophic failures, environmental hazards, and personnel injuries.",
        "Maintaining Essential Functions: We keep critical infrastructure operational during an incident by leveraging network segmentation and fail-safe operational modes, ensuring a breach does not bring production to a halt.",
        "We focus on OT resilience by prioritizing System Availability and process Integrity so operations can be reliably sustained",
        "Rapid Disaster Recovery: We ensure that industrial control systems can be restored safely and quickly using tested backup files, emergency response procedures, and incident playbooks.",
        "Adapting and Improving: By using international frameworks like ISO 62443, enhance architectures, policies, and operational strategies to harden the OT environment against attack vectors."
      ],
      image: "/assets/industries/Energy.webp"
    },
    {
      tabLabel: "Government",
      title: "Sovereign State & Public Infrastructure Resilience",
      tagline: "Uninterrupted Delivery of Essential Public Services",
      desc: "Improve National Cyber Resilience for Government Infrastructure",
      stat1: "10+",
      stat1Label: "Government Entities served",
      stat2: "Continuous",
      stat2Label: "Regulatory Compliance Mapping",
      stat2Red: true,
      bulletTitle: "State Measures",
      bullets: [
        "Maintain Continuity of Essential Government Services: We work with government entities to ensure that critical government services (e.g., emergency response, tax administration, defense) remain operational or can be rapidly restored following a cyberattack",
        "Protect Sensitive Data: We work with government entities to safeguard classified government data, citizens' Personally Identifiable Information (PII), and economic data.",
        "Contain and Recover from Breaches: We work with government entities to minimize the scope of damage from successful intrusions and accelerate the recovery of compromised IT/OT systems.",
        "Secure Supply Chains: We work with government entities to vet and monitor third-party vendors and contractors to prevent systemic vulnerabilities from cascading into government networks"
      ],
      image: "/assets/industries/government.webp"
    },
    {
      tabLabel: "Education",
      title: "Educational Resources and Infrastructure Resilience",
      tagline: "Maintaining teaching continuity, safeguard sensitive student and research data",
      desc: "Deploying high-precision authorization firewalls and dataset protection models to secure student records, shield connected campuses, and eliminate single points of failure across learning management networks.",
      stat1: "100%",
      stat1Label: "Academic Data Protection",
      stat2: "Zero",
      stat2Label: "Academic Data Loss",
      bulletTitle: "Education Sector Resilience KPIs",
      bullets: [
        "Educational Continuity: We help leading educational institutions to minimize downtime for learning platforms, examination portals, and virtual classrooms to acceptable levels, ensuring students experience no interruptions to their studies",
        "Data Protection: We help leading educational institutions to secure Personally Identifiable Information (PII), academic records, and proprietary intellectual property",
        "Rapid Incident Recovery: We help leading educational institutions establish robust, tested disaster recovery plans",
        "Regulatory Compliance: We help leading educational institutions to adhere to local data privacy laws by implementing standard security controls"
      ],
      image: "/assets/industries/education.webp"
    },
    {
      tabLabel: "Health",
      title: "Healthcare Ecosystems & Medical Records Resilience",
      tagline: "Maintaining safe, uninterrupted patient care",
      desc: "Architecting rigorous zero-trust boundaries to insulate life-critical diagnostic equipment, guarantee real-time healthcare telemetry availability, and defend electronic medical records from malicious manipulation.",
      stat1: "Fully Compliant",
      stat1Label: "Health Regulatory Frameworks",
      stat2: "< 5ms",
      stat2Label: "Anomalous Endpoint Isolation Latency",
      bulletTitle: "Healthcare Cyber Resilience Goals",
      bullets: [
        "Uninterrupted Clinical Operations: We work with major health institutions to guarantee that life-saving medical devices, electronic health records (EHR), and diagnostics remain available and accessible",
        "Data Security & Privacy: We work with major health institutions to safeguard sensitive patient protected health information (PHI) and proprietary medical research from ransomware, data theft, and extortion.",
        "Rapid Containment & Recovery: We work with major health institutions to limit the lateral spread of cyberattacks and deploy isolated backup and restoration environments.",
        "Regulatory Compliance: We work with major health institutions to meet regulatory mandates, such as the Health Insurance Portability and Accountability Act (HIPAA), and to strengthen cyber insurance readiness."
      ],
      image: "/assets/industries/health.webp"
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
          Select an industrial sector to experience our threat response approaches and tailored technical defenses for critical economic sectors.
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
            <h4 className="text-sm uppercase font-mono font-black tracking-widest text-zinc-400 mb-4">
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
              <h3 className={`text-2xl md:text-3xl font-mono font-black leading-none mb-1 ${current.stat2Red ? 'text-red-700' : 'text-zinc-900'}`}>{current.stat2}</h3>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider font-mono">{current.stat2Label}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}