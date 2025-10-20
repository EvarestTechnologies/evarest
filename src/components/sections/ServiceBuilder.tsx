import { useState } from 'react';
import { Check, Calculator, Clock, Users, DollarSign, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

interface Service {
  id: string;
  name: string;
  category: string;
  estimatedWeeks: number;
  estimatedCost: string;
}

interface ServiceBuilderProps {
  services: Service[];
}

const ServiceBuilder = ({ services }: ServiceBuilderProps) => {
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);

  const toggleService = (serviceId: string) => {
    setSelectedServiceIds(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const selectedServices = services.filter(s => selectedServiceIds.includes(s.id));

  // Calculate totals
  const totalWeeks = selectedServices.reduce((sum, s) => sum + s.estimatedWeeks, 0);
  const totalMonths = Math.ceil(totalWeeks / 4);

  // Estimate cost range
  const minCost = selectedServices.length * 15000;
  const maxCost = selectedServices.length * 40000;

  // Estimate team size
  const avgTeamSize = selectedServices.length > 0
    ? Math.ceil((selectedServices.length * 4) / selectedServices.length)
    : 0;

  return (
    <div className="bg-gradient-to-br from-white via-brand-blue-50/30 to-white py-16" id="service-builder">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-slate-800">Build Your </span>
            <span className="text-brand-blue-600">Custom Solution</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Select the services you need and get an instant estimate for timeline and investment
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Selection */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-blue-500 rounded-lg flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Select Services</h3>
              </div>

              <div className="space-y-3">
                {services.map((service) => {
                  const isSelected = selectedServiceIds.includes(service.id);
                  return (
                    <label
                      key={service.id}
                      className={`
                        flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer
                        transition-all duration-300
                        ${isSelected
                          ? 'border-brand-blue-500 bg-brand-blue-50 shadow-lg'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }
                      `}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleService(service.id)}
                        className="w-5 h-5 rounded border-2 border-slate-300 text-brand-blue-500 focus:ring-2 focus:ring-brand-blue-500"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900">{service.name}</h4>
                        <div className="flex gap-4 mt-1 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {service.estimatedWeeks} weeks
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-3.5 h-3.5" />
                            {service.estimatedCost}
                          </span>
                        </div>
                      </div>
                      {isSelected && (
                        <Check className="w-6 h-6 text-brand-blue-500 flex-shrink-0" />
                      )}
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Estimate Summary */}
          <div>
            <div className="bg-gradient-to-br from-brand-blue-500 to-brand-cyan-500 rounded-2xl p-6 text-white sticky top-24">
              <h3 className="text-xl font-bold mb-6">Your Custom Solution</h3>

              {selectedServices.length === 0 ? (
                <div className="text-center py-8">
                  <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-white/90 text-sm">
                    Select services to see your estimate
                  </p>
                </div>
              ) : (
                <>
                  {/* Selected Services */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wide mb-3">
                      Selected Services ({selectedServices.length})
                    </h4>
                    <div className="space-y-2">
                      {selectedServices.map((service) => (
                        <div key={service.id} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 flex-shrink-0" />
                          <span className="line-clamp-1">{service.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="h-px bg-white/20 my-6" />

                  {/* Estimates */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-white/80 mb-1">
                        <Clock className="w-4 h-4" />
                        Estimated Timeline
                      </div>
                      <p className="text-3xl font-bold">
                        {totalMonths} {totalMonths === 1 ? 'month' : 'months'}
                      </p>
                      <p className="text-xs text-white/70 mt-0.5">
                        ({totalWeeks} weeks total)
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-sm text-white/80 mb-1">
                        <Users className="w-4 h-4" />
                        Team Size
                      </div>
                      <p className="text-3xl font-bold">{avgTeamSize}-{avgTeamSize + 3} engineers</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-sm text-white/80 mb-1">
                        <DollarSign className="w-4 h-4" />
                        Investment Range
                      </div>
                      <p className="text-3xl font-bold">
                        ${(minCost / 1000).toFixed(0)}K - ${(maxCost / 1000).toFixed(0)}K
                      </p>
                      <p className="text-xs text-white/70 mt-0.5">
                        Per month estimate
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-white/20 my-6" />

                  {/* CTA */}
                  <Button
                    variant="secondary"
                    size="lg"
                    href="#consultation"
                    className="w-full group"
                  >
                    Get Detailed Proposal
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-white/70 text-center mt-4">
                    Schedule a call to discuss your specific requirements and get an accurate quote
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBuilder;
