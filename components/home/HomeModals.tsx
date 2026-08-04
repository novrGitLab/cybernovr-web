"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import ModalWrapper from "./ModalWrapper";
import VaptScopeForm from "../forms/VaptScopeForm";
import AuditScopeForm from "../forms/AuditScopeForm";

export default function HomeModals() {
  const [isVaptModalOpen, setIsVaptModalOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <>
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
            <p className="text-zinc-600 text-[11px] md:text-[15px] leading-relaxed font-normal">We help you with:</p>
            <ul className="space-y-2 text-zinc-600 text-[11px] md:text-[15px] leading-relaxed font-normal">
              <li className="flex items-start gap-2"><span className="text-red-600 mt-1.5 shrink-0">•</span>Organization-wide awareness to ensure cyber resilience</li>
              <li className="flex items-start gap-2"><span className="text-red-600 mt-1.5 shrink-0">•</span>Capabilities most important for ensuring the continuity of critical services during a cyberattack</li>
              <li className="flex items-start gap-2"><span className="text-red-600 mt-1.5 shrink-0">•</span>Need for dialogue among participants from different functional areas within</li>
              <li className="flex items-start gap-2"><span className="text-red-600 mt-1.5 shrink-0">•</span>The maturity of your organization&apos;s resilience in the face of a cyber-attack</li>
            </ul>
          </div>
          <button onClick={() => setIsAuditModalOpen(true)} className="inline-flex items-center gap-1.5 text-[13px] font-black tracking-widest text-red-600 font-mono uppercase hover:text-red-500 pt-2 group mt-auto">
            Scope your audits <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Modals */}
      <ModalWrapper isOpen={isVaptModalOpen} onClose={() => setIsVaptModalOpen(false)} title="VAPT Scope Request" subtitle={'"Know your weaknesses before attackers do."'}>
        <VaptScopeForm />
      </ModalWrapper>

      <ModalWrapper isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} title="Audit & Gap Analysis" subtitle="Compliance readiness and strategy auditing.">
        <AuditScopeForm />
      </ModalWrapper>
    </>
  );
}
