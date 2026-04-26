export default function SplashScreen({ logo, exiting }) {
  return (
    <div className={`portfolio-splash${exiting ? ' is-exiting' : ''}`} role="status" aria-live="polite">
      <div className="portfolio-splash__grain" aria-hidden="true" />
      <div className="portfolio-splash__content">
        <img className="portfolio-splash__logo" src={logo} alt="Saifullah logo" />
        <h1 className="portfolio-splash__title">Saifullah</h1>
        <p className="portfolio-splash__subtitle">Designer. Developer. Problem Solver.</p>
        <div className="portfolio-splash__loader" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
