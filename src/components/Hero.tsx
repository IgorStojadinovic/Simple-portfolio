import { profile } from "../data/content.ts"

export function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero-copy">
        <h1>
          <span className="line">{profile.name}</span>
          <span className="line accent">{profile.role}</span>
        </h1>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View projects
          </a>
          <a className="btn btn-secondary" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
