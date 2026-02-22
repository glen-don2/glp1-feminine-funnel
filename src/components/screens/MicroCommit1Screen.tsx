'use client'

import { motion } from 'framer-motion'
import { FinalAdmission } from '@/types/quiz'

interface MicroCommit1ScreenProps {
  finalAdmissionValue: FinalAdmission[]
  microCommitValue: boolean
  onFinalAdmissionChange: (value: FinalAdmission[]) => void
  onYes: () => void
  onNo: () => void
}

const admissionOptions: { value: FinalAdmission; label: string }[] = [
  { value: 'belly_fat', label: 'Belly fat that won\'t budge' },
  { value: 'energy_crashes', label: 'Energy crashes mid-day' },
  { value: 'cravings', label: 'Uncontrollable sugar cravings' },
  { value: 'scale_stuck', label: 'Scale stuck for months' },
]

export default function MicroCommit1Screen({
  finalAdmissionValue,
  microCommitValue,
  onFinalAdmissionChange,
  onYes,
  onNo,
}: MicroCommit1ScreenProps) {
  const toggleAdmission = (admission: FinalAdmission) => {
    if (finalAdmissionValue.includes(admission)) {
      onFinalAdmissionChange(finalAdmissionValue.filter(v => v !== admission))
    } else {
      onFinalAdmissionChange([...finalAdmissionValue, admission])
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
        Let's be honest — what's REALLY stopping you?
      </motion.h2>
      
      <motion.p 
        className="text-feminine-gray-soft mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Select all that apply
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
        {admissionOptions.map((option, index) => (
          <motion.button
            key={option.value}
            onClick={() => toggleAdmission(option.value)}
            className={`card-option ${finalAdmissionValue.includes(option.value) ? 'card-option-selected' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 2) }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${finalAdmissionValue.includes(option.value) ? 'bg-feminine-pink border-feminine-pink' : 'border-feminine-gray-soft'}`}>
                {finalAdmissionValue.includes(option.value) && (
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

      {finalAdmissionValue.length > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-6 shadow-xl mb-6"
        >
          <motion.div 
            className="w-14 h-14 bg-feminine-pink-light rounded-full flex items-center justify-center mx-auto mb-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
          >
            <span className="text-2xl">💝</span>
          </motion.div>
          
          <motion.p 
            className="text-feminine-charcoal mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            You just admitted what's been blocking your progress.
          </motion.p>
          
          <motion.button
            onClick={onYes}
            className="btn-primary w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Yes, I'm ready to fix this
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}
