import Link from "next/link";

export default function ServicesHubPage() {
  const securityCapabilities = [
    {
      title: "NovrSOC",
      subtitle: "Managed Detection & Response",
      description: "Proprietary machine learning operations optimized to identify threat variables and filter out active perimeter noise in real time.",
      url: "/services/novrsoc",
      icon: "security"
    },
    {
      title: "NovrGRC",
      subtitle: "Risk & Compliance Automation",
      description: "Governance structures mapping organizational posture metrics directly to global certifications and compliance requirements smoothly.",
      url: "/services/novrgrc",
      icon: "policy"
    },
    {
      title: "SecuBreach",
      subtitle: "Elite Incident Reconstruction",
      description: "Rapid tactical deployment operators built to stabilize compromised boundaries and neutralize zero-day indicators instantly.",
      url: "/services/secubreach",
      icon: "crisis_alert"
    }
  ];

  return (
    <div className="pt-40 pb-section-gap px-margin-desktop max-w-[1536px] mx-auto">
      {/* Services Main Corporate Heading Block */}
      <div className="border-b border-outline-variant/20 pb-12 mb-16 max-w-4xl">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-on-background">SERVICES BY</h1>
          <img src="/logo.png" alt="" className="h-8 w-auto object-contain" />
          <span className="text-4xl md:text-5xl font-black tracking-tight text-primary">INTELLIGENCE</span>
        </div>
        <p className="italic text-primary border-l-4 border-primary pl-6 py-1 mb-6 text-xl font-bold">
          Technical Sovereignty & Anticipatory Architecture
        </p>
        <p className="text-on-surface-variant text-base leading-relaxed">
          Explore our targeted framework operations. We engineer secure, institutional protective layers designed specifically to handle highly complex attack vectors and secure your critical networks.
        </p>
      </div>

      {/* Capabilities Navigation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {securityCapabilities.map((service, index) => (
          <div key={index} className="bg-surface-container-lowest p-10 border border-outline-variant/30 rounded-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div>
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-DEFAULT mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">{service.icon}</span>
              </div>
              <span className="text-xs text-primary font-bold uppercase tracking-wider block mb-1">{service.subtitle}</span>
              <h3 className="text-2xl font-bold text-on-surface mb-4">{service.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">{service.description}</p>
            </div>
            <Link href={service.url} className="inline-flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-wider group-hover:gap-4 transition-all">
              Initialize Capability <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}