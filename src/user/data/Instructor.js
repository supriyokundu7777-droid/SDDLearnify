// ==========================================
// 1. DEPARTMENT / CATEGORY FILTERS (16 Items)
// ==========================================
export const instructorDepartments = [
  'All',
  'Web Development',
  'UI/UX Design',
  'Data Science & AI',
  'Cloud & DevOps',
  'Cyber Security',
  'Mobile App',
  'Game Development',
  'Software Testing (QA)',
  'Blockchain & Web3',
  'Database Engineering',
  'Systems Programming',
  'Digital Marketing & Growth',
  'Machine Learning & MLOps',
  'Enterprise Architecture',
  'Product Management'
];

// ==========================================
// 2. INSTRUCTOR DIRECTORY (45 Unique Verified Items)
// ==========================================
const uniqueInstructors = [
  // Web Development (3)
  {
    name: 'Mark Evans',
    role: 'Staff Frontend Engineer & React Core Contributor',
    department: 'Web Development',
    rating: 4.9,
    reviewsCount: '11,400',
    studentsCount: '48,200+',
    coursesCount: 15,
    bio: 'Open-source maintainer focusing on React 19 Compiler changes, Next.js Server Actions, and Micro-Frontends.',
    badge: 'React Core',
    image: 'photo-1560250097-0b93528c311a'
  },
  {
    name: 'Alex Morrison',
    role: 'Principal Full-Stack & Cloud Architect',
    department: 'Web Development',
    rating: 4.9,
    reviewsCount: '12,850',
    studentsCount: '52,000+',
    coursesCount: 18,
    bio: 'Ex-Staff Engineer with 12+ years building enterprise Node, Next.js, and multi-tier architectures.',
    badge: 'Staff Pick',
    image: 'photo-1507003211169-0a1dd7228f2d'
  },
  {
    name: 'Chloe Bennet',
    role: 'Senior React Developer & Design Technologist',
    department: 'Web Development',
    rating: 4.8,
    reviewsCount: '7,400',
    studentsCount: '28,100+',
    coursesCount: 11,
    bio: 'Specialist in CSS animation engines, Tailwind CSS 4, and high-performance interactive interfaces.',
    badge: 'UI Specialist',
    image: 'photo-1573496799652-408c2ac9fe98'
  },

  // UI/UX Design (3)
  {
    name: 'Elena Rostova',
    role: 'Head of Product Design & Design Systems',
    department: 'UI/UX Design',
    rating: 5.0,
    reviewsCount: '9,110',
    studentsCount: '28,900+',
    coursesCount: 11,
    bio: 'Design Systems strategist who has engineered unified token guidelines and Figma variables across European scale-ups.',
    badge: 'Design Lead',
    image: 'photo-1580489944761-15a19d654956'
  },
  {
    name: 'Sophia Turner',
    role: 'UX Researcher & Accessibility Specialist',
    department: 'UI/UX Design',
    rating: 4.8,
    reviewsCount: '6,120',
    studentsCount: '24,500+',
    coursesCount: 10,
    bio: 'Dedicated to inclusive digital products, qualitative user journey testing, and WCAG 2.2 accessibility.',
    badge: 'UX Coach',
    image: 'photo-1534528741775-53994a69daeb'
  },
  {
    name: 'Chloe Frazer',
    role: 'Lead Visual Designer & Brand Strategist',
    department: 'UI/UX Design',
    rating: 4.9,
    reviewsCount: '5,800',
    studentsCount: '19,200+',
    coursesCount: 8,
    bio: 'Specializing in design psychology, typography systems, and modern SaaS dashboard interactions.',
    badge: 'Visual Lead',
    image: 'photo-1524504388940-b1c1722653e1'
  },

  // Data Science & AI (3)
  {
    name: 'Dr. Emily Watson',
    role: 'Lead AI Researcher & PyTorch Specialist',
    department: 'Data Science & AI',
    rating: 4.9,
    reviewsCount: '8,420',
    studentsCount: '34,200+',
    coursesCount: 14,
    bio: 'Former DeepMind Fellow with a PhD in Machine Learning. Author of leading NLP and LLM fine-tuning curriculums.',
    badge: 'Top Mentor',
    image: 'photo-1573496359142-b8d87734a5a2'
  },
  {
    name: 'Vikram Mehta',
    role: 'Data Platform Architect & BI Consultant',
    department: 'Data Science & AI',
    rating: 4.7,
    reviewsCount: '5,900',
    studentsCount: '19,800+',
    coursesCount: 8,
    bio: 'Data architect specializing in modern data stacks: Snowflake, dbt transformations, PostgreSQL tuning, and PowerBI.',
    badge: 'Enterprise',
    image: 'photo-1506794778202-cad84cf45f1d'
  },
  {
    name: 'Lucas Vance',
    role: 'AI & Autonomous Agent Researcher',
    department: 'Data Science & AI',
    rating: 4.9,
    reviewsCount: '7,100',
    studentsCount: '26,400+',
    coursesCount: 12,
    bio: 'Building production RAG pipelines, LangChain integrations, and vector database retrieval architectures.',
    badge: 'AI Fellow',
    image: 'photo-1522075469751-3a6694fb2f61'
  },

  // Cloud & DevOps (3)
  {
    name: 'James Vance',
    role: 'DevOps Director & AWS Ambassador',
    department: 'Cloud & DevOps',
    rating: 4.9,
    reviewsCount: '10,240',
    studentsCount: '41,500+',
    coursesCount: 16,
    bio: 'Specialist in high-throughput Kubernetes orchestration, Terraform automation, and AWS solutions certification tracks.',
    badge: 'AWS Certified',
    image: 'photo-1519085360753-af0119f7cbe7'
  },
  {
    name: 'Clara Oswald',
    role: 'Site Reliability Engineering (SRE) Lead',
    department: 'Cloud & DevOps',
    rating: 4.8,
    reviewsCount: '6,300',
    studentsCount: '23,100+',
    coursesCount: 9,
    bio: 'Focusing on distributed observability, Prometheus, Grafana, OpenTelemetry, and zero-downtime canary deployments.',
    badge: 'SRE Lead',
    image: 'photo-1573497491765-dccce02b29df'
  },
  {
    name: 'Jonathan Bell',
    role: 'Multi-Cloud Infrastructure Consultant',
    department: 'Cloud & DevOps',
    rating: 4.7,
    reviewsCount: '4,900',
    studentsCount: '18,500+',
    coursesCount: 7,
    bio: 'Consultant helping enterprises migrate workloads across GCP, Azure, and AWS with secure Terraform pipelines.',
    badge: 'Cloud Architect',
    image: 'photo-1566492031773-4f4e44671857'
  },

  // Cyber Security (3)
  {
    name: 'Marcus Brody',
    role: 'SecOps Director & Penetration Tester',
    department: 'Cyber Security',
    rating: 4.8,
    reviewsCount: '6,450',
    studentsCount: '22,400+',
    coursesCount: 9,
    bio: 'DefCon speaker and ethical hacker training engineers in OWASP vulnerability mitigation, Bug Bounty, and cloud defense.',
    badge: 'DefCon Speaker',
    image: 'photo-1472099645785-5658abf4ff4e'
  },
  {
    name: 'Leon Kennedy',
    role: 'Threat Intelligence & SOC Analyst Tier 2',
    department: 'Cyber Security',
    rating: 4.8,
    reviewsCount: '5,200',
    studentsCount: '17,800+',
    coursesCount: 8,
    bio: 'Specializing in SIEM log ingestion with Splunk, endpoint incident handling, and network intrusion triage.',
    badge: 'SOC Lead',
    image: 'photo-1527980965255-d3b416303d12'
  },
  {
    name: 'Claire Redfield',
    role: 'Application Security Engineer & Exploit Analyst',
    department: 'Cyber Security',
    rating: 4.9,
    reviewsCount: '4,700',
    studentsCount: '16,200+',
    coursesCount: 7,
    bio: 'Auditing API security models, Postman automation, OAuth 2.0 authorization flows, and source code vulnerabilities.',
    badge: 'AppSec',
    image: 'photo-1488426862026-3ee34a7d66df'
  },

  // Mobile App (3)
  {
    name: 'Rachel Green',
    role: 'Principal Mobile Developer (Flutter/iOS)',
    department: 'Mobile App',
    rating: 4.8,
    reviewsCount: '7,320',
    studentsCount: '27,100+',
    coursesCount: 12,
    bio: 'Google Developer Expert focusing on cross-platform Flutter clean architecture, native platform channels, and offline apps.',
    badge: 'GDE Expert',
    image: 'photo-1494790108377-be9c29b29330'
  },
  {
    name: 'Miles Morales',
    role: 'React Native & Expo Router Specialist',
    department: 'Mobile App',
    rating: 4.9,
    reviewsCount: '6,800',
    studentsCount: '25,400+',
    coursesCount: 10,
    bio: 'Building full-stack mobile applications with Expo Router v3, NativeWind styling, and SQLite offline synchronization.',
    badge: 'Mobile Lead',
    image: 'photo-1535713875002-d1d0cf377fde'
  },
  {
    name: 'Saga Anderson',
    role: 'SwiftUI & iOS 18 Architect',
    department: 'Mobile App',
    rating: 4.8,
    reviewsCount: '4,500',
    studentsCount: '15,600+',
    coursesCount: 8,
    bio: 'Master of Swift 6 async/await concurrency, SwiftData persistence, and interactive widgets for iOS and macOS.',
    badge: 'iOS Specialist',
    image: 'photo-1529626455594-4ff0802cfb7e'
  },

  // Game Development (3)
  {
    name: 'Arthur Dent',
    role: 'Senior Unity & Unreal Engine Developer',
    department: 'Game Development',
    rating: 4.8,
    reviewsCount: '6,200',
    studentsCount: '21,500+',
    coursesCount: 10,
    bio: 'Game engine architect teaching C# gameplay loops, shader optimization, and multiplayer network replication.',
    badge: 'Game Architect',
    image: 'photo-1513956589380-bad6acb9b9d4'
  },
  {
    name: 'Gordon Freeman',
    role: 'Physics & Graphics Pipeline Engineer',
    department: 'Game Development',
    rating: 4.9,
    reviewsCount: '7,900',
    studentsCount: '29,000+',
    coursesCount: 11,
    bio: 'Specialist in custom rendering engines, WebGPU, compute shaders, and spatial audio architectures.',
    badge: 'Graphics Lead',
    image: 'photo-1521119989659-a83eee488004'
  },
  {
    name: 'Alyx Vance',
    role: 'VR & Spatial Experience Developer',
    department: 'Game Development',
    rating: 4.8,
    reviewsCount: '5,100',
    studentsCount: '18,200+',
    coursesCount: 8,
    bio: 'Designing immersive interactive experiences for Meta Quest, VisionOS, and interactive 3D WebGL platforms.',
    badge: 'Spatial Dev',
    image: 'photo-1539571696357-5a69c17a67c6'
  },

  // Software Testing (QA) (3)
  {
    name: 'Tariq Al-Mansoor',
    role: 'Enterprise QA & Test Automation Architect',
    department: 'Software Testing (QA)',
    rating: 4.8,
    reviewsCount: '5,340',
    studentsCount: '21,100+',
    coursesCount: 11,
    bio: 'Specialist in automated testing suites with Playwright, Cypress, k6 load testing, and continuous delivery.',
    badge: 'QA Director',
    image: 'photo-1501196354995-cbb51c65aaea'
  },
  {
    name: 'Fiona Gallagher',
    role: 'Continuous Testing & CI/CD QA Lead',
    department: 'Software Testing (QA)',
    rating: 4.8,
    reviewsCount: '4,800',
    studentsCount: '17,400+',
    coursesCount: 8,
    bio: 'Implementing enterprise end-to-end regression pipelines, API mocking, and test automation coverage metrics.',
    badge: 'QA Lead',
    image: 'photo-1544005313-94ddf0286df2'
  },
  {
    name: 'Oliver Twist',
    role: 'Performance & Chaos Engineering Specialist',
    department: 'Software Testing (QA)',
    rating: 4.7,
    reviewsCount: '3,900',
    studentsCount: '14,200+',
    coursesCount: 7,
    bio: 'Injecting controlled faults into distributed cloud services and running distributed k6 load testing rigs.',
    badge: 'Performance QA',
    image: 'photo-1530268729831-4b0b9e170218'
  },

  // Blockchain & Web3 (3)
  {
    name: 'Kenji Sato',
    role: 'Smart Contract Auditor & Web3 Architect',
    department: 'Blockchain & Web3',
    rating: 4.9,
    reviewsCount: '5,600',
    studentsCount: '20,400+',
    coursesCount: 9,
    bio: 'Solidity and DeFi architecture expert who has audited protocol contracts holding over ₹4,000 Cr ($500M) in TVL.',
    badge: 'Web3 Lead',
    image: 'photo-1507591064344-4c6ce005b128'
  },
  {
    name: 'Yennefer Venger',
    role: 'Solana, Rust & High-Speed DApp Engineer',
    department: 'Blockchain & Web3',
    rating: 4.8,
    reviewsCount: '4,200',
    studentsCount: '15,100+',
    coursesCount: 8,
    bio: 'Teaching Rust smart contracts on Solana, Anchor framework tooling, and decentralized storage networks.',
    badge: 'Rust Web3',
    image: 'photo-1509967419530-da38b4704bc6'
  },
  {
    name: 'Victor Stone',
    role: 'Zero-Knowledge Proofs & Cryptography Lead',
    department: 'Blockchain & Web3',
    rating: 4.9,
    reviewsCount: '3,800',
    studentsCount: '12,900+',
    coursesCount: 7,
    bio: 'Pioneering private computation using Circom, SnarkJS, and zk-Rollup layer-2 protocol architectures.',
    badge: 'ZK Cryptographer',
    image: 'photo-1547425260-76bcadfb4f2c'
  },

  // Database Engineering (3)
  {
    name: 'Aarav Sharma',
    role: 'Principal Database Reliability Engineer',
    department: 'Database Engineering',
    rating: 4.9,
    reviewsCount: '6,700',
    studentsCount: '24,200+',
    coursesCount: 10,
    bio: 'Deep expertise in PostgreSQL internal storage engines, query plan optimization, sharding, and replication.',
    badge: 'Postgres Guru',
    image: 'photo-1522529599102-193c0d76b5b6'
  },
  {
    name: 'Priya Patel',
    role: 'NoSQL & Distributed Caching Specialist',
    department: 'Database Engineering',
    rating: 4.8,
    reviewsCount: '5,100',
    studentsCount: '19,000+',
    coursesCount: 8,
    bio: 'Designing ultra-low latency distributed caches with Redis, MongoDB cluster scaling, and DynamoDB single-table models.',
    badge: 'Database Lead',
    image: 'photo-1508214751196-bcfd4ca60f91'
  },
  {
    name: 'Joel Miller',
    role: 'High-Throughput Vector DB Engineer',
    department: 'Database Engineering',
    rating: 4.8,
    reviewsCount: '4,300',
    studentsCount: '15,800+',
    coursesCount: 7,
    bio: 'Indexing billions of vector embeddings with Pinecone, Qdrant, and Milvus for real-time generative search.',
    badge: 'Vector DB Lead',
    image: 'photo-1557862921-37829c790f19'
  },

  // Systems Programming (3)
  {
    name: 'David Reynolds',
    role: 'Lead Systems Engineer & Low-Level Specialist',
    department: 'Systems Programming',
    rating: 4.9,
    reviewsCount: '7,890',
    studentsCount: '31,200+',
    coursesCount: 13,
    bio: 'Specialist in memory-safe systems programming with Rust, C++ concurrency, and Linux kernel modules.',
    badge: 'Rust Lead',
    image: 'photo-1500648767791-00dcc994a43e'
  },
  {
    name: 'Alan Wake',
    role: 'Compiler Construction & Runtime Engineer',
    department: 'Systems Programming',
    rating: 4.8,
    reviewsCount: '5,400',
    studentsCount: '19,500+',
    coursesCount: 9,
    bio: 'Teaching AST transformations, LLVM IR emission, garbage collection algorithms, and JIT compilation.',
    badge: 'Compiler Lead',
    image: 'photo-1544717302-de2939b7ef71'
  },
  {
    name: 'Chris Redfield',
    role: 'Embedded Systems & IoT Firmware Engineer',
    department: 'Systems Programming',
    rating: 4.7,
    reviewsCount: '4,100',
    studentsCount: '14,800+',
    coursesCount: 7,
    bio: 'Developing bare-metal firmware with C and Embedded Rust for ARM Cortex microcontrollers and real-time OSs.',
    badge: 'Embedded Lead',
    image: 'photo-1542909168-82c3e7fdca5c'
  },

  // Digital Marketing & Growth (3)
  {
    name: 'Sarah Jenkins',
    role: 'Growth Marketing & Technical SEO Strategist',
    department: 'Digital Marketing & Growth',
    rating: 4.8,
    reviewsCount: '6,400',
    studentsCount: '23,800+',
    coursesCount: 10,
    bio: 'Combining data science, program-scale SEO, conversion funnel optimizations, and growth experiments.',
    badge: 'Growth Lead',
    image: 'photo-1573497019940-1c28c88b4f3e'
  },
  {
    name: 'Diana Prince',
    role: 'VP of Product-Led Growth & Retention',
    department: 'Digital Marketing & Growth',
    rating: 4.9,
    reviewsCount: '7,200',
    studentsCount: '27,500+',
    coursesCount: 11,
    bio: 'Structuring viral referral loops, automated email drip campaigns, and user activation metrics.',
    badge: 'PLG Director',
    image: 'photo-1531123897727-8f129e1688ce'
  },
  {
    name: 'Barry Allen',
    role: 'Performance Marketing & Paid Attribution Specialist',
    department: 'Digital Marketing & Growth',
    rating: 4.8,
    reviewsCount: '5,300',
    studentsCount: '18,900+',
    coursesCount: 8,
    bio: 'Scaling seven-figure paid acquisition campaigns across Meta, Google, and developer communities.',
    badge: 'Paid Ads Pro',
    image: 'photo-1552058544-f2b08422138a'
  },

  // Machine Learning & MLOps (3)
  {
    name: 'Ananya Roy',
    role: 'Principal MLOps & Production Model Architect',
    department: 'Machine Learning & MLOps',
    rating: 4.9,
    reviewsCount: '6,500',
    studentsCount: '25,000+',
    coursesCount: 10,
    bio: 'Deploying continuous ML delivery pipelines with MLflow, Kubeflow, automated drift detection, and SageMaker.',
    badge: 'MLOps Lead',
    image: 'photo-1567532939604-b6b5b0db2604'
  },
  {
    name: 'Geralt Rivera',
    role: 'Computer Vision & Deep Learning Engineer',
    department: 'Machine Learning & MLOps',
    rating: 4.8,
    reviewsCount: '5,900',
    studentsCount: '21,300+',
    coursesCount: 9,
    bio: 'Training real-time object tracking models with YOLOv10, OpenCV, and TensorRT hardware inference acceleration.',
    badge: 'Vision Specialist',
    image: 'photo-1570295999919-56ceb5ecca61'
  },
  {
    name: 'Triss Merigold',
    role: 'Reinforcement Learning & Robotics Scientist',
    department: 'Machine Learning & MLOps',
    rating: 4.9,
    reviewsCount: '4,600',
    studentsCount: '16,700+',
    coursesCount: 7,
    bio: 'Developing multi-agent policy gradient models and simulation environments for autonomous robotics.',
    badge: 'RL Scientist',
    image: 'photo-1519699047748-de8e457a634e'
  },

  // Enterprise Architecture (3)
  {
    name: 'Bruce Wayne',
    role: 'Chief Enterprise Architect & Systems Director',
    department: 'Enterprise Architecture',
    rating: 5.0,
    reviewsCount: '10,500',
    studentsCount: '42,000+',
    coursesCount: 14,
    bio: 'Advising Fortune 100 organizations on domain-driven design, event streaming architectures, and legacy migrations.',
    badge: 'Enterprise Fellow',
    image: 'photo-1568602471122-7832951cc4c5'
  },
  {
    name: 'Hal Jordan',
    role: 'Global Cloud Governance & FinOps Director',
    department: 'Enterprise Architecture',
    rating: 4.8,
    reviewsCount: '5,700',
    studentsCount: '20,800+',
    coursesCount: 8,
    bio: 'Auditing multi-cloud spend across millions in infrastructure, security compliance frameworks, and enterprise IAM.',
    badge: 'FinOps Director',
    image: 'photo-1544717297-fa95b6ee9643'
  },
  {
    name: 'Samus Aran',
    role: 'Principal Resiliency & Disaster Recovery Architect',
    department: 'Enterprise Architecture',
    rating: 4.9,
    reviewsCount: '5,200',
    studentsCount: '18,500+',
    coursesCount: 8,
    bio: 'Designing multi-region active-active database clusters and failover mechanics for financial transaction engines.',
    badge: 'Resiliency Lead',
    image: 'photo-1548142813-c348350df52b'
  },

  // Product Management (3)
  {
    name: 'Liam Murphy',
    role: 'VP of Product Management & Technical Strategy',
    department: 'Product Management',
    rating: 4.9,
    reviewsCount: '6,900',
    studentsCount: '26,300+',
    coursesCount: 10,
    bio: 'Coaching technical product managers on roadmap prioritization, developer APIs as products, and agile delivery.',
    badge: 'VP Product',
    image: 'photo-1492562080023-ab3db95bfbce'
  },
  {
    name: 'Hannah Abbott',
    role: 'Principal Product Manager (Developer Tooling)',
    department: 'Product Management',
    rating: 4.8,
    reviewsCount: '5,400',
    studentsCount: '19,800+',
    coursesCount: 8,
    bio: 'Specializing in CLI tools, developer SDK usability, documentation metrics, and developer ecosystem expansion.',
    badge: 'DevTool Lead',
    image: 'photo-1517841905240-472988babdf9'
  },
  {
    name: 'Peter Parker',
    role: 'Technical Product Specialist & Scrum Master',
    department: 'Product Management',
    rating: 4.8,
    reviewsCount: '4,800',
    studentsCount: '17,200+',
    coursesCount: 7,
    bio: 'Bridging engineering sprints, customer feedback loops, feature requirement documents, and release metrics.',
    badge: 'Product Coach',
    image: 'photo-1543610892-0b1f7e6d8ac1'
  }
];

export const instructorsData = uniqueInstructors.map((ins, idx) => ({
  id: idx + 1,
  name: ins.name,
  role: ins.role,
  department: ins.department,
  rating: ins.rating,
  reviewsCount: ins.reviewsCount,
  studentsCount: ins.studentsCount,
  coursesCount: ins.coursesCount,
  bio: ins.bio,
  image: `https://images.unsplash.com/${ins.image}?auto=format&fit=crop&w=400&q=80`,
  featuredBadge: ins.badge,
  social: { linkedin: '#', twitter: '#', github: '#' }
}));

// ==========================================
// 3. BECOME AN INSTRUCTOR PERKS (20 Items)
// ==========================================
export const instructorPerks = [
  { id: 1, title: 'Earn Sustainable Royalties', desc: 'Industry-leading revenue shares and student bonus payouts on course completions.', icon: '💰' },
  { id: 2, title: 'Global Audience Reach', desc: 'Teach over 140,000+ ambitious developers, designers, and students worldwide.', icon: '🌍' },
  { id: 3, title: 'Instructional & Video Support', desc: 'Our in-house production team helps edit footage, format slide decks, and manage labs.', icon: '🎬' },
  { id: 4, title: 'Custom Interactive IDEs', desc: 'Host real coding environments directly in the browser with zero student setup.', icon: '⚡' },
  { id: 5, title: 'Dedicated Course Producer', desc: 'Work 1-on-1 with an experienced technical curriculum designer throughout your course creation.', icon: '🤝' },
  { id: 6, title: 'Automated Marketing Engine', desc: 'We promote your courses across our email newsletters, social channels, and partner networks.', icon: '📣' },
  { id: 7, title: 'Direct Student Engagement', desc: 'Connect with motivated learners via dedicated course Discord channels and live Q&A sessions.', icon: '💬' },
  { id: 8, title: 'Co-Branded Certifications', desc: 'Offer verifiable digital certificates bearing both your accreditation and Learnify credentials.', icon: '📜' },
  { id: 9, title: 'Early Access Tech Beta Sandbox', desc: 'Test and build labs using pre-release frameworks and cloud infrastructure credits.', icon: '🧪' },
  { id: 10, title: 'Flexible Teaching Schedule', desc: 'Record asynchronously at your own pace while maintaining your primary full-time engineering role.', icon: '⏰' },
  { id: 11, title: 'Enterprise Licensing Opportunities', desc: 'Earn lucrative b2b team royalties when Fortune 500 engineering departments license your courses.', icon: '🏢' },
  { id: 12, title: 'Hardware & Audio Equipment Grants', desc: 'Top mentors receive professional Shure microphones, 4K webcams, and Elgato stream decks.', icon: '🎙️' },
  { id: 13, title: 'Instructor Peer Mastermind', desc: 'Join private quarterly roundtables with engineering leaders from Google, Meta, and AWS.', icon: '🧠' },
  { id: 14, title: 'Translation & Subtitle Localization', desc: 'Our team translates your technical video lessons into Spanish, German, French, and Hindi.', icon: '🌐' },
  { id: 15, title: 'Automated Lab Grading', desc: 'Unit tests run automatically against student repository submissions with zero manual grading required.', icon: '🤖' },
  { id: 16, title: 'Lifetime Alumni Royalty Streams', desc: 'Continue earning residual revenue as updated cohorts access your foundational courses.', icon: '📈' },
  { id: 17, title: 'Custom Branded Merch Kits', desc: 'Exclusive instructor hoodies, customized badges, and welcome packs shipped to your door.', icon: '🎁' },
  { id: 18, title: 'Speaking Opportunities at Conferences', desc: 'Get featured speaking invitations at our annual global tech summit and hackathons.', icon: '🎤' },
  { id: 19, title: 'Course Copyright Retention', desc: 'You retain full ownership of your original intellectual property and course frameworks.', icon: '🛡️' },
  { id: 20, title: 'Transparent Analytics Dashboard', desc: 'Real-time telemetry on student drop-offs, quiz pass rates, reviews, and revenue payouts.', icon: '📊' }
];

// ========================================================
// 4. STUDENT MENTOR ENDORSEMENTS (60 Items Total)
// ========================================================
const endorsementQuotes = [
  'Learning system architecture under this mentor gave me the concrete skills I needed to clear my Google Staff Engineer interview.',
  'Their feedback during our weekly live code reviews transformed how I structure microservices. Unmatched depth of knowledge.',
  'The instructor explains intricate concepts with zero fluff. Every lesson connects directly to enterprise production considerations.',
  'The hands-on cloud labs saved our entire startup engineering team hundreds of hours during our Kubernetes migration.',
  'Incredible pacing, compassionate communication in Discord, and lightning-fast responses to debugging blockers.'
];

export const mentorEndorsements = Array.from({ length: 60 }, (_, idx) => ({
  id: idx + 1,
  instructorId: (idx % 150) + 1,
  studentName: ['Julian Martinez', 'Priya Nambiar', 'Carlos Silva', 'Amina Sheikh', 'Lukas Becker', 'Tanya Novak'][idx % 6] + ` #${idx + 1}`,
  studentRole: ['Senior Frontend Dev', 'Cloud Architect', 'Product Designer', 'Data Scientist', 'Security Analyst'][idx % 5],
  company: ['Vercel', 'Stripe', 'Amazon Web Services', 'Canva', 'Cloudflare'][idx % 5],
  quote: endorsementQuotes[idx % endorsementQuotes.length],
  rating: 5
}));

// ==========================================
// 5. INSTRUCTOR FAQS & GUIDELINES (40 Items)
// ==========================================
const instructorFaqQuestions = [
  'What are the minimum requirements to become an instructor?',
  'How are instructor royalty payouts calculated and distributed?',
  'Can I teach part-time while holding a full-time software engineering job?',
  'Does Learnify assist with video recording, editing, and slide formatting?',
  'Who retains the intellectual property rights to course materials?',
  'How long does the course review and approval process take?',
  'What technical equipment is needed to produce HD lesson modules?',
  'Can I host live cohort webinars in addition to self-paced videos?',
  'How does Learnify support community moderation in course Discord channels?',
  'Can I update course code repositories when new framework versions launch?'
];

export const instructorFaqs = Array.from({ length: 40 }, (_, idx) => ({
  id: idx + 1,
  question: `${instructorFaqQuestions[idx % 10]} ${idx >= 10 ? `[Part ${Math.floor(idx / 10) + 1}]` : ''}`,
  answer: 'We welcome experienced practitioners! Payouts occur monthly via Stripe Direct, you retain your intellectual property, and our dedicated technical video production team supports you at every step.',
  category: idx % 2 === 0 ? 'Application & Royalties' : 'Production & Pedagogy'
}));

// ==========================================
// 6. MENTOR COMMUNITY AWARDS (20 Items)
// ==========================================
const awardTitles = [
  'Mentor of the Year',
  'Excellence in Interactive Lab Design',
  'Top Student Engagement Award',
  'Innovation in Curriculum Architecture',
  'Community Champion Trophy',
  'Outstanding Technical Communicator',
  'Best Cloud & DevOps Specialization Track',
  'Leading AI Pedagogy Contributor',
  'Design Systems Educator of the Year',
  'Cybersecurity Defense Mentor Honor'
];

export const mentorAwards = Array.from({ length: 20 }, (_, idx) => ({
  id: idx + 1,
  instructorId: (idx % 150) + 1,
  title: `${awardTitles[idx % 10]} ${idx >= 10 ? '(Gold Category)' : '(Honorary)'}`,
  year: 2024 + (idx % 3),
  awardedBy: 'Global EdTech Faculty Guild'
}));