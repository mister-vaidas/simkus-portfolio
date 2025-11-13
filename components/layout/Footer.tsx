import Container from "./Container";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/95">
      <Container className="py-8 text-xs text-slate-400">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Brand / intro */}
          <div className="max-w-sm space-y-3">
            <div className="flex items-center gap-3">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/40 bg-gradient-to-br from-sky-500/20 via-slate-900 to-purple-500/40 shadow-[0_0_22px_rgba(56,189,248,0.45)]">
                <span className="text-xs font-semibold text-sky-100 tracking-tight">
                  &lt;/&gt;
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-xl border border-sky-400/25 opacity-70 blur-[2px]" />
              </span>

              <div className="leading-tight">
                <p className="bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-300 bg-clip-text text-sm font-semibold uppercase tracking-[0.22em] text-transparent">
                  Vaidas Simkus
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  Full Stack Engineer
                </p>
              </div>
            </div>

            <p className="text-[11px] leading-relaxed text-slate-400">
              Building modern, fast, and reliable web experiences with a focus
              on clean UX, solid engineering, and scalable cloud hosting.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                React &amp; Next.js
              </span>
              <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                TypeScript · Tailwind
              </span>
              <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                AWS · DevOps
              </span>
            </div>
          </div>

          {/* Quick links & info */}
          <div className="grid gap-6 text-[11px] sm:grid-cols-2 md:grid-cols-3">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                Quick links
              </p>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#hero"
                    className="text-slate-400 transition hover:text-sky-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-slate-400 transition hover:text-sky-300"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-slate-400 transition hover:text-sky-300"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#social"
                    className="text-slate-400 transition hover:text-sky-300"
                  >
                    Social &amp; Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                Focus areas
              </p>
              <ul className="space-y-1">
                <li>Full-stack web development</li>
                <li>Cloud hosting &amp; deployment</li>
                <li>Automation &amp; tooling</li>
                <li>Performance &amp; UX</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                Status
              </p>
              <p>Currently open to opportunities in web and cloud engineering roles.</p>

              <p className="mt-2 text-[11px] text-slate-500">
                Built with Next.js &amp; Tailwind CSS.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center gap-3 border-t border-slate-800/70 pt-4 text-[11px] text-slate-500 sm:flex-row sm:justify-between">
          <p>© {year} Vaidas Simkus. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="hidden text-[11px] text-slate-500 sm:inline">
              Connect:
            </span>
            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/mister-vaidas"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 bg-slate-900/80 p-1.5 text-slate-300 transition hover:border-sky-400 hover:text-sky-300"
              >
                <FaGithub className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/vaidas-simkus-7b950a67/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 bg-slate-900/80 p-1.5 text-slate-300 transition hover:border-sky-400 hover:text-sky-300"
              >
                <FaLinkedin className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="https://x.com/mistersmk"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 bg-slate-900/80 p-1.5 text-slate-300 transition hover:border-sky-400 hover:text-sky-300"
              >
                <FaXTwitter className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
