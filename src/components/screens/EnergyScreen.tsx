'use client'

import { motion } from 'framer-motion'
import { EnergyPattern } from '@/types/quiz'

interface EnergyScreenProps {
  value: EnergyPattern | null
  onChange: (value: EnergyPattern) => void
  onNext: () => void
}

const energyOptions: { value: EnergyPattern; label: string; icon: string }[] = [
  { value: 'morning_crash', label: 'Morning crash', icon: '🌅' },
  { value: 'afternoon_crash', label: 'Afternoon crash at 3pm', icon: '☀️' },
  { value: 'evening_crash', label: 'Evening crash', icon: '🌙' },
  { value: 'all_day_tired', label: 'All day tired', icon: '😓' },
]

export default function EnergyScreen({ value, onChange, onNext }: EnergyScreenProps) {
  return (
    <div className="text-center">
      <motion.h2
        className="question-text mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        When do you crash?
      </motion.h2>

      <motion.p
        className="text-feminine-gray-soft mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        Your body is sending signals
      </motion.p>

      <div className="grid grid-cols-2 gap-3 mb-8">
        {energyOptions.map((option, index) => (
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
            <span className="text-2xl mb-1 block">{option.icon}</span>
            <span className="font-semibold text-sm">{option.label}</span>
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
