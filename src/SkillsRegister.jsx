function SkillsRegister() {
  const rows = [
    { category: 'Programming', tools: 'Python, SQL, JavaScript, HTML/CSS, Java', usedIn: 'Both BA projects, coursework' },
    { category: 'BA Tools', tools: 'Lucidchart, Jira, RTM, Gap Analysis methodology', usedIn: 'Moon Restaurant, AseFinTech, Senior Project' },
    { category: 'Data Viz', tools: 'Tableau, Power BI, SQLite', usedIn: 'Moon Restaurant, AseFinTech' },
    { category: 'Frameworks', tools: 'React, Node.js, pandas, NumPy', usedIn: 'Senior Project, coursework' }
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-heading">Skills</h2>
      <table className="skills-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Tools</th>
            <th>Used in</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td>{row.category}</td>
              <td>{row.tools}</td>
              <td>{row.usedIn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default SkillsRegister;
