import IndustriesClient from "./IndustriesClient";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Cybersecurity for Banking, Fintech & Telecom in Nigeria | CyberNovr",
  description: "Industry-specific cybersecurity solutions for Nigerian banks, fintechs, telecoms, and government. CyberNovr secures critical national infrastructure across Africa.",
  path: "/industries",
});

export default function IndustriesPage() {
  return <IndustriesClient />;
}
