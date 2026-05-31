import Link from "next/link";
import { contactEmail, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-zinc-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} {site.name}. Phase 1 of Nature Foundation Models.</p>
        <div className="flex flex-wrap gap-5">
          <Link href="/#thesis" className="hover:text-white">
            Thesis
          </Link>
          <Link href="/#platform" className="hover:text-white">
            Platform
          </Link>
          <Link href="/research" className="hover:text-white">
            Research
          </Link>
          <Link href="/faq" className="hover:text-white">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
          <a href={`mailto:${contactEmail}`} className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
