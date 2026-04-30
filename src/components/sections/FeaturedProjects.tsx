import { ArrowRight, Smartphone, Tablet, TrendingUp, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const FeaturedProjects = () => {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    projectRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setVisibleProjects((prev) => {
              const newSet = new Set(prev);
              if (entry.isIntersecting) {
                newSet.add(index);
              } else {
                newSet.delete(index);
              }
              return newSet;
            });
          });
        },
        {
          threshold: 0.2,
          rootMargin: '-50px',
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const projects = [
    {
      id: 'mobile-seo-app',
      title: 'SEO Marketing Analytics App',
      category: 'Mobile Application',
      client: 'Digital Marketing Agency',
      description: 'Native mobile app for real-time SEO performance tracking and marketing analytics with beautiful data visualizations.',
      image: '/mobile-evarest.png',
      deviceType: 'mobile',
      icon: Smartphone,
      metrics: [
        { label: 'Daily Active Users', value: '50K+' },
        { label: 'Data Points Tracked', value: '1M+' },
        { label: 'Report Generation', value: '<2s' },
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
      highlights: [
        'Real-time SEO metrics tracking',
        'Beautiful data visualization',
        'Offline-first architecture',
        'Push notifications for alerts',
      ],
      results: {
        performance: '99.9% uptime',
        adoption: '50K+ active users',
        impact: '40% faster reporting',
      },
    },
    {
      id: 'tablet-analytics-dashboard',
      title: 'Enterprise Analytics Dashboard',
      category: 'Tablet Application',
      client: 'Fortune 500 Retail Company',
      description: 'Comprehensive analytics platform for enterprise data visualization, featuring interactive charts and real-time business intelligence.',
      image: '/tablet-evarest.png',
      deviceType: 'tablet',
      icon: Tablet,
      metrics: [
        { label: 'Data Sources', value: '15+' },
        { label: 'Concurrent Users', value: '5K+' },
        { label: 'Charts & Widgets', value: '50+' },
      ],
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'Redis'],
      highlights: [
        'Multi-source data integration',
        'Customizable dashboard widgets',
        'Real-time data streaming',
        'Advanced filtering & drill-down',
      ],
      results: {
        performance: 'Sub-second queries',
        adoption: '5K+ daily users',
        impact: '60% faster insights',
      },
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <Badge variant="primary" className="mb-6 font-semibold">
            Featured Work
          </Badge>
          <h2 className="mb-6 text-4xl font-bold tracking-tight lg:text-5xl text-slate-900">
            Mobile & Tablet Solutions That Drive Results
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 lg:text-xl">
            Enterprise-grade applications designed for performance, scalability, and exceptional user experience
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isEven = index % 2 === 0;
            const isVisible = visibleProjects.has(index);

            return (
              <div
                key={project.id}
                ref={(el) => {
                  projectRefs.current[index] = el;
                }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Device Mockup */}
                <div
                  className={`relative transition-all duration-1000 ease-out ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  } ${
                    isVisible
                      ? 'translate-x-0 opacity-100'
                      : isEven
                      ? '-translate-x-20 opacity-0'
                      : 'translate-x-20 opacity-0'
                  }`}
                >
                  <div className="relative group">
                    {/* Glow Effect */}
                    <div className="absolute -inset-8 bg-gradient-to-r from-brand-blue-500/20 via-brand-cyan-500/20 to-brand-blue-500/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                    {/* Device Image */}
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto transition-transform duration-700 transform group-hover:scale-105"
                      />
                    </div>

                    {/* Floating Stats */}
                    <div className="absolute hidden p-5 bg-white border-2 shadow-2xl -top-6 -right-6 rounded-2xl border-brand-blue-200 lg:block">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center rounded-xl w-14 h-14 bg-gradient-to-br from-brand-blue-500 to-brand-cyan-500">
                          <TrendingUp className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-slate-900">
                            {project.metrics[0].value}
                          </div>
                          <div className="text-xs font-medium text-slate-600">
                            {project.metrics[0].label}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div
                  className={`transition-all duration-1000 ease-out ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  } ${
                    isVisible
                      ? 'translate-x-0 opacity-100'
                      : isEven
                      ? 'translate-x-20 opacity-0'
                      : '-translate-x-20 opacity-0'
                  }`}
                >
                  {/* Category Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center rounded-xl w-14 h-14 bg-brand-blue-100">
                      <Icon className="w-7 h-7 text-brand-blue-600" />
                    </div>
                    <Badge variant="primary" className="font-semibold">{project.category}</Badge>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mb-4 text-3xl font-bold lg:text-4xl text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-lg leading-relaxed text-slate-600">
                    {project.description}
                  </p>

                  {/* Client */}
                  <div className="mb-8">
                    <span className="text-sm font-medium text-slate-500">Client: </span>
                    <span className="text-sm font-bold text-slate-900">
                      {project.client}
                    </span>
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-8">
                    <h4 className="mb-4 text-sm font-bold text-slate-900">
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {project.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-slate-600"
                        >
                          <div className="flex-shrink-0 mt-0.5 mr-2.5">
                            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-cyan-100">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan-600" />
                            </div>
                          </div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {project.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-4 text-center transition-all duration-300 border-2 rounded-xl bg-gradient-to-br from-brand-blue-50 to-brand-cyan-50 border-brand-blue-100 hover:border-brand-blue-300 hover:shadow-lg"
                      >
                        <div className="mb-1 text-2xl font-bold text-brand-blue-600">
                          {metric.value}
                        </div>
                        <div className="text-xs font-medium text-slate-600">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="mb-3 text-sm font-bold text-slate-900">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" size="sm" className="font-medium">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="p-6 mb-8 text-white rounded-2xl bg-gradient-to-r from-brand-blue-600 to-brand-cyan-600">
                    <h4 className="mb-4 font-bold">Business Impact:</h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="mb-1 text-lg font-bold">
                          {project.results.performance}
                        </div>
                        <div className="text-xs opacity-90">Performance</div>
                      </div>
                      <div>
                        <div className="mb-1 text-lg font-bold">
                          {project.results.adoption}
                        </div>
                        <div className="text-xs opacity-90">Adoption</div>
                      </div>
                      <div>
                        <div className="mb-1 text-lg font-bold">
                          {project.results.impact}
                        </div>
                        <div className="text-xs opacity-90">Impact</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button variant="purple" size="lg" href="#consultation" className="group">
                    Discuss Your Project
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="p-12 mt-24 text-center border-2 bg-gradient-to-br from-brand-navy to-brand-blue-900 rounded-3xl border-brand-blue-700">
          <h3 className="mb-4 text-3xl font-bold text-white">
            Have a Mobile or Tablet App Idea?
          </h3>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-slate-300">
            Let's build a world-class application that your users will love and your business will profit from
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button variant="purple" size="xl" href="#consultation" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline-purple" size="xl" href="#case-studies">
              View All Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
