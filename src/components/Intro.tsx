import type { SiteContent } from "../content/siteContent";

interface IntroProps {
  content: SiteContent;
}

export function Intro({ content }: IntroProps) {
  const {
    name,
    headline,
    summary,
    email,
    githubUrl,
    linkedinUrl,
    resumeUrl,
    location,
    profileImageSrc,
    profileImageAlt,
  } = content;

  const links = [
    email ? { label: "Email", href: `mailto:${email}` } : null,
    githubUrl ? { label: "GitHub", href: githubUrl } : null,
    linkedinUrl ? { label: "LinkedIn", href: linkedinUrl } : null,
    resumeUrl ? { label: "Resume", href: resumeUrl } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <section className="section intro" aria-labelledby="intro-title">
      <div className="intro__grid">
        <div className="intro__content">
          <h1 id="intro-title" className="intro__title">
            {name}
          </h1>

          <p className="intro__headline">{headline}</p>

          <p className="intro__summary">{summary}</p>

          {links.length > 0 ? (
            <ul className="link-row" aria-label="Profile links">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    className="text-link"
                    href={link.href}
                    {...(link.href.startsWith("mailto:")
                      ? {}
                      : { target: "_blank", rel: "noreferrer" })}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}

          {location ? <p className="meta-line">{location}</p> : null}
        </div>

        {profileImageSrc ? (
          <div className="intro__image-wrap">
            <img
              className="intro__image"
              src={profileImageSrc}
              alt={profileImageAlt || `${name} profile photo`}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
