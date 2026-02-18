import './Animes.css';

function Animes() {
  const animes = [
  {
    title: 'Attack on Titan',
    image: 'https://cdn.myanimelist.net/images/anime/10/47347l.jpg',
    description: 'Humanity fights for survival against giant humanoid creatures.',
    rating: '9/10',
    link: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin',
  },
  {
    title: 'Death Note',
    image: 'https://cdn.myanimelist.net/images/anime/1079/138100l.jpg',
    description: 'A high school student gains the power to kill anyone by writing their name in a notebook.',
    rating: '9.5/10',
    link: 'https://myanimelist.net/anime/1535/Death_Note',
  },
  {
    title: 'Fullmetal Alchemist: Brotherhood',
    image: 'https://cdn.myanimelist.net/images/anime/1208/94745l.jpg',
    description: 'Two brothers search for the Philosopher\'s Stone to restore their bodies.',
    rating: '10/10',
    link: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood',
  },
  {
    title: 'Spirited Away',
    image: 'https://cdn.myanimelist.net/images/anime/1127/116848l.jpg',
    description: 'A young girl wanders into a world of spirits and gods.',
    rating: '9/10',
    link: 'https://myanimelist.net/anime/199/Sen_to_Chihiro_no_Kamikakushi',
  },
];

  return (
    <section id="animes" className="animes">
      <h2 className="section-title">Favourite Animes (More will be added in the future)</h2>
      <div className="anime-grid">
        {animes.map((anime, index) => (
          <div key={index} className="anime-card">
            <div className="anime-image">
              <img src={anime.image} alt={anime.title} />
              <div className="anime-overlay">
                <span className="anime-rating">{anime.rating}</span>
                <a href={anime.link} target="_blank" rel="noopener noreferrer" className="anime-link">View on MAL</a>
              </div>
            </div>
            <div className="anime-info">
              <h3>{anime.title}</h3>
              <p>{anime.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Animes;