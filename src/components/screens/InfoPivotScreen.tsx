'use client'

import { motion } from 'framer-motion'

interface InfoPivotScreenProps {
  onNext: () => void
}

// Visual hormone blocks with icons
const hormoneBlocks = [
  { 
    icon: '📈', 
    label: 'Cortisol', 
    effect: '+40% fat storage',
    color: 'from-red-100 to-red-50',
    barColor: 'bg-red-400',
    percentage: 85
  },
  { 
    icon: '⚖️', 
    label: 'Metabolism', 
    effect: '-30% slower',
    color: 'from-amber-100 to-amber-50',
    barColor: 'bg-amber-400',
    percentage: 65
  },
  { 
    icon: '🩺', 
    label: 'Health Risk', 
    effect: '73% develop syndrome',
    color: 'from-rose-100 to-rose-50',
    barColor: 'bg-rose-400',
    percentage: 73
  },
]

// Year-over-year progression visualization
const yearProgression = [
  { year: 'Now', weight: 'Current', color: 'bg-feminine-pink', height: 'h-16' },
  { year: '+1 Year', weight: '+12% harder', color: 'bg-amber-400', height: 'h-20' },
  { year: '+3 Years', weight: '+40% harder', color: 'bg-orange-400', height: 'h-28' },
  { year: '+5 Years', weight: 'Metabolic syndrome', color: 'bg-red-500', height: 'h-36' },
]

export default function InfoPivotScreen({ onNext }: InfoPivotScreenProps) {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl p-6 shadow-xl mb-6"
      >
        {/* Warning pulse icon */}
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <motion.span 
            className="text-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ⚠️
          </motion.span>
        </motion.div>

        <motion.h2
          className="font-display text-xl md:text-2xl mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          What happens if you do nothing?
        </motion.h2>

        <motion.p
          className="text-sm text-feminine-gray-soft mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          Your body is sending warning signals
        </motion.p>

        {/* Visual hormone impact cards */}
        <motion.div
          className="grid grid-cols-3 gap-3 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {hormoneBlocks.map((block, idx) => (
            <motion.div
              key={block.label}
              className={`bg-gradient-to-br ${block.color} rounded-2xl p-3 text-center`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
            >
              <span className="text-2xl mb-1 block">{block.icon}</span>
              <p className="text-xs font-semibold text-feminine-charcoal">{block.label}</p>
              {/* Visual progress bar */}
              <div className="mt-2 h-1.5 bg-white/50 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${block.barColor} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${block.percentage}%` }}
                  transition={{ delay: 0.8 + idx * 0.2, duration: 0.8 }}
                />
              </div>
              <p className="text-[10px] text-feminine-gray-soft mt-1">{block.effect}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Year progression visualization */}
        <motion.div
          className="bg-feminine-cream rounded-2xl p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-xs font-medium text-feminine-charcoal mb-3 text-center">
            Without intervention, it only gets harder
          </p>
          <div className="flex items-end justify-between gap-2 h-40">
            {yearProgression.map((year, idx) => (
              <motion.div
                key={year.year}
                className="flex flex-col items-center flex-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + idx * 0.15 }}
              >
                <motion.div
                  className={`w-full ${year.color} rounded-t-lg relative`}
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  transition={{ delay: 0.8 + idx * 0.15, duration: 0.5 }}
                  style={{ minHeight: year.height.replace('h-', '') }}
                >
                  <div className={`${year.height} flex items-center justify-center`}>
                    <span className="text-white font-bold text-xs transform -rotate-90 whitespace-nowrap">
                      {year.weight}
                    </span>
                  </div>
                </motion.div>
                <p className="text-[10px] text-feminine-gray-soft mt-2">{year.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Hope pivot card */}
      <motion.div
        className="bg-gradient-to-r from-green-50 to-feminine-pink-light rounded-2xl p-4 mb-6 border border-green-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">💡</span>
          <p className="text-sm font-medium text-feminine-charcoal text-left">
            The good news: Your body <em>wants</em> to release this weight. It just needs the right signals.
          </p>
        </div>
      </motion.div>

      <motion.button
        onClick={onNext}
        className="btn-primary w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        See Your Solution →
      </motion.button>
    </div>
  )
}
