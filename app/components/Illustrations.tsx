// Line-art diagrams of the systems on the site. Pure SVG: moving dots use SMIL
// and the rest uses CSS, and both are hidden or stopped under reduced motion.

type Box = { x: number; y: number; w: number; h: number; label: string; strong?: boolean };

function Node({ x, y, w, h, label, strong }: Box) {
  return (
    <g className={strong ? "dg-node dg-node-strong" : "dg-node"}>
      <rect x={x} y={y} width={w} height={h} rx={8} />
      <text x={x + w / 2} y={y + h / 2} dominantBaseline="central" textAnchor="middle">
        {label}
      </text>
    </g>
  );
}

function Dots({ id, d, count, dur }: { id: string; d: string; count: number; dur: number }) {
  return (
    <>
      <path id={id} d={d} fill="none" stroke="none" />
      {Array.from({ length: count }, (_, i) => (
        <circle key={i} r={4} className="flow-dot">
          <animateMotion dur={`${dur}s`} begin={`-${(i * dur) / count}s`} repeatCount="indefinite">
            <mpath href={`#${id}`} />
          </animateMotion>
        </circle>
      ))}
    </>
  );
}

export function HeroDiagram() {
  const services = [
    { x: 30, label: "Trading" },
    { x: 200, label: "Events" },
    { x: 370, label: "AI agents" },
  ];
  const stores = [
    { x: 30, label: "PostgreSQL" },
    { x: 200, label: "Redis" },
    { x: 370, label: "MongoDB" },
  ];
  const cols = [90, 260, 430];

  return (
    <svg
      className="diagram hero-diagram"
      viewBox="0 0 520 440"
      role="img"
      aria-label="Diagram of a system I build: web and mobile apps call a NestJS API, which publishes to a Kafka event stream feeding trading, events and AI services, backed by PostgreSQL, Redis and MongoDB."
    >
      <g className="dg-lines">
        <path d="M260 52 V100 M260 144 V190" />
        {cols.map((x) => (
          <path key={x} d={`M${x} 230 V280 M${x} 324 V372`} />
        ))}
      </g>

      <Dots id="hero-flow-a" d="M260 52 V210 H90 V372" count={2} dur={4.5} />
      <Dots id="hero-flow-b" d="M260 52 V372" count={2} dur={3.6} />
      <Dots id="hero-flow-c" d="M260 52 V210 H430 V372" count={2} dur={5} />

      <Node x={180} y={8} w={160} h={44} label="Web · Mobile" />
      <Node x={180} y={100} w={160} h={44} label="API · NestJS" />
      <Node x={30} y={190} w={460} h={40} label="Kafka event stream" strong />
      {services.map((s) => (
        <Node key={s.label} x={s.x} y={280} w={120} h={44} label={s.label} />
      ))}
      {stores.map((s) => (
        <Node key={s.label} x={s.x} y={372} w={120} h={44} label={s.label} />
      ))}
    </svg>
  );
}

function Chain({ id, labels, label }: { id: string; labels: string[]; label: string }) {
  const w = 66;
  const gap = (320 - w * labels.length) / (labels.length - 1);
  const xs = labels.map((_, i) => i * (w + gap));
  return (
    <svg className="diagram case-diagram" viewBox="0 0 320 100" role="img" aria-label={label}>
      <path className="dg-lines" d={`M${w} 50 H${xs[xs.length - 1]}`} />
      <Dots id={id} d={`M${w / 2} 50 H${xs[xs.length - 1] + w / 2}`} count={3} dur={4} />
      {labels.map((l, i) => (
        <Node key={l} x={xs[i]} y={30} w={w} h={40} label={l} strong={i === 1} />
      ))}
    </svg>
  );
}

function OpsDashboard() {
  const bars = [38, 56, 44, 70, 52, 64];
  return (
    <svg
      className="diagram case-diagram"
      viewBox="0 0 320 100"
      role="img"
      aria-label="Sketch of the operations dashboard: a sidebar, summary cards and a bar chart."
    >
      <g className="dg-frame">
        <rect x={1} y={1} width={318} height={98} rx={8} />
        <path d="M60 1 V99" />
      </g>
      <g className="dg-muted">
        <rect x={12} y={14} width={36} height={6} rx={3} />
        <rect x={12} y={30} width={28} height={6} rx={3} />
        <rect x={12} y={46} width={32} height={6} rx={3} />
        <rect x={12} y={62} width={24} height={6} rx={3} />
      </g>
      <g className="dg-node">
        <rect x={72} y={12} width={70} height={22} rx={5} />
        <rect x={150} y={12} width={70} height={22} rx={5} />
        <rect x={228} y={12} width={80} height={22} rx={5} />
      </g>
      {bars.map((h, i) => (
        <rect
          key={i}
          className="dg-bar"
          x={78 + i * 38}
          y={90 - h * 0.75}
          width={22}
          height={h * 0.75}
          rx={3}
          style={{ animationDelay: `${i * 0.25}s` }}
        />
      ))}
    </svg>
  );
}

function LiveSite() {
  return (
    <svg
      className="diagram case-diagram"
      viewBox="0 0 320 100"
      role="img"
      aria-label="Sketch of a live event website receiving updates from the server over WebSockets."
    >
      <g className="dg-frame">
        <rect x={1} y={1} width={196} height={98} rx={8} />
        <path d="M1 20 H197" />
      </g>
      <g className="dg-muted">
        <circle cx={12} cy={10.5} r={3} />
        <circle cx={22} cy={10.5} r={3} />
        <circle cx={32} cy={10.5} r={3} />
        <rect x={14} y={34} width={110} height={8} rx={4} />
        <rect x={14} y={50} width={150} height={6} rx={3} />
        <rect x={14} y={62} width={130} height={6} rx={3} />
        <rect x={14} y={78} width={60} height={12} rx={6} />
      </g>
      <g className="dg-live">
        <rect x={140} y={30} width={44} height={16} rx={8} />
        <circle className="dg-pulse" cx={150} cy={38} r={3} />
        <text x={170} y={38} dominantBaseline="central" textAnchor="middle">
          LIVE
        </text>
      </g>
      <path className="dg-socket" d="M240 50 H198" />
      <Dots id="live-flow" d="M248 50 H198" count={2} dur={2.4} />
      <Node x={248} y={30} w={70} h={40} label="Socket" strong />
    </svg>
  );
}

export function CaseDiagram({ kind }: { kind: string }) {
  switch (kind) {
    case "trading":
      return (
        <Chain
          id="flow-trading"
          labels={["Prices", "Kafka", "Orders", "Broker"]}
          label="Flow of the trading platform: market prices go through Kafka to order services and on to brokers."
        />
      );
    case "ops":
      return <OpsDashboard />;
    case "live":
      return <LiveSite />;
    case "ai":
      return (
        <Chain
          id="flow-ai"
          labels={["Trigger", "LLM", "MCP", "Action"]}
          label="Flow of an AI workflow: a trigger calls an LLM, which uses MCP tools to take an action."
        />
      );
    default:
      return null;
  }
}
