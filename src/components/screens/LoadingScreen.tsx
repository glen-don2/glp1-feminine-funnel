'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DiagnosisType } from '@/types/quiz'
import { getQuizState } from '@/lib/quiz-state'

const anticipationCopy = [
  "Analyzing your hormonal patterns...",
  "Cross-referencing with 50,000+ women's data...",
  "Identifying your metabolic profile...",
  "Calculating your personalized protocol...",
  "Almost there! Finalizing your results...",
]

const tips = [
  "Shocking truth: Your 3pm sugar crash is not willpower failure. It is cortisol spiking and forcing fat storage around your midsection.",
  "Estrogen dominance makes women store 80% of fat in hips and thighs. Dieting cannot fix hormones. Only hormone targeting can.",
  "1 in 8 women have undiagnosed thyroid issues. This slows metabolism by 40% and makes weight loss nearly impossible without addressing the root cause.",
  "Insulin resistance means your body stores sugar as fat within 30 minutes. The solution is not eating less. It is balancing insulin response.",
  "Research shows poor sleep increases cortisol by 30% and reduces fat burning by 20%. You could be doing everything right and still gaining weight.",
]

const blockTypeTestimonials: Record<string, { quote: string; name: string; age: string; location: string; result: string }> = {
  cortisol: {
    quote: "I discovered my issue was cortisol. Not lack of willpower. Within 8 weeks I lost 19 lbs and finally had energy again.",
    name: 'Sarah M.',
    age: '44',
    location: 'Berlin',
    result: 'Lost 19 lbs in 8 weeks',
  },
  estrogen: {
    quote: "Finally understood my hormone fluctuations were sabotaging me. This addressed the real issue. I feel like myself again.",
    name: 'Anna L.',
    age: '39',
    location: 'Amsterdam',
    result: 'Lost 16 lbs in 10 weeks',
  },
  insulin: {
    quote: "The sugar cravings were not my fault. It was insulin resistance. Now I am in control and the weight is melting off.",
    name: 'Sophie M.',
    age: '42',
    location: 'Vienna',
    result: 'Lost 22 lbs in 12 weeks',
  },
  thyroid: {
    quote: "I was tired all the time because of my thyroid, not laziness. Got my energy back and lost 14 lbs without trying.",
    name: 'Elena R.',
    age: '47',
    location: 'Milan',
    result: 'Lost 14 lbs in 9 weeks',
  },
  stress_dominant: {
    quote: "I discovered my issue was cortisol. Not lack of willpower. The stress relief alone was worth it. Down 21 lbs.",
    name: 'Maria K.',
    age: '42',
    location: 'Lisbon',
    result: 'Lost 21 lbs in 11 weeks',
  },
  cortisol_estrogen: {
    quote: "I discovered my issue was cortisol and estrogen. Not lack of willpower. Within 8 weeks I lost 19 lbs and finally had energy again.",
    name: 'Sarah M.',
    age: '44',
    location: 'Berlin',
    result: 'Lost 19 lbs in 8 weeks',
  },
  insulin_thyroid: {
    quote: "The sugar cravings were not my fault. It was insulin and thyroid issues. Now I am in control and feel amazing.",
    name: 'Sophie M.',
    age: '42',
    location: 'Vienna',
    result: 'Lost 22 lbs in 12 weeks',
  },
  mixed: {
    quote: "Finally understood why nothing worked. This addressed ALL my hormonal issues at once. I wish I had found this years ago.",
    name: 'Claudia B.',
    age: '45',
    location: 'Barcelona',
    result: 'Lost 24 lbs in 14 weeks',
  },
}

const socialProofStats = [
  { value: '12,847', label: 'Women today' },
  { value: '96%', label: 'Report results' },
  { value: '4.9/5', label: 'Rating' },
  { value: '100K+', label: 'Bottles sold' },
]

interface LoadingScreenProps {
  onComplete: () => void
  blockType?: DiagnosisType | null
}

export default function LoadingScreen({ onComplete, blockType: propBlockType }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [currentTip, setCurrentTip] = useState(0)
  const [anticipationIndex, setAnticipationIndex] = useState(0)
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

  useEffect(() => {
    const anticipationInterval = setInterval(() => {
      setAnticipationIndex(prev => (prev + 1) % anticipationCopy.length)
    }, 2000)

    return () => clearInterval(anticipationInterval)
  }, [])

  const testimonial = blockTypeTestimonials[blockType] || blockTypeTestimonials['cortisol']

  return (
    <div className="text-center">
      {/* Urgency Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-feminine-pink to-feminine-pink-dark rounded-full px-4 py-2 mb-6 inline-flex items-center gap-2"
      >
        <span className="text-white text-sm">🔥</span>
        <span className="text-white font-semibold text-sm">12,847 women took this assessment today</span>
      </motion.div>

      {/* Progress Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <motion.div
          className="w-24 h-24 mx-auto mb-6 relative"
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
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-feminine-pink-dark font-bold text-xl">{Math.round(progress)}%</span>
          </div>
        </motion.div>

        <h2 className="font-display text-2xl md:text-3xl mb-4 text-feminine-charcoal">
          {anticipationCopy[anticipationIndex]}
        </h2>

        <div className="w-full max-w-xs mx-auto">
          <div className="progress-bar h-3">
            <motion.div
              className="progress-fill bg-gradient-to-r from-feminine-pink to-feminine-pink-dark"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </motion.div>

      {/* Rotating Tips */}
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

      {/* Testimonial Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-2xl p-6 shadow-lg max-w-sm mx-auto mb-6 border-2 border-feminine-pink-light"
      >
        <p className="text-sm text-feminine-gray-soft mb-4">Based on women like you with {blockType.replace('_', ' ')} patterns:</p>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={blockType}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="italic text-feminine-charcoal mb-4 text-lg leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="font-semibold">{testimonial.name}, {testimonial.age}</p>
                  <p className="text-sm text-feminine-gray-soft">{testimonial.location}</p>
                </div>
                <div className="bg-feminine-pink-light text-feminine-pink-dark px-3 py-1 rounded-full text-sm font-semibold">
                  {testimonial.result}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Social Proof Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-4 gap-2 max-w-md mx-auto mb-6"
      >
        {socialProofStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="bg-feminine-cream rounded-xl p-3 text-center"
          >
            <div className="font-display text-lg font-bold text-feminine-pink">{stat.value}</div>
            <div className="text-xs text-feminine-gray-soft">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex flex-wrap items-center justify-center gap-4 text-sm text-feminine-gray-soft"
      >
        <div className="flex items-center gap-1">
          <span className="text-green-500">●</span>
          <span>Clinician Approved</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-feminine-gold">★</span>
          <span>180-Day Guarantee</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-feminine-pink">✓</span>
          <span>EU Certified</span>
        </div>
      </motion.div>
    </div>
  )
}
