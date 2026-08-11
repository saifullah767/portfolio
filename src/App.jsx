import { useEffect, useRef, useState } from 'react';
import PortfolioPage from './components/PortfolioPage';
import SplashScreen from './components/SplashScreen';
import { portfolioData } from './portfolioData';
import {
  defaultLocale,
  getTranslations,
  supportedLocales
} from './translations';
import './components/portfolio-react.css';

const localeCodes = new Set(supportedLocales.map(({ code }) => code));
const localePreferenceKey = 'portfolio-locale-preference-v2';
const countryLocales = {
  AT: 'de',
  DE: 'de',
  DK: 'da',
  FO: 'da',
  GL: 'da',
  LI: 'de'
};
const timezoneLocales = {
  'Europe/Berlin': 'de',
  'Europe/Copenhagen': 'da',
  'Europe/Vienna': 'de'
};

function getSavedLocale() {
  const savedLocale = window.localStorage.getItem(localePreferenceKey);
  return localeCodes.has(savedLocale) ? savedLocale : null;
}

function getAutomaticLocale() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (timezoneLocales[timezone]) return timezoneLocales[timezone];

  const browserLocale = window.navigator.language?.split('-')[0];
  return localeCodes.has(browserLocale) ? browserLocale : defaultLocale;
}

function getInitialLocale() {
  return getSavedLocale() ?? getAutomaticLocale();
}

function getCountryFromTrace(trace) {
  return trace.match(/^loc=([A-Z]{2})$/m)?.[1] ?? null;
}

function setMetaContent(selector, content) {
  document.querySelector(selector)?.setAttribute('content', content);
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [splashExiting, setSplashExiting] = useState(false);
  const [locale, setLocale] = useState(getInitialLocale);
  const hasManualLocale = useRef(Boolean(getSavedLocale()));
  const copy = getTranslations(locale);

  const handleLocaleChange = (nextLocale) => {
    if (!localeCodes.has(nextLocale)) return;

    hasManualLocale.current = true;
    window.localStorage.setItem(localePreferenceKey, nextLocale);
    setLocale(nextLocale);
  };

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
    if (hasManualLocale.current) return undefined;

    const controller = new AbortController();

    const detectCountryLocale = async () => {
      try {
        const response = await fetch('/cdn-cgi/trace', {
          cache: 'no-store',
          signal: controller.signal
        });
        const trace = await response.text();
        const country = getCountryFromTrace(trace);
        const countryLocale = countryLocales[country];

        if (countryLocale && !hasManualLocale.current) {
          setLocale(countryLocale);
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          setLocale(getAutomaticLocale());
        }
      }
    };

    detectCountryLocale();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = copy.meta.title;

    setMetaContent('meta[name="description"]', copy.meta.description);
    setMetaContent('meta[name="keywords"]', copy.meta.keywords);
    setMetaContent('meta[property="og:site_name"]', copy.meta.siteName);
    setMetaContent('meta[property="og:title"]', copy.meta.socialTitle);
    setMetaContent('meta[property="og:description"]', copy.meta.socialDescription);
    setMetaContent('meta[property="og:image:alt"]', copy.meta.imageAlt);
    setMetaContent('meta[name="twitter:title"]', copy.meta.socialTitle);
    setMetaContent('meta[name="twitter:description"]', copy.meta.socialDescription);

    document.querySelectorAll('script[type="application/ld+json"]').forEach((script) => {
      try {
        const structuredData = JSON.parse(script.textContent);

        if (structuredData['@type'] === 'Person') {
          structuredData.jobTitle = copy.meta.jobTitle;
          structuredData.description = copy.meta.description;
        }

        if (structuredData['@type'] === 'WebSite') {
          structuredData.name = copy.meta.siteName;
        }

        script.textContent = JSON.stringify(structuredData);
      } catch {
        // Leave unrelated or invalid structured data unchanged.
      }
    });
  }, [copy, locale]);

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
      <PortfolioPage
        data={portfolioData}
        copy={copy}
        locale={locale}
        locales={supportedLocales}
        onLocaleChange={handleLocaleChange}
      />
      {showSplash ? (
        <SplashScreen logo={portfolioData.about.logo} exiting={splashExiting} copy={copy.splash} />
      ) : null}
    </>
  );
}
