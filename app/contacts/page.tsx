import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import ContactPageForm from "@/components/forms/ContactPageForm";

const locations = [
  { text: "4625 Varsity Drive NW, Calgary, AB T3A 0Z9, Canada" },
  { text: "17 Sunday Adigun Street, Alausa, Ikeja, Lagos, Nigeria" }
];

export default function ContactUsPage() {
  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-20 w-full bg-white text-zinc-900 antialiased">

      {/* Header */}
      <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left">
        <span className="inline-block font-mono text-red-700 text-[11px] md:text-[15px] font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded mb-4">
          WE LOVE TO HEAR FROM YOU
        </span>
        <h1 className="text-2xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-2">Connect With Us</h1>
        <p className="italic text-red-700 border-l-2 border-red-700 pl-4 py-0.5 text-[13px] md:text-[15px] font-semibold tracking-wide">
          Get in touch with our team to discuss your cybersecurity needs.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        {/* Form */}
        <div className="lg:col-span-7 bg-zinc-950 p-6 md:p-10 rounded-2xl border border-zinc-900 shadow-2xl space-y-6 transition-all duration-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.12)]">
          <h2 className="text-[13px] md:text-[15px] font-black text-white uppercase tracking-tight">Send Us a Message</h2>
          <ContactPageForm />
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-8 lg:pl-4 w-full">
          <div className="space-y-2">
            <h2 className="text-lg md:text-2xl font-bold text-zinc-900 uppercase tracking-tight">Contact Information</h2>
            <p className="text-[13px] text-zinc-500 leading-relaxed font-normal">Get in touch for an unparalleled customer experience</p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 rounded-lg flex items-center justify-center text-red-700 shrink-0"><MapPin className="h-5 w-5" /></div>
              <div className="space-y-2 text-[13px] text-zinc-600 font-normal pt-1">
                <p className="font-bold text-zinc-900 text-[15px] uppercase tracking-tight">Our Locations</p>
                {locations.map((loc, i) => (<p key={i} className="leading-relaxed text-[13px]">{loc.text}</p>))}
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 rounded-lg flex items-center justify-center text-red-700 shrink-0"><Phone className="h-5 w-5" /></div>
              <div className="space-y-1 pt-1 text-[13px]">
                <p className="font-bold text-zinc-900 text-[15px] uppercase tracking-tight">Phone Inquiries</p>
                <div className="flex items-center gap-2">
                  <a href="https://wa.me/2348098120000" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors" title="Chat on WhatsApp"><FaWhatsapp className="h-5 w-5" /></a>
                  <a href="tel:+2348098120000" className="text-[13px] font-mono font-bold text-zinc-700 leading-relaxed hover:underline">+234-809-812-0000</a>
                </div>
                <a href="tel:+14439853735" className="text-[13px] font-mono font-bold text-red-700 leading-relaxed hover:underline block">+1-443-985-3735</a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 rounded-lg flex items-center justify-center text-red-700 shrink-0"><Mail className="h-5 w-5" /></div>
              <div className="space-y-1 pt-1 text-[13px]">
                <p className="font-bold text-zinc-900 text-[15px] uppercase tracking-tight">Email</p>
                <a href="mailto:info@cybernovr.com" className="text-[13px] font-mono font-bold text-red-700 hover:underline cursor-pointer block">info@cybernovr.com</a>
                <a href="mailto:kazeem@cybernovr.com" className="text-[13px] font-mono font-bold text-zinc-500 hover:underline cursor-pointer block">kazeem@cybernovr.com</a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 rounded-lg flex items-center justify-center text-red-700 shrink-0"><Clock className="h-5 w-5" /></div>
              <div className="space-y-1 pt-1 text-[13px]">
                <p className="font-bold text-zinc-900 text-[15px] uppercase tracking-tight">Business Hours</p>
                <p className="text-[13px] text-zinc-600 font-medium">Monday - Friday: 8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          <hr className="border-zinc-200" />

          <div className="bg-purple-950/[0.02] border border-purple-900/10 p-6 rounded-xl space-y-3 shadow-sm">
            <h4 className="text-sm uppercase font-mono font-black tracking-widest text-red-700 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
              24/7 Incident Response
            </h4>
            <p className="text-[13px] text-zinc-600 leading-relaxed font-normal">For active breach remediation or urgent system threat intervention, please reach out straight to our high-priority SOC line:</p>
            <a href="tel:+2349016991201" className="text-lg font-mono font-black text-red-700 hover:underline tracking-tight">+234-901-699-1201</a>
          </div>
        </div>
      </div>
    </div>
  );
}
