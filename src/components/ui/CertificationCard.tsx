import { useState } from 'react';
import { Award } from 'lucide-react';

interface CertificationCardProps {
  category: string;
  count: string;
  items: string[];
  logoSrc?: string;
}

const CertificationCard = ({ category, count, items, logoSrc }: CertificationCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-64 cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of Card */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-xl p-6 shadow-md border-2 border-transparent hover:border-brand-blue-400 hover:shadow-xl hover:shadow-brand-blue-500/20 transition-all duration-300">
          <div className="flex flex-col items-center justify-center h-full">
            {/* Logo or Icon */}
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={`${category} logo`}
                className="w-16 h-16 mb-4 object-contain"
              />
            ) : (
              <div className="inline-flex p-4 bg-brand-blue-500 rounded-2xl mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
            )}

            {/* Count and Category */}
            <div className="text-center mb-3">
              <div className="text-4xl font-bold text-brand-blue-500 mb-1">
                {count}
              </div>
              <div className="text-lg font-semibold text-slate-800">
                {category}
              </div>
            </div>

            <div className="text-xs text-slate-500 mt-auto">
              Hover to see details
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-brand-blue-500 to-brand-cyan-500 rounded-xl p-6 shadow-xl">
          <div className="flex flex-col h-full text-white">
            <h4 className="text-xl font-bold mb-4 border-b border-white/30 pb-2">
              {category} Certifications
            </h4>

            <div className="space-y-3 flex-1">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-1.5 mr-3 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-white/30 text-center text-sm opacity-90">
              Team certified professionals: {count}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
