'use client'

import { motion } from 'framer-motion'

interface InfoPivotScreenProps {
  onNext: () => void
}

export default function InfoPivotScreen({ onNext }: InfoPivotScreenProps) {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl p-6 shadow-xl mb-6"
      >
        <motion.div
          className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <span className="text-2xl">⚠️</span>
        </motion.div>

        <motion.h2
          className="font-display text-xl md:text-2xl mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          What happens if you do nothing?
        </motion.h2>

        <motion.div
          className="space-y-3 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-feminine-cream rounded-xl p-3">
            <p className="text-sm font-medium text-feminine-charcoal mb-1">Your hormones will keep working against you</p>
            <p className="text-xs text-feminine-gray-soft">Cortisol dominance increases fat storage by 40% year over year</p>
          </div>
          
          <div className="bg-feminine-cream rounded-xl p-3">
            <p className="text-sm font-medium text-feminine-charcoal mb-1">The weight becomes harder to lose</p>
            <p className="text-xs text-feminine-gray-soft">Every failed diet slows your metabolism further</p>
          </div>
          
          <div className="bg-feminine-cream rounded-xl p-3">
            <p className="text-sm font-medium text-feminine-charcoal mb-1">Health risks compound silently</p>
            <p className="text-xs text-feminine-gray-soft">73% of women with untreated hormonal blocks develop metabolic syndrome within 5 years</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-feminine-pink-light rounded-2xl p-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-sm font-medium text-feminine-charcoal">
          But there is good news. Your body wants to release this weight. It just needs the right signals.
        </p>
      </motion.div>

      <motion.button
        onClick={onNext}
        className="btn-primary w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        Continue
      </motion.button>
    </div>
  )
}
