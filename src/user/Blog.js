// ========================================================
// 1. BLOG CATEGORIES (12 Items)
// ========================================================
export const blogCategories = [
  'All Articles',
  'Web Development',
  'AI & Machine Learning',
  'Cloud & DevOps',
  'UI/UX Design',
  'Career & Interview Prep',
  'Database Architecture',
  'Cyber Security & AppSec',
  'Distributed Systems',
  'Mobile App Development',
  'Software Testing & QA',
  'Open Source & Tooling'
];

// ========================================================
// 2. FEATURED LEAD ARTICLE (1 Item)
// ========================================================
export const featuredBlogPost = {
  id: 100,
  title: 'Next.js 15 & React 19 in Production: Complete Migration & Performance Guide',
  excerpt: 'A comprehensive engineering deep dive into React 19 Server Actions, Partial Prerendering (PPR), asset preloading, and reducing client-side JavaScript bundle sizes by 40%.',
  category: 'Web Development',
  readTime: '8 min read',
  date: 'October 15, 2026',
  author: {
    name: 'Alex Morrison',
    role: 'Principal Frontend Architect',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
  commentsCount: 42,
  badge: 'Featured Deep Dive'
};

// ========================================================
// 3. REGULAR BLOG POSTS (140 Items Total)
// ========================================================
const articleImages = [
  'https://images.unsplash.com/photo-1677442136019-21780ecad995',
  'https://images.unsplash.com/photo-1607799279861-4dd421887fb3',
  'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
];

const authorPool = [
  { name: 'Dr. Emily Watson', role: 'Lead AI Researcher', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80' },
  { name: 'David Reynolds', role: 'Staff DevOps Architect', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
  { name: 'Elena Rostova', role: 'Design Systems Lead', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80' },
  { name: 'Marcus Brody', role: 'Ex-Google Staff Engineer', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80' },
  { name: 'Alex Morrison', role: 'Principal Frontend Architect', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' }
];

const blogArticleBlueprints = [
  {
    title: 'Building Autonomous AI Multi-Agent Swarms with LangGraph and PyTorch',
    excerpt: 'Step-by-step walkthrough on orchestrating multi-agent systems, ReAct prompt engineering patterns, and enforcing memory persistence with pgvector.',
    category: 'AI & Machine Learning',
    readTime: '11 min read',
    badge: 'AI Masterclass'
  },
  {
    title: 'Zero-Downtime Kubernetes Microservice Deployments with ArgoCD',
    excerpt: 'Master GitOps continuous deployment, automated blue-green rollouts, canary analysis with Prometheus, and self-healing cluster states.',
    category: 'Cloud & DevOps',
    readTime: '9 min read',
    badge: 'DevOps'
  },
  {
    title: 'Figma Variables to Production React Components: Design Tokens at Scale',
    excerpt: 'How leading design teams bridge Figma variables with Tailwind CSS color tokens and automated GitHub sync actions.',
    category: 'UI/UX Design',
    readTime: '6 min read',
    badge: 'Design System'
  },
  {
    title: 'Cracking The Staff Engineer System Design Interview in 2026',
    excerpt: 'Tactical blueprints for explaining distributed database sharding, idempotent transaction handling, and rate-limiting during high-stakes loops.',
    category: 'Career & Interview Prep',
    readTime: '14 min read',
    badge: 'Career Guide'
  },
  {
    title: 'Distributed Caching Stampede Defense with Redis & Node.js 22',
    excerpt: 'Prevent high-traffic cache thundering herd problems using probabilistic early expiration, mutex locks, and read-through caching layers.',
    category: 'Web Development',
    readTime: '8 min read',
    badge: 'Backend'
  },
  {
    title: 'Fine-Tuning Open-Weights LLMs with LoRA, QLoRA and Unsloth',
    excerpt: 'A practical, budget-conscious guide to fine-tuning Llama 3 models on a single consumer NVIDIA GPU for custom domain extraction tasks.',
    category: 'AI & Machine Learning',
    readTime: '12 min read',
    badge: 'AI Lab'
  },
  {
    title: 'PostgreSQL 16 Connection Pooling & Partitioning at Scale',
    excerpt: 'Handling 50,000 concurrent database connections using PgBouncer, declarative table partitioning, and composite index tuning.',
    category: 'Database Architecture',
    readTime: '10 min read',
    badge: 'Databases'
  },
  {
    title: 'Securing GraphQL & REST APIs Against OWASP Top 10 Vulnerabilities',
    excerpt: 'Mitigating query depth exhaustion, broken object level authorization (BOLA), and JWT tampering across distributed API gateways.',
    category: 'Cyber Security & AppSec',
    readTime: '7 min read',
    badge: 'Security'
  }
];

export const blogPostsData = Array.from({ length: 140 }, (_, idx) => {
  const base = blogArticleBlueprints[idx % blogArticleBlueprints.length];
  const cycle = Math.floor(idx / blogArticleBlueprints.length);
  const title = cycle === 0 ? base.title : `${base.title} (Part ${cycle + 1})`;

  return {
    id: idx + 1,
    title,
    excerpt: base.excerpt,
    category: base.category,
    readTime: base.readTime,
    date: `October ${Math.max(1, 28 - (idx % 28))}, 2026`,
    author: authorPool[idx % authorPool.length],
    image: `${articleImages[idx % articleImages.length]}?auto=format&fit=crop&w=600&q=80`,
    commentsCount: (idx * 3) % 45 + 5,
    badge: base.badge
  };
});

// ========================================================
// 4. TRENDING SIDEBAR POSTS (40 Items Total)
// ========================================================
const trendingTitles = [
  '10 TypeScript 5.6 Features Every Senior Engineer Must Know',
  'Top 7 Docker Container Security Best Practices for 2026',
  'Why Micro-Frontends Fail: Common Architectural Antipatterns',
  'Benchmarking Node.js 22 LTS vs Bun 1.1 in Production Workloads',
  'State of React Server Components: Lessons from High-Traffic Apps',
  'Optimizing Vector Embeddings for Retrieval-Augmented Generation (RAG)',
  'Mastering Git Rebase Interactive & Bisect for Clean History',
  'Zero-Knowledge Proofs (ZKPs) Explained in Plain TypeScript'
];

export const trendingBlogPosts = Array.from({ length: 40 }, (_, idx) => ({
  id: idx + 101,
  title: `${trendingTitles[idx % trendingTitles.length]} ${idx >= 8 ? `[Vol. ${Math.floor(idx / 8) + 1}]` : ''}`,
  date: `Sep ${Math.max(1, 30 - (idx % 30))}, 2026`,
  readTime: `${(idx % 6) + 4} min read`,
  image: `${articleImages[idx % articleImages.length]}?auto=format&fit=crop&w=200&q=80`
}));

// ========================================================
// 5. POPULAR BLOG TAGS (50 Items Total)
// ========================================================
export const blogTags = [
  'React 19', 'Next.js 15', 'PyTorch', 'Kubernetes', 'Docker',
  'System Design', 'TypeScript', 'Redis', 'Figma', 'Tailwind CSS',
  'Microservices', 'LangChain', 'PostgreSQL', 'GraphQL', 'AWS ECS',
  'Kafka', 'Prisma', 'Bun', 'Vitest', 'Playwright',
  'Node.js 22', 'Golang', 'Rust', 'ArgoCD', 'Prometheus',
  'Grafana', 'GitOps', 'OpenTelemetry', 'Serverless', 'OAuth2',
  'JWT', 'Linux Kernel', 'Vim', 'gRPC', 'WebSockets',
  'CI/CD', 'GitHub Actions', 'Terraform', 'DuckDB', 'ClickHouse',
  'LoRA', 'HuggingFace', 'LangGraph', 'ChromaDB', 'pgvector',
  'Alpine Linux', 'Clean Architecture', 'Design Tokens', 'TDD', 'OWASP'
];

// ========================================================
// 6. BLOG AUTHORS & CONTRIBUTORS (30 Items Total)
// ========================================================
const authorNames = [
  'Alex Morrison', 'Dr. Emily Watson', 'David Reynolds', 'Elena Rostova', 'Marcus Brody',
  'Siddharth Sen', 'Julian Martinez', 'Priya Nambiar', 'Carlos Silva', 'Amina Sheikh'
];

export const blogAuthors = Array.from({ length: 30 }, (_, idx) => ({
  id: idx + 1,
  name: `${authorNames[idx % authorNames.length]} ${idx >= 10 ? `[Staff Fellow ${Math.floor(idx / 10) + 1}]` : ''}`,
  role: authorPool[idx % authorPool.length].role,
  avatar: authorPool[idx % authorPool.length].avatar,
  articlesWritten: (idx * 4) % 30 + 8,
  followers: `${((idx + 1) * 1.4).toFixed(1)}k followers`
}));

// ========================================================
// 7. READER DISCUSSION TOPICS & FAQS (30 Items Total)
// ========================================================
const discussionQuestions = [
  'Should teams rewrite enterprise legacy Express apps to Next.js Server Actions?',
  'How do you handle schema rollbacks in production without scheduled database downtime?',
  'Is fine-tuning an open-source model always cheaper than calling closed LLM APIs?',
  'What are the real-world trade-offs between Monorepos and Polyrepos with Turborepo?',
  'How do you prevent UI token discrepancies between Figma and Tailwind utility classes?'
];

export const blogDiscussionPrompts = Array.from({ length: 30 }, (_, idx) => ({
  id: idx + 1,
  question: `${discussionQuestions[idx % discussionQuestions.length]} ${idx >= 5 ? `[Discussion Thread #${Math.floor(idx / 5) + 1}]` : ''}`,
  repliesCount: (idx * 5) % 60 + 12,
  category: ['Architecture', 'Databases', 'AI & ML', 'Tooling', 'Design Systems'][idx % 5]
}));