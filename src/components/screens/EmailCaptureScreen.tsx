'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface EmailCaptureScreenProps {
  value: string
  onChange: (email: string) => void
  onNext: () => void
}

export default function EmailCaptureScreen({ value, onChange, onNext }: EmailCaptureScreenProps) {
  const [error, setError] = useState('')
  
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }
  
  const handleSubmit = () => {
    if (!value.trim()) {
      setError('Please enter your email address')
      return
    }
    if (!validateEmail(value)) {
      setError('Please enter a valid email address')
      return
    }
    setError('')
    onNext()
  }
  
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl p-8 shadow-xl mb-8"
      >
        <motion.div 
          className="w-16 h-16 bg-gradient-to-br from-feminine-pink to-feminine-rose rounded-full flex items-center justify-center mx-auto mb-6"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <span className="text-3xl">✉️</span>
        </motion.div>
        
        <motion.h2
          className="font-display text-2xl md:text-3xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Your diagnosis is ready. Where should we send it?
        </motion.h2>
        
        <motion.p 
          className="text-feminine-charcoal mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Where should we send your personalized results?
        </motion.p>
        
        <motion.div 
          className="bg-gradient-to-br from-feminine-cream to-feminine-pink-light rounded-2xl p-6 mb-6 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-medium text-feminine-charcoal mb-4">You'll receive:</p>
          <ul className="space-y-3">
            {[
              'Your personalized diagnosis (PDF)',
              "The 'Hormone Reset' quick-start guide",
              'Exclusive launch pricing (€50 off)',
            ].map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-feminine-rose flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-feminine-charcoal">{benefit}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <input
            type="email"
            value={value}
            onChange={(e) => {
              onChange(e.target.value)
              setError('')
            }}
            placeholder="Enter your email address"
            className="w-full px-6 py-4 border-2 border-feminine-pink-light rounded-xl text-feminine-charcoal placeholder-feminine-gray-soft focus:outline-none focus:border-feminine-rose transition-colors text-center"
          />
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
        </motion.div>
      </motion.div>
      
      <div className="space-y-3">
        <motion.button
          onClick={handleSubmit}
          className="btn-primary w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Show My Diagnosis →
        </motion.button>
        
        <motion.p 
          className="text-xs text-feminine-gray-soft"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          *We respect your privacy. Unsubscribe anytime.*
        </motion.p>
      </div>
    </div>
  )
}
