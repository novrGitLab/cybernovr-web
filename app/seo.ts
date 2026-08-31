import type { Metadata } from "next";

const BASE = "https://www.cybernovr.com";

export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
}): Metadata {
  const url = `${BASE}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: {
      canonical: url,
      languages: {
        "en-NG": url,
        en: url,
        "x-default": url,
      },
    },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: "CyberNovr",
      locale: "en_NG",
      type: opts.ogType ?? "website",
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
    },
    robots: { index: true, follow: true },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE}${item.path || "/"}`,
    })),
  };
}
