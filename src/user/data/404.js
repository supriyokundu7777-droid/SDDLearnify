// ========================================================
// 1. QUICK NAVIGATION SHORTCUTS (20 Items)
// ========================================================
export const quickNavLinks = [
  { id: 1, title: 'Course Catalog', path: '/course-one', icon: '📚' },
  { id: 2, title: 'Live Events & Webinars', path: '/event', icon: '🎙️' },
  { id: 3, title: 'Pricing & Memberships', path: '/pricing-plan', icon: '💳' },
  { id: 4, title: 'Help & Knowledgebase', path: '/faq', icon: '❓' },
  { id: 5, title: 'Student Sign In', path: '/login', icon: '🔑' },
  { id: 6, title: 'Create Free Account', path: '/register', icon: '🚀' },
  { id: 7, title: 'Instructor Directory', path: '/instructor', icon: '👨‍🏫' },
  { id: 8, title: 'Featured Web Development', path: '/course-details', icon: '⚡' },
  { id: 9, title: 'AI & Data Science Labs', path: '/single-event', icon: '🤖' },
  { id: 10, title: 'System Architecture Tracks', path: '/course-one', icon: '📐' },
  { id: 11, title: 'Cloud DevOps Sandboxes', path: '/course-one', icon: '☁️' },
  { id: 12, title: 'Cyber Security Pentesting', path: '/course-one', icon: '🛡️' },
  { id: 13, title: 'Mobile App Engineering', path: '/course-one', icon: '📱' },
  { id: 14, title: 'UI/UX Design Systems', path: '/course-one', icon: '🎨' },
  { id: 15, title: 'Student Career Accelerator', path: '/pricing-plan', icon: '💼' },
  { id: 16, title: 'Enterprise Team Licenses', path: '/pricing-plan', icon: '🏢' },
  { id: 17, title: 'Open Source Community Discord', path: '/faq', icon: '💬' },
  { id: 18, title: 'Weekly Coding Hackathons', path: '/event', icon: '🏆' },
  { id: 19, title: 'Platform Status Telemetry', path: '/faq', icon: '📊' },
  { id: 20, title: 'Contact Support Helpdesk', path: '/faq', icon: '✉️' }
];

// Helper image pool for fallback courses
const courseImages = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  'https://images.unsplash.com/photo-1677442136019-21780ecad995',
  'https://images.unsplash.com/photo-1607799279861-4dd421887fb3',
  'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
  'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'
];

const fallbackCourseTemplates = [
  {
    title: 'Full-Stack Web Development Bootcamp (React 19 & Next.js 15)',
    category: 'Web Development',
    rating: 4.9,
    students: '18,450',
    price: '₹2,499'
  },
  {
    title: 'Autonomous AI Agents & PyTorch Enterprise Workflows',
    category: 'AI & Data Science',
    rating: 4.9,
    students: '12,200',
    price: '₹2,799'
  },
  {
    title: 'Cloud DevOps Engineering: Docker, Kubernetes & AWS',
    category: 'Cloud & DevOps',
    rating: 4.8,
    students: '15,800',
    price: '₹2,299'
  },
  {
    title: 'Microservices with Node.js, Express & Redis Caching',
    category: 'Backend Architecture',
    rating: 4.9,
    students: '14,100',
    price: '₹2,499'
  },
  {
    title: 'Figma to Production Design Systems with Tailwind CSS',
    category: 'UI/UX Design',
    rating: 4.8,
    students: '9,800',
    price: '₹1,999'
  },
  {
    title: 'Ethical Hacking & Bug Bounty Hunting Masterclass',
    category: 'Cyber Security',
    rating: 4.9,
    students: '11,600',
    price: '₹2,999'
  },
  {
    title: 'Cross-Platform Mobile Apps with Flutter 3 & Clean Architecture',
    category: 'Mobile App',
    rating: 4.8,
    students: '10,400',
    price: '₹2,299'
  },
  {
    title: 'Smart Contract Auditing & Solidity Security Engineering',
    category: 'Blockchain & Web3',
    rating: 4.9,
    students: '8,200',
    price: '₹2,799'
  }
];

// ========================================================
// 2. POPULAR FALLBACK COURSES (100 Items Total)
// ========================================================
export const popularFallbackCourses = Array.from({ length: 100 }, (_, idx) => {
  const base = fallbackCourseTemplates[idx % fallbackCourseTemplates.length];
  const cycle = Math.floor(idx / fallbackCourseTemplates.length);
  const title = cycle === 0 ? base.title : `${base.title} [Track Series ${cycle + 1}]`;

  return {
    id: idx + 1,
    title,
    category: base.category,
    rating: parseFloat((base.rating - ((idx % 3) * 0.05)).toFixed(1)),
    students: `${(parseFloat(base.students.replace(',', '')) + (idx * 120)).toLocaleString()}`,
    price: base.price,
    image: `${courseImages[idx % courseImages.length]}?auto=format&fit=crop&w=400&q=80`
  };
});

// ========================================================
// 3. POPULAR SEARCH KEYWORDS (80 Items Total)
// ========================================================
const keywordPool = [
  'React 19', 'Next.js 15 Server Actions', 'Docker Containers', 'Kubernetes Helm',
  'PyTorch LLMs', 'LangChain Agents', 'Figma Variables', 'Tailwind CSS',
  'PostgreSQL Prisma', 'Redis Caching', 'GraphQL Apollo', 'TypeScript Monorepo',
  'AWS Lambda', 'Terraform CI/CD', 'OWASP Pentesting', 'Flutter Clean Architecture'
];

export const popularSearchKeywords = Array.from({ length: 80 }, (_, idx) => ({
  id: idx + 1,
  keyword: `${keywordPool[idx % keywordPool.length]} ${idx >= 16 ? `(Level ${Math.floor(idx / 16) + 1})` : ''}`,
  searchCount: `${(idx + 1) * 350 + 2500} queries`,
  category: ['Frontend', 'Backend', 'DevOps', 'AI/ML', 'Design'][idx % 5]
}));

// ========================================================
// 4. NOT FOUND RECOVERY TIPS (60 Items Total)
// ========================================================
const tipTemplates = [
  'Check the URL for typographical errors or misplaced slashes in the path.',
  'If you were following an old lecture bookmark, search for the topic in the current catalog.',
  'Course modules are occasionally restructured during framework version upgrades.',
  'Clear your browser cache if you recently navigated away from a deployed cloud lab.',
  'Use our top search bar to find migrated lessons and GitHub code repositories.'
];

export const notFoundRecoveryTips = Array.from({ length: 60 }, (_, idx) => ({
  id: idx + 1,
  title: `Navigation Tip #${idx + 1}`,
  description: tipTemplates[idx % tipTemplates.length],
  actionText: ['Browse Catalog', 'Visit Helpdesk', 'Go to Home', 'Report Link'][idx % 4]
}));

// ========================================================
// 5. 404 & BROKEN LINK FAQS (50 Items Total)
// ========================================================
const notFoundFaqList = [
  'Why am I seeing this 404 Page Not Found error?',
  'Has a course or video lecture been permanently removed?',
  'What should I do if a link inside a course slide deck is broken?',
  'How do I find a migrated repository branch on GitHub?',
  'Can I report broken URLs directly to the curriculum engineering team?',
  'Will my lesson completion progress be saved if a page relocates?',
  'Why did my cloud sandbox session URL expire?',
  'Where can I find an archived version of a deprecated framework lesson?',
  'Are old curriculum bookmarks redirected automatically to the newest track?',
  'Who do I contact if an entire course section fails to load?'
];

export const notFoundFaqs = Array.from({ length: 50 }, (_, idx) => ({
  id: idx + 1,
  question: `${notFoundFaqList[idx % 10]} ${idx >= 10 ? `[Part ${Math.floor(idx / 10) + 1}]` : ''}`,
  answer: 'The page you attempted to access may have been updated to a newer framework version or moved to a different catalog path. Please search our updated directory or reach out via our 24/7 Discord support.',
  category: idx % 2 === 0 ? 'Routing & URLs' : 'Curriculum Updates'
}));