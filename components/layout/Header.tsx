import Link from "next/link";
import Container from "./Container";

export default function Header() {
  return (
    <header className="border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          <span className="text-sky-400">&lt;/&gt;</span> Vaidas Simkus
        </Link>

        <nav className="hidden gap-6 text-xs text-slate-300 sm:flex">
          <a href="#skills" className="hover:text-sky-400 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-sky-400 transition-colors">
            Projects
          </a>
          <a href="#social" className="hover:text-sky-400 transition-colors">
            Contact
          </a>
        </nav>
      </Container>
    </header>
  );
}
