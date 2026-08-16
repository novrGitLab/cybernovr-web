// Option keys/labels for the NovrALERT signup form, per the published taxonomy.
// Forms show the LABEL, but send the VALUE (key). Keys are lowercase, case-sensitive.
// Shared by the client form (app/solutions/novralert/page.tsx) and the server
// route (app/api/subscribe/route.ts) so the two can never drift apart.

export const TOPICS = [
  { value: "data_privacy", label: "Data Privacy" },
  { value: "data_security", label: "Data Security" },
  { value: "iam", label: "Identity & Access Management" },
  { value: "network_security_general", label: "Network Security (General)" },
  { value: "network_security_cni", label: "Network Security (Critical Infrastructure)" },
  { value: "personnel_security", label: "Personnel Security" },
  { value: "endpoint_security", label: "Endpoint Security" },
  { value: "cyber_hygiene", label: "Cyber Hygiene" },
  { value: "comms_resilience", label: "Communication Infrastructure Resilience" },
  { value: "supply_chain", label: "External Dependencies / Supply Chain / Procurement" },
] as const;

export const TOPIC_KEYS = TOPICS.map((t) => t.value);

export const SECTORS = [
  { value: "fintech", label: "Fintech / Financial Services" },
  { value: "healthcare", label: "Healthcare" },
  { value: "government", label: "Government / Public Sector" },
  { value: "energy", label: "Energy & Utilities" },
  { value: "telecom", label: "Telecommunications" },
  { value: "technology", label: "Technology / SaaS" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "retail", label: "Retail / E-commerce" },
  { value: "education", label: "Education" },
] as const;

export const SECTOR_KEYS = SECTORS.map((s) => s.value);

export const LOCATIONS = [
  { value: "global", label: "Global" },
  { value: "nigeria", label: "Nigeria" },
  { value: "africa", label: "Africa" },
  { value: "us", label: "United States" },
  { value: "eu", label: "Europe / EU" },
  { value: "uk", label: "United Kingdom" },
] as const;

export const LOCATION_KEYS = LOCATIONS.map((l) => l.value);

export const TIERS = [
  {
    value: "free",
    name: "Free",
    price: "$0",
    period: "",
    features: ["Curated threat alerts", "1 topic area", "Weekly digest"],
  },
  {
    value: "starter",
    name: "Starter",
    price: "$7",
    period: "/mo",
    features: ["Basic threat alerts", "3 topic areas", "Email delivery", "Weekly digest"],
  },
  {
    value: "pro",
    name: "Pro",
    price: "$15",
    period: "/mo",
    features: ["Full threat coverage", "All topics & sectors", "API access", "Real-time alerts", "Dark web monitoring"],
  },
  {
    value: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["Dedicated tenant", "Custom integrations", "Priority support", "Tailored intelligence", "SLA guarantee"],
  },
] as const;

export const TIER_KEYS = TIERS.map((t) => t.value);
