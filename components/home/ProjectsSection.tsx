"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { projects } from "@/lib/data/projects";

export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden border-b border-slate-800/60 bg-slate-950 py-14 sm:py-16"
    >
      {/* Background visuals */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-48 w-48 rounded-full bg-emerald-500/15 blur-3xl animate-pulse" />
        <div className="absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-sky-500/20 blur-3xl animate-[pulse_13s_ease-in-out_infinite]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:70px_70px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.18)_0,_transparent_55%)] opacity-70" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ amount: 0.5, once: false }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full"
      >
        <Container className="space-y-8">
          {/* Header */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-emerald-300/90">
                Selected work
              </p>
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                Projects & case studies
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300">
                A snapshot of the projects I&apos;ve worked on recently – from
                agency platforms and e-commerce to custom service sites hosted
                on AWS.
              </p>
            </div>

            <Link
              href="/projects"
              className="mt-2 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300 transition hover:border-emerald-400 hover:text-emerald-200"
            >
              View all projects
              <span className="text-[13px] translate-y-[1px]">↗</span>
            </Link>
          </div>

          {/* Featured projects grid */}
          <div className="grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ amount: 0.4, once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                className="
                  group relative overflow-hidden rounded-2xl border border-slate-800/80
                  bg-slate-900/70 p-4 sm:p-5
                  shadow-[0_18px_40px_rgba(15,23,42,0.85)]
                  transition
                  hover:-translate-y-1 hover:border-emerald-400/70 hover:bg-slate-900
                "
              >
                {/* Accent bar */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-sky-400 to-cyan-300 opacity-70" />

                <div className="mt-2 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-50 sm:text-[15px]">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                      {project.role} · {project.timeframe}
                    </p>
                  </div>

                  <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-200">
                    Live
                  </span>
                </div>

                <p className="mt-3 text-[12px] leading-relaxed text-slate-300">
                  {project.summary}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1 text-[10px] text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1 text-[10px] text-slate-400">
                      +{project.tech.length - 5} more
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sky-300 transition hover:text-sky-200"
                  >
                    View case study
                    <span className="text-[13px] translate-y-[1px]">
                      ↗
                    </span>
                  </Link>

                  {project.links && project.links[0] && (
                    <a
                      href={project.links[0].href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-300 transition hover:text-emerald-300"
                    >
                      Live demo
                      <span className="text-[13px] translate-y-[1px]">
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
