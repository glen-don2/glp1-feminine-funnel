'use client'

import { motion } from 'framer-motion'
import { FinalAdmission } from '@/types/quiz'

interface FinalAdmissionScreenProps {
  value: FinalAdmission | null
  onChange: (value: FinalAdmission) => void
  onNext: () => void
}

const admissionOptions: { value: FinalAdmission; label: string; claim: string }[] = [
  { value: 'belly_fat', label: 'Belly fat that will not budge', claim: 'I claim control over my midsection' },
  { value: 'energy_crashes', label: 'Energy crashes that ruin my day', claim: 'I claim all-day energy' },
  { value: 'cravings', label: 'Cravings I cannot control', claim: 'I claim power over my appetite' },
  { value: 'scale_stuck', label: 'The scale not moving no matter what', claim: 'I claim a body that responds' },
]

export default function FinalAdmissionScreen({ value, onChange, onNext }: FinalAdmissionScreenProps) {
  return (
    <div className="text-center">
      <motion.h2 
        className="question-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Despite trying everything, you still struggle with...
      </motion.h2>
      
      <motion.p 
        className="text-feminine-gray-soft mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Claim the transformation you are ready for
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
        {admissionOptions.map((option, index) => (
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
            <div className="font-medium mb-1">{option.label}</div>
            <div className="text-sm text-feminine-gray-soft italic">{option.claim}</div>
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
