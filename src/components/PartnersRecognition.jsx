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
    <section className="section-padding bg-ink">
      <div className="max-content">
        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="font-display text-3xl lg:text-section text-silver mb-4">
            Partners
          </h2>
          <p className="font-body text-lg lg:text-body-lg text-silver/70 max-w-2xl mb-8 lg:mb-12">
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
                className="p-4 lg:p-6 rounded-2xl bg-slate/30 border border-silver/10 text-center hover:border-silver/20 transition-colors"
              >
                {/* Placeholder for logo */}
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-silver/10 flex items-center justify-center">
                  <span className="font-display text-lg text-silver/50">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <p className="font-body text-sm text-silver mb-1">{partner.name}</p>
                <p className="font-mono text-xs text-silver/40">{partner.type}</p>
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
          <h2 className="font-display text-3xl lg:text-section text-silver mb-4">
            Recognition
          </h2>
          <p className="font-body text-lg lg:text-body-lg text-silver/70 max-w-2xl mb-8 lg:mb-12">
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
                className="p-5 lg:p-6 rounded-2xl bg-slate/30 border border-silver/10 hover:border-glow-sakhi/30 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 rounded-full text-xs font-mono bg-glow-sakhi/10 text-glow-sakhi">
                    {item.year}
                  </span>
                  <span className="px-2 py-1 rounded-full text-xs font-mono bg-silver/5 text-silver/50">
                    {item.type}
                  </span>
                </div>
                <h4 className="font-body text-lg text-silver mb-2 group-hover:text-glow-sakhi transition-colors">
                  {item.title}
                </h4>
                <p className="font-mono text-technical text-silver/50">
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
