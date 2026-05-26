"use client";

import { useEffect, useRef, useState } from "react";

const TECH_ORBIT = [
  { ring: 1, label: "Node.js", group: "backend" },
  { ring: 1, label: "TypeScript", group: "backend" },
  { ring: 1, label: "NestJS", group: "backend" },
  { ring: 1, label: "Express", group: "backend" },
  { ring: 2, label: "React", group: "frontend" },
  { ring: 2, label: "Next.js", group: "frontend" },
  { ring: 2, label: "Vue", group: "frontend" },
  { ring: 2, label: "Angular", group: "frontend" },
  { ring: 2, label: "Tailwind", group: "frontend" },
  { ring: 3, label: "PostgreSQL", group: "data" },
  { ring: 3, label: "MongoDB", group: "data" },
  { ring: 3, label: "Redis", group: "data" },
  { ring: 3, label: "Kafka", group: "messaging" },
  { ring: 3, label: "RabbitMQ", group: "messaging" },
  { ring: 3, label: "AWS", group: "cloud" },
  { ring: 3, label: "Docker", group: "cloud" },
  { ring: 3, label: "Kubernetes", group: "cloud" },
  { ring: 3, label: "Jest", group: "qa" },
  { ring: 3, label: "Playwright", group: "qa" },
] as const;

const GROUP_COLORS: Record<string, string> = {
  backend: "var(--cyan)",
  frontend: "var(--violet)",
  data: "var(--green)",
  messaging: "var(--amber)",
  cloud: "#7dd3fc",
  qa: "#f0abfc",
};

export default function TechOrbit() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ w: 0, h: 640 });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const update = () => {
      if (wrapRef.current) {
        const r = wrapRef.current.getBoundingClientRect();
        setContainerSize({ w: r.width, h: r.height });
      }
    };
    update();
    window.addEventListener("resize", update);
    let raf: number;
    const loop = () => {
      setTick((t) => t + 0.05);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("resize", update);
      cancelAnimationFrame(raf);
    };
  }, []);

  const cx = containerSize.w / 2;
  const cy = containerSize.h / 2;
  const baseR = Math.min(containerSize.w, containerSize.h) * 0.28;
  const ringR = [baseR * 0.65, baseR * 0.95, baseR * 1.35];

  const ringGroups = ([1, 2, 3] as const).map((r) =>
    TECH_ORBIT.filter((t) => t.ring === r)
  );

  const speeds = [0.012, -0.008, 0.005];
  const offsets = [0, Math.PI / 5, Math.PI / 3];

  return (
    <section id="stack">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">06 — Stack</span>
          <h2>A living ecosystem, not a tag soup.</h2>
          <p>
            What I reach for, grouped by responsibility. Inner rings are the dependable defaults;
            the outer ring is the infrastructure that keeps them honest.
          </p>
        </div>

        <div className="orbit-wrap" ref={wrapRef}>
          <div className="grid-overlay" />

          <div className="orbit-legend">
            {Object.entries(GROUP_COLORS).map(([k, v]) => (
              <span className="lg" key={k}>
                <span className="sq" style={{ background: v }} />
                {k}
              </span>
            ))}
          </div>

          {ringR.map((r, i) => (
            <div
              key={i}
              className="orbit-ring"
              style={{
                width: r * 2,
                height: r * 2,
                marginLeft: -r,
                marginTop: -r,
              }}
            />
          ))}

          <div className="orbit-core">
            <div>
              <div className="l">Core</div>
              <div className="l2">Ahmed</div>
            </div>
          </div>

          {containerSize.w > 0 &&
            ringGroups.map((items, ri) =>
              items.map((t, i) => {
                const angle =
                  offsets[ri] + (i / items.length) * Math.PI * 2 + tick * speeds[ri];
                const x = Math.cos(angle) * ringR[ri];
                const y = Math.sin(angle) * ringR[ri];
                return (
                  <div
                    key={`${ri}-${i}`}
                    className="orbit-node"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                  >
                    <div className="orbit-node-inner">
                      <span
                        className="swatch"
                        style={{ background: GROUP_COLORS[t.group] }}
                      />
                      {t.label}
                    </div>
                  </div>
                );
              })
            )}
        </div>
      </div>
    </section>
  );
}
