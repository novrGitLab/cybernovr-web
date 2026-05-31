"use client"; // 👈 This line tells Next.js that this page handles interactive events like form submissions

export default function Home() {
  return (
    <>
      {/* [Module 2: Asymmetrical Hero Section] */}
      <section className="pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-none mb-4 tracking-tight">
              Secure Your Digital <br /> Future With
              <span className="block text-[80px] md:text-[120px] text-primary font-black mt-2 tracking-tighter">CYBERNOVR</span>
            </h1>
            <p className="italic text-primary border-l-4 border-primary pl-6 py-2 mb-8 text-2xl font-bold">
              Resilience is in our DNA
            </p>
            <div className="max-w-2xl space-y-6 mb-10 text-on-surface-variant">
              <p className="text-lg">The modern threat landscape demands more than just defense; it requires an anticipatory architecture built on precision. Cybernovr Intelligence provides the infrastructure for tomorrow's security today.</p>
              <p>Our proprietary AI-driven detection systems work in symphony with human elite incident responders to ensure that your critical assets remain untouchable, regardless of the complexity of the attack vector.</p>
              <p>Join the global leaders who trust our institutional-grade reliability to navigate the complexities of data sovereignty and digital sovereignty in a multi-polar digital world.</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <button className="bg-primary text-white px-10 py-4 font-bold rounded-DEFAULT hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(143,1,0,0.3)]">
                Request A Demo
              </button>
              <button className="border-2 border-primary text-primary px-10 py-4 font-bold rounded-DEFAULT hover:bg-primary hover:text-white transition-all">
                Enroll At Academy
              </button>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col items-end pt-20">
            <div className="w-px h-32 bg-outline-variant mb-8 self-start md:ml-12"></div>
            <div className="pl-12 w-full">
              <h3 className="text-xl italic text-primary mb-6 font-bold">Cyber Security insights</h3>
              <div className="bg-surface-container-low p-8 rounded-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                <p className="text-2xl font-bold text-on-surface mb-4 leading-tight">Advanced Firewall Penetration Trends in 2024</p>
                <p className="text-on-surface-variant mb-6">Explore how next-generation attackers are bypassing traditional firewall logic using polymorphic code fragments and decentralized command structures.</p>
                <button className="group flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                  Visit The Blog
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [Module 3: Statistics Dashboard Banner] */}
      <section className="w-full bg-[#7C3AED] text-white py-16">
        <div className="max-w-[1536px] mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 items-center gap-gutter">
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="absolute inset-0 border-[16px] border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border-[8px] border-white/20 rounded-full animate-[spin_6s_linear_infinite_reverse]"></div>
              <div className="absolute inset-8 border-[2px] border-white/30 rounded-full"></div>
              <span className="material-symbols-outlined text-7xl font-light">shield_with_heart</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-12 gap-x-8">
            <div>
              <h4 className="text-[48px] font-black leading-none">50+</h4>
              <p className="text-sm text-white/80 uppercase tracking-widest mt-2 font-semibold">Client Protected</p>
            </div>
            <div>
              <h4 className="text-[48px] font-black leading-none">99.9</h4>
              <p className="text-sm text-white/80 uppercase tracking-widest mt-2 font-semibold">Uptime Percentage</p>
            </div>
            <div>
              <h4 className="text-[48px] font-black leading-none">24/7</h4>
              <p className="text-sm text-white/80 uppercase tracking-widest mt-2 font-semibold">Security Support</p>
            </div>
            <div>
              <h4 className="text-[48px] font-black leading-none">10+</h4>
              <p className="text-sm text-white/80 uppercase tracking-widest mt-2 font-semibold">Security Experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* [Module 4: 'Why Cybernovr' Component Grid] */}
      <section className="bg-surface-container-low py-section-gap">
        <div className="max-w-[1536px] mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl font-extrabold mb-4">Why Cybernovr</h2>
            <p className="text-2xl text-primary mb-12 font-bold">Certified. Trusted. Relentless.</p>
            <ul className="space-y-6">
              {[
                { title: "ISO27001 & SOC2 Type II Certified", desc: "Meeting the world's most rigorous compliance standards for data security." },
                { title: "AI-Enhanced Threat Automation", desc: "Zero-day vulnerabilities identified and neutralized in milliseconds." },
                { title: "Seamless Infrastructure Integration", desc: "Deploy across hybrid, cloud, or on-prem environments with zero friction." },
                { title: "Trusted by Central Banks Globally", desc: "Protecting the global financial pulse with unshakeable stability." }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded-full text-xl">check</span>
                  <div>
                    <p className="text-lg font-bold leading-tight">{item.title}</p>
                    <p className="text-on-surface-variant text-sm mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border-8 border-white">
              <img alt="Cyber Security Operations Center" className="w-full aspect-[4/3] object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0uh69KcCZmw9HNKXPVxJUacSwa8I3SiisiwkcNBbRKYak09wiSw-s7ZIMWQoNB_K8GwDmwtfBklBJvOBL8WaQNGFM0oDFPzVKE67roNJfzMcDF_XDpB91GBrgGl5MggbU8H4hSsH8ld6DimoQPAlR-rLGEWbtexuLxLtUex0_l4Pw04CmOSk4SzkgKS9RqYgsmqLlSc_Xdgz3BZ59jnfgMVIYbTOiynXfmCiRxmZq2eu8dap82M8TOykPtAA" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl max-w-xs shadow-xl">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface">Live Status</p>
              </div>
              <p className="text-lg font-bold text-on-surface">Protect your organization 24/7/365</p>
            </div>
          </div>
        </div>
      </section>

      {/* [Module 5: Solutions & Industries] */}
      <section className="py-section-gap px-margin-desktop max-w-[1536px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-2">Technical Sovereignty</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-24">
          {[
            { icon: "security", title: "NovrSOC", desc: "Managed Detection and Response (MDR) powered by proprietary machine learning models to eliminate noise and focus on real threats." },
            { icon: "policy", title: "NovrGRC", desc: "Governance, Risk, and Compliance automation that maps your security posture to international standards in real-time." },
            { icon: "crisis_alert", title: "SecuBreach", desc: "Elite incident response and recovery. When the worst happens, our rapid-deployment team stabilizes and secures your perimeter." }
          ].map((card, idx) => (
            <div key={idx} className="bg-surface-container-lowest p-10 rounded-DEFAULT border border-outline-variant/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
              <span className="material-symbols-outlined text-primary text-[48px] mb-8 block">{card.icon}</span>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-on-surface-variant mb-8 text-sm">{card.desc}</p>
              <a className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all" href="#">
                Request a Demo
                <span className="material-symbols-outlined">chevron_right</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* [Module 6: Contact Intake Form] */}
      <section className="pb-section-gap px-margin-desktop max-w-[1536px] mx-auto">
        <div className="bg-inverse-surface rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 md:p-20 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-black text-white mb-6">Let's Secure Your Business</h2>
              <p className="text-white/70 mb-8 italic text-lg">"In the digital age, security isn't an option—it's the foundation of existence."</p>
              <div className="flex items-center gap-6 mb-8">
                <div className="bg-primary/20 p-4 rounded-full">
                  <span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
                </div>
                <div>
                  <p className="text-lg font-bold text-white">Direct Advisory</p>
                  <p className="text-white/60 text-sm">Speak with our lead security architects.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-white/5 backdrop-blur-md p-12 md:p-20">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <input className="w-full bg-transparent border-0 border-b border-white/20 pb-4 text-white placeholder:text-white/30 focus:ring-0 focus:border-primary transition-all outline-none" placeholder="Full Name" type="text" />
              <input className="w-full bg-transparent border-0 border-b border-white/20 pb-4 text-white placeholder:text-white/30 focus:ring-0 focus:border-primary transition-all outline-none" placeholder="Corporate Email" type="email" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input className="w-full bg-transparent border-0 border-b border-white/20 pb-4 text-white placeholder:text-white/30 focus:ring-0 focus:border-primary transition-all outline-none" placeholder="Company Domain" type="text" />
                <select className="w-full bg-transparent border-0 border-b border-white/20 pb-4 text-white focus:ring-0 focus:border-primary transition-all outline-none appearance-none">
                  <option className="bg-inverse-surface" disabled defaultValue="Industry">Industry</option>
                  <option className="bg-inverse-surface">Finance</option>
                  <option className="bg-inverse-surface">Government</option>
                  <option className="bg-inverse-surface">Technology</option>
                  <option className="bg-inverse-surface">Healthcare</option>
                </select>
              </div>
              <button className="w-full bg-primary text-white py-5 font-bold uppercase tracking-[0.1em] rounded-DEFAULT hover:bg-red-700 transition-all active:scale-95 shadow-xl" type="submit">
                Initialize Security Audit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}