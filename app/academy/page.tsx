import AcademyClient from "./AcademyClient";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Novr Academy — Cybersecurity Training & CEAP Program in Nigeria",
  description: "Industry-ready cybersecurity training in Nigeria. The CEAP program covers ethical hacking, threat awareness, identity management, and more. Enroll today for ages 12-17 and adult learners.",
  path: "/academy",
});

export default function AcademyPage() {
  return <AcademyClient />;
}
