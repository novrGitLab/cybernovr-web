"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function CybernovrAcademyPage() {
  const [enrollmentSubmitted, setEnrollmentSubmitted] = useState(false);

  const courseModules = [
    { num: "01", title: "Introduction to Critical Infrastructure Protection", topic: "Sovereign Asset Architecture" },
    { num: "02", title: "Fundamentals of Network Security & Defense Layers", topic: "Perimeter Defenses" },
    { num: "03", title: "Understanding GRC and Automated Frameworks", topic: "NovrGRC Foundations" },
    { num: "04", title: "Threat Vector Analysis & Exposure Metrics", topic: "SecuBreach Systems" },
    { num: "05", title: "Vulnerability Discovery & CVE Index Mapping", topic: "Threat Hunting Labs" },
    { num: "06", title: "Hands-on Ethical Hacking Foundations", topic: "Sandboxed Lab Protocols" },
    { num: "07", title: "Incident Response Frameworks & Containment", topic: "Rapid Tactical Action" },
    { num: "08", title: "Digital Forensics & Incident Post-Mortems", topic: "Anomaly Diagnostics" },
    { num: "09", title: "Data Protection & Regional Privacy Regulations", topic: "NDPC & GDPR Compliance" },
    { num: "10", title: "AI Governance & Deep Learning Threat Intelligence", topic: "Next-Gen Heuristics" }
  ];

  return (
    <div className="pt-32 md:pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto space-y-20">
      
      {/* Hero Module Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-outline-variant/20 pb-12">
        <div className="lg:col-span-8 space-y-4">
          <span className="inline-block font-mono text-primary text-xs font-black tracking-widest uppercase bg-primary/10 px-3 py-1 rounded">
            CYBERNOVR Educational Framework
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-on-surface tracking-tight uppercase leading-tight">
            Cybersecurity Education &amp;<br />Awareness Programme (CEAP)
          </h1>
          <p className="italic text-primary border-l-4 border-primary pl-6 py-1 text-lg md:text-xl font-bold">
            Flagship education program delivering hands-on technical training frameworks.
          </p>
          <p className="text-on-surface-variant text-sm md:text-base max-w-2xl leading-relaxed pt-2">
            Our specialized academy delivers institutional-grade cyber training designed to build real-world resilience. Featuring comprehensive modules with integrated hands-on ethical hacking labs, we ensure that students gain direct exposure to elite perimeter preservation tools.
          </p>
        </div>
        
        {/* Metric Overview Callout Box */}
        <div className="lg:col-span-4 bg-primary text-white p-8 rounded-xl shadow-xl flex flex-col justify-between space-y-6">
          <div>
            <span className="material-symbols-outlined text-4xl opacity-80">school</span>
            <h3 className="text-xl font-black uppercase tracking-wide mt-4">Academy Footprint</h3>
            <p className="text-xs text-white/80 mt-1 leading-relaxed">
              Delivering national cybersecurity technical leadership training tracks across critical public and private secondary sectors.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-4">
            <div>
              <p className="text-2xl font-black font-mono">10</p>
              <p className="text-[10px] uppercase tracking-widest text-white/70 font-bold">Core Modules</p>
            </div>
            <div>
              <p className="text-2xl font-black font-mono">Hundreds</p>
              <p className="text-[10px] uppercase tracking-widest text-white/70 font-bold">Nigerians Trained</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW INTERACTION LINK NODE: Centralized Impact Console Callout Section Card */}
      <div className="bg-surface-container-low border border-outline-variant/30 p-6 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
        <div className="space-y-1">
          <h4 className="text-sm font-black text-on-surface uppercase tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            Centralized CEAP Impact Analytics
          </h4>
          <p className="text-xs text-on-surface-variant max-w-xl">
            Monitor live student placement indexes, tracked training baselines, and qualitative graduation records synched directly from data-nodes.
          </p>
        </div>
        <Link 
          href="/impact-dashboard" 
          className="w-full sm:w-auto bg-inverse-surface hover:bg-primary text-white font-bold text-xs uppercase tracking-widest px-5 py-3 rounded text-center transition-all whitespace-nowrap shadow-sm"
        >
          Access Live Dashboard Console →
        </Link>
      </div>

      {/* Course Curriculum Architecture Section */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-extrabold text-on-surface tracking-tight">Technical Curriculum Matrix</h2>
          <p className="text-sm text-on-surface-variant max-w-xl">
            A comprehensive, multi-module framework covering operational parameters from asset protection to compliance analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courseModules.map((mod, idx) => (
            <div key={idx} className="p-5 bg-white border border-outline-variant/30 rounded-lg flex items-start gap-4 hover:border-primary/40 transition-all shadow-sm">
              <span className="font-mono text-base font-black text-primary bg-primary/5 px-2.5 py-1 rounded shrink-0">
                {mod.num}
              </span>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-on-surface leading-snug">{mod.title}</h4>
                <p className="text-[11px] font-medium text-on-surface-variant/70 uppercase tracking-wider">{mod.topic}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Lab Sandbox Panel */}
      <section className="bg-inverse-surface text-white rounded-xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center space-y-4">
          <span className="text-[10px] font-mono font-bold tracking-widest text-primary bg-primary/20 px-3 py-1 rounded w-fit uppercase">
            Live Lab Sandbox
          </span>
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Hands-On Ethical Hacking Lab</h3>
          <p className="text-sm text-white/70 leading-relaxed max-w-xl">
            Students learn defensive engineering principles through supervised mock infiltration scripts. Safely evaluate malware profiles, analyze real-time payload extractions, and configure firewalls inside sandbox networks built for security research.
          </p>
        </div>
        
        <div className="lg:col-span-5 bg-black/40 p-6 md:p-8 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-white/10 overflow-x-auto">
          <div className="w-full min-w-[280px] bg-black/60 font-mono text-[11px] md:text-xs p-5 rounded-lg border border-white/10 shadow-inner space-y-3 text-primary whitespace-nowrap">
            <p className="text-white/30 tracking-tight block">// INITIALIZING SECURITY EDUCATION PROTOCOL...</p>
            <p className="text-white block">&gt; run ceap --sandbox-mode</p>
            <p className="text-green-400 flex items-center gap-1">
              <span>✔</span> <span>Lab Environment Connected Successfully</span>
            </p>
            <p className="text-white block">&gt; check --vulnerability-matrix</p>
            <p className="text-amber-400 tracking-tight block">⚠️ 3 Exposed Assets Prioritized for Compliance Remediation</p>
            <div className="w-full bg-white/5 h-1.5 rounded overflow-hidden mt-1">
              <div className="bg-primary h-full rounded w-3/4 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Enrollment Intake Block Sheet */}
      <section className="bg-white border border-outline-variant/30 rounded-xl p-8 md:p-12 max-w-3xl mx-auto shadow-sm">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-on-surface">Initiate Academy Enrollment</h2>
          <p className="text-xs md:text-sm text-on-surface-variant max-w-md mx-auto">
            Submit your parameters below to enlist your institution or register individual student tracking accounts.
          </p>
        </div>

        {enrollmentSubmitted ? (
          <div className="p-8 text-center bg-primary/5 border border-primary/20 rounded-lg space-y-2">
            <span className="material-symbols-outlined text-primary text-4xl">verified</span>
            <h4 className="text-base font-bold text-on-surface uppercase tracking-wide">Registration Request Staged</h4>
            <p className="text-xs text-on-surface-variant max-w-xs mx-auto">
              Our academic operations desk will verify your institutional domain and transmit your curriculum access logs within 24 hours.
            </p>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setEnrollmentSubmitted(true); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input 
                className="w-full bg-surface border border-outline-variant/30 rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" 
                placeholder="Applicant Full Name" type="text" required 
              />
              <input 
                className="w-full bg-surface border border-outline-variant/30 rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" 
                placeholder="Institutional / Academic Email" type="email" required 
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input 
                className="w-full bg-surface border border-outline-variant/30 rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" 
                placeholder="School / Organization Name" type="text" required 
              />
              <select 
                className="w-full bg-surface border border-outline-variant/30 rounded px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-on-surface-variant appearance-none cursor-pointer"
                required
              >
                <option value="">Expected Cohort Size</option>
                <option value="small">Under 50 Candidates</option>
                <option value="medium">50 - 200 Candidates</option>
                <option value="large">200+ Candidates</option>
              </select>
            </div>
            <textarea 
              rows={4} 
              className="w-full bg-surface border border-outline-variant/30 rounded p-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none" 
              placeholder="Outline specific educational targets or lab server scaling preferences if applicable..."
            />
            <button 
              type="submit" 
              className="w-full bg-primary text-white py-3.5 font-bold rounded hover:bg-purple-900 active:scale-[0.99] transition-all text-xs uppercase tracking-widest shadow-md"
            >
              Submit Academy Application
            </button>
          </form>
        )}
      </section>

    </div>
  );
}