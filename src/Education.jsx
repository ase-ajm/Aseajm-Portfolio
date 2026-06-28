function Education() {
  const coursework = [
    'INFO310 Human Centered Design (Figma)',
    'INFO324 Agile Process & Product',
    'INFO210 Database Management (SQL)',
    'INFO371 Data Mining (Python/Pandas)'
  ];

  return (
    <section id="education" className="section">
      <h2 className="section-heading">Education</h2>
      <div className="education-entry">
        <div className="experience-header">
          <h3>Drexel University</h3>
          <span className="experience-dates">Expected September 2026</span>
        </div>
        <p className="experience-role">Bachelor of Science in Information Systems, Minor in Business Administration</p>
        <div className="coursework-tags">
          {coursework.map((c) => (
            <span key={c} className="tag">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
