import { useParams, Link } from 'react-router-dom';
import guides from '../data/guides.json';
import categories from '../data/categories.json';
import users from '../data/users.json';
import guideSteps from '../data/guideSteps.json';
import faqs from '../data/faqs.json';
import errorSolutions from '../data/errorSolutions.json';

import SystemRequirements from '../components/SystemRequirements/SystemRequirements';
import StepsList from '../components/StepsList/StepsList';
import FAQAccordion from '../components/FAQAccordion/FAQAccordion';
import ErrorList from '../components/ErrorList/ErrorList';
import '../styles/GuideDetail.css';

function GuideDetail() {
  // Read the guide ID from the URL
  const { id } = useParams();

  // Convert the ID from string to number
  const guideId = Number(id);

  // Find the selected guide
  const guide = guides.find((g) => g.id === guideId);

  // If guide doesn't exist
  if (!guide) {
    return (
      <div className="guide-not-found">
        <h1>Guide Not Found</h1>
        <p>We couldn't find an installation guide with that ID.</p>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }

  // Find related category and author
  const category = categories.find((c) => c.id === guide.categoryId);
  const author = users.find((u) => u.id === guide.authorId);

  // Filter related data
  const steps = guideSteps.filter((step) => step.guideId === guide.id);
  const guideFaqs = faqs.filter((faq) => faq.guideId === guide.id);
  const guideErrors = errorSolutions.filter((err) => err.guideId === guide.id);

  return (
    <div className="guide-detail">
      {/* Guide Header */}
      <div className="guide-detail-header">
        <span className="guide-detail-category">
          {category?.name}
        </span>

        <h1>{guide.title}</h1>

        <p className="guide-detail-description">
          {guide.description}
        </p>

        <div className="guide-detail-meta">
          <span>By {author?.name}</span>

          <a
            href={guide.officialDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="guide-detail-download-btn"
          >
            Official Download Link
          </a>
        </div>
      </div>

      {/* Sections */}
      <SystemRequirements
        requirements={guide.systemRequirements}
      />

      <StepsList
        steps={steps}
      />

      <ErrorList
        errors={guideErrors}
      />

      <FAQAccordion
        faqs={guideFaqs}
      />
    </div>
  );
}

export default GuideDetail;