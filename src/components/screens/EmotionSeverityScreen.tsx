'use client'

import { motion } from 'framer-motion'
import { EmotionSeverity } from '@/types/quiz'

interface EmotionSeverityScreenProps {
  value: EmotionSeverity | null
  onChange: (value: EmotionSeverity) => void
  onNext: () => void
}

const severityOptions: { value: EmotionSeverity; label: string }[] = [
  { value: 1, label: 'Mildly annoyed' },
  { value: 2, label: 'Moderately bothered' },
  { value: 3, label: 'Strong' },
  { value: 4, label: 'Completely defeated' },
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
        How intense is this feeling?
      </motion.h2>

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
