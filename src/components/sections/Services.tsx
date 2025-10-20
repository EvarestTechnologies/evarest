import { useState, useEffect, useRef } from 'react';
import { Cloud, Code, Brain, Shield, GitBranch, Headphones, CheckCircle2, Calendar, FileText, DollarSign, Check, X, Star, TrendingUp, Users, Award } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Tooltip from '../ui/Tooltip';
import ComparisonModal from './ComparisonModal';

const Services = () => {
  const [compareMode, setCompareMode] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [showComparisonModal, setShowComparisonModal] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const toggleServiceSelection = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : prev.length < 3
        ? [...prev, serviceId]
        : prev
    );
  };

  // Category definitions
  const categories = [
    { id: 'all', label: 'All Services', icon: Cloud, count: 6 },
    { id: 'infrastructure', label: 'Infrastructure', icon: Cloud, count: 2 },
    { id: 'development', label: 'Development', icon: Code, count: 1 },
    { id: 'ai', label: 'AI/ML', icon: Brain, count: 1 },
    { id: 'security', label: 'Security', icon: Shield, count: 1 },
    { id: 'support', label: 'Support', icon: Headphones, count: 1 },
  ];
  // Compliance information
  const complianceInfo: Record<string, { description: string; color: string }> = {
    'SOC2': {
      description: 'SOC 2 Type II certified - Annual third-party security audits',
      color: 'bg-blue-100 text-blue-700 border-blue-300',
    },
    'ISO 27001': {
      description: 'ISO 27001 certified - International information security standard',
      color: 'bg-purple-100 text-purple-700 border-purple-300',
    },
    'HIPAA': {
      description: 'HIPAA compliant - Healthcare data protection certified',
      color: 'bg-green-100 text-green-700 border-green-300',
    },
    'PCI-DSS': {
      description: 'PCI-DSS certified - Payment card industry security standards',
      color: 'bg-red-100 text-red-700 border-red-300',
    },
    'GDPR': {
      description: 'GDPR compliant - European data privacy regulation certified',
      color: 'bg-indigo-100 text-indigo-700 border-indigo-300',
    },
  };

  const services = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud & Infrastructure Services',
      icon: Cloud,
      gradient: 'from-brand-blue-500 to-brand-blue-600',
      glowColor: 'brand-blue-500',
      description: 'Scalable infrastructure that grows with your business',
      outcomes: [
        { label: 'Cost optimization', detail: 'Reduce infrastructure costs by 30-40%' },
        { label: '99.9%+ uptime guarantee', detail: 'SLA-backed reliability with 24/7 monitoring' },
        { label: 'Global availability', detail: 'Deploy across 15+ regions worldwide' },
      ],
      compliance: ['SOC2', 'ISO 27001'],
      featured: true,
      category: 'infrastructure',
      layoutSize: 'large', // Wide card - spans 2 columns
      estimatedWeeks: 16,
      estimatedCost: '$20K-$40K/mo',
      cta: {
        primary: { text: 'Get Free Cloud Assessment', icon: DollarSign },
        secondary: { text: 'View Case Studies', icon: FileText },
      },
    },
    {
      id: 'app-development',
      name: 'Application Development & Modernization',
      icon: Code,
      gradient: 'from-brand-cyan-500 to-brand-cyan-600',
      glowColor: 'brand-cyan-500',
      description: 'Modern applications that drive business value',
      outcomes: [
        { label: 'Faster time-to-market', detail: 'Launch 2-3x faster with proven frameworks' },
        { label: 'Improved user experience', detail: 'Increase engagement by up to 60%' },
        { label: 'Legacy system migration', detail: 'Zero-downtime modernization' },
      ],
      compliance: ['ISO 27001'],
      featured: false,
      category: 'development',
      layoutSize: 'standard',
      estimatedWeeks: 12,
      estimatedCost: '$15K-$35K/mo',
      cta: {
        primary: { text: 'Schedule Consultation', icon: Calendar },
        secondary: { text: 'View Portfolio', icon: FileText },
      },
    },
    {
      id: 'data-ai',
      name: 'Data & AI Engineering',
      icon: Brain,
      gradient: 'from-brand-blue-600 to-brand-blue-500',
      glowColor: 'brand-blue-600',
      description: 'Turn data into competitive advantage',
      outcomes: [
        { label: 'Real-time analytics', detail: 'Process millions of events per second' },
        { label: 'Custom ML models', detail: 'Achieve 95%+ accuracy on business predictions' },
        { label: 'Data pipeline automation', detail: 'Reduce manual processing by 80%' },
      ],
      compliance: ['SOC2', 'GDPR'],
      featured: false,
      category: 'ai',
      layoutSize: 'standard',
      estimatedWeeks: 10,
      estimatedCost: '$18K-$38K/mo',
      cta: {
        primary: { text: 'Discuss AI Strategy', icon: Calendar },
        secondary: { text: 'View AI Case Studies', icon: FileText },
      },
    },
    {
      id: 'security-compliance',
      name: 'Security & Compliance Engineering',
      icon: Shield,
      gradient: 'from-brand-cyan-600 to-red-500',
      glowColor: 'brand-cyan-600',
      description: 'Enterprise security that enables business',
      outcomes: [
        { label: 'Regulatory compliance', detail: 'Pass audits on first attempt - 100% track record' },
        { label: 'Zero-trust architecture', detail: 'Reduce security incidents by 90%' },
        { label: 'Security audits & pentesting', detail: 'Comprehensive testing in 2-3 weeks' },
      ],
      compliance: ['SOC2', 'HIPAA', 'PCI-DSS'],
      featured: false,
      category: 'security',
      layoutSize: 'standard', // Changed from 'tall' to 'standard'
      estimatedWeeks: 8,
      estimatedCost: '$15K-$30K/mo',
      cta: {
        primary: { text: 'Schedule Security Review', icon: Shield },
        secondary: { text: 'Download Security Brief', icon: FileText },
      },
    },
    {
      id: 'devops-sre',
      name: 'DevOps & Site Reliability Engineering',
      icon: GitBranch,
      gradient: 'from-brand-blue-400 to-brand-cyan-400',
      glowColor: 'brand-blue-400',
      description: 'Reliability at scale',
      outcomes: [
        { label: 'Automated deployments', detail: 'Deploy 10x more frequently with 90% less errors' },
        { label: '24/7 monitoring', detail: 'Detect and resolve issues in under 5 minutes' },
        { label: 'Incident response', detail: 'Mean time to recovery (MTTR) under 15 minutes' },
      ],
      compliance: ['ISO 27001'],
      featured: false,
      category: 'infrastructure',
      layoutSize: 'standard',
      estimatedWeeks: 10,
      estimatedCost: '$16K-$32K/mo',
      cta: {
        primary: { text: 'Schedule Consultation', icon: Calendar },
        secondary: { text: 'View DevOps Guide', icon: FileText },
      },
    },
    {
      id: 'managed-services',
      name: 'Managed Services & 24/7 Support',
      icon: Headphones,
      gradient: 'from-brand-blue-500 to-brand-blue-500',
      glowColor: 'brand-blue-500',
      description: 'Always-on operations',
      outcomes: [
        { label: 'SLA-backed support', detail: '< 1 hour response time for critical issues' },
        { label: 'Proactive monitoring', detail: 'Identify 95% of issues before user impact' },
        { label: 'Cost predictability', detail: 'Fixed monthly pricing - no surprise bills' },
      ],
      compliance: ['SOC2'],
      featured: false,
      category: 'support',
      layoutSize: 'standard',
      estimatedWeeks: 4,
      estimatedCost: '$12K-$25K/mo',
      cta: {
        primary: { text: 'Get Support Quote', icon: DollarSign },
        secondary: { text: 'View SLA Details', icon: FileText },
      },
    },
  ];

  // Intersection Observer for staggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute('data-service-id');
            if (cardId) {
              setVisibleCards(prev => new Set(prev).add(cardId));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    cardRefs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [activeFilter]);

  return (
    <section id="services" className="section bg-gradient-to-br from-white via-brand-blue-50/30 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-slate-800">Enterprise </span>
            <span className="text-brand-blue-600">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-600">
            Comprehensive engineering services designed to accelerate your business objectives
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {categories.map(cat => {
            const CategoryIcon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`
                  flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm
                  transition-all duration-300 transform
                  ${activeFilter === cat.id
                    ? 'bg-brand-blue-500 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-300'
                  }
                `}
              >
                <CategoryIcon className="w-4 h-4" />
                {cat.label}
                {cat.id !== 'all' && (
                  <span className={`
                    text-xs px-1.5 py-0.5 rounded-full
                    ${activeFilter === cat.id
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 text-slate-600'
                    }
                  `}>
                    {cat.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Compare Mode Toggle */}
        <div className="text-center mb-8">
          <Button
            variant={compareMode ? 'purple' : 'outline'}
            size="md"
            onClick={() => {
              setCompareMode(!compareMode);
              if (compareMode) setSelectedServices([]);
            }}
          >
            {compareMode ? (
              <>
                <X className="w-4 h-4 mr-2" />
                Exit Compare Mode
              </>
            ) : (
              <>
                <Check className="w-4 h-4 mr-2" />
                Compare Services
              </>
            )}
          </Button>
          {compareMode && (
            <p className="text-sm text-slate-600 mt-2">
              Select up to 3 services to compare ({selectedServices.length}/3 selected)
            </p>
          )}
        </div>

        {/* Services Grid with Enhanced Bento Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services
            .filter(service => activeFilter === 'all' || service.category === activeFilter)
            .map((service, index) => {
            const Icon = service.icon;
            const isSelected = selectedServices.includes(service.id);
            const isVisible = visibleCards.has(service.id);

            // Determine layout classes based on size
            const layoutClasses = {
              large: 'md:col-span-2 lg:col-span-3',
              tall: '',
              standard: '',
            };

            return (
              <div
                key={service.id}
                ref={(el) => {
                  if (el) cardRefs.current.set(service.id, el);
                }}
                data-service-id={service.id}
                className={`
                  ${layoutClasses[service.layoutSize as keyof typeof layoutClasses]}
                  transition-all duration-700 ease-out
                  ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                  }
                `}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <Card
                  className={`
                    group relative h-full
                    hover:shadow-xl hover:shadow-${service.glowColor}/20
                    ${compareMode ? 'cursor-pointer' : ''}
                    ${isSelected ? 'ring-4 ring-brand-blue-500 bg-brand-blue-50/50' : ''}
                    transition-all duration-300
                  `}
                  onClick={() => compareMode && toggleServiceSelection(service.id)}
                >
                {/* Selection Checkbox (Compare Mode) */}
                {compareMode && (
                  <div className="absolute top-4 left-4 z-10">
                    <div
                      className={`
                        w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all
                        ${isSelected
                          ? 'bg-brand-blue-500 border-brand-blue-500'
                          : 'bg-white border-slate-300'
                        }
                      `}
                    >
                      {isSelected && <Check className="w-4 h-4 text-white" />}
                    </div>
                  </div>
                )}

                {/* Icon with Solid Background */}
                <div
                  className={`inline-flex rounded-xl bg-brand-blue-500 text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ${service.featured ? 'p-6' : 'p-4'}`}
                >
                  <Icon className={service.featured ? 'w-12 h-12' : 'w-8 h-8'} />
                </div>

                {/* Service Name */}
                <h3 className={`font-bold mb-3 text-slate-800 ${service.featured ? 'text-3xl' : 'text-2xl'}`}>
                  {service.name}
                </h3>

                {/* Description */}
                <p className={`text-slate-600 mb-4 ${service.featured ? 'text-lg' : ''}`}>
                  {service.description}
                </p>

                {/* Key Outcomes */}
                <ul className="space-y-3 mb-6">
                  {service.outcomes.map((outcome, index) => (
                    <li
                      key={index}
                      className="flex items-start"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5 mr-2" />
                      <div className="flex-1">
                        <div className="font-semibold text-slate-800 text-sm mb-0.5">
                          {outcome.label}
                        </div>
                        <p className="text-xs text-slate-600">
                          {outcome.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Compliance Badges */}
                {service.compliance.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Compliance & Certifications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.compliance.map((badge) => (
                        <Tooltip key={badge} content={complianceInfo[badge]?.description || badge}>
                          <span
                            className={`
                              inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold
                              border cursor-help transition-all hover:scale-105
                              ${complianceInfo[badge]?.color || 'bg-slate-100 text-slate-700 border-slate-300'}
                            `}
                          >
                            <Shield className="w-3 h-3 mr-1" />
                            {badge}
                          </span>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                )}

                {/* Why Choose This (Featured Service Only) */}
                {service.featured && (
                  <div className="mb-6 p-5 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Star className="w-5 h-5 text-white fill-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                          Why 80% of our clients start here
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="flex items-start gap-2">
                            <TrendingUp className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-semibold text-green-900">Fastest ROI</p>
                              <p className="text-xs text-green-700">See results in weeks, not months</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Users className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-semibold text-green-900">Foundation for growth</p>
                              <p className="text-xs text-green-700">Enables all other services</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2 md:col-span-2">
                            <Award className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-semibold text-green-900">Highest satisfaction</p>
                              <p className="text-xs text-green-700">4.9/5 rating from 150+ clients</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Expandable Details */}
                {expandedService === service.id && (
                  <div className="mt-6 pt-6 border-t border-slate-200 animate-fadeIn">
                    <div className="space-y-4">
                      {/* Typical Engagement */}
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2 text-sm">Typical Engagement</h4>
                        <div className="flex gap-4 text-sm">
                          <div className="flex-1 bg-slate-50 rounded-lg p-3">
                            <span className="text-xs text-slate-500 block mb-1">Duration</span>
                            <p className="font-semibold text-slate-800">
                              {service.featured ? '3-6 months' : '2-4 months'}
                            </p>
                          </div>
                          <div className="flex-1 bg-slate-50 rounded-lg p-3">
                            <span className="text-xs text-slate-500 block mb-1">Team Size</span>
                            <p className="font-semibold text-slate-800">
                              {service.featured ? '5-8 engineers' : '3-5 engineers'}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Popular Use Cases */}
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2 text-sm">Popular Use Cases</h4>
                        <ul className="space-y-1.5 text-sm text-slate-700">
                          {service.id === 'cloud-infrastructure' && (
                            <>
                              <li className="flex items-start"><span className="text-brand-blue-500 mr-2">•</span>AWS/Azure/GCP migration & optimization</li>
                              <li className="flex items-start"><span className="text-brand-blue-500 mr-2">•</span>Kubernetes & containerization</li>
                              <li className="flex items-start"><span className="text-brand-blue-500 mr-2">•</span>Multi-cloud architecture design</li>
                            </>
                          )}
                          {service.id === 'app-development' && (
                            <>
                              <li className="flex items-start"><span className="text-brand-blue-500 mr-2">•</span>React/Next.js web applications</li>
                              <li className="flex items-start"><span className="text-brand-blue-500 mr-2">•</span>Mobile app development (React Native)</li>
                              <li className="flex items-start"><span className="text-brand-blue-500 mr-2">•</span>Legacy monolith to microservices</li>
                            </>
                          )}
                          {service.id === 'data-ai' && (
                            <>
                              <li className="flex items-start"><span className="text-brand-blue-500 mr-2">•</span>Real-time data pipelines with Apache Kafka</li>
                              <li className="flex items-start"><span className="text-brand-blue-500 mr-2">•</span>Predictive analytics & ML models</li>
                              <li className="flex items-start"><span className="text-brand-blue-500 mr-2">•</span>Data warehouse modernization</li>
                            </>
                          )}
                          {service.id === 'security-compliance' && (
                            <>
                              <li className="flex items-start"><span className="text-brand-blue-500 mr-2">•</span>SOC 2 & HIPAA compliance implementation</li>
                              <li className="flex items-start"><span className="text-brand-blue-500 mr-2">•</span>Security audit preparation</li>
                              <li className="flex items-start"><span className="text-brand-blue-500 mr-2">•</span>Penetration testing & vulnerability assessment</li>
                            </>
                          )}
                          {service.id === 'devops-sre' && (
                            <>
                              <li className="flex items-start"><span className="text-brand-blue-500 mr-2">•</span>CI/CD pipeline automation</li>
                              <li className="flex items-start"><span className="text-brand-blue-500 mr-2">•</span>Infrastructure as Code (Terraform)</li>
                              <li className="flex items-start"><span className="text-brand-blue-500 mr-2">•</span>Monitoring & observability setup</li>
                            </>
                          )}
                          {service.id === 'managed-services' && (
                            <>
                              <li className="flex items-start"><span className="text-brand-blue-500 mr-2">•</span>24/7 production support</li>
                              <li className="flex items-start"><span className="text-brand-blue-500 mr-2">•</span>Incident management & on-call</li>
                              <li className="flex items-start"><span className="text-brand-blue-500 mr-2">•</span>Performance monitoring & optimization</li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* CTAs */}
                <div className="flex gap-2 flex-wrap mt-6">
                  {!compareMode && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e?.stopPropagation();
                        setExpandedService(expandedService === service.id ? null : service.id);
                      }}
                    >
                      {expandedService === service.id ? 'Show Less' : 'Learn More'}
                    </Button>
                  )}
                  <Button
                    variant="purple"
                    size="sm"
                    href="#consultation"
                    className="group"
                  >
                    {service.cta.primary.icon && (
                      <service.cta.primary.icon className="w-4 h-4 mr-1.5 group-hover:scale-110 transition-transform" />
                    )}
                    {service.cta.primary.text}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    href="#case-studies"
                  >
                    {service.cta.secondary.icon && (
                      <service.cta.secondary.icon className="w-4 h-4 mr-1.5" />
                    )}
                    {service.cta.secondary.text}
                  </Button>
                </div>
              </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <Button variant="purple" size="lg" href="#consultation">
            Schedule Consultation
          </Button>
        </div>

        {/* Floating Compare Button */}
        {selectedServices.length >= 2 && (
          <div className="fixed bottom-8 right-8 z-50 animate-slideUp">
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-brand-blue-500 p-6 max-w-sm">
              <h4 className="font-bold text-slate-900 mb-2">
                Ready to compare?
              </h4>
              <p className="text-sm text-slate-600 mb-4">
                {selectedServices.length} services selected
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedServices([])}
                >
                  Clear
                </Button>
                <Button
                  variant="purple"
                  size="sm"
                  onClick={() => setShowComparisonModal(true)}
                  className="flex-1"
                >
                  View Comparison
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Modal */}
        {showComparisonModal && (
          <ComparisonModal
            services={services}
            selectedIds={selectedServices}
            onClose={() => setShowComparisonModal(false)}
          />
        )}
      </div>
    </section>
  );
};

export default Services;
