import Image from "next/image";
import Container from "@/components/layout/Container";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-slate-800/60 bg-slate-950"
    >
      {/* Background tech visuals */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient blob */}
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl animate-pulse" />
        <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.3)_0,_transparent_55%),linear-gradient(to_bottom,_rgba(15,23,42,0.9),_#020617)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <Container
        className="
          relative 
          flex 
          min-h-[calc(100vh-4rem)] 
          flex-col 
          items-center 
          gap-10 
          py-12 
          sm:min-h-[calc(100vh-5rem)] 
          sm:flex-row 
          sm:items-center 
          sm:py-16
        "
      >
        {/* Text side */}
        <div className="z-10 flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-900/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-emerald-200/90 shadow-sm shadow-emerald-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to opportunities</span>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-sky-300/90">
              Web · Cloud · Automation
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Hi, I&apos;m <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">Vaidas</span>.
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-[15px]">
              I&apos;m a web and software developer focused on building modern, fast, and
              reliable digital experiences. I enjoy working with React, Next.js, and
              cloud technologies to turn ideas into well-crafted products.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 text-xs sm:text-[13px]">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-sky-400/70 bg-sky-500/15 px-5 py-2.5 font-medium text-sky-50 shadow-[0_0_25px_rgba(56,189,248,0.4)] transition hover:bg-sky-500/25"
            >
              <span>View my projects</span>
              <span className="translate-y-[1px] text-[11px] transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </a>

            <a
              href="#social"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-5 py-2.5 font-medium text-slate-100 transition hover:border-sky-500/60 hover:bg-slate-900 hover:text-sky-100"
            >
              <span>Contact me</span>
            </a>

            {/* Placeholder for CV link – we can wire a real /cv.pdf later */}
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300 transition hover:border-emerald-400/70 hover:text-emerald-200"
            >
              Download CV (soon)
            </a>
          </div>
        </div>

        {/* Profile picture side */}
        <div className="z-10 flex flex-1 justify-center sm:justify-end">
          <div className="relative">
            {/* Outer glow ring */}
            <div className="pointer-events-none absolute inset-0 blur-2xl">
              <div className="h-full w-full rounded-[2rem] bg-gradient-to-tr from-sky-500/30 via-purple-500/20 to-emerald-400/30 opacity-70 animate-[spin_18s_linear_infinite]" />
            </div>

            <div className="relative h-44 w-44 overflow-hidden rounded-[2rem] border border-slate-600/70 bg-slate-900/90 shadow-2xl shadow-sky-900/60 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
              <Image
                src="https://vaidas-public-data.s3.eu-west-2.amazonaws.com/personal-website/profile-picture/mister-v.png"
                alt="Profile picture of Vaidas"
                fill
                priority
                sizes="(min-width: 1024px) 256px, (min-width: 640px) 224px, 176px"
                className="object-cover"
              />

              {/* Overlay gradient at bottom */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

              {/* Small label on the image */}
              <div className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-200/90">
                Building in public
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
