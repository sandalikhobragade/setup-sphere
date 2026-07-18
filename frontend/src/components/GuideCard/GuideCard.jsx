import { Link } from 'react-router-dom';
import categories from "../../data/categories.json";
import users from "../../data/users.json";
import './GuideCard.css';

// Receives one "guide" object as a prop and renders a preview card.
function GuideCard({ guide }) {
  // This is our JavaScript equivalent of a SQL JOIN, as discussed in Stage 1.
  // .find() scans the categories array and returns the first category
  // whose id matches this guide's categoryId.
  const category = categories.find((cat) => cat.id === guide.categoryId);

  // Same pattern for finding the author's name from the users list.
  const author = users.find((user) => user.id === guide.authorId);

  return (
    <Link to={`/guides/${guide.id}`} className="guide-card">
      <div className="guide-card-header">
        <h3 className="guide-card-title">{guide.title}</h3>
        {/* Optional chaining (?.) prevents a crash if, for any reason,
            no matching category was found (e.g. bad/missing data) */}
        <span className="guide-card-category">{category?.name}</span>
      </div>

      <p className="guide-card-description">{guide.description}</p>

      <div className="guide-card-footer">
        <span className="guide-card-author">By {author?.name}</span>
      </div>
    </Link>
  );
}

export default GuideCard;