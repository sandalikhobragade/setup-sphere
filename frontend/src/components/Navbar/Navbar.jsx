import { Link } from 'react-router-dom';
import "./Navbar.css";

// Navbar is a reusable component rendered on every page via the Layout wrapper.
// It currently has no props because it doesn't yet depend on any dynamic data —
// authentication-aware links (Login vs Logout) will be added in a later stage
// once we build the AuthContext.
function Navbar() {
  return (
    <nav className="navbar">
      {/* The site logo/name also acts as a "return home" link, a standard UX convention */}
      <Link to="/" className="navbar-logo">
        Setup Sphere
      </Link>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
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