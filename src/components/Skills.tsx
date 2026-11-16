import { skills } from "../data/content.ts"
import { riseDelay, useReveal } from "../hooks/useReveal.ts"

export function Skills() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="skills" ref={ref} className="section wrap reveal">
      <div className="skill-panel" aria-label="Skills">
        <p className="skill-brace rise" style={riseDelay(0)}>
          Current_skills = {"{"}{" "}
        </p>
        {skills.map((skill, index) => (
          <p key={skill.label} className="skill-line rise" style={riseDelay(index + 1)}>
            <span className="tok-key">{skill.label}</span>
            <span className="tok-punct">: </span>
            <span className="tok-value">{skill.items.join(", ")}</span>
            <span className="tok-punct">,</span>
          </p>
        ))}
        <p className="skill-brace rise" style={riseDelay(skills.length + 1)}>
          {"}"}
        </p>
      </div>
    </section>
  )
}
