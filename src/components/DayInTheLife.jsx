import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const moments = [
  {
    time: '08:00',
    location: 'PHC Classroom',
    narrative: 'The day begins with a training session. Instead of passive lectures, Guru transforms protocols into interactive scenarios. Workers practice handling emergencies before encountering them in the field.',
    quote: 'Now I can practice scenarios before visiting homes',
    quotee: 'ASHA Worker, Karnataka',
    agent: 'guru',
    color: 'accent-guru',
  },
  {
    time: '12:00',
    location: 'On the Move',
    narrative: 'Between villages, Sakhi provides context on today\'s visits. She reminds the worker of pending follow-ups, high-risk cases, and key health indicators to watch for each beneficiary.',
    quote: 'Sakhi reminds me of each case while I travel between villages',
    quotee: 'ANM, Madhya Pradesh',
    agent: 'sakhi',
    color: 'accent-sakhi',
  },
  {
    time: '14:00',
    location: 'The Home Visit',
    narrative: 'During the home visit, technology fades into the background. The worker focuses on care while the system quietly captures data through natural conversation. Privacy is paramount—local models, instant erasure.',
    quote: 'I can focus on the mother, not on filling forms',
    quotee: 'ASHA Worker, Rajasthan',
    agent: 'all',
    color: 'accent-primary',
    technicalNote: 'Local models, instant erasure, privacy-first design',
  },
  {
    time: '19:00',
    location: 'Closing the Loop',
    narrative: 'Back at the desk, Clerk has already updated all registers and portals. Analyst flags tomorrow\'s priorities. The worker reviews a clean summary instead of wrestling with paperwork.',
    quote: 'What used to take 2 hours now takes 10 minutes',
    quotee: 'ANM, Bihar',
    agent: 'clerk',
    color: 'accent-clerk',
    additionalNote: 'Clerk auto-fills 6 forms. Analyst flags tomorrow\'s priority.',
  },
];

export default function DayInTheLife() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  return (
    <section id="day-in-life" className="section-padding bg-paper relative overflow-hidden" ref={sectionRef}>
      <div className="max-content relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-20"
        >
          <h2 className="font-display text-3xl lg:text-section text-charcoal mb-4">
            08:00 to 20:00: The Agent-Augmented Day
          </h2>
          <p className="font-body text-lg lg:text-body-lg text-slate max-w-2xl">
            Follow a frontline health worker through a typical day, empowered by AI companions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Phone Mockup */}
          <div className="lg:sticky lg:top-32 order-2 lg:order-1">
            <div className="relative w-64 sm:w-72 lg:w-80 h-[500px] sm:h-[550px] lg:h-[600px] mx-auto bg-charcoal rounded-[3rem] border-4 border-slate p-3 shadow-2xl">
              {/* Phone notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />

              {/* Phone content */}
              <div className="h-full bg-cream rounded-[2.25rem] overflow-hidden pt-8 px-4 pb-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="h-full flex flex-col"
                  >
                    {/* Time display */}
                    <div className="text-center mb-4">
                      <p className={`font-mono text-3xl lg:text-4xl font-bold text-${moments[activeIndex].color}`}>
                        {moments[activeIndex].time}
                      </p>
                      <p className="font-mono text-xs text-muted uppercase tracking-wider mt-1">
                        {moments[activeIndex].location}
                      </p>
                    </div>

                    {/* Agent icon */}
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-${moments[activeIndex].color}/10 flex items-center justify-center`}>
                      {moments[activeIndex].agent === 'all' ? (
                        <div className="grid grid-cols-2 gap-1">
                          <div className="w-3 h-3 rounded-full bg-accent-sakhi" />
                          <div className="w-3 h-3 rounded-full bg-accent-guru" />
                          <div className="w-3 h-3 rounded-full bg-accent-clerk" />
                          <div className="w-3 h-3 rounded-full bg-accent-analyst" />
                        </div>
                      ) : (
                        <div className={`w-6 h-6 rounded-full bg-${moments[activeIndex].color}`} />
                      )}
                    </div>

                    {/* Quote */}
                    <div className="flex-1 flex flex-col justify-center">
                      <blockquote className={`text-center px-2 border-l-2 border-${moments[activeIndex].color}`}>
                        <p className="font-body text-sm lg:text-base text-charcoal italic">
                          "{moments[activeIndex].quote}"
                        </p>
                        <footer className="text-muted mt-2 text-xs">
                          — {moments[activeIndex].quotee}
                        </footer>
                      </blockquote>
                    </div>

                    {/* Technical note if exists */}
                    {moments[activeIndex].technicalNote && (
                      <div className="mt-4 p-3 rounded-xl bg-paper border border-border">
                        <p className="font-mono text-xs text-muted text-center">
                          {moments[activeIndex].technicalNote}
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Content - Scrolls */}
          <div className="space-y-8 lg:space-y-12 order-1 lg:order-2">
            {moments.map((moment, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                onViewportEnter={() => setActiveIndex(idx)}
                className={`space-y-4 p-6 rounded-2xl transition-all duration-300 cursor-pointer border ${
                  activeIndex === idx
                    ? 'bg-paper border-border shadow-md'
                    : 'bg-transparent border-transparent hover:bg-cream'
                }`}
                onClick={() => setActiveIndex(idx)}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-mono text-2xl lg:text-3xl font-bold ${
                    activeIndex === idx ? `text-${moment.color}` : 'text-muted'
                  }`}>
                    {moment.time}
                  </span>
                  <span className={`font-body text-body uppercase tracking-wider ${
                    activeIndex === idx ? `text-${moment.color}` : 'text-muted'
                  }`}>
                    {moment.location}
                  </span>
                </div>

                <p className={`font-body text-body-lg ${
                  activeIndex === idx ? 'text-charcoal' : 'text-slate'
                }`}>
                  {moment.narrative}
                </p>

                {moment.additionalNote && activeIndex === idx && (
                  <p className={`font-mono text-technical text-${moment.color}`}>
                    {moment.additionalNote}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Scrubber */}
        <div className="mt-12 lg:mt-20">
          <div className="h-2 bg-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent-guru via-accent-sakhi to-accent-clerk rounded-full"
              initial={{ width: '25%' }}
              animate={{ width: `${(activeIndex + 1) * 25}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="flex justify-between mt-2">
            {moments.map((moment, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`font-mono text-xs transition-colors ${
                  activeIndex >= idx ? `text-${moment.color}` : 'text-muted'
                }`}
              >
                {moment.time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
