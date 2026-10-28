const FOCUS_AREAS = [
  {
    tag: "01",
    title: "Fintech & Trading",
    body: "Market data, order execution, broker integrations, KYC and payments for a white-label trading platform.",
  },
  {
    tag: "02",
    title: "Event Platforms",
    body: "Internal dashboards, inventory, storyboards and lead tracking for a growing events company.",
  },
  {
    tag: "03",
    title: "Real-Time Systems",
    body: "Live data over WebSockets and Socket.io, streaming prices, and event-driven services on Kafka and RabbitMQ.",
  },
  {
    tag: "04",
    title: "AI & Automation",
    body: "n8n agent workflows, MCP servers, LLM integrations and retrieval with embeddings and vector search.",
  },
  {
    tag: "05",
    title: "Cloud & Delivery",
    body: "AWS (EC2, S3, CloudFront, RDS, DynamoDB, SNS), Azure, GCP, Docker, Terraform and CI/CD.",
  },
];

const TIMELINE = [
  { yr: "2024 — Now", role: "Senior Software Engineer", org: "7 Pulse Events", active: true },
  { yr: "2022 — 2024", role: "Software Engineer", org: "AlphaForge Labs" },
  { yr: "2021 — 2022", role: "Software Engineer", org: "Shadil Trading" },
  { yr: "2021", role: "Software Engineer Intern", org: "Sharjah Sports Council" },
  { yr: "2017 — 2021", role: "BSc IT Networking & Security", org: "Ajman University" },
];

export default function About() {
  return (
    <section id="about">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">01 — About</span>
          <h2>Five years shipping the systems a business runs on.</h2>
          <p>
            I like owning a product from the first requirement to the production dashboard: APIs
            that stay fast, data that stays correct, and releases that don&apos;t wake anyone up.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-story">
            <p>
              I&apos;m <strong>Ahmed Elhadi</strong>, a software engineer based in Abu Dhabi. My
              day-to-day is <strong>Node.js, TypeScript and NestJS</strong> on the server and{" "}
              <strong>React and Next.js</strong>{" "}on the front end, and I&apos;ve shipped production
              code in <strong>Python (FastAPI)</strong> and <strong>Java (Spring Boot)</strong> too.
            </p>
            <p>
              At AlphaForge I helped lead a white-label trading platform for several clients: market
              data, order execution, broker integrations, KYC and payments, on Kafka and RabbitMQ. At
              7 Pulse Events I built the company&apos;s event platform end to end, from the internal
              dashboard and CRM to the public sites and the AWS infrastructure underneath.
            </p>
            <p>
              Lately I bring AI into real workflows: n8n automations wired into internal tools, MCP
              servers, and LLM features built straight into Node.js services.
            </p>

            <div className="story-stats">
              <div className="story-stat">
                <div className="n">5+</div>
                <div className="l">Years in production</div>
              </div>
              <div className="story-stat">
                <div className="n">4</div>
                <div className="l">Companies shipped for</div>
              </div>
              <div className="story-stat">
                <div className="n">2</div>
                <div className="l">Languages: Arabic, English</div>
              </div>
              <div className="story-stat">
                <div className="n">99.9%</div>
                <div className="l">Platform uptime</div>
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
