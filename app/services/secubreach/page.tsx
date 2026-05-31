export default function SecuBreachPage() {
  return (
    <div className="pt-20">
      {/* Module 2: Hero */}
      <section className="relative min-h-[819px] flex items-center overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#F3F4F6] py-section-gap">
        <div className="max-w-[1536px] mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-mono text-xs tracking-wider rounded-sm uppercase">
              Pioneering Nigerian Innovation in Cybersecurity
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-on-background leading-none">
              SecuBreach: Real Threats. <br/>
              <span className="text-primary">Zero Noise.</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg">
              A smart vulnerability scanner that finds weak spots and security flaws in a company's system with 98.7% accuracy. Designed for high-stakes financial operations.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary text-white px-8 py-4 font-bold rounded-sm hover:bg-red-700 transition-colors active:scale-95">Request a Demo</button>
              <button className="border-2 border-primary text-primary px-8 py-4 font-bold rounded-sm hover:bg-primary/5 transition-colors active:scale-95">Contact Us</button>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="bg-white rounded-lg shadow-2xl border border-outline-variant/30 overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
              <div className="h-10 bg-surface-container flex items-center px-4 gap-2 border-b border-outline-variant/20 font-mono text-[10px] text-on-surface-variant">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="ml-4">secubreach-v2.0.1_Nigerian_Standard</div>
              </div>
              <div className="p-6 bg-surface-container-lowest">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <p className="text-xs uppercase text-on-surface-variant">Security Score</p>
                    <h3 className="text-3xl font-bold text-on-background">98.7%</h3>
                  </div>
                  <span className="inline-flex items-center text-primary font-bold text-sm animate-pulse">LIVE NODE</span>
                </div>
                <div className="p-4 bg-surface-container rounded-sm flex items-center justify-between border-l-4 border-primary text-sm">
                  <span className="font-medium">Critical API Vulnerability (Lagos-HQ-01)</span>
                  <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded font-mono font-bold">FIXED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module 5: Deep-Dive */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-[1536px] mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-on-background mb-8 leading-tight">Deeper Defense, <br/><span class="text-primary">Closer Compliance.</span></h2>
              <div className="space-y-6">
                {[
                  "Active Exploit Detection: Real-world simulation of adversarial techniques to test resilience.",
                  "Regulatory Compliance Mapping: Automated reporting blueprints for local NDPA and international GDPR.",
                  "Remediation Playbooks: Technical deep-dives mapped specifically for internal engineering teams."
                ].map((txt, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <p className="text-on-surface-variant text-sm font-medium leading-relaxed">{txt}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary p-12 rounded-lg shadow-2xl text-white">
              <blockquote className="italic text-xl mb-6">"Cybernovr's SecuBreach has transformed how we approach system audits. Accurate, reliable, and tailored to African infrastructure rules."</blockquote>
              <p className="text-xs uppercase tracking-widest font-bold">CTO, Tier-1 Bank</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}