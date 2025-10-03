import { Cloud, Code, Brain, Shield, GitBranch, Headphones } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const Services = () => {
  const services = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud & Infrastructure Services',
      icon: Cloud,
      gradient: 'from-blue-500 to-blue-600',
      description: 'Scalable infrastructure that grows with your business',
      outcomes: [
        'Cost optimization',
        '99.9%+ uptime guarantee',
        'Global availability',
      ],
      compliance: ['SOC2', 'ISO 27001'],
    },
    {
      id: 'app-development',
      name: 'Application Development & Modernization',
      icon: Code,
      gradient: 'from-green-500 to-green-600',
      description: 'Modern applications that drive business value',
      outcomes: [
        'Faster time-to-market',
        'Improved user experience',
        'Legacy system migration',
      ],
      compliance: [],
    },
    {
      id: 'data-ai',
      name: 'Data & AI Engineering',
      icon: Brain,
      gradient: 'from-purple-500 to-purple-600',
      description: 'Turn data into competitive advantage',
      outcomes: [
        'Real-time analytics',
        'Custom ML models',
        'Data pipeline automation',
      ],
      compliance: [],
    },
    {
      id: 'security-compliance',
      name: 'Security & Compliance Engineering',
      icon: Shield,
      gradient: 'from-red-500 to-pink-500',
      description: 'Enterprise security that enables business',
      outcomes: [
        'Regulatory compliance',
        'Zero-trust architecture',
        'Security audits & pentesting',
      ],
      compliance: ['SOC2', 'HIPAA', 'PCI-DSS'],
    },
    {
      id: 'devops-sre',
      name: 'DevOps & Site Reliability Engineering',
      icon: GitBranch,
      gradient: 'from-orange-500 to-orange-600',
      description: 'Reliability at scale',
      outcomes: [
        'Automated deployments',
        '24/7 monitoring',
        'Incident response',
      ],
      compliance: [],
    },
    {
      id: 'managed-services',
      name: 'Managed Services & 24/7 Support',
      icon: Headphones,
      gradient: 'from-teal-500 to-teal-600',
      description: 'Always-on operations',
      outcomes: [
        'SLA-backed support',
        'Proactive monitoring',
        'Cost predictability',
      ],
      compliance: [],
    },
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-800">
            Enterprise Solutions
          </h2>
          <p className="text-xl text-slate-600">
            Comprehensive engineering services designed to accelerate your business objectives
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="group">
                {/* Icon with Gradient Background */}
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                {/* Service Name */}
                <h3 className="text-2xl font-bold mb-3 text-slate-800">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-4">{service.description}</p>

                {/* Key Outcomes */}
                <ul className="space-y-2 mb-6">
                  {service.outcomes.map((outcome, index) => (
                    <li
                      key={index}
                      className="flex items-start text-sm text-slate-600"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>

                {/* Compliance Badges */}
                {service.compliance.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.compliance.map((badge) => (
                      <Badge key={badge} variant="primary" size="sm">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <Button variant="ghost" size="sm" href={`#${service.id}`}>
                  Learn More
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <Button variant="primary" size="lg" href="#consultation">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
