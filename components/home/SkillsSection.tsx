import Container from "@/components/layout/Container";

const coreSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
];

const otherSkills = [
  "Git & GitHub",
  "REST APIs",
  "AWS (EC2, S3, etc.)",
  "Responsive Design",
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-b border-slate-800/60 bg-slate-950 py-14 sm:py-16"
    >
      <Container className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            Skills & Tech Stack
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl">
            A snapshot of the technologies and tools I work with on a daily basis.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium text-slate-200">Core</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-slate-200">Additional</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {otherSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
