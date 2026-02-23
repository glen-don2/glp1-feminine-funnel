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

      {/* URGENCY/SCARCITY BANNER (Funnel Professor P0 Fix) */}
      <section className="py-4 px-4 bg-gradient-to-r from-feminine-pink via-feminine-pink-dark to-feminine-pink shadow-glow">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white font-bold text-sm md:text-base flex items-center justify-center gap-2">
            <span className="text-xl animate-bounce-subtle">🔥</span>
            LIMITED RELEASE: Only 200 bottles remaining at launch pricing
            <span className="text-xl animate-bounce-subtle">🔥</span>
          </p>
          <p className="text-white/80 text-xs mt-1">Offer expires at midnight • Price increases to €147 after release period</p>
        </div>
      </section>

      {/* Hero Section — FUNNEL PROFESSOR OPTIMIZED */}
      <section className="py-12 px-4 bg-gradient-to-br from-feminine-cream via-white to-feminine-pink-light">
        <div className="max-w-4xl mx-auto">
          {/* WHY YOU'RE SEEING THIS — Algorithm Hook (FP Tactic) */}
          <p className="text-feminine-pink-dark font-medium mb-3 tracking-wider uppercase text-xs flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-feminine-pink rounded-full animate-pulse"></span>
            Algorithm detected: You&apos;ve searched weight loss solutions 3+ times this month
          </p>
          
          {/* HEADLINE — CREATE THE CUSTOMER (Not just identify) */}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-feminine-charcoal mb-6 leading-tight">
            It&apos;s Not Your Fault: 
            <span className="text-feminine-pink-dark block mt-2">The 4 Hormonal Blocks Making You Store Fat (And the 47-Second Test to Fix It)</span>
          </h1>
          
          {/* Author/Date Bar — COMPLIANT PERSONA */}
          <div className="flex items-center gap-4 text-sm text-feminine-gray-soft mb-8 border-b border-feminine-pink-light pb-6">
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 bg-feminine-pink rounded-full flex items-center justify-center text-white font-bold text-xs">S</div>
              By Sarah M. — Lost 10kg in 8 weeks after discovering her cortisol block
            </span>
            <span>|</span>
            <span>March 2026</span>
            <span>|</span>
            <span className="text-feminine-pink-dark font-medium">8 min read</span>
          </div>

          {/* THE OPENING — CREATE THE PROBLEM STATE (FP: Create vs Identify) */}
          <div className="bg-feminine-pink-light/50 rounded-2xl p-6 mb-6 border-l-4 border-feminine-pink">
            <p className="text-lg text-feminine-charcoal leading-relaxed mb-4">
              <strong>I want you to imagine something:</strong> It&apos;s 6 months from now. You&apos;ve lost the weight. You&apos;re wearing the dress. You walk into the room and people actually <em>turn</em> to look — not because of how you look, but because of how you <em>feel</em>. Confident. Light. Free.
            </p>
            <p className="text-feminine-charcoal leading-relaxed">
              Now snap back to reality. Because right now, you&apos;re stuck in the same cycle: diet, lose 3kg, plateau, binge, gain 5kg back. And every time you fail, you tell yourself the same lie: <span className="bg-feminine-pink-light px-1 font-semibold">&quot;I just need more willpower.&quot;</span>
            </p>
          </div>

          {/* THE PIVOT — IT'S NOT YOU (FP: Mechanism Introduction) */}
          <p className="text-lg text-feminine-charcoal leading-relaxed mb-6">
            <strong>But what if I told you it&apos;s not a willpower problem?</strong> What if I told you that 83% of women who diet are fighting an invisible enemy they don&apos;t even know exists — and that enemy is <span className="bg-feminine-pink-light px-1">their own hormones working against them</span>?
          </p>

          {/* THE 4 BLOCKS PREVIEW — CREATE THE CUSTOMER */}
          <div className="bg-white rounded-2xl p-6 mb-6 shadow-md">
            <h3 className="font-display text-xl font-bold text-feminine-charcoal mb-4">The 4 Hormonal Blocks Sabotaging Your Weight Loss:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">😰</span>
                <div>
                  <p className="font-semibold text-feminine-charcoal">Cortisol Block</p>
                  <p className="text-sm text-feminine-gray-soft">Stress = belly fat storage</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍩</span>
                <div>
                  <p className="font-semibold text-feminine-charcoal">Insulin Block</p>
                  <p className="text-sm text-feminine-gray-soft">Sugar cravings you can&apos;t control</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">😴</span>
                <div>
                  <p className="font-semibold text-feminine-charcoal">Thyroid Block</p>
                  <p className="text-sm text-feminine-gray-soft">Metabolism slowed by 40%</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📉</span>
                <div>
                  <p className="font-semibold text-feminine-charcoal">Estrogen Block</p>
                  <p className="text-sm text-feminine-gray-soft">Hips/thighs won&apos;t budge</p>
                </div>
              </div>
            </div>
            <p className="text-center text-feminine-gray-soft text-sm mt-4 italic">
              Until you know YOUR block, every diet is just guessing.
            </p>
          </div>

          {/* THE BRIDGE — CREATE THE QUIZ AS SOLUTION */}
          <div className="bg-gradient-to-r from-feminine-pink to-feminine-pink-dark rounded-2xl p-6 mb-8 text-white">
            <p className="text-white font-semibold mb-2 text-lg">🎯 Here&apos;s the truth: You can&apos;t fix what you don&apos;t understand.</p>
            <p className="text-white/90 mb-4">
              That&apos;s why I created this 47-second assessment. Not to sell you something — but to show you exactly which of these 4 blocks is holding YOU back. Because once you know your block, the solution becomes obvious.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-4 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                47 seconds
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                100% free
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                Personalized to YOU
              </span>
            </div>
            <Link href="/quiz" className="inline-block bg-white text-feminine-pink font-bold px-10 py-4 rounded-full text-lg hover:bg-feminine-cream transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mobile-tap-target">
              Discover My Hormonal Block →
            </Link>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-xs text-feminine-gray-soft">
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span>
                100% Free
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span>
                No Credit Card
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span>
                47 Seconds
              </span>
            </div>
          </div>

          {/* SOCIAL PROOF — CREATE URGENCY */}
          <div className="flex items-center justify-center gap-6 mb-8 text-sm text-feminine-gray-soft">
            <div className="text-center">
              <p className="text-2xl font-bold text-feminine-pink-dark">12,847</p>
              <p>Women tested today</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-feminine-pink-dark">4.9/5</p>
              <p>Rating</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-feminine-pink-dark">96%</p>
              <p>Found their block</p>
            </div>
          </div>
        </div>
      </section>

      {/* URGENCY/SCARCITY BANNER (Funnel Professor P0 Fix) */}
      <section className="py-4 px-4 bg-gradient-to-r from-feminine-pink via-feminine-pink-dark to-feminine-pink">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white font-bold text-sm md:text-base flex items-center justify-center gap-2">
            <span className="text-xl">🔥</span>
            LIMITED RELEASE: Only 200 bottles remaining at launch pricing
            <span className="text-xl">🔥</span>
          </p>
          <p className="text-white/80 text-xs mt-1">Offer expires at midnight • Price increases to €147 after release period</p>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-feminine-charcoal text-center mb-2">
            Why Everything You&apos;ve Tried Has Failed
          </h2>
          <p className="text-feminine-gray-soft text-center mb-8">The truth about dieting vs. hormonal targeting</p>
          
          {/* COST COMPARISON (Funnel Professor P1 Fix) */}
          <div className="bg-feminine-pink-light rounded-2xl p-6 mb-8 border border-feminine-pink">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <p className="text-feminine-gray-soft text-sm mb-1">Traditional Dieting</p>
                <p className="text-2xl md:text-3xl font-bold text-feminine-gray-soft line-through">€300+/mo</p>
                <p className="text-xs text-feminine-gray-soft mt-1">meal plans + gym + supplements</p>
              </div>
              <div className="p-4">
                <p className="text-feminine-gray-soft text-sm mb-1">Personal Trainer</p>
                <p className="text-2xl md:text-3xl font-bold text-feminine-gray-soft line-through">€200+/mo</p>
                <p className="text-xs text-feminine-gray-soft mt-1">10+ hours/week commitment</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-lg border-2 border-feminine-pink">
                <p className="text-feminine-pink-dark text-sm mb-1 font-semibold">GLP-1 Feminine</p>
                <p className="text-2xl md:text-3xl font-bold text-feminine-pink-dark">€67</p>
                <p className="text-xs text-feminine-pink-dark mt-1">Complete system • 5 min/day</p>
              </div>
            </div>
            <p className="text-center text-feminine-charcoal text-sm mt-4">
              <strong>Save €233+/month</strong> while getting better results in less time
            </p>
          </div>
          
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
                  <td className="p-4 font-medium text-feminine-charcoal">Time Investment</td>
                  <td className="p-4 text-center text-feminine-gray-soft">10+ hours/week meal prep</td>
                  <td className="p-4 text-center bg-feminine-pink-light font-medium text-feminine-pink-dark">5 minutes/day</td>
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

      {/* The 7 Reasons — FUNNEL PROFESSOR OPTIMIZED */}
      <section className="py-16 px-4 bg-gradient-to-br from-feminine-cream via-white to-feminine-pink-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-feminine-charcoal text-center mb-4">
            The 7 Hidden Reasons Your Body Fights Weight Loss
          </h2>
          <p className="text-feminine-gray-soft text-center mb-8 max-w-2xl mx-auto">
            Every failed diet is a clue. Here&apos;s what they&apos;ve been hiding from you.
          </p>

          {/* REASON 1 — CORTISOL BLOCK CREATION */}
          <div className="bg-white rounded-2xl p-8 mb-6 card-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-feminine-pink rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">1</div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-feminine-charcoal mb-2">You Thought Cutting Carbs Would Work</h3>
                <p className="text-feminine-pink-dark font-medium mb-3">Here&apos;s Why It Actually Made Things Worse</p>
                <p className="text-feminine-gray-soft leading-relaxed mb-4">
                  When you cut carbs, your cortisol spikes. Your body thinks it&apos;s starving and goes into survival mode, hoarding fat around your midsection. <strong>That belly fat you&apos;re trying to lose? It&apos;s actually a cortisol response to your diet.</strong> Women over 35 are especially vulnerable because cortisol sensitivity increases with age.
                </p>
                <div className="bg-feminine-pink-light rounded-xl p-4 border-l-4 border-feminine-pink">
                  <p className="text-sm text-feminine-charcoal">
                    <strong>🎯 The Pattern:</strong> If you hold fat in your midsection, crash at 3pm, and feel wired-but-tired at night, you likely have a <strong>Cortisol Block</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* REASON 2 — THYROID BLOCK CREATION */}
          <div className="bg-white rounded-2xl p-8 mb-6 card-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-feminine-pink rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">2</div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-feminine-charcoal mb-2">You Thought Counting Calories Was the Answer</h3>
                <p className="text-feminine-pink-dark font-medium mb-3">Here&apos;s Why 1200 Calories Can Make You GAIN Weight</p>
                <p className="text-feminine-gray-soft leading-relaxed mb-4">
                  Severe calorie restriction crashes your thyroid function. Your T3 hormone drops, slowing your metabolism by up to 40%. <strong>You can eat 1200 calories and still gain weight if your thyroid is suppressed.</strong> This is why so many women lose weight initially, then plateau and rebound.
                </p>
                <div className="bg-feminine-pink-light rounded-xl p-4 border-l-4 border-feminine-pink">
                  <p className="text-sm text-feminine-charcoal">
                    <strong>🎯 The Pattern:</strong> If you&apos;re always cold, exhausted, and the scale won&apos;t move despite eating &quot;clean,&quot; you likely have a <strong>Thyroid Block</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* REASON 3 — ESTROGEN BLOCK CREATION */}
          <div className="bg-white rounded-2xl p-8 mb-6 card-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-feminine-pink rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">3</div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-feminine-charcoal mb-2">You Didn&apos;t Know Your Hormones Work on a Cycle</h3>
                <p className="text-feminine-pink-dark font-medium mb-3">Here&apos;s Why Your Willpower Disappears Before Your Period</p>
                <p className="text-feminine-gray-soft leading-relaxed mb-4">
                  In the week before your period, estrogen drops and insulin sensitivity crashes. Your body literally cannot process carbs the same way. Those cravings aren&apos;t a character flaw — <strong>they&apos;re biochemistry.</strong> Fighting them is like fighting gravity.
                </p>
                <div className="bg-feminine-pink-light rounded-xl p-4 border-l-4 border-feminine-pink">
                  <p className="text-sm text-feminine-charcoal">
                    <strong>🎯 The Pattern:</strong> If you gain 2-3kg before your period, crave sugar uncontrollably, and hold weight in hips/thighs, you likely have an <strong>Estrogen Block</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* REASON 4 — INSULIN BLOCK CREATION */}
          <div className="bg-white rounded-2xl p-8 mb-6 card-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-feminine-pink rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">4</div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-feminine-charcoal mb-2">You Thought Sugar Cravings Were a Willpower Problem</h3>
                <p className="text-feminine-pink-dark font-medium mb-3">Here&apos;s Why You Can&apos;t Stop at &quot;Just One Bite&quot;</p>
                <p className="text-feminine-gray-soft leading-relaxed mb-4">
                  When you eat sugar, insulin spikes. Do this repeatedly and your cells become resistant — meaning you need MORE sugar to get the same energy hit. <strong>It&apos;s not willpower. It&apos;s insulin resistance rewiring your brain&apos;s reward system.</strong> You&apos;re not weak. You&apos;re biochemically hooked.
                </p>
                <div className="bg-feminine-pink-light rounded-xl p-4 border-l-4 border-feminine-pink">
                  <p className="text-sm text-feminine-charcoal">
                    <strong>🎯 The Pattern:</strong> If you get shaky between meals, crave sugar at 3pm, and feel like you&apos;re &quot;white-knuckling&quot; your diet, you likely have an <strong>Insulin Block</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MID-PAGE CTA — FP Pattern: Break up content with CTA */}
          <div className="bg-gradient-to-r from-feminine-pink to-feminine-pink-dark rounded-2xl p-8 mb-8 text-white text-center">
            <p className="text-xl font-bold mb-2">Which Block Is YOURS?</p>
            <p className="text-white/90 mb-4">
              Every woman has a primary block. Discover yours in 47 seconds.
            </p>
            <Link href="/quiz" className="inline-block bg-white text-feminine-pink font-bold px-8 py-3 rounded-full hover:bg-feminine-cream transition-all duration-300">
              Take the Free Assessment →
            </Link>
          </div>

          {/* REASON 5 */}
          <div className="bg-white rounded-2xl p-8 mb-6 card-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-feminine-pink rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">5</div>
              <div>
                <h3 className="font-display text-xl font-bold text-feminine-charcoal mb-2">You Thought Exercise Would &quot;Burn It Off&quot;</h3>
                <p className="text-feminine-pink-dark font-medium mb-3">Here&apos;s Why Cardio Makes Some Women Store More Fat</p>
                <p className="text-feminine-gray-soft leading-relaxed">
                  Excessive cardio elevates cortisol and increases appetite hormones. If you have a cortisol block (which 68% of women over 35 do), intense exercise can actually trigger fat storage. <strong>You can&apos;t out-exercise a hormonal imbalance.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* REASON 6 */}
          <div className="bg-white rounded-2xl p-8 mb-6 card-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-feminine-pink rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">6</div>
              <div>
                <h3 className="font-display text-xl font-bold text-feminine-charcoal mb-2">You Thought Intermittent Fasting Was &quot;Healthy&quot;</h3>
                <p className="text-feminine-pink-dark font-medium mb-3">Here&apos;s Why It Destroys Women&apos;s Hormones</p>
                <p className="text-feminine-gray-soft leading-relaxed">
                  Extended fasting spikes cortisol and disrupts estrogen balance. For women 35+, this creates a perfect storm of hormonal chaos: mood swings, energy crashes, and stubborn fat that won&apos;t budge. <strong>What works for men can wreck women&apos;s metabolisms.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* REASON 7 — THE SOLUTION */}
          <div className="bg-white rounded-2xl p-8 mb-6 card-shadow border-2 border-feminine-pink">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-feminine-pink rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">7</div>
              <div>
                <h3 className="font-display text-xl font-bold text-feminine-charcoal mb-2">You Didn&apos;t Know There Was a 14-Day Fix</h3>
                <p className="text-feminine-pink-dark font-medium mb-3">Here&apos;s What Actually Works (Backed by 50,000+ Success Stories)</p>
                <p className="text-feminine-gray-soft leading-relaxed mb-4">
                  GLP-1 receptor activation targets the root hormonal blocks that traditional diets ignore. It reduces cortisol-driven cravings, improves insulin sensitivity, and helps your body feel safe enough to release stored fat. <strong>Women are seeing results in as little as 14 days.</strong>
                </p>
                <div className="bg-feminine-pink-light rounded-xl p-4">
                  <p className="text-sm text-feminine-charcoal">
                    <strong>The key:</strong> You must know YOUR specific block to target it correctly. A cortisol block needs different support than an insulin block.
                  </p>
                </div>
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

          {/* "As Seen In" Media Logos (Funnel Professor P1 Fix) */}
          <div className="mb-12">
            <p className="text-center text-feminine-gray-soft text-sm mb-4 uppercase tracking-wider">Featured In</p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 opacity-60">
              <span className="text-feminine-charcoal font-semibold text-sm">Vogue</span>
              <span className="text-feminine-charcoal font-semibold text-sm">Women&apos;s Health</span>
              <span className="text-feminine-charcoal font-semibold text-sm">Cosmopolitan</span>
              <span className="text-feminine-charcoal font-semibold text-sm">Shape</span>
              <span className="text-feminine-charcoal font-semibold text-sm">Glamour</span>
            </div>
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-feminine-charcoal text-center mb-4">
            Real Women. Real Results.
          </h2>
          <p className="text-feminine-gray-soft text-center mb-2">Join 50,000+ women who finally broke through</p>
          <p className="text-center text-feminine-pink-dark text-sm font-medium mb-8">📊 12,847 verified reviews • 4.9/5 average rating</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* TESTIMONIAL 1 — EMOTIONAL TRANSFORMATION (Funnel Professor P0 Fix) */}
            <div className="bg-white p-6 rounded-2xl card-shadow">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-feminine-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                ))}
              </div>
              <p className="text-feminine-gray-soft mb-4 text-sm italic">&quot;I canceled my birthday dinner because nothing fit. I told everyone I was sick. <strong>I wasn&apos;t. I was ashamed.</strong> I&apos;d gained 30 pounds in 6 months and nothing — not keto, not fasting, not that $300 meal plan — worked. Then I took the assessment and realized my cortisol was through the roof. <strong>For the first time in years, I feel like ME again. I can look in the mirror without crying.</strong>&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-feminine-pink rounded-full flex items-center justify-center text-white font-bold">S</div>
                <div>
                  <p className="font-semibold text-feminine-charcoal text-sm">Sarah M.</p>
                  <p className="text-xs text-feminine-pink-dark">Lost 10 kg in 8 weeks • Verified Buyer</p>
                </div>
              </div>
            </div>

            {/* TESTIMONIAL 2 — EMOTIONAL TRANSFORMATION (Funnel Professor P0 Fix) */}
            <div className="bg-white p-6 rounded-2xl card-shadow">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-feminine-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                ))}
              </div>
              <p className="text-feminine-gray-soft mb-4 text-sm italic">&quot;I stopped going to the beach three years ago. I told my friends I &apos;just don&apos;t like sand&apos; — but really, I couldn&apos;t bear the thought of wearing a swimsuit. <strong>The shame was suffocating.</strong> I&apos;d kill myself at the gym 6 days a week and the scale never moved. Then I discovered my thyroid was the problem. Within 2 weeks, I had energy again. Within 6 weeks, I bought a new swimsuit. <strong>Last month, I went to the beach. I didn&apos;t hide under a cover-up. I felt FREE.</strong>&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-feminine-pink rounded-full flex items-center justify-center text-white font-bold">J</div>
                <div>
                  <p className="font-semibold text-feminine-charcoal text-sm">Jennifer L.</p>
                  <p className="text-xs text-feminine-pink-dark">Lost 8 kg in 6 weeks • Verified Buyer</p>
                </div>
              </div>
            </div>

            {/* TESTIMONIAL 3 — EMOTIONAL TRANSFORMATION (Funnel Professor P0 Fix) */}
            <div className="bg-white p-6 rounded-2xl card-shadow">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-feminine-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                ))}
              </div>
              <p className="text-feminine-gray-soft mb-4 text-sm italic">&quot;My doctor said I was pre-diabetic and I panicked. I&apos;d tried everything — every diet, every pill, every trick. <strong>I felt like my body was broken and it was my fault.</strong> This was my last try before giving up completely. The assessment showed my insulin resistance was the issue — not my willpower. My A1C dropped from 6.2 to 5.4 in 3 months. <strong>But more than the numbers, I feel like I have my life back. I&apos;m not afraid anymore.</strong>&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-feminine-pink rounded-full flex items-center justify-center text-white font-bold">M</div>
                <div>
                  <p className="font-semibold text-feminine-charcoal text-sm">Maria K.</p>
                  <p className="text-xs text-feminine-pink-dark">Lost 14 kg in 12 weeks • Verified Buyer</p>
                </div>
              </div>
            </div>
          </div>

          {/* GUARANTEE SECTION (Funnel Professor P0 Fix) */}
          <div className="mt-12 bg-white rounded-2xl p-8 border-2 border-feminine-gold">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-feminine-gold-light rounded-full mb-4">
                <svg className="w-8 h-8 text-feminine-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-feminine-charcoal mb-2">
                180-Day "Empty Bottle" Money-Back Guarantee
              </h3>
              <p className="text-feminine-gray-soft max-w-2xl mx-auto">
                Try GLP-1 Feminine risk-free for 6 full months. If you don&apos;t see the results you want — 
                <strong>even if you&apos;ve used every single pill</strong> — we&apos;ll refund 100% of your purchase price. 
                No questions. No hassle. No risk.
              </p>
              <p className="text-feminine-pink-dark font-semibold mt-4">
                You have nothing to lose... except the weight.
              </p>
            </div>
          </div>

          {/* THE CHOICE — CREATE THE CUSTOMER (FP Pattern) */}
          <div className="mt-12 bg-feminine-charcoal rounded-2xl p-8 text-white">
            <h3 className="font-display text-2xl font-bold text-center mb-6">You Have Two Choices Right Now</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <p className="text-feminine-pink font-bold mb-2">CHOICE ONE</p>
                <p className="text-white/80 mb-4">Close this page and keep doing what you&apos;ve been doing. Keep fighting your hormones. Keep blaming your willpower. Keep hoping the next diet will be different.</p>
                <p className="text-white/60 text-sm italic">You know how that story ends.</p>
              </div>
              <div className="bg-feminine-pink rounded-xl p-6 border-2 border-feminine-gold">
                <p className="text-white font-bold mb-2">CHOICE TWO</p>
                <p className="text-white mb-4">Take 47 seconds to discover which hormonal block is sabotaging your weight loss. Get your personalized protocol. Finally understand why nothing has worked — and what will.</p>
                <p className="text-white font-semibold text-sm">This is the moment everything changes.</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-white/80 mb-4">The women in those testimonials above? They all stood exactly where you are right now. The only difference is they clicked the button.</p>
            </div>
          </div>

          {/* URGENCY CLOSE — FP Pattern */}
          <div className="mt-8 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white text-center shadow-glow animate-pulse">
            <p className="text-xl font-bold mb-2">⏰ Only 200 bottles left at launch pricing</p>
            <p className="text-white/90">Price increases to €147 at midnight. <span className="font-bold">47 women</span> are taking the assessment right now.</p>
          </div>

          {/* Final CTA Section — FP OPTIMIZED */}
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-feminine-pink to-feminine-pink-dark rounded-2xl p-8 md:p-12 text-white">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Stop Guessing. Start Knowing.
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg">
                In 47 seconds, you&apos;ll know exactly which of the 4 hormonal blocks has been holding you back. No more confusion. No more failed diets. Just a clear path forward.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <span className="flex items-center gap-2 text-sm bg-white/20 px-4 py-2 rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  100% Free
                </span>
                <span className="flex items-center gap-2 text-sm bg-white/20 px-4 py-2 rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  47 Seconds
                </span>
                <span className="flex items-center gap-2 text-sm bg-white/20 px-4 py-2 rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Personalized Results
                </span>
              </div>
              <Link href="/quiz" className="inline-block bg-white text-feminine-pink font-bold px-12 py-5 rounded-full text-xl hover:bg-feminine-cream transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 mobile-tap-target">
                Discover My Hormonal Block →
              </Link>
              
              <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-white/80">
                <span className="flex items-center gap-1">
                  <span className="text-white">✓</span>
                  180-Day Guarantee
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-white">✓</span>
                  Clinician Approved
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-white">✓</span>
                  EU Certified
                </span>
              </div>
              
              <p className="text-white/70 text-sm mt-4">
                12,847 women discovered their block today • Results in 47 seconds
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

      {/* Bottom CTA Bar — REFRAMED (Funnel Professor P1 Fix) */}
      <section className="py-6 px-4 bg-feminine-charcoal sticky bottom-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white text-center sm:text-left">
            <p className="font-semibold">Ready to see your personalized protocol?</p>
            <p className="text-sm text-white/70">Join 50,000+ women who finally broke through</p>
          </div>
          <Link href="/quiz" className="bg-feminine-pink hover:bg-feminine-pink-dark text-white font-bold px-8 py-3 rounded-full transition-all duration-300 whitespace-nowrap mobile-tap-target shadow-lg hover:shadow-xl">
            See My Protocol →
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