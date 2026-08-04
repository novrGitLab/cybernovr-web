"use client";
import React, { useState } from "react";
import { Bell } from "lucide-react";
import ModalWrapper from "./ModalWrapper";
import AlertSubscriptionForm from "../forms/AlertSubscriptionForm";

export default function HomeAlertButton() {
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsAlertModalOpen(true)} className="mt-14 mb-2 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 font-bold rounded-md active:scale-95 transition-all text-[11px] uppercase tracking-widest shadow-md font-mono">
        <Bell className="h-3 w-3" />
        Receive Alert Broadcasts
      </button>

      <ModalWrapper isOpen={isAlertModalOpen} onClose={() => setIsAlertModalOpen(false)} title="NovrALERT" subtitle="Intelligence feeds will route directly through alerts@cybernovr.com.">
        <AlertSubscriptionForm />
      </ModalWrapper>
    </>
  );
}
