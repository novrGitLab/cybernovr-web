"use client";
import React, { useState } from "react";
import { Brain, Eye, Globe, ShieldAlert, CheckCircle2, Building2, Mail, User, FileText } from "lucide-react";

const TOPICS = [
  { value: "iam", label: "Identity & Access Management" },
  { value: "data_privacy", label: "Data Privacy" },
  { value: "cloud_security", label: "Cloud Security" },
  { value: "network_security", label: "Network Security" },
  { value: "endpoint", label: "Endpoint Protection" },
  { value: "incident_response", label: "Incident Response" },
  { value: "threat_intel", label: "Threat Intelligence" },
  { value: "compliance", label: "Compliance & Governance" },
  { value: "appsec", label: "Application Security" },
  { value: "ot_ics", label: "OT/ICS Security" },
];

const SECTORS = [
  { value: "banking", label: "Banking & Finance" },
  { value: "telecom", label: "Telecommunications" },
  { value: "fintech", label: "Fintech" },
  { value: "energy", label: "Energy & Utilities" },
  { value: "government", label: "Government" },
  { value: "education", label: "Education" },
  { value: "health", label: "Healthcare" },
  { value: "oil_gas", label: "Oil & Gas" },
  { value: "manufacturing", label: "Manufacturing" },
];

const LOCATIONS = [
  { value: "nigeria", label: "Nigeria" },
  { value: "ghana", label: "Ghana" },
  { value: "kenya", label: "Kenya" },
  { value: "south_africa", label: "South Africa" },
  { value: "uk", label: "United Kingdom" },
  { value: "us", label: "United States" },
];

const TIERS = [
  {
    id: "starter",
    name: "Starter",
    price: "$7",
    period: "/mo",
    features: ["Basic threat alerts", "3 topic areas", "Email delivery", "Weekly digest"],
  },
  {
    id: "professional",
    name: "Professional",
    price: "$15",
    period: "/mo",
    features: ["Full threat coverage", "All topics & sectors", "API access", "Real-time alerts", "Dark web monitoring"],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["Dedicated tenant", "Custom integrations", "Priority support", "Tailored intelligence", "SLA guarantee"],
  },
];

export default function NovrALERTPage() {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [topics, setTopics] = useState<string[]>([]);
  const [sectors, setSectors] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [cnii, setCnii] = useState(false);
  const [tier, setTier] = useState<string | null>(null);

  const toggleMulti = (arr: string[], setArr: (v: string[]) => void, value: string) => {
    setArr(arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]);
  };

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!firstName.trim()) e.firstName = "Please enter your name";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Please enter a valid work email";
    if (topics.length === 0) e.topics = "Select at least one topic";
    if (sectors.length === 0) e.sectors = "Select at least one sector";
    if (locations.length === 0) e.locations = "Select at least one location";
    if (!tier) e.tier = "Please select a plan";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      // Simulate submission — backend integration pending
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSucceeded(true);
    } catch (err) {
      console.error("Subscription error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const pillars = [
    { icon: Brain, title: "AI-Curated Alerts", desc: "Machine learning algorithms filter and prioritize threats specific to your organization's profile." },
    { icon: Eye, title: "Dark Web Monitoring", desc: "Continuous surveillance of dark web forums, marketplaces, and leak sites for compromised data." },
    { icon: Globe, title: "Industry-Specific Filtering", desc: "Intelligence filtered by your sector, location, and technology stack for maximum relevance." },
    { icon: ShieldAlert, title: "CNII Coverage", desc: "Specialized monitoring for Critical National Information Infrastructure across Africa and beyond." },
  ];

  const checkboxClass = (checked: boolean) =>
    `flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-bold uppercase tracking-wider cursor-pointer transition-all ${
      checked
        ? "bg-red-600 border-red-600 text-white"
        : "bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-300"
    }`;

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-20 w-full bg-white text-zinc-900 antialiased">

      {/* Hero */}
      <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left">
        <span className="inline-block font-mono text-red-700 text-xs font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded mb-4">
          Threat Intelligence Service
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-2">
          NovrALERT
        </h1>
        <p className="text-xs md:text-sm font-bold text-zinc-400 uppercase tracking-widest font-mono">
          PERSONALIZED CYBERSECURITY INTELLIGENCE DELIVERY
        </p>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed pt-6 font-normal">
          AI-powered subscription-based threat intelligence delivering curated alerts, advisories, and dark web monitoring tailored to your industry, topics, and location preferences.
        </p>
      </div>

      {/* Features */}
      <section className="space-y-6 text-left">
        <h2 className="text-sm md:text-[15px] font-black uppercase tracking-widest text-zinc-400">Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl flex gap-4 items-start hover:border-purple-900/20 transition-all duration-300 shadow-sm">
                <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-zinc-900 uppercase tracking-tight">{p.title}</h3>
                  <p className="text-zinc-600 text-xs md:text-sm leading-relaxed font-normal">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Subscription Form */}
      <section className="bg-zinc-950 text-white rounded-2xl border border-zinc-900 p-8 md:p-12 shadow-2xl max-w-4xl mx-auto text-left">
        <div className="mb-8 space-y-1">
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">Subscribe to NovrALERT</h3>
          <p className="text-xs text-zinc-400 font-medium leading-relaxed">Configure your threat intelligence preferences and choose a plan.</p>
        </div>

        {succeeded ? (
          <div className="py-10 text-center flex flex-col items-center justify-center space-y-3">
            <CheckCircle2 className="h-12 w-12 text-emerald-500 animate-bounce" />
            <h4 className="text-[15px] font-black uppercase tracking-wide text-white">Subscription Confirmed</h4>
            <p className="text-xs text-zinc-400 max-w-xs mx-auto font-medium">
              Welcome to NovrALERT. Your personalized threat intelligence feed will begin shortly.
            </p>
            <button onClick={() => { setSucceeded(false); setFirstName(""); setEmail(""); setCompany(""); setTopics([]); setSectors([]); setLocations([]); setCnii(false); setTier(null); }} className="text-[13px] text-red-500 hover:text-red-400 font-mono font-bold uppercase tracking-wider mt-2">
              Subscribe Another Account
            </button>
          </div>
        ) : (
          <form className="space-y-8" onSubmit={handleSubmit} noValidate>

            {/* Contact Fields */}
            <div className="space-y-4">
              <h4 className="text-xs font-black text-zinc-500 uppercase tracking-widest font-mono">Contact Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider flex items-center gap-1.5"><User className="h-3 w-3" /> Your Name *</label>
                  <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Full name" className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all font-medium" />
                  {errors.firstName && <p className="text-red-400 text-[11px] font-mono">{errors.firstName}</p>}
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider flex items-center gap-1.5"><Mail className="h-3 w-3" /> Work Email *</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all font-medium" />
                  {errors.email && <p className="text-red-400 text-[11px] font-mono">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider flex items-center gap-1.5"><Building2 className="h-3 w-3" /> Company</label>
                <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Organization name (optional)" className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 transition-all font-medium" />
              </div>
            </div>

            {/* Topics */}
            <div className="space-y-3">
              <h4 className="text-xs font-black text-zinc-500 uppercase tracking-widest font-mono">Cybersecurity Topics *</h4>
              <div className="flex flex-wrap gap-2">
                {TOPICS.map((t) => (
                  <label key={t.value} className={checkboxClass(topics.includes(t.value))}>
                    <input type="checkbox" className="sr-only" checked={topics.includes(t.value)} onChange={() => toggleMulti(topics, setTopics, t.value)} />
                    {t.label}
                  </label>
                ))}
              </div>
              {errors.topics && <p className="text-red-400 text-[11px] font-mono">{errors.topics}</p>}
            </div>

            {/* Sectors */}
            <div className="space-y-3">
              <h4 className="text-xs font-black text-zinc-500 uppercase tracking-widest font-mono">Industry Sector *</h4>
              <div className="flex flex-wrap gap-2">
                {SECTORS.map((s) => (
                  <label key={s.value} className={checkboxClass(sectors.includes(s.value))}>
                    <input type="checkbox" className="sr-only" checked={sectors.includes(s.value)} onChange={() => toggleMulti(sectors, setSectors, s.value)} />
                    {s.label}
                  </label>
                ))}
              </div>
              {errors.sectors && <p className="text-red-400 text-[11px] font-mono">{errors.sectors}</p>}
            </div>

            {/* Locations */}
            <div className="space-y-3">
              <h4 className="text-xs font-black text-zinc-500 uppercase tracking-widest font-mono">Location *</h4>
              <div className="flex flex-wrap gap-2">
                {LOCATIONS.map((l) => (
                  <label key={l.value} className={checkboxClass(locations.includes(l.value))}>
                    <input type="checkbox" className="sr-only" checked={locations.includes(l.value)} onChange={() => toggleMulti(locations, setLocations, l.value)} />
                    {l.label}
                  </label>
                ))}
              </div>
              {errors.locations && <p className="text-red-400 text-[11px] font-mono">{errors.locations}</p>}
            </div>

            {/* CNII Toggle */}
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => setCnii(!cnii)} className={`relative w-11 h-6 rounded-full transition-colors ${cnii ? "bg-red-600" : "bg-zinc-700"}`}>
                <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${cnii ? "translate-x-5" : ""}`} />
              </button>
              <span className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider">Include CNII Coverage</span>
            </div>

            {/* Tier Selection */}
            <div className="space-y-3">
              <h4 className="text-xs font-black text-zinc-500 uppercase tracking-widest font-mono">Subscription Plan *</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {TIERS.map((t) => (
                  <button key={t.id} type="button" onClick={() => setTier(t.id)} className={`text-left p-5 rounded-xl border-2 transition-all ${
                    tier === t.id
                      ? "border-red-600 bg-red-600/10"
                      : "border-zinc-800 bg-zinc-900 hover:border-zinc-600"
                  }`}>
                    <p className="text-xs font-black text-zinc-400 uppercase tracking-widest font-mono">{t.name}</p>
                    <p className="text-2xl font-extrabold text-white mt-1">{t.price}<span className="text-xs text-zinc-500 font-normal">{t.period}</span></p>
                    <ul className="mt-3 space-y-1">
                      {t.features.map((f, i) => (
                        <li key={i} className="text-[11px] text-zinc-400 font-medium flex items-center gap-1.5">
                          <CheckCircle2 className="h-3 w-3 text-red-500 shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                  </button>
                ))}
              </div>
              {errors.tier && <p className="text-red-400 text-[11px] font-mono">{errors.tier}</p>}
            </div>

            <button type="submit" disabled={submitting} className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-black uppercase tracking-widest rounded shadow-xl transition-all text-xs font-mono disabled:opacity-50 disabled:cursor-not-allowed">
              {submitting ? "Subscribing..." : "Subscribe Now"}
            </button>
          </form>
        )}
      </section>

    </div>
  );
}
