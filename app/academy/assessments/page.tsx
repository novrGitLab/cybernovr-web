"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ShieldCheck, Layers, Activity, CheckCircle2, RotateCcw, ArrowRight, X, AlertTriangle, Shield, Check, HelpCircle } from "lucide-react";

// Types definition interfaces
interface Question {
  q: string;
  options: string[];
  answer: string;
  explanation: string;
}

export default function AssessmentsMasterPage() {
  // Navigation & Core Selector States
  const [activeQuiz, setActiveQuiz] = useState<"barometer" | "staff" | null>(null);
  const [currentQuestionIdx, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // Scoping Console Call-To-Action Form States
  const [scopingModalOpen, setScopingModalOpen] = useState(false);
  const [scopingTargetTitle, setScopingTargetTitle] = useState("");
  const [scopingSubmitted, setScopingSubmitted] = useState(false);

  // Quiz 1: Your Cybersecurity Barometer Data Matrix
  const barometerQuestions: Question[] = [
    { q: "Which protocol is considered secure for web communication?", options: ["HTTP", "FTP", "HTTPS", "Telnet"], answer: "HTTPS", explanation: "HTTPS (Hypertext Transfer Protocol Secure) is the secure version of HTTP that uses SSL/TLS encryption to protect data during transmission." },
    { q: "What is the most common form of cyberattack on networks?", options: ["Brute force attack", "Man-in-the-middle attack", "Phishing", "SQL injection"], answer: "Phishing", explanation: "Phishing accounts for over 90% of cyberattacks, targeting human vulnerabilities rather than technical weaknesses." },
    { q: "Which of these is a sign of malware infection?", options: ["Faster performance", "Frequent crashes", "New features", "More storage"], answer: "Frequent crashes", explanation: "Frequent crashes or unusual system behavior are common indicators of malware infection." },
    { q: "Why does port 443 matter for SSL/TLS secure web traffic?", options: ["Encrypted connection", "Cert validation", "No fallback", "Bypass firewall"], answer: "Encrypted connection", explanation: "Port 443 is the standard port used for HTTPS traffic, providing encrypted communication between web browsers and servers." },
    { q: "Which of these is used to encrypt emails?", options: ["SSL", "TLS", "PGP", "HTTP"], answer: "PGP", explanation: "PGP (Pretty Good Privacy) is specifically designed for encrypting email communications." },
    { q: "The act of disguising as someone else online is called:", options: ["Encryption", "Impersonation", "Spoofing", "Harvesting"], answer: "Spoofing", explanation: "Spoofing involves falsifying data to appear as another user, device, or system." },
    { q: "What do you think is the most damaging impact of a cyberattack on a school/college?", options: ["Student data leakage", "Financial extortion (ransom)", "Loss of academic records", "Reputation damage"], answer: "Student data leakage", explanation: "Student data leakage can lead to identity theft, privacy violations, and long-term consequences for affected individuals." },
    { q: "Which of the following is not an email related hacking tool?", options: ["Mail Password", "Mail PassView", "Sendinc", "Email Finder Pro"], answer: "Sendinc", explanation: "Sendinc is a legitimate email service, unlike the others which are associated with extracting or discovering email credentials." },
    { q: "Which one of these is a symmetric encryption algorithm?", options: ["DSA", "ECC", "DES", "RSA"], answer: "DES", explanation: "DES (Data Encryption Standard) uses the same key for encryption and decryption, making it a symmetric algorithm." },
    { q: "Which of the following encryption methods is considered the most secure for data-at-rest?", options: ["AES-128", "RSA", "AES-256", "Triple DES"], answer: "AES-256", explanation: "AES-256 is widely regarded as the strongest commonly used encryption standard for protecting stored data." }
  ];

  // Quiz 2: Staff Cybersecurity Knowledge Check Data Matrix
  const staffQuestions: Question[] = [
    { q: "What script/command in MSF console is used to find vulnerabilities and gain access to a system by exploiting weak points?", options: ["db_nmap", "search", "db_autopwn", "exploit"], answer: "db_autopwn", explanation: "db_autopwn is a Metasploit console command that automatically exploits vulnerabilities found during scanning." },
    { q: "What is the best approach to apply patching?", options: ["Manual Patching", "Automatic Patching", "Mixture", "Other"], answer: "Mixture", explanation: "A mixture of manual and automatic patching is considered best practice, allowing for both control and efficiency." },
    { q: "A system was infected with ransomware and left powered on. What's the best tool to begin memory analysis in live forensics?", options: ["Autopsy", "FTK Imager", "Redline", "Wireshark"], answer: "Redline", explanation: "Redline is specifically designed for memory analysis in live forensics situations." },
    { q: "RAID 6 uses what to provide fault tolerance?", options: ["Parity and striping", "Dual parity", "Mirroring", "Encryption"], answer: "Dual parity", explanation: "RAID 6 uses dual parity to provide fault tolerance against two simultaneous drive failures." },
    { q: "Where should AI be prioritized most in network security?", options: ["Network traffic analysis", "Threat detection & response", "Policy enforcement", "Identity & access control"], answer: "Threat detection & response", explanation: "AI is most effective in threat detection and response, where it can analyze patterns and respond in real-time." },
    { q: "Where did the term \"hacker\" originate?", options: ["MIT", "New York University", "Harvard University", "Bell's Lab"], answer: "MIT", explanation: "The term originated at MIT in the 1960s among members of the Tech Model Railroad Club." },
    { q: "Would you allow your staff to use AI tools like ChatGPT, Gemini, Claude or Google Veo in your organisation?", options: ["Yes", "No", "Maybe"], answer: "Maybe", explanation: "A cautious \"maybe\" with proper guidelines is often the best approach for AI tool usage in organizations." },
    { q: "Which layer of the OSI model is responsible for logical addressing?", options: ["Network Layer", "Data Link", "Transport Layer", "Application Layer"], answer: "Network Layer", explanation: "The Network Layer (Layer 3) handles logical addressing and routing." },
    { q: "What is the biggest concern for an organisation after the mega-breach?", options: ["Business email compromise", "Personal account hacks", "Dark web exposure", "Credential phishing"], answer: "Dark web exposure", explanation: "Dark web exposure of sensitive data often has the longest-lasting consequences." },
    { q: "After reading about the 16B password leak, what's your next step?", options: ["Change all my passwords", "Enable MFA everywhere", "Check if I'm affected", "I'm not sure what to do"], answer: "Enable MFA everywhere", explanation: "Enabling Multi-Factor Authentication (MFA) provides the most immediate security improvement after a breach." }
  ];

  const currentQuestions = activeQuiz === "barometer" ? barometerQuestions : staffQuestions;
  const currentQuestion = currentQuestions[currentQuestionIdx];

  const initializeQuizTrack = (type: "barometer" | "staff") => {
    setActiveQuiz(type);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setQuizCompleted(false);
    setShowExplanation(false);
  };

  const handleSelectOption = (option: string) => {
    setUserAnswers({ ...userAnswers, [currentQuestionIdx]: option });
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestionIdx < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIdx + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePreviousQuestion = () => {
    setShowExplanation(false);
    if (currentQuestionIdx > 0) {
      setCurrentQuestionIndex(currentQuestionIdx - 1);
    }
  };

  // Score Calculation Formula logic
  const calculatedCorrectAnswers = currentQuestions.filter(
    (q, idx) => userAnswers[idx] === q.answer
  ).length;
  const healthScorePct = Math.round((calculatedCorrectAnswers / currentQuestions.length) * 100);

  // Risk Classification dynamic hooks
  const getRiskStatus = (score: number) => {
    if (score <= 49) return { level: "High Risk", color: "text-red-600 border-red-200 bg-red-50", desc: "Improvement needed! Your organization has significant cybersecurity exposure gaps. Focus immediately on strengthening parameters, incident playbooks, and continuous edge network monitoring." };
    if (score <= 75) return { level: "Medium Risk", color: "text-amber-600 border-amber-200 bg-amber-50", desc: "Baseline monitoring active. Your organization has basic cybersecurity measures in place but needs posture hardening. We recommend augmenting your asset compliance maps." };
    return { level: "Low Risk", color: "text-emerald-600 border-emerald-200 bg-emerald-50", desc: "Excellent protection. Your technical security knowledge meets optimal sovereign resilient baselines. Continue with passive scanning loops to sustain zero-touch visibility." };
  };

  const currentRisk = getRiskStatus(healthScorePct);

  const openScopingForm = (assessmentTitle: string) => {
    setScopingTargetTitle(assessmentTitle);
    setScopingSubmitted(false);
    setScopingModalOpen(true);
  };

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto w-full bg-white text-zinc-900 antialiased">
      
      {/* Dynamic Master Switch View Condition */}
      {!activeQuiz ? (
        <>
          {/* Institutional Header Block */}
          <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left mb-12">
            <span className="inline-block font-mono text-red-700 text-xs font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded mb-4">
              CYBER HEALTH CHECK
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 uppercase mb-2">Cyber Health Assessment Portal</h1>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal">
              As an individual or organisation, take these assessments to determine your knowledge and understanding of online threats, and what you can do to improve your cyber resilience.
            </p>
          </div>

          {/* Grid Layout of the 4 Assessment Cards Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Card 1: Your Cybersecurity Barometer */}
            <div className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-2xl flex flex-col justify-between space-y-6 shadow-sm hover:border-purple-900/20 transition-all">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">YOUR CYBERSECURITY KNOWLEDGE BAROMETER</h3>
                  <p className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest mt-0.5">Maturity Self-Check</p>
                  <p className="text-zinc-600 text-xs md:text-sm leading-relaxed mt-3 font-normal">
                    This cybersecurity self-check will help you assess your understanding of online threats and identify areas where you can improve your knowledge.
                  </p>
                  <ul className="mt-3 space-y-1">
                    <li className="text-zinc-600 text-xs font-normal flex items-center gap-1.5"><span className="w-1 h-1 bg-red-600 rounded-full shrink-0"></span> Quick 10-minute assessment</li>
                    <li className="text-zinc-600 text-xs font-normal flex items-center gap-1.5"><span className="w-1 h-1 bg-red-600 rounded-full shrink-0"></span> Personalized recommendations</li>
                    <li className="text-zinc-600 text-xs font-normal flex items-center gap-1.5"><span className="w-1 h-1 bg-red-600 rounded-full shrink-0"></span> Actionable insights</li>
                  </ul>
                </div>
              </div>
              <button 
                onClick={() => initializeQuizTrack("barometer")}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-black uppercase text-red-700 hover:text-red-600 group pt-2"
              >
                Begin Assessment <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Card 2: Staff Cybersecurity Knowledge Check */}
            <div className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-2xl flex flex-col justify-between space-y-6 shadow-sm hover:border-purple-900/20 transition-all">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">STAFF KNOWLEDGE ASSESSMENT</h3>
                  <p className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest mt-0.5">Workforce Awareness Tracker</p>
                  <p className="text-zinc-600 text-xs md:text-sm leading-relaxed mt-3 font-normal">
                    This interactive assessment evaluates your staff&apos;s cybersecurity awareness, helping you identify knowledge gaps and training needs.
                  </p>
                  <ul className="mt-3 space-y-1">
                    <li className="text-zinc-600 text-xs font-normal flex items-center gap-1.5"><span className="w-1 h-1 bg-red-600 rounded-full shrink-0"></span> See how your team&apos;s knowledge compares</li>
                    <li className="text-zinc-600 text-xs font-normal flex items-center gap-1.5"><span className="w-1 h-1 bg-red-600 rounded-full shrink-0"></span> Get personalized training recommendations</li>
                    <li className="text-zinc-600 text-xs font-normal flex items-center gap-1.5"><span className="w-1 h-1 bg-red-600 rounded-full shrink-0"></span> Identify knowledge gaps</li>
                  </ul>
                </div>
              </div>
              <button 
                onClick={() => initializeQuizTrack("staff")}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-black uppercase text-red-700 hover:text-red-600 group pt-2"
              >
                Begin Assessment <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Card 3: Cyber Resilience Assessment */}
            <div className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-2xl flex flex-col justify-between space-y-6 shadow-sm hover:border-purple-900/20 transition-all">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">ACCESS YOUR RESILIENCE</h3>
                  <p className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest mt-0.5">CRITICAL INFRASTRUCTURE BLUEPRINT</p>
                  <p className="text-zinc-600 text-xs md:text-sm leading-relaxed mt-3 font-normal">
                    Conduct cyber resilience assessments based on Ransomware Readiness, ISO 27001, Supply Chain Risks, etc.
                  </p>
                </div>
              </div>
              {/* FIXED: Form trigger call-to-action link remains inside the app viewport cleanly */}
              <button 
                onClick={() => openScopingForm("Cyber Resilience Assessment")}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-black uppercase text-red-700 hover:text-red-600 group pt-2"
              >
                CONTACT US FOR ASSESSMENT <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Card 4: Compliance Framework Assessment */}
            <div className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-2xl flex flex-col justify-between space-y-6 shadow-sm hover:border-purple-900/20 transition-all">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">REGULATORY COMPLIANCE MATRIX</h3>
                  <p className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest mt-0.5">COMPLIANCE FRAMEWORK ASSESSMENT</p>
                  <p className="text-zinc-600 text-xs md:text-sm leading-relaxed mt-3 font-normal">
                    Conduct cyber resilience of your infrastructure against global and domestic frameworks.
                  </p>
                </div>
              </div>
              {/* FIXED: Form trigger call-to-action link remains inside the app viewport cleanly */}
              <button 
                onClick={() => openScopingForm("Compliance Framework Assessment")}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-black uppercase text-red-700 hover:text-red-600 group pt-2"
              >
                CONTACT US FOR ASSESSMENT <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>
        </>
      ) : !quizCompleted ? (
        /* ========================================================================= */
        /* MULTIPAGE INTERACTIVE QUESTIONNAIRE PANEL BLOCK SCREEN MODULE VIEWPORT */
        /* ========================================================================= */
        <div className="max-w-3xl mx-auto space-y-6 text-left animate-fadeIn">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono font-black text-red-700 uppercase tracking-widest block">
                Active Track Telemetry
              </span>
              <h2 className="text-lg font-bold text-zinc-900 uppercase">
                {activeQuiz === "barometer" ? "Your Cybersecurity Barometer" : "Staff Knowledge Check"}
              </h2>
            </div>
            <div className="font-mono text-xs font-black bg-zinc-950 text-white px-2.5 py-1 rounded">
              {currentQuestionIdx + 1} / {currentQuestions.length}
            </div>
          </div>

          {/* Question Text Label Container */}
          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl">
            <h3 className="text-base md:text-lg font-bold text-zinc-900 leading-snug">
              {currentQuestion.q}
            </h3>
          </div>

          {/* Options Interaction Radio Lists */}
          <div className="space-y-3 pt-2">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = userAnswers[currentQuestionIdx] === option;
              const isCorrectAnswer = option === currentQuestion.answer;
              
              let optionStyle = "border-zinc-200 bg-white text-zinc-800 hover:bg-zinc-50";
              if (showExplanation) {
                if (isCorrectAnswer) {
                  optionStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold";
                } else if (isSelected) {
                  optionStyle = "border-red-500 bg-red-50 text-red-900";
                }
              } else if (isSelected) {
                optionStyle = "border-purple-600 bg-purple-950/[0.02] text-zinc-950 font-medium";
              }

              return (
                <button
                  key={idx}
                  disabled={showExplanation}
                  onClick={() => handleSelectOption(option)}
                  className={`w-full text-left px-5 py-4 rounded-xl border-2 text-sm md:text-base flex items-center justify-between transition-all focus:outline-none ${optionStyle}`}
                >
                  <span>{option}</span>
                  {showExplanation && isCorrectAnswer && <Check className="h-4 w-4 text-emerald-600 shrink-0" />}
                  {showExplanation && isSelected && !isCorrectAnswer && <X className="h-4 w-4 text-red-600 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation Text Drop Block Container */}
          {showExplanation && (
            <div className="p-5 bg-blue-50 border border-blue-200 text-blue-950 rounded-xl animate-fadeIn space-y-1">
              <span className="text-[10px] font-mono font-black text-blue-800 tracking-widest block uppercase">Operational Explanation:</span>
              <p className="text-xs md:text-sm leading-relaxed font-normal">{currentQuestion.explanation}</p>
            </div>
          )}

          {/* Stepper Navigation Actions */}
          <div className="flex items-center justify-between pt-6 border-t border-zinc-100 font-mono">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIdx === 0}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider border-2 border-zinc-200 text-zinc-600 rounded-lg hover:bg-zinc-50 disabled:opacity-40"
            >
              Previous
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={!userAnswers.hasOwnProperty(currentQuestionIdx)}
              className="px-6 py-2.5 text-xs font-black uppercase tracking-widest bg-purple-950 text-white rounded-lg hover:bg-purple-900 transition-all disabled:opacity-50"
            >
              {currentQuestionIdx === currentQuestions.length - 1 ? "Finish Test" : "Next Question"}
            </button>
          </div>
        </div>
      ) : (
        /* ========================================================================= */
        /* COMPLETED DYNAMIC SCOREBOARD WITH RECOMMENDED ENTERPRISE PLATFORMS */
        /* ========================================================================= */
        <div className="max-w-3xl mx-auto space-y-10 text-left animate-fadeIn">
          
          {/* Main Scoring Header */}
          <div className="bg-purple-950/[0.01] border-2 border-purple-900/5 rounded-2xl p-8 shadow-sm space-y-6 relative overflow-hidden">
            <div className="space-y-1">
              <h2 className="text-2xl font-black uppercase tracking-tight text-zinc-900">Assessment Completed!</h2>
              <p className="text-xs text-zinc-500 font-medium">You've completed all sections of the cyber health assessment, your vulnerabilities are identified. Let's turn insights into action.</p>
            </div>

            {/* Score Bar Module layout */}
            <div className="space-y-2 border-t border-zinc-200/60 pt-4">
              <span className="text-sm font-bold text-zinc-800 tracking-tight block">Your Cyber Health Score</span>
              <div className="w-full bg-zinc-100 h-3 rounded-full overflow-hidden border border-zinc-200/40">
                <div className="bg-purple-950 h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${healthScorePct}%` }}></div>
              </div>
              <p className="text-sm font-mono font-black text-purple-950 pt-1">
                Score: <span className="text-red-700">{healthScorePct}.0%</span>
              </p>
            </div>

            {/* Threat Classification Tier Box */}
            <div className={`p-4 border rounded-xl space-y-1.5 ${currentRisk.color}`}>
              <span className="text-[10px] font-mono font-black tracking-widest uppercase block">CLASSIFICATION TIER: {currentRisk.level}</span>
              <p className="text-xs md:text-sm font-semibold leading-relaxed">{currentRisk.desc}</p>
            </div>

            {/* Legend Distribution Parameters */}
            <div className="pt-2 grid grid-cols-3 gap-2 font-mono text-[10px] font-black uppercase border-t border-zinc-100 pt-4">
              <div className="text-red-700">0% - 49% High Risk</div>
              <div className="text-amber-600">50% - 75% Medium Risk</div>
              <div className="text-emerald-600">76% - 100% Low Risk</div>
            </div>
          </div>

          {/* RECOMMENDED REMEDIATION PRODUCTS INTELLIGENT ROUTING */}
          <div className="space-y-6">
            <h3 className="text-sm font-black text-zinc-400 uppercase tracking-widest">We recommend exploring our solutions:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Product Target A */}
              <div className="p-6 bg-white border-2 border-zinc-200 rounded-xl shadow-sm flex flex-col justify-between space-y-6 group hover:border-purple-800/40 transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-purple-950 rounded-lg flex items-center justify-center shrink-0">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-black text-zinc-950 uppercase tracking-tight">Risk Management</h4>
                    <p className="text-zinc-500 text-xs font-normal leading-relaxed">Comprehensive risk assessment and management services to identify, evaluate, and mitigate security risks.</p>
                  </div>
                </div>
                <Link href="/solutions" className="inline-flex items-center gap-1 text-xs font-mono font-black text-purple-950 group-hover:text-red-700 uppercase pt-2">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Product Target B */}
              <div className="p-6 bg-white border-2 border-zinc-200 rounded-xl shadow-sm flex flex-col justify-between space-y-6 group hover:border-purple-800/40 transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-purple-950 rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-black text-zinc-950 uppercase tracking-tight">Cybersecurity Resilience</h4>
                    <p className="text-zinc-500 text-xs font-normal leading-relaxed">Our team of cybersecurity experts provides tailored consulting services to help you identify and address your security challenges.</p>
                  </div>
                </div>
                <Link href="/solutions" className="inline-flex items-center gap-1 text-xs font-mono font-black text-purple-950 group-hover:text-red-700 uppercase pt-2">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

            </div>
          </div>

          {/* Reset Actions Trigger Panel */}
          <div className="pt-4 text-center font-mono">
            <button 
              onClick={() => initializeQuizTrack(activeQuiz)}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest px-6 py-3.5 rounded-lg transition-all shadow-md shadow-sm"
            >
              <RotateCcw className="h-4 w-4" /> Retake Test
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SCOPING POPUP CONSOLE INLINE MODAL OVERLAY TRIGGER */}
      {/* ========================================================================= */}
      {scopingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border border-zinc-200 text-zinc-900 rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative text-left space-y-6">
            <button 
              onClick={() => setScopingModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {!scopingSubmitted ? (
              <>
                <div className="space-y-1">
                  <span className="text-[9px] font-black font-mono tracking-widest text-red-700 bg-purple-950/[0.04] border border-purple-900/10 px-2.5 py-1 rounded uppercase">ASSESSMENT REQUEST</span>
                  <h3 className="text-xl font-black uppercase tracking-tight pt-2">Initiate {scopingTargetTitle}</h3>
                  <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                    Submit your details below to schedule an assessment.
                  </p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); setScopingSubmitted(true); }} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 font-mono">Full Name *</label>
                    <input type="text" required placeholder="Please Enter Full Name" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-all font-normal" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 font-mono">Corporate Email *</label>
                      <input type="email" required placeholder="name@company.com" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-all font-normal" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 font-mono">Phone Number *</label>
                      <input type="tel" required placeholder="Contact endpoint" inputMode="numeric" pattern="[0-9+\-\s()]+" title="Please enter a valid phone number" onKeyDown={(e) => { if (!/[0-9+\-\s()]/.test(e.key) && !['Backspace','Delete','Tab','ArrowLeft','ArrowRight'].includes(e.key)) { e.preventDefault(); } }} className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-all font-normal" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 font-mono">INITIATE ASSESSMENT REQUEST</label>
                    <textarea rows={3} placeholder="Please describe your cyber resilience assessment needs" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-4 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-all resize-none font-normal" />
                  </div>

                  <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest py-3.5 rounded-lg transition-all shadow-md font-mono">
                    SUBMIT ASSESSMENT REQUEST
                  </button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center flex flex-col items-center justify-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="h-12 w-12 text-emerald-600 animate-bounce" />
                <h3 className="text-base font-black uppercase tracking-wider">Request Logged</h3>
                <p className="text-xs text-zinc-500 max-w-xs mx-auto font-medium">Your assessment request has been received. Our team will contact you shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}