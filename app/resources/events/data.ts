export interface Event {
  title: string;
  time: string;
  location: string;
  desc: string;
  date: string;
}

export const events: Event[] = [
  {
    title: "Hands-on Vulnerability Scanning with SecuBreach",
    time: "Thu, July 02, 2026 | 2:00 PM WAT",
    location: "Virtual Operations Console",
    desc: "An engineering walkthrough modeling real-time exploit discovery and remediation reporting with 98.7% accuracy benchmarks.",
    date: "2026-07-02"
  }
];
