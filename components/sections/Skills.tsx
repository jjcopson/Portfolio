"use client";

import AnimatedSection from "@/components/AnimatedSection";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML / CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "React.js", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    category: "Backend & Data",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "SQL / Databases", level: 75 },
      { name: "REST APIs", level: 75 },
      { name: "Python", level: 65 },
      { name: "Data Analysis", level: 60 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Linux / CLI", level: 65 },
      { name: "Figma (UI Design)", level: 60 },
    ],
  },
  {
    category: "Domains",
    skills: [
      { name: "Web App Development", level: 85 },
      { name: "Software Engineering", level: 80 },
      { name: "Game Development", level: 55 },
      { name: "AI / Machine Learning", level: 50 },
    ],
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-slate-400 dark:text-slate-500 font-mono text-xs">{level}%</span>
      </div>
      <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="section-container">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="tech-badge mb-4">Tech Stack</span>
            <h2 className="section-title">Skills &amp; Technologies</h2>
            <p className="section-subtitle max-w-lg">
              A growing toolkit built through coursework, projects, and real-world experience.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <AnimatedSection key={cat.category}>
              <div className="card h-full">
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-5">
                  {cat.category}
                </h3>
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
