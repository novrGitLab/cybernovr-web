import { pageMetadata } from "@/app/seo";

export const metadata = pageMetadata({
  title: "Cybersecurity Events in Nigeria & Africa | CyberNovr",
  description: "Upcoming cybersecurity conferences, workshops, and meetups in Nigeria and across Africa. Join CyberNovr at industry events and training sessions.",
  path: "/resources/events",
});

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
