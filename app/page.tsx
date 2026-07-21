import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "./resources/blog/data";
import { newsBriefs } from "./resources/news/data";
import { webinars } from "./resources/webinar/data";
import HomeHeroButtons from "@/components/home/HomeHeroButtons";
import HomeAlertButton from "@/components/home/HomeAlertButton";
import HomeModals from "@/components/home/HomeModals";
import AnimatedStats from "@/components/home/AnimatedStats";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import FlashCardRotator from "@/components/home/FlashCardRotator";
import ImageCarousel from "@/components/home/ImageCarousel";
import IndustryTabs from "@/components/home/IndustryTabs";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "CYBERNOVR | Institutional-Grade Cybersecurity Intelligence",
  description: "Protecting critical digital infrastructures with premium intelligence solutions.",
  openGraph: {
    title: "CYBERNOVR | Institutional-Grade Cybersecurity Intelligence",
    description: "Protecting critical digital infrastructures with premium intelligence solutions.",
    url: "https://www.cybernovr.com",
    siteName: "CYBERNOVR",
    locale: "en_US",
    type: "website",
    images: [{ url: "/logo.png", width: 1080, height: 247, alt: "CyberNovr" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CYBERNOVR | Institutional-Grade Cybersecurity Intelligence",
    description: "Protecting critical digital infrastructures with premium intelligence solutions.",
  },
  alternates: { canonical: "https://www.cybernovr.com" },
  robots: { index: true, follow: true },
};

const softwareSolutions = [
  { name: "NovrSOC (by Cybernovr)", tagline: "AI-Powered Managed SOC (MSSP)", desc: "AI-powered autonomous cyber defense with 24/7 monitoring and management of your assets against cyber threats.", path: "/solutions/novrsoc", logo: "novrsoc.png", shortName: "NovrSOC" },
  { name: "NovrGRC (by Cybernovr)", tagline: "AUTOMATED GOVERNANCE, RISK & COMPLIANCE management platform for several verticals", desc: "Next-generation GRC platform providing complete visibility of your cyber risks, audit and, compliance management.", path: "/solutions/novrgrc", logo: "novrgrc.png", shortName: "NovrGRC" },
  { name: "SecuBreach (by Cybernovr)", tagline: "VULNERABILITY, THREAT & EXPOSURE MANAGEMENT", desc: "Nigeria's #1 vulnerability management solution. Bridges vulnerability management and regulatory compliance.", path: "/solutions/secubreach", logo: "secubreach.webp", shortName: "SecuBreach" },
  { name: "NovrRadar (by Cybernovr)", tagline: "LIVE THREAT IoA and EXPOSURE MANAGEMENT ENGINE", desc: "Advanced predictive threat and exposure management platform performing continuous tracking of cyber attacks.", path: "/solutions/novrradar", logo: "novrradar.png", shortName: "NovrRadar" },
];

const industryVerticals = [
  { name: "Banking", title: "Guidance on minimum cybersecurity and resilience requirements for financial sector players", desc: "Working with leading Deposit Money Banks and Payment Services Banks to secure financial transactions in Africa" },
  { name: "Communication", title: "SECURING THE BACKBONE OF THE DIGITAL ECONOMY", desc: "We help sector players to promote a unified, consistent, and resilient cybersecurity posture across the communications industry and ensure a sector-wide capacity to anticipate, detect, respond to, and recover from cyber threats" },
  { name: "Fintech", title: "CONTINUOUS RISK ASSESSMENT FOR DIGITAL WALLETS & PAYMENT GATEWAYS", desc: "We provide complete threat visibility of Indicators of Attack (IoA) and Exposure management to manage cybersecurity risks in the Fintech" },
  { name: "Energy", title: "PROTECTING OPERATIONAL TECHNOLOGY & SCADA SYSTEMS", desc: "Understanding the security of information and operational technologies is key to delivering effective cyber resilience of the energy sector" },
  { name: "Government", title: "DIGITAL PUBLIC INFRASTRUCTURE (DPI) DELIVERS A COMPLEMENT OF CRITICAL PUBLIC AND PRIVATE SERVICES", desc: "Working with sub-national governments in Nigeria, we ensure the cyber resilience of digital identity, payment networks, and data exchange platforms to enhance the integrity of DPI." },
  { name: "Education", title: "SECURING ACADEMIC INFRASTRUCTURE & STUDENT DATA ASSETS", desc: "Protecting cloud learning repositories, student database nodes, identity management platforms, and privacy profiles across institutions." },
  { name: "Health", title: "HEALTHCARE INFRASTRUCTURE PROTECTION AND PATIENT DATA ARE KEY TO US", desc: "Working tirelessly to harden medical record vaults, diagnostic information systems, hospital registry endpoints, and healthcare logistics networks." },
];

const activeTestimonials = [
  { text: "CYBERNOVR has proven to be more than a technology company\u2014it is a true partner in developing future tech professionals. When many organisations could not accommodate our students for internship due to the short duration, CYBERNOVR welcomed them and provided invaluable industry exposure. Today, one of our students, Gabriel Oloritu, proudly serves as a CYBERNOVR Ambassador. Their free cybersecurity seminars have also inspired and empowered our students. We are proud to recommend CYBERNOVR for its outstanding commitment to youth development and technology education.", author: "Omoluabi-Okechukwu B.M.", firm: "Principal, Caleb International College" },
  { text: "The Cybersecurity Program facilitated by CYBERNOVR at St. Gregory's College, Ikoyi, Lagos, was highly engaging, insightful, and impactful. The sessions were well planned, interactive, and practical, providing our students with valuable knowledge of online safety, cyber threats, digital responsibility, and best practices for navigating the digital world securely. Following the training, the students participated in an online assessment to evaluate their understanding of the concepts covered. The quality of their engagement and performance reflected the effectiveness of the program and the relevance of the content delivered. We sincerely appreciate CYBERNOVR for equipping our students with essential cybersecurity knowledge and practical skills that will serve them well in today's technology-driven world. We look forward to partnering with CYBERNOVR on more impactful initiatives in the future.", author: "Mr. Emmanuel Jaiyeoba", firm: "Head Teacher, St. Gregory's College, Ikoyi, Lagos" },
  { text: "CYBERNOVR has been a trusted partner in strengthening our cybersecurity and compliance efforts. Their expertise in PCI DSS solutions and penetration testing has helped us enhance our security posture with confidence. The team is highly professional, responsive, and committed to delivering practical, high-quality solutions tailored to our needs. We are pleased with the value they bring and confidently recommend CYBERNOVR to any organisation seeking reliable cybersecurity consulting services.", author: "Sheriff Adigun", firm: "PAYCELER, UK" },
  { text: "When I enrolled in CYBERNOVR's CEAP program, I expected foundational knowledge. What I gained was a transformative experience spanning 11 comprehensive modules\u2014from ethical hacking to cyber laws and privacy management. I completed the program with a 93.33% score, but more importantly, I developed a holistic security mindset. I began changing my own digital habits and coaching family and friends. Before this program, cybersecurity was an interest. Now, it is my chosen path.", author: "Nwankwo Odinma Emmanuel", firm: "CEAP Graduate, CYBERNOVR" },
  { text: "My time at Cybernovr has been fulfilling. I worked on the Weekly blog, news articles, and the white paper\u2014challenging at first, but I grew to enjoy it. The CEAP program taught me foundational cybersecurity concepts that helped me understand how things work and choose a career path. I noticed supply-chain attacks were especially common, with groups like 'ShinyHunters' behind most of them. Would I recommend CEAP? Absolutely. It's not just for aspiring cybersecurity professionals\u2014anyone in tech should have access to this information. It builds a strong foundation for how to think about building and securing software.", author: "Thankgod Ausaji", firm: "CEAP Graduate, CYBERNOVR" },
];

const partners = ["pat1", "pat2", "pat3", "pat4", "pat5", "pat6", "pat7"];

const flashCards = [
  blogPosts[0] && { tag: "Blog" as const, title: blogPosts[0].title, date: blogPosts[0].date, sortDate: blogPosts[0].isoDate, path: `/resources/blog/${blogPosts[0].slug}` },
  newsBriefs[0] && { tag: "News" as const, title: newsBriefs[0].title, date: newsBriefs[0].date, sortDate: newsBriefs[0].date, path: "/resources/news" },
  webinars[0] && { tag: "Webinar" as const, title: webinars[0].title, date: webinars[0].date, sortDate: webinars[0].isoDate, path: "/resources/webinar" },
]
  .filter(Boolean)
  .sort((a, b) => new Date(b!.sortDate).getTime() - new Date(a!.sortDate).getTime())
  .slice(0, 3) as Array<{ tag: "Blog" | "News" | "Webinar"; title: string; date: string; sortDate: string; path: string }>;

const carouselImages = [
  { src: "/assets/carousel/team-training.webp", alt: "IYSDC and Cybernovr train 50 teenagers in Osun", desc: "IYSDC and Cybernovr Trains 50 Teenagers in Osun with Wife of the Ooni of Ife, Princess Fadekemi Adeyeye in Attendance" },
  { src: "/assets/carousel/team-meeting.webp", alt: "CEAP certificate presentation", desc: "Cybernovr team and Gabriel Olokitun, A student of caleb internation college at the CEAP certificate presentation" },
  { src: "/assets/carousel/ncc-event_with_bgc.webp", alt: "NCC Cybersecurity Blueprint", desc: "NCC with Cybernovr Unveils Cybersecurity Blueprint to Fortify Nigeria's Telecom Backbone" },
  { src: "/assets/carousel/punch-coverage.webp", alt: "Rotary Club Lagos CEAP Training", desc: "President of Rotary Club of Lagos, Toki Mabogunje, with CEO Kazeem Durodoye and Students after the First CEAP Training Session for INTERAC Members Sponsored by the Rotary Club of Lagos" },
  { src: "/assets/carousel/team-event.webp", alt: "Ansar-ud-Deen CEAP Certificates", desc: "Ansar-ud-Deen President Prince Mosediq Adeniji Kazeem SAN Presenting CEAP Certificates to Beneficiaries" },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CyberNovr",
  url: "https://www.cybernovr.com",
  logo: "https://www.cybernovr.com/logo.png",
  description: "Institutional-grade cybersecurity intelligence for critical infrastructure",
  foundingDate: "2008",
  address: { "@type": "PostalAddress", addressCountry: "NG" },
  sameAs: [
    "https://www.linkedin.com/in/cybernovr-limited-21831a36b",
    "https://x.com/CYBERNOVR",
    "https://www.facebook.com/profile.php?id=61577489252198",
    "https://www.instagram.com/cybernovr",
  ],
  contactPoint: [
    { "@type": "ContactPoint", email: "info@cybernovr.com", contactType: "Sales" },
    { "@type": "ContactPoint", email: "incident@cybernovr.com", contactType: "Emergency" },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CyberNovr",
  url: "https://www.cybernovr.com",
};

export default function Home() {
  return (
    <div className="w-full space-y-4 bg-zinc-50 overflow-x-hidden text-zinc-900 antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      {/* Hero Section */}
      <section className="pt-24 md:pt-28 pb-6 md:pb-10 px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1536px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 space-y-4 text-left flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tight leading-none uppercase">
              Secure Your <br /> Digital <br /> Future With us
            </h1>

            <div className="pt-2 space-y-6">
              <p className="italic border-l-4 border-red-600 pl-6 py-1 text-[15px] md:text-[17px] font-bold text-red-700">
                #Cyber360Resilience
              </p>
              <div className="max-w-2xl space-y-4 text-zinc-600 text-[13px] md:text-[15px] leading-relaxed font-normal">
                <p>
                  CYBERNOVR is a cybersecurity firm dedicated to building resilience for Critical Information Infrastructures across Africa and beyond. Our business is driven towards attaining a 360-degree cybersecurity resilience for your business, utilizing the core technical philosophy that{" "}
                  <span className="text-red-700 font-bold">&quot;It is Possible&quot;</span>.
                </p>
                {/* <p>
                  We provide institutional-grade cybersecurity solutions including managed SOC operations, GRC compliance automation, vulnerability management, and AI-powered threat intelligence. We protect critical information infrastructure for organizations across banking, telecommunications, fintech, energy, government, and healthcare sectors.
                </p> */}
              </div>

              <HomeHeroButtons />
            </div>
          </div>

          {/* Right column: radar + flashcard */}
          <div className="hidden lg:flex lg:col-span-5 w-full flex-col items-center justify-between py-1">
            {/* Radar — pure CSS animation, no JavaScript state needed */}
            <div className="relative w-80 h-80 flex items-center justify-center">
              <div className="absolute w-80 h-80 border border-emerald-500/15 rounded-full" />
              <div className="absolute w-64 h-64 border border-emerald-500/25 rounded-full" />
              <div className="absolute w-44 h-44 border border-emerald-500/35 rounded-full" />
              <div className="absolute w-24 h-24 border border-emerald-500/50 rounded-full" />
              <div className="absolute w-8 h-8 border border-emerald-500/70 rounded-full" />
              <div className="absolute w-80 h-[1px] bg-emerald-500/15" />
              <div className="absolute h-80 w-[1px] bg-emerald-500/15" />
              <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-transparent via-emerald-500/5 to-emerald-500/25 animate-spin" style={{ animationDuration: "4s" }} />
              <div className="absolute w-64 h-64 rounded-full bg-gradient-to-bl from-transparent via-transparent to-emerald-500/10 animate-spin" style={{ animationDuration: "8s" }} />
              <div className="absolute top-[28%] left-[28%] z-10 text-center">
                <span className="w-3 h-3 bg-red-600 rounded-full block animate-ping" />
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full block -mt-2.5 shadow-[0_0_12px_#ef4444]" />
                <span className="font-mono text-[8px] text-red-600 font-bold block bg-zinc-50/95 px-1.5 rounded mt-1 border border-red-500/30 whitespace-nowrap">CRITICAL INTRUSION</span>
              </div>
              <div className="absolute bottom-[30%] right-[20%] z-10 text-center">
                <span className="w-3 h-3 bg-amber-500 rounded-full block animate-ping" style={{ animationDelay: "0.5s" }} />
                <span className="w-2.5 h-2.5 bg-amber-500 rounded-full block -mt-2.5 shadow-[0_0_12px_#f59e0b]" />
                <span className="font-mono text-[8px] text-amber-600 font-bold block bg-zinc-50/95 px-1.5 rounded mt-1 border border-amber-500/30 whitespace-nowrap">HIGH EXPLOIT</span>
              </div>
              <div className="absolute top-[58%] left-[16%] z-10 text-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full block animate-ping" style={{ animationDelay: "1.2s" }} />
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full block -mt-2 shadow-[0_0_8px_#a855f7]" />
                <span className="font-mono text-[7px] text-purple-600 font-bold block bg-zinc-50/95 px-1 rounded mt-1 border border-purple-500/30 whitespace-nowrap">RECON DETECTED</span>
              </div>
              <div className="absolute -bottom-12 flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  <span className="font-mono text-[11px] font-black text-zinc-500 uppercase tracking-widest">Live Attack Radar</span>
                </div>
                <span className="font-mono text-[11px] bg-red-600/10 border border-red-500/20 text-red-600 px-1.5 py-0.5 rounded font-black tracking-wider">NovrALERT</span>
              </div>
            </div>

            <HomeAlertButton />

            <FlashCardRotator cards={flashCards} />
          </div>
        </div>
      </section>

      {/* Interactive section: VAPT, Audit panels, and all modals */}
      <HomeModals />

      {/* About Mini Section */}
      <section className="py-12 my-2 bg-white max-w-[1536px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 text-left pl-4 sm:pl-6 md:pl-12 lg:pl-24">
            <h2 className="text-3xl md:text-4xl font-black text-zinc-950 uppercase tracking-tight">About Cybernovr</h2>
            <p className="text-[13px] md:text-[15px] text-zinc-600 leading-relaxed font-normal">
              Established in 2008, CYBERNOVR delivers comprehensive services in Governance, Risk, and Compliance (GRC) management, Critical Information Infrastructure Protection, and specialized educational frameworks.
            </p>
            <p className="text-[13px] md:text-[15px] text-zinc-600 leading-relaxed font-normal">
              With close to two decades of national and international cybersecurity leadership, we bring verified expertise across Information Assurance and IT Security. Our team has designed cyber resilience frameworks for sectors in Nigeria, to secure critical national information infrastructures.
            </p>
          </div>
          <div className="lg:col-span-6 w-full lg:pr-12">
            <ImageCarousel images={carouselImages} />
          </div>
        </div>
      </section>

      {/* Software Solutions */}
      <section className="py-10 pt-8 px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1536px] mx-auto text-center space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl md:text-3xl font-black uppercase tracking-tight text-zinc-950">Our Software Solutions</h2>
          <div className="w-12 h-1 bg-red-600 mx-auto rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {softwareSolutions.map((sol, idx) => (
            <div key={idx} className="bg-white border-2 border-zinc-200 p-6 rounded-xl shadow-sm hover:border-red-600/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[300px] group">
              <div className="space-y-4">
                <div className="h-16 w-full flex items-center justify-start border-b border-zinc-100 pb-2">
                  <img src={`/assets/brand/${sol.logo}`} alt={`${sol.name} Logo`} width={160} height={48} className="h-10 w-auto max-w-[160px] object-contain" />
                </div>
                <div>
                  <p className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest">{sol.tagline}</p>
                </div>
                <p className="text-zinc-600 text-[13px] md:text-[15px] leading-relaxed line-clamp-4 font-normal">{sol.desc}</p>
              </div>
              <Link href={sol.path} className="inline-flex items-center gap-1.5 text-[13px] font-black uppercase tracking-widest text-red-600 pt-4 hover:text-red-400 group-hover:gap-2.5 transition-all text-left font-mono">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Verticals */}
      <section className="py-16 bg-white px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1536px] mx-auto rounded-xl border border-zinc-200 space-y-10 shadow-sm">
        <div className="text-center space-y-2">
          <h2 className="text-xl md:text-3xl font-black uppercase tracking-tight text-zinc-950">Tailored Protection for Critical Sectors</h2>
          <p className="text-zinc-700 text-[13px] md:text-[15px] max-w-2xl mx-auto font-semibold leading-relaxed">
            Working with regulators and private sector players to secure critical national information infrastructure for several sectors.
          </p>
        </div>
        <IndustryTabs industries={industryVerticals} />
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1536px] mx-auto bg-white border border-zinc-200 rounded-xl text-center relative overflow-hidden shadow-sm min-h-[320px] flex items-center justify-center">
        <div className="absolute top-6 left-6 text-zinc-100 text-9xl font-serif select-none pointer-events-none font-black leading-none">&ldquo;</div>
        <TestimonialCarousel testimonials={activeTestimonials} />
      </section>

      {/* Statistics Banner */}
      <section className="w-full bg-purple-950 text-white border-y border-purple-900/30 py-12 shadow-inner relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <AnimatedStats />
      </section>

      {/* Partners */}
      <section className="py-12 bg-white text-center px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1536px] mx-auto rounded-xl border border-zinc-200 shadow-sm overflow-hidden relative">
        <div className="space-y-6">
          <div className="space-y-1.5">
            <h2 className="text-xl md:text-3xl font-black text-zinc-950 uppercase tracking-tight">Our Global Partners</h2>
            <p className="text-zinc-500 max-w-xl mx-auto text-[13px] md:text-[15px] font-medium">
              We collaborate with industry-leading technology providers to deliver professional cybersecurity solutions across industries.
            </p>
          </div>
          <div className="relative w-full flex items-center overflow-hidden py-4">
            <div className="flex space-x-16 animate-marqueeLeftToRight min-w-full shrink-0 items-center justify-around">
              {partners.concat(partners).map((partner, i) => (
                <img key={`${partner}-${i}`} src={`/assets/partners/${partner}.png`} alt={`Partner logo ${partner}`} width={140} height={40} loading="lazy" className="h-8 md:h-10 w-auto object-contain hover:scale-105 transition-all duration-300 cursor-pointer max-w-[140px]" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-gateway" className="pb-16 px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1536px] mx-auto pt-2">
        <div className="bg-zinc-950 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-zinc-900 transition-all duration-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]">
          <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white/[0.02]">
            <div className="space-y-4 text-left">
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">Let&apos;s Secure Your Business</h2>
              <p className="text-[13px] text-zinc-400 italic font-semibold">
                &quot;In the digital age, resilience isn&apos;t an option - it&apos;s the foundation of existence.&quot;
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 bg-white/[0.04] p-8 md:p-16 text-left">
            <ContactForm formName="securityAudit" formSource="Home Page - Security Audit" />
          </div>
        </div>
        <div className="text-center pt-6">
          <span className="text-xs uppercase font-mono tracking-widest text-primary font-bold">
            Operations: Lagos, Nigeria &amp; Calgary, Canada
          </span>
        </div>
      </section>
    </div>
  );
}
