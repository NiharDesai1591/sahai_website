import { motion } from 'framer-motion';

const DayInLife = () => {
  return (
    <section id="narrative" className="section-padding bg-white">
      <div className="max-content">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-label uppercase tracking-widest text-text-tertiary mb-3"
          >
            A Day in the Life
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-3xl md:text-display font-bold text-text-primary mb-4"
          >
            They work <span className="text-text-secondary italic">in sync</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-body-lg text-text-secondary max-w-3xl mx-auto"
          >
            These aren&apos;t four separate products. They&apos;re Public Agents orchestrating
            as one system through DPI Workflows.
          </motion.p>
        </div>

        {/* Day in Life Image - full width for sharpness */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center -mx-6"
        >
          <img
            src={import.meta.env.BASE_URL + 'dayinlife.png'}
            alt="A day in the life of a health worker with AI agents — from morning training through evening documentation"
            width={2816}
            height={1504}
            className="shadow-sm border border-border"
            style={{
              width: '100%',
              maxWidth: '1408px',
              height: 'auto',
              imageRendering: '-webkit-optimize-contrast',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DayInLife;
