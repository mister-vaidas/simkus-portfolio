import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import { projects } from "@/lib/data/projects";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="bg-slate-950 pb-16 pt-10 text-slate-100">
      <Container className="space-y-10">
        {/* Breadcrumb / back link */}
        <div className="text-[11px] text-slate-400">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-slate-400 transition hover:text-sky-300"
          >
            <span className="text-[13px] translate-y-[1px]">←</span>
            Back to projects
          </Link>
        </div>

        {/* Header */}
        <header className="space-y-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-emerald-300/90">
            Case study
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {project.title}
          </h1>
          <p className="text-[12px] uppercase tracking-[0.18em] text-slate-400">
            {project.role} · {project.timeframe}
          </p>
          <p className="max-w-2xl text-sm text-slate-300">
            {project.summary}
          </p>

          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-1 text-xs">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-200 transition hover:border-emerald-400 hover:text-emerald-200"
                >
                  {link.label}
                  <span className="text-[13px] translate-y-[1px]">↗</span>
                </a>
              ))}
            </div>
          )}
        </header>

        {/* Body */}
        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <section className="space-y-4 text-sm text-slate-300">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
              Overview
            </h2>
            <p>
              Here you can add a more detailed breakdown of the project: the
              problem it solves, the target users, and the business or personal
              goals behind it. We can expand this section later with real case
              study content.
            </p>
            <p>
              For now, this page structure is ready for you to describe your
              role in more depth, outline technical decisions, and highlight
              specific challenges you solved.
            </p>
          </section>

          <aside className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-[12px] text-slate-200">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
              Tech stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 text-[11px] text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-3">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                Role
              </h3>
              <p className="mt-1 text-[12px] text-slate-300">
                {project.role}
              </p>
            </div>

            <div className="pt-3">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                Timeframe
              </h3>
              <p className="mt-1 text-[12px] text-slate-300">
                {project.timeframe}
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
