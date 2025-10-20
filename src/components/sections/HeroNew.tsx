import { Shield } from 'lucide-react';
import Button from '../ui/Button';
import CountUp from '../ui/CountUp';
import ReviewBadge from '../ui/ReviewBadge';
import ComplianceBadge from '../ui/ComplianceBadge';
// import TestimonialCard from '../ui/TestimonialCard';

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
        {/* Trust & Compliance Bar */}
        <div className="flex flex-col items-start justify-between gap-6 mb-12 lg:flex-row lg:items-center animate-fade-in">
          {/* Review Badges */}
          <div className="flex flex-wrap gap-3">
            <ReviewBadge platform="Clutch" rating={5.0} reviews={120} />
            <ReviewBadge platform="G2" rating={4.9} reviews={89} />
            <ReviewBadge platform="Google" rating={4.9} reviews={150} />
          </div>

          {/* Compliance Badges */}
          <div className="flex flex-wrap gap-2">
            <ComplianceBadge name="ISO 27001" variant="compact" />
            <ComplianceBadge name="SOC2" variant="compact" />
            <ComplianceBadge name="HIPAA" variant="compact" />
          </div>
        </div>

        {/* Main Hero Content - Centered */}
        <div className="max-w-5xl mx-auto space-y-8 text-center">
          {/* Positioning Badge */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-full bg-brand-blue-500/20 border-brand-blue-400/30 text-brand-blue-300 backdrop-blur-sm">
              <Shield className="w-4 h-4 mr-2" />
              Enterprise Engineering Solutions
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-bold leading-tight lg:text-7xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-white">The Engineering Partner</span>
            <br />
            <span className="text-white">
              Enterprise Teams{' '}
              <span className="text-brand-blue-400">
                Actually Trust
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-4xl mx-auto text-xl leading-relaxed lg:text-2xl text-slate-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Stop wasting time on agencies that over-promise and under-deliver. Work with
            battle-tested engineers who've scaled products from 0 to 10M+ users.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-scale-in">
            <Button variant="purple" size="xl" href="#consultation">
              Schedule Free Consultation
            </Button>
            <Button variant="outline-purple" size="xl" href="#case-studies">
              See Our $50M+ Impact
            </Button>
          </div>

          {/* Animated Stats Bar */}
          <div className="grid grid-cols-2 gap-6 pt-8 lg:grid-cols-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="p-4 transition-all duration-300 border bg-white/5 backdrop-blur-sm rounded-xl border-white/10 hover:border-brand-blue-400/30">
              <div className="mb-1 text-3xl font-bold text-white lg:text-4xl">
                $<CountUp end={50} duration={2000} />M+
              </div>
              <div className="text-sm text-slate-400">Client Revenue Enabled</div>
            </div>
            <div className="p-4 transition-all duration-300 border bg-white/5 backdrop-blur-sm rounded-xl border-white/10 hover:border-brand-blue-400/30">
              <div className="mb-1 text-3xl font-bold text-white lg:text-4xl">
                <CountUp end={99} duration={2000} decimals={1} />.9%
              </div>
              <div className="text-sm text-slate-400">Average Uptime SLA</div>
            </div>
            <div className="p-4 transition-all duration-300 border bg-white/5 backdrop-blur-sm rounded-xl border-white/10 hover:border-brand-blue-400/30">
              <div className="mb-1 text-3xl font-bold text-white lg:text-4xl">24/7</div>
              <div className="text-sm text-slate-400">Global Support</div>
            </div>
            <div className="p-4 transition-all duration-300 border bg-white/5 backdrop-blur-sm rounded-xl border-white/10 hover:border-brand-blue-400/30">
              <div className="mb-1 text-3xl font-bold text-white lg:text-4xl">
                <CountUp end={150} duration={2000} />+
              </div>
              <div className="text-sm text-slate-400">Enterprise Clients</div>
            </div>
          </div>
        </div>

        {/* Featured Testimonial
        <div className="max-w-4xl mx-auto mt-16" style={{ animationDelay: '0.6s' }}>
          <TestimonialCard
            quote="Evarest took our MVP to enterprise-scale in 6 months. 99.99% uptime during our Series B round with 3x user growth. Their compliance expertise was critical to our success."
            author="Sarah Chen"
            title="CTO & Co-Founder"
            company="HealthTech Unicorn ($1.2B valuation)"
            imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
          />
        </div> */}

        {/* Social Proof Line */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <CountUp end={42} duration={2000} /> companies scheduled consultations this month
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
