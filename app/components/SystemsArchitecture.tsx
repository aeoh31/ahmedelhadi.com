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
        desc: "Server-rendered web client with edge caching and adaptive bundles.",
        techs: ["Next.js", "Vue 3", "TypeScript", "Tailwind"],
      },
      {
        id: "mob",
        n: "Mobile",
        t: "PWA / native",
        desc: "Mobile clients hitting the same gateway over signed sessions.",
        techs: ["React Native", "TypeScript"],
      },
      {
        id: "adm",
        n: "Admin",
        t: "Angular",
        desc: "Internal operator console with role-based access and audit logs.",
        techs: ["Angular", "RxJS", "Material"],
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
        techs: ["AWS ALB", "Route 53", "WAF"],
      },
      {
        id: "gw",
        n: "API Gateway",
        t: "Rate-limited",
        desc: "Auth, rate limiting, request shaping and per-tenant quotas before routing inward.",
        techs: ["NestJS", "JWT", "Rate-limit"],
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
        desc: "OAuth2 + refresh-token rotation, MFA, and short-lived session tokens.",
        techs: ["NestJS", "Passport", "Redis"],
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
        desc: "Order ingestion, position keeping, idempotent settlement.",
        techs: ["NestJS", "Kafka", "PostgreSQL"],
      },
      {
        id: "event",
        n: "Event Service",
        t: "Domain bus",
        desc: "Domain event publishing with outbox pattern and exactly-once semantics.",
        techs: ["Kafka", "Debezium", "Avro"],
      },
      {
        id: "notif",
        n: "Notification",
        t: "Fan-out",
        desc: "Email, push, in-app and WebSocket fan-out via worker pools.",
        techs: ["RabbitMQ", "BullMQ", "SES"],
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
        desc: "Transactional store with logical replication and PITR backups.",
        techs: ["PostgreSQL", "PgBouncer", "Debezium"],
      },
      {
        id: "mongo",
        n: "MongoDB",
        t: "Document store",
        desc: "Catalog and event documents — sharded and replicated.",
        techs: ["MongoDB", "Mongoose"],
      },
      {
        id: "redis",
        n: "Redis",
        t: "Cache · pub/sub",
        desc: "Hot path cache, session store, and pub/sub for real-time channels.",
        techs: ["Redis", "Lua", "Redlock"],
      },
      {
        id: "kafka",
        n: "Kafka",
        t: "Event log",
        desc: "Durable, partitioned event log connecting services across boundaries.",
        techs: ["Kafka", "Schema Registry"],
      },
      {
        id: "rmq",
        n: "RabbitMQ",
        t: "Work queues",
        desc: "Task queues for retries, scheduled jobs and backpressure-aware workers.",
        techs: ["RabbitMQ", "BullMQ"],
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
        desc: "Reproducible builds with multi-stage caching and SBOM scanning.",
        techs: ["Docker", "BuildKit"],
      },
      {
        id: "k8s",
        n: "Kubernetes",
        t: "Orchestration",
        desc: "HPA, pod disruption budgets, blue/green and canary rollouts.",
        techs: ["EKS", "Helm", "ArgoCD"],
      },
      {
        id: "aws",
        n: "AWS Cloud",
        t: "Infrastructure",
        desc: "VPC, IAM, observability, S3, SES — wired together with IaC.",
        techs: ["AWS", "Terraform", "CloudWatch"],
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
            A canonical layout of a production system I&apos;ve shipped variations of — click any
            node to see the specifics. Data flows top to bottom; events fan out sideways.
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
