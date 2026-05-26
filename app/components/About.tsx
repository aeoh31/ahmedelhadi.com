const FOCUS_AREAS = [
  {
    tag: "01",
    title: "Enterprise Event Platforms",
    body: "Built ticketing, scheduling and operations systems serving thousands of concurrent attendees.",
  },
  {
    tag: "02",
    title: "Fintech Trading Systems",
    body: "High-frequency data ingestion, latency-sensitive APIs, idempotent transaction pipelines.",
  },
  {
    tag: "03",
    title: "Real-Time Communication",
    body: "WebSocket gateways, presence systems, fan-out messaging on Redis pub/sub and Kafka.",
  },
  {
    tag: "04",
    title: "Distributed Architectures",
    body: "Service decomposition, event-driven boundaries, saga orchestration and observability.",
  },
  {
    tag: "05",
    title: "Cloud Infrastructure",
    body: "AWS, Kubernetes, infrastructure-as-code, CI/CD pipelines and zero-downtime deploys.",
  },
];

const TIMELINE = [
  { yr: "2024 — Now", role: "Full Stack Developer", org: "7 Pulse Events", active: true },
  { yr: "2023 — 2024", role: "Software Developer", org: "AlphaForge Labs" },
  { yr: "2022 — 2023", role: "Software Developer", org: "Shadil Trading" },
  { yr: "2021 — 2022", role: "Software Engineer Intern", org: "Sharjah Sports Council" },
];

export default function About() {
  return (
    <section id="about">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">01 — About</span>
          <h2>Five years writing the kind of systems people only notice when they break.</h2>
          <p>
            I gravitate to backend work where the constraints are real: latency budgets, ordered
            events, partial failure, and the long tail of edge cases that decide whether a product
            feels reliable.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-story">
            <p>
              I&apos;m <strong>Ahmed Elhadi</strong>, a full stack engineer based in the UAE. My
              day-to-day is <strong>Node.js, TypeScript, NestJS</strong> on the server with{" "}
              <strong>Vue, Angular, and React</strong> when the work reaches the front-end — but the
              through-line is systems thinking.
            </p>
            <p>
              Across fintech, events, and enterprise tooling, I&apos;ve designed message pipelines on
              Kafka and RabbitMQ, caching layers with Redis, and microservice topologies that survive
              the kind of load real customers put on them.
            </p>
            <p>
              The work I&apos;m most proud of is the boring kind: handler timeouts you never have to
              think about, retries that don&apos;t deadlock, deploys that don&apos;t wake anyone up.
            </p>

            <div className="story-stats">
              <div className="story-stat">
                <div className="n">5+</div>
                <div className="l">Years in production</div>
              </div>
              <div className="story-stat">
                <div className="n">10+</div>
                <div className="l">Enterprise projects</div>
              </div>
              <div className="story-stat">
                <div className="n">∞</div>
                <div className="l">Incidents survived</div>
              </div>
              <div className="story-stat">
                <div className="n">99.9%</div>
                <div className="l">Average uptime</div>
              </div>
            </div>
          </div>

          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <div className={`timeline-item${t.active ? " active" : ""}`} key={i}>
                <div>
                  <div className="role">{t.role}</div>
                  <div className="org">{t.org}</div>
                </div>
                <div className="yr">{t.yr}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="focus-cards">
          {FOCUS_AREAS.map((f, i) => (
            <div className="focus-card" key={i}>
              <div className="icon">{f.tag}</div>
              <h4>{f.title}</h4>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
