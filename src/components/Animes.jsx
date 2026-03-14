import './Animes.css';

function Animes() {
  const animes = [
    {
      title: 'Attack on Titan',
      image: 'https://cdn.myanimelist.net/images/anime/10/47347l.jpg',
      description: 'Humanity is cornered into desperate survival, which makes the worldbuilding and tension hit hard every time.',
      ratingLabel: 'I like',
      ratingValue: '09/10',
      link: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin',
    },
    {
      title: 'Death Note',
      image: 'https://cdn.myanimelist.net/images/anime/1079/138100l.jpg',
      description: 'A battle of ego, control, and performance—stylish, theatrical, and still one of the easiest shows to rewatch.',
      ratingLabel: 'Peak',
      ratingValue: '10/10',
      link: 'https://myanimelist.net/anime/1535/Death_Note',
    },
    {
      title: 'Fullmetal Alchemist: Brotherhood',
      image: 'https://cdn.myanimelist.net/images/anime/1208/94745l.jpg',
      description: 'Balanced, emotional, and ridiculously complete. It feels like one of the cleanest full-package stories around.',
      ratingLabel: 'Peak',
      ratingValue: '10/10',
      link: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood',
    },
    {
      title: 'Spirited Away',
      image: 'https://cdn.myanimelist.net/images/anime/1127/116848l.jpg',
      description: 'Dreamlike and strange in the best way. It has the kind of atmosphere that stays in your head long after it ends.',
      ratingLabel: 'Me like',
      ratingValue: '09/10',
      link: 'https://myanimelist.net/anime/199/Sen_to_Chihiro_no_Kamikakushi',
    },
  ];

  return (
    <section id="animes" className="animes">
      <h2 className="section-title">Archive Entries</h2>
      <div className="anime-grid">
        {animes.map((anime, index) => (
          <article key={index} className="anime-card">
            <div className="anime-image">
              <img src={anime.image} alt={anime.title} />
              <div className="anime-overlay">
                <span className="anime-rating">
                  <span>{anime.ratingLabel}</span>
                  <br />
                  <span>{anime.ratingValue}</span>
                </span>
                <a href={anime.link} target="_blank" rel="noopener noreferrer" className="anime-link">
                  View Record
                </a>
              </div>
            </div>
            <div className="anime-info">
              <span className="anime-meta">Personal Favorite</span>
              <h3>{anime.title}</h3>
              <p>{anime.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Animes;
