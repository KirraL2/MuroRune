// src/components/wiki/CharacterList.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import characters from '../../data/characters';
import wikiData from '../../data/wikiData';
import './CharacterList.css';   // ← THIS WAS MISSING — now added

function CharacterList() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const category = wikiData.find((cat) => cat.id === parseInt(categoryId));
  const charsInCategory = characters.filter((char) => char.categoryId === parseInt(categoryId));

  if (!category) return <div className="wiki-section">Category not found</div>;

  return (
    <section className="wiki-section">
      <div className="wiki-back">
        <Link to="/wiki" className="back-btn">← Back to Archives</Link>
      </div>

      <div className="wiki-header">
        <h1>{category.title}</h1>
        <p className="wiki-subtitle">Select a Distortion</p>
      </div>

      <div className="character-grid">
        {charsInCategory.length > 0 ? (
          charsInCategory.map((char) => (
            <div
              key={char.id}
              className="character-card"
              onClick={() => navigate(`/wiki/character/${char.id}`)}
            >
              <div className="character-image">
                <img src={char.image} alt={char.name} />
                <div className="glitch-overlay" />
              </div>
              <div className="character-info">
                <h3>{char.name}</h3>
                <p>{char.content}</p>
              </div>
              <div className="character-enter">VIEW FILE →</div>
            </div>
          ))
        ) : (
          <div className="no-characters">
            <p>No distortions added yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default CharacterList;