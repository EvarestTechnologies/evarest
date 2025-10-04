import { MapPin } from 'lucide-react';

interface Location {
  name: string;
  x: number; // percentage from left
  y: number; // percentage from top
  timezone: string;
}

const WorldMap = () => {
  const locations: Location[] = [
    { name: 'Seattle', x: 12, y: 38, timezone: 'PST' },
    { name: 'Ontario', x: 22, y: 35, timezone: 'EST' },
    { name: 'London', x: 48, y: 32, timezone: 'GMT' },
    { name: 'Mumbai', x: 68, y: 50, timezone: 'IST' },
    { name: 'Sydney', x: 88, y: 68, timezone: 'AEDT' },
  ];

  return (
    <div className="relative bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-blue-900 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden border-y-2 border-brand-blue-500/20">
      {/* Globe Background SVG */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" className="opacity-20">
          <defs>
            {/* Grid pattern for globe */}
            <pattern id="globeGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="1" fill="currentColor" className="text-brand-cyan-400" opacity="0.3"/>
            </pattern>
            {/* Radial gradient for globe sphere effect */}
            <radialGradient id="globeGradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="currentColor" className="text-brand-blue-400" stopOpacity="0.4"/>
              <stop offset="70%" stopColor="currentColor" className="text-brand-cyan-400" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="currentColor" className="text-brand-blue-900" stopOpacity="0"/>
            </radialGradient>
          </defs>

          {/* Main Globe Circle */}
          <circle cx="600" cy="200" r="180" fill="url(#globeGradient)" stroke="currentColor" strokeWidth="2" className="text-brand-cyan-400" opacity="0.3"/>

          {/* Latitude Lines */}
          <ellipse cx="600" cy="200" rx="180" ry="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-cyan-400" opacity="0.4"/>
          <ellipse cx="600" cy="200" rx="180" ry="80" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-cyan-400" opacity="0.4"/>
          <ellipse cx="600" cy="200" rx="180" ry="120" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-cyan-400" opacity="0.4"/>
          <ellipse cx="600" cy="200" rx="180" ry="180" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-cyan-400" opacity="0.4"/>

          {/* Longitude Lines (curved) */}
          <path d="M 420,200 Q 600,140 780,200 Q 600,260 420,200" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-cyan-400" opacity="0.4"/>
          <path d="M 470,200 Q 600,160 730,200 Q 600,240 470,200" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-cyan-400" opacity="0.4"/>
          <path d="M 520,200 Q 600,180 680,200 Q 600,220 520,200" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-cyan-400" opacity="0.4"/>

          {/* Vertical center line */}
          <line x1="600" y1="20" x2="600" y2="380" stroke="currentColor" strokeWidth="1" className="text-brand-cyan-400" opacity="0.4"/>

          {/* Continental outlines on globe */}
          <g className="text-brand-blue-300" opacity="0.5">
            {/* Simplified continents positioned on globe */}
            <path d="M 480,160 L 490,150 L 510,155 L 520,145 L 535,160 L 530,180 L 515,190 L 500,185 L 485,175 Z" fill="currentColor"/>
            <path d="M 590,140 L 610,135 L 625,145 L 620,165 L 605,170 L 590,160 Z" fill="currentColor"/>
            <path d="M 650,155 L 680,150 L 700,165 L 695,190 L 670,200 L 650,185 Z" fill="currentColor"/>
          </g>

          {/* Orbital rings for tech feel */}
          <ellipse cx="600" cy="200" rx="220" ry="70" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-cyan-500" opacity="0.2" strokeDasharray="10 5">
            <animateTransform attributeName="transform" type="rotate" from="0 600 200" to="360 600 200" dur="20s" repeatCount="indefinite"/>
          </ellipse>
        </svg>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto relative">
        {/* Content positioning layer */}
        <div className="relative mb-6" style={{ height: '300px' }}>

          {/* Animated Location Pins */}
          {locations.map((location, index) => (
          <div
            key={location.name}
            className="absolute transform -translate-x-1/2 -translate-y-full"
            style={{
              left: `${location.x}%`,
              top: `${location.y}%`,
              animationDelay: `${index * 0.2}s`,
            }}
          >
            {/* Pin with Pulse Animation */}
            <div className="relative flex flex-col items-center">
              <div className="relative">
                {/* Pulse Ring */}
                <div className="absolute inset-0 bg-brand-blue-400 rounded-full animate-ping opacity-75"></div>
                {/* Pin Icon */}
                <div className="relative bg-brand-blue-500 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-4 h-4" />
                </div>
              </div>
              {/* Location Label */}
              <div className="mt-2 bg-white/95 px-3 py-1 rounded-full shadow-lg text-xs font-semibold text-slate-800 whitespace-nowrap backdrop-blur-sm">
                {location.name}
                <span className="ml-1 text-brand-blue-600">({location.timezone})</span>
              </div>
            </div>
          </div>
          ))}
        </div>

        {/* Title */}
        <div className="relative text-center">
          <h4 className="text-xl font-bold text-white mb-2">
            Global Delivery Centers
          </h4>
          <p className="text-sm text-slate-300">
            Follow-the-sun support across 5 strategic locations
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
