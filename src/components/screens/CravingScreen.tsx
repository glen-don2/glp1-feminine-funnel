'use client'

import { motion } from 'framer-motion'
import { CravingType } from '@/types/quiz'

interface CravingScreenProps {
  value: CravingType | null
  onChange: (value: CravingType) => void
  onNext: () => void
}

const cravingOptions: { value: CravingType; label: string; icon: string }[] = [
  { value: 'sugar', label: 'Sugar', icon: '🍬' },
  { value: 'carbs', label: 'Carbs', icon: '🍞' },
  { value: 'salty', label: 'Salty snacks', icon: '🧂' },
  { value: 'late_night', label: 'Late night eating', icon: '🌙' },
]

export default function CravingScreen({ value, onChange, onNext }: CravingScreenProps) {
  return (
    <div className="text-center">
      <motion.h2
        className="question-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        What does your body crave most?
      </motion.h2>

      <motion.p
        className="text-feminine-gray-soft mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        Your cravings reveal your hormonal pattern
      </motion.p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {cravingOptions.map((option, index) => (
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
            <span className="text-3xl mb-2 block">{option.icon}</span>
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
