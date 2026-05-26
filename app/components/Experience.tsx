const EXPERIENCE = [
  {
    yr: "2024 — Present",
    org: "7 Pulse Events",
    role: "Full Stack Developer",
    bullets: [
      "Designed and shipped scalable backend services in NestJS + TypeScript for an enterprise event platform.",
      "Built real-time communication channels for live attendee experiences using WebSockets and Redis pub/sub.",
      "Introduced caching strategies that reduced p99 latency on hot endpoints by ~60%.",
      "Tuned PostgreSQL and MongoDB queries and indexes to handle a 4× growth in concurrent events.",
    ],
    stack: ["NestJS", "TypeScript", "Redis", "PostgreSQL", "MongoDB", "WebSocket"],
  },
  {
    yr: "2023 — 2024",
    org: "AlphaForge Labs",
    role: "Software Developer",
    bullets: [
      "Built fintech trading platform components with strict idempotency and audit guarantees.",
      "Ingested high-frequency market data through partitioned event streams with exactly-once handlers.",
      "Designed scalable REST + WebSocket APIs serving trading dashboards.",
      "Owned testing pyramid + monitoring, including synthetic probes and SLO-based alerting.",
    ],
    stack: ["Node.js", "Kafka", "PostgreSQL", "Jest", "Grafana"],
  },
  {
    yr: "2022 — 2023",
    org: "Shadil Trading",
    role: "Software Developer",
    bullets: [
      "Built ERP backend services on Express.js for inventory, orders and accounting flows.",
      "Refactored a monolith database schema, cutting reporting queries from minutes to seconds.",
      "Introduced CI pipelines, code review standards and deployment automation.",
    ],
    stack: ["Express.js", "PostgreSQL", "Docker", "GitHub Actions"],
  },
  {
    yr: "2021 — 2022",
    org: "Sharjah Sports Council",
    role: "Software Engineer Intern",
    bullets: [
      "Shipped React features across internal tooling, focusing on accessibility and clean component APIs.",
      "Wrote integration tests and helped resolve a backlog of edge-case bugs.",
    ],
    stack: ["React", "TypeScript", "Jest"],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">04 — Experience</span>
          <h2>Roles where the systems thinking actually shipped.</h2>
          <p>
            Four roles, four very different problem spaces — fintech, events, ERP, sports — same
            underlying habit of building for failure first.
          </p>
        </div>

        <div className="exp-list">
          {EXPERIENCE.map((e, i) => (
            <div className="exp-item" key={i}>
              <div className="exp-meta">
                <div className="yr">{e.yr}</div>
                <h3>{e.org}</h3>
                <div className="role">{e.role}</div>
              </div>
              <div className="exp-body">
                <ul>
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <div className="stack">
                  {e.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
