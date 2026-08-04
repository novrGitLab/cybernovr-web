import type { Metadata } from "next";
import { Brain, Cloud, ShieldAlert, Fingerprint } from "lucide-react";
import NovrSOCForm from "@/components/forms/NovrSOCForm";

export const metadata: Metadata = {
  title: "NovrSOC — 24/7 Security Operations Center Platform | CyberNovr",
  description: "AI-driven SOC platform for 24/7 security monitoring, SIEM, threat management, and incident response. Professional-grade cybersecurity operations for critical infrastructure.",
  openGraph: {
    title: "NovrSOC — 24/7 SOC Platform | CyberNovr",
    description: "AI-driven platform for 24/7 SOC operations, SIEM, and threat management.",
    url: "https://www.cybernovr.com/solutions/novrsoc",
    siteName: "CyberNovr",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "NovrSOC — 24/7 SOC Platform", description: "AI-driven security operations center platform." },
  alternates: { canonical: "https://www.cybernovr.com/solutions/novrsoc" },
  robots: { index: true, follow: true },
};

export default function NovrSOCPage() {
  const pillars = [
    { icon: Brain, title: "Threat Management", desc: "Provides threat visibility (map), incident management, alerting, and communication." },
    { icon: Cloud, title: "Threat Response", desc: "Determine the level of risk to the organization posed by the suspect domain/URL/App." },
    { icon: ShieldAlert, title: "Threat Advisory (NovrAlert)", desc: "Updated threat advisories and dark web alerts, including threat actors, status, and recommendations." },
    { icon: Fingerprint, title: "Social Suite", desc: "Monitoring social media platforms and sites for trademark infringement and unauthorized accounts." }
  ];

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-20 w-full bg-white text-zinc-900 antialiased">
      
      {/* Top Main Heading Block */}
      <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left">
        <span className="inline-block font-mono text-red-700 text-xs font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded mb-4">
          Flagship SOC Platform
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-2">
          NovrSOC
        </h1>
        <p className="text-xs md:text-sm font-bold text-zinc-400 uppercase tracking-widest font-mono">
          AI-DRIVEN PLATFORM FOR 24/7 SOC OPERATIONS
        </p>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed pt-6 font-normal">
          Professional-grade 24/7/365 security monitoring, SIEM, and threat management of your assets with high-precision incident response, automated SOAR playbooks, and a digital forensic platform.
        </p>
      </div>

      {/* Core Technology Pillars */}
      <section className="space-y-6 text-left">
        <h2 className="text-sm md:text-[15px] font-black uppercase tracking-widest text-zinc-400">System Capabilities</h2>
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

      {/* Corporate High-Contrast Form Box */}
      <section className="bg-zinc-950 text-white rounded-2xl border border-zinc-900 p-8 md:p-12 shadow-2xl max-w-3xl mx-auto text-left">
        <div className="mb-8 space-y-1">
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">Request a Demo</h3>
          <p className="text-xs text-zinc-400 font-medium leading-relaxed">Please complete this form. A member of our team will reach out to schedule a demo.</p>
        </div>
        <NovrSOCForm />
      </section>

    </div>
  );
}
