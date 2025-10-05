import { Linkedin, Twitter, Github, Mail, Phone, MapPin } from 'lucide-react';
import ReviewBadge from '../ui/ReviewBadge';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white bg-brand-navy">
      <div className="py-16 container-custom">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4 text-2xl font-bold">
              <span className="text-brand-blue-400">E</span>
              <span>varest</span>
            </div>
            <p className="mb-6 text-sm text-slate-300">
              Enterprise-Grade Engineering That Scales
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-sm text-slate-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">US HQ</div>
                  <div>New York, NY</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-300">
                <Phone className="flex-shrink-0 w-4 h-4" />
                <span>+254723469406</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-300">
                <Mail className="flex-shrink-0 w-4 h-4" />
                <a
                  href="mailto:sales@evarestke.com"
                  className="transition-colors hover:text-brand-blue-400"
                >
                  contacts@evarestke.com
                </a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#cloud-infrastructure"
                  className="transition-colors text-slate-300 hover:text-brand-blue-400"
                >
                  Cloud & Infrastructure
                </a>
              </li>
              <li>
                <a
                  href="#app-development"
                  className="transition-colors text-slate-300 hover:text-brand-blue-400"
                >
                  Application Development
                </a>
              </li>
              <li>
                <a
                  href="#data-ai"
                  className="transition-colors text-slate-300 hover:text-brand-blue-400"
                >
                  Data & AI Engineering
                </a>
              </li>
              <li>
                <a
                  href="#security-compliance"
                  className="transition-colors text-slate-300 hover:text-brand-blue-400"
                >
                  Security & Compliance
                </a>
              </li>
              <li>
                <a
                  href="#devops-sre"
                  className="transition-colors text-slate-300 hover:text-brand-blue-400"
                >
                  DevOps & SRE
                </a>
              </li>
              <li>
                <a
                  href="#managed-services"
                  className="transition-colors text-slate-300 hover:text-brand-blue-400"
                >
                  Managed Services
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#healthtech"
                  className="transition-colors text-slate-300 hover:text-brand-blue-400"
                >
                  HealthTech
                </a>
              </li>
              <li>
                <a
                  href="#fintech"
                  className="transition-colors text-slate-300 hover:text-brand-blue-400"
                >
                  FinTech
                </a>
              </li>
              <li>
                <a
                  href="#government"
                  className="transition-colors text-slate-300 hover:text-brand-blue-400"
                >
                  Government/Public Sector
                </a>
              </li>
              <li>
                <a
                  href="#saas"
                  className="transition-colors text-slate-300 hover:text-brand-blue-400"
                >
                  Enterprise SaaS
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="transition-colors text-slate-300 hover:text-brand-blue-400"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="transition-colors text-slate-300 hover:text-brand-blue-400"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="transition-colors text-slate-300 hover:text-brand-blue-400"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors text-slate-300 hover:text-brand-blue-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#security"
                  className="transition-colors text-slate-300 hover:text-brand-blue-400"
                >
                  Security & Privacy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="transition-colors text-slate-300 hover:text-brand-blue-400"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#sla"
                  className="transition-colors text-slate-300 hover:text-brand-blue-400"
                >
                  Service Level Agreements
                </a>
              </li>
              <li>
                <a
                  href="#dpa"
                  className="transition-colors text-slate-300 hover:text-brand-blue-400"
                >
                  Data Processing Agreement
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Review Badges */}
        <div className="pt-8 mt-12 border-t border-brand-blue-900/30">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <ReviewBadge platform="Clutch" rating={5.0} reviews={120} />
            <ReviewBadge platform="G2" rating={4.9} reviews={89} />
            <ReviewBadge platform="Google" rating={4.9} reviews={150} />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-brand-blue-900/30">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Copyright */}
            <div className="text-sm text-slate-400">
              © {currentYear} Evarest. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4" role="navigation" aria-label="Social media links">
              <a
                href="https://linkedin.com/company/evarest"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-colors rounded-lg bg-white/5 hover:bg-brand-blue-500"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/evarest"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-colors rounded-lg bg-white/5 hover:bg-brand-blue-500"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/evarest"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-colors rounded-lg bg-white/5 hover:bg-brand-blue-500"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col gap-4 text-sm md:flex-row md:items-center text-slate-400">
              <a href="#privacy" className="transition-colors hover:text-brand-blue-400">
                Privacy Policy
              </a>
              <span className="hidden md:inline">•</span>
              <a href="#cookies" className="transition-colors hover:text-brand-blue-400">
                Cookie Policy
              </a>
              <span className="hidden md:inline">•</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-brand-cyan-500 animate-pulse" />
                <span>All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
