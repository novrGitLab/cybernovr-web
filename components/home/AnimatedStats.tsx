"use client";
import React, { useState, useEffect } from "react";

export default function AnimatedStats() {
  const [vulnerabilitiesCount, setVulnerabilitiesCount] = useState(0);
  const [frameworksCount, setFrameworksCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [graduatesCount, setGraduatesCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000;

    const animateMetrics = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setExperienceCount(Math.floor(progress * 18));
      setVulnerabilitiesCount(Math.floor(progress * 4820));
      setFrameworksCount(Math.floor(progress * 7));
      setProjectsCount(Math.floor(progress * 30));
      setGraduatesCount(Math.floor(progress * 200));

      if (progress < 1) {
        requestAnimationFrame(animateMetrics);
      }
    };

    requestAnimationFrame(animateMetrics);
  }, []);

  const replayStat = (target: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter(0);
    let startTime: number | null = null;
    const duration = 1200;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setter(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 grid grid-cols-2 lg:grid-cols-5 gap-8 text-center font-mono relative z-10">
      <div onMouseEnter={() => replayStat(18, setExperienceCount)} className="cursor-default transition-transform hover:scale-105">
        <h4 className="text-3xl md:text-4xl font-black text-white leading-none tracking-tight">{experienceCount}+</h4>
        <p className="text-xs text-purple-300 uppercase tracking-widest mt-2 font-black">Years Experience</p>
      </div>
      <div onMouseEnter={() => replayStat(4820, setVulnerabilitiesCount)} className="cursor-default transition-transform hover:scale-105">
        <h4 className="text-3xl md:text-4xl font-black text-red-500 leading-none tracking-tight">{vulnerabilitiesCount}+</h4>
        <p className="text-xs text-purple-300 uppercase tracking-widest mt-2 font-black">Vulnerabilities Remediated</p>
      </div>
      <div onMouseEnter={() => replayStat(7, setFrameworksCount)} className="cursor-default transition-transform hover:scale-105">
        <h4 className="text-3xl md:text-4xl font-black text-white leading-none tracking-tight">{frameworksCount}</h4>
        <p className="text-xs text-purple-300 uppercase tracking-widest mt-2 font-black">Compliance Frameworks</p>
      </div>
      <div onMouseEnter={() => replayStat(30, setProjectsCount)} className="cursor-default transition-transform hover:scale-105">
        <h4 className="text-3xl md:text-4xl font-black text-white leading-none tracking-tight">{projectsCount}+</h4>
        <p className="text-xs text-purple-300 uppercase tracking-widest mt-2 font-black">National Projects</p>
      </div>
      <div onMouseEnter={() => replayStat(200, setGraduatesCount)} className="cursor-default transition-transform hover:scale-105">
        <h4 className="text-3xl md:text-4xl font-black text-white leading-none tracking-tight">{graduatesCount}+</h4>
        <p className="text-xs text-purple-300 uppercase tracking-widest mt-2 font-black">Academy Graduates</p>
      </div>
    </div>
  );
}
