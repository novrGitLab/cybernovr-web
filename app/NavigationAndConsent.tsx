"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function NavigationAndConsent() {
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
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-outline-variant/20 shadow-sm h-20">
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
            <Link href="/impact-dashboard" className="bg-primary/10 text-primary border border-primary/20 px-4 py-2.5 text-xs font-bold tracking-wider rounded uppercase hover:bg-primary hover:text-white transition-all text-center">
              Impact
            </Link>
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
    </>
  );
}