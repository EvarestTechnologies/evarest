import { HeartIcon, CurrencyDollarIcon, BuildingOfficeIcon, Squares2X2Icon, ShieldCheckIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Badge from '../ui/Badge';
import { INDUSTRIES } from '../../utils/constants';

const Industries = () => {
  const iconMap = {
    Heart: HeartIcon,
    DollarSign: CurrencyDollarIcon,
    Building: BuildingOfficeIcon,
    Grid: Squares2X2Icon,
  };

  return (
    <section id="industries" className="relative overflow-hidden py-32">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {/* Background Image - Professional tech/business setting */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop")`,
          }}
        />

        {/* Modern Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-brand-navy to-slate-950" />

        {/* Subtle animated orbs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-blue-600/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-blue-500/10 to-brand-cyan-500/10 border border-brand-blue-500/20 rounded-full text-sm font-semibold text-brand-blue-300 backdrop-blur-md mb-6">
            <ShieldCheckIcon className="w-4 h-4" />
            <span>Compliance-First Approach</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
            Industry Expertise That
            <span className="block mt-2 bg-gradient-to-r from-brand-blue-400 via-brand-cyan-400 to-brand-blue-400 bg-clip-text text-transparent">
              Drives Results
            </span>
          </h2>

          <p className="text-lg lg:text-xl text-slate-400 leading-relaxed">
            Deep domain knowledge and regulatory compliance across critical industries where security and reliability are non-negotiable
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {INDUSTRIES.map((industry, index) => {
            const Icon = iconMap[industry.icon as keyof typeof iconMap];

            return (
              <a
                key={industry.id}
                href="#consultation"
                className="group relative block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card with Modern Glass Effect */}
                <div className="relative h-full bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/[0.08] p-7 transition-all duration-500 hover:bg-white/[0.06] hover:border-brand-blue-500/40 hover:shadow-2xl hover:shadow-brand-blue-600/20 hover:-translate-y-2 cursor-pointer">

                  {/* Gradient Glow on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue-600/0 via-brand-cyan-500/0 to-brand-blue-600/0 group-hover:from-brand-blue-600/10 group-hover:via-brand-cyan-500/5 group-hover:to-brand-blue-600/10 transition-all duration-500" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with Gradient Background */}
                    <div className="mb-6 inline-flex">
                      <div className="relative">
                        {/* Soft glow effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-blue-500 to-brand-cyan-500 blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />

                        {/* Icon Container */}
                        <div className="relative p-4 rounded-xl bg-gradient-to-br from-brand-blue-500 to-brand-cyan-500 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Industry Name */}
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-brand-blue-300 transition-colors duration-300">
                      {industry.name}
                    </h3>

                    {/* Compliance Badges */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {industry.compliance.map((badge) => (
                        <Badge
                          key={badge}
                          variant="primary"
                          size="sm"
                          className="bg-brand-blue-500/20 border-brand-blue-400/30 text-brand-blue-200 backdrop-blur-sm font-medium"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="space-y-3 mb-5">
                      {industry.stats.map((stat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <div className="flex-shrink-0 mt-1.5">
                            <div className="w-1 h-1 bg-brand-cyan-400 rounded-full" />
                          </div>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            {stat}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Hover Arrow */}
                    <div className="flex items-center gap-2 text-brand-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-sm font-semibold">Learn More</span>
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-slate-400 mb-8">
            Don't see your industry? We've helped companies across 15+ sectors
          </p>
          <a
            href="#consultation"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-blue-600 to-brand-cyan-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-brand-blue-600/40 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <span>Discuss Your Industry Needs</span>
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

    </section>
  );
};

export default Industries;
