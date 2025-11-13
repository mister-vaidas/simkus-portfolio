import Container from "@/components/layout/Container";
import Link from "next/link";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/mister-vaidas",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vaidas-simkus-7b950a67/",
  },
  {
    label: "Email",
    href: "mailto:vaidas@simkus.co.uk",
  },
];

export default function SocialSection() {
  return (
    <section id="social" className="bg-slate-950 py-14 sm:py-16">
      <Container className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            Let&apos;s connect
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl">
            I&apos;m currently open to opportunities in the tech industry, including
            web development, cloud-related roles, and collaboration on interesting projects.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {socials.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-100 hover:border-sky-400 hover:text-sky-100 hover:bg-sky-500/10 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
