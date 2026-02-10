import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background px-6 relative">
      {/* Subtle dot pattern background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      <div className="relative z-10 flex flex-col items-center">
        {/* Main Headline */}
        <motion.h1
          className="font-display text-3xl md:text-5xl lg:text-6xl text-center max-w-5xl mb-6 font-extrabold tracking-tight text-text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Building a Public Health System in the Agentic Era
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-body-lg text-text-secondary text-center max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          An applied AI lab translating frontier technologies into deployed infrastructure that strengthens public health
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <button
            onClick={(e) => scrollToSection(e, 'agents')}
            className="btn-primary"
          >
            View Our Work
          </button>
          <button
            onClick={(e) => scrollToSection(e, 'narrative')}
            className="btn-secondary inline-flex items-center gap-2"
          >
            The Vision
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <svg className="w-5 h-5 text-gray-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
