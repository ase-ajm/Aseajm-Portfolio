function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-heading">Experience</h2>

      <div className="experience-entry">
        <div className="experience-header">
          <h3>Estee Lauder — Product Area Manager Co-op</h3>
          <span className="experience-dates">Sept 2023 – March 2024</span>
        </div>
        <ul>
          <li>Designed and led training sessions for a team of 15 staff members on workplace safety and quality assurance, driving a 40% improvement in employee compliance.</li>
          <li>Collaborated with cross-functional teams to implement a hazard identification process that decreased potential risks by 25%.</li>
        </ul>
      </div>

      <div className="experience-entry">
        <div className="experience-header">
          <h3>AI Trading Card Grader — Senior Project</h3>
          <span className="experience-dates">Sept 2025 – Present</span>
        </div>
        <p className="experience-role">Front End Web Developer</p>
        <ul>
          <li>Enhanced model precision by curating a dataset of 100+ labeled defects, establishing a stronger foundation for the application's grading logic.</li>
          <li>Optimized front-end performance by implementing a custom React animation, enhancing visual feedback and delivering a smoother, more intuitive user experience.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
