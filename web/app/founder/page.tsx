import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Dna, ExternalLink } from "lucide-react";
import { SubpageLayout } from "@/components/subpage-layout";
import { founder, site, social } from "@/lib/site";

export const metadata: Metadata = {
  title: "Founder",
  description:
    "Ilakkuvaselvi Manoharan — founder of Decision Biology. Systems engineering, AI, and information-theoretic biology.",
  openGraph: {
    title: "Founder | Decision Biology",
    description: "Background, vision, and links for Decision Biology’s founder.",
    url: `${site.url}/founder`,
  },
};

const socialLinks = [
  { label: "LinkedIn", href: social.linkedin },
  { label: "GitHub", href: social.github },
  { label: "X", href: social.x },
  { label: "Medium", href: social.medium },
  { label: "YouTube", href: social.youtube },
] as const;

export default function FounderPage() {
  return (
    <SubpageLayout>
      <article className="relative mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8 lg:pt-16">
        <Link
          href="/#founder"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to overview
        </Link>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_40%_20%,rgba(16,185,129,0.22),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-10">
            <Dna className="h-12 w-12 text-emerald-300" />
            <div>
              <p className="text-sm text-zinc-400">{founder.role}</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{founder.name}</h1>
              <p className="mt-6 text-sm leading-relaxed text-zinc-400">
                Decision Biology · {site.tagline}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Systems, products, and scientific modeling under one roof.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">{founder.summary}</p>
            <ul className="mt-10 space-y-5">
              {founder.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-zinc-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-14 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/90">Connect</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/[0.06]"
                >
                  <ExternalLink className="h-4 w-4 opacity-70" />
                  {s.label}
                </a>
              ))}
            </div>

            <p className="mt-12 text-sm text-zinc-500">
              For partnerships and early access, use{" "}
              <Link href="/contact" className="text-emerald-400 underline-offset-4 hover:underline">
                contact
              </Link>{" "}
              or email{" "}
              <a href={`mailto:${site.contactEmail}`} className="text-emerald-400 hover:underline">
                {site.contactEmail}
              </a>
              .
            </p>
          </div>
        </div>
      </article>
    </SubpageLayout>
  );
}
