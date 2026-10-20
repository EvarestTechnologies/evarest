import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';
import { Mountain } from '../ui/Logo';

const Hero = () => (
  <section className="relative pt-36 pb-20 overflow-hidden lg:pt-44 lg:pb-28 bg-white">
    <div
      className="absolute inset-0 z-0 opacity-60"
      style={{
        backgroundImage:
          'linear-gradient(#F1EEF3 1px, transparent 1px), linear-gradient(90deg, #F1EEF3 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    />
    <div className="absolute z-0 rounded-full -top-10 left-1/4 w-[32rem] h-[32rem] bg-brand-blue-400/10 blur-3xl" />
    <div className="absolute z-0 rounded-full bottom-0 right-10 w-96 h-96 bg-brand-cyan-400/15 blur-3xl" />
    <Mountain className="absolute z-0 hidden md:block -right-16 bottom-0 w-[36rem] opacity-[0.07]" strokeWidth={3} />

    <div className="relative z-10 container-custom">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <div className="animate-slide-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold border rounded-full bg-white border-brand-blue-200 text-brand-blue-500">
            <span className="w-2 h-2 rounded-full bg-brand-cyan-500" />
            Software and AI engineering, built in Kenya
          </span>
        </div>

        <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight lg:text-7xl animate-slide-up text-brand-navy" style={{ animationDelay: '0.1s' }}>
          We build what matters.
          <span className="block mt-2 text-brand-blue-500">We engineer what works.</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed lg:text-xl text-slate-600 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          We build our own technology products, ZEYA and Kintaraa, and we engineer backend systems,
          integrations and applied AI for teams that need their software built, shipped and supported.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <Button variant="primary" size="xl" href="#contact" className="group">
            Discuss an engineering project
            <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline-purple" size="xl" href="#products">
            Explore our products
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
