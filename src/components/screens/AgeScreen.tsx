'use client'

import { motion } from 'framer-motion'
import { AgeRange } from '@/types/quiz'

interface AgeScreenProps {
  value: AgeRange | null
  onChange: (value: AgeRange) => void
  onNext: () => void
}

const ageOptions: { value: AgeRange; label: string }[] = [
  { value: '18-24', label: '18-24' },
  { value: '25-34', label: '25-34' },
  { value: '35-44', label: '35-44' },
  { value: '45-54', label: '45-54' },
  { value: '55+', label: '55+' },
]

export default function AgeScreen({ value, onChange, onNext }: AgeScreenProps) {
  return (
    <div className="text-center">
      <motion.h2 
        className="question-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        How old are you?
      </motion.h2>
      
      <motion.p 
        className="text-feminine-gray-soft mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        This helps us calculate your metabolic profile and identify hormonal changes that affect weight loss.
      </motion.p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {ageOptions.map((option, index) => (
          <motion.button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`card-option ${value === option.value ? 'card-option-selected' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 3) }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-xl font-semibold">{option.label}</span>
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
