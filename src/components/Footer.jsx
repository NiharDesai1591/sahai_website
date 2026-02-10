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
    <footer id="contact" className="bg-background py-24">
      <div className="max-content px-6">
        {/* Main CTA Section */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-display font-bold text-text-primary mb-8"
          >
            Join Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-body-lg max-w-2xl mx-auto mb-12 text-text-secondary"
          >
            We're looking for partners who share this vision of building AI-ready
            public health infrastructure.
          </motion.p>

          {/* CTA Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16"
          >
            {ctaCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-200 text-left group"
              >
                <h3 className="font-display text-body-lg font-bold text-text-primary mb-2">{card.title}</h3>
                <p className="text-body-sm text-text-secondary mb-4">
                  {card.description}
                </p>
                <a href={card.link} className="inline-flex items-center gap-2 text-body-sm font-medium text-text-primary hover:text-text-secondary group-hover:gap-3 transition-all duration-200">
                  {card.linkText}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Footer Info */}
        <div className="border-t border-border mt-16 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="font-display text-h2 font-bold text-text-primary mb-1">SAHAI</h3>
              <p className="text-body-sm text-text-tertiary">A Health@ARTPARK Initiative</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              <a href="#" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors duration-200">GitHub</a>
              <a href="#" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors duration-200">LinkedIn</a>
              <a href="#" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors duration-200">Publications</a>
              <a href="#" className="text-body-sm text-text-secondary hover:text-text-primary transition-colors duration-200">Contact</a>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-body-sm text-text-tertiary">
              &copy; {new Date().getFullYear()} SAHAI. Building Public Agents for India&apos;s health system.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
