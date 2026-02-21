'use client'

import { motion } from 'framer-motion'
import { PressureChoice } from '@/types/quiz'

interface PressureScreenProps {
  value: PressureChoice | null
  onChange: (value: PressureChoice) => void
  onNext: () => void
}

const pressureOptions: { value: PressureChoice; label: string; description: string }[] = [
  { value: 'quick_fix', label: 'Quick fix', description: 'I need results fast' },
  { value: 'sustainable_approach', label: 'Sustainable approach', description: 'I want lasting change' },
  { value: 'last_resort', label: 'Last resort', description: "I've tried everything else" },
  { value: 'proactive_health', label: 'Proactive health', description: "I'm taking control now" },
]

export default function PressureScreen({ value, onChange, onNext }: PressureScreenProps) {
  return (
    <div className="text-center">
      <motion.h2 
        className="question-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        What describes your approach?
      </motion.h2>
      
      <div className="space-y-3 mb-8">
        {pressureOptions.map((option, index) => (
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
              name="pressure"
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="w-5 h-5"
            />
            <div className="text-left">
              <div className="font-semibold">{option.label}</div>
              <div className="text-sm text-feminine-gray-soft">{option.description}</div>
            </div>
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
