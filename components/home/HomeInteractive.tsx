"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Bell } from "lucide-react";
import ModalWrapper from "./ModalWrapper";
import ContactForm from "../forms/ContactForm";
import VaptScopeForm from "../forms/VaptScopeForm";
import AuditScopeForm from "../forms/AuditScopeForm";
import AlertSubscriptionForm from "../forms/AlertSubscriptionForm";

export default function HomeInteractive() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isVaptModalOpen, setIsVaptModalOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <>
      {/* Hero CTA Buttons — positioned in the hero section */}
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <button onClick={() => setIsContactModalOpen(true)} className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold rounded-md active:scale-95 transition-all text-[13px] uppercase tracking-widest shadow-md flex items-center justify-center gap-2 font-mono">
          Request A Demo <ArrowRight className="h-4 w-4" />
        </button>
        <Link href="/academy" className="w-full sm:w-auto border-2 border-zinc-200 hover:border-red-600 text-zinc-700 hover:text-red-600 px-8 py-4 font-bold rounded-md hover:bg-zinc-50 transition-all text-[13px] uppercase tracking-widest text-center font-mono">
          Enroll At Academy
        </Link>
      </div>

      {/* VAPT & Audit Panels */}
      <section className="py-6 px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1536px] mx-auto text-left grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl flex flex-col space-y-4 hover:border-purple-900/20 transition-all duration-300">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight uppercase">VAPT Scope Request</h2>
            <span className="text-sm font-mono font-black tracking-widest text-red-600 block uppercase">Where are my weaknesses and who&apos;s attacking me?</span>
            <p className="text-zinc-600 text-[11px] md:text-[15px] leading-relaxed font-normal">We empower you with knowledge of where you are vulnerable and who is attacking you, enabling you to develop a resilience framework tailored to your business.</p>
          </div>
          <button onClick={() => setIsVaptModalOpen(true)} className="inline-flex items-center gap-1.5 text-[13px] font-black tracking-widest text-red-600 font-mono uppercase hover:text-red-500 pt-2 group mt-auto">
            Scope your VAPT <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl flex flex-col space-y-4 hover:border-purple-900/20 transition-all duration-300">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight uppercase">Audit &amp; Gap Analysis</h2>
            <span className="text-sm font-mono font-black tracking-widest text-red-600 block uppercase">Compliance Readiness &amp; Strategy Auditing</span>
            <p className="text-zinc-600 text-[11px] md:text-[15px] leading-relaxed font-normal">We help you with organization-wide awareness, capabilities for critical services continuity, and maturity assessment of your cyber resilience.</p>
          </div>
          <button onClick={() => setIsAuditModalOpen(true)} className="inline-flex items-center gap-1.5 text-[13px] font-black tracking-widest text-red-600 font-mono uppercase hover:text-red-500 pt-2 group mt-auto">
            Scope your audits <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Modals */}
      <ModalWrapper isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} title="Let's Secure Your Business" subtitle={'"In the digital age, resilience isn\'t an option - it\'s the foundation of existence."'}>
        <ContactForm formName="contactRequest" formSource="Home Page - Contact Modal" />
      </ModalWrapper>

      <ModalWrapper isOpen={isAlertModalOpen} onClose={() => setIsAlertModalOpen(false)} title="NovrALERT" subtitle="Intelligence feeds will route directly through alerts@cybernovr.com.">
        <AlertSubscriptionForm />
      </ModalWrapper>

      <ModalWrapper isOpen={isVaptModalOpen} onClose={() => setIsVaptModalOpen(false)} title="VAPT Scope Request" subtitle={'"Know your weaknesses before attackers do."'}>
        <VaptScopeForm />
      </ModalWrapper>

      <ModalWrapper isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} title="Audit & Gap Analysis" subtitle="Compliance readiness and strategy auditing.">
        <AuditScopeForm />
      </ModalWrapper>
    </>
  );
}
