import { pageMetadata } from "@/app/seo";

export const metadata = pageMetadata({
  title: "Our Journey — CyberNovr's Cybersecurity Story Since 2008",
  description: "From a 2008 cybersecurity startup to Nigeria's leading cyber resilience company. Explore CyberNovr's milestones in protecting critical national infrastructure.",
  path: "/about/journey",
});

export default function JourneyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
