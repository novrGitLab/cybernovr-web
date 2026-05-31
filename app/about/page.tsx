import Link from "next/link";

export default function CorporateAboutHub() {
  const corporateSectors = [
    {
      title: "Our Journey",
      subtitle: "Phase Horizons & Milestones",
      desc: "Track the historical timeline, strategic structural frameworks, and national security audits built since inception.",
      link: "/about/journey",
      icon: "timeline"
    },
    {
      title: "The Team",
      subtitle: "Defense Matrix Architects",
      desc: "Meet the specialized multi-disciplinary leadership, product leads, and cybersecurity operations interns.",
      link: "/about/team",
      icon: "shield_person"
    },
    {
      title: "Careers",
      subtitle: "Active Open Vacancies",
      desc: "Join the continuous ranks. Explore remote product engineering, UI/UX roles, and secure mission listings.",
      link: "/about/careers",
      icon: "work"
    }
  ];

  return (
    <div className="pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto">
      {/* Dynamic Header Block incorporating logo image inline with text */}
      <div className="border-b border-outline-variant/20 pb-12 mb-16 max-w-4xl">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
          <span className="text-4xl md:text-5xl font-black tracking-tight text-on-background">INSIDE</span>
          <img src="/logo.png" alt="CYBERNOVR" className="h-9 w-auto object-contain" />
        </div>
        <p className="italic text-primary border-l-4 border-primary pl-6 py-1 mb-6 text-xl font-bold">
          Resilience is in our DNA
        </p>
        <p className="text-on-surface-variant text-base leading-relaxed">
          Cybernovr provides unshakeable, institutional-grade digital defense metrics across global networks. Navigate through our designated timeline history profile, elite technical staff directories, or explore your career entry paths within our engineering centers below.
        </p>
      </div>

      {/* Directory Selector Grids */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {corporateSectors.map((sector, index) => (
          <div key={index} className="bg-surface-container-lowest p-10 border border-outline-variant/30 rounded-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div>
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-DEFAULT mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">{sector.icon}</span>
              </div>
              <span className="text-xs text-primary font-bold uppercase tracking-wider block mb-1">{sector.subtitle}</span>
              <h3 className="text-2xl font-bold text-on-surface mb-4">{sector.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">{sector.desc}</p>
            </div>
            <Link href={sector.link} className="inline-flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-wider group-hover:gap-4 transition-all">
              Initialize Route <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}