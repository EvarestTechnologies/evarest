import { PROCESS } from '../../utils/constants';

const HowWeWork = () => (
  <section id="how-we-work" className="section bg-white">
    <div className="container-custom">
      <div className="max-w-3xl mb-12">
        <p className="mb-3 text-sm font-semibold tracking-wider uppercase text-brand-blue-500">How we work</p>
        <h2 className="mb-4 text-4xl font-bold lg:text-5xl text-brand-navy">Clear scope, regular updates, no surprises</h2>
        <p className="text-lg text-slate-600">
          You know what we are building, what it will cost and how it is going. If a timeline or requirement changes,
          you hear it from us first.
        </p>
      </div>

      <ol className="grid gap-6 md:grid-cols-5">
        {PROCESS.map((p, i) => (
          <li key={p.step} className="relative pt-6 border-t-2 border-brand-blue-200">
            <span className="absolute -top-3 left-0 flex items-center justify-center w-6 h-6 text-xs font-bold text-white rounded-full bg-brand-blue-500">
              {i + 1}
            </span>
            <h3 className="mb-2 text-lg font-semibold text-brand-navy">{p.step}</h3>
            <p className="text-slate-600">{p.body}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default HowWeWork;
