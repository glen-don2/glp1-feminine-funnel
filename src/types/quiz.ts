export type AgeRange = '18-24' | '25-34' | '35-44' | '45-54' | '55+'

export type JourneyDuration = 'just_started' | '6_months' | '1_year' | '2_years' | '5_years'

export type BodyGoal = 'slim_toned' | 'strong_athletic' | 'curvy_confident' | 'healthy_energetic'

export type InvestmentLevel = 'under_50' | '50_100' | '100_200' | 'whatever_it_takes'

export type BodyArea = 'belly' | 'thighs' | 'arms' | 'all_over'

export type EnergyPattern = 'morning_crash' | 'afternoon_crash' | 'evening_crash' | 'all_day_tired'

export type CravingType = 'sugar' | 'carbs' | 'salty' | 'late_night'

export type DietEmotion = 'frustrated' | 'ashamed' | 'angry' | 'hopeless'

export type EmotionSeverity = 1 | 2 | 3 | 4

export type FutureFear = 'never_reach_goal' | 'pass_habits_to_kids' | 'keep_gaining' | 'health_decline'

export type FinalAdmission = 'belly_fat' | 'energy_crashes' | 'cravings' | 'scale_stuck'

export type PressureChoice = 'quick_fix' | 'sustainable_approach' | 'last_resort' | 'proactive_health'

export type DiagnosisType = 'cortisol_estrogen' | 'insulin_thyroid' | 'mixed' | 'stress_dominant'

export interface QuizState {
  currentScreen: number
  age: AgeRange | null
  journeyDuration: JourneyDuration | null
  bodyGoal: BodyGoal | null
  investmentLevel: InvestmentLevel | null
  motivation: string
  problemArea: BodyArea | null
  energyPattern: EnergyPattern | null
  cravingType: CravingType | null
  stressPattern: string | null
  dietEmotion: DietEmotion | null
  emotionSeverity: EmotionSeverity | null
  futureFear: FutureFear | null
  finalAdmission: FinalAdmission | null
  pressureChoice: PressureChoice | null
  pressureRelease: string | null
  microCommit1: boolean
  microCommit2: boolean
  email: string
  blockType: string | null
  diagnosis: DiagnosisType | null
  completedAt: string | null
}

export const initialQuizState: QuizState = {
  currentScreen: 1,
  age: null,
  journeyDuration: null,
  bodyGoal: null,
  investmentLevel: null,
  motivation: '',
  problemArea: null,
  energyPattern: null,
  cravingType: null,
  stressPattern: null,
  dietEmotion: null,
  emotionSeverity: null,
  futureFear: null,
  finalAdmission: null,
  pressureChoice: null,
  pressureRelease: null,
  microCommit1: false,
  microCommit2: false,
  email: '',
  blockType: null,
  diagnosis: null,
  completedAt: null,
}

export interface Testimonial {
  name: string
  age: number
  location: string
  image: string
  quote: string
  weightLost: string
}

export interface FAQItem {
  question: string
  answer: string
}
