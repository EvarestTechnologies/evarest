import { Award, Users, Globe, Clock } from 'lucide-react';
import Badge from '../ui/Badge';
import CountUp from '../ui/CountUp';
import CertificationCard from '../ui/CertificationCard';
import WorldMap from '../ui/WorldMap';

const Capabilities = () => {
  const teamMetrics = [
    { icon: Users, value: 50, suffix: '+', label: 'Senior Engineers', isText: false },
    { icon: Award, value: 15, suffix: '+', label: 'Solutions Architects', isText: false },
    { icon: Clock, value: 8, suffix: '+', label: 'Years Avg Experience', isText: false },
    { icon: Globe, value: '24/7', suffix: '', label: 'Global Support', isText: true },
  ];

  const certifications = [
    { category: 'AWS', count: '25+', items: ['Solutions Architect', 'DevOps', 'Security'] },
    { category: 'Google Cloud', count: '15+', items: ['Professional Architect', 'Data Engineer'] },
    { category: 'Kubernetes', count: '10+', items: ['CKA', 'CKAD', 'CKS'] },
    { category: 'Security', count: '8+', items: ['CISSP', 'CEH', 'OSCP'] },
  ];

  const expertiseAreas = [
    'Cloud Architecture & Migration',
    'Microservices & Distributed Systems',
    'AI/ML Engineering',
    'DevOps & Site Reliability Engineering',
    'Security Engineering & Compliance',
    'Data Engineering & Analytics',
  ];

  return (
    <section id="capabilities" className="section bg-gradient-to-br from-white via-brand-blue-50/30 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-800">
            Enterprise-Scale Capabilities
          </h2>
          <p className="text-xl text-slate-600">
            World-class engineering talent with proven expertise
          </p>
        </div>

        {/* Team Metrics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {teamMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex p-4 bg-brand-blue-500 rounded-2xl shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">
                  {metric.isText ? (
                    metric.value
                  ) : (
                    <>
                      <CountUp end={Number(metric.value)} duration={2000} />
                      {metric.suffix}
                    </>
                  )}
                </div>
                <div className="text-sm text-slate-600">{metric.label}</div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Global Delivery with World Map - Full Width */}
      <div className="mb-12">
        <WorldMap />
      </div>

      <div className="container-custom">

        {/* Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center text-slate-800">
            Team Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                category={cert.category}
                count={cert.count}
                items={cert.items}
              />
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center text-slate-800">
            Core Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 p-3 bg-slate-50 rounded-lg hover:bg-brand-blue-50 hover:border-brand-blue-400 border-2 border-transparent transition-all duration-300"
              >
                <div className="w-2 h-2 bg-brand-blue-500 rounded-full flex-shrink-0" />
                <span className="text-slate-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SLA Commitment */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Badge variant="primary" size="md">
              99.9% Uptime SLA
            </Badge>
            <Badge variant="primary" size="md">
              24/7 Support Coverage
            </Badge>
            <Badge variant="primary" size="md">
              ISO 9001 Certified
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
