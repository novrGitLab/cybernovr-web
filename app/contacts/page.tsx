"use client";
import React, { useState } from "react";

export default function ContactUsPage() {
  const [activeField, setActiveField] = useState<string | null>(null);

  const contactMethods = [
    {
      title: "Direct Advisory",
      desc: "Speak directly with our senior lead threat architects.",
      icon: "support_agent",
      detail: "advisory@cybernovr.com"
    },
    {
      title: "Incident Response Hotline",
      desc: "Emergency breach escalation protocols for global networks.",
      icon: "crisis_alert",
      detail: "+234 (0) 1 888 0911"
    },
    {
      title: "Sovereign HQ",
      desc: "Main institutional operations hub center.",
      icon: "location_on",
      detail: "Victoria Island, Lagos, Nigeria"
    }
  ];

  return (
    <div className="pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto min-h-screen">
      
      {/* Top Main Heading incorporating inline layout brand tokens */}
      <div className="border-b border-outline-variant/20 pb-10 mb-16 max-w-4xl">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-on-background">CONNECT WITH</h1>
          <img src="/logo.png" alt="" className="h-8 w-auto object-contain" />
        </div>
        <p className="italic text-primary border-l-4 border-primary pl-6 py-1 mb-6 text-xl font-bold">
          Institutional Availability & Systematic Escalation
        </p>
        <p className="text-on-surface-variant text-base leading-relaxed">
          Initialize a secure channel with our digital defense teams. Whether you are coordinating a regular infrastructure audit, scaling compliance controls, or escalating an active system compromise, our principals are standing by.
        </p>
      </div>

      {/* Main Content Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
        
        {/* Left Information Column */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-12 bg-surface-container-low p-10 rounded-lg border border-outline-variant/10">
          <div className="space-y-8">
            <h2 className="text-2xl font-black text-on-background uppercase tracking-tight">Communications Registry</h2>
            <div className="space-y-6">
              {contactMethods.map((method, idx) => (
                <div key={idx} className="flex gap-4 items-start p-4 bg-surface-container-lowest rounded border border-outline-variant/20">
                  <div className="bg-primary/10 p-3 rounded text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">{method.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface text-base mb-1">{method.title}</h4>
                    <p className="text-xs text-on-surface-variant mb-2">{method.desc}</p>
                    <span className="font-mono text-sm font-bold text-primary select-all">{method.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Badge */}
          <div className="pt-6 border-t border-outline-variant/30 flex items-center gap-3 text-primary">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>encrypted</span>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              End-to-End Encrypted Intake Protocols
            </p>
          </div>
        </div>

        {/* Right Interaction Form Matrix */}
        <div className="lg:col-span-7 bg-inverse-surface text-white rounded-lg p-10 md:p-12 relative overflow-hidden flex flex-col justify-center shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="mb-10">
            <h3 className="text-3xl font-black uppercase tracking-tight mb-2">Initialize Audit Protocol</h3>
            <p className="text-sm text-surface-variant/80">Submit your corporate matrix criteria to generate an operational quote response.</p>
          </div>

          <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert("Security audit protocol initiated."); }}>
            
            {/* Full Name Input */}
            <div className="relative border-b border-white/20 pb-2 transition-colors duration-300" style={{ borderColor: activeField === "name" ? "#8f0100" : "" }}>
              <label className="block text-xs uppercase tracking-wider transition-colors duration-300 mb-1" style={{ color: activeField === "name" ? "#8f0100" : "rgba(255,255,255,0.6)" }}>
                Full Name
              </label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-transparent border-0 p-0 text-white placeholder:text-white/20 text-sm focus:ring-0 outline-none"
                onFocus={() => setActiveField("name")}
                onBlur={() => setActiveField(null)}
                required
              />
            </div>

            {/* Corporate Email Input */}
            <div className="relative border-b border-white/20 pb-2 transition-colors duration-300" style={{ borderColor: activeField === "email" ? "#8f0100" : "" }}>
              <label className="block text-xs uppercase tracking-wider transition-colors duration-300 mb-1" style={{ color: activeField === "email" ? "#8f0100" : "rgba(255,255,255,0.6)" }}>
                Corporate Email
              </label>
              <input 
                type="email" 
                placeholder="j.doe@enterprise.com" 
                className="w-full bg-transparent border-0 p-0 text-white placeholder:text-white/20 text-sm focus:ring-0 outline-none"
                onFocus={() => setActiveField("email")}
                onBlur={() => setActiveField(null)}
                required
              />
            </div>

            {/* Company Parameters Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Company Domain */}
              <div className="relative border-b border-white/20 pb-2 transition-colors duration-300" style={{ borderColor: activeField === "domain" ? "#8f0100" : "" }}>
                <label className="block text-xs uppercase tracking-wider transition-colors duration-300 mb-1" style={{ color: activeField === "domain" ? "#8f0100" : "rgba(255,255,255,0.6)" }}>
                  Company Domain
                </label>
                <input 
                  type="text" 
                  placeholder="enterprise.com" 
                  className="w-full bg-transparent border-0 p-0 text-white placeholder:text-white/20 text-sm focus:ring-0 outline-none"
                  onFocus={() => setActiveField("domain")}
                  onBlur={() => setActiveField(null)}
                  required
                />
              </div>

              {/* Industry Dropdown Selection */}
              <div className="relative border-b border-white/20 pb-2 transition-colors duration-300" style={{ borderColor: activeField === "industry" ? "#8f0100" : "" }}>
                <label className="block text-xs uppercase tracking-wider transition-colors duration-300 mb-1" style={{ color: activeField === "industry" ? "#8f0100" : "rgba(255,255,255,0.6)" }}>
                  Industry Vertical
                </label>
                <select 
                  className="w-full bg-transparent border-0 p-0 text-white text-sm focus:ring-0 outline-none appearance-none cursor-pointer"
                  onFocus={() => setActiveField("industry")}
                  onBlur={() => setActiveField(null)}
                  required
                >
                  <option className="bg-inverse-surface text-white" value="" disabled selected>Select Sector</option>
                  <option className="bg-inverse-surface text-white" value="finance">Banking &amp; Finance</option>
                  <option className="bg-inverse-surface text-white" value="telecoms">Telecommunications</option>
                  <option className="bg-inverse-surface text-white" value="technology">Technology &amp; Fintech</option>
                  <option className="bg-inverse-surface text-white" value="government">Sovereign &amp; Public State</option>
                </select>
              </div>

            </div>

            {/* Action Trigger Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-primary text-white py-4 font-bold uppercase tracking-widest text-xs rounded hover:bg-red-800 transition-all active:scale-[0.98] shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              <span>Initialize Security Audit</span>
              <span className="material-symbols-outlined text-sm">send</span>
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}