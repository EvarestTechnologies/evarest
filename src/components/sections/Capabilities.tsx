import { TrophyIcon, UserGroupIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import CertificationCard from '../ui/CertificationCard';

const Capabilities = () => {
  const certifications = [
    { category: 'AWS', count: '25+', items: ['Solutions Architect', 'DevOps', 'Security'] },
    { category: 'Google Cloud', count: '15+', items: ['Professional Architect', 'Data Engineer'] },
    { category: 'Kubernetes', count: '10+', items: ['CKA', 'CKAD', 'CKS'] },
    { category: 'Security', count: '8+', items: ['CISSP', 'CEH', 'OSCP'] },
  ];

  const expertiseAreas = [
    'Cloud Architecture & Migration',
    'Microservices & Distributed Systems',
    'AI/ML Engineering',
    'DevOps & Site Reliability Engineering',
    'Security Engineering & Compliance',
    'Data Engineering & Analytics',
  ];

  return (
    <section id="capabilities" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
            Enterprise-Scale Capabilities
          </h2>
          <p className="text-xl text-slate-600">
            World-class engineering talent with proven expertise
          </p>
        </div>

        {/* Quick Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="inline-flex p-4 bg-gradient-to-br from-brand-blue-500 to-brand-cyan-500 rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
              <UserGroupIcon className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-900 mb-2">
              Senior Engineers
            </div>
            <div className="text-sm text-slate-600">Expert technical team</div>
          </div>

          <div className="text-center group">
            <div className="inline-flex p-4 bg-gradient-to-br from-brand-blue-500 to-brand-cyan-500 rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrophyIcon className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-900 mb-2">
              Solutions Architects
            </div>
            <div className="text-sm text-slate-600">Enterprise architecture experts</div>
          </div>

          <div className="text-center group">
            <div className="inline-flex p-4 bg-gradient-to-br from-brand-blue-500 to-brand-cyan-500 rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
              <GlobeAltIcon className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-900 mb-2">
              Global Support
            </div>
            <div className="text-sm text-slate-600">Follow-the-sun coverage</div>
          </div>
        </div>
      </div>

      <div className="container-custom">
        {/* Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center text-slate-900">
            Team Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                category={cert.category}
                count={cert.count}
                items={cert.items}
              />
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200">
          <h3 className="text-2xl font-bold mb-6 text-center text-slate-900">
            Core Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 p-3 bg-slate-50 rounded-lg hover:bg-brand-blue-50 hover:border-brand-blue-400 border-2 border-transparent transition-all duration-300"
              >
                <div className="w-2 h-2 bg-brand-blue-500 rounded-full flex-shrink-0" />
                <span className="text-slate-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
