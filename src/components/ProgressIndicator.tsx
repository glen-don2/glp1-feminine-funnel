'use client'

import { motion } from 'framer-motion'

interface ProgressIndicatorProps {
  currentScreen: number
  totalScreens: number
}

export default function ProgressIndicator({ currentScreen, totalScreens }: ProgressIndicatorProps) {
  const progress = Math.round(((currentScreen - 1) / (totalScreens - 1)) * 100)
  
  const getMotivationalText = () => {
    if (progress < 25) return 'Getting started...'
    if (progress < 50) return 'Great progress!'
    if (progress < 75) return 'You\'re almost there!'
    return 'Final step!'
  }
  
  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="text-feminine-gray-soft">Question {currentScreen} of {totalScreens}</span>
        <div className="flex items-center gap-2">
          <motion.span 
            key={progress}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="font-bold text-feminine-pink-dark"
          >
            {Math.round(progress)}%
          </motion.span>
          <span className="text-feminine-gray-soft hidden sm:inline">•</span>
          <span className="text-feminine-pink-dark font-medium text-xs hidden sm:block">{getMotivationalText()}</span>
        </div>
      </div>
      <div className="progress-bar-enhanced">
        <motion.div 
          className="progress-fill-enhanced"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      <div className="flex justify-center mt-2 gap-1">
        {[...Array(Math.min(totalScreens, 12))].map((_, i) => {
          const screenIndex = Math.floor((i / 12) * totalScreens) + 1
          const isActive = screenIndex === currentScreen
          const isCompleted = screenIndex < currentScreen
          return (
            <motion.div
              key={i}
              className={`w-2 h-2 rounded-full ${
                isActive 
                  ? 'bg-feminine-pink shadow-glow' 
                  : isCompleted 
                    ? 'bg-feminine-pink-dark' 
                    : 'bg-feminine-pink-light'
              }`}
              animate={isActive ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )
        })}
      </div>
    </div>
  )
}
