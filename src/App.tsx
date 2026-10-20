import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Products from './components/sections/Products';
import Engineering from './components/sections/Engineering';
import Work from './components/sections/Work';
import HowWeWork from './components/sections/HowWeWork';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Products />
        <Engineering />
        <Work />
        <HowWeWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
