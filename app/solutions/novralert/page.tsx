"use client";
import React, { useState, useMemo } from "react";
import Script from "next/script";
import { Brain, Eye, Globe, ShieldAlert, CheckCircle2, Building2, Mail, User, Zap, Crown, Lock } from "lucide-react";
import { TOPICS, SECTORS, LOCATIONS, TIERS } from "@/app/novralert-options";

const PAYSTACK_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ?? "";

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
  const [error, setError] = useState("");

  const selectedTier = useMemo(() => TIERS.find((t) => t.value === tier) ?? null, [tier]);

  const toggleTopic = (value: string) => {
    setTopics((prev) => {
      if (prev.includes(value)) return prev.filter((v) => v !== value);
      if (selectedTier && prev.length >= selectedTier.maxTopics) return prev;
      return [...prev, value];
    });
  };

  const toggleSector = (value: string) => {
    setSectors((prev) => {
      if (prev.includes(value)) return prev.filter((v) => v !== value);
      if (selectedTier && prev.length >= selectedTier.maxSectors) return prev;
      return [...prev, value];
    });
  };

  const toggleLocation = (value: string) => {
    setLocations((prev) => {
      if (prev.includes(value)) return prev.filter((v) => v !== value);
      if (selectedTier && prev.length >= selectedTier.maxLocations) return prev;
      return [...prev, value];
    });
  };

  const handleTierSelect = (value: string) => {
    setTier(value);
    setErrors({});
    const t = TIERS.find((ti) => ti.value === value);
    if (t) {
      setTopics((prev) => prev.slice(0, t.maxTopics));
      setSectors((prev) => prev.slice(0, t.maxSectors));
      setLocations((prev) => prev.slice(0, t.maxLocations));
      if (!t.allowsCnii) setCnii(false);
    }
  };

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!firstName.trim()) e.firstName = "Please enter your name";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Please enter a valid work email";
    if (!tier) e.tier = "Please select a plan";
    if (topics.length === 0) e.topics = "Select at least one topic";
    if (sectors.length === 0) e.sectors = "Select at least one sector";
    if (locations.length === 0) e.locations = "Select at least one location";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: firstName, email, company, topics, sectors, locations, cnii, tier }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message || "Subscription failed");

      if (tier === "free") {
        setSucceeded(true);
      } else {
        initPaystack(json.subscriberId);
      }
    } catch (err) {
      console.error("Subscription error:", err);
      setError(err instanceof Error ? err.message : "Subscription failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const initPaystack = (subscriberId: string) => {
    const amountKobo = tier === "pro" ? 24000 * 100 : 11000 * 100;
    const handler = (window as unknown as { PaystackPop: { setup: (config: Record<string, unknown>) => { openIframe: () => void } } }).PaystackPop.setup({
      key: PAYSTACK_KEY,
      email,
      amount: amountKobo,
      currency: "NGN",
      metadata: { subscriber_id: subscriberId, plan: tier },
      callback: () => {
        setSucceeded(true);
      },
      onClose: () => {
        setError("Payment was cancelled. Your subscription is saved but not yet active.");
      },
    });
    handler.openIframe();
  };

  const pillars = [
    { icon: Brain, title: "AI-Curated Alerts", desc: "Machine learning algorithms filter and prioritize threats specific to your organization's profile." },
    { icon: Eye, title: "Dark Web Monitoring", desc: "Continuous surveillance of dark web forums, marketplaces, and leak sites for compromised data." },
    { icon: Globe, title: "Industry-Specific Filtering", desc: "Intelligence filtered by your sector, location, and technology stack for maximum relevance." },
    { icon: ShieldAlert, title: "CNII Coverage", desc: "Specialized monitoring for Critical National Information Infrastructure across Africa and beyond." },
  ];

  const tierIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    free: Zap,
    starter: Crown,
    pro: ShieldAlert,
  };

  const checkboxClass = (checked: boolean, disabled = false) =>
    `flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-bold uppercase tracking-wider transition-all ${
      disabled
        ? "bg-zinc-950 border-zinc-800 text-zinc-600 cursor-not-allowed opacity-40"
        : checked
          ? "bg-red-600 border-red-600 text-white cursor-pointer"
          : "bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-300 cursor-pointer"
    }`;

  const atMax = (current: number, max: number) => current >= max;

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-20 w-full bg-white text-zinc-900 antialiased">

      <Script src="https://js.paystack.co/v1/inline.js" strategy="lazyOnload" />

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
          <p className="text-xs text-zinc-400 font-medium leading-relaxed">Choose a plan, then configure your threat intelligence preferences.</p>
        </div>

        {succeeded ? (
          <div className="py-10 text-center flex flex-col items-center justify-center space-y-3">
            <CheckCircle2 className="h-12 w-12 text-emerald-500 animate-bounce" />
            <h4 className="text-[15px] font-black uppercase tracking-wide text-white">
              {tier === "free" ? "Subscription Confirmed" : "Payment Successful"}
            </h4>
            <p className="text-xs text-zinc-400 max-w-xs mx-auto font-medium">
              {tier === "free"
                ? "Welcome to NovrALERT. Your personalized threat intelligence feed will begin shortly."
                : "Your subscription is now active. You'll receive your first digest shortly."}
            </p>
            <button onClick={() => { setSucceeded(false); setError(""); setFirstName(""); setEmail(""); setCompany(""); setTopics([]); setSectors([]); setLocations([]); setCnii(false); setTier(null); }} className="text-[13px] text-red-500 hover:text-red-400 font-mono font-bold uppercase tracking-wider mt-2">
              Subscribe Another Account
            </button>
          </div>
        ) : (
          <form className="space-y-8" onSubmit={handleSubmit} noValidate>

            {/* Step 1: Plan Selection */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-black">1</span>
                <h4 className="text-xs font-black text-zinc-500 uppercase tracking-widest font-mono">Choose Your Plan</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {TIERS.map((t) => {
                  const TierIcon = tierIcons[t.value] ?? Zap;
                  const isSelected = tier === t.value;
                  return (
                    <button key={t.value} type="button" onClick={() => handleTierSelect(t.value)} className={`text-left p-5 rounded-xl border-2 transition-all ${
                      isSelected
                        ? "border-red-600 bg-red-600/10 shadow-lg shadow-red-600/10"
                        : "border-zinc-800 bg-zinc-900 hover:border-zinc-600"
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <TierIcon className={`h-4 w-4 ${isSelected ? "text-red-500" : "text-zinc-500"}`} />
                        <p className="text-xs font-black text-zinc-400 uppercase tracking-widest font-mono">{t.name}</p>
                      </div>
                      <p className="text-2xl font-extrabold text-white">{t.price}<span className="text-xs text-zinc-500 font-normal">{t.period}</span></p>
                      <p className="text-[11px] text-zinc-500 font-medium mt-0.5">{t.audience}</p>
                      <ul className="mt-3 space-y-1">
                        {t.features.map((f, i) => (
                          <li key={i} className="text-[11px] text-zinc-400 font-medium flex items-start gap-1.5">
                            <CheckCircle2 className="h-3 w-3 text-red-500 shrink-0 mt-0.5" /> {f}
                          </li>
                        ))}
                      </ul>
                    </button>
                  );
                })}
              </div>
              {errors.tier && <p className="text-red-400 text-[11px] font-mono">{errors.tier}</p>}
            </div>

            {selectedTier && (
              <>
                {/* Step 2: Contact Fields */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-black">2</span>
                    <h4 className="text-xs font-black text-zinc-500 uppercase tracking-widest font-mono">Contact Information</h4>
                  </div>
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

                {/* Step 3: Preferences */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-black">3</span>
                    <h4 className="text-xs font-black text-zinc-500 uppercase tracking-widest font-mono">Threat Intelligence Preferences</h4>
                  </div>

                  {/* Topics */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-black text-zinc-500 uppercase tracking-widest font-mono">Cybersecurity Topics *</h4>
                      {selectedTier.maxTopics < Infinity && (
                        <span className="text-[11px] text-zinc-500 font-mono">({topics.length}/{selectedTier.maxTopics})</span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {TOPICS.map((t) => {
                        const checked = topics.includes(t.value);
                        const disabled = !checked && atMax(topics.length, selectedTier.maxTopics);
                        return (
                          <label key={t.value} className={checkboxClass(checked, disabled)}>
                            <input type="checkbox" className="sr-only" checked={checked} disabled={disabled} onChange={() => toggleTopic(t.value)} />
                            {t.label}
                          </label>
                        );
                      })}
                    </div>
                    {errors.topics && <p className="text-red-400 text-[11px] font-mono">{errors.topics}</p>}
                  </div>

                  {/* Sectors */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-black text-zinc-500 uppercase tracking-widest font-mono">Industry Sector *</h4>
                      {selectedTier.maxSectors < Infinity && (
                        <span className="text-[11px] text-zinc-500 font-mono">({sectors.length}/{selectedTier.maxSectors})</span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {SECTORS.map((s) => {
                        const checked = sectors.includes(s.value);
                        const disabled = !checked && atMax(sectors.length, selectedTier.maxSectors);
                        return (
                          <label key={s.value} className={checkboxClass(checked, disabled)}>
                            <input type="checkbox" className="sr-only" checked={checked} disabled={disabled} onChange={() => toggleSector(s.value)} />
                            {s.label}
                          </label>
                        );
                      })}
                    </div>
                    {errors.sectors && <p className="text-red-400 text-[11px] font-mono">{errors.sectors}</p>}
                  </div>

                  {/* Locations */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-black text-zinc-500 uppercase tracking-widest font-mono">Location *</h4>
                      {selectedTier.maxLocations < Infinity && (
                        <span className="text-[11px] text-zinc-500 font-mono">({locations.length}/{selectedTier.maxLocations})</span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {LOCATIONS.map((l) => {
                        const checked = locations.includes(l.value);
                        const disabled = !checked && atMax(locations.length, selectedTier.maxLocations);
                        return (
                          <label key={l.value} className={checkboxClass(checked, disabled)}>
                            <input type="checkbox" className="sr-only" checked={checked} disabled={disabled} onChange={() => toggleLocation(l.value)} />
                            {l.label}
                          </label>
                        );
                      })}
                    </div>
                    {errors.locations && <p className="text-red-400 text-[11px] font-mono">{errors.locations}</p>}
                  </div>

                  {/* CNII Toggle */}
                  {selectedTier.allowsCnii && (
                    <div className="flex items-center gap-3">
                      <button type="button" onClick={() => setCnii(!cnii)} className={`relative w-11 h-6 rounded-full transition-colors ${cnii ? "bg-red-600" : "bg-zinc-700"}`}>
                        <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${cnii ? "translate-x-5" : ""}`} />
                      </button>
                      <span className="text-xs font-bold text-zinc-300 font-mono uppercase tracking-wider">Include CNII Coverage</span>
                    </div>
                  )}
                </div>
              </>
            )}

            {error && <p className="text-red-400 text-[11px] font-mono text-center">{error}</p>}

            <button type="submit" disabled={submitting || !selectedTier} className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-black uppercase tracking-widest rounded shadow-xl transition-all text-xs font-mono disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              {submitting ? "Processing..." : selectedTier?.value === "free" ? "Start Free" : (
                <>
                  <Lock className="h-3 w-3" />
                  Subscribe & Pay {selectedTier?.value === "pro" ? "₦24,000" : "₦11,000"}{selectedTier?.period}
                </>
              )}
            </button>

            {selectedTier && selectedTier.value !== "free" && (
              <p className="text-[11px] text-zinc-500 text-center font-mono">Secured by Paystack. Cancel anytime.</p>
            )}
          </form>
        )}
      </section>

    </div>
  );
}
