import type { Project } from "../content/siteContent";

interface ProjectListItemProps {
  project: Project;
}

export function ProjectListItem({ project }: ProjectListItemProps) {
  const {
    title,
    description,
    details,
    tech,
    githubUrl,
    demoUrl,
    imageSrc,
    imageAlt,
  } = project;

  const hasImage = Boolean(imageSrc);

  return (
    <article className="project-item" aria-labelledby={`project-${title}`}>
      <div className={`project-item__grid${hasImage ? " project-item__grid--with-image" : ""}`}>
        <div className="project-item__content">
          <h3 id={`project-${title}`} className="project-item__title">
            {title}
          </h3>

          <p className="project-item__description">{description}</p>

          {details ? <p className="project-item__details">{details}</p> : null}

          {tech.length > 0 ? (
            <p className="project-item__meta">
              <span className="project-item__label">Stack:</span> {tech.join(", ")}
            </p>
          ) : null}

          <p className="project-item__links">
            <a
              className="text-link"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            {demoUrl ? (
              <>
                <span className="project-item__separator">·</span>
                <a
                  className="text-link"
                  href={demoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo
                </a>
              </>
            ) : null}
          </p>
        </div>

        {hasImage ? (
          <div className="project-item__image-wrap">
            <img
              className="project-item__image"
              src={imageSrc}
              alt={imageAlt || `${title} project preview`}
            />
          </div>
        ) : null}
      </div>
    </article>
  );
}
