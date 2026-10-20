import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { PRODUCTS, mailto } from '../../utils/constants';

const Products = () => (
  <section id="products" className="section bg-brand-blue-50/60 border-y border-brand-blue-100">
    <div className="container-custom">
      <div className="max-w-3xl mb-12">
        <p className="mb-3 text-sm font-semibold tracking-wider uppercase text-brand-blue-500">What we build</p>
        <h2 className="mb-4 text-4xl font-bold lg:text-5xl text-brand-navy">Our own products</h2>
        <p className="text-lg text-slate-600">
          We build products for problems we care about. Client engineering work funds them.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {PRODUCTS.map((product) => (
          <article key={product.name} className="flex flex-col p-8 bg-white border rounded-2xl border-brand-blue-100 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <h3 className="text-2xl font-bold text-brand-navy">{product.name}</h3>
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-brand-blue-50 text-brand-blue-600">
                {product.status}
              </span>
            </div>
            <p className="mb-5 text-lg text-slate-700">{product.summary}</p>
            <ul className="flex-1 mb-6 space-y-2 text-slate-600">
              {product.details.map((d) => (
                <li key={d} className="flex gap-3">
                  <span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-brand-cyan-500" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-x-6 gap-y-3 font-semibold">
              <a href={mailto(product.subject)} className="inline-flex items-center gap-1 text-brand-blue-500 hover:text-brand-blue-700">
                {product.cta}
                <ArrowRightIcon className="w-4 h-4" />
              </a>
              {product.href && (
                <a href={product.href} className="text-slate-600 hover:text-brand-blue-500">
                  {product.linkLabel}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
