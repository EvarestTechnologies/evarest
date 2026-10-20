import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';
import { CONTACT, mailto } from '../../utils/constants';

const Contact = () => (
  <section id="contact" className="section bg-white">
    <div className="container-custom">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold lg:text-5xl text-brand-navy">Talk to us</h2>
        <p className="text-lg text-slate-600">Tell us a little about what you need, and we will reply by email.</p>
      </div>

      <div className="grid max-w-5xl gap-6 mx-auto md:grid-cols-2">
        <div className="p-8 border rounded-2xl border-slate-200">
          <h3 className="mb-2 text-xl font-bold text-brand-navy">An engineering project</h3>
          <p className="mb-6 text-slate-600">
            Backend, integrations, applied AI, a full product, or ongoing support. Tell us what you are building and
            when you need it.
          </p>
          <Button variant="primary" size="lg" href={mailto('Engineering project')}>
            Discuss an engineering project
          </Button>
        </div>
        <div className="p-8 border rounded-2xl border-slate-200">
          <h3 className="mb-2 text-xl font-bold text-brand-navy">A product partnership</h3>
          <p className="mb-6 text-slate-600">
            Research, implementation or funding for ZEYA or Kintaraa. Tell us about your organisation and what you have
            in mind.
          </p>
          <Button variant="outline-purple" size="lg" href={mailto('Product partnership')}>
            Discuss a partnership
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 mt-10 text-slate-700 sm:flex-row sm:gap-10">
        <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 hover:text-brand-blue-500">
          <EnvelopeIcon className="w-5 h-5" />
          {CONTACT.email}
        </a>
        <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 hover:text-brand-blue-500">
          <PhoneIcon className="w-5 h-5" />
          {CONTACT.phone}
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
