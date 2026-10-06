// ==========================================
// 1. INSTRUCTOR BIO & PROFILE INFO (20 Items)
// ==========================================
export const instructorProfile = {
  id: 1,
  name: 'Alex Morrison',
  role: 'Principal Cloud Architect & Senior Software Engineer',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
  company: 'AWS Alumni & Tech Speaker',
  location: 'San Francisco, CA (Remote)',
  rating: 4.9,
  totalReviews: '12,850',
  totalStudents: '52,400+',
  totalCourses: 60,
  verified: true,
  yearsExperience: '14+ Years',
  currentCompany: 'NextScale Systems',
  officeHours: 'Tuesdays & Thursdays (06:00 PM - 08:00 PM EST)',
  primaryEmail: 'alex.morrison@learnify.io',
  languagesSpoken: 'English, German, Spanish',
  githubFollowers: '48.2k Followers',
  twitterFollowers: '36.5k Followers',
  about: `Alex is an ex-Staff Software Engineer with over 14 years of hands-on experience designing cloud distributed systems, high-throughput microservices, and leading full-stack web architectures. 

He has trained engineering cohorts at Fortune 500 organizations and has authored industry-standard open-source templates used by thousands of engineering teams worldwide. Alex specializes in taking complex topics like React 19 Compiler changes, Next.js 15 Server Actions, Docker container orchestration, and Kubernetes scaling, and explaining them with real-world mental models.`,
  socialLinks: {
    linkedin: '#',
    github: '#',
    twitter: '#',
    website: 'https://alexmorrison.dev'
  }
};

// ==========================================
// 2. EXPERIENCE TIMELINE (10 Milestones)
// ==========================================
export const instructorExperience = [
  {
    id: 1,
    role: 'Principal Cloud & Frontend Architect',
    company: 'NextScale Systems',
    period: '2022 - Present',
    desc: 'Leading distributed cloud infrastructure, micro-frontends, and automated CI/CD deployments for 10M+ daily active users.'
  },
  {
    id: 2,
    role: 'Staff Software Engineer',
    company: 'Amazon Web Services (AWS)',
    period: '2018 - 2022',
    desc: 'Engineered high-concurrency event-driven serverless architectures, IAM security configurations, and containerized microservices.'
  },
  {
    id: 3,
    role: 'Senior Full-Stack Developer',
    company: 'Stripe Solutions',
    period: '2015 - 2018',
    desc: 'Constructed responsive merchant dashboard experiences, automated webhook verification, and payment gateway routing.'
  },
  {
    id: 4,
    role: 'Lead Frontend Engineer',
    company: 'CloudFlare Labs',
    period: '2013 - 2015',
    desc: 'Architected distributed DNS configuration dashboards, edge worker tooling, and real-time network attack telemetry graphs.'
  },
  {
    id: 5,
    role: 'Software Engineer',
    company: 'Red Hat Inc.',
    period: '2011 - 2013',
    desc: 'Contributed to open-source Linux kernel packaging, systemd integration scripts, and automated RPM testing suites.'
  },
  {
    id: 6,
    role: 'Technical Advisor & Investor',
    company: 'VentureScale Accelerator',
    period: '2021 - Present',
    desc: 'Advising early-stage B2B developer tooling and DevOps startups on cloud infrastructure scaling.'
  },
  {
    id: 7,
    role: 'Visiting Lecturer in Distributed Systems',
    company: 'UC Berkeley Extension',
    period: '2020 - 2023',
    desc: 'Taught semester-long applied microservices and cloud engineering workshops to graduating computer science cohorts.'
  },
  {
    id: 8,
    role: 'Open-Source Project Lead',
    company: 'Turborepo Community Contributor',
    period: '2022 - 2024',
    desc: 'Authored high-performance build cache pipelines and monorepo scaffolding plugins adopted by thousands of repositories.'
  },
  {
    id: 9,
    role: 'Consulting Solutions Architect',
    company: 'Fintech Velocity Partners',
    period: '2017 - 2018',
    desc: 'Audited PCI-DSS compliance, database replication latency, and mutual TLS encryption standards for European financial gateways.'
  },
  {
    id: 10,
    role: 'Junior Web Developer',
    company: 'Apex Digital Agency',
    period: '2009 - 2011',
    desc: 'Crafted semantic HTML5/CSS3 layouts, custom WordPress themes, and RESTful AJAX data endpoints for enterprise clients.'
  }
];

// ==========================================
// 3. CORE TECHNICAL SKILLS (20 Items)
// ==========================================
export const instructorSkills = [
  'React 19 & Next.js 15',
  'Node.js & Express Microservices',
  'Docker & Kubernetes (EKS)',
  'AWS Cloud Architecture (ECS, S3, CloudFront)',
  'PostgreSQL & Prisma ORM',
  'TypeScript Enterprise Monorepos',
  'Redis Distributed Caching',
  'CI/CD Pipelines (GitHub Actions & GitLab)',
  'GraphQL & Apollo Server Federation',
  'RabbitMQ & Apache Kafka Streaming',
  'Terraform Infrastructure as Code (IaC)',
  'WebSockets & Real-time Collaboration (Socket.IO)',
  'Linux Kernel Administration & Bash Scripting',
  'Vitest, React Testing Library & Playwright',
  'OWASP Web Security & OAuth2/OIDC Auth',
  'OpenTelemetry, Datadog & Distributed Tracing',
  'Stripe Payment APIs & Subscription Webhooks',
  'Tailwind CSS & Headless Component Architectures',
  'Golang High-Performance Microservices',
  'System Design for 10M+ Concurrent Users'
];

// ========================================================
// 4. COURSES TAUGHT BY THIS INSTRUCTOR (60 Items Total)
// ========================================================
const baseCourseLibrary = [
  {
    title: 'Full-Stack Web Development Bootcamp (React 19, Next.js & Docker)',
    category: 'Web Development',
    level: 'Beginner',
    rating: 4.9,
    reviews: '3,840',
    duration: '45 Hours',
    lectures: '185 Lessons',
    price: 2499, originalPrice: 6999,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
  },
  {
    title: 'Next.js 15 Enterprise Architecture: Caching, Server Actions & PPR',
    category: 'Web Development',
    level: 'Intermediate',
    rating: 4.9,
    reviews: '2,920',
    duration: '38 Hours',
    lectures: '145 Lessons',
    price: 2299, originalPrice: 5999,
    badge: 'Hot',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee'
  },
  {
    title: 'Microservices with Node.js, NestJS, Kafka & Distributed Tracing',
    category: 'Web Development',
    level: 'Advanced',
    rating: 4.8,
    reviews: '1,850',
    duration: '50 Hours',
    lectures: '190 Lessons',
    price: 2999, originalPrice: 7999,
    badge: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c'
  },
  {
    title: 'Production CI/CD Automation with GitHub Actions & Docker',
    category: 'Cloud & DevOps',
    level: 'Beginner',
    rating: 4.8,
    reviews: '3,400',
    duration: '26 Hours',
    lectures: '90 Lessons',
    price: 1999, originalPrice: 5499,
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb'
  },
  {
    title: 'AWS Certified Developer Associate Bootcamp & Practical Labs',
    category: 'Cloud & DevOps',
    level: 'Intermediate',
    rating: 4.9,
    reviews: '4,100',
    duration: '42 Hours',
    lectures: '160 Lessons',
    price: 2799, originalPrice: 7499,
    badge: 'Certified',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
  },
  {
    title: 'TypeScript Enterprise Design Patterns & Type-Level Programming',
    category: 'Web Development',
    level: 'Advanced',
    rating: 4.9,
    reviews: '2,600',
    duration: '28 Hours',
    lectures: '110 Lessons',
    price: 1999, originalPrice: 5499,
    badge: 'Pro Pick',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3'
  }
];

export const instructorCourses = Array.from({ length: 60 }, (_, idx) => {
  const base = baseCourseLibrary[idx % baseCourseLibrary.length];
  const cycle = Math.floor(idx / baseCourseLibrary.length);
  const title = cycle === 0 ? base.title : `${base.title} [Advanced Track ${cycle + 1}]`;

  return {
    id: idx + 1,
    title,
    category: base.category,
    level: base.level,
    rating: parseFloat((base.rating - ((idx % 3) * 0.05)).toFixed(1)),
    reviews: `${(parseFloat(base.reviews.replace(',', '')) + (idx * 25)).toLocaleString()}`,
    duration: base.duration,
    lectures: base.lectures,
    price: parseFloat((base.price + (cycle * 2)).toFixed(2)),
    originalPrice: parseFloat((base.originalPrice + (cycle * 4)).toFixed(2)),
    badge: base.badge,
    image: `${base.image}?auto=format&fit=crop&w=600&q=80`
  };
});

// ========================================================
// 5. IN-DEPTH STUDENT REVIEWS (120 Items Total)
// ========================================================
const reviewFeedbackPool = [
  'Alex possesses an unmatched ability to demystify advanced distributed systems and Next.js server actions. His code review feedback during live labs transformed my approach to enterprise software.',
  'The Docker and AWS deployment modules saved our team months of trial and error. The repository setups are clean, maintainable, and up-to-date with current standards.',
  'Easily the most engaging instructor on Learnify. He does not skip real error messages—watching him debug race conditions in real time taught me more than 5 textbooks.',
  'Thanks to the microservices and Kafka module, I was able to redesign our billing pipeline at work and earn a promotion to Senior Engineer.',
  'Clear teaching cadence, beautifully illustrated architecture diagrams, and production-tested starter code. Worth every single cent.',
  'His explanations on TypeScript generics and compiler optimization gave me the edge I needed during my technical screening at Stripe.',
  'The best investment I have made in my engineering career. Alex personally answered my deployment question in Discord within 30 minutes.'
];

const reviewerDirectory = [
  'Julian Martinez', 'Priya Nambiar', 'Carlos Silva', 'Amina Sheikh', 'Lukas Becker',
  'Tanya Novak', 'Michael Zhang', 'Hannah Abbott', 'David Chen', 'Fatima Al-Sayed',
  'Marcus Aurelius', 'Siddharth Sen', 'Chloe Bourgeois', 'Gabriel Agreste', 'Kavita Iyer'
];

export const instructorStudentReviews = Array.from({ length: 120 }, (_, idx) => ({
  id: idx + 1,
  studentName: `${reviewerDirectory[idx % reviewerDirectory.length]} ${idx >= 15 ? `(${Math.floor(idx / 15) + 1})` : ''}`,
  role: [
    'Senior Frontend Engineer at Meta',
    'Cloud DevOps Engineer at Stripe',
    'Full-Stack Developer at Vercel',
    'Backend Engineer at Spotify',
    'Principal Architect at Datadog',
    'Junior Software Engineer at Amazon'
  ][idx % 6],
  rating: idx % 20 === 0 ? 4 : 5,
  date: `Month ${(idx % 12) + 1}, 2026`,
  comment: reviewFeedbackPool[idx % reviewFeedbackPool.length]
}));

// ==========================================
// 6. PUBLICATIONS & ARTICLES (40 Items)
// ==========================================
const articleTopics = [
  'Optimizing Next.js 15 Server Components for Low-Latency APIs',
  'Containerizing Node.js Microservices: From 1.2GB to 45MB Alpine Images',
  'Why Distributed Caching with Redis Fails Without Cache Stampede Protection',
  'Event-Driven Systems: When to Choose Kafka over RabbitMQ',
  'The Architecture of Modern Frontends: Module Federation vs Monorepos',
  'Zero-Downtime Database Migrations on Live PostgreSQL Clusters',
  'Hardening Docker Containers: Rootless Execution and Seccomp Profiles',
  'Building Resilient Microservices with Circuit Breakers in Express'
];

export const instructorPublications = Array.from({ length: 40 }, (_, idx) => ({
  id: idx + 1,
  title: `${articleTopics[idx % articleTopics.length]} (Vol. ${Math.floor(idx / 8) + 1})`,
  publisher: ['Medium Engineering', 'InfoQ', 'HackerNoon', 'AWS Architecture Blog', 'NextScale Tech Log'][idx % 5],
  reads: `${(idx + 1) * 3 + 15}k Reads`,
  year: 2023 + (idx % 4),
  url: '#'
}));

// ==========================================
// 7. KEYNOTE TALKS & CONFERENCES (30 Items)
// ==========================================
const conferenceNames = [
  'React Summit Global', 'AWS re:Invent Las Vegas', 'QCon San Francisco',
  'DockerCon Worldwide', 'KubeCon North America', 'Node.js Interactive'
];

export const instructorKeynotes = Array.from({ length: 30 }, (_, idx) => ({
  id: idx + 1,
  talkTitle: `Scaling Distributed React & Cloud Architectures to 10M Users #${idx + 1}`,
  conference: `${conferenceNames[idx % conferenceNames.length]} ${2023 + (idx % 4)}`,
  location: ['San Francisco, CA', 'Las Vegas, NV', 'Berlin, Germany', 'London, UK', 'Tokyo, Japan', 'Virtual Stage'][idx % 6],
  attendees: `${(idx % 10) * 200 + 1200} Engineers`,
  recordingAvailable: true
}));

// ========================================================
// 8. CERTIFICATIONS & ACCREDITATIONS (15 Items Total)
// ========================================================
export const instructorCertifications = [
  { id: 1, title: 'AWS Certified Solutions Architect – Professional (SAP-C02)', issuer: 'Amazon Web Services', year: '2025' },
  { id: 2, title: 'AWS Certified DevOps Engineer – Professional (DOP-C02)', issuer: 'Amazon Web Services', year: '2024' },
  { id: 3, title: 'Certified Kubernetes Administrator (CKA)', issuer: 'The Linux Foundation & CNCF', year: '2025' },
  { id: 4, title: 'Certified Kubernetes Application Developer (CKAD)', issuer: 'The Linux Foundation & CNCF', year: '2024' },
  { id: 5, title: 'HashiCorp Certified: Terraform Associate (003)', issuer: 'HashiCorp', year: '2024' },
  { id: 6, title: 'Google Cloud Certified Professional Cloud Architect', issuer: 'Google Cloud', year: '2023' },
  { id: 7, title: 'Red Hat Certified Engineer (RHCE)', issuer: 'Red Hat', year: '2022' },
  { id: 8, title: 'Certified Information Systems Security Professional (CISSP)', issuer: '(ISC)²', year: '2023' },
  { id: 9, title: 'Docker Certified Associate (DCA)', issuer: 'Docker Inc.', year: '2024' },
  { id: 10, title: 'MongoDB Certified Developer Associate', issuer: 'MongoDB University', year: '2023' },
  { id: 11, title: 'Confluent Certified Developer for Apache Kafka', issuer: 'Confluent', year: '2024' },
  { id: 12, title: 'GitHub Actions Certified Specialist', issuer: 'GitHub', year: '2025' },
  { id: 13, title: 'Datadog Certified Performance Engineer', issuer: 'Datadog', year: '2024' },
  { id: 14, title: 'PostgreSQL Certified Professional DBA', issuer: 'PostgreSQL Professional', year: '2023' },
  { id: 15, title: 'Stripe Certified Professional Architect', issuer: 'Stripe', year: '2025' }
];