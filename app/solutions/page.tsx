"use client";
import React from "react";
import Link from "next/link";

export default function SolutionsHubPage() {
  const professionalServices = [
    {
      title: "Governance & Compliance",
      desc: "Define cybersecurity governance frameworks with holistic GRC using our specialized tools—automating risk management, policy analysis, and compliance.",
      path: "/solutions/governance-compliance",
      icon: "gavel"
    },
    {
      title: "Risk Management",
      desc: "Comprehensive risk identification, assessment, treatment, and monitoring. Covers organizational, technical, and legal measures across the 4Rs of resilience.",
      path: "/solutions/risk-management",
      icon: "shield_with_heart"
    },
    {
      title: "Cybersecurity Due Diligence",
      desc: "Security posture evaluation prior to corporate transactions. Risk profiling, penetration tests, IoC identification, and remediation cost assessment.",
      path: "/solutions/due-diligence",
      icon: "lock_reset"
    },
    {
      title: "Compliance Management",
      desc: "Facilitating compliance with international security frameworks including SOC 2, ISO 27001, PCI DSS, HIPAA, GDPR, NIST CSF, COBIT, and CIS Controls.",
      path: "/solutions/compliance-management",
      icon: "verified_user"
    },
    {
      title: "Data Protection (NDPC)",
      desc: "Licensed Data Protection Compliance Organization. Providing expert DPIAs, data mapping, AI governance, privacy breach management, and official training.",
      path: "/solutions/data-protection",
      icon: "gpp_good"
    },
    {
      title: "Cybersecurity Training (CEAP)",
      desc: "Flagship education program delivering 10-module courses to sectors and institutions. Features hands-on sandboxed ethical hacking labs.",
      path: "/academy",
      icon: "school"
    }
  ];

  const proprietaryProducts = [
    {
      name: "NovrGRC Platform",
      tagline: "Multi-Tenanted GRC Automation Suite",
      desc: "Next-generation GRC platform providing complete visibility of cyber risks and compliance. Automates workflows, risk quantification, and real-time cyber posture scoring.",
      path: "/solutions/novrgrc",
      icon: "hub"
    },
    {
      name: "SecuBreach",
      tagline: "Vulnerability Threat & Exposure Management",
      desc: "Bridges vulnerability management and regulatory compliance. Integrates NIST CVE database with ML heuristics for zero-touch passive, continuous monitoring.",
      path: "/solutions/secubreach",
      icon: "radar"
    },
    {
      name: "NovrSOC",
      tagline: "AI-Powered Managed SOC (MSSP)",
      desc: "Professional-grade 24/7/365 monitoring and threat management of your assets. High-precision threat response, automated SOAR playbooks, and digital forensics.",
      path: "/solutions/novrsoc",
      icon: "analytics"
    },
    {
      name: "NovrRADAR",
      tagline: "Gateway IoC Threat Detection Solution",
      desc: "An AI-powered, passive network monitoring system developed to detect Indicators of Compromise (IoCs) across digital environments analyzing metadata patterns only.",
      path: "/solutions/novrradar",
      icon: "grid_view"
    }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto space-y-20">
      
      {/* Top Banner Heading */}
      <div className="border-b border-outline-variant/20 pb-10 max-w-4xl">
        <span className="text-xs font-mono font-black tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded w-fit block mb-4">
          Cybersecurity Solutions Matrix
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-on-surface tracking-tight uppercase mb-4 leading-none">
          Professional Services &amp; Systems
        </h1>
        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
          CYBERNOVR delivers pro-grade defense architectures engineered to establish 360° resilience for Critical Information Infrastructures globally. Explore our specialized services and automated validation platforms.
        </p>
      </div>

      {/* Proprietary Software Products Row Layout Grid */}
      <section className="space-y-8">
        <h2 className="text-2xl font-black text-on-surface uppercase tracking-tight flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Proprietary Platforms &amp; Software Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proprietaryProducts.map((prod, idx) => (
            <div key={idx} className="bg-inverse-surface text-white rounded-xl p-8 border border-white/10 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group">
              <div className="space-y-4">
                <div className="text-primary">
                  <span className="material-symbols-outlined text-4xl">{prod.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tight">{prod.name}</h3>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mt-0.5">{prod.tagline}</p>
                </div>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">{prod.desc}</p>
              </div>
              <Link href={prod.path} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors pt-2 self-start">
                Initialize System Console <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Consulting Delivery Matrix Grid */}
      <section className="space-y-8 pt-8 border-t border-outline-variant/20">
        <h2 className="text-2xl font-black text-on-surface uppercase tracking-tight">
          Professional Security Advisory Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionalServices.map((srv, idx) => (
            <div key={idx} className="bg-white border border-outline-variant/30 rounded-xl p-6 flex flex-col justify-between space-y-6 shadow-sm hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">{srv.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed opacity-90">{srv.desc}</p>
              </div>
              <Link href={srv.path} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary group-hover:gap-3 transition-all self-start">
                Review Service Architecture <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}