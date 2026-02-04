import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="section-padding pb-8">
        <div className="max-content">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-brand-primary transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary"
          >
            About <span className="text-brand-primary italic">SAHAI</span>
          </motion.h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="section-padding pt-0">
        <div className="max-content space-y-24">

          {/* Section 1: Frontier Engineering Meets Field Reality */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl md:text-display text-text-primary">
              Frontier Engineering Meets <span className="text-brand-primary italic">Field Reality</span>
            </h2>

            <p className="text-body-lg text-text-primary leading-relaxed max-w-3xl">
              Building Public Agents for healthcare requires a rare combination:
              <strong> frontier AI capability</strong> and <strong> deep experience
              deploying in India's health system realities.</strong>
            </p>

            <p className="text-body-lg text-text-primary leading-relaxed">
              We bring both.
            </p>

            {/* Two Columns: Problems + Infrastructure */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-surface rounded-xl p-6 border border-border">
                <h3 className="font-body text-h3 text-text-primary mb-4">We Solve Hard Problems</h3>
                <ul className="space-y-3 text-body text-text-secondary">
                  <li className="flex gap-3">
                    <span className="text-brand-primary">•</span>
                    <span>Noisy audio in open-air settings</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-primary">•</span>
                    <span>Dialectal variation across 22 languages</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-primary">•</span>
                    <span>Intermittent connectivity in rural areas</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-primary">•</span>
                    <span>Users who've never interacted with AI before</span>
                  </li>
                </ul>
              </div>

              <div className="bg-surface rounded-xl p-6 border border-border">
                <h3 className="font-body text-h3 text-text-primary mb-4">We Build Reusable Infrastructure</h3>
                <ul className="space-y-3 text-body text-text-secondary">
                  <li className="flex gap-3">
                    <span className="text-brand-primary">•</span>
                    <span>Modular AI Blocks (Foundational + Sector-Specific)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-primary">•</span>
                    <span>DPI Workflow architectures</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-primary">•</span>
                    <span>Safety and evaluation frameworks aligned with DPI safeguards</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-brand-primary text-white p-6 rounded-xl max-w-2xl">
              <p className="text-body-lg italic">
                "The hard problems aren't the models. They're the last mile."
              </p>
            </div>

            <div className="border-l-4 border-brand-primary pl-6 max-w-3xl">
              <p className="text-body text-text-primary">
                <strong>This is applied AI research with deployment as the success
                metric—not papers, not demos.</strong>
              </p>
            </div>
          </motion.section>

          {/* Section 2: Building With Partners at Scale */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl md:text-display text-text-primary">
              Building <span className="text-brand-primary italic">With Partners</span> at Scale
            </h2>

            {/* Two Columns Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-surface rounded-xl p-6 border border-border">
                <h3 className="font-body text-h3 text-text-primary mb-4">What Partners Bring</h3>
                <ul className="space-y-3 text-body text-text-secondary">
                  <li className="flex gap-3">
                    <span className="text-brand-primary">→</span>
                    <span><strong>Programs at scale</strong>—access to health workers,
                    beneficiaries, ground truth</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-primary">→</span>
                    <span><strong>Deployment pathways</strong>—government relationships
                    and integration capabilities</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-primary">→</span>
                    <span><strong>Domain expertise</strong>—the workflows and context
                    that make systems work</span>
                  </li>
                </ul>
              </div>

              <div className="bg-surface rounded-xl p-6 border border-border">
                <h3 className="font-body text-h3 text-text-primary mb-4">What SAHAI Brings</h3>
                <ul className="space-y-3 text-body text-text-secondary">
                  <li className="flex gap-3">
                    <span className="text-brand-primary">→</span>
                    <span><strong>Frontier ML/LLM engineering</strong>—making agents
                    reliable in Indian languages</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-primary">→</span>
                    <span><strong>AI Block architectures</strong>—modular components
                    that orchestrate across government stacks</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-primary">→</span>
                    <span><strong>Safety frameworks</strong>—rigorous guardrails
                    built for healthcare</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* How Engagements Work */}
            <div className="bg-surface p-8 rounded-xl border border-border space-y-6 max-w-3xl">
              <h3 className="font-body text-h3 text-text-primary">How Engagements Work</h3>

              <p className="text-body text-text-secondary leading-relaxed">
                We <strong className="text-brand-primary">build to hand over</strong>.
                We <strong className="text-brand-primary">open source generously</strong>.
                We <strong className="text-brand-primary">publish what we learn</strong>.
              </p>

              <p className="text-body text-text-secondary leading-relaxed">
                Following the DPI ethos of reusable public goods, our AI Blocks and
                workflow templates are designed for portability. A maternal health
                workflow validated in UP can be adapted for Bihar.
              </p>

              <div className="bg-background p-6 rounded-lg border border-border">
                <p className="text-body font-semibold text-text-primary mb-3">
                  The goal is partner-owned scaled operations—not indefinite SAHAI dependency.
                </p>
                <p className="text-body-sm text-text-secondary">
                  This creates two reinforcing flywheels: Partners gain an independent
                  scaling engine they own and control, while SAHAI compounds learnings
                  across deployments—deepening the platform.
                </p>
              </div>
            </div>
          </motion.section>

        </div>
      </main>
    </div>
  );
};

export default About;
