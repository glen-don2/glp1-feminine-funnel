'use client'

import { motion } from 'framer-motion'
import { DietEmotion } from '@/types/quiz'

interface DietEmotionScreenProps {
  value: DietEmotion | null
  onChange: (value: DietEmotion) => void
  onNext: () => void
}

const emotionOptions: { value: DietEmotion; label: string; emoji: string; color: string }[] = [
  { value: 'frustrated', label: 'Frustrated', emoji: '😤', color: 'from-orange-100 to-amber-50' },
  { value: 'ashamed', label: 'Ashamed', emoji: '😔', color: 'from-blue-100 to-indigo-50' },
  { value: 'angry', label: 'Angry', emoji: '😠', color: 'from-red-100 to-rose-50' },
  { value: 'hopeless', label: 'Hopeless', emoji: '😞', color: 'from-gray-100 to-slate-50' },
]

export default function DietEmotionScreen({
  value,
  onChange,
  onNext
}: DietEmotionScreenProps) {
  return (
    <div className="text-center">
      <motion.div
        className="w-16 h-16 bg-gradient-to-br from-feminine-rose to-feminine-pink rounded-full flex items-center justify-center mx-auto mb-4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, type: 'spring' }}
      >
        <span className="text-3xl">💭</span>
      </motion.div>

      <motion.h2
        className="question-text mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        Past diets make me feel...
      </motion.h2>

      <motion.p
        className="text-feminine-gray-soft mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Your feelings are valid. Which resonates most?
      </motion.p>

      {/* Visual emotion cards - 2x2 grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {emotionOptions.map((option, index) => (
          <motion.button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`relative overflow-hidden rounded-2xl p-5 transition-all duration-300 border-2 ${
              value === option.value 
                ? 'border-feminine-rose shadow-lg scale-105' 
                : 'border-transparent hover:border-feminine-rose/30'
            }`}
            style={{
              background: value === option.value 
                ? 'linear-gradient(135deg, #FDE8ED 0%, #FFF5F7 100%)' 
                : `linear-gradient(135deg, ${option.color.includes('orange') ? '#FFEDD5' : option.color.includes('blue') ? '#DBEAFE' : option.color.includes('red') ? '#FEE2E2' : '#F1F5F9'} 0%, white 100%)`
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 2) }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.span 
              className="text-4xl mb-2 block"
              animate={value === option.value ? { 
                scale: [1, 1.2, 1],
                rotate: [0, -10, 10, 0]
              } : {}}
              transition={{ duration: 0.5 }}
            >
              {option.emoji}
            </motion.span>
            <span className="font-semibold text-feminine-charcoal">{option.label}</span>
            
            {value === option.value && (
              <motion.div
                className="absolute top-2 right-2 w-6 h-6 bg-feminine-rose rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>

      <motion.button
        onClick={onNext}
        disabled={!value}
        className={`btn-primary w-full ${!value ? 'opacity-50 cursor-not-allowed' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Continue →
      </motion.button>
    </div>
  )
}
