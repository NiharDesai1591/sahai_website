import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const agents = [
  {
    id: 'sakhi',
    name: 'Sakhi',
    subtitle: 'The Voice in the Pocket',
    role: 'On-the-Job Support Agent | Orchestrator',
    color: 'teal',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    description: [
      "A fast, voice-to-voice interface that provides real-time guidance in local dialects. Sakhi handles live conversation and serves as the front-facing personality the worker actually talks to.",
      "More than an interface, Sakhi is the orchestration layer—a DPI Workflow engine that routes intent to specialized AI Blocks and coordinates multi-step service delivery."
    ],
    aiBlocks: ['orchestrate_workflow()', 'route_intent()', 'synthesize_response()'],
    instantiations: [
      'Maternal health support for ASHAs in UP',
      'Immunization protocol guide for ANMs in Karnataka',
      'Nutrition counseling for AWWs in Bihar'
    ],
  },
  {
    id: 'guru',
    name: 'Guru',
    subtitle: 'The Walking Supervisor',
    role: 'Knowledge & Learning Agent',
    color: 'amber',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    description: [
      "Trained on NHM protocols, training curricula, and verified medical guidelines. Guru is as good as (or better than) a senior supervisor in knowledge—available 24/7, in any language, without judgment.",
      "Guru exposes callable AI Blocks and shifts training from episodic classrooms to continuous, on-the-job mastery."
    ],
    aiBlocks: ['retrieve_protocol()', 'explain_guideline()', 'assess_risk_factors()'],
    instantiations: [
      'High-risk pregnancy protocols for Maharashtra ANMs',
      'ICDS nutrition guidelines for Chhattisgarh supervisors',
      'Mental health counseling training for Assam CHWs'
    ],
  },
  {
    id: 'clerk',
    name: 'Clerk',
    subtitle: 'The Paperwork Machine',
    role: 'Form-Filling & Action Agent',
    color: 'blue',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    description: [
      "The action-taker. Clerk talks to software systems, knows how to connect APIs and apps, and completes the administrative loop. When the conversation is done, Clerk submits forms, updates registers, syncs records, and leaves an auditable trail."
    ],
    aiBlocks: ['submit_form()', 'update_registry()', 'book_referral()', 'sync_records()'],
    instantiations: [
      'Multi-system form automation for Telangana health workers',
      'ICDS referral booking for Rajasthan AWWs',
      'ANC register updates for UP ANMs'
    ],
    quote: "Done—I'll update the 6 relevant forms: ANC register, RCH portal, ICDS referral, immunization tracker, nutrition log, and MO summary."
  },
  {
    id: 'analyst',
    name: 'Analyst',
    subtitle: 'The Ambient Brain',
    role: 'Data Interaction Agent',
    color: 'rose',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    description: [
      "The silent layer that reads dashboards, forms, and logs. Analyst surfaces gaps (\"3 high-risk cases haven't been visited this week\"), flags inconsistencies, and enables supervisors and program managers to talk to their data instead of staring at tables."
    ],
    aiBlocks: ['surface_gaps()', 'detect_inconsistency()', 'generate_summary()'],
    instantiations: [
      'Supervisory dashboards for Karnataka block coordinators',
      'Data quality checks for Bihar M&E teams',
      'Beneficiary tracking for MP ASHA facilitators'
    ],
  },
];

const colorClasses = {
  teal: {
    bg: 'bg-brand-light',
    text: 'text-brand-primary',
    border: 'border-brand-primary',
    hoverBg: 'hover:bg-brand-light/80',
  },
  amber: {
    bg: 'bg-amber-100',
    text: 'text-amber-600',
    border: 'border-amber-500',
    hoverBg: 'hover:bg-amber-50',
  },
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    border: 'border-blue-500',
    hoverBg: 'hover:bg-blue-50',
  },
  rose: {
    bg: 'bg-rose-100',
    text: 'text-rose-600',
    border: 'border-rose-500',
    hoverBg: 'hover:bg-rose-50',
  },
};

// Compact Agent Card with vertical layout
const CompactAgentCard = ({ agent, onClick }) => {
  const colors = colorClasses[agent.color];

  return (
    <motion.button
      onClick={onClick}
      className={`flex flex-col items-center text-center px-6 py-6 rounded-xl border border-border bg-surface ${colors.hoverBg} transition-all duration-200 cursor-pointer hover:shadow-md min-w-[180px]`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Icon */}
      <div className={`w-14 h-14 rounded-full ${colors.bg} flex items-center justify-center mb-4`}>
        <span className={colors.text}>{agent.icon}</span>
      </div>

      {/* Name */}
      <h4 className="font-display text-xl text-text-primary mb-1">{agent.name}</h4>

      {/* Subtitle */}
      <p className={`text-xs ${colors.text} font-semibold uppercase tracking-wider mb-2`}>{agent.subtitle}</p>

      {/* Role */}
      <p className="text-body-sm text-text-tertiary">{agent.role}</p>
    </motion.button>
  );
};

// Full Agent Modal/Popup
const AgentModal = ({ agent, onClose }) => {
  const colors = colorClasses[agent.color];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="bg-surface rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`p-6 border-b border-border ${colors.bg}`}>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center">
                  <span className={colors.text}>{agent.icon}</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-text-primary">{agent.name}</h3>
                  <p className={`text-sm ${colors.text} font-semibold`}>{agent.subtitle}</p>
                  <p className="text-xs text-text-tertiary mt-1">{agent.role}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/50 transition-colors"
              >
                <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6">
            {/* Description */}
            <div className="space-y-3">
              {agent.description.map((para, idx) => (
                <p key={idx} className="text-body text-text-secondary leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* AI Blocks */}
            <div className="bg-background p-4 rounded-lg">
              <p className="text-body-sm font-semibold text-text-primary mb-3">
                AI Blocks Exposed:
              </p>
              <div className="flex flex-wrap gap-2">
                {agent.aiBlocks.map((block, idx) => (
                  <code key={idx} className="font-mono text-body-sm bg-surface px-3 py-1 rounded border border-border">
                    {block}
                  </code>
                ))}
              </div>
            </div>

            {/* Instantiations */}
            <div className="border-t border-border pt-4">
              <p className="text-body-sm font-semibold text-text-primary mb-3">
                Example Instantiations:
              </p>
              <ul className="space-y-2 text-body-sm text-text-secondary">
                {agent.instantiations.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className={colors.text}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote (optional) */}
            {agent.quote && (
              <div className={`${colors.bg} p-4 rounded-lg border-l-4 ${colors.border}`}>
                <p className="text-body-sm text-text-primary italic">
                  "{agent.quote}"
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const AgentPersonas = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);

  return (
    <section id="agents" className="section-padding bg-background">
      <div className="max-content">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-xl md:text-2xl text-text-secondary mb-2"
          >
            Our Architecture
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-3xl md:text-display mb-4"
          >
            Four Personas. <span className="text-brand-primary italic">Infinite Configurations.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-body-lg text-text-secondary max-w-3xl mx-auto"
          >
            These are personas, not products. Each has many instantiations—purpose-built
            for the specific roles, geography, and programs. One architecture, adaptable to context.
          </motion.p>
        </div>

        {/* Compact Agent Cards - Single Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {agents.map((agent) => (
            <CompactAgentCard
              key={agent.id}
              agent={agent}
              onClick={() => setSelectedAgent(agent)}
            />
          ))}
        </motion.div>

        {/* Click hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-body-sm text-text-tertiary mt-6"
        >
          Click on any agent to learn more
        </motion.p>
      </div>

      {/* Agent Modal */}
      {selectedAgent && (
        <AgentModal
          agent={selectedAgent}
          onClose={() => setSelectedAgent(null)}
        />
      )}
    </section>
  );
};

export default AgentPersonas;
