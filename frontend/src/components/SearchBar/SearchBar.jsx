import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import './SearchBar.css';

// SearchBar is reusable — it can be dropped into the Navbar, the Home page,
// or a dedicated search page. It doesn't perform the search itself; it just
// captures user input and navigates to /search?q=... where SearchResults
// page reads the query and does the actual filtering. This keeps SearchBar
// simple and reusable, and keeps result-handling logic in one place.
function SearchBar() {
  // Local state: tracks exactly what the user has typed so far.
  // useState returns [currentValue, functionToUpdateIt].
  const [inputValue, setInputValue] = useState('');

  // useNavigate is a React Router hook that lets us programmatically
  // change the URL (as opposed to <Link>, which only navigates on click).
  // We need this here because navigation happens on form SUBMIT, not on render.
  const navigate = useNavigate();

  // Runs when the user submits the search (presses Enter or clicks the button).
  function handleSubmit(event) {
    // Prevents the browser's default form behavior, which would normally
    // trigger a full page reload — we want React Router to handle navigation instead.
    event.preventDefault();

    // Don't navigate at all if the input is just empty/whitespace.
    if (inputValue.trim() === '') return;

    // encodeURIComponent ensures special characters (spaces, &, ?, etc.)
    // in the user's search term don't break the URL structure.
    navigate(`/search?q=${encodeURIComponent(inputValue.trim())}`);
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <Search size={18} className="search-bar-icon" />
      <input
        type="text"
        className="search-bar-input"
        placeholder="Search for software (e.g. VS Code, Figma...)"
        value={inputValue}
        // Every keystroke updates state, keeping React's state as the
        // single source of truth for the input's current value —
        // this is called a "controlled component" in React.
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button type="submit" className="search-bar-button">
        Search
      </button>
    </form>
  );
}

export default SearchBar;