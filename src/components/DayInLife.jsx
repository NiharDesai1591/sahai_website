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
      { name: 'Sakhi', role: 'voice', color: 'emerald' },
      { name: 'Guru', role: 'knowledge', color: 'amber' }
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
      { name: 'Sakhi', role: 'voice', color: 'emerald' },
      { name: 'Analyst', role: 'data', color: 'rose' }
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
    description: "During the visit, Sakhi remains in silent listener mode—ambient capture. Just after the ASHA steps out of the house, Sakhi summarizes the visit, clarifies any gap in data. All this happens locally without any risk to privacy. When a high-risk indicator is detected, Guru provides immediate clinical guidance. Clerk silently prepares the paperwork.",
    agents: [
      { name: 'Sakhi', role: 'voice', color: 'emerald' },
      { name: 'Guru', role: 'knowledge', color: 'amber' },
      { name: 'Clerk', role: 'forms', color: 'blue' }
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
    location: 'Home',
    type: 'Documentation & Planning',
    description: "Clerk has already updated all 6 registers. Analyst surfaces tomorrow's priorities. The worker reviews a clean summary—what used to take 2 hours now takes 10 minutes.",
    agents: [
      { name: 'Clerk', role: 'forms', color: 'blue' },
      { name: 'Analyst', role: 'data', color: 'rose' }
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

const agentColorMap = {
  emerald: { pill: 'border-emerald-200 text-emerald-700' },
  amber: { pill: 'border-amber-200 text-amber-700' },
  blue: { pill: 'border-blue-200 text-blue-700' },
  rose: { pill: 'border-rose-200 text-rose-700' },
};

const DayInLife = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeSlot = timeSlots[activeTab];

  const getMsgStyle = (from) => {
    if (from === 'worker') return 'bg-gray-100 ml-8';
    if (from === 'sakhi') return 'bg-emerald-50 mr-8 border-l-4 border-emerald-300';
    if (from === 'guru') return 'bg-amber-50 mr-8 border-l-4 border-amber-300';
    if (from === 'clerk') return 'bg-blue-50 mr-8 border-l-4 border-blue-300';
    return 'bg-rose-50 mr-8 border-l-4 border-rose-300';
  };

  return (
    <section id="narrative" className="section-padding bg-white">
      <div className="max-content">
        <div className="text-center mb-20">
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
            These aren't four separate products. They're Public Agents orchestrating
            as one system through DPI Workflows.
          </motion.p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {timeSlots.map((slot, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                activeTab === idx
                  ? 'bg-black text-white'
                  : 'bg-white border border-border text-text-secondary hover:border-gray-400'
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
              <div className="w-full h-full bg-gray-50 rounded-[3rem] border-[6px] border-gray-200 shadow-sm p-4">
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-200 rounded-full" />

                <div className="h-full bg-white rounded-[2.25rem] overflow-hidden pt-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2 }}
                      className="h-full p-4"
                    >
                      <div className="text-center mb-4">
                        <p className="font-mono text-3xl font-bold text-text-primary">
                          {activeSlot.time}
                        </p>
                        <p className="text-body-sm text-text-tertiary">
                          {activeSlot.phoneContent.title}
                        </p>
                      </div>

                      <div className="space-y-3 mt-6">
                        {activeSlot.phoneContent.messages.map((msg, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: msg.from === 'worker' ? 20 : -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.15 }}
                            className={`p-3 rounded-2xl text-body-sm ${getMsgStyle(msg.from)}`}
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
            transition={{ duration: 0.3 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-h3 font-bold text-text-primary">{activeSlot.time}</span>
              <div className="h-px flex-1 bg-border"></div>
            </div>

            <h3 className="font-display text-h2 font-bold text-text-primary">{activeSlot.location}</h3>
            <p className="text-label uppercase tracking-widest text-text-tertiary">{activeSlot.type}</p>

            <p className="text-body-lg text-text-secondary leading-relaxed">
              {activeSlot.description}
            </p>

            {activeSlot.quote && (
              <div className="bg-gray-50 border-l-4 border-gray-900 p-6 rounded-r-lg">
                <p className="text-body text-text-primary italic mb-2">
                  &ldquo;{activeSlot.quote}&rdquo;
                </p>
                <p className="text-body-sm text-text-tertiary">&mdash; {activeSlot.quotee}</p>
              </div>
            )}

            <div className="bg-gray-50 p-6 rounded-xl border border-border">
              <p className="text-body-sm font-semibold text-text-primary mb-3">Agents Active:</p>
              <div className="flex flex-wrap gap-3">
                {activeSlot.agents.map((agent, idx) => {
                  const c = agentColorMap[agent.color];
                  return (
                    <span
                      key={idx}
                      className={`px-4 py-2 bg-white border rounded-lg text-sm font-medium ${c.pill}`}
                    >
                      {agent.name} ({agent.role})
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DayInLife;
