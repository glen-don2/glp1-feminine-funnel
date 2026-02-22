'use client'

import { motion } from 'framer-motion'

interface StressPatternScreenProps {
  value: string | null
  onChange: (value: string) => void
  onNext: () => void
}

const stressOptions = [
  { value: 'stress_eat', label: 'Reach for sugar or carbs', emoji: '🍫' },
  { value: 'stress_skip', label: 'Skip meals entirely', emoji: '⏭️' },
  { value: 'stress_crave', label: 'Crave comfort food', emoji: '🍕' },
  { value: 'stress_sleepless', label: 'Cannot sleep properly', emoji: '😴' },
]

export default function StressPatternScreen({ value, onChange, onNext }: StressPatternScreenProps) {
  return (
    <div className="text-center">
      <motion.h2
        className="question-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        When you are stressed, you tend to...
      </motion.h2>

      <motion.p
        className="text-feminine-gray-soft mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Your stress response reveals your hormonal blocks
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {stressOptions.map((option, index) => (
          <motion.button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`card-option ${value === option.value ? 'card-option-selected' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 2) }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">{option.emoji}</span>
              <span className="font-semibold text-lg">{option.label}</span>
            </div>
          </motion.button>
        ))}
      </div>

      <motion.button
        onClick={onNext}
        disabled={!value}
        className={`btn-primary ${!value ? 'opacity-50 cursor-not-allowed' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Continue
      </motion.button>
    </div>
  )
}
