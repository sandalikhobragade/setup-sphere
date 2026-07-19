import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQAccordion.css';

function FAQAccordion({ faqs }) {
  // Tracks which FAQ item is currently expanded, by its id.
  // null means "none expanded." Using a single value (not an array)
  // means only ONE FAQ can be open at a time — a common, clean UX pattern.
  const [openId, setOpenId] = useState(null);

  function toggleFAQ(id) {
    // If the clicked FAQ is already open, close it (toggle back to null).
    // Otherwise, open the clicked one (this automatically closes any other,
    // since openId can only hold one value at a time).
    setOpenId((currentOpenId) => (currentOpenId === id ? null : id));
  }

  return (
    <div className="faq-accordion">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq) => {
        const isOpen = faq.id === openId;

        return (
          <div key={faq.id} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleFAQ(faq.id)}
              // aria-expanded tells screen readers whether this section
              // is currently expanded — an accessibility best practice
              // for any custom expand/collapse UI.
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <ChevronDown
                size={18}
                className={`faq-chevron ${isOpen ? 'faq-chevron-open' : ''}`}
              />
            </button>

            {/* Only render the answer in the DOM at all when open —
                simpler than a CSS-only show/hide for this stage, and
                avoids rendering hidden content that isn't needed yet. */}
            {isOpen && <p className="faq-answer">{faq.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default FAQAccordion;