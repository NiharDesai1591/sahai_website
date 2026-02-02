import { motion } from 'framer-motion';

const glowColorMap = {
  sakhi: 'glow-sakhi',
  guru: 'glow-guru',
  clerk: 'glow-clerk',
  analyst: 'glow-analyst',
};

const bgGradientMap = {
  sakhi: 'from-glow-sakhi/20',
  guru: 'from-glow-guru/20',
  clerk: 'from-glow-clerk/20',
  analyst: 'from-glow-analyst/20',
};

export default function AgentCard({ agent, onOpenModal }) {
  const glowColor = glowColorMap[agent.colorKey];
  const bgGradient = bgGradientMap[agent.colorKey];

  return (
    <motion.div
      className="group relative p-6 lg:p-8 bg-slate/50 backdrop-blur rounded-3xl border border-silver/10 cursor-pointer overflow-hidden"
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3 }}
      onClick={() => onOpenModal(agent)}
    >
      {/* Glow Effect on Hover */}
      <div className={`absolute inset-0 bg-gradient-radial ${bgGradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

      <div className="relative z-10">
        {/* Agent Icon */}
        <div className={`w-14 h-14 lg:w-16 lg:h-16 mb-5 lg:mb-6 rounded-2xl bg-${glowColor}/20 flex items-center justify-center text-${glowColor}`}>
          {agent.icon}
        </div>

        <h3 className="font-display text-xl lg:text-subsection text-silver mb-2">
          {agent.name}
        </h3>
        <p className={`font-body text-technical text-${glowColor} uppercase mb-4 tracking-wider`}>
          {agent.tagline}
        </p>
        <p className="font-body text-body text-silver/70 mb-6">
          {agent.description}
        </p>

        {/* Technical Spec (shows on hover) */}
        <div className="font-mono text-xs lg:text-technical text-silver/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className={`text-${glowColor}`}>TECH:</span> {agent.tech}
        </div>

        <button className={`mt-4 text-${glowColor} text-body font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2`}>
          See it in action
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
