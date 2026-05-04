import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SubpageLayout } from "@/components/subpage-layout";
import { researchPillars, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research & publications",
  description:
    "Decision Biology research direction: information limits of signaling and cellular decision-making under noise.",
  openGraph: {
    title: "Research | Decision Biology",
    description: "Cellular decision-making, information-theoretic framing, and Nature Foundation Models direction.",
    url: `${site.url}/research`,
  },
};

export default function ResearchPage() {
  return (
    <SubpageLayout>
      <article className="relative mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8 lg:pt-16">
        <Link
          href="/#research"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to overview
        </Link>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/90">Research</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Information limits of signaling and cellular decisions.
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          We treat pathways as noisy communication channels and ask how much information survives from signal to
          response—then how interventions can restore or steer that flow.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {researchPillars.map((card) => (
            <div key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-lg font-semibold text-white">{card.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{card.body}</p>
            </div>
          ))}
        </div>
      </article>
    </SubpageLayout>
  );
}
