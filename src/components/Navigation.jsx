import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'The Thesis', href: '#thesis', type: 'hash' },
  { name: 'Agents', href: '#agents', type: 'hash' },
  { name: 'Vision', href: '#narrative', type: 'hash' },
  { name: 'About', href: '/about', type: 'route' },
  { name: 'Projects', href: '/projects', type: 'route' },
  { name: 'Contact', href: '#contact', type: 'hash' },
];

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      if (isHomePage) {
        const hashLinks = navLinks.filter(link => link.type === 'hash');
        const sections = hashLinks.map(link => link.href.substring(1));
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element && element.getBoundingClientRect().top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isHomePage]);

  const handleNavClick = (e, link) => {
    if (link.type === 'hash') {
      e.preventDefault();
      if (!isHomePage) {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  const isActive = (link) => {
    if (link.type === 'route') {
      return location.pathname === link.href;
    }
    return isHomePage && activeSection === link.href.substring(1);
  };

  return (
    <>
      {/* Top Navigation Bar - Fixed */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-200 ${
          scrolled ? 'bg-white/90 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-content mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col" style={{ width: 'fit-content' }}>
            <span className="font-extrabold text-text-primary leading-none block" style={{ fontSize: '2rem', letterSpacing: '0.18em' }}>SAHAI</span>
            <span className="font-semibold uppercase text-text-tertiary leading-tight block" style={{ fontSize: '0.48rem', letterSpacing: '0.165em' }}>Solutions for Accessible Health using AI</span>
          </Link>

          {/* Nav Links */}
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link);

              if (link.type === 'route') {
                return (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className={`text-sm font-medium transition-all duration-200 ${
                        active
                          ? 'text-text-primary'
                          : 'text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`text-sm font-medium transition-all duration-200 ${
                      active
                        ? 'text-text-primary'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, { href: '#contact', type: 'hash' })}
            className="px-5 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </motion.nav>

      {/* Mobile Navigation Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 right-4 z-50 md:hidden w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm border border-border"
        aria-label="Toggle menu"
      >
        <svg
          className="w-5 h-5 text-text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <nav className="h-full flex items-center justify-center">
              <ul className="space-y-6 text-center">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.type === 'route' ? (
                      <Link
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl font-bold text-text-primary hover:text-text-secondary transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link)}
                        className="text-2xl font-bold text-text-primary hover:text-text-secondary transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
