// Every fact on the site lives here. Source: the Evarest company brief
// (~/Evarest/company/evarest-company-brief.md). Do not add clients, metrics,
// certifications or testimonials without founder confirmation.

export const CONTACT = {
  email: 'contact@evarestke.com',
  phone: '+254 723 469 406',
  phoneHref: 'tel:+254723469406',
  whatsappHref: 'https://wa.me/254723469406',
  location: 'Nairobi, Kenya',
  linkedin: 'https://www.linkedin.com/company/evarest-technologies/',
  x: 'https://x.com/Evarestke',
  github: 'https://github.com/EvarestTechnologies',
};

export const mailto = (subject: string) =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`;

export const NAV_LINKS = [
  { name: 'Products', href: '#products' },
  { name: 'Engineering', href: '#engineering' },
  { name: 'Our work', href: '#work' },
  { name: 'How we work', href: '#how-we-work' },
  { name: 'About', href: '#about' },
];

export const SERVICES = [
  {
    name: 'Backend and API engineering',
    description: 'Backend systems, APIs, data flows and application logic, built and improved.',
  },
  {
    name: 'Integrations and automation',
    description: 'Connecting your systems, integrating third-party services and automating workflows.',
  },
  {
    name: 'Applied AI implementation',
    description: 'Practical AI features and workflows, including LLM integrations and retrieval where it fits.',
  },
  {
    name: 'End-to-end product development',
    description: 'From technical discovery through implementation, testing, deployment and handover.',
  },
  {
    name: 'Ongoing engineering support',
    description: 'Maintenance, bug fixes, deployment support and new features under an agreed arrangement.',
  },
];

export const PRODUCTS = [
  {
    name: 'ZEYA',
    summary: 'A pregnancy education companion on WhatsApp for women in Kenya, in English and Kiswahili.',
    details: [
      'Answers draw on World Health Organization and Kenya Ministry of Health guidance.',
      'When a message describes a danger sign, ZEYA sends emergency numbers before any AI runs.',
      'Education, not diagnosis. It does not replace a health worker.',
    ],
    status: 'Preparing for a research trial',
    href: '/zeya/',
    linkLabel: 'About ZEYA',
    cta: 'Discuss a research or implementation partnership',
    subject: 'ZEYA partnership',
  },
  {
    name: 'Kintaraa',
    summary: 'An anonymity-first platform for survivors of gender-based violence.',
    details: [
      'Developed in response to concerns about femicide and gender-based violence.',
      'Designed so that survivors can seek support without revealing who they are.',
    ],
    status: 'Deployed, awaiting its Nairobi County pilot',
    href: null,
    linkLabel: null,
    cta: 'Discuss an implementation partnership',
    subject: 'Kintaraa partnership',
  },
];

export const WORK = [
  {
    title: 'KOA Africa Insurance Agency',
    tag: 'Client work · Insurance',
    body: 'We built KOA Africa’s insurance platform from scratch: the public website, the agent portal and the backend behind them. KOA is now running a live pilot, and we support the platform on a retainer covering maintenance, fixes, new features and deployment.',
    links: [{ label: 'koaafricaa.com', href: 'https://koaafricaa.com/' }],
  },
  {
    title: 'Open Chat Studio',
    tag: 'Open source · Applied AI',
    body: 'Members of our team have contributed code to Open Chat Studio, Dimagi’s open-source chatbot platform. We self-host it and build ZEYA on it, with the safety rules written in code and tested.',
    links: [
      { label: 'Open Chat Studio on GitHub', href: 'https://github.com/dimagi/open-chat-studio' },
      { label: 'ZEYA on GitHub', href: 'https://github.com/EvarestTechnologies/zeya' },
    ],
  },
];

export const PROCESS = [
  { step: 'Talk', body: 'A first conversation about what you need.' },
  { step: 'Scope', body: 'Technical discovery, then agreed deliverables, assumptions and acceptance criteria.' },
  { step: 'Build', body: 'Implementation with regular progress updates. We raise risks early.' },
  { step: 'Test and deploy', body: 'Testing, your review, agreed corrections, then deployment.' },
  { step: 'Hand over and support', body: 'Documentation and handover, and ongoing support where agreed.' },
];

export const ENGAGEMENTS = [
  { name: 'Fixed-scope projects', body: 'For defined requirements, deliverables, timelines and acceptance criteria.' },
  { name: 'Monthly retainers', body: 'For ongoing engineering capacity, maintenance, support and continued development.' },
  { name: 'Technical assessments', body: 'A short engagement to review a system, find issues or plan an implementation.' },
];

export const FOUNDERS = [
  { name: 'Stella Achar Oiro', role: 'CEO', photo: '/team/stella-320.webp' },
  { name: 'Raymond Caleb', role: 'CTO', photo: '/team/raymond-320.webp' },
  { name: 'Vincent Odhiambo', role: 'COO', photo: '/team/vincent-320.webp' },
  { name: 'Seth Athooh', role: 'CFO', photo: '/team/seth-320.webp' },
];
