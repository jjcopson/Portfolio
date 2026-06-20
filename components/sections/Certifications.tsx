"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { FiAward, FiPlus, FiExternalLink } from "react-icons/fi";

// ── ADD YOUR CERTIFICATIONS HERE ────────────────────────────────────
const certifications: {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badge?: string; // emoji or icon letter
}[] = [
  // Example — replace or add below:
  // {
  //   title: "Google IT Support Professional Certificate",
  //   issuer: "Google / Coursera",
  //   date: "2024",
  //   credentialUrl: "https://coursera.org/...",
  //   badge: "G",
  // },
];
// ────────────────────────────────────────────────────────────────────

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="section-container">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="tech-badge mb-4">Credentials</span>
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle max-w-lg">
              Verified achievements and courses that sharpen my craft.
            </p>
          </div>
        </AnimatedSection>

        {certifications.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <AnimatedSection key={cert.title} delay={i * 0.1}>
                <div className="card group hover:border-primary/40 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 text-white font-bold text-lg shadow-lg">
                      {cert.badge ?? <FiAward className="w-6 h-6" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm leading-snug mb-1 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-primary font-semibold mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-slate-400">{cert.date}</p>
                    </div>
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center gap-1.5 text-xs text-slate-400 hover:text-primary transition-colors"
                    >
                      <FiExternalLink className="w-3.5 h-3.5" />
                      View Credential
                    </a>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          /* Empty state */
          <AnimatedSection delay={0.1}>
            <div className="max-w-md mx-auto">
              <div className="card border-dashed border-slate-300 dark:border-slate-600 flex flex-col items-center justify-center py-16 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <FiAward className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Certifications coming soon
                </h3>
                <p className="text-sm text-slate-400 dark:text-slate-500 max-w-xs">
                  Add your certifications to the{" "}
                  <code className="font-mono text-primary text-xs bg-primary/10 px-1.5 py-0.5 rounded">
                    certifications
                  </code>{" "}
                  array in this file and they&apos;ll appear here instantly.
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
