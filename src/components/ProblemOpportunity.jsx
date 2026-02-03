import { motion } from 'framer-motion';

const ProblemOpportunity = () => {
  return (
    <section id="thesis" className="section-padding bg-surface">
      <div className="max-content">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-display mb-6"
          >
            The Problem We See
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-brand-primary mx-auto"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* LEFT COLUMN: The Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="text-body-lg text-text-primary leading-relaxed">
              India's public health system runs on the backs of nearly a million
              frontline health workers—ASHAs, ANMs, and CHWs—who navigate an
              impossible operational landscape every day.
            </p>

            <p className="text-body text-text-secondary leading-relaxed">
              Consider what a single ANM faces:
            </p>

            <ul className="space-y-3 text-body text-text-secondary">
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span>7+ apps to log data across different government programs</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span>Multiple paper registers running in parallel</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span>End-of-day data entry from memory—introducing permanent errors</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span>Protocol documents scattered across PDFs, WhatsApp groups, training manuals</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span>Hours lost to administrative burden that could be spent on care</span>
              </li>
            </ul>

            {/* Quote Callout */}
            <div className="bg-brand-light/30 border-l-4 border-brand-primary p-6 rounded-r-lg">
              <p className="font-display text-h3 text-text-primary italic">
                "We digitized healthcare for humans. But we digitized poorly."
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Opportunity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="font-display text-h2 text-text-primary mb-6">
              The Opportunity: Public Agents, Not Answers
            </h3>

            <p className="text-body-lg text-text-primary leading-relaxed">
              The next shift isn't better dashboards or another chatbot. It's
              <strong className="text-brand-primary"> agentic systems</strong>—AI
              that doesn't just answer questions, but actually does the digital work.
            </p>

            <div className="bg-background p-6 rounded-xl space-y-4">
              <h4 className="font-body text-body-lg font-semibold text-text-primary">
                When we say "agent," we mean an LLM-powered system that can:
              </h4>
              <ul className="space-y-2 text-body text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-brand-primary">✓</span>
                  <span>Read policy and guidelines</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-primary">✓</span>
                  <span>Check eligibility against multiple databases</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-primary">✓</span>
                  <span>Pre-fill forms from prior visits</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-primary">✓</span>
                  <span>Schedule follow-ups and book referrals</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-primary">✓</span>
                  <span>Update multiple registries simultaneously</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-primary">✓</span>
                  <span>Escalate to humans when confidence is low</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-primary text-white p-8 rounded-xl">
              <p className="text-h3 font-display">
                The output isn't a paragraph. It's a submitted form, a scheduled
                follow-up, a referral booked.
              </p>
            </div>

            {/* India's Position */}
            <div className="space-y-4">
              <h4 className="font-body text-body-lg font-semibold text-text-primary">
                India is uniquely positioned for this leap. We have:
              </h4>

              <div className="space-y-3">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-primary font-semibold">1</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-text-primary mb-1">Digital Public Infrastructure</h5>
                    <p className="text-body-sm text-text-secondary">
                      Aadhaar, UPI, ABDM give agents the foundational rails to
                      authenticate, consent, and transact
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-primary font-semibold">2</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-text-primary mb-1">Bhashini Language AI</h5>
                    <p className="text-body-sm text-text-secondary">
                      Building foundational AI Blocks for real Indian speech
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-primary font-semibold">3</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-text-primary mb-1">Global Scale</h5>
                    <p className="text-body-sm text-text-secondary">
                      Scale that makes the investment worthwhile and learnings
                      globally exportable
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Statement */}
            <div className="border-l-4 border-brand-primary pl-6">
              <p className="text-body-lg text-text-primary italic">
                "If a Public Agent works for an ANM in Uttar Pradesh, it will
                generalize to Kenya, Nigeria, Brazil. India becomes a producer of
                globally exportable health infrastructure—not a consumer of
                Silicon Valley's tools."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemOpportunity;
