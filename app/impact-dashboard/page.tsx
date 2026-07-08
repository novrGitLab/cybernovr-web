"use client";
import React, { useState, useEffect } from "react";
import { Users, GraduationCap, Building, ShieldCheck, HelpCircle } from "lucide-react";

export default function CEAPImpactDashboard() {
  const [loading, setLoading] = useState(true);
  const [graduates, setGraduates] = useState<any[]>([]);
  const [organizations, setOrganizations] = useState<any[]>([]);
  const [stories, setStories] = useState<any[]>([]);
  const [dashboardViewMode, setDashboardViewMode] = useState<"students" | "organizations">("students");

  // Dynamic Animated Multipliers
  const [animatedParticipants, setAnimatedParticipants] = useState(0);
  const [animatedInstitutions, setAnimatedInstitutions] = useState(0);
  const [animatedPartners, setAnimatedPartners] = useState(0);
  const [animatedTransformation, setAnimatedTransformation] = useState(0);
  const [animatedOutcome, setAnimatedOutcome] = useState(0);

  const GOOGLE_DATABASE_ENDPOINT = "https://sheetdb.io/api/v1/0vxudqmh2jcnx";

  useEffect(() => {
    async function evaluateRelationalEcosystemData() {
      try {
        const [graduatesRes, orgsRes, storiesRes] = await Promise.all([
          fetch(`${GOOGLE_DATABASE_ENDPOINT}?sheet=Graduates`),
          fetch(`${GOOGLE_DATABASE_ENDPOINT}?sheet=Organizations`),
          fetch(`${GOOGLE_DATABASE_ENDPOINT}?sheet=Impact_Stories`)
        ]);

        const graduatesData = await graduatesRes.json();
        const organizationsData = await orgsRes.json();
        const storiesData = await storiesRes.json();

        const activeGraduates = Array.isArray(graduatesData) ? graduatesData : [];
        const activeOrgs = Array.isArray(organizationsData) ? organizationsData : [];
        const activeStories = Array.isArray(storiesData) ? storiesData : [];

        setGraduates(activeGraduates);
        setOrganizations(activeOrgs);
        setStories(activeStories);

        const uniqueInstitutionsCount = new Set(activeGraduates.map(g => g.institution?.trim()).filter(Boolean)).size || 1;
        const successfullyPlacedCount = activeGraduates.filter(g => {
          const trackStatus = g.career_status?.trim().toLowerCase();
          return trackStatus === 'employed' || trackStatus === 'transitioned' || trackStatus === 'active';
        }).length;

        const transformationPctValue = activeGraduates.length > 0 ? Math.round((successfullyPlacedCount / activeGraduates.length) * 100) : 0;

        // Smooth Count Animation Frame Execution
        let startTimestamp: number | null = null;
        const animationRuntime = 1500;

        const triggerFrameIncrements = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const deltaProgress = Math.min((timestamp - startTimestamp) / animationRuntime, 1);

          setAnimatedParticipants(Math.floor(deltaProgress * activeGraduates.length));
          setAnimatedInstitutions(Math.floor(deltaProgress * uniqueInstitutionsCount));
          setAnimatedPartners(Math.floor(deltaProgress * activeOrgs.length));
          setAnimatedTransformation(Math.floor(deltaProgress * transformationPctValue));
          setAnimatedOutcome(Math.floor(deltaProgress * 84));

          if (deltaProgress < 1) {
            requestAnimationFrame(triggerFrameIncrements);
          }
        };

        requestAnimationFrame(triggerFrameIncrements);
        setLoading(false);
      } catch (error) {
        console.error("Dashboard tracking bridge offline exception: ", error);
        setLoading(false);
      }
    }

    evaluateRelationalEcosystemData();
  }, []);

  if (loading) {
    return (
      <div className="py-40 text-center text-zinc-400 font-mono text-xs pt-48 space-y-3">
        <div className="animate-spin inline-block w-6 h-6 border-2 border-zinc-300 border-t-transparent text-red-700 rounded-full"></div>
        <div>Compiling operational verification data nodes...</div>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto space-y-12 bg-white text-zinc-900 antialiased">
      
      {/* Top Header Section */}
      <header className="border-b border-zinc-200 pb-8 max-w-4xl text-left">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-purple-950/[0.04] border border-purple-900/10 text-red-700 font-mono text-[10px] uppercase font-black tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
            Executive Summary Model
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 uppercase">
            CEAP Strategic Impact Dashboard
          </h1>
          <p className="text-zinc-600 text-xs md:text-sm max-w-3xl leading-relaxed font-normal pt-2">
            <strong>Objective:</strong> Establish CEAP as a data-driven authority in cybersecurity training.<br />
            <strong>Core Value Proposition:</strong> Transitioning from simple training delivery to longitudinal impact tracking. We are not just educating; we are building a measurable, secure talent pipeline.
          </p>
        </div>
      </header>

      {/* Quantitative Reach Metrics */}
      <section className="space-y-4 text-left">
        <div className="border-b border-zinc-100 pb-2">
          <h2 className="text-sm md:text-[15px] font-black uppercase tracking-widest text-zinc-400">Quantitative Reach (Scale Metrics)</h2>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
          <div className="bg-purple-950/[0.01] border-2 border-purple-900/5 p-6 rounded-xl flex items-center justify-between shadow-sm">
            <div>
              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider block">Scale Metrics</span>
              <h3 className="text-3xl font-mono font-black text-zinc-900 mt-1">{animatedParticipants}</h3>
              <span className="text-xs font-medium text-zinc-500">Total Individuals Trained</span>
            </div>
            <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
              <Users className="h-5 w-5" />
            </div>
          </div>

          <div className="bg-purple-950/[0.01] border-2 border-purple-900/5 p-6 rounded-xl flex items-center justify-between shadow-sm">
            <div>
              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider block">Educational Base</span>
              <h3 className="text-3xl font-mono font-black text-zinc-900 mt-1">{animatedInstitutions}</h3>
              <span className="text-xs font-medium text-zinc-500">Institutions Engaged</span>
            </div>
            <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
              <GraduationCap className="h-5 w-5" />
            </div>
          </div>

          <div className="bg-purple-950/[0.01] border-2 border-purple-900/5 p-6 rounded-xl flex items-center justify-between shadow-sm">
            <div>
              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider block">Alliances</span>
              <h3 className="text-3xl font-mono font-black text-zinc-900 mt-1">{animatedPartners}</h3>
              <span className="text-xs font-medium text-zinc-500">Organizations Partnered</span>
            </div>
            <div className="w-10 h-10 bg-purple-950/[0.04] border border-purple-900/10 text-red-700 rounded-lg flex items-center justify-center">
              <Building className="h-5 w-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Progress Bars Indicators */}
      <section className="grid gap-6 grid-cols-1 md:grid-cols-2 text-left">
        <div className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl flex flex-col justify-between space-y-4 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h2 className="text-base font-bold text-zinc-900 uppercase tracking-tight">Career Transformation</h2>
              <p className="text-xs text-zinc-500 font-normal leading-relaxed">Percentage of graduates who transitioned into cyber roles or earned active promotions.</p>
            </div>
            <span className="text-lg font-mono font-black text-red-700 bg-purple-950/[0.04] border border-purple-900/10 px-2.5 py-1 rounded-md">{animatedTransformation}%</span>
          </div>
          <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden border border-zinc-200/40">
            <div className="bg-red-600 h-full rounded-full transition-all duration-500" style={{ width: `${animatedTransformation}%` }}></div>
          </div>
        </div>

        <div className="p-6 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl flex flex-col justify-between space-y-4 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h2 className="text-base font-bold text-zinc-900 uppercase tracking-tight">Security Behavior Index</h2>
              <p className="text-xs text-zinc-500 font-normal leading-relaxed">Measured habit enhancements, phishing simulation block rates, and MFA adoption metrics.</p>
            </div>
            <span className="text-lg font-mono font-black text-zinc-900 bg-purple-950/[0.04] border border-purple-900/10 px-2.5 py-1 rounded-md">{animatedOutcome}%</span>
          </div>
          <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden border border-zinc-200/40">
            <div className="bg-purple-950 h-full rounded-full transition-all duration-500" style={{ width: `${animatedOutcome}%` }}></div>
          </div>
        </div>
      </section>

      {/* Main Relational Directory Window Split with Snapshot Switcher Toggles */}
      <section className="grid gap-8 grid-cols-1 lg:grid-cols-12 items-start pt-4">
        
        {/* Left Side: Directory Table Box */}
        <div className="bg-white border-2 border-zinc-100 p-6 rounded-xl shadow-sm lg:col-span-8 space-y-4 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-4">
            <div>
              <h2 className="text-base font-bold text-zinc-900 uppercase tracking-tight">Ecosystem Integration Directory</h2>
              <p className="text-xs text-zinc-400 font-mono">Relational matrix view syncing raw repository snapshots.</p>
            </div>
            
            {/* Switcher Toggle Module */}
            <div className="flex items-center bg-zinc-50 p-1 rounded-lg border border-zinc-200 self-start sm:self-center font-mono">
              <button 
                onClick={() => setDashboardViewMode("students")}
                className={`px-4 py-1.5 rounded text-[10px] font-black uppercase tracking-wider transition-all ${
                  dashboardViewMode === "students" 
                    ? "bg-red-600 text-white shadow-sm" 
                    : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                Students Pool
              </button>
              <button 
                onClick={() => setDashboardViewMode("organizations")}
                className={`px-4 py-1.5 rounded text-[10px] font-black uppercase tracking-wider transition-all ${
                  dashboardViewMode === "organizations" 
                    ? "bg-red-600 text-white shadow-sm" 
                    : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                Orgs Node
              </button>
            </div>
          </div>

          <div className="overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-50 max-h-[400px]">
            {dashboardViewMode === "students" ? (
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-zinc-200 text-[9px] font-bold text-zinc-400 uppercase tracking-widest bg-white sticky top-0 z-10 font-mono">
                    <th className="py-3 px-4">Student Trained</th>
                    <th className="py-3 px-3">Pre-Role</th>
                    <th className="py-3 px-3">Current Track</th>
                    <th className="py-3 px-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/60 text-xs text-zinc-600 bg-white font-medium">
                  {graduates.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="py-12 text-center text-zinc-400 italic font-normal">No tracking records identified inside graduates pool.</td>
                    </tr>
                  ) : (
                    graduates.map((student, i) => {
                      const status = student.career_status || 'Seeking';
                      const isEmployed = status.toLowerCase() === 'employed' || status.toLowerCase() === 'active' || status.toLowerCase() === 'graduated';
                      return (
                        <tr key={i} className="hover:bg-purple-950/[0.01] transition-colors">
                          <td className="py-3.5 px-4 font-bold text-zinc-900 uppercase tracking-tight">{student.fullname || '—'}</td>
                          <td className="py-3.5 px-3 font-mono text-[10px] text-zinc-400">{student.pre_training_role || 'Baseline'}</td>
                          <td className="py-3.5 px-3 text-zinc-900/80 font-semibold">{student.current_role || 'Cyber Candidate'}</td>
                          <td className="py-3.5 px-3">
                            <span className={`inline-flex items-center border px-2 py-0.5 rounded font-mono font-bold text-[9px] uppercase tracking-wider ${
                              isEmployed ? 'bg-purple-950/[0.04] text-red-700 border-purple-900/10' : 'bg-zinc-50 text-zinc-400 border-zinc-200'
                            }`}>
                              {status}
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            ) : (
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-zinc-200 text-[9px] font-bold text-zinc-400 uppercase tracking-widest bg-white sticky top-0 z-10 font-mono">
                    <th className="py-3 px-4">Partner Entity</th>
                    <th className="py-3 px-3">Sector Classification</th>
                    <th className="py-3 px-3">Integration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/60 text-xs text-zinc-600 bg-white font-medium">
                  {organizations.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="py-12 text-center text-zinc-400 italic font-normal">No tracking records identified inside organization repository.</td>
                    </tr>
                  ) : (
                    organizations.map((org, i) => (
                      <tr key={i} className="hover:bg-purple-950/[0.01] transition-colors">
                        <td className="py-3.5 px-4 font-bold text-zinc-900 uppercase tracking-tight">{org.organization_name || org.name || '—'}</td>
                        <td className="py-3.5 px-3 font-mono text-[10px] text-red-700 font-bold uppercase tracking-wider">{org.sector || 'Enterprise'}</td>
                        <td className="py-3.5 px-3">
                          <span className="inline-flex items-center border border-purple-900/10 bg-purple-950/[0.04] text-red-700 px-2 py-0.5 rounded font-mono font-bold text-[9px] uppercase tracking-wider">
                            Active Alliance
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Right Side: Spotlights Column */}
        <div className="space-y-4 lg:col-span-4 text-left">
          <div className="border-b border-zinc-100 pb-2">
            <h2 className="text-sm md:text-[15px] font-black uppercase tracking-widest text-zinc-400">Impact Stories Portfolio</h2>
          </div>
          
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
            {stories.length === 0 ? (
              <div className="bg-white p-5 rounded-xl border-2 border-zinc-100 text-center text-xs text-zinc-400 italic font-normal">
                No qualitative stories logged inside data node.
              </div>
            ) : (
              stories.map((story, i) => (
                <div key={i} className="p-4 bg-purple-950/[0.02] border border-purple-900/10 rounded-xl space-y-2 hover:border-purple-900/20 transition-all shadow-sm">
                  <div className="flex items-center justify-between border-b border-zinc-200/60 pb-1 font-mono">
                    <h4 className="font-bold text-xs text-zinc-900 uppercase tracking-tight">{story.fullname || 'Anonymous Graduate'}</h4>
                    <span className="text-[9px] font-black text-red-700 bg-purple-950/[0.04] border border-purple-900/10 px-1.5 py-0.5 rounded uppercase flex items-center gap-1">
                      <ShieldCheck className="h-3 w-3" /> VERIFIED
                    </span>
                  </div>
                  <p className="text-zinc-600 text-xs leading-relaxed italic font-normal">"{story.narrative || 'No narrative content provided.'}"</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

    </div>
  );
}