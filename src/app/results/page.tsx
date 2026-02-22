'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getQuizState, diagnosisContent, calculateBlockType } from '@/lib/quiz-state'
import { DiagnosisType } from '@/types/quiz'

const testimonials = [
  {
    name: 'Sarah M.',
    age: 42,
    location: 'Munich',
    quote: 'I\'d tried everything. Keto, intermittent fasting, even Ozempic injections. Nothing worked until I understood my cortisol-estrogen imbalance. Lost 12kg in 3 months without the side effects.',
    weightLost: '-12kg',
    avatar: 'S',
  },
  {
    name: 'Anna K.',
    age: 38,
    location: 'Berlin',
    quote: 'The quiz described me perfectly. I finally understood why I was holding weight in my belly despite eating clean. The GLP-1 Feminine protocol was the missing piece.',
    weightLost: '-8.5kg',
    avatar: 'A',
  },
  {
    name: 'Lisa W.',
    age: 45,
    location: 'Hamburg',
    quote: 'After menopause, nothing worked. My doctor just said "eat less." This actually addressed my hormones. I have energy again and the weight is finally coming off.',
    weightLost: '-15kg',
    avatar: 'L',
  },
]

const faqs = [
  {
    question: 'Is this safe? What about side effects?',
    answer: 'GLP-1 Feminine uses natural compounds that work with your body\'s existing hormone pathways. Unlike synthetic injections, you won\'t experience nausea, vomiting, or the "Ozempic face" effect. Over 10,000 women in Europe are already using this protocol safely.',
  },
  {
    question: 'How is this different from Ozempic or Wegovy?',
    answer: 'Prescription GLP-1 agonists force your body with synthetic chemicals. GLP-1 Feminine supports your body\'s natural GLP-1 production. It\'s like the difference between caffeine pills and a good night\'s sleep—both give you energy, but one works WITH your biology.',
  },
  {
    question: 'How soon will I see results?',
    answer: 'Most women notice reduced cravings within 3-5 days. Visible weight loss typically begins within 2-3 weeks. Full metabolic reset takes 8-12 weeks, which is why we recommend the 3-month protocol for lasting results.',
  },
  {
    question: 'What if it doesn\'t work for me?',
    answer: 'We offer a 60-day money-back guarantee. If you don\'t feel a difference in your energy, cravings, and weight within 60 days, we\'ll refund every cent. No questions, no hassle. We can offer this because 94% of women who complete the protocol see measurable results.',
  },
  {
    question: 'Is this available in my country?',
    answer: 'We currently ship to Germany, Austria, Switzerland, Netherlands, Belgium, France, and Luxembourg. Due to high demand, we\'re limiting new orders to ensure quality.',
  },
]

export default function ResultsPage() {
  const [diagnosis, setDiagnosis] = useState<DiagnosisType>('mixed')
  const [blockType, setBlockType] = useState<string>('Cortisol')
  const [loading, setLoading] = useState(true)
  const [spotsLeft, setSpotsLeft] = useState(17)
  const [viewingNow, setViewingNow] = useState(120)
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 23 })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const state = getQuizState()
    if (state.diagnosis) {
      setDiagnosis(state.diagnosis)
    }
    const calculatedBlockType = calculateBlockType(state)
    setBlockType(calculatedBlockType)
    setSpotsLeft(Math.floor(Math.random() * (90 - 40) + 40))
    setViewingNow(Math.floor(Math.random() * (150 - 80) + 80))
    setLoading(false)

    // Simulate countdown
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.minutes === 0) {
          if (prev.hours === 0) return { hours: 4, minutes: 59 }
          return { hours: prev.hours - 1, minutes: 59 }
        }
        return { ...prev, minutes: prev.minutes - 1 }
      })
    }, 60000)

    // Auto-decrement spots every 30 seconds
    const scarcityTimer = setInterval(() => {
      setSpotsLeft(prev => Math.max(prev - Math.floor(Math.random() * 3 + 1), 1))
    }, 30000)

    // Random viewing count fluctuation
    const viewingTimer = setInterval(() => {
      setViewingNow(prev => Math.max(prev + Math.floor(Math.random() * 10 - 5), 80))
    }, 5000)

    return () => {
      clearInterval(timer)
      clearInterval(scarcityTimer)
      clearInterval(viewingTimer)
    }
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-feminine-rose">Loading your results...</div>
      </div>
    )
  }

  const content = diagnosisContent[diagnosis]

  return (
    <main className="min-h-screen bg-feminine-cream">
      {/* Hero Section - The Diagnosis */}
      <section className="px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-feminine-rose/10 rounded-full text-feminine-rose text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-feminine-rose rounded-full animate-pulse" />
              Your Personalized Analysis Complete
            </div>
            <h1 className="text-3xl md:text-4xl font-light text-feminine-charcoal mb-4">
              {content.title}
            </h1>
            <p className="text-xl text-feminine-rose font-medium">
              {content.subtitle}
            </p>
          </motion.div>

          {/* Diagnosis Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-soft mb-8"
          >
            <p className="text-feminine-gray leading-relaxed mb-6">
              {content.description}
            </p>

            <div className="space-y-3 mb-6">
              <h3 className="text-sm font-medium text-feminine-charcoal uppercase tracking-wide">
                Your Key Symptoms
              </h3>
              {content.symptoms.map((symptom, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-3 text-feminine-gray"
                >
                  <span className="w-5 h-5 rounded-full bg-feminine-rose/10 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 bg-feminine-rose rounded-full" />
                  </span>
                  {symptom}
                </motion.div>
              ))}
            </div>

            <div className="bg-feminine-cream rounded-2xl p-4">
              <h3 className="text-sm font-medium text-feminine-charcoal uppercase tracking-wide mb-2">
                Root Cause Identified
              </h3>
              <p className="text-feminine-gray text-sm">{content.rootCause}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Pivot - Problem/Solution Bridge */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-light text-feminine-charcoal mb-4">
              Why YOU Haven't Failed. Your Hormones Have.
            </h2>
            <p className="text-feminine-gray leading-relaxed">
              You\'ve been fighting an uphill battle because you were addressing symptoms, 
              not the root cause. Calorie restriction and exercise can\'t fix hormonal 
              imbalances. Your body has been protecting you—it\'s time to give it the 
              signals it needs to release that protection.
            </p>
          </motion.div>

          {/* The Solution Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-feminine-rose/5 to-feminine-blush/20 rounded-3xl p-6 md:p-8 border border-feminine-rose/20"
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-feminine-rose text-white text-xs font-medium rounded-full mb-4">
                NEW PROTOCOL FOR 2026
              </div>
              <h3 className="text-2xl font-light text-feminine-charcoal mb-2">
                GLP-1 Feminine
              </h3>
              <p className="text-feminine-gray">
                The natural GLP-1 activation system designed specifically for women\'s hormones
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                'Works WITH your hormones, not against them',
                'No injections, no prescriptions, no side effects',
                'Addresses your specific metabolic block',
                'Sustainable results without deprivation',
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-feminine-rose flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-feminine-charcoal">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Visual Comparison Table - Funnel Professor Pattern */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden border-2 border-feminine-rose/20 mb-8"
            >
              <div className="bg-feminine-charcoal text-white p-4 text-center">
                <h4 className="font-display text-lg">Why Women Are Switching</h4>
                <p className="text-sm text-feminine-gray-soft">GLP-1 Feminine vs. Prescription Injections</p>
              </div>
              
              <div className="grid grid-cols-3 text-center">
                {/* Header Row */}
                <div className="p-3 bg-feminine-cream border-b border-feminine-blush">
                  <span className="text-xs font-semibold text-feminine-gray">Feature</span>
                </div>
                <div className="p-3 bg-feminine-rose/10 border-b border-feminine-blush">
                  <span className="text-xs font-bold text-feminine-rose">GLP-1 Feminine</span>
                </div>
                <div className="p-3 bg-gray-100 border-b border-gray-200">
                  <span className="text-xs font-semibold text-gray-500">Ozempic/Wegovy</span>
                </div>
                
                {/* Data Rows */}
                {[
                  { feature: 'How it works', feminine: 'Natural support', other: 'Synthetic force', icon: '⚙️' },
                  { feature: 'Side effects', feminine: 'None reported', other: 'Nausea, vomiting', icon: '😷' },
                  { feature: 'Prescription', feminine: '✓ No', other: '✗ Required', icon: '📋' },
                  { feature: 'Injections', feminine: '✓ Never', other: '✗ Weekly shots', icon: '💉' },
                  { feature: 'Monthly cost', feminine: '€127', other: '€300-500', icon: '💶' },
                  { feature: 'Hormone safe', feminine: '✓ Designed for women', other: '⚠️ Disrupts cycle', icon: '♀️' },
                ].map((row, idx) => (
                  <>
                    <div key={`f-${idx}`} className="p-3 border-b border-feminine-blush flex items-center justify-center gap-2">
                      <span>{row.icon}</span>
                      <span className="text-xs text-feminine-gray">{row.feature}</span>
                    </div>
                    <div key={`g-${idx}`} className="p-3 border-b border-feminine-blush bg-feminine-rose/5">
                      <span className="text-xs font-semibold text-green-600">{row.feminine}</span>
                    </div>
                    <div key={`o-${idx}`} className="p-3 border-b border-gray-200 bg-gray-50">
                      <span className="text-xs text-gray-500">{row.other}</span>
                    </div>
                  </>
                ))}
              </div>
            </motion.div>

            {/* Product Stack Visualization */}
            <div className="bg-gradient-to-br from-feminine-pink-light/30 to-feminine-rose/10 rounded-2xl p-6 mb-8">
              <div className="text-center mb-6">
                <h4 className="font-display text-lg text-feminine-charcoal mb-2">
                  YOUR GLP-1 FEMININE PROTOCOL INCLUDES:
                </h4>
              </div>
              
              {/* Visual product stack */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  {/* Bottle visual */}
                  <motion.div
                    className="w-28 h-40 bg-gradient-to-b from-feminine-rose/30 via-feminine-rose/50 to-feminine-rose/70 rounded-2xl border-2 border-feminine-rose/40 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="text-center">
                      <span className="text-4xl block mb-2">🌸</span>
                      <span className="text-xs font-bold text-feminine-rose block">GLP-1</span>
                      <span className="text-[10px] text-feminine-charcoal">FEMININE</span>
                    </div>
                  </motion.div>
                  {/* Capsule count badge */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-feminine-gold rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xs font-bold text-white text-center leading-tight">90<br/>caps</span>
                  </div>
                </div>
              </div>
              
              {/* Bonus items with icons */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { item: 'Hormonal Reset Guide', icon: '📱', type: 'Digital' },
                  { item: 'Meal Timing Protocol', icon: '🍽️', type: 'Digital' },
                  { item: '24/7 Support Access', icon: '💬', type: 'Community' },
                  { item: 'Free EU Shipping', icon: '🚚', type: 'Included' },
                ].map((bonus, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/70 rounded-xl p-3 flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <span className="text-xl">{bonus.icon}</span>
                    <div className="text-left">
                      <p className="text-xs font-semibold text-feminine-charcoal">{bonus.item}</p>
                      <p className="text-[10px] text-feminine-gray-soft">{bonus.type}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-feminine-rose/20 text-center">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <p className="text-feminine-gray line-through text-lg">€247</p>
                  <div className="bg-feminine-rose text-white text-xs font-bold px-2 py-1 rounded-full">
                    SAVE 49%
                  </div>
                </div>
                <p className="text-3xl font-bold text-feminine-rose">€127<span className="text-lg font-normal text-feminine-gray">/month</span></p>
                <p className="text-xs text-feminine-gray-soft mt-1">3-month protocol recommended</p>
              </div>
            </div>

            {/* Dynamic Scarcity Bar */}
            <div className="bg-feminine-charcoal text-white rounded-2xl p-4 mb-6">
              <p className="text-sm text-feminine-gray-soft mb-2">
                Based on demand from women with {blockType} blocks in Germany:
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-feminine-gray-soft">Only {spotsLeft} units remaining at launch pricing</p>
                  <p className="text-2xl font-light text-red-400">⚠️ {spotsLeft} left</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-feminine-gray-soft">{viewingNow} women viewing now</p>
                  <p className="text-lg font-light text-feminine-gold">🔥 {viewingNow} active</p>
                </div>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="text-center">
              <div className="mb-4">
                <span className="text-feminine-gray line-through">€199</span>
                <span className="text-4xl font-light text-feminine-charcoal ml-3">€127</span>
                <span className="text-feminine-gray">/month</span>
              </div>
              <p className="text-sm text-feminine-gray mb-6">
                3-month protocol recommended • 60-day money-back guarantee
              </p>

              <motion.a
                href="https://healthpatch.com/glp1-feminine"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block w-full bg-feminine-rose text-white font-medium py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                Start My Metabolic Reset →
              </motion.a>

              <p className="text-xs text-feminine-gray mt-4">
                🔒 Secure checkout • Ships within 24 hours • Discreet packaging
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-4 py-16 bg-feminine-cream">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-light text-feminine-charcoal mb-4">
              10,000+ Women Have Reset Their Metabolism
            </h2>
            <p className="text-feminine-gray">
              Real results from women just like you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-soft"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-feminine-rose/10 flex items-center justify-center text-feminine-rose font-medium">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-feminine-charcoal">{t.name}</p>
                    <p className="text-sm text-feminine-gray">{t.age} • {t.location}</p>
                  </div>
                </div>
                <p className="text-feminine-gray text-sm leading-relaxed mb-4">
                  "{t.quote}"
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                  <span>{t.weightLost}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light text-feminine-charcoal text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="border border-feminine-blush rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-feminine-charcoal pr-4">{faq.question}</span>
                  <span className={`transform transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-feminine-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    className="px-6 pb-4"
                  >
                    <p className="text-feminine-gray leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-16 bg-feminine-charcoal">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
            Your Body Is Ready. Are You?
          </h2>
          <p className="text-feminine-gray-soft mb-8">
            Join {spotsLeft} women who are starting their metabolic reset today.
            <br />
            Don\'t let another month pass fighting a battle you can\'t win alone.
          </p>

          <motion.a
            href="https://healthpatch.com/glp1-feminine"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-feminine-rose text-white font-medium py-4 px-12 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            Start My Transformation →
          </motion.a>

          <p className="text-sm text-feminine-gray-soft mt-6">
            60-Day Money-Back Guarantee • Free Shipping • Cancel Anytime
          </p>
        </div>
      </section>
    </main>
  )
}
