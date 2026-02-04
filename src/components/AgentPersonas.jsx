import { motion } from 'framer-motion';
import AgentCard from './AgentCard';

const agents = [
  {
    id: 'sakhi',
    name: 'Sakhi',
    subtitle: 'The Voice in the Pocket',
    role: 'On-the-Job Support Agent | Orchestrator',
    color: 'teal',
    icon: (
      <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

const AgentPersonas = () => {
  return (
    <section id="agents" className="section-padding bg-background">
      <div className="max-content">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
            for specific roles, states, and programs. One architecture, adaptable to context.
          </motion.p>
        </div>

        {/* Agent Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {agents.map((agent, idx) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-surface border border-border rounded-2xl p-8 text-center"
        >
          <p className="text-body-lg text-text-primary">
            These aren't four separate products. They're <strong className="text-brand-primary">Public Agents
            orchestrating as one system</strong> through DPI Workflows.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AgentPersonas;
