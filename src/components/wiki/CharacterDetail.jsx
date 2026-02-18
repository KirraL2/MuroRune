// src/components/wiki/CharacterDetail.jsx
import { useParams, Link } from 'react-router-dom';
import characters from '../../data/characters';
import './CharacterDetail.css';

function CharacterDetail() {
  const { characterId } = useParams();
  const character = characters.find((char) => char.id === parseInt(characterId));

  const getCharacterById = (id) => characters.find(c => c.id === id);

  if (!character) return <div className="wiki-section">Character not found</div>;

  return (
    <section className="wiki-section">
      <div className="wiki-back">
        <Link to={`/wiki/category/${character.categoryId}`} className="back-btn">← Back to Category</Link>
      </div>

      <div className="detail-wrapper">
        {/* LEFT STICKY COLUMN — now pure CSS sticky */}
        <div className="detail-left">
          <div className="detail-image">
            <img src={character.image} alt={character.name} />
          </div>
          <h1 className="detail-name">{character.name}</h1>
          <p className="detail-tagline">{character.content}</p>

          {character.music && (
            <div className="music-player">
              <div className="music-title">{character.music.title}</div>
              <iframe
                width="100%"
                height="100"
                src={`https://www.youtube.com/embed/${character.music.youtubeId}?controls=1&modestbranding=1`}
                title={character.music.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>

        {/* RIGHT CONTENT */}
        <div className="detail-right">
          {character.wikiSections?.map((section, index) => (
            <div key={index} className="wiki-section-block">
              <h2>{section.title}</h2>
              <div className="section-text">
                {section.content.split('\n').map((line, i) => (
                  line.trim() ? <p key={i}>{line}</p> : <br key={i} />
                ))}
              </div>
            </div>
          ))}

          {character.relationships?.length > 0 && (
            <div className="wiki-section-block">
              <h2>Relationships</h2>
              <div className="relationships-grid">
                {character.relationships.map((rel, index) => {
                  const linkedChar = getCharacterById(rel.id);
                  return (
                    <Link key={index} to={linkedChar ? `/wiki/character/${rel.id}` : '#'} className={`relationship-card ${rel.type.toLowerCase().replace(/\s+/g, '-')}`}>
                      <div className="rel-type">{rel.type}</div>
                      <div className="rel-name">{linkedChar ? linkedChar.name : `Character #${rel.id}`}</div>
                      {rel.note && <p className="rel-note">{rel.note}</p>}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CharacterDetail;