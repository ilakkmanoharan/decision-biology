/** Site-wide copy and links for decision-biology.com */

const fallbackEmail = "hello@decision-biology.com";

/** Resolved at build time from NEXT_PUBLIC_CONTACT_EMAIL */
export const contactEmail =
  (typeof process !== "undefined" &&
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim()) ||
  fallbackEmail;

export const site = {
  name: "Decision Biology",
  tagline: "AI for Biological Decision Systems",
  url: "https://www.decision-biology.com",
  contactEmail,
} as const;

export const social = {
  linkedin: "https://linkedin.com/in/ilakkmanoharan",
  github: "https://github.com/ilakkmanoharan",
  medium: "https://medium.com/@ilakk2023",
  youtube: "https://www.youtube.com/@ilakkmanoharan3011",
  x: "https://x.com/ilakkManoharan",
} as const;

export const founder = {
  name: "Ilakkuvaselvi Manoharan",
  role: "Founder",
  summary:
    "Software engineer with ~20 years of experience building and scaling systems across enterprise and startup environments—distributed systems, data pipelines, full-stack development, and AI-driven products. Decision Biology combines rigorous systems engineering with information-theoretic modeling for biological decision-making.",
  highlights: [
    "Shipped production products end-to-end, including live iOS apps (TagScribe) and a web publishing platform (publish-desk.com), owning architecture, infrastructure, and UX.",
    "Published patent: Smart Restaurant powered by Cloud-Native IoT AIOS (US 2024/0273653 A1, Aug. 15, 2024).",
    "Presented at ISSRDC 2023 on quantum computing and sustainable quantum dot synthesis.",
    "Solo founder today for speed and depth of execution; planning to bring in domain experts as research and product mature.",
  ],
} as const;

/** Main nav: section anchors on home; Research has its own route */
export const navItems = [
  { label: "Thesis", href: "/#thesis" },
  { label: "Platform", href: "/#platform" },
  { label: "Technology", href: "/#technology" },
  { label: "Applications", href: "/#applications" },
  { label: "Why us", href: "/#why" },
  { label: "Nature FM", href: "/#nature-foundation-models" },
  { label: "Research", href: "/research" },
] as const;

export const problemCards = [
  {
    label: "Problem",
    title: "Biology is still mostly observational.",
    body: "We can measure cells at massive scale, but predicting how they decide, adapt, and respond remains difficult.",
  },
  {
    label: "Insight",
    title: "Cells process information under noise.",
    body: "Signals flow through uncertain pathways. Cellular behavior is not just chemistry—it is decision-making under constraints.",
  },
  {
    label: "Shift",
    title: "Model the decision system itself.",
    body: "Decision Biology builds models that quantify, simulate, and predict cellular choices before costly experiments.",
  },
] as const;

export const platformModules = [
  {
    title: "Signal-to-response modeling",
    body: "Treat external signals, noisy intracellular pathways, and downstream responses as a coupled information-processing system.",
  },
  {
    title: "Information analysis",
    body: "Quantify mutual information, entropy, information loss, and channel capacity along biological decision pathways.",
  },
  {
    title: "Multi-scale simulation",
    body: "Reason from molecular interactions to cells, tissues, and environmental context using stochastic simulation.",
  },
  {
    title: "Intervention optimization",
    body: "Identify perturbations and signal designs that move cellular outcomes toward targets under uncertainty.",
  },
] as const;

export const techLayers = [
  "Biological data layer (omics, signaling, imaging, simulation output)",
  "Stochastic simulation engine",
  "Information-theoretic metrics",
  "Predictive modeling layer",
  "Intervention decision engine",
  "Interfaces & APIs",
] as const;

export const applications = [
  {
    title: "Drug discovery",
    body: "Understand when therapeutic signals fail in noisy pathways and optimize interventions that restore signaling fidelity.",
  },
  {
    title: "Regenerative medicine",
    body: "Design signal sequences that steer differentiation and tissue-level outcomes with clearer information flow.",
  },
  {
    title: "Synthetic biology",
    body: "Engineer circuits and programs that operate closer to theoretical information limits.",
  },
] as const;

export const comparison = [
  ["Capability", "Typical bio-AI", "Decision Biology"],
  ["Pattern recognition", "High", "High"],
  ["Noise-robust modeling", "Low", "High"],
  ["Information-theoretic limits", "Rarely explicit", "Core"],
  ["Programmable interventions", "Limited", "Full stack intent"],
] as const;

export const useCases = [
  "Drug response prediction",
  "Synthetic biology circuit design",
  "Disease pathway simulation",
  "Research acceleration",
  "Signal transduction analysis",
  "Programmable biology workflows",
] as const;

export const researchPillars = [
  {
    title: "Framework",
    body: "Cells as communication systems: signals, noisy channels, and decisions—quantified with mutual information, entropy, and related metrics.",
  },
  {
    title: "Simulation",
    body: "Stochastic models of pathways and responses to estimate what outcomes are achievable under biological noise.",
  },
  {
    title: "Direction",
    body: "Connect measurement to intervention design: where information is lost, and what perturbations recover desired behavior.",
  },
] as const;
