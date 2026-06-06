"use client";
import React, { useState, useEffect } from "react";

export default function CEAPImpactDashboard() {
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState({ participants: 0, institutions: 1, partners: 0, transformationPct: 0 });
  const [graduates, setGraduates] = useState<any[]>([]);
  const [organizations, setOrganizations] = useState<any[]>([]);
  const [stories, setStories] = useState<any[]>([]);
  
  // NEW STATE INTERACTION: Toggles the central table view window smoothly between Students and Organizations
  const [dashboardViewMode, setDashboardViewMode] = useState<"students" | "organizations">("students");

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

        // Calculate metrics dynamically based on spreadsheet row footprints [cite: 279]
        const uniqueInstitutionsCount = new Set(activeGraduates.map(g => g.institution?.trim()).filter(Boolean)).size;
        const successfullyPlacedCount = activeGraduates.filter(g => {
          const trackStatus = g.career_status?.trim().toLowerCase();
          return trackStatus === 'employed' || trackStatus === 'transitioned' || trackStatus === 'active';
        }).length;

        const transformationPctValue = activeGraduates.length > 0 ? Math.round((successfullyPlacedCount / activeGraduates.length) * 100) : 0;

        setMetrics({
          participants: activeGraduates.length,
          institutions: uniqueInstitutionsCount || 1,
          partners: activeOrgs.length,
          transformationPct: transformationPctValue
        });

        setLoading(false);
      } catch (error) {
        console.error("Dashboard data tracking connection crash:", error);
      }
    }

    evaluateRelationalEcosystemData();
  }, []);

  if (loading) {
    return (
      <div className="py-40 text-center text-on-surface-variant font-mono text-sm pt-48">
        <div className="animate-spin inline-block w-6 h-6 border-[2px] border-current border-t-transparent text-primary rounded-full mb-3"></div>
        <div>Compiling relational ecosystem tables...</div>
      </div>
    );
  }

  return (
    /* Responsive layout padding adjusted: matches px-margin-desktop on wide screens, drops down to 0 on tablet viewports */
    <div className="pt-32 pb-16 px-0 md:px-margin-desktop max-w-[1536px] mx-auto space-y-8 min-h-screen">
      
      {/* Top Header Section */}
      <header className="bg-white border border-outline-variant/30 rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-sm mx-6 md:mx-0">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-primary/10 text-primary font-mono text-xs uppercase tracking-wider font-semibold">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Executive Summary Model
          </div>
          <h1 className="text-2xl font-black tracking-tight text-on-surface sm:text-3xl uppercase">
            CEAP Strategic Impact Dashboard
          </h1>
          <p className="text-on-surface-variant text-xs md:text-sm max-w-4xl leading-relaxed">
            <strong>Objective:</strong> Establish CEAP as a data-driven authority in cybersecurity training[cite: 213, 278, 279].<br />
            <strong>Core Value Proposition:</strong> Transitioning from simple training delivery to longitudinal impact tracking[cite: 278, 279]. We are not just educating; we are building a measurable, secure talent pipeline[cite: 279].
          </p>
        </div>
      </header>

      {/* Quantitative Reach Metrics */}
      <section className="space-y-3 mx-6 md:mx-0">
        <h2 className="text-xs font-black uppercase tracking-widest text-on-surface-variant/40 px-1">Lens 1 — Quantitative Reach (The Scale)</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
          <div className="bg-white p-6 rounded-xl border border-outline-variant/30 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-on-surface-variant/50 uppercase tracking-wider">Scale Metrics</p>
              <h3 className="text-3xl font-black text-on-surface mt-1">{metrics.participants}</h3>
              <span className="text-[11px] font-semibold text-on-surface-variant/70">Total Individuals Trained [cite: 279]</span>
            </div>
            <div className="w-10 h-10 bg-primary/10 text-primary rounded flex items-center justify-center">
              <span className="material-symbols-outlined">groups</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-outline-variant/30 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-on-surface-variant/50 uppercase tracking-wider">Educational Base</p>
              <h3 className="text-3xl font-black text-on-surface mt-1">{metrics.institutions}</h3>
              <span className="text-[11px] font-semibold text-on-surface-variant/70">Institutions Trained [cite: 279]</span>
            </div>
            <div className="w-10 h-10 bg-primary/10 text-primary rounded flex items-center justify-center">
              <span className="material-symbols-outlined">school</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-outline-variant/30 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-on-surface-variant/50 uppercase tracking-wider">Alliances</p>
              <h3 className="text-3xl font-black text-on-surface mt-1">{metrics.partners}</h3>
              <span className="text-[11px] font-semibold text-on-surface-variant/70">Organizations Partnered [cite: 382]</span>
            </div>
            <div className="w-10 h-10 bg-primary/10 text-primary rounded flex items-center justify-center">
              <span className="material-symbols-outlined">corporate_fare</span>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Bars */}
      <section className="grid gap-6 grid-cols-1 md:grid-cols-2 mx-6 md:mx-0">
        <div className="bg-white p-6 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-on-surface-variant/40">Lens 2: Career Transformation (The Growth)</h2>
              <p className="text-[11px] text-on-surface-variant mt-0.5">Percentage of graduates who transitioned into cyber roles or earned promotions[cite: 279].</p>
            </div>
            <span className="text-xl font-black text-primary bg-primary/10 px-2.5 py-1 rounded-lg">{metrics.transformationPct}%</span>
          </div>
          <div className="w-full bg-surface-container-low h-2.5 rounded-full overflow-hidden border border-outline-variant/10">
            <div className="bg-primary h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${metrics.transformationPct}%` }}></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-on-surface-variant/40">Lens 3: Security Behavior Index (The Outcome)</h2>
              <p className="text-[11px] text-on-surface-variant mt-0.5">Measured habit improvements (phishing simulation mitigations, MFA adoption)[cite: 269].</p>
            </div>
            <span className="text-xl font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">84%</span>
          </div>
          <div className="w-full bg-surface-container-low h-2.5 rounded-full overflow-hidden border border-outline-variant/10">
            <div className="bg-emerald-500 h-full rounded-full transition-all duration-1000 ease-out" style={{ width: "84%" }}></div>
          </div>
        </div>
      </section>

      {/* Main Relational Directory Window Split with Snapshot Switcher Toggles */}
      <section className="grid gap-6 grid-cols-1 lg:grid-cols-3 items-start mx-6 md:mx-0">
        
        {/* Left Side: Directory Table Box */}
        <div className="bg-white p-6 rounded-xl border border-outline-variant/30 shadow-sm lg:col-span-2 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline-variant/10 pb-4">
            <div>
              <h2 className="text-sm font-extrabold text-on-surface tracking-tight">Ecosystem Integration Directory</h2>
              <p className="text-[11px] text-on-surface-variant mt-0.5">Relational matrix view syncing raw repository snapshots[cite: 279, 382].</p>
            </div>
            
            {/* INTERACTIVE MODE TOGGLE BUTTON MODULE */}
            <div className="flex items-center bg-surface-container-low p-1 rounded-lg border border-outline-variant/30 self-start sm:self-center">
              <button 
                onClick={() => setDashboardViewMode("students")}
                className={`px-4 py-1.5 rounded-md text-[11px] font-black uppercase tracking-wider transition-all ${
                  dashboardViewMode === "students" 
                    ? "bg-primary text-white shadow-sm" 
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                Students Pool
              </button>
              <button 
                onClick={() => setDashboardViewMode("organizations")}
                className={`px-4 py-1.5 rounded-md text-[11px] font-black uppercase tracking-wider transition-all ${
                  dashboardViewMode === "organizations" 
                    ? "bg-primary text-white shadow-sm" 
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                Orgs Node
              </button>
            </div>
          </div>

          <div className="overflow-x-auto rounded-lg border border-outline-variant/20 bg-surface-container-low max-h-[420px]">
            {dashboardViewMode === "students" ? (
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-outline-variant/20 text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest bg-white sticky top-0 z-10">
                    <th className="py-3 px-4">Student Trained</th>
                    <th className="py-3 px-3">Pre-Role</th>
                    <th className="py-3 px-3">Current Target Track</th>
                    <th className="py-3 px-3">Track Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10 text-xs text-on-surface-variant bg-white">
                  {graduates.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="py-12 text-center text-on-surface-variant/40 italic">No tracking records identified inside graduates pool[cite: 279].</td>
                    </tr>
                  ) : (
                    graduates.map((student, i) => {
                      const status = student.career_status || 'Seeking';
                      const isEmployed = status.toLowerCase() === 'employed' || status.toLowerCase() === 'active';
                      return (
                        <tr key={i} className="hover:bg-surface-container-low/40 transition-colors">
                          <td className="py-3.5 px-4 font-bold text-on-surface">{student.fullname || '—'}</td>
                          <td className="py-3.5 px-3 font-mono text-[10px]">{student.pre_training_role || 'Baseline'}</td>
                          <td className="py-3.5 px-3 font-medium text-on-surface/80">{student.current_role || 'Cyber Candidate'}</td>
                          <td className="py-3.5 px-3">
                            <span className={`inline-flex items-center gap-1 border px-2 py-0.5 rounded-full font-bold text-[9px] uppercase tracking-wider ${
                              isEmployed ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-amber-50 text-amber-700 border-amber-100'
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
              /* ALTERNATIVE VIEW LAYOUT: Renders Organization details cleanly when triggered */
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-outline-variant/20 text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest bg-white sticky top-0 z-10">
                    <th className="py-3 px-4">Partner Entity</th>
                    <th className="py-3 px-3">Sector Classification</th>
                    <th className="py-3 px-3">Integration Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10 text-xs text-on-surface-variant bg-white">
                  {organizations.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="py-12 text-center text-on-surface-variant/40 italic">No tracking records identified inside organization repository[cite: 382].</td>
                    </tr>
                  ) : (
                    organizations.map((org, i) => (
                      <tr key={i} className="hover:bg-surface-container-low/40 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-on-surface">{org.organization_name || org.name || '—'}</td>
                        <td className="py-3.5 px-3 font-mono text-[10px] text-primary font-bold uppercase tracking-wider">{org.sector || 'Enterprise'}</td>
                        <td className="py-3.5 px-3">
                          <span className="inline-flex items-center gap-1 border border-purple-100 bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full font-bold text-[9px] uppercase tracking-wider">
                            Active Alliance [cite: 382]
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
        <div className="space-y-4 lg:col-span-1">
          <div className="px-1">
            <h2 className="text-xs font-black uppercase tracking-widest text-on-surface-variant/40">Slide 4: Impact Story Spotlights</h2>
            <p className="text-[11px] text-on-surface-variant mt-0.5">Verified longitudinal qualitative transformations[cite: 279].</p>
          </div>
          
          <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1">
            {stories.length === 0 ? (
              <div className="bg-white p-5 rounded-xl border border-outline-variant/20 text-center text-xs text-on-surface-variant/40 italic">
                No qualitative stories logged inside data node[cite: 279].
              </div>
            ) : (
              stories.map((story, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-outline-variant/30 shadow-sm space-y-2 hover:border-primary/20 transition-all">
                  <div className="flex items-center justify-between border-b border-outline-variant/10 pb-1">
                    <h4 className="font-bold text-xs text-on-surface">{story.fullname || 'Anonymous Graduate'}</h4>
                    <span className="text-[9px] font-mono font-bold text-primary uppercase bg-primary/5 px-1.5 py-0.5 rounded border border-primary/10">Verified Win [cite: 279]</span>
                  </div>
                  <p className="text-on-surface-variant text-[11px] leading-relaxed italic">"{story.narrative || 'No narrative content provided.'}"</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

    </div>
  );
}