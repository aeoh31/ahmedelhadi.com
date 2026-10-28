import SectionHead from "./SectionHead";
import { ABOUT, EDUCATION, FOCUS, LANGUAGES, PROFILE } from "../content";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="shell">
        <SectionHead id="about" index="01" title="Five years shipping the systems a business runs on." />

        <div className="about-grid">
          <div className="prose" data-reveal>
            {ABOUT.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="facts" data-reveal>
            <div>
              <dt>Based in</dt>
              <dd>
                {PROFILE.location} · {PROFILE.timezone}
              </dd>
            </div>
            <div>
              <dt>Open to</dt>
              <dd>{PROFILE.openTo}</dd>
            </div>
            <div>
              <dt>Education</dt>
              <dd>
                {EDUCATION.degree}, {EDUCATION.school}
              </dd>
            </div>
            <div>
              <dt>Languages</dt>
              <dd>{LANGUAGES.join(", ")}</dd>
            </div>
          </dl>
        </div>

        <ul className="focus-grid" aria-label="Focus areas">
          {FOCUS.map((f) => (
            <li className="card focus" key={f.title} data-reveal>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
