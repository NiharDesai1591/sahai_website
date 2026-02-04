import { motion } from 'framer-motion';

const AgentCard = ({ agent }) => {
  const colorClasses = {
    teal: {
      iconBg: 'bg-brand-light',
      iconText: 'text-brand-primary',
      subtitleText: 'text-brand-primary',
      arrow: 'text-brand-primary',
      linkText: 'text-brand-primary',
    },
    amber: {
      iconBg: 'bg-amber-100',
      iconText: 'text-amber-600',
      subtitleText: 'text-amber-600',
      arrow: 'text-amber-600',
      linkText: 'text-amber-600',
    },
    blue: {
      iconBg: 'bg-blue-100',
      iconText: 'text-blue-600',
      subtitleText: 'text-blue-600',
      arrow: 'text-blue-600',
      linkText: 'text-blue-600',
    },
    rose: {
      iconBg: 'bg-rose-100',
      iconText: 'text-rose-600',
      subtitleText: 'text-rose-600',
      arrow: 'text-rose-600',
      linkText: 'text-rose-600',
    },
  };

  const colors = colorClasses[agent.color];

  return (
    <motion.div
      className="card group p-8 lg:p-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Icon */}
      <div className={`w-16 h-16 rounded-full ${colors.iconBg} flex items-center justify-center mb-6`}>
        {agent.icon}
      </div>

      {/* Title */}
      <h3 className="font-display text-h2 text-text-primary mb-2">
        {agent.name}
      </h3>

      {/* Subtitle */}
      <p className={`text-body-sm ${colors.subtitleText} font-semibold uppercase tracking-wider mb-4`}>
        {agent.subtitle}
      </p>

      {/* Role */}
      <p className="text-body-sm text-text-tertiary mb-6">
        {agent.role}
      </p>

      {/* Description paragraphs */}
      <div className="space-y-4 mb-6">
        {agent.description.map((para, idx) => (
          <p key={idx} className="text-body text-text-secondary leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      {/* AI Blocks */}
      <div className="bg-background p-4 rounded-lg mb-6">
        <p className="text-body-sm font-semibold text-text-primary mb-2">
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
              <span className={colors.arrow}>→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quote callout (optional) */}
      {agent.quote && (
        <div className={`mt-6 ${colors.iconBg} p-4 rounded-lg border-l-4 ${colors.iconText.replace('text', 'border')}`}>
          <p className="text-body-sm text-text-primary italic">
            "{agent.quote}"
          </p>
        </div>
      )}

      {/* CTA on hover */}
      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <a href="#" className={`${colors.linkText} font-medium inline-flex items-center gap-2`}>
          Learn more about {agent.name}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default AgentCard;
