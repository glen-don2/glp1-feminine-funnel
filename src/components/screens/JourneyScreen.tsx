'use client'

import { motion } from 'framer-motion'
import { JourneyDuration } from '@/types/quiz'

interface JourneyScreenProps {
  value: JourneyDuration | null
  onChange: (value: JourneyDuration) => void
  onNext: () => void
}

const journeyOptions: { value: JourneyDuration; label: string }[] = [
  { value: 'just_started', label: 'Ending it now' },
  { value: '6_months', label: '6+ months of suffering' },
  { value: '1_year', label: '1+ years of hiding' },
  { value: '2_years', label: '2+ years of struggle' },
  { value: '5_years', label: '5+ years of pain' },
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
      
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <select
          value={value || ''}
          onChange={(e) => onChange(e.target.value as JourneyDuration)}
          className="w-full max-w-xs mx-auto block"
        >
          <option value="" disabled>Select your journey duration</option>
          {journeyOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </motion.div>
      
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
