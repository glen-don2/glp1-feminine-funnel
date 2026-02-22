'use client'

import { motion } from 'framer-motion'
import { JourneyDuration } from '@/types/quiz'

interface JourneyScreenProps {
  value: JourneyDuration | null
  onChange: (value: JourneyDuration) => void
  onNext: () => void
}

const journeyOptions: { value: JourneyDuration; label: string; emoji: string }[] = [
  { value: 'just_started', label: 'Ending it now', emoji: '🛑' },
  { value: '6_months', label: '6+ months of suffering', emoji: '😔' },
  { value: '1_year', label: '1+ years of hiding', emoji: '🙈' },
  { value: '2_years', label: '2+ years of struggle', emoji: '😤' },
  { value: '5_years', label: '5+ years of pain', emoji: '😢' },
]

export default function JourneyScreen({ value, onChange, onNext }: JourneyScreenProps) {
  return (
    <div className="text-center">
      <motion.h2
        className="question-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        How long have you been on your weight loss journey?
      </motion.h2>

      <div className="grid grid-cols-1 gap-3 mb-8">
        {journeyOptions.map((option, index) => (
          <motion.button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`card-option w-full text-left flex items-center gap-4 ${value === option.value ? 'card-option-selected' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 2) }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <span className="text-3xl">{option.emoji}</span>
            <span className="font-semibold text-lg">{option.label}</span>
          </motion.button>
        ))}
      </div>

      <motion.button
        onClick={onNext}
        disabled={!value}
        className={`btn-primary ${!value ? 'opacity-50 cursor-not-allowed' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Continue
      </motion.button>
    </div>
  )
}
