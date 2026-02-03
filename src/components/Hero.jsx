import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      {/* Main Headline */}
      <motion.h1
        className="font-display text-5xl md:text-6xl lg:text-hero text-center max-w-5xl mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        SAHAI
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="text-xl md:text-2xl lg:text-h2 text-text-primary text-center max-w-3xl mb-6 font-display"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Solutions for Accessible Health using AI
      </motion.p>

      {/* Description */}
      <motion.p
        className="text-body-lg text-text-secondary text-center max-w-3xl mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        A frontier lab building Public Agents for India's health system—creating
        reusable infrastructure while solving hard problems in the field.
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a href="#agents" className="btn-primary">
          View Our Work
        </a>
        <a href="#thesis" className="btn-secondary inline-flex items-center gap-2">
          The Vision
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </motion.div>

      {/* Scroll indicator with navigation pills */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <svg className="w-5 h-5 text-brand-primary animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        <div className="bg-surface border border-border rounded-full px-6 py-3 shadow-sm">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-text-secondary">
            <li>
              <a href="#thesis" className="hover:text-brand-primary transition-colors">
                The Thesis
              </a>
            </li>
            <li>
              <a href="#agents" className="hover:text-brand-primary transition-colors">
                Agents
              </a>
            </li>
            <li>
              <a href="#narrative" className="hover:text-brand-primary transition-colors">
                Narrative
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-brand-primary transition-colors">
                About
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
