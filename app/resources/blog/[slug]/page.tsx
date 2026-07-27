import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { ArrowLeft, ArrowRight, Clock, User, AlertTriangle, Info, Lightbulb, HelpCircle } from "lucide-react";
import { blogPosts, getBlogPostBySlug, type BlogInlineLink } from "../data";
import { getBlogPostingJsonLd, getFaqJsonLd } from "./schema";

const FivePillarsDiagram = dynamic(() => import("./FivePillarsDiagram"), {
  ssr: true,
  loading: () => (
    <div className="my-10 h-[180px] rounded-xl bg-purple-950/[0.02] border border-zinc-200 animate-pulse" />
  ),
});

const SITE_URL = "https://www.cybernovr.com";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  const postUrl = `${SITE_URL}/resources/blog/${post.slug}`;
  return {
    title: `${post.title} | CYBERNOVR Blog`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: { canonical: postUrl },
    openGraph: {
      title: post.title,
      description: post.description,
      url: postUrl,
      siteName: "CYBERNOVR",
      type: "article",
      publishedTime: post.isoDate,
      modifiedTime: post.lastUpdated,
      authors: [post.author],
      section: post.category,
      tags: post.keywords,
      images: [{ url: post.image.src, alt: post.image.alt, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image.src],
    },
  };
}

function renderBodyWithLinks(body: string, links?: BlogInlineLink[]): React.ReactNode {
  if (!links || links.length === 0) return body;

  const segments: React.ReactNode[] = [];
  let remaining = body;
  links.forEach((link, i) => {
    const idx = remaining.indexOf(link.text);
    if (idx === -1) return;
    const before = remaining.slice(0, idx);
    const after = remaining.slice(idx + link.text.length);
    if (before) segments.push(<React.Fragment key={`b${i}`}>{before}</React.Fragment>);
    segments.push(
      <Link
        key={`l${i}`}
        href={link.href}
        title={link.title}
        className="text-red-700 font-bold underline underline-offset-2 decoration-red-700/40 hover:decoration-red-700 hover:text-red-600 transition-colors"
      >
        {link.text}
      </Link>
    );
    remaining = after;
  });
  if (remaining) segments.push(<React.Fragment key="tail">{remaining}</React.Fragment>);
  return <>{segments}</>;
}

function CalloutBox({ type, text }: { type: "note" | "warning" | "tip"; text: string }) {
  const styles: Record<typeof type, { border: string; bg: string; icon: React.ReactNode; label: string; labelColor: string }> = {
    note: {
      border: "border-purple-900/20",
      bg: "bg-purple-950/[0.04]",
      icon: <Info className="h-4 w-4 text-purple-900" />,
      label: "NOTE",
      labelColor: "text-purple-900",
    },
    warning: {
      border: "border-red-300",
      bg: "bg-red-50",
      icon: <AlertTriangle className="h-4 w-4 text-red-700" />,
      label: "WARNING",
      labelColor: "text-red-700",
    },
    tip: {
      border: "border-emerald-300",
      bg: "bg-emerald-50",
      icon: <Lightbulb className="h-4 w-4 text-emerald-700" />,
      label: "TIP",
      labelColor: "text-emerald-700",
    },
  };
  const s = styles[type];
  return (
    <aside className={`my-6 flex gap-3 ${s.bg} ${s.border} border-l-4 rounded-r-lg p-4 md:p-5`}>
      <div className="shrink-0 mt-0.5">{s.icon}</div>
      <div className="space-y-1">
        <span className={`font-mono text-[11px] font-black tracking-widest uppercase ${s.labelColor}`}>{s.label}</span>
        <p className="text-zinc-700 text-[13px] md:text-[14px] leading-relaxed">{text}</p>
      </div>
    </aside>
  );
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }): Promise<React.ReactElement> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto bg-white text-zinc-900 antialiased">
        <div className="max-w-3xl mx-auto text-center py-20 space-y-4">
          <h1 className="text-2xl font-extrabold uppercase tracking-tight">Post Not Found</h1>
          <p className="text-zinc-500 text-[13px]">The blog post you are looking for does not exist.</p>
          <Link href="/resources/blog" className="inline-flex items-center gap-2 text-red-700 font-bold text-[13px] uppercase tracking-wider hover:text-red-600 transition-colors font-mono">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const blogPostingJsonLd = getBlogPostingJsonLd(post.slug);
  const faqJsonLd = getFaqJsonLd(post.slug);
  const relatedPosts = (post.relatedSlugs || [])
    .map((s) => getBlogPostBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto bg-white text-zinc-900 antialiased">
      {blogPostingJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: blogPostingJsonLd }}
        />
      )}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqJsonLd }}
        />
      )}

      <div className="max-w-3xl mx-auto mb-8">
        <Link
          href="/resources/blog"
          className="inline-flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-wider hover:text-red-600 transition-colors font-mono"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </div>

      <header className="max-w-3xl mx-auto text-left space-y-6 mb-12">
        <span className="inline-block font-mono text-red-700 text-[11px] md:text-[15px] font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded">
          {post.category}
        </span>
        <h1 className="text-2xl md:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-[13px] font-mono font-bold text-zinc-400">
          <span className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5 text-red-700" /> {post.author},{" "}
            {post.authorRole}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-red-700" /> Published {post.date}
          </span>
          {post.lastUpdated !== post.isoDate && (
            <span className="flex items-center gap-1.5 text-zinc-500">
              {"\u00b7"} Updated {new Date(post.lastUpdated).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          )}
        </div>
        <p className="text-zinc-600 text-[14px] md:text-[16px] leading-relaxed font-normal border-l-4 border-red-700 pl-4">
          {post.description}
        </p>
      </header>

      <div className="max-w-4xl mx-auto mb-12">
        <div className="relative overflow-hidden rounded-xl border border-zinc-200">
          <img
            src={post.image.src}
            alt={post.image.alt}
            width={1200}
            height={630}
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>
      </div>

      <article className="max-w-3xl mx-auto space-y-8 text-left">
        {post.sections.map((section, idx) => {
          const slugAnchor = section.heading
            ? section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
            : undefined;
          return (
            <div key={idx} className="space-y-4" id={slugAnchor}>
              {section.heading && (
                <h2 className="text-[15px] md:text-[18px] font-extrabold text-zinc-900 uppercase tracking-tight mt-12 first:mt-0">
                  {section.heading}
                </h2>
              )}
              <p className="text-zinc-700 text-[14px] md:text-[16px] leading-relaxed font-normal">
                {renderBodyWithLinks(section.body, section.links)}
              </p>
              {section.list && section.list.length > 0 && (
                <ul className="list-disc list-outside pl-6 space-y-2 text-zinc-700 text-[14px] md:text-[15px] leading-relaxed marker:text-red-700">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section.callout && (
                <CalloutBox type={section.callout.type} text={section.callout.text} />
              )}
              {section.image && (
                <div className="my-8">
                  <div className="relative overflow-hidden rounded-xl border border-zinc-200">
                    <img
                      src={section.image.src}
                      alt={section.image.alt}
                      width={1200}
                      height={630}
                      className="w-full h-auto object-cover max-h-[400px]"
                    />
                  </div>
                  {section.image.caption && (
                    <p className="text-[11px] text-zinc-500 font-mono mt-2 text-center">
                      {section.image.caption}
                    </p>
                  )}
                </div>
              )}
              {section.video && (
                <div className="my-8">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full rounded-xl border border-zinc-200"
                  >
                    <source src={section.video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {section.video.caption && (
                    <p className="text-[11px] text-zinc-500 font-mono mt-2 text-center">
                      {section.video.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {post.slug === "cbn-2026-cybersecurity-framework-ciso-guide" && <FivePillarsDiagram />}

        {post.faqs && post.faqs.length > 0 && (
          <section className="mt-16 space-y-6">
            <div className="flex items-center gap-3">
              <HelpCircle className="h-5 w-5 text-red-700" />
              <h2 className="text-[15px] md:text-[18px] font-extrabold text-zinc-900 uppercase tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-3">
              {post.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-purple-950/[0.02] border border-purple-900/10 rounded-lg p-4 md:p-5"
                >
                  <summary className="cursor-pointer font-bold text-zinc-900 text-[14px] md:text-[15px] list-none flex items-center justify-between gap-3">
                    <span>{faq.q}</span>
                    <span className="text-red-700 font-mono text-[11px] tracking-widest group-open:rotate-180 transition-transform">
                      {"\u25bc"}
                    </span>
                  </summary>
                  <p className="text-zinc-700 text-[14px] md:text-[15px] leading-relaxed mt-3">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}
      </article>

      <div className="max-w-3xl mx-auto mt-16 bg-purple-950/[0.02] border border-purple-900/10 rounded-2xl p-8 md:p-10 text-center space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-zinc-900 uppercase tracking-tight">
          Need a partner for your CBN 2026 readiness?
        </h3>
        <p className="text-[15px] text-zinc-600 max-w-lg mx-auto font-normal">
          Cybernovr runs a 10-day cybersecurity gap-analysis sprint for Nigerian banks and delivers an evidence-ready remediation plan that satisfies the CBN, ISO 27001, and NDPR.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-[13px] uppercase tracking-widest px-6 py-3.5 rounded-lg transition-all shadow-md font-mono"
          >
            Book a Gap-Analysis Sprint <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-300 font-bold text-[13px] uppercase tracking-widest px-6 py-3.5 rounded-lg transition-all font-mono"
          >
            See Banking Solutions
          </Link>
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <section className="max-w-5xl mx-auto mt-16">
          <h2 className="text-[15px] md:text-[18px] font-extrabold text-zinc-900 uppercase tracking-tight mb-6 text-left">
            Related Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/resources/blog/${rp.slug}`}
                className="group block bg-purple-950/[0.02] border border-purple-900/10 rounded-xl p-5 hover:border-purple-900/30 transition-all"
              >
                <span className="inline-block font-mono text-[11px] font-black tracking-widest uppercase text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded mb-3">
                  {rp.category}
                </span>
                <h3 className="text-[15px] font-bold text-zinc-900 leading-snug group-hover:text-red-700 transition-colors mb-2">
                  {rp.title}
                </h3>
                <p className="text-zinc-600 text-[13px] leading-relaxed line-clamp-3">{rp.description}</p>
                <span className="inline-flex items-center gap-1 text-red-700 font-bold text-[12px] uppercase tracking-wider font-mono mt-3 group-hover:gap-2 transition-all">
                  Read Post <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="max-w-3xl mx-auto mt-12 text-center border-t border-zinc-200 pt-8">
        <p className="text-[13px] text-zinc-500 font-normal">
          Enjoying Our Resources?
        </p>
        <Link
          href="/contacts"
          className="inline-flex items-center gap-2 text-red-700 font-bold text-[13px] uppercase tracking-wider hover:text-red-600 transition-colors font-mono mt-2"
        >
          Reach out to discover more cybersecurity insights, tools, and guides.
        </Link>
      </div>
    </div>
  );
}
