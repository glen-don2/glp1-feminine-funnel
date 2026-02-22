'use client'

import { motion } from 'framer-motion'
import { DietEmotion, EmotionSeverity } from '@/types/quiz'

interface DietEmotionScreenProps {
  value: DietEmotion | null
  severityValue: EmotionSeverity | null
  onChange: (value: DietEmotion) => void
  onSeverityChange: (value: EmotionSeverity) => void
  onNext: () => void
}

const emotionOptions: { value: DietEmotion; label: string; emoji: string }[] = [
  { value: 'frustrated', label: 'Frustrated', emoji: '😤' },
  { value: 'ashamed', label: 'Ashamed', emoji: '😔' },
  { value: 'angry', label: 'Angry', emoji: '😠' },
  { value: 'hopeless', label: 'Hopeless', emoji: '😢' },
]

const severityLabels: Record<EmotionSeverity, string> = {
  1: 'Mild',
  2: 'Moderate',
  3: 'Strong',
  4: 'Overwhelming',
}

const severityColors: Record<EmotionSeverity, string> = {
  1: 'bg-green-400',
  2: 'bg-yellow-400',
  3: 'bg-orange-500',
  4: 'bg-red-500',
}

export default function DietEmotionScreen({ 
  value, 
  severityValue,
  onChange, 
  onSeverityChange,
  onNext 
}: DietEmotionScreenProps) {
  return (
    <div className="text-center">
      <motion.h2 
        className="question-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        How do past diets make you feel?
      </motion.h2>
      
      <motion.p 
        className="text-feminine-gray-soft mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        It's okay to feel this way. You're not alone.
      </motion.p>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        {emotionOptions.map((option, index) => (
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
            <span className="text-4xl mb-2 block">{option.emoji}</span>
            <span className="font-semibold">{option.label}</span>
          </motion.button>
        ))}
      </div>

      {value && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <p className="font-display text-lg mb-4">How intense is this feeling?</p>
          
          <div className="flex justify-between gap-2 mb-3">
            {([1, 2, 3, 4] as EmotionSeverity[]).map((level) => (
              <button
                key={level}
                onClick={() => onSeverityChange(level)}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                  severityValue === level 
                    ? `${severityColors[level]} text-white` 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
          
          <div className="flex justify-between text-sm text-feminine-gray-soft px-2">
            <span>Mild</span>
            <span>Overwhelming</span>
          </div>
        </motion.div>
      )}
      
      <motion.button
        onClick={onNext}
        disabled={!value || !severityValue}
        className={`btn-primary ${(!value || !severityValue) ? 'opacity-50 cursor-not-allowed' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Continue
      </motion.button>
    </div>
  )
}
