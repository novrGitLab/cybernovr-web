"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationAndConsent() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  
  const [isAcademyDropdownOpen, setIsAcademyDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(pathname.startsWith("/resources"));

  const isActive = (href: string) => pathname === href;
  const isResourcesActive = pathname.startsWith("/resources");
  const isAcademyActive = pathname.startsWith("/academy");

  const desktopLinkClass = (href: string) =>
    `text-[13px] font-semibold transition-colors pb-1 border-b-2 ${
      isActive(href)
        ? "text-primary border-primary"
        : "text-on-surface-variant border-transparent hover:text-primary"
    }`;

  const dropdownLinkClass = (href: string) =>
    `block px-4 py-2 text-sm font-medium transition-colors ${
      isActive(href)
        ? "text-primary bg-primary/5 font-bold"
        : "text-on-surface-variant hover:bg-primary/5 hover:text-primary"
    }`;

  const dropdownLinkClassBold = (href: string) =>
    `block px-4 py-2.5 text-xs font-black uppercase tracking-wider transition-colors ${
      isActive(href)
        ? "text-primary bg-primary/5"
        : "text-on-surface-variant hover:bg-primary/5 hover:text-primary"
    }`;

  const mobileLinkClass = (href: string) =>
    `text-base font-bold transition-colors ${
      isActive(href) || (href !== "/" && pathname.startsWith(href))
        ? "text-primary"
        : "text-on-surface-variant hover:text-primary"
    }`;

  const mobileSubLinkClass = (href: string) =>
    `block text-sm font-semibold transition-colors ${
      isActive(href)
        ? "text-primary"
        : "text-on-surface-variant hover:text-primary"
    }`;

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
          
          {/* Desktop Links Stack */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7">
            <Link className={desktopLinkClass("/about")} href="/about">About</Link>
            <Link className={desktopLinkClass("/solutions")} href="/solutions">Solutions</Link>
            <Link className={desktopLinkClass("/industries")} href="/industries">Industries</Link>
            
            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsResourcesDropdownOpen(true)}
              onMouseLeave={() => setIsResourcesDropdownOpen(false)}
            >
              <button className={`text-[13px] font-semibold transition-colors pb-1 border-b-2 flex items-center gap-1 ${
                isResourcesActive
                  ? "text-primary border-primary"
                  : "text-on-surface-variant border-transparent hover:text-primary"
              }`}>
                Resources <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
              </button>
              <div className="absolute top-full left-0 w-full h-2" />
              {isResourcesDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 bg-white border border-outline-variant/30 shadow-xl rounded-lg py-3 w-48 text-left animate-fadeIn">
                  <Link className={dropdownLinkClass("/resources/blog")} href="/resources/blog">Blog</Link>
                  <Link className={dropdownLinkClass("/resources/news")} href="/resources/news">News</Link>
                  <Link className={dropdownLinkClass("/resources/webinar")} href="/resources/webinar">Webinars</Link>
                  <Link className={dropdownLinkClass("/resources/gallery")} href="/resources/gallery">Gallery</Link>
                  <Link className={dropdownLinkClass("/resources/whitepapers")} href="/resources/whitepapers">White Papers</Link>
                </div>
              )}
            </div>

            <Link className={desktopLinkClass("/contacts")} href="/contacts">Contact</Link>
          </div>
          
          {/* Action CTAs Cluster */}
          <div className="hidden lg:flex items-center gap-5 ml-6">
            
            <Link href="/incident-response" className={`border-2 px-4 h-9 text-xs font-black tracking-widest rounded-md uppercase transition-all shadow-sm text-center whitespace-nowrap flex items-center ${
              isActive("/incident-response")
                ? "bg-red-600 text-white border-red-600"
                : "border-red-600 bg-red-50 text-red-700 hover:bg-red-600 hover:text-white"
            }`}>
              24/7 Incident Response
            </Link>

            {/* Academy Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsAcademyDropdownOpen(true)}
              onMouseLeave={() => setIsAcademyDropdownOpen(false)}
            >
              <button 
                onClick={() => setIsAcademyDropdownOpen(!isAcademyDropdownOpen)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsAcademyDropdownOpen(!isAcademyDropdownOpen);
                  } else if (e.key === "Escape") {
                    setIsAcademyDropdownOpen(false);
                  }
                }}
                aria-expanded={isAcademyDropdownOpen}
                aria-haspopup="true"
                className={`px-4 h-9 text-xs font-black tracking-widest rounded-md uppercase transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  isAcademyActive
                    ? "bg-primary text-white brightness-110"
                    : "bg-primary text-white hover:brightness-110 active:scale-95"
                }`}
              >
                Novr Academy <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
              </button>
              <div className="absolute top-full left-0 w-full h-2" />
              {isAcademyDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-outline-variant/30 shadow-xl rounded-lg py-3 w-56 text-left z-50 animate-fadeIn">
                  <Link className={dropdownLinkClassBold("/academy")} href="/academy">
                     CEAP
                  </Link>
                  <Link className={dropdownLinkClassBold("/academy/assessments")} href="/academy/assessments">
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

        {/* Mobile View Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-outline-variant shadow-xl px-6 py-8 flex flex-col gap-4 z-50 overflow-y-auto max-h-[calc(100vh-80px)]">
            <Link onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass("/about")} href="/about">About</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass("/solutions")} href="/solutions">Solutions</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass("/industries")} href="/industries">Industries</Link>
            
            <div>
              <button 
                onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                className={`text-base font-bold transition-colors flex items-center justify-between w-full ${
                  isResourcesActive ? "text-primary" : "text-on-surface-variant hover:text-primary"
                }`}
              >
                Resources
                <span className={`material-symbols-outlined text-lg transition-transform ${isMobileResourcesOpen ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              {isMobileResourcesOpen && (
                <div className="space-y-2 pl-2 mt-2 border-l border-outline-variant">
                  <Link onClick={() => setIsMobileMenuOpen(false)} className={mobileSubLinkClass("/resources/blog")} href="/resources/blog">Blog</Link>
                  <Link onClick={() => setIsMobileMenuOpen(false)} className={mobileSubLinkClass("/resources/news")} href="/resources/news">News</Link>
                  <Link onClick={() => setIsMobileMenuOpen(false)} className={mobileSubLinkClass("/resources/webinar")} href="/resources/webinar">Webinars</Link>
                  <Link onClick={() => setIsMobileMenuOpen(false)} className={mobileSubLinkClass("/resources/gallery")} href="/resources/gallery">Gallery</Link>
                  <Link onClick={() => setIsMobileMenuOpen(false)} className={mobileSubLinkClass("/resources/whitepapers")} href="/resources/whitepapers">White Papers</Link>
                </div>
              )}
            </div>

            <Link onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass("/contacts")} href="/contacts">Contact</Link>
            
            <hr className="border-outline-variant/30 my-2" />
            
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/incident-response" className={`border text-center py-3 font-black tracking-widest text-xs rounded-md uppercase transition-all ${
              isActive("/incident-response")
                ? "bg-red-600 text-white border-red-600"
                : "border-red-600 bg-red-50 text-red-700"
            }`}>
              24/7 Incident Response
            </Link>

            <div className="space-y-2 p-3 bg-surface-container-low rounded-lg border border-outline-variant/30">
              <p className={`text-xs uppercase font-black tracking-wider ${isAcademyActive ? "text-primary" : "text-primary"}`}>Novr Academy</p>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/academy" className={mobileSubLinkClass("/academy")}>CEAP</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} href="/academy/assessments" className={mobileSubLinkClass("/academy/assessments")}>Assessments</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Cookie Consent Banner */}
      {showCookies && (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-zinc-900 border-t border-zinc-800 shadow-2xl">
          <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-0 lg:px-margin-desktop py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-zinc-400 leading-relaxed max-w-2xl">
              We use cookies to enhance your experience and analyze site traffic. By clicking &quot;Accept&quot;, you consent to our use of cookies. Learn more in our{" "}
              <Link href="/cookies" className="text-red-400 hover:text-red-300 underline font-bold">Cookie Policy</Link>.
            </p>
            <button
              onClick={acceptCookies}
              className="flex-shrink-0 bg-red-600 hover:bg-red-700 text-white text-[10px] font-black uppercase tracking-widest px-6 py-2.5 rounded-md transition-all shadow-md"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}