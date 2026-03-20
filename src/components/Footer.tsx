import type { SiteContent } from "../content/siteContent";

interface FooterProps {
  content: SiteContent;
}

export function Footer({ content }: FooterProps) {
  const { email, githubUrl, linkedinUrl, closingLine } = content;

  const hasContactInfo = Boolean(email || githubUrl || linkedinUrl || closingLine);

  if (!hasContactInfo) {
    return null;
  }

  return (
    <footer className="section" id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="sr-only">
        Contact
      </h2>

      <div className="section-body">
        {closingLine ? (
          <div className="prose">
            <p>{closingLine}</p>
          </div>
        ) : null}

        <ul className="contact-list">
          {email ? (
            <li>
              <span className="contact-list__label">Email</span>
              <a className="text-link" href={`mailto:${email}`}>
                {email}
              </a>
            </li>
          ) : null}

          {githubUrl ? (
            <li>
              <span className="contact-list__label">GitHub</span>
              <a
                className="text-link"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                {githubUrl}
              </a>
            </li>
          ) : null}

          {linkedinUrl ? (
            <li>
              <span className="contact-list__label">LinkedIn</span>
              <a
                className="text-link"
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                {linkedinUrl}
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </footer>
  );
}
