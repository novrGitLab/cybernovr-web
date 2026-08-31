import { pageMetadata } from "@/app/seo";

export const metadata = pageMetadata({
  title: "CEAP Impact Dashboard — Cybersecurity Education in Nigeria | CyberNovr",
  description: "See the real-world impact of CyberNovr's CEAP cybersecurity education program across Nigerian schools, universities, and organizations.",
  path: "/impact-dashboard",
});

export default function ImpactDashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
