"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGithub,
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type SocialItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  accentClass: string;
};

const socials: SocialItem[] = [
  {
    label: "X",
    href: "https://x.com/mistersmk",
    icon: FaXTwitter,
    accentClass: "text-slate-100",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vaidas-simkus-7b950a67/",
    icon: FaLinkedin,
    accentClass: "text-sky-500",
  },
  {
    label: "GitHub",
    href: "https://github.com/mister-vaidas",
    icon: FaGithub,
    accentClass: "text-slate-100",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mistervaidas/",
    icon: FaInstagram,
    accentClass: "text-pink-400",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/MisterVaidas/",
    icon: FaFacebook,
    accentClass: "text-blue-500",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@VaidasSimkus",
    icon: FaYoutube,
    accentClass: "text-red-500",
  },
  {
    label: "Telegram",
    href: "https://t.me/linkmrv",
    icon: FaTelegramPlane,
    accentClass: "text-sky-400",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@mister.vaidas",
    icon: FaTiktok,
    accentClass: "text-slate-100",
  },
];

export default function SocialSection() {
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section
      id="social"
      className="relative overflow-hidden bg-slate-950 py-14 sm:py-16"
    >
      {/* Background visuals */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient blobs */}
        <div className="absolute -left-24 top-10 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl animate-pulse" />
        <div className="absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-purple-500/25 blur-3xl animate-[pulse_12s_ease-in-out_infinite]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* Subtle glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22)_0,_transparent_55%)] opacity-70" />
      </div>

      <Container className="relative space-y-8">
        {/* Heading */}
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-sky-300/90">
            Stay connected
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Social presence & profiles
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:mx-0">
            Connect with me across different platforms where I share projects,
            ideas, and things I&apos;m currently working on.
          </p>
        </div>

        {/* Mobile toggle (top) */}
        <div className="flex justify-center sm:hidden">
          <button
            type="button"
            onClick={() => setShowAllMobile((prev) => !prev)}
            className="mt-1 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300 transition hover:border-sky-400 hover:text-sky-200"
          >
            {showAllMobile ? "Show fewer" : "Show all socials"}
          </button>
        </div>

        {/* Social cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((item, index) => {
            const Icon = item.icon;

            const isMobileHidden =
              !showAllMobile && index > 2; // first 3 visible on mobile

            return (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={`
                  group relative overflow-hidden rounded-2xl border border-slate-800/80
                  bg-slate-900/70 p-4
                  shadow-[0_18px_40px_rgba(15,23,42,0.85)]
                  transition
                  hover:-translate-y-1 hover:border-sky-400/70 hover:bg-slate-900
                  ${isMobileHidden ? "hidden sm:block" : "block"}
                `}
              >
                {/* Glow accent */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-sky-500/20 via-transparent to-transparent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex items-center gap-3">
                  <div
                    className={`
                      flex h-10 w-10 items-center justify-center rounded-xl
                      bg-slate-950/90
                      shadow-[0_0_24px_rgba(15,23,42,1)]
                      ${item.accentClass}
                    `}
                  >
                    <Icon className="text-xl" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-50">
                      {item.label}
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="uppercase tracking-[0.18em]">
                    Visit profile
                  </span>
                  <span className="text-[13px] transition-transform group-hover:translate-x-0.5">
                    ↗
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
