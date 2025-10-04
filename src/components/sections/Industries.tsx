import { Heart, DollarSign, Building, Grid } from 'lucide-react';
import Card from '../ui/Card';
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
    <section id="industries" className="section bg-gradient-to-br from-white via-brand-blue-50/30 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-800">
            Industry Expertise
          </h2>
          <p className="text-xl text-slate-600">
            Deep domain knowledge and regulatory compliance across critical industries
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INDUSTRIES.map((industry) => {
            const Icon = iconMap[industry.icon as keyof typeof iconMap];
            return (
              <Card key={industry.id} className="group text-center">
                {/* Compliance Badges - Moved to Top */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {industry.compliance.map((badge) => (
                      <Badge key={badge} variant="primary" size="sm">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Icon with Solid Background */}
                <div className="inline-flex p-4 rounded-xl bg-brand-blue-500 text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Industry Name */}
                <h3 className="text-xl font-bold mb-4 text-slate-800">
                  {industry.name}
                </h3>

                {/* Stats */}
                <div className="space-y-2">
                  {industry.stats.map((stat, index) => (
                    <p key={index} className="text-sm text-slate-600">
                      {stat}
                    </p>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-brand-blue-100 text-brand-blue-800 rounded-full font-semibold">
            <span className="text-2xl mr-2">🏆</span>
            100% Client Retention Rate
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
