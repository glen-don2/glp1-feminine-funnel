'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Testimonial } from '@/types/quiz'

const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    age: 42,
    location: 'London',
    image: '',
    quote: "I'd tried everything. GLP-1 Feminine was the first thing that addressed my cortisol issues.",
    weightLost: '18 lbs',
  },
  {
    name: 'Jennifer K.',
    age: 38,
    location: 'Manchester',
    image: '',
    quote: "Finally understood why my belly fat wouldn't budge. Game changer.",
    weightLost: '24 lbs',
  },
  {
    name: 'Emma T.',
    age: 51,
    location: 'Birmingham',
    image: '',
    quote: "No more energy crashes. I feel like myself again.",
    weightLost: '31 lbs',
  },
  {
    name: 'Rebecca L.',
    age: 45,
    location: 'Edinburgh',
    image: '',
    quote: "My doctor was shocked at my blood work improvements.",
    weightLost: '27 lbs',
  },
]

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + (100 / 120)
      })
    }, 100)
    
    return () => clearInterval(interval)
  }, [onComplete])
  
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
    }, 3000)
    
    return () => clearInterval(testimonialInterval)
  }, [])
  
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <motion.div 
          className="w-20 h-20 mx-auto mb-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#FDE8ED"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#F8B4C4"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${progress * 2.83} 283`}
              transform="rotate(-90 50 50)"
            />
          </svg>
        </motion.div>
        
        <h2 className="font-display text-2xl md:text-3xl mb-4">
          Analyzing Your Responses...
        </h2>
        
        <p className="text-feminine-gray-soft mb-6">
          {progress < 30 && 'Processing your metabolic patterns...'}
          {progress >= 30 && progress < 60 && 'Identifying hormonal imbalances...'}
          {progress >= 60 && progress < 90 && 'Calculating your personalized diagnosis...'}
          {progress >= 90 && 'Almost ready...'}
        </p>
        
        <div className="w-full max-w-xs mx-auto">
          <div className="progress-bar h-2">
            <motion.div 
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-feminine-gray-soft mt-2">{Math.round(progress)}%</p>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-2xl p-6 shadow-lg max-w-sm mx-auto"
      >
        <p className="text-sm text-feminine-gray-soft mb-4">While you wait, see what others are saying:</p>
        
        <div className="relative h-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <p className="italic text-feminine-charcoal mb-3">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-feminine-gray-soft">
                    {testimonials[currentTestimonial].age}, {testimonials[currentTestimonial].location}
                  </p>
                </div>
                <div className="bg-feminine-pink-light text-feminine-pink-dark px-3 py-1 rounded-full text-sm font-semibold">
                  -{testimonials[currentTestimonial].weightLost}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center gap-1 mt-4">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentTestimonial ? 'bg-feminine-pink' : 'bg-feminine-pink-light'
              }`}
            />
          ))}
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 flex items-center justify-center gap-4 text-sm text-feminine-gray-soft"
      >
        <div className="flex items-center gap-1">
          <span className="text-green-500">●</span>
          <span>12,847 women helped</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-feminine-gold">★</span>
          <span>4.9/5 rating</span>
        </div>
      </motion.div>
    </div>
  )
}
