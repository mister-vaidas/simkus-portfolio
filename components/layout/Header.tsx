"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./Container";

const navItems = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#social" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-xl border border-sky-400/40 bg-gradient-to-br from-sky-500/20 via-slate-900 to-purple-500/40 shadow-[0_0_24px_rgba(56,189,248,0.45)]">
            <span className="text-xs font-semibold text-sky-100 tracking-tight">
              &lt;/&gt;
            </span>
            <span className="pointer-events-none absolute inset-0 rounded-xl border border-sky-400/20 opacity-70 blur-[2px]" />
          </span>

          <div className="flex flex-col leading-tight">
            <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-300 bg-clip-text text-sm font-semibold uppercase tracking-[0.22em] text-transparent">
              VAIDAS SIMKUS
            </span>
            <span className="text-[11px] text-slate-400">
              Full Stack Engineer
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300 transition-colors hover:text-sky-200"
            >
              <span>{item.label}</span>
              <span className="pointer-events-none absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-sky-400 to-cyan-300 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/80 text-slate-200 shadow-sm shadow-slate-900/80 sm:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-4 rounded-full bg-slate-200 transition-transform duration-200 ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4 rounded-full bg-slate-400 transition-opacity duration-150 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-4 rounded-full bg-slate-200 transition-transform duration-200 ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      {/* Mobile nav dropdown */}
      {open && (
        <div className="border-t border-slate-800/70 bg-slate-950/95 sm:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-200 transition-colors hover:bg-slate-900 hover:text-sky-200"
              >
                {item.label}
              </a>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
