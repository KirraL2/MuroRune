import './Skills.css';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiVercel } from 'react-icons/si';

function Skills() {
  const skills = [
    { name: 'React', type: 'Frontend', icon: <FaReact /> },
    { name: 'JavaScript', type: 'Logic', icon: <FaJs /> },
    { name: 'HTML5', type: 'Structure', icon: <FaHtml5 /> },
    { name: 'CSS3', type: 'Styling', icon: <FaCss3Alt /> },
    { name: 'Tailwind', type: 'Utility CSS', icon: <SiTailwindcss /> },
    { name: 'Node.js', type: 'Runtime', icon: <FaNodeJs /> },
    { name: 'Git', type: 'Versioning', icon: <FaGitAlt /> },
    { name: 'Vercel', type: 'Deployment', icon: <SiVercel /> },
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Capabilities</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
            <span className="skill-type">{skill.type}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
