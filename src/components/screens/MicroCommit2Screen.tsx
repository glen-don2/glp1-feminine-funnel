'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

interface MicroCommit2ScreenProps {
  value: boolean
  onYes: () => void
  onNo: () => void
}

export default function MicroCommit2Screen({ value, onYes }: MicroCommit2ScreenProps) {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault()
      return ''
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl p-8 shadow-xl mb-8"
      >
        <motion.div
          className="w-16 h-16 bg-feminine-gold-light rounded-full flex items-center justify-center mx-auto mb-6"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <span className="text-3xl">✨</span>
        </motion.div>

        <motion.h2
          className="font-display text-2xl md:text-3xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Your diagnosis is ready.
        </motion.h2>

        <motion.p
          className="text-feminine-charcoal mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          We have identified your specific hormonal blocks. Thousands of women with your exact pattern have transformed their bodies using our targeted approach.
        </motion.p>

        <motion.div
          className="bg-feminine-cream rounded-xl p-4 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm font-medium text-feminine-charcoal mb-2">
            In the next 60 seconds, you will discover:
          </p>
          <ul className="text-sm text-feminine-gray-soft space-y-1">
            <li>✓ Your specific hormonal block type</li>
            <li>✓ Why diets have failed you</li>
            <li>✓ The exact protocol for your body</li>
            <li>✓ Real results from women like you</li>
          </ul>
        </motion.div>

        <motion.p
          className="text-feminine-pink font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          No injections. No extreme dieting. Just results.
        </motion.p>
      </motion.div>

      <motion.button
        onClick={onYes}
        className="btn-primary w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        Yes. Show me my diagnosis.
      </motion.button>
    </div>
  )
}
