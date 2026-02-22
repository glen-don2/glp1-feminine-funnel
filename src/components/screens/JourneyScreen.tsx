'use client'

import { motion } from 'framer-motion'
import { JourneyDuration } from '@/types/quiz'

interface JourneyScreenProps {
  value: JourneyDuration | null
  onChange: (value: JourneyDuration) => void
  onNext: () => void
}

const journeyOptions: { value: JourneyDuration; label: string; emoji: string; pain: string }[] = [
  { value: 'just_started', label: 'Just getting started', emoji: '🌱', pain: 'I want to end this before it becomes years' },
  { value: '6_months', label: '6+ months', emoji: '😤', pain: 'The frustration is building' },
  { value: '1_year', label: '1+ years', emoji: '😔', pain: 'I am starting to lose hope' },
  { value: '2_years', label: '2+ years', emoji: '😣', pain: 'This has taken over my life' },
  { value: '5_years', label: '5+ years of struggle', emoji: '💔', pain: 'I have tried everything' },
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
        How long have you been trying to lose weight?
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {journeyOptions.map((option, index) => (
          <motion.button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`card-option text-left ${value === option.value ? 'card-option-selected' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 2) }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl mb-2">{option.emoji}</span>
              <span className="font-semibold text-base mb-1">{option.label}</span>
              <span className="text-xs text-feminine-gray-soft italic">{option.pain}</span>
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
        transition={{ delay: 0.4 }}
      >
        Continue
      </motion.button>
    </div>
  )
}
