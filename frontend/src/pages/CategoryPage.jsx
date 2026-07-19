import { useParams, Link } from 'react-router-dom';
import categories from '../data/categories.json';
import guides from '../data/guides.json';
import GuideCard from '../components/GuideCard/GuideCard';
import '../styles/CategoryPage.css';

function CategoryPage() {
  // Unlike GuideDetail, this URL param is a STRING slug (e.g. "design-software"),
  // not a number — so no Number() conversion is needed here. Slugs are compared
  // as strings directly, which is exactly why we chose slugs for categories
  // back in Stage 1 (human-readable, no type-conversion friction).
  const { slug } = useParams();

  const category = categories.find((c) => c.slug === slug);

  // Same guard-clause pattern as GuideDetail: fail gracefully on a bad/unknown slug
  // before attempting to filter guides against a category that doesn't exist.
  if (!category) {
    return (
      <div className="category-not-found">
        <h1>Category Not Found</h1>
        <p>We couldn't find a category matching that URL.</p>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }

  // Filter (not find) — a category has MANY guides, so we collect all matches
  // rather than a single result. This is the same one-to-many pattern we used
  // for steps/FAQs/errors within a single guide, just applied at the category level.
  const categoryGuides = guides.filter((guide) => guide.categoryId === category.id);

  return (
    <div className="category-page">
      <div className="category-page-header">
        <span className="category-page-label">Category</span>
        <h1>{category.name}</h1>
        <p className="category-page-count">
          {categoryGuides.length} guide{categoryGuides.length !== 1 ? 's' : ''} available
        </p>
      </div>

      {/* Empty state: category exists but has zero guides yet.
          Distinct from "category not found" — this is a valid, known
          category that simply has no content yet. */}
      {categoryGuides.length === 0 ? (
        <p className="category-page-empty">
          No guides have been added to this category yet.{' '}
          <Link to="/create-guide">Be the first to add one.</Link>
        </p>
      ) : (
        <div className="guide-grid">
          {categoryGuides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;