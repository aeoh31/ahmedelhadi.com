// Inline Lucide icons (ISC licence). Decorative by default: pair them with visible text.
const PATHS = {
  arrowRight: "M5 12h14M12 5l7 7-7 7",
  arrowUpRight: "M7 17 17 7M7 7h10v10",
  download: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "M18 6 6 18M6 6l12 12",
} as const;

export type IconName = keyof typeof PATHS;

export default function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
