import ConsultationForm from '../forms/ConsultationForm';

const ConsultationSection = () => {
  return (
    <section id="consultation" className="section bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-800">
              Let's Build Something Great
            </h2>
            <p className="text-xl text-slate-600">
              Schedule a consultation with our engineering experts
            </p>
          </div>

          {/* Form */}
          <ConsultationForm />

          {/* Trust Indicators */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-500 mb-2">24h</div>
              <div className="text-sm text-slate-600">Response Time</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-green-500 mb-2">100%</div>
              <div className="text-sm text-slate-600">Confidential</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-purple-500 mb-2">Free</div>
              <div className="text-sm text-slate-600">Initial Consultation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
