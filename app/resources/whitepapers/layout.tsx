import { pageMetadata } from "@/app/seo";

export const metadata = pageMetadata({
  title: "Cybersecurity Whitepapers & Research Reports | CyberNovr",
  description: "Download free cybersecurity whitepapers, research reports, and technical guides from CyberNovr. Topics: NDPR, CBN framework, SOC implementation, fintech security.",
  path: "/resources/whitepapers",
});

export default function WhitepapersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
