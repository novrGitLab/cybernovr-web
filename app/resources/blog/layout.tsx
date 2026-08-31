import { pageMetadata } from "@/app/seo";

export const metadata = pageMetadata({
  title: "Cybersecurity Blog | Threat Intelligence & Insights — CyberNovr",
  description: "Expert cybersecurity analysis, threat intelligence, and technical deep-dives from CyberNovr's research team. Topics: SOC, GRC, XDR, Nigerian cyber landscape, fintech security.",
  path: "/resources/blog",
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
