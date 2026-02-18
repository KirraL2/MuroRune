import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Animes from './components/Animes';
import CategoryList from './components/wiki/CategoryList';        // new
import CharacterList from './components/wiki/CharacterList';      // new
import CharacterDetail from './components/wiki/CharacterDetail';  // new
import Footer from './components/Footer';
import './App.css';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Animes />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wiki" element={<CategoryList />} />
          <Route path="/wiki/category/:categoryId" element={<CharacterList />} />
          <Route path="/wiki/character/:characterId" element={<CharacterDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;