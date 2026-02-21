'use client'

import { motion } from 'framer-motion'
import { InvestmentLevel } from '@/types/quiz'

interface InvestmentScreenProps {
  value: InvestmentLevel | null
  onChange: (value: InvestmentLevel) => void
  onNext: () => void
}

const investmentOptions: { value: InvestmentLevel; label: string }[] = [
  { value: 'under_50', label: 'Under €50/month' },
  { value: '50_100', label: '€50-100/month' },
  { value: '100_200', label: '€100-200/month' },
  { value: 'whatever_it_takes', label: 'Whatever it takes' },
]

export default function InvestmentScreen({ value, onChange, onNext }: InvestmentScreenProps) {
  return (
    <div className="text-center">
      <motion.h2 
        className="question-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        What's your investment mindset for your health?
      </motion.h2>
      
      <motion.p 
        className="text-feminine-gray-soft mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        We'll match solutions to your comfort level
      </motion.p>
      
      <div className="space-y-3 mb-8">
        {investmentOptions.map((option, index) => (
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
              name="investment"
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
