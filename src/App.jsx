import { useEffect, useState } from 'react';
import PortfolioPage from './components/PortfolioPage';
import SplashScreen from './components/SplashScreen';
import { portfolioData } from './portfolioData';
import './components/portfolio-react.css';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [splashExiting, setSplashExiting] = useState(false);

  useEffect(() => {
    const previousBodyClass = document.body.className;
    const previousDataSpy = document.body.getAttribute('data-spy');
    const previousDataTarget = document.body.getAttribute('data-target');
    const previousDataOffset = document.body.getAttribute('data-offset');

    document.body.className = 'template-color-1 spybody';
    document.body.setAttribute('data-spy', 'scroll');
    document.body.setAttribute('data-target', '.navbar-example2');
    document.body.setAttribute('data-offset', '150');

    return () => {
      document.body.className = previousBodyClass;

      if (previousDataSpy === null) document.body.removeAttribute('data-spy');
      else document.body.setAttribute('data-spy', previousDataSpy);

      if (previousDataTarget === null) document.body.removeAttribute('data-target');
      else document.body.setAttribute('data-target', previousDataTarget);

      if (previousDataOffset === null) document.body.removeAttribute('data-offset');
      else document.body.setAttribute('data-offset', previousDataOffset);
    };
  }, []);

  useEffect(() => {
    const startExitTimer = window.setTimeout(() => {
      setSplashExiting(true);
    }, 1700);

    const hideTimer = window.setTimeout(() => {
      setShowSplash(false);
    }, 2200);

    return () => {
      window.clearTimeout(startExitTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      <PortfolioPage data={portfolioData} />
      {showSplash ? <SplashScreen logo={portfolioData.about.logo} exiting={splashExiting} /> : null}
    </>
  );
}
