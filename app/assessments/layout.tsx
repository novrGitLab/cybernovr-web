import { pageMetadata } from "@/app/seo";

export const metadata = pageMetadata({
  title: "Cybersecurity Assessments for Nigerian Organizations | CyberNovr",
  description: "Free and paid cybersecurity assessments: organizational resilience barometer, staff knowledge test, and tailored scoping. Know your cyber posture in minutes.",
  path: "/assessments",
});

export default function AssessmentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
