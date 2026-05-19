export default function ThankYouPage({ onBack, data }) {
  const content = data ?? {
    eyebrow: 'Thank You',
    title: 'Your message has been sent.',
    message: 'Thanks for contacting us. We will get back to you as soon as possible.',
    buttonText: 'Send Another Message'
  };

  return (
    <div id="contact" className="rn-contact-area rn-section-gap section-separator">
      <div className="container portfolio-thankyou-page">
        <div className="portfolio-thankyou-page__content">
          <p className="portfolio-thankyou-page__eyebrow">{content.eyebrow}</p>
          <h2 className="portfolio-thankyou-page__title">{content.title}</h2>
          <p className="portfolio-thankyou-page__text">{content.message}</p>
          <div className="portfolio-thankyou-page__actions">
            <button type="button" className="rn-btn" onClick={onBack}>
              <span>{content.buttonText}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
