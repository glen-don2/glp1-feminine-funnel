'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getQuizState, saveQuizState } from '@/lib/quiz-state'

interface ExitIntentModalProps {
  onClose: () => void
  onReturn: () => void
}

export default function ExitIntentModal({ onClose, onReturn }: ExitIntentModalProps) {
  const [countdown, setCountdown] = useState(30)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleReturn = useCallback(() => {
    const state = getQuizState()
    saveQuizState(state)
    onReturn()
  }, [onReturn])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.1 }}
              className="w-16 h-16 bg-feminine-pink rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span className="text-3xl">⏰</span>
            </motion.div>

            <h3 className="font-display text-2xl font-bold text-feminine-charcoal mb-2">
              Wait! Your Progress Is Saved
            </h3>

            <p className="text-feminine-gray-soft mb-4">
              We noticed you&apos;re about to leave. Your assessment progress has been saved so you can continue where you left off.
            </p>

            <div className="bg-feminine-pink-light rounded-xl p-4 mb-6">
              <p className="text-sm font-medium text-feminine-charcoal mb-2">
                🎁 Special offer for returning:
              </p>
              <p className="text-sm text-feminine-gray-soft">
                Complete your assessment today and get <span className="font-bold text-feminine-pink-dark">20% off</span> your first order.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleReturn}
                className="btn-primary-glow w-full mobile-tap-target"
              >
                Continue My Assessment →
              </button>
              
              <button
                onClick={onClose}
                className="text-feminine-gray-soft text-sm hover:text-feminine-charcoal transition-colors mobile-tap-target py-2"
              >
                No thanks, I&apos;ll continue later
              </button>
            </div>

            <p className="text-xs text-feminine-gray-soft mt-4">
              Your progress will be saved for {countdown} minutes
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
