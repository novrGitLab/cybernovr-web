"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function NavigationAndConsent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  
  // Custom states to handle the action menu matrices cleanly
  const [isAcademyDropdownOpen, setIsAcademyDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

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
          
          {/* ENLARGED BRAND LOGO HOOK (#44) */}
          <Link className="flex items-center" href="/">
            <img src="/logo.png" alt="CYBERNOVR" className="h-11 md:h-13 w-auto object-contain" />
          </Link>
          
          {/* Desktop Links Stack */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link className="text-[15px] text-on-surface-variant font-semibold hover:text-primary transition-colors" href="/about">About</Link>
            <Link className="text-[15px] text-on-surface-variant font-semibold hover:text-primary transition-colors" href="/solutions">Solutions</Link>
            <Link className="text-[15px] text-on-surface-variant font-semibold hover:text-primary transition-colors" href="/industries">Industries</Link>
            
            {/* RESOURCES DROPDOWN INCORPORATING BLOG (#33, #85, #86) */}
            <div 
              className="relative"
              onMouseEnter={() => setIsResourcesDropdownOpen(true)}
              onMouseLeave={() => setIsResourcesDropdownOpen(false)}
            >
              <button className="text-[15px] text-on-surface-variant font-semibold hover:text-primary transition-colors flex items-center gap-1 h-20">
                Resources <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
              </button>
              {isResourcesDropdownOpen && (
                <div className="absolute top-16 left-0 bg-white border border-outline-variant/30 shadow-xl rounded-lg py-3 w-48 text-left animate-fadeIn">
                  <Link className="block px-4 py-2 text-sm font-medium text-on-surface-variant hover:bg-primary/5 hover:text-primary" href="/resources/blog">Blog</Link>
                  <Link className="block px-4 py-2 text-sm font-medium text-on-surface-variant hover:bg-primary/5 hover:text-primary" href="/resources/news">News</Link>
                  <Link className="block px-4 py-2 text-sm font-medium text-on-surface-variant hover:bg-primary/5 hover:text-primary" href="/resources/webinars">Webinars</Link>
                  <Link className="block px-4 py-2 text-sm font-medium text-on-surface-variant hover:bg-primary/5 hover:text-primary" href="/resources/events">Events</Link>
                  <Link className="block px-4 py-2 text-sm font-medium text-on-surface-variant hover:bg-primary/5 hover:text-primary" href="/resources/white-papers">White Papers</Link>
                </div>
              )}
            </div>

            <Link className="text-[15px] text-on-surface-variant font-semibold hover:text-primary transition-colors" href="/contacts">Contacts</Link>
          </div>
          
          {/* Action CTAs Cluster */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* INCIDENT RESPONSE PROMOTED BUTTON NODE (#30, #72) */}
            <Link href="/incident-response" className="border-2 border-red-600 bg-red-50 text-red-700 hover:bg-red-600 hover:text-white px-5 py-2.5 text-xs font-black tracking-widest rounded-md uppercase transition-all shadow-sm text-center">
              Incident Response 24/7
            </Link>

            {/* CYBERNOVR ACADEMY SUBMENU HUB (#20, #31, #47, #75) */}
            <div 
              className="relative"
              onMouseEnter={() => setIsAcademyDropdownOpen(true)}
              onMouseLeave={() => setIsAcademyDropdownOpen(false)}
            >
              <button className="bg-primary text-white px-5 py-3 text-xs font-black tracking-widest rounded-md uppercase hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5 h-11">
                Cybernovr Academy <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
              </button>
              {isAcademyDropdownOpen && (
                <div className="absolute top-11 right-0 bg-white border border-outline-variant/30 shadow-xl rounded-lg py-3 w-56 text-left z-50 animate-fadeIn">
                  <Link className="block px-4 py-2.5 text-xs font-black uppercase tracking-wider text-on-surface-variant hover:bg-primary/5 hover:text-primary" href="/academy">
                     CEAP
                  </Link>
                  <Link className="block px-4 py-2.5 text-xs font-black uppercase tracking-wider text-on-surface-variant hover:bg-primary/5 hover:text-primary" href="/academy/assessments">
                    Assessment
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Open Trigger */}
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

        {/* Mobile View Drawer Overlay Component */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-outline-variant shadow-xl px-6 py-8 flex flex-col gap-4 z-50 overflow-y-auto max-h-[calc(100vh-80px)]">
            <Link onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-on-surface-variant hover:text-primary" href="/about">About</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-on-surface-variant hover:text-primary" href="/solutions">Solutions</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-on-surface-variant hover:text-primary" href="/industries">Industries</Link>
            
            <div className="space-y-2 pl-2 border-l border-outline-variant">
              <p className="text-xs uppercase font-black tracking-wider text-primary">Resources Node</p>
              <Link onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-semibold text-on-surface-variant hover:text-primary" href="/blog">Blog</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-semibold text-on-surface-variant hover:text-primary" href="/resources/news">News</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-semibold text-on-surface-variant hover:text-primary" href="/resources/webinars">Webinars</Link>
            </div>

            <Link onClick={() => setIsMobileMenuOpen(false)} className="text-base font-bold text-on-surface-variant hover:text-primary" href="/contacts">Contacts</Link>
            
            <hr className="border-outline-variant/30 my-2" />
            
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/incident-response" className="border border-red-600 bg-red-50 text-red-700 text-center py-3 font-black tracking-widest text-xs rounded-md uppercase">
              Incident Response 24/7
            </Link>

            <div className="space-y-2 p-3 bg-surface-container-low rounded-lg border border-outline-variant/30">
              <p className="text-xs uppercase font-black tracking-wider text-primary">Academy Platform Ecosystem</p>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/academy" className="block text-sm font-bold text-on-surface hover:text-primary">Academy Enrollment</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/impact-dashboard" className="block text-sm font-bold text-on-surface hover:text-primary">Strategic Impact Metrics</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/academy/assessments" className="block text-sm font-bold text-on-surface hover:text-primary">Take Knowledge Test</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}