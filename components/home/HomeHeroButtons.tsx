"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ModalWrapper from "./ModalWrapper";
import DemoRequestForm from "../forms/DemoRequestForm";

export default function HomeHeroButtons() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <button onClick={() => setIsContactModalOpen(true)} className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold rounded-md active:scale-95 transition-all text-[13px] uppercase tracking-widest shadow-md flex items-center justify-center gap-2 font-mono">
          Request A Demo <ArrowRight className="h-4 w-4" />
        </button>
        <Link href="/academy" className="w-full sm:w-auto border-2 border-zinc-200 hover:border-red-600 text-zinc-700 hover:text-red-600 px-8 py-4 font-bold rounded-md hover:bg-zinc-50 transition-all text-[13px] uppercase tracking-widest text-center font-mono">
          Enroll At Academy
        </Link>
      </div>

      <ModalWrapper isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} title="Let's Secure Your Business" subtitle={'"In the digital age, resilience isn\'t an option - it\'s the foundation of existence."'}>
        <DemoRequestForm />
      </ModalWrapper>
    </>
  );
}
