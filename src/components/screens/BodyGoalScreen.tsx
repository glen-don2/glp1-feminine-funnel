'use client'

import { motion } from 'framer-motion'
import { BodyGoal } from '@/types/quiz'

interface BodyGoalScreenProps {
  value: BodyGoal | null
  onChange: (value: BodyGoal) => void
  onNext: () => void
}

const bodyGoalOptions: { value: BodyGoal; label: string; emoji: string; feeling: string }[] = [
  { value: 'slim_toned', label: 'Slim, toned, and full of energy', emoji: '✨', feeling: 'I feel light, confident, and unstoppable' },
  { value: 'strong_athletic', label: 'Strong, fit, and confident', emoji: '💪', feeling: 'I feel powerful and proud of my body' },
  { value: 'curvy_confident', label: 'Curvy and comfortable in my skin', emoji: '👗', feeling: 'I feel beautiful exactly as I am' },
  { value: 'healthy_energetic', label: 'Back to how I looked in my 30s', emoji: '🌟', feeling: 'I feel like myself again' },
]

export default function BodyGoalScreen({ value, onChange, onNext }: BodyGoalScreenProps) {
  return (
    <div className="text-center">
      <motion.h2
        className="question-text mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        My dream body is...
      </motion.h2>

      <motion.p
        className="text-feminine-gray-soft mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        How will you feel when you look in the mirror?
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {bodyGoalOptions.map((option, index) => (
          <motion.button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`card-option text-left ${value === option.value ? 'card-option-selected' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 2) }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{option.emoji}</span>
              <div>
                <div className="font-semibold text-lg mb-1">{option.label}</div>
                <div className="text-sm text-feminine-gray-soft italic">{option.feeling}</div>
              </div>
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
        transition={{ delay: 0.6 }}
      >
        Continue
      </motion.button>
    </div>
  )
}
