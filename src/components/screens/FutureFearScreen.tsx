'use client'

import { motion } from 'framer-motion'
import { FutureFear } from '@/types/quiz'

interface FutureFearScreenProps {
  value: FutureFear | null
  onChange: (value: FutureFear) => void
  onNext: () => void
}

const fearOptions: { value: FutureFear; label: string; emoji: string; visual: string }[] = [
  { 
    value: 'never_reach_goal', 
    label: 'Never reaching my goal', 
    emoji: '🎯',
    visual: 'Stuck forever'
  },
  { 
    value: 'pass_habits_to_kids', 
    label: 'Passing this to my children', 
    emoji: '👨‍👩‍👧‍👦',
    visual: 'Generational cycle'
  },
  { 
    value: 'keep_gaining', 
    label: 'Continuous weight gain', 
    emoji: '📈',
    visual: 'Missing out on life'
  },
  { 
    value: 'health_decline', 
    label: 'Declining health', 
    emoji: '🏥',
    visual: 'Losing independence'
  },
]

export default function FutureFearScreen({ value, onChange, onNext }: FutureFearScreenProps) {
  return (
    <div className="text-center">
      <motion.div
        className="w-16 h-16 bg-gradient-to-br from-feminine-rose to-feminine-pink rounded-full flex items-center justify-center mx-auto mb-4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, type: 'spring' }}
      >
        <span className="text-3xl">🔮</span>
      </motion.div>

      <motion.h2 
        className="question-text mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        My biggest fear is...
      </motion.h2>
      
      <motion.p 
        className="text-feminine-gray-soft mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        If nothing changes, this becomes your reality
      </motion.p>
      
      {/* Visual card grid instead of text list */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        {fearOptions.map((option, index) => (
          <motion.button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`card-option p-4 text-center ${value === option.value ? 'card-option-selected ring-2 ring-feminine-rose' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 2) }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.span 
              className="text-3xl mb-2 block"
              animate={value === option.value ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              {option.emoji}
            </motion.span>
            <div className="font-semibold text-sm mb-1 leading-tight">{option.label}</div>
            <div className="text-xs text-feminine-gray-soft">{option.visual}</div>
            
            {/* Selection indicator */}
            {value === option.value && (
              <motion.div
                className="mt-2 flex justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span className="w-6 h-6 bg-feminine-rose rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
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
        {value ? 'Continue →' : 'Select your biggest fear'}
      </motion.button>
    </div>
  )
}
