import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaqSections } from "@/components/faq-sections";
import { SubpageLayout } from "@/components/subpage-layout";
import { getFaqSections } from "@/lib/faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Decision Biology, ASRA, and Nature Foundation Models — adaptive scientific intelligence for natural systems.",
  openGraph: {
    title: "FAQ | Decision Biology",
    description:
      "Company overview, product direction, approach, and goals for Decision Biology and Nature Foundation Models.",
    url: `${site.url}/faq`,
  },
};

export default function FaqPage() {
  const sections = getFaqSections();

  return (
    <SubpageLayout>
      <article className="relative mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8 lg:pt-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/90">FAQ</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Frequently asked questions
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          Decision Biology, ASRA, and the Nature Foundation Models vision — company direction, product, approach, and
          goals.
        </p>

        <FaqSections sections={sections} />
      </article>
    </SubpageLayout>
  );
}
