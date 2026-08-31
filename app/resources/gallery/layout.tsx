import { pageMetadata } from "@/app/seo";

export const metadata = pageMetadata({
  title: "Photo & Video Gallery — CyberNovr Events & Team",
  description: "Browse photos and videos from CyberNovr's cybersecurity training programs, industry events, and team activities across Nigeria and Africa.",
  path: "/resources/gallery",
});

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
