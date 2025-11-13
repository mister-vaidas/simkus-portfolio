"use client";

import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";

type Particle = {
  id: number;
  x: number;
  y: number;
};

const floatingWords = [
  { text: "REACT", top: "18%", left: "6%", delay: "0s" },
  { text: "NEXT.JS", top: "32%", left: "78%", delay: "3s" },
  { text: "TYPE SCRIPT", top: "12%", left: "55%", delay: "1.8s" },
  { text: "TAILWIND", top: "62%", left: "10%", delay: "4.5s" },
  { text: "AWS", top: "70%", left: "70%", delay: "2.4s" },
  { text: "NODE.JS", top: "45%", left: "25%", delay: "5.5s" },
  { text: "POSTGRESQL", top: "54%", left: "52%", delay: "6.8s" },
];

export default function HeroSection() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const heroRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const id = Date.now() + Math.random();

    setParticles((prev) => {
      const next = [...prev, { id, x, y }];
      // cap number of particles for performance
      if (next.length > 40) next.shift();
      return next;
    });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-slate-800/60 bg-slate-950"
    >
      {/* Background tech visuals */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient blobs */}
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl animate-pulse" />
        <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.3)_0,_transparent_55%),linear-gradient(to_bottom,_rgba(15,23,42,0.9),_#020617)]" />

        {/* Soft grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Floating tech words */}
        {floatingWords.map((word) => (
          <span
            key={word.text}
            className="tech-floating-word"
            style={{
              top: word.top,
              left: word.left,
              animationDelay: word.delay,
            }}
          >
            {word.text}
          </span>
        ))}
      </div>

      {/* Mouse trail particles layer */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle-dot"
            style={{ left: p.x, top: p.y }}
          />
        ))}
      </div>

      <div
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="
          relative
        "
      >
        <Container
          className="
            relative 
            flex 
            min-h-[calc(100vh-4rem)] 
            flex-col-reverse 
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
          <div className="z-10 flex-1 space-y-6 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-900/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-emerald-200/90 shadow-sm shadow-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open to opportunities</span>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-sky-300/90">
                Web · Cloud · Automation
              </p>

              <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                  Vaidas
                </span>
                .
              </h1>

              <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-300 sm:mx-0 sm:text-[15px]">
                I&apos;m a web and software developer focused on building modern,
                fast, and reliable digital experiences. I enjoy working with
                React, Next.js, and cloud technologies to turn ideas into
                well-crafted products that actually ship.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:justify-start sm:text-[13px]">
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

              <div className="relative h-40 w-40 overflow-hidden rounded-[2rem] border border-slate-600/70 bg-slate-900/90 shadow-2xl shadow-sky-900/60 sm:h-52 sm:w-52 lg:h-64 lg:w-64">
                <Image
                  src="https://vaidas-public-data.s3.eu-west-2.amazonaws.com/personal-website/profile-picture/mister-v.png" // ensure this is a good quality square image
                  alt="Profile picture of Vaidas"
                  fill
                  priority
                  sizes="(min-width: 1024px) 256px, (min-width: 640px) 208px, 160px"
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
      </div>
    </section>
  );
}
