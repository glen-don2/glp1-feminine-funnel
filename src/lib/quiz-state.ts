import { QuizState, initialQuizState, DiagnosisType } from '@/types/quiz'

const STORAGE_KEY = 'glp1-feminine-quiz-state'

export function getQuizState(): QuizState {
  if (typeof window === 'undefined') return initialQuizState
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (e) {
    console.error('Error reading quiz state:', e)
  }
  
  return initialQuizState
}

export function saveQuizState(state: QuizState): void {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch (e) {
    console.error('Error saving quiz state:', e)
  }
}

export function clearQuizState(): void {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (e) {
    console.error('Error clearing quiz state:', e)
  }
}

export function calculateDiagnosis(state: QuizState): DiagnosisType {
  let cortisolScore = 0
  let estrogenScore = 0
  let insulinScore = 0
  let thyroidScore = 0
  
  if (state.problemAreas.includes('belly')) {
    cortisolScore += 2
    insulinScore += 1
  }
  if (state.problemAreas.includes('thighs')) {
    estrogenScore += 2
    thyroidScore += 1
  }
  if (state.problemAreas.includes('arms')) {
    thyroidScore += 2
  }
  if (state.problemAreas.includes('all_over')) {
    cortisolScore += 1
    insulinScore += 1
  }
  
  if (state.energyPattern === 'morning_crash') {
    cortisolScore += 2
  } else if (state.energyPattern === 'afternoon_crash') {
    insulinScore += 2
    cortisolScore += 1
  } else if (state.energyPattern === 'all_day_tired') {
    thyroidScore += 2
    cortisolScore += 1
  }
  
  if (state.cravingType === 'sugar') {
    insulinScore += 2
    cortisolScore += 1
  } else if (state.cravingType === 'carbs') {
    insulinScore += 2
  } else if (state.cravingType === 'late_night') {
    cortisolScore += 2
  }
  
  if (state.dietEmotion === 'frustrated') {
    cortisolScore += 1
  } else if (state.dietEmotion === 'hopeless') {
    thyroidScore += 1
    cortisolScore += 1
  }
  
  if (state.futureFear === 'health_decline') {
    cortisolScore += 1
    insulinScore += 1
  } else if (state.futureFear === 'keep_gaining') {
    insulinScore += 2
  }
  
  if (state.finalAdmissions.includes('belly_fat')) {
    cortisolScore += 2
    insulinScore += 1
  }
  if (state.finalAdmissions.includes('energy_crashes')) {
    cortisolScore += 1
    thyroidScore += 1
  }
  if (state.finalAdmissions.includes('cravings')) {
    insulinScore += 2
  }
  if (state.finalAdmissions.includes('scale_stuck')) {
    thyroidScore += 2
    estrogenScore += 1
  }
  
  if (state.age === '45-54' || state.age === '55+') {
    estrogenScore += 2
    thyroidScore += 1
  } else if (state.age === '35-44') {
    estrogenScore += 1
  }
  
  if (state.pressureChoice === 'last_resort') {
    cortisolScore += 1
  } else if (state.pressureChoice === 'quick_fix') {
    cortisolScore += 2
  }
  
  const scores = [
    { type: 'cortisol_estrogen' as DiagnosisType, score: cortisolScore + estrogenScore },
    { type: 'insulin_thyroid' as DiagnosisType, score: insulinScore + thyroidScore },
    { type: 'mixed' as DiagnosisType, score: (cortisolScore + estrogenScore + insulinScore + thyroidScore) / 2 },
    { type: 'stress_dominant' as DiagnosisType, score: cortisolScore * 1.5 },
  ]
  
  scores.sort((a, b) => b.score - a.score)
  
  return scores[0].type
}

export function calculateBlockType(state: QuizState): string {
  let cortisolScore = 0
  let estrogenScore = 0
  let insulinScore = 0
  let thyroidScore = 0
  
  if (state.problemAreas.includes('belly')) {
    cortisolScore += 2
    insulinScore += 1
  }
  if (state.problemAreas.includes('thighs')) {
    estrogenScore += 2
    thyroidScore += 1
  }
  if (state.problemAreas.includes('arms')) {
    thyroidScore += 2
  }
  if (state.problemAreas.includes('all_over')) {
    cortisolScore += 1
    insulinScore += 1
  }
  
  if (state.energyPattern === 'morning_crash') {
    cortisolScore += 2
  } else if (state.energyPattern === 'afternoon_crash') {
    insulinScore += 2
    cortisolScore += 1
  } else if (state.energyPattern === 'all_day_tired') {
    thyroidScore += 2
    cortisolScore += 1
  }
  
  if (state.cravingType === 'sugar') {
    insulinScore += 2
    cortisolScore += 1
  } else if (state.cravingType === 'carbs') {
    insulinScore += 2
  } else if (state.cravingType === 'late_night') {
    cortisolScore += 2
  }
  
  if (state.dietEmotion === 'frustrated') {
    cortisolScore += 1
  } else if (state.dietEmotion === 'hopeless') {
    thyroidScore += 1
    cortisolScore += 1
  }
  
  if (state.futureFear === 'health_decline') {
    cortisolScore += 1
    insulinScore += 1
  } else if (state.futureFear === 'keep_gaining') {
    insulinScore += 2
  }
  
  if (state.finalAdmissions.includes('belly_fat')) {
    cortisolScore += 2
    insulinScore += 1
  }
  if (state.finalAdmissions.includes('energy_crashes')) {
    cortisolScore += 1
    thyroidScore += 1
  }
  if (state.finalAdmissions.includes('cravings')) {
    insulinScore += 2
  }
  if (state.finalAdmissions.includes('scale_stuck')) {
    thyroidScore += 2
    estrogenScore += 1
  }
  
  if (state.age === '45-54' || state.age === '55+') {
    estrogenScore += 2
    thyroidScore += 1
  } else if (state.age === '35-44') {
    estrogenScore += 1
  }
  
  if (state.pressureChoice === 'last_resort') {
    cortisolScore += 1
  } else if (state.pressureChoice === 'quick_fix') {
    cortisolScore += 2
  }
  
  const scores = [
    { type: 'Cortisol', score: cortisolScore },
    { type: 'Estrogen', score: estrogenScore },
    { type: 'Insulin', score: insulinScore },
    { type: 'Thyroid', score: thyroidScore },
  ]
  
  scores.sort((a, b) => b.score - a.score)
  
  return scores[0].type
}

export const diagnosisContent: Record<DiagnosisType, {
  title: string
  subtitle: string
  description: string
  symptoms: string[]
  rootCause: string
}> = {
  cortisol_estrogen: {
    title: 'Cortisol-Estrogen Imbalance',
    subtitle: 'Your body is holding onto weight as a protective response',
    description: 'Your quiz responses indicate that chronic stress and hormonal fluctuations are creating a perfect storm for weight retention. When cortisol remains elevated, it signals your body to store fat—particularly around the midsection—while disrupting estrogen metabolism.',
    symptoms: [
      'Stubborn belly fat that won\'t budge',
      'Energy crashes throughout the day',
      'Difficulty sleeping or staying asleep',
      'Mood swings and irritability',
      'Sugar cravings, especially under stress',
    ],
    rootCause: 'Your nervous system is stuck in "survival mode," prioritizing fat storage over fat burning due to perceived chronic stress.',
  },
  insulin_thyroid: {
    title: 'Insulin-Thyroid Dysfunction',
    subtitle: 'Your metabolism is running on low power mode',
    description: 'Your responses suggest a metabolic slowdown caused by insulin resistance and suboptimal thyroid function. This combination makes weight loss feel nearly impossible because your body isn\'t efficiently converting food into energy.',
    symptoms: [
      'Weight gain despite eating "healthy"',
      'Constant fatigue and brain fog',
      'Cold hands and feet',
      'Carb and sugar cravings',
      'Slow digestion and bloating',
    ],
    rootCause: 'Your cells have become resistant to insulin\'s signals, while your thyroid is underperforming, creating a metabolic bottleneck.',
  },
  mixed: {
    title: 'Multi-Factor Metabolic Block',
    subtitle: 'Multiple systems need rebalancing',
    description: 'Your quiz reveals a complex interplay between stress hormones, metabolic function, and hormonal balance. This is actually common—it means your body has adapted to protect you, but these adaptations are now working against your goals.',
    symptoms: [
      'Weight fluctuates unpredictably',
      'Mixed energy patterns throughout the day',
      'Various craving types',
      'Sleep quality varies',
      'Progress feels inconsistent',
    ],
    rootCause: 'Multiple protective mechanisms have activated simultaneously, requiring a comprehensive approach to reset your metabolism.',
  },
  stress_dominant: {
    title: 'Stress-Dominant Weight Retention',
    subtitle: 'Your body is in survival protection mode',
    description: 'Your responses strongly indicate that chronic stress is the primary driver of your weight challenges. When your nervous system perceives ongoing threats, it prioritizes fat storage as an evolutionary survival mechanism.',
    symptoms: [
      'Belly fat that increases during stressful periods',
      'Racing thoughts and difficulty relaxing',
      'Digestive issues linked to stress',
      'Sleep disturbances',
      'Emotional eating patterns',
    ],
    rootCause: 'Your fight-or-flight response is chronically activated, flooding your system with cortisol and blocking your body\'s natural fat-burning ability.',
  },
}
