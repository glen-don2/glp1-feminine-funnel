'use client'

import Link from 'next/link'

export default function AdvertorialPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-gradient-to-br from-feminine-cream via-feminine-pink-light to-feminine-pink-light">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-feminine-pink rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-feminine-rose rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-feminine-pink-dark font-medium mb-4 tracking-wider uppercase text-sm">For Women Over 35</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-feminine-charcoal mb-6 leading-tight">
            The Real Reason You Can&apos;t Lose Weight
            <span className="text-feminine-pink-dark"> (It&apos;s Not Calories)</span>
          </h1>
          <p className="text-xl md:text-2xl text-feminine-gray-soft mb-10 max-w-2xl mx-auto">
            Discover why diets fail women over 35 — and the hormonal breakthrough that&apos;s changing everything
          </p>
          <Link href="/quiz" className="inline-block bg-feminine-pink hover:bg-feminine-pink-dark text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 card-shadow">
            Find My Hormonal Block →
          </Link>
          <p className="mt-6 text-sm text-feminine-gray-soft">Free 60-second assessment</p>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-feminine-charcoal mb-4">
            You&apos;ve Tried Everything...
          </h2>
          <p className="text-xl text-feminine-gray-soft mb-12">
            It&apos;s not your fault. And it&apos;s not about willpower.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-feminine-cream p-6 rounded-2xl card-shadow flex items-start gap-4">
              <div className="w-12 h-12 bg-feminine-pink-light rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-feminine-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <p className="text-lg text-feminine-charcoal">Keto worked for 2 weeks, then the weight came back</p>
            </div>
            <div className="bg-feminine-cream p-6 rounded-2xl card-shadow flex items-start gap-4">
              <div className="w-12 h-12 bg-feminine-pink-light rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-feminine-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <p className="text-lg text-feminine-charcoal">Counting calories left you exhausted and hungry</p>
            </div>
            <div className="bg-feminine-cream p-6 rounded-2xl card-shadow flex items-start gap-4">
              <div className="w-12 h-12 bg-feminine-pink-light rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-feminine-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <p className="text-lg text-feminine-charcoal">Intermittent fasting made you cranky and miserable</p>
            </div>
            <div className="bg-feminine-cream p-6 rounded-2xl card-shadow flex items-start gap-4">
              <div className="w-12 h-12 bg-feminine-pink-light rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-feminine-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <p className="text-lg text-feminine-charcoal">That bootcamp membership? Used twice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-feminine-cream via-feminine-pink-light to-feminine-pink-light">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-feminine-charcoal text-center mb-4">
            Why Your Body Fights Weight Loss
          </h2>
          <p className="text-xl text-feminine-gray-soft text-center mb-12 max-w-2xl mx-auto">
            It&apos;s not about eating less — it&apos;s about understanding what&apos;s happening inside your body
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl card-shadow border-t-4 border-feminine-pink">
              <div className="w-14 h-14 bg-feminine-pink-light rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-feminine-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-feminine-charcoal mb-3">Cortisol</h3>
              <p className="text-feminine-gray-soft leading-relaxed">
                When cortisol is elevated from stress, your body stores fat around your midsection as a survival mechanism. Dieting actually INCREASES cortisol — making the problem worse.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl card-shadow border-t-4 border-feminine-pink">
              <div className="w-14 h-14 bg-feminine-pink-light rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-feminine-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-feminine-charcoal mb-3">Estrogen Fluctuation</h3>
              <p className="text-feminine-gray-soft leading-relaxed">
                Before your period, estrogen drops and cravings spike. Willpower has nothing to do with it — it&apos;s biochemistry.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl card-shadow border-t-4 border-feminine-pink">
              <div className="w-14 h-14 bg-feminine-pink-light rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-feminine-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-feminine-charcoal mb-3">Insulin Resistance</h3>
              <p className="text-feminine-gray-soft leading-relaxed">
                Years of sugar and processed foods make your cells ignore insulin. Your body stores fat instead of burning it.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl card-shadow border-t-4 border-feminine-pink">
              <div className="w-14 h-14 bg-feminine-pink-light rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-feminine-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-feminine-charcoal mb-3">Thyroid Slowdown</h3>
              <p className="text-feminine-gray-soft leading-relaxed">
                Your thyroid controls metabolism. When it&apos;s underactive, you can eat 1200 calories and still gain weight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-feminine-charcoal mb-4">
            The Good News? There&apos;s a Solution
          </h2>
          <p className="text-xl text-feminine-gray-soft mb-10">
            A new approach is helping thousands of women finally break through — by targeting these 4 hormonal blocks directly.
          </p>
          <div className="bg-feminine-cream rounded-2xl p-8 card-shadow mb-10">
            <ul className="space-y-4 text-left max-w-md mx-auto">
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-feminine-pink flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-feminine-charcoal">Works WITH your hormones, not against them</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-feminine-pink flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-feminine-charcoal">No extreme dieting or deprivation</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-feminine-pink flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-feminine-charcoal">Designed specifically for women 35+</span>
              </li>
            </ul>
          </div>
          <Link href="/quiz" className="inline-block bg-feminine-pink hover:bg-feminine-pink-dark text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 card-shadow">
            Take the 60-Second Hormonal Assessment →
          </Link>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-feminine-cream via-feminine-pink-light to-feminine-pink-light">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-feminine-charcoal text-center mb-4">
            12,000+ Women Have Discovered Their Hormonal Pattern
          </h2>
          <p className="text-xl text-feminine-gray-soft text-center mb-12">
            Real women. Real results. Real transformation.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl card-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-feminine-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                ))}
              </div>
              <p className="text-feminine-gray-soft mb-4 italic">&quot;I tried every diet under the sun. Once I learned about my cortisol block, everything changed. I&apos;ve lost 23 pounds and finally feel like myself again.&quot;</p>
              <p className="font-semibold text-feminine-charcoal">— Sarah M., 42</p>
              <p className="text-sm text-feminine-pink">Lost 23 lbs</p>
            </div>
            <div className="bg-white p-8 rounded-2xl card-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-feminine-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                ))}
              </div>
              <p className="text-feminine-gray-soft mb-4 italic">&quot;The insulin resistance piece was eye-opening. I didn&apos;t realize my &apos;healthy&apos; breakfast was working against me. Down 18 pounds in 3 months!&quot;</p>
              <p className="font-semibold text-feminine-charcoal">— Jennifer L., 38</p>
              <p className="text-sm text-feminine-pink">Lost 18 lbs</p>
            </div>
            <div className="bg-white p-8 rounded-2xl card-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-feminine-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                ))}
              </div>
              <p className="text-feminine-gray-soft mb-4 italic">&quot;After 45, I thought this was just my life now. The hormonal assessment showed I had a thyroid block. Working on that specific issue changed everything.&quot;</p>
              <p className="font-semibold text-feminine-charcoal">— Michelle K., 47</p>
              <p className="text-sm text-feminine-pink">Lost 31 lbs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-feminine-pink">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Find Your Block?
          </h2>
          <p className="text-xl text-feminine-pink-light mb-10">
            Take our free 60-second assessment and discover your unique hormonal pattern
          </p>
          <Link href="/quiz" className="inline-block bg-white hover:bg-feminine-cream text-feminine-pink-dark font-semibold px-12 py-5 rounded-full text-xl transition-all duration-300 transform hover:scale-105 card-shadow">
            Start My Assessment →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-feminine-charcoal text-center">
        <p className="text-feminine-gray-soft text-sm">&copy; 2026. All rights reserved.</p>
      </footer>
    </main>
  )
}
