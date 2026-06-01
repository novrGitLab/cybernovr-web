"use client";
import React from "react";

export default function IncidentResponsePage() {
  const escalationSteps = [
    {
      phase: "01 / TRIAX",
      title: "Immediate Triage & Isolation",
      desc: "Our elite global operations force deploys container scripts within minutes of alert validation to instantly isolate compromised boundary segments and stop active data transit."
    },
    {
      phase: "02 / ANOMALY",
      title: "Payload Extraction & Analytics",
      desc: "Deep forensic evaluation mapping of memory dumps and system log captures to reverse-engineer attack signatures and neutralize complex malware structures."
    },
    {
      phase: "03 / MATRIX",
      title: "System Restoration & Hardening",
      desc: "Systematic infrastructure rebuilding using automated compliance layers, ensuring all nodes return to optimal production baselines without trace vulnerabilities."
    }
  ];

  return (
    <div className="pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto">
      
      {/* Top Header Section with original inline layout typography structure */}
      <div className="border-b border-outline-variant/20 pb-10 mb-16 max-w-4xl">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-on-background uppercase">INCIDENT RESPONSE BY</h1>
          <img src="/logo.png" alt="" className="h-8 w-auto object-contain" />
        </div>
        <p className="italic text-primary border-l-4 border-primary pl-6 py-1 mb-6 text-xl font-bold">
          Emergency Escalation, Rapid Containment & Systemic Reconstruction
        </p>
        <p className="text-on-surface-variant text-base leading-relaxed">
          When an unmapped compromise vector hits your perimeter network, speed and precision determine structural survival. Our rapid-deployment forensic task forces operate 24/7/365 out of our Lagos and London defense centers to neutralize active network security threats.
        </p>
      </div>

      {/* Emergency Hotline Alert Banner */}
      <div className="bg-inverse-surface border-l-[12px] border-primary rounded-r-lg p-10 text-white mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden shadow-xl">
        <div className="space-y-2 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-primary bg-primary/20 px-3 py-1 rounded">CRITICAL CRISIS ALERT</span>
          <h2 className="text-2xl font-black uppercase tracking-tight">Active Infiltration Event Underway?</h2>
          <p className="text-sm opacity-75 max-w-xl">Bypass standard support logs. Activating this hotline connects you directly to a standby security responder instantly.</p>
        </div>
        <div className="text-left md:text-right relative z-10 shrink-0">
          <p className="text-xs opacity-50 uppercase tracking-widest font-bold">EMERGENCY BREACH HOTLINE</p>
          <a href="tel:+23418880911" className="text-2xl md:text-3xl font-mono font-black text-primary hover:underline select-all">+234 (0) 1 888 0911</a>
        </div>
      </div>

      {/* Tactical Escalation Path Panels */}
      <section className="space-y-8 max-w-4xl">
        <h3 className="text-xl font-black text-on-background uppercase tracking-wider mb-6">Containment Protocol Timeline</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {escalationSteps.map((step, idx) => (
            <div key={idx} className="bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
              <span className="font-mono text-xs font-black text-primary block mb-3">{step.phase}</span>
              <h4 className="text-lg font-bold text-on-surface mb-3">{step.title}</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed opacity-90">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}