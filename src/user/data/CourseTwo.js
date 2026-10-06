// ==========================================
// 1. FILTER META DATA (38 Items)
// ==========================================
export const listCategories = [
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

export const listLevels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

export const listSortOptions = [
  { label: 'Most Popular', value: 'popular' },
  { label: 'Highest Rated', value: 'rating' },
  { label: 'Price: Low to High', value: 'priceLow' },
  { label: 'Price: High to Low', value: 'priceHigh' },
  { label: 'Newest Releases', value: 'newest' },
  { label: 'Duration: Longest to Shortest', value: 'durationLong' }
];

export const listDurationFilters = [
  'All Durations',
  '0-10 Hours',
  '11-25 Hours',
  '26-45 Hours',
  '45+ Hours',
  'Full Comprehensive Bootcamps'
];

export const listLanguageFilters = ['English', 'Spanish', 'German', 'French', 'Hindi', 'Bengali'];

// ==========================================
// 2. MASTER COURSE BLUEPRINTS
// ==========================================
const baseListTemplates = [
  // Web Development
  {
    title: 'Full-Stack Web Development Bootcamp (React 19, Node.js & Docker)',
    category: 'Web Development',
    level: 'Beginner',
    instructor: 'Alex Morrison',
    instructorRole: 'Principal Cloud Architect',
    rating: 4.9,
    reviews: '3,840',
    duration: '45 Total Hours',
    lectures: '185 Lessons',
    price: 2499, originalPrice: 6999,
    badge: 'Best Seller',
    description: 'Master frontend to backend engineering by constructing 6 real-world apps, containerized microservices, and CI/CD pipelines.',
    features: ['Real-time Socket.IO chat', 'Stripe checkout flow', 'Dockerized deployment'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
  },
  {
    title: 'Next.js 15 Enterprise Architecture: Caching, Server Actions & Turbopack',
    category: 'Web Development',
    level: 'Intermediate',
    instructor: 'Mark Evans',
    instructorRole: 'Staff Frontend Engineer',
    rating: 4.9,
    reviews: '2,920',
    duration: '38 Total Hours',
    lectures: '145 Lessons',
    price: 2299, originalPrice: 5999,
    badge: 'Hot',
    description: 'Build lightning-fast full-stack web applications with parallel data fetching, streaming server components, and edge rendering.',
    features: ['Partial Prerendering (PPR)', 'Zustand & React Query sync', 'Vercel Edge functions'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee'
  },
  {
    title: 'Microservices with Node.js, NestJS, Kafka & Distributed Tracing',
    category: 'Web Development',
    level: 'Advanced',
    instructor: 'Tariq Al-Mansoor',
    instructorRole: 'Backend Systems Lead',
    rating: 4.8,
    reviews: '1,850',
    duration: '50 Total Hours',
    lectures: '190 Lessons',
    price: 2999, originalPrice: 7999,
    badge: 'Enterprise',
    description: 'Design resilient distributed backend architectures handling millions of concurrent requests with Kafka streaming and OpenTelemetry.',
    features: ['Event-driven Kafka bus', 'OpenTelemetry & Jaeger', 'PostgreSQL sharding'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c'
  },
  {
    title: 'Modern TypeScript for Production Architectures & Monorepos',
    category: 'Web Development',
    level: 'Intermediate',
    instructor: 'David Reynolds',
    instructorRole: 'Senior Software Engineer',
    rating: 4.9,
    reviews: '3,210',
    duration: '30 Total Hours',
    lectures: '115 Lessons',
    price: 1999, originalPrice: 5499,
    badge: 'Top Rated',
    description: 'Master advanced generics, conditional types, AST transformations, and Turborepo multi-package monorepo workspaces.',
    features: ['Turborepo tooling', 'Type-level programming', 'Strict linter pipelines'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
  },
  {
    title: 'Vue 3 & Nuxt 3 Full-Stack E-Commerce Engine with Pinia',
    category: 'Web Development',
    level: 'Intermediate',
    instructor: 'Clara Oswald',
    instructorRole: 'Frontend Lead',
    rating: 4.7,
    reviews: '1,640',
    duration: '36 Total Hours',
    lectures: '130 Lessons',
    price: 2299, originalPrice: 5999,
    badge: 'Popular',
    description: 'Construct server-side rendered storefronts with dynamic routing, Pinia store persistence, and headless Shopify GraphQL APIs.',
    features: ['Nuxt SSR & ISR caching', 'Pinia state persistence', 'Headless CMS integration'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8'
  },

  // UI/UX Design
  {
    title: 'Advanced Figma Design Systems: Tokens, Variables & Code Hand-off',
    category: 'UI/UX Design',
    level: 'Intermediate',
    instructor: 'Elena Rostova',
    instructorRole: 'Head of Product Design',
    rating: 4.9,
    reviews: '2,420',
    duration: '28 Total Hours',
    lectures: '96 Lessons',
    price: 2299, originalPrice: 5999,
    badge: 'Trending',
    description: 'Learn to build scalable enterprise design systems using Figma variables, dark mode tokens, and automated component documentation.',
    features: ['Tokens Studio sync', 'WCAG 2.2 accessibility', 'Zeroheight handoff'],
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e'
  },
  {
    title: 'User Experience (UX) Research, User Journeys & Usability Audits',
    category: 'UI/UX Design',
    level: 'Beginner',
    instructor: 'Sophia Turner',
    instructorRole: 'Design Director',
    rating: 4.8,
    reviews: '2,150',
    duration: '24 Total Hours',
    lectures: '85 Lessons',
    price: 1999, originalPrice: 5499,
    badge: 'Popular',
    description: 'Conduct qualitative interviews, synthesize card-sorting tests, map user flow bottlenecks, and construct clickable prototypes.',
    features: ['User persona playbooks', 'Miro journey mapping', 'A/B hypothesis testing'],
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12'
  },
  {
    title: 'Interactive Web Motion Design: After Effects, Lottie & Rive',
    category: 'UI/UX Design',
    level: 'Intermediate',
    instructor: 'Chloe Bennet',
    instructorRole: 'Creative Technologist',
    rating: 4.8,
    reviews: '1,890',
    duration: '26 Total Hours',
    lectures: '92 Lessons',
    price: 1999, originalPrice: 5499,
    badge: 'Hot',
    description: 'Design fluid micro-interactions, stateful button animations, and vector character rigs ready for React and Flutter integration.',
    features: ['Rive state machines', 'Lottie JSON optimizations', 'Easing physics theory'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f'
  },
  {
    title: 'Design Systems for Complex Enterprise Web Applications',
    category: 'UI/UX Design',
    level: 'Advanced',
    instructor: 'Elena Rostova',
    instructorRole: 'Head of Product Design',
    rating: 5.0,
    reviews: '3,480',
    duration: '42 Total Hours',
    lectures: '150 Lessons',
    price: 2999, originalPrice: 7499,
    badge: 'Best Seller',
    description: 'Unify dozens of digital products under a single coherent design system with multi-brand theming, semantic colors, and design governance.',
    features: ['Multi-brand theming', 'Component version control', 'Storybook alignment'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97'
  },
  {
    title: '3D Spatial UI & Spatial Computing Design for VisionOS',
    category: 'UI/UX Design',
    level: 'Advanced',
    instructor: 'Arthur Dent',
    instructorRole: 'Spatial UI Engineer',
    rating: 4.9,
    reviews: '1,120',
    duration: '32 Total Hours',
    lectures: '110 Lessons',
    price: 2799, originalPrice: 7499,
    badge: 'New Tech',
    description: 'Explore depth planes, spatial audio feedback cues, hand gestures, and eye tracking principles for immersive computing devices.',
    features: ['Spline 3D scenes', 'Apple HIG for Spatial UI', 'Glassmorphism depth layers'],
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620'
  },

  // Data Science & AI
  {
    title: 'Autonomous LLM Agents, PyTorch & LangChain Engineering',
    category: 'Data Science & AI',
    level: 'Advanced',
    instructor: 'Dr. Emily Watson',
    instructorRole: 'AI Research Lead',
    rating: 5.0,
    reviews: '5,120',
    duration: '58 Total Hours',
    lectures: '220 Lessons',
    price: 3499, originalPrice: 7999,
    badge: 'Hot',
    description: 'Deploy enterprise-grade RAG systems, fine-tune open-source models using LoRA/QLoRA, and evaluate autonomous multi-agent swarms.',
    features: ['Vector DBs (Pinecone/Qdrant)', 'Fine-tuning Llama 3', 'LangGraph workflows'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    title: 'Complete Machine Learning Bootcamp with Python, Pandas & Scikit-Learn',
    category: 'Data Science & AI',
    level: 'Beginner',
    instructor: 'David Reynolds',
    instructorRole: 'Lead Data Scientist',
    rating: 4.9,
    reviews: '6,450',
    duration: '50 Total Hours',
    lectures: '195 Lessons',
    price: 2499, originalPrice: 6999,
    badge: 'Best Seller',
    description: 'Learn foundational supervised and unsupervised algorithms, data feature engineering, gradient boosting, and model evaluation metrics.',
    features: ['XGBoost & LightGBM', 'Real Kaggle datasets', 'Statistical regression models'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c'
  },
  {
    title: 'Modern Data Engineering with Snowflake, dbt & Apache Airflow',
    category: 'Data Science & AI',
    level: 'Advanced',
    instructor: 'Vikram Mehta',
    instructorRole: 'Data Platform Architect',
    rating: 4.9,
    reviews: '2,890',
    duration: '44 Total Hours',
    lectures: '160 Lessons',
    price: 3499, originalPrice: 7999,
    badge: 'Enterprise',
    description: 'Build modern data stack pipelines: orchestrate DAGs with Airflow, model scalable schemas with dbt, and query Snowflake warehouses.',
    features: ['Automated CI/CD for dbt', 'Star schema data marts', 'Airflow SLA monitors'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3'
  },
  {
    title: 'Computer Vision & Object Detection with OpenCV and YOLOv10',
    category: 'Data Science & AI',
    level: 'Intermediate',
    instructor: 'David Reynolds',
    instructorRole: 'Computer Vision Lead',
    rating: 4.8,
    reviews: '2,240',
    duration: '38 Total Hours',
    lectures: '135 Lessons',
    price: 2799, originalPrice: 7499,
    badge: 'Pro Pick',
    description: 'Train custom object detection and semantic segmentation neural nets for real-time video surveillance, drone tracking, and robotics.',
    features: ['Custom dataset annotation', 'YOLO model quantization', 'Edge deployment (NVIDIA Jetson)'],
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a'
  },
  {
    title: 'Applied SQL, PowerBI & Business Intelligence Executive Analytics',
    category: 'Data Science & AI',
    level: 'Beginner',
    instructor: 'Vikram Mehta',
    instructorRole: 'Data Consultant',
    rating: 4.7,
    reviews: '4,100',
    duration: '28 Total Hours',
    lectures: '105 Lessons',
    price: 1799, originalPrice: 4999,
    badge: 'Top Rated',
    description: 'Extract revenue KPIs, write complex window functions and CTEs in PostgreSQL, and present automated interactive PowerBI dashboards.',
    features: ['DAX formula mastery', 'PostgreSQL window functions', 'Executive KPI storyboards'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
  },

  // Cloud & DevOps
  {
    title: 'AWS Certified Solutions Architect Associate (SAA-C03) Mastery',
    category: 'Cloud & DevOps',
    level: 'Intermediate',
    instructor: 'James Vance',
    instructorRole: 'AWS Ambassador',
    rating: 4.9,
    reviews: '6,300',
    duration: '52 Total Hours',
    lectures: '170 Lessons',
    price: 2999, originalPrice: 7999,
    badge: 'Certified',
    description: 'Pass the exam on your first attempt with real cloud sandbox labs, multi-tier VPC deployments, and disaster recovery blueprints.',
    features: ['6 Full practice exams', 'VPC & IAM sandboxes', 'Terraform templates'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
  },
  {
    title: 'Docker & Kubernetes: Enterprise Production Cluster Orchestration',
    category: 'Cloud & DevOps',
    level: 'Advanced',
    instructor: 'James Vance',
    instructorRole: 'DevOps Lead',
    rating: 4.9,
    reviews: '4,150',
    duration: '46 Total Hours',
    lectures: '160 Lessons',
    price: 2799, originalPrice: 7499,
    badge: 'Best Seller',
    description: 'Build production Kubernetes clusters, manage ingress controllers, secure secrets with Vault, and automate deployments with Helm.',
    features: ['Helm chart packaging', 'HashiCorp Vault secret sync', 'Zero-downtime rolling updates'],
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3'
  },
  {
    title: 'Terraform & Infrastructure as Code (IaC) Multi-Cloud Engineering',
    category: 'Cloud & DevOps',
    level: 'Intermediate',
    instructor: 'Mark Evans',
    instructorRole: 'Cloud Engineer',
    rating: 4.8,
    reviews: '2,900',
    duration: '32 Total Hours',
    lectures: '110 Lessons',
    price: 2299, originalPrice: 5999,
    badge: 'Popular',
    description: 'Automate AWS and GCP cloud infrastructure provisioning cleanly using modular Terraform code, state locking, and Atlantis GitOps.',
    features: ['Terraform Cloud workspaces', 'S3 backend state locking', 'Security drift detection'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31'
  },
  {
    title: 'Production CI/CD Pipelines with GitHub Actions, Docker & ArgoCD',
    category: 'Cloud & DevOps',
    level: 'Beginner',
    instructor: 'Alex Morrison',
    instructorRole: 'Release Engineer',
    rating: 4.8,
    reviews: '3,400',
    duration: '26 Total Hours',
    lectures: '90 Lessons',
    price: 1999, originalPrice: 5499,
    badge: 'Trending',
    description: 'Build automated linting, test runners, container image scanning, and GitOps deployments pushing commits directly to live Kubernetes pods.',
    features: ['Matrix test pipelines', 'Trivy vulnerability scan', 'ArgoCD declarative sync'],
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb'
  },
  {
    title: 'Site Reliability Engineering (SRE): Monitoring Prometheus & Grafana',
    category: 'Cloud & DevOps',
    level: 'Advanced',
    instructor: 'James Vance',
    instructorRole: 'SRE Director',
    rating: 4.8,
    reviews: '1,780',
    duration: '34 Total Hours',
    lectures: '115 Lessons',
    price: 2499, originalPrice: 6999,
    badge: 'Pro Pick',
    description: 'Define SLOs/SLIs, configure PagerDuty incident alerts, scrape Kubernetes metrics, and construct executive telemetry dashboards in Grafana.',
    features: ['PromQL query crafting', 'PagerDuty alert routing', 'Chaos engineering experiments'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
  },

  // Cyber Security
  {
    title: 'Ethical Hacking & Web Application Penetration Testing (OWASP Top 10)',
    category: 'Cyber Security',
    level: 'Advanced',
    instructor: 'Marcus Brody',
    instructorRole: 'SecOps Director',
    rating: 4.8,
    reviews: '3,100',
    duration: '40 Total Hours',
    lectures: '135 Lessons',
    price: 2799, originalPrice: 7499,
    badge: 'Pro Pick',
    description: 'Gain practical experience identifying and exploiting SQLi, XSS, SSRF, and authentication flaws in browser labs and vulnerability targets.',
    features: ['Burp Suite Pro labs', 'API authorization exploits', 'Bug bounty methodology'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3'
  },
  {
    title: 'CompTIA Security+ (SY0-701) Complete Certification Exam Prep',
    category: 'Cyber Security',
    level: 'Beginner',
    instructor: 'Tariq Al-Mansoor',
    instructorRole: 'Security Consultant',
    rating: 4.8,
    reviews: '5,600',
    duration: '48 Total Hours',
    lectures: '175 Lessons',
    price: 2499, originalPrice: 5999,
    badge: 'Certified',
    description: 'Comprehensive preparation covering cryptography, incident remediation, perimeter defense, social engineering, and security governance.',
    features: ['8 Practice exams', 'Acronym flashcard packs', 'Simulated PBQs (Performance Questions)'],
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87'
  },
  {
    title: 'SOC Analyst Tier 1 & 2 Blueprint with Splunk, ELK & Wazuh',
    category: 'Cyber Security',
    level: 'Intermediate',
    instructor: 'Marcus Brody',
    instructorRole: 'Incident Response Lead',
    rating: 4.9,
    reviews: '3,200',
    duration: '42 Total Hours',
    lectures: '140 Lessons',
    price: 2799, originalPrice: 7499,
    badge: 'Trending',
    description: 'Investigate live endpoint malware alerts, ingest Windows Event Logs into SIEM, correlate IOCs, and draft actionable incident triage reports.',
    features: ['Spline & SPL query mastery', 'Wireshark PCAP triage', 'MITRE ATT&CK mapping'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3'
  },
  {
    title: 'Cloud Security Architecture on AWS, GCP & Azure Environments',
    category: 'Cyber Security',
    level: 'Advanced',
    instructor: 'James Vance',
    instructorRole: 'Cloud Security Architect',
    rating: 4.8,
    reviews: '2,400',
    duration: '36 Total Hours',
    lectures: '120 Lessons',
    price: 2999, originalPrice: 7499,
    badge: 'Hot',
    description: 'Implement least-privilege IAM policies, audit S3 bucket exposures, configure AWS GuardDuty, and protect multi-tenant cloud assets.',
    features: ['IAM policy hardening', 'AWS WAF rulesets', 'CloudTrail forensics'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c'
  },
  {
    title: 'Malware Analysis, Disassembly & x86 Reverse Engineering',
    category: 'Cyber Security',
    level: 'Advanced',
    instructor: 'David Reynolds',
    instructorRole: 'Reverse Engineer',
    rating: 5.0,
    reviews: '1,650',
    duration: '46 Total Hours',
    lectures: '150 Lessons',
    price: 3499, originalPrice: 7999,
    badge: 'Elite',
    description: 'Set up isolated sandboxes with Ghidra and x64dbg. Deconstruct real ransomware binaries, unpack shellcodes, and identify persistence hooks.',
    features: ['Ghidra decompiler mastery', 'Anti-debugging bypasses', 'Dynamic API hook analysis'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b'
  },

  // Mobile App
  {
    title: 'Production Flutter 3 & Clean Architecture for iOS & Android',
    category: 'Mobile App',
    level: 'Beginner',
    instructor: 'Rachel Green',
    instructorRole: 'Principal Mobile Dev',
    rating: 4.8,
    reviews: '3,450',
    duration: '38 Total Hours',
    lectures: '130 Lessons',
    price: 1999, originalPrice: 5499,
    badge: 'Popular',
    description: 'Construct offline-first apps using Bloc pattern, local caching, Firebase notifications, and publishing pipelines for the App Store & Google Play.',
    features: ['Bloc state management', 'Native device APIs', 'App Store CI/CD'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c'
  },
  {
    title: 'React Native, Expo & NativeWind: Enterprise Cross-Platform Apps',
    category: 'Mobile App',
    level: 'Intermediate',
    instructor: 'Mark Evans',
    instructorRole: 'Mobile Architect',
    rating: 4.9,
    reviews: '3,800',
    duration: '40 Total Hours',
    lectures: '145 Lessons',
    price: 2499, originalPrice: 5999,
    badge: 'Best Seller',
    description: 'Build native mobile apps with file-based Expo routing, NativeWind Tailwind styling, biometrics authentication, and push notifications.',
    features: ['Expo Router v3', 'FaceID & Biometrics', 'SQLite offline syncing'],
    image: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4'
  },
  {
    title: 'SwiftUI & iOS 18: Modern MVVM Architecture and CoreData',
    category: 'Mobile App',
    level: 'Intermediate',
    instructor: 'Lucas Vance',
    instructorRole: 'Principal iOS Engineer',
    rating: 4.9,
    reviews: '2,900',
    duration: '44 Total Hours',
    lectures: '160 Lessons',
    price: 2799, originalPrice: 7499,
    badge: 'Hot',
    description: 'Master Apple SwiftUI, Swift Concurrency (async/await), interactive desktop widgets, CoreData persistence, and TestFlight deployment.',
    features: ['Interactive iOS Widgets', 'SwiftData & CoreData', 'StoreKit in-app purchases'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998'
  },
  {
    title: 'Kotlin & Jetpack Compose Modern Android App Architecture',
    category: 'Mobile App',
    level: 'Intermediate',
    instructor: 'Alex Morrison',
    instructorRole: 'Android Specialist',
    rating: 4.8,
    reviews: '2,750',
    duration: '42 Total Hours',
    lectures: '150 Lessons',
    price: 2499, originalPrice: 6999,
    badge: 'Trending',
    description: 'Design Android apps using reactive Jetpack Compose declarative UI, Coroutines/Flow, Room Database, and Hilt dependency injection.',
    features: ['Hilt dependency injection', 'Room database caching', 'Material Design 3'],
    image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb'
  },
  {
    title: 'Micro-Animations & Gestures in React Native with Reanimated 3',
    category: 'Mobile App',
    level: 'Advanced',
    instructor: 'Sophia Turner',
    instructorRole: 'Design Technologist',
    rating: 4.9,
    reviews: '1,920',
    duration: '25 Total Hours',
    lectures: '85 Lessons',
    price: 1999, originalPrice: 5499,
    badge: 'Visual',
    description: 'Implement complex 60fps gesture-based animations: swipeable cards, physics-based springs, bottom sheets, and canvas transitions.',
    features: ['Gesture Handler 2', 'Worklet threads', 'Shared element transitions'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4'
  }
];

// ==========================================
// 3. GENERATE EXACTLY 150 COURSE LIST ITEMS
// ==========================================
export const courseListItems = Array.from({ length: 150 }, (_, idx) => {
  const tpl = baseListTemplates[idx % baseListTemplates.length];
  const cycle = Math.floor(idx / baseListTemplates.length);
  const title = cycle === 0 ? tpl.title : `${tpl.title} [Series Part ${cycle + 1}]`;

  return {
    id: idx + 1,
    title,
    category: tpl.category,
    level: tpl.level,
    instructor: tpl.instructor,
    instructorRole: tpl.instructorRole,
    rating: parseFloat((tpl.rating - ((idx % 3) * 0.05)).toFixed(1)),
    reviews: `${(parseFloat(tpl.reviews.replace(',', '')) + (idx * 15)).toLocaleString()}`,
    duration: tpl.duration,
    lectures: tpl.lectures,
    price: parseFloat((tpl.price + (cycle * 2)).toFixed(2)),
    originalPrice: parseFloat((tpl.originalPrice + (cycle * 4)).toFixed(2)),
    badge: tpl.badge,
    description: tpl.description,
    features: tpl.features,
    image: `${tpl.image}?auto=format&fit=crop&w=600&q=80`
  };
});

// ========================================================
// 4. INSTRUCTOR DIRECTORY (60 Items Total)
// ========================================================
const instructorCatalog = [
  { name: 'Alex Morrison', role: 'Principal Cloud Architect', co: 'AWS Alumni' },
  { name: 'Elena Rostova', role: 'Head of Product Design', co: 'Ex-Spotify' },
  { name: 'Dr. Emily Watson', role: 'AI Research Lead', co: 'DeepMind Fellow' },
  { name: 'James Vance', role: 'DevOps & SRE Director', co: 'Cloud Native Ambassador' },
  { name: 'Marcus Brody', role: 'SecOps Director', co: 'DefCon Speaker' },
  { name: 'Rachel Green', role: 'Principal Mobile Dev', co: 'Google Developer Expert' },
  { name: 'Vikram Mehta', role: 'Data Platform Architect', co: 'Snowflake Partner' },
  { name: 'Mark Evans', role: 'Staff Frontend Engineer', co: 'Next.js Contributor' },
  { name: 'Sophia Turner', role: 'Design Director', co: 'Figma Community Lead' },
  { name: 'David Reynolds', role: 'Lead Data Scientist', co: 'Kaggle Grandmaster' },
  { name: 'Clara Oswald', role: 'Frontend Lead', co: 'Vue Core Member' },
  { name: 'Arthur Dent', role: 'Spatial UI Engineer', co: 'Unity Certified' }
];

export const courseInstructorsList = Array.from({ length: 60 }, (_, idx) => {
  const base = instructorCatalog[idx % instructorCatalog.length];
  return {
    id: idx + 1,
    name: `${base.name} ${idx >= 12 ? `(Batch ${Math.floor(idx / 12) + 1})` : ''}`,
    role: base.role,
    affiliate: base.co,
    rating: (4.7 + ((idx % 4) * 0.08)).toFixed(1),
    totalReviews: `${(idx + 1) * 110 + 400}`,
    coursesTeaching: (idx % 6) + 3,
    image: `https://images.unsplash.com/photo-${['1573496359142-b8d87734a5a2', '1560250097-0b93528c311a', '1580489944761-15a19d654956', '1507003211169-0a1dd7228f2d'][idx % 4]}?auto=format&fit=crop&w=300&q=80`
  };
});

// ========================================================
// 5. DETAILED STUDENT COURSE REVIEWS (60 Items Total)
// ==========================================
const reviewSummaries = [
  'The horizontal breakdown and feature checklist helped me understand what I was buying. The capstone code reviews are worth triple the price.',
  'By far the clearest deep dive into cloud and Kubernetes clustering. Went from zero confidence to deploying enterprise pods within weeks.',
  'Elena is an exceptional design educator. The Figma variables section completely changed how our agency delivers client tokens.',
  'The real-world Socket.IO and Stripe integration exercises provided genuine portfolio materials that impressed my interviewers.',
  'Precise, up-to-date with current library standards, and zero fluff. The instructor walks through real error logs and debugging.'
];

export const listStudentReviews = Array.from({ length: 60 }, (_, idx) => ({
  id: idx + 1,
  courseId: (idx % 150) + 1,
  studentName: ['Julian M.', 'Pooja K.', 'Carlos R.', 'Amina S.', 'Lukas B.', 'Tanya N.'][idx % 6] + ` #${idx + 1}`,
  courseTitle: courseListItems[idx % courseListItems.length].title,
  rating: 5,
  date: `Oct ${(idx % 28) + 1}, 2026`,
  comment: reviewSummaries[idx % reviewSummaries.length]
}));