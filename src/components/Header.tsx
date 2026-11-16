import { profile } from "../data/content.ts"
import { GithubIcon } from "./Icons.tsx"

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="wordmark" href="#top">
          {profile.name}
        </a>
        <nav className="nav" aria-label="Page">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a
            className="icon-link"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
        </nav>
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          Get in touch
        </a>
      </div>
    </header>
  )
}
