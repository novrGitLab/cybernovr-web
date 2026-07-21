import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  CheckCircle2,
  Clock,
  BookOpen,
  Award,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CEAP Summer 2026 Curriculum | CYBERNOVR Academy",
  description:
    "Explore the 9-week CEAP summer cybersecurity curriculum for kids and teens (ages 12–17). 8 core domains + capstone project.",
  openGraph: {
    title: "CEAP Summer 2026 Curriculum | CYBERNOVR Academy",
    description:
      "Explore the 9-week CEAP summer cybersecurity curriculum for kids and teens (ages 12–17). 8 core domains + capstone project.",
    url: "https://www.cybernovr.com/academy/ceap-summer-2026",
    siteName: "CYBERNOVR",
    locale: "en_US",
    type: "website",
  },
};

const domains = [
  {
    num: "01",
    title: "Principles of Cybersecurity",
    topic: "Core Fundamentals",
    desc: "Core concepts including the CIA triad, security frameworks, threat landscape overview, and why cybersecurity matters in today's digital world.",
  },
  {
    num: "02",
    title: "Computers & Operating Systems",
    topic: "System Security",
    desc: "Hardware fundamentals, operating system security, system hardening techniques, and understanding how computers process and store data securely.",
  },
  {
    num: "03",
    title: "Network Security",
    topic: "Defense Fundamentals",
    desc: "How networks function, firewall configurations, VPN usage, secure network design principles, and protecting data in transit.",
  },
  {
    num: "04",
    title: "Cryptography & Secrets",
    topic: "Data Protection",
    desc: "Encryption fundamentals, hashing algorithms, key management, digital signatures, and how secrets protect data at rest and in transit.",
  },
  {
    num: "05",
    title: "Ethical Hacking & Defense",
    topic: "Offensive Security",
    desc: "Introduction to penetration testing, vulnerability scanning, responsible disclosure, and building defensive security strategies.",
  },
  {
    num: "06",
    title: "Cloud & App Security",
    topic: "Application Defense",
    desc: "Cloud service models, secure coding practices, application vulnerabilities (OWASP Top 10), and protecting web and mobile applications.",
  },
  {
    num: "07",
    title: "Emerging Tech & IoT Security",
    topic: "Next-Gen Threats",
    desc: "IoT device threats, AI and machine learning in security, blockchain basics, and securing next-generation technologies.",
  },
  {
    num: "08",
    title: "Incident Response",
    topic: "Recovery & Analysis",
    desc: "Detection and identification, containment strategies, recovery procedures, post-incident analysis, and building an incident response plan.",
  },
];

export default function CEAPCurriculumPage() {
  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1536px] mx-auto space-y-16 bg-white text-zinc-900 antialiased">
      {/* Hero */}
      <section className="text-left space-y-6">
        <Link
          href="/academy"
          className="inline-flex items-center gap-2 text-[13px] font-mono font-bold text-zinc-500 hover:text-red-600 uppercase tracking-widest transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Academy
        </Link>

        <div className="space-y-3">
          <span className="inline-block font-mono text-red-700 text-[11px] md:text-[15px] font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded">
            CEAP Summer 2026
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase leading-tight">
            CEAP Summer 2026
          </h1>
          <p className="text-zinc-500 text-[13px] md:text-[15px] max-w-2xl leading-relaxed font-normal">
            A comprehensive 9-week live cybersecurity program designed for kids
            and teens (ages 12–17). Eight core domains plus a capstone project
            to build real-world security skills.
          </p>
        </div>

        {/* Stats row */}
      </section>

      <section className="bg-purple-950/[0.02] border border-purple-900/10 rounded-2xl p-8 md:p-12 shadow-sm text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-xl md:text-3xl font-black text-zinc-900 uppercase tracking-tight">
              Secure Your Spot This Summer
            </h2>
            <p className="text-[13px] text-zinc-500 font-normal leading-relaxed">
              Give your child a real skill this summer. Our 9-week live
              cybersecurity program teaches kids and teens (ages 12–17) how to
              think, build, and defend like real security professionals.
            </p>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-red-700">₦250,000</span>
              <span className="text-sm text-zinc-400 font-medium">/ student</span>
            </div>
            <div className="flex flex-wrap gap-4 text-[13px] font-mono text-zinc-500 font-bold">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> 9 Weeks
              </span>
              <span className="flex items-center gap-1">
                <BarChart3 className="h-3 w-3" /> Ages 12–17
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="h-3 w-3" /> 8 Domains
              </span>
              <span className="flex items-center gap-1">
                <Award className="h-3 w-3" /> Capstone Project
              </span>
            </div>
            <Link
              href="/academy/enroll"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-[13px] uppercase tracking-widest px-6 py-3.5 rounded-lg transition-all shadow-md font-mono"
            >
              Enroll Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-3">
            <h4 className="text-[15px] font-bold text-zinc-900 uppercase tracking-tight">
              This program includes:
            </h4>
            <ul className="space-y-2">
              {[
                "Live instructor-led sessions (2 hrs/week)",
                "Cybernovr Mobile LMS access",
                "Hands-on capstone project",
                "Certificate of completion",
                "8 core cybersecurity domains",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-[13px] text-zinc-600"
                >
                  <CheckCircle2 className="h-4 w-4 text-red-700 shrink-0" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8 Core Domains */}
      <section className="space-y-6 text-left">
        <div className="border-b border-zinc-100 pb-2">
          <h2 className="text-sm md:text-[15px] font-black uppercase tracking-widest text-zinc-400">
            What They Will Master
          </h2>
        </div>
        <div className="space-y-3">
          {domains.map((domain) => (
            <div
              key={domain.num}
              className="bg-purple-950/[0.02] border border-purple-900/10 rounded-xl overflow-hidden hover:border-purple-900/30 transition-all shadow-sm"
            >
              <div className="w-full p-4 flex items-center gap-4 text-left">
                <span className="font-mono text-[13px] font-black text-red-700 bg-purple-950/[0.04] border border-purple-900/10 px-2.5 py-1 rounded shrink-0">
                  {domain.num}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[15px] font-bold text-zinc-900 leading-snug uppercase tracking-tight">
                    {domain.title}
                  </h4>
                  <p className="text-[12px] font-mono font-bold text-zinc-400 uppercase tracking-wider">
                    {domain.topic}
                  </p>
                </div>
              </div>
              <div className="border-t border-purple-900/10 bg-white px-4 py-3">
                <p className="text-zinc-500 text-[13px] leading-relaxed font-normal">
                  {domain.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capstone Week — highlighted */}
      <section className="space-y-4 text-left">
        <div className="bg-black text-white border border-purple-900/40 rounded-xl p-8 md:p-10 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:2rem_2px] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-purple-950 pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-black tracking-widest uppercase bg-red-600 text-white px-3 py-1 rounded">
              <GraduationCap className="h-3.5 w-3.5" />
              Week 9 — Capstone
            </span>
            <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
              Project Presentations &amp; Certificate Ceremony
            </h3>
            <p className="text-purple-200 text-[13px] md:text-[15px] leading-relaxed max-w-3xl font-normal">
              Students apply all 8 domains in a hands-on capstone project,
              present their findings to peers and instructors, and receive their
              certificate of completion. This is where theory meets practice —
              demonstrating real-world cybersecurity skills built over 9 weeks.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center space-y-4 pt-4">
        <Link
          href="/academy/enroll"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-[13px] uppercase tracking-widest px-8 py-4 rounded-lg transition-all shadow-md font-mono"
        >
          Enroll Now <ArrowRight className="h-4 w-4" />
        </Link>
        <p className="text-[13px] text-zinc-400 font-medium">
          Questions?{" "}
          <Link
            href="/contacts"
            className="text-red-600 hover:text-red-700 font-bold"
          >
            Contact us
          </Link>
        </p>
      </section>
    </div>
  );
}
