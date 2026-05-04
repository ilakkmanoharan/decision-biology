import type { MetadataRoute } from "next";

const base = "https://www.decision-biology.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/research`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/founder`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
