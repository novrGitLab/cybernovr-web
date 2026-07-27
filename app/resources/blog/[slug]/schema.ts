import { getBlogPostBySlug, type BlogPost } from "../data";

const SITE_URL = "https://www.cybernovr.com";

const blogPostingCache = new Map<string, string>();
const faqCache = new Map<string, string>();

function buildBlogPostingJsonLd(post: BlogPost): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: [`${SITE_URL}${post.image.src}`],
    datePublished: post.isoDate,
    dateModified: post.lastUpdated,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "CYBERNOVR",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/resources/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.keywords.join(", "),
  });
}

function buildFaqJsonLd(post: BlogPost): string | null {
  if (!post.faqs || post.faqs.length === 0) return null;
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  });
}

export function getBlogPostingJsonLd(slug: string): string | null {
  const cached = blogPostingCache.get(slug);
  if (cached !== undefined) return cached;

  const post = getBlogPostBySlug(slug);
  if (!post) {
    blogPostingCache.set(slug, "");
    return null;
  }

  const json = buildBlogPostingJsonLd(post);
  blogPostingCache.set(slug, json);
  return json;
}

export function getFaqJsonLd(slug: string): string | null {
  const cached = faqCache.get(slug);
  if (cached !== undefined) return cached;

  const post = getBlogPostBySlug(slug);
  if (!post) {
    faqCache.set(slug, "");
    return null;
  }

  const json = buildFaqJsonLd(post);
  faqCache.set(slug, json ?? "");
  return json;
}

export function getPostUrl(slug: string): string {
  return `${SITE_URL}/resources/blog/${slug}`;
}
