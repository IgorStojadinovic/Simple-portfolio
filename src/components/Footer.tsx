import { profile } from "../data/content.ts"

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <span>{profile.name}</span>
        <span>{profile.role}</span>
      </div>
    </footer>
  )
}
