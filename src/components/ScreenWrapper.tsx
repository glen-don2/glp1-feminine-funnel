'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface ScreenWrapperProps {
  children: React.ReactNode
  screenNumber?: number
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: -50,
  },
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
}

export default function ScreenWrapper({ children, screenNumber }: ScreenWrapperProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={screenNumber}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full max-w-lg mx-auto"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
