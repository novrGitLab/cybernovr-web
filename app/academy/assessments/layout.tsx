import { pageMetadata } from "@/app/seo";

export const metadata = pageMetadata({
  title: "Exam Readiness Assessment — Novr Academy | CyberNovr",
  description: "Test your cybersecurity knowledge with Novr Academy's exam readiness assessments. Practice questions for students and professionals in Nigeria.",
  path: "/academy/assessments",
});

export default function AcademyAssessmentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
