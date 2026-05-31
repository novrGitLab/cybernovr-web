"use client";
import React, { useState } from "react";

export default function ResourcesHubPage() {
  const [activeTab, setActiveTab] = useState("all");

  const events = [
    {
      type: "LIVE WEBINAR",
      icon: "security",
      title: "Defending Critical Infrastructure against APTs",
      time: "Mon, June 15, 2026 | 11:00 AM WAT",
      desc: "A panel analyzing multi-vector strikes on telecoms and banking networks. Explore real-world case studies of nation-state actor methodologies.",
      btnText: "Reserve Virtual Seat",
      category: "webinars"
    },
    {
      type: "WORKSHOP",
      icon: "terminal",
      title: "Hands-on Vulnerability Scanning with SecuBreach",
      time: "Thu, July 02, 2026 | 2:00 PM WAT",
      desc: "An engineering walkthrough modeling real-time exploit discovery and remediation reporting with 98.7% accuracy benchmarks.",
      btnText: "Register for Workshop",
      category: "workshops"
    },
    {
      type: "STRATEGIC BRIEFING",
      icon: "policy",
      title: "Global Data Sovereignty & AI Regulation 2026",
      time: "Wed, July 15, 2026 | 09:00 AM WAT",
      desc: "A deep-dive into the legislative landscape of cross-border data flows and the impact of autonomous AI security agents on global compliance.",
      btnText: "Request Briefing Access",
      category: "briefings"
    }
  ];

  const papers = [
    {
      icon: "hub",
      title: "API Shielding for High-Velocity Fintech Networks",
      desc: "Technical framework for securing RESTful endpoints in real-time banking ecosystems, focusing on zero-trust validation.",
      category: "papers"
    },
    {
      icon: "policy",
      title: "The CISO Playbook: Implementing NDPA Compliance",
      desc: "A step-by-step roadmap for data protection officers to align corporate infrastructure with Nigeria Data Protection Act mandates.",
      category: "papers"
    },
    {
      icon: "settings_input_component",
      title: "Securing Industrial SCADA Control Systems",
      desc: "Critical infrastructure protection strategies for manufacturing and power grid assets against targeted APT campaigns.",
      category: "papers"
    }
  ];

  // Filtering Logic
  const filteredEvents = activeTab === "all" || activeTab === "webinars" || activeTab === "workshops" || activeTab === "briefings"
    ? events.filter(e => activeTab === "all" || e.category === activeTab)
    : [];

  const showPapers = activeTab === "all" || activeTab === "papers";

  return (
    <div className="pt-20">
      {/* Premium Flagship Publication Banner */}
      <header className="bg-gradient-to-b from-white to-surface-container-low pt-20 pb-12">
        <div className="max-w-[1536px] mx-auto px-margin-desktop text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface">THREAT INTELLIGENCE BY</h1>
            <img src="/logo.png" alt="" className="h-8 w-auto object-contain" />
          </div>
          <p className="text-lg text-tertiary max-w-3xl mx-auto opacity-90">
            Empowering CISOs, management personnel, and technology leaders with deep analytical breakdowns, architectural compliance blueprints, and real-time security events.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-[1536px] mx-auto px-margin-desktop pb-section-gap">
        
        {/* Category Filters Tab Matrix */}
        <section className="mb-12 border-b border-outline-variant/30 pb-4 flex items-center space-x-2 overflow-x-auto">
          {[
            { id: "all", label: "All Resources" },
            { id: "webinars", label: "Live Webinars" },
            { id: "workshops", label: "Technical Workshops" },
            { id: "briefings", label: "Sovereign Briefings" },
            { id: "papers", label: "Research Papers" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full font-bold text-sm tracking-wider uppercase transition-all whitespace-nowrap ${
                activeTab === tab.id ? "bg-primary text-white" : "text-on-surface-variant hover:bg-surface-container"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </section>

        {/* Dynamic Flagship Publication Highlight Block (Only visible on All/Papers tab) */}
        {showPapers && activeTab !== "papers" && (
          <section className="mb-16">
            <div className="bg-white border border-outline-variant rounded-lg overflow-hidden shadow-sm flex flex-col md:flex-row group hover:shadow-xl transition-all duration-500">
              <div className="w-full md:w-5/12 min-h-[300px] relative bg-on-background overflow-hidden">
                <img alt="Strategic map" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvxSY3b6zKDrB0tK7FWiY4TYTMxbdZGAQ5O9Wj57cGN9Dczyti1jpgM5K2lVn2U4-WoRKJhkwHaz-cxJiqb4qO7KA49zBcvKtg1INL5UQjkz_-aq7hKQooSbN9W9sJs1scxuSjVeGUdKiWxE0wFl5jwkGquCKTedSRypsetzFpI4u4KSkAjOLAoQBZoVeyyrP0RVa7M0VW7KhV1XWsG_fVEPbSeSW_UsJJmJdztOzhMw_mA9wZfpHxph-T9ZR6o7rFTrEsdtK6FZn2" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white z-10">
                  <span className="text-xs font-bold bg-primary px-3 py-1 mb-4 inline-block tracking-widest uppercase">Premium Intelligence</span>
                  <h3 className="text-lg font-black uppercase tracking-wider">Cyber Threat Trends Report</h3>
                </div>
              </div>
              <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center bg-surface-container-lowest">
                <div className="flex items-center gap-2 text-primary mb-4 text-xs font-bold uppercase tracking-widest">
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                  <span>Flagship Publication</span>
                </div>
                <h2 className="text-3xl font-bold text-on-surface mb-4">Sovereign Threat Vectors & Ransomware Trends</h2>
                <p className="text-sm text-tertiary leading-relaxed mb-8">
                  A deep-dive analysis mapping active exploit campaigns targeting financial switches and critical OT infrastructure across the West African sub-region.
                </p>
                <button className="bg-primary text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded hover:bg-red-800 transition-colors self-start shadow-md flex items-center gap-2">
                  Download Strategic PDF <span className="material-symbols-outlined text-sm">download</span>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Live Events Grid Section */}
        {filteredEvents.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-black text-on-surface mb-6 uppercase tracking-tight">Briefings & Briefing Matrices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {filteredEvents.map((event, idx) => (
                <article key={idx} className="bg-surface-container-lowest border border-outline-variant/40 p-8 rounded-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
                  <div>
                    <span className="material-symbols-outlined text-primary text-[48px] mb-6 block">{event.icon}</span>
                    <span className="font-mono text-xs tracking-widest text-primary font-bold block mb-2">{event.type}</span>
                    <h3 className="text-xl font-bold text-on-surface mb-4 leading-snug">{event.title}</h3>
                    <div className="text-xs font-mono text-tertiary bg-surface-container-low px-3 py-1.5 rounded inline-block mb-4">{event.time}</div>
                    <p className="text-sm text-tertiary leading-relaxed mb-8">{event.desc}</p>
                  </div>
                  <button className="w-full bg-primary text-white py-3.5 rounded text-xs font-bold tracking-widest uppercase hover:bg-red-800 transition-colors">
                    {event.btnText}
                  </button>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Whitepapers Technical Repository Grid Section */}
        {showPapers && (
          <section>
            <h2 className="text-2xl font-black text-on-surface mb-6 uppercase tracking-tight">Research Repository</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {papers.map((paper, idx) => (
                <div key={idx} className="bg-surface-container-lowest border border-outline-variant/40 p-8 rounded-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
                  <div>
                    <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded mb-6 text-primary">
                      <span className="material-symbols-outlined text-2xl">{paper.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-on-surface mb-3 leading-snug">{paper.title}</h3>
                    <p className="text-sm text-tertiary leading-relaxed mb-6 opacity-80">{paper.desc}</p>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider group-hover:gap-4 transition-all">
                    Download Blueprint <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Private Advisory Session Inline Invitation Banner */}
        <section className="mt-24 bg-inverse-surface rounded-xl p-12 md:p-16 relative overflow-hidden text-white shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tight">Host a Private Intelligence Session</h2>
            <p className="text-sm text-surface-variant leading-relaxed">
              Schedule a bespoke technical deep-dive briefing session for your corporate C-suite and engineering leadership boards.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-primary text-white font-bold text-xs tracking-widest uppercase px-6 py-3.5 rounded hover:bg-red-800 transition-colors">Contact Enterprise Operations</button>
              <button className="border border-white/40 text-white font-bold text-xs tracking-widest uppercase px-6 py-3.5 rounded hover:bg-white/10 transition-colors">View Institutional Metrics</button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 hidden md:block">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe32hi_iKOZ_N2p0cGWXJC2H_oaKbcUUgAHJlqcahZF9ltvBxU0DMj5ZutgASlVSq5S1rX8ACji-Thg5jZJ3VAI_FWMM9rPyPqbRwGHN4M0ZXYa3IIQurRC5BqI3CoHMrOOGiWxs1wpKU_-bP-0EHTBGC8MGclsvhAd--oVuSF1RXcDlsxiCZ1IYhOvfAmildPt8sanvTD0Jla-_Z5x1XHp_IcY7SIHWRa_9UhIm0YMmHA1S410ubTVQI2JWi_cUD1w2TlcvRQ_gfv" alt="" />
          </div>
        </section>

      </main>
    </div>
  );
}