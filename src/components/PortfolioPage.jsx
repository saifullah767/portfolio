import Layout from './Layout';
import About from './About';
import MyDetails from './MyDetails';
import ClientWork from './ClientWork';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Certifications from './Certifications';
import Contact from './Contact';

export default function PortfolioPage({ data, copy, locale, locales, onLocaleChange }) {
  return (
    <Layout
      logo={data.about.logo}
      navItems={data.navItems}
      socialLinks={data.socialLinks}
      copy={copy}
      locale={locale}
      locales={locales}
      onLocaleChange={onLocaleChange}
    >
      <About about={data.about} socialLinks={data.socialLinks} copy={copy.about} />
      <ClientWork clientWork={data.clientWork} copy={copy.clientWork} />
      <Projects projects={data.projects} copy={copy.projects} />
      <MyDetails details={data.details} copy={copy.details} />
      <Testimonials testimonials={data.testimonials} copy={copy.testimonials} />
      <Certifications certifications={data.certifications} copy={copy.certifications} />
      <Contact contact={data.contact} copy={copy.contact} thankYouCopy={copy.thankYou} />
    </Layout>
  );
}
