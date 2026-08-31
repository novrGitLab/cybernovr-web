import { pageMetadata } from "@/app/seo";

export const metadata = pageMetadata({
  title: "Cybersecurity News & Threat Briefs for Nigeria | CyberNovr",
  description: "Latest cybersecurity news, threat advisories, and breach briefings for Nigerian and African organizations. Updated weekly by CyberNovr's threat intel team.",
  path: "/resources/news",
});

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
