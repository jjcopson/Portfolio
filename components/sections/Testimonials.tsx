"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { FiMessageSquare, FiPlus } from "react-icons/fi";

// ── ADD TESTIMONIALS HERE ────────────────────────────────────────────
const testimonials: {
  name: string;
  role: string;
  company: string;
  message: string;
  avatar?: string; // initials fallback if no image
}[] = [
  // Example:
  // {
  //   name: "Kwame Asante",
  //   role: "Senior Developer",
  //   company: "TechCorp Ghana",
  //   message: "Jeffrey is one of the most dedicated engineers I've worked with. His attention to detail and drive to learn make him stand out.",
  //   avatar: "KA",
  // },
];
// ────────────────────────────────────────────────────────────────────

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="section-container">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="tech-badge mb-4">Social Proof</span>
            <h2 className="section-title">Testimonials</h2>
            <p className="section-subtitle max-w-lg">
              What colleagues, mentors, and collaborators say.
            </p>
          </div>
        </AnimatedSection>

        {testimonials.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="card h-full flex flex-col group hover:border-primary/40 hover:-translate-y-1">
                  {/* Quote icon */}
                  <div className="text-4xl text-primary/20 font-serif leading-none mb-3 select-none">
                    &ldquo;
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1 mb-5">
                    {t.message}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {t.avatar ?? t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {t.name}
                      </p>
                      <p className="text-xs text-slate-400">
                        {t.role} · {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection delay={0.1}>
            <div className="max-w-md mx-auto">
              <div className="card border-dashed border-slate-300 dark:border-slate-600 flex flex-col items-center justify-center py-16 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <FiMessageSquare className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Testimonials coming soon
                </h3>
                <p className="text-sm text-slate-400 dark:text-slate-500 max-w-xs">
                  Add testimonials to the{" "}
                  <code className="font-mono text-primary text-xs bg-primary/10 px-1.5 py-0.5 rounded">
                    testimonials
                  </code>{" "}
                  array in this file and they&apos;ll appear here.
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
