'use client'

import { motion } from 'framer-motion'

interface PressureReleaseScreenProps {
  value: string
  onChange: (value: string) => void
  onNext: () => void
}

const solutionOptions = [
  { 
    text: "A permanent solution, not another band-aid", 
    feeling: "I am done with temporary fixes",
    emoji: "🎯"
  },
  { 
    text: "Something that works WITH my body", 
    feeling: "No more fighting against myself",
    emoji: "🤝"
  },
  { 
    text: "A plan built for women like me", 
    feeling: "Finally, something that understands",
    emoji: "✨"
  },
]

export default function PressureReleaseScreen({ value, onChange, onNext }: PressureReleaseScreenProps) {
  return (
    <div className="text-center">
      <motion.h2
        className="question-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        To finally solve this, I am looking for...
      </motion.h2>

      <motion.p
        className="text-feminine-gray-soft mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        You have a choice. What do you actually want?
      </motion.p>

      <div className="space-y-3 mb-8">
        {solutionOptions.map((option, index) => (
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
            <div className="flex items-start gap-4">
              <span className="text-2xl">{option.emoji}</span>
              <div>
                <div className="font-medium mb-1">{option.text}</div>
                <div className="text-sm text-feminine-gray-soft italic">{option.feeling}</div>
              </div>
            </div>
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
