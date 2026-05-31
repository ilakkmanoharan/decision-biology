import type { FaqSection } from "@/lib/faq";

export function FaqSections({ sections }: { sections: FaqSection[] }) {
  return (
    <div className="mt-16 space-y-6">
      {sections.map((section) => (
        <section
          key={section.title}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        >
          <h2 className="text-lg font-semibold text-white sm:text-xl">{section.title}</h2>
          <div className="faq-body mt-4 space-y-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {renderBody(section.body)}
          </div>
        </section>
      ))}
    </div>
  );
}

function renderBody(body: string) {
  const blocks = body.split(/\n\n+/);

  return blocks.map((block, index) => {
    const lines = block.split("\n");
    const isList = lines.every((line) => line.trim().startsWith("* ") || line.trim() === "");

    if (isList && lines.some((line) => line.trim().startsWith("* "))) {
      return (
        <ul key={index} className="list-disc space-y-2 pl-5">
          {lines
            .filter((line) => line.trim().startsWith("* "))
            .map((line) => (
              <li key={line}>{renderInline(line.replace(/^\*\s+/, ""))}</li>
            ))}
        </ul>
      );
    }

    return <p key={index}>{renderInline(block)}</p>;
  });
}

function renderInline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

  return parts.map((part, index) => {
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={index}
          href={linkMatch[2]}
          className="text-emerald-300 underline-offset-4 hover:text-emerald-200 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkMatch[1]}
        </a>
      );
    }
    return part;
  });
}
