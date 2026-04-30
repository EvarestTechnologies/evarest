import { ArrowRight, Zap } from 'lucide-react';
import Button from '../ui/Button';

const HeroNew = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden lg:pt-40 lg:pb-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-brand-navy/90 via-brand-navy/80 to-brand-navy/90" />
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url("/hero.jpg")`,
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute z-0 rounded-full top-20 left-10 w-72 h-72 bg-brand-blue-500/10 blur-3xl animate-pulse" />
      <div
        className="absolute z-0 rounded-full bottom-20 right-10 w-96 h-96 bg-brand-cyan-500/10 blur-3xl animate-pulse"
        style={{ animationDelay: '1s', animationDuration: '3s' }}
      />

      <div className="relative z-20 container-custom">
        {/* Main Hero Content - Centered */}
        <div className="max-w-6xl mx-auto space-y-10 text-center">
          {/* Positioning Badge */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold border rounded-full bg-gradient-to-r from-brand-blue-500/10 to-brand-cyan-500/10 border-brand-blue-500/20 text-brand-blue-300 backdrop-blur-md shadow-lg">
              <Zap className="w-4 h-4" />
              Enterprise Engineering Solutions
            </div>
          </div>

          {/* Headline - More modern, cleaner typography */}
          <h1 className="text-5xl font-extrabold leading-[1.1] lg:text-7xl xl:text-8xl tracking-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="block text-white">The Engineering Partner</span>
            <span className="block mt-2 text-white">
              Enterprise Teams{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-brand-blue-400 via-brand-cyan-400 to-brand-blue-400 bg-clip-text text-transparent">
                  Actually Trust
                </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-brand-blue-500/20 -z-10 blur-sm" />
              </span>
            </span>
          </h1>

          {/* Subheadline - Refined */}
          <p className="max-w-4xl mx-auto text-lg leading-relaxed lg:text-xl text-slate-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Stop wasting time on agencies that over-promise and under-deliver. Work with
            battle-tested engineers who've scaled products from 0 to 10M+ users.
          </p>

          {/* CTAs - More refined */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="purple" size="xl" href="#consultation" className="group">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline-purple" size="xl" href="#case-studies">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
