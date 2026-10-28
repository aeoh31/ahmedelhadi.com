export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="shell">
        <span className="eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}>
          07 — Contact
        </span>
        <h2 style={{ marginTop: 20 }}>
          Let&apos;s build <span className="grad">something reliable</span>
          <br />
          together.
        </h2>
        <p className="lead">
          I&apos;m open to full-time software engineering roles, remote or in the UAE (Abu Dhabi or
          Dubai), and I can start immediately.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a className="btn btn-primary" href="mailto:ahmedelhadi.oh@gmail.com">
            ahmedelhadi.oh@gmail.com
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            className="btn btn-ghost"
            href="https://linkedin.com/in/ahmed-elhadi"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="contact-cards">
          <a className="contact-card" href="mailto:ahmedelhadi.oh@gmail.com">
            <div className="lbl">Email</div>
            <div className="val">ahmedelhadi.oh@gmail.com</div>
          </a>
          <a
            className="contact-card"
            href="https://linkedin.com/in/ahmed-elhadi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="lbl">LinkedIn</div>
            <div className="val">/in/ahmed-elhadi</div>
          </a>
          <div className="contact-card" style={{ cursor: "default" }}>
            <div className="lbl">Location</div>
            <div className="val">Abu Dhabi, UAE · GMT+4</div>
          </div>
        </div>
      </div>
    </section>
  );
}
