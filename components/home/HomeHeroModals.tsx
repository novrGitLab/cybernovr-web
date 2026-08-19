"use client";
import React, { useState } from "react";
import { submitWeb3Form } from "@/app/web3forms";
import { Bell, CheckCircle2 } from "lucide-react";
import ModalWrapper from "./ModalWrapper";
import DemoRequestForm from "../forms/DemoRequestForm";
import VaptScopeForm from "../forms/VaptScopeForm";
import AuditScopeForm from "../forms/AuditScopeForm";
import AlertSubscriptionForm from "../forms/AlertSubscriptionForm";

export default function HomeHeroModals() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isVaptModalOpen, setIsVaptModalOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const [securitySubmitting, setSecuritySubmitting] = useState(false);
  const [securitySucceeded, setSecuritySucceeded] = useState(false);

  const handleSecuritySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSecuritySubmitting(true);
    const form = e.currentTarget;
    try {
      const formData = new FormData(form);
      formData.append("form_name", "securityAudit");
      formData.append("form_source", "Home Page - Security Audit");
      await submitWeb3Form(formData);
      setSecuritySucceeded(true);
      form.reset();
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setSecuritySubmitting(false);
    }
  };

  return (
    <>
      {/* Contact Modal */}
      <ModalWrapper isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} title="Let's Secure Your Business" subtitle={'"In the digital age, resilience isn\'t an option - it\'s the foundation of existence."'}>
        <DemoRequestForm />
      </ModalWrapper>

      {/* Alert Subscription Modal */}
      <ModalWrapper isOpen={isAlertModalOpen} onClose={() => setIsAlertModalOpen(false)} title="NovrALERT" subtitle="Intelligence feeds will route directly through alerts@cybernovr.com.">
        <AlertSubscriptionForm />
      </ModalWrapper>

      {/* VAPT Modal */}
      <ModalWrapper isOpen={isVaptModalOpen} onClose={() => setIsVaptModalOpen(false)} title="VAPT Scope Request" subtitle='"Know your weaknesses before attackers do."'>
        <VaptScopeForm />
      </ModalWrapper>

      {/* Audit Modal */}
      <ModalWrapper isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} title="Audit & Gap Analysis" subtitle="Compliance readiness and strategy auditing.">
        <AuditScopeForm />
      </ModalWrapper>

      {/* Expose triggers via data attributes on the page */}
      <div id="home-modal-triggers" className="hidden" data-contact={() => setIsContactModalOpen(true)} data-alert={() => setIsAlertModalOpen(true)} data-vapt={() => setIsVaptModalOpen(true)} data-audit={() => setIsAuditModalOpen(true)} />
    </>
  );
}
