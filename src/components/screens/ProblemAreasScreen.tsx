'use client'

import { motion } from 'framer-motion'
import { BodyArea } from '@/types/quiz'

interface ProblemAreasScreenProps {
  value: BodyArea[]
  onChange: (value: BodyArea[]) => void
  onNext: () => void
}

const areaOptions: { value: BodyArea; label: string }[] = [
  { value: 'belly', label: 'Belly' },
  { value: 'thighs', label: 'Thighs' },
  { value: 'arms', label: 'Arms' },
  { value: 'all_over', label: 'All over' },
]

export default function ProblemAreasScreen({ value, onChange, onNext }: ProblemAreasScreenProps) {
  const toggleArea = (area: BodyArea) => {
    if (area === 'all_over') {
      onChange(value.includes('all_over') ? [] : ['all_over'])
    } else {
      const newValue = value.filter(v => v !== 'all_over')
      if (newValue.includes(area)) {
        onChange(newValue.filter(v => v !== area))
      } else {
        onChange([...newValue, area])
      }
    }
  }
  
  return (
    <div className="text-center">
      <motion.h2 
        className="question-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Where won't the weight come off?
      </motion.h2>
      
      <motion.p 
        className="text-feminine-gray-soft mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Select all that apply
      </motion.p>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        {areaOptions.map((option, index) => (
          <motion.button
            key={option.value}
            onClick={() => toggleArea(option.value)}
            className={`card-option ${value.includes(option.value) ? 'card-option-selected' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 2) }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-semibold">{option.label}</span>
          </motion.button>
        ))}
      </div>
      
      <motion.button
        onClick={onNext}
        disabled={value.length === 0}
        className={`btn-primary ${value.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Continue
      </motion.button>
    </div>
  )
}
