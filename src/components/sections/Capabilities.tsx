import { Award, Users, Globe, Clock } from 'lucide-react';
import Badge from '../ui/Badge';

const Capabilities = () => {
  const teamMetrics = [
    { icon: Users, value: '50+', label: 'Senior Engineers' },
    { icon: Award, value: '15+', label: 'Solutions Architects' },
    { icon: Clock, value: '8+', label: 'Years Avg Experience' },
    { icon: Globe, value: '24/7', label: 'Global Support' },
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
    <section id="capabilities" className="section bg-gradient-to-br from-slate-50 to-blue-50">
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
              <div key={index} className="text-center">
                <div className="inline-flex p-4 bg-white rounded-2xl shadow-lg mb-4">
                  <Icon className="w-8 h-8 text-blue-500" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-slate-600">{metric.label}</div>
              </div>
            );
          })}
        </div>

        {/* Global Delivery */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-slate-800">
            Global Delivery Model
          </h3>
          <p className="text-slate-600 mb-6">
            Delivery Centers: <span className="font-semibold">US (NYC, SF) • EU (London) • APAC (Singapore)</span>
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center text-slate-800">
            Team Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-baseline mb-3">
                  <span className="text-3xl font-bold text-blue-500 mr-2">
                    {cert.count}
                  </span>
                  <span className="text-lg font-semibold text-slate-800">
                    {cert.category}
                  </span>
                </div>
                <div className="space-y-1">
                  {cert.items.map((item, idx) => (
                    <div key={idx} className="text-sm text-slate-600">
                      • {item}
                    </div>
                  ))}
                </div>
              </div>
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
                className="flex items-center space-x-2 p-3 bg-slate-50 rounded-lg"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                <span className="text-slate-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SLA Commitment */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Badge variant="success" size="md">
              99.9% Uptime SLA
            </Badge>
            <Badge variant="success" size="md">
              24/7 Support Coverage
            </Badge>
            <Badge variant="success" size="md">
              ISO 9001 Certified
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
