'use client'

import { motion } from 'framer-motion'
import { BodyArea } from '@/types/quiz'

interface ProblemAreasScreenProps {
  value: BodyArea | null
  onChange: (value: BodyArea) => void
  onNext: () => void
}

const areaOptions: { value: BodyArea; label: string; emoji: string }[] = [
  { value: 'belly', label: 'Belly and midsection', emoji: '🎯' },
  { value: 'thighs', label: 'Hips and thighs', emoji: '🦵' },
  { value: 'arms', label: 'Upper body only', emoji: '💪' },
  { value: 'all_over', label: 'All over, evenly', emoji: '👤' },
]

export default function ProblemAreasScreen({ value, onChange, onNext }: ProblemAreasScreenProps) {
  return (
    <div className="text-center">
      <motion.h2 
        className="question-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Where does weight refuse to come off?
      </motion.h2>
      
      <motion.p 
        className="text-feminine-gray-soft mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Your body is telling you something
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {areaOptions.map((option, index) => (
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
            <div className="flex items-center gap-4">
              <span className="text-3xl">{option.emoji}</span>
              <span className="font-semibold text-lg">{option.label}</span>
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
