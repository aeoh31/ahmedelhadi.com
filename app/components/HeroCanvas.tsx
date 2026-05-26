"use client";

import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    let W = 0,
      H = 0;

    type Node = { x: number; y: number; vx: number; vy: number; r: number; hub: boolean };
    type Edge = { a: number; b: number };
    type Packet = { edge: Edge; t: number; speed: number; color: "cyan" | "violet" };

    let nodes: Node[] = [];
    let edges: Edge[] = [];
    let packets: Packet[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      build();
    };

    const build = () => {
      nodes = [];
      edges = [];
      packets = [];
      const count = Math.max(28, Math.min(54, Math.floor((W * H) / 28000)));
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          r: Math.random() < 0.18 ? 2.6 : 1.6,
          hub: Math.random() < 0.12,
        });
      }
      for (let i = 0; i < nodes.length; i++) {
        const distances: { j: number; d: number }[] = [];
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          distances.push({ j, d: dx * dx + dy * dy });
        }
        distances.sort((a, b) => a.d - b.d);
        const k = nodes[i].hub ? 4 : 2;
        for (let n = 0; n < k && n < distances.length; n++) {
          const j = distances[n].j;
          if (j > i) edges.push({ a: i, b: j });
        }
      }
      for (let i = 0; i < 10; i++) {
        const e = edges[Math.floor(Math.random() * edges.length)];
        if (!e) continue;
        packets.push({
          edge: e,
          t: Math.random(),
          speed: 0.0025 + Math.random() * 0.005,
          color: Math.random() < 0.5 ? "cyan" : "violet",
        });
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, W, H);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }

      for (const e of edges) {
        const a = nodes[e.a];
        const b = nodes[e.b];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxD = 280;
        if (dist > maxD) continue;
        const alpha = (1 - dist / maxD) * 0.18;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(140, 180, 230, ${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        if (n.hub) {
          ctx.fillStyle = "rgba(94, 234, 212, 0.9)";
          ctx.shadowColor = "rgba(94, 234, 212, 0.7)";
          ctx.shadowBlur = 12;
        } else {
          ctx.fillStyle = "rgba(180, 200, 230, 0.6)";
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      for (const p of packets) {
        p.t += p.speed;
        if (p.t >= 1) {
          p.t = 0;
          const e = edges[Math.floor(Math.random() * edges.length)];
          if (e) p.edge = e;
        }
        const a = nodes[p.edge.a];
        const b = nodes[p.edge.b];
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const color =
          p.color === "cyan" ? "rgba(94, 234, 212, 1)" : "rgba(168, 130, 255, 1)";
        ctx.shadowColor = color;
        ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.arc(x, y, 2.4, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
}
