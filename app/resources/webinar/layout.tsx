import { pageMetadata } from "@/app/seo";

export const metadata = pageMetadata({
  title: "Cybersecurity Webinars & Live Training | CyberNovr",
  description: "Free and on-demand cybersecurity webinars for Nigerian and African professionals. Topics: SOC operations, ISO 27001, NDPR compliance, threat hunting, and more.",
  path: "/resources/webinar",
});

export default function WebinarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
