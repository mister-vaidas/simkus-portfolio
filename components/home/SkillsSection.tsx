"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiAmazon,
  SiDocker,
  SiGit,
  SiLinux,
  SiWordpress,
  SiMagento,
} from "react-icons/si";

type SkillCategory = "Frontend" | "Backend" | "Cloud & DevOps" | "Tools";

type Skill = {
  name: string;
  category: SkillCategory;
  description: string;
  icon: IconType;
  accentClass: string;
  featured?: boolean; // used for mobile "top 3"
};

const skills: Skill[] = [
  {
    name: "React",
    category: "Frontend",
    description:
      "Building dynamic, component-based UIs with hooks, state management, and clean architecture.",
    icon: SiReact,
    accentClass: "text-sky-400",
    featured: true,
  },
  {
    name: "Next.js",
    category: "Frontend",
    description:
      "Modern full-stack React apps with routing, data fetching, and performance-focused SSR/SSG.",
    icon: SiNextdotjs,
    accentClass: "text-slate-100",
    featured: true,
  },
  {
    name: "AWS",
    category: "Cloud & DevOps",
    description:
      "Hosting and scaling apps using services like EC2, S3, and basic infrastructure automation.",
    icon: SiAmazon,
    accentClass: "text-amber-300",
    featured: true,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description:
      "Strong typing for safer, more maintainable codebases and better DX across projects.",
    icon: SiTypescript,
    accentClass: "text-sky-500",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description:
      "Utility-first styling for fast, consistent, responsive UI without fighting CSS.",
    icon: SiTailwindcss,
    accentClass: "text-cyan-400",
  },
  {
    name: "Node.js",
    category: "Backend",
    description:
      "Building APIs, backend services, and integrations with JavaScript/TypeScript on the server.",
    icon: SiNodedotjs,
    accentClass: "text-emerald-400",
  },
  {
    name: "PostgreSQL",
    category: "Backend",
    description:
      "Relational database design, queries, and integrating Postgres with modern backends.",
    icon: SiPostgresql,
    accentClass: "text-sky-300",
  },
  {
    name: "Docker",
    category: "Cloud & DevOps",
    description:
      "Containerizing apps for consistent environments across development and deployment.",
    icon: SiDocker,
    accentClass: "text-sky-300",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    description:
      "Version control, branching strategies, pull requests, and collaborating in real projects.",
    icon: SiGit,
    accentClass: "text-orange-400",
  },
  {
    name: "Linux",
    category: "Tools",
    description:
      "Working comfortably in the terminal, scripting, and managing dev environments.",
    icon: SiLinux,
    accentClass: "text-slate-100",
  },
  {
    name: "WordPress",
    category: "Frontend",
    description:
      "Creating custom, performant WordPress sites and themes focused on business goals.",
    icon: SiWordpress,
    accentClass: "text-sky-300",
  },
  {
    name: "Magento",
    category: "Frontend",
    description:
      "Working with Magento-based e-commerce stores and understanding platform structure.",
    icon: SiMagento,
    accentClass: "text-orange-300",
  },
];

export default function SkillsSection() {
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-b border-slate-800/60 bg-slate-950 py-14 sm:py-16"
    >
      {/* Background visuals */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient blobs */}
        <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl animate-[pulse_11s_ease-in-out_infinite]" />

        {/* Soft grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* Small floating particles */}
        <div className="absolute left-10 top-10 h-1 w-1 rounded-full bg-sky-400/80 blur-[1px] animate-pulse" />
        <div className="absolute right-16 top-16 h-1.5 w-1.5 rounded-full bg-cyan-300/80 blur-[1px] animate-[pulse_7s_ease-in-out_infinite]" />
        <div className="absolute left-1/2 bottom-10 h-1 w-1 rounded-full bg-emerald-300/80 blur-[1px] animate-[pulse_9s_ease-in-out_infinite]" />
      </div>

      <Container className="relative space-y-8">
        {/* Hands-on label at top */}
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
          <span>Hands-on experience</span>
        </div>

        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
              Skills & Tech Stack
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              The technologies I use to design, build, and deploy modern web
              applications and digital products.
            </p>
          </div>

          {/* Mobile toggle button */}
          <button
            type="button"
            onClick={() => setShowAllMobile((prev) => !prev)}
            className="mt-2 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-300 transition hover:border-sky-400 hover:text-sky-200 sm:hidden"
          >
            <span>{showAllMobile ? "Show less" : "Show all skills"}</span>
          </button>
        </div>

        {/* Grid of flip cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            const isMobileHidden =
              !showAllMobile &&
              !skill.featured && // only featured + others when expanded
              index > 2; // safety: keep exactly 3+ visible

            return (
              <div
                key={skill.name}
                className={`group relative h-40 [perspective:1100px] sm:h-44 ${
                  isMobileHidden ? "hidden sm:block" : "block"
                }`}
              >
                <div
                  className="
                    relative h-full w-full
                    rounded-2xl
                    border border-slate-800/80
                    bg-slate-900/70
                    shadow-[0_18px_40px_rgba(15,23,42,0.85)]
                    transition-transform
                    duration-500
                    [transform-style:preserve-3d]
                    group-hover:[transform:rotateY(180deg)]
                  "
                >
                  {/* Front */}
                  <div
                    className="
                      absolute inset-0
                      flex flex-col items-center justify-center
                      rounded-2xl
                      p-4
                      [backface-visibility:hidden]
                    "
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div
                        className={`
                          flex h-14 w-14 items-center justify-center rounded-2xl
                          bg-slate-950/90
                          shadow-[0_0_24px_rgba(15,23,42,1)]
                          ${skill.accentClass}
                        `}
                      >
                        <Icon className="text-3xl" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-semibold text-slate-50">
                          {skill.name}
                        </p>
                        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className="
                      absolute inset-0
                      flex flex-col
                      justify-between
                      rounded-2xl
                      bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900
                      p-4
                      text-xs
                      [backface-visibility:hidden]
                      [transform:rotateY(180deg)]
                    "
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                        How I use it
                      </p>
                      <span
                        className={`
                          inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium
                          ${skill.accentClass}
                          bg-slate-900/70
                        `}
                      >
                        {skill.category}
                      </span>
                    </div>

                    <p className="mt-2 text-[12px] leading-relaxed text-slate-200">
                      {skill.description}
                    </p>

                    <p className="mt-3 text-[10px] text-slate-400">
                      Always improving through real-world projects, experiments,
                      and learning.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary mobile toggle at bottom for convenience */}
        <div className="flex justify-center sm:hidden">
          <button
            type="button"
            onClick={() => setShowAllMobile((prev) => !prev)}
            className="mt-1 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300 transition hover:border-sky-400 hover:text-sky-200"
          >
            {showAllMobile ? "Show fewer skills" : "View full stack"}
          </button>
        </div>
      </Container>
    </section>
  );
}
