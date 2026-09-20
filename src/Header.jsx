function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">Asef Ajmain</div>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="/AsefAResume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </nav>

      <div className="hero">
        <p className="hero-eyebrow">Business Analyst</p>
        <h1 className="hero-title">
          I turn messy process data into the documents that get things built:
          stakeholder maps, requirements, and dashboards that hold up in a room
          full of people who disagree.
        </h1>
        <p className="hero-status">Drexel IS, Sept 2026 — open to BA internships and entry level roles</p>
        <div className="hero-links">
          <a href="https://github.com/ase-ajm" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/aseajm" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="/Resume_Asef_Ajmain_Master.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="mailto:aseajm04@gmail.com">Email</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
