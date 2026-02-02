import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-cream">
      {/* Background with subtle grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Gradient overlays for soft effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 via-transparent to-accent-guru/5" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-paper/50 to-transparent" />

      {/* Subtle floating shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-guru/10 rounded-full blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center max-w-5xl mx-auto px-6 lg:px-20 py-20">
        {/* Lab Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-paper border border-border shadow-sm mb-8"
        >
          <svg className="w-4 h-4 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          <span className="font-mono text-sm text-charcoal tracking-wide">HEALTHAI @ ARTPARK LAB</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-hero mb-6"
        >
          <span className="text-charcoal">Agentifying </span>
          <span className="text-accent-primary italic">Public Health</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-lg lg:text-body-lg text-slate max-w-2xl mb-12"
        >
          India skipped the credit card to lead in digital payments. We are skipping
          the dashboard era to lead in Agent-Led Public Health. We build AI companions
          that turn fragmented data into frontline action.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={() => scrollToSection('#results')}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-accent-primary text-white font-medium rounded-full hover:bg-accent-primary/90 hover:shadow-lg hover:shadow-accent-primary/20 transition-all duration-300"
          >
            View Our Research
          </button>
          <button
            onClick={() => scrollToSection('#agents')}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-paper border-2 border-border text-charcoal font-medium rounded-full hover:border-accent-primary/50 hover:shadow-sm transition-all duration-300"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <svg
            className="w-6 h-6 text-accent-primary"
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
