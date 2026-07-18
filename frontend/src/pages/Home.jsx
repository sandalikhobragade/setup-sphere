import { Link } from 'react-router-dom';
import categories from '../data/categories.json';
import guides from '../data/guides.json';
import CategoryCard from "../components/CategoryCard/CategoryCard";
import GuideCard from "../components/GuideCard/GuideCard";
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      {/* HERO SECTION: the first thing a visitor sees, explains the site's purpose */}
      <section className="hero">
        <h1>Install Any Software, The Right Way</h1>
        <p>
          Step-by-step installation guides, download links, system
          requirements, and instant error troubleshooting — all in one place.
        </p>
        <Link to="/search" className="hero-cta">
          Find a Guide
        </Link>
      </section>

      {/* CATEGORY GRID: loops over every category and renders a CategoryCard for each */}
      <section className="section">
        <h2>Browse by Category</h2>
        <div className="category-grid">
          {categories.map((category) => (
            // "key" is required by React whenever rendering a list with .map() —
            // it must be unique and stable, so React can efficiently track
            // which items changed, were added, or removed between re-renders.
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* RECENT GUIDES: loops over all guides (later: only the most recent few) */}
      <section className="section">
        <h2>Recently Added Guides</h2>
        <div className="guide-grid">
          {guides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;