import './Skills.css';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiVercel } from 'react-icons/si';

function Skills() {
  const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Vercel', icon: <SiVercel /> },
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;