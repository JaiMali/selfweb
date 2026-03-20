import type { SiteContent } from "../content/siteContent";
import { ProjectListItem } from "./ProjectListItem";

interface ProjectsProps {
  content: SiteContent;
}

export function Projects({ content }: ProjectsProps) {
  const { projects } = content;

  if (!projects.length) {
    return null;
  }

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <h2 id="projects-title" className="sr-only">
        Projects
      </h2>

      <div className="section-body">
        <div className="project-list">
          {projects.map((project) => (
            <ProjectListItem key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
