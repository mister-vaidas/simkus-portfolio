import Container from "@/components/layout/Container";
import Link from "next/link";
import Image from "next/image";

export default function EmpexProjectPage() {
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

        {/* Hero / header */}
        <header className="grid gap-8 lg:grid-cols-[3fr,2fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-emerald-300/90">
              Case study · Empex Digital
            </p>

            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Empex Digital – Web Agency Platform
            </h1>

            <p className="text-[12px] uppercase tracking-[0.18em] text-slate-400">
              Full-stack Developer · 2024 – Ongoing
            </p>

            <p className="max-w-xl text-sm text-slate-300">
              Empex Digital is my own agency platform, built to offer modern web
              design, cloud hosting, and AI-powered services. The goal was to
              create a fast, professional experience that feels like a real
              product—not just a simple portfolio site.
            </p>

            <div className="flex flex-wrap gap-3 pt-1 text-xs">
              <a
                href="https://www.empex.co.uk"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-200 transition hover:border-emerald-400 hover:text-emerald-200"
              >
                Visit live website
                <span className="text-[13px] translate-y-[1px]">↗</span>
              </a>

              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300 transition hover:border-sky-400 hover:text-sky-200"
              >
                Jump to overview
              </a>
            </div>
          </div>

          <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-[0_18px_40px_rgba(15,23,42,0.85)] sm:h-56 lg:h-64">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25)_0,_transparent_55%)] opacity-70" />
            <Image
              src="https://vaidas-public-data.s3.eu-west-2.amazonaws.com/personal-website/projects/empex-digital/empex-hero.png"
              alt="Preview of the Empex Digital website"
              fill
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
            <div className="pointer-events-none absolute left-4 bottom-4 rounded-full border border-emerald-400/40 bg-slate-900/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-200">
              Multi-service agency platform
            </div>
          </div>
        </header>

        {/* Main content layout */}
        <div className="grid gap-10 lg:grid-cols-[2fr,1.2fr]">
          {/* Left: narrative / case study content */}
          <div className="space-y-8 text-sm text-slate-300">
            {/* Overview */}
            <section id="overview" className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Project overview
              </h2>
              <p>
                Empex Digital needed to do more than just introduce me—it needed
                to function as a real agency platform. That means clearly
                presenting services, showing credibility, and making it easy for
                potential clients to book consultations or request specific
                services like cloud hosting or AI integrations.
              </p>
              <p>
                The website also acts as a foundation for future products:
                pay-monthly e-commerce plans, managed cloud hosting, and AI
                solutions that can be rolled out to clients with minimal
                overhead.
              </p>
            </section>

            {/* Goals & success criteria */}
            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Goals & success criteria
              </h2>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <span className="text-emerald-300">•</span> Present Empex as a
                  professional, trustworthy digital agency focused on modern web
                  tech and cloud solutions.
                </li>
                <li>
                  <span className="text-emerald-300">•</span> Make it easy for
                  visitors to explore services and book a consultation or
                  enquire about specific solutions.
                </li>
                <li>
                  <span className="text-emerald-300">•</span> Build on a tech
                  stack that is easy to extend with new features like a blog,
                  client dashboards, and hosting management tools.
                </li>
              </ul>
            </section>

            {/* Key features */}
            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Key features
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Services & offerings
                  </p>
                  <p className="mt-2 text-[13px] text-slate-300">
                    Structured service pages for web design, cloud hosting, AI
                    integration, SEO, and support, all with consistent design
                    and copy.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Booking & enquiries
                  </p>
                  <p className="mt-2 text-[13px] text-slate-300">
                    A guided flow for visitors to schedule a consultation and
                    provide context about their business, budget, and goals.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Future-ready
                  </p>
                  <p className="mt-2 text-[13px] text-slate-300">
                    Architecture and design prepared for future modules like a
                    blog, knowledge base, and client dashboard.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Brand consistency
                  </p>
                  <p className="mt-2 text-[13px] text-slate-300">
                    A cohesive visual language across hero sections, service
                    cards, call-to-actions, and dark-mode friendly UI.
                  </p>
                </div>
              </div>
            </section>

            {/* Implementation details */}
            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Implementation details
              </h2>
              <p>
                The website is built using a modern React-based stack with a
                focus on performance, reusability, and clean structure. Layout
                and design patterns are componentised so that new pages or
                services can be added quickly without breaking consistency.
              </p>

              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <span className="text-emerald-300">•</span> Reusable layout
                  components for hero sections, service cards, and CTAs.
                </li>
                <li>
                  <span className="text-emerald-300">•</span> Strong emphasis on
                  mobile-first, responsive design and accessible colour contrast.
                </li>
                <li>
                  <span className="text-emerald-300">•</span> Deployed to cloud
                  infrastructure (AWS) with room to grow into a full SaaS-like
                  platform for hosting and managed services.
                </li>
              </ul>
            </section>

            {/* Results / outcomes */}
            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Results & next steps
              </h2>
              <p>
                Empex Digital now serves as a confident starting point when
                talking to potential clients. It clearly communicates what I
                offer, looks professional on any device, and is built on a stack
                that I&apos;m comfortable evolving.
              </p>
              <p>
                The next steps include expanding the blog, integrating deeper
                automation (AI chatbots, email systems), and building client
                dashboards for managing hosting and ongoing services.
              </p>
            </section>
          </div>

          {/* Right: quick facts / tech / gallery placeholder */}
          <aside className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-[12px] text-slate-200 lg:sticky lg:top-20 h-fit">
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
                  "Node.js",
                  "PostgreSQL",
                  "AWS",
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

            <div className="space-y-2">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                Responsibilities
              </h3>
              <ul className="space-y-1.5 text-[12px] text-slate-300">
                <li>Architecture & technical planning</li>
                <li>UI/UX design and implementation</li>
                <li>Frontend & backend development</li>
                <li>Cloud deployment and DNS/SSL setup</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                Project type
              </h3>
              <p>Personal agency website & platform foundation.</p>
            </div>

            {/* Gallery placeholder – you can wire multiple images here later */}
            <div className="space-y-2">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                Screenshots
              </h3>
              <div className="space-y-3">
                <div className="relative h-28 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                  <Image
                    src="https://vaidas-public-data.s3.eu-west-2.amazonaws.com/personal-website/projects/empex-digital/empex-landing.png"
                    alt="Empex Digital landing page"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-28 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                  <Image
                    src="https://vaidas-public-data.s3.eu-west-2.amazonaws.com/personal-website/projects/empex-digital/empex-services.png"
                    alt="Empex Digital services section"
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
