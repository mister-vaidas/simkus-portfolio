import Container from "@/components/layout/Container";
import Link from "next/link";
import Image from "next/image";

export default function ZzbMotiveProjectPage() {
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
              Case study · ZZB Motive
            </p>

            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              ZZB Motive – Automotive Services Platform
            </h1>

            <p className="text-[12px] uppercase tracking-[0.18em] text-slate-400">
              Full-stack Developer · 2024
            </p>

            <p className="max-w-xl text-sm text-slate-300">
              ZZB Motive is a Peterborough-based automotive services business
              specialising in diagnostics, ECU tuning, key programming and 
              mechanical services. The goal was to create a modern, 
              professional website that reflects the technical nature of the 
              business while making it easy for customers to request quotes 
              and browse services.
            </p>

            {/* LIVE link */}
            <div className="flex flex-wrap gap-3 pt-1 text-xs">
              <a
                href="https://zzbmotive.com"
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

          {/* HERO IMAGE */}
          <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-[0_18px_40px_rgba(15,23,42,0.85)] sm:h-56 lg:h-64">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25)_0,_transparent_55%)] opacity-70" />

            <Image
              src="https://vaidas-public-data.s3.eu-west-2.amazonaws.com/personal-website/projects/zzb-motive-hero/zzb-hero.png"
              alt="ZZB Motive project preview"
              fill
              className="object-cover"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
            <div className="pointer-events-none absolute left-4 bottom-4 rounded-full border border-sky-400/40 bg-slate-900/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-200">
              Automotive service platform
            </div>
          </div>

        </header>

        {/* MAIN CONTENT */}
        <div className="grid gap-10 lg:grid-cols-[2fr,1.2fr]">

          {/* LEFT COLUMN */}
          <div className="space-y-8 text-sm text-slate-300">

            {/* Overview */}
            <section id="overview" className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Project overview
              </h2>

              <p>
                ZZB Motive needed a professional online presence that reflects 
                the quality and technical nature of their services. The site 
                needed to clearly present automotive offerings such as ECU 
                tuning, diagnostics, key programming, and electrical repairs.
              </p>
              <p>
                The website is built around clarity, fast navigation, and easy 
                access to quote forms, helping customers contact the business 
                quickly from both desktop and mobile devices.
              </p>
            </section>

            {/* Goals */}
            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Goals & success criteria
              </h2>

              <ul className="space-y-2">
                <li><span className="text-sky-300">•</span> Present services in a clean, structured format.</li>
                <li><span className="text-sky-300">•</span> Optimise for mobile because many customers arrive via Google Maps or social media.</li>
                <li><span className="text-sky-300">•</span> A fast quote form system to reduce drop-off.</li>
                <li><span className="text-sky-300">•</span> SEO foundation for long-term growth.</li>
              </ul>
            </section>

            {/* UX Structure */}
            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Structure & UX design
              </h2>

              <p>The site is structured around the services customers search for:</p>

              <ul className="space-y-2">
                <li><span className="text-sky-300">•</span> ECU tuning</li>
                <li><span className="text-sky-300">•</span> Diagnostics & electrical faults</li>
                <li><span className="text-sky-300">•</span> Key programming & immobiliser issues</li>
                <li><span className="text-sky-300">•</span> Mechanical services</li>
                <li><span className="text-sky-300">•</span> Airbag / ABS / DPF faults</li>
              </ul>

              <p>
                Each service has its own section with explanation, examples, and 
                a direct path to request a quote.
              </p>
            </section>

            {/* Technical section */}
            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Technical implementation
              </h2>

              <p>This was a full-stack project involving:</p>

              <ul className="space-y-2 text-sm">
                <li><span className="text-sky-300">•</span> Custom UI built with Next.js + Tailwind</li>
                <li><span className="text-sky-300">•</span> Quote form stored in PostgreSQL</li>
                <li><span className="text-sky-300">•</span> Email notifications for business + customer confirmation</li>
                <li><span className="text-sky-300">•</span> Fully hosted on AWS EC2</li>
                <li><span className="text-sky-300">•</span> File assets served from AWS S3</li>
                <li><span className="text-sky-300">•</span> NGINX reverse proxy with SSL automation</li>
              </ul>
            </section>

            {/* Results */}
            <section className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                Results & impact
              </h2>

              <p>
                ZZB Motive now has a clean, professional website built on a 
                scalable infrastructure. Customers can quickly understand what 
                the business offers and send quote requests directly from their 
                phone.
              </p>
              <p>
                The owner now uses the site as a central platform for customers 
                coming from Facebook, WhatsApp, Google Maps, and offline 
                referrals.
              </p>
            </section>

          </div>

          {/* RIGHT COLUMN */}
          <aside className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-[12px] text-slate-200 lg:sticky lg:top-20 h-fit">
            
            {/* Tech */}
            <div className="space-y-2">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                Tech stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {["React", "Next.js", "TypeScript", "Tailwind", "PostgreSQL", "AWS EC2", "AWS S3", "NGINX"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 text-[11px]"
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
                <li>Frontend & backend development</li>
                <li>Infrastructure setup on AWS</li>
                <li>SSL + domain configuration</li>
                <li>PostgreSQL database design</li>
                <li>Quote system integration</li>
              </ul>
            </div>

            {/* Gallery */}
            <div className="space-y-2">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                Screenshots
              </h3>

              <div className="space-y-3">
                <div className="relative h-28 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                  <Image
                    src="https://vaidas-public-data.s3.eu-west-2.amazonaws.com/personal-website/projects/zzb-motive-hero/zzb-landing.png"
                    alt="ZZB Motive landing page"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative h-28 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                  <Image
                    src="https://vaidas-public-data.s3.eu-west-2.amazonaws.com/personal-website/projects/zzb-motive-hero/zzb-services.png"
                    alt="ZZB Motive services section"
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
