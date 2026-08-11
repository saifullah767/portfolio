import { useEffect, useState } from 'react';
import SocialLinks from './SocialLinks';

const navCopyKeys = {
  '#home': 'home',
  '#client-work': 'clientWork',
  '#portfolio': 'projects',
  '#resume': 'details',
  '#contact': 'contact'
};

export default function Layout({
  logo,
  navItems,
  socialLinks,
  copy,
  locale,
  locales,
  onLocaleChange,
  children
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeHref, setActiveHref] = useState(navItems[0]?.href ?? '#home');

  useEffect(() => {
    const sectionNodes = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const getActiveHrefFromScroll = () => {
      if (!sectionNodes.length) return navItems[0]?.href ?? '#home';

      const scrollPosition = window.scrollY + 120;
      let active = navItems[0]?.href ?? '#home';

      for (const section of sectionNodes) {
        if (section.offsetTop <= scrollPosition) {
          active = `#${section.id}`;
        }
      }

      return active;
    };

    const onScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 250);
      setShowBackToTop(scrollY > 100);
      setActiveHref(getActiveHrefFromScroll());
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [navItems]);

  useEffect(() => {
    document.documentElement.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSmoothScroll = (event, href) => {
    event.preventDefault();
    const target = document.querySelector(href);

    if (!target) return;

    const targetTop = target.getBoundingClientRect().top + window.scrollY - 50;
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
    setActiveHref(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`rn-header haeder-default black-logo-version header--fixed header--sticky${
          isSticky ? ' sticky' : ''
        }`}
      >
        <div className="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
          <div className="col-lg-2 col-6">
            <div className="header-left">
              <div className="logo">
                <a href="#home">
                  <img className="my-portfolio-logo" src={logo} alt={copy.layout.logoAlt} />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-10 col-6">
            <div className="header-center">
              <nav id="sideNav" className="mainmenu-nav navbar-example2 d-none d-xl-block">
                <ul className="primary-menu nav nav-pills">
                  {navItems.map((item) => (
                    <li key={item.href} className="nav-item">
                      <a
                        className={`nav-link smoth-animation${activeHref === item.href ? ' active' : ''}`}
                        href={item.href}
                        onClick={(event) => handleSmoothScroll(event, item.href)}
                      >
                        {copy.nav[navCopyKeys[item.href]] ?? item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="header-right">
                <label className="portfolio-language-selector">
                  <span className="portfolio-visually-hidden">{copy.layout.language}</span>
                  <i className="feather-globe" aria-hidden="true" />
                  <select
                    value={locale}
                    onChange={(event) => onLocaleChange(event.target.value)}
                    aria-label={copy.layout.language}
                  >
                    {locales.map((language) => (
                      <option key={language.code} value={language.code}>
                        {language.nativeLabel}
                      </option>
                    ))}
                  </select>
                </label>
                <div className="hamberger-menu d-block d-xl-none">
                  <button
                    type="button"
                    className="portfolio-react-icon-button"
                    aria-label={copy.layout.openMenu}
                    onClick={() => setIsMobileMenuOpen(true)}
                  >
                    <i className="feather-menu humberger-menu" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`popup-mobile-menu${isMobileMenuOpen ? ' menu-open' : ''}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setIsMobileMenuOpen(false);
          }
        }}
      >
        <div className="inner">
          <div className="menu-top">
            <div className="menu-header">
              <a className="logo" href="#home" onClick={handleNavClick}>
                <img className="my-portfolio-logo" src={logo} alt={copy.layout.logoAlt} />
              </a>
              <div className="close-button">
                <button
                  type="button"
                  className="close-menu-activation close"
                  aria-label={copy.layout.closeMenu}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <i className="feather-x" aria-hidden="true" />
                </button>
              </div>
            </div>
            <p className="discription">{copy.layout.mobileWelcome}</p>
          </div>
          <div className="content">
            <ul className="primary-menu nav nav-pills">
              {navItems.map((item) => (
                <li key={item.href} className="nav-item">
                  <a
                    className={`nav-link smoth-animation${activeHref === item.href ? ' active' : ''}`}
                    href={item.href}
                    onClick={(event) => handleSmoothScroll(event, item.href)}
                  >
                    {copy.nav[navCopyKeys[item.href]] ?? item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="social-share-style-1 mt--40">
              <span className="title">{copy.layout.findMe}</span>
              <SocialLinks links={socialLinks} />
            </div>
          </div>
        </div>
      </div>

      <main className="main-page-wrapper">{children}</main>

      <div className="backto-top" style={{ opacity: showBackToTop ? 1 : 0 }}>
        <button
          type="button"
          className="portfolio-react-icon-button"
          aria-label={copy.layout.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <i className="feather-arrow-up" aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
