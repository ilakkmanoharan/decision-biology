import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteBackdrop } from "@/components/site-shell";

export function SubpageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-black text-white antialiased">
      <SiteBackdrop />
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}
