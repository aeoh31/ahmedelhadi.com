"use client";

import { useState } from "react";

type NodeData = {
  id: string;
  n: string;
  t: string;
  desc: string;
  techs: string[];
};

const LAYERS: { tag: string; nodes: NodeData[] }[] = [
  {
    tag: "Client",
    nodes: [
      {
        id: "web",
        n: "Web App",
        t: "Next.js · Vue",
        desc: "Server-rendered public sites and client apps, cached at the CDN edge and fed live data over WebSockets.",
        techs: ["Next.js", "Nuxt", "TypeScript", "Tailwind"],
      },
      {
        id: "mob",
        n: "Mobile",
        t: "React Native",
        desc: "Mobile clients hitting the same gateway over signed sessions.",
        techs: ["React Native", "TypeScript"],
      },
      {
        id: "adm",
        n: "Dashboard",
        t: "Internal ops",
        desc: "Internal operations console and CRM with role-based access, reporting and AI-assisted workflows.",
        techs: ["React", "shadcn/ui", "TanStack Query", "Recharts"],
      },
    ],
  },
  {
    tag: "Edge",
    nodes: [
      {
        id: "lb",
        n: "Load Balancer",
        t: "AWS ALB",
        desc: "TLS termination, weighted routing, and health-checked targets across AZs.",
        techs: ["AWS ALB", "CloudFront", "S3"],
      },
      {
        id: "gw",
        n: "API Gateway",
        t: "Rate-limited",
        desc: "Auth checks, rate limiting and request validation before traffic reaches the services.",
        techs: ["NestJS", "JWT", "REST", "GraphQL"],
      },
    ],
  },
  {
    tag: "Services",
    nodes: [
      {
        id: "auth",
        n: "Auth Service",
        t: "Identity",
        desc: "Login, short-lived JWTs with refresh tokens, and KYC onboarding through third-party providers.",
        techs: ["NestJS", "JWT", "Redis"],
      },
      {
        id: "user",
        n: "User Service",
        t: "Profiles",
        desc: "Tenants, profiles, organisations and role assignments.",
        techs: ["NestJS", "PostgreSQL"],
      },
      {
        id: "trade",
        n: "Trading Service",
        t: "Fintech core",
        desc: "Market data, order execution and broker integrations for a white-label trading platform.",
        techs: ["NestJS", "Kafka", "PostgreSQL"],
      },
      {
        id: "event",
        n: "Event Service",
        t: "Domain bus",
        desc: "Publishes domain events so services stay in sync without calling each other directly.",
        techs: ["Kafka", "RabbitMQ", "Node.js"],
      },
      {
        id: "notif",
        n: "Notification",
        t: "Fan-out",
        desc: "Email, in-app and WebSocket notifications delivered from queue workers.",
        techs: ["RabbitMQ", "AWS SNS", "Socket.io"],
      },
    ],
  },
  {
    tag: "Data",
    nodes: [
      {
        id: "pg",
        n: "PostgreSQL",
        t: "Primary store",
        desc: "Transactional store on Amazon RDS, with indexes and queries tuned for the hot paths.",
        techs: ["PostgreSQL", "Amazon RDS"],
      },
      {
        id: "mongo",
        n: "MongoDB",
        t: "Document store",
        desc: "Event, inventory and lead documents, with aggregation pipelines and tuned indexes.",
        techs: ["MongoDB", "Mongoose"],
      },
      {
        id: "redis",
        n: "Redis",
        t: "Cache · pub/sub",
        desc: "Hot-path cache and session store that took API response times down by 80%.",
        techs: ["Redis"],
      },
      {
        id: "kafka",
        n: "Kafka",
        t: "Event log",
        desc: "Durable, partitioned event log connecting services across boundaries.",
        techs: ["Apache Kafka"],
      },
      {
        id: "rmq",
        n: "RabbitMQ",
        t: "Work queues",
        desc: "Work queues for retries, background jobs and third-party calls taken off the request path.",
        techs: ["RabbitMQ"],
      },
    ],
  },
  {
    tag: "Platform",
    nodes: [
      {
        id: "docker",
        n: "Containers",
        t: "Docker",
        desc: "Every service ships as a container, built and deployed through CI/CD.",
        techs: ["Docker", "Jenkins", "CI/CD"],
      },
      {
        id: "k8s",
        n: "Kubernetes",
        t: "Orchestration",
        desc: "Container orchestration for the trading services, run together with the DevOps team.",
        techs: ["Kubernetes", "AWS", "Azure"],
      },
      {
        id: "aws",
        n: "AWS Cloud",
        t: "Infrastructure",
        desc: "EC2, S3, CloudFront, RDS, DynamoDB and SNS, defined as code and kept at 99.9% uptime.",
        techs: ["AWS", "Terraform", "DynamoDB"],
      },
    ],
  },
];

export default function SystemsArchitecture() {
  const [active, setActive] = useState("trade");

  const allNodes = LAYERS.flatMap((l) => l.nodes);
  const node = allNodes.find((n) => n.id === active) ?? allNodes[0];

  return (
    <section id="architecture">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">03 — Systems architecture</span>
          <h2>The shape of the systems I build.</h2>
          <p>
            A typical layout of the production systems I&apos;ve built at AlphaForge and 7 Pulse.
            Click any node to see the specifics. Data flows top to bottom; events fan out sideways.
          </p>
        </div>

        <div className="sys-arch">
          <div className="sys-stack">
            {LAYERS.map((layer, li) => (
              <div className="sys-layer" key={layer.tag}>
                <div className="layer-tag">
                  {String(li + 1).padStart(2, "0")} · {layer.tag}
                </div>
                <div className="layer-body">
                  {layer.nodes.map((n) => (
                    <div
                      key={n.id}
                      className={`sys-node${active === n.id ? " active" : ""}`}
                      onClick={() => setActive(n.id)}
                      onMouseEnter={() => setActive(n.id)}
                    >
                      <div className="n">{n.n}</div>
                      <div className="t">{n.t}</div>
                      {active === n.id && <span className="ind" />}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="sys-detail">
            <div>
              <div className="tag">Selected node</div>
              <h4>{node.n}</h4>
              <p>{node.desc}</p>
            </div>
            <div>
              <div className="tag">Stack</div>
              <div className="techs">
                {node.techs.map((t) => (
                  <span className="item" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
