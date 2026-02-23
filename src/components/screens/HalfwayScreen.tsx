'use client'

import { motion } from 'framer-motion'

interface HalfwayScreenProps {
  onContinue: () => void
}

export default function HalfwayScreen({ onContinue }: HalfwayScreenProps) {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-feminine-pink-light to-white rounded-3xl p-8 shadow-xl mb-8 border-2 border-feminine-pink"
      >
        <motion.div
          className="w-20 h-20 bg-feminine-pink rounded-full flex items-center justify-center mx-auto mb-6"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <span className="text-4xl">🎯</span>
        </motion.div>

        <motion.h2
          className="font-display text-2xl md:text-3xl mb-4 text-feminine-charcoal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          You&apos;re Halfway There!
        </motion.h2>

        <motion.p
          className="text-feminine-charcoal mb-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Your personalized protocol is almost ready.
        </motion.p>

        <motion.div
          className="bg-white rounded-xl p-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm font-medium text-feminine-charcoal mb-2">
            Almost done! At the end you&apos;ll get:
          </p>
          <ul className="text-sm text-feminine-gray-soft space-y-2 text-left">
            <li className="flex items-center gap-2">
              <span className="text-feminine-pink">✓</span>
              Your specific hormonal block diagnosis
            </li>
            <li className="flex items-center gap-2">
              <span className="text-feminine-pink">✓</span>
              Why diets have failed you until now
            </li>
            <li className="flex items-center gap-2">
              <span className="text-feminine-pink">✓</span>
              Your personalized 14-day protocol
            </li>
            <li className="flex items-center gap-2">
              <span className="text-feminine-pink">✓</span>
              Results from women like you
            </li>
          </ul>
        </motion.div>

        <motion.p
          className="text-feminine-pink-dark font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          👑 12,847 women started this assessment today
        </motion.p>
      </motion.div>

      <motion.button
        onClick={onContinue}
        className="btn-primary-glow w-full text-lg py-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        Continue My Assessment →
      </motion.button>
    </div>
  )
}
