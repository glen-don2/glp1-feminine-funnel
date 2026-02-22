'use client'

import { motion } from 'framer-motion'
import { EmotionSeverity } from '@/types/quiz'

interface EmotionSeverityScreenProps {
  value: EmotionSeverity | null
  onChange: (value: EmotionSeverity) => void
  onNext: () => void
}

const severityLevels = [
  { value: 1 as EmotionSeverity, label: 'Surface level', sublabel: 'It bothers me sometimes', emoji: '🌊', color: 'bg-blue-400', height: 'h-16' },
  { value: 2 as EmotionSeverity, label: 'Weighs on me', sublabel: 'It comes up often', emoji: '⚖️', color: 'bg-amber-400', height: 'h-24' },
  { value: 3 as EmotionSeverity, label: 'Affects my days', sublabel: 'It impacts daily life', emoji: '🌧️', color: 'bg-orange-400', height: 'h-32' },
  { value: 4 as EmotionSeverity, label: 'Defines me', sublabel: 'It shapes my identity', emoji: '⛈️', color: 'bg-red-500', height: 'h-40' },
]

export default function EmotionSeverityScreen({ value, onChange, onNext }: EmotionSeverityScreenProps) {
  const selectedLevel = severityLevels.find(l => l.value === value)

  return (
    <div className="text-center">
      <motion.div
        className="w-16 h-16 bg-gradient-to-br from-feminine-rose to-feminine-pink rounded-full flex items-center justify-center mx-auto mb-4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, type: 'spring' }}
      >
        <span className="text-3xl">🎯</span>
      </motion.div>

      <motion.h2
        className="question-text mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        How deep does this go?
      </motion.h2>

      <motion.p
        className="text-feminine-gray-soft mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Be honest about the emotional weight you carry
      </motion.p>

      {/* Visual thermometer/slider */}
      <motion.div
        className="bg-white rounded-3xl p-6 shadow-lg mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-end justify-center gap-3 h-48 mb-4">
          {severityLevels.map((level, index) => (
            <motion.button
              key={level.value}
              onClick={() => onChange(level.value)}
              className={`relative flex flex-col items-center transition-all duration-300 ${
                value === level.value ? 'scale-110' : 'hover:scale-105'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 3) }}
            >
              {/* Emoji above bar */}
              <motion.span 
                className="text-2xl mb-2"
                animate={value === level.value ? { y: [0, -5, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                {level.emoji}
              </motion.span>
              
              {/* Bar */}
              <div 
                className={`w-14 rounded-t-xl transition-all duration-300 ${
                  value === level.value 
                    ? `${level.color} shadow-lg` 
                    : 'bg-gray-200'
                } ${level.height}`}
              >
                {value === level.value && (
                  <motion.div
                    className="w-full h-full rounded-t-xl"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    style={{ originY: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
              
              {/* Level indicator */}
              <div className={`w-6 h-6 rounded-full mt-2 flex items-center justify-center text-xs font-bold ${
                value === level.value ? 'bg-feminine-rose text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {level.value}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Selected level description */}
        <motion.div
          className="bg-feminine-cream rounded-2xl p-4"
          initial={false}
          animate={{ opacity: value ? 1 : 0.5 }}
        >
          {selectedLevel ? (
            <>
              <p className="font-semibold text-feminine-charcoal">{selectedLevel.label}</p>
              <p className="text-sm text-feminine-gray-soft">{selectedLevel.sublabel}</p>
            </>
          ) : (
            <p className="text-feminine-gray-soft">Tap a level above</p>
          )}
        </motion.div>
      </motion.div>

      <motion.button
        onClick={onNext}
        disabled={!value}
        className={`btn-primary w-full ${!value ? 'opacity-50 cursor-not-allowed' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Continue →
      </motion.button>
    </div>
  )
}
