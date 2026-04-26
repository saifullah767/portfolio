import Layout from './Layout';
import About from './About';
import MyDetails from './MyDetails';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Certifications from './Certifications';
import Footer from './Footer';

export default function PortfolioPage({ data }) {
  return (
    <>
      <Layout logo={data.about.logo} navItems={data.navItems} socialLinks={data.socialLinks}>
        <About about={data.about} socialLinks={data.socialLinks} />
        <MyDetails details={data.details} />
        <Projects projects={data.projects} />
        <Testimonials testimonials={data.testimonials} />
        <Certifications certifications={data.certifications} />
      </Layout>

      <Footer footer={data.footer} socialLinks={data.socialLinks} />
    </>
  );
}
