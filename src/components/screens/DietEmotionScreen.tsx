'use client'

import { motion } from 'framer-motion'
import { DietEmotion } from '@/types/quiz'

interface DietEmotionScreenProps {
  value: DietEmotion | null
  onChange: (value: DietEmotion) => void
  onNext: () => void
}

const emotionOptions: { value: DietEmotion; label: string; feeling: string }[] = [
  { value: 'frustrated', label: 'Frustrated that nothing sticks', feeling: 'Like I am spinning my wheels' },
  { value: 'ashamed', label: 'Ashamed that I lack willpower', feeling: 'Like something is wrong with me' },
  { value: 'angry', label: 'Angry that I wasted so much money', feeling: 'Like I have been taken advantage of' },
  { value: 'hopeless', label: 'Hopeless that I will never figure this out', feeling: 'Like giving up is the only option' },
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
        Your feelings are valid. Name them.
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
            <div className="font-medium mb-1">{option.label}</div>
            <div className="text-sm text-feminine-gray-soft italic">{option.feeling}</div>
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
