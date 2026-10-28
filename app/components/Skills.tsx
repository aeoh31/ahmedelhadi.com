import SectionHead from "./SectionHead";
import { SKILLS } from "../content";

export default function Skills() {
  return (
    <section id="skills" className="section section-alt" aria-labelledby="skills-title">
      <div className="shell">
        <SectionHead id="skills" index="04" title="Skills" lead="Tools I have used in production, grouped by where they sit in a system." />

        <div className="skills-grid">
          {SKILLS.map((g) => (
            <div className="skill-group" key={g.group} data-reveal>
              <h3>{g.group}</h3>
              <ul className="tags">
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
