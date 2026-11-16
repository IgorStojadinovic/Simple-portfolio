import { profile } from "../data/content.ts"
import { useReveal } from "../hooks/useReveal.ts"
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons.tsx"

export function Contact() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="contact" className="section wrap">
      <div ref={ref} className="contact-panel rise">
        <div>
          <h2>Get in touch</h2>
          <p className="contact-copy">
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out.
          </p>
        </div>
        <ul className="contact-links">
          <li>
            <a className="icon-link" href={`mailto:${profile.email}`} aria-label="Email">
              <MailIcon />
            </a>
          </li>
          <li>
            <a
              className="icon-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
          </li>
          <li>
            <a
              className="icon-link"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
