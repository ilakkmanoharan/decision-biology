import Link from "next/link";
import { ArrowRight, Brain, FlaskConical, Network, ShieldCheck, Sparkles, Waves } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteBackdrop } from "@/components/site-shell";
import {
  applications,
  comparison,
  platformModules,
  problemCards,
  site,
  techLayers,
  useCases,
} from "@/lib/site";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/90">
      {children}
    </p>
  );
}

function PrimaryButton({ children, href = "/contact" }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-black"
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
    </a>
  );
}

function SecondaryButton({ children, href = "#platform" }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black"
    >
      {children}
    </a>
  );
}

function SignalVisualization() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 p-6 shadow-2xl shadow-emerald-950/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.22),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.18),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:36px_36px]" />

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <Badge>Signal → channel → decision</Badge>
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
          </div>
        </div>

        <div className="relative mx-auto h-64 w-64">
          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/40 bg-emerald-300/10 shadow-[0_0_80px_rgba(16,185,129,0.28)]" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
            <div
              key={rotation}
              className="absolute left-1/2 top-1/2 h-px w-28 origin-left bg-gradient-to-r from-emerald-300/70 to-transparent"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div
                className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 backdrop-blur"
                style={{ boxShadow: index % 2 === 0 ? "0 0 26px rgba(16,185,129,0.35)" : undefined }}
              />
            </div>
          ))}
          <div className="absolute inset-0 rounded-full border border-dashed border-white/10" />
          <div className="absolute inset-8 rounded-full border border-dashed border-white/10" />
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            ["Signal", "0.82"],
            ["Noise", "0.17"],
            ["Decision", "ON"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur">
              <p className="text-xs text-zinc-500">{label}</p>
              <p className="mt-1 font-mono text-lg font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const metrics = [
  { value: "Phase 1", label: "of Nature Foundation Models" },
  { value: "AI + information theory", label: "core technical thesis" },
  { value: "Cells → decisions", label: "modeling primitive" },
];

const stackModules = [
  {
    icon: Network,
    title: "Modeling engine",
    body: "Represent cells as information-processing networks across signaling, gene expression, and phenotype response.",
  },
  {
    icon: Waves,
    title: "Simulation layer",
    body: "Run experiments under noise, variability, perturbations, and biological constraints.",
  },
  {
    icon: Brain,
    title: "Prediction system",
    body: "Estimate how cells respond to external signals, interventions, and pathway changes.",
  },
  {
    icon: Sparkles,
    title: "Design layer",
    body: "Move toward programmable biological interventions for drugs, circuits, and engineered cellular behavior.",
  },
];

export function HomePage() {
  return (
    <main id="home" className="min-h-screen bg-black text-white antialiased">
      <SiteBackdrop />
      <SiteHeader />

      <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-32 lg:pt-28">
        <div>
          <div className="mb-7 flex flex-wrap gap-2">
            <Badge>Phase 1 of Nature Foundation Models</Badge>
            <Badge>Information-theoretic AI for biology</Badge>
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            Engineering how cells make decisions.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            {site.tagline}. An information-theoretic stack for modeling, simulating, and predicting cellular
            behavior under uncertainty—turning biology from a descriptive science into a predictive and programmable
            discipline.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton>Get early access</PrimaryButton>
            <SecondaryButton href="#platform">Explore the platform</SecondaryButton>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.value} className="border-l border-white/10 pl-4">
                <p className="text-lg font-semibold text-white">{metric.value}</p>
                <p className="mt-1 text-sm text-zinc-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <SignalVisualization />
      </section>

      <section id="thesis" className="relative border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <SectionEyebrow>Thesis</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Biology is moving from observation to engineering.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {problemCards.map((card) => (
              <article
                key={card.label}
                className="rounded-[1.75rem] border border-white/10 bg-black/50 p-7 transition hover:border-emerald-300/30 hover:bg-white/[0.04]"
              >
                <p className="text-sm font-semibold text-emerald-300">{card.label}</p>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">{card.title}</h3>
                <p className="mt-4 leading-7 text-zinc-400">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="platform" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionEyebrow>Platform</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              A stack for cellular decision-making.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Model signaling pathways as stochastic channels, quantify how much information survives noise, and simulate
              outcomes before you run the experiment.
            </p>
            <ul className="mt-8 space-y-4">
              {platformModules.map((m) => (
                <li key={m.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="font-semibold text-white">{m.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{m.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stackModules.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 shadow-xl shadow-black/20"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-300/10 text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{module.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">{module.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="technology" className="relative border-y border-white/10 bg-zinc-950/70">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionEyebrow>Technology</SectionEyebrow>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Architecture from data to decisions.
          </h2>
          <ol className="mt-12 grid gap-4 md:grid-cols-2">
            {techLayers.map((layer, i) => (
              <li
                key={layer}
                className="flex gap-4 rounded-2xl border border-white/10 bg-black/40 p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-300/10 font-mono text-sm font-semibold text-emerald-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-zinc-300">{layer}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="applications" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <SectionEyebrow>Applications</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Built for teams designing biology, not just observing it.
            </h2>
          </div>
          <p className="text-lg leading-8 text-zinc-400">
            Decision Biology supports organizations that need simulation, prediction, and intervention design—not only
            dashboards and pattern matching.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {applications.map((app) => (
            <article key={app.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
              <FlaskConical className="h-8 w-8 text-emerald-300" />
              <h3 className="mt-6 text-xl font-semibold text-white">{app.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{app.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-14">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/90">Use cases</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/45 p-4">
                <ShieldCheck className="h-5 w-5 flex-none text-emerald-300" />
                <span className="text-sm font-medium text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="relative border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionEyebrow>Why Decision Biology</SectionEyebrow>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Explicit noise, information limits, and interventions—not only prediction.
          </h2>
          <div className="mt-12 overflow-x-auto rounded-[1.75rem] border border-white/10">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.04]">
                  {comparison[0].map((cell) => (
                    <th key={cell} className="px-6 py-4 font-semibold text-zinc-200">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.slice(1).map((row, ri) => (
                  <tr key={row[0]} className="border-b border-white/5 last:border-0">
                    {row.map((cell, ci) => (
                      <td key={`${ri}-${ci}`} className="px-6 py-4 text-zinc-400">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.035] p-8 sm:p-12 lg:p-16">
          <div className="max-w-4xl">
            <FlaskConical className="h-9 w-9 text-emerald-300" />
            <h2 className="mt-8 text-3xl font-semibold tracking-tight sm:text-5xl">
              From static maps to dynamic biological decision systems.
            </h2>
            <p className="mt-7 text-lg leading-8 text-zinc-300">
              Observational AI describes what happened. Decision Biology targets the logic of cellular choices under
              uncertainty—so teams can predict responses and design interventions with clearer constraints.
            </p>
          </div>
        </div>
      </section>

      <section id="nature-foundation-models" className="relative border-y border-white/10 bg-zinc-950/70">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionEyebrow>Nature Foundation Models</SectionEyebrow>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Biology is Phase 1 of a broader vision: unified scientific intelligence.
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Nature Foundation Models aim to learn laws of nature from data and first principles, simulate across scales
            (molecules to environments), and design solutions under physical and biological constraints. Science today is
            often siloed by domain; this direction points toward a single integrated system for understanding and
            engineering nature.
          </p>
          <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-zinc-200">
            Decision Biology is the biology layer—modeling how living systems process information and make decisions as we
            expand toward that larger goal.
          </p>
        </div>
      </section>

      <section id="founder" className="relative border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-col gap-10 overflow-hidden rounded-[2.25rem] border border-white/10 bg-black/40 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
            <div className="max-w-xl">
              <SectionEyebrow>Founder</SectionEyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Building at the intersection of systems engineering and biological modeling.
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Meet Ilakkuvaselvi Manoharan—solo founder, ~20 years shipping complex software, now focused on
                information-theoretic AI for cellular decisions.
              </p>
            </div>
            <Link
              href="/founder"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/40 hover:bg-white/[0.06]"
            >
              Founder story &amp; links
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="research" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="flex flex-col gap-10 rounded-[2.25rem] border border-white/10 bg-white/[0.03] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div className="max-w-xl">
            <SectionEyebrow>Research</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Papers, frameworks, and downloadable briefs.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Signal–channel–decision framing, Nature Foundation Models direction, and supporting manuscripts—hosted for
              partners and collaborators.
            </p>
          </div>
          <Link
            href="/research"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-100"
          >
            Research library
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-5xl px-6 py-24 text-center lg:px-8 lg:py-32">
        <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
          Biology is not only something to observe. It is something we can understand, predict, and design.
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
          Join the early circle of scientists, builders, and partners shaping the first phase of Nature Foundation
          Models.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <PrimaryButton href="/contact">Contact &amp; early access</PrimaryButton>
          <a
            href={`mailto:${site.contactEmail}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300/90 hover:text-emerald-200"
          >
            {site.contactEmail}
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
