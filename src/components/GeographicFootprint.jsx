import { motion } from 'framer-motion';

const states = [
  { name: 'Assam', users: '1,200+', status: 'Pilot' },
  { name: 'Bihar', users: '3,500+', status: 'Live' },
  { name: 'Chhattisgarh', users: '800+', status: 'Pilot' },
  { name: 'Karnataka', users: '4,200+', status: 'Live' },
  { name: 'Madhya Pradesh', users: '2,800+', status: 'Live' },
  { name: 'Maharashtra', users: '3,100+', status: 'Live' },
  { name: 'Rajasthan', users: '2,500+', status: 'Live' },
  { name: 'Uttar Pradesh', users: '5,200+', status: 'Live' },
  { name: 'Telangana', users: '1,800+', status: 'Pilot' },
];

const totalStats = {
  states: 9,
  districts: '120+',
  users: '25,000+',
  queries: '1.2M+',
};

export default function GeographicFootprint() {
  return (
    <section className="section-padding bg-slate/30">
      <div className="max-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <h2 className="font-display text-3xl lg:text-section text-silver mb-4">
            Geographic Footprint
          </h2>
          <p className="font-body text-lg lg:text-body-lg text-silver/70 max-w-2xl">
            Deployed across 9 states, supporting frontline health workers in India's most populous regions.
          </p>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16"
        >
          {Object.entries(totalStats).map(([key, value]) => (
            <div
              key={key}
              className="p-6 rounded-2xl bg-ink border border-silver/10 text-center"
            >
              <p className="font-display text-3xl lg:text-4xl text-glow-sakhi mb-2">{value}</p>
              <p className="font-mono text-technical text-silver/50 uppercase">{key}</p>
            </div>
          ))}
        </motion.div>

        {/* Map Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Stylized Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square max-w-md mx-auto lg:mx-0"
          >
            {/* India outline placeholder - simplified representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Simplified India shape */}
                <path
                  d="M50 10 L70 15 L75 25 L80 35 L75 45 L80 55 L70 65 L65 80 L50 90 L35 80 L25 70 L20 55 L25 45 L20 35 L30 25 L35 15 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-silver/20"
                />
                {/* State dots */}
                {[
                  { x: 75, y: 25, name: 'Assam' },
                  { x: 60, y: 35, name: 'Bihar' },
                  { x: 55, y: 50, name: 'Chhattisgarh' },
                  { x: 40, y: 65, name: 'Karnataka' },
                  { x: 45, y: 45, name: 'MP' },
                  { x: 35, y: 55, name: 'Maharashtra' },
                  { x: 35, y: 40, name: 'Rajasthan' },
                  { x: 50, y: 35, name: 'UP' },
                  { x: 50, y: 60, name: 'Telangana' },
                ].map((state, idx) => (
                  <motion.circle
                    key={state.name}
                    cx={state.x}
                    cy={state.y}
                    r="3"
                    className="fill-glow-sakhi"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  />
                ))}
              </svg>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-glow-sakhi/10 to-transparent rounded-full blur-3xl" />
          </motion.div>

          {/* State List */}
          <div className="space-y-3">
            {states.map((state, idx) => (
              <motion.div
                key={state.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-center justify-between p-4 rounded-xl bg-ink border border-silver/10 hover:border-glow-sakhi/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-glow-sakhi" />
                  <span className="font-body text-silver">{state.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-technical text-silver/60">{state.users} users</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-mono ${
                    state.status === 'Live'
                      ? 'bg-glow-sakhi/20 text-glow-sakhi'
                      : 'bg-glow-guru/20 text-glow-guru'
                  }`}>
                    {state.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
