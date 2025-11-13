// lib/data/projects.ts
export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  role: string;
  timeframe: string;
  summary: string;
  tech: string[];
  links?: ProjectLink[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "empex-digital",
    title: "Empex Digital – Web Agency Platform",
    role: "Full-stack Developer",
    timeframe: "2024 – Ongoing",
    summary:
      "A full-featured agency website with service pages, booking system, blog, and admin tools for managing content and client consultations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "AWS", "Stripe"],
    links: [
      { label: "Visit website", href: "https://www.empex.co.uk" },
    ],
    featured: true,
  },
  {
    slug: "kiddyhop-store",
    title: "KIDDYHOP – Kids E-commerce Store",
    role: "Full-stack Developer",
    timeframe: "2024",
    summary:
      "A custom e-commerce store focused on kids’ products, with product management, basket/checkout flow, and AWS-hosted infrastructure.",
    tech: ["Next.js", "PostgreSQL", "Stripe", "AWS EC2", "NGINX"],
    links: [
      { label: "Visit store", href: "https://kiddyhop.co.uk" },
    ],
    featured: true,
  },
  {
    slug: "zzb-motive",
    title: "ZZB Motive – Automotive Services",
    role: "Full-stack Developer",
    timeframe: "2024",
    summary:
      "A service website for an automotive business including service listings, quote forms, and fully managed AWS hosting stack.",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "AWS EC2", "S3", "NGINX"],
    links: [
      { label: "Visit website", href: "https://zzbmotive.com" },
    ],
    featured: true,
  },
  {
    slug: "hellhouse-salon",
    title: "Hellhouse – Beauty & Tattoo Salon",
    role: "Frontend Developer",
    timeframe: "2024",
    summary:
      "A visually rich, mobile-first website for a salon offering tattoo, lashes, nails, and more, with galleries and structured service pages.",
    tech: ["Next.js", "Tailwind CSS", "AWS S3", "Design Systems"],
    featured: false,
  },
  {
    slug: "simkus-portfolio",
    title: "simkus.co.uk – Personal Portfolio",
    role: "Full-stack Developer",
    timeframe: "2025",
    summary:
      "This portfolio site: a modern, tech-oriented single-page experience built to showcase skills, projects, and social presence.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    featured: true,
  },
];
