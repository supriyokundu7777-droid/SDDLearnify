// 1. Featured Cohort Course Details
export const enrollCourseData = {
  id: 1,
  title: 'Full-Stack Web Development Immersion (React 19 & Next.js 15)',
  subtitle: 'Join an intensive 16-week mentored engineering cohort with live cloud sandbox labs, peer code reviews, and direct hiring partner referrals.',
  category: 'Full-Stack Engineering',
  rating: 4.9,
  reviewsCount: 1420,
  price: 9999,
  originalPrice: 19999,
  discountTag: '50% EARLY ACCESS DISCOUNT',
  badge: 'Live Cohort Track',
  curriculumWeeks: '16 Weeks',
  liveHours: '80+ Live Mentor Hours',
  image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
  instructor: {
    name: 'Alex Morrison',
    role: 'Principal Systems Architect',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  }
};

// 2. Upcoming Batch Timetable
export const cohortBatches = [
  {
    id: 'batch-nov',
    title: 'November 2026 Live Cohort',
    timing: 'Weekend Batch (Sat & Sun, 7:00 PM - 9:30 PM EST)',
    startDate: 'November 15, 2026',
    seatsLeft: 8,
    isPopular: true
  },
  {
    id: 'batch-dec',
    title: 'December 2026 Evening Batch',
    timing: 'Weekday Evenings (Tue & Thu, 8:00 PM - 10:30 PM EST)',
    startDate: 'December 01, 2026',
    seatsLeft: 19,
    isPopular: false
  },
  {
    id: 'batch-self',
    title: 'Self-Paced Async Masterclass',
    timing: 'Instant Lifetime Access + 24/7 Discord Lounge Support',
    startDate: 'Immediate Access Today',
    seatsLeft: 'Unlimited',
    isPopular: false
  }
];

// 3. Learning Tracks / Specializations
export const enrollmentTracks = [
  'Enterprise Full-Stack (Next.js 15, PostgreSQL & Redis)',
  'Cloud Infrastructure & DevOps (Docker, Kubernetes & AWS ECS)',
  'Autonomous AI Agents & PyTorch LangGraph Workflows',
  'UI/UX Design Systems & Tailwind CSS Architecture'
];

// 4. Enrollment Perks Checklist
export const enrollmentPerks = [
  'Weekly 1-on-1 code reviews with working staff engineers',
  'Unlimited interactive browser cloud sandbox compute hours',
  'Direct resume sharing with 850+ global hiring partner companies',
  'Lifetime access to recorded video masterclasses and GitHub boilerplates',
  'Verifiable tamper-proof completion certificate recognized by tech recruiters'
];

// 5. Trust & Guarantee Badges
export const enrollmentGuarantees = [
  { icon: '🛡️', title: '14-Day Refund Guarantee', desc: 'Full money-back policy if the cohort is not suitable.' },
  { icon: '💳', title: 'Flexible 4-Part EMI', desc: 'Split payments into interest-free installments via Klarna.' },
  { icon: '📜', title: 'Verified Credential', desc: 'Sharable on LinkedIn and corporate HR registries.' }
];