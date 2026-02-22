'use client'

import { motion } from 'framer-motion'
import { FutureFear } from '@/types/quiz'

interface FutureFearScreenProps {
  value: FutureFear | null
  onChange: (value: FutureFear) => void
  onNext: () => void
}

const fearOptions: { value: FutureFear; label: string; consequence: string }[] = [
  { value: 'never_reach_goal', label: 'That I will never reach my goal weight', consequence: 'I will feel this way forever' },
  { value: 'pass_habits_to_kids', label: 'That I will pass these habits to my kids', consequence: 'They will struggle like I have' },
  { value: 'keep_gaining', label: 'That I will keep gaining weight', consequence: 'I will keep missing out on life' },
  { value: 'health_decline', label: 'That my health will continue to decline', consequence: 'I will lose my independence' },
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
        The #1 thing you are afraid of is...
      </motion.h2>
      
      <motion.p 
        className="text-feminine-gray-soft mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        If nothing changes, this is the pain you will carry
      </motion.p>
      
      <div className="space-y-3 mb-8">
        {fearOptions.map((option, index) => (
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
            <div className="text-sm text-feminine-gray-soft italic">{option.consequence}</div>
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
