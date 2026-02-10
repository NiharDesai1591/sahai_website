import { motion } from 'framer-motion';

const ProblemOpportunity = () => {
  return (
    <section id="thesis" className="section-padding bg-white">
      <div className="max-content">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          {/* LEFT COLUMN: The Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <p className="text-label uppercase tracking-widest text-text-tertiary mb-3">The Challenge</p>
              <h2 className="font-display text-3xl md:text-display font-bold text-text-primary">
                The Problem We See
              </h2>
            </div>

            <div className="space-y-6 flex-1 flex flex-col">
              <p className="text-body-lg text-text-secondary leading-relaxed">
                India's public health system runs on the backs of nearly a million
                frontline health workers—ASHAs, ANMs, and AWWs—who navigate an
                impossible operational landscape every day. Not to forget the dedicated
                administrative and medical officers who oversee this mammoth operation.
              </p>

              <p className="text-body text-text-secondary leading-relaxed">
                Consider what a single ANM faces:
              </p>

              <ul className="space-y-3 text-body text-text-secondary">
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-primary mt-2.5 flex-shrink-0" />
                  <span>7+ apps to log data across different government programs</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-primary mt-2.5 flex-shrink-0" />
                  <span>Multiple paper registers running in parallel</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-primary mt-2.5 flex-shrink-0" />
                  <span>End-of-day data entry from memory—introducing permanent errors</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-primary mt-2.5 flex-shrink-0" />
                  <span>Protocol documents scattered across PDFs, WhatsApp groups, training manuals</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-primary mt-2.5 flex-shrink-0" />
                  <span>Hours lost to administrative burden that could be spent on care</span>
                </li>
              </ul>

              <div className="mt-auto pt-6">
                <div className="bg-gray-50 border-l-4 border-gray-900 p-6 rounded-r-lg">
                  <p className="font-display text-h3 text-text-primary italic font-semibold">
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
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <p className="text-label uppercase tracking-widest text-text-tertiary mb-3">The Path Forward</p>
              <h2 className="font-display text-3xl md:text-display font-bold text-text-primary">
                The Opportunity
              </h2>
            </div>

            <div className="space-y-6 flex-1 flex flex-col">
              <p className="text-body-lg text-text-secondary leading-relaxed">
                The next shift isn't better dashboards or another chatbot. It's
                <strong className="text-text-primary font-semibold"> agentic systems</strong>—AI
                that doesn't just answer questions, but actually does the digital work.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl border border-border">
                <h4 className="font-display text-body-lg font-semibold text-text-primary mb-4">
                  Agents are LLM-powered systems that can:
                </h4>
                <ul className="space-y-2.5 text-body text-text-secondary">
                  <li className="flex gap-3 items-center">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Read policy and guidelines</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Check eligibility against multiple databases</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Pre-fill forms from prior visits</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Schedule follow-ups and book referrals</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Update multiple registries simultaneously</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Escalate to humans when confidence is low</span>
                  </li>
                </ul>
              </div>

              <div className="mt-auto pt-6">
                <div className="bg-black text-white p-6 rounded-xl">
                  <p className="text-h3 font-display font-semibold">
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
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 pt-16 border-t border-border"
        >
          <h3 className="font-display text-h2 text-text-primary font-bold text-center mb-12">
            India is uniquely positioned for this leap
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <span className="text-text-primary font-bold text-sm">1</span>
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
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <span className="text-text-primary font-bold text-sm">2</span>
              </div>
              <div>
                <h5 className="font-semibold text-text-primary mb-2">Bhashini Language AI</h5>
                <p className="text-body text-text-secondary">
                  Building foundational AI Blocks for real Indian speech
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <span className="text-text-primary font-bold text-sm">3</span>
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
