import { motion } from 'framer-motion';

const partners = [
  { name: 'ARMMAN', geography: 'UP, Telangana, Maharashtra', focus: 'Maternal health' },
  { name: 'Piramal Foundation', geography: 'Bihar, Chhattisgarh, Assam', focus: 'Primary care' },
  { name: 'State NHM Programs', geography: 'Karnataka, Rajasthan, MP', focus: 'Protocol adherence' },
];

const states = ['Assam', 'Bihar', 'Chhattisgarh', 'Karnataka', 'MP', 'Maharashtra', 'Rajasthan', 'UP', 'Telangana'];

const WhyUsHowWeWork = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-content">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* LEFT: Why Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl md:text-display text-text-primary">
              Frontier Engineering Meets <span className="text-brand-primary italic">Field Reality</span>
            </h2>

            <p className="text-body-lg text-text-primary leading-relaxed">
              Building Public Agents for healthcare requires a rare combination:
              <strong> frontier AI capability</strong> and <strong> deep experience
              deploying in India's health system realities.</strong>
            </p>

            <p className="text-body-lg text-text-primary leading-relaxed">
              We bring both.
            </p>

            {/* Two Columns: Problems + Infrastructure */}
            <div className="space-y-6 mt-8">
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

            <div className="bg-brand-primary text-white p-6 rounded-xl">
              <p className="text-body-lg italic">
                "The hard problems aren't the models. They're the last mile."
              </p>
            </div>

            <div className="border-l-4 border-brand-primary pl-6">
              <p className="text-body text-text-primary">
                <strong>This is applied AI research with deployment as the success
                metric—not papers, not demos.</strong>
              </p>
            </div>
          </motion.div>

          {/* RIGHT: How We Work */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="font-display text-3xl md:text-display text-text-primary">
              Building <span className="text-brand-primary italic">With Partners</span> at Scale
            </h2>

            {/* Two Columns Grid */}
            <div className="grid grid-cols-1 gap-6">
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
            <div className="bg-background p-8 rounded-xl border border-border space-y-6">
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

              <div className="bg-surface p-6 rounded-lg border border-border">
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

            {/* Current Partners Table */}
            <div className="bg-surface rounded-xl overflow-hidden border border-border">
              <div className="bg-brand-primary text-white px-6 py-4">
                <h3 className="font-body text-h3">Where We're Building</h3>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 text-body-sm font-semibold text-text-primary">Partner</th>
                      <th className="text-left py-3 text-body-sm font-semibold text-text-primary">Geography</th>
                      <th className="text-left py-3 text-body-sm font-semibold text-text-primary">Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {partners.map((partner, idx) => (
                      <tr key={idx} className={idx < partners.length - 1 ? 'border-b border-border' : ''}>
                        <td className="py-4 text-body text-text-primary">{partner.name}</td>
                        <td className="py-4 text-body-sm text-text-secondary">{partner.geography}</td>
                        <td className="py-4 text-body-sm text-text-secondary">{partner.focus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Geographic Map Placeholder */}
            <div className="bg-surface rounded-xl p-8 border border-border text-center">
              <p className="text-body-sm text-text-tertiary mb-4">Active in 9 States</p>
              <div className="flex flex-wrap justify-center gap-3">
                {states.map((state, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-background rounded-full text-body-sm text-text-secondary"
                  >
                    {state}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsHowWeWork;
