import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
// import Hero from './components/sections/Hero';
import HeroNew from './components/sections/HeroNew';
// import ClientLogos from './components/sections/ClientLogos';
// import ClientLogosNew from './components/sections/ClientLogosNew';
import Services from './components/sections/Services';
import ServiceBuilder from './components/sections/ServiceBuilder';
import Industries from './components/sections/Industries';
import FeaturedProjects from './components/sections/FeaturedProjects';
import CaseStudies from './components/sections/CaseStudies';
import Capabilities from './components/sections/Capabilities';
import ConsultationSection from './components/sections/ConsultationSection';
import { SERVICES } from './utils/constants';

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <HeroNew />
        {/* <ClientLogosNew /> */}
        <Services />
        <ServiceBuilder services={SERVICES} />
        <Industries />
        <FeaturedProjects />
        <CaseStudies />
        <Capabilities />
        <ConsultationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
