// Company Information
export const COMPANY_INFO = {
  name: 'Evarest',
  tagline: 'Enterprise-Grade Engineering That Scales',
  description: 'Premium engineering services that combine technical expertise with business understanding to accelerate product development.',
};

// Trust Indicators
export const TRUST_METRICS = [
  { value: '$50M+', label: 'Client Revenue Enabled' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: 'ISO 27001', label: 'Certified' },
  { value: '24/7', label: 'Global Support' },
];

// Services
export const SERVICES = [
  {
    id: 'cloud-infrastructure',
    name: 'Cloud & Infrastructure Services',
    icon: 'Cloud',
    description: 'Scalable infrastructure that grows with your business',
    outcomes: ['Cost optimization', '99.9%+ uptime', 'Global availability'],
    compliance: ['SOC2', 'ISO 27001'],
    category: 'infrastructure',
    estimatedWeeks: 16,
    estimatedCost: '$20K-$40K/mo',
  },
  {
    id: 'app-development',
    name: 'Application Development & Modernization',
    icon: 'Code',
    description: 'Modern applications that drive business value',
    outcomes: ['Faster time-to-market', 'Improved UX', 'Legacy migration'],
    compliance: [],
    category: 'development',
    estimatedWeeks: 12,
    estimatedCost: '$15K-$35K/mo',
  },
  {
    id: 'data-ai',
    name: 'Data & AI Engineering',
    icon: 'Brain',
    description: 'Turn data into competitive advantage',
    outcomes: ['Real-time analytics', 'ML models', 'Data pipeline automation'],
    compliance: [],
    category: 'ai',
    estimatedWeeks: 10,
    estimatedCost: '$18K-$38K/mo',
  },
  {
    id: 'security-compliance',
    name: 'Security & Compliance Engineering',
    icon: 'Shield',
    description: 'Enterprise security that enables business',
    outcomes: ['SOC2, HIPAA, PCI-DSS compliance', 'Zero-trust architecture', 'Security audits'],
    compliance: ['SOC2', 'HIPAA', 'PCI-DSS'],
    category: 'security',
    estimatedWeeks: 8,
    estimatedCost: '$15K-$30K/mo',
  },
  {
    id: 'devops-sre',
    name: 'DevOps & Site Reliability Engineering',
    icon: 'GitBranch',
    description: 'Reliability at scale',
    outcomes: ['Automated deployments', '24/7 monitoring', 'Incident response'],
    compliance: [],
    category: 'infrastructure',
    estimatedWeeks: 10,
    estimatedCost: '$16K-$32K/mo',
  },
  {
    id: 'managed-services',
    name: 'Managed Services & 24/7 Support',
    icon: 'Headphones',
    description: 'Always-on operations',
    outcomes: ['SLA-backed support', 'Proactive monitoring', 'Cost predictability'],
    compliance: [],
    category: 'support',
    estimatedWeeks: 4,
    estimatedCost: '$12K-$25K/mo',
  },
];

// Industries
export const INDUSTRIES = [
  {
    id: 'healthtech',
    name: 'HealthTech',
    icon: 'Heart',
    gradient: 'from-brand-cyan-500 to-brand-blue-600',
    compliance: ['HIPAA', 'FDA', 'GDPR', 'HL7/FHIR'],
    stats: ['500K+ patient records secured', 'HIPAA compliant since 2018'],
  },
  {
    id: 'fintech',
    name: 'FinTech',
    icon: 'DollarSign',
    gradient: 'from-brand-blue-500 to-brand-cyan-500',
    compliance: ['PCI-DSS', 'SOC2 Type II', 'SOX'],
    stats: ['$2B+ in payments processed', '99.99% transaction success rate'],
  },
  {
    id: 'government',
    name: 'Government/Public Sector',
    icon: 'Building',
    gradient: 'from-brand-blue-600 to-brand-blue-700',
    compliance: ['FedRAMP', 'FISMA', 'Section 508'],
    stats: ['FedRAMP Authorized', 'Trusted by 5+ government agencies'],
  },
  {
    id: 'saas',
    name: 'Enterprise SaaS',
    icon: 'Grid',
    gradient: 'from-brand-blue-400 to-brand-cyan-400',
    compliance: ['SOC2', 'ISO 27001', 'GDPR'],
    stats: ['10M+ end users supported', '99.9% uptime SLA'],
  },
];

// Engagement Models
export const ENGAGEMENT_MODELS = [
  {
    id: 'dedicated-teams',
    name: 'Dedicated Teams',
    icon: 'Users',
    description: 'Full ownership of your product roadmap',
    bestFor: 'Long-term partnerships and product development',
    benefits: ['Aligned incentives', 'Deep product knowledge', 'Dedicated capacity'],
  },
  {
    id: 'staff-augmentation',
    name: 'Staff Augmentation',
    icon: 'UserPlus',
    description: 'Flexible scaling with specialized expertise',
    bestFor: 'Short-term needs and specialized skills',
    benefits: ['Rapid onboarding', 'Flexible contracts', 'Domain expertise'],
  },
  {
    id: 'managed-services',
    name: 'Managed Services',
    icon: 'Settings',
    description: '24/7 operations and SLA-backed support',
    bestFor: 'Production systems and critical infrastructure',
    benefits: ['Proactive monitoring', 'Guaranteed uptime', 'Predictable costs'],
  },
];

// Navigation
export const NAV_LINKS = {
  services: [
    { name: 'Cloud & Infrastructure', href: '#cloud-infrastructure' },
    { name: 'Application Development', href: '#app-development' },
    { name: 'Data & AI Engineering', href: '#data-ai' },
    { name: 'Security & Compliance', href: '#security-compliance' },
    { name: 'DevOps & SRE', href: '#devops-sre' },
    { name: 'Managed Services', href: '#managed-services' },
  ],
  industries: [
    { name: 'HealthTech', href: '#healthtech' },
    { name: 'FinTech', href: '#fintech' },
    { name: 'Government', href: '#government' },
    { name: 'Enterprise SaaS', href: '#saas' },
  ],
};
