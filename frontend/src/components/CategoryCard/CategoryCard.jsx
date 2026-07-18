import { Link } from 'react-router-dom';
import { Code2, Palette, Briefcase, MessageCircle, Settings, Gamepad2 } from 'lucide-react';
import './CategoryCard.css';

// A lookup map: converts the plain string stored in our data (e.g. "code-2")
// into the actual icon component to render. This keeps our JSON data
// framework-agnostic (just strings) while still letting React render real icons.
const iconMap = {
  'code-2': Code2,
  'palette': Palette,
  'briefcase': Briefcase,
  'message-circle': MessageCircle,
  'settings': Settings,
  'gamepad-2': Gamepad2,
};

// This component receives a single "category" object as a prop
// (destructured directly in the function signature) and renders
// a clickable card linking to that category's guide listing.
function CategoryCard({ category }) {
  // Look up the correct icon component based on the category's icon string.
  // Falls back to Settings icon if, for any reason, the string doesn't match —
  // defensive coding so a typo in data never crashes the whole page.
  const IconComponent = iconMap[category.icon] || Settings;

  return (
    <Link to={`/category/${category.slug}`} className="category-card">
      <IconComponent size={32} className="category-card-icon" />
      <span className="category-card-name">{category.name}</span>
    </Link>
  );
}

export default CategoryCard;