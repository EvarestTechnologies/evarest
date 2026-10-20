import Logo from '../ui/Logo';
import { CONTACT, NAV_LINKS } from '../../utils/constants';

const Footer = () => (
  <footer className="py-14 bg-brand-navy text-slate-300">
    <div className="container-custom">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="space-y-4">
          <Logo onDark />
          <p className="max-w-xs text-sm text-slate-400">
            Evarest Technologies Ltd. We build our own products and engineer software for other organisations.
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Site</h3>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-brand-cyan-400">{link.name}</a>
              </li>
            ))}
            <li><a href="/zeya/" className="hover:text-brand-cyan-400">ZEYA</a></li>
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>{CONTACT.location}</li>
            <li><a href={`mailto:${CONTACT.email}`} className="hover:text-brand-cyan-400">{CONTACT.email}</a></li>
            <li><a href={CONTACT.phoneHref} className="hover:text-brand-cyan-400">{CONTACT.phone}</a></li>
            <li className="flex gap-4 pt-2">
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan-400">LinkedIn</a>
              <a href={CONTACT.x} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan-400">X</a>
            </li>
          </ul>
        </div>
      </div>

      <p className="pt-8 mt-10 text-sm border-t border-white/10 text-slate-500">
        © {new Date().getFullYear()} Evarest Technologies Ltd
      </p>
    </div>
  </footer>
);

export default Footer;
