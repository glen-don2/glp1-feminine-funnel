'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FutureFear } from '@/types/quiz'

interface FutureFearScreenProps {
  value: FutureFear | null
  onChange: (value: FutureFear) => void
  onNext: () => void
}

const fearOptions: { value: FutureFear; label: string }[] = [
  { value: 'never_reach_goal', label: "I'll never reach my goal weight" },
  { value: 'pass_habits_to_kids', label: "I'll pass these habits to my kids" },
  { value: 'keep_gaining', label: "I'll keep gaining weight" },
  { value: 'health_decline', label: "My health will continue to decline" },
]

const consequenceMessages: Record<FutureFear, { title: string; description: string; icon: string }> = {
  never_reach_goal: {
    title: "In 5 years: The Same Struggle",
    description: "Still trying the same diets, watching the same scale numbers, feeling the same frustration. Your dream body remains a fantasy.",
    icon: "⏰"
  },
  pass_habits_to_kids: {
    title: "In 5 years: A Family Pattern",
    description: "Your children learn that food is comfort, not fuel. They struggle with the same issues you're facing now.",
    icon: "👨‍👧‍👦"
  },
  keep_gaining: {
    title: "In 5 years: Another 30+ lbs",
    description: "Your wardrobe doesn't fit again. You avoid photos, skip events, and miss out on life. The cycle continues.",
    icon: "📈"
  },
  health_decline: {
    title: "In 5 years: Medication Dependence",
    description: "Mobility issues, chronic fatigue, blood pressure medications, pre-diabetes diagnoses. Your body pays the price.",
    icon: "💊"
  },
}

export default function FutureFearScreen({ value, onChange, onNext }: FutureFearScreenProps) {
  return (
    <div className="text-center">
      <motion.h2 
        className="question-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        What's your biggest fear if nothing changes?
      </motion.h2>
      
      <motion.p 
        className="text-feminine-gray-soft mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Be honest. This matters.
      </motion.p>
      
      <div className="space-y-3 mb-6">
        {fearOptions.map((option, index) => (
          <motion.label
            key={option.value}
            className={`card-option flex items-center gap-4 cursor-pointer ${value === option.value ? 'card-option-selected' : ''}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * (index + 2) }}
            whileHover={{ scale: 1.01 }}
          >
            <input
              type="radio"
              name="fear"
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="w-5 h-5"
            />
            <span className="font-medium">{option.label}</span>
          </motion.label>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {value && (
          <motion.div
            key={value}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-feminine-pink-light to-feminine-rose-light rounded-2xl p-6 mb-6 text-left"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl">{consequenceMessages[value].icon}</span>
              <div>
                <h3 className="font-display text-xl mb-2">{consequenceMessages[value].title}</h3>
                <p className="text-feminine-charcoal">{consequenceMessages[value].description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
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
