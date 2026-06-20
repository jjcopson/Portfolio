"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";

const workExperience = [
  {
    title: "Software Developer",
    company: "CareerGhana",
    period: "Present",
    type: "work",
    description:
      "Building and maintaining digital platforms that connect Ghanaians with career opportunities. Contributing to full-stack web development using modern technologies.",
    tags: ["Web Development", "Software Engineering", "Full-Stack"],
  },
  {
    title: "CYBIT Club President",
    company: "Presbyterian Boys' Secondary School (PRESEC-LEGON)",
    period: "Senior High",
    type: "work",
    description:
      "Led the Cyber Information Technology (CYBIT) Club, organizing tech workshops, coding sessions, and activities that introduced fellow students to computing and cybersecurity concepts.",
    tags: ["Leadership", "IT", "Cybersecurity", "Community"],
  },
  {
    title: "Co-Leader — E-Commerce Project",
    company: "KNUST (Group Project)",
    period: "Year 1",
    type: "work",
    description:
      "Co-led a team in building a fully functional e-commerce website from scratch as a first-year project. Handled architecture decisions and coordinated front-end and back-end integration.",
    tags: ["HTML", "CSS", "JavaScript", "SQL", "Team Lead"],
  },
];

const education = [
  {
    title: "BSc. Computer Engineering",
    institution: "Kwame Nkrumah University of Science and Technology (KNUST)",
    period: "Current",
    description:
      "Studying core computing, electronics, software engineering, and AI fundamentals at one of Africa's leading technical universities.",
  },
  {
    title: "Science with IT (WASSCE)",
    institution: "Presbyterian Boys' Secondary School (PRESEC-LEGON)",
    period: "Senior High",
    description:
      "Completed science track with Information Technology, developing a strong foundation in both sciences and computing.",
  },
  {
    title: "Junior High School",
    institution: "Martin Luther King Jr. School",
    period: "JHS",
    description: "Built foundational academic skills in a disciplined learning environment.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="tech-badge mb-4">Background</span>
            <h2 className="section-title">Experience & Education</h2>
            <p className="section-subtitle max-w-lg">
              A track record of leadership, learning, and building real things.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work */}
          <div>
            <AnimatedSection delay={0.1}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FiBriefcase className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Work & Leadership
                </h3>
              </div>
            </AnimatedSection>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent" />

              <div className="space-y-8">
                {workExperience.map((item, i) => (
                  <AnimatedSection key={item.title} delay={0.15 + i * 0.1}>
                    <div className="relative pl-12">
                      {/* Dot */}
                      <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-2 border-primary flex items-center justify-center shadow-sm">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                      </div>

                      <div className="card hover:border-primary/30">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                            {item.title}
                          </h4>
                          <span className="text-xs text-primary font-mono bg-primary/10 px-2 py-0.5 rounded-full">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-xs text-primary font-semibold mb-2">
                          {item.company}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span key={tag} className="tech-badge text-[10px]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <AnimatedSection delay={0.1}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                  <FiBookOpen className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Education
                </h3>
              </div>
            </AnimatedSection>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 to-transparent" />

              <div className="space-y-8">
                {education.map((item, i) => (
                  <AnimatedSection key={item.title} delay={0.15 + i * 0.1}>
                    <div className="relative pl-12">
                      <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-2 border-accent flex items-center justify-center shadow-sm">
                        <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                      </div>

                      <div className="card hover:border-accent/30">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                            {item.title}
                          </h4>
                          <span className="text-xs text-accent font-mono bg-accent/10 px-2 py-0.5 rounded-full">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-xs text-accent font-semibold mb-2">
                          {item.institution}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
