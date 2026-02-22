export const quizQuestions = [
  {
    id: 1,
    type: 'graduality',
    question: "Let's start simple. What's your age range?",
    answers: [
      { text: 'Under 30', value: 'under30' },
      { text: '30-39', value: '30-39' },
      { text: '40-49', value: '40-49' },
      { text: '50+', value: '50+' }
    ]
  },
  {
    id: 2,
    type: 'graduality',
    question: 'Which best describes your weight loss journey?',
    answers: [
      { text: 'I lose weight but always gain it back', value: 'yo-yo' },
      { text: 'I am stuck. No matter what I try, nothing works', value: 'stuck' },
      { text: 'I lose weight slowly, then hit a plateau', value: 'plateau' },
      { text: 'I have tried everything. Now I am searching for the real reason', value: 'searching' }
    ]
  },
  {
    id: 3,
    type: 'phase1',
    question: 'In 6 months, I want to feel...',
    answers: [
      { text: 'I am energized and confident in my clothes', value: 'energized' },
      { text: 'I am strong and capable throughout the day', value: 'strong' },
      { text: 'I am healthy and comfortable in my own skin', value: 'healthy' },
      { text: 'I am like my old self again', value: 'old-self' }
    ]
  },
  {
    id: 4,
    type: 'phase1',
    question: 'I am ready to invest in myself because...',
    answers: [
      { text: 'I am done with cheap solutions that fail', value: 'cheap-failed' },
      { text: 'I am worth the investment', value: 'worth' },
      { text: 'I am tired of living like this', value: 'cant-continue' },
      { text: 'I am ready to fix this once and for all', value: 'once-for-all' }
    ]
  },
  {
    id: 5,
    type: 'phase1',
    question: 'I am motivated to change because I want...',
    answers: [
      { text: 'I want to feel confident again', value: 'confident' },
      { text: 'I want energy to keep up with my kids/grandkids', value: 'energy-kids' },
      { text: 'I am worried about my health', value: 'health' },
      { text: 'I am tired of feeling invisible', value: 'invisible' }
    ]
  },
  {
    id: 6,
    type: 'phase2',
    question: 'Where does your weight stubbornly refuse to come off?',
    answers: [
      { text: 'My belly and midsection', value: 'belly', scores: { cortisol: 2 } },
      { text: 'My hips and thighs', value: 'hips', scores: { estrogen: 2 } },
      { text: 'All over, evenly', value: 'all-over', scores: { insulin: 2 } },
      { text: 'My upper body only', value: 'upper', scores: { thyroid: 2 } }
    ]
  },
  {
    id: 7,
    type: 'phase2',
    question: 'How is your energy throughout the day?',
    answers: [
      { text: 'I am crashing by 3pm daily', value: '3pm-crash', scores: { cortisol: 2 } },
      { text: 'I am exhausted no matter how much I sleep', value: 'always-tired', scores: { thyroid: 2 } },
      { text: 'I am fine until evening, then completely wiped out', value: 'evening-crash', scores: { insulin: 2 } },
      { text: 'My energy is pretty steady', value: 'steady', scores: {} }
    ]
  },
  {
    id: 8,
    type: 'phase2',
    question: 'When do sugar cravings hit you hardest?',
    answers: [
      { text: 'Right before my period', value: 'pre-period', scores: { estrogen: 2 } },
      { text: 'When I am stressed or anxious', value: 'stress', scores: { cortisol: 2 } },
      { text: 'Late at night', value: 'late-night', scores: { insulin: 2 } },
      { text: 'I do not really crave sugar', value: 'no-cravings', scores: {} }
    ]
  },
  {
    id: 9,
    type: 'villain',
    question: 'Why Your Body Fights Weight Loss',
    isInfoScreen: true,
    content: {
      headline: 'Why Your Body Fights Weight Loss',
      villainBox: {
        title: 'THE PROBLEM WITH BIG PHARMA SOLUTIONS',
        content: 'Ozempic and other GLP-1 injections were designed for diabetics. Not for women with hormonal weight blocks.\n\nThey do not address your stress hormones. They do not address your cycle. They are one-size-fits-all solutions that ignore YOUR specific pattern.\n\nPlus: needles, doctor visits, side effects, stigma.\n\nYou deserve better.'
      },
      body: 'Based on your quiz answers, here is what is happening:\n\nYour responses indicate elevated stress hormones from chronic stress, combined with cycle fluctuations.\n\nHere is why this matters:\n\nWhen stress hormones are high, your body stores fat around your midsection as a survival mechanism. It is NOT about calories. It is about stress hormones.\n\nWhen your cycle fluctuates, you get intense cravings and bloating that have nothing to do with willpower.',
      consequence: 'Without addressing these specific hormonal patterns, you will keep losing weight then gaining it back... forever.'
    }
  },
  {
    id: 10,
    type: 'phase3',
    question: 'When I think about past diets and attempts, I feel...',
    answers: [
      { text: 'I am frustrated that nothing sticks', value: 'frustrated' },
      { text: 'I am ashamed that I lack willpower', value: 'ashamed' },
      { text: 'I am angry that I wasted so much money', value: 'angry' },
      { text: 'I am hopeless that I will never figure this out', value: 'hopeless' }
    ]
  },
  {
    id: 11,
    type: 'phase3',
    question: 'The #1 thing I am afraid of is...',
    answers: [
      { text: 'I am afraid I will never reach my goal weight', value: 'never-goal' },
      { text: 'I am afraid I will pass unhealthy habits to my kids', value: 'pass-to-kids' },
      { text: 'I am afraid I will keep gaining weight', value: 'keep-gaining' },
      { text: 'I am afraid I will feel this way forever', value: 'forever' }
    ]
  },
  {
    id: 12,
    type: 'phase3',
    question: 'Despite trying everything, I still struggle with...',
    answers: [
      { text: 'Belly fat that will not budge', value: 'belly-fat', scores: { cortisol: 1 } },
      { text: 'Energy crashes that ruin my day', value: 'energy-crashes', scores: { thyroid: 1 } },
      { text: 'Cravings I cannot control', value: 'cravings', scores: { insulin: 1 } },
      { text: 'The scale not moving no matter what', value: 'scale-stuck', scores: { estrogen: 1 } }
    ]
  },
  {
    id: 13,
    type: 'pressure-release',
    question: 'To finally solve this, I want...',
    answers: [
      { text: 'I want something that works with my hormones', value: 'with-hormones' },
      { text: 'I want something easy to stick with', value: 'easy-longterm' }
    ]
  },
  {
    id: '13A',
    type: 'micro-commitment',
    question: 'Your Diagnosis Is Ready',
    subtitle: 'You are about to see your personalized hormonal block diagnosis.\n\nThis will explain exactly why diets have not worked for you. And what will actually work instead.',
    answers: [
      { text: 'Yes, show me my diagnosis', value: 'yes-ready' },
      { text: 'I am not ready yet', value: 'not-ready' }
    ]
  },
  {
    id: '13B',
    type: 'micro-commitment',
    question: 'One More Thing',
    subtitle: 'Most women discover their hormonal block and think: "So THAT is why nothing worked."\n\nThen they do nothing. And nothing changes.\n\nI am someone who takes action when I see a real solution.',
    answers: [
      { text: 'Yes, if there is a real solution, I am in', value: 'yes-action' },
      { text: 'I prefer to keep trying on my own', value: 'on-my-own' }
    ]
  },
  {
    id: 14,
    type: 'loading',
    isLoadingScreen: true,
    duration: 12,
    frames: [
      {
        testimonial: 'I discovered my issue was stress hormones. not lack of willpower. Within 8 weeks, I lost 19 lbs and finally had energy again. I wish I had found this years ago.',
        author: 'Sarah M., 44'
      },
      {
        socialProof: 'Join 12,000+ women who fixed their hormonal weight issue',
        badges: ['Made in EU', 'Clinically Tested', '60-Day Guarantee']
      },
      {
        productPreview: 'Your personalized protocol is ready...'
      }
    ]
  }
]

export function calculateDiagnosis(answers) {
  const scores = { cortisol: 0, estrogen: 0, insulin: 0, thyroid: 0 }
  
  answers.forEach((answer, index) => {
    const question = quizQuestions[index]
    if (question && question.answers) {
      const selectedAnswer = question.answers.find(a => a.value === answer)
      if (selectedAnswer && selectedAnswer.scores) {
        Object.entries(selectedAnswer.scores).forEach(([block, points]) => {
          scores[block] += points
        })
      }
    }
  })
  
  // Determine diagnosis
  const sortedBlocks = Object.entries(scores).sort((a, b) => b[1] - a[1])
  const [topBlock, topScore] = sortedBlocks[0]
  const secondBlock = sortedBlocks[1]
  
  // Check if all blocks are within 2 points
  const allScores = Object.values(scores)
  const maxScore = Math.max(...allScores)
  const minScore = Math.min(...allScores)
  
  if (maxScore - minScore <= 2) {
    return {
      type: 'all-blocks',
      title: 'ALL 4 HORMONAL BLOCKS ACTIVE',
      subtitle: '(Cortisol + Estrogen + Insulin + Thyroid)',
      description: 'This is why NOTHING has worked. Your hormones are working against you on every front. But here is what most women do not know: when you fix the root cause, everything else falls into place.',
      blocks: ['cortisol', 'estrogen', 'insulin', 'thyroid']
    }
  }
  
  // Check if single block dominates by 4+ points
  if (topScore - secondBlock[1] >= 4) {
    const blockNames = {
      cortisol: 'Cortisol',
      estrogen: 'Estrogen',
      insulin: 'Insulin',
      thyroid: 'Thyroid'
    }
    return {
      type: 'single',
      title: `ELEVATED ${blockNames[topBlock].toUpperCase()} PATTERN`,
      subtitle: `Primarily ${blockNames[topBlock]} dominance`,
      description: getSingleBlockDescription(topBlock),
      blocks: [topBlock]
    }
  }
  
  // Default: Cortisol + highest other
  const secondaryBlock = secondBlock[0] !== 'cortisol' ? secondBlock[0] : sortedBlocks[2][0]
  const blockNames = {
    cortisol: 'Cortisol',
    estrogen: 'Estrogen',
    insulin: 'Insulin',
    thyroid: 'Thyroid'
  }
  
  return {
    type: 'dual',
    title: `ELEVATED ${blockNames['cortisol'].toUpperCase()} + ${blockNames[secondaryBlock].toUpperCase()}`,
    subtitle: `Combined hormonal pattern`,
    description: getDualBlockDescription('cortisol', secondaryBlock),
    blocks: ['cortisol', secondaryBlock]
  }
}

function getSingleBlockDescription(block) {
  const descriptions = {
    cortisol: 'When cortisol is elevated from chronic stress, your body stores fat around your midsection as a survival mechanism. It is NOT about calories. It is about stress hormones.',
    estrogen: 'When estrogen fluctuates (especially before your period), you get intense cravings and bloating that have nothing to do with willpower. Your body is working against you.',
    insulin: 'When insulin is dysregulated, your body stores fat instead of burning it. even when you are eating "healthy." This is why the scale will not move no matter what you try.',
    thyroid: 'When thyroid function drops, your metabolism slows to a crawl. The result? You eat less, exercise more. And still do not lose weight.'
  }
  return descriptions[block]
}

function getDualBlockDescription(block1, block2) {
  const descriptions = {
    'cortisol-estrogen': 'When cortisol is high, your body holds onto fat around your belly. When estrogen fluctuates, you get intense cravings and bloating. Together, they create the perfect storm for weight gain.',
    'cortisol-insulin': 'When cortisol is elevated, your body stores fat as a survival mechanism. When insulin is dysregulated, you get energy crashes and constant hunger. You have been fighting both at once.',
    'cortisol-thyroid': 'When cortisol is high, your body holds onto fat. When thyroid function drops, your metabolism slows. The result? You eat less, exercise more. And still do not lose weight.'
  }
  const key = [block1, block2].sort().join('-')
  return descriptions[key] || 'Your hormones are working against you on multiple fronts. This is why single-solution diets have not worked.'
}

export const testimonials = {
  cortisol: [
    { text: 'Finally, something that understood my body. 8 weeks, 19 lbs down, and I have energy for the first time in years.', author: 'Sarah M., 44, Berlin' },
    { text: 'No more 3pm crashes. No more stress eating. I am down 14 lbs and finally in control.', author: 'Maria, 42, Lisbon' }
  ],
  estrogen: [
    { text: 'My pre-period binges are GONE. I have lost 16 lbs and I do not dread that time of the month anymore.', author: 'Anna, 41, Barcelona' },
    { text: 'For the first time in years, I feel like my body is working WITH me, not against me.', author: 'Claire, 39, Paris' }
  ],
  insulin: [
    { text: 'No more late-night cravings. No more energy crashes. The weight is finally coming off steadily.', author: 'Elena, 45, Rome' },
    { text: 'I can eat normally again without the scale punishing me. Down 22 lbs in 10 weeks.', author: 'Sophie, 47, Vienna' }
  ],
  thyroid: [
    { text: 'I have energy again! I am not exhausted all the time. And I have lost 18 lbs without extreme dieting.', author: 'Monica, 46, Madrid' },
    { text: 'For years I thought I was just lazy. Turns out it was my thyroid. Everything changed once I addressed it.', author: 'Rachel, 43, Amsterdam' }
  ]
}
