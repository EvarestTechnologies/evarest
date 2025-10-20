import { X, Check, Minus } from 'lucide-react';
import Button from '../ui/Button';

interface Service {
  id: string;
  name: string;
  description: string;
  outcomes: { label: string; detail: string }[];
  compliance: string[];
  category: string;
  cta: {
    primary: { text: string };
    secondary: { text: string };
  };
}

interface ComparisonModalProps {
  services: Service[];
  selectedIds: string[];
  onClose: () => void;
}

const ComparisonModal = ({ services, selectedIds, onClose }: ComparisonModalProps) => {
  const selectedServices = services.filter(s => selectedIds.includes(s.id));

  if (selectedServices.length < 2) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="flex items-center justify-center min-h-screen p-2 sm:p-4">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-blue-500 to-brand-cyan-500 p-4 sm:p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-1">Service Comparison</h2>
                <p className="text-xs sm:text-sm text-white/90">
                  Comparing {selectedServices.length} services side-by-side
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
                aria-label="Close comparison"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto overflow-y-auto max-h-[calc(95vh-180px)] sm:max-h-[calc(90vh-200px)]">
            <table className="w-full min-w-[600px]">
              <thead className="bg-slate-50 sticky top-0 z-10">
                <tr>
                  <th className="text-left p-2 sm:p-4 font-semibold text-slate-700 border-b-2 border-slate-200 w-32 sm:w-48 text-xs sm:text-sm">
                    Features
                  </th>
                  {selectedServices.map(service => (
                    <th key={service.id} className="p-2 sm:p-4 border-b-2 border-slate-200 min-w-[200px] sm:min-w-[250px]">
                      <div className="text-left">
                        <h3 className="font-bold text-slate-900 mb-1 text-sm sm:text-base">{service.name}</h3>
                        <p className="text-[10px] sm:text-xs text-slate-600 font-normal line-clamp-2">{service.description}</p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* Category */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-2 sm:p-4 font-semibold text-slate-700 text-xs sm:text-sm">Category</td>
                  {selectedServices.map(service => (
                    <td key={service.id} className="p-2 sm:p-4">
                      <span className="inline-block px-2 sm:px-3 py-1 bg-brand-blue-100 text-brand-blue-700 rounded-full text-xs sm:text-sm font-semibold capitalize">
                        {service.category}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Key Outcomes */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-2 sm:p-4 font-semibold text-slate-700 align-top text-xs sm:text-sm">Key Outcomes</td>
                  {selectedServices.map(service => (
                    <td key={service.id} className="p-2 sm:p-4 align-top">
                      <ul className="space-y-1 sm:space-y-2">
                        {service.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start gap-1 sm:gap-2">
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-xs sm:text-sm font-semibold text-slate-800">{outcome.label}</p>
                              <p className="text-[10px] sm:text-xs text-slate-600">{outcome.detail}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* Compliance */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-2 sm:p-4 font-semibold text-slate-700 align-top text-xs sm:text-sm">Compliance</td>
                  {selectedServices.map(service => (
                    <td key={service.id} className="p-2 sm:p-4 align-top">
                      {service.compliance.length > 0 ? (
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {service.compliance.map(badge => (
                            <span
                              key={badge}
                              className="inline-flex items-center px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-semibold bg-purple-100 text-purple-700 border border-purple-300"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-slate-400 text-xs sm:text-sm flex items-center gap-1">
                          <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="hidden sm:inline">None specified</span>
                          <span className="sm:hidden">None</span>
                        </span>
                      )}
                    </td>
                  ))}
                </tr>

                {/* Typical Duration */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-2 sm:p-4 font-semibold text-slate-700 text-xs sm:text-sm">Duration</td>
                  {selectedServices.map(service => (
                    <td key={service.id} className="p-2 sm:p-4">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        {service.id === 'cloud-infrastructure' ? '3-6 months' : '2-4 months'}
                      </p>
                    </td>
                  ))}
                </tr>

                {/* Team Size */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-2 sm:p-4 font-semibold text-slate-700 text-xs sm:text-sm">Team Size</td>
                  {selectedServices.map(service => (
                    <td key={service.id} className="p-2 sm:p-4">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        {service.id === 'cloud-infrastructure' ? '5-8 engineers' : '3-5 engineers'}
                      </p>
                    </td>
                  ))}
                </tr>

                {/* Best For */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-2 sm:p-4 font-semibold text-slate-700 align-top text-xs sm:text-sm">Best For</td>
                  {selectedServices.map(service => (
                    <td key={service.id} className="p-2 sm:p-4 align-top">
                      <ul className="space-y-0.5 sm:space-y-1 text-xs sm:text-sm text-slate-700">
                        {service.id === 'cloud-infrastructure' && (
                          <>
                            <li>• Companies scaling rapidly</li>
                            <li>• Cloud migration projects</li>
                            <li>• Multi-cloud strategies</li>
                          </>
                        )}
                        {service.id === 'app-development' && (
                          <>
                            <li>• Product teams needing velocity</li>
                            <li>• Legacy modernization</li>
                            <li>• New product development</li>
                          </>
                        )}
                        {service.id === 'data-ai' && (
                          <>
                            <li>• Data-driven organizations</li>
                            <li>• ML/AI product teams</li>
                            <li>• Analytics transformation</li>
                          </>
                        )}
                        {service.id === 'security-compliance' && (
                          <>
                            <li>• Regulated industries</li>
                            <li>• Pre-audit preparation</li>
                            <li>• Security-first companies</li>
                          </>
                        )}
                        {service.id === 'devops-sre' && (
                          <>
                            <li>• High-growth startups</li>
                            <li>• Improving reliability</li>
                            <li>• DevOps transformation</li>
                          </>
                        )}
                        {service.id === 'managed-services' && (
                          <>
                            <li>• 24/7 operations needed</li>
                            <li>• Limited internal resources</li>
                            <li>• Predictable support costs</li>
                          </>
                        )}
                      </ul>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer Actions */}
          <div className="border-t border-slate-200 p-4 sm:p-6 bg-slate-50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
              <p className="text-xs sm:text-sm text-slate-600 text-center sm:text-left">
                Ready to discuss these services for your project?
              </p>
              <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
                <Button variant="outline" size="sm" onClick={onClose} className="flex-1 sm:flex-none">
                  Close
                </Button>
                <Button variant="purple" size="sm" href="#consultation" className="flex-1 sm:flex-none">
                  <span className="hidden sm:inline">Schedule Consultation</span>
                  <span className="sm:hidden">Schedule</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;
