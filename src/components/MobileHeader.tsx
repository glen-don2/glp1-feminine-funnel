'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface MobileHeaderProps {
  showProgress?: boolean
  progress?: number
  currentScreen?: number
  totalScreens?: number
}

export default function MobileHeader({ 
  showProgress = true,
  progress = 0,
  currentScreen = 1,
  totalScreens = 17
}: MobileHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky-header transition-shadow ${isScrolled ? 'shadow-md' : ''} lg:hidden`}
      >
        <div className="max-w-lg mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-feminine-pink rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">GLP</span>
              </div>
              <span className="font-semibold text-feminine-charcoal text-sm">Assessment</span>
            </div>
            
            {showProgress && (
              <div className="flex items-center gap-2 flex-1 max-w-[150px]">
                <div className="flex-1 h-2 bg-feminine-pink-light rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-feminine-pink rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <span className="text-xs text-feminine-gray-soft whitespace-nowrap">
                  {currentScreen}/{totalScreens}
                </span>
              </div>
            )}
            
            <Link
              href="/quiz"
              className="bg-feminine-pink hover:bg-feminine-pink-dark text-white font-bold px-4 py-2 rounded-full text-sm transition-all duration-300 mobile-tap-target"
            >
              Continue
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
