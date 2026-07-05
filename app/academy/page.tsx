"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GraduationCap, CheckCircle2, ArrowRight, Lock, Sparkles, BookOpen, Clock, Award, BarChart3, ChevronDown } from "lucide-react";

export default function CybernovrAcademyPage() {
  const [enrollmentSubmitted, setEnrollmentSubmitted] = useState(false);
  const [openModule, setOpenModule] = useState<number | null>(null);

  const courseModules = [
    {
      num: "01", title: "Introduction to Cybersecurity", topic: "Core Fundamentals",
      lessons: [
        { name: "Meet Your Instructor", duration: "5 min", type: "video" },
        { name: "Course Overview", duration: "5 min", type: "video" },
        { name: "Introduction to Cybersecurity", duration: "30 min", type: "document" }
      ]
    },
    {
      num: "02", title: "Identity Management", topic: "Access Control",
      lessons: [
        { name: "Identity Management", duration: "45 min", type: "document" },
        { name: "Identity Management 2", duration: "45 min", type: "document" }
      ]
    },
    {
      num: "03", title: "Cyber Threat Awareness", topic: "Threat Landscape",
      lessons: [
        { name: "Cyber Threat Awareness", duration: "40 min", type: "document" }
      ]
    },
    {
      num: "04", title: "Introduction to Ethical Hacking and Coding", topic: "Offensive Security",
      lessons: [
        { name: "Introduction to Ethical Hacking and Privacy Law", duration: "55 min", type: "document" },
        { name: "Ethical Hacking Video", duration: "60 min", type: "video" }
      ]
    },
    {
      num: "05", title: "Cyber Laws and Regulations", topic: "Legal Framework",
      lessons: [
        { name: "Cyber Laws and Regulations", duration: "50 min", type: "document" },
        { name: "Cyber Laws and Regulations Quiz", duration: "20 min", type: "quiz" }
      ]
    },
    {
      num: "06", title: "Introduction to Penetration Testing", topic: "Vulnerability Assessment",
      lessons: [
        { name: "Learn Penetration Testing", duration: "30 min", type: "text" }
      ]
    },
    {
      num: "07", title: "Digital Literacy & Critical Thinking", topic: "Security Awareness",
      lessons: [
        { name: "Digital Literacy & Critical Thinking", duration: "45 min", type: "document" }
      ]
    },
    {
      num: "08", title: "Responsible Use of Social Media", topic: "Social Engineering Defense",
      lessons: [
        { name: "Responsible Use of Social Media", duration: "40 min", type: "document" }
      ]
    },
    {
      num: "09", title: "Data & Privacy Management", topic: "Data Protection",
      lessons: [
        { name: "Threat Landscape", duration: "50 min", type: "document" }
      ]
    },
    {
      num: "10", title: "Cyber Hygiene Practices", topic: "Best Practices",
      lessons: [
        { name: "Cyber Hygiene Practices", duration: "50 min", type: "document" }
      ]
    },
    {
      num: "11", title: "Cybersecurity Career Paths", topic: "Professional Development",
      lessons: [
        { name: "Career Opportunities in Cybersecurity", duration: "45 min", type: "document" },
        { name: "Building a Cybersecurity Portfolio", duration: "30 min", type: "document" },
        { name: "Preparing for Cybersecurity Interviews", duration: "40 min", type: "document" }
      ]
    },
    {
      num: "12", title: "Complimentary", topic: "Course Completion",
      lessons: [
        { name: "Course Completion Certificate", duration: "10 min", type: "document" }
      ]
    }
  ];

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-16 bg-white text-zinc-900 antialiased">
      
      {/* Hero Module Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-zinc-200 pb-12 text-left">
        <div className="lg:col-span-8 space-y-4">
          <span className="inline-block font-mono text-red-700 text-xs font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded">
            CYBERNOVR CAPACITY BUILDING PROGRAMME
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight uppercase leading-tight">
            Cybersecurity Education &amp;<br />Awareness Programme (CEAP)
          </h1>
          <p className="italic text-red-700 border-l-2 border-red-700 pl-4 py-0.5 text-base font-semibold tracking-wide">
            Our flagship education and awareness program aims to empower students with essential cybersecurity skills and awareness.
          </p>
          <p className="text-zinc-600 text-sm md:text-base max-w-2xl leading-relaxed font-normal">
            People are the largest security risk in your organization. CEAP is a structured cybersecurity training and awareness programme designed to equip employees, students, and individuals with the knowledge and skills to identify, prevent, and respond to cyber threats.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 font-mono">
            <Link href="/academy/assessments" className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-5 py-3.5 rounded-md transition-all shadow-md flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Check Your Security Knowledge
            </Link>
            <a href="https://www.cybernovr.com/courses/enroll?course=68ce2cd9a05a4b67aa4d8e2d" target="_blank" rel="noopener noreferrer" className="border-2 border-zinc-200 hover:border-purple-900 text-zinc-700 px-5 py-3.5 rounded-md text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-red-700" /> Visit Learning Portal
            </a>
          </div>
        </div>
        
        <div className="lg:col-span-4 bg-purple-950 text-white p-8 rounded-xl shadow-xl flex flex-col justify-between space-y-6 border border-purple-900/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <GraduationCap className="h-10 w-10 text-red-500" />
            <h3 className="text-lg font-bold uppercase tracking-wide mt-4">Course Overview</h3>
            <p className="text-xs text-purple-200 mt-1.5 leading-relaxed font-medium">
              Comprehensive cybersecurity education and awareness program
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 border-t border-purple-900/30 pt-4 font-mono relative z-10">
            <div>
              <p className="text-2xl font-black text-white">12</p>
              <p className="text-[9px] uppercase tracking-widest text-purple-300 font-bold">Modules</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">Hundreds</p>
              <p className="text-[9px] uppercase tracking-widest text-purple-300 font-bold">Nigerians Trained</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="bg-purple-950/[0.02] border border-purple-900/10 rounded-2xl p-8 md:p-12 shadow-sm text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-zinc-900 uppercase tracking-tight">Start Your Cybersecurity Journey Today</h2>
            <p className="text-sm text-zinc-500 font-normal leading-relaxed">
              Join hundreds of students who have transformed their careers with our Cybersecurity Education and Awareness Program (CEAP) course.
            </p>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-red-700">₦80,000</span>
              <span className="text-lg text-zinc-400 line-through">₦100,000</span>
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-500 font-bold">
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> Duration: 4 weeks</span>
              <span className="flex items-center gap-1"><BarChart3 className="h-3 w-3" /> Level: Beginner</span>
              <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> Modules: 12</span>
              <span className="flex items-center gap-1"><Award className="h-3 w-3" /> Lessons: 19</span>
            </div>
            <a href="https://www.cybernovr.com/courses/enroll?course=68ce2cd9a05a4b67aa4d8e2d" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-lg transition-all shadow-md font-mono">
              Enroll Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-tight">This course includes:</h4>
            <ul className="space-y-2">
              {["Certificate of completion", "Downloadable resources", "Instructor support"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                  <CheckCircle2 className="h-4 w-4 text-red-700 shrink-0" /> {item}
                </li>
              ))}
            </ul>
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
            Visit our strategic impact dashboard.
          </p>
        </div>
        <Link 
          href="/impact-dashboard" 
          className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-lg text-center transition-all whitespace-nowrap shadow-sm font-mono flex items-center justify-center gap-2 group"
        >
          Visit Impact Dashboard <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Course Curriculum Architecture Section */}
      <section className="space-y-6 text-left">
        <div className="border-b border-zinc-100 pb-2">
          <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400">CEAP CURRICULUM</h2>
        </div>
        <div className="space-y-3">
          {courseModules.map((mod, idx) => {
            const isOpen = openModule === idx;
            return (
              <div key={idx} className="bg-purple-950/[0.02] border border-purple-900/10 rounded-xl overflow-hidden hover:border-purple-900/30 transition-all shadow-sm">
                <button
                  onClick={() => setOpenModule(isOpen ? null : idx)}
                  className="w-full p-4 flex items-center gap-4 text-left hover:bg-purple-950/[0.04] transition-colors"
                >
                  <span className="font-mono text-sm font-black text-red-700 bg-purple-950/[0.04] border border-purple-900/10 px-2.5 py-1 rounded shrink-0">
                    {mod.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-zinc-900 leading-snug uppercase tracking-tight">{mod.title}</h4>
                    <p className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider">{mod.topic}</p>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-zinc-400 shrink-0">{mod.lessons.length} lesson{mod.lessons.length > 1 ? "s" : ""}</span>
                  <ChevronDown className={`h-4 w-4 text-zinc-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="border-t border-purple-900/10 bg-white">
                    {mod.lessons.map((lesson, lIdx) => (
                      <div key={lIdx} className={`flex items-center gap-3 px-4 py-3 text-xs ${lIdx < mod.lessons.length - 1 ? "border-b border-zinc-100" : ""}`}>
                        <span className="font-mono text-[10px] font-bold text-zinc-400 w-5 text-right shrink-0">{lIdx + 1}</span>
                        <span className="flex-1 text-zinc-700 font-medium">{lesson.name}</span>
                        <span className="text-[10px] font-mono text-zinc-400 shrink-0">{lesson.duration}</span>
                        <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded shrink-0 ${
                          lesson.type === "video" ? "text-red-700 bg-red-50" :
                          lesson.type === "quiz" ? "text-amber-700 bg-amber-50" :
                          lesson.type === "text" ? "text-blue-700 bg-blue-50" :
                          "text-zinc-500 bg-zinc-100"
                        }`}>{lesson.type}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
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
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 uppercase">Start Your Cybersecurity Journey Today</h2>
          <p className="text-xs text-zinc-500 max-w-md mx-auto font-medium">
            Join hundreds of students who have transformed their careers with our CEAP course.
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
                <label className="text-xs font-bold text-zinc-400 font-mono uppercase tracking-wider">Email *</label>
                <input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal" placeholder="you@company.com" type="email" required />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-400 font-mono uppercase tracking-wider">School / Organization *</label>
                <input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal" placeholder="Organization footprint name" type="text" required />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-400 font-mono uppercase tracking-wider">Phone Number *</label>
                <input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal" placeholder="Contact number" type="tel" inputMode="numeric" pattern="[0-9+\-\s()]+" title="Please enter a valid phone number" onKeyDown={(e) => { if (!/[0-9+\-\s()]/.test(e.key) && !['Backspace','Delete','Tab','ArrowLeft','ArrowRight'].includes(e.key)) { e.preventDefault(); } }} required />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-400 font-mono uppercase tracking-wider block">Comment</label>
              <textarea rows={4} className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-4 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all resize-none font-normal" placeholder="Please describe your cybersecurity training needs" />
            </div>
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-black uppercase tracking-widest rounded-lg shadow-md transition-all text-xs font-mono">
              Submit Enrollment Request
            </button>
          </form>
        )}
      </section>

    </div>
  );
}
