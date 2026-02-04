import { motion } from 'framer-motion';

const ProblemOpportunity = () => {
  return (
    <section id="thesis" className="section-padding bg-surface">
      <div className="max-content">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          {/* LEFT COLUMN: The Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Problem Header */}
            <div className="mb-8">
              <h2 className="font-display text-3xl md:text-display mb-4">
                The Problem We See
              </h2>
              <div className="w-24 h-1 bg-brand-primary" />
            </div>

            <div className="space-y-6 flex-1 flex flex-col">
              <p className="text-body-lg text-text-primary leading-relaxed">
                India's public health system runs on the backs of nearly a million
                frontline health workers—ASHAs, ANMs, and AWWs—who navigate an
                impossible operational landscape every day. Not to forget the dedicated
                administrative and medical officers who oversee this mammoth operation.
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

              {/* Quote Callout - pushed to bottom */}
              <div className="mt-auto pt-6">
                <div className="bg-brand-light/30 border-l-4 border-brand-primary p-6 rounded-r-lg">
                  <p className="font-display text-h3 text-text-primary italic">
                    "We digitized healthcare for humans. But we digitized poorly."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Opportunity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            {/* Opportunity Header */}
            <div className="mb-8">
              <h2 className="font-display text-3xl md:text-display mb-4">
                The Opportunity
              </h2>
              <div className="w-24 h-1 bg-brand-primary" />
            </div>

            <div className="space-y-6 flex-1 flex flex-col">
              <p className="text-body-lg text-text-primary leading-relaxed">
                The next shift isn't better dashboards or another chatbot. It's
                <strong className="text-brand-primary"> agentic systems</strong>—AI
                that doesn't just answer questions, but actually does the digital work.
              </p>

              <div className="bg-background p-6 rounded-xl space-y-4">
                <h4 className="font-body text-body-lg font-semibold text-text-primary">
                  Agents are LLM-powered systems that can:
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

              {/* Output Callout - pushed to bottom */}
              <div className="mt-auto pt-6">
                <div className="bg-brand-primary text-white p-6 rounded-xl">
                  <p className="text-h3 font-display">
                    The output isn't a paragraph. It's a submitted form, a scheduled
                    follow-up, a referral booked.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* India's Position - Full Width Section Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-16 border-t border-gray-200"
        >
          <h3 className="font-display text-h2 text-text-primary text-center mb-12">
            India is uniquely positioned for this leap
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                <span className="text-brand-primary font-semibold text-lg">1</span>
              </div>
              <div>
                <h5 className="font-semibold text-text-primary mb-2">Digital Public Infrastructure</h5>
                <p className="text-body text-text-secondary">
                  Aadhaar, UPI, ABDM give agents the foundational rails to
                  authenticate, consent, and transact
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                <span className="text-brand-primary font-semibold text-lg">2</span>
              </div>
              <div>
                <h5 className="font-semibold text-text-primary mb-2">Bhashini Language AI</h5>
                <p className="text-body text-text-secondary">
                  Building foundational AI Blocks for real Indian speech
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                <span className="text-brand-primary font-semibold text-lg">3</span>
              </div>
              <div>
                <h5 className="font-semibold text-text-primary mb-2">Global Scale</h5>
                <p className="text-body text-text-secondary">
                  Scale that makes the investment worthwhile and learnings
                  globally exportable
                </p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ProblemOpportunity;
