'use client'

import { motion } from 'framer-motion'
import { EmotionSeverity } from '@/types/quiz'

interface EmotionSeverityScreenProps {
  value: EmotionSeverity | null
  onChange: (value: EmotionSeverity) => void
  onNext: () => void
}

const severityOptions: { value: EmotionSeverity; label: string }[] = [
  { value: 1, label: 'It bothers me sometimes' },
  { value: 2, label: 'It weighs on me often' },
  { value: 3, label: 'It affects my daily life' },
  { value: 4, label: 'It defines how I see myself' },
]

export default function EmotionSeverityScreen({ value, onChange, onNext }: EmotionSeverityScreenProps) {
  return (
    <div className="text-center">
      <motion.h2
        className="question-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        How deep does this feeling go?
      </motion.h2>

      <motion.p
        className="text-feminine-gray-soft mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Be honest about the weight you carry
      </motion.p>

      <div className="space-y-3 mb-8">
        {severityOptions.map((option, index) => (
          <motion.button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`card-option w-full text-left ${value === option.value ? 'card-option-selected' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 2) }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <span className="font-semibold">{option.label}</span>
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
