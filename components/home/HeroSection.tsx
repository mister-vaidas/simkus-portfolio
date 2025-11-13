import Image from "next/image";
import Container from "@/components/layout/Container";

export default function HeroSection() {
  return (
    <section className="border-b border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 py-16 sm:py-20">
      <Container className="flex flex-col gap-10 sm:flex-row sm:items-center">
        {/* Text side */}
        <div className="flex-1 space-y-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-400">
            Software Developer & Cloud Enthusiast
          </p>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Hi, I&apos;m <span className="text-sky-400">Vaidas Simkus</span>.
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-slate-300">
            I&apos;m a web and software developer currently seeking opportunities
            in the tech industry. I enjoy building modern web experiences,
            exploring cloud technologies, and solving real-world problems with code.
          </p>

          <div className="flex flex-wrap gap-3 text-xs">
            <a
              href="#skills"
              className="rounded-full border border-sky-400/60 bg-sky-400/10 px-4 py-2 font-medium text-sky-100 hover:bg-sky-400/20 transition-colors"
            >
              View my skills
            </a>
            <a
              href="#social"
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 font-medium text-slate-200 hover:bg-slate-800 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Profile picture */}
        <div className="flex justify-center sm:justify-end">
          <div className="relative h-32 w-32 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/60 shadow-lg shadow-sky-900/40 sm:h-40 sm:w-40">
            <Image
              src="https://vaidas-public-data.s3.eu-west-2.amazonaws.com/personal-website/profile-picture/mister-v.png"
              alt="Profile picture of Vaidas Simkus"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
