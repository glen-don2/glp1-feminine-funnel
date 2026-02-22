'use client'

import { motion } from 'framer-motion'
import { InvestmentLevel } from '@/types/quiz'

interface InvestmentScreenProps {
  value: InvestmentLevel | null
  onChange: (value: InvestmentLevel) => void
  onNext: () => void
}

const investmentOptions: { value: InvestmentLevel; label: string; feeling: string }[] = [
  { value: 'under_50', label: 'I am worth investing in', feeling: 'I deserve to prioritize myself' },
  { value: '50_100', label: 'I deserve a solution that actually works', feeling: 'No more wasting time on false promises' },
  { value: '100_200', label: 'I cannot keep living like this', feeling: 'The pain of staying the same is too great' },
  { value: 'whatever_it_takes', label: 'I am ready to fix this once and for all', feeling: 'I am committed to my transformation' },
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
        I am ready to invest because...
      </motion.h2>

      <motion.p
        className="text-feminine-gray-soft mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Own your commitment to yourself
      </motion.p>

      <div className="space-y-3 mb-8">
        {investmentOptions.map((option, index) => (
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
            <div className="font-medium mb-1">{option.label}</div>
            <div className="text-sm text-feminine-gray-soft italic">{option.feeling}</div>
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
