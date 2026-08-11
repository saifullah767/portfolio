export default function SplashScreen({ logo, exiting, copy }) {
  return (
    <div className={`portfolio-splash${exiting ? ' is-exiting' : ''}`} role="status" aria-live="polite">
      <div className="portfolio-splash__grain" aria-hidden="true" />
      <div className="portfolio-splash__content">
        <img className="portfolio-splash__logo" src={logo} alt={copy.logoAlt} />
        <p className="portfolio-splash__title">{copy.name}</p>
        <p className="portfolio-splash__subtitle">{copy.tagline}</p>
        <div className="portfolio-splash__loader" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
