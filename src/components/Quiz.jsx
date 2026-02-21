import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { quizQuestions, calculateDiagnosis } from '../data/quizData'

function Quiz() {
  const navigate = useNavigate()
  const [currentScreen, setCurrentScreen] = useState(0)
  const [answers, setAnswers] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingFrame, setLoadingFrame] = useState(0)

  const question = quizQuestions[currentScreen]

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [currentScreen]: value }
    setAnswers(newAnswers)
    
    // Save to localStorage
    localStorage.setItem('quizAnswers', JSON.stringify(newAnswers))
    
    // Move to next screen
    if (currentScreen < quizQuestions.length - 1) {
      setCurrentScreen(currentScreen + 1)
    } else {
      // Last question - calculate and go to results
      handleComplete(newAnswers)
    }
  }

  const handleComplete = (finalAnswers) => {
    const answerArray = Object.values(finalAnswers)
    const diagnosis = calculateDiagnosis(answerArray)
    
    // Save diagnosis
    localStorage.setItem('diagnosis', JSON.stringify(diagnosis))
    
    // Navigate to results
    navigate('/results')
  }

  // Loading screen effect
  useEffect(() => {
    if (question?.isLoadingScreen) {
      setIsLoading(true)
      const duration = question.duration * 1000 // 12 seconds
      const interval = 100 // Update every 100ms
      const steps = duration / interval
      let currentStep = 0

      const progressInterval = setInterval(() => {
        currentStep++
        const progress = (currentStep / steps) * 100
        setLoadingProgress(progress)
        
        // Rotate frames every 4 seconds (40 steps at 100ms)
        const frameIndex = Math.floor(currentStep / 40) % question.frames.length
        setLoadingFrame(frameIndex)
        
        if (currentStep >= steps) {
          clearInterval(progressInterval)
          handleComplete(answers)
        }
      }, interval)

      return () => clearInterval(progressInterval)
    }
  }, [currentScreen, question])

  // Render loading screen
  if (question?.isLoadingScreen) {
    const frame = question.frames[loadingFrame]
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-fuchsia-500 to-purple-600 transition-all duration-100"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Analyzing your hormonal pattern... {Math.round(loadingProgress)}%
            </p>
          </div>

          {frame.testimonial && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4 animate-fade-in">
              <p className="text-gray-700 italic mb-4">"{frame.testimonial}"</p>
              <p className="text-sm text-gray-500">— {frame.author}</p>
            </div>
          )}

          {frame.socialProof && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
              <p className="text-lg font-semibold text-gray-800 mb-4">{frame.socialProof}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {frame.badges.map((badge, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          )}

          {frame.productPreview && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-24 h-32 mx-auto bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-xs text-center">GLP-1<br/>Feminine</span>
              </div>
              <p className="text-gray-700">{frame.productPreview}</p>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Render info/villain screen
  if (question?.isInfoScreen) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {question.content.headline}
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <p className="text-gray-700 whitespace-pre-line mb-6">
              {question.content.body}
            </p>

            <div className="bg-gray-900 text-white rounded-lg p-4 mb-6">
              <h3 className="font-bold text-lg mb-3">{question.content.villainBox.title}</h3>
              <p className="text-gray-300 whitespace-pre-line text-sm">
                {question.content.villainBox.content}
              </p>
            </div>

            <p className="text-gray-800 font-semibold">
              {question.content.consequence}
            </p>
          </div>

          <button
            onClick={() => handleAnswer('continue')}
            className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Continue →
          </button>
        </div>
      </div>
    )
  }

  // Render regular question screen
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-fuchsia-500 to-purple-600 transition-all duration-300"
              style={{ width: `${((currentScreen) / (quizQuestions.length - 1)) * 100}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Question {currentScreen + 1} of {quizQuestions.length - 1}
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
          {question.question}
        </h2>

        {question.subtitle && (
          <p className="text-gray-600 text-center mb-6 whitespace-pre-line">
            {question.subtitle}
          </p>
        )}

        <div className="space-y-3">
          {question.answers?.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer.value)}
              className="w-full text-left p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-fuchsia-500 hover:bg-fuchsia-50 transition-all duration-200"
            >
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 mr-3 flex-shrink-0" />
                <span className="text-gray-800">{answer.text}</span>
              </div>
            </button>
          ))}
        </div>

        {question.type === 'micro-commitment' && (
          <p className="text-xs text-gray-500 mt-6 text-center">
            (This takes 60 seconds. Then you'll know.)
          </p>
        )}
      </div>
    </div>
  )
}

export default Quiz
