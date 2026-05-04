import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ContactPanel } from "@/components/contact-panel";
import { SubpageLayout } from "@/components/subpage-layout";
import { contactEmail, site, social } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach Decision Biology — ${contactEmail}. Early access, partnerships, and research collaboration.`,
  openGraph: {
    title: "Contact | Decision Biology",
    description: `Email and social links for Decision Biology.`,
    url: `${site.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <SubpageLayout>
      <article className="relative mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8 lg:pt-16">
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <h1 className="mt-14 text-4xl font-semibold tracking-tight sm:text-5xl">Get in touch</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Scientists, partners, and builders: we read every message. Use the inbox below or reach out on social.
        </p>

        <div className="mt-14">
          <ContactPanel email={contactEmail} />
        </div>

        <h2 className="mt-20 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/90">Elsewhere</h2>
        <ul className="mt-6 flex flex-wrap gap-4 text-sm">
          <li>
            <a href={social.linkedin} className="text-zinc-300 underline-offset-4 hover:text-white hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={social.x} className="text-zinc-300 underline-offset-4 hover:text-white hover:underline">
              X
            </a>
          </li>
          <li>
            <a href={social.github} className="text-zinc-300 underline-offset-4 hover:text-white hover:underline">
              GitHub
            </a>
          </li>
        </ul>
      </article>
    </SubpageLayout>
  );
}
