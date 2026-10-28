import HeroCanvas from "./HeroCanvas";

const TECH_BADGES = [
  "Node.js", "TypeScript", "NestJS", "Express.js", "Python", "FastAPI",
  "Java", "Spring Boot", "React", "Next.js", "Vue.js", "Nuxt",
  "PostgreSQL", "MongoDB", "Redis", "Kafka", "RabbitMQ", "AWS", "Azure",
  "GCP", "Docker", "Kubernetes", "Terraform", "GraphQL", "n8n", "MCP",
];

export default function Hero() {
  return (
    <section className="hero pt-[100px] pb-[60px] sm:pt-[140px] sm:pb-[100px]">
      <HeroCanvas />
      <div className="shell hero-inner">
        <div className="text-center sm:text-left min-w-0">
          <div className="hero-status">
            <span className="pill">
              <span className="dot" />
              Available now
            </span>
            <span>Based in Abu Dhabi, UAE · open to remote</span>
          </div>

          <h1 className="max-sm:text-[40px]">
            <span className="grad">Ahmed Elhadi.</span>
            <br className="max-sm:hidden" />
            {" "}Builds the platforms
            <br className="max-sm:hidden" />
            {" "}teams run on.
          </h1>

          <div className="hero-subline">
            Senior Software Engineer.&nbsp;
            <span>
              Backend-heavy full stack work across fintech, live events, and AI
              automation.
            </span>
          </div>

          <p className="hero-desc">
            Software engineer with 5+ years building production platforms end to end, from
            APIs and event-driven services to the dashboards people use every day, running
            on AWS.
          </p>

          <div className="hero-ctas max-sm:justify-center">
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

          <div className="hero-meta max-sm:grid-cols-2 max-sm:gap-4 max-sm:mt-9">
            <div className="hero-meta-item">
              <div className="num">5+</div>
              <div className="lbl">Years experience</div>
            </div>
            <div className="hero-meta-item">
              <div className="num">99.9%</div>
              <div className="lbl">Platform uptime</div>
            </div>
            <div className="hero-meta-item">
              <div className="num">−80%</div>
              <div className="lbl">API response times</div>
            </div>
            <div className="hero-meta-item">
              <div className="num">25h</div>
              <div className="lbl">Manual work automated / week</div>
            </div>
          </div>
        </div>
      </div>

      <div className="ticker max-sm:mt-10">
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
