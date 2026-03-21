import type { Project } from "../content/siteContent";

interface ProjectListItemProps {
  project: Project;
}

export function ProjectListItem({ project }: ProjectListItemProps) {
  const { title, description, details, tech, githubUrl, demoUrl, impact } = project;

  return (
    <article className="project-item" aria-labelledby={`project-${title}`}>
      <h3 id={`project-${title}`} className="project-item__title">
        {title}
      </h3>

      <p className="project-item__description">{description}</p>

      {details ? <p className="project-item__details">{details}</p> : null}

      {impact ? (
        <p className="project-item__meta">
          <span className="project-item__label">Outcome:</span> {impact}
        </p>
      ) : null}

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
    </article>
  );
}
