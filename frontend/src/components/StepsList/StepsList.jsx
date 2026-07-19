import './StepsList.css';

function StepsList({ steps }) {
  // Defensive sort: even though our mock data is already in order,
  // a real database query might not guarantee row order. Sorting here
  // ensures steps ALWAYS display correctly regardless of the data source.
  const sortedSteps = [...steps].sort((a, b) => a.stepNumber - b.stepNumber);

  return (
    <div className="steps-list">
      <h2>Installation Steps</h2>
      {sortedSteps.map((step) => (
        <div key={step.id} className="step-item">
          <div className="step-number">{step.stepNumber}</div>
          <div className="step-content">
            <p className="step-instruction">{step.instruction}</p>
            <img
              src={step.screenshotUrl}
              alt={`Step ${step.stepNumber} screenshot`}
              className="step-screenshot"
              // onError fires if the image fails to load (which it will right now,
              // since these are placeholder paths with no real files yet).
              // Instead of showing a broken image icon, we replace the src
              // with a clean fallback placeholder — professional, graceful degradation.
              onError={(event) => {
                event.target.src =
                  'https://placehold.co/600x350?text=Screenshot+Coming+Soon';
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default StepsList;