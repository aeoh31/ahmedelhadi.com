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
      {["Market", "Order", "Risk", "Ledger", "Reporting"].map((n, i) => {
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
      {["PG", "Redis", "ES"].map((n, i) => {
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
        const labels = ["ticket", "scan", "stream", "chat", "push", "stage", "metrics", "ops"];
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
              client{i + 1}
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
        WS Gateway · Redis
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
              worker {i + 1}
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
              svc-{i + 1}
            </text>
            <text
              x={x + 24}
              y={y + 30}
              fill="#5a607a"
              fontFamily="JetBrains Mono, monospace"
              fontSize="8"
            >
              node · k8s
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
    title: "AlphaForge — Real-time market platform",
    desc: "A trading platform with millisecond-sensitive ingestion, idempotent settlement, and audit-grade traceability. Designed the event-log topology and partitioning strategy that survived burst loads from market open.",
    stack: ["NestJS", "Kafka", "PostgreSQL", "Redis", "Grafana"],
    metrics: [
      { n: "12k+", l: "events / sec" },
      { n: "<40ms", l: "p99 ingest" },
      { n: "99.99%", l: "ordered delivery" },
    ],
    Preview: TradingPreview,
  },
  {
    size: "narrow",
    ptag: "Enterprise · Events",
    title: "7 Pulse — Event ops hub",
    desc: "Backend for live event ticketing, scanning, attendee comms and operator dashboards. Designed the hub-and-spoke event topology around a domain bus.",
    stack: ["NestJS", "Redis", "PostgreSQL", "WebSocket"],
    metrics: [
      { n: "30+", l: "live events" },
      { n: "M+", l: "attendees served" },
    ],
    Preview: EventsPreview,
  },
  {
    size: "half",
    ptag: "Real-time",
    title: "Live comms gateway",
    desc: "WebSocket fan-out with Redis pub/sub, presence tracking, and worker pools for back-pressure aware delivery to mobile and web clients.",
    stack: ["Node.js", "Redis", "WebSocket", "BullMQ"],
    metrics: [
      { n: "50k", l: "concurrent sockets" },
      { n: "<80ms", l: "fan-out p95" },
      { n: "4×", l: "throughput vs v1" },
    ],
    Preview: RealtimePreview,
  },
  {
    size: "half",
    ptag: "Cloud · Microservices",
    title: "Internal services platform",
    desc: "Reusable platform for spinning up NestJS microservices on Kubernetes with auth, observability and CI/CD baked in. Cut new-service setup from days to hours.",
    stack: ["NestJS", "Kubernetes", "Helm", "ArgoCD"],
    metrics: [
      { n: "12+", l: "services on platform" },
      { n: "−85%", l: "setup time" },
      { n: "0", l: "manual deploys" },
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
            A few projects that capture the kind of work I enjoy: high-throughput, multi-tenant, and
            production-real. NDAs apply; what I can share lives below.
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
