import { FOUNDERS } from '../../utils/constants';

const About = () => (
  <section id="about" className="section bg-brand-blue-50/60 border-y border-brand-blue-100">
    <div className="container-custom">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-wider uppercase text-brand-blue-500">About us</p>
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl text-brand-navy">Four founders who started by building together</h2>
          <div className="space-y-4 text-lg text-slate-700">
            <p>
              We met during two years of software development training at Zone01, where we entered hackathons as a
              team and built solutions to real problems. Some of those projects won competitions. Kintaraa started there,
              as our response to femicide and gender-based violence.
            </p>
            <p>
              After the training, we chose to build a company together instead of going separate ways. Evarest builds
              its own products and engineers software for other organisations.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-white border rounded-2xl border-brand-blue-100">
            <h3 className="mb-2 text-sm font-semibold tracking-wider uppercase text-brand-blue-500">Mission</h3>
            <p className="text-lg text-slate-800">
              We build technology products that address real-world challenges and engineer software systems that help
              organisations deliver better services.
            </p>
          </div>
          <div className="p-6 bg-white border rounded-2xl border-brand-blue-100">
            <h3 className="mb-2 text-sm font-semibold tracking-wider uppercase text-brand-blue-500">Vision</h3>
            <p className="text-lg text-slate-800">
              A world where technology makes essential services more accessible, reliable and effective.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="mb-6 text-2xl font-bold text-brand-navy">The founders</h3>
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {FOUNDERS.map((f) => (
            <li key={f.name} className="text-center">
              <img
                src={f.photo}
                alt={f.name}
                width={160}
                height={160}
                loading="lazy"
                className="object-cover w-32 h-32 mx-auto mb-4 rounded-full ring-4 ring-white shadow-sm"
              />
              <p className="font-semibold text-brand-navy">{f.name}</p>
              <p className="text-slate-600">{f.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About;
