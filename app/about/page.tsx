import Link from "next/link";
import { ArrowRight, Milestone, Briefcase, Eye, Target, Heart, ShieldCheck, Lightbulb, Users, RefreshCcw } from "lucide-react";
import TeamMemberCard from "@/components/about/TeamMemberCard";

const corporateSectors = [
  {
    title: "Our Journey",
    subtitle: "Our Horizons & Milestones",
    desc: "Since 2008, we've been committed to advancing cybersecurity for organizations of all sizes.",
    link: "/about/journey",
    icon: Milestone
  },
  {
    title: "Careers",
    subtitle: "Open Vacancies",
    desc: "We welcome you to the world of possibilities, where we give you all the freedom to achieve your best",
    link: "/about/careers#hiring",
    icon: Briefcase
  }
];

const workers = [
  { name: "Dr. Kazeem Durodoye", role: "CEO — Managing Director", bio: "30+ years ICT experience. World Bank Consultant on Cybersecurity for Nigeria Communications Sector. Led National Cybersecurity Policy & Strategy, NCC-CSIRT, eNaira.", img: "worker-1.webp" },
  { name: "Mr. Akinwale Mayomi Aisida", role: "Head of Threat Intelligence", bio: "Cybersecurity Researcher at the Canadian Institute of Cybersecurity, University of New Brunswick. Specializes in ML/AI-driven intrusion detection, zero-day attack identification, and threat intelligence modeling.", img: "worker-2.webp" },
  { name: "Mr. Karl Ugokwe", role: "Senior Technical Solutions Manager", bio: "Cybersecurity Specialist focused on enterprise technical solutions integrations, baseline systems architecture, and comprehensive technical account management.", img: "worker-4.webp" },
  { name: "Mr. Mark O. Okechukwu", role: "Business Development Manager", bio: "Cybersecurity Practitioner with a background in Mathematics/Statistics. Google Certified Digital Marketer. Passionate about cybersecurity, risk management, and helping organizations build secure, resilient digital environments through innovative security solutions.", img: "worker-3.webp" },
  { name: "Chiamaka Prisca", role: "CEAP Manager, Novr Academy", bio: "Manages the Cybersecurity Education and Awareness Program (CEAP) at Novr Academy, overseeing curriculum delivery and student engagement.", img: "intern-2.webp" },
];

const interns = [
  { name: "Abubakar Usman Damilare", role: "Programming and Application Development Intern", img: "intern-1.webp" },
  { name: "Adebayo Adedeji Enoch", role: "IT Lead", img: "worker-5.webp" },
  { name: "Adeyemi Fisayomi", role: "Technical Intern", img: "intern-3.webp" },
  { name: "Chukwuezugo Monwuba", role: "Cybersecurity Intern", img: "worker-6.webp" },
  { name: "Mr. Adeniran-Taiwo Luciano Eniade", role: "Penetration Tester", img: "worker-9.webp" },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CyberNovr",
  url: "https://www.cybernovr.com",
  logo: "https://www.cybernovr.com/assets/icon/cybernovr-white.svg",
  description: "Cybersecurity company protecting critical infrastructure since 2008.",
  foundingDate: "2008",
  sameAs: [
    "https://twitter.com/CyberNovr",
    "https://linkedin.com/company/cybernovr",
    "https://facebook.com/CyberNovr",
    "https://instagram.com/cybernovr",
  ],
  member: workers.map((w) => ({
    "@type": "Person",
    name: w.name,
    jobTitle: w.role,
    description: w.bio,
  })),
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-20 w-full bg-white text-zinc-900 antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      {/* Header */}
      <div className="border-b border-zinc-200 pb-10 max-w-4xl text-left">
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-zinc-900 uppercase mb-4">
          About Cybernovr
        </h1>
        <p className="text-zinc-600 text-[13px] md:text-[15px] leading-relaxed mt-4 font-normal">
          At Cybernovr, we take a holistic and comprehensive approach to cyber resilience. It&apos;s not just about one or two aspects of security or recovery program, but a 360-degree view encompassing all facets of your organization&apos;s digital ecosystem and its ability to withstand and bounce back from cyber incidents. Welcome to our world…. #cyber360resilience
        </p>
      </div>

      {/* Vision / Mission / Core Values */}
      <section className="space-y-8 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-950/[0.02] border border-purple-900/10 p-6 rounded-xl space-y-3 shadow-sm">
            <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 rounded-lg flex items-center justify-center text-red-700">
              <Eye className="h-5 w-5" />
            </div>
            <h2 className="text-[12px] font-black uppercase tracking-widest text-zinc-400 font-mono">Our Vision</h2>
            <p className="text-[15px] font-bold text-zinc-900 leading-tight uppercase tracking-tight">To achieve resilience of your Critical Information Infrastructure.</p>
          </div>
          <div className="bg-purple-950/[0.02] border border-purple-900/10 p-6 rounded-xl space-y-3 shadow-sm">
            <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 rounded-lg flex items-center justify-center text-red-700">
              <Target className="h-5 w-5" />
            </div>
            <h2 className="text-[12px] font-black uppercase tracking-widest text-zinc-400 font-mono">Our Mission</h2>
            <p className="text-[15px] text-zinc-600 leading-relaxed font-medium">To work with you to strengthen the resilience of your information assets. We will pinpoint your unique risks, prioritise your defences and help you achieve cybersecurity resilience of your critical services. These, we will deliver to your delight.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border-b border-zinc-100 pb-2">
            <h2 className="text-sm md:text-[15px] font-black uppercase tracking-widest text-zinc-400">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Heart, title: "Customer Delight", desc: "We are committed to customer satisfaction and won't stop until our clients are delighted." },
              { icon: ShieldCheck, title: "Integrity", desc: "Unwavering honesty, transparency, and a strong moral compass to maintain trust." },
              { icon: Lightbulb, title: "Innovation", desc: "Relentless innovation, creating cutting-edge solutions while swiftly adapting to new challenges." },
              { icon: Users, title: "People", desc: "Guiding our team to uphold the highest standards of quality in solutions, services, and incident response." },
              { icon: RefreshCcw, title: "Resilience", desc: "Achieving cybersecurity resilience on ourselves the same way we are to our clients." },
            ].map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="bg-purple-950/[0.02] border border-purple-900/10 p-6 rounded-xl space-y-3 shadow-sm">
                  <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 rounded-lg flex items-center justify-center text-red-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[15px] font-bold text-zinc-900 uppercase tracking-tight">{v.title}</h3>
                  <p className="text-[15px] text-zinc-600 leading-relaxed font-medium">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="space-y-16 text-left">
        <div className="space-y-6">
          <div className="border-b border-zinc-100 pb-2">
            <h2 className="text-sm md:text-[15px] font-black uppercase tracking-widest text-zinc-400">Our Management Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {workers.map((member, i) => (
              <TeamMemberCard key={i} {...member} index={i} type="worker" />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="border-b border-zinc-100 pb-2">
            <h2 className="text-sm md:text-[15px] font-black uppercase tracking-widest text-zinc-400">Technical Interns</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {interns.map((member, i) => (
              <TeamMemberCard key={i} {...member} index={i} type="intern" />
            ))}
          </div>
        </div>

        <div className="border-2 border-purple-900/10 bg-purple-950/[0.02] p-6 md:p-8 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
          <div className="space-y-1">
            <h3 className="text-[15px] font-bold text-zinc-900 uppercase tracking-tight">What Drives Us</h3>
            <p className="text-xs text-zinc-500 font-medium">Attaining a 360-degree cybersecurity resilience for your business. We keep thinking because we know <span className="text-red-700 font-bold">It is POSSIBLE</span>.</p>
          </div>
          <Link href="/about/team" className="text-red-700 hover:text-red-600 font-bold uppercase text-xs tracking-widest font-mono flex items-center gap-2 whitespace-nowrap pt-1 sm:pt-0 group">
            View Full Team Profile <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Corporate Sectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-zinc-200 text-left">
        {corporateSectors.map((sector, index) => {
          const Icon = sector.icon;
          return (
            <div key={index} className="p-6 md:p-8 bg-purple-950/[0.01] border-2 border-purple-900/5 hover:border-purple-900/20 rounded-2xl flex flex-col justify-between transition-all duration-300 shadow-sm">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[12px] text-zinc-400 font-bold uppercase tracking-widest font-mono block">{sector.subtitle}</span>
                  <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">{sector.title}</h3>
                </div>
                <p className="text-zinc-600 text-[13px] leading-relaxed font-normal">{sector.desc}</p>
              </div>
              <div className="pt-6">
                <Link href={sector.link} className="inline-flex items-center gap-1.5 text-red-700 hover:text-red-600 font-bold uppercase text-xs tracking-widest font-mono group">
                  Learn more about {sector.title} <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
