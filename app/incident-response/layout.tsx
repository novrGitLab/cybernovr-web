import { pageMetadata } from "@/app/seo";

export const metadata = pageMetadata({
  title: "24/7 Incident Response Nigeria — Cyber Breach Hotline | CyberNovr",
  description: "Active cyber breach? Call CyberNovr's 24/7 incident response hotline: +234-901-699-1201. Rapid containment, forensic preservation, and system restoration across Nigeria and Africa.",
  path: "/incident-response",
});

export default function IncidentResponseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
