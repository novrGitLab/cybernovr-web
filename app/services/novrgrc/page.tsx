export default function NovrGRCPage() {
  return (
    <div className="pt-20">
      {/* Module 2: Hero Section */}
      <section className="min-h-[819px] flex items-center bg-gradient-to-b from-surface-container-lowest to-surface-container-low overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-margin-desktop py-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7 space-y-8">
            <span className="inline-block font-mono text-xs text-primary bg-primary/5 px-4 py-1 border-l-2 border-primary uppercase tracking-widest">Enterprise Compliance Risk Management</span>
            <h1 className="text-5xl md:text-6xl font-black text-on-background leading-tight">
              NovrGRC: Automated Governance. <br/>
              <span className="text-primary">Continuous Risk Compliance.</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl">
              Transforming complex, text-heavy regulatory frameworks into interactive, visual data dashboards for corporate HR managers and CISOs.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-white border-2 border-outline-variant text-on-background px-8 py-4 font-bold rounded-[4px] shadow-sm hover:-translate-y-0.5 transition-all">Request a Demo</button>
              <button className="border-2 border-primary text-primary px-8 py-4 font-bold rounded-[4px] hover:bg-primary/5 transition-colors">Contact Us</button>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="bg-white rounded-xl shadow-2xl border border-outline-variant/30 overflow-hidden">
              <div className="bg-surface-container-highest px-6 py-4 border-b border-outline-variant/20 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                </div>
                <span className="text-xs text-on-surface-variant font-mono">NovrGRC_Console_v2.4</span>
              </div>
              <div className="p-8 space-y-8 bg-white">
                <div className="flex items-end justify-between border-b border-outline-variant/10 pb-6">
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase mb-1">Audit Readiness</p>
                    <h3 className="text-3xl font-bold text-on-background">94.2%</h3>
                  </div>
                  <div className="w-24 h-12 bg-primary/10 rounded-t-full relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-[94%] h-full bg-primary"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-xs text-on-surface-variant uppercase font-bold">Recent Remediation Logs</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 p-3 bg-surface-container-low rounded-[4px] border-l-4 border-primary">
                      <span className="material-symbols-outlined text-primary">security</span>
                      <div className="flex-1 space-y-1">
                        <div className="h-2 w-24 bg-on-surface-variant/20 rounded"></div>
                        <div className="h-2 w-48 bg-on-surface-variant/10 rounded"></div>
                      </div>
                      <span className="text-[10px] font-mono text-on-surface-variant">JUST NOW</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg flex items-center gap-4 border border-white/20">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm text-on-background font-bold">System Live: 256ms Latency</span>
            </div>
          </div>
        </div>
      </section>

      {/* Module 3: Trust Full Banner */}
      <section className="bg-on-background text-white py-16 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img alt="Map matrix" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxT26PmCNSws9-hWYOCfPzMWBnpOu9CkkeGdRUrc5DgVxXpxmAvYWk4QjaMdXtcKWonL0K-0NjlMQg9eulpDbIQ1mfRr5whDToAKHHHh13jIcrqZXct4LUeJLK-4iLTME2HUaypwSMJKFFOQ991VfroLaS9J07Gm8Hy2A2zW_8YeYQ7kLD7OyLgu1mPDVVbRwl9lkWN8Mz4-HwbTee4a36BPNTklKxQ_PcGVRQR85F6wnI_khaL14n4qJQFi2UKQV305KxfVhIYdfQ"/>
        </div>
        <div className="max-w-[1536px] mx-auto px-margin-desktop relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-8">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-center">
                <span className="text-xs tracking-wider uppercase font-bold text-primary block">NCC-CSIRT</span>
                <p className="text-[10px] opacity-60">CERTIFIED PARTNER</p>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <h4 className="text-lg font-bold max-w-[240px]">Trusted across the Nigerian financial ecosystem.</h4>
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 opacity-70 text-center">
              {["CBN", "NDPC", "PCI-DSS", "NCC"].map((label, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="font-black text-xl">{label}</span>
                  <span className="text-[10px] tracking-widest uppercase">Verified Framework</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Module 5: Deep-Dive */}
      <section className="py-section-gap bg-surface">
        <div className="max-w-[1536px] mx-auto px-margin-desktop">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-on-background mb-4">Granular Governance Operations</h2>
            <p className="text-base text-on-surface-variant max-w-2xl">Deploy enterprise-grade compliance automation that scales with your infrastructure. No more spreadsheets—just actionable intelligence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {[
              { icon: "fact_check", title: "Automated Gap Identification", desc: "Instantly scan current controls against international frameworks to highlight critical vulnerabilities in real-time." },
              { icon: "analytics", title: "Real-Time Risk Registers", desc: "Dynamic tracking of enterprise risks with AI-driven scoring and automated mitigation task assignments." },
              { icon: "history_edu", title: "Continuous Evidence Logs", desc: "Immutable audit trails that collect evidence automatically, ensuring you are always audit-ready." },
              { icon: "file_export", title: "One-Click Framework Export", desc: "Generate regulatory-ready reports for ISO 27001, SOC2, and local NDPR mandates in seconds." }
            ].map((box, i) => (
              <div key={i} className="p-8 border border-outline-variant/30 bg-white flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
                <div className="mb-8">
                  <span className="material-symbols-outlined text-[48px] text-primary mb-6 block group-hover:scale-105 transition-transform">{box.icon}</span>
                  <h3 className="text-lg font-bold mb-4">{box.title}</h3>
                  <p className="text-on-surface-variant text-sm">{box.desc}</p>
                </div>
                <span className="text-primary font-bold text-sm flex items-center gap-2">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}