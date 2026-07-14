import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaTiktok, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Toaster } from "sonner";
import Providers from "./Providers";
import FooterNewsletter from "./FooterNewsletter";
import "./globals.css";

import NavigationAndConsent from "./NavigationAndConsent";

export const metadata = {
  title: "CYBERNOVR | Institutional-Grade Cybersecurity Intelligence",
  description: "Protecting critical digital infrastructures with premium intelligence solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&family=Geist:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface text-on-surface font-sans overflow-x-hidden antialiased">
        <Providers>
        <Toaster position="top-right" richColors />

        {/* Mounts interactive navigation rows & cookie banners gracefully */}
        <NavigationAndConsent />

        {/* Global Page Injection Node Slot */}
        <main className="min-h-screen">{children}</main>

        {/* [Module 7: Footer Layout Component] - ENHANCED DIMENSIONS & VISIBILITY (#16, #41, #105) */}
        <footer className="bg-inverse-surface text-white border-t border-white/10 py-20 px-6 sm:px-12 lg:px-margin-desktop w-full">
          <div className="max-w-[1536px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* Brand column */}
            <div className="md:col-span-4 space-y-6">
              <Link className="block" href="/">
                <img src="/logo-white.png" alt="CYBERNOVR" className="h-10 md:h-12 w-auto max-w-[220px] object-contain" />
              </Link>
              <p className="text-white/70 max-w-sm text-sm leading-relaxed">
                A leading Cybersecurity company, providing information assurance and services in cybersecurity risk management, critical information infrastructure protection, and cybersecurity capacity building
              </p>
              {/* SOCIAL MEDIA ICONS ON FOOTER (#18, #45, #104) */}
              <div className="flex items-center gap-3 text-white pt-1">
                <a href="https://www.linkedin.com/in/cybernovr-limited-21831a36b?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn"><FaLinkedinIn size={20} /></a>
                <a href="https://www.facebook.com/profile.php?id=61577489252198" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Facebook"><FaFacebookF size={20} /></a>
                <a href="https://www.tiktok.com/@cybernovr" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Tiktok"><FaTiktok size={20} /></a>
                <a href="https://x.com/CYBERNOVR" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="X"><FaXTwitter size={20} /></a>
                <a href="https://www.instagram.com/cybernovr?igsh=MW45YThxdm9yNjd0Yw==" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Instagram"><FaInstagram size={20} /></a>
              </div>
            </div>
            
            {/* Navigation links */}
            <div className="md:col-span-3 space-y-4">
              <h5 className="uppercase tracking-widest text-primary font-black text-xs">Navigation</h5>
              <ul className="space-y-3 text-sm font-medium text-white/80">
                <li><Link className="hover:text-primary transition-colors" href="/about">About Us</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="/solutions">Our Solutions</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="/academy">Novr Academy</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="/assessments">Cybersecurity Assessments</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="/contacts">Contact</Link></li>
              </ul>
            </div>
            
            {/* Compliance links */}
            <div className="md:col-span-2 space-y-4">
              <h5 className="uppercase tracking-widest text-primary font-black text-xs">Compliance</h5>
              <ul className="space-y-3 text-sm font-medium text-white/80">
                <li><Link className="hover:text-primary transition-colors" href="/privacy">Privacy Policy</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="/cookies">Cookies Policy</Link></li>
              </ul>
            </div>
            
            {/* Threat Intel Field */}
            <div className="md:col-span-3 space-y-4">
              <h5 className="uppercase tracking-widest text-primary font-black text-xs">Stay Updated</h5>
              <p className="text-white/70 text-sm">Receive premium threat intelligence directly to your inbox.</p>
              <FooterNewsletter />
            </div>
          </div>
          
          {/* HIGH CONTRAST & VISIBLE COPYRIGHT TEXT (#16, #43) */}
          <div className="max-w-[1536px] mx-auto border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
            <p className="text-white/60 font-medium tracking-wide text-center sm:text-left">
              © 2026 Cybernovr Limited. All rights reserved. A <span className="text-red-500">#cyber360resilience</span> company
            </p>
          </div>
        </footer>
        </Providers>
      </body>
    </html>
  );
}