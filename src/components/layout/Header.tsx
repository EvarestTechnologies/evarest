import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import { NAV_LINKS } from '../../utils/constants';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Handle scroll for background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <span className="text-blue-500">E</span>
                <span className={isScrolled ? 'text-slate-800' : 'text-white'}>varest</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center space-x-1 hover:text-blue-500 transition-colors duration-200 font-medium ${
                    isScrolled ? 'text-slate-700' : 'text-white'
                  }`}
                  onMouseEnter={() => setOpenDropdown('services')}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border transition-all duration-200 ${
                    openDropdown === 'services'
                      ? 'opacity-100 visible'
                      : 'opacity-0 invisible'
                  }`}
                  onMouseEnter={() => setOpenDropdown('services')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="py-2">
                    {NAV_LINKS.services.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Industries Dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center space-x-1 hover:text-blue-500 transition-colors duration-200 font-medium ${
                    isScrolled ? 'text-slate-700' : 'text-white'
                  }`}
                  onMouseEnter={() => setOpenDropdown('industries')}
                >
                  <span>Industries</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border transition-all duration-200 ${
                    openDropdown === 'industries'
                      ? 'opacity-100 visible'
                      : 'opacity-0 invisible'
                  }`}
                  onMouseEnter={() => setOpenDropdown('industries')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="py-2">
                    {NAV_LINKS.industries.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Regular Links */}
              <a
                href="#case-studies"
                className={`hover:text-blue-500 transition-colors duration-200 font-medium ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                Case Studies
              </a>
              <a
                href="#about"
                className={`hover:text-blue-500 transition-colors duration-200 font-medium ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                About
              </a>
              <a
                href="#contact"
                className={`hover:text-blue-500 transition-colors duration-200 font-medium ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                Contact
              </a>
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden lg:block">
              <Button variant="primary" size="md" href="#consultation">
                Schedule Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 hover:text-blue-500 transition-colors duration-200 ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="text-2xl font-bold">
              <span className="text-blue-500">E</span>
              <span className="text-slate-800">varest</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-slate-700 hover:text-blue-500 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <nav className="flex-1 overflow-y-auto py-6 px-6">
            <div className="space-y-6">
              {/* Services */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-services')}
                  className="flex items-center justify-between w-full text-slate-800 font-semibold mb-3"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openDropdown === 'mobile-services' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`space-y-2 pl-4 overflow-hidden transition-all duration-300 ${
                    openDropdown === 'mobile-services'
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  {NAV_LINKS.services.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block py-2 text-slate-600 hover:text-blue-500 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-industries')}
                  className="flex items-center justify-between w-full text-slate-800 font-semibold mb-3"
                >
                  <span>Industries</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openDropdown === 'mobile-industries' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`space-y-2 pl-4 overflow-hidden transition-all duration-300 ${
                    openDropdown === 'mobile-industries'
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  {NAV_LINKS.industries.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block py-2 text-slate-600 hover:text-blue-500 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Direct Links */}
              <a
                href="#case-studies"
                className="block text-slate-800 font-semibold hover:text-blue-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Case Studies
              </a>
              <a
                href="#about"
                className="block text-slate-800 font-semibold hover:text-blue-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-slate-800 font-semibold hover:text-blue-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </nav>

          {/* Mobile Menu Footer CTA */}
          <div className="p-6 border-t">
            <Button
              variant="primary"
              size="lg"
              href="#consultation"
              className="w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
