import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const CaseStudies = () => {
  const [selectedStudy, setSelectedStudy] = useState(0);

  const caseStudies = [
    {
      id: 'healthtech-platform',
      category: 'HealthTech',
      title: 'Telemedicine Platform Transformation',
      client: 'Leading Telemedicine Provider',
      clientSize: '50M+ patients',
      industry: 'Healthcare',
      image: 'healthtech',
      challenge: {
        title: 'The Challenge',
        description: 'Legacy EHR system unable to scale during COVID-19 surge. HIPAA compliance concerns, 3x increase in patient volume, and critical uptime requirements.',
        points: [
          'Legacy infrastructure struggling with 3x patient volume spike',
          'HIPAA compliance audit failures',
          'Integration with 15+ third-party EHR systems required',
          '99.99% uptime requirement for critical care scenarios',
        ],
      },
      solution: {
        title: 'Our Solution',
        description: 'Cloud-native microservices architecture with end-to-end encryption, automated compliance monitoring, and zero-downtime migration strategy.',
        points: [
          'AWS cloud migration with multi-region failover',
          'Microservices architecture for independent scaling',
          'End-to-end encryption with HIPAA-compliant key management',
          'Real-time compliance monitoring and automated auditing',
          'Zero-downtime migration with blue-green deployment',
        ],
      },
      results: {
        title: 'Business Results',
        metrics: [
          { value: '60%', label: 'Infrastructure Cost Reduction', detail: '$2.4M annually' },
          { value: '99.99%', label: 'Uptime Achieved', detail: 'During 3x volume spike' },
          { value: '0', label: 'HIPAA Audit Findings', detail: 'Passed with zero issues' },
          { value: '15M+', label: 'Consultations Enabled', detail: 'In first 6 months' },
        ],
      },
      testimonial: {
        quote: "Evarest's expertise in healthcare compliance was critical to our success. They delivered a platform that scales effortlessly and meets the strictest regulatory requirements.",
        author: 'Sarah Chen',
        position: 'CTO',
        company: 'Leading Telemedicine Provider',
      },
      engagement: {
        duration: '6 months',
        teamSize: '12-person dedicated team',
        technologies: ['AWS', 'Kubernetes', 'Node.js', 'React', 'PostgreSQL'],
        ongoing: 'Year 2 of partnership, expanding to mental health platform',
      },
    },
    {
      id: 'fintech-payment',
      category: 'FinTech',
      title: 'Real-Time Payment Processing at Scale',
      client: 'Top-10 Payment Processor',
      clientSize: '$2B+ annual volume',
      industry: 'Financial Services',
      image: 'fintech',
      challenge: {
        title: 'The Challenge',
        description: 'Aging payment infrastructure unable to handle real-time processing demands. PCI-DSS compliance gaps and fraud detection inefficiencies costing millions.',
        points: [
          'Processing delays during peak hours (Black Friday, holiday season)',
          'PCI-DSS Level 1 certification at risk',
          '40% false positive rate in fraud detection system',
          'Limited scalability for international expansion',
        ],
      },
      solution: {
        title: 'Our Solution',
        description: 'Event-driven architecture with ML-powered fraud detection, real-time processing capabilities, and comprehensive PCI-DSS controls.',
        points: [
          'Event-driven microservices with Kafka streaming',
          'Custom ML models for fraud detection (TensorFlow)',
          'Zero-downtime migration using strangler pattern',
          'PCI-DSS compliant architecture with tokenization',
          'Global CDN deployment for sub-100ms latency',
        ],
      },
      results: {
        title: 'Business Results',
        metrics: [
          { value: '10M+', label: 'Daily Transactions', detail: '99.99% success rate' },
          { value: '40%', label: 'Fraud Reduction', detail: 'Through ML models' },
          { value: '<100ms', label: 'Processing Latency', detail: 'Global average' },
          { value: '$15M', label: 'Annual Fraud Savings', detail: 'Verified by auditors' },
        ],
      },
      testimonial: {
        quote: "The platform handles Black Friday volumes without breaking a sweat. Evarest's team understood our business needs and delivered beyond expectations.",
        author: 'Michael Rodriguez',
        position: 'VP of Engineering',
        company: 'Top-10 Payment Processor',
      },
      engagement: {
        duration: '8 months',
        teamSize: '15-person team',
        technologies: ['Kafka', 'TensorFlow', 'Go', 'React', 'PostgreSQL', 'Redis'],
        ongoing: 'Year 3 of partnership, expanding to cryptocurrency payments',
      },
    },
    {
      id: 'ai-analytics',
      category: 'AI/ML',
      title: 'AI-Powered Inventory Optimization',
      client: 'Fortune 500 Retail Company',
      clientSize: '5M+ daily users',
      industry: 'Retail & E-commerce',
      image: 'aiml',
      challenge: {
        title: 'The Challenge',
        description: 'Inefficient inventory management causing stockouts and overstock. Limited demand forecasting accuracy impacting revenue and customer satisfaction.',
        points: [
          'Stockouts causing $20M+ in lost revenue annually',
          'Overstock tying up $50M in capital',
          'Legacy forecasting system with 60% accuracy',
          'Unable to scale for global expansion to 15 new markets',
        ],
      },
      solution: {
        title: 'Our Solution',
        description: 'Real-time ML pipeline processing millions of data points for demand forecasting, dynamic pricing, and automated inventory optimization across global warehouses.',
        points: [
          'Real-time data pipeline processing 10M+ events daily',
          'Custom LSTM models for demand forecasting',
          'Dynamic pricing engine with A/B testing framework',
          'Multi-region deployment with edge computing',
          'Automated inventory rebalancing across 50+ warehouses',
        ],
      },
      results: {
        title: 'Business Results',
        metrics: [
          { value: '$15M', label: 'Revenue Enabled', detail: 'Through optimized inventory' },
          { value: '35%', label: 'Forecast Accuracy Improvement', detail: 'From 60% to 95%' },
          { value: '5M', label: 'Concurrent Users', detail: 'Globally supported' },
          { value: '0', label: 'Downtime During Expansion', detail: 'To 15 new markets' },
        ],
      },
      testimonial: {
        quote: "Evarest delivered a platform that transformed our operations. The ML models are incredibly accurate, and the system scaled seamlessly to support our global expansion.",
        author: 'Jennifer Park',
        position: 'Chief Data Officer',
        company: 'Fortune 500 Retail Company',
      },
      engagement: {
        duration: '9 months',
        teamSize: '10-person team',
        technologies: ['Python', 'TensorFlow', 'Apache Spark', 'Kubernetes', 'PostgreSQL'],
        ongoing: 'Ongoing partnership, adding personalization engine',
      },
    },
  ];

  const selectedCase = caseStudies[selectedStudy];

  // Category-specific accent colors
  const categoryColors: Record<string, { border: string; bg: string; text: string; resultsBg: string }> = {
    'HealthTech': {
      border: 'border-brand-cyan-500',
      bg: 'bg-brand-cyan-500',
      text: 'text-brand-cyan-500',
      resultsBg: 'from-brand-cyan-500 to-brand-blue-500'
    },
    'FinTech': {
      border: 'border-brand-blue-500',
      bg: 'bg-brand-blue-500',
      text: 'text-brand-blue-500',
      resultsBg: 'from-brand-blue-500 to-brand-cyan-500'
    },
    'AI/ML': {
      border: 'border-brand-blue-600',
      bg: 'bg-brand-blue-600',
      text: 'text-brand-blue-600',
      resultsBg: 'from-brand-blue-600 to-brand-blue-500'
    },
  };

  const currentColor = categoryColors[selectedCase.category];

  return (
    <section id="case-studies" className="section relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/90 via-brand-navy/85 to-brand-navy/90 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url("/casestudies-bg.jpg")`,
          }}
        />
      </div>

      <div className="container-custom relative z-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Client Success Stories
          </h2>
          <p className="text-xl text-slate-300">
            Real business results from our enterprise partnerships
          </p>
        </div>

        {/* Case Study Selector */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              onClick={() => setSelectedStudy(index)}
              className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                selectedStudy === index
                  ? 'bg-white/10 border-brand-blue-400 shadow-xl shadow-brand-blue-500/20 scale-105'
                  : 'bg-white/5 border-transparent hover:bg-white/10 hover:shadow-lg'
              }`}
            >
              <Badge variant="primary" size="sm" className="mb-3">
                {study.category}
              </Badge>
              <h3 className="text-xl font-bold text-white mb-2">
                {study.title}
              </h3>
              <p className="text-sm text-slate-300 mb-3">{study.client}</p>
              <div className="flex items-center text-sm text-slate-400">
                <span>{study.clientSize}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Case Study */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
          {/* Header */}
          <div className={`bg-white/10 backdrop-blur-md p-8 border-b-2 ${currentColor.border}`}>
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="primary">{selectedCase.category}</Badge>
              <span className="text-slate-300">{selectedCase.industry}</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">
              {selectedCase.title}
            </h3>
            <p className="text-lg text-slate-300">
              {selectedCase.client} • {selectedCase.clientSize}
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Challenge */}
              <Card hover={false} className="bg-white/5 border-white/10">
                <h4 className="text-2xl font-bold text-white mb-4">
                  {selectedCase.challenge.title}
                </h4>
                <p className="text-slate-300 mb-4">
                  {selectedCase.challenge.description}
                </p>
                <ul className="space-y-2">
                  {selectedCase.challenge.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-300">
                      <span className="inline-block w-1.5 h-1.5 bg-brand-cyan-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Solution */}
              <Card hover={false} className="bg-white/5 border-white/10">
                <h4 className="text-2xl font-bold text-white mb-4">
                  {selectedCase.solution.title}
                </h4>
                <p className="text-slate-300 mb-4">
                  {selectedCase.solution.description}
                </p>
                <ul className="space-y-2">
                  {selectedCase.solution.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-300">
                      <CheckCircle className={`w-4 h-4 ${currentColor.text} mt-0.5 mr-2 flex-shrink-0`} />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Results */}
            <div className={`bg-gradient-to-br ${currentColor.resultsBg} rounded-2xl p-8 text-white mb-8 border-2 ${currentColor.border}`}>
              <h4 className="text-2xl font-bold mb-6">
                {selectedCase.results.title}
              </h4>
              <div className="grid md:grid-cols-4 gap-6">
                {selectedCase.results.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-4xl font-bold mb-2">{metric.value}</div>
                    <div className="text-sm font-semibold mb-1">{metric.label}</div>
                    <div className="text-xs opacity-90">{metric.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <Card hover={false} className="bg-white/10 border-white/20">
              <div className="flex items-start gap-4">
                {/* Profile Image */}
                <img
                  src={`/images/testimonials/${selectedCase.testimonial.author.toLowerCase().replace(/ /g, '-')}.jpg`}
                  alt={selectedCase.testimonial.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/30 flex-shrink-0"
                  onError={(e) => {
                    // Fallback to quote mark if image not found
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="flex-1">
                  <p className="text-lg text-white italic mb-4">
                    {selectedCase.testimonial.quote}
                  </p>
                  <div>
                    <div className="font-bold text-white">
                      {selectedCase.testimonial.author}
                    </div>
                    <div className="text-sm text-slate-300">
                      {selectedCase.testimonial.position}, {selectedCase.testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Engagement Details */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-sm text-slate-400 mb-1">Duration</div>
                <div className="font-bold text-white">{selectedCase.engagement.duration}</div>
              </div>
              <div className="text-center p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-sm text-slate-400 mb-1">Team Size</div>
                <div className="font-bold text-white">{selectedCase.engagement.teamSize}</div>
              </div>
              <div className="text-center p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-sm text-slate-400 mb-1">Partnership Status</div>
                <div className={`font-bold ${currentColor.text}`}>{selectedCase.engagement.ongoing}</div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-6 text-center">
              <div className="text-sm text-slate-400 mb-3">Technologies Used</div>
              <div className="flex flex-wrap gap-2 justify-center">
                {selectedCase.engagement.technologies.map((tech) => (
                  <Badge key={tech} variant="primary" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-300 mb-6">
            Ready to achieve similar results for your business?
          </p>
          <Button variant="purple" size="lg" href="#consultation">
            Schedule Your Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
