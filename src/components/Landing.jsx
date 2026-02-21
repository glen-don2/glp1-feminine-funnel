import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate('/quiz')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          The Real Reason You Can't Lose Weight
          <span className="block text-fuchsia-600">(It's Not Calories)</span>
        </h1>
        
        <p className="text-lg text-gray-700 mb-8">
          78% of women over 35 are fighting an invisible hormonal block — and diets can't fix it.
        </p>

        <button
          onClick={handleStart}
          className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          Start My Diagnosis →
        </button>

        <div className="mt-6 flex flex-col items-center space-y-2 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span>Takes 2 minutes</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span>Free personalized report</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span>No email required</span>
          </div>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          12,000+ women have discovered their block type
        </p>
      </div>
    </div>
  )
}

export default Landing
