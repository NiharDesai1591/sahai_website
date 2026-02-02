import { motion } from 'framer-motion';

const colorMap = {
  sakhi: {
    bg: 'bg-accent-sakhi/10',
    text: 'text-accent-sakhi',
    border: 'border-accent-sakhi/20',
    hoverBorder: 'hover:border-accent-sakhi/40',
  },
  guru: {
    bg: 'bg-accent-guru/10',
    text: 'text-accent-guru',
    border: 'border-accent-guru/20',
    hoverBorder: 'hover:border-accent-guru/40',
  },
  clerk: {
    bg: 'bg-accent-clerk/10',
    text: 'text-accent-clerk',
    border: 'border-accent-clerk/20',
    hoverBorder: 'hover:border-accent-clerk/40',
  },
  analyst: {
    bg: 'bg-accent-analyst/10',
    text: 'text-accent-analyst',
    border: 'border-accent-analyst/20',
    hoverBorder: 'hover:border-accent-analyst/40',
  },
};

export default function AgentCard({ agent, onOpenModal }) {
  const colors = colorMap[agent.colorKey];

  return (
    <motion.div
      className={`group relative p-6 lg:p-8 bg-paper rounded-2xl border border-border cursor-pointer overflow-hidden shadow-sm ${colors.hoverBorder} hover:shadow-md transition-all duration-300`}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3 }}
      onClick={() => onOpenModal(agent)}
    >
      <div className="relative z-10">
        {/* Agent Icon */}
        <div className={`w-14 h-14 lg:w-16 lg:h-16 mb-5 lg:mb-6 rounded-2xl ${colors.bg} flex items-center justify-center ${colors.text}`}>
          {agent.icon}
        </div>

        <h3 className="font-display text-xl lg:text-subsection text-charcoal mb-2">
          {agent.name}
        </h3>
        <p className={`font-body text-technical ${colors.text} uppercase mb-4 tracking-wider`}>
          {agent.tagline}
        </p>
        <p className="font-body text-body text-slate mb-6">
          {agent.description}
        </p>

        {/* Technical Spec (shows on hover) */}
        <div className="font-mono text-xs lg:text-technical text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className={colors.text}>TECH:</span> {agent.tech}
        </div>

        <button className={`mt-4 ${colors.text} text-body font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2`}>
          See it in action
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
