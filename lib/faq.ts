import fs from "fs";
import path from "path";

export type FaqSection = {
  title: string;
  body: string;
};

const faqPath = path.join(process.cwd(), "content/decision-biology-faqs.md");

export function getFaqSections(): FaqSection[] {
  const markdown = fs.readFileSync(faqPath, "utf-8");
  const blocks = markdown.split(/\n---\n/).map((block) => block.trim()).filter(Boolean);

  return blocks.flatMap((block) => {
    const match = block.match(/^## (.+)\n([\s\S]*)$/);
    if (!match) return [];
    return [{ title: match[1].trim(), body: match[2].trim() }];
  });
}
