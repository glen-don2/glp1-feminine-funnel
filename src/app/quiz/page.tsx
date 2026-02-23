'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QuizState, initialQuizState } from '@/types/quiz'
import { getQuizState, saveQuizState, calculateDiagnosis, clearQuizState } from '@/lib/quiz-state'
import { useRouter } from 'next/navigation'
import ProgressIndicator from '@/components/ProgressIndicator'
import ScreenWrapper from '@/components/ScreenWrapper'
import MobileHeader from '@/components/MobileHeader'
import ExitIntentModal from '@/components/ExitIntentModal'
import AgeScreen from '@/components/screens/AgeScreen'
import JourneyScreen from '@/components/screens/JourneyScreen'
import BodyGoalScreen from '@/components/screens/BodyGoalScreen'
import MotivationScreen from '@/components/screens/MotivationScreen'
import InvestmentScreen from '@/components/screens/InvestmentScreen'
import EnergyScreen from '@/components/screens/EnergyScreen'
import CravingScreen from '@/components/screens/CravingScreen'
import ProblemAreasScreen from '@/components/screens/ProblemAreasScreen'
import StressPatternScreen from '@/components/screens/StressPatternScreen'
import DietEmotionScreen from '@/components/screens/DietEmotionScreen'
import EmotionSeverityScreen from '@/components/screens/EmotionSeverityScreen'
import InfoPivotScreen from '@/components/screens/InfoPivotScreen'
import FutureFearScreen from '@/components/screens/FutureFearScreen'
import PressureReleaseScreen from '@/components/screens/PressureReleaseScreen'
import FinalAdmissionScreen from '@/components/screens/FinalAdmissionScreen'
import MicroCommit2Screen from '@/components/screens/MicroCommit2Screen'
import HalfwayScreen from '@/components/screens/HalfwayScreen'
import LoadingScreen from '@/components/screens/LoadingScreen'

const TOTAL_SCREENS = 18

export default function QuizPage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [state, setState] = useState<QuizState>(initialQuizState)
  const [showExitModal, setShowExitModal] = useState(false)
  const [exitIntentTriggered, setExitIntentTriggered] = useState(false)
  
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

  useEffect(() => {
    if (!exitIntentTriggered) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && state.currentScreen > 1 && state.currentScreen < 16) {
        setShowExitModal(true)
      }
    }

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (state.currentScreen > 1 && state.currentScreen < 16) {
        e.preventDefault()
        return ''
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [exitIntentTriggered, state.currentScreen])

  useEffect(() => {
    const timer = setTimeout(() => {
      setExitIntentTriggered(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])
  
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
      currentScreen: 18 
    })
    router.push('/results')
  }, [state, updateState, router])
  
  const restartQuiz = useCallback(() => {
    clearQuizState()
    setState(initialQuizState)
  }, [])

  const handleExitModalClose = useCallback(() => {
    setShowExitModal(false)
  }, [])

  const handleExitModalReturn = useCallback(() => {
    setShowExitModal(false)
  }, [])
  
  if (!mounted) {
    return (
      <div className="quiz-container">
        <div className="animate-pulse">Loading...</div>
      </div>
    )
  }
  
  const progress = Math.round(((state.currentScreen - 1) / (TOTAL_SCREENS - 1)) * 100)
  
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
          <BodyGoalScreen
            value={state.bodyGoal}
            onChange={(bodyGoal) => updateState({ bodyGoal })}
            onNext={nextScreen}
          />
        )
      case 4:
        return (
          <MotivationScreen
            value={state.motivation}
            onChange={(motivation) => updateState({ motivation })}
            onNext={nextScreen}
          />
        )
      case 5:
        return (
          <InvestmentScreen
            value={state.investmentLevel}
            onChange={(investmentLevel) => updateState({ investmentLevel })}
            onNext={nextScreen}
          />
        )
      case 6:
        return (
          <EnergyScreen
            value={state.energyPattern}
            onChange={(energyPattern) => updateState({ energyPattern })}
            onNext={nextScreen}
          />
        )
      case 7:
        return (
          <CravingScreen
            value={state.cravingType}
            onChange={(cravingType) => updateState({ cravingType })}
            onNext={nextScreen}
          />
        )
      case 8:
        return <HalfwayScreen onContinue={nextScreen} />
      case 9:
        return (
          <ProblemAreasScreen
            value={state.problemArea}
            onChange={(problemArea) => updateState({ problemArea })}
            onNext={nextScreen}
          />
        )
      case 10:
        return (
          <StressPatternScreen
            value={state.stressPattern}
            onChange={(stressPattern) => updateState({ stressPattern })}
            onNext={nextScreen}
          />
        )
      case 11:
        return (
          <DietEmotionScreen
            value={state.dietEmotion}
            onChange={(dietEmotion) => updateState({ dietEmotion })}
            onNext={nextScreen}
          />
        )
      case 12:
        return (
          <EmotionSeverityScreen
            value={state.emotionSeverity}
            onChange={(emotionSeverity) => updateState({ emotionSeverity })}
            onNext={nextScreen}
          />
        )
      case 13:
        return (
          <InfoPivotScreen
            onNext={nextScreen}
          />
        )
      case 14:
        return (
          <FutureFearScreen
            value={state.futureFear}
            onChange={(futureFear) => updateState({ futureFear })}
            onNext={nextScreen}
          />
        )
      case 15:
        return (
          <PressureReleaseScreen
            value={state.pressureRelease || ''}
            onChange={(pressureRelease) => updateState({ pressureRelease })}
            onNext={nextScreen}
          />
        )
      case 16:
        return (
          <FinalAdmissionScreen
            value={state.finalAdmission}
            onChange={(finalAdmission) => updateState({ finalAdmission })}
            onNext={nextScreen}
          />
        )
      case 17:
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
      case 18:
        return <LoadingScreen onComplete={goToResults} blockType={state.diagnosis} />
      default:
        return null
    }
  }
  
  if (state.currentScreen > TOTAL_SCREENS) {
    return null
  }
  
  return (
    <main className="quiz-container">
      <MobileHeader 
        showProgress={state.currentScreen <= 17}
        progress={progress}
        currentScreen={state.currentScreen}
        totalScreens={TOTAL_SCREENS}
      />
      
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
          className="mt-8 text-feminine-gray-soft text-sm hover:text-feminine-charcoal transition-colors mobile-tap-target py-2 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Go back
        </motion.button>
      )}

      <AnimatePresence>
        {showExitModal && (
          <ExitIntentModal
            onClose={handleExitModalClose}
            onReturn={handleExitModalReturn}
          />
        )}
      </AnimatePresence>
    </main>
  )
}
