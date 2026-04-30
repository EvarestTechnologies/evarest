import { MapPin } from 'lucide-react';

interface Location {
  name: string;
  x: number; // percentage from left
  y: number; // percentage from top
  timezone: string;
}

const WorldMap = () => {
  const locations: Location[] = [
    { name: 'Nairobi', x: 53, y: 58, timezone: 'EAT' },
    { name: 'London', x: 48, y: 32, timezone: 'GMT' },
    { name: 'New York', x: 22, y: 38, timezone: 'EST' },
  ];

  return (
    <div className="relative bg-gradient-to-br from-brand-navy via-slate-900 to-brand-blue-900 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Real World Map Background */}
      <div className="absolute inset-0">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg"
          alt="World Map"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-brand-navy/60 to-brand-navy/80" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto relative">
        {/* Title */}
        <div className="relative text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-3">
            Global Delivery Centers
          </h3>
          <p className="text-lg text-slate-300">
            Strategic locations for seamless collaboration
          </p>
        </div>

        {/* Map Container */}
        <div className="relative mb-8" style={{ height: '400px' }}>
          {/* Actual World Map with better quality */}
          <div className="absolute inset-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg"
              alt="World Map"
              className="w-full h-full object-cover opacity-30 rounded-2xl"
            />
          </div>

          {/* Animated Location Pins */}
          {locations.map((location, index) => (
            <div
              key={location.name}
              className="absolute transform -translate-x-1/2 -translate-y-full animate-fadeIn"
              style={{
                left: `${location.x}%`,
                top: `${location.y}%`,
                animationDelay: `${index * 0.3}s`,
              }}
            >
              {/* Pin with Pulse Animation */}
              <div className="relative flex flex-col items-center">
                <div className="relative">
                  {/* Pulse Ring */}
                  <div className="absolute inset-0 w-10 h-10 -left-3 -top-3 bg-brand-cyan-400/50 rounded-full animate-ping"></div>
                  {/* Pin Icon */}
                  <div className="relative bg-gradient-to-br from-brand-blue-500 to-brand-cyan-500 text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
                {/* Location Label */}
                <div className="mt-3 bg-white px-4 py-2 rounded-lg shadow-xl text-sm font-bold text-slate-800 whitespace-nowrap">
                  {location.name}
                  <span className="ml-2 text-brand-blue-600 font-normal">({location.timezone})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
