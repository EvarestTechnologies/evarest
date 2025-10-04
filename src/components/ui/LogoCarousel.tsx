interface Logo {
  name: string;
  description: string;
  initial: string;
}

interface LogoCarouselProps {
  logos: Logo[];
  className?: string;
}

const LogoCarousel = ({ logos, className = '' }: LogoCarouselProps) => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Gradient fade on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 via-brand-blue-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 via-brand-blue-50 to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div className="flex gap-8 animate-scroll hover:pause-animation">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 flex flex-col items-center justify-center group"
          >
            {/* Logo placeholder */}
            <div className="w-32 h-32 bg-white rounded-2xl shadow-md border border-brand-blue-100 flex items-center justify-center mb-3 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-brand-blue-500/20 group-hover:border-brand-blue-300 group-hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-500 to-brand-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                {logo.initial}
              </div>
            </div>

            {/* Logo info */}
            <div className="text-center">
              <div className="text-sm font-medium text-slate-700 group-hover:text-brand-blue-600 transition-colors">
                {logo.name}
              </div>
              <div className="text-xs text-slate-500">{logo.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
