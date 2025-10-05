import { Linkedin, Twitter, Github, Mail, Phone, MapPin } from 'lucide-react';
import ReviewBadge from '../ui/ReviewBadge';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">
              <span className="text-brand-blue-400">E</span>
              <span>varest</span>
            </div>
            <p className="text-slate-300 text-sm mb-6">
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
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-300">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:sales@evarest.io"
                  className="hover:text-brand-blue-400 transition-colors"
                >
                  sales@evarest.io
                </a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#cloud-infrastructure"
                  className="text-slate-300 hover:text-brand-blue-400 transition-colors"
                >
                  Cloud & Infrastructure
                </a>
              </li>
              <li>
                <a
                  href="#app-development"
                  className="text-slate-300 hover:text-brand-blue-400 transition-colors"
                >
                  Application Development
                </a>
              </li>
              <li>
                <a
                  href="#data-ai"
                  className="text-slate-300 hover:text-brand-blue-400 transition-colors"
                >
                  Data & AI Engineering
                </a>
              </li>
              <li>
                <a
                  href="#security-compliance"
                  className="text-slate-300 hover:text-brand-blue-400 transition-colors"
                >
                  Security & Compliance
                </a>
              </li>
              <li>
                <a
                  href="#devops-sre"
                  className="text-slate-300 hover:text-brand-blue-400 transition-colors"
                >
                  DevOps & SRE
                </a>
              </li>
              <li>
                <a
                  href="#managed-services"
                  className="text-slate-300 hover:text-brand-blue-400 transition-colors"
                >
                  Managed Services
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-white mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#healthtech"
                  className="text-slate-300 hover:text-brand-blue-400 transition-colors"
                >
                  HealthTech
                </a>
              </li>
              <li>
                <a
                  href="#fintech"
                  className="text-slate-300 hover:text-brand-blue-400 transition-colors"
                >
                  FinTech
                </a>
              </li>
              <li>
                <a
                  href="#government"
                  className="text-slate-300 hover:text-brand-blue-400 transition-colors"
                >
                  Government/Public Sector
                </a>
              </li>
              <li>
                <a
                  href="#saas"
                  className="text-slate-300 hover:text-brand-blue-400 transition-colors"
                >
                  Enterprise SaaS
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-slate-300 hover:text-brand-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="text-slate-300 hover:text-brand-blue-400 transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-slate-300 hover:text-brand-blue-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-300 hover:text-brand-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#security"
                  className="text-slate-300 hover:text-brand-blue-400 transition-colors"
                >
                  Security & Privacy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-slate-300 hover:text-brand-blue-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#sla"
                  className="text-slate-300 hover:text-brand-blue-400 transition-colors"
                >
                  Service Level Agreements
                </a>
              </li>
              <li>
                <a
                  href="#dpa"
                  className="text-slate-300 hover:text-brand-blue-400 transition-colors"
                >
                  Data Processing Agreement
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Review Badges */}
        <div className="mt-12 pt-8 border-t border-brand-blue-900/30">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <ReviewBadge platform="Clutch" rating={5.0} reviews={120} />
            <ReviewBadge platform="G2" rating={4.9} reviews={89} />
            <ReviewBadge platform="Google" rating={4.9} reviews={150} />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-blue-900/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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
                className="p-2 bg-white/5 hover:bg-brand-blue-500 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/evarest"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-brand-blue-500 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/evarest"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-brand-blue-500 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-slate-400">
              <a href="#privacy" className="hover:text-brand-blue-400 transition-colors">
                Privacy Policy
              </a>
              <span className="hidden md:inline">•</span>
              <a href="#cookies" className="hover:text-brand-blue-400 transition-colors">
                Cookie Policy
              </a>
              <span className="hidden md:inline">•</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-brand-cyan-500 rounded-full animate-pulse" />
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
