import { motion } from 'framer-motion';

const ctaCards = [
  {
    title: 'Funders',
    description: 'Who share this vision of AI-ready public health infrastructure',
    link: '#',
    linkText: 'Get in touch'
  },
  {
    title: 'Partners',
    description: "With programs at scale—NGOs, implementing orgs, state health missions",
    link: '#',
    linkText: 'Partner with us'
  },
  {
    title: 'Government',
    description: 'Stakeholders who see how this accelerates DPI-AI adoption',
    link: '#',
    linkText: 'Learn more'
  },
  {
    title: 'Researchers',
    description: 'Who want to work on hard, meaningful problems',
    link: '#',
    linkText: 'Join the team'
  }
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-brand-primary to-teal-700 text-white py-24">
      <div className="max-content px-6">
        {/* Main CTA Section */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-display mb-8"
          >
            Join the Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-body-lg max-w-2xl mx-auto mb-12 text-white/90"
          >
            We're looking for partners who share this vision of building AI-ready
            public health infrastructure.
          </motion.p>

          {/* CTA Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16"
          >
            {ctaCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all group"
              >
                <h3 className="font-body text-body-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-body-sm text-white/80 mb-4">
                  {card.description}
                </p>
                <a href={card.link} className="inline-flex items-center gap-2 text-body-sm font-medium group-hover:gap-3 transition-all">
                  {card.linkText}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Vision Statements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/20 pt-12 space-y-8 max-w-3xl mx-auto text-center"
        >
          <blockquote className="text-h3 font-display italic text-white/95">
            "If DPI was the foundation, AI Blocks and DPI Workflows are the
            scaffolding for what comes next."
          </blockquote>

          <blockquote className="text-h3 font-display italic text-white/95">
            "If we do this right, as AI scales exponentially, health worker
            capability scales with it. The inequity gap closes at the same rate."
          </blockquote>
        </motion.div>

        {/* Footer Info */}
        <div className="border-t border-white/20 mt-16 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo/Brand */}
            <div>
              <h3 className="font-display text-h2 mb-2">SAHAI</h3>
              <p className="text-body-sm text-white/80">A Health@ARTPARK Initiative</p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-8">
              <a href="#" className="text-body-sm hover:text-white/80 transition-colors">GitHub</a>
              <a href="#" className="text-body-sm hover:text-white/80 transition-colors">LinkedIn</a>
              <a href="#" className="text-body-sm hover:text-white/80 transition-colors">Publications</a>
              <a href="#" className="text-body-sm hover:text-white/80 transition-colors">Contact</a>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-body-sm text-white/60">
              &copy; {new Date().getFullYear()} SAHAI. Building Public Agents for India's health system.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
