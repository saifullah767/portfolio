import { interpolate } from '../translations';

export default function ClientWork({ clientWork, copy }) {
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
              <span className="subtitle">{copy.subtitle}</span>
              <h2 id="client-work-title" className="title">
                {copy.title}
              </h2>
              <p className="portfolio-client-work__description">{copy.description}</p>
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
                aria-label={interpolate(copy.visitWebsite, { name: product.name })}
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
                    alt={interpolate(copy.logoAlt, { name: product.name })}
                  />
                </span>

                <strong className="portfolio-client-work__name">{product.name}</strong>
                <span className="portfolio-client-work__label">{copy.contribution}</span>
              </a>
            ))}
          </div>
        </div>

        <p className="portfolio-client-work__hint">{copy.hint}</p>
      </div>
    </section>
  );
}
