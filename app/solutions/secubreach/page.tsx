import type { Metadata } from "next";
import { Zap, Search, Globe, FileText } from "lucide-react";
import SecuBreachForm from "@/components/forms/SecuBreachForm";

export const metadata: Metadata = {
  title: "SecuBreach — AI-Powered Vulnerability Management Platform | CyberNovr",
  description: "AI-driven vulnerability management platform. Passive scanning, CVE detection, and regulatory tagging for GDPR, HIPAA, SOX, PCI, and NDPA compliance.",
  openGraph: {
    title: "SecuBreach — Vulnerability Management | CyberNovr",
    description: "AI-powered vulnerability management and CVE detection platform.",
    url: "https://www.cybernovr.com/solutions/secubreach",
    siteName: "CyberNovr",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "SecuBreach — Vulnerability Management", description: "AI-powered vulnerability management platform." },
  alternates: { canonical: "https://www.cybernovr.com/solutions/secubreach" },
  robots: { index: true, follow: true },
};

export default function SecuBreachPage() {
  const capabilities = [
    { icon: Zap, t: "Passive Scanning", d: "No packet injection or content access, ensuring safe monitoring." },
    { icon: Search, t: "CVE-Driven Engine", d: "Advanced detection engine based on Common Vulnerabilities and Exposures." },
    { icon: Globe, t: "Metadata-Only", d: "Inspection strictly via metadata to ensure legal compliance." },
    { icon: FileText, t: "Regulatory Tagging", d: "Context-aware tagging for GDPR, HIPAA, SOX, PCI, NDPA, etc." }
  ];

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-20 w-full bg-white text-zinc-900 antialiased">
      
      {/* Heading Header */}
      <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left">
        <span className="inline-block font-mono text-red-700 text-xs font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded w-fit block mb-4">
          Vulnerability Management Platform
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-2">
          SecuBreach
        </h1>
        <p className="text-xs md:text-sm font-bold text-zinc-400 uppercase tracking-widest font-mono">
          Nigeria&apos;s #1 Vulnerability Management Solution
        </p>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed pt-6 font-normal">
          Key Benefits<br />✓ Identifies vulnerabilities without disrupting operations.<br />✓ Context-aware regulatory tagging for compliance.<br />✓ Centralized or distributed deployment options.
        </p>
      </div>

      {/* Grid Capability Cards */}
      <section className="space-y-6 text-left">
        <div className="border-b border-zinc-100 pb-2">
          <h2 className="text-sm md:text-[15px] font-black uppercase tracking-widest text-zinc-400">Secure Your Infrastructure with SecuBreach</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl flex flex-col justify-between space-y-6 hover:border-purple-900/20 transition-all duration-300 shadow-sm">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold text-zinc-900 uppercase tracking-tight leading-snug">{c.t}</h4>
                </div>
                <p className="text-zinc-600 text-xs md:text-sm leading-relaxed font-normal">{c.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Corporate High-Contrast Form Box */}
      <section className="bg-zinc-950 text-white rounded-2xl border border-zinc-900 p-8 md:p-12 shadow-2xl max-w-3xl mx-auto text-left">
        <div className="mb-8 space-y-1">
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">LEARN HOW OUR AI-POWERED VULNERABILITY MANAGEMENT SYSTEM CAN PROTECT YOUR ORGANISATION.</h3>
          <p className="text-xs text-zinc-400 font-medium leading-relaxed">Please complete this form. A member of our team will reach out to schedule a demo.</p>
        </div>
        <SecuBreachForm />
      </section>

    </div>
  );
}
