import { PROFILE } from "../content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <p>© 2026 {PROFILE.name}</p>
        <p>{PROFILE.location}</p>
      </div>
    </footer>
  );
}
