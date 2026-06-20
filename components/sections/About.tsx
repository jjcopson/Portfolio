"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { FiUser, FiMapPin, FiBriefcase, FiAward } from "react-icons/fi";
import Image from "next/image";

const highlights = [
  {
    icon: FiBriefcase,
    label: "Role",
    value: "Software Developer @ CareerGhana",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "KNUST, Kumasi, Ghana",
  },
  {
    icon: FiUser,
    label: "Degree",
    value: "BSc. Computer Engineering",
  },
  {
    icon: FiAward,
    label: "Leadership",
    value: "CYBIT Club President — PRESEC-LEGON",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="tech-badge mb-4">About Me</span>
            <h2 className="section-title">Who I Am</h2>
            <p className="section-subtitle max-w-xl">
              A passionate builder driven by curiosity, faith, and a love for
              solving real-world problems through technology.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Photo */}
          <AnimatedSection delay={0.1}>
            <div className="flex justify-center">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent p-1">
                  <div className="w-full h-full rounded-2xl bg-slate-100 dark:bg-slate-800" />
                </div>
                <div className="absolute inset-1 rounded-2xl overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Jeffrey Jones Copson"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-5 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                Hi, I&apos;m <strong className="text-slate-900 dark:text-white">Jeffrey Jones Copson</strong> — a
                Software Engineer and Computer Engineering student at the{" "}
                <strong className="text-primary">
                  Kwame Nkrumah University of Science and Technology (KNUST)
                </strong>
                , Ghana.
              </p>
              <p>
                I&apos;m currently working as a Software Developer at{" "}
                <strong className="text-primary">CareerGhana</strong>, where I
                contribute to building digital tools that connect Ghanaians with
                career opportunities.
              </p>
              <p>
                My academic journey started at{" "}
                <strong className="text-slate-900 dark:text-white">
                  Martin Luther King Jr. School (JHS)
                </strong>
                , then to{" "}
                <strong className="text-slate-900 dark:text-white">
                  PRESEC-LEGON
                </strong>{" "}
                where I studied Science with IT and served as President of the{" "}
                <strong className="text-primary">
                  Cyber Information Technology (CYBIT) Club
                </strong>
                .
              </p>
              <p>
                Beyond engineering, I&apos;m a Gospel Minister, a data analysis
                enthusiast, and deeply passionate about AI and game development.
                I believe technology, when wielded with purpose, has the power
                to transform lives.
              </p>
            </div>
          </AnimatedSection>

          {/* Highlights grid */}
          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="card group hover:border-primary/30 hover:glow-border"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">
                        {label}
                      </p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                        {value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
