'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface MobileStickyCTAProps {
  showOnScreens?: number[]
  ctaText?: string
  showAfterScroll?: boolean
}

export default function MobileStickyCTA({ 
  showOnScreens, 
  ctaText = "Continue My Assessment →",
  showAfterScroll = true 
}: MobileStickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const shouldShow = showAfterScroll ? scrollPosition > 300 : true
      setHasScrolled(scrollPosition > 300)
      setIsVisible(shouldShow)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [showAfterScroll])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="floating-cta lg:hidden"
        >
          <div className="max-w-lg mx-auto flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-xs text-feminine-gray-soft">Join 12,847 women today</p>
              <p className="text-sm font-semibold text-feminine-charcoal">Your results are ready</p>
            </div>
            <Link
              href="/quiz"
              className="bg-feminine-pink hover:bg-feminine-pink-dark text-white font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap text-sm mobile-tap-target flex items-center gap-2"
            >
              {ctaText}
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
