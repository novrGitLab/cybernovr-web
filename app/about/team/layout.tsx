import { pageMetadata } from "@/app/seo";

export const metadata = pageMetadata({
  title: "Meet Our Team — CyberNovr's Cybersecurity Experts in Nigeria",
  description: "Meet the cybersecurity experts leading CyberNovr. Our team brings 30+ years of experience protecting Nigeria's critical national infrastructure. Led by Dr. Kazeem Durodoye.",
  path: "/about/team",
});

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
