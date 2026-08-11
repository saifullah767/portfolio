export default function ThankYouPage({ onBack, data }) {
  return (
    <div id="contact" className="rn-contact-area rn-section-gap section-separator">
      <div className="container portfolio-thankyou-page">
        <div className="portfolio-thankyou-page__content">
          <p className="portfolio-thankyou-page__eyebrow">{data.eyebrow}</p>
          <h2 className="portfolio-thankyou-page__title">{data.title}</h2>
          <p className="portfolio-thankyou-page__text">{data.message}</p>
          <div className="portfolio-thankyou-page__actions">
            <button type="button" className="rn-btn" onClick={onBack}>
              <span>{data.button}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
