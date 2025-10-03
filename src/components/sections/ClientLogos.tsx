const ClientLogos = () => {
  const clients = [
    { name: 'Leading HealthTech Provider', description: '50M+ patients' },
    { name: 'Fortune 500 Financial Services', description: '$2B+ processed' },
    { name: 'Top-10 Payment Processor', description: '10M+ daily transactions' },
    { name: 'Global SaaS Platform', description: '5M+ users' },
    { name: 'Federal Government Agency', description: 'FedRAMP Authorized' },
    { name: 'Enterprise Healthcare System', description: 'HIPAA Compliant' },
    { name: 'International FinTech', description: 'PCI-DSS Level 1' },
    { name: 'AI/ML Research Company', description: 'SOC2 Type II' },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="container-custom">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
            Trusted by Industry Leaders
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 text-center group"
            >
              <div className="mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center text-white font-bold text-xl opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                  {client.name.charAt(0)}
                </div>
              </div>
              <div className="text-sm font-medium text-slate-700 mb-1">
                {client.name}
              </div>
              <div className="text-xs text-slate-500">{client.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
