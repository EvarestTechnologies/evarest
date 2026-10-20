import { SERVICES, ENGAGEMENTS } from '../../utils/constants';

const Engineering = () => (
  <section id="engineering" className="section bg-white">
    <div className="container-custom">
      <div className="max-w-3xl mb-12">
        <p className="mb-3 text-sm font-semibold tracking-wider uppercase text-brand-blue-500">Engineering services</p>
        <h2 className="mb-4 text-4xl font-bold lg:text-5xl text-brand-navy">From requirements to working software</h2>
        <p className="text-lg text-slate-600">
          We work with AI companies, software startups and growing businesses that need engineering capacity or an
          accountable partner to deliver and maintain their software. One team is responsible for the agreed scope
          and for talking to you.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden border rounded-2xl border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <div key={service.name} className="p-7 bg-white">
            <h3 className="mb-2 text-lg font-semibold text-brand-navy">{service.name}</h3>
            <p className="text-slate-600">{service.description}</p>
          </div>
        ))}
        <div className="p-7 bg-brand-blue-500 text-white">
          <h3 className="mb-2 text-lg font-semibold text-white">Not sure where to start?</h3>
          <p className="mb-4 text-brand-blue-100">Tell us what you are trying to build, and we will suggest a first step.</p>
          <a href="#contact" className="font-semibold underline underline-offset-4">Talk to our team</a>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="mb-6 text-2xl font-bold text-brand-navy">Ways to work with us</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {ENGAGEMENTS.map((e) => (
            <div key={e.name} className="p-6 border rounded-xl border-slate-200">
              <h4 className="mb-2 font-semibold text-brand-navy">{e.name}</h4>
              <p className="text-slate-600">{e.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Engineering;
