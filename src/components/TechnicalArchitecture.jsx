import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Domain-Grounded RAG',
    description: 'Our retrieval-augmented generation system is built on curated medical knowledge bases, NHM guidelines, and state-specific protocols. Every response is grounded in verified health information.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    specs: [
      '500K+ medical documents indexed',
      'Real-time protocol updates',
      'Source attribution for every response',
    ],
  },
  {
    title: 'LLM-as-a-Judge',
    description: 'Critical health advice passes through multiple validation layers. Our LLM-based evaluation system checks for accuracy, safety, and protocol compliance before any recommendation reaches a health worker.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    specs: [
      '3-layer validation pipeline',
      'Automatic hallucination detection',
      '99.2% safety compliance rate',
    ],
  },
  {
    title: 'Low-Resource Language Mastery',
    description: 'Purpose-built for Indian languages including Hindi, Kannada, Tamil, Bengali, and regional dialects. Our models handle code-switching, colloquialisms, and medical terminology in local languages.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    specs: [
      '12+ Indian languages supported',
      'Dialect-aware ASR',
      'Medical terminology mapping',
    ],
  },
  {
    title: 'Privacy-First Design',
    description: 'Health data is sensitive. Our architecture uses on-device processing, differential privacy, and automatic data erasure. No patient data is retained beyond the immediate interaction.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    specs: [
      'On-device inference capability',
      'Zero patient data retention',
      'HIPAA-aligned protocols',
    ],
  },
];

export default function TechnicalArchitecture() {
  return (
    <section className="section-padding bg-ink">
      <div className="max-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <h2 className="font-display text-3xl lg:text-section text-silver mb-4">
            Engineering Trust
          </h2>
          <p className="font-body text-lg lg:text-body-lg text-silver/70 max-w-2xl">
            Building AI for healthcare demands exceptional rigor. Our technical architecture prioritizes safety, accuracy, and privacy at every layer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 lg:p-8 rounded-3xl bg-slate/30 border border-silver/10"
            >
              <div className="w-14 h-14 mb-6 rounded-2xl bg-glow-sakhi/10 flex items-center justify-center text-glow-sakhi">
                {pillar.icon}
              </div>

              <h3 className="font-display text-xl lg:text-subsection text-silver mb-3">
                {pillar.title}
              </h3>

              <p className="font-body text-body text-silver/70 mb-6">
                {pillar.description}
              </p>

              <ul className="space-y-2">
                {pillar.specs.map((spec, specIdx) => (
                  <li
                    key={specIdx}
                    className="flex items-center gap-3 font-mono text-technical text-silver/60"
                  >
                    <svg className="w-4 h-4 text-glow-sakhi flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {spec}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
