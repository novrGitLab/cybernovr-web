import { pageMetadata } from "@/app/seo";

export const metadata = pageMetadata({
  title: "How to Enroll — Novr Academy CEAP | CyberNovr",
  description: "Follow these simple steps to enroll in the Cybersecurity Education and Awareness Program (CEAP) at Novr Academy. Cybersecurity training for students and professionals in Nigeria.",
  path: "/academy/enroll",
});

export default function EnrollLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
