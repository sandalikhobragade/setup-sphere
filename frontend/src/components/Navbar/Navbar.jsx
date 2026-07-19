import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Setup Sphere
      </Link>

      {/* SearchBar reused here — same component, same logic, no duplication */}
      <SearchBar />

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/error-analyzer">Error Analyzer</Link>
        </li>
        <li>
          <Link to="/create-guide">Add Guide</Link>
        </li>
        <li>
          <Link to="/my-guides">My Guides</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;