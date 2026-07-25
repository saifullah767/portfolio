export default function ClientWork({ clientWork }) {
  return (
    <section
      id="client-work"
      className="portfolio-client-work rn-section-gap section-separator"
      aria-labelledby="client-work-title"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle">{clientWork.subtitle}</span>
              <h2 id="client-work-title" className="title">
                {clientWork.title}
              </h2>
              <p className="portfolio-client-work__description">{clientWork.description}</p>
            </div>
          </div>
        </div>

        <div className="portfolio-client-work__panel">
          <div className="portfolio-client-work__grid">
            {clientWork.items.map((product) => (
              <a
                key={product.name}
                className="portfolio-client-work__card"
                href={product.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${product.name} website`}
              >
                <i
                  className="feather-arrow-up-right portfolio-client-work__external"
                  aria-hidden="true"
                />

                <span
                  className={`portfolio-client-work__logo-wrap${
                    product.iconPlate ? ' portfolio-client-work__logo-wrap--plate' : ''
                  }`}
                >
                  <img
                    className={`portfolio-client-work__logo portfolio-client-work__logo--${product.logoStyle}`}
                    src={product.logo}
                    alt={`${product.name} logo`}
                  />
                </span>

                <strong className="portfolio-client-work__name">{product.name}</strong>
                <span className="portfolio-client-work__label">{product.label}</span>
              </a>
            ))}
          </div>
        </div>

        <p className="portfolio-client-work__hint">Select a product to visit the live app.</p>
      </div>
    </section>
  );
}
