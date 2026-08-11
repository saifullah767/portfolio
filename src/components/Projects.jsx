import { useEffect, useMemo, useState } from 'react';
import { interpolate } from '../translations';

const projectCopyKeys = [
  ['siteSnapCategory', 'siteSnapTitle'],
  ['kanbanCategory', 'kanbanTitle'],
  ['kuickstoreCategory', null],
  ['capstoneCategory', 'capstoneTitle'],
  ['roundHomeCategory', 'roundHomeTitle'],
  ['oldPortfolioCategory', 'oldPortfolioTitle'],
  ['booksCategory', 'booksTitle'],
  ['templateCategory', 'templateTitle']
];

function useVisibleCount() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  if (width < 868) return 1;
  if (width < 1124) return 2;
  return 3;
}

export default function Projects({ projects, copy }) {
  const visibleCount = useVisibleCount();
  const totalPages = Math.max(Math.ceil(projects.length / visibleCount), 1);
  const [pageIndex, setPageIndex] = useState(0);
  const startIndex = pageIndex * visibleCount;

  useEffect(() => {
    setPageIndex((previous) => Math.min(previous, totalPages - 1));
  }, [totalPages]);

  const visibleProjects = useMemo(
    () => projects.slice(startIndex, startIndex + visibleCount),
    [projects, startIndex, visibleCount]
  );

  return (
    <div id="portfolio" className="rn-portfolio-area portfolio-style-three rn-section-gap section-separator">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle">{copy.subtitle}</span>
              <h2 className="title">{copy.title}</h2>
              <p className="portfolio-projects__description">{copy.description}</p>
            </div>
          </div>
        </div>

        <div className="row mt--25 mt_md--5 mt_sm--5">
          <div className="col-lg-12">
            <div className="portfolio-project-carousel">
              <button
                type="button"
                className="portfolio-project-carousel__arrow portfolio-project-carousel__arrow--previous"
                onClick={() => setPageIndex((previous) => Math.max(previous - 1, 0))}
                disabled={pageIndex === 0}
                aria-label={copy.previous}
              >
                <i className="feather-arrow-left" aria-hidden="true" />
              </button>

              <div className="portfolio-wrapper portfolio-slick-activation slick-arrow-style-one rn-slick-dot-style portfolio-react-grid">
                {visibleProjects.map((project, visibleIndex) => {
                  const projectIndex = startIndex + visibleIndex;
                  const [categoryKey, titleKey] = projectCopyKeys[projectIndex] ?? [];
                  const category = copy.items[categoryKey] ?? project.category;
                  const title = titleKey ? copy.items[titleKey] : project.title;

                  return (
                  <div key={project.url} className="rn-portfolio-slick">
                    <div className="rn-portfolio">
                      <div className="inner">
                        <div className="thumbnail">
                          <a href={project.url} target="_blank" rel="noreferrer">
                            <img style={{ height: '150px' }} src={project.image} alt={title} />
                          </a>
                        </div>
                        <div className="content">
                          <div className="category-info">
                            <div className="category-list">
                              <span>{category}</span>
                            </div>
                          </div>
                          <h4 className="title">
                            <a href={project.url} target="_blank" rel="noreferrer">
                              {title}
                              <i className="feather-arrow-up-right" aria-hidden="true" />
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>

              <button
                type="button"
                className="portfolio-project-carousel__arrow portfolio-project-carousel__arrow--next"
                onClick={() =>
                  setPageIndex((previous) => Math.min(previous + 1, totalPages - 1))
                }
                disabled={pageIndex === totalPages - 1}
                aria-label={copy.next}
              >
                <i className="feather-arrow-right" aria-hidden="true" />
              </button>
            </div>

            {totalPages > 1 ? (
              <div className="portfolio-project-carousel__dots" aria-label={copy.pages}>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={`project-page-${index + 1}`}
                    type="button"
                    className={pageIndex === index ? 'active' : ''}
                    onClick={() => setPageIndex(index)}
                    aria-label={interpolate(copy.showPage, {
                      current: index + 1,
                      total: totalPages
                    })}
                    aria-current={pageIndex === index ? 'page' : undefined}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
