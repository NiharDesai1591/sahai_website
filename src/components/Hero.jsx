import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen relative overflow-hidden bg-ink">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0">
        {/* Abstract gradient background as placeholder for image */}
        <div className="absolute inset-0 bg-gradient-to-br from-glow-sakhi/10 via-ink to-glow-guru/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/50 to-ink" />

        {/* Pulsing Glow Effects */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-glow-sakhi/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-glow-guru/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-technical text-glow-sakhi uppercase tracking-wider mb-6"
        >
          HealthAI @ ARTPARK
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-hero text-silver mb-6"
        >
          Agentifying Public Health.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-lg lg:text-body-lg text-silver/80 max-w-3xl mb-12"
        >
          India skipped the credit card to lead in digital payments. We are skipping
          the dashboard era to lead in Agent-Led Public Health. We build AI companions
          that turn fragmented data into frontline action.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4 sm:gap-6"
        >
          <button
            onClick={() => scrollToSection('#results')}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-glow-sakhi text-ink font-medium rounded-full hover:scale-105 hover:shadow-lg hover:shadow-glow-sakhi/30 transition-all duration-300"
          >
            View Our Research
          </button>
          <button
            onClick={() => scrollToSection('#agents')}
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-silver/20 text-silver font-medium rounded-full hover:border-silver/40 hover:bg-silver/5 transition-all duration-300"
          >
            The 4-Agent Framework
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-silver/40 text-sm font-body">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-silver/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
