import HeroCanvas from "./HeroCanvas";

const TECH_BADGES = [
  "Node.js", "TypeScript", "NestJS", "Express.js", "Vue.js", "Angular",
  "React", "Next.js", "AWS", "Docker", "Kubernetes", "Redis",
  "RabbitMQ", "Kafka", "PostgreSQL", "MongoDB", "Elasticsearch",
  "Jest", "Playwright", "GraphQL",
];

export default function Hero() {
  return (
    <section className="hero">
      <HeroCanvas />
      <div className="shell hero-inner">
        <div>
          <div className="hero-status">
            <span className="pill">
              <span className="dot" />
              Available · Q3 2026
            </span>
            <span>Based in UAE · open to remote</span>
          </div>

          <h1>
            <span className="grad">Ahmed Elhadi.</span>
            <br />
            Builds backends that
            <br />
            scale to millions.
          </h1>

          <div className="hero-subline">
            Senior Full Stack Engineer.&nbsp;
            <span>
              Cloud-native applications, distributed systems, and the unglamorous
              infrastructure that keeps them online.
            </span>
          </div>

          <p className="hero-desc">
            Backend-focused engineer with 5+ years shipping fintech platforms, enterprise
            event systems, and real-time applications on AWS, Kubernetes, and event-driven
            architectures.
          </p>

          <div className="hero-ctas">
            <a className="btn btn-primary" href="#projects">
              View projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a className="btn btn-ghost" href="/resume.pdf" download>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download resume
            </a>
            <a className="btn btn-link" href="#contact">
              Get in touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <div className="num">5+</div>
              <div className="lbl">Years experience</div>
            </div>
            <div className="hero-meta-item">
              <div className="num">10+</div>
              <div className="lbl">Enterprise projects</div>
            </div>
            <div className="hero-meta-item">
              <div className="num">M+</div>
              <div className="lbl">API requests / day</div>
            </div>
            <div className="hero-meta-item">
              <div className="num">99.9%</div>
              <div className="lbl">Service uptime</div>
            </div>
          </div>
        </div>
      </div>

      <div className="ticker">
        <div className="ticker-track">
          {[...TECH_BADGES, ...TECH_BADGES].map((t, i) => (
            <span className="ticker-item" key={i}>
              <span className="square" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
