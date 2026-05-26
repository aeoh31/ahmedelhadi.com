export default function Nav() {
  return (
    <nav className="nav">
      <a className="nav-brand" href="#">
        <span className="dot" />
        <span>
          ahmedelhadi<span style={{ color: "var(--text-dim)" }}>.com</span>
        </span>
      </a>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#expertise">Expertise</a>
        <a href="#architecture">Systems</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
      </div>
      <a className="nav-cta" href="#contact">
        Contact
      </a>
    </nav>
  );
}
