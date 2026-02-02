import { motion } from 'framer-motion';

const phases = [
  {
    era: 'Past',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    label: 'Paper Registers',
    state: 'Manual & Fragmented'
  },
  {
    era: 'Present',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    label: 'Static Dashboards',
    state: 'Digital Drudgery'
  },
  {
    era: 'Future',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        <circle cx="12" cy="9" r="2" strokeWidth={1.5} />
      </svg>
    ),
    label: 'Agent Systems',
    state: 'Intelligent Action'
  }
];

const comparisons = [
  { from: 'Static Dashboards', to: 'Decision Companions' },
  { from: 'Episodic Training', to: 'Continuous & Embedded Learning' },
  { from: 'Manual Data Entry', to: 'Conversational Data Capture' },
];

export default function LeapfrogThesis() {
  return (
    <section id="thesis" className="section-padding bg-ink">
      <div className="max-content">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl lg:text-section text-silver mb-8"
        >
          The Leapfrog Moment.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-lg lg:text-body-lg text-silver/80 max-w-3xl mb-16 lg:mb-20"
        >
          For a decade, digitization meant more forms and more dashboards.
          For the frontline worker, it meant more work. We believe the next era
          of public health isn't about better software; it's about Agentification.
          AI agents that sit atop existing systems to connect data, automate drudgery,
          and provide real-time guidance.
        </motion.p>

        {/* Timeline Visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="text-center relative"
            >
              {/* Connecting line */}
              {idx < phases.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-silver/20 to-silver/5" />
              )}

              <div className={`inline-flex items-center justify-center w-20 h-20 mb-4 rounded-2xl ${
                idx === 2 ? 'bg-glow-sakhi/20 text-glow-sakhi' : 'bg-silver/10 text-silver/60'
              }`}>
                {phase.icon}
              </div>
              <h4 className="font-mono text-technical text-silver/50 mb-2 uppercase tracking-wider">
                {phase.era}
              </h4>
              <h3 className="font-body text-xl lg:text-subsection text-silver mb-2">
                {phase.label}
              </h3>
              <p className="font-body text-body text-silver/60">{phase.state}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {comparisons.map((comparison, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-4 sm:gap-8 items-center p-4 rounded-xl bg-slate/30"
            >
              <div className="text-center sm:text-right">
                <span className="font-body text-body text-silver/50 line-through">
                  {comparison.from}
                </span>
              </div>
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-glow-sakhi" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <span className="font-body text-lg lg:text-body-lg text-silver">
                  {comparison.to}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
