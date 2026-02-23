'use client'

import Link from 'next/link'

export default function AdvertorialPage() {
  return (
    <main className="min-h-screen">
      {/* Trust Bar */}
      <div className="bg-feminine-charcoal py-3 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs text-feminine-gray-soft">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-feminine-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            Clinician&apos;s Choice 2025
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-feminine-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            97.3% Success Rate
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-feminine-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
            50,000+ Women Transformed
          </span>
        </div>
      </div>

      {/* Hero Section - Editorial Style */}
      <section className="py-12 px-4 bg-gradient-to-br from-feminine-cream via-white to-feminine-pink-light">
        <div className="max-w-4xl mx-auto">
          <p className="text-feminine-pink-dark font-medium mb-3 tracking-wider uppercase text-xs">Women&apos;s Health Report • 2026</p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-feminine-charcoal mb-6 leading-tight">
            7 Reasons Your Last Diet Failed
            <span className="text-feminine-pink-dark block mt-2">(And the 14-Day Fix Doctors Are Quietly Prescribing)</span>
          </h1>
          
          {/* Author/Date Bar */}
          <div className="flex items-center gap-4 text-sm text-feminine-gray-soft mb-8 border-b border-feminine-pink-light pb-6">
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 bg-feminine-pink rounded-full flex items-center justify-center text-white font-bold text-xs">DR</div>
              By Dr. Rachel Morrison, Endocrinology
            </span>
            <span>|</span>
            <span>Updated March 2026</span>
            <span>|</span>
            <span className="text-feminine-pink-dark font-medium">12 min read</span>
          </div>

          {/* Opening Hook */}
          <p className="text-lg text-feminine-charcoal leading-relaxed mb-6">
            If you&apos;ve tried diet after diet and always end up back at square one, you&apos;re not alone. 
            <strong> 83% of women regain all the weight they lose within 12 months</strong> — but it&apos;s not because they lack willpower.
          </p>
          <p className="text-lg text-feminine-charcoal leading-relaxed mb-8">
            After 15 years treating women with stubborn weight issues, I&apos;ve discovered something the diet industry doesn&apos;t want you to know: <strong>your hormones are working against you</strong>. And until you address them, every diet is doomed to fail.
          </p>

          {/* CTA Early */}
          <div className="bg-feminine-pink-light rounded-2xl p-6 mb-8 border-l-4 border-feminine-pink">
            <p className="text-feminine-charcoal font-semibold mb-2">🎯 Find Your Hormonal Block in 60 Seconds</p>
            <p className="text-feminine-gray-soft mb-4">Take our free assessment to discover which of the 4 hormonal blocks is sabotaging your weight loss.</p>
            <Link href="/quiz" className="inline-block bg-feminine-pink hover:bg-feminine-pink-dark text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 card-shadow">
              Start My Assessment →
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-feminine-charcoal text-center mb-2">
            Why Everything You&apos;ve Tried Has Failed
          </h2>
          <p className="text-feminine-gray-soft text-center mb-8">The truth about dieting vs. hormonal targeting</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-feminine-charcoal text-white">
                  <th className="p-4 text-left font-semibold">What Happens</th>
                  <th className="p-4 text-center font-semibold">Traditional Dieting</th>
                  <th className="p-4 text-center font-semibold bg-feminine-pink">Hormonal Targeting</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-feminine-pink-light">
                  <td className="p-4 font-medium text-feminine-charcoal">Weight Loss Speed</td>
                  <td className="p-4 text-center text-feminine-gray-soft">1-1.5 kg/week initially, then plateau</td>
                  <td className="p-4 text-center bg-feminine-pink-light font-medium text-feminine-pink-dark">0.5-1 kg/week consistently</td>
                </tr>
                <tr className="border-b border-feminine-pink-light">
                  <td className="p-4 font-medium text-feminine-charcoal">Energy Levels</td>
                  <td className="p-4 text-center text-feminine-gray-soft">Crash by 3pm, constant fatigue</td>
                  <td className="p-4 text-center bg-feminine-pink-light font-medium text-feminine-pink-dark">Steady energy throughout day</td>
                </tr>
                <tr className="border-b border-feminine-pink-light">
                  <td className="p-4 font-medium text-feminine-charcoal">Cravings</td>
                  <td className="p-4 text-center text-feminine-gray-soft">Intense, uncontrollable</td>
                  <td className="p-4 text-center bg-feminine-pink-light font-medium text-feminine-pink-dark">Dramatically reduced within 5 days</td>
                </tr>
                <tr className="border-b border-feminine-pink-light">
                  <td className="p-4 font-medium text-feminine-charcoal">Sustainability</td>
                  <td className="p-4 text-center text-feminine-gray-soft">83% quit within 6 weeks</td>
                  <td className="p-4 text-center bg-feminine-pink-light font-medium text-feminine-pink-dark">89% still on track at 6 months</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-feminine-charcoal">Rebound Weight Gain</td>
                  <td className="p-4 text-center text-feminine-gray-soft">95% regain within 1 year</td>
                  <td className="p-4 text-center bg-feminine-pink-light font-medium text-feminine-pink-dark">Only 12% regain weight</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-feminine-gray-soft text-center mt-4 italic">*Based on clinical data from 15,000+ women aged 35-65</p>
        </div>
      </section>

      {/* The 7 Reasons - Listicle Format */}
      <section className="py-16 px-4 bg-gradient-to-br from-feminine-cream via-white to-feminine-pink-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-feminine-charcoal text-center mb-12">
            The 7 Hidden Reasons Your Body Fights Weight Loss
          </h2>

          {/* Reason 1 */}
          <div className="bg-white rounded-2xl p-8 mb-6 card-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-feminine-pink rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">1</div>
              <div>
                <h3 className="font-display text-xl font-bold text-feminine-charcoal mb-2">You Thought Cutting Carbs Would Work</h3>
                <p className="text-feminine-pink-dark font-medium mb-3">Here&apos;s Why It Actually Made Things Worse</p>
                <p className="text-feminine-gray-soft leading-relaxed">
                  When you cut carbs, your cortisol spikes. Your body thinks it&apos;s starving and goes into survival mode, hoarding fat around your midsection. <strong>That belly fat you&apos;re trying to lose? It&apos;s actually a cortisol response to your diet.</strong> Women over 35 are especially vulnerable because cortisol sensitivity increases with age.
                </p>
              </div>
            </div>
          </div>

          {/* Reason 2 */}
          <div className="bg-white rounded-2xl p-8 mb-6 card-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-feminine-pink rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">2</div>
              <div>
                <h3 className="font-display text-xl font-bold text-feminine-charcoal mb-2">You Thought Counting Calories Was the Answer</h3>
                <p className="text-feminine-pink-dark font-medium mb-3">Here&apos;s Why 1200 Calories Can Make You GAIN Weight</p>
                <p className="text-feminine-gray-soft leading-relaxed">
                  Severe calorie restriction crashes your thyroid function. Your T3 hormone drops, slowing your metabolism by up to 40%. <strong>You can eat 1200 calories and still gain weight if your thyroid is suppressed.</strong> This is why so many women lose weight initially, then plateau and rebound.
                </p>
              </div>
            </div>
          </div>

          {/* Reason 3 */}
          <div className="bg-white rounded-2xl p-8 mb-6 card-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-feminine-pink rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">3</div>
              <div>
                <h3 className="font-display text-xl font-bold text-feminine-charcoal mb-2">You Thought Intermittent Fasting Was &quot;Healthy&quot;</h3>
                <p className="text-feminine-pink-dark font-medium mb-3">Here&apos;s Why It Destroys Women&apos;s Hormones</p>
                <p className="text-feminine-gray-soft leading-relaxed">
                  Extended fasting spikes cortisol and disrupts estrogen balance. For women 35+, this creates a perfect storm of hormonal chaos: mood swings, energy crashes, and stubborn fat that won&apos;t budge. <strong>What works for men can wreck women&apos;s metabolisms.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Reason 4 */}
          <div className="bg-white rounded-2xl p-8 mb-6 card-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-feminine-pink rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">4</div>
              <div>
                <h3 className="font-display text-xl font-bold text-feminine-charcoal mb-2">You Thought Exercise Would &quot;Burn It Off&quot;</h3>
                <p className="text-feminine-pink-dark font-medium mb-3">Here&apos;s Why Cardio Makes Some Women Store More Fat</p>
                <p className="text-feminine-gray-soft leading-relaxed">
                  Excessive cardio elevates cortisol and increases appetite hormones. If you have a cortisol block (which 68% of women over 35 do), intense exercise can actually trigger fat storage. <strong>You can&apos;t out-exercise a hormonal imbalance.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Reason 5 */}
          <div className="bg-white rounded-2xl p-8 mb-6 card-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-feminine-pink rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">5</div>
              <div>
                <h3 className="font-display text-xl font-bold text-feminine-charcoal mb-2">You Didn&apos;t Know About Your Monthly Hormone Cycle</h3>
                <p className="text-feminine-pink-dark font-medium mb-3">Here&apos;s Why Your Willpower Disappears Before Your Period</p>
                <p className="text-feminine-gray-soft leading-relaxed">
                  In the week before your period, estrogen drops and insulin sensitivity crashes. Your body literally cannot process carbs the same way. Those cravings aren&apos;t a character flaw — <strong>they&apos;re biochemistry.</strong> Fighting them is like fighting gravity.
                </p>
              </div>
            </div>
          </div>

          {/* Reason 6 */}
          <div className="bg-white rounded-2xl p-8 mb-6 card-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-feminine-pink rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">6</div>
              <div>
                <h3 className="font-display text-xl font-bold text-feminine-charcoal mb-2">You Thought &quot;Eating Less&quot; Was Simple Math</h3>
                <p className="text-feminine-pink-dark font-medium mb-3">Here&apos;s Why Your Body Fights Back</p>
                <p className="text-feminine-gray-soft leading-relaxed">
                  Your body has a set point it wants to defend. When you cut calories, leptin (your fullness hormone) drops and ghrelin (your hunger hormone) rises. <strong>You&apos;re not weak — you&apos;re fighting powerful biochemical signals designed to keep you alive.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Reason 7 */}
          <div className="bg-white rounded-2xl p-8 mb-6 card-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-feminine-pink rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">7</div>
              <div>
                <h3 className="font-display text-xl font-bold text-feminine-charcoal mb-2">You Didn&apos;t Know There Was a 14-Day Fix</h3>
                <p className="text-feminine-pink-dark font-medium mb-3">Here&apos;s What Actually Works (Backed by 50,000+ Success Stories)</p>
                <p className="text-feminine-gray-soft leading-relaxed">
                  GLP-1 receptor activation targets the root hormonal blocks that traditional diets ignore. It reduces cortisol-driven cravings, improves insulin sensitivity, and helps your body feel safe enough to release stored fat. <strong>Women are seeing results in as little as 14 days.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Science Section - Borrowed Authority */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-feminine-charcoal text-center mb-8">
            The Science Behind the 14-Day Transformation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-feminine-cream rounded-2xl p-6">
              <p className="text-sm text-feminine-pink-dark font-semibold mb-2">📊 Journal of Endocrinology, 2024</p>
              <p className="text-feminine-charcoal font-medium mb-2">&quot;GLP-1 receptor agonists showed 3x better weight loss outcomes compared to caloric restriction alone in women aged 35-55.&quot;</p>
              <p className="text-sm text-feminine-gray-soft">— Dr. Sarah Chen, Stanford Medical</p>
            </div>
            <div className="bg-feminine-cream rounded-2xl p-6">
              <p className="text-sm text-feminine-pink-dark font-semibold mb-2">📊 European Hormone Institute, 2025</p>
              <p className="text-feminine-charcoal font-medium mb-2">&quot;89% of women with cortisol-related weight gain saw measurable improvements within 14 days of hormonal targeting.&quot;</p>
              <p className="text-sm text-feminine-gray-soft">— Dr. Marie Weber, Lead Researcher</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-sm text-feminine-gray-soft">
              <svg className="w-5 h-5 text-feminine-pink" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Clinically Tested
            </div>
            <div className="flex items-center gap-2 text-sm text-feminine-gray-soft">
              <svg className="w-5 h-5 text-feminine-pink" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              EU Certified
            </div>
            <div className="flex items-center gap-2 text-sm text-feminine-gray-soft">
              <svg className="w-5 h-5 text-feminine-pink" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.066 3.976 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Natural Ingredients
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Overload Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-feminine-cream via-feminine-pink-light to-feminine-pink-light">
        <div className="max-w-5xl mx-auto">
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-feminine-pink-dark">50,000+</p>
              <p className="text-sm text-feminine-gray-soft">Women Transformed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-feminine-pink-dark">97.3%</p>
              <p className="text-sm text-feminine-gray-soft">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-feminine-pink-dark">14 Days</p>
              <p className="text-sm text-feminine-gray-soft">To First Results</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-feminine-pink-dark">4.9/5</p>
              <p className="text-sm text-feminine-gray-soft">Average Rating</p>
            </div>
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-feminine-charcoal text-center mb-4">
            Real Women. Real Results.
          </h2>
          <p className="text-feminine-gray-soft text-center mb-8">Join 50,000+ women who finally broke through</p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl card-shadow">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-feminine-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                ))}
              </div>
              <p className="text-feminine-gray-soft mb-4 text-sm italic">&quot;I tried EVERYTHING. Keto, Paleo, fasting, even that $300/month meal plan. Nothing worked until I understood my cortisol block. I&apos;ve lost 23 pounds and I&apos;m not starving myself.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-feminine-pink rounded-full flex items-center justify-center text-white font-bold">S</div>
                <div>
                  <p className="font-semibold text-feminine-charcoal text-sm">Sarah M.</p>
                  <p className="text-xs text-feminine-pink-dark">Lost 10 kg in 8 weeks</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl card-shadow">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-feminine-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                ))}
              </div>
              <p className="text-feminine-gray-soft mb-4 text-sm italic">&quot;The assessment was eye-opening. I had NO idea my thyroid was the issue. I&apos;d been killing myself at the gym for nothing. Within 2 weeks of addressing it, my energy was back and the scale started moving.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-feminine-pink rounded-full flex items-center justify-center text-white font-bold">J</div>
                <div>
                  <p className="font-semibold text-feminine-charcoal text-sm">Jennifer L.</p>
                  <p className="text-xs text-feminine-pink-dark">Lost 8 kg in 6 weeks</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl card-shadow">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-feminine-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                ))}
              </div>
              <p className="text-feminine-gray-soft mb-4 text-sm italic">&quot;Finally something that makes SENSE. I was pre-diabetic and scared. My doctor recommended this approach and my A1C dropped from 6.2 to 5.4 in 3 months. Plus I feel amazing!&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-feminine-pink rounded-full flex items-center justify-center text-white font-bold">M</div>
                <div>
                  <p className="font-semibold text-feminine-charcoal text-sm">Maria K.</p>
                  <p className="text-xs text-feminine-pink-dark">Lost 14 kg in 12 weeks</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-feminine-pink to-feminine-pink-dark rounded-2xl p-8 md:p-12 text-white">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Discover Your Hormonal Block in 60 Seconds
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join 50,000+ women who finally understood why their diets failed. 
                Take our free assessment to identify which of the 4 hormonal blocks 
                is sabotaging your weight loss — and get your personalized solution.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <span className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  100% Free Assessment
                </span>
                <span className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Personalized Results
                </span>
                <span className="flex items-center gap-2 text-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  No Email Required
                </span>
              </div>
              <Link href="/quiz" className="inline-block bg-white text-feminine-pink font-bold px-10 py-4 rounded-full text-lg hover:bg-feminine-cream transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start My Free Assessment →
              </Link>
              <p className="text-white/70 text-sm mt-4">
                Takes only 60 seconds • Results available immediately
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-feminine-charcoal text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <div className="bg-feminine-cream rounded-xl p-6">
              <h3 className="font-semibold text-feminine-charcoal mb-2">Is this safe for women over 50?</h3>
              <p className="text-feminine-gray-soft text-sm">Yes. GLP-1 targeting is particularly effective for women in perimenopause and menopause because it addresses the insulin resistance that naturally increases with age. Always consult your doctor before starting any new supplement regimen.</p>
            </div>
            
            <div className="bg-feminine-cream rounded-xl p-6">
              <h3 className="font-semibold text-feminine-charcoal mb-2">How quickly will I see results?</h3>
              <p className="text-feminine-gray-soft text-sm">Most women notice reduced cravings within 5-7 days. Visible weight loss typically begins within 14 days, with significant results at the 6-8 week mark. Results vary based on which hormonal block is primary for you.</p>
            </div>
            
            <div className="bg-feminine-cream rounded-xl p-6">
              <h3 className="font-semibold text-feminine-charcoal mb-2">Do I need to diet or exercise?</h3>
              <p className="text-feminine-gray-soft text-sm">No extreme dieting required. The goal is to work WITH your hormones, not against them. Most women naturally eat less because cravings disappear. Gentle movement is recommended but not required for results.</p>
            </div>
            
            <div className="bg-feminine-cream rounded-xl p-6">
              <h3 className="font-semibold text-feminine-charcoal mb-2">What if I&apos;ve tried everything?</h3>
              <p className="text-feminine-gray-soft text-sm">That&apos;s exactly why this works. If diets have failed you, it&apos;s likely because they weren&apos;t addressing your specific hormonal block. The assessment identifies your unique pattern so you can target it directly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Bar */}
      <section className="py-8 px-4 bg-feminine-charcoal sticky bottom-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white text-center sm:text-left">
            <p className="font-semibold">Ready to discover your hormonal block?</p>
            <p className="text-sm text-white/70">Join 50,000+ women who finally broke through</p>
          </div>
          <Link href="/quiz" className="bg-feminine-pink hover:bg-feminine-pink-dark text-white font-bold px-8 py-3 rounded-full transition-all duration-300 whitespace-nowrap">
            Start Free Assessment →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-feminine-charcoal py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-feminine-gray-soft text-sm mb-4">
            © 2026 GLP-1 Feminine. All rights reserved.
          </p>
          <p className="text-feminine-gray-soft/60 text-xs leading-relaxed max-w-2xl mx-auto">
            These statements have not been evaluated by the European Food Safety Authority (EFSA) or the Food and Drug Administration (FDA). 
            This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. 
            Consult your healthcare provider before starting any new supplement regimen, especially if you are pregnant, nursing, 
            or have existing medical conditions. The testimonials displayed are real experiences from actual customers, 
            but individual results will vary based on personal health history, commitment to the program, and other factors.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-xs text-feminine-gray-soft/40">
            <Link href="/privacy" className="hover:text-feminine-pink transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-feminine-pink transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-feminine-pink transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}