function TradingPreview() {
  return (
    <svg
      viewBox="0 0 600 220"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="pg1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="rgba(94,234,212,0.8)" />
          <stop offset="1" stopColor="rgba(94,234,212,0)" />
        </linearGradient>
      </defs>
      {[40, 110, 180].map((y, i) => (
        <line
          key={i}
          x1="40"
          y1={y}
          x2="560"
          y2={y}
          stroke="rgba(255,255,255,0.06)"
          strokeDasharray="3 6"
        />
      ))}
      {["Market", "Orders", "Brokers", "KYC", "Payments"].map((n, i) => {
        const x = 60 + i * 110;
        return (
          <g key={n}>
            <rect
              x={x}
              y="22"
              width="86"
              height="36"
              rx="6"
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.15)"
            />
            <text
              x={x + 43}
              y="44"
              textAnchor="middle"
              fill="#e8ebf5"
              fontFamily="JetBrains Mono, monospace"
              fontSize="10"
            >
              {n}
            </text>
            <line x1={x + 43} y1="58" x2={x + 43} y2="98" stroke="url(#pg1)" strokeWidth="1.2" />
            <circle cx={x + 43} cy={68 + ((i * 7) % 20)} r="3" fill="rgba(94,234,212,0.9)">
              <animate
                attributeName="cy"
                values="58;110"
                dur={`${2.2 + i * 0.3}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="1;0"
                dur={`${2.2 + i * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        );
      })}
      <rect
        x="60"
        y="98"
        width="480"
        height="36"
        rx="6"
        fill="rgba(168,130,255,0.08)"
        stroke="rgba(168,130,255,0.3)"
      />
      <text
        x="300"
        y="120"
        textAnchor="middle"
        fill="#a882ff"
        fontFamily="JetBrains Mono, monospace"
        fontSize="11"
      >
        Kafka — event log
      </text>
      {["PostgreSQL", "MongoDB", "Redis"].map((n, i) => {
        const x = 120 + i * 170;
        return (
          <g key={n}>
            <rect
              x={x}
              y="158"
              width="160"
              height="36"
              rx="6"
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.15)"
            />
            <text
              x={x + 80}
              y="180"
              textAnchor="middle"
              fill="#8a90a6"
              fontFamily="JetBrains Mono, monospace"
              fontSize="10"
            >
              {n}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function EventsPreview() {
  return (
    <svg
      viewBox="0 0 600 220"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id="hub" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="rgba(94,234,212,0.5)" />
          <stop offset="1" stopColor="rgba(94,234,212,0)" />
        </radialGradient>
      </defs>
      <circle cx="300" cy="110" r="80" fill="url(#hub)" />
      <circle cx="300" cy="110" r="34" fill="rgba(10,14,28,0.9)" stroke="rgba(94,234,212,0.5)" />
      <text
        x="300"
        y="108"
        textAnchor="middle"
        fill="#5eead4"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
      >
        EVENT
      </text>
      <text
        x="300"
        y="120"
        textAnchor="middle"
        fill="#5eead4"
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
      >
        HUB
      </text>
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
        const x = 300 + Math.cos(a) * 180;
        const y = 110 + Math.sin(a) * 80;
        const labels = ["events", "stock", "leads", "sales", "sites", "n8n", "reports", "alerts"];
        return (
          <g key={i}>
            <line
              x1="300"
              y1="110"
              x2={x}
              y2={y}
              stroke="rgba(255,255,255,0.15)"
              strokeDasharray="3 4"
            />
            <circle cx={x} cy={y} r="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" />
            <text
              x={x}
              y={y + 3}
              textAnchor="middle"
              fill="#e8ebf5"
              fontFamily="JetBrains Mono, monospace"
              fontSize="8"
            >
              {labels[i]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function RealtimePreview() {
  return (
    <svg
      viewBox="0 0 600 220"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
    >
      {Array.from({ length: 6 }).map((_, i) => {
        const x = 20 + i * 100;
        return (
          <g key={i}>
            <rect
              x={x}
              y="20"
              width="74"
              height="28"
              rx="4"
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.15)"
            />
            <text
              x={x + 37}
              y="38"
              textAnchor="middle"
              fill="#8a90a6"
              fontFamily="JetBrains Mono, monospace"
              fontSize="9"
            >
              visitor {i + 1}
            </text>
            <line
              x1={x + 37}
              y1="48"
              x2="300"
              y2="100"
              stroke="rgba(94,234,212,0.3)"
              strokeDasharray="2 3"
            />
          </g>
        );
      })}
      <rect
        x="220"
        y="92"
        width="160"
        height="38"
        rx="6"
        fill="rgba(94,234,212,0.1)"
        stroke="rgba(94,234,212,0.5)"
      />
      <text
        x="300"
        y="116"
        textAnchor="middle"
        fill="#5eead4"
        fontFamily="JetBrains Mono, monospace"
        fontSize="10"
      >
        Next.js SSR · WebSockets
      </text>
      {Array.from({ length: 4 }).map((_, i) => {
        const x = 80 + i * 130;
        return (
          <g key={i}>
            <line
              x1="300"
              y1="130"
              x2={x + 50}
              y2="170"
              stroke="rgba(168,130,255,0.4)"
              strokeDasharray="2 3"
            />
            <rect
              x={x}
              y="170"
              width="100"
              height="28"
              rx="4"
              fill="rgba(168,130,255,0.08)"
              stroke="rgba(168,130,255,0.3)"
            />
            <text
              x={x + 50}
              y="188"
              textAnchor="middle"
              fill="#a882ff"
              fontFamily="JetBrains Mono, monospace"
              fontSize="9"
            >
              {["events", "leads", "CMS", "CRM"][i]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function MicroPreview() {
  return (
    <svg
      viewBox="0 0 600 220"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
    >
      {Array.from({ length: 6 }).map((_, i) => {
        const x = 40 + (i % 3) * 180;
        const y = 30 + Math.floor(i / 3) * 90;
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width="150"
              height="60"
              rx="6"
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.15)"
            />
            <circle cx={x + 12} cy={y + 12} r="3" fill="rgba(94,234,212,0.9)" />
            <text
              x={x + 24}
              y={y + 15}
              fill="#e8ebf5"
              fontFamily="JetBrains Mono, monospace"
              fontSize="10"
            >
              {["trigger", "LLM", "MCP", "RAG", "action", "dashboard"][i]}
            </text>
            <text
              x={x + 24}
              y={y + 30}
              fill="#5a607a"
              fontFamily="JetBrains Mono, monospace"
              fontSize="8"
            >
              n8n flow
            </text>
            <line
              x1={x + 150}
              y1={y + 30}
              x2={x + 180}
              y2={y + 30}
              stroke="rgba(94,234,212,0.4)"
              strokeDasharray="2 3"
            />
          </g>
        );
      })}
    </svg>
  );
}

const PROJECTS = [
  {
    size: "wide",
    ptag: "Fintech · Trading",
    title: "AlphaForge — White-label trading platform",
    desc: "One codebase that each client launched under its own brand: market data, order execution, broker integrations, KYC and payments, streamed live to React trading screens. Owned products end to end, from requirements to deployment and monitoring.",
    stack: ["Node.js", "TypeScript", "Kafka", "RabbitMQ", "PostgreSQL", "React"],
    metrics: [
      { n: "Multi", l: "client brands, one codebase" },
      { n: "Live", l: "prices over WebSockets" },
      { n: "2", l: "clouds: AWS + Azure" },
    ],
    Preview: TradingPreview,
  },
  {
    size: "narrow",
    ptag: "Events · Internal tools",
    title: "7 Pulse — Event operations hub",
    desc: "The internal dashboard and CRM the company runs on: storyboards, inventory, event planning, reporting and leads from the public sites.",
    stack: ["NestJS", "React", "PostgreSQL", "MongoDB", "AWS"],
    metrics: [
      { n: "40", l: "staff using it" },
      { n: "15h", l: "saved / week" },
    ],
    Preview: EventsPreview,
  },
  {
    size: "half",
    ptag: "Real-time · Web",
    title: "Live event websites",
    desc: "Public event sites built in Next.js with server-side rendering for speed and SEO, live event data over WebSockets, and contact forms that feed leads straight into the CRM.",
    stack: ["Next.js", "Socket.io", "Node.js", "CloudFront"],
    metrics: [
      { n: "5k", l: "monthly visitors" },
      { n: "30", l: "events / year" },
      { n: "99.9%", l: "uptime" },
    ],
    Preview: RealtimePreview,
  },
  {
    size: "half",
    ptag: "AI · Automation",
    title: "AI automation layer",
    desc: "n8n agent workflows, MCP servers and LLM calls from Node.js, wired into the internal dashboard so the team stops doing repetitive work by hand.",
    stack: ["n8n", "MCP", "OpenAI", "Claude", "Node.js"],
    metrics: [
      { n: "10h", l: "saved / week" },
      { n: "MCP", l: "LLM tooling" },
      { n: "RAG", l: "embeddings + vector search" },
    ],
    Preview: MicroPreview,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">05 — Projects</span>
          <h2>Selected systems work.</h2>
          <p>
            Production work from my last two roles: multi-client, real-time, and used by real teams
            every day. NDAs apply, so the details stay high level.
          </p>
        </div>

        <div className="projects">
          {PROJECTS.map((p, i) => (
            <div key={i} className={`project ${p.size}`}>
              <div className="ptag">{p.ptag}</div>
              <h3>{p.title}</h3>
              <p className="desc">{p.desc}</p>
              <div className="preview">
                <p.Preview />
              </div>
              <div className="metrics">
                {p.metrics.map((m, j) => (
                  <div key={j}>
                    <div className="n">{m.n}</div>
                    <div className="l">{m.l}</div>
                  </div>
                ))}
              </div>
              <div className="stack">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
