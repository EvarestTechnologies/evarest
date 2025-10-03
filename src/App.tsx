import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ClientLogos from './components/sections/ClientLogos';
import Services from './components/sections/Services';
import Industries from './components/sections/Industries';
import CaseStudies from './components/sections/CaseStudies';
import Capabilities from './components/sections/Capabilities';
import ConsultationSection from './components/sections/ConsultationSection';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <Services />
        <Industries />
        <CaseStudies />
        <Capabilities />
        <ConsultationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
