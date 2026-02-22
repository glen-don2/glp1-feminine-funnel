'use client'

import { motion } from 'framer-motion'

interface MotivationScreenProps {
  value: string
  onChange: (value: string) => void
  onNext: () => void
}

const identityOptions = [
  { text: "A woman who feels confident in photos again", feeling: "No more hiding from the camera" },
  { text: "Someone with energy to keep up with my kids", feeling: "Present and playful, not exhausted" },
  { text: "The healthiest, most vibrant version of myself", feeling: "Alive, radiant, and full of life" },
  { text: "Someone who does not hide behind layers anymore", feeling: "Free to wear what I want" },
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
        Feel the identity you are stepping into
      </motion.p>

      <div className="space-y-3 mb-8">
        {identityOptions.map((option, index) => (
          <motion.button
            key={option.text}
            onClick={() => onChange(option.text)}
            className={`card-option w-full text-left ${value === option.text ? 'card-option-selected' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 2) }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="font-medium mb-1">{option.text}</div>
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
