import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <span className="hero-kicker">Registered Record // MuroRune</span>
        <h1 className="hero-title">MuroRune</h1>
        <p className="hero-subtitle">Portfolio / Archive / Personal Index</p>
        <p className="hero-description">
          Welcome to my World.
        </p>
        <div className="hero-seal">
          <span className="hero-chip">Web Design</span>
          <span className="hero-chip">Character Archives</span>
          <span className="hero-chip">Personal Projects</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
