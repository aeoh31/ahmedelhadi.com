"use client";

import { useEffect, useRef, useState } from "react";

const CLUSTERS = [
  {
    id: "be",
    label: "Backend",
    angle: -90,
    dist: 270,
    items: ["Node.js", "NestJS", "Express", "TypeScript", "REST", "Microservices"],
  },
  {
    id: "fe",
    label: "Frontend",
    angle: -30,
    dist: 270,
    items: ["Vue.js", "Angular", "React", "Next.js", "Tailwind", "State"],
  },
  {
    id: "data",
    label: "Data & Storage",
    angle: 30,
    dist: 270,
    items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    id: "dist",
    label: "Distributed",
    angle: 90,
    dist: 270,
    items: ["Kafka", "RabbitMQ", "Event-Driven", "Queues", "Realtime"],
  },
  {
    id: "cloud",
    label: "Cloud / DevOps",
    angle: 150,
    dist: 270,
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "IaC"],
  },
  {
    id: "qa",
    label: "Quality",
    angle: 210,
    dist: 270,
    items: ["Jest", "Playwright", "Integration", "E2E", "Perf"],
  },
];

export default function Expertise() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [dim, setDim] = useState({ w: 0, h: 720 });

  useEffect(() => {
    const update = () => {
      if (wrapRef.current) {
        const r = wrapRef.current.getBoundingClientRect();
        setDim({ w: r.width, h: r.height });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const cx = dim.w / 2;
  const cy = dim.h / 2;

  const nodes = CLUSTERS.map((c) => {
    const rad = (c.angle * Math.PI) / 180;
    return {
      ...c,
      x: cx + Math.cos(rad) * c.dist,
      y: cy + Math.sin(rad) * c.dist,
    };
  });

  return (
    <section id="expertise" className="expertise">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">02 — Expertise</span>
          <h2>An architecture map, not a progress bar.</h2>
          <p>
            Tools are evidence, not identity. Here&apos;s the rough topology of what I reach for,
            organised the way I actually think about a system.
          </p>
        </div>

        <div className="arch-map" ref={wrapRef}>
          <div className="grid-overlay" />

          {dim.w > 0 && (
            <svg className="arch-svg" width={dim.w} height={dim.h}>
              <defs>
                <linearGradient id="line" x1="0" x2="1">
                  <stop offset="0" stopColor="rgba(94,234,212,0.8)" />
                  <stop offset="1" stopColor="rgba(168,130,255,0.4)" />
                </linearGradient>
                <radialGradient id="halo">
                  <stop offset="0" stopColor="rgba(94,234,212,0.4)" />
                  <stop offset="1" stopColor="rgba(94,234,212,0)" />
                </radialGradient>
              </defs>
              {nodes.map((n) => (
                <g key={n.id}>
                  <line
                    x1={cx}
                    y1={cy}
                    x2={n.x}
                    y2={n.y}
                    stroke="url(#line)"
                    strokeWidth="1"
                    strokeDasharray="3 4"
                    opacity="0.6"
                  />
                  <circle cx={n.x} cy={n.y} r="40" fill="url(#halo)" opacity="0.5" />
                </g>
              ))}
            </svg>
          )}

          <div className="arch-center">
            <div>
              <div className="label">
                Ahmed
                <br />
                Elhadi
              </div>
              <div className="sub">core</div>
            </div>
          </div>

          {dim.w > 0 &&
            nodes.map((n) => (
              <div
                key={n.id}
                className="arch-cluster"
                style={{
                  left: `${n.x}px`,
                  top: `${n.y}px`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="head">
                  <span className="ic" />
                  {n.label}
                </div>
                <div className="items">
                  {n.items.map((item) => (
                    <span className="item" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
