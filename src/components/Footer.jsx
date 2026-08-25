import SocialLinks from './SocialLinks';

export default function Footer({ footer, socialLinks, copy, logoAlt }) {
  const groups = [
    {
      title: copy.expertise,
      links: footer.groups[0].links
    },
    {
      title: copy.services,
      links: [
        copy.landingPages,
        copy.portfolio,
        copy.webDevelopment,
        copy.designToWebsite,
        copy.frontendBackend
      ]
    },
    {
      title: copy.whyMe,
      links: [copy.friendly, copy.responsive, copy.guidance, copy.support, copy.cleanCode]
    }
  ];

  return (
    <div id="footer" className="rn-footer-area footer-style-2 rn-section-gapTop section-separator">
      <div className="container pb--80 pb_sm--40 plr_sm--20">
        <div className="row">
          <div className="col-xl-3 col-12 col-lg-3 col-md-6 col-sm-6">
            <div className="logo-thumbnail">
              <a href="#home">
                <img className="my-portfolio-logo" src={footer.logo} alt={logoAlt} />
              </a>
            </div>
            <div className="social-icone-wrapper">
              <SocialLinks links={socialLinks} />
            </div>
          </div>

          {groups.map((group) => (
            <div key={group.title} className="col-sl-3 col-12 mt_sm--20 col-lg-3 col-md-6 col-sm-6">
              <div className="menu-wrapper">
                <div className="menu-title">
                  <h6>{group.title}</h6>
                </div>
                <ul>
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#home">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
