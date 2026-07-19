import { useSearchParams } from 'react-router-dom';
import guides from '../data/guides.json';
import { searchGuides } from '../utils/searchGuides';
import GuideCard from '../components/GuideCard/GuideCard';
import SearchBar from '../components/SearchBar/SearchBar';
import '../styles/SearchResults.css';

function SearchResults() {
  // useSearchParams reads the URL's query string (everything after "?").
  // It returns an array: [paramsObject, functionToUpdateParams].
  // We only need to READ the query here, so we ignore the second value.
  const [searchParams] = useSearchParams();

  // .get('q') extracts the value of the "q" parameter from the URL.
  // e.g. for /search?q=figma, this returns "figma".
  // If "q" isn't present at all, .get() returns null.
  const query = searchParams.get('q') || '';

  // Run our pure search function against the full guide list.
  const results = searchGuides(guides, query);

  return (
    <div className="search-results">
      <h1>Search Guides</h1>

      {/* Reusing SearchBar here lets users refine their search
          directly from the results page, without going back to Home. */}
      <SearchBar />

      {/* Conditional rendering: three distinct states the user might see */}
      {query === '' && (
        <p className="search-results-hint">
          Start typing above to search for an installation guide.
        </p>
      )}

      {query !== '' && results.length === 0 && (
        <p className="search-results-empty">
          No guides found for "{query}". Try a different search term.
        </p>
      )}

      {results.length > 0 && (
        <>
          <p className="search-results-count">
            {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
          </p>
          <div className="guide-grid">
            {results.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SearchResults;