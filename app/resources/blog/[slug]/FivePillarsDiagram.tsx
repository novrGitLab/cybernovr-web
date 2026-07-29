"use client";

import React from "react";

const PILLARS = [
  { n: "1", name: "Governance & Risk", map: "ISO 27001 Cl. 5–10 · NIST GV" },
  { n: "2", name: "Identify & Protect", map: "ISO 27001 Annex A · NIST PR" },
  { n: "3", name: "Detect", map: "NIST DE · SIEM / SOC" },
  { n: "4", name: "Respond & Recover", map: "ISO 27035 · NIST RS / RC" },
  { n: "5", name: "Third-Party Risk", map: "NIST GV.SC · ISO A.5.19" },
] as const;

const BOX_W = 240;
const BOX_H = 180;
const GAP = 12;
const TOTAL_W = PILLARS.length * BOX_W + (PILLARS.length - 1) * GAP;

export default function FivePillarsDiagram() {
  return (
    <figure className="my-10 space-y-3">
      <div className="w-full overflow-x-auto rounded-xl border border-zinc-200 bg-purple-950/[0.02] p-4">
        <svg
          viewBox={`0 0 ${TOTAL_W} ${BOX_H}`}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="The five pillars of the CBN 2026 cybersecurity framework: Governance and Risk; Identify and Protect; Detect; Respond and Recover; Third-Party Risk."
          className="w-full h-auto min-w-[720px]"
        >
          {PILLARS.map((p, i) => {
            const x = i * (BOX_W + GAP);
            return (
              <g key={p.n} transform={`translate(${x},0)`}>
                <rect width={BOX_W} height={BOX_H} rx={12} fill="#faf5ff" stroke="#581c87" strokeOpacity="0.25" />
                <path d={`M 0 36 L ${BOX_W} 36 L ${BOX_W} 48 Q ${BOX_W} 36 ${BOX_W - 12} 36 Z`} fill="#3b0764" />
                <rect x={0} y={0} width={BOX_W} height={36} rx={12} fill="#3b0764" />
                <rect x={0} y={24} width={BOX_W} height={12} fill="#3b0764" />
                <text x={BOX_W / 2} y={23} textAnchor="middle" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="13" fontWeight="700" fill="#fde047">
                  PILLAR {p.n}
                </text>
                <text x={BOX_W / 2} y={80} textAnchor="middle" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="15" fontWeight="700" fill="#18181b">
                  {p.name}
                </text>
                <text x={BOX_W / 2} y={110} textAnchor="middle" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="10" fill="#52525b">
                  {p.map}
                </text>
                <line x1={36} y1={140} x2={BOX_W - 36} y2={140} stroke="#b91c1c" strokeWidth="1" strokeOpacity="0.4" />
                <text x={BOX_W / 2} y={160} textAnchor="middle" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="9" fontWeight="700" fill="#b91c1c" letterSpacing="2">
                  MANDATORY
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="text-[11px] text-zinc-500 font-mono text-center">
        Figure 1 — The five pillars of the CBN 2026 cybersecurity framework, mapped to ISO 27001 and NIST CSF 2.0 control families. All five pillars are mandatory for tier-1 DMBs.
      </figcaption>
    </figure>
  );
}
