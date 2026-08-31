import HomeClient from "./HomeClient";
import { pageMetadata } from "./seo";

export const metadata = pageMetadata({
  title: "CyberNovr — Cybersecurity, SOC & GRC Solutions for Nigeria & Africa",
  description: "Nigeria's leading cybersecurity company. We deliver 24/7 managed SOC (NovrSOC), GRC platform (NovrGRC), AI-powered XDR (NovrRadar), and vulnerability management (SecuBreach) for banks, fintechs, and telecoms across Africa. ISO 27001 certified.",
  path: "",
});

export default function Home() {
  return <HomeClient />;
}
