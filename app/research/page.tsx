import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileDown } from "lucide-react";
import { SubpageLayout } from "@/components/subpage-layout";
import { publicDocuments, researchPillars, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research & publications",
  description:
    "Decision Biology research direction: information limits of signaling, downloadable white papers and manuscripts.",
  openGraph: {
    title: "Research | Decision Biology",
    description: "Frameworks, papers, and briefs on cellular decision-making and Nature Foundation Models.",
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
          response—then how interventions can restore or steer that flow. Below are hosted PDFs for collaborators and
          public reference.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {researchPillars.map((card) => (
            <div key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-lg font-semibold text-white">{card.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{card.body}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-24 text-2xl font-semibold text-white">Documents</h2>
        <p className="mt-3 max-w-2xl text-zinc-400">
          Files are served from this site under <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs">/documents/</code>.
          Large files may take a moment to download.
        </p>

        <ul className="mt-10 space-y-4">
          {publicDocuments.map((doc) => (
            <li
              key={doc.file}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/40 p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <p className="font-semibold text-white">{doc.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{doc.description}</p>
              </div>
              <a
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2.5 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400/20"
              >
                <FileDown className="h-4 w-4" />
                Download PDF
              </a>
            </li>
          ))}
        </ul>
      </article>
    </SubpageLayout>
  );
}
