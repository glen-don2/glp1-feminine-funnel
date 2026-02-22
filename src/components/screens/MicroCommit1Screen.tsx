'use client'

import { motion } from 'framer-motion'

interface MicroCommit1ScreenProps {
  onYes: () => void
}

export default function MicroCommit1Screen({ onYes }: MicroCommit1ScreenProps) {
  return (
    <div className="text-center">
      <motion.h2 
        className="question-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Ready to fix this?
      </motion.h2>
      
      <motion.p 
        className="text-feminine-gray-soft mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        You just admitted what has been blocking your progress.
      </motion.p>
      
      <motion.button
        onClick={onYes}
        className="btn-primary w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Yes, I am ready to fix this
      </motion.button>
    </div>
  )
}
