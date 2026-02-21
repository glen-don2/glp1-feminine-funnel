'use client'

import { motion } from 'framer-motion'
import { DietEmotion } from '@/types/quiz'

interface DietEmotionScreenProps {
  value: DietEmotion | null
  onChange: (value: DietEmotion) => void
  onNext: () => void
}

const emotionOptions: { value: DietEmotion; label: string; emoji: string }[] = [
  { value: 'frustrated', label: 'Frustrated', emoji: '😤' },
  { value: 'ashamed', label: 'Ashamed', emoji: '😔' },
  { value: 'angry', label: 'Angry', emoji: '😠' },
  { value: 'hopeless', label: 'Hopeless', emoji: '😢' },
]

export default function DietEmotionScreen({ value, onChange, onNext }: DietEmotionScreenProps) {
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
