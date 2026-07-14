"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Monitor, FileSpreadsheet, ShieldAlert, Globe, ArrowRight, Bell, CheckCircle2, X, Terminal, ShieldCheck, Star } from 'lucide-react';
import { submitWeb3Form } from "./web3forms";
import { blogPosts } from "./resources/blog/data";
import { newsBriefs } from "./resources/news/data";
import { webinars } from "./resources/webinar/data";

export default function Home() {
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isVaptModalOpen, setIsVaptModalOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [flashCardIndex, setFlashCardIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [prevCarouselIndex, setPrevCarouselIndex] = useState(0);

  // Form states
  const [securitySubmitting, setSecuritySubmitting] = useState(false);
  const [securitySucceeded, setSecuritySucceeded] = useState(false);
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSucceeded, setContactSucceeded] = useState(false);
  const [alertSubmitting, setAlertSubmitting] = useState(false);
  const [alertSucceeded, setAlertSucceeded] = useState(false);
  const [vaptSubmitting, setVaptSubmitting] = useState(false);
  const [vaptSucceeded, setVaptSucceeded] = useState(false);
  const [auditSubmitting, setAuditSubmitting] = useState(false);
  const [auditSucceeded, setAuditSucceeded] = useState(false);

  const handleSecuritySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSecuritySubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("form_name", "securityAudit");
      formData.append("form_source", "Home Page - Security Audit");
      await submitWeb3Form(formData);
      setSecuritySucceeded(true);
      e.currentTarget.reset();
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setSecuritySubmitting(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("form_name", "contactRequest");
      formData.append("form_source", "Home Page - Contact Modal");
      await submitWeb3Form(formData);
      setContactSucceeded(true);
      e.currentTarget.reset();
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setContactSubmitting(false);
    }
  };

  const handleAlertSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAlertSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("form_name", "novralertSubscription");
      formData.append("form_source", "Home Page - NovrALERT Modal");
      await submitWeb3Form(formData);
      setAlertSucceeded(true);
      e.currentTarget.reset();
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setAlertSubmitting(false);
    }
  };

  const handleVaptSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setVaptSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("form_name", "vaptScope");
      formData.append("form_source", "Home Page - VAPT Modal");
      await submitWeb3Form(formData);
      setVaptSucceeded(true);
      e.currentTarget.reset();
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setVaptSubmitting(false);
    }
  };

  const handleAuditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAuditSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("form_name", "auditGap");
      formData.append("form_source", "Home Page - Audit Modal");
      await submitWeb3Form(formData);
      setAuditSucceeded(true);
      e.currentTarget.reset();
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setAuditSubmitting(false);
    }
  };

  // Dynamic Animated Metrics States
  const [vulnerabilitiesCount, setVulnerabilitiesCount] = useState(0);
  const [frameworksCount, setFrameworksCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [graduatesCount, setGraduatesCount] = useState(0);

  const COMPANY_CONTACTS = {
    emails: {
      general: "info@cybernovr.com",
      incidentResponse: "incident@cybernovr.com",
      alerts: "alerts@cybernovr.com"
    },
    socials: {
      linkedin: "https://www.linkedin.com/in/cybernovr-limited-21831a36b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      x: "https://x.com/CYBERNOVR",
      instagram: "https://www.instagram.com/cybernovr?igsh=MW45YThxdm9yNjd0Yw==",
      facebook: "https://www.facebook.com/profile.php?id=61577489252198",
      tiktok: "https://www.tiktok.com/@cybernovr"
    }
  };

  const softwareSolutions = [
    { name: "NovrSOC (by Cybernovr)", tagline: "AI-Powered Managed SOC (MSSP)", desc: "AI-powered autonomous cyber defense with 24/7 monitoring and management of your assets against cyber threats.", path: "/solutions/novrsoc", logo: "novrsoc.png", shortName: "NovrSOC" },
    { name: "NovrGRC (by Cybernovr)", tagline: "AUTOMATED GOVERNANCE, RISK & COMPLIANCE management platform for several verticals", desc: "Next-generation GRC platform providing complete visibility of your cyber risks, audit and, compliance management.", path: "/solutions/novrgrc", logo: "novrgrc.png", shortName: "NovrGRC" },
    { name: "SecuBreach (by Cybernovr)", tagline: "VULNERABILITY, THREAT & EXPOSURE MANAGEMENT", desc: "Nigeria's #1 vulnerability management solution. Bridges vulnerability management and regulatory compliance.", path: "/solutions/secubreach", logo: "secubreach.webp", shortName: "SecuBreach" },
    { name: "NovrRadar (by Cybernovr)", tagline: "LIVE THREAT IoA and EXPOSURE MANAGEMENT ENGINE", desc: "Advanced predictive threat and exposure management platform performing continuous tracking of cyber attacks.", path: "/solutions/novrradar", logo: "novrradar.png", shortName: "NovrRadar" }
  ];

  const industryVerticals = [
    { name: "Banking", title: "Guidance on minimum cybersecurity and resilience requirements for financial sector players", desc: "Working with leading Deposit Money Banks and Payment Services Banks to secure financial transactions in Africa" },
    { name: "Communication", title: "SECURING THE BACKBONE OF THE DIGITAL ECONOMY", desc: "We help sector players to promote a unified, consistent, and resilient cybersecurity posture across the communications industry and ensure a sector-wide capacity to anticipate, detect, respond to, and recover from cyber threats" },
    { name: "Fintech", title: "CONTINUOUS RISK ASSESSMENT FOR DIGITAL WALLETS & PAYMENT GATEWAYS", desc: "We provide complete threat visibility of Indicators of Attack (IoA) and Exposure management to manage cybersecurity risks in the Fintech" },
    { name: "Energy", title: "PROTECTING OPERATIONAL TECHNOLOGY & SCADA SYSTEMS", desc: "Understanding the security of information and operational technologies is key to delivering effective cyber resilience of the energy sector" },
    { name: "Government", title: "DIGITAL PUBLIC INFRASTRUCTURE (DPI) DELIVERS A COMPLEMENT OF CRITICAL PUBLIC AND PRIVATE SERVICES", desc: "Working with sub-national governments in Nigeria, we ensure the cyber resilience of digital identity, payment networks, and data exchange platforms to enhance the integrity of DPI." },
    { name: "Education", title: "SECURING ACADEMIC INFRASTRUCTURE & STUDENT DATA ASSETS", desc: "Protecting cloud learning repositories, student database nodes, identity management platforms, and privacy profiles across institutions." },
    { name: "Health", title: "HEALTHCARE INFRASTRUCTURE PROTECTION AND PATIENT DATA ARE KEY TO US", desc: "Working tirelessly to harden medical record vaults, diagnostic information systems, hospital registry endpoints, and healthcare logistics networks." }
  ];

  const activeTestimonials = [
    { text: "CYBERNOVR has proven to be more than a technology company—it is a true partner in developing future tech professionals. When many organisations could not accommodate our students for internship due to the short duration, CYBERNOVR welcomed them and provided invaluable industry exposure. Today, one of our students, Gabriel Oloritu, proudly serves as a CYBERNOVR Ambassador. Their free cybersecurity seminars have also inspired and empowered our students. We are proud to recommend CYBERNOVR for its outstanding commitment to youth development and technology education.", author: "Omoluabi-Okechukwu B.M.", firm: "Principal, Caleb International College" },
    { text: "The Cybersecurity Program facilitated by CYBERNOVR at St. Gregory's College, Ikoyi, Lagos, was highly engaging, insightful, and impactful. The sessions were well planned, interactive, and practical, providing our students with valuable knowledge of online safety, cyber threats, digital responsibility, and best practices for navigating the digital world securely. Following the training, the students participated in an online assessment to evaluate their understanding of the concepts covered. The quality of their engagement and performance reflected the effectiveness of the program and the relevance of the content delivered. We sincerely appreciate CYBERNOVR for equipping our students with essential cybersecurity knowledge and practical skills that will serve them well in today's technology-driven world. We look forward to partnering with CYBERNOVR on more impactful initiatives in the future.", author: "Mr. Emmanuel Jaiyeoba", firm: "Head Teacher, St. Gregory's College, Ikoyi, Lagos" },
    { text: "CYBERNOVR has been a trusted partner in strengthening our cybersecurity and compliance efforts. Their expertise in PCI DSS solutions and penetration testing has helped us enhance our security posture with confidence. The team is highly professional, responsive, and committed to delivering practical, high-quality solutions tailored to our needs. We are pleased with the value they bring and confidently recommend CYBERNOVR to any organisation seeking reliable cybersecurity consulting services.", author: "Sheriff Adigun", firm: "PAYCELER, UK" },
    { text: "When I enrolled in CYBERNOVR's CEAP program, I expected foundational knowledge. What I gained was a transformative experience spanning 11 comprehensive modules—from ethical hacking to cyber laws and privacy management. I completed the program with a 93.33% score, but more importantly, I developed a holistic security mindset. I began changing my own digital habits and coaching family and friends. Before this program, cybersecurity was an interest. Now, it is my chosen path.", author: "Nwankwo Odinma Emmanuel", firm: "CEAP Graduate, CYBERNOVR" },
    { text: "My time at Cybernovr has been fulfilling. I worked on the Weekly blog, news articles, and the white paper—challenging at first, but I grew to enjoy it. The CEAP program taught me foundational cybersecurity concepts that helped me understand how things work and choose a career path. I noticed supply-chain attacks were especially common, with groups like 'ShinyHunters' behind most of them. Would I recommend CEAP? Absolutely. It's not just for aspiring cybersecurity professionals—anyone in tech should have access to this information. It builds a strong foundation for how to think about building and securing software.", author: "Thankgod Ausaji", firm: "CEAP Graduate, CYBERNOVR" }
  ];

  const partners = ['pat1', 'pat2', 'pat3', 'pat4', 'pat5', 'pat6', 'pat7'];

  const flashCards = [
    blogPosts[0] && { tag: "Blog" as const, title: blogPosts[0].title, date: blogPosts[0].date, sortDate: blogPosts[0].isoDate, path: `/resources/blog/${blogPosts[0].slug}` },
    newsBriefs[0] && { tag: "News" as const, title: newsBriefs[0].title, date: newsBriefs[0].date, sortDate: newsBriefs[0].date, path: "/resources/news" },
    webinars[0] && { tag: "Webinar" as const, title: webinars[0].title, date: webinars[0].date, sortDate: webinars[0].isoDate, path: "/resources/webinar" },
  ]
    .filter(Boolean)
    .sort((a, b) => new Date(b!.sortDate).getTime() - new Date(a!.sortDate).getTime())
    .slice(0, 3);

  const carouselImages = [
    // { src: "/assets/carousel/cyber-event-rotary.webp", alt: "Cybernovr at community event" },
    {
      src: "/assets/carousel/team-training.webp",
      alt: "IYSDC and Cybernovr train 50 teenagers in Osun",
      desc: "IYSDC and Cybernovr Trains 50 Teenagers in Osun with Wife of the Ooni of Ife, Princess Fadekemi Adeyeye in Attendance",
    },
    {
      src: "/assets/carousel/team-meeting.webp",
      alt: "CEAP certificate presentation",
      desc: "Cybernovr team and Gabriel Olokitun, A student of caleb internation college at the CEAP certificate presentation",
    },
    {
      src: "/assets/carousel/ncc-event_with_bgc.webp",
      alt: "NCC Cybersecurity Blueprint",
      desc: "NCC with Cybernovr Unveils Cybersecurity Blueprint to Fortify Nigeria's Telecom Backbone",
    },
    {
      src: "/assets/carousel/punch-coverage.webp",
      alt: "Rotary Club Lagos CEAP Training",
      desc: "President of Rotary Club of Lagos, Toki Mabogunje, with CEO Kazeem Durodoye and Students after the First CEAP Training Session for INTERAC Members Sponsored by the Rotary Club of Lagos",
    },
    {
      src: "/assets/carousel/team-event.webp",
      alt: "Ansar-ud-Deen CEAP Certificates",
      desc: "Ansar-ud-Deen President Prince Mosediq Adeniji Kazeem SAN Presenting CEAP Certificates to Beneficiaries Attended by Distinguished Members and Stakeholders including: Former National Secretary, Alhaji Lateef Olaseinde Karim, SAN; Lagos Branch Chairman, Alhaji Kamorudeen A. Salami; Lagos Branch Secretary, Alhaji Sikiru Aregbe, Esq.; National Chairman, ADYAN, Alhaji Abdul-Rafiu Ogunlola; Division 4 Chairman, Alhaji Ganiyu O. Liadi; Alhaji Oriola; Hon. Jubril Shasore (SSA to the National President); Director of Cybernovr, Doctor Kazeen Durodoye among others.",
    },
  ];

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000;

    const animateMetrics = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setExperienceCount(Math.floor(progress * 18));
      setVulnerabilitiesCount(Math.floor(progress * 4820));
      setFrameworksCount(Math.floor(progress * 7));
      setProjectsCount(Math.floor(progress * 30));
      setGraduatesCount(Math.floor(progress * 200));

      if (progress < 1) {
        requestAnimationFrame(animateMetrics);
      }
    };

    requestAnimationFrame(animateMetrics);
  }, []);

  const replayStat = (target: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter(0);
    let startTime: number | null = null;
    const duration = 1200;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setter(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % activeTestimonials.length);
    }, 8000);
    return () => clearInterval(testimonialTimer);
  }, []);

  useEffect(() => {
    const flashTimer = setInterval(() => {
      setFlashCardIndex((prev) => (prev + 1) % flashCards.length);
    }, 3500);
    return () => clearInterval(flashTimer);
  }, []);

  useEffect(() => {
    const carouselTimer = setInterval(() => {
      setPrevCarouselIndex(carouselIndex);
      setCarouselIndex((prev) => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(carouselTimer);
  }, [carouselIndex]);

  const scrollToContactForm = () => {
    const target = document.getElementById('contact-gateway');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full space-y-4 bg-zinc-50 overflow-x-hidden text-zinc-900 antialiased">
      {/* [Module 1: Hero Section] */}
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
                  CYBERNOVR is a cybersecurity firm dedicated to building
                  resilience for Critical Information Infrastructures across
                  Africa and beyond. Our business is driven towards attaining a
                  360-degree cybersecurity resilience for your business,
                  utilizing the core technical philosophy that{" "}
                  <span className="text-red-700 font-bold">
                    "It is Possible"
                  </span>
                  .
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold rounded-md active:scale-95 transition-all text-[13px] uppercase tracking-widest shadow-md flex items-center justify-center gap-2 font-mono"
                >
                  Request A Demo <ArrowRight className="h-4 w-4" />
                </button>
                <Link
                  href="/academy"
                  className="w-full sm:w-auto border-2 border-zinc-200 hover:border-red-600 text-zinc-700 hover:text-red-600 px-8 py-4 font-bold rounded-md hover:bg-zinc-50 transition-all text-[13px] uppercase tracking-widest text-center font-mono"
                >
                  Enroll At Academy
                </Link>
              </div>
            </div>
          </div>

          {/* Right column: radar + flashcard — height constrained to match left column */}
          <div className="hidden lg:flex lg:col-span-5 w-full flex-col items-center justify-between py-1">
            {/* Radar — sized to fill upper portion without overflow */}
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Concentric rings */}
              <div className="absolute w-80 h-80 border border-emerald-500/15 rounded-full" />
              <div className="absolute w-64 h-64 border border-emerald-500/25 rounded-full" />
              <div className="absolute w-44 h-44 border border-emerald-500/35 rounded-full" />
              <div className="absolute w-24 h-24 border border-emerald-500/50 rounded-full" />
              <div className="absolute w-8 h-8 border border-emerald-500/70 rounded-full" />

              {/* Crosshairs */}
              <div className="absolute w-80 h-[1px] bg-emerald-500/15" />
              <div className="absolute h-80 w-[1px] bg-emerald-500/15" />

              {/* Spinning sweep */}
              <div
                className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-transparent via-emerald-500/5 to-emerald-500/25 animate-spin"
                style={{ animationDuration: "4s" }}
              />

              {/* Second slower sweep for depth */}
              <div
                className="absolute w-64 h-64 rounded-full bg-gradient-to-bl from-transparent via-transparent to-emerald-500/10 animate-spin"
                style={{ animationDuration: "8s" }}
              />

              {/* Critical intrusion dot */}
              <div className="absolute top-[28%] left-[28%] z-10 text-center">
                <span className="w-3 h-3 bg-red-600 rounded-full block animate-ping" />
                <span className="w-2.5 h-2.5 bg-red-500 rounded-full block -mt-2.5 shadow-[0_0_12px_#ef4444]" />
                <span className="font-mono text-[8px] text-red-600 font-bold block bg-zinc-50/95 px-1.5 rounded mt-1 border border-red-500/30 whitespace-nowrap">
                  CRITICAL INTRUSION
                </span>
              </div>

              {/* High exploit dot */}
              <div className="absolute bottom-[30%] right-[20%] z-10 text-center">
                <span
                  className="w-3 h-3 bg-amber-500 rounded-full block animate-ping"
                  style={{ animationDelay: "0.5s" }}
                />
                <span className="w-2.5 h-2.5 bg-amber-500 rounded-full block -mt-2.5 shadow-[0_0_12px_#f59e0b]" />
                <span className="font-mono text-[8px] text-amber-600 font-bold block bg-zinc-50/95 px-1.5 rounded mt-1 border border-amber-500/30 whitespace-nowrap">
                  HIGH EXPLOIT
                </span>
              </div>

              {/* Recon dot */}
              <div className="absolute top-[58%] left-[16%] z-10 text-center">
                <span
                  className="w-2 h-2 bg-purple-500 rounded-full block animate-ping"
                  style={{ animationDelay: "1.2s" }}
                />
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full block -mt-2 shadow-[0_0_8px_#a855f7]" />
                <span className="font-mono text-[7px] text-purple-600 font-bold block bg-zinc-50/95 px-1 rounded mt-1 border border-purple-500/30 whitespace-nowrap">
                  RECON DETECTED
                </span>
              </div>

              {/* Live label */}
              <div className="absolute -bottom-12 flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  <span className="font-mono text-[11px] font-black text-zinc-500 uppercase tracking-widest">
                    Live Attack Radar
                  </span>
                </div>
                <span className="font-mono text-[11px] bg-red-600/10 border border-red-500/20 text-red-600 px-1.5 py-0.5 rounded font-black tracking-wider">
                  NovrALERT
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsAlertModalOpen(true)}
              className="mt-14 mb-2 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 font-bold rounded-md active:scale-95 transition-all text-[11px] uppercase tracking-widest shadow-md font-mono"
            >
              <Bell className="h-3 w-3" />
              Receive Alert Broadcasts
            </button>

            {/* Rotating flashcard — sits flush at the bottom of the column */}
            <Link
              href={flashCards[flashCardIndex].path}
              className="w-full bg-white border border-zinc-200 hover:border-red-500/40 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 group block"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1.5 flex-1 min-w-0">
                  <span
                    className={`inline-block font-mono text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded border ${
                      flashCards[flashCardIndex].tag === "Blog"
                        ? "bg-purple-950/[0.05] border-purple-900/20 text-purple-700"
                        : flashCards[flashCardIndex].tag === "News"
                          ? "bg-red-600/10 border-red-500/20 text-red-600"
                          : "bg-amber-500/10 border-amber-500/20 text-amber-700"
                    }`}
                  >
                    {flashCards[flashCardIndex].tag}
                  </span>
                  <p className="text-[13px] font-bold text-zinc-900 leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                    {flashCards[flashCardIndex].title}
                  </p>
                  <p className="font-mono text-[11px] text-zinc-500 font-bold tracking-wider uppercase">
                    {flashCards[flashCardIndex].date}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-zinc-300 group-hover:text-red-500 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
              </div>

              <div className="flex items-center gap-1.5 mt-3 pt-2.5 border-t border-zinc-100">
                {flashCards.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 rounded-full transition-all duration-500 ${i === flashCardIndex ? "w-6 bg-red-600" : "w-2 bg-zinc-200"}`}
                  />
                ))}
                <span className="ml-auto font-mono text-[10px] text-zinc-400 tracking-widest uppercase font-bold">
                  Latest Updates
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* VAPT & IS AUDIT PANELS */}
      <section className="py-6 px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1536px] mx-auto text-left grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl flex flex-col space-y-4 hover:border-purple-900/20 transition-all duration-300">
          <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
            <Terminal className="h-5 w-5" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight uppercase">
              VAPT Scope Request
            </h2>
            <span className="text-sm font-mono font-black tracking-widest text-red-600 block uppercase">
              Where are my weaknesses and who's attacking me?
            </span>
            <p className="text-zinc-600 text-[11px] md:text-[15px] leading-relaxed font-normal">
              We empower you with knowledge of where you are vulnerable and who
              is attacking you, enabling you to develop a resilience framework
              tailored to your business. Talk to us about how.
            </p>
          </div>
          <button
            onClick={() => setIsVaptModalOpen(true)}
            className="inline-flex items-center gap-1.5 text-[13px] font-black tracking-widest text-red-600 font-mono uppercase hover:text-red-500 pt-2 group mt-auto"
          >
            Scope your VAPT{" "}
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl flex flex-col space-y-4 hover:border-purple-900/20 transition-all duration-300">
          <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight uppercase">
              Audit &amp; Gap Analysis
            </h2>
            <span className="text-sm font-mono font-black tracking-widest text-red-600 block uppercase">
              Compliance Readiness &amp; Strategy Auditing
            </span>
            <div className="text-zinc-600 text-[11px] md:text-[15px] leading-relaxed font-normal">
              <p className="mb-2">We help you with</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 shrink-0">•</span>
                  Organization-wide awareness to ensure cyber resilience
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 shrink-0">•</span>
                  Capabilities most important for ensuring the continuity of
                  critical services during a cyberattack
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 shrink-0">•</span>Need
                  for dialogue among participants from different functional
                  areas within
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5 shrink-0">•</span>The
                  maturity of your organization's resilience in the face of a
                  cyber-attack
                </li>
              </ul>
            </div>
          </div>
          <button
            onClick={() => setIsAuditModalOpen(true)}
            className="inline-flex items-center gap-1.5 text-[13px] font-black tracking-widest text-red-600 font-mono uppercase hover:text-red-500 pt-2 group mt-auto"
          >
            Scope your audits{" "}
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* [Module 2: About Mini Section] */}
      <section className="py-12 my-2 bg-white max-w-[1536px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 text-left pl-4 sm:pl-6 md:pl-12 lg:pl-24">
            <h2 className="text-3xl md:text-4xl font-black text-zinc-950 uppercase tracking-tight">
              About Cybernovr
            </h2>
            <p className="text-[13px] md:text-[15px] text-zinc-600 leading-relaxed font-normal">
              Established in 2008, CYBERNOVR delivers comprehensive services in
              Governance, Risk, and Compliance (GRC) management, Critical
              Information Infrastructure Protection, and specialized educational
              frameworks.
            </p>
            <p className="text-[13px] md:text-[15px] text-zinc-600 leading-relaxed font-normal">
              With close to two decades of national and international
              cybersecurity leadership, we bring verified expertise across
              Information Assurance and IT Security. Our team has designed cyber
              resilience frameworks for sectors in Nigeria, to secure critical
              national information infrastructures.
            </p>
          </div>
          <div className="lg:col-span-6 w-full lg:pr-12">
            <div className="w-full relative group">
              <div className="w-full aspect-[5/4] overflow-hidden relative rounded-xl">
                {carouselImages.map((img, i) => {
                  const isActive = i === carouselIndex;
                  const isWrapping =
                    prevCarouselIndex === carouselImages.length - 1 &&
                    carouselIndex === 0;
                  return (
                    <div
                      key={i}
                      className={`absolute inset-0 ${
                        isWrapping
                          ? isActive
                            ? "opacity-100 z-10"
                            : "opacity-0 z-0"
                          : `transition-opacity duration-700 ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"}`
                      }`}
                    >
              <img
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="w-full h-full object-cover object-top"
              />
                      {img.desc && (
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pb-5">
                          <p className="text-white text-xs font-bold leading-snug">
                            {img.desc}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-center gap-1.5 mt-3">
                {carouselImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCarouselIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === carouselIndex ? "w-6 bg-red-600" : "w-2 bg-zinc-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [Module 3: Our Software Solutions] */}
      <section className="py-10 pt-8 px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1536px] mx-auto text-center space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl md:text-3xl font-black uppercase tracking-tight text-zinc-950">
            Our Software Solutions
          </h2>
          <div className="w-12 h-1 bg-red-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {softwareSolutions.map((sol, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-zinc-200 p-6 rounded-xl shadow-sm hover:border-red-600/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[300px] group"
            >
              <div className="space-y-4">
                {/* FIXED: Cleared plaintext header name loop tracking. Hardened custom scaling bounds for specific vectors */}
                <div className="h-16 w-full flex items-center justify-start border-b border-zinc-100 pb-2">
                  <img
                    src={`/assets/brand/${sol.logo}`}
                    alt={`${sol.name} Logo`}
                    width={160}
                    height={48}
                    className="h-10 w-auto max-w-[160px] object-contain"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                      const fallback = document.getElementById(`fb-sol-${idx}`);
                      if (fallback) fallback.style.display = "block";
                    }}
                  />
                  <span
                    id={`fb-sol-${idx}`}
                    className="hidden font-mono font-black text-base uppercase tracking-wider text-purple-950"
                  >
                    {sol.shortName}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest">
                    {sol.tagline}
                  </p>
                </div>
                <p className="text-zinc-600 text-[13px] md:text-[15px] leading-relaxed line-clamp-4 font-normal">
                  {sol.desc}
                </p>
              </div>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-[13px] font-black uppercase tracking-widest text-red-600 pt-4 hover:text-red-400 group-hover:gap-2.5 transition-all text-left font-mono"
              >
                Request a Demo <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* [Module 4: Tailored Protection for Critical Sectors] */}
      <section className="py-16 bg-white px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1536px] mx-auto rounded-xl border border-zinc-200 space-y-10 shadow-sm">
        <div className="text-center space-y-2">
          <h2 className="text-xl md:text-3xl font-black uppercase tracking-tight text-zinc-950">
            Tailored Protection for Critical Sectors
          </h2>
          <p className="text-zinc-700 text-[13px] md:text-[15px] max-w-2xl mx-auto font-semibold leading-relaxed">
            Working with regulators and private sector players to secure
            critical national information infrastructure for several sectors.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-zinc-100 pb-6">
          {industryVerticals.map((ind, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndustry(i)}
              className={`px-5 py-2.5 rounded-md text-sm font-black uppercase tracking-wider transition-all whitespace-nowrap border ${
                selectedIndustry === i
                  ? "bg-purple-600 border-purple-600 text-white shadow-sm font-black"
                  : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-zinc-100 font-bold"
              }`}
            >
              <span>{ind.name}</span>
            </button>
          ))}
        </div>

        <div className="bg-purple-950 text-white border border-purple-900/40 p-8 md:p-12 rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[260px] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-transparent to-transparent pointer-events-none" />
          <div className="lg:col-span-8 space-y-4 relative z-10 text-left">
            <h3 className="text-xl md:text-2xl font-black text-white leading-tight uppercase tracking-tight">
              {industryVerticals[selectedIndustry].title}
            </h3>
            <p className="text-purple-200 text-[13px] md:text-[15px] leading-relaxed max-w-3xl font-normal">
              {industryVerticals[selectedIndustry]?.desc}
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end relative z-10 w-full">
            <Link
              href="/solutions"
              className="w-full lg:w-auto bg-red-600 hover:bg-red-700 text-white font-black text-[13px] uppercase tracking-widest px-6 py-4 rounded-md text-center transition-all shadow-md font-mono"
            >
              Review Industry Use-Case
            </Link>
          </div>
        </div>
      </section>

      {/* [Module 5: CEAP Academy Testimonial Block] */}
      <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1536px] mx-auto bg-white border border-zinc-200 rounded-xl text-center relative overflow-hidden shadow-sm min-h-[320px] flex items-center justify-center">
        <div className="absolute top-6 left-6 text-zinc-100 text-9xl font-serif select-none pointer-events-none font-black leading-none">
          “
        </div>
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="flex justify-center gap-1 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="text-base md:text-lg text-zinc-800 font-semibold leading-relaxed italic transition-opacity duration-500">
            "{activeTestimonials[testimonialIndex].text}"
          </p>
          <div className="pt-2">
            <h4 className="text-sm md:text-base font-black text-zinc-950 uppercase tracking-wider">
              {activeTestimonials[testimonialIndex].author}
            </h4>
            <p className="text-sm font-mono font-black text-red-600 tracking-widest uppercase mt-0.5">
              {activeTestimonials[testimonialIndex].firm}
            </p>
          </div>
        </div>
      </section>

      {/* [Module 6: Statistics Banner] */}
      <section className="w-full bg-purple-950 text-white border-y border-purple-900/30 py-12 shadow-inner relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 grid grid-cols-2 lg:grid-cols-5 gap-8 text-center font-mono relative z-10">
          <div
            onMouseEnter={() => replayStat(18, setExperienceCount)}
            className="cursor-default transition-transform hover:scale-105"
          >
            <h4 className="text-3xl md:text-4xl font-black text-white leading-none tracking-tight">
              {experienceCount}+
            </h4>
            <p className="text-xs text-purple-300 uppercase tracking-widest mt-2 font-black">
              Years Experience
            </p>
          </div>
          <div
            onMouseEnter={() => replayStat(4820, setVulnerabilitiesCount)}
            className="cursor-default transition-transform hover:scale-105"
          >
            <h4 className="text-3xl md:text-4xl font-black text-red-500 leading-none tracking-tight">
              {vulnerabilitiesCount}+
            </h4>
            <p className="text-xs text-purple-300 uppercase tracking-widest mt-2 font-black">
              Vulnerabilities Remediated
            </p>
          </div>
          <div
            onMouseEnter={() => replayStat(7, setFrameworksCount)}
            className="cursor-default transition-transform hover:scale-105"
          >
            <h4 className="text-3xl md:text-4xl font-black text-white leading-none tracking-tight">
              {frameworksCount}
            </h4>
            <p className="text-xs text-purple-300 uppercase tracking-widest mt-2 font-black">
              Compliance Frameworks
            </p>
          </div>
          <div
            onMouseEnter={() => replayStat(30, setProjectsCount)}
            className="cursor-default transition-transform hover:scale-105"
          >
            <h4 className="text-3xl md:text-4xl font-black text-white leading-none tracking-tight">
              {projectsCount}+
            </h4>
            <p className="text-xs text-purple-300 uppercase tracking-widest mt-2 font-black">
              National Projects
            </p>
          </div>
          <div
            onMouseEnter={() => replayStat(200, setGraduatesCount)}
            className="cursor-default transition-transform hover:scale-105"
          >
            <h4 className="text-3xl md:text-4xl font-black text-white leading-none tracking-tight">
              {graduatesCount}+
            </h4>
            <p className="text-xs text-purple-300 uppercase tracking-widest mt-2 font-black">
              Academy Graduates
            </p>
          </div>
        </div>
      </section>

      {/* [Global Partners Showcase Component] */}
      <section className="py-12 bg-white text-center px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1536px] mx-auto rounded-xl border border-zinc-200 shadow-sm overflow-hidden relative">
        <div className="space-y-6">
          <div className="space-y-1.5">
            <h2 className="text-xl md:text-3xl font-black text-zinc-950 uppercase tracking-tight">
              Our Global Partners
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto text-[13px] md:text-[15px] font-medium">
              We collaborate with industry-leading technology providers to
              deliver professional cybersecurity solutions across industries.
            </p>
          </div>

          <div className="relative w-full flex items-center overflow-hidden py-4">
            <div className="flex space-x-16 animate-marqueeLeftToRight min-w-full shrink-0 items-center justify-around">
              {partners.concat(partners).map((partner, i) => (
                <img
                  key={`${partner}-${i}`}
                  src={`/assets/partners/${partner}.png`}
                  alt={`Partner logo ${partner}`}
                  width={140}
                  height={40}
                  loading="lazy"
                  className="h-8 md:h-10 w-auto object-contain hover:scale-105 transition-all duration-300 cursor-pointer max-w-[140px]"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* [Contact Form Container Box] */}
      <section
        id="contact-gateway"
        className="pb-16 px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1536px] mx-auto pt-2"
      >
        <div className="bg-zinc-950 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-zinc-900 transition-all duration-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]">
          <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white/[0.02]">
            <div className="space-y-4 text-left">
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                Let's Secure Your Business
              </h2>
              <p className="text-[13px] text-zinc-400 italic font-semibold">
                "In the digital age, resilience isn't an option - it's the
                foundation of existence."
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white/[0.04] p-8 md:p-16 text-left">
            {securitySucceeded ? (
              <div className="py-10 text-center flex flex-col items-center justify-center space-y-3">
                <CheckCircle2 className="h-12 w-12 text-emerald-500 animate-bounce" />
                <h4 className="text-[15px] font-black uppercase tracking-wide text-white">
                  Request Submitted
                </h4>
                <p className="text-xs text-zinc-400 max-w-xs mx-auto font-medium">
                  Our team will be in touch within 24 hours.
                </p>
                <button onClick={() => setSecuritySucceeded(false)} className="text-[13px] text-red-400 hover:text-red-300 font-mono font-bold uppercase tracking-wider mt-2">
                  Submit Another Request
                </button>
              </div>
            ) : (
            <form
              className="space-y-6"
              onSubmit={handleSecuritySubmit}
            >
              <div className="space-y-5">
                <div className="space-y-1">
                  <label className="text-[13px] font-bold text-zinc-300 font-mono uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-[13px] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal"
                    placeholder="Your name"
                    type="text"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[13px] font-bold text-zinc-300 font-mono uppercase tracking-wider">
                    Corporate Email *
                  </label>
                  <input
                    name="email"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-[13px] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal"
                    placeholder="you@company.com"
                    type="email"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[13px] font-bold text-zinc-300 font-mono uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    name="phone"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-[15px] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal"
                    placeholder="Contact Phone Number"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9+\-\s()]+"
                    title="Please enter a valid phone number"
                    onKeyDown={(e) => {
                      if (
                        !/[0-9+\-\s()]/.test(e.key) &&
                        ![
                          "Backspace",
                          "Delete",
                          "Tab",
                          "ArrowLeft",
                          "ArrowRight",
                        ].includes(e.key)
                      ) {
                        e.preventDefault();
                      }
                    }}
                    required
                  />
                </div>

                <div className="space-y-1.5 pt-1">
                  <label className="text-[13px] font-bold text-zinc-300 font-mono uppercase tracking-wider block">
                    Comments
                  </label>
                  <textarea
                    name="comments"
                    rows={4}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded p-4 text-[13px] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all resize-none font-normal"
                    placeholder="How may we help you?"
                  ></textarea>
                </div>
              </div>

              <button
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-black uppercase tracking-widest rounded shadow-xl transition-all text-[13px] font-mono disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={securitySubmitting}
              >
                {securitySubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
            )}
          </div>
        </div>
        <div className="text-center pt-6">
          <span className="text-xs uppercase font-mono tracking-widest text-primary font-bold">
            Operations: Lagos, Nigeria &amp; Calgary, Canada
          </span>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl relative text-left overflow-hidden">
            <div className="bg-zinc-950 px-8 py-6 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-lg font-black uppercase tracking-tight text-white">
                  Let's Secure Your Business
                </h3>
                <p className="text-[15px] text-zinc-400 italic font-medium">
                  "In the digital age, resilience isn't an option - it's the
                  foundation of existence."
                </p>
              </div>
              <button
                onClick={() => {
                  setIsContactModalOpen(false);
                  setContactSucceeded(false);
                }}
                className="text-white/50 hover:text-white transition-colors shrink-0 mt-1"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-8">
              {contactSucceeded ? (
                <div className="py-10 text-center flex flex-col items-center justify-center space-y-3">
                  <CheckCircle2 className="h-12 w-12 text-emerald-500 animate-bounce" />
                  <h4 className="text-[15px] font-black uppercase tracking-wide text-zinc-900">
                    Request Submitted
                  </h4>
                  <p className="text-xs text-zinc-500 max-w-xs mx-auto font-medium">
                    Our team will be in touch within 24 hours.
                  </p>
                  <button onClick={() => setContactSucceeded(false)} className="text-[13px] text-red-600 hover:text-red-700 font-mono font-bold uppercase tracking-wider mt-2">
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form
                  className="space-y-4"
                  onSubmit={handleContactSubmit}
                >
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold text-zinc-400 font-mono uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-[13px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/30 transition-all font-normal"
                      placeholder="Your name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold text-zinc-400 font-mono uppercase tracking-wider">
                      Corporate Email *
                    </label>
                    <input
                      name="email"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-[13px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/30 transition-all font-normal"
                      placeholder="you@company.com"
                      type="email"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold text-zinc-400 font-mono uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-[13px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/30 transition-all font-normal"
                      placeholder="Contact Phone Number"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9+\-\s()]+"
                      title="Please enter a valid phone number"
                      onKeyDown={(e) => {
                        if (
                          !/[0-9+\-\s()]/.test(e.key) &&
                          ![
                            "Backspace",
                            "Delete",
                            "Tab",
                            "ArrowLeft",
                            "ArrowRight",
                          ].includes(e.key)
                        ) {
                          e.preventDefault();
                        }
                      }}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold text-zinc-400 font-mono uppercase tracking-wider">
                      Comments
                    </label>
                    <textarea
                      name="comments"
                      rows={3}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-4 text-[13px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/30 transition-all resize-none font-normal"
                      placeholder="How may we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={contactSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-black uppercase tracking-widest rounded-lg shadow-md transition-all text-[13px] font-mono disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {contactSubmitting ? "Submitting..." : "Please Reach Out to Us"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Subscription Modal Box Portal Trigger */}
      {isAlertModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl relative text-left overflow-hidden">
            <div className="bg-zinc-950 px-8 py-6 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-lg font-black uppercase tracking-tight text-white">
                  NovrALERT
                </h3>
                <p className="text-[15px] text-zinc-400 italic font-medium">
                  Intelligence feeds will route directly through{" "}
                  <span className="font-mono text-red-400">
                    {COMPANY_CONTACTS.emails.alerts}
                  </span>
                  .
                </p>
              </div>
              <button
                onClick={() => setIsAlertModalOpen(false)}
                className="text-white/50 hover:text-white transition-colors shrink-0 mt-1"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-8">
              {!alertSucceeded ? (
                <form onSubmit={handleAlertSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold text-zinc-400 font-mono uppercase tracking-wider">
                      Corporate Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="analyst@secure-domain.com"
                      required
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-[15px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/30 transition-all font-normal"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={alertSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-[13px] uppercase tracking-widest py-3.5 rounded-lg transition-all shadow-md font-mono flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {alertSubmitting ? "Submitting..." : <>Receive Alert Broadcasts <Bell className="h-3.5 w-3.5" /></>}
                  </button>
                </form>
              ) : (
                <div className="py-10 text-center flex flex-col items-center justify-center space-y-3">
                  <CheckCircle2 className="h-12 w-12 text-emerald-500 animate-bounce" />
                  <h4 className="text-[15px] font-black uppercase tracking-wide text-zinc-900">
                    Subscription Successful
                  </h4>
                  <p className="text-xs text-zinc-500 max-w-xs mx-auto font-medium">
                    You will receive threat intelligence updates.
                  </p>
                  <button onClick={() => setAlertSucceeded(false)} className="text-[13px] text-red-600 hover:text-red-700 font-mono font-bold uppercase tracking-wider mt-2">
                    Subscribe Another Email
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* VAPT Scope Request Modal */}
      {isVaptModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl relative text-left overflow-hidden">
            <div className="bg-zinc-950 px-8 py-6 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-lg font-black uppercase tracking-tight text-white">
                  VAPT Scope Request
                </h3>
                <p className="text-[15px] text-zinc-400 italic font-medium">
                  "Know your weaknesses before attackers do."
                </p>
              </div>
              <button
                onClick={() => {
                  setIsVaptModalOpen(false);
                  setVaptSucceeded(false);
                }}
                className="text-white/50 hover:text-white transition-colors shrink-0 mt-1"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-8">
              {vaptSucceeded ? (
                <div className="py-10 text-center flex flex-col items-center justify-center space-y-3">
                  <CheckCircle2 className="h-12 w-12 text-emerald-500 animate-bounce" />
                  <h4 className="text-[15px] font-black uppercase tracking-wide text-zinc-900">
                    Request Submitted
                  </h4>
                  <p className="text-xs text-zinc-500 max-w-xs mx-auto font-medium">
                    Our team will be in touch within 24 hours.
                  </p>
                  <button onClick={() => setVaptSucceeded(false)} className="text-[13px] text-red-600 hover:text-red-700 font-mono font-bold uppercase tracking-wider mt-2">
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form
                  className="space-y-4"
                  onSubmit={handleVaptSubmit}
                >
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold text-zinc-400 font-mono uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-[13px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/30 transition-all font-normal"
                      placeholder="Your name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold text-zinc-400 font-mono uppercase tracking-wider">
                      Corporate Email *
                    </label>
                    <input
                      name="email"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-[13px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/30 transition-all font-normal"
                      placeholder="you@company.com"
                      type="email"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold text-zinc-400 font-mono uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-[13px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/30 transition-all font-normal"
                      placeholder="Contact Phone Number"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9+\-\s()]+"
                      title="Please enter a valid phone number"
                      onKeyDown={(e) => {
                        if (
                          !/[0-9+\-\s()]/.test(e.key) &&
                          ![
                            "Backspace",
                            "Delete",
                            "Tab",
                            "ArrowLeft",
                            "ArrowRight",
                          ].includes(e.key)
                        ) {
                          e.preventDefault();
                        }
                      }}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-zinc-400 font-mono uppercase tracking-wider block">
                      Assessment Type *
                    </label>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center gap-2 text-[15px] text-zinc-700 cursor-pointer">
                        <input
                          type="radio"
                          name="assessmentType"
                          value="SAST"
                          className="w-4 h-4 rounded border-zinc-300 text-red-600 focus:ring-red-500"
                          required
                        />
                        SAST
                      </label>
                      <label className="flex items-center gap-2 text-[13px] text-zinc-700 cursor-pointer">
                        <input
                          type="radio"
                          name="assessmentType"
                          value="DAST"
                          className="w-4 h-4 rounded border-zinc-300 text-red-600 focus:ring-red-500"
                        />
                        DAST
                      </label>
                      <label className="flex items-center gap-2 text-[13px] text-zinc-700 cursor-pointer">
                        <input
                          type="radio"
                          name="assessmentType"
                          value="Both"
                          className="w-4 h-4 rounded border-zinc-300 text-red-600 focus:ring-red-500"
                        />
                        Both
                      </label>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold text-zinc-400 font-mono uppercase tracking-wider block">
                      Scope Description
                    </label>
                    <textarea
                      name="scope"
                      rows={4}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-4 text-[13px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/30 transition-all resize-none font-normal"
                      placeholder="Please describe the scope of your VAPT."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={vaptSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-black uppercase tracking-widest rounded-lg shadow-md transition-all text-[13px] font-mono disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {vaptSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Audit & Gap Analysis Modal */}
      {isAuditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl relative text-left overflow-hidden">
            <div className="bg-zinc-950 px-8 py-6 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-lg font-black uppercase tracking-tight text-white">
                  Audit &amp; Gap Analysis
                </h3>
                <p className="text-[15px] text-zinc-400 italic font-medium">
                  "Compliance readiness and strategy auditing."
                </p>
              </div>
              <button
                onClick={() => {
                  setIsAuditModalOpen(false);
                  setAuditSucceeded(false);
                }}
                className="text-white/50 hover:text-white transition-colors shrink-0 mt-1"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-8">
              {auditSucceeded ? (
                <div className="py-10 text-center flex flex-col items-center justify-center space-y-3">
                  <CheckCircle2 className="h-12 w-12 text-emerald-500 animate-bounce" />
                  <h4 className="text-[15px] font-black uppercase tracking-wide text-zinc-900">
                    Request Submitted
                  </h4>
                  <p className="text-xs text-zinc-500 max-w-xs mx-auto font-medium">
                    Our team will be in touch within 24 hours.
                  </p>
                  <button onClick={() => setAuditSucceeded(false)} className="text-[13px] text-red-600 hover:text-red-700 font-mono font-bold uppercase tracking-wider mt-2">
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form
                  className="space-y-4"
                  onSubmit={handleAuditSubmit}
                >
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold text-zinc-400 font-mono uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-[13px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/30 transition-all font-normal"
                      placeholder="Your name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold text-zinc-400 font-mono uppercase tracking-wider">
                      Corporate Email *
                    </label>
                    <input
                      name="email"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-[13px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/30 transition-all font-normal"
                      placeholder="you@company.com"
                      type="email"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold text-zinc-400 font-mono uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-[13px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/30 transition-all font-normal"
                      placeholder="Contact Phone Number"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9+\-\s()]+"
                      title="Please enter a valid phone number"
                      onKeyDown={(e) => {
                        if (
                          !/[0-9+\-\s()]/.test(e.key) &&
                          ![
                            "Backspace",
                            "Delete",
                            "Tab",
                            "ArrowLeft",
                            "ArrowRight",
                          ].includes(e.key)
                        ) {
                          e.preventDefault();
                        }
                      }}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[13px] font-bold text-zinc-400 font-mono uppercase tracking-wider block">
                      Comments
                    </label>
                    <textarea
                      name="comments"
                      rows={4}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-4 text-[13px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/30 transition-all resize-none font-normal"
                      placeholder="What are your audit & gap analysis requests?"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={auditSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-black uppercase tracking-widest rounded-lg shadow-md transition-all text-[13px] font-mono disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {auditSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}