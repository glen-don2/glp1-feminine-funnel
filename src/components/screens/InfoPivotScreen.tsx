'use client'

import { motion } from 'framer-motion'

interface InfoPivotScreenProps {
  onNext: () => void
}

export default function InfoPivotScreen({ onNext }: InfoPivotScreenProps) {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl p-8 shadow-xl mb-8"
      >
        <motion.div 
          className="text-feminine-gold text-sm font-semibold tracking-wider mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          IMPORTANT DISCOVERY
        </motion.div>
        
        <motion.h2 
          className="font-display text-2xl md:text-3xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Your Weight Struggle Isn't Your Fault
        </motion.h2>
        
        <motion.div 
          className="text-left space-y-4 text-feminine-charcoal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>
            Here's what the weight loss industry doesn't want you to know...
          </p>
          
          <div className="bg-feminine-blush rounded-xl p-4">
            <p className="font-semibold text-feminine-pink-dark mb-2">The Ozempic Problem:</p>
            <ul className="text-sm space-y-1">
              <li>❌ Designed for diabetes, not weight loss</li>
              <li>❌ Ignores women's unique hormonal needs</li>
              <li>❌ Causes muscle loss, not just fat loss</li>
              <li>❌ Weight returns 90% of the time after stopping</li>
            </ul>
          </div>
          
          <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
            <p className="font-semibold text-green-700 mb-2">The GLP-1 Feminine Approach:</p>
            <ul className="text-sm space-y-1">
              <li>✓ Designed specifically for women's bodies</li>
              <li>✓ Balances cortisol & estrogen naturally</li>
              <li>✓ Preserves lean muscle while burning fat</li>
              <li>✓ Creates lasting metabolic change</li>
            </ul>
          </div>
          
          <p className="text-center italic text-feminine-gray-soft pt-2">
            Your answers reveal which hormonal pattern is blocking you...
          </p>
        </motion.div>
      </motion.div>
      
      <motion.button
        onClick={onNext}
        className="btn-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        See My Personal Diagnosis
      </motion.button>
    </div>
  )
}
