import Link from "next/link";
import { BookOpen, CheckCircle2, ArrowRight, Mail, Phone, Clock } from "lucide-react";

export const metadata = {
  title: "How to Enroll | CYBERNOVR Academy",
  description: "Follow these simple steps to enroll in our Cybersecurity Education and Awareness Program (CEAP).",
};

export default function AcademyEnrollPage() {
  const steps = [
    {
      num: 1,
      title: "Redirect to Academy Portal",
      desc: "You will be redirected to our official academy portal where you can create your account.",
      detail: "Click the button below to go to https://academy.cybernovr.xyz"
    },
    {
      num: 2,
      title: "Sign Up & Verify Email",
      desc: "Create your account using your email address and verify it through the confirmation email sent to you.",
      detail: "Check your inbox (and spam folder) for the verification link"
    },
    {
      num: 3,
      title: "Navigate to CEAP Course",
      desc: "After verification, log into your account and find the Cybersecurity Education and Awareness Program (CEAP) course.",
      detail: "Browse through the course catalog or use the search function"
    },
    {
      num: 4,
      title: "Make One-Time Payment",
      desc: "Click on the course and proceed to make a one-time payment to gain full access.",
      detail: "Complete the payment process to unlock all course materials"
    },
    {
      num: 5,
      title: "Enjoy Course Benefits",
      desc: "Once payment is confirmed, you'll have full access to all course modules, materials, and benefits.",
      detail: "Start learning immediately with our comprehensive cybersecurity curriculum"
    }
  ];

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto bg-white text-zinc-900 antialiased">
      <div className="max-w-3xl text-left space-y-10">
        {/* Header */}
        <div className="border-b border-zinc-200 pb-8">
          <span className="inline-block font-mono text-red-700 text-xs font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded mb-4">
            Novr Academy
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 uppercase mb-4">
            How to Enroll in Cybersecurity Training
          </h1>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Follow these simple steps to enroll in our Cybersecurity Education
            and Awareness Program (CEAP)
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-purple-950/[0.04] border border-purple-900/10 p-5 rounded-xl">
          <p className="text-sm font-bold text-zinc-900 uppercase tracking-tight mb-1">
            Important Notice
          </p>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Enrollment and payment processing are handled through our dedicated
            academy portal. Please read all instructions carefully before
            proceeding.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center font-mono font-black text-sm">
                {step.num}
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">
                  {step.title}
                </h2>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {step.desc}
                </p>
                <p className="text-xs text-zinc-400 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-red-600" />{" "}
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="https://academy.cybernovr.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-md transition-all shadow-md flex items-center gap-2"
          >
            <BookOpen className="h-4 w-4" /> Enroll Now
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            href="/academy"
            className="border-2 border-zinc-200 hover:border-purple-900 text-zinc-700 px-6 py-3.5 rounded-md text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2"
          >
            Back to Academy
          </Link>
        </div>

        {/* Contact Support */}
        <div className="border-t border-zinc-200 pt-8 space-y-4">
          <h2 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">
            Need Assistance?
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            If you get lost at any step of the way or encounter issues during
            enrollment, please don&apos;t hesitate to{" "}
            <Link
              href="/contacts"
              className="text-red-700 hover:underline font-bold"
            >
              contact
            </Link>{" "}
            our support team.
          </p>
          <div className="text-sm text-zinc-600 space-y-2">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-red-600" />{" "}
              <strong>Email Support:</strong>{" "}
              <a
                href="mailto:info@cybernovr.com"
                className="text-red-700 hover:underline font-bold"
              >
                info@cybernovr.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-red-600" />{" "}
              <strong>Phone Support:</strong>{" "}
              <a
                href="tel:+2348143788857"
                className="text-red-700 hover:underline font-bold"
              >
                +234 814-378-8857
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-red-600" /> <strong>Hours:</strong>{" "}
              Monday - Friday, 9:00 AM - 6:00 PM WAT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
