// src/components/About.jsx
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/images/index-proxy-don-profile.jpg"
              alt="Rune - Index Proxy Don Quixote" 
              className="about-portrait"
            />
          </div>
          <div className="about-text">
            <p>
              Hello! I'm Rune, a passionate developer with a love for creating interactive web experiences.
              I enjoy turning complex problems into simple, beautiful designs. When I'm not coding, you can
              find me exploring new technologies or reading.
            </p>
            <p>
                ─────────────────────────
            </p>
            <p>
              I lwk just made this for fun-
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;