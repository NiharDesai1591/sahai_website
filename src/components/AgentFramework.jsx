import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AgentCard from './AgentCard';

const agents = [
  {
    id: 'sakhi',
    name: 'Sakhi',
    tagline: 'The Voice',
    colorKey: 'sakhi',
    description: 'A fast, voice-to-voice interface. The front-facing personality handling live, empathetic dialogue in local dialects.',
    tech: 'Real-time ASR + TTS | Multi-dialect NLP | Sub-500ms latency',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    modalContent: {
      conversation: [
        { role: 'sakhi', text: 'Namaste! Aaj aapki kya madad kar sakti hoon?' },
        { role: 'worker', text: 'Kamla ji ke ghar jaana hai, unka ANC checkup hai' },
        { role: 'sakhi', text: 'Haan, Kamla ji ka 3rd trimester chal raha hai. Unka BP last visit mein thoda high tha. Kya aap unka BP aaj check karenge?' },
      ]
    }
  },
  {
    id: 'guru',
    name: 'Guru',
    tagline: 'The Mentor',
    colorKey: 'guru',
    description: 'An always-on training companion. Delivers scenario-based learning, answers protocol questions, and simulates complex cases.',
    tech: 'RAG-powered Q&A | Scenario simulation | Adaptive learning paths',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    modalContent: {
      conversation: [
        { role: 'worker', text: 'A pregnant woman has severe headache and blurred vision. What should I do?' },
        { role: 'guru', text: 'These are warning signs of preeclampsia. Check her BP immediately. If systolic >140 or diastolic >90, refer to PHC urgently. Do not give any medication.' },
        { role: 'worker', text: 'Her BP is 150/100' },
        { role: 'guru', text: 'This confirms severe preeclampsia. Arrange immediate transport to facility. Keep her lying on left side. Monitor for seizures. This is a medical emergency.' },
      ]
    }
  },
  {
    id: 'clerk',
    name: 'Clerk',
    tagline: 'The Engine',
    colorKey: 'clerk',
    description: 'The back-office workhorse. Auto-fills registers, reconciles records, and generates reports while the worker focuses on care.',
    tech: 'Multi-source data sync | Auto-form filling | Real-time reconciliation',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    modalContent: {
      conversation: [
        { role: 'system', text: 'Home visit completed for Kamla Devi' },
        { role: 'clerk', text: 'I have updated the following: MCP Card, ANC Register, RCH Portal, Village Health Register. BP reading (120/80) and weight (58kg) recorded across all systems.' },
        { role: 'system', text: '6 forms updated in 3 seconds' },
      ]
    }
  },
  {
    id: 'analyst',
    name: 'Analyst',
    tagline: 'The Brain',
    colorKey: 'analyst',
    description: 'The intelligence layer. Monitors population health, spots high-risk cases, and nudges preventive action before crises emerge.',
    tech: 'Risk stratification | Trend analysis | Proactive alerting',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    modalContent: {
      conversation: [
        { role: 'analyst', text: 'Morning briefing: 3 high-priority cases for today' },
        { role: 'analyst', text: '1. Priya (19) - Missed 2 ANC visits, high-risk first pregnancy\n2. Sunita (32) - GDM detected, needs glucose monitoring\n3. Rekha (28) - 38 weeks, birth preparedness checklist pending' },
        { role: 'worker', text: 'Show me Priya\'s history' },
        { role: 'analyst', text: 'Priya: Age 19, Primigravida, LMP: Oct 15. Risk factors: Young age, anemia (Hb 9.2), no family support. Last visit: 6 weeks ago. Recommended: Urgent home visit today.' },
      ]
    }
  },
];

const colorMap = {
  sakhi: { bg: 'bg-accent-sakhi/10', text: 'text-accent-sakhi', border: 'border-accent-sakhi/20' },
  guru: { bg: 'bg-accent-guru/10', text: 'text-accent-guru', border: 'border-accent-guru/20' },
  clerk: { bg: 'bg-accent-clerk/10', text: 'text-accent-clerk', border: 'border-accent-clerk/20' },
  analyst: { bg: 'bg-accent-analyst/10', text: 'text-accent-analyst', border: 'border-accent-analyst/20' },
};

export default function AgentFramework() {
  const [selectedAgent, setSelectedAgent] = useState(null);

  return (
    <section id="agents" className="section-padding bg-cream">
      <div className="max-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <h2 className="font-display text-3xl lg:text-section text-charcoal mb-4">
            The 4-Agent Framework
          </h2>
          <p className="font-body text-lg lg:text-body-lg text-slate max-w-2xl">
            Four specialized AI agents working in concert to support every aspect of frontline health work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {agents.map((agent, idx) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <AgentCard agent={agent} onOpenModal={setSelectedAgent} />
            </motion.div>
          ))}
        </div>

        {/* Integration Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 lg:mt-16 text-center"
        >
          <p className="font-mono text-technical text-muted">
            All four agents share context and work as a unified system
          </p>
        </motion.div>
      </div>

      {/* Agent Modal */}
      <AnimatePresence>
        {selectedAgent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/50 backdrop-blur-sm"
            onClick={() => setSelectedAgent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-paper rounded-2xl p-6 lg:p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto border border-border shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${colorMap[selectedAgent.colorKey].bg} flex items-center justify-center ${colorMap[selectedAgent.colorKey].text}`}>
                    {selectedAgent.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-charcoal">{selectedAgent.name}</h3>
                    <p className={`font-mono text-sm ${colorMap[selectedAgent.colorKey].text}`}>
                      {selectedAgent.tagline}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedAgent(null)}
                  className="text-muted hover:text-charcoal transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <p className="font-mono text-technical text-muted uppercase">Sample Interaction</p>
                <div className="space-y-3">
                  {selectedAgent.modalContent.conversation.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl ${
                        msg.role === selectedAgent.id
                          ? `${colorMap[selectedAgent.colorKey].bg} border ${colorMap[selectedAgent.colorKey].border}`
                          : msg.role === 'system'
                          ? 'bg-cream text-muted text-center text-sm'
                          : 'bg-cream'
                      }`}
                    >
                      {msg.role !== 'system' && (
                        <p className={`text-xs font-mono mb-1 ${
                          msg.role === selectedAgent.id ? colorMap[selectedAgent.colorKey].text : 'text-muted'
                        }`}>
                          {msg.role === selectedAgent.id ? selectedAgent.name : 'Health Worker'}
                        </p>
                      )}
                      <p className="text-sm text-charcoal whitespace-pre-line">{msg.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
