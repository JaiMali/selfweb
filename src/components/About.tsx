import type { SiteContent } from "../content/siteContent";

interface AboutProps {
  content: SiteContent;
}

export function About({ content }: AboutProps) {
  const { about, strengths } = content;

  const paragraphs = about
    .split("\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  if (!paragraphs.length && !strengths.length) {
    return null;
  }

  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <h2 id="about-title" className="sr-only">
        About
      </h2>

      <div className="section-body">
        {paragraphs.length > 0 ? (
          <div className="prose">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}

        {strengths.length > 0 ? (
          <ul className="plain-list" aria-label="Areas of focus">
            {strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
