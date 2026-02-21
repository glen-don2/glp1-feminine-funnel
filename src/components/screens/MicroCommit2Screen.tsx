'use client'

import { motion } from 'framer-motion'

interface MicroCommit2ScreenProps {
  value: boolean
  onYes: () => void
  onNo: () => void
}

export default function MicroCommit2Screen({ value, onYes, onNo }: MicroCommit2ScreenProps) {
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
          One more commitment...
        </motion.h2>
        
        <motion.p 
          className="text-feminine-charcoal mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          If we show you a solution that addresses your specific metabolic pattern—without the side effects 
          and rebound weight gain—would you be open to learning more?
        </motion.p>
        
        <motion.div 
          className="bg-feminine-cream rounded-xl p-4 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm italic text-feminine-gray-soft">
            "I commit to exploring a solution that could finally give me the body I deserve."
          </p>
        </motion.div>
      </motion.div>
      
      <div className="space-y-3">
        <motion.button
          onClick={onYes}
          className="btn-primary w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Yes, if there's a solution
        </motion.button>
        
        <motion.button
          onClick={onNo}
          className="text-feminine-gray-soft underline text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          I'll keep trying on my own
        </motion.button>
      </div>
    </div>
  )
}
