import { motion } from 'framer-motion';

const projects = [
  {
    name: 'HRP Copilot',
    context: 'Maternal Health',
    description: 'AI-powered support for High-Risk Pregnancy identification and management. Integrates with RCH portal to provide real-time risk scoring and intervention recommendations.',
    metrics: {
      users: '2,500+',
      queries: '150K+',
      accuracy: '94%'
    },
    tech: 'LLM + Risk Scoring | RCH Integration | Voice Interface',
    states: ['Karnataka', 'Maharashtra', 'Madhya Pradesh'],
    status: 'Live',
    statusColor: 'accent-sakhi',
  },
  {
    name: 'NHM Protocol Mastery',
    context: 'Training & Capacity Building',
    description: 'Interactive training system covering NHM protocols, IMNCI guidelines, and state-specific health programs. Provides scenario-based learning with instant feedback.',
    metrics: {
      users: '10,000+',
      queries: '500K+',
      completion: '85%'
    },
    tech: 'RAG System | Adaptive Learning | Multi-lingual Support',
    states: ['Bihar', 'Uttar Pradesh', 'Rajasthan', 'Chhattisgarh'],
    status: 'Live',
    statusColor: 'accent-sakhi',
  },
  {
    name: 'Mental Health AI Trainer',
    context: 'Mental Health',
    description: 'Specialized training module for frontline workers to identify and provide first-level support for common mental health conditions including postpartum depression.',
    metrics: {
      users: '1,200+',
      queries: '45K+',
      confidence: '+40%'
    },
    tech: 'Scenario Simulation | Empathy Training | Referral Pathways',
    states: ['Karnataka', 'Telangana'],
    status: 'Pilot',
    statusColor: 'accent-guru',
  },
  {
    name: 'Kilkaari Integration',
    context: 'MCHN Services',
    description: 'Enhancement of the national Kilkaari program with AI-powered personalization. Delivers context-aware health messages based on beneficiary status and local health indicators.',
    metrics: {
      reach: '5M+',
      engagement: '+35%',
      callbacks: '+28%'
    },
    tech: 'Personalization Engine | IVR Integration | Analytics Dashboard',
    states: ['National Program'],
    status: 'Under Development',
    statusColor: 'accent-clerk',
  },
];

export default function ProjectGallery() {
  return (
    <section id="results" className="section-padding bg-cream">
      <div className="max-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <h2 className="font-display text-3xl lg:text-section text-charcoal mb-4">
            Projects & Impact
          </h2>
          <p className="font-body text-lg lg:text-body-lg text-slate max-w-2xl">
            Real deployments creating measurable impact across India's public health system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 lg:p-8 bg-paper rounded-2xl border border-border hover:border-accent-primary/30 hover:shadow-md transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display text-xl lg:text-subsection text-charcoal mb-1">
                    {project.name}
                  </h3>
                  <p className="font-mono text-technical text-muted uppercase">
                    {project.context}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-mono bg-${project.statusColor}/10 text-${project.statusColor}`}>
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="font-body text-body text-slate mb-6">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="text-center p-3 rounded-xl bg-cream border border-border">
                    <p className="font-display text-xl lg:text-2xl text-charcoal mb-1">{value}</p>
                    <p className="font-mono text-xs text-muted uppercase">{key}</p>
                  </div>
                ))}
              </div>

              {/* Tech */}
              <div className="mb-4">
                <p className="font-mono text-xs text-muted mb-1">TECH STACK</p>
                <p className="font-mono text-technical text-slate">{project.tech}</p>
              </div>

              {/* States */}
              <div className="flex flex-wrap gap-2">
                {project.states.map((state) => (
                  <span
                    key={state}
                    className="px-3 py-1 rounded-full text-xs font-body bg-cream text-slate border border-border"
                  >
                    {state}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
