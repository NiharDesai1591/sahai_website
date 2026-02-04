import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectHRP = () => {
  const [techDetailsOpen, setTechDetailsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">

      {/* Breadcrumb */}
      <div className="bg-surface py-6 border-b border-border">
        <div className="max-w-content mx-auto px-6">
          <Link
            to="/"
            className="text-body-sm text-text-secondary hover:text-brand-primary inline-flex items-center gap-2 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to SAHAI
          </Link>
        </div>
      </div>

      {/* HEADER SECTION */}
      <section className="bg-surface py-20">
        <div className="max-w-text mx-auto px-6 text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-light/20 border border-brand-primary/30 rounded-full text-body-sm font-medium text-brand-primary">
              Maternal Health • ARMMAN Partnership
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-display md:text-hero text-text-primary mb-6"
          >
            High-Risk Pregnancy Copilot for ANMs
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-body-xl text-text-secondary max-w-2xl mx-auto"
          >
            LLM-based conversational assistant strengthening frontline health workers'
            capacity to identify and manage high-risk pregnancies across India.
          </motion.p>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-brand-light/20 border-y border-brand-primary/20 py-12">
        <div className="max-w-content mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-h1 font-display text-brand-primary mb-2">30,000+</div>
              <div className="text-body-sm text-text-secondary uppercase tracking-wider">Queries</div>
            </div>
            <div className="text-center">
              <div className="text-h1 font-display text-brand-primary mb-2">3,000+</div>
              <div className="text-body-sm text-text-secondary uppercase tracking-wider">ANMs</div>
            </div>
            <div className="text-center">
              <div className="text-h1 font-display text-brand-primary mb-2">2 lakh+</div>
              <div className="text-body-sm text-text-secondary uppercase tracking-wider">Pregnant Women Reached</div>
            </div>
            <div className="text-center">
              <div className="text-h1 font-display text-brand-primary mb-2">3</div>
              <div className="text-body-sm text-text-secondary uppercase tracking-wider">States</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: THE PROBLEM */}
      <section className="py-20 bg-surface">
        <div className="max-w-text mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-h2 text-text-primary mb-8">The Problem</h2>
            <p className="text-body-xl text-text-primary leading-relaxed mb-8">
              High-risk pregnancies require constant vigilance, but ANMs—the backbone of
              maternal health in India—often lack consistent access to refresher training
              or point-of-care support.
            </p>

            <div className="bg-background p-6 rounded-xl">
              <h3 className="font-body text-body-lg font-semibold text-text-primary mb-4">
                The old workflow:
              </h3>
              <ul className="space-y-3 text-body text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-brand-primary mt-1">•</span>
                  <span>Live training ends, knowledge fades</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-primary mt-1">•</span>
                  <span>Doubts arise in the field with no immediate help</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-primary mt-1">•</span>
                  <span>WhatsApp queries wait 24-48 hours for medical officer responses</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-primary mt-1">•</span>
                  <span>Medical officers overburdened with simple, repeated questions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-primary mt-1">•</span>
                  <span>For critical questions, ANMs left uncertain during critical moments</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE SOLUTION */}
      <section className="py-20 bg-background">
        <div className="max-w-text mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-h2 text-text-primary mb-4">The Solution</h2>
            <p className="text-h3 text-brand-primary font-semibold mb-8">
              Real-time doubt-solving through WhatsApp
            </p>

            <p className="text-body-xl text-text-primary leading-relaxed mb-8">
              An LLM-powered Learning Copilot, an AI assistant providing ANMs with instant
              protocol-aligned clinical guidance, real-time doubt-solving, and bite-sized
              lessons. Built on a mixture of small and large language models, an architecture
              that reflects pragmatic first-principles design.
            </p>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="font-body text-body-lg font-semibold text-brand-primary mb-3">
                  Instant Protocol Access
                </h3>
                <p className="text-body text-text-secondary">
                  Real-time answers grounded in ARMMAN's validated high-risk pregnancy
                  protocols—no more waiting hours for medical officers.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="font-body text-body-lg font-semibold text-brand-primary mb-3">
                  Multilingual & Multimodal
                </h3>
                <p className="text-body text-text-secondary">
                  Supports Hindi and Telugu with both text and audio input/output—designed
                  for how ANMs actually work in the field.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="font-body text-body-lg font-semibold text-brand-primary mb-3">
                  Human-in-the-Loop Safety
                </h3>
                <p className="text-body text-text-secondary">
                  Escalates critical or low-confidence queries to medical experts—AI as
                  enabler, not replacement.
                </p>
              </div>

              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="font-body text-body-lg font-semibold text-brand-primary mb-3">
                  Bite-Sized Continuous Learning
                </h3>
                <p className="text-body text-text-secondary">
                  Multimedia tutorials with step-by-step instructions and safety reminders—sustaining
                  knowledge retention beyond classroom training.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS */}
      <section className="py-20 bg-surface">
        <div className="max-w-text mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-h2 text-text-primary mb-8">How It Works</h2>

            <div className="bg-background p-8 rounded-xl mb-8">
              <h3 className="font-body text-body-lg font-semibold text-text-primary mb-6">
                The Implemented Workflow:
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-semibold">
                    1
                  </div>
                  <p className="text-body text-text-secondary pt-1">
                    <strong className="text-text-primary">ANM asks a question</strong> via WhatsApp
                    (voice or text, Hindi/Telugu)
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-semibold">
                    2
                  </div>
                  <p className="text-body text-text-secondary pt-1">
                    <strong className="text-text-primary">LLM provides instant answer</strong> from
                    validated protocols
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-semibold">
                    3
                  </div>
                  <p className="text-body text-text-secondary pt-1">
                    <strong className="text-text-primary">Feedback prompt</strong> after every response
                    to improve quality
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-semibold">
                    4
                  </div>
                  <p className="text-body text-text-secondary pt-1">
                    <strong className="text-text-primary">Critical queries escalate</strong> to medical
                    officers for validation
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-semibold">
                    5
                  </div>
                  <p className="text-body text-text-secondary pt-1">
                    <strong className="text-text-primary">Continuous learning</strong> through protocol
                    updates and tutorials
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-light/20 p-6 rounded-xl border-l-4 border-brand-primary">
              <h3 className="font-body text-body-lg font-semibold text-text-primary mb-4">
                Design Principles:
              </h3>
              <ul className="space-y-2 text-body text-text-secondary">
                <li className="flex gap-2">
                  <span className="text-brand-primary">✓</span>
                  <span>No response to greetings (focused on clinical queries)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-primary">✓</span>
                  <span>Escalation when out of scope or potentially harmful</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-primary">✓</span>
                  <span>User satisfaction verified at every step</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-primary">✓</span>
                  <span>Expert validation for quality assurance</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: DEPLOYMENT & IMPACT */}
      <section className="py-20 bg-background">
        <div className="max-w-text mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-h2 text-text-primary mb-12">Deployment & Impact</h2>

            {/* Uttar Pradesh */}
            <div className="mb-12">
              <h3 className="font-display text-h3 text-text-primary mb-6">
                Uttar Pradesh (8 Districts)
              </h3>

              <div className="bg-surface p-8 rounded-xl mb-6">
                <h4 className="font-body text-body-lg font-semibold text-text-primary mb-4">
                  Reach:
                </h4>
                <ul className="space-y-2 text-body text-text-secondary">
                  <li className="flex gap-2">
                    <span className="text-brand-primary">•</span>
                    <span>3,000+ ANMs using the system</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-primary">•</span>
                    <span>30,000+ queries processed</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-primary">•</span>
                    <span>400 messages per day</span>
                  </li>
                </ul>
              </div>

              <div className="bg-surface p-8 rounded-xl">
                <h4 className="font-body text-body-lg font-semibold text-text-primary mb-4">
                  Performance:
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="text-h2 font-display text-brand-primary">70%</div>
                    <div className="text-body-sm text-text-secondary pt-2">ANM activation rate</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-h2 font-display text-brand-primary">98%</div>
                    <div className="text-body-sm text-text-secondary pt-2">Positive user feedback</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-h2 font-display text-brand-primary">97%</div>
                    <div className="text-body-sm text-text-secondary pt-2">Expert-verified accuracy</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-h2 font-display text-brand-primary">&lt;20%</div>
                    <div className="text-body-sm text-text-secondary pt-2">Escalation rate to medical officers</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-h2 font-display text-brand-primary">50%</div>
                    <div className="text-body-sm text-text-secondary pt-2">Increase in query length (deeper engagement)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Telangana */}
            <div className="mb-12">
              <h3 className="font-display text-h3 text-text-primary mb-6">
                Telangana (32 Districts)
              </h3>

              <div className="bg-surface p-8 rounded-xl">
                <h4 className="font-body text-body-lg font-semibold text-text-primary mb-4">
                  Early Results:
                </h4>
                <ul className="space-y-3 text-body text-text-secondary">
                  <li className="flex gap-3">
                    <span className="text-brand-primary">✓</span>
                    <span><strong className="text-text-primary">80%</strong> ANM adoption</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-primary">✓</span>
                    <span>Strong satisfaction from users and domain experts</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-primary">✓</span>
                    <span><strong className="text-text-primary">&lt;25%</strong> escalation rate</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-primary">✓</span>
                    <span>Similar accuracy and feedback patterns</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Key Trends */}
            <div className="bg-brand-primary text-white p-8 rounded-xl">
              <h3 className="font-display text-h3 mb-6">Key Trends</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-body-lg font-semibold mb-2">Increasing Usage</div>
                  <p className="text-body-sm opacity-90">Month-over-month growth</p>
                </div>
                <div>
                  <div className="text-body-lg font-semibold mb-2">Better Use of AI</div>
                  <p className="text-body-sm opacity-90">Longer, more detailed queries</p>
                </div>
                <div>
                  <div className="text-body-lg font-semibold mb-2">Increasing Trust</div>
                  <p className="text-body-sm opacity-90">Lower escalations, higher engagement</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: QUOTE */}
      <section className="py-32 bg-gradient-to-br from-brand-primary to-teal-700">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-display text-h1 md:text-display text-white italic leading-tight mb-8">
              "Now I can check the protocol while traveling to the home. I'm more
              confident in my decisions."
            </p>
            <footer className="text-body-lg text-white/90">
              — ANM, Uttar Pradesh
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* SECTION 6: APPROACH (Collapsible Technical Details) */}
      <section className="py-20 bg-background">
        <div className="max-w-text mx-auto px-6">
          <h2 className="font-display text-h2 text-text-primary mb-8">Approach</h2>

          <details
            className="group"
            open={techDetailsOpen}
            onToggle={(e) => setTechDetailsOpen(e.target.open)}
          >
            <summary className="cursor-pointer list-none">
              <div className="flex items-center justify-between p-6 bg-surface border border-border rounded-xl hover:border-brand-primary transition-colors">
                <span className="text-h3 font-display text-text-primary">
                  Tech Stack
                </span>
                <svg
                  className="w-6 h-6 text-text-secondary transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </summary>

            <div className="mt-6 space-y-6">
              {/* Tech Stack Items */}
              <div className="bg-surface p-8 rounded-xl border border-border">
                <h3 className="font-body text-body-lg font-semibold text-text-primary mb-4">
                  Retrieval-Augmented Generation (RAG)
                </h3>
                <p className="text-body text-text-secondary">
                  Grounds responses in validated ARMMAN training protocols and NHM guidelines
                </p>
              </div>

              <div className="bg-surface p-8 rounded-xl border border-border">
                <h3 className="font-body text-body-lg font-semibold text-text-primary mb-4">
                  Multi-stage LLM Architecture
                </h3>
                <p className="text-body text-text-secondary">
                  Combines larger models for accuracy with smaller models for latency optimization
                </p>
              </div>

              <div className="bg-surface p-8 rounded-xl border border-border">
                <h3 className="font-body text-body-lg font-semibold text-text-primary mb-4">
                  Custom ASR/TTS Pipeline
                </h3>
                <p className="text-body text-text-secondary">
                  Fine-tuned for Indic accents and rural audio quality (Hindi, Telugu)
                </p>
              </div>

              <div className="bg-surface p-8 rounded-xl border border-border">
                <h3 className="font-body text-body-lg font-semibold text-text-primary mb-4">
                  WhatsApp Business API
                </h3>
                <p className="text-body text-text-secondary">
                  Deploys on the platform ANMs already use daily—no new app adoption required
                </p>
              </div>

              <div className="bg-surface p-8 rounded-xl border border-border">
                <h3 className="font-body text-body-lg font-semibold text-text-primary mb-4">
                  Human-in-the-Loop Validation
                </h3>
                <p className="text-body text-text-secondary">
                  Medical officers review critical queries; continuous expert auditing for quality assurance
                </p>
              </div>

              {/* Challenges */}
              <div className="bg-brand-light/20 p-8 rounded-xl border-l-4 border-brand-primary">
                <h3 className="font-display text-h3 text-text-primary mb-6">Challenges</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-body text-body-lg font-semibold text-text-primary mb-3">
                      Latency
                    </h4>
                    <ul className="space-y-2 text-body text-text-secondary">
                      <li className="flex gap-2">
                        <span className="text-brand-primary">•</span>
                        <span>Reduced text response time: 25s → 10s</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-brand-primary">•</span>
                        <span>Reduced audio response time: 50s → 18s</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-brand-primary">•</span>
                        <span>Optimized prompts, smaller models where possible, non-LLM approaches when appropriate</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-body text-body-lg font-semibold text-text-primary mb-3">
                      Localization
                    </h4>
                    <ul className="space-y-2 text-body text-text-secondary">
                      <li className="flex gap-2">
                        <span className="text-brand-primary">•</span>
                        <span>Voice-first interface (audio input/output preferred by users)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-brand-primary">•</span>
                        <span>ASR systems fine-tuned for Indic accents</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-brand-primary">•</span>
                        <span>Channel, content, and style adapted for ANM context</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-body text-body-lg font-semibold text-text-primary mb-3">
                      Evaluation
                    </h4>
                    <ul className="space-y-2 text-body text-text-secondary">
                      <li className="flex gap-2">
                        <span className="text-brand-primary">•</span>
                        <span>3-dimensional assessment: Accuracy, Reliability, Style & Vocab</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-brand-primary">•</span>
                        <span>Expert evaluation on ANM quizzes/exams</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-brand-primary">•</span>
                        <span>Domain expert validation for consistency, correctness, clarity, citation</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-brand-primary">•</span>
                        <span>Continuous user feedback integration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Safety & Compliance */}
              <div className="bg-surface p-8 rounded-xl border border-border">
                <h3 className="font-display text-h3 text-text-primary mb-6">Safety & Compliance</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-body font-semibold text-text-primary mb-2">
                      Grounded in Validated Protocols
                    </h4>
                    <p className="text-body-sm text-text-secondary">
                      All responses traceable to ARMMAN's clinically validated training materials
                    </p>
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-text-primary mb-2">
                      Explicit Escalation Pathways
                    </h4>
                    <p className="text-body-sm text-text-secondary">
                      Low-confidence or high-risk queries automatically routed to medical experts
                    </p>
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-text-primary mb-2">
                      Privacy by Design
                    </h4>
                    <p className="text-body-sm text-text-secondary">
                      Compliant with India's DPDP Act and WHO digital health standards
                    </p>
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-text-primary mb-2">
                      Continuous Quality Monitoring
                    </h4>
                    <p className="text-body-sm text-text-secondary">
                      Expert evaluation of random sample (500 queries audited) shows 97% satisfactory responses
                    </p>
                  </div>
                </div>
              </div>

              {/* Partnership */}
              <div className="bg-surface p-8 rounded-xl border border-border">
                <h3 className="font-display text-h3 text-text-primary mb-6">Partnership</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-body-sm text-text-tertiary mb-1">Lead Partner</div>
                    <div className="text-body text-text-primary">
                      ARMMAN — India's leading maternal and child health non-profit
                    </div>
                  </div>
                  <div>
                    <div className="text-body-sm text-text-tertiary mb-1">Technology Partner</div>
                    <div className="text-body text-text-primary">
                      ARTPARK (AI & Robotics Technology Park) @ IISc Bangalore — Applied AI research and deployment
                    </div>
                  </div>
                  <div>
                    <div className="text-body-sm text-text-tertiary mb-1">Funding Partners</div>
                    <ul className="space-y-1 text-body text-text-primary">
                      <li>Gates Foundation</li>
                      <li>BIRAC (Biotechnology Industry Research Assistance Council)</li>
                      <li>The Agency Fund</li>
                      <li>Google.org</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-body-sm text-text-tertiary mb-1">Geographic Coverage</div>
                    <ul className="space-y-1 text-body text-text-secondary">
                      <li className="flex gap-2">
                        <span className="text-brand-primary">•</span>
                        <span><strong className="text-text-primary">Deployed:</strong> 8 districts in Uttar Pradesh, 32 districts in Telangana</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-brand-primary">•</span>
                        <span><strong className="text-text-primary">Pilot:</strong> Maharashtra</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* SECTION 7: ROADMAP */}
      <section className="py-20 bg-surface">
        <div className="max-w-text mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-h2 text-text-primary mb-12">Roadmap for the Future</h2>

            <div className="space-y-8">
              <div className="bg-background p-8 rounded-xl border-l-4 border-brand-primary">
                <h3 className="font-body text-body-lg font-semibold text-text-primary mb-4">
                  Immediate (Q1-Q2 2025)
                </h3>
                <ul className="space-y-2 text-body text-text-secondary">
                  <li className="flex gap-2">
                    <span className="text-brand-primary">→</span>
                    <span>Scale to 12,000+ ANMs across UP, Telangana, and new states</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-primary">→</span>
                    <span>Launch local caching to reduce average cost and latency</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background p-8 rounded-xl border-l-4 border-brand-primary">
                <h3 className="font-body text-body-lg font-semibold text-text-primary mb-4">
                  Near-term (2026)
                </h3>
                <ul className="space-y-2 text-body text-text-secondary">
                  <li className="flex gap-2">
                    <span className="text-brand-primary">→</span>
                    <span>Voice-first full deployment (currently text-heavy)</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 8: LEARNINGS */}
      <section className="py-20 bg-background">
        <div className="max-w-text mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-h2 text-text-primary mb-12">Learnings & Best Practices</h2>

            {/* What We Learned */}
            <div className="mb-12">
              <h3 className="font-display text-h3 text-text-primary mb-6">What We Learned</h3>

              <div className="space-y-6">
                <div className="bg-surface p-6 rounded-xl">
                  <h4 className="font-body text-body-lg font-semibold text-brand-primary mb-3">
                    Latency Matters
                  </h4>
                  <p className="text-body text-text-secondary">
                    Users prefer conversational speed; optimizing from 50s to 18s (audio) was
                    critical for adoption
                  </p>
                </div>

                <div className="bg-surface p-6 rounded-xl">
                  <h4 className="font-body text-body-lg font-semibold text-brand-primary mb-3">
                    Voice is Essential
                  </h4>
                  <p className="text-body text-text-secondary">
                    ANMs overwhelmingly prefer audio input/output—hands-free while on motorcycles,
                    less literacy-dependent
                  </p>
                </div>

                <div className="bg-surface p-6 rounded-xl">
                  <h4 className="font-body text-body-lg font-semibold text-brand-primary mb-3">
                    Localization is Hard
                  </h4>
                  <p className="text-body text-text-secondary">
                    ASR systems struggle with Indic accents; channel, content, and style all
                    require deep customization
                  </p>
                </div>

                <div className="bg-surface p-6 rounded-xl">
                  <h4 className="font-body text-body-lg font-semibold text-brand-primary mb-3">
                    Clinical Validation is Time-Consuming but Non-Negotiable
                  </h4>
                  <p className="text-body text-text-secondary">
                    Expert vetting ensures safety but requires sustained medical officer engagement
                  </p>
                </div>

                <div className="bg-surface p-6 rounded-xl">
                  <h4 className="font-body text-body-lg font-semibold text-brand-primary mb-3">
                    Escalation Design Drives Trust
                  </h4>
                  <p className="text-body text-text-secondary">
                    Low escalation rates (&lt;20%) show system reliability; transparent escalation
                    builds user confidence
                  </p>
                </div>
              </div>
            </div>

            {/* Field Impact Assessment */}
            <div className="bg-brand-light/20 p-8 rounded-xl">
              <h3 className="font-display text-h3 text-text-primary mb-6">
                Field Impact Assessment
              </h3>
              <p className="text-body text-text-secondary mb-6">
                Pilot with 50 ANMs provided empirical evidence on:
              </p>
              <ul className="space-y-2 text-body text-text-secondary mb-8">
                <li className="flex gap-2">
                  <span className="text-brand-primary">✓</span>
                  <span>Usability in rural, low-connectivity environments</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-primary">✓</span>
                  <span>Acceptance by frontline workers and supervisors</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-primary">✓</span>
                  <span>Readiness for national scale-up</span>
                </li>
              </ul>

              <h4 className="font-body text-body-lg font-semibold text-text-primary mb-4">
                3 Dimensions of Continuous Evaluation:
              </h4>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">Accuracy</div>
                    <div className="text-body-sm text-text-secondary">
                      Expert evaluation on ANM quizzes and exams
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">Reliability</div>
                    <div className="text-body-sm text-text-secondary">
                      Assessment of consistency, correctness, clarity, citation
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">Style & Vocabulary</div>
                    <div className="text-body-sm text-text-secondary">
                      User feedback on response quality and understandability
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9: CTA */}
      <section className="py-24 bg-gradient-to-br from-brand-primary to-teal-700">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-display text-white mb-6">
              Ready to Scale Maternal Health AI?
            </h2>
            <p className="text-body-lg text-white/90 mb-8">
              We're looking for State Health Missions, NGO Partners, Funders, and Researchers.
              This is a proven system—97% accuracy, 98% user satisfaction, 30,000+ real-world queries answered.
            </p>
            <Link
              to="/#contact"
              className="inline-block px-8 py-4 bg-white text-brand-primary font-medium rounded-full hover:bg-white/90 transition-all hover:-translate-y-1 shadow-lg"
            >
              Partner With Us →
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ProjectHRP;
