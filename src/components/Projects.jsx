import { useEffect, useMemo, useState } from 'react';

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

export default function Projects({ projects, description }) {
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
              <span className="subtitle">Visit my projects</span>
              <h2 className="title">Projects</h2>
              <p className="portfolio-projects__description">{description}</p>
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
                aria-label="Show previous projects"
              >
                <i className="feather-arrow-left" aria-hidden="true" />
              </button>

              <div className="portfolio-wrapper portfolio-slick-activation slick-arrow-style-one rn-slick-dot-style portfolio-react-grid">
                {visibleProjects.map((project) => (
                  <div key={project.url} className="rn-portfolio-slick">
                    <div className="rn-portfolio">
                      <div className="inner">
                        <div className="thumbnail">
                          <a href={project.url} target="_blank" rel="noreferrer">
                            <img style={{ height: '150px' }} src={project.image} alt={project.title} />
                          </a>
                        </div>
                        <div className="content">
                          <div className="category-info">
                            <div className="category-list">
                              <span>{project.category}</span>
                            </div>
                          </div>
                          <h4 className="title">
                            <a href={project.url} target="_blank" rel="noreferrer">
                              {project.title}
                              <i className="feather-arrow-up-right" aria-hidden="true" />
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="portfolio-project-carousel__arrow portfolio-project-carousel__arrow--next"
                onClick={() =>
                  setPageIndex((previous) => Math.min(previous + 1, totalPages - 1))
                }
                disabled={pageIndex === totalPages - 1}
                aria-label="Show next projects"
              >
                <i className="feather-arrow-right" aria-hidden="true" />
              </button>
            </div>

            {totalPages > 1 ? (
              <div className="portfolio-project-carousel__dots" aria-label="Project pages">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={`project-page-${index + 1}`}
                    type="button"
                    className={pageIndex === index ? 'active' : ''}
                    onClick={() => setPageIndex(index)}
                    aria-label={`Show project page ${index + 1} of ${totalPages}`}
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
