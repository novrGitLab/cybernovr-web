import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/career", destination: "/about/careers", permanent: true },
      { source: "/contact", destination: "/contacts", permanent: true },
      { source: "/products", destination: "/solutions", permanent: true },
      { source: "/products/novrgrc", destination: "/solutions/novrgrc", permanent: true },
      { source: "/products/novrradar", destination: "/solutions/novrradar", permanent: true },
      { source: "/products/novrsoc", destination: "/solutions/novrsoc", permanent: true },
      { source: "/products/secubreach", destination: "/solutions/secubreach", permanent: true },
      { source: "/services", destination: "/solutions", permanent: true },
      { source: "/services/risk-management", destination: "/solutions/novrgrc", permanent: true },
      { source: "/services/penetration-testing", destination: "/solutions/secubreach", permanent: true },
      { source: "/services/dns-security", destination: "/solutions/novrradar", permanent: true },
      { source: "/services/incident-response", destination: "/incident-response", permanent: true },
      { source: "/services/professional-services", destination: "/solutions", permanent: true },
      { source: "/news", destination: "/resources/news", permanent: true },
      { source: "/white-papers", destination: "/resources/whitepapers", permanent: true },
      { source: "/blogs", destination: "/resources/blog", permanent: true },
      { source: "/initiatives/awareness", destination: "/academy", permanent: true },
      { source: "/initiatives/youth-league", destination: "/academy", permanent: true },
      { source: "/initiatives/:path*", destination: "/academy", permanent: true },
      { source: "/courses/enroll", destination: "/academy/enroll", permanent: true },
      { source: "/courses/:path*", destination: "/academy", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
