import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 dark:text-slate-400 text-sm text-center sm:text-left">
          © {year}{" "}
          <span className="text-primary font-semibold">Jeffrey Jones Copson</span>
          . Built with Next.js & Tailwind CSS.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:jeffreyjonescopson@gmail.com"
            aria-label="Email"
            className="text-slate-400 hover:text-primary transition-colors"
          >
            <FiMail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/jjcopson5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 hover:text-primary transition-colors"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/jeffery-copson-5a794b373/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 hover:text-primary transition-colors"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
