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
  // Ref on the shell so it's always mounted — used to measure content width
  const shellRef = useRef<HTMLDivElement>(null);
  const [contentW, setContentW] = useState(0);

  // Separate ref for the arch-map (radial layout needs its own dimensions)
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapDim, setMapDim] = useState({ w: 0, h: 720 });

  useEffect(() => {
    const updateShell = () => {
      if (shellRef.current) setContentW(shellRef.current.getBoundingClientRect().width);
    };
    const updateMap = () => {
      if (mapRef.current) {
        const r = mapRef.current.getBoundingClientRect();
        setMapDim({ w: r.width, h: r.height });
      }
    };
    const update = () => { updateShell(); updateMap(); };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isMobile = contentW > 0 && contentW < 640;

  const cx = mapDim.w / 2;
  const cy = mapDim.h / 2;

  const nodes = CLUSTERS.map((c) => {
    const rad = (c.angle * Math.PI) / 180;
    return { ...c, x: cx + Math.cos(rad) * c.dist, y: cy + Math.sin(rad) * c.dist };
  });

  return (
    <section id="expertise" className="expertise">
      <div className="shell" ref={shellRef}>
        <div className="section-head">
          <span className="eyebrow">02 — Expertise</span>
          <h2>An architecture map, not a progress bar.</h2>
          <p>
            Tools are evidence, not identity. Here&apos;s the rough topology of what I reach for,
            organised the way I actually think about a system.
          </p>
        </div>

        {isMobile ? (
          <div className="grid grid-cols-1 gap-3">
            {CLUSTERS.map((c) => (
              <div key={c.id} className="p-3.5 bg-[rgba(10,14,28,0.85)] backdrop-blur-md border border-[var(--border-strong)] rounded-[var(--r-md)] cursor-pointer transition-colors hover:border-[var(--cyan)]">
                <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--text-muted)] mb-2.5">
                  <span className="w-3.5 h-3.5 rounded-[3px] shrink-0 border border-[var(--border)]" style={{ background: "linear-gradient(135deg, var(--cyan-soft), var(--violet-soft))" }} />
                  {c.label}
                </div>
                <div className="flex flex-wrap gap-[5px]">
                  {c.items.map((item) => (
                    <span className="font-mono text-[10px] px-[7px] py-0.5 bg-[var(--surface)] border border-[var(--border)] rounded-[4px] text-[var(--text)]" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="arch-map" ref={mapRef}>
            <div className="grid-overlay" />

            {mapDim.w > 0 && (
              <svg className="arch-svg" width={mapDim.w} height={mapDim.h}>
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
                      x1={cx} y1={cy} x2={n.x} y2={n.y}
                      stroke="url(#line)" strokeWidth="1" strokeDasharray="3 4" opacity="0.6"
                    />
                    <circle cx={n.x} cy={n.y} r="40" fill="url(#halo)" opacity="0.5" />
                  </g>
                ))}
              </svg>
            )}

            <div className="arch-center">
              <div>
                <div className="label">Ahmed<br />Elhadi</div>
                <div className="sub">core</div>
              </div>
            </div>

            {mapDim.w > 0 &&
              nodes.map((n) => (
                <div
                  key={n.id}
                  className="arch-cluster"
                  style={{ left: `${n.x}px`, top: `${n.y}px`, transform: "translate(-50%, -50%)" }}
                >
                  <div className="head">
                    <span className="ic" />
                    {n.label}
                  </div>
                  <div className="items">
                    {n.items.map((item) => (
                      <span className="item" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
