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

export default function Projects({ projects }) {
  const visibleCount = useVisibleCount();
  const maxStart = Math.max(projects.length - visibleCount, 0);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    setStartIndex((prev) => Math.min(prev, maxStart));
  }, [maxStart]);

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
            </div>
          </div>
        </div>

        <div className="row mt--25 mt_md--5 mt_sm--5">
          <div className="col-lg-12">
            <div className="portfolio-react-carousel-controls">
              <button
                type="button"
                className="slide-arrow prev-arrow"
                onClick={() => setStartIndex((prev) => Math.max(prev - 1, 0))}
                disabled={startIndex === 0}
                aria-label="Previous projects"
              >
                <i className="feather-arrow-left" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="slide-arrow next-arrow"
                onClick={() => setStartIndex((prev) => Math.min(prev + 1, maxStart))}
                disabled={startIndex >= maxStart}
                aria-label="Next projects"
              >
                <i className="feather-arrow-right" aria-hidden="true" />
              </button>
            </div>

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
          </div>
        </div>
      </div>
    </div>
  );
}
