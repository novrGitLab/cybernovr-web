"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ShieldCheck, Layers, Activity, CheckCircle2, RotateCcw, ArrowRight, X, AlertTriangle, Shield, Check } from "lucide-react";

interface TechnicalQuestion {
  q: string;
  options: string[];
  answer: string;
  explanation: string;
}

export default function AssessmentsMasterPage() {
  // Core Selection and Interactive Flow Tracking States
  const [activePortal, setActivePortal] = useState<"barometer" | "staff" | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [assessmentComplete, setAssessmentComplete] = useState(false);

  // Scoping Contact Popup Modal States
  const [scopingModalOpen, setScopingModalOpen] = useState(false);
  const [scopingTitle, setScopingTargetTitle] = useState("");
  const [scopingDone, setScopingDone] = useState(false);

  // State store for tracking organizational barometer answers
  const [selectedSector, setSelectedSector] = useState("");
  const [barometerAnswers, setBarometerAnswers] = useState({
    q1: "", 
    q2: [] as string[], 
    q3: "", 
    q4: [] as string[], 
    q5: "", 
    q6: [] as string[], 
    q7: [] as string[], 
    q8: [] as string[], 
    q9: "", 
    consent: false 
  });

  // State store for tracking staff knowledge test answers
  const [staffAnswers, setStaffAnswers] = useState<Record<number, string>>({});

  // All 20 Real Technical Knowledge Questions
  const staffQuestions: TechnicalQuestion[] = [
    { q: "What script/command in MSF console is used to find vulnerabilities and gain access to a system by exploiting weak points?", options: ["db_nmap", "search", "db_autopwn", "exploit"], answer: "db_autopwn", explanation: "db_autopwn is a Metasploit console command that automatically exploits vulnerabilities found during scanning." },
    { q: "What is the best approach to apply patching?", options: ["Manual Patching", "Automatic Patching", "Mixture", "Other"], answer: "Mixture", explanation: "A mixture of manual and automatic patching is considered best practice, allowing for both control and efficiency." },
    { q: "A system was infected with ransomware and left powered on. What's the best tool to begin memory analysis in live forensics?", options: ["Autopsy", "FTK Imager", "Redline", "Wireshark"], answer: "Redline", explanation: "Redline is specifically designed for memory analysis in live forensics situations." },
    { q: "RAID 6 uses what to provide fault tolerance?", options: ["Parity and striping", "Dual parity", "Mirroring", "Encryption"], answer: "Dual parity", explanation: "RAID 6 uses dual parity to provide fault tolerance against two simultaneous drive failures." },
    { q: "Where should AI be prioritized most in network security?", options: ["Network traffic analysis", "Threat detection & response", "Policy enforcement", "Identity & access control"], answer: "Threat detection & response", explanation: "AI is most effective in threat detection and response, where it can analyze patterns and respond in real-time." },
    { q: "Where did the term \"hacker\" originate?", options: ["MIT", "New York University", "Harvard University", "Bell's Lab"], answer: "MIT", explanation: "The term originated at MIT in the 1960s among members of the Tech Model Railroad Club." },
    { q: "Would you allow your staff to use AI tools like ChatGPT, Gemini, Claude or Google Veo in your organisation?", options: ["Yes", "No", "Maybe"], answer: "Maybe", explanation: "A cautious \"maybe\" with proper guidelines is often the best approach for AI tool usage in organizations." },
    { q: "Which layer of the OSI model is responsible for logical addressing?", options: ["Network Layer", "Data Link", "Transport Layer", "Application Layer"], answer: "Network Layer", explanation: "The Network Layer (Layer 3) handles logical addressing and routing." },
    { q: "Which protocol is considered secure for web communication?", options: ["HTTP", "FTP", "HTTPS", "Telnet"], answer: "HTTPS", explanation: "HTTPS (Hypertext Transfer Protocol Secure) is the secure version of HTTP that uses SSL/TLS encryption to protect data during transmission." },
    { q: "What is the most common form of cyberattack on networks?", options: ["Brute force attack", "Man-in-the-middle attack", "Phishing", "SQL injection"], answer: "Phishing", explanation: "Phishing accounts for over 90% of cyberattacks, targeting human vulnerabilities rather than technical weaknesses." },
    { q: "Which of these is a sign of malware infection?", options: ["Faster performance", "Frequent crashes", "New features", "More storage"], answer: "Frequent crashes", explanation: "Frequent crashes or unusual system behavior are common indicators of malware infection." },
    { q: "Why does port 443 matter for SSL/TLS secure web traffic?", options: ["Encrypted connection", "Cert validation", "No fallback", "Bypass firewall"], answer: "Encrypted connection", explanation: "Port 443 is the standard port used for HTTPS traffic, providing encrypted communication between web browsers and servers." },
    { q: "Which of these is used to encrypt emails?", options: ["SSL", "TLS", "PGP", "HTTP"], answer: "PGP", explanation: "PGP (Pretty Good Privacy) is specifically designed for encrypting email communications." },
    { q: "The act of disguising as someone else online is called:", options: ["Encryption", "Impersonation", "Spoofing", "Harvesting"], answer: "Spoofing", explanation: "Spoofing involves falsifying data to appear as another user, device, or system." },
    { q: "What do you think is the most damaging impact of a cyberattack on a school/college?", options: ["Student data leakage", "Financial extortion (ransom)", "Loss of academic records", "Reputation damage"], answer: "Student data leakage", explanation: "Student data leakage can lead to identity theft, privacy violations, and long-term consequences for affected individuals." },
    { q: "Which of the following is not an email related hacking tool?", options: ["Mail Password", "Mail PassView", "Sendinc", "Email Finder Pro"], answer: "Sendinc", explanation: "Sendinc is a legitimate email service, unlike the others which are associated with extracting or discovering email credentials." },
    { q: "Which one of these is a symmetric encryption algorithm?", options: ["DSA", "ECC", "DES", "RSA"], answer: "DES", explanation: "DES (Data Encryption Standard) uses the same key for encryption and decryption, making it a symmetric algorithm." },
    { q: "Which of the following encryption methods is considered the most secure for data-at-rest?", options: ["AES-128", "RSA", "AES-256", "Triple DES"], answer: "AES-256", explanation: "AES-256 is widely regarded as the strongest commonly used encryption standard for protecting stored data." },
    { q: "What is the biggest concern for an organisation after the mega-breach?", options: ["Business email compromise", "Personal account hacks", "Dark web exposure", "Credential phishing"], answer: "Dark web exposure", explanation: "Dark web exposure of sensitive data often has the longest-lasting consequences." },
    { q: "After reading about the 16B password leak, what's your next step?", options: ["Change all my passwords", "Enable MFA everywhere", "Check if I'm affected", "I'm not sure what to do"], answer: "Enable MFA everywhere", explanation: "Enabling Multi-Factor Authentication (MFA) provides the most immediate security improvement after a breach." }
  ];

  // FIXED: Explicitly safe array layout lookup reference variable mapped to pass compilation
  const currentQuestion = staffQuestions[currentStep] || { q: "", options: [], answer: "", explanation: "" };

  const toggleCheckboxMetric = (field: keyof typeof barometerAnswers, value: string) => {
    const currentList = barometerAnswers[field] as string[];
    if (value === "None of the above") {
      setBarometerAnswers({ ...barometerAnswers, [field]: ["None of the above"] });
    } else {
      const filtered = currentList.filter(v => v !== "None of the above");
      if (filtered.includes(value)) {
        setBarometerAnswers({ ...barometerAnswers, [field]: filtered.filter(v => v !== value) });
      } else {
        setBarometerAnswers({ ...barometerAnswers, [field]: [...filtered, value] });
      }
    }
  };

  const startAssessmentEngine = (type: "barometer" | "staff") => {
    setActivePortal(type);
    setCurrentStep(0);
    setAssessmentComplete(false);
    setShowExplanation(false);
    if (type === "staff") setStaffAnswers({});
  };

  const staffCorrectCount = staffQuestions.filter((q, idx) => staffAnswers[idx] === q.answer).length;
  const staffScorePct = Math.round((staffCorrectCount / staffQuestions.length) * 100);

  const calculateBarometerScore = () => {
    let positiveWeight = 0;
    if (barometerAnswers.q1 === "Yes") positiveWeight += 15;
    if (barometerAnswers.q3 === "Yes") positiveWeight += 15;
    if (barometerAnswers.q5 === "Yes") positiveWeight += 15;
    if (barometerAnswers.q2.filter(v => v !== "None of the above").length > 0) positiveWeight += 10;
    if (barometerAnswers.q4.filter(v => v !== "None of the above").length > 0) positiveWeight += 10;
    if (barometerAnswers.q6.filter(v => v !== "None of the above").length > 0) positiveWeight += 15;
    if (barometerAnswers.q7.filter(v => v !== "None of the above").length > 0) positiveWeight += 10;
    if (barometerAnswers.q8.filter(v => v !== "None of the above").length > 0) positiveWeight += 10;
    return Math.min(positiveWeight, 100);
  };
  const barometerScorePct = calculateBarometerScore();

  const finalComputedScore = activePortal === "barometer" ? barometerScorePct : staffScorePct;

  const getRiskMetricTier = (score: number) => {
    if (score <= 49) return { level: "High Risk", color: "text-red-600 border-red-200 bg-red-50", desc: "Improvement needed! Your infrastructure parameters show high risk exposures. Focus on strengthening policies, internal incident response plans, and deployment of passive monitoring scanning loops immediately." };
    if (score <= 75) return { level: "Medium Risk", color: "text-amber-600 border-amber-200 bg-amber-50", desc: "Maturity verified at baseline. Gaps exist around automated framework enforcement lines and multi-vector threat validation zones." };
    return { level: "Low Risk", color: "text-emerald-600 border-emerald-200 bg-emerald-50", desc: "Optimal structural protection verified. Operational habits meet top tier organizational compliance vectors across systems." };
  };

  const riskModel = getRiskMetricTier(finalComputedScore);

  const openScopingForm = (assessmentTitle: string) => {
    setScopingTargetTitle(assessmentTitle);
    setScopingDone(false);
    setScopingModalOpen(true);
  };

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto w-full bg-white text-zinc-900 antialiased">
      
      {!activePortal ? (
        <>
          {/* Institutional Header Block */}
          <div className="border-b border-zinc-200 pb-8 max-w-4xl text-left mb-12">
            <span className="inline-block font-mono text-red-700 text-xs font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded mb-4">
              Telemetry Assessments
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 uppercase mb-2">Cyber Health Assessment Portal</h1>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal">
              Validate infrastructure readiness, identify exposure parameters, and turn complex risk insights into actionable technical remediation roadmaps.
            </p>
          </div>

          {/* 4 Cards Matrix Layout Viewport */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            <div className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-2xl flex flex-col justify-between space-y-6 shadow-sm hover:border-purple-900/20 transition-all">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">Your Cybersecurity Barometer</h3>
                  <p className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest mt-0.5">Organizational Maturity Audit</p>
                  <p className="text-zinc-600 text-xs md:text-sm leading-relaxed mt-3 font-normal">
                    This cybersecurity self-check will help you assess your understanding of online threats and risks, effectiveness of your security measures, and your overall maturity in handling cybersecurity risks.
                  </p>
                </div>
              </div>
              <button onClick={() => startAssessmentEngine("barometer")} className="inline-flex items-center gap-1.5 text-xs font-mono font-black uppercase text-red-700 hover:text-red-600 group pt-2">
                Begin Assessment <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            <div className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-2xl flex flex-col justify-between space-y-6 shadow-sm hover:border-purple-900/20 transition-all">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">Staff Knowledge Assessment</h3>
                  <p className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest mt-0.5">20-Module Core Technical Check</p>
                  <p className="text-zinc-600 text-xs md:text-sm leading-relaxed mt-3 font-normal">
                    Assess your team's cybersecurity awareness. Identify deep core configuration knowledge gaps and receive personalized training recommendations based on their technical level.
                  </p>
                </div>
              </div>
              <button onClick={() => startAssessmentEngine("staff")} className="inline-flex items-center gap-1.5 text-xs font-mono font-black uppercase text-red-700 hover:text-red-600 group pt-2">
                Begin Assessment <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            <div className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-2xl flex flex-col justify-between space-y-6 shadow-sm hover:border-purple-900/20 transition-all">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">Cyber Resilience Assessment</h3>
                  <p className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest mt-0.5">Infrastructure Posture Verification</p>
                  <p className="text-zinc-600 text-xs md:text-sm leading-relaxed mt-3 font-normal">
                    Structural protection auditing mapping failover matrices, perimeter defense layers, and unmapped zero-day exploit vulnerabilities.
                  </p>
                </div>
              </div>
              <button onClick={() => openScopingForm("Cyber Resilience Assessment")} className="inline-flex items-center gap-1.5 text-xs font-mono font-black uppercase text-red-700 hover:text-red-600 group pt-2">
                Initialize Scoping Console <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            <div className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-2xl flex flex-col justify-between space-y-6 shadow-sm hover:border-purple-900/20 transition-all">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-tight">Compliance Framework Assessment</h3>
                  <p className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest mt-0.5">Regulatory Control Tracking</p>
                  <p className="text-zinc-600 text-xs md:text-sm leading-relaxed mt-3 font-normal">
                    Pre-audit scoping verification mapping architecture onto international parameters: CBN, NCC, NDPC, PCI DSS, NIST CSF, and ISO 27001 lines.
                  </p>
                </div>
              </div>
              <button onClick={() => openScopingForm("Compliance Framework Assessment")} className="inline-flex items-center gap-1.5 text-xs font-mono font-black uppercase text-red-700 hover:text-red-600 group pt-2">
                Initialize Scoping Console <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>
        </>
      ) : !assessmentComplete ? (
        activePortal === "barometer" ? (
          <div className="max-w-3xl mx-auto bg-white border-2 border-zinc-100 p-6 md:p-10 rounded-2xl shadow-xl space-y-8 text-left animate-fadeIn">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
              <span className="text-xs font-mono font-bold text-red-700 uppercase tracking-wider">Sector Strategy Path</span>
              <span className="text-xs font-mono font-black bg-zinc-900 text-white px-2.5 py-1 rounded">{currentStep + 1} / 6</span>
            </div>

            {currentStep === 0 && (
              <div className="space-y-4">
                <label className="text-base md:text-lg font-bold text-zinc-900 block">Which of the following sector does your organisation belong to? :</label>
                <select 
                  value={selectedSector} 
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 font-medium cursor-pointer"
                >
                  <option value="">Select a sector</option>
                  <option value="Power and energy">Power and energy</option>
                  <option value="Banking and Capital Markets">Banking and Capital Markets</option>
                  <option value="Fintech &amp; Payments Networks">Fintech &amp; Payments Networks</option>
                  <option value="Telecommunications Infrastructure">Telecommunications Infrastructure</option>
                  <option value="Food and culture">Food and culture</option>
                  <option value="Public Governance">Public Governance</option>
                </select>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-6">
                <p className="text-xs text-zinc-400 font-mono font-bold">Sector: <span className="text-red-700">{selectedSector || "General Operational"}</span></p>
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-zinc-900">1. Has your organisation developed a cybersecurity/information security strategy or policy?</h3>
                  {["Yes", "No"].map(opt => (
                    <label key={opt} className="flex items-center gap-3 px-4 py-3 border border-zinc-200 rounded-lg cursor-pointer hover:bg-zinc-50 font-medium text-sm">
                      <input type="radio" name="q1" value={opt} checked={barometerAnswers.q1 === opt} onChange={(e) => setBarometerAnswers({...barometerAnswers, q1: e.target.value})} className="accent-purple-700 h-4 w-4" />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="text-base font-bold text-zinc-900">2. Has your organisation implemented the following measures to equip your employees to be the first line of defence?</h3>
                  {[
                    "Cybersecurity awareness and training for all employees (either during onboarding or routine training)",
                    "Cybersecurity practices and guidelines for daily operations",
                    "None of the above"
                  ].map(opt => (
                    <label key={opt} className="flex items-start gap-3 px-4 py-3 border border-zinc-200 rounded-lg cursor-pointer hover:bg-zinc-50 text-sm font-medium">
                      <input type="checkbox" checked={barometerAnswers.q2.includes(opt)} onChange={() => toggleCheckboxMetric("q2", opt)} className="accent-purple-700 h-4 w-4 mt-0.5 shrink-0" />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-zinc-900">3. Has there been continuous improvement as a result of implementation of your cybersecurity strategy?</h3>
                  {["Yes", "No"].map(opt => (
                    <label key={opt} className="flex items-center gap-3 px-4 py-3 border border-zinc-200 rounded-lg cursor-pointer hover:bg-zinc-50 font-medium text-sm">
                      <input type="radio" name="q3" value={opt} checked={barometerAnswers.q3 === opt} onChange={(e) => setBarometerAnswers({...barometerAnswers, q3: e.target.value})} className="accent-purple-700 h-4 w-4" />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="text-base font-bold text-zinc-900">4. Has your organisation defined:</h3>
                  {[
                    "Cybersecurity roles, responsibilities, and authorities to foster accountability",
                    "Performance assessment of cybersecurity initiatives",
                    "Budget and resources for cybersecurity",
                    "None of the above"
                  ].map(opt => (
                    <label key={opt} className="flex items-start gap-3 px-4 py-3 border border-zinc-200 rounded-lg cursor-pointer hover:bg-zinc-50 text-sm font-medium">
                      <input type="checkbox" checked={barometerAnswers.q4.includes(opt)} onChange={() => toggleCheckboxMetric("q4", opt)} className="accent-purple-700 h-4 w-4 mt-0.5 shrink-0" />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-zinc-900">5. Has your organisation defined cybersecurity supply chain risk management strategy?</h3>
                  {["Yes", "No"].map(opt => (
                    <label key={opt} className="flex items-center gap-3 px-4 py-3 border border-zinc-200 rounded-lg cursor-pointer hover:bg-zinc-50 font-medium text-sm">
                      <input type="radio" name="q5" value={opt} checked={barometerAnswers.q5 === opt} onChange={(e) => setBarometerAnswers({...barometerAnswers, q5: e.target.value})} className="accent-purple-700 h-4 w-4" />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="text-base font-bold text-zinc-900">6. Has your organisation implemented the following measures to manage cybersecurity risks to your assets?</h3>
                  {[
                    "Awareness of their assets, especially the most critical ones, and their status.",
                    "Inventoried IT assets and data are managed throughout their lifecycles",
                    "Evaluate and comprehend cybersecurity risks affecting the organization, its assets, and individuals",
                    "Developed a risk management plan/strategy to mitigate cybersecurity risks",
                    "None of the above"
                  ].map(opt => (
                    <label key={opt} className="flex items-start gap-3 px-4 py-3 border border-zinc-200 rounded-lg cursor-pointer hover:bg-zinc-50 text-sm font-medium">
                      <input type="checkbox" checked={barometerAnswers.q6.includes(opt)} onChange={() => toggleCheckboxMetric("q6", opt)} className="accent-purple-700 h-4 w-4 mt-0.5 shrink-0" />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-zinc-900">7. Has your organisation implemented the following measures to address cybersecurity risks?</h3>
                  {["Data Protection", "ID and Access Management", "Network Security", "Personnel Security", "Endpoint Security", "Cyber-hygiene", "None of the above"].map(opt => (
                    <label key={opt} className="flex items-center gap-3 px-4 py-2.5 border border-zinc-200 rounded-lg cursor-pointer hover:bg-zinc-50 text-sm font-medium">
                      <input type="checkbox" checked={barometerAnswers.q7.includes(opt)} onChange={() => toggleCheckboxMetric("q7", opt)} className="accent-purple-700 h-4 w-4 shrink-0" />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="text-base font-bold text-zinc-900">8. Which of the following measures has your organisation put in place to detect, respond to, and recover from cybersecurity incidents?</h3>
                  {[
                    "Incident Response Plan",
                    "Continuous Security Monitoring to identify cybersecurity events",
                    "Established a detection process with routine test of effectiveness",
                    "Incident Management (Cyber Crisis Management Plan)",
                    "Incident Recovery Plan",
                    "None of the above"
                  ].map(opt => (
                    <label key={opt} className="flex items-start gap-3 px-4 py-3 border border-zinc-200 rounded-lg cursor-pointer hover:bg-zinc-50 text-sm font-medium">
                      <input type="checkbox" checked={barometerAnswers.q8.includes(opt)} onChange={() => toggleCheckboxMetric("q8", opt)} className="accent-purple-700 h-4 w-4 mt-0.5 shrink-0" />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-zinc-900">9. Does your organisation take part in initiatives on cybersecurity or collaboration at the national- or sectoral-level to implement/adopt cybersecurity standards and good practices?</h3>
                  {["Yes", "No"].map(opt => (
                    <label key={opt} className="flex items-center gap-3 px-4 py-3 border border-zinc-200 rounded-lg cursor-pointer hover:bg-zinc-50 font-medium text-sm">
                      <input type="radio" name="q9" value={opt} checked={barometerAnswers.q9 === opt} onChange={(e) => setBarometerAnswers({...barometerAnswers, q9: e.target.value})} className="accent-purple-700 h-4 w-4" />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>

                <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl pt-4">
                  <label className="flex items-start gap-3 cursor-pointer text-xs text-zinc-600 leading-relaxed font-normal">
                    <input type="checkbox" required checked={barometerAnswers.consent} onChange={(e) => setBarometerAnswers({...barometerAnswers, consent: e.target.checked})} className="accent-purple-700 h-4 w-4 mt-0.5 shrink-0" />
                    <span>We consent to the collection, use, and disclosure by <strong>CYBERNOVR</strong> of all information provided in this Form or in support of this Form for the purposes of public policy analysis or formulation, public data analytics, assessing our suitability for any grant or assistance schemes, advising us on digitalisation, and/or where necessary in the public interest.</span>
                  </label>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between border-t border-zinc-100 pt-6 font-mono">
              <button
                disabled={currentStep === 0}
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider border-2 border-zinc-200 text-zinc-600 rounded-lg hover:bg-zinc-50 disabled:opacity-30"
              >
                Previous
              </button>

              {currentStep < 5 ? (
                <button
                  disabled={currentStep === 0 && !selectedSector}
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="px-6 py-2.5 text-xs font-black uppercase tracking-widest bg-purple-950 text-white rounded-lg hover:bg-purple-900 transition-all disabled:opacity-40"
                >
                  Next
                </button>
              ) : (
                <button
                  disabled={!barometerAnswers.consent || !barometerAnswers.q9}
                  onClick={() => setAssessmentComplete(true)}
                  className="px-6 py-2.5 text-xs font-black uppercase tracking-widest bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all disabled:opacity-40"
                >
                  Finish
                </button>
              )}
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* PORTAL 2: 20-QUESTION STAFF TECHNICAL CHECK FLUID LOOP */
          /* ========================================================================= */
          <div className="max-w-3xl mx-auto space-y-6 text-left animate-fadeIn">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
              <div>
                <span className="text-[10px] font-mono font-black text-red-700 uppercase tracking-widest block">Staff Check Telemetry</span>
                <h2 className="text-base font-bold text-zinc-900 uppercase">Staff Knowledge Assessment</h2>
              </div>
              <div className="font-mono text-xs font-black bg-zinc-950 text-white px-2.5 py-1 rounded">
                {currentStep + 1} / {staffQuestions.length}
              </div>
            </div>

            <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl">
              {/* FIXED: References clean runtime structure pointer resolution pass */}
              <h3 className="text-base md:text-lg font-bold text-zinc-900 leading-snug">{currentQuestion.q}</h3>
            </div>

            <div className="space-y-3 pt-2">
              {currentQuestion.options.map((option, idx) => {
                const selected = staffAnswers[currentStep] === option;
                const correct = option === currentQuestion.answer;
                
                let btnStyle = "border-zinc-200 bg-white text-zinc-800 hover:bg-zinc-50";
                if (showExplanation) {
                  if (correct) btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold";
                  else if (selected) btnStyle = "border-red-500 bg-red-50 text-red-900";
                } else if (selected) {
                  btnStyle = "border-purple-600 bg-purple-950/[0.02] text-zinc-950 font-medium";
                }

                return (
                  <button
                    key={idx}
                    disabled={showExplanation}
                    onClick={() => { setStaffAnswers({ ...staffAnswers, [currentStep]: option }); setShowExplanation(true); }}
                    className={`w-full text-left px-5 py-4 rounded-xl border-2 text-sm md:text-base flex items-center justify-between transition-all focus:outline-none ${btnStyle}`}
                  >
                    <span>{option}</span>
                    {showExplanation && correct && <Check className="h-4 w-4 text-emerald-600 shrink-0" />}
                    {showExplanation && selected && !correct && <X className="h-4 w-4 text-red-600 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div className="p-5 bg-blue-50 border border-blue-200 text-blue-950 rounded-xl animate-fadeIn space-y-1">
                <span className="text-[10px] font-mono font-black text-blue-800 tracking-widest block uppercase">Explanation:</span>
                <p className="text-xs md:text-sm leading-relaxed font-normal">{currentQuestion.explanation}</p>
              </div>
            )}

            <div className="flex items-center justify-between pt-6 border-t border-zinc-100 font-mono">
              <button
                onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
                disabled={currentStep === 0}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider border-2 border-zinc-200 text-zinc-600 rounded-lg hover:bg-zinc-50 disabled:opacity-40"
              >
                Previous
              </button>
              <button
                onClick={() => {
                  setShowExplanation(false);
                  if (currentStep < staffQuestions.length - 1) {
                    setCurrentStep(currentStep + 1);
                  } else {
                    setAssessmentComplete(true);
                  }
                }}
                disabled={!staffAnswers.hasOwnProperty(currentStep)}
                className="px-6 py-2.5 text-xs font-black uppercase tracking-widest bg-purple-950 text-white rounded-lg hover:bg-purple-900 transition-all disabled:opacity-50"
              >
                {currentStep === staffQuestions.length - 1 ? "Finish Test" : "Next Question"}
              </button>
            </div>
          </div>
        )
      ) : (
        /* ========================================================================= */
        /* CONSOLIDATED METRICS SCOREBOARD OUTPUT VIEWPORT */
        /* ========================================================================= */
        <div className="max-w-3xl mx-auto space-y-10 text-left animate-fadeIn">
          <div className="bg-purple-950/[0.01] border-2 border-purple-900/5 rounded-2xl p-8 shadow-sm space-y-6 relative overflow-hidden">
            <div className="space-y-1">
              <h2 className="text-2xl font-black uppercase tracking-tight text-zinc-900">Assessment completed!</h2>
              <p className="text-xs text-zinc-500 font-medium">
                {activePortal === "barometer" 
                  ? "Your corporate ecosystem parameters have been mapped safely. Review target recommendations below."
                  : `You've completed all sections of the cyber health assessment, your vulnerabilities are identified. Let's turn insights into action.`
                }
              </p>
            </div>

            <div className="space-y-2 border-t border-zinc-200/60 pt-4">
              <span className="text-sm font-bold text-zinc-800 tracking-tight block">
                {activePortal === "barometer" ? "Your Cyber Health Score" : "Your Cybersecurity Knowledge Score:"}
              </span>
              <div className="w-full bg-zinc-100 h-3 rounded-full overflow-hidden border border-zinc-200/40">
                <div className="bg-purple-950 h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${finalComputedScore}%` }}></div>
              </div>
              <p className="text-sm font-mono font-black text-purple-950 pt-1">
                Score: <span className="text-red-700">{finalComputedScore}.0%</span>
                {activePortal === "staff" && <span className="text-xs text-zinc-400 font-sans font-normal block mt-1">You answered {staffCorrectCount} out of 20 correctly.</span>}
              </p>
            </div>

            <div className={`p-4 border rounded-xl space-y-1.5 ${riskModel.color}`}>
              <span className="text-[10px] font-mono font-black tracking-widest uppercase block">
                {activePortal === "barometer" ? `Risk Level: ${riskModel.level}` : `Training Level:`}
              </span>
              <p className="text-xs md:text-sm font-semibold leading-relaxed">{riskModel.desc}</p>
            </div>

            {activePortal === "staff" && (
              <div className="pt-2 font-mono text-[10px] font-black uppercase border-t border-zinc-100 pt-4 flex gap-6 text-zinc-400">
                <div className={staffScorePct <= 40 ? "text-red-600 bg-red-50 px-2 py-0.5 rounded" : ""}>0% - 40% Beginner</div>
                <div className={staffScorePct > 40 && staffScorePct <= 70 ? "text-amber-600 bg-amber-50 px-2 py-0.5 rounded" : ""}>41% - 70% Intermediate</div>
                <div className={staffScorePct > 70 ? "text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded" : ""}>71% - 100% Advanced</div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-black text-zinc-400 uppercase tracking-widest">We recommend exploring our solutions:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
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

          <div className="pt-4 text-center font-mono">
            <button 
              onClick={() => { setActivePortal(null); setAssessmentComplete(false); }}
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-black text-xs uppercase tracking-widest px-6 py-3.5 rounded-lg transition-all shadow-md font-mono"
            >
              <RotateCcw className="h-4 w-4" /> Retake Test
            </button>
          </div>
        </div>
      )}

      {/* ADVISORY POPUP SCOPING CONSOLE MODAL OVERLAY */}
      {scopingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border border-zinc-200 text-zinc-900 rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative text-left space-y-6">
            <button onClick={() => setScopingModalOpen(false)} className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 transition-colors">
              <X className="h-5 w-5" />
            </button>

            {!scopingDone ? (
              <>
                <div className="space-y-1">
                  <span className="text-[9px] font-black font-mono tracking-widest text-red-700 bg-purple-950/[0.04] border border-purple-900/10 px-2.5 py-1 rounded uppercase">Advisory Scoping</span>
                  <h3 className="text-xl font-black uppercase tracking-tight pt-2">Initiate {scopingTitle}</h3>
                  <p className="text-xs text-zinc-500 font-medium leading-relaxed">Schedule an engineering walkthrough with an analytics coordinator directly within our team matrix channels.</p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); setScopingDone(true); }} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 font-mono">Full Name *</label>
                    <input type="text" required placeholder="Operational signature name" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-all font-normal" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 font-mono">Corporate Email *</label>
                      <input type="email" required placeholder="you@company.com" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-all font-normal" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 font-mono">Phone Number *</label>
                      <input type="tel" required placeholder="Contact phone layout" className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-all font-normal" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-wider text-zinc-400 font-mono">System Parameters / Notes</label>
                    <textarea rows={3} placeholder="Describe infrastructure target metrics or regulatory compliance constraints..." className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-4 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 transition-all resize-none font-normal" />
                  </div>

                  <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest py-3.5 rounded-lg transition-all shadow-md font-mono">
                    Submit Scoping Request
                  </button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center flex flex-col items-center justify-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="h-12 w-12 text-emerald-600 animate-bounce" />
                <h3 className="text-base font-black uppercase tracking-wider">Request Logged</h3>
                <p className="text-xs text-zinc-500 max-w-xs mx-auto font-medium">Your request parameters have been logged. An operational advisory coordinator will contact your domain endpoint shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}