"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCookies, setShowCookies] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cybernovr_cookie_consent");
    if (!consent) {
      setShowCookies(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cybernovr_cookie_consent", "accepted");
    setShowCookies(false);
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>CYBERNOVR | Institutional-Grade Cybersecurity Intelligence</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&family=Geist:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface text-on-surface font-sans overflow-x-hidden antialiased">
        
        {/* [Module 1: Navigation Navbar] */}
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-outline-variant/20 shadow-sm h-20">
          {/* CORRECTED: Horizontal container width margins fully calibrated to rhythm with your page perimeters */}
          <div className="flex justify-between items-center w-full h-full px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto">
            <Link className="flex items-center" href="/">
              <img src="/logo.png" alt="CYBERNOVR" className="h-10 md:h-12 w-auto object-contain" />
            </Link>
            
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link className="text-[15px] text-on-surface-variant font-medium hover:text-primary transition-colors" href="/about">About</Link>
              <Link className="text-[15px] text-on-surface-variant font-medium hover:text-primary transition-colors" href="/solutions">Solutions</Link>
              <Link className="text-[15px] text-on-surface-variant font-medium hover:text-primary transition-colors" href="/industries">Industries</Link>
              <Link className="text-[15px] text-on-surface-variant font-medium hover:text-primary transition-colors" href="/incident-response">Incident Response</Link>
              <Link className="text-[15px] text-on-surface-variant font-medium hover:text-primary transition-colors" href="/blog">Blog</Link>
              <Link className="text-[15px] text-on-surface-variant font-medium hover:text-primary transition-colors" href="/resources">Resources</Link>
              <Link className="text-[15px] text-on-surface-variant font-medium hover:text-primary transition-colors" href="/assessments">Assessments</Link>
              <Link className="text-[15px] text-on-surface-variant font-medium hover:text-primary transition-colors" href="/contacts">Contacts</Link>
            </div>
            
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/academy" className="bg-surface-container-lowest text-primary border border-primary px-5 py-2.5 text-sm font-semibold rounded-DEFAULT active:scale-95 transition-all hover:bg-primary hover:text-white text-center">
                CYBERNOVR ACADEMY
              </Link>
            </div>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="lg:hidden text-on-surface p-2"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>

          {/* Mobile Overlay Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-outline-variant shadow-xl px-8 py-8 flex flex-col gap-6 z-50">
              <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-on-surface font-semibold hover:text-primary" href="/about">About</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-on-surface font-semibold hover:text-primary" href="/solutions">Solutions</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-on-surface font-semibold hover:text-primary" href="/industries">Industries</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-on-surface font-semibold hover:text-primary" href="/incident-response">Incident Response</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-on-surface font-semibold hover:text-primary" href="/blog">Blog</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-on-surface font-semibold hover:text-primary" href="/resources">Resources</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-on-surface font-semibold hover:text-primary" href="/assessments">Assessments</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-on-surface font-semibold hover:text-primary" href="/contacts">Contacts</Link>
              <hr className="border-outline-variant/30" />
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/impact-dashboard" className="bg-primary/10 text-primary text-center py-3 font-bold rounded-DEFAULT text-xs uppercase tracking-wider">
                VIEW LIVE IMPACT
              </Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/academy" className="bg-primary text-white text-center py-3 font-bold rounded-DEFAULT">
                CYBERNOVR ACADEMY
              </Link>
            </div>
          )}
        </nav>

        {/* Global Page Injection Slot */}
        <main className="min-h-screen">{children}</main>

        {/* [Module 7: Footer Layout] */}
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

        {/* Cookies Consent Popup Box */}
        {showCookies && (
          <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-white border border-outline-variant/40 rounded-xl shadow-2xl p-6">
            <h4 className="text-base font-bold text-on-surface mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">cookie</span>
              Cookies &amp; Privacy
            </h4>
            <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
              We use cookies to ensure that we give you the best experience on our website.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button onClick={acceptCookies} className="bg-primary text-white text-xs font-bold px-4 py-2 rounded shadow-sm hover:bg-purple-900 transition-colors">
                Accept Cookies
              </button>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}