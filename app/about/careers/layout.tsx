import { pageMetadata } from "@/app/seo";

export const metadata = pageMetadata({
  title: "Careers at CyberNovr — Cybersecurity Jobs in Nigeria",
  description: "Build your cybersecurity career at CyberNovr. We're hiring penetration testers, SOC analysts, GRC consultants, and engineers in Lagos, Nigeria. View open positions.",
  path: "/about/careers",
});

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
