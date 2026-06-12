"use client";
import React, { useState } from "react";
// FIXED: restored Next.js routing reference component to prevent compilation crashes
import Link from "next/link";
import { ArrowRight, Gavel, School, ShieldAlert, BadgeCheck, Database, Terminal, X, CheckCircle2 } from "lucide-react";

export default function SolutionsHubPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formSubmitted, setFormSuccess] = useState(false);
  const [formData, setFormFields] = useState({ name: "", email: "", phone: "", notes: "" });

  const professionalServices = [
    {
      title: "Governance & Compliance",
      desc: "Define cybersecurity governance frameworks with holistic GRC using our specialized tools—automating risk management, policy analysis, and compliance.",
      icon: Gavel
    },
    {
      title: "CEAP Professional Training",
      desc: "Flagship cybersecurity education program delivering intensive 10-module security frameworks, capacity development metrics, and automated sandboxed hacking simulation labs.",
      icon: School
    },
    {
      title: "Cybersecurity Due Diligence",
      desc: "Security posture evaluation prior to corporate transactions. Risk profiling, penetration tests, IoC identification, and remediation cost assessment.",
      icon: ShieldAlert
    },
    {
      title: "Compliance Management",
      desc: "Facilitating compliance with international security frameworks including SOC 2, ISO 27001, PCI DSS, HIPAA, GDPR, NIST CSF, COBIT, and CIS Controls.",
      icon: BadgeCheck
    },
    {
      title: "Data Protection (NDPC)",
      desc: "Licensed Data Protection Compliance Organization. Providing expert DPIAs, data mapping, AI governance, privacy breach management, and official training.",
      icon: Database
    },
    {
      title: "Penetration Testing & Red Teaming",
      desc: "Simulated multi-vector adversarial campaigns designed to safely evaluate network perimeters, discover zero-day vulnerabilities, and harden enterprise boundaries.",
      icon: Terminal
    }
  ];

  const proprietaryProducts = [
    {
      name: "NovrGRC Platform",
      logo: "novrgrc.png",
      tagline: "Multi-Tenanted GRC Automation Suite",
      desc: "Next-generation GRC platform providing complete visibility of cyber risks and compliance. Automates workflows, risk quantification, and real-time cyber posture scoring.",
      path: "/solutions/novrgrc"
    },
    {
      name: "SecuBreach",
      logo: "secubreach.png",
      tagline: "Vulnerability Threat & Exposure Management",
      desc: "Bridges vulnerability management and regulatory compliance. Integrates NIST CVE database with ML heuristics for zero-touch passive, continuous monitoring.",
      path: "/solutions/secubreach"
    },
    {
      name: "NovrSOC",
      logo: "novrsoc.png",
      tagline: "AI-Powered Managed SOC (MSSP)",
      desc: "Professional-grade 24/7/365 monitoring and threat management of your assets. High-precision threat response, automated SOAR playbooks, and digital forensics.",
      path: "/solutions/novrsoc"
    },
    {
      name: "NovrRADAR",
      logo: "novrradar.png",
      tagline: "Gateway IoC Threat Detection Solution",
      desc: "An AI-powered, passive network monitoring system developed to detect Indicators of Compromise (IoCs) across digital environments analyzing metadata patterns only.",
      path: "/solutions/novrradar"
    }
  ];

  const triggerPopupForm = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsFormOpen(true);
  };

  const handleFormSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSuccess(true);
    setTimeout(() => {
      setIsFormOpen(false);
      setFormSuccess(false);
      setFormFields({ name: "", email: "", phone: "", notes: "" });
    }, 2500);
  };

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-20 w-full bg-white text-zinc-900 antialiased">
      
      {/* Top Banner Heading */}
      <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left">
        <span className="text-[10px] font-mono font-black tracking-widest text-red-700 uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded w-fit block mb-4">
          Cybersecurity Solutions Matrix
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-4 leading-none">
          Professional Services &amp; Systems
        </h1>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal">
          CYBERNOVR delivers pro-grade defense architectures engineered to establish 360° resilience for Critical Information Infrastructures globally. Explore our specialized services and automated validation platforms.
        </p>
      </div>

      {/* Proprietary Software Solutions Section */}
      <section className="space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-3">
          <h2 className="text-sm font-black uppercase tracking-widest text-zinc-400">
            Proprietary Platforms &amp; Software Solutions
          </h2>
          <button 
            onClick={() => triggerPopupForm("General Product Scoping")}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-md transition-all font-mono text-center"
          >
            Request Platform Demo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proprietaryProducts.map((prod, idx) => (
            <div key={idx} className="bg-zinc-950 text-white rounded-xl p-8 border border-zinc-800 flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden group">
              <div className="space-y-4">
                <div className="h-10 w-auto flex items-center justify-start">
                  <img 
                    src={`/brand/${prod.logo}`} 
                    alt={`${prod.name} Logo`} 
                    className="h-8 w-auto object-contain brightness-0 invert" 
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                      const fb = document.getElementById(`fb-text-${idx}`);
                      if (fb) fb.style.display = 'block';
                    }}
                  />
                  <span id={`fb-text-${idx}`} className="hidden font-mono font-black text-red-500 text-base tracking-wider">{prod.name}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-red-500 transition-colors uppercase">{prod.name}</h3>
                  <p className="text-xs font-bold text-red-500 uppercase tracking-widest mt-0.5 font-mono">{prod.tagline}</p>
                </div>
                <p className="text-zinc-300 text-xs md:text-sm leading-relaxed font-normal">{prod.desc}</p>
              </div>
              <Link href={prod.path} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 hover:text-white transition-colors pt-2 self-start font-mono group">
                Initialize System Console <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Advisory Matrix Section */}
      <section className="space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-3">
          <h2 className="text-sm font-black uppercase tracking-widest text-zinc-400">
            Professional Security Advisory Services
          </h2>
          <button 
            onClick={() => triggerPopupForm("General Advisory Scoping")}
            className="border-2 border-zinc-200 text-zinc-900 hover:bg-zinc-50 font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-md transition-all font-mono text-center"
          >
            Initiate Advisory Scoping
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionalServices.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div key={idx} className="bg-purple-950/[0.02] border border-purple-900/10 rounded-xl p-6 flex flex-col justify-between space-y-6 shadow-sm hover:border-purple-900/30 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 group-hover:text-red-700 transition-colors uppercase tracking-tight">
                    {srv.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-600 leading-relaxed font-normal">{srv.desc}</p>
                </div>
                <button 
                  onClick={() => triggerPopupForm(srv.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-red-700 hover:text-red-600 transition-all self-start font-mono group"
                >
                  Contact Specialist <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* INLINE REQUEST CONSOLE POPUP MODAL OVERLAY */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm">
          <div className="bg-white border border-zinc-200 text-zinc-900 rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative text-left space-y-6">
            <button 
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {!formSubmitted ? (
              <>
                <div className="space-y-1">
                  <span className="text-[9px] font-black font-mono tracking-widest text-red-700 bg-purple-950/[0.04] border border-purple-900/10 px-2.5 py-1 rounded uppercase">SCOPING CONSOLE</span>
                  <h3 className="text-xl font-black uppercase tracking-tight pt-2">Initiate {selectedService}</h3>
                  <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                    Connect directly to our operations squad. Fill out the fields below to schedule a baseline systems criteria mapping engagement.
                  </p>
                </div>

                <form onSubmit={handleFormSubmission} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 font-mono">Full Name *</label>
                    <input 
                      type="text" required placeholder="Your operational signature name"
                      value={formData.name} onChange={(e) => setFormFields({...formData, name: e.target.value})}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 font-mono">Corporate Email *</label>
                      <input 
                        type="email" required placeholder="you@company.com"
                        value={formData.email} onChange={(e) => setFormFields({...formData, email: e.target.value})}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 font-mono">Phone Number *</label>
                      <input 
                        type="tel" required placeholder="Contact phone layout"
                        value={formData.phone} onChange={(e) => setFormFields({...formData, phone: e.target.value})}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 font-mono">System Parameters / Notes</label>
                    <textarea 
                      rows={3} placeholder="Describe infrastructure target metrics or criteria profiles..."
                      value={formData.notes} onChange={(e) => setFormFields({...formData, notes: e.target.value})}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest py-3.5 rounded-lg transition-all shadow-md font-mono"
                  >
                    Submit Scoping Request
                  </button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center flex flex-col items-center justify-center space-y-3">
                <CheckCircle2 className="h-12 w-12 text-emerald-600 animate-bounce" />
                <h3 className="text-base font-black uppercase tracking-wider">Request Logged</h3>
                <p className="text-xs text-zinc-500 max-w-xs mx-auto font-medium">Your request parameters have been logged. An operations specialist will contact your endpoint shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}