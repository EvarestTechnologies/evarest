import { Linkedin, Twitter, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-white bg-gradient-to-b from-brand-navy to-slate-950">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue-500/50 to-transparent" />

      <div className="py-20 container-custom">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4 text-3xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-brand-blue-400 to-brand-cyan-400 bg-clip-text text-transparent">E</span>
              <span className="text-white">varest</span>
            </div>
            <p className="mb-8 text-sm leading-relaxed text-slate-400">
              Enterprise-Grade Engineering That Scales
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-sm text-slate-400 group">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-blue-400" />
                <div>
                  <div className="font-semibold text-white">Headquarters</div>
                  <div>Nairobi, Kenya</div>
                </div>
              </div>
              <a href="tel:+254723469406" className="flex items-center space-x-3 text-sm transition-colors text-slate-400 hover:text-brand-blue-400 group">
                <Phone className="flex-shrink-0 w-4 h-4 text-brand-blue-400" />
                <span>+254723469406</span>
              </a>
              <a
                href="mailto:contact@evarestke.com"
                className="flex items-center space-x-3 text-sm transition-colors text-slate-400 hover:text-brand-blue-400 group"
              >
                <Mail className="flex-shrink-0 w-4 h-4 text-brand-blue-400" />
                <span>contact@evarestke.com</span>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-wider text-white uppercase">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#cloud-infrastructure"
                  className="transition-colors text-slate-400 hover:text-brand-blue-400"
                >
                  Cloud & Infrastructure
                </a>
              </li>
              <li>
                <a
                  href="#app-development"
                  className="transition-colors text-slate-400 hover:text-brand-blue-400"
                >
                  Application Development
                </a>
              </li>
              <li>
                <a
                  href="#data-ai"
                  className="transition-colors text-slate-400 hover:text-brand-blue-400"
                >
                  Data & AI Engineering
                </a>
              </li>
              <li>
                <a
                  href="#security-compliance"
                  className="transition-colors text-slate-400 hover:text-brand-blue-400"
                >
                  Security & Compliance
                </a>
              </li>
              <li>
                <a
                  href="#devops-sre"
                  className="transition-colors text-slate-400 hover:text-brand-blue-400"
                >
                  DevOps & SRE
                </a>
              </li>
              <li>
                <a
                  href="#managed-services"
                  className="transition-colors text-slate-400 hover:text-brand-blue-400"
                >
                  Managed Services
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-wider text-white uppercase">Industries</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#healthtech"
                  className="transition-colors text-slate-400 hover:text-brand-blue-400"
                >
                  HealthTech
                </a>
              </li>
              <li>
                <a
                  href="#fintech"
                  className="transition-colors text-slate-400 hover:text-brand-blue-400"
                >
                  FinTech
                </a>
              </li>
              <li>
                <a
                  href="#government"
                  className="transition-colors text-slate-400 hover:text-brand-blue-400"
                >
                  Government/Public Sector
                </a>
              </li>
              <li>
                <a
                  href="#saas"
                  className="transition-colors text-slate-400 hover:text-brand-blue-400"
                >
                  Enterprise SaaS
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-wider text-white uppercase">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#about"
                  className="transition-colors text-slate-400 hover:text-brand-blue-400"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="transition-colors text-slate-400 hover:text-brand-blue-400"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="transition-colors text-slate-400 hover:text-brand-blue-400"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors text-slate-400 hover:text-brand-blue-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-wider text-white uppercase">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#security"
                  className="transition-colors text-slate-400 hover:text-brand-blue-400"
                >
                  Security & Privacy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="transition-colors text-slate-400 hover:text-brand-blue-400"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#sla"
                  className="transition-colors text-slate-400 hover:text-brand-blue-400"
                >
                  Service Level Agreements
                </a>
              </li>
              <li>
                <a
                  href="#dpa"
                  className="transition-colors text-slate-400 hover:text-brand-blue-400"
                >
                  Data Processing Agreement
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-16 border-t border-white/[0.05]">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* Copyright */}
            <div className="text-sm font-medium text-slate-500">
              © {currentYear} Evarest. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3" role="navigation" aria-label="Social media links">
              <a
                href="https://linkedin.com/company/evarest"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 transition-all duration-300 rounded-lg bg-white/[0.03] hover:bg-brand-blue-500/20 border border-white/[0.05] hover:border-brand-blue-500/50 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-slate-400 transition-colors group-hover:text-brand-blue-400" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/evarest"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 transition-all duration-300 rounded-lg bg-white/[0.03] hover:bg-brand-blue-500/20 border border-white/[0.05] hover:border-brand-blue-500/50 group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-slate-400 transition-colors group-hover:text-brand-blue-400" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/evarest"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 transition-all duration-300 rounded-lg bg-white/[0.03] hover:bg-brand-blue-500/20 border border-white/[0.05] hover:border-brand-blue-500/50 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-slate-400 transition-colors group-hover:text-brand-blue-400" aria-hidden="true" />
              </a>
            </div>

            {/* Legal Links & Status */}
            <div className="flex flex-col gap-4 text-sm md:flex-row md:items-center text-slate-500">
              <a href="#privacy" className="transition-colors hover:text-brand-blue-400">
                Privacy Policy
              </a>
              <span className="hidden md:inline text-slate-700">•</span>
              <a href="#cookies" className="transition-colors hover:text-brand-blue-400">
                Cookie Policy
              </a>
              <span className="hidden md:inline text-slate-700">•</span>
              <div className="flex items-center gap-2">
                <div className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <span className="font-medium text-slate-400">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
