import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "../data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
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

  return (
    <div className="pt-24 md:pt-28 pb-24 px-4 sm:px-6 md:px-0 lg:px-margin-desktop max-w-[1536px] mx-auto bg-white text-zinc-900 antialiased">
      {/* Back Link */}
      <div className="max-w-3xl mx-auto mb-8">
        <Link
          href="/resources/blog"
          className="inline-flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-wider hover:text-red-600 transition-colors font-mono"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-3xl mx-auto text-left space-y-6 mb-12">
        <span className="inline-block font-mono text-red-700 text-[11px] md:text-[15px] font-black tracking-widest uppercase bg-purple-950/[0.04] border border-purple-900/10 px-3 py-1 rounded">
          {post.category}
        </span>
        <h1 className="text-2xl md:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase leading-tight">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-[13px] font-mono font-bold text-zinc-400">
          <span className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5 text-red-700" /> {post.author},{" "}
            {post.authorRole}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-red-700" /> {post.date}
          </span>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="relative overflow-hidden rounded-xl border border-zinc-200">
          <img
            src={post.image.src}
            alt={post.image.alt}
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>
      </div>

      {/* Article Body */}
      <article className="max-w-3xl mx-auto space-y-8 text-left">
        {post.sections.map((section, idx) => (
          <div key={idx} className="space-y-4">
            {section.heading && (
              <h2 className="text-[13px] md:text-[15px] font-bold text-zinc-900 uppercase tracking-tight">
                {section.heading}
              </h2>
            )}
            <p className="text-zinc-600 text-[13px] md:text-[15px] leading-relaxed font-normal">
              {section.body}
            </p>
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
                  <p className="text-[11px] text-zinc-400 font-mono mt-2 text-center">
                    {section.video.caption}
                  </p>
                )}
              </div>
            )}
            {section.image && (
              <div className="my-8">
                <div className="relative overflow-hidden rounded-xl border border-zinc-200">
                  <img
                    src={section.image.src}
                    alt={section.image.alt}
                    className="w-full h-auto object-cover max-h-[400px]"
                  />
                </div>
                {section.image.caption && (
                  <p className="text-[11px] text-zinc-400 font-mono mt-2 text-center">
                    {section.image.caption}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </article>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto mt-16 bg-purple-950/[0.02] border border-purple-900/10 rounded-2xl p-8 md:p-10 text-center space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-zinc-900 uppercase tracking-tight">
          Reach out today!
        </h3>
        <p className="text-[15px] text-zinc-500 max-w-lg mx-auto font-normal">
          At Cybernovr, we work with Government and private sector operators to
          protect Critical National Information Infrastructure (CNII) like 5G.
        </p>
        <Link
          href="/contacts"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-[13px] uppercase tracking-widest px-6 py-3.5 rounded-lg transition-all shadow-md font-mono"
        >
          Contact Us
        </Link>
      </div>

      {/* Footer CTA */}
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
