'use client'

import { motion } from 'framer-motion'
import { DietEmotion } from '@/types/quiz'

interface DietEmotionScreenProps {
  value: DietEmotion | null
  onChange: (value: DietEmotion) => void
  onNext: () => void
}

const emotionOptions: { value: DietEmotion; label: string }[] = [
  { value: 'frustrated', label: 'Frustrated that nothing sticks' },
  { value: 'ashamed', label: 'Ashamed that I lack willpower' },
  { value: 'angry', label: 'Angry that I wasted so much money' },
  { value: 'hopeless', label: 'Hopeless that I will never figure this out' },
]

export default function DietEmotionScreen({
  value,
  onChange,
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
        When you think about past diets and attempts, you feel...
      </motion.h2>

      <motion.p
        className="text-feminine-gray-soft mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Own the emotion. It is valid.
      </motion.p>

      <div className="space-y-3 mb-8">
        {emotionOptions.map((option, index) => (
          <motion.button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`card-option w-full text-left ${value === option.value ? 'card-option-selected' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 2) }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <span className="font-medium">{option.label}</span>
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
