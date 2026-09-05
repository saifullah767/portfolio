import { useEffect, useRef, useState } from 'react';
import SocialLinks from './SocialLinks';

export default function About({ about, socialLinks, copy }) {
  const [resumeMenuOpen, setResumeMenuOpen] = useState(false);
  const resumeMenuRef = useRef(null);

  useEffect(() => {
    if (!resumeMenuOpen) return undefined;

    const closeMenu = (event) => {
      if (event.key === 'Escape') {
        setResumeMenuOpen(false);
        resumeMenuRef.current?.querySelector('button')?.focus();
        return;
      }

      if (event.type === 'pointerdown' && !resumeMenuRef.current?.contains(event.target)) {
        setResumeMenuOpen(false);
      }
    };

    document.addEventListener('pointerdown', closeMenu);
    document.addEventListener('keydown', closeMenu);

    return () => {
      document.removeEventListener('pointerdown', closeMenu);
      document.removeEventListener('keydown', closeMenu);
    };
  }, [resumeMenuOpen]);

  return (
    <div id="home" className="rn-slide-area">
      <div className="slide slider-style-3">
        <div className="container">
          <div className="row slider-wrapper">
            <div className="order-2 order-xl-1 col-lg-12 col-xl-5 mt_lg--50 mt_md--50 mt_sm--50">
              <div className="slider-info">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-12">
                    <div className="user-info-top">
                      <div className="user-info-header">
                        <div className="user">
                          <i className="feather-user" aria-hidden="true" />
                        </div>
                        <h1 className="title">
                          {copy.greeting} <span>{about.name}</span>
                        </h1>
                        <p className="disc">{copy.title}</p>
                      </div>

                      <div className="user-info-footer">
                        <div className="info">
                          <i className="feather-file" aria-hidden="true" />
                          <span>{copy.role}</span>
                        </div>
                        <div className="info">
                          <i className="feather-mail" aria-hidden="true" />
                          <a href={`mailto:${about.email}`}>{about.email}</a>
                        </div>

                        <div id="footer-inline" className="rn-footer-area footer-style-2 section-separator">
                          <div className="container">
                            <p style={{ marginTop: '60px' }}>{copy.socialTitle}</p>
                            <div className="row">
                              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="social-icone-wrapper">
                                  <SocialLinks links={socialLinks} newTab />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12 col-lg-12 col-12">
                    <div className="user-info-bottom">
                      <span>{copy.downloadPrompt} </span>
                      <div className="button-wrapper d-flex">
                        <div className="portfolio-resume-download mr--30" ref={resumeMenuRef}>
                          <button
                            className="rn-btn portfolio-resume-download__trigger"
                            type="button"
                            aria-label={copy.downloadMenuLabel}
                            aria-expanded={resumeMenuOpen}
                            aria-controls="resume-download-menu"
                            onClick={() => setResumeMenuOpen((isOpen) => !isOpen)}
                          >
                            <i className="feather-download" aria-hidden="true" />
                            <span>{copy.downloadButton}</span>
                            <i className="feather-chevron-down portfolio-resume-download__chevron" aria-hidden="true" />
                          </button>

                          {resumeMenuOpen && (
                            <div
                              id="resume-download-menu"
                              className="portfolio-resume-download__menu"
                              role="menu"
                              aria-label={copy.downloadMenuLabel}
                            >
                              <p>{copy.downloadMenuLabel}</p>
                              {about.resumes.map((resume) => (
                                <a
                                  key={resume.code}
                                  href={resume.url}
                                  download={resume.downloadName}
                                  hrefLang={resume.code}
                                  role="menuitem"
                                  onClick={() => setResumeMenuOpen(false)}
                                >
                                  <span className="portfolio-resume-download__code" aria-hidden="true">
                                    {resume.code.toUpperCase()}
                                  </span>
                                  <span className="portfolio-resume-download__option-copy">
                                    <strong>{resume.label}</strong>
                                    <small>{resume.description}</small>
                                  </span>
                                  <i className="feather-download" aria-hidden="true" />
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                        <a className="rn-btn" href={`mailto:${about.contactEmail}`}>
                          <span>{copy.contactButton}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 order-xl-2 col-lg-12 col-xl-7">
              <div className="background-image-area">
                <div className="thumbnail-image">
                  <img src={about.avatar} alt={copy.portraitAlt} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
