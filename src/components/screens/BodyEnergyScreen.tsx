'use client'

import { motion } from 'framer-motion'
import { BodyGoal, EnergyPattern } from '@/types/quiz'

interface BodyEnergyScreenProps {
  bodyGoalValue: BodyGoal | null
  energyValue: EnergyPattern | null
  onBodyGoalChange: (value: BodyGoal) => void
  onEnergyChange: (value: EnergyPattern) => void
  onNext: () => void
}

const bodyGoalOptions: { value: BodyGoal; label: string; description: string; emoji: string }[] = [
  { value: 'slim_toned', label: 'Slim & Toned', description: 'Lean, elegant curves', emoji: '✨' },
  { value: 'strong_athletic', label: 'Strong & Athletic', description: 'Fit and powerful', emoji: '💪' },
  { value: 'curvy_confident', label: 'Curvy & Confident', description: 'Embrace your curves', emoji: '👗' },
  { value: 'healthy_energetic', label: 'Healthy & Energetic', description: 'Feel your best', emoji: '🌿' },
]

const energyOptions: { value: EnergyPattern; label: string; icon: string }[] = [
  { value: 'morning_crash', label: 'Morning crash', icon: '🌅' },
  { value: 'afternoon_crash', label: 'Afternoon crash', icon: '☀️' },
  { value: 'evening_crash', label: 'Evening crash', icon: '🌙' },
  { value: 'all_day_tired', label: 'All day tired', icon: '😓' },
]

export default function BodyEnergyScreen({
  bodyGoalValue,
  energyValue,
  onBodyGoalChange,
  onEnergyChange,
  onNext,
}: BodyEnergyScreenProps) {
  const canContinue = bodyGoalValue && energyValue

  return (
    <div className="text-center">
      <motion.h2 
        className="question-text mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Where do you hold weight + When do you crash?
      </motion.h2>
      
      <motion.p 
        className="text-feminine-gray-soft mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        Tell us about your body and energy patterns
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {bodyGoalOptions.map((option, index) => (
          <motion.button
            key={option.value}
            onClick={() => onBodyGoalChange(option.value)}
            className={`card-option text-left ${bodyGoalValue === option.value ? 'card-option-selected' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 2) }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{option.emoji}</span>
              <div>
                <div className="font-semibold text-lg">{option.label}</div>
                <div className="text-sm text-feminine-gray-soft">{option.description}</div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <motion.h3 
        className="font-display text-xl mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        When do you experience energy crashes?
      </motion.h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {energyOptions.map((option, index) => (
          <motion.button
            key={option.value}
            onClick={() => onEnergyChange(option.value)}
            className={`card-option ${energyValue === option.value ? 'card-option-selected' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 5) }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-2xl mb-1 block">{option.icon}</span>
            <span className="font-semibold text-sm">{option.label}</span>
          </motion.button>
        ))}
      </div>
      
      <motion.button
        onClick={onNext}
        disabled={!canContinue}
        className={`btn-primary ${!canContinue ? 'opacity-50 cursor-not-allowed' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Continue
      </motion.button>
    </div>
  )
}
