import type { Metadata } from "next";
import { EyeOff, Activity, ShieldAlert, Radio } from "lucide-react";
import NovrRadarForm from "@/components/forms/NovrRadarForm";

export const metadata: Metadata = {
  title: "NovrRadar — AI-Powered XDR & Threat Detection Platform | CyberNovr",
  description: "AI-powered Extended Detection and Response platform. Continuous monitoring of Indicators of Attack across enterprise digital infrastructure.",
  openGraph: {
    title: "NovrRadar — XDR Platform | CyberNovr",
    description: "AI-powered XDR solution for continuous threat detection.",
    url: "https://www.cybernovr.com/solutions/novrradar",
    siteName: "CyberNovr",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "NovrRadar — XDR Platform", description: "AI-powered XDR for continuous threat detection." },
  alternates: { canonical: "https://www.cybernovr.com/solutions/novrradar" },
  robots: { index: true, follow: true },
};

export default function NovrRadarPage() {
  const points = [
    { icon: EyeOff, t: "Passive Monitoring", d: "Deploys non-intrusively directly at main internet gateway boundaries without altering network traffic speed benchmarks." },
    { icon: Activity, t: "Metadata Analysis Only", d: "Safely dissects raw IP values, ports, protocols, and routing flow architectures to identify systematic threat signatures." },
    { icon: ShieldAlert, t: "Absolute Privacy Preserved", d: "Zero content-level packet or message payload extraction occurs, fully maintaining privacy and compliance." },
    { icon: Radio, t: "AI-Powered Intelligence", d: "Maps unmapped novel zero-day exploits and malware sequences utilizing highly advanced neural network filters." }
  ];

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-20 w-full bg-white text-zinc-900 antialiased">
      
      {/* Main Header Block */}
      <div className="border-b border-zinc-200 pb-8 text-left max-w-4xl space-y-3">
        <span className="inline-block font-mono text-red-700 text-xs font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded">
          Innovative XDR Solution
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase">
          NovrRADAR
        </h1>
        <p className="text-xs md:text-sm font-bold text-zinc-400 uppercase tracking-widest font-mono">
          AI-powered solution to detect Indicators of Attack (IoAs)
        </p>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed pt-4 font-normal">
          NovrRADAR sits at internet gateway nodes to detect and respond to Indicators of Attacks (IoAs). By scanning network metadata patterns, it provides continuous visibility across an enterprise or a nation&apos;s digital infrastructure.
        </p>
      </div>

      {/* Feature Cards Layout Grid */}
      <section className="space-y-6 text-left">
        <div className="border-b border-zinc-100 pb-2">
          <h2 className="text-sm md:text-[15px] font-black uppercase tracking-widest text-zinc-400">NovrRADAR Product Capabilities</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl flex gap-4 items-start hover:border-purple-900/20 transition-all duration-300 shadow-sm">
                <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-zinc-900 text-base uppercase tracking-tight">{p.t}</h3>
                  <p className="text-zinc-600 text-xs md:text-sm leading-relaxed font-normal">{p.d}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Corporate High-Contrast Form Box */}
      <section className="bg-zinc-950 text-white rounded-2xl border border-zinc-900 p-8 md:p-12 shadow-2xl max-w-3xl mx-auto text-left">
        <div className="mb-8 space-y-1">
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">Book a Demo to See NovrRADAR in Action</h3>
          <p className="text-xs text-zinc-400 font-medium leading-relaxed">Please complete this form. A member of our team will reach out to schedule a demo.</p>
        </div>
        <NovrRadarForm />
      </section>

    </div>
  );
}
