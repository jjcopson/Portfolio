"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck } from "react-icons/fi";

const contactLinks = [
  {
    icon: FiMail,
    label: "Email",
    value: "jeffreyjonescopson@gmail.com",
    href: "mailto:jeffreyjonescopson@gmail.com",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/jjcopson5",
    href: "https://github.com/jjcopson5",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "jeffery-copson",
    href: "https://www.linkedin.com/in/jeffery-copson-5a794b373/",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((res) => setTimeout(res, 1200));
    setSending(false);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="section-container">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="tech-badge mb-4">Get In Touch</span>
            <h2 className="section-title">Contact Me</h2>
            <p className="section-subtitle max-w-lg">
              Open to internships, freelance projects, collaborations, or just a good conversation about tech.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I&apos;m always open to new opportunities and interesting conversations. Whether you have a
                project in mind, a question, or just want to connect — feel free to reach out.
              </p>
              <div className="space-y-4">
                {contactLinks.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 card hover:border-primary/40 hover:-translate-y-0.5 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-0.5">{label}</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="card space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Full Name
                </label>
                <input
                  id="name" name="name" type="text" required
                  value={form.name} onChange={handleChange} placeholder="Your name"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Address
                </label>
                <input
                  id="email" name="email" type="email" required
                  value={form.email} onChange={handleChange} placeholder="you@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message" name="message" rows={5} required
                  value={form.message} onChange={handleChange} placeholder="What's on your mind?"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending || submitted}
                className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitted ? (
                  <span className="flex items-center gap-2"><FiCheck className="w-4 h-4" /> Message Sent!</span>
                ) : sending ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending…
                  </span>
                ) : (
                  <span className="flex items-center gap-2"><FiSend className="w-4 h-4" /> Send Message</span>
                )}
              </button>
              <p className="text-xs text-slate-400 text-center">I typically respond within 24–48 hours.</p>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
