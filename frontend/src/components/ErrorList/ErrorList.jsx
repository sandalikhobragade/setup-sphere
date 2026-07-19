import { AlertTriangle } from 'lucide-react';
import './ErrorList.css';

function ErrorList({ errors }) {
  // If a guide has no known common errors yet, show a friendly empty state
  // instead of an awkward blank section with just a heading and nothing below it.
  if (errors.length === 0) {
    return (
      <div className="error-list">
        <h2>Common Installation Errors</h2>
        <p className="error-list-empty">
          No common errors reported for this software yet.
        </p>
      </div>
    );
  }

  return (
    <div className="error-list">
      <h2>Common Installation Errors</h2>
      {errors.map((error) => (
        <div key={error.id} className="error-item">
          <div className="error-item-header">
            <AlertTriangle size={18} className="error-icon" />
            <p className="error-text">{error.errorText}</p>
          </div>
          <p className="error-solution">{error.solution}</p>
        </div>
      ))}
    </div>
  );
}

export default ErrorList;