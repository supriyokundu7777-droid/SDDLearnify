// ========================================================
// 1. PRIMARY COURSE DETAILS
// ========================================================
export const courseDetailData = {
  id: 1,
  title: 'Full-Stack Web Development Bootcamp (React 19 & Next.js 15)',
  subtitle: 'Master enterprise frontend & backend architectures with Next.js 15 Server Actions, PostgreSQL, Prisma, Docker, and Microservices.',
  category: 'Web Development',
  rating: 4.9,
  reviewsCount: 1250,
  enrolledStudents: '18,450',
  level: 'All Levels (Beginner to Advanced)',
  language: 'English (US)',
  subtitles: 'English, Spanish, Hindi, German',
  lastUpdated: 'October 2026',
  duration: '48.5 Total Hours',
  totalLectures: '284 Lectures',
  downloadableResources: '65 Downloadable Repos & Cheatsheets',
  price: 2499,
  originalPrice: 5999,
  discount: '45% OFF',
  previewVideoThumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
  previewVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
};

// ========================================================
// 2. LEARNING OUTCOMES
// ========================================================
export const learningOutcomes = [
  'Architect production-ready full-stack applications with React 19, TypeScript, and Next.js 15 Server Actions',
  'Implement microservices with Node.js, Express, and Redis pub/sub messaging patterns',
  'Design relational schemas, optimize complex SQL queries, and manage migrations with PostgreSQL & Prisma',
  'Containerize multi-container architectures using Docker Compose and deploy to AWS Cloud infrastructure',
  'Enforce zero-trust authentication using OAuth2, OIDC, JWTs, and Argon2 password hashing',
  'Write end-to-end and unit automated tests using Vitest, Jest, and Playwright'
];

// ========================================================
// 3. COURSE REQUIREMENTS
// ========================================================
export const courseRequirements = [
  'Basic understanding of JavaScript (ES6+ syntax like arrow functions, destructuring, and async/await)',
  'A computer (Windows, macOS, or Linux) with administrative privileges to install Node.js and VS Code',
  'No prior experience with React 19, Next.js, Docker, or PostgreSQL is required — we start from ground zero'
];

// ========================================================
// 4. CURRICULUM MODULES
// ========================================================
export const curriculumModules = [
  {
    id: 'mod-1',
    title: 'Module 1: Modern JavaScript Foundations & TypeScript 5.6',
    duration: '4.5 Hours',
    lessonsCount: '18 Lessons',
    lessons: [
      { id: 1, title: 'Course Architecture & Development Toolchain Setup', time: '14:20', isFree: true },
      { id: 2, title: 'Deep Dive: Closures, Event Loop & Microtasks', time: '18:45', isFree: true },
      { id: 3, title: 'TypeScript Strict Mode, Generics & Type Narrowing', time: '22:10', isFree: false },
      { id: 4, title: 'Practical Lab: Refactoring Vanilla JS to Strict TypeScript', time: '35:00', isFree: false }
    ]
  },
  {
    id: 'mod-2',
    title: 'Module 2: React 19 Core: Hooks, Actions, Compiler & Server Components',
    duration: '8.0 Hours',
    lessonsCount: '32 Lessons',
    lessons: [
      { id: 5, title: 'Understanding the React 19 Compiler & Auto-Memoization', time: '16:30', isFree: true },
      { id: 6, title: 'useActionState, useFormStatus and Optimistic UI Updates', time: '24:15', isFree: false },
      { id: 7, title: 'Server Components vs Client Components Deep Architectural Dive', time: '30:40', isFree: false }
    ]
  },
  {
    id: 'mod-3',
    title: 'Module 3: Next.js 15 App Router & Server Actions in Production',
    duration: '10.5 Hours',
    lessonsCount: '44 Lessons',
    lessons: [
      { id: 8, title: 'Dynamic Segment Routing, Parallel Routes & Intercepting Modals', time: '26:10', isFree: false },
      { id: 9, title: 'Data Fetching with Partial Prerendering (PPR) and Cache Tags', time: '32:50', isFree: false },
      { id: 10, title: 'Authentication Middleware and Secure Cookie Sessions', time: '28:15', isFree: false }
    ]
  },
  {
    id: 'mod-4',
    title: 'Module 4: Enterprise Databases, Prisma ORM & Redis Caching',
    duration: '9.0 Hours',
    lessonsCount: '36 Lessons',
    lessons: [
      { id: 11, title: 'PostgreSQL Relational Schema Design & Indexing Best Practices', time: '27:40', isFree: false },
      { id: 12, title: 'Preventing Cache Stampedes with Redis Locks & Probabilistic Invalidation', time: '31:10', isFree: false },
      { id: 13, title: 'Writing Idempotent Webhook Handlers for Stripe Payments', time: '29:05', isFree: false }
    ]
  },
  {
    id: 'mod-5',
    title: 'Module 5: Docker Containerization, CI/CD Pipelines & AWS Deployment',
    duration: '16.5 Hours',
    lessonsCount: '54 Lessons',
    lessons: [
      { id: 14, title: 'Multi-Stage Dockerfiles for Next.js & Node.js Microservices', time: '25:30', isFree: false },
      { id: 15, title: 'GitHub Actions Continuous Integration & Automated Unit Testing', time: '34:20', isFree: false },
      { id: 16, title: 'Deploying ECS Fargate Clusters with Zero-Downtime Rolling Updates', time: '42:15', isFree: false }
    ]
  }
];

// ========================================================
// 5. PRIMARY INSTRUCTOR
// ========================================================
export const primaryInstructor = {
  name: 'Alex Morrison',
  title: 'Principal Systems Architect & Former Staff Engineer',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
  rating: 4.9,
  studentsCount: '92,400+ Students',
  coursesCount: '8 Published Tracks',
  bio: 'Alex has spent the last 14 years architecting resilient distributed systems and enterprise frontend web applications for Silicon Valley tech companies. He focuses on zero-fluff, hands-on production codebases.'
};

// ========================================================
// 6. STUDENT REVIEWS BREAKDOWN
// ========================================================
export const studentReviewsBreakdown = {
  averageRating: 4.9,
  totalRatings: '1,250',
  starsDistribution: [
    { stars: 5, percentage: 92 },
    { stars: 4, percentage: 6 },
    { stars: 3, percentage: 1 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 0 }
  ],
  featuredReviews: [
    {
      id: 1,
      studentName: 'Julian Martinez',
      date: 'September 2026',
      rating: 5,
      comment: 'Hands down the most rigorous and up-to-date Full-Stack course available. The React 19 server actions and Redis caching modules helped me pass my senior engineering loop.'
    },
    {
      id: 2,
      studentName: 'Priya Nambiar',
      date: 'August 2026',
      rating: 5,
      comment: 'The Docker Compose microservice environment booted in 30 seconds on my machine with zero dependency conflicts. Superb production-grade lessons!'
    },
    {
      id: 3,
      studentName: 'Carlos Silva',
      date: 'August 2026',
      rating: 5,
      comment: 'Everything from database indexes to Kubernetes deployments is explained with architectural diagrams. 10/10 recommended!'
    }
  ]
};