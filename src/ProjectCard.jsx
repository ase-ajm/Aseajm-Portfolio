function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3 className="project-name">{project.name}</h3>
      <p className="project-meta">{project.role} — {project.timeframe}</p>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      <p className="project-problem">{project.problem}</p>

      <p className="project-subhead">What I built</p>
      <ul className="project-deliverables">
        {project.deliverables.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p className="project-metric">{project.metric}</p>

      <div className="project-links">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub repo</a>
        <a href={project.dashboardUrl} target="_blank" rel="noopener noreferrer">Dashboard</a>
        {project.twbUrl && (
          <a href={project.twbUrl} download>Download Tableau file</a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
