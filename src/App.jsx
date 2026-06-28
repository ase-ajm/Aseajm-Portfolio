import Header from './Header';
import About from './About';
import ProjectCard from './ProjectCard';
import SkillsRegister from './SkillsRegister';
import Experience from './Experience';
import Education from './Education';
import Footer from './Footer';
import './styles.css';

const projects = [
  {
    id: 'asefintech',
    name: 'AseFinTech — HR Onboarding Optimization',
    role: 'Business Analyst (Portfolio Project)',
    timeframe: 'June 2026',
    tags: ['SQL', 'Python', 'Tableau', 'SQLite'],
    problem:
      'AseFinTech gives new hires a 90-day probation period to prove they\u2019re a fit for the role. A 1,000-row behavioral dataset revealed that only 34.4% of new hires were passing: 38% were failing and 27.6% were resigning before the period ended.',
    deliverables: [
      'Stakeholder Analysis identifying 8 stakeholders and their influence, interest, and engagement strategy',
      'Gap Analysis comparing current vs. desired state across training, onboarding, manager check-ins, and IT setup',
      'Requirements Traceability Matrix (RTM) linking 6 business requirements to user stories and test cases',
      'SQL queries and Python scripts to calculate KPI averages from the dataset',
      'Tableau dashboard visualizing probation outcomes, KPI comparisons, and department-level breakdowns'
    ],
    metric: '65.6% failure + resignation rate identified',
    githubUrl: 'https://github.com/ase-ajm/Business-Analyst-Portfolio-Project-AseFinTech',
    dashboardUrl: '/AseFinTech.pdf',
    twbUrl: '/AseFinTech.twb'
  },
  {
    id: 'moon',
    name: 'Moon Restaurant — Food Delivery App Optimization',
    role: 'Business Analyst (Portfolio Project)',
    timeframe: 'May 2026 – June 2026',
    tags: ['SQL', 'SQLite', 'Power BI', 'Lucidchart'],
    problem:
      'Moon Restaurant users were abandoning their carts at a 12% higher rate than industry average due to a mandatory account creation step at checkout. The fix: a Guest Checkout flow that reduces checkout from 6 steps to 3.',
    deliverables: [
      'As-Is and To-Be process maps in Lucidchart showing the login bottleneck and the streamlined flow',
      'Functional Requirements Documentation with Agile user stories and acceptance criteria',
      '500-row simulated dataset tracking user behavior, drop-off stages, and transaction times',
      'SQL queries pinpointing exact drop-off stages and abandonment rates',
      'Power BI dashboard tracking cart abandonment rate, average checkout time, and conversion lift'
    ],
    metric: '21% → 58% completion rate after Guest Checkout',
    githubUrl: 'https://github.com/ase-ajm/Business-Analyst-Portfolio-Project-Moon-Restaurant',
    dashboardUrl: '/Moon Restaurant User Behavior Analysis.pdf',
  }
];

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <About />
        <section id="projects" className="section">
          <h2 className="section-heading">Projects</h2>
          <p className="section-intro">Two end-to-end BA case studies: from problem to dashboard.</p>
          <div className="project-list">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
        <SkillsRegister />
        <Experience />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;

