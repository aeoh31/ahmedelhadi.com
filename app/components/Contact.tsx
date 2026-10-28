import Icon from "./Icon";
import { PROFILE } from "../content";

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="shell contact-inner" data-reveal>
        <p className="eyebrow">
          <span aria-hidden="true">05 / </span>contact
        </p>
        <h2 id="contact-title">Let&apos;s build something reliable together.</h2>
        <p className="lead">
          I&apos;m open to full-time software engineering roles, remote or in the UAE (Abu Dhabi or
          Dubai), and I can start immediately.
        </p>

        <div className="actions">
          <a className="btn btn-primary" href={`mailto:${PROFILE.email}`}>
            <Icon name="mail" size={16} />
            Email me
          </a>
          <a className="btn btn-secondary" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
            <Icon name="arrowUpRight" size={16} />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>

        <ul className="contact-list">
          <li>
            <span className="contact-label">Email</span>
            <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          </li>
          <li>
            <span className="contact-label">LinkedIn</span>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
              {PROFILE.linkedinLabel}
            </a>
          </li>
          <li>
            <span className="contact-label">Location</span>
            <span>
              {PROFILE.location} · {PROFILE.timezone}
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
