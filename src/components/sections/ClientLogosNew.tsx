import LogoCarousel from '../ui/LogoCarousel';
import StatCard from '../ui/StatCard';

const ClientLogosNew = () => {
  const clients = [
    { name: 'Leading HealthTech Provider', description: '50M+ patients', initial: 'L' },
    { name: 'Fortune 500 Financial Services', description: '$2B+ processed', initial: 'F' },
    { name: 'Top-10 Payment Processor', description: '10M+ daily transactions', initial: 'T' },
    { name: 'Global SaaS Platform', description: '5M+ users', initial: 'G' },
    { name: 'Federal Government Agency', description: 'FedRAMP Authorized', initial: 'F' },
    { name: 'Enterprise Healthcare System', description: 'HIPAA Compliant', initial: 'E' },
    { name: 'International FinTech', description: 'PCI-DSS Level 1', initial: 'I' },
    { name: 'AI/ML Research Company', description: 'SOC2 Type II', initial: 'A' },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 via-brand-blue-50 to-slate-50 border-y border-brand-blue-100">
      <div className="container-custom">
        {/* Header */}
        <p className="text-center text-sm font-semibold text-brand-blue-600 uppercase tracking-wide mb-12">
          Powering Mission-Critical Systems for Industry Leaders
        </p>

        {/* Logo Carousel */}
        <LogoCarousel logos={clients} className="mb-16" />

        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value={150} label="Enterprise Clients" suffix="+" animated />
          <StatCard value="$50M" label="Client Revenue Enabled" suffix="+" animated={false} />
          <StatCard value={99.9} label="Average Uptime SLA" suffix="%" animated decimals={1} />
          <StatCard value="24/7" label="Global Support Coverage" animated={false} />
        </div>
      </div>
    </section>
  );
};

export default ClientLogosNew;
