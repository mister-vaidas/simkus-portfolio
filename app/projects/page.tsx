import Container from "@/components/layout/Container";
import Link from "next/link";
import { projects } from "@/lib/data/projects";

export default function ProjectsPage() {
  return (
    <div className="bg-slate-950 pb-16 pt-10 text-slate-100">
      <Container className="space-y-8">
        <header className="space-y-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-emerald-300/90">
            Projects
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Project showcase & case studies
          </h1>
          <p className="max-w-2xl text-sm text-slate-300">
            A closer look at the projects I&apos;ve worked on. Each one focuses
            on solving real problems with clean, modern web and cloud
            solutions.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4 sm:p-5 shadow-[0_18px_40px_rgba(15,23,42,0.85)] transition hover:-translate-y-1 hover:border-emerald-400/70 hover:bg-slate-900"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-sky-400 to-cyan-300 opacity-70" />

              <div className="mt-2 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-sm font-semibold text-slate-50 sm:text-[15px]">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    {project.role} · {project.timeframe}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-[12px] leading-relaxed text-slate-300">
                {project.summary}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1 text-[10px] text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sky-300 transition hover:text-sky-200"
                >
                  View case study
                  <span className="text-[13px] translate-y-[1px]">↗</span>
                </Link>

                {project.links && project.links[0] && (
                  <a
                    href={project.links[0].href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-300 transition hover:text-emerald-300"
                  >
                    Live demo
                    <span className="text-[13px] translate-y-[1px]">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
