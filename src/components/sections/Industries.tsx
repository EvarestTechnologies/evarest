import { Heart, DollarSign, Building, Grid, Shield, ArrowRight } from 'lucide-react';
import Badge from '../ui/Badge';
import { INDUSTRIES } from '../../utils/constants';

const Industries = () => {
  const iconMap = {
    Heart,
    DollarSign,
    Building,
    Grid,
  };

  return (
    <section id="industries" className="relative overflow-hidden py-24">
      {/* Full-width Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Background Image - Professional tech/business setting */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop")`,
          }}
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/95 via-brand-blue-900/95 to-brand-navy/95" />

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-cyan-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue-500/20 border border-brand-blue-400/30 rounded-full text-sm font-medium text-brand-blue-300 backdrop-blur-sm mb-6">
            <Shield className="w-4 h-4" />
            <span>Compliance-First Approach</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Industry Expertise That
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-400 to-brand-cyan-400">
              Drives Results
            </span>
          </h2>

          <p className="text-xl text-slate-300 leading-relaxed">
            Deep domain knowledge and regulatory compliance across critical industries where security and reliability are non-negotiable
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {INDUSTRIES.map((industry, index) => {
            const Icon = iconMap[industry.icon as keyof typeof iconMap];

            return (
              <a
                key={industry.id}
                href="#consultation"
                className="group relative block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card with Glass Morphism Effect */}
                <div className="relative h-full bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 transition-all duration-500 hover:bg-white/15 hover:border-brand-blue-400/50 hover:shadow-2xl hover:shadow-brand-blue-500/20 hover:-translate-y-2 cursor-pointer">

                  {/* Gradient Glow on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue-500/0 via-brand-cyan-500/0 to-brand-blue-500/0 group-hover:from-brand-blue-500/10 group-hover:via-brand-cyan-500/10 group-hover:to-brand-blue-500/10 transition-all duration-500" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with Gradient Background */}
                    <div className="mb-6 inline-flex">
                      <div className="relative">
                        {/* Animated Ring */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-blue-500 to-brand-cyan-500 opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />

                        {/* Icon Container */}
                        <div className="relative p-4 rounded-xl bg-gradient-to-br from-brand-blue-500 to-brand-cyan-500 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Industry Name */}
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-brand-blue-300 transition-colors duration-300">
                      {industry.name}
                    </h3>

                    {/* Compliance Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {industry.compliance.map((badge) => (
                        <Badge
                          key={badge}
                          variant="primary"
                          size="sm"
                          className="bg-brand-blue-500/30 border-brand-blue-400/50 text-brand-blue-200 backdrop-blur-sm"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="space-y-2 mb-4">
                      {industry.stats.map((stat, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-cyan-400 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {stat}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Hover Arrow */}
                    <div className="flex items-center gap-2 text-brand-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-semibold">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-cyan-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-sm text-slate-300">Client Retention Rate</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">99.99%</div>
            <div className="text-sm text-slate-300">Average Uptime SLA</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">Zero</div>
            <div className="text-sm text-slate-300">Compliance Violations</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-slate-300 mb-6">
            Don't see your industry? We've helped companies across 15+ sectors
          </p>
          <a
            href="#consultation"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-blue-500 to-brand-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-brand-blue-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            <span>Discuss Your Industry Needs</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

    </section>
  );
};

export default Industries;
