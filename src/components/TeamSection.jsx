import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Research Team',
    role: 'AI & ML Engineers',
    description: 'Building the core AI systems that power our agents.',
    count: '8 members',
  },
  {
    name: 'Product Team',
    role: 'Design & Development',
    description: 'Creating intuitive interfaces for frontline workers.',
    count: '5 members',
  },
  {
    name: 'Field Operations',
    role: 'Deployment & Training',
    description: 'Working directly with health workers across states.',
    count: '12 members',
  },
  {
    name: 'Medical Advisory',
    role: 'Clinical Oversight',
    description: 'Ensuring medical accuracy and safety of all outputs.',
    count: '4 advisors',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="section-padding bg-paper">
      <div className="max-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <h2 className="font-display text-3xl lg:text-section text-charcoal mb-4">
            The Lab
          </h2>
          <p className="font-body text-lg lg:text-body-lg text-slate max-w-2xl mb-8">
            HealthAI is a research initiative at ARTPARK, the AI & Robotics Technology Park
            at the Indian Institute of Science (IISc), Bangalore.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <div className="px-4 py-2 rounded-full bg-cream border border-border">
              <span className="font-mono text-technical text-slate">ARTPARK @ IISc</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-cream border border-border">
              <span className="font-mono text-technical text-slate">Est. 2021</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-cream border border-border">
              <span className="font-mono text-technical text-slate">Bangalore, India</span>
            </div>
          </div>
        </motion.div>

        {/* Lab Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 lg:mb-16 p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-accent-primary/10 to-transparent border border-accent-primary/20"
        >
          <h3 className="font-display text-xl lg:text-subsection text-charcoal mb-4">
            Our Philosophy
          </h3>
          <p className="font-body text-lg text-charcoal mb-4 italic">
            "Applied Scientists building at the frontier"
          </p>
          <p className="font-body text-body text-slate">
            We believe the most impactful AI research happens at the intersection of
            cutting-edge technology and real-world deployment. Our team combines deep
            technical expertise with direct field experience, ensuring that every
            innovation is grounded in the realities of public health delivery.
          </p>
        </motion.div>

        {/* Team Structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((team, idx) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-cream border border-border text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-primary/10 flex items-center justify-center">
                <span className="font-display text-2xl text-accent-primary">{team.count.split(' ')[0]}</span>
              </div>
              <h4 className="font-body text-lg text-charcoal mb-1">{team.name}</h4>
              <p className="font-mono text-technical text-accent-primary uppercase mb-3">{team.role}</p>
              <p className="font-body text-sm text-slate">{team.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
