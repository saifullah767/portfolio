import SocialLinks from './SocialLinks';

export default function About({ about, socialLinks }) {
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
                        <h2 className="title">
                          {about.greeting} <span>{about.name}</span>
                        </h2>
                        <p className="disc">{about.title}</p>
                      </div>

                      <div className="user-info-footer">
                        <div className="info">
                          <i className="feather-file" aria-hidden="true" />
                          <span>{about.role}</span>
                        </div>
                        <div className="info">
                          <i className="feather-mail" aria-hidden="true" />
                          <a href={`mailto:${about.email}`}>{about.email}</a>
                        </div>

                        <div id="footer-inline" className="rn-footer-area footer-style-2 section-separator">
                          <div className="container">
                            <p style={{ marginTop: '60px' }}>{about.inlineSocialTitle}</p>
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
                      <span>Download my curriculum vitae: </span>
                      <div className="button-wrapper d-flex">
                        <a className="rn-btn mr--30" href={about.cvUrl} download={about.cvDownloadName}>
                          <span>DOWNLOAD CV</span>
                        </a>
                        <a className="rn-btn" href={`mailto:${about.contactEmail}`}>
                          <span>CONTACT ME</span>
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
                  <img src={about.avatar} alt="Personal Portfolio" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
