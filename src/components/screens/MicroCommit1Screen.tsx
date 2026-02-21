'use client'

import { motion } from 'framer-motion'

interface MicroCommit1ScreenProps {
  value: boolean
  onYes: () => void
  onNo: () => void
}

export default function MicroCommit1Screen({ value, onYes, onNo }: MicroCommit1ScreenProps) {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl p-8 shadow-xl mb-8"
      >
        <motion.div 
          className="w-16 h-16 bg-feminine-pink-light rounded-full flex items-center justify-center mx-auto mb-6"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <span className="text-3xl">💝</span>
        </motion.div>
        
        <motion.h2 
          className="font-display text-2xl md:text-3xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          We've analyzed your responses
        </motion.h2>
        
        <motion.p 
          className="text-feminine-charcoal mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Based on your answers, we've identified a specific metabolic pattern that's been holding you back. 
          Are you ready to see your personalized diagnosis?
        </motion.p>
      </motion.div>
      
      <div className="space-y-3">
        <motion.button
          onClick={onYes}
          className="btn-primary w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Yes, show me my diagnosis
        </motion.button>
        
        <motion.button
          onClick={onNo}
          className="btn-secondary w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I'm not ready yet
        </motion.button>
      </div>
    </div>
  )
}
