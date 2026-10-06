// ========================================================
// 1. SINGLE PRODUCT PRIMARY DETAILS (20 Items)
// ========================================================
export const singleProductData = {
  id: 101,
  title: 'Full-Stack Architecture Patterns & Systems Design Handbook',
  subtitle: 'Master enterprise-grade microservices, distributed caching, database sharding, and fault-tolerant cloud patterns with real production codebases.',
  category: 'Technical Books & E-Books',
  badge: 'Best Seller',
  price: 999,
  originalPrice: 1699,
  discount: '40% OFF',
  rating: 4.9,
  reviewsCount: 342,
  inStock: true,
  sku: 'BK-FSA-2026',
  formatsAvailable: ['PDF E-Book', 'ePub / Kindle', 'Hardcover Print Edition'],
  downloadSize: '48.5 MB (Instant Delivery)',
  pagesCount: '480 Pages',
  language: 'English (US)',
  publishedYear: '2026 Edition',
  totalChapters: '10 In-Depth Modules',
  author: 'Alex Morrison & Learnify Systems Guild',
  licenseScope: 'Personal & Commercial Team Usage Rights',
  images: [
    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
  ],
  description: `This comprehensive handbook bridges the gap between theoretical system architecture and shipping resilient code to production. Authored by industry veteran staff engineers, this guide walks through decomposing monoliths, orchestrating event-driven workflows with Apache Kafka and RabbitMQ, setting up Redis caching layers with anti-stampede locks, and securing microservices with OAuth2/OIDC.`,
  features: [
    'Includes 6 downloadable production-ready GitHub repositories with complete test suites',
    'Contains 45+ full-color architectural blueprints and data-flow schematics',
    'Step-by-step implementations in TypeScript, Node.js, and Docker Compose',
    'Covers high-traffic resilience: Circuit breakers, rate-limiting, and idempotent operations',
    'Lifetime digital revisions when new major framework specifications release'
  ]
};

// ========================================================
// 2. TECHNICAL SPECIFICATIONS MATRIX (20 Items)
// ========================================================
export const productSpecifications = [
  { label: 'Primary Author', value: 'Alex Morrison & Staff Engineering Faculty' },
  { label: 'Edition', value: '2026 Revised 3rd Edition' },
  { label: 'Total Pages', value: '480 Pages (Indexed with Code Snippets)' },
  { label: 'ISBN-13', value: '978-0-123456-78-9' },
  { label: 'Digital Formats', value: 'DRM-Free PDF, ePub, and MOBI' },
  { label: 'Code Assets Included', value: 'GitHub Access Key included with instant clone scripts' },
  { label: 'License Type', value: 'Personal & Commercial Project Usage Rights' },
  { label: 'Publication Date', value: 'January 15, 2026' },
  { label: 'Language', value: 'English (US & International UK English)' },
  { label: 'Illustrations & Schematics', value: '45 Full-Color High-Resolution Diagrams' },
  { label: 'Target Audience', value: 'Intermediate to Staff Software Engineers & Architects' },
  { label: 'Code Runtimes Covered', value: 'Node.js 22 LTS, React 19, Docker 27+, TypeScript 5.6+' },
  { label: 'Database Systems', value: 'PostgreSQL 16, Redis 7.2, SQLite CRDTs' },
  { label: 'Message Queues', value: 'RabbitMQ, Apache Kafka, Redis Streams' },
  { label: 'Containerization Tooling', value: 'Docker Compose, Alpine Linux, Multi-Stage Builds' },
  { label: 'Cloud Deployment Targets', value: 'AWS (ECS & S3), Google Cloud Run, Vercel Edge' },
  { label: 'Audio Companion Length', value: '8.5 Hours of Author Audio Commentary' },
  { label: 'Print Quality', value: 'Heavyweight 80lb Satin Glaze Paper (Hardcover Edition)' },
  { label: 'Dimensions (Hardcover)', value: '7.5 x 1.2 x 9.25 inches' },
  { label: 'Weight (Physical)', value: '1.85 lbs (0.84 kg)' }
];

// ========================================================
// 3. TABLE OF CONTENTS / CHAPTER MODULES (10 Items)
// ========================================================
export const productTableOfContents = [
  { chapter: 1, title: 'Deconstructing The Enterprise Monolith', pages: '45 Pages', topics: 'Bounded contexts, database splitting, and identifying anti-corruption layers.' },
  { chapter: 2, title: 'Event-Driven Architectures & Message Brokers', pages: '52 Pages', topics: 'Kafka event streaming, RabbitMQ exchanges, and compensating transactions.' },
  { chapter: 3, title: 'Distributed Caching & Cache Stampede Defense', pages: '48 Pages', topics: 'Redis clustered topologies, probabilistic early expiration, and cache invalidation.' },
  { chapter: 4, title: 'Database Sharding, Partitioning & Replication', pages: '56 Pages', topics: 'PostgreSQL read replicas, connection pooling with PgBouncer, and sharding algorithms.' },
  { chapter: 5, title: 'Resilience Engineering & Circuit Breaker Patterns', pages: '42 Pages', topics: 'Exponential backoff, jitter, bulkhead isolation, and rate-limiting middleware.' },
  { chapter: 6, title: 'Zero-Trust Identity & API Security Hardening', pages: '50 Pages', topics: 'OAuth2/OIDC token verification, mutual TLS, and OWASP Top 10 API vulnerability patches.' },
  { chapter: 7, title: 'Real-time WebSocket & Distributed State Synchronization', pages: '46 Pages', topics: 'Socket.IO Redis adapters, conflict-free replicated data types (CRDTs), and presence.' },
  { chapter: 8, title: 'Containerization, Micro-Frontends & Module Federation', pages: '54 Pages', topics: 'Docker multi-stage optimization, Next.js server actions, and isolated frontend rollouts.' },
  { chapter: 9, title: 'Observability: Distributed Tracing & Telemetry', pages: '44 Pages', topics: 'OpenTelemetry auto-instrumentation, Prometheus metrics, and Grafana dashboards.' },
  { chapter: 10, title: 'Production Zero-Downtime Deployment Blueprints', pages: '43 Pages', topics: 'Blue-green deployments, canary rollouts, and rollback automation on AWS ECS.' }
];

// ========================================================
// 4. VERIFIED CUSTOMER REVIEWS (100 Items Total)
// ========================================================
const reviewerRoster = [
  'Julian Martinez', 'Priya Nambiar', 'Carlos Silva', 'Amina Sheikh', 'Lukas Becker',
  'Tanya Novak', 'Michael Zhang', 'Hannah Abbott', 'David Chen', 'Fatima Al-Sayed',
  'Marcus Aurelius', 'Siddharth Sen', 'Chloe Bourgeois', 'Gabriel Agreste', 'Kavita Iyer',
  'Devon Vance', 'Ananya Roy', 'Liam Murphy', 'Dmitry Ivanov', 'Emily Tanaka'
];

const reviewerRoles = [
  'Senior Staff Engineer at Meta', 'Cloud Architect at Stripe', 'Backend Team Lead at Vercel',
  'DevOps Specialist at AWS', 'Principal Engineer at Datadog', 'Full-Stack Developer at Canva'
];

const reviewComments = [
  'The chapter on distributed cache stampede protection and PostgreSQL partitioning saved our checkout cluster from throttling during peak flash traffic. Outstanding diagrams.',
  'Clear, concise, and no unnecessary fluff. The Docker Compose microservice environment booted in 30 seconds on my MacBook with zero configuration errors.',
  'A masterclass in modern systems design. Every engineer transitioning from mid-level to senior should read this cover-to-cover.',
  'The section on Kafka dead-letter queues and idempotency keys solved an ongoing data inconsistency bug in our payment processing system.',
  'The diagrams alone are worth the price. I referenced Chapter 6 while building our enterprise SSO authentication gateway.',
  'Practical code examples in modern TypeScript rather than outdated pseudocode. This is a must-have reference for staff engineering interviews.'
];

export const productReviews = Array.from({ length: 100 }, (_, idx) => ({
  id: idx + 1,
  name: `${reviewerRoster[idx % reviewerRoster.length]} ${idx >= 20 ? `(#${idx + 1})` : ''}`,
  role: reviewerRoles[idx % reviewerRoles.length],
  rating: idx % 20 === 0 ? 4 : 5,
  date: `Month ${(idx % 12) + 1}, 2026`,
  comment: reviewComments[idx % reviewComments.length],
  verifiedPurchase: true
}));

// ========================================================
// 5. RELATED & RECOMMENDED PRODUCTS (60 Items Total)
// ========================================================
const relatedSeedTemplates = [
  { title: 'ESP32 IoT & Robotics Starter Development Kit', category: 'Hardware Kits & IoT', price: 2499, orig: 3499, rating: 4.8, img: 'https://images.unsplash.com/photo-1518770660439-4636190af475' },
  { title: 'Learnify "Git Push --Force" Heavyweight Hoodie', category: 'Developer Merch & Apparel', price: 1499, orig: 2299, rating: 4.9, img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2' },
  { title: 'Vim & Linux Terminal Shortcuts Extended Desk Mat', category: 'Cheat Sheets & Desk Mats', price: 799, orig: 1199, rating: 5.0, img: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef' },
  { title: 'Next.js 15 & React 19 Production Architecture Blueprint', category: 'Technical Books & E-Books', price: 1199, orig: 1799, rating: 4.9, img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12' },
  { title: 'Raspberry Pi 5 Developer Cluster Node (8GB RAM)', category: 'Hardware Kits & IoT', price: 4999, orig: 6499, rating: 4.9, img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b' },
  { title: 'DevTools Pro: Annual Cloud Sandbox & IDE License', category: 'Software Licenses & Tools', price: 2999, orig: 4499, rating: 4.8, img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5' }
];

export const relatedProducts = Array.from({ length: 60 }, (_, idx) => {
  const base = relatedSeedTemplates[idx % relatedSeedTemplates.length];
  const cycle = Math.floor(idx / relatedSeedTemplates.length);
  return {
    id: idx + 2,
    title: cycle === 0 ? base.title : `${base.title} [Series ${cycle + 1}]`,
    category: base.category,
    price: parseFloat((base.price + (cycle * 2)).toFixed(2)),
    originalPrice: parseFloat((base.orig + (cycle * 4)).toFixed(2)),
    rating: base.rating,
    image: `${base.img}?auto=format&fit=crop&w=500&q=80`
  };
});

// ========================================================
// 6. PRODUCT SUPPORT & LICENSING FAQS (50 Items)
// ========================================================
const detailFaqQuestions = [
  'How soon do I receive my digital download link after payment?',
  'Can I download the handbook in DRM-free format to read on my e-reader or iPad?',
  'Does the purchase include lifetime updates when new editions release?',
  'Can I use the included GitHub repositories and code in commercial production apps?',
  'Are taxes and VAT business expense receipts provided automatically?',
  'What should I do if I require an enterprise team multi-user license?',
  'Is the physical hardcover print edition available for international delivery?',
  'What is the refund policy if the material is not suitable for my current level?',
  'Are automated test suites provided with every sample repository?',
  'How do I join the private Discord discussion lounge for book readers?'
];

export const productDetailFaqs = Array.from({ length: 50 }, (_, idx) => ({
  id: idx + 1,
  question: `${detailFaqQuestions[idx % 10]} ${idx >= 10 ? `[FAQ Topic #${Math.floor(idx / 10) + 1}]` : ''}`,
  answer: 'Instant cryptographic download links and GitHub repository invitations are emailed immediately upon checkout. You receive DRM-free PDF, ePub, and MOBI files with commercial license rights and our 30-day money-back guarantee.',
  category: idx % 2 === 0 ? 'Downloads & Formats' : 'Licensing & Updates'
}));

// ========================================================
// 7. BONUS ASSETS & STARTER REPOSITORIES (25 Items)
// ========================================================
export const productBonusAssets = [
  { id: 1, name: 'Microservices Boilerplate (TypeScript & Node.js 22)', size: '3.4 MB', type: 'Starter Repo' },
  { id: 2, name: 'Distributed Caching Redis Middleware Package', size: '420 KB', type: 'NPM Package' },
  { id: 3, name: 'Kafka Event Streaming Multi-Container Docker Environment', size: '1.2 MB', type: 'Docker Setup' },
  { id: 4, name: 'PostgreSQL Partitioning & Sharding Seed Scripts', size: '890 KB', type: 'SQL Scripts' },
  { id: 5, name: 'Circuit Breaker & Resilience Interceptor Utility', size: '110 KB', type: 'TypeScript Module' },
  { id: 6, name: 'OAuth2/OIDC Auth Gateway with Token Revocation', size: '2.1 MB', type: 'Gateway Service' },
  { id: 7, name: 'High-Resolution Architecture Vector Blueprint Pack', size: '18.5 MB', type: 'SVG / PDF Assets' },
  { id: 8, name: 'OpenTelemetry Distributed Tracing Config Suite', size: '340 KB', type: 'Telemetry Config' },
  { id: 9, name: 'k6 Performance & Load Testing Benchmark Scripts', size: '520 KB', type: 'Load Test Suite' },
  { id: 10, name: 'AWS CloudFormation Zero-Downtime Pipeline Template', size: '75 KB', type: 'IaC YAML' },
  { id: 11, name: 'Idempotency Key Verification Engine for Stripe APIs', size: '280 KB', type: 'Code Module' },
  { id: 12, name: 'WebSocket State Synchronization Engine with CRDTs', size: '1.6 MB', type: 'Realtime Service' },
  { id: 13, name: 'System Design Interview Cheatsheet (Quick Reference)', size: '2.2 MB', type: 'PDF Document' },
  { id: 14, name: 'Micro-Frontend Webpack Module Federation Scaffold', size: '4.8 MB', type: 'Starter Repo' },
  { id: 15, name: 'Database Migration & Rollback Pipeline Scripts', size: '640 KB', type: 'Migration Tool' },
  { id: 16, name: 'Rate-Limiting Token Bucket Algorithm Implementation', size: '95 KB', type: 'Utility Function' },
  { id: 17, name: 'Kubernetes Helm Production Microservice Deployment Kit', size: '180 KB', type: 'Helm Charts' },
  { id: 18, name: 'Bulkhead Pattern Asynchronous Worker Pool', size: '310 KB', type: 'Worker Pool' },
  { id: 19, name: 'API Gateway Response Caching & Compression Layer', size: '450 KB', type: 'Middleware' },
  { id: 20, name: 'Zero-Knowledge Security Audit Checklist', size: '1.1 MB', type: 'Checklist PDF' },
  { id: 21, name: 'Prometheus & Grafana Enterprise Dashboard Templates', size: '820 KB', type: 'Dashboard JSON' },
  { id: 22, name: 'Alpine Linux Multi-Stage Dockerfile Optimization Kit', size: '45 KB', type: 'Docker Templates' },
  { id: 23, name: 'Author Audio Companion & Chapter Discussion (MP3)', size: '124 MB', type: 'Audiobook Extra' },
  { id: 24, name: 'Interactive Architecture Flashcard Deck (Anki Format)', size: '3.6 MB', type: 'Study Deck' },
  { id: 25, name: 'Cryptographic Book Ownership & License Signature', size: '12 KB', type: 'Verification Key' }
];

// ========================================================
// 8. CERTIFIED ENTERPRISE ADOPTERS (15 Items)
// ========================================================
export const productEnterpriseAdopters = [
  { id: 1, name: 'Vercel Engineering Team', location: 'San Francisco, CA', teamSize: '150+ Licenses' },
  { id: 2, name: 'Stripe Infrastructure Group', location: 'Seattle, WA', teamSize: '80+ Licenses' },
  { id: 3, name: 'Canva Design Platform', location: 'Sydney, Australia', teamSize: '65+ Licenses' },
  { id: 4, name: 'Cloudflare Edge Systems', location: 'Austin, TX', teamSize: '110+ Licenses' },
  { id: 5, name: 'Shopify Merchant Solutions', location: 'Ottawa, Canada', teamSize: '95+ Licenses' },
  { id: 6, name: 'Spotify Music Engineering', location: 'Stockholm, Sweden', teamSize: '70+ Licenses' },
  { id: 7, name: 'Datadog Observability Group', location: 'New York, NY', teamSize: '55+ Licenses' },
  { id: 8, name: 'Snowflake Core Data Team', location: 'Bozeman, MT', teamSize: '45+ Licenses' },
  { id: 9, name: 'Uber Platform Architecture', location: 'San Francisco, CA', teamSize: '120+ Licenses' },
  { id: 10, name: 'Airbnb Payments Engineering', location: 'San Francisco, CA', teamSize: '60+ Licenses' },
  { id: 11, name: 'Atlassian Systems Guild', location: 'Sydney, Australia', teamSize: '85+ Licenses' },
  { id: 12, name: 'MongoDB Core Engineering', location: 'New York, NY', teamSize: '40+ Licenses' },
  { id: 13, name: 'UC Berkeley EECS Department', location: 'Berkeley, CA', teamSize: 'Campus License' },
  { id: 14, name: 'TU Munich Computer Science', location: 'Munich, Germany', teamSize: 'Faculty License' },
  { id: 15, name: 'National University of Singapore', location: 'Singapore', teamSize: 'Cohort License' }
];