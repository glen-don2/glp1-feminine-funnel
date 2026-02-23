'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface QuestionWithTooltipProps {
  children: React.ReactNode
  tooltipText: string
}

export function QuestionWithTooltip({ children, tooltipText }: QuestionWithTooltipProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-flex flex-col items-center w-full">
      <div className="flex items-center justify-center gap-2 w-full">
        {children}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex-shrink-0 w-6 h-6 rounded-full bg-feminine-pink-light text-feminine-pink-dark text-xs font-bold hover:bg-feminine-pink hover:text-white transition-colors flex items-center justify-center"
          aria-label="Why we ask this"
        >
          ?
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 w-64 px-4 py-3 bg-feminine-charcoal text-white text-sm rounded-xl z-50 ${isOpen ? 'visible' : 'invisible'}`}
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-feminine-charcoal rotate-45" />
        {tooltipText}
      </motion.div>
    </div>
  )
}

interface TooltipIconProps {
  text: string
}

export default function TooltipIcon({ text }: TooltipIconProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-feminine-pink-light text-feminine-pink-dark text-xs font-bold hover:bg-feminine-pink hover:text-white transition-colors"
        aria-label="More information"
      >
        i
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.9 }}
        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 px-3 py-2 bg-feminine-charcoal text-white text-xs rounded-lg z-50 ${isOpen ? 'visible' : 'invisible'}`}
      >
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-feminine-charcoal rotate-45" />
        {text}
      </motion.div>
    </div>
  )
}
