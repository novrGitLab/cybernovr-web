export default function OurJourneyPage() {
  const phases = [
    { year: "2008", label: "Phase I: Foundation", title: "Launch of Threat Modeling", desc: "Establishment of foundational cyber threat modeling panels and exclusive compliance training forums for C-suite security leadership." },
    { year: "2016", label: "Phase II: Continental Scale", title: "West African Deployment", desc: "Deployment of secure information assurance frameworks for critical infrastructure assets across the West African region, securing national-level utilities." },
    { year: "2022", label: "Phase III: Financial Integrity", title: "eNaira Security Audit", desc: "Strategic partnership for national eNaira public finance framework security architecture validation and comprehensive risk auditing procedures." },
    { year: "2026", label: "Future Horizon", title: "CEAP Academy Hub", desc: "Launch of the high-volume CEAP academy hub, targeting 1,000+ certified cybersecurity professionals trained to global standards." }
  ];

  return (
    <div className="pt-40 pb-section-gap max-w-[1536px] mx-auto px-margin-desktop">
      <div className="border-t border-primary pt-8 max-w-4xl mb-20">
        <h1 className="text-5xl font-black text-on-background mb-6">Our Path to Digital Resilience</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl">
          Mapping operational engineering milestones, framework deployments, and infrastructure validation.
        </p>
      </div>

      {/* Structured CSS Timeline Layout */}
      <div className="relative space-y-24 max-w-5xl mx-auto before:absolute before:left-4 md:before:left-1/2 before:top-0 before:w-0.5 before:h-full before:bg-gradient-to-b before:from-primary before:to-secondary">
        {phases.map((p, idx) => (
          <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
            <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${idx % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}>
              <div className="p-8 bg-surface-container-lowest border border-outline-variant/30 rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="text-xs text-primary font-bold uppercase tracking-widest block mb-2">{p.label}</span>
                <h3 className="text-xl font-bold text-on-background mb-3">{p.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
            
            {/* Center Timeline Node Indicator */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-9 h-9 bg-surface border-4 border-primary rounded-full flex items-center justify-center font-bold text-xs text-primary z-10 shadow-sm">
              {p.year.slice(2)}
            </div>

            <div className={`hidden md:block w-[45%] text-4xl font-black text-on-surface-variant/10 ${idx % 2 === 0 ? "md:order-2" : "text-right"}`}>
              {p.year}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}