import { useEffect, useState } from 'react'
import { testimonials } from '../data/quizData'

function Results() {
  const [diagnosis, setDiagnosis] = useState(null)
  const [timeLeft, setTimeLeft] = useState(47 * 3600 + 32 * 60 + 18) // 47:32:18 in seconds

  useEffect(() => {
    const saved = localStorage.getItem('diagnosis')
    if (saved) {
      setDiagnosis(JSON.stringify(saved))
    }
  }, [])

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) return 0
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  if (!diagnosis) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading your diagnosis...</p>
      </div>
    )
  }

  // Parse diagnosis if it's a string
  const diagnosisData = typeof diagnosis === 'string' ? JSON.parse(diagnosis) : diagnosis
  
  // Get testimonials based on primary block
  const primaryBlock = diagnosisData.blocks?.[0] || 'cortisol'
  const relevantTestimonials = testimonials[primaryBlock] || testimonials.cortisol

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white py-12 px-4">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Your Hormonal Weight Diagnosis</h1>
          <p className="text-fuchsia-100">
            You're not alone — 78% of women over 35 struggle with hormonal weight blocks just like yours.
          </p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-8 space-y-8">
        {/* Diagnosis Card */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-sm text-gray-500 mb-2">Based on your quiz answers, you have:</p>
          <h2 className="text-2xl font-bold text-red-600 mb-2">{diagnosisData.title}</h2>
          {diagnosisData.subtitle && (
            <p className="text-gray-600 mb-4">{diagnosisData.subtitle}</p>
          )}
          <p className="text-gray-700">{diagnosisData.description}</p>
        </div>

        {/* Solution Card with Villain Contrast */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            The Solution: GLP-1 Feminine
          </h3>
          <p className="text-gray-700 mb-6">
            The first GLP-1 formula designed specifically for women's hormonal weight blocks.
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-2 text-gray-500"></th>
                  <th className="text-left py-2 text-red-600 font-semibold">Ozempic</th>
                  <th className="text-left py-2 text-green-600 font-semibold">GLP-1 Feminine</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="py-2">Target</td>
                  <td>Diabetics</td>
                  <td className="text-green-700 font-medium">Women 35+</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2">Delivery</td>
                  <td>Needles</td>
                  <td className="text-green-700 font-medium">Daily pills</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2">Doctor Required</td>
                  <td>Yes</td>
                  <td className="text-green-700 font-medium">No</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2">Hormonal Support</td>
                  <td>None</td>
                  <td className="text-green-700 font-medium">Specific formula</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2">Monthly Cost</td>
                  <td>€200-300</td>
                  <td className="text-green-700 font-medium">€39-59</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            Made in the EU | Clinically studied ingredients | 60-day guarantee
          </p>
        </div>

        {/* Scarcity Ladder - Level 1: Inventory */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800 text-sm">
            ⚠️ Current batch: Limited units remaining
          </p>
        </div>

        {/* Offer Card */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Choose Your Package
          </h3>

          {/* Scarcity Ladder - Level 2: Time */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
            <p className="text-orange-800 text-sm text-center">
              Your reserved price expires in:<br />
              <span className="text-2xl font-bold">{formatTime(timeLeft)}</span>
            </p>
          </div>

          <div className="space-y-4">
            {/* 1 Month */}
            <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-fuchsia-400 cursor-pointer transition-all">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-900">1-Month Supply</p>
                  <p className="text-sm text-gray-600">Perfect for trying the protocol</p>
                </div>
                <p className="text-xl font-bold text-gray-900">€69.95</p>
              </div>
            </div>

            {/* 3 Month - Most Popular */}
            <div className="border-2 border-fuchsia-500 rounded-lg p-4 bg-fuchsia-50 cursor-pointer transition-all relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-fuchsia-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR — 73% choose this
              </div>
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="font-semibold text-gray-900">3-Month Supply</p>
                  <p className="text-sm text-gray-600">The full hormonal reset</p>
                  <p className="text-sm text-green-600 font-semibold">Save €90</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 line-through">€209.85</p>
                  <p className="text-2xl font-bold text-fuchsia-600">€119.85</p>
                </div>
              </div>
            </div>

            {/* 5 Month - Best Value */}
            <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-fuchsia-400 cursor-pointer transition-all">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-900">5-Month Supply</p>
                  <p className="text-sm text-gray-600">Maximum results</p>
                  <p className="text-sm text-green-600 font-semibold">Save €200</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 line-through">€349.75</p>
                  <p className="text-xl font-bold text-gray-900">€149.75</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full mt-6 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            Fix My Hormonal Pattern →
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            🔒 Secure checkout | Ships within 24 hours | Cancel anytime
          </p>
        </div>

        {/* Scarcity Ladder - Level 3: Social Proof */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 text-sm text-center">
            🔥 127 women started their protocol in the last 24 hours<br />
            <span className="font-bold">Only 47 units left at launch price</span>
          </p>
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Women With Your Pattern Are Seeing Results
          </h3>
          <div className="space-y-4">
            {relevantTestimonials.map((testimonial, i) => (
              <div key={i} className="border-l-4 border-fuchsia-400 pl-4">
                <p className="text-gray-700 italic mb-2">"{testimonial.text}"</p>
                <p className="text-sm text-gray-500">— {testimonial.author}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-4 text-xs text-gray-500">
            <span>★★★★★ 4.8/5 from 2,400+ reviews</span>
            <span>•</span>
            <span>Clinically tested</span>
            <span>•</span>
            <span>EU-made</span>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Common Questions</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-gray-900">How is this different from Ozempic?</p>
              <p className="text-gray-600 mt-1">
                Ozempic is for diabetics — Feminine is for YOUR hormonal pattern. Pills, not needles.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Is this safe?</p>
              <p className="text-gray-600 mt-1">
                Clinically studied ingredients. Consult your doctor if you have existing conditions.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">What if it doesn't work?</p>
              <p className="text-gray-600 mt-1">
                60-day money-back guarantee. No questions asked.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-lg p-6 text-center text-white">
          <p className="text-sm mb-2">⚠️ Only 47 units remaining at launch price</p>
          <button className="w-full bg-white text-fuchsia-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-all">
            Fix My Hormonal Pattern →
          </button>
          <p className="text-xs text-fuchsia-200 mt-3">
            60-Day Money-Back Guarantee | Ships within 24 hours
          </p>
        </div>
      </div>
    </div>
  )
}

export default Results
