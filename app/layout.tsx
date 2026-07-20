import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { FaLinkedinIn, FaFacebookF, FaTiktok, FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { MapPin, Phone, Mail } from "lucide-react";
import { Toaster } from "sonner";
import Providers from "./Providers";
import FooterNewsletter from "./FooterNewsletter";
import GoogleTagManager from "./GoogleTagManager";
import "./globals.css";

import NavigationAndConsent from "./NavigationAndConsent";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://www.cybernovr.com"),
  title: "CYBERNOVR | Institutional-Grade Cybersecurity Intelligence",
  description: "Protecting critical digital infrastructures with premium intelligence solutions.",
  openGraph: {
    title: "CYBERNOVR | Institutional-Grade Cybersecurity Intelligence",
    description: "Protecting critical digital infrastructures with premium intelligence solutions.",
    url: "https://www.cybernovr.com",
    siteName: "CYBERNOVR",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CYBERNOVR | Institutional-Grade Cybersecurity Intelligence",
    description: "Protecting critical digital infrastructures with premium intelligence solutions.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    other: [
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>

      <body className="bg-surface text-on-surface font-sans overflow-x-hidden antialiased">
        <GoogleTagManager />
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
              <p className="uppercase tracking-widest text-white font-black text-xs">Navigation</p>
              <ul className="space-y-3 text-sm font-medium text-white/80">
                <li><Link className="hover:text-primary transition-colors" href="/about">About Us</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="/solutions">Our Solutions</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="/academy">Novr Academy</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="/assessments">Cybersecurity Assessments</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="/about/careers#hiring">Careers</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="/contacts">Contact</Link></li>
              </ul>
            </div>
            
            {/* Compliance links */}
            <div className="md:col-span-2 space-y-4">
              <p className="uppercase tracking-widest text-white font-black text-xs">Compliance</p>
              <ul className="space-y-3 text-sm font-medium text-white/80">
                <li><Link className="hover:text-primary transition-colors" href="/privacy">Privacy Policy</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="/cookies">Cookies Policy</Link></li>
              </ul>
            </div>
            
            {/* Threat Intel Field */}
            <div className="md:col-span-3 space-y-4">
              <p className="uppercase tracking-widest text-white font-black text-xs">Stay Updated</p>
              <p className="text-white/70 text-sm">Receive premium threat intelligence directly to your inbox.</p>
              <FooterNewsletter />

              <div className="pt-4 space-y-3 text-sm text-white/70">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                  <p>4625 Varsity Drive NW, Calgary, AB T3A 0Z9, Canada</p>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                  <p>17 Sunday Adigun Street, Alausa, Ikeja, Lagos, Nigeria</p>
                </div>
                <div className="flex items-start gap-2">
                  <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                  <div className="space-y-1">
                    <p className="flex items-center gap-2">
                      <a href="https://wa.me/2348098120000" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Chat on WhatsApp">
                        <FaWhatsapp size={14} />
                      </a>
                      <a href="tel:+2348098120000" className="hover:text-primary transition-colors">+234-809-812-0000</a>
                    </p>
                    <p>
                      <a href="tel:+14439853735" className="hover:text-primary transition-colors">+1-443-985-3735</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                  <a href="mailto:info@cybernovr.com" className="hover:text-primary transition-colors">info@cybernovr.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* HIGH CONTRAST & VISIBLE COPYRIGHT TEXT (#16, #43) */}
          <div className="max-w-[1536px] mx-auto border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
            <p className="text-white/60 font-medium tracking-wide text-center sm:text-left">
              © 2026 Cybernovr Limited. All rights reserved. A <span className="text-red-400">#cyber360resilience</span> company
            </p>
          </div>
        </footer>
        </Providers>
      </body>
    </html>
  );
}
