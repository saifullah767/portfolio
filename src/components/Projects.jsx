export default function Projects({ projects, earlierProjects, copy }) {
  const renderTitle = (project, title) =>
    project.url ? (
      <a href={project.url} target="_blank" rel="noreferrer">
        {title}
        <i className="feather-arrow-up-right" aria-hidden="true" />
      </a>
    ) : (
      <span>{title}</span>
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
              <div className="portfolio-wrapper portfolio-react-grid portfolio-featured-projects">
                {projects.map((project) => {
                  const category = copy.items[project.categoryKey] ?? project.category;
                  const title = copy.items[project.titleKey] ?? project.title;

                  return (
                  <div key={project.id} className="rn-portfolio-slick">
                    <div className="rn-portfolio">
                      <div className="inner">
                        <div className="thumbnail">
                          {project.image ? (
                            project.url ? (
                              <a href={project.url} target="_blank" rel="noreferrer">
                                <img src={project.image} alt={title} />
                              </a>
                            ) : (
                              <img src={project.image} alt={title} />
                            )
                          ) : (
                            <div className="portfolio-project-placeholder" aria-hidden="true">
                              <span>BRAND</span>
                              <strong>OS</strong>
                            </div>
                          )}
                        </div>
                        <div className="content">
                          <div className="category-info">
                            <div className="category-list">
                              <span>{category}</span>
                            </div>
                          </div>
                          <h4 className="title">{renderTitle(project, title)}</h4>
                          <p className="portfolio-project-card__description">
                            {copy.items[project.descriptionKey]}
                          </p>
                          <div className="portfolio-project-card__tags">
                            {project.tags.map((tag) => (
                              <span key={tag}>{tag}</span>
                            ))}
                          </div>
                          {!project.url ? (
                            <span className="portfolio-project-card__status">{copy.privateProject}</span>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>

              <div className="portfolio-earlier-work">
                <span className="subtitle">{copy.earlierSubtitle}</span>
                <h3>{copy.earlierTitle}</h3>
                <div className="portfolio-earlier-work__links">
                  {earlierProjects.map((project) => (
                    <a key={project.id} href={project.url} target="_blank" rel="noreferrer">
                      {copy.items[project.titleKey] ?? project.title}
                      <i className="feather-arrow-up-right" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
