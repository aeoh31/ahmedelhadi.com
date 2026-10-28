import Icon from "./Icon";
import { HeroDiagram } from "./Illustrations";
import { HERO, PROFILE, STATS } from "../content";

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="status">
              <span className="status-dot" aria-hidden="true" />
              {PROFILE.availability} · {PROFILE.openTo}
            </p>

            <h1 id="hero-title">
              <span className="hero-name">{PROFILE.name}</span>
              <span className="hero-role">{PROFILE.title}</span>
            </h1>

            <p className="hero-headline">{HERO.headline}</p>
            <p className="hero-intro">{HERO.intro}</p>

            <div className="actions">
              <a className="btn btn-primary" href="#work">
                See my work
                <Icon name="arrowRight" size={16} />
              </a>
              <a className="btn btn-secondary" href={PROFILE.resume} download>
                <Icon name="download" size={16} />
                Download resume
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <HeroDiagram />
          </div>
        </div>

        <dl className="stats">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
