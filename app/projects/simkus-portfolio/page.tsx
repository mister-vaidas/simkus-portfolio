import Container from "@/components/layout/Container";
import Link from "next/link";
import Image from "next/image";

export default function SimkusPortfolioProjectPage() {
  return (
    <div className="bg-slate-950 pb-16 pt-10 text-slate-100">
      <Container className="space-y-10">
        {/* Breadcrumb */}
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
        <header className="grid gap-8 lg:grid-cols-[3fr,2fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-emerald-300/90">
              Case study · simkus.co.uk
            </p>

            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              simkus.co.uk – Personal Portfolio & Tech Resume
            </h1>

            <p className="text-[12px] uppercase tracking-[0.18em] text-slate-400">
              Full-stack Developer · 2025
            </p>

            <p className="max-w-xl text-sm text-slate-300">
              This website is my personal portfolio and digital CV. It&apos;s
              designed to show not just what I&apos;ve done, but how I think
              about building modern interfaces: smooth section transitions,
              interactive hero, skills visualisation, and a tech-focused layout
              that still feels clean and professional.
            </p>

            <div className="flex flex-wrap gap-3 pt-1 text-xs">
              {/* Update URL when domain is live, e.g. https://simkus.co.uk */}
              {/* <a
                href="https://simkus.co.uk"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-200 transition hover:border-emerald-400 hover:text-emerald-200"
              >
                Visit live website
                <span className="text-[13px] translate-y-[1px]">↗</span>
              </a> */}

              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300 transition hover:border-sky-400 hover:text-sky-200"
              >
                Jump to overview
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-[0_18px_40px_rgba(15,23,42,0.85)] sm:h-56 lg:h-64">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3)_0,_transparent_55%)] opacity-70" />
            <Image
              src="https://vaidas-public-data.s3.eu-west-2.amazonaws.com/personal-website/projects/simkus-portfolio/simkus-hero.png"
              alt="Screenshot of simkus.co.uk portfolio hero section"
              fill
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
            <div className="pointer-events-none absolute left-4 bottom-4 rounded-full border border-sky-400/40 bg-slate-900/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-200">
              Interactive, section-based layout
            </div>
          </div>
        </header>

        {/* Main content */}
        <div className="grid gap-10 lg:grid-cols-[2fr,1.2fr]">
          {/* Left: narrative */}
          <div className="space-y-8 text-sm text-slate-300">
            {/* Overview */}
            <section id="overview" className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Project overview
              </h2>
              <p>
                The goal of this portfolio was to build something that actually
                feels like the kind of work I want to do: clean, performant,
                modern, and clearly structured. It&apos;s not just a static CV
                page—it uses motion, layout, and content structure to guide the
                viewer through who I am, what I know, and what I&apos;ve built.
              </p>
              <p>
                It&apos;s designed with hiring managers, tech leads, and
                potential clients in mind: fast to scan, easy to dig deeper into
                projects, and aligned with the modern React + cloud stack I like
                working with.
              </p>
            </section>

            {/* Goals */}
            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Goals & success criteria
              </h2>
              <ul className="space-y-2">
                <li>
                  <span className="text-emerald-300">•</span> Present a
                  professional, focused profile that reflects real-world
                  projects and experience—not just a list of buzzwords.
                </li>
                <li>
                  <span className="text-emerald-300">•</span> Create an
                  experience that feels modern and tech-oriented without being
                  overwhelming or gimmicky.
                </li>
                <li>
                  <span className="text-emerald-300">•</span> Make the site easy
                  to extend with more projects, a blog, or additional sections
                  later.
                </li>
              </ul>
            </section>

            {/* UX & layout */}
            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Layout & user experience
              </h2>
              <p>
                The homepage is structured into full-height sections so each
                part of the story gets its own space:
              </p>
              <ul className="space-y-2">
                <li>
                  <span className="text-emerald-300">•</span> Hero section with
                  large profile picture, short intro, and clear CTAs.
                </li>
                <li>
                  <span className="text-emerald-300">•</span> Skills section
                  using interactive flip-cards to show both stack and how I use
                  each technology.
                </li>
                <li>
                  <span className="text-emerald-300">•</span> Projects section
                  highlighting key case studies with quick access to deeper
                  project pages.
                </li>
                <li>
                  <span className="text-emerald-300">•</span> Social section
                  with clear links to my online presence.
                </li>
              </ul>
              <p>
                On mobile, the layout is carefully adapted so it stays readable
                and interactive without feeling cramped.
              </p>
            </section>

            {/* Motion & visuals */}
            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Motion & visual design
              </h2>
              <p>
                Motion is used to support the content, not distract from it.
                Sections fade and scale into view as the user scrolls, giving a
                sense of progression through different parts of the page.
              </p>
              <ul className="space-y-2">
                <li>
                  <span className="text-emerald-300">•</span> Smooth
                  section-based transitions using Framer Motion.
                </li>
                <li>
                  <span className="text-emerald-300">•</span> Subtle background
                  grids, gradient blobs, and floating tech keywords (React,
                  Next.js, AWS, etc.) in the hero.
                </li>
                <li>
                  <span className="text-emerald-300">•</span> A small
                  particle-trail effect that follows the mouse on desktop for a
                  fun but controlled tech vibe.
                </li>
              </ul>
            </section>

            {/* Implementation details */}
            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Implementation details
              </h2>
              <p>
                The portfolio is built with a modern React stack and a clear
                component structure so it&apos;s easy to maintain and extend.
              </p>
              <ul className="space-y-2">
                <li>
                  <span className="text-emerald-300">•</span> Next.js App
                  Router structure with reusable layout components.
                </li>
                <li>
                  <span className="text-emerald-300">•</span> Tailwind CSS for
                  rapid, consistent styling and good dark-mode contrast.
                </li>
                <li>
                  <span className="text-emerald-300">•</span> Framer Motion for
                  scroll-based section animations and interactive elements.
                </li>
                <li>
                  <span className="text-emerald-300">•</span> Data-driven
                  sections (e.g. projects loaded from a central data file) so
                  adding new work doesn&apos;t require touching layout code.
                </li>
              </ul>
            </section>

            {/* Future plans */}
            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Future improvements
              </h2>
              <p>
                This site is meant to evolve with my skills and projects. A few
                planned additions include:
              </p>
              <ul className="space-y-2">
                <li>
                  <span className="text-emerald-300">•</span> A small blog or
                  notes section focused on web, cloud, and automation topics.
                </li>
                <li>
                  <span className="text-emerald-300">•</span> A dedicated
                  contact page with email form and backend integration.
                </li>
                <li>
                  <span className="text-emerald-300">•</span> More detailed case
                  studies, including diagrams and deeper technical breakdowns.
                </li>
              </ul>
            </section>
          </div>

          {/* Right: aside */}
          <aside className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-[12px] text-slate-200 lg:sticky lg:top-20 h-fit">
            {/* Tech stack */}
            <div className="space-y-2">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                Tech stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                  "React Icons",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 text-[11px] text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-2">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                Responsibilities
              </h3>
              <ul className="space-y-1.5">
                <li>Concept & UX design</li>
                <li>Visual design & layout</li>
                <li>Frontend implementation</li>
                <li>Animation & interaction design</li>
              </ul>
            </div>

            {/* Project type */}
            <div className="space-y-2">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                Project type
              </h3>
              <p>Personal portfolio and long-term digital CV.</p>
            </div>

            {/* Screenshots */}
            <div className="space-y-2">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                Screenshots
              </h3>
              <div className="space-y-3">
                <div className="relative h-28 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                  <Image
                    src="https://vaidas-public-data.s3.eu-west-2.amazonaws.com/personal-website/projects/simkus-portfolio/simkus-landing.png"
                    alt="Hero section of simkus.co.uk"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-28 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                  <Image
                    src="https://vaidas-public-data.s3.eu-west-2.amazonaws.com/personal-website/projects/simkus-portfolio/simkus-skills.png"
                    alt="Skills section of simkus.co.uk"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
