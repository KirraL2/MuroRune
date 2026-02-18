// src/components/Navbar.jsx
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Completely hide navbar on any wiki page
  const isWikiPage = location.pathname.startsWith('/wiki');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  // ←←← NAVBAR IS REMOVED ON WIKI PAGES
  if (isWikiPage) {
    return null;
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <ul className="nav-links">
        <li><Link to="/#hero">Home</Link></li>
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/#skills">Skills</Link></li>
        <li><Link to="/#animes">Animes</Link></li>
        <li><Link to="/wiki">Wiki</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;