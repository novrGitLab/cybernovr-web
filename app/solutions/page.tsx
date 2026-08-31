import SolutionsClient from "./SolutionsClient";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Cybersecurity Solutions for Nigeria & Africa | SOC, GRC, XDR, Vulnerability Management",
  description: "Explore CyberNovr's enterprise cybersecurity solutions: 24/7 managed SOC (NovrSOC), GRC platform (NovrGRC), AI-powered XDR (NovrRadar), and vulnerability management (SecuBreach). Built for Nigeria and Africa.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return <SolutionsClient />;
}
