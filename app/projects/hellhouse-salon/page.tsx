import Container from "@/components/layout/Container";
import Link from "next/link";
import Image from "next/image";

export default function HellhouseProjectPage() {
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
              Case study · Hellhouse Salon
            </p>

            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Hellhouse – Beauty, Tattoo & Salon Website
            </h1>

            <p className="text-[12px] uppercase tracking-[0.18em] text-slate-400">
              Frontend Developer · 2024
            </p>

            <p className="max-w-xl text-sm text-slate-300">
              Hellhouse is a beauty and tattoo salon that needed a bold, modern,
              mobile-first website to showcase multiple services—tattoos,
              lashes, nails, facials—and to present each artist&apos;s work in a
              professional way. The focus was on visuals, clarity, and easy
              navigation between services and portfolios.
            </p>

            <div className="flex flex-wrap gap-3 pt-1 text-xs">
              <a
                href="https://hellhousesalon.co.uk/"
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

          {/* Hero image – you’ll supply this */}
          <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-[0_18px_40px_rgba(15,23,42,0.85)] sm:h-56 lg:h-64">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.35)_0,_transparent_55%)] opacity-70" />
            <Image
              src="https://vaidas-public-data.s3.eu-west-2.amazonaws.com/personal-website/projects/hellhouse-salon/hellhouse-salon-hero.png"
              alt="Preview of the Hellhouse Salon website"
              fill
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
            <div className="pointer-events-none absolute left-4 bottom-4 rounded-full border border-pink-400/40 bg-slate-900/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-200">
              Multi-service salon experience
            </div>
          </div>
        </header>

        {/* Main content layout */}
        <div className="grid gap-10 lg:grid-cols-[2fr,1.2fr]">
          {/* Left column – narrative */}
          <div className="space-y-8 text-sm text-slate-300">
            {/* Overview */}
            <section id="overview" className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Project overview
              </h2>
              <p>
                The previous online presence for Hellhouse didn&apos;t reflect the
                quality of their work or the variety of services they offer.
                They needed a website that feels edgy and artistic for the
                tattoo side, but also clean and premium for lashes, nails, and
                other beauty services.
              </p>
              <p>
                The new site is built around strong visuals, clear structure,
                and easy navigation. Clients can quickly see what each artist
                offers, browse galleries, and decide what they&apos;re interested
                in before contacting the salon.
              </p>
            </section>

            {/* Goals */}
            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Goals & success criteria
              </h2>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <span className="text-pink-300">•</span> Showcase different
                  services (tattoos, lashes, nails, etc.) in a way that is easy
                  to navigate and visually distinct.
                </li>
                <li>
                  <span className="text-pink-300">•</span> Make the website feel
                  like a real brand experience, not just a simple booking page.
                </li>
                <li>
                  <span className="text-pink-300">•</span> Optimise for mobile
                  users, since a large portion of traffic comes from Instagram
                  and other social platforms.
                </li>
              </ul>
            </section>

            {/* Information architecture & UX */}
            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Structure & user experience
              </h2>
              <p>
                The website is split into clear sections and service categories
                so users don&apos;t feel lost:
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <span className="text-pink-300">•</span> Homepage with hero,
                  key services, and quick links into tattoos, lashes, and other
                  categories.
                </li>
                <li>
                  <span className="text-pink-300">•</span> Separate pages or
                  sections for each service area with details, price
                  information, and example work.
                </li>
                <li>
                  <span className="text-pink-300">•</span> Image galleries
                  powered by AWS S3 that load fast and look good on both mobile
                  and desktop.
                </li>
              </ul>
            </section>

            {/* Implementation details */}
            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Implementation details
              </h2>
              <p>
                For Hellhouse, the main focus was on the frontend: building a
                custom, responsive UI that can handle a lot of imagery without
                feeling heavy. Next.js and Tailwind CSS were used to create a
                design system that we can reuse for new sections and services.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <span className="text-pink-300">•</span> Custom layout
                  components for hero sections, service cards, and galleries.
                </li>
                <li>
                  <span className="text-pink-300">•</span> Image assets hosted on
                  AWS S3, integrated with the frontend via optimised URLs.
                </li>
                <li>
                  <span className="text-pink-300">•</span> Strong focus on dark
                  theme aesthetics to match the salon&apos;s visual identity.
                </li>
              </ul>
            </section>

            {/* Results / impact */}
            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Results & next steps
              </h2>
              <p>
                The new Hellhouse website feels like a proper digital home for
                the brand: bold for the tattoo audience but still polished for
                beauty clients. It&apos;s easy to browse services and see real
                work from the artists.
              </p>
              <p>
                Next steps include deeper integration of booking forms, more
                detailed service pages for each artist, and potentially a simple
                admin area to update galleries and prices.
              </p>
            </section>
          </div>

          {/* Right column – quick facts / tech / gallery */}
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
                  "AWS S3",
                  "Design System",
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
                <li>Frontend architecture & layout</li>
                <li>Visual design and component system</li>
                <li>Image integration with AWS S3</li>
                <li>Responsive & mobile-first implementation</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                Project type
              </h3>
              <p>Client project for a beauty & tattoo salon.</p>
            </div>

            {/* Gallery placeholders – hook these up with your real screenshots */}
            <div className="space-y-2">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                Screenshots
              </h3>
              <div className="space-y-3">
                <div className="relative h-28 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                  <Image
                    src="https://vaidas-public-data.s3.eu-west-2.amazonaws.com/personal-website/projects/hellhouse-salon/hellhouse-landing.png"
                    alt="Hellhouse Salon landing page"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-28 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                  <Image
                    src="https://vaidas-public-data.s3.eu-west-2.amazonaws.com/personal-website/projects/hellhouse-salon/hellhouse-services.png"
                    alt="Hellhouse Salon services section"
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
