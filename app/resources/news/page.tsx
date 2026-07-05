"use client";
import React from "react";
import { ArrowRight, Mail } from "lucide-react";

export default function ResourcesNewsPage() {
  const newsBriefs = [
    {
      title: "NCC Unveils Cybersecurity Blueprint to Fortify Nigeria's Telecom Backbone",
      source: "Nigeria Communications Week",
      desc: "The presentation of the proposed framework by the Chief Executive Officer of Cybernovr, the consultants to the Commission on the project, Dr. Kazeem Durodoye, further provided details on securing the telecom sector.",
      link: "https://www.nigeriacommunicationsweek.com.ng/ncc-unveils-cybersecurity-blueprint-to-fortify-nigerias-telecom-backbone/",
      image: "/assets/news/ncc-summit.jpg"
    },
    {
      title: "Cybernovr Highlights Cyber Security Risks for Businesses at 5th Nigerian Integrated Security Summit",
      source: "Nigeria Communications Week",
      desc: "Cybernovr Limited highlighted critical cyber security risks facing businesses at the 5th Nigerian Integrated Security Summit, emphasizing the need for proactive security measures.",
      link: "https://nigeriacommunicationsweek.com.ng/2025/09/26/cybernovr-highlights-cyber-security-risks-for-businesses-at-5th-nigerian-integrated-security-summit/",
      image: "/assets/news/newsroom.jpg"
    },
    {
      title: "Lagos Students Trained in Cybersecurity Skills",
      source: "The Punch Nigeria",
      desc: "The training organised by Cybernovr Limited in partnership with the Rotary Club of Lagos, will provide the students with 10 modules covering cybersecurity basics, identity management, cyber threat awareness.",
      link: "https://punchng.com/lagos-students-trained-in-cybersecurity-skills/",
      image: "/assets/news/lagos-students.jpg"
    },
    {
      title: "NCC Moves to Develop Cybersecurity Regulatory Framework for Telecoms Sector",
      source: "This Day Live",
      desc: "In a lead paper presentation on the overview of the proposed cybersecurity framework for the telecoms sector, the CEO, Cybernovr and Consultant to NCC, Dr. Kazeem Durodoye, highlighted key provisions.",
      link: "https://www.thisdaylive.com/2025/06/05/ncc-moves-to-develop-cybersecurity-regulatory-framework-for-telecoms-sector/",
      image: "/assets/news/ncc-regulatory.jpg"
    },
    {
      title: "NCC Announced the Development of a Comprehensive Cybersecurity Framework",
      source: "The Economic Times",
      desc: "Adding depth to the conversation, Dr. Kazeem Durodoye, CEO of Cybernovr, stressed the need for the framework to account for evolving mobile technologies such as Open RAN.",
      link: "https://theeconomictimes.com.ng/2025/06/05/ncc-unveils-comprehensive-cybersecurity-framework-to-safeguard-nigerias-telecom-sector/",
      image: "/assets/news/ncc-framework.jpg"
    }
  ];

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-12 bg-white text-zinc-900 antialiased">
      <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left">
        <span className="inline-block font-mono text-red-700 text-xs font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded mb-4">
          CYBERNOVR NEWS AND INTELLIGENCE ANNOUNCEMENTS
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase mb-2">Latest News</h1>
        <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal">
          Get updates on the latest news, global advisory on threat intelligence, and sector compliance news.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {newsBriefs.map((news, idx) => (
          <article key={idx} className="bg-purple-950/[0.02] border border-purple-900/10 rounded-xl overflow-hidden flex flex-col justify-between shadow-sm group hover:border-purple-900/30 transition-all duration-300">
            <div className="space-y-0">
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-3">
                <p className="text-[10px] font-mono font-bold text-red-700 uppercase tracking-widest">{news.source}</p>
                <h3 className="text-base font-bold text-zinc-900 leading-snug group-hover:text-red-700 transition-colors uppercase tracking-tight">{news.title}</h3>
                <p className="text-zinc-600 text-xs md:text-sm leading-relaxed font-normal">{news.desc}</p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <a href={news.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-red-700 hover:text-red-600 font-bold text-xs uppercase tracking-wider transition-all font-mono group/btn">
                Read More <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Subscribe Section */}
      <section className="bg-purple-950/[0.02] border border-purple-900/10 rounded-2xl p-8 md:p-12 text-center space-y-4">
        <Mail className="h-10 w-10 text-red-700 mx-auto" />
        <h2 className="text-xl md:text-2xl font-bold text-zinc-900 uppercase tracking-tight">Stay Informed</h2>
        <p className="text-sm text-zinc-500 max-w-md mx-auto font-normal">
          Subscribe to our newsletter to receive the latest cybersecurity news and insights directly in your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing!"); }}>
          <input 
            type="email" placeholder="Enter your email address" required
            className="flex-1 bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-all font-normal"
          />
          <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest px-6 py-3 rounded-lg transition-all shadow-md font-mono whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
