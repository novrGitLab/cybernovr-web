"use client";
import React, { useState } from "react";

export default function ContactUsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const locations = [
    { text: "108 4625 Varsity Drive NW, Calgary, AB T3A 0Z9" },
    { text: "17 Sunday Adigun Street, AlaUSA Ikeja, Lagos." }
  ];

  const faqData = [
    {
      q: "What services does cybernovr offer?",
      a: "cybernovr offers a comprehensive range of cybersecurity services, including professional consulting, risk management, penetration testing, incident response, compliance, and virtual CISO services. We tailor our solutions to meet the specific needs of your organization."
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
    <div className="pt-32 md:pt-40 pb-section-gap px-6 md:px-margin-desktop max-w-[1536px] mx-auto space-y-20">
      
      {/* Dynamic Main Grid Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: "Send Us a Message" Interactive Form Field Matrix with Cyberpunk Dark Theme */}
        <div className="lg:col-span-7 bg-[#191c1e] p-6 md:p-10 rounded-xl border border-white/10 shadow-2xl space-y-6">
          <h2 className="text-2xl font-extrabold text-white tracking-tight">Send Us a Message</h2>
          
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully."); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold text-white/60">Name *</label>
                <input 
                  type="text" placeholder="Your Name" required
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-white/60">Email *</label>
                <input 
                  type="email" placeholder="your@email.com" required
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold text-white/60">Company</label>
                <input 
                  type="text" placeholder="Your Company"
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-white/60">Phone</label>
                <input 
                  type="tel" placeholder="Your Phone Number"
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-white/60">Service of Interest</label>
              <select className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all appearance-none cursor-pointer">
                <option value="" className="bg-[#191c1e] text-white">Select a Service</option>
                <option value="resilience" className="bg-[#191c1e] text-white">Cybersecurity Resilience</option>
                <option value="grc" className="bg-[#191c1e] text-white">Governance and Compliance (GRC)</option>
                <option value="risk" className="bg-[#191c1e] text-white">Risk Management</option>
                <option value="dns" className="bg-[#191c1e] text-white">DNS Security</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-white/60">Message *</label>
              <textarea 
                rows={5} placeholder="Tell us about your security needs" required
                className="w-full bg-white/5 border border-white/10 rounded p-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none"
              />
            </div>

            <button type="submit" className="w-full bg-primary text-white py-4 font-bold rounded hover:bg-primary-container active:scale-[0.99] transition-all text-sm uppercase tracking-wider shadow-sm">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Static Information Registry */}
        <div className="lg:col-span-5 space-y-8 lg:pl-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-on-surface tracking-tight">Contact Information</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Have questions or need assistance? Our team is here to help. Contact us using the information below.
            </p>
          </div>

          <div className="space-y-6">
            {/* Location Group */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-xl">location_on</span>
              </div>
              <div className="space-y-2 text-sm text-on-surface-variant font-medium pt-1.5">
                <p className="font-bold text-on-surface text-base mb-1">Our Location</p>
                {locations.map((loc, i) => (
                  <p key={i} className="leading-tight">{loc.text}</p>
                ))}
              </div>
            </div>

            {/* Phone Group */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-xl">phone</span>
              </div>
              <div className="space-y-1 pt-1.5">
                <p className="font-bold text-on-surface text-base">Phone</p>
                <p className="text-sm font-mono font-bold text-on-surface-variant">+234 806-120-0000, +234 814-378-8857</p>
              </div>
            </div>

            {/* Email Group */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-xl">mail</span>
              </div>
              <div className="space-y-1 pt-1.5">
                <p className="font-bold text-on-surface text-base">Email</p>
                <p className="text-sm font-mono font-semibold text-primary select-all">info@cybernovr.com</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-xl">schedule</span>
              </div>
              <div className="space-y-1 pt-1.5">
                <p className="font-bold text-on-surface text-base">Business Hours</p>
                <p className="text-sm text-on-surface-variant font-medium">Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <hr className="border-outline-variant/20" />

          {/* Emergency Escalation Target Call */}
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 space-y-3">
            <h4 className="text-sm font-black text-primary uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              Emergency Support
            </h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              For urgent security incidents requiring immediate assistance, please call our 24/7 emergency response line:
            </p>
            <p className="text-xl font-mono font-black text-primary select-all">+234 814-378-8857</p>
          </div>
        </div>

      </div>

      {/* FAQ Accordion Sub-Section */}
      <section className="pt-8 border-t border-outline-variant/20 space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-on-surface tracking-tight">Frequently Asked Questions</h2>
          <p className="text-sm text-on-surface-variant max-w-xl mx-auto">
            Find answers to common questions about our services and how we can help your organization.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="bg-white border border-outline-variant/30 rounded-lg shadow-sm overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center bg-surface-container-lowest hover:bg-surface-container-low/40 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-sm md:text-base text-on-surface">{faq.q}</span>
                  <span className="material-symbols-outlined text-on-surface-variant shrink-0 transition-transform duration-200" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-2 text-xs md:text-sm text-on-surface-variant leading-relaxed bg-white border-t border-outline-variant/10 animate-fadeIn">
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