"use client";
import React from "react";
import { X } from "lucide-react";

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function ModalWrapper({ isOpen, onClose, title, subtitle, children }: ModalWrapperProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl relative text-left overflow-hidden">
        <div className="bg-zinc-950 px-8 py-6 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-lg font-black uppercase tracking-tight text-white">{title}</h3>
            {subtitle && <p className="text-[15px] text-zinc-400 italic font-medium">{subtitle}</p>}
          </div>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors shrink-0 mt-1">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
