import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { WORK } from '../../utils/constants';

const Work = () => (
  <section id="work" className="section bg-slate-50 border-y border-slate-200">
    <div className="container-custom">
      <div className="max-w-3xl mb-12">
        <p className="mb-3 text-sm font-semibold tracking-wider uppercase text-brand-blue-500">Our work</p>
        <h2 className="mb-4 text-4xl font-bold lg:text-5xl text-brand-navy">Work you can check</h2>
        <p className="text-lg text-slate-600">Each project links to something you can open yourself.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {WORK.map((item) => (
          <article key={item.title} className="p-8 bg-white border rounded-2xl border-slate-200">
            <p className="mb-2 text-sm font-medium text-brand-cyan-600">{item.tag}</p>
            <h3 className="mb-4 text-2xl font-bold text-brand-navy">{item.title}</h3>
            <p className="mb-6 text-slate-600">{item.body}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {item.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-brand-blue-500 hover:text-brand-blue-700"
                >
                  {link.label}
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
