import { useEffect } from 'react';
import portfolioBodyHtml from './legacy/portfolio-body.html?raw';

const LEGACY_SCRIPT_PATHS = [
  '/assets/js/vendor/jquery.js',
  '/assets/js/vendor/modernizer.min.js',
  '/assets/js/vendor/feather.min.js',
  '/assets/js/vendor/slick.min.js',
  '/assets/js/vendor/bootstrap.js',
  '/assets/js/vendor/text-type.js',
  '/assets/js/vendor/wow.js',
  '/assets/js/vendor/aos.js',
  '/assets/js/vendor/particles.js',
  '/assets/js/main.js'
];

function loadLegacyScriptsSequentially(paths) {
  return paths.reduce((chain, src) => {
    return chain.then(
      () =>
        new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = src;
          script.async = false;
          script.dataset.legacyScript = 'true';
          script.onload = () => resolve();
          script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
          document.body.appendChild(script);
        })
    );
  }, Promise.resolve());
}

export default function App() {
  useEffect(() => {
    const previousBodyClass = document.body.className;
    const previousDataSpy = document.body.getAttribute('data-spy');
    const previousDataTarget = document.body.getAttribute('data-target');
    const previousDataOffset = document.body.getAttribute('data-offset');

    document.body.className = 'template-color-1 spybody';
    document.body.setAttribute('data-spy', 'scroll');
    document.body.setAttribute('data-target', '.navbar-example2');
    document.body.setAttribute('data-offset', '150');

    document.querySelectorAll('script[data-legacy-script="true"]').forEach((el) => el.remove());

    let isMounted = true;

    loadLegacyScriptsSequentially(LEGACY_SCRIPT_PATHS).catch((error) => {
      if (isMounted) {
        // Keep runtime resilient in dev if one legacy script fails.
        console.error(error);
      }
    });

    return () => {
      isMounted = false;
      document.querySelectorAll('script[data-legacy-script="true"]').forEach((el) => el.remove());

      document.body.className = previousBodyClass;

      if (previousDataSpy === null) document.body.removeAttribute('data-spy');
      else document.body.setAttribute('data-spy', previousDataSpy);

      if (previousDataTarget === null) document.body.removeAttribute('data-target');
      else document.body.setAttribute('data-target', previousDataTarget);

      if (previousDataOffset === null) document.body.removeAttribute('data-offset');
      else document.body.setAttribute('data-offset', previousDataOffset);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: portfolioBodyHtml }} />;
}
