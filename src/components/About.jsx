import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About</h2>
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <img
              src="/images/index-proxy-don-profile.jpg"
              alt="Rune - Index Proxy inspired profile"
              className="about-portrait"
            />
          </div>
          <div className="about-text">
            <span className="about-label">Personal Record</span>
            <h3 className="about-heading">A site styled like an archived dossier.</h3>
            <div className="about-divider" />
            <p>
              I’m Rune. :3
            </p>
            <p className="about-note">
              Made this for fun-
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
