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
} from "react-icons/si";

type Skill = {
  name: string;
  category: "Frontend" | "Backend" | "Cloud & DevOps" | "Tools";
  description: string;
  icon: IconType;
  accentClass: string;
};

const skills: Skill[] = [
  {
    name: "React",
    category: "Frontend",
    description:
      "Building dynamic, component-based UIs with hooks, state management, and clean architecture.",
    icon: SiReact,
    accentClass: "text-sky-400",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description:
      "Modern full-stack React apps with routing, data fetching, and performance-focused SSR/SSG.",
    icon: SiNextdotjs,
    accentClass: "text-slate-100",
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
    name: "AWS",
    category: "Cloud & DevOps",
    description:
      "Hosting and scaling apps using services like EC2, S3, and basic infrastructure automation.",
    icon: SiAmazon,
    accentClass: "text-amber-300",
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
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-b border-slate-800/60 bg-slate-950 py-14 sm:py-16"
    >
      <Container className="space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
              Skills & Tech Stack
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              A quick overview of the technologies I work with, from frontend
              frameworks to cloud and tooling.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span>Hands-on experience</span>
          </div>
        </div>

        {/* Grid of flip cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative h-40 [perspective:1100px] sm:h-44"
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
                      flex flex-col
                      justify-between
                      rounded-2xl
                      p-4
                      [backface-visibility:hidden]
                    "
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`
                            flex h-10 w-10 items-center justify-center rounded-xl
                            bg-slate-950/90
                            shadow-[0_0_18px_rgba(15,23,42,1)]
                            ${skill.accentClass}
                          `}
                        >
                          <Icon className="text-xl" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-50">
                            {skill.name}
                          </p>
                          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                            {skill.category}
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400">
                      Hover to learn how I use {skill.name} in real projects.
                    </p>
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
                      Continuously improving through real-world projects and
                      experimentation.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
