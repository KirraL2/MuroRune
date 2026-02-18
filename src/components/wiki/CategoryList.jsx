// src/components/wiki/CategoryList.jsx
import { Link } from 'react-router-dom';
import wikiData from '../../data/wikiData';
import './CategoryList.css';

function CategoryList() {
  return (
    <section className="wiki-section">
        <div className="wiki-back">
            <Link to="/" className="back-btn">← Back to Portfolio</Link>
        </div>
      <div className="wiki-header">
        <h1>THE MURO ARCHIVES</h1>
        <p className="wiki-subtitle">Distorted Records</p>
      </div>

      <div className="category-grid">
        {wikiData.map((category) => (
          <Link
            key={category.id}
            to={`/wiki/category/${category.id}`}
            className="category-card"
          >
            <div className="category-image">
              <img src={category.image} alt={category.title} />
            </div>
            <div className="category-info">
              <h3>{category.title}</h3>
              <p>{category.content.substring(0, 160)}...</p>
            </div>
            <div className="category-enter">ACCESS FILE →</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryList;