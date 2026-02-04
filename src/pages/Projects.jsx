import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Agent badge configurations
const agentConfig = {
  sakhi: {
    name: 'Sakhi',
    color: 'bg-teal-100 text-teal-700 border-teal-200',
  },
  guru: {
    name: 'Guru',
    color: 'bg-amber-100 text-amber-700 border-amber-200',
  },
  clerk: {
    name: 'Clerk',
    color: 'bg-blue-100 text-blue-700 border-blue-200',
  },
  analyst: {
    name: 'Analyst',
    color: 'bg-rose-100 text-rose-700 border-rose-200',
  },
};

// Projects data with agent mappings
const projects = [
  {
    id: 'armman-maternal',
    partner: 'ARMMAN',
    title: 'Maternal Health Support',
    geography: 'UP, Telangana, Maharashtra',
    summary: 'Conversational assistant for ANMs delivering real-time clinical guidance, bite-sized personalized learning, and safe escalation to medical experts.',
    agents: ['sakhi', 'guru'],
    highlights: [
      'Low latency, low cost, accurate responses',
      'Curated, design-led responses',
      'Deployed in 3 languages',
    ],
  },
  {
    id: 'piramal-primary',
    partner: 'Piramal Foundation',
    title: 'Primary Care Support',
    geography: 'Bihar, Chhattisgarh, Assam',
    summary: 'Frontline worker support for primary care, nutrition counseling, and mental health services.',
    agents: ['sakhi', 'guru', 'clerk'],
    highlights: [
      'Nutrition counseling for AWWs',
      'ICDS guidelines access',
      'Mental health counseling training',
    ],
  },
  {
    id: 'nhm-protocol',
    partner: 'State NHM Programs',
    title: 'Protocol Adherence',
    geography: 'Karnataka, Rajasthan, MP',
    summary: 'Strengthening protocol adherence and supervisory capacity for state health missions.',
    agents: ['sakhi', 'guru', 'analyst'],
    highlights: [
      'Immunization protocol guidance',
      'Supervisory dashboards for coordinators',
      'Beneficiary tracking and gap analysis',
    ],
  },
];

// States where SAHAI is active
const states = ['Assam', 'Bihar', 'Chhattisgarh', 'Karnataka', 'MP', 'Maharashtra', 'Rajasthan', 'UP', 'Telangana'];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-surface rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {/* Card Header */}
      <div className="bg-brand-primary px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-white/80 text-sm font-medium">{project.partner}</span>
          <span className="text-white/60 text-sm">{project.geography}</span>
        </div>
        <h3 className="font-display text-xl text-white mt-1">{project.title}</h3>
      </div>

      {/* Card Body */}
      <div className="p-6 space-y-4">
        {/* Summary */}
        <p className="text-body text-text-secondary leading-relaxed">
          {project.summary}
        </p>

        {/* Agent Badges */}
        <div className="flex flex-wrap gap-2">
          {project.agents.map((agentId) => {
            const agent = agentConfig[agentId];
            return (
              <span
                key={agentId}
                className={`px-3 py-1 rounded-full text-sm font-medium border ${agent.color}`}
              >
                {agent.name}
              </span>
            );
          })}
        </div>

        {/* Highlights */}
        <div className="pt-4 border-t border-border">
          <p className="text-body-sm font-semibold text-text-primary mb-2">Key Features:</p>
          <ul className="space-y-1">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="text-body-sm text-text-secondary flex gap-2">
                <span className="text-brand-primary">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
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
            Where We're <span className="text-brand-primary italic">Building</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-body-lg text-text-secondary mt-4 max-w-2xl"
          >
            Active deployments across India, partnering with organizations to bring Public Agents to frontline health workers.
          </motion.p>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="section-padding pt-0">
        <div className="max-content">
          {/* Agent Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 p-6 bg-surface rounded-xl border border-border"
          >
            <p className="text-body-sm font-semibold text-text-primary mb-3">Our Agents:</p>
            <div className="flex flex-wrap gap-3">
              {Object.entries(agentConfig).map(([id, agent]) => (
                <div key={id} className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${agent.color}`}>
                    {agent.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Active States */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-surface rounded-xl p-8 border border-border text-center"
          >
            <p className="text-body font-semibold text-text-primary mb-4">Active in 9 States</p>
            <div className="flex flex-wrap justify-center gap-3">
              {states.map((state, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-background rounded-full text-body-sm text-text-secondary border border-border"
                >
                  {state}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
