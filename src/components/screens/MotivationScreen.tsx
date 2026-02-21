'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface MotivationScreenProps {
  value: string
  onChange: (value: string) => void
  onNext: () => void
}

export default function MotivationScreen({ value, onChange, onNext }: MotivationScreenProps) {
  const [localValue, setLocalValue] = useState(value)
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLocalValue(e.target.value)
    onChange(e.target.value)
  }
  
  return (
    <div className="text-center">
      <motion.h2 
        className="question-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Why do you want this transformation?
      </motion.h2>
      
      <motion.p 
        className="text-feminine-gray-soft mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        This is your anchor. Be honest with yourself.
      </motion.p>
      
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <textarea
          value={localValue}
          onChange={handleChange}
          placeholder="I want to finally feel confident in my own skin, wear the clothes I love, and have the energy to play with my kids..."
          rows={4}
          className="w-full"
        />
      </motion.div>
      
      <motion.button
        onClick={onNext}
        disabled={!localValue.trim()}
        className={`btn-primary ${!localValue.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Continue
      </motion.button>
    </div>
  )
}
