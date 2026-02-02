import { motion } from 'framer-motion';

const partners = [
  { name: 'ARMMAN', type: 'NGO Partner' },
  { name: 'National Health Mission', type: 'Government' },
  { name: 'Karnataka Health Dept.', type: 'State Government' },
  { name: 'Bihar Health Dept.', type: 'State Government' },
  { name: 'Madhya Pradesh Health Dept.', type: 'State Government' },
  { name: 'UNICEF', type: 'International' },
];

const recognition = [
  {
    title: 'AI for Good Global Summit',
    organization: 'ITU & UN',
    year: '2024',
    type: 'Featured Project',
  },
  {
    title: 'Digital Public Goods Recognition',
    organization: 'DPGA',
    year: '2024',
    type: 'Certification',
  },
  {
    title: 'Healthcare Innovation Award',
    organization: 'NASSCOM',
    year: '2023',
    type: 'Award',
  },
  {
    title: 'ACL Conference Publication',
    organization: 'Association for Computational Linguistics',
    year: '2024',
    type: 'Publication',
  },
];

export default function PartnersRecognition() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-content">
        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="font-display text-3xl lg:text-section text-charcoal mb-4">
            Partners
          </h2>
          <p className="font-body text-lg lg:text-body-lg text-slate max-w-2xl mb-8 lg:mb-12">
            Working with government, NGOs, and international organizations to deploy at scale.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {partners.map((partner, idx) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-4 lg:p-6 rounded-2xl bg-paper border border-border text-center hover:border-accent-primary/30 transition-colors"
              >
                {/* Placeholder for logo */}
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-cream flex items-center justify-center border border-border">
                  <span className="font-display text-lg text-accent-primary">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <p className="font-body text-sm text-charcoal mb-1">{partner.name}</p>
                <p className="font-mono text-xs text-muted">{partner.type}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl lg:text-section text-charcoal mb-4">
            Recognition
          </h2>
          <p className="font-body text-lg lg:text-body-lg text-slate max-w-2xl mb-8 lg:mb-12">
            Awards, publications, and recognition from the global AI and healthcare community.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {recognition.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 lg:p-6 rounded-2xl bg-paper border border-border hover:border-accent-primary/30 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 rounded-full text-xs font-mono bg-accent-primary/10 text-accent-primary">
                    {item.year}
                  </span>
                  <span className="px-2 py-1 rounded-full text-xs font-mono bg-cream text-muted border border-border">
                    {item.type}
                  </span>
                </div>
                <h4 className="font-body text-lg text-charcoal mb-2 group-hover:text-accent-primary transition-colors">
                  {item.title}
                </h4>
                <p className="font-mono text-technical text-muted">
                  {item.organization}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
