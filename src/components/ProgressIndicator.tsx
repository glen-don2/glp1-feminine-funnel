'use client'

import { motion } from 'framer-motion'

interface ProgressIndicatorProps {
  currentScreen: number
  totalScreens: number
}

export default function ProgressIndicator({ currentScreen, totalScreens }: ProgressIndicatorProps) {
  const getProgressJump = (screen: number): number => {
    if (screen <= 3) return 25
    if (screen <= 8) return 10
    return 5
  }

  const calculateProgress = () => {
    let progress = 0
    for (let i = 1; i < currentScreen; i++) {
      progress += getProgressJump(i)
    }
    progress += getProgressJump(currentScreen)
    return Math.min(progress, 100)
  }

  const progress = calculateProgress()
  
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
