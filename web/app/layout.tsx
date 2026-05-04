import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.decision-biology.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Decision Biology — AI for Biological Decision Systems",
    template: "%s | Decision Biology",
  },
  description:
    "Information-theoretic AI for modeling, simulating, and predicting cellular decision-making under uncertainty. Phase 1 of Nature Foundation Models.",
  keywords: [
    "Decision Biology",
    "Nature Foundation Models",
    "cellular decision-making",
    "information theory",
    "synthetic biology",
    "drug discovery",
    "signaling pathways",
  ],
  authors: [{ name: "Ilakkuvaselvi Manoharan", url: "https://linkedin.com/in/ilakkmanoharan" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Decision Biology",
    title: "Decision Biology — AI for Biological Decision Systems",
    description:
      "Engineering how cells make decisions. Information-theoretic modeling of signaling, noise, and interventions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decision Biology",
    description: "AI for biological decision systems. Phase 1 of Nature Foundation Models.",
    creator: "@ilakkManoharan",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
