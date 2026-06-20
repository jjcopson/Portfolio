"use client";

import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-lines">
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animate-delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT — text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              Jeffrey Jones{" "}
              <span className="text-gradient">Copson</span>
            </h1>

            {/* Animated roles */}
            <div className="text-xl sm:text-2xl font-semibold text-slate-600 dark:text-slate-300 mb-6 min-h-[2.5rem]">
              {mounted && (
                <TypeAnimation
                  sequence={[
                    "Full-Stack Web Developer",
                    2000,
                    "Software Engineer",
                    2000,
                    "Aspiring AI Expert",
                    2000,
                    "Game & App Developer",
                    2000,
                    "Data Analysis Enthusiast",
                    2000,
                    "Gospel Minister",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-primary"
                />
              )}
            </div>

            {/* Short bio */}
            <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
              Computer Engineering student at KNUST, Ghana. Building robust digital
              solutions at the intersection of software engineering, AI, and
              purposeful innovation.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center lg:justify-start gap-5 mb-8">
              {[
                {
                  href: "mailto:jeffreyjonescopson@gmail.com",
                  icon: FiMail,
                  label: "Email",
                },
                {
                  href: "https://github.com/jjcopson5",
                  icon: FiGithub,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/jeffery-copson-5a794b373/",
                  icon: FiLinkedin,
                  label: "LinkedIn",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary dark:hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Scroll indicator */}
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors"
            >
              <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
              <FiArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>

          {/* RIGHT — profile photo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-surface-dark" />
              </div>
              {/* Photo */}
              <div className="absolute inset-1 rounded-full overflow-hidden border-2 border-primary/30">
                <Image
                  src="/profile.jpg"
                  alt="Jeffrey Jones Copson"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-4 py-1.5 shadow-lg flex items-center gap-2 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Open to work</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
