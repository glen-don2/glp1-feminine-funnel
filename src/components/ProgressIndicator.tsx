'use client'

import { motion } from 'framer-motion'

interface ProgressIndicatorProps {
  currentScreen: number
  totalScreens: number
}

export default function ProgressIndicator({ currentScreen, totalScreens }: ProgressIndicatorProps) {
  const progress = (currentScreen / totalScreens) * 100
  
  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="flex justify-between text-sm text-feminine-gray-soft mb-2">
        <span>Question {currentScreen} of {totalScreens}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="progress-bar">
        <motion.div 
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
