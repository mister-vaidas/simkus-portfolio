import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/90">
      <Container className="flex flex-col items-center gap-2 py-4 text-xs text-slate-400 sm:flex-row sm:justify-between">
        <p>© {year} Vaidas Simkus. All rights reserved.</p>
        <p className="text-[11px]">Built with Next.js & Tailwind CSS.</p>
      </Container>
    </footer>
  );
}
