"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { FiBookOpen, FiArrowRight, FiPlus } from "react-icons/fi";

// ── ADD BLOG POSTS HERE ──────────────────────────────────────────────
const posts: {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string; // used for link, e.g. "/blog/my-post"
  coverEmoji?: string;
}[] = [
  // Example:
  // {
  //   title: "Why Every Engineer Should Learn a Little AI",
  //   excerpt: "Artificial intelligence is no longer just for researchers. Here's why every software engineer should understand the basics.",
  //   date: "June 2025",
  //   readTime: "5 min read",
  //   tags: ["AI", "Opinion"],
  //   slug: "/blog/engineers-and-ai",
  //   coverEmoji: "🤖",
  // },
];
// ────────────────────────────────────────────────────────────────────

export default function Blog() {
  return (
    <section id="blog" className="py-24">
      <div className="section-container">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="tech-badge mb-4">Writing</span>
            <h2 className="section-title">Blog</h2>
            <p className="section-subtitle max-w-lg">
              Thoughts on tech, engineering, faith, and the building process.
            </p>
          </div>
        </AnimatedSection>

        {posts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <a
                  href={post.slug}
                  className="card h-full flex flex-col group hover:border-primary/40 hover:-translate-y-1 block"
                >
                  {/* Cover emoji */}
                  {post.coverEmoji && (
                    <div className="text-4xl mb-4">{post.coverEmoji}</div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tech-badge text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700 mt-auto">
                    <span className="text-xs text-slate-400">
                      {post.date} · {post.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-primary font-medium group-hover:gap-2 transition-all">
                      Read <FiArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection delay={0.1}>
            <div className="max-w-md mx-auto">
              <div className="card border-dashed border-slate-300 dark:border-slate-600 flex flex-col items-center justify-center py-16 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <FiBookOpen className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Posts coming soon
                </h3>
                <p className="text-sm text-slate-400 dark:text-slate-500 max-w-xs">
                  Add your blog posts to the{" "}
                  <code className="font-mono text-primary text-xs bg-primary/10 px-1.5 py-0.5 rounded">
                    posts
                  </code>{" "}
                  array in this file and they&apos;ll show up here.
                </p>
                <div className="mt-4 w-8 h-8 rounded-full border-2 border-dashed border-slate-300 dark:border-slate-600 flex items-center justify-center">
                  <FiPlus className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
