const EXPERIENCE = [
  {
    yr: "02/2024 — Present · Dubai",
    org: "7 Pulse Events",
    role: "Senior Software Engineer",
    bullets: [
      "Delivered a company-wide event management platform by building and owning the internal dashboard, public event websites and AWS infrastructure end to end.",
      "Replaced manual event operations for sales, organizers and managers, saving about 15 hours a week, by building a dashboard for storyboards, inventory, event planning and lead tracking.",
      "Cut API response times by 80% by building REST APIs with Node.js and NestJS, adding Redis caching, fixing N+1 queries and tuning PostgreSQL and MongoDB indexes.",
      "Saved the team about 10 hours a week by introducing AI workflows in n8n and wiring them into the dashboard.",
      "Kept the platform at 99.9% uptime by running it on AWS with Docker, EC2, S3, CloudFront, RDS, DynamoDB and SNS.",
    ],
    stack: ["NestJS", "TypeScript", "React", "Next.js", "PostgreSQL", "MongoDB", "Redis", "AWS", "n8n"],
  },
  {
    yr: "02/2022 — 02/2024 · Dubai",
    org: "AlphaForge Labs",
    role: "Software Engineer",
    bullets: [
      "Delivered a bespoke white-label trading platform to multiple clients by owning products end to end, from requirements and planning to delegation, deployment and monitoring.",
      "Enabled live trading for clients by building market data and order execution services and integrating third-party brokers.",
      "Gave traders real-time market views by building React and Next.js trading screens that stream prices over WebSockets into live charts.",
      "Secured onboarding and money movement by designing authentication, KYC and payment workflows with third-party providers.",
      "Enabled real-time data flow between trading services by building event-driven microservices on Kafka and RabbitMQ.",
    ],
    stack: ["Node.js", "TypeScript", "Kafka", "RabbitMQ", "PostgreSQL", "React", "AWS", "Azure"],
  },
  {
    yr: "07/2021 — 01/2022 · Sharjah",
    org: "Shadil Trading",
    role: "Software Engineer",
    bullets: [
      "Supported ERP inventory, orders and invoicing by building backend services and APIs with Node.js and Express.js.",
      "Gave staff usable ERP screens by building them in Vue.js with Pinia and Bootstrap.",
      "Sped up reports and page loads by tuning PostgreSQL queries and schemas.",
    ],
    stack: ["Express.js", "Vue.js", "PostgreSQL"],
  },
  {
    yr: "01/2021 — 04/2021 · Sharjah",
    org: "Sharjah Sports Council",
    role: "Software Engineer Intern",
    bullets: [
      "Shipped full stack features with React and Node.js, testing and debugging them before release.",
      "Built responsive pages with React and Bootstrap, using the Context API for shared state.",
    ],
    stack: ["React", "Node.js", "Bootstrap"],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">04 — Experience</span>
          <h2>Roles where I owned the outcome, not just the ticket.</h2>
          <p>
            Four roles across fintech, live events, ERP and sports, all in the UAE. Same habit in
            each: understand the business, then build the system it needs.
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
