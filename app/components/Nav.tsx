"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { PROFILE } from "../content";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <nav className="shell nav" aria-label="Main">
        <a className="brand" href="#top">
          {PROFILE.name}
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? "close" : "menu"} />
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>

        <div id="nav-menu" className={`nav-menu${open ? " is-open" : ""}`}>
          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary btn-sm" href={PROFILE.resume} download>
            <Icon name="download" size={16} />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
