'use client'

import { motion } from 'framer-motion'

interface MotivationScreenProps {
  value: string
  onChange: (value: string) => void
  onNext: () => void
}

const identityOptions = [
  "A woman who feels confident in photos again",
  "Someone with energy to keep up with my kids",
  "The healthiest, most vibrant version of myself",
  "Someone who doesn't hide behind layers anymore",
]

export default function MotivationScreen({ value, onChange, onNext }: MotivationScreenProps) {
  return (
    <div className="text-center">
      <motion.h2
        className="question-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        This year, I AM becoming...
      </motion.h2>

      <motion.p
        className="text-feminine-gray-soft mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Claim the identity you are stepping into
      </motion.p>

      <div className="space-y-3 mb-8">
        {identityOptions.map((option, index) => (
          <motion.button
            key={option}
            onClick={() => onChange(option)}
            className={`card-option w-full text-left ${value === option ? 'card-option-selected' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 2) }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <span className="font-medium">{option}</span>
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
