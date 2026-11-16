import { projects, type Project } from "../data/content.ts"
import { riseDelay, useReveal } from "../hooks/useReveal.ts"

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const body = (
    <>
      <div className="project-top">
        <div>
          <p className={`project-kind ${project.kind === "Client" ? "client" : ""}`}>
            {project.kind}
          </p>
          <h3>{project.title}</h3>
        </div>
        {project.links ? null : (
          <span className="project-arrow" aria-hidden="true">
            ↗
          </span>
        )}
      </div>
      <p>{project.description}</p>
      {project.links && (
        <div className="project-links">
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
              <span aria-hidden="true"> ↗</span>
            </a>
          ))}
        </div>
      )}
      <ul className="stack">
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )

  const ref = useReveal<HTMLElement>()
  const className = "project-card rise"
  const style = riseDelay(index % 2)

  if (project.links) {
    return (
      <article ref={ref} className={className} style={style}>
        {body}
      </article>
    )
  }

  return (
    <a
      ref={ref}
      className={className}
      style={style}
      href={project.href}
      target="_blank"
      rel="noreferrer"
    >
      {body}
    </a>
  )
}

export function Projects() {
  const titleRef = useReveal<HTMLHeadingElement>()

  return (
    <section id="projects" className="section wrap">
      <h2 ref={titleRef} className="rise">
        Projects
      </h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
