import { ArrowRight, Smartphone, Tablet, TrendingUp, BarChart3, PieChart, LineChart } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const FeaturedProjects = () => {
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
    <section className="section bg-gradient-to-br from-white via-brand-blue-50/30 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" size="lg" className="mb-4">
            Featured Work
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
            Mobile & Tablet Solutions That Drive Results
          </h2>
          <p className="text-xl text-slate-600">
            Enterprise-grade applications designed for performance, scalability, and exceptional user experience
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Device Mockup */}
                <div
                  className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="relative group">
                    {/* Glow Effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue-500/20 to-brand-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

                    {/* Device Image */}
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Floating Stats */}
                    <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-brand-blue-100 hidden lg:block">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-blue-500 to-brand-cyan-500 rounded-xl flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-slate-900">
                            {project.metrics[0].value}
                          </div>
                          <div className="text-xs text-slate-600">
                            {project.metrics[0].label}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Category Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-brand-blue-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-brand-blue-600" />
                    </div>
                    <Badge variant="primary">{project.category}</Badge>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-slate-600 mb-6">
                    {project.description}
                  </p>

                  {/* Client */}
                  <div className="mb-6">
                    <span className="text-sm text-slate-500">Client: </span>
                    <span className="font-semibold text-slate-900">
                      {project.client}
                    </span>
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h4 className="font-bold text-slate-900 mb-3">
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-slate-600"
                        >
                          <span className="inline-block w-1.5 h-1.5 bg-brand-cyan-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-br from-brand-blue-50 to-brand-cyan-50 rounded-xl p-4 text-center"
                      >
                        <div className="text-2xl font-bold text-brand-blue-600 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-slate-600">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-bold text-slate-900 mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-r from-brand-blue-500 to-brand-cyan-500 rounded-2xl p-6 text-white mb-6">
                    <h4 className="font-bold mb-3">Business Impact:</h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold">
                          {project.results.performance}
                        </div>
                        <div className="text-xs opacity-90">Performance</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold">
                          {project.results.adoption}
                        </div>
                        <div className="text-xs opacity-90">Adoption</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold">
                          {project.results.impact}
                        </div>
                        <div className="text-xs opacity-90">Impact</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button variant="purple" size="lg" href="#consultation">
                    Discuss Your Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-brand-navy to-brand-blue-900 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Have a Mobile or Tablet App Idea?
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's build a world-class application that your users will love and your business will profit from
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="purple" size="xl" href="#consultation">
              Start Your Project
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
