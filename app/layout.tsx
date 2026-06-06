import React from "react";
import Link from "next/link";
import "./globals.css";

// Separate the interactive side-effects to keep the Root Layout a clean Server Component
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
        
        {/* Mounts interactive navigation rows & cookie banners gracefully */}
        <NavigationAndConsent />

        {/* Global Page Injection Node Slot */}
        <main className="min-h-screen">{children}</main>

        {/* [Module 7: Footer Layout Component] */}
        <footer className="bg-surface-container-lowest border-t border-outline-variant/30 py-16 px-8 md:px-16 lg:px-24">
          <div className="max-w-[1728px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="space-y-6">
              <Link className="block" href="/">
                <img src="/logo.png" alt="CYBERNOVR" className="h-10 w-auto object-contain" />
              </Link>
              <p className="text-on-surface-variant max-w-xs text-sm leading-relaxed">
                Institutional-grade cybersecurity intelligence and response. Protecting the world&apos;s most critical digital infrastructures.
              </p>
            </div>
            
            <div>
              <h5 className="uppercase tracking-widest text-primary mb-6 font-bold text-sm">Navigation</h5>
              <ul className="space-y-3 text-sm font-medium">
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="/about">About Us</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="/solutions">Our Solutions</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="/assessments">Assessments</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="/incident-response">Incident Response</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="/resources">Resources Hub</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="/contacts">Contacts</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="uppercase tracking-widest text-primary mb-6 font-bold text-sm">Compliance</h5>
              <ul className="space-y-3 text-sm font-medium">
                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">SLA Agreements</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="uppercase tracking-widest text-primary mb-6 font-bold text-sm">Stay Updated</h5>
              <p className="text-on-surface-variant mb-4 text-sm">Receive elite threat intelligence directly to your inbox.</p>
              <div className="flex items-center border-b border-outline-variant pb-2">
                <input className="bg-transparent border-0 w-full text-sm focus:ring-0 text-on-surface placeholder:text-on-surface-variant/40" placeholder="Enter your email" type="email" />
                <button className="text-primary hover:translate-x-1 transition-transform">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="max-w-[1728px] mx-auto border-t border-outline-variant/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
            <p className="text-on-surface-variant/50 text-center sm:text-left">
              © 2026 Cybernovr Intelligence. All rights reserved. Institutional-grade cybersecurity.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}