'use client'

import { motion } from 'framer-motion'
import { FinalAdmission } from '@/types/quiz'

interface FinalAdmissionScreenProps {
  value: FinalAdmission[]
  onChange: (value: FinalAdmission[]) => void
  onNext: () => void
}

const admissionOptions: { value: FinalAdmission; label: string }[] = [
  { value: 'belly_fat', label: 'Belly fat' },
  { value: 'energy_crashes', label: 'Energy crashes' },
  { value: 'cravings', label: 'Uncontrollable cravings' },
  { value: 'scale_stuck', label: 'Scale is stuck' },
]

export default function FinalAdmissionScreen({ value, onChange, onNext }: FinalAdmissionScreenProps) {
  const toggleAdmission = (admission: FinalAdmission) => {
    if (value.includes(admission)) {
      onChange(value.filter(v => v !== admission))
    } else {
      onChange([...value, admission])
    }
  }
  
  return (
    <div className="text-center">
      <motion.h2 
        className="question-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Which of these do you struggle with?
      </motion.h2>
      
      <motion.p 
        className="text-feminine-gray-soft mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Select all that apply
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {admissionOptions.map((option, index) => (
          <motion.button
            key={option.value}
            onClick={() => toggleAdmission(option.value)}
            className={`card-option ${value.includes(option.value) ? 'card-option-selected' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 2) }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${value.includes(option.value) ? 'bg-feminine-pink border-feminine-pink' : 'border-feminine-gray-soft'}`}>
                {value.includes(option.value) && (
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="font-medium">{option.label}</span>
            </div>
          </motion.button>
        ))}
      </div>
      
      <motion.button
        onClick={onNext}
        disabled={value.length === 0}
        className={`btn-primary ${value.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Continue
      </motion.button>
    </div>
  )
}
