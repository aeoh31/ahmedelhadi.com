import SectionHead from "./SectionHead";
import { WORK } from "../content";

export default function Work() {
  return (
    <section id="work" className="section section-alt" aria-labelledby="work-title">
      <div className="shell">
        <SectionHead
          id="work"
          index="02"
          title="Selected work"
          lead="Production systems from my last two roles. NDAs apply, so the details stay high level."
        />

        <ol className="work-list">
          {WORK.map((w, i) => (
            <li className="card case" key={w.title} data-reveal>
              <div className="case-head">
                <span className="case-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="case-tag">
                    {w.tag} · {w.org}
                  </p>
                  <h3>{w.title}</h3>
                </div>
              </div>
              <dl className="case-body">
                <div>
                  <dt>Challenge</dt>
                  <dd>{w.problem}</dd>
                </div>
                <div>
                  <dt>What I built</dt>
                  <dd>{w.built}</dd>
                </div>
                <div>
                  <dt>Outcome</dt>
                  <dd>{w.outcome}</dd>
                </div>
              </dl>
              <ul className="tags" aria-label="Stack">
                {w.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
