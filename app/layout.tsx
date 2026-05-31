import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "CYBERNOVR | Institutional-Grade Cybersecurity Intelligence",
  description: "Resilience is in our DNA",
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
      <body className="bg-surface text-on-surface font-sans overflow-x-hidden">
        
        {/* [Module 1: Navigation Navbar] */}
        <nav className="fixed top-0 w-full z-50 bg-surface/10 backdrop-blur-md border-b border-outline-variant/20 shadow-sm h-20">
          <div className="flex justify-between items-center w-full px-margin-desktop max-w-[1536px] mx-auto h-full">
            <Link className="text-xl font-black tracking-tighter text-on-surface uppercase" href="/">
              CYBERNOVR
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors duration-200" href="/about">About</Link>
              <Link className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="/services">Services</Link>
              <Link className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="/industries">Industries</Link>
              <Link className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="/incident-response">Incident Response</Link>
              <Link className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="/blog">Blog</Link>
              <Link className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="/resources">Resources</Link>
              <Link className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="/contacts">Contacts</Link>
            </div>
            <button className="bg-surface-container-lowest text-primary border border-primary px-6 py-2.5 font-medium rounded-DEFAULT active:scale-95 transition-all duration-150 hover:bg-primary hover:text-white">
              CYBERNOVR ACADEMY
            </button>
          </div>
        </nav>

        {/* Dynamic Page Content Injector */}
        <main>{children}</main>

        {/* [Module 7: Footer] */}
        <footer className="bg-surface-container-lowest border-t border-outline-variant/30 py-section-gap px-margin-desktop">
          <div className="max-w-[1536px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter mb-20">
            <div className="col-span-1">
              <Link className="text-xl font-bold text-on-surface mb-8 block uppercase tracking-tighter" href="/">
                CYBERNOVR
              </Link>
              <p className="text-on-surface-variant mb-8 max-w-xs">
                Institutional-grade cybersecurity intelligence and response. Protecting the world's most critical digital infrastructures.
              </p>
              <div className="flex gap-4">
                <a className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 rounded-full hover:bg-primary hover:text-white transition-all" href="#">
                  <span className="material-symbols-outlined text-lg">share</span>
                </a>
                <a className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 rounded-full hover:bg-primary hover:text-white transition-all" href="#">
                  <span className="material-symbols-outlined text-lg">public</span>
                </a>
              </div>
            </div>
            <div>
              <h5 class="uppercase tracking-widest text-primary mb-8 font-bold text-sm">Navigation</h5>
              <ul className="space-y-4">
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="/about">About Us</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="/services">Security Services</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="/incident-response">Incident Response</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="/portal">Client Portal</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="/academy">Cybernovr Academy</Link></li>
              </ul>
            </div>
            <div>
              <h5 class="uppercase tracking-widest text-primary mb-8 font-bold text-sm">Compliance</h5>
              <ul className="space-y-4">
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="/privacy">Privacy Policy</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="/terms">Terms of Service</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="/sla">SLA Agreements</Link></li>
                <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="/iso">ISO Certifications</Link></li>
              </ul>
            </div>
            <div>
              <h5 class="uppercase tracking-widest text-primary mb-8 font-bold text-sm">Stay Updated</h5>
              <p className="text-on-surface-variant mb-6">Receive elite threat intelligence directly to your inbox.</p>
              <div className="flex items-center border-b border-outline-variant pb-2">
                <input className="bg-transparent border-0 w-full focus:ring-0 text-on-surface placeholder:text-on-surface-variant/40" placeholder="Enter your email" type="email" />
                <button className="text-primary hover:translate-x-1 transition-transform">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-[1536px] mx-auto border-t border-outline-variant/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-on-surface-variant/50 text-sm text-center">
              © 2024 Cybernovr Intelligence. All rights reserved. Institutional-grade cybersecurity.
            </p>
            <div className="flex gap-8 text-on-surface-variant/30">
              <span className="material-symbols-outlined text-4xl">verified_user</span>
              <span className="material-symbols-outlined text-4xl">gpp_good</span>
              <span className="material-symbols-outlined text-4xl">lock</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}