export interface BlogInlineLink {
  text: string;
  href: string;
  title?: string;
}

export interface BlogCallout {
  type: "note" | "warning" | "tip";
  text: string;
}

export interface BlogSection {
  heading?: string;
  body: string;
  image?: { src: string; alt: string; caption?: string };
  video?: { src: string; caption?: string };
  links?: BlogInlineLink[];
  list?: string[];
  callout?: BlogCallout;
}

export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  authorRole: string;
  date: string;
  isoDate: string;
  lastUpdated: string;
  category: string;
  keywords: string[];
  description: string;
  image: { src: string; alt: string };
  sections: BlogSection[];
  faqs?: BlogFaq[];
  relatedSlugs?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "securing-our-5G",
    title: "Securing Our 5G Infrastructure As A Critical National Information Infrastructure",
    author: "Kazeem Durodoye",
    authorRole: "PhD | FNCS",
    date: "12th June, 2025",
    isoDate: "2025-06-12",
    lastUpdated: "2025-06-12",
    category: "Critical Infrastructure",
    keywords: ["5G security Nigeria", "critical national information infrastructure", "CNII"],
    description:
      "Nigeria\u2019s 5G deployment is driving the need for resilience among industry, academia, and government. This article explores the security challenges and attack vectors facing 5G critical infrastructure.",
    image: { src: "/assets/blog/securing-5g.webp", alt: "5G Infrastructure Security" },
    sections: [
      {
        body: "Nigeria auctioned the 3.5 gigahertz (GHz) spectrum on the 10th of December 2021, which provided the regulatory platform to deploy the Fifth Generation (5G) mobile technology in September 2022. The launch and ubiquity of use cases of 5G, especially in powering critical services, are driving the need for resilience of 5G among industry, academia, and the government of Nigeria.",
        video: { src: "/assets/blog/NTAinterview.mp4", caption: "Dr. Kazeem Durodoye discusses 5G infrastructure security on NTA" },
      },
      {
        heading: "The Evolution to 5G",
        body: "5G is an evolution from previous generations of mobile communication technologies. This evolution is usually referred to in a generation like first, second, third, fourth, etc. The key factor for the First Generation (1G) was mobility primarily used for analog voice services while the Second Generation (2G) was an improvement through the digitization of phone calls and enabling Short Message Services (SMS) as well as other basic data services. The Third Generation (3G) was launched in 1998 for a better internet experience (mobile and wireless internet connection). Broadband internet and internet-based applications were enabled on 3.5G while the Fourth Generation (4G), released around 2008 delivered high-speed internet and high-capacity multimedia for images and video.",
      },
      {
        heading: "5G Benefits and Critical Use Cases",
        body: "Beyond being a radio access technology, 5G is a new architecture and standard with far greater agility in all domains of human endeavor. Some of the benefits of 5G include improved capacity, latency, agility, reliability, and speeds, making it relevant to communication and infrastructure service providers and most industry verticals. 5G promises several critical use cases, from medical applications to delivering education to students in remote areas. Equally, industrial automation, public safety service, and support for public utilities or self-driving cars are also important applications of 5G.",
      },
      {
        heading: "Security Responsibilities",
        body: "The criticality of these use cases has put responsibilities on telecommunications operators and the government to work together to safeguard the underlying technologies of 5G. This responsibility will ensure that appropriate safeguards are in place to prevent these infrastructures from malicious attacks from state and non-state actors.",
      },
      {
        heading: "5G Attack Vectors and Vulnerabilities",
        body: "Some 5G high-level attack vectors include Denial of Service (DoS), exploiting backdoors, exploiting flaws in operational procedures, and other forms of attacks. Furthermore, 5G has multiple logical networks called network slices, and the increased number of devices connected invariably increases the attack surface and attack frequency, respectively. This means the 5G networks may be exposed to vulnerabilities with more serious consequences on the critical infrastructures it enables than the previous generations of mobile telecommunications.",
      },
    ],
    relatedSlugs: ["cbn-2026-cybersecurity-framework-ciso-guide"],
  },
  {
    slug: "cbn-2026-cybersecurity-framework-ciso-guide",
    title: "How Nigerian Banks Can Meet the CBN 2026 Cybersecurity Framework: A CISO Implementation Guide",
    author: "Kazeem Durodoye",
    authorRole: "PhD | FNCS",
    date: "27th July, 2026",
    isoDate: "2026-07-27",
    lastUpdated: "2026-07-27",
    category: "Banking & Compliance",
    keywords: [
      "CBN 2026 cybersecurity framework",
      "CBN cybersecurity framework for banks",
      "CBN risk-based cybersecurity framework",
      "NDPR compliance for financial institutions Nigeria",
      "CISO implementation guide Nigeria",
      "ISO 27001 banking Nigeria",
      "cybersecurity controls for deposit money banks Nigeria",
    ],
    description:
      "A CISO-grade implementation guide to the CBN 2026 cybersecurity framework for Nigerian banks: gap analysis, the 12 critical controls, continuous monitoring, evidence and board reporting.",
    image: { src: "/assets/blog/ciso-2.webp", alt: "Cybernovr analysis of the CBN 2026 cybersecurity framework for Nigerian banks" },
    sections: [
      {
        body: "If you are a CISO or Head of Information Security at a Nigerian deposit money bank (DMB), payment service bank (PSB), or microfinance bank, the Central Bank of Nigeria\u2019s 2026 cybersecurity framework is no longer a future-tense concern \u2014 it is the operating context for the next twelve months. The framework re-baselines minimum cybersecurity and resilience expectations for every licensed financial institution, and the supervisory tone has shifted from advisory to evidentiary. This guide gives a CISO a single, ordered view of what the framework requires, how to evidence it, and the order in which to close the gaps so that the next CBN examination, ISO 27001 surveillance audit, and NDPR assessment all read from the same evidence pack.",
        callout: {
          type: "note",
          text: "This article is a CISO-level interpretation and is not legal advice. Always confirm the latest provisions with the CBN circular, your compliance counsel, and the most recent NCC and NDPR guidelines.",
        },
      },
      {
        heading: "Why the CBN 2026 Cybersecurity Framework Matters Now",
        body: "The 2026 framework consolidates prior CBN circulars on cybersecurity, the risk-based cybersecurity framework, and the operational resilience guidelines into a single, tiered control set. The material changes from the 2018 baseline are threefold: supervisory examinations are now evidence-led rather than policy-led; penalties scale with the bank\u2019s criticality tier; and the board must attest annually to the effectiveness of the cybersecurity programme. For a tier-1 DMB, non-attestation or material control failure now carries direct capital and licensing consequences, not just reputational ones. For tier-2 and tier-3 institutions, the framework is the trigger to finally move from policy-on-paper to a continuously evidenced programme.",
        list: [
          "Evidence-led supervision \u2014 examiners sample artefacts, not policies.",
          "Board attestation is mandatory and signed off quarterly in some cases.",
          "Tiered expectations \u2014 tier-1 DMBs face the strictest control depth.",
          "Incident reporting window tightened to within hours, not days.",
          "Third-party and fintech outsourcing risk is now in scope.",
        ],
      },
      {
        heading: "The Five Pillars of the CBN 2026 Cybersecurity Framework",
        body: "The framework is organised into five pillars. Each pillar is mapped below to its closest ISO 27001 / NIST CSF 2.0 control family so that your existing ISMS evidence can be re-used rather than rebuilt. Use the diagram below to brief your board and align your security steering committee to the same mental model.",
        list: [
          "Pillar 1 \u2014 Governance, Risk & Compliance (mapped to ISO 27001 Clauses 5\u201310 and NIST GV)",
          "Pillar 2 \u2014 Identify & Protect (mapped to ISO 27001 Annex A controls and NIST PR)",
          "Pillar 3 \u2014 Detect (mapped to NIST DE \u2014 continuous monitoring and SIEM/SOC)",
          "Pillar 4 \u2014 Respond & Recover (mapped to NIST RS / RC and ISO 27035)",
          "Pillar 5 \u2014 Third-Party, Fintech & Cloud Risk (mapped to NIST GV.SC and ISO 27001 A.5.19\u2013A.5.23)",
        ],
        links: [
          { text: "NovrGRC platform", href: "/solutions/novrgrc", title: "Cybernovr GRC platform for banks" },
          { text: "Banking industry solutions", href: "/industries", title: "Cybernovr banking vertical" },
        ],
      },
      {
        heading: "Step 1 \u2014 Run a Cybersecurity Gap Analysis",
        body: "Before any tooling decision, the first deliverable is a documented gap analysis. Pull the latest CBN circular, your current ISMS scope statement, the most recent internal audit report, and the results of your last penetration test. For each of the five pillars, score the current state on a 0\u20134 scale (0 = not started, 4 = optimised and evidenced). The output is a single heat map that the board can read in one page, and a remediation backlog that engineering can resource. The Cybernovr banking advisory team runs a 10-day gap-analysis sprint that produces this heat map and an evidence-ready remediation plan, and the resulting document is acceptable evidence for both the CBN examination and your ISO 27001 surveillance audit.",
        callout: {
          type: "tip",
          text: "Tip: a gap analysis is most defensible when it references the specific clause of the CBN circular, the specific ISO 27001 control, and the specific evidence artefact (e.g. SIEM ticket, tabletop minutes, vendor SOC 2 report). Avoid generic statements like \u2018partial compliance\u2019.",
        },
      },
      {
        heading: "Step 2 \u2014 Implement the 12 Critical Controls",
        body: "Across the five pillars, twelve controls consistently separate the banks that pass examination from the banks that receive remediation orders. The matrix below maps each CBN control to its ISO 27001 / NIST CSF reference and to a Cybernovr product that accelerates implementation and evidence collection.",
        list: [
          "1. Board-approved cybersecurity charter and KRIs \u2014 ISO A.5.1, NIST GV.RR \u2014 mapped to NovrGRC",
          "2. Asset and data inventory \u2014 ISO A.5.9, NIST ID.AM \u2014 mapped to SecuBreach",
          "3. Risk register and treatment plan \u2014 ISO 6.1.2, NIST GV.RM \u2014 mapped to NovrGRC",
          "4. Identity, MFA and privileged access \u2014 ISO A.5.16, NIST PR.AA \u2014 mapped to NovrSOC",
          "5. Vulnerability and patch management \u2014 ISO A.8.8, NIST ID.RA \u2014 mapped to SecuBreach",
          "6. Continuous threat monitoring and SOC \u2014 ISO A.8.16, NIST DE.CM \u2014 mapped to NovrSOC",
          "7. Threat intelligence and exposure management \u2014 NIST DE.AE \u2014 mapped to NovrRadar",
          "8. Incident response and forensic readiness \u2014 ISO A.5.24, NIST RS \u2014 Cybernovr incident-response retainer",
          "9. Business continuity and disaster recovery \u2014 ISO A.5.29, NIST RC \u2014 Cybernovr advisory",
          "10. Third-party and fintech risk \u2014 ISO A.5.19, NIST GV.SC \u2014 mapped to NovrGRC",
          "11. Security awareness and phishing simulation \u2014 ISO A.6.3, NIST PR.AT \u2014 CEAP programme",
          "12. Independent assurance and board reporting \u2014 ISO 9.4, NIST GV.OC \u2014 mapped to NovrGRC",
        ],
        links: [
          { text: "SecuBreach vulnerability management", href: "/solutions/secubreach", title: "SecuBreach by Cybernovr" },
          { text: "NovrSOC managed SOC", href: "/solutions/novrsoc", title: "NovrSOC MSSP by Cybernovr" },
          { text: "NovrRadar threat and exposure platform", href: "/solutions/novrradar", title: "NovrRadar by Cybernovr" },
          { text: "CEAP cybersecurity programme", href: "/academy", title: "Cybernovr Academy CEAP" },
        ],
      },
      {
        heading: "Step 3 \u2014 Stand Up Continuous Monitoring (SOC + Threat Intel)",
        body: "The framework is explicit: periodic control reviews are no longer sufficient. Banks are expected to demonstrate continuous monitoring of the production environment, including 24/7 detection coverage for tier-1 institutions and documented after-hours escalation for tier-2 and tier-3. The minimum viable SOC stack combines a tuned SIEM, an endpoint detection and response platform, threat-intelligence ingestion, and a documented runbook library. Most Nigerian banks of tier-2 and below cannot cost-justify a 24/7 in-house SOC and instead partner with a managed SOC provider \u2014 the operative word is \u2018managed\u2019, not \u2018outsourced\u2019: accountability remains with the CISO and the board.",
        callout: {
          type: "tip",
          text: "Tip: when selecting a managed SOC, the evidence pack you need for the CBN is the SOC charter, the detection-to-triage SLA, sample monthly reports, and the last 90 days of detection engineering change records. Ask to see the artefacts before you sign the contract.",
        },
      },
      {
        heading: "Step 4 \u2014 Prove It: Evidence, Reporting, and Board Sign-Off",
        body: "Examiners do not read policies; they sample artefacts. For every control, the evidence pack must include the policy, the procedure, a sample of operational records (e.g. access reviews, change tickets, tabletop minutes, vendor risk assessments), and the dated KRI trend. The board attestation must reference this evidence pack and be backed by an internal audit opinion or an independent assurance report. The single most common reason a Nigerian bank receives a remediation order is not absence of controls but absence of evidence that the control is operating as designed.",
        list: [
          "Policy + procedure + operational record + KRI trend \u2014 the four-artifact rule.",
          "Internal audit opinion per control family, refreshed annually.",
          "Board cybersecurity committee meets quarterly, not annually.",
          "Evidence pack indexed against the CBN circular clause number for fast retrieval.",
        ],
      },
      {
        heading: "Step 5 \u2014 Sustain: Tabletops, Red Team, and Third-Party Risk",
        body: "Frameworks do not fail on day one; they fail in year two when controls are not exercised. The CBN 2026 framework expects an annual cross-functional tabletop including the CISO, CIO, head of operations, legal, communications, and a business unit head. Red-team or purple-team exercises are expected for tier-1 institutions at least annually. Third-party and fintech risk must be re-assessed at least annually and after any material change, with the right-to-audit clause, the SOC 2 or ISO 27001 report, and the fourth-party inventory on file. Sustained compliance is a function of disciplined cadence, not heroic effort.",
        callout: {
          type: "warning",
          text: "Warning: outsourcing to a fintech or cloud provider does not transfer accountability. The CISO and the board remain responsible to the CBN. A written shared-responsibility model and a tested exit plan are evidence artefacts, not optional add-ons.",
        },
      },
    ],
    faqs: [
      {
        q: "What are the requirements of the CBN 2026 cybersecurity framework?",
        a: "The framework requires licensed financial institutions to operate a five-pillar cybersecurity programme covering governance, identify and protect, detect, respond and recover, and third-party risk. Tier-1 DMBs must evidence board attestation, a 24/7 SOC, annual tabletop and red-team exercises, and continuous KRIs to the board.",
      },
      {
        q: "How do Nigerian banks comply with CBN cybersecurity guidelines?",
        a: "Compliance follows a five-step sequence: run a gap analysis, implement the twelve critical controls, stand up continuous monitoring, build an evidence pack per control, and sustain the programme with annual tabletops, red-team exercises, and third-party risk reviews. Each step produces artefacts that are reusable for ISO 27001 and NDPR assessments.",
      },
      {
        q: "What is ISO 27001 in Nigerian banking?",
        a: "ISO 27001 is the international standard for an Information Security Management System (ISMS). Nigerian banks use ISO 27001 as the natural evidence baseline for the CBN cybersecurity framework, because most CBN control expectations map directly to ISO 27001 Annex A controls and clauses 5\u201310.",
      },
      {
        q: "Does the CBN 2026 framework apply to payment service banks and microfinance banks?",
        a: "Yes. The framework applies to every CBN-licensed financial institution. The depth of expected controls is tiered: tier-1 DMBs face the strictest expectations, while tier-2, tier-3, PSBs, and MFBs have proportionally scoped expectations but the same five-pillar structure and the same evidence standard.",
      },
    ],
    relatedSlugs: ["securing-our-5G"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
