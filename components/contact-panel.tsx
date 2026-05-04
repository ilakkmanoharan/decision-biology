"use client";

import { useState } from "react";
import { ArrowRight, Check, Copy } from "lucide-react";

export function ContactPanel({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="mx-auto max-w-lg rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/90">Primary inbox</p>
      <p className="mt-3 text-lg font-medium text-white">{email}</p>
      <p className="mt-4 text-sm leading-relaxed text-zinc-400">
        Set <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-zinc-300">NEXT_PUBLIC_CONTACT_EMAIL</code>{" "}
        in production to your live address, then configure MX records at your DNS host so mail delivered here reaches your
        workspace (Google Workspace, Microsoft 365, Fastmail, etc.).
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={`mailto:${email}?subject=${encodeURIComponent("Decision Biology — inquiry")}`}
          className="group inline-flex flex-1 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-100"
        >
          Open mail app
          <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
        </a>
        <button
          type="button"
          onClick={copy}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.06]"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied" : "Copy address"}
        </button>
      </div>
    </div>
  );
}
