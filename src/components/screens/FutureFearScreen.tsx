'use client'

import { motion } from 'framer-motion'
import { FutureFear } from '@/types/quiz'

interface FutureFearScreenProps {
  value: FutureFear | null
  onChange: (value: FutureFear) => void
  onNext: () => void
}

const fearOptions: { value: FutureFear; label: string }[] = [
  { value: 'never_reach_goal', label: "I'll never reach my goal weight" },
  { value: 'pass_habits_to_kids', label: "I'll pass these habits to my kids" },
  { value: 'keep_gaining', label: "I'll keep gaining weight" },
  { value: 'health_decline', label: "My health will continue to decline" },
]

export default function FutureFearScreen({ value, onChange, onNext }: FutureFearScreenProps) {
  return (
    <div className="text-center">
      <motion.h2 
        className="question-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        What's your biggest fear if nothing changes?
      </motion.h2>
      
      <motion.p 
        className="text-feminine-gray-soft mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Be honest. This matters.
      </motion.p>
      
      <div className="space-y-3 mb-8">
        {fearOptions.map((option, index) => (
          <motion.label
            key={option.value}
            className={`card-option flex items-center gap-4 cursor-pointer ${value === option.value ? 'card-option-selected' : ''}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * (index + 2) }}
            whileHover={{ scale: 1.01 }}
          >
            <input
              type="radio"
              name="fear"
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="w-5 h-5"
            />
            <span className="font-medium">{option.label}</span>
          </motion.label>
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
