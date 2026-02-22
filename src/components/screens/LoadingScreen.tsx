'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DiagnosisType } from '@/types/quiz'
import { getQuizState } from '@/lib/quiz-state'

const tips = [
  "Shocking truth: Your 3pm sugar crash isn't willpower failure. It's cortisol spiking and forcing fat storage around your midsection.",
  "Estrogen dominance makes women store 80% of fat in hips and thighs. Dieting can't fix hormones. Only hormone targeting can.",
  "1 in 8 women have undiagnosed thyroid issues. This slows metabolism by 40% and makes weight loss nearly impossible without addressing the root cause.",
  "Insulin resistance means your body stores sugar as fat within 30 minutes. The solution isn't eating less. It's balancing insulin response.",
  "Research shows poor sleep increases cortisol by 30% and reduces fat burning by 20%. You could be doing everything right and still gaining weight.",
]

const blockTypeTestimonials: Record<string, { quote: string; name: string }> = {
  cortisol: {
    quote: "I discovered my issue was cortisol — not lack of willpower. The stress relief alone was worth it.",
    name: 'Maria K.',
  },
  estrogen: {
    quote: "Finally understood my hormone fluctuations were sabotaging me. This addressed the real issue.",
    name: 'Anna L.',
  },
  insulin: {
    quote: "The sugar cravings weren't my fault — it was insulin resistance. Now I'm in control.",
    name: 'Sophie M.',
  },
  thyroid: {
    quote: "I was tired all the time because of my thyroid, not laziness. Got my energy back!",
    name: 'Elena R.',
  },
  stress_dominant: {
    quote: "I discovered my issue was cortisol — not lack of willpower. The stress relief alone was worth it.",
    name: 'Maria K.',
  },
  cortisol_estrogen: {
    quote: "I discovered my issue was cortisol — not lack of willpower. The stress relief alone was worth it.",
    name: 'Maria K.',
  },
  insulin_thyroid: {
    quote: "The sugar cravings weren't my fault — it was insulin resistance. Now I'm in control.",
    name: 'Sophie M.',
  },
  mixed: {
    quote: "Finally understood why nothing worked. This addressed ALL my hormonal issues at once.",
    name: 'Claudia B.',
  },
}

interface LoadingScreenProps {
  onComplete: () => void
  blockType?: DiagnosisType | null
}

export default function LoadingScreen({ onComplete, blockType: propBlockType }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [currentTip, setCurrentTip] = useState(0)
  const [blockType, setBlockType] = useState<string>('cortisol')

  useEffect(() => {
    if (propBlockType) {
      setBlockType(propBlockType)
    } else {
      const state = getQuizState()
      if (state.diagnosis) {
        setBlockType(state.diagnosis)
      }
    }
  }, [propBlockType])

  useEffect(() => {
    // Reduced from 12 seconds (120 * 100ms) to 8 seconds (80 * 100ms)
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + (100 / 80)
      })
    }, 100)

    return () => clearInterval(interval)
  }, [onComplete])

  useEffect(() => {
    const tipInterval = setInterval(() => {
      setCurrentTip(prev => (prev + 1) % tips.length)
    }, 3000)

    return () => clearInterval(tipInterval)
  }, [])

  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <motion.div
          className="w-20 h-20 mx-auto mb-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#FDE8ED"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#F8B4C4"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${progress * 2.83} 283`}
              transform="rotate(-90 50 50)"
            />
          </svg>
        </motion.div>

        <h2 className="font-display text-2xl md:text-3xl mb-4">
          Analyzing Your Responses...
        </h2>

        <p className="text-feminine-gray-soft mb-6">
          {progress < 30 && 'Processing your metabolic patterns...'}
          {progress >= 30 && progress < 60 && 'Identifying hormonal imbalances...'}
          {progress >= 60 && progress < 90 && 'Calculating your personalized diagnosis...'}
          {progress >= 90 && 'Almost ready...'}
        </p>

        <div className="w-full max-w-xs mx-auto">
          <div className="progress-bar h-2">
            <motion.div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-feminine-gray-soft mt-2">{Math.round(progress)}%</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-feminine-pink-light rounded-2xl p-4 max-w-md mx-auto mb-6"
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={currentTip}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-feminine-charcoal font-medium"
          >
            💡 {tips[currentTip]}
          </motion.p>
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-2xl p-6 shadow-lg max-w-sm mx-auto"
      >
        <p className="text-sm text-feminine-gray-soft mb-4">Based on your {blockType.replace('_', ' ')} block type:</p>

        <div className="relative h-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={blockType}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <p className="italic text-feminine-charcoal mb-3">
                "{blockTypeTestimonials[blockType]?.quote || blockTypeTestimonials['cortisol'].quote}"
              </p>
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="font-semibold">{blockTypeTestimonials[blockType]?.name || 'Sarah M.'}</p>
                  <p className="text-sm text-feminine-gray-soft">
                    Verified Customer
                  </p>
                </div>
                <div className="bg-feminine-pink-light text-feminine-pink-dark px-3 py-1 rounded-full text-sm font-semibold">
                  Real Results
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 flex items-center justify-center gap-4 text-sm text-feminine-gray-soft"
      >
        <div className="flex items-center gap-1">
          <span className="text-green-500">●</span>
          <span>12,847 women helped</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-feminine-gold">★</span>
          <span>4.9/5 rating</span>
        </div>
      </motion.div>
    </div>
  )
}
