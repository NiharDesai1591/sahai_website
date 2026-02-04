import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const timeSlots = [
  {
    time: '08:00',
    label: 'Morning',
    location: 'PHC Classroom',
    type: 'Interactive Learning',
    description: "Before the first home visit, Guru turns training into simulation. ASHAs ask \"what-if?\" questions and receive protocol-aligned answers instantly.",
    quote: "Now I can practice scenarios before visiting homes.",
    quotee: "ASHA, Karnataka",
    agents: [
      { name: 'Sakhi', role: 'voice', color: 'brand-primary' },
      { name: 'Guru', role: 'knowledge', color: 'amber-600' }
    ],
    phoneContent: {
      title: 'Training Mode',
      messages: [
        { from: 'worker', text: 'What if the mother has swelling in her feet?' },
        { from: 'guru', text: 'Pedal edema can indicate preeclampsia. Check BP immediately. If >140/90, refer urgently.' }
      ]
    }
  },
  {
    time: '12:00',
    label: 'On the Move',
    location: 'Between Villages',
    type: 'Route Intelligence',
    description: "Analyst provides a morning briefing: 3 high-priority cases flagged, optimal route suggested. Sakhi reminds of each beneficiary's history as the worker travels.",
    quote: "I know exactly who needs me most before I arrive.",
    quotee: "ANM, Madhya Pradesh",
    agents: [
      { name: 'Sakhi', role: 'voice', color: 'brand-primary' },
      { name: 'Analyst', role: 'data', color: 'rose-600' }
    ],
    phoneContent: {
      title: 'Priority Cases',
      messages: [
        { from: 'analyst', text: '3 high-priority visits today: Priya (missed 2 ANC), Sunita (GDM monitoring), Rekha (38 weeks)' },
        { from: 'sakhi', text: "Priya's home is 2km ahead. Her last BP was elevated." }
      ]
    }
  },
  {
    time: '14:00',
    label: 'The Visit',
    location: 'Beneficiary Home',
    type: 'Assisted Care Delivery',
    description: "During the visit, Sakhi guides through protocols via voice. When a high-risk indicator is detected, Guru provides immediate clinical guidance. Clerk silently prepares the paperwork.",
    quote: "I focus on the mother. The system handles everything else.",
    quotee: "ASHA, Rajasthan",
    agents: [
      { name: 'Sakhi', role: 'voice', color: 'brand-primary' },
      { name: 'Guru', role: 'knowledge', color: 'amber-600' },
      { name: 'Clerk', role: 'forms', color: 'blue-600' }
    ],
    phoneContent: {
      title: 'Home Visit',
      messages: [
        { from: 'sakhi', text: 'BP reading recorded: 130/85. Weight: 62kg.' },
        { from: 'clerk', text: 'Auto-filling ANC register, RCH portal, and nutrition log...' }
      ]
    }
  },
  {
    time: '19:00',
    label: 'Evening',
    location: 'Sub-Center',
    type: 'Documentation & Planning',
    description: "Clerk has already updated all 6 registers. Analyst surfaces tomorrow's priorities. The worker reviews a clean summary—what used to take 2 hours now takes 10 minutes.",
    quote: "My paperwork is done before I even sit down.",
    quotee: "ANM, Bihar",
    agents: [
      { name: 'Clerk', role: 'forms', color: 'blue-600' },
      { name: 'Analyst', role: 'data', color: 'rose-600' }
    ],
    phoneContent: {
      title: 'Day Summary',
      messages: [
        { from: 'clerk', text: '8 visits completed. 6 forms auto-updated per visit. 0 pending entries.' },
        { from: 'analyst', text: "Tomorrow: 2 overdue immunizations, 1 high-risk follow-up." }
      ]
    }
  }
];

const DayInLife = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeSlot = timeSlots[activeTab];

  return (
    <section id="narrative" className="section-padding bg-surface">
      <div className="max-content">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-display mb-4"
          >
            08:00 to 20:00: <span className="text-brand-primary italic">How They Work Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-body-lg text-text-secondary max-w-3xl mx-auto"
          >
            These aren't four separate products. They're Public Agents orchestrating
            as one system through DPI Workflows.
          </motion.p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {timeSlots.map((slot, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-brand-primary text-white'
                  : 'bg-surface border border-border text-text-secondary hover:border-brand-primary'
              }`}
            >
              {slot.time} | {slot.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Phone Mockup */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative w-72 md:w-80 h-[550px] md:h-[600px]">
              {/* Phone frame */}
              <div className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 rounded-[3rem] border-8 border-gray-800 shadow-2xl p-4">
                {/* Phone notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-full" />

                {/* Phone content */}
                <div className="h-full bg-white rounded-[2.25rem] overflow-hidden pt-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="h-full p-4"
                    >
                      {/* Time display */}
                      <div className="text-center mb-4">
                        <p className="font-mono text-3xl font-bold text-brand-primary">
                          {activeSlot.time}
                        </p>
                        <p className="text-body-sm text-text-tertiary">
                          {activeSlot.phoneContent.title}
                        </p>
                      </div>

                      {/* Messages */}
                      <div className="space-y-3 mt-6">
                        {activeSlot.phoneContent.messages.map((msg, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: msg.from === 'worker' ? 20 : -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            className={`p-3 rounded-2xl text-body-sm ${
                              msg.from === 'worker'
                                ? 'bg-gray-100 ml-8'
                                : msg.from === 'sakhi'
                                ? 'bg-brand-light/30 mr-8 border-l-4 border-brand-primary'
                                : msg.from === 'guru'
                                ? 'bg-amber-50 mr-8 border-l-4 border-amber-500'
                                : msg.from === 'clerk'
                                ? 'bg-blue-50 mr-8 border-l-4 border-blue-500'
                                : 'bg-rose-50 mr-8 border-l-4 border-rose-500'
                            }`}
                          >
                            <p className="text-body-sm text-text-primary">{msg.text}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-h3 text-brand-primary">{activeSlot.time}</span>
              <div className="h-px flex-1 bg-border"></div>
            </div>

            <h3 className="font-display text-h2 text-text-primary">{activeSlot.location}</h3>
            <p className="text-body-sm text-text-tertiary uppercase tracking-wider">{activeSlot.type}</p>

            <p className="text-body-lg text-text-primary leading-relaxed">
              {activeSlot.description}
            </p>

            {/* Quote */}
            <div className="bg-brand-light/30 border-l-4 border-brand-primary p-6 rounded-r-lg">
              <p className="text-body text-text-primary italic mb-2">
                "{activeSlot.quote}"
              </p>
              <p className="text-body-sm text-text-tertiary">— {activeSlot.quotee}</p>
            </div>

            {/* Agents Active */}
            <div className="bg-background p-6 rounded-xl">
              <p className="text-body-sm font-semibold text-text-primary mb-3">Agents Active:</p>
              <div className="flex flex-wrap gap-3">
                {activeSlot.agents.map((agent, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 bg-surface border rounded-full text-sm ${
                      agent.color === 'brand-primary'
                        ? 'border-brand-primary text-brand-primary'
                        : agent.color === 'amber-600'
                        ? 'border-amber-600 text-amber-600'
                        : agent.color === 'blue-600'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-rose-600 text-rose-600'
                    }`}
                  >
                    {agent.name} ({agent.role})
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DayInLife;
