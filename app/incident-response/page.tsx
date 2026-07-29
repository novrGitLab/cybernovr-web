"use client";
import React from "react";
import { AlertOctagon, ShieldAlert, Database, Lock, RotateCcw, AlertTriangle, Phone, Mail } from "lucide-react";

export default function IncidentResponsePage() {
  const escalationSteps = [
    {
      phase: "01 / SEGMENT",
      title: "Network Segmentation",
      desc: "Isolate affected network segments to prevent lateral movement of threats across your infrastructure.",
      icon: ShieldAlert
    },
    {
      phase: "02 / CONTAIN",
      title: "Network Segmentation & Traffic Control",
      desc: "Disconnect critical backups, operational technology, and core databases from infected production networks, reconfigure Firewall Rules, and restrict lateral movement by isolating compromised servers.",
      icon: Lock
    },
    {
      phase: "03 / PRESERVE",
      title: "Evidence Preservation",
      desc: "We capture volatile data and log all containment actions to store forensic data.",
      icon: Database
    },
    {
      phase: "04 / RESTORE",
      title: "System Restoration & Hardening",
      desc: "Systematically restore affected systems to operational state with hardened configurations and enhanced monitoring.",
      icon: RotateCcw
    },
    {
      phase: "05 / IDENTIFY",
      title: "Identify Root Cause & Notify",
      desc: "Identify the Root Cause, review and notify appropriate stakeholders (management), and follow regulatory guidelines.",
      icon: AlertTriangle
    }
  ];

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto w-full bg-white text-zinc-900 antialiased">
      
      {/* Top Header Section */}
      <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-zinc-900 uppercase">INCIDENT RESPONSE BY</h1>
          <img src="/logo.png" alt="CYBERNOVR" width={1080} height={247} className="h-10 w-auto object-contain" />
        </div>
        <p className="italic text-red-700 border-l-2 border-red-700 pl-4 py-0.5 text-[13px] md:text-[15px] font-semibold tracking-wide">
          Emergency Escalation, Rapid Containment &amp; Systemic Reconstruction
        </p>
        <p className="text-zinc-600 text-[13px] md:text-[15px] leading-relaxed mt-4 font-normal">
          We offer a comprehensive suite of services designed to effectively monitor, detect, respond to, and recover from threats and incidents. Our solutions cover the full spectrum of incident response readiness, ensuring that organizations are well-prepared to handle any cyber threat.
        </p>
      </div>

      {/* Emergency Hotline Alert Banner */}
      <div className="bg-zinc-950 border-l-[6px] border-red-600 rounded-xl p-8 text-white mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden shadow-2xl border border-zinc-900 text-left">
        <div className="space-y-2 relative z-10">
          <span className="text-[13px] font-mono font-black tracking-widest text-red-500 bg-red-600/10 border border-red-500/20 px-2.5 py-1 rounded uppercase flex items-center gap-1.5 w-fit">
            <AlertOctagon className="h-3 w-3 animate-pulse" /> Critical Crisis Alert
          </span>
          <h2 className="text-[13px] md:text-[15px] font-black uppercase tracking-tight text-white pt-1">ARE YOU UNDER ATTACK?</h2>
          <p className="text-[13px] text-zinc-400 font-medium max-w-xl">Contact this hotline to connect to our standby SOC responder.</p>
        </div>
        <div className="text-left md:text-right relative z-10 shrink-0 space-y-1 font-mono">
          <p className="text-[13px] text-zinc-500 uppercase tracking-widest font-black">24/7 EMERGENCY RESPONSE LINE</p>
          <div className="flex items-center gap-2 justify-start md:justify-end">
            <Phone className="h-4 w-4 text-red-500 shrink-0" />
            <a href="tel:09016991201" className="text-xl md:text-3xl font-black text-red-500 hover:text-red-400 transition-colors select-all tracking-tight">09016991201</a>
          </div>
          <div className="flex items-center gap-2 justify-start md:justify-end">
            <Mail className="h-4 w-4 text-zinc-400 shrink-0" />
            <a href="mailto:info@cybernovr.com" className="text-sm md:text-base font-bold text-zinc-300 hover:text-red-400 transition-colors tracking-tight">info@cybernovr.com</a>
          </div>
        </div>
      </div>

      {/* Tactical Escalation Path Panels */}
      <section className="space-y-6 text-left ">
        <div className="border-b border-zinc-100 pb-2">
          <h3 className="text-sm md:text-[15px] font-black uppercase tracking-widest text-zinc-400 font-mono">Containment Protocol Process</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {escalationSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl space-y-4 hover:border-purple-900/30 transition-all duration-300 shadow-sm group">
                <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                <span className="font-mono text-[13px] font-black text-red-700 block mb-1">{step.phase}</span>
                <h4 className="text-[15px] font-bold text-zinc-900 uppercase tracking-tight group-hover:text-red-700 transition-colors">{step.title}</h4>
                <p className="text-zinc-600 text-[11px] md:text-[13px] leading-relaxed mt-2 font-normal">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mt-16 bg-zinc-950 border border-zinc-800 rounded-xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-transparent to-purple-950/20 pointer-events-none" />
        <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
          <h3 className="text-xl md:text-3xl font-black uppercase tracking-tight text-white">Don't Wait Until It's Too Late</h3>
          <p className="text-zinc-400 text-[13px] md:text-[15px] leading-relaxed">
            Every second counts during a cyber incident. Our rapid response team is ready 24/7 to help you contain threats, preserve evidence, and restore your systems. Get in touch now to strengthen your incident readiness.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="tel:09016991201"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-lg transition-colors shadow-lg"
            >
              <AlertOctagon className="h-4 w-4" />
              Report an Incident
            </a>
            <a
              href="/contacts"
              className="inline-flex items-center gap-2 border border-zinc-600 hover:border-red-500 text-zinc-300 hover:text-red-400 font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
