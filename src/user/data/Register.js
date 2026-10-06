// ========================================================
// 1. SOCIAL REGISTRATION & SSO PROVIDERS (8 Items)
// ========================================================
export const socialRegisterProviders = [
  { id: 1, name: 'Google', icon: '🌐', variant: 'outline-light' },
  { id: 2, name: 'GitHub', icon: '🐙', variant: 'outline-light' },
  { id: 3, name: 'GitLab', icon: '🦊', variant: 'outline-light' },
  { id: 4, name: 'LinkedIn', icon: '💼', variant: 'outline-light' },
  { id: 5, name: 'Microsoft Azure AD', icon: '🪟', variant: 'outline-light' },
  { id: 6, name: 'Apple ID', icon: '🍎', variant: 'outline-light' },
  { id: 7, name: 'Bitbucket', icon: '🪣', variant: 'outline-light' },
  { id: 8, name: 'Discord Dev', icon: '💬', variant: 'outline-light' }
];

// ========================================================
// 2. CAREER & LEARNING TRACKS (20 Items)
// ========================================================
export const learningTracks = [
  'Full-Stack Web Development (React & Node)',
  'UI/UX Design Systems & Figma Variables',
  'AI & Data Science Engineering (PyTorch & LLMs)',
  'Cloud Architecture & DevOps (AWS & Kubernetes)',
  'Cyber Security Operations & Penetration Testing',
  'Cross-Platform Mobile Development (Flutter & React Native)',
  'Next.js 15 & Enterprise Server Actions',
  'Modern Python & MLOps Infrastructure',
  'Golang Distributed Systems & Microservices',
  'Software Testing, QA Automation & Playwright',
  'Smart Contract Auditing & Web3 Engineering',
  'Rust Low-Level Systems Programming',
  'Data Engineering with Snowflake & dbt',
  'Game Development with Unreal Engine 5 & C++',
  'Product Management for Technical Systems',
  'Enterprise Database Architecture (Postgres & Redis)',
  'Spatial Computing & VisionOS Design',
  'Site Reliability Engineering (SRE) & Observability',
  'Frontend Performance Optimization & Monorepos',
  'Algorithms, Data Structures & System Design'
];

// ========================================================
// 3. PLATFORM VALUE HIGHLIGHTS (20 Items)
// ========================================================
export const registerHighlights = [
  { id: 1, icon: '🚀', title: 'Instant Access to Free Starter Tier', desc: 'Jump right into 25+ introductory courses with zero credit card required.' },
  { id: 2, icon: '⚡', title: 'Cloud Browser Sandboxes', desc: 'Code in live Docker containers directly in your browser without local setup headaches.' },
  { id: 3, icon: '🎓', title: 'Verifiable Credentials', desc: 'Earn tamper-proof completion certificates recognized by 850+ global hiring partners.' },
  { id: 4, icon: '💬', title: '50,000+ Member Discord', desc: 'Get debugging help, code reviews, and pair programming partners in real-time.' },
  { id: 5, icon: '📦', title: 'Production GitHub Boilerplates', desc: 'Clone and deploy battle-tested repository setups used by high-growth startups.' },
  { id: 6, icon: '🤖', title: 'Interactive Cloud GPU Labs', desc: 'Train small models, test embeddings, and build RAG pipelines with free sandbox hours.' },
  { id: 7, icon: '🎙️️', title: 'Weekly Live Coding Masterclasses', desc: 'Watch staff engineers build full-stack systems and participate in direct Q&A.' },
  { id: 8, icon: '🎯', title: 'Project-First Pedagogy', desc: 'No passive multiple-choice tests; graduate by shipping functional deployed apps.' },
  { id: 9, icon: '👨‍🏫', title: 'Staff Engineer Code Audits', desc: 'Receive line-by-line PR feedback on capstones from working tech practitioners.' },
  { id: 10, icon: '📱', title: 'Native iOS & Android Offline Sync', desc: 'Download lesson videos and lecture summaries for learning during your commute.' },
  { id: 11, icon: '🛡️', title: 'Enterprise Security Defense', desc: 'Master OWASP vulnerability patches, zero-trust auth, and automated CVE scanning.' },
  { id: 12, icon: '💼', title: 'Direct Hiring Pipeline Access', desc: 'Our corporate partners actively scout standout capstone projects on Learnify.' },
  { id: 13, icon: '💡', title: 'Zero Framework Deprecation', desc: 'Curriculums refreshed within weeks of major React, Node, and Next.js releases.' },
  { id: 14, icon: '📊', title: 'Visual Skill Mastery Graphs', desc: 'Track your algorithmic proficiency, testing coverage, and DevOps capabilities.' },
  { id: 15, icon: '🧩', title: 'Interactive Algorithmic Visualizers', desc: 'Understand trees, graphs, and dynamic programming through kinetic animations.' },
  { id: 16, icon: '🌐', title: 'Multi-Lingual Transcripts & Captions', desc: 'Study with high-accuracy subtitles in Spanish, French, German, and Hindi.' },
  { id: 17, icon: '🤝', title: 'Student Study Squads', desc: 'Get automatically matched with 4-person study groups aligned with your timezone.' },
  { id: 18, icon: '🏷️', title: 'Permanent Student Discounts', desc: 'Verified students receive exclusive 30% discounts on premium cohorts and certs.' },
  { id: 19, icon: '📈', title: 'Interview Preparation Modules', desc: 'Practice system design diagrams and coding interview rounds under live timers.' },
  { id: 20, icon: '🎁', title: 'Developer Swag & Cloud Credits', desc: 'Earn AWS credits, GitHub student pack perks, and hardware hackathon prizes.' }
];

// ========================================================
// 4. SECURITY & COMPLIANCE BADGES (15 Items)
// ========================================================
export const registerTrustBadges = [
  '256-Bit SSL Encryption',
  'No Spam Guarantee',
  'GDPR & CCPA Compliant',
  'Argon2id Salted Password Hashing',
  'Encrypted User Data at Rest',
  'Multi-Factor Authentication (MFA) Ready',
  'Zero Data Selling Pledge',
  'SOC-2 Type II Certified Facilities',
  'ISO/IEC 27001 Security Standard',
  'Cloudflare Enterprise DDoS Protection',
  'Automated Rate-Limiting & Bot Mitigation',
  'OpenID Connect Verified Handshake',
  'Strict Content Security Policies (CSP)',
  'PCI-DSS Compliant Payment Isolation',
  'Continuous Security Vulnerability Auditing'
];

// ========================================================
// 5. ONBOARDING ROADMAP MILESTONES (100 Items)
// ========================================================
const milestoneTopics = [
  'Account Verification & Profile Creation',
  'Setting Up Your Cloud Sandbox Terminal',
  'Connecting Your Personal GitHub Account',
  'Joining The 50K+ Developer Discord Community',
  'Choosing Your First Production Starter Track',
  'Completing The Development Toolchain Diagnostic',
  'Forking Your First Starter Repository',
  'Writing Your First Automated Unit Test Suite',
  'Executing Your First Cloud Docker Build',
  'Publishing Your Public Student Showcase Profile'
];

export const onboardingMilestones = Array.from({ length: 100 }, (_, idx) => ({
  id: idx + 1,
  phase: `Level ${Math.floor(idx / 10) + 1}`,
  stepNumber: idx + 1,
  title: `${milestoneTopics[idx % 10]} [Step #${idx + 1}]`,
  duration: `${(idx % 4) * 10 + 15} Mins`,
  category: ['Setup', 'Environment', 'Git & CI', 'Community', 'Projects'][idx % 5],
  points: (idx % 5) * 50 + 100
}));

// ========================================================
// 6. STUDENT REVIEWS & CAREER TRANSFORMATIONS (80 Items)
// ========================================================
const studentNames = [
  'Julian Martinez', 'Priya Nambiar', 'Carlos Silva', 'Amina Sheikh', 'Lukas Becker',
  'Tanya Novak', 'Michael Zhang', 'Hannah Abbott', 'David Chen', 'Fatima Al-Sayed',
  'Marcus Aurelius', 'Siddharth Sen', 'Chloe Bourgeois', 'Gabriel Agreste', 'Kavita Iyer',
  'Devon Vance', 'Ananya Roy', 'Liam Murphy', 'Dmitry Ivanov', 'Emily Tanaka'
];

const transformationStories = [
  'Registering for Learnify was the turning point in my career. The hands-on project labs gave me the confidence to apply for senior roles.',
  'No other platform gives you disposable cloud Docker containers right in the browser. I saved months of local machine configuration pain.',
  'The Discord community is exceptionally welcoming. Whenever I was blocked on an asynchronous Redux action, someone jumped into voice to help.',
  'The curriculum does not waste time on trivial hello-world examples. We built real microservices with PostgreSQL and Redis caching.',
  'From zero coding knowledge to an Associate Full-Stack Engineer offer at a venture-backed startup in 7 months. Best investment ever.'
];

export const registerStudentReviews = Array.from({ length: 80 }, (_, idx) => ({
  id: idx + 1,
  name: `${studentNames[idx % studentNames.length]} ${idx >= 20 ? `(#${idx + 1})` : ''}`,
  role: ['Full-Stack Developer', 'Frontend Engineer', 'Cloud Architect', 'Product Designer', 'Data Analyst'][idx % 5],
  company: ['Vercel', 'Stripe', 'Amazon Web Services', 'Canva', 'Cloudflare'][idx % 5],
  review: transformationStories[idx % transformationStories.length],
  rating: 5,
  year: 2024 + (idx % 3)
}));

// ========================================================
// 7. REGISTRATION FAQS (50 Items)
// ========================================================
const regFaqQuestions = [
  'Do I need to enter credit card details to register for an account?',
  'Can I switch my primary learning track after registration?',
  'Is the free tier limited to a 7-day or 14-day trial period?',
  'Can I use my student university (.edu) email for academic discounts?',
  'How do I verify my email address if the activation link does not arrive?',
  'Can I register using my existing GitHub or Google work credentials?',
  'What should I do if an account already exists with my email address?',
  'Does Learnify share or sell registration contact data to third parties?',
  'Can our enterprise team sign up multiple engineers simultaneously?',
  'Are interactive browser coding sandboxes included in the free registration?'
];

export const registrationFaqs = Array.from({ length: 50 }, (_, idx) => ({
  id: idx + 1,
  question: `${regFaqQuestions[idx % 10]} ${idx >= 10 ? `[FAQ Ref #${Math.floor(idx / 10) + 1}]` : ''}`,
  answer: 'No credit card is ever required for the Starter Free tier. You can switch learning tracks at any time, access 25+ foundational courses forever, and upgrade to Pro only when you need cloud GPU credits.',
  category: idx % 2 === 0 ? 'Account & Verification' : 'Curriculum & Billing'
}));

// ========================================================
// 8. COUNTRY TELEPHONE CODES & REGIONS (20 Items)
// ========================================================
export const countryCodes = [
  { code: '+1', country: 'United States & Canada', flag: '🇺🇸' },
  { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
  { code: '+55', country: 'Brazil', flag: '🇧🇷' },
  { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
  { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
  { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
  { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
  { code: '+63', country: 'Philippines', flag: '🇵🇭' },
  { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
  { code: '+20', country: 'Egypt', flag: '🇪🇬' },
  { code: '+254', country: 'Kenya', flag: '🇰🇪' },
  { code: '+52', country: 'Mexico', flag: '🇲🇽' },
  { code: '+34', country: 'Spain', flag: '🇪🇸' },
  { code: '+39', country: 'Italy', flag: '🇮🇹' },
  { code: '+82', country: 'South Korea', flag: '🇰🇷' }
];