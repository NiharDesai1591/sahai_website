import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Navigation links - mix of hash anchors and routes
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
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      // Update active section only on home page
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
        // Navigate to home page first, then scroll
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
      {/* Desktop Navigation - Floating Pill */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : 100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div className="bg-surface/90 backdrop-blur-lg border border-border rounded-full px-8 py-4 shadow-lg">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link);

              if (link.type === 'route') {
                return (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className={`text-sm font-medium transition-all duration-300 ${
                        active
                          ? 'text-brand-primary'
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
                    className={`text-sm font-medium transition-all duration-300 ${
                      active
                        ? 'text-brand-primary'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.nav>

      {/* Mobile Navigation Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 bg-surface rounded-full flex items-center justify-center shadow-lg border border-border"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
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
            className="fixed inset-0 z-40 bg-surface/98 backdrop-blur-xl md:hidden"
          >
            <nav className="h-full flex items-center justify-center">
              <ul className="space-y-6 text-center">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.type === 'route' ? (
                      <Link
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl font-display text-text-primary hover:text-brand-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link)}
                        className="text-2xl font-display text-text-primary hover:text-brand-primary transition-colors"
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
