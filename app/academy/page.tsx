"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GraduationCap, CheckCircle2, ArrowRight, Lock, Sparkles, BookOpen } from "lucide-react";

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
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-16 bg-white text-zinc-900 antialiased">
      
      {/* Hero Module Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-zinc-200 pb-12 text-left">
        <div className="lg:col-span-8 space-y-4">
          <span className="inline-block font-mono text-red-700 text-xs font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded">
            CYBERNOVR Educational Framework
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight uppercase leading-tight">
            Cybersecurity Education &amp;<br />Awareness Programme (CEAP)
          </h1>
          <p className="italic text-red-700 border-l-2 border-red-700 pl-4 py-0.5 text-base font-semibold tracking-wide">
            Flagship education program delivering hands-on technical training frameworks.
          </p>
          <p className="text-zinc-600 text-sm md:text-base max-w-2xl leading-relaxed font-normal">
            Our specialized academy delivers institutional-grade cyber training designed to build real-world resilience. Featuring comprehensive modules with integrated hands-on ethical hacking labs, we ensure that students gain direct exposure to elite perimeter preservation tools.
          </p>
          
          {/* REQUESTED ACTION SHORTCUTS INJECTED IN HERO PROFILE */}
          <div className="flex flex-wrap gap-4 pt-4 font-mono">
            <Link href="/academy/assessments" className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-5 py-3.5 rounded-md transition-all shadow-md flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Check Your Security Knowledge
            </Link>
            <Link href="/academy" className="border-2 border-zinc-200 hover:border-purple-900 text-zinc-700 px-5 py-3.5 rounded-md text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-red-700" /> Visit Learning Portal
            </Link>
          </div>
        </div>
        
        {/* Metric Overview Callout Box */}
        <div className="lg:col-span-4 bg-purple-950 text-white p-8 rounded-xl shadow-xl flex flex-col justify-between space-y-6 border border-purple-900/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <GraduationCap className="h-10 w-10 text-red-500" />
            <h3 className="text-lg font-bold uppercase tracking-wide mt-4">Academy Footprint</h3>
            <p className="text-xs text-purple-200 mt-1.5 leading-relaxed font-medium">
              Delivering national cybersecurity technical leadership training tracks across critical public and private secondary sectors.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 border-t border-purple-900/30 pt-4 font-mono relative z-10">
            <div>
              <p className="text-2xl font-black text-white">10</p>
              <p className="text-[9px] uppercase tracking-widest text-purple-300 font-bold">Core Modules</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">Hundreds</p>
              <p className="text-[9px] uppercase tracking-widest text-purple-300 font-bold">Nigerians Trained</p>
            </div>
          </div>
        </div>
      </section>

      {/* Centralized Impact Console Callout Section Card */}
      <div className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm text-left">
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
            Centralized CEAP Impact Analytics
          </h4>
          <p className="text-xs text-zinc-500 font-medium">
            Monitor live student placement indexes, tracked training baselines, and qualitative graduation records synched directly from data-nodes.
          </p>
        </div>
        <Link 
          href="/impact-dashboard" 
          className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-lg text-center transition-all whitespace-nowrap shadow-sm font-mono flex items-center justify-center gap-2 group"
        >
          Access Live Dashboard Console <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Course Curriculum Architecture Section */}
      <section className="space-y-6 text-left">
        <div className="border-b border-zinc-100 pb-2">
          <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400">Technical Curriculum Matrix</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courseModules.map((mod, idx) => (
            <div key={idx} className="p-4 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl flex items-start gap-4 hover:border-purple-900/30 transition-all shadow-sm">
              <span className="font-mono text-sm font-black text-red-700 bg-purple-950/[0.04] border border-purple-900/10 px-2.5 py-1 rounded shrink-0">
                {mod.num}
              </span>
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-zinc-900 leading-snug uppercase tracking-tight">{mod.title}</h4>
                <p className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider">{mod.topic}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Lab Sandbox Panel */}
      <section className="bg-zinc-950 text-white rounded-2xl overflow-hidden border border-zinc-900 shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch text-left">
        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center space-y-4">
          <span className="text-[9px] font-black font-mono tracking-widest text-red-500 bg-red-600/10 border border-red-500/20 px-2.5 py-1 rounded uppercase w-fit">
            Live Lab Sandbox
          </span>
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">Hands-On Ethical Hacking Lab</h3>
          <p className="text-xs md:text-sm text-zinc-400 leading-relaxed max-w-xl font-medium">
            Students learn defensive engineering principles through supervised mock infiltration scripts. Safely evaluate malware profiles, analyze real-time payload extractions, and configure firewalls inside sandbox networks built for security research.
          </p>
        </div>
        
        <div className="lg:col-span-5 bg-black/40 p-6 md:p-8 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-zinc-800 overflow-x-auto">
          <div className="w-full min-w-[280px] bg-black/60 font-mono text-[11px] md:text-xs p-5 rounded-xl border border-zinc-800 shadow-inner space-y-3 text-red-500 whitespace-nowrap">
            <p className="text-zinc-700 tracking-tight block">// INITIALIZING SECURITY EDUCATION PROTOCOL...</p>
            <p className="text-white block">&gt; run ceap --sandbox-mode</p>
            <p className="text-emerald-500 flex items-center gap-1">
              <span>✔</span> <span>Lab Environment Connected Successfully</span>
            </p>
            <p className="text-white block">&gt; check --vulnerability-matrix</p>
            <p className="text-amber-500 tracking-tight block">⚠️ 3 Exposed Assets Prioritized for Compliance Remediation</p>
            <div className="w-full bg-white/5 h-1.5 rounded overflow-hidden mt-1">
              <div className="bg-red-600 h-full rounded w-3/4 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Enrollment Intake Block Sheet */}
      <section className="bg-purple-950/[0.01] border-2 border-purple-900/5 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto shadow-sm text-left">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 uppercase">Initiate Academy Enrollment</h2>
          <p className="text-xs text-zinc-500 max-w-md mx-auto font-medium">
            Submit your parameters below to enlist your institution or register individual student tracking accounts.
          </p>
        </div>

        {enrollmentSubmitted ? (
          <div className="p-8 text-center bg-purple-950/[0.02] border-2 border-dashed border-purple-900/20 rounded-xl flex flex-col items-center justify-center space-y-3">
            <CheckCircle2 className="h-12 w-12 text-emerald-600 animate-bounce" />
            <h4 className="text-base font-bold text-zinc-900 uppercase tracking-wide">Registration Request Staged</h4>
            <p className="text-xs text-zinc-500 max-w-xs mx-auto font-medium">
              Our academic operations desk will verify your institutional domain and transmit your curriculum access logs within 24 hours.
            </p>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setEnrollmentSubmitted(true); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-400 font-mono uppercase tracking-wider">Applicant Full Name *</label>
                <input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal" placeholder="Your full name" type="text" required />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-400 font-mono uppercase tracking-wider">Academic Email *</label>
                <input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal" placeholder="you@institution.edu" type="email" required />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-400 font-mono uppercase tracking-wider">School / Organization *</label>
                <input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal" placeholder="Organization footprint name" type="text" required />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-400 font-mono uppercase tracking-wider">Cohort Size *</label>
                <div className="relative">
                  <select className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-600 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all appearance-none cursor-pointer font-normal" required>
                    <option value="">Expected Candidate Volume</option>
                    <option value="small">Under 50 Candidates</option>
                    <option value="medium">50 - 200 Candidates</option>
                    <option value="large">200+ Candidates</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-400 font-mono uppercase tracking-wider block">Scaling Preferences</label>
              <textarea rows={4} className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-4 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all resize-none font-normal" placeholder="Outline specific educational targets or lab server scaling preferences if applicable..." />
            </div>
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-black uppercase tracking-widest rounded-lg shadow-md transition-all text-xs font-mono">
              Submit Academy Application
            </button>
          </form>
        )}
      </section>

    </div>
  );
}