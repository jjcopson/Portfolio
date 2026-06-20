"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { FiGithub, FiExternalLink, FiPlus } from "react-icons/fi";

// ── ADD YOUR PROJECTS HERE ──────────────────────────────────────────
const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce platform built as a first-year group project at KNUST. Includes product listings, cart functionality, and a SQL-backed database. I served as co-leader and handled architecture and integration.",
    tags: ["HTML", "CSS", "JavaScript", "SQL"],
    github: "https://github.com/jjcopson5",
    demo: "",
    featured: true,
  },
  // ── Paste more projects below in the same format ──
  // {
  //   title: "Project Name",
  //   description: "Short description of what the project does.",
  //   tags: ["React", "Node.js", "MongoDB"],
  //   github: "https://github.com/...",
  //   demo: "https://...",
  //   featured: false,
  // },
];
// ────────────────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="section-container">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="tech-badge mb-4">Portfolio</span>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle max-w-lg">
              Things I&apos;ve built. More coming soon — drop a project in the code to add it instantly.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <div className="card h-full flex flex-col group hover:border-primary/40 hover:-translate-y-1">
                {project.featured && (
                  <span className="inline-block text-[10px] font-bold tracking-wider text-primary uppercase mb-3">
                    ⭐ Featured
                  </span>
                )}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-badge text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 mt-auto pt-3 border-t border-slate-100 dark:border-slate-700">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-primary transition-colors"
                    >
                      <FiGithub className="w-4 h-4" /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-primary transition-colors"
                    >
                      <FiExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* Empty placeholder card */}
          <AnimatedSection delay={projects.length * 0.1}>
            <div className="card h-full flex flex-col items-center justify-center border-dashed border-slate-300 dark:border-slate-600 hover:border-primary/50 transition-colors min-h-[200px] group cursor-default">
              <div className="w-10 h-10 rounded-full border-2 border-dashed border-slate-300 dark:border-slate-600 group-hover:border-primary flex items-center justify-center mb-3 transition-colors">
                <FiPlus className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-slate-400 dark:text-slate-500 text-center">
                More projects coming soon
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
