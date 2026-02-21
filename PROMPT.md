# GLP-1 Feminine Quiz Funnel App

Build a React + Tailwind CSS quiz funnel app.

## APP STRUCTURE

### Pages
1. Landing page (/) - Headline + CTA
2. Quiz page (/quiz) - 17 screen quiz flow
3. Results page (/results) - Diagnosis + offer

### Quiz Screens (17 total)

Screens 1-8: Graduality + Phase 1 + Phase 2
- Screen 1: Age (under 30, 30-39, 40-49, 50+)
- Screen 2: Weight loss journey (4 options)
- Screen 3: Ideal body (4 options)
- Screen 4: Investment mindset (4 options)
- Screen 5: Motivation anchor (4 options)
- Screen 6: Body fat location (belly, hips, all over, upper body)
- Screen 7: Energy pattern (3pm crash, always tired, evening crash, steady)
- Screen 8: Craving pattern (pre-period, stress, late night, no cravings)

Screen 9: VILLAIN REVEAL (info pivot)
- Shows hormonal diagnosis preview
- Big Pharma/Ozempic contrast box
- "You've been fighting your hormones"

Screens 10-13: Phase 3 (emotional ownership)
- Screen 10: Past diet emotion (frustrated/ashamed/angry/hopeless)
- Screen 11: Future fear (never reach goal/pass to kids/keep gaining/feel forever)
- Screen 12: Final admission (belly fat/energy crashes/cravings/scale stuck)
- Screen 13: Pressure-release (choice reframe)

Screens 13A-13B: MICRO-COMMITMENTS
- 13A: "Are you ready to see the truth about your body?" (Yes/Not ready)
- 13B: "Are you willing to take action if there's a real solution?" (Yes/On my own)

Screen 14: LOADING SCREEN
- 12-second artificial delay
- Progress bar animation
- Rotating testimonials (4 seconds each)
- "Analyzing your hormonal pattern..."

## QUIZ SCORING LOGIC

4 Hormonal Blocks: Cortisol, Estrogen, Insulin, Thyroid

Points per answer:
- Belly fat -> Cortisol +2
- Hips/thighs -> Estrogen +2
- All over -> Insulin +2
- Upper body -> Thyroid +2
- 3pm crash -> Cortisol +2
- Always tired -> Thyroid +2
- Evening crash -> Insulin +2
- Pre-period cravings -> Estrogen +2
- Stress cravings -> Cortisol +2
- Late night cravings -> Insulin +2

Diagnosis Rules:
- 2+ blocks tied -> Cortisol + highest other
- Single block dominates by 4+ -> "Primarily [Block] Pattern"
- All within 2 points -> "All 4 Blocks Active"

## RESULTS PAGE

Shows:
1. Validation (remove shame)
2. Diagnosis (personalized block type)
3. Solution (GLP-1 Feminine with Ozempic comparison table)
4. Offer (1/3/5 month packages)
5. Scarcity ladder (escalating: inventory -> time -> social proof)
6. Testimonials (matched to block type)
7. FAQ
8. Final CTA

## TECH REQUIREMENTS

- React with Vite
- Tailwind CSS (custom colors: primary #D946EF, secondary #8B5CF6, accent #F59E0B)
- React Router
- localStorage for state
- Mobile-first design
- 300ms fade transitions

## PLACEHOLDER CONTENT

Testimonials:
- "I discovered my issue was cortisol + estrogen..." - Sarah M., 44
- "I was this close to Ozempic injections..." - Anna, 41
- "No more 3pm crashes..." - Maria, 42

Pricing:
- 1-Month: €69.95
- 3-Month: €119.85 (save €90)
- 5-Month: €149.75 (save €200)

Trust badges: Made in EU, Clinically Tested, 60-Day Guarantee
