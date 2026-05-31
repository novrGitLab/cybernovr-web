"use client";

export default function CareersVacancies() {
  const jobs = [
    { title: "Product-Led UI/UX Designer & Frontend Engineer", sector: "Design & Product", icon: "design_services", type: "Remote / Hybrid", term: "Full-time" },
    { title: "LMS Product Manager & Cybersecurity Educator", sector: "Education", icon: "school", type: "HQ - London", term: "Full-time" },
    { title: "Junior SOC Analyst", sector: "Operations", icon: "security", type: "Remote", term: "Shift-based" }
  ];

  return (
    <div className="pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto">
      {/* Title block with nested branding token alignment */}
      <div className="flex items-center gap-x-3 mb-4">
        <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
        <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Hiring Worldwide</span>
      </div>
      <h1 className="text-5xl font-black text-on-background mb-6 leading-tight">
        Build the Future of <span className="text-primary">Digital Defense</span>
      </h1>
      <p className="text-on-surface-variant max-w-2xl mb-20 text-base">
        Join an elite cadre of creators, engineers, and threat analysts dedicated to architecting resilience that makes security incidents obsolete.
      </p>

      {/* Open Positions List */}
      <div className="space-y-4 mb-24">
        {jobs.map((job, idx) => (
          <div key={idx} className="p-8 border border-outline-variant/30 bg-surface-container-lowest flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg cursor-pointer group">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-on-surface-variant/80 uppercase">
                <span className="material-symbols-outlined text-primary text-lg">{job.icon}</span>
                {job.sector}
              </div>
              <h3 className="text-xl font-bold text-on-background group-hover:text-primary transition-colors">{job.title}</h3>
              <div className="flex gap-4 text-xs font-medium text-on-surface-variant/60">
                <span className="bg-surface-container px-2.5 py-1 rounded">{job.type}</span>
                <span className="bg-surface-container px-2.5 py-1 rounded">{job.term}</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline-variant group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
          </div>
        ))}
      </div>

      {/* Application Form Matrix Box Component */}
      <div className="grid grid-cols-1 md:grid-cols-12 border border-outline-variant/50 rounded-lg overflow-hidden shadow-xl">
        <div className="md:col-span-5 bg-inverse-surface p-12 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-6">Application Gateway</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-6">All operational assets are reviewed directly by our technical principals. No automated pipelines.</p>
          </div>
          <p className="italic text-xs text-primary font-bold tracking-widest uppercase border-t border-white/10 pt-6">
            — Intelligence Built Through Experience
          </p>
        </div>
        <div className="md:col-span-7 p-12 bg-surface-container-lowest">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-outline-variant py-2.5 text-sm outline-none focus:border-primary transition-colors" />
              <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-outline-variant py-2.5 text-sm outline-none focus:border-primary transition-colors" />
            </div>
            <button type="submit" className="w-full bg-primary text-white py-4 text-sm font-bold tracking-widest uppercase rounded hover:bg-red-800 transition-colors">
              Submit Application Matrix
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}