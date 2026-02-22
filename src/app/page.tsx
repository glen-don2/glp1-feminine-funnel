'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QuizState, initialQuizState } from '@/types/quiz'
import { getQuizState, saveQuizState, calculateDiagnosis, clearQuizState } from '@/lib/quiz-state'
import { useRouter } from 'next/navigation'
import ProgressIndicator from '@/components/ProgressIndicator'
import ScreenWrapper from '@/components/ScreenWrapper'
import AgeScreen from '@/components/screens/AgeScreen'
import JourneyScreen from '@/components/screens/JourneyScreen'
import BodyEnergyScreen from '@/components/screens/BodyEnergyScreen'
import InvestmentScreen from '@/components/screens/InvestmentScreen'
import MotivationScreen from '@/components/screens/MotivationScreen'
import CravingScreen from '@/components/screens/CravingScreen'
import DietEmotionScreen from '@/components/screens/DietEmotionScreen'
import FutureFearScreen from '@/components/screens/FutureFearScreen'
import MicroCommit1Screen from '@/components/screens/MicroCommit1Screen'
import MicroCommit2Screen from '@/components/screens/MicroCommit2Screen'
import EmailCaptureScreen from '@/components/screens/EmailCaptureScreen'
import LoadingScreen from '@/components/screens/LoadingScreen'

const TOTAL_SCREENS = 12

export default function QuizPage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [state, setState] = useState<QuizState>(initialQuizState)
  
  useEffect(() => {
    const savedState = getQuizState()
    if (savedState.currentScreen > 1) {
      setState(savedState)
    }
    setMounted(true)
  }, [])
  
  useEffect(() => {
    if (mounted) {
      saveQuizState(state)
    }
  }, [state, mounted])
  
  const updateState = useCallback((updates: Partial<QuizState>) => {
    setState(prev => ({ ...prev, ...updates }))
  }, [])
  
  const nextScreen = useCallback(() => {
    updateState({ currentScreen: state.currentScreen + 1 })
  }, [state.currentScreen, updateState])
  
  const goToResults = useCallback(() => {
    const diagnosis = calculateDiagnosis(state)
    updateState({ 
      diagnosis,
      completedAt: new Date().toISOString(),
      currentScreen: 13 
    })
    router.push('/results')
  }, [state, updateState, router])
  
  const restartQuiz = useCallback(() => {
    clearQuizState()
    setState(initialQuizState)
  }, [])
  
  if (!mounted) {
    return (
      <div className="quiz-container">
        <div className="animate-pulse">Loading...</div>
      </div>
    )
  }
  
  const renderScreen = () => {
    switch (state.currentScreen) {
      case 1:
        return (
          <AgeScreen
            value={state.age}
            onChange={(age) => updateState({ age })}
            onNext={nextScreen}
          />
        )
      case 2:
        return (
          <JourneyScreen
            value={state.journeyDuration}
            onChange={(journeyDuration) => updateState({ journeyDuration })}
            onNext={nextScreen}
          />
        )
      case 3:
        return (
          <BodyEnergyScreen
            bodyGoalValue={state.bodyGoal}
            energyValue={state.energyPattern}
            onBodyGoalChange={(bodyGoal) => updateState({ bodyGoal })}
            onEnergyChange={(energyPattern) => updateState({ energyPattern })}
            onNext={nextScreen}
          />
        )
      case 4:
        return (
          <CravingScreen
            value={state.cravingType}
            onChange={(cravingType) => updateState({ cravingType })}
            onNext={nextScreen}
          />
        )
      case 5:
        return (
          <MotivationScreen
            value={state.motivation}
            onChange={(motivation) => updateState({ motivation })}
            onNext={nextScreen}
          />
        )
      case 6:
        return (
          <DietEmotionScreen
            value={state.dietEmotion}
            severityValue={state.emotionSeverity}
            onChange={(dietEmotion) => updateState({ dietEmotion })}
            onSeverityChange={(emotionSeverity) => updateState({ emotionSeverity })}
            onNext={nextScreen}
          />
        )
      case 7:
        return (
          <FutureFearScreen
            value={state.futureFear}
            onChange={(futureFear) => updateState({ futureFear })}
            onNext={nextScreen}
          />
        )
      case 8:
        return (
          <InvestmentScreen
            value={state.investmentLevel}
            onChange={(investmentLevel) => updateState({ investmentLevel })}
            onNext={nextScreen}
          />
        )
      case 9:
        return (
          <MicroCommit1Screen
            finalAdmissionValue={state.finalAdmissions}
            microCommitValue={state.microCommit1}
            onFinalAdmissionChange={(finalAdmissions) => updateState({ finalAdmissions })}
            onYes={() => {
              updateState({ microCommit1: true })
              nextScreen()
            }}
            onNo={() => {
              updateState({ microCommit1: false })
              nextScreen()
            }}
          />
        )
      case 10:
        return (
          <MicroCommit2Screen
            value={state.microCommit2}
            onYes={() => {
              updateState({ microCommit2: true })
              nextScreen()
            }}
            onNo={() => {
              updateState({ microCommit2: false })
              nextScreen()
            }}
          />
        )
      case 11:
        return (
          <EmailCaptureScreen
            value={state.email}
            onChange={(email) => updateState({ email })}
            onNext={nextScreen}
          />
        )
      case 12:
        return <LoadingScreen onComplete={goToResults} blockType={state.diagnosis} />
      default:
        return null
    }
  }
  
  if (state.currentScreen > 12) {
    return null
  }
  
  return (
    <main className="quiz-container">
      {state.currentScreen <= TOTAL_SCREENS && (
        <ProgressIndicator currentScreen={state.currentScreen} totalScreens={TOTAL_SCREENS} />
      )}
      
      <AnimatePresence mode="wait">
        <ScreenWrapper key={state.currentScreen} screenNumber={state.currentScreen}>
          {renderScreen()}
        </ScreenWrapper>
      </AnimatePresence>
      
      {state.currentScreen > 1 && state.currentScreen <= TOTAL_SCREENS && (
        <motion.button
          onClick={() => updateState({ currentScreen: state.currentScreen - 1 })}
          className="mt-8 text-feminine-gray-soft text-sm hover:text-feminine-charcoal transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          ← Go back
        </motion.button>
      )}
    </main>
  )
}
