import Link from "next/link";
import { Dna, Menu } from "lucide-react";
import { navItems, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-3" aria-label={`${site.name} home`}>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
            <Dna className="h-5 w-5 text-emerald-300" />
          </div>
          <span className="truncate text-sm font-semibold tracking-wide">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex lg:gap-6" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 text-sm text-zinc-400 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="group relative lg:hidden">
          <summary className="list-none [&::-webkit-details-marker]:hidden">
            <span className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-white/15 p-2 text-zinc-300 hover:bg-white/[0.06]">
              <Menu className="h-5 w-5" aria-hidden />
              <span className="sr-only">Open menu</span>
            </span>
          </summary>
          <div className="absolute right-0 top-full z-50 mt-2 min-w-[220px] rounded-2xl border border-white/10 bg-black/95 py-2 shadow-xl backdrop-blur-xl">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 text-sm text-zinc-300 hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block border-t border-white/10 px-4 py-3 text-sm font-medium text-emerald-300 hover:bg-white/[0.06]"
            >
              Get early access
            </Link>
          </div>
        </details>

        <Link
          href="/contact"
          className="hidden shrink-0 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/[0.06] lg:inline-flex"
        >
          Get early access
        </Link>
      </div>
    </header>
  );
}
