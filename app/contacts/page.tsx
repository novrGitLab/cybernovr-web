"use client";
import React, { useState } from "react";
import { submitWeb3Form } from "@/app/web3forms";
import { MapPin, Phone, Mail, Clock, ChevronDown, ArrowRight, ShieldAlert, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function ContactUsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    try {
      const formData = new FormData(form);
      formData.append("form_name", "contactMessage");
      formData.append("form_source", "Contacts Page");
      await submitWeb3Form(formData);
      setSucceeded(true);
      form.reset();
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const locations = [
    { text: "4625 Varsity Drive NW, Calgary, AB T3A 0Z9, Canada" },
    { text: "17 Sunday Adigun Street, Alausa, Ikeja, Lagos, Nigeria" }
  ];

  const faqData = [
    {
      q: "What services does Cybernovr offer?",
      a: "Cybernovr offers a comprehensive range of cybersecurity services, including risk management, penetration testing, incident response, compliance, and virtual SOC services. We have also developed GRC solutions, Vulnerability Management, and Extended Detection and Response (XDR) solutions. We are also partners to major OEMs like China Telecom Global, CrowdStrike, and Whalebone."
    },
    {
      q: "How can I request a security assessment?",
      a: "You can request a security assessment by filling out our contact form, calling our office, or sending us an email. One of our security experts will get in touch with you to discuss your requirements and schedule the assessment."
    },
    {
      q: "Do you offer services for small businesses?",
      a: "Yes, we offer cybersecurity solutions for businesses of all sizes. We understand that small businesses have unique security challenges and budget constraints, and we provide tailored solutions that address these specific needs."
    },
    {
      q: "What industries do you serve?",
      a: "We serve a wide range of industries, including finance, healthcare, retail, manufacturing, education, and government. Our team has experience working with organizations across various sectors and understands the specific security requirements of each industry."
    },
    {
      q: "How quickly can you respond to a security incident?",
      a: "Our incident response team is available 24/7 and can respond rapidly to security incidents. The exact response time depends on the nature and severity of the incident, but we prioritize immediate containment and mitigation to minimize potential damage."
    }
  ];

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-20 w-full bg-white text-zinc-900 antialiased">
      {/* Top Header Section */}
      <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left">
        <span className="inline-block font-mono text-red-700 text-[11px] md:text-[15px] font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded mb-4">
          WE LOVE TO HEAR FROM YOU
        </span>
        <h1 className="text-2xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-2">
          Connect With Us
        </h1>
        <p className="italic text-red-700 border-l-2 border-red-700 pl-4 py-0.5 text-[13px] md:text-[15px] font-semibold tracking-wide">
          Get in touch with our team to discuss your cybersecurity needs.
        </p>
      </div>

      {/* Dynamic Main Grid Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        {/* Left Side: "Send Us a Message" Form Field Matrix */}
        <div className="lg:col-span-7 bg-zinc-950 p-6 md:p-10 rounded-2xl border border-zinc-900 shadow-2xl space-y-6 transition-all duration-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.12)]">
          <h2 className="text-[13px] md:text-[15px] font-black text-white uppercase tracking-tight">
            Send Us a Message
          </h2>

          {succeeded ? (
            <div className="py-10 text-center flex flex-col items-center justify-center space-y-3">
              <CheckCircle2 className="h-12 w-12 text-emerald-500 animate-bounce" />
              <h4 className="text-[15px] font-black uppercase tracking-wide text-white">
                Request Submitted
              </h4>
              <p className="text-xs text-zinc-400 max-w-xs mx-auto font-medium">
                Our team will be in touch within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setSucceeded(false)}
                className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 font-bold rounded text-[13px] uppercase tracking-widest font-mono transition-all"
              >
                Submit Another
              </button>
            </div>
          ) : (
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[13px] font-bold text-zinc-300 font-mono uppercase tracking-wider">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-[13px] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[13px] font-bold text-zinc-300 font-mono uppercase tracking-wider">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-[13px] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[13px] font-bold text-zinc-300 font-mono uppercase tracking-wider">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-[13px] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[13px] font-bold text-zinc-300 font-mono uppercase tracking-wider">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact number"
                  inputMode="numeric"
                  pattern="[0-9+\-\s()]+"
                  title="Please enter a valid phone number"
                  onKeyDown={(e) => {
                    if (
                      !/[0-9+\-\s()]/.test(e.key) &&
                      ![
                        "Backspace",
                        "Delete",
                        "Tab",
                        "ArrowLeft",
                        "ArrowRight",
                      ].includes(e.key)
                    ) {
                      e.preventDefault();
                    }
                  }}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-[13px] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all font-normal"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[13px] font-bold text-zinc-300 font-mono uppercase tracking-wider">
                Service of Interest
              </label>
              <div className="relative">
                <select
                  name="service"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-[13px] text-white focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all appearance-none cursor-pointer font-normal"
                >
                  <option value="" className="bg-zinc-950 text-white">
                    Select a Service
                  </option>
                  <option value="training" className="bg-zinc-950 text-white">
                    Cybersecurity Training
                  </option>
                  <option value="novrsoc" className="bg-zinc-950 text-white">
                    NovrSOC
                  </option>
                  <option value="novrgrc" className="bg-zinc-950 text-white">
                    NovrGRC
                  </option>
                  <option value="novrradar" className="bg-zinc-950 text-white">
                    NovrRADAR
                  </option>
                  <option
                    value="professional"
                    className="bg-zinc-950 text-white"
                  >
                    Professional Services
                  </option>
                </select>
                <ChevronDown className="h-4 w-4 text-zinc-400 absolute right-4 top-3.5 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-zinc-300 font-mono uppercase tracking-wider">
                Message *
              </label>
              <textarea
                rows={5}
                name="message"
                placeholder="Send your message; we will respond within 1-2 business days"
                required
                className="w-full bg-zinc-900 border border-zinc-700 rounded p-4 text-[13px] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 hover:border-purple-900/40 transition-all resize-none font-normal"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-4 font-black rounded shadow-xl transition-all text-[13px] uppercase tracking-widest font-mono disabled:opacity-50"
            >
              Send Message
            </button>
          </form>
          )}
        </div>

        {/* Right Side: Static Information Registry */}
        <div className="lg:col-span-5 space-y-8 lg:pl-4 w-full">
          <div className="space-y-2">
            <h2 className="text-lg md:text-2xl font-bold text-zinc-900 uppercase tracking-tight">
              Contact Information
            </h2>
            <p className="text-[13px] text-zinc-500 leading-relaxed font-normal">
              Get in touch for an unparalleled customer experience
            </p>
          </div>

          <div className="space-y-6">
            {/* Location Group */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 rounded-lg flex items-center justify-center text-red-700 shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="space-y-2 text-[13px] text-zinc-600 font-normal pt-1">
                <p className="font-bold text-zinc-900 text-[15px] uppercase tracking-tight">
                  Our Locations
                </p>
                {locations.map((loc, i) => (
                  <p key={i} className="leading-relaxed text-[13px]">
                    {loc.text}
                  </p>
                ))}
              </div>
            </div>

            {/* Phone Group */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 rounded-lg flex items-center justify-center text-red-700 shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div className="space-y-1 pt-1 text-[13px]">
                <p className="font-bold text-zinc-900 text-[15px] uppercase tracking-tight">
                  Phone Inquiries
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href="https://wa.me/2348098120000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 transition-colors"
                    title="Chat on WhatsApp"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                  </a>
                  <a
                    href="tel:+2348098120000"
                    className="text-[13px] font-mono font-bold text-zinc-700 leading-relaxed hover:underline"
                  >
                    +234-809-812-0000
                  </a>
                </div>
                <a
                  href="tel:+14439853735"
                  className="text-[13px] font-mono font-bold text-red-700 leading-relaxed hover:underline block"
                >
                  +1-443-985-3735
                </a>
              </div>
            </div>

            {/* Email Group */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 rounded-lg flex items-center justify-center text-red-700 shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="space-y-1 pt-1 text-[13px]">
                <p className="font-bold text-zinc-900 text-[15px] uppercase tracking-tight">
                  Email
                </p>
                <a
                  href="mailto:info@cybernovr.com"
                  className="text-[13px] font-mono font-bold text-red-700 hover:underline cursor-pointer block"
                >
                  info@cybernovr.com
                </a>
                <a
                  href="mailto:kazeem@cybernovr.com"
                  className="text-[13px] font-mono font-bold text-zinc-500 hover:underline cursor-pointer block"
                >
                  kazeem@cybernovr.com
                </a>
              </div>
            </div>

            {/* Business Hours Group */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 rounded-lg flex items-center justify-center text-red-700 shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div className="space-y-1 pt-1 text-[13px]">
                <p className="font-bold text-zinc-900 text-[15px] uppercase tracking-tight">
                  Business Hours
                </p>
                <p className="text-[13px] text-zinc-600 font-medium">
                  Monday - Friday: 8:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>

          <hr className="border-zinc-200" />

          {/* Emergency Escalation Unit */}
          <div className="bg-purple-950/[0.02] border border-purple-900/10 p-6 rounded-xl space-y-3 shadow-sm">
            <h4 className="text-sm uppercase font-mono font-black tracking-widest text-red-700 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
              24/7 Incident Response
            </h4>
            <p className="text-[13px] text-zinc-600 leading-relaxed font-normal">
              For active breach remediation or urgent system threat
              intervention, please reach out straight to our high-priority SOC
              line:
            </p>
            <a
              href="tel:+2349016991201"
              className="text-lg font-mono font-black text-red-700 hover:underline tracking-tight"
            >
              +234-901-699-1201
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Sub-Section */}
      <section className="pt-8 border-t border-zinc-200 space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-xl md:text-3xl font-black text-zinc-900 uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[13px] text-zinc-500 max-w-xl mx-auto font-normal">
            Find answers to questions about our services and solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white border-2 border-zinc-200 rounded-xl shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center bg-zinc-50/40 hover:bg-zinc-50 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-[13px] md:text-[15px] text-zinc-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className="h-4 w-4 text-zinc-400 shrink-0 transition-transform duration-200"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-2 text-[11px] md:text-[13px] text-zinc-600 leading-relaxed bg-white border-t border-zinc-100 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
