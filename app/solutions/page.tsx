"use client";
import React, { useState } from "react";
// FIXED: restored Next.js routing reference component to prevent compilation crashes
import Link from "next/link";
import { useForm } from "@formspree/react";
import { ArrowRight, Gavel, School, ShieldAlert, BadgeCheck, Database, Terminal, X, CheckCircle2 } from "lucide-react";

export default function SolutionsHubPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [state, handleSubmit, reset] = useForm("professionalServices");

  const professionalServices = [
    {
      title: "Governance & Compliance",
      desc: "Our comprehensive approach to GRC is tailored to your organization's specific needs. We help your organization establish a robust governance framework, identify and manage risks, and ensure compliance with relevant regulations and standards.",
      icon: Gavel
    },
    {
      title: "CEAP Professional Training",
      desc: "Our flagship CEAP training provides a solid foundation in cybersecurity principles and practices. You'll learn how to protect yourself and organizations from cyber threats, understand security fundamentals, and develop the skills needed for a career in cybersecurity.",
      icon: School
    },
    {
      title: "Cybersecurity Due Diligence",
      desc: "Our due diligence assessment supports informed decision-making for investments, mergers, or acquisitions by highlighting potential cybersecurity challenges and associated remediation costs.",
      icon: ShieldAlert
    },
    {
      title: "Compliance Management",
      desc: "Facilitating compliance with international security frameworks including SOC 2, ISO 27001, PCI DSS, HIPAA, GDPR, NIST CSF, COBIT, and CIS Controls.",
      icon: BadgeCheck
    },
    {
      title: "Data Protection (NDPC)",
      desc: "We are a licensed Data Protection Compliance Organization (DPCO). We provide expert DPIAs, data mapping, AI data governance, privacy breach management, and data protection training.",
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
      name: "Governance, Risk and Compliance (GRC) Management Platform",
      logo: "novrgrc.png",
      tagline: "Multi-sector AI-driven GRC platform",
      desc: "Next-generation GRC platform providing complete visibility of risks, audit, and compliance. Automates workflows, risk quantification, and real-time cyber resilience scoring.",
      path: "/solutions/novrgrc"
    },
    {
      name: "Vulnerability Management",
      logo: "secubreach.png",
      tagline: "Vulnerability Management Platform",
      desc: "Intersects vulnerability management and regulatory compliance. We integrate the NIST CVE database with AI/ML heuristics for passive, metadata-based continuous monitoring.",
      path: "/solutions/secubreach"
    },
    {
      name: "Security Operations Centre Operations",
      logo: "novrsoc.png",
      tagline: "AI-POWERED MANAGED SOC Services",
      desc: "24/7/365 SOC operations for threat management of your assets. High-precision threat response, automated SOAR playbooks, and a SOC analyst workbench.",
      path: "/solutions/novrsoc"
    },
    {
      name: "EXTENDED DETECTION AND RESPONSE (XDR)",
      logo: "novrradar.png",
      tagline: "AI-powered solution to detect Indicators of Attack (IoAs)",
      desc: "Our AI-powered innovative gateway Extended Detection and Response (XDR) solution that detects Indicators of Attack (IoAs) across an enterprise or nation's digital environment.",
      path: "/solutions/novrradar"
    }
  ];

  const triggerPopupForm = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsFormOpen(true);
  };

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-20 w-full bg-white text-zinc-900 antialiased">
      
      {/* Top Banner Heading */}
      <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left">
        <span className="text-[11px] md:text-[15px] font-mono font-black tracking-widest text-red-700 uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded w-fit block mb-4">
          Cybersecurity Solutions Matrix
        </span>
        <h1 className="text-2xl md:text-5xl font-extrabold text-zinc-900 tracking-tight uppercase mb-4 leading-none">
          Professional Solutions
        </h1>
        <p className="text-zinc-600 text-[13px] md:text-[17px] leading-relaxed font-normal">
          CYBERNOVR delivers professional-grade cybersecurity solutions engineered to help organisations achieve a 360° resilience for their critical information infrastructures. Please explore our specialized solutions across SOC, GRC, vulnerability management, and Indicators of Attack platforms.
        </p>
      </div>

      {/* Proprietary Software Solutions Section */}
      <section className="space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-3">
          <h2 className="text-sm md:text-[15px] font-black uppercase tracking-widest text-zinc-400">
            Proprietary Platforms &amp; Software Solutions
          </h2>
          <button 
            onClick={() => triggerPopupForm("General Product Scoping")}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-[13px] md:text-[15px] uppercase tracking-widest px-5 py-3 rounded-md transition-all font-mono text-center"
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
                  <span id={`fb-text-${idx}`} className="hidden font-mono font-black text-red-500 text-[15px] tracking-wider">{prod.name}</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-red-500 transition-colors uppercase">{prod.name}</h3>
                  <p className="text-[13px] md:text-[15px] font-bold text-red-500 uppercase tracking-widest mt-0.5 font-mono">{prod.tagline}</p>
                </div>
                <p className="text-zinc-300 text-[11px] md:text-[15px] leading-relaxed font-normal">{prod.desc}</p>
              </div>
              <Link href={prod.path} className="inline-flex items-center gap-2 text-[13px] md:text-[15px] font-bold uppercase tracking-widest text-red-500 hover:text-white transition-colors pt-2 self-start font-mono group">
                Book a Demo <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Advisory Matrix Section */}
      <section className="space-y-8 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-3">
          <h2 className="text-sm md:text-[15px] font-black uppercase tracking-widest text-zinc-400">
            Professional Services
          </h2>
          <button 
            onClick={() => triggerPopupForm("General Advisory Scoping")}
            className="border-2 border-zinc-200 text-zinc-900 hover:bg-zinc-50 font-bold text-[13px] md:text-[15px] uppercase tracking-widest px-5 py-2.5 rounded-md transition-all font-mono text-center"
          >
            REQUEST PROFESSIONAL SERVICES
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
                  <h3 className="text-[13px] md:text-[15px] font-bold text-zinc-900 group-hover:text-red-700 transition-colors uppercase tracking-tight">
                    {srv.title}
                  </h3>
                  <p className="text-[11px] md:text-[15px] text-zinc-600 leading-relaxed font-normal">{srv.desc}</p>
                </div>
                <button 
                  onClick={() => triggerPopupForm(srv.title)}
                  className="inline-flex items-center gap-1.5 text-[13px] md:text-[15px] font-bold uppercase tracking-widest text-red-700 hover:text-red-600 transition-all self-start font-mono group"
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
              onClick={() => { reset(); setIsFormOpen(false); }}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {!state.succeeded ? (
              <>
                <div className="space-y-1">
                  <span className="text-[11px] font-black font-mono tracking-widest text-red-700 bg-purple-950/[0.04] border border-purple-900/10 px-2.5 py-1 rounded uppercase">PROFESSIONAL SERVICES</span>
                  <h3 className="text-lg font-black uppercase tracking-tight pt-2">REQUEST FOR OUR PROFESSIONAL SERVICES</h3>
                  <p className="text-[13px] text-zinc-500 font-medium leading-relaxed">
                    Connect directly to our operations squad. Fill out the fields below to schedule a baseline systems criteria mapping engagement.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="serviceType" value={selectedService} />
                  <input type="hidden" name="formSource" value="Professional Services" />

                  <div className="space-y-1">
                    <label className="text-[13px] font-black uppercase tracking-wider text-zinc-400 font-mono">Service Type *</label>
                    <select
                      name="serviceCategory"
                      required
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-[13px] text-zinc-900 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all"
                    >
                      <option value="">Select a service...</option>
                      <option value="Governance & Compliance">Governance & Compliance</option>
                      <option value="CEAP Professional Training">CEAP Professional Training</option>
                      <option value="Cybersecurity Due Diligence">Cybersecurity Due Diligence</option>
                      <option value="Compliance Management">Compliance Management</option>
                      <option value="Data Protection (NDPC)">Data Protection (NDPC)</option>
                      <option value="Penetration Testing & Red Teaming">Penetration Testing & Red Teaming</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[13px] font-black uppercase tracking-wider text-zinc-400 font-mono">Full Name *</label>
                    <input 
                      type="text" required placeholder="Your name"
                      name="name"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-[13px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[13px] font-black uppercase tracking-wider text-zinc-400 font-mono">Corporate Email *</label>
                      <input 
                        type="email" required placeholder="you@company.com"
                        name="email"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-[13px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[13px] font-black uppercase tracking-wider text-zinc-400 font-mono">Phone Number *</label>
                      <input 
                        type="tel" required placeholder="Contact Phone Number"
                        inputMode="numeric" pattern="[0-9+\-\s()]+" title="Please enter a valid phone number"
                        onKeyDown={(e) => { if (!/[0-9+\-\s()]/.test(e.key) && !['Backspace','Delete','Tab','ArrowLeft','ArrowRight'].includes(e.key)) { e.preventDefault(); } }}
                        name="phone"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-[13px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[13px] font-black uppercase tracking-wider text-zinc-400 font-mono">Comments</label>
                    <textarea 
                      rows={3}                       placeholder="How may we help you?"
                      name="comments"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-4 text-[13px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-[13px] uppercase tracking-widest py-3.5 rounded-lg transition-all shadow-md font-mono disabled:opacity-50"
                  >
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center flex flex-col items-center justify-center space-y-3">
                <CheckCircle2 className="h-12 w-12 text-emerald-600 animate-bounce" />
                <h3 className="text-[15px] font-black uppercase tracking-wider">Request Submitted</h3>
                <p className="text-xs text-zinc-500 max-w-xs mx-auto font-medium">Our team will be in touch within 24 hours.</p>
                <button
                  type="button"
                  onClick={() => { reset(); setIsFormOpen(false); }}
                  className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 font-bold rounded text-[13px] uppercase tracking-widest font-mono transition-all"
                >
                  Submit Another
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}