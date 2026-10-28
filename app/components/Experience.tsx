import SectionHead from "./SectionHead";
import { EXPERIENCE } from "../content";

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="shell">
        <SectionHead id="experience" index="03" title="Experience" />

        <ol className="timeline">
          {EXPERIENCE.map((e) => (
            <li className="job" key={e.org} data-reveal>
              <div className="job-meta">
                <p className="job-dates">{e.dates}</p>
                <p className="job-place">{e.place}, UAE</p>
              </div>
              <div className="job-body">
                <h3>
                  {e.role} <span className="job-org">· {e.org}</span>
                </h3>
                <ul className="bullets">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {e.more && (
                  <details className="more">
                    <summary>
                      <span className="more-closed">Show {e.more.length} more</span>
                      <span className="more-open">Show less</span>
                    </summary>
                    <ul className="bullets">
                      {e.more.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </details>
                )}
                <ul className="tags" aria-label="Stack">
                  {e.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
