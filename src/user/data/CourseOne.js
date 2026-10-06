// ==========================================
// 1. FILTER META DATA (37 Filter Items)
// ==========================================
export const courseCategories = [
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
  'Systems & Embedded Programming',
  'Digital Marketing & Growth',
  'Machine Learning & Deep Learning',
  'Enterprise Architecture'
];

export const skillLevels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

export const sortOptions = [
  { label: 'Most Popular', value: 'popular' },
  { label: 'Highest Rated', value: 'rating' },
  { label: 'Price: Low to High', value: 'priceLow' },
  { label: 'Price: High to Low', value: 'priceHigh' },
  { label: 'Newest Arrivals', value: 'newest' },
  { label: 'Duration: Shortest to Longest', value: 'duration' }
];

export const durationFilters = [
  'All Durations',
  '0-5 Hours',
  '6-15 Hours',
  '16-30 Hours',
  '30+ Hours',
  'Full Bootcamp (60+ Hours)'
];

export const languageFilters = ['English', 'Spanish', 'German', 'French', 'Hindi', 'Bengali'];

// ==========================================
// 2. COURSES GRID DATA (150 Items Total)
// ==========================================
const baseCourseTemplates = [
  // Web Development
  { title: 'Full-Stack Web Development Bootcamp with React & Node', cat: 'Web Development', lvl: 'Beginner', inst: 'Alex Morrison', r: 4.9, rev: '3.4k', dur: '42 Hours', lec: '180 Lectures', pr: 2499, opr: 6999, bg: 'Best Seller', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
  { title: 'Next.js 15, Server Actions & App Router In-Depth', cat: 'Web Development', lvl: 'Intermediate', inst: 'Mark Evans', r: 4.9, rev: '2.8k', dur: '34 Hours', lec: '140 Lectures', pr: 2299, opr: 5999, bg: 'Hot', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee' },
  { title: 'Micro-Frontends & Module Federation at Enterprise Scale', cat: 'Web Development', lvl: 'Advanced', inst: 'Mark Evans', r: 4.8, rev: '1.4k', dur: '28 Hours', lec: '90 Lectures', pr: 2999, opr: 7499, bg: 'Pro Pick', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97' },
  { title: 'Complete Tailwind CSS 4 Design System Workflow', cat: 'Web Development', lvl: 'Beginner', inst: 'Sophia Turner', r: 4.8, rev: '4.1k', dur: '18 Hours', lec: '65 Lectures', pr: 1499, opr: 4999, bg: 'Popular', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8' },
  { title: 'Modern TypeScript for Production Architectures', cat: 'Web Development', lvl: 'Intermediate', inst: 'David Reynolds', r: 4.9, rev: '3.2k', dur: '26 Hours', lec: '110 Lectures', pr: 1999, opr: 5499, bg: 'Top Rated', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c' },
  { title: 'GraphQL, Apollo Client & Distributed Federation', cat: 'Web Development', lvl: 'Advanced', inst: 'Rachel Green', r: 4.7, rev: '1.2k', dur: '24 Hours', lec: '80 Lectures', pr: 2299, opr: 5999, bg: 'Updated', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998' },
  { title: 'Vue 3 & Nuxt 3 Full-Stack E-Commerce Platform', cat: 'Web Development', lvl: 'Intermediate', inst: 'Clara Oswald', r: 4.8, rev: '1.9k', dur: '36 Hours', lec: '130 Lectures', pr: 2299, opr: 5999, bg: 'Trending', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e' },
  { title: 'Angular 18 Complete Developer Guide with Signals', cat: 'Web Development', lvl: 'Intermediate', inst: 'Vikram Mehta', r: 4.6, rev: '2.1k', dur: '45 Hours', lec: '190 Lectures', pr: 2499, opr: 6999, bg: 'Enterprise', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6' },
  { title: 'Web Performance Optimization: 100/100 Lighthouse', cat: 'Web Development', lvl: 'Advanced', inst: 'Mark Evans', r: 4.9, rev: '1.6k', dur: '16 Hours', lec: '55 Lectures', pr: 1999, opr: 5499, bg: 'Essential', img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159' },
  { title: 'Real-Time WebSockets & Collaborative Canvas Systems', cat: 'Web Development', lvl: 'Advanced', inst: 'Alex Morrison', r: 4.9, rev: '2.3k', dur: '32 Hours', lec: '115 Lectures', pr: 2799, opr: 7499, bg: 'Hot', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c' },

  // UI/UX Design
  { title: 'Advanced Figma Design Systems, Variables & Tokens', cat: 'UI/UX Design', lvl: 'Intermediate', inst: 'Elena Rostova', r: 4.9, rev: '2.1k', dur: '28 Hours', lec: '95 Lectures', pr: 2299, opr: 5999, bg: 'Trending', img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e' },
  { title: 'UX Research & Usability Testing Masterclass', cat: 'UI/UX Design', lvl: 'Beginner', inst: 'Sophia Turner', r: 4.8, rev: '1.7k', dur: '22 Hours', lec: '75 Lectures', pr: 1799, opr: 5499, bg: 'Popular', img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12' },
  { title: 'Framer Interactive Web Design without Code', cat: 'UI/UX Design', lvl: 'Intermediate', inst: 'Chloe Bennet', r: 4.9, rev: '2.6k', dur: '24 Hours', lec: '85 Lectures', pr: 1999, opr: 5499, bg: 'Hot', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4' },
  { title: 'Motion UI Design with Adobe After Effects & Lottie', cat: 'UI/UX Design', lvl: 'Intermediate', inst: 'Chloe Bennet', r: 4.7, rev: '1.3k', dur: '20 Hours', lec: '70 Lectures', pr: 1999, opr: 5499, bg: 'Creative', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f' },
  { title: 'Web Accessibility (WCAG 2.2) Compliance Bootcamp', cat: 'UI/UX Design', lvl: 'Advanced', inst: 'Dr. Emily Watson', r: 4.9, rev: '980', dur: '18 Hours', lec: '60 Lectures', pr: 1799, opr: 4999, bg: 'Certified', img: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2' },
  { title: 'Spatial UI & VisionOS Human Interface Guidelines', cat: 'UI/UX Design', lvl: 'Advanced', inst: 'Arthur Dent', r: 4.8, rev: '850', dur: '26 Hours', lec: '80 Lectures', pr: 2799, opr: 7499, bg: 'New Tech', img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620' },
  { title: 'Typography, Visual Hierarchy & Layout Systems', cat: 'UI/UX Design', lvl: 'Beginner', inst: 'Elena Rostova', r: 4.8, rev: '2.4k', dur: '16 Hours', lec: '50 Lectures', pr: 1299, opr: 3999, bg: 'Core Skill', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d' },
  { title: 'Complex SaaS Analytics Dashboard Design', cat: 'UI/UX Design', lvl: 'Advanced', inst: 'Elena Rostova', r: 5.0, rev: '3.1k', dur: '32 Hours', lec: '110 Lectures', pr: 2499, opr: 6999, bg: 'Best Seller', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f' },
  { title: 'Design Sprint Facilitation for Product Teams', cat: 'UI/UX Design', lvl: 'Intermediate', inst: 'Sophia Turner', r: 4.7, rev: '1.1k', dur: '14 Hours', lec: '45 Lectures', pr: 1499, opr: 4999, bg: 'Workshop', img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b' },
  { title: '3D Web Asset Creation with Spline & Three.js', cat: 'UI/UX Design', lvl: 'Intermediate', inst: 'Arthur Dent', r: 4.9, rev: '1.8k', dur: '25 Hours', lec: '82 Lectures', pr: 2299, opr: 5999, bg: 'Hot', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe' },

  // Data Science & AI
  { title: 'Modern Deep Learning, PyTorch & LLM Fine-Tuning', cat: 'Data Science & AI', lvl: 'Advanced', inst: 'Dr. Emily Watson', r: 5.0, rev: '4.8k', dur: '56 Hours', lec: '210 Lectures', pr: 3499, opr: 7999, bg: 'Hot', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995' },
  { title: 'Machine Learning from Scratch with Python & NumPy', cat: 'Data Science & AI', lvl: 'Beginner', inst: 'David Reynolds', r: 4.9, rev: '5.9k', dur: '48 Hours', lec: '175 Lectures', pr: 2499, opr: 6999, bg: 'Best Seller', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c' },
  { title: 'Applied SQL, PowerBI & Business Intelligence Analytics', cat: 'Data Science & AI', lvl: 'Beginner', inst: 'Vikram Mehta', r: 4.7, rev: '3.8k', dur: '26 Hours', lec: '90 Lectures', pr: 1799, opr: 4999, bg: 'Top Rated', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5' },
  { title: 'Autonomous AI Agents with LangChain & AutoGen', cat: 'Data Science & AI', lvl: 'Advanced', inst: 'Dr. Emily Watson', r: 4.9, rev: '2.5k', dur: '30 Hours', lec: '105 Lectures', pr: 3499, opr: 7999, bg: 'Trending', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c' },
  { title: 'Computer Vision with OpenCV & YOLOv10 Object Detection', cat: 'Data Science & AI', lvl: 'Intermediate', inst: 'David Reynolds', r: 4.8, rev: '2.1k', dur: '38 Hours', lec: '125 Lectures', pr: 2799, opr: 7499, bg: 'Pro Pick', img: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a' },
  { title: 'Data Engineering with Snowflake, dbt & Apache Airflow', cat: 'Data Science & AI', lvl: 'Advanced', inst: 'Vikram Mehta', r: 4.9, rev: '3.1k', dur: '44 Hours', lec: '150 Lectures', pr: 3499, opr: 7999, bg: 'Enterprise', img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3' },
  { title: 'Applied Natural Language Processing with Hugging Face', cat: 'Data Science & AI', lvl: 'Intermediate', inst: 'Dr. Emily Watson', r: 4.8, rev: '3.4k', dur: '36 Hours', lec: '120 Lectures', pr: 2799, opr: 6999, bg: 'Popular', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d' },
  { title: 'Vector Databases: Pinecone, Qdrant & Enterprise RAG', cat: 'Data Science & AI', lvl: 'Intermediate', inst: 'Alex Morrison', r: 4.9, rev: '2.8k', dur: '28 Hours', lec: '95 Lectures', pr: 2499, opr: 6999, bg: 'Hot', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5' },
  { title: 'Applied Statistics & Probability for Data Scientists', cat: 'Data Science & AI', lvl: 'Beginner', inst: 'Dr. Emily Watson', r: 4.8, rev: '1.9k', dur: '24 Hours', lec: '85 Lectures', pr: 1799, opr: 4999, bg: 'Academic', img: 'https://images.unsplash.com/photo-1509228468518-180dd4864904' },
  { title: 'MLOps: Deploying Scalable Models on AWS SageMaker', cat: 'Data Science & AI', lvl: 'Advanced', inst: 'James Vance', r: 4.8, rev: '1.7k', dur: '35 Hours', lec: '115 Lectures', pr: 2999, opr: 7499, bg: 'Certified', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa' },

  // Cloud & DevOps
  { title: 'AWS Certified Solutions Architect Associate (SAA-C03)', cat: 'Cloud & DevOps', lvl: 'Intermediate', inst: 'James Vance', r: 4.9, rev: '5.2k', dur: '48 Hours', lec: '160 Lectures', pr: 2999, opr: 7999, bg: 'Certified', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952' },
  { title: 'Docker & Kubernetes: Enterprise Production Guide', cat: 'Cloud & DevOps', lvl: 'Advanced', inst: 'James Vance', r: 4.9, rev: '2.4k', dur: '32 Hours', lec: '110 Lectures', pr: 2499, opr: 6999, bg: 'Updated', img: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3' },
  { title: 'Terraform & Infrastructure as Code (IaC) Masterclass', cat: 'Cloud & DevOps', lvl: 'Intermediate', inst: 'Mark Evans', r: 4.8, rev: '2.7k', dur: '28 Hours', lec: '90 Lectures', pr: 2299, opr: 5999, bg: 'Popular', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31' },
  { title: 'Production CI/CD Automation with GitHub Actions', cat: 'Cloud & DevOps', lvl: 'Beginner', inst: 'Alex Morrison', r: 4.8, rev: '3.1k', dur: '22 Hours', lec: '75 Lectures', pr: 1799, opr: 5499, bg: 'Trending', img: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb' },
  { title: 'Microsoft Azure Administrator (AZ-104) Exam Prep', cat: 'Cloud & DevOps', lvl: 'Intermediate', inst: 'Vikram Mehta', r: 4.8, rev: '3.6k', dur: '40 Hours', lec: '135 Lectures', pr: 2799, opr: 7499, bg: 'Certified', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f' },
  { title: 'Linux Enterprise Administration & Bash Scripting', cat: 'Cloud & DevOps', lvl: 'Beginner', inst: 'David Reynolds', r: 4.9, rev: '4.5k', dur: '34 Hours', lec: '120 Lectures', pr: 1499, opr: 4999, bg: 'Foundation', img: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97' },
  { title: 'Site Reliability Engineering (SRE) with Prometheus', cat: 'Cloud & DevOps', lvl: 'Advanced', inst: 'James Vance', r: 4.8, rev: '1.5k', dur: '30 Hours', lec: '95 Lectures', pr: 2499, opr: 6999, bg: 'Pro Pick', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71' },
  { title: 'Google Cloud Platform (GCP) Cloud Engineer Bootcamp', cat: 'Cloud & DevOps', lvl: 'Intermediate', inst: 'Tariq Al-Mansoor', r: 4.7, rev: '1.9k', dur: '38 Hours', lec: '125 Lectures', pr: 2499, opr: 6999, bg: 'Popular', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8' },
  { title: 'Kafka & RabbitMQ Messaging in Cloud Deployments', cat: 'Cloud & DevOps', lvl: 'Advanced', inst: 'James Vance', r: 4.8, rev: '1.3k', dur: '26 Hours', lec: '85 Lectures', pr: 2499, opr: 5999, bg: 'Hot', img: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83' },
  { title: 'FinOps: Multi-Cloud Cost Optimization Architecture', cat: 'Cloud & DevOps', lvl: 'Intermediate', inst: 'Vikram Mehta', r: 4.7, rev: '920', dur: '18 Hours', lec: '55 Lectures', pr: 1999, opr: 5499, bg: 'Corporate', img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0' },

  // Cyber Security
  { title: 'Certified Ethical Hacker & Cloud Pentesting Lab', cat: 'Cyber Security', lvl: 'Advanced', inst: 'Marcus Brody', r: 4.8, rev: '2.9k', dur: '38 Hours', lec: '130 Lectures', pr: 2799, opr: 7499, bg: 'Pro Pick', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3' },
  { title: 'OWASP Top 10 Web Application Vulnerability Exploits', cat: 'Cyber Security', lvl: 'Intermediate', inst: 'Marcus Brody', r: 4.9, rev: '4.2k', dur: '35 Hours', lec: '115 Lectures', pr: 2499, opr: 6999, bg: 'Best Seller', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b' },
  { title: 'CompTIA Security+ (SY0-701) Comprehensive Guide', cat: 'Cyber Security', lvl: 'Beginner', inst: 'Tariq Al-Mansoor', r: 4.8, rev: '4.9k', dur: '45 Hours', lec: '160 Lectures', pr: 2299, opr: 5999, bg: 'Certified', img: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87' },
  { title: 'SOC Analyst Tier 1 & 2 Blueprint with Splunk & SIEM', cat: 'Cyber Security', lvl: 'Intermediate', inst: 'Marcus Brody', r: 4.8, rev: '2.8k', dur: '40 Hours', lec: '135 Lectures', pr: 2799, opr: 7499, bg: 'Trending', img: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c' },
  { title: 'Network Defense, Wireshark & Threat Hunting', cat: 'Cyber Security', lvl: 'Beginner', inst: 'Marcus Brody', r: 4.7, rev: '2.3k', dur: '28 Hours', lec: '90 Lectures', pr: 1999, opr: 5499, bg: 'Popular', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df' },
  { title: 'Malware Analysis & x86/x64 Reverse Engineering', cat: 'Cyber Security', lvl: 'Advanced', inst: 'David Reynolds', r: 4.9, rev: '1.4k', dur: '44 Hours', lec: '145 Lectures', pr: 3499, opr: 7999, bg: 'Elite', img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d' },
  { title: 'Zero Trust Network Architecture & Identity Security', cat: 'Cyber Security', lvl: 'Advanced', inst: 'Tariq Al-Mansoor', r: 4.7, rev: '1.1k', dur: '25 Hours', lec: '80 Lectures', pr: 2499, opr: 6999, bg: 'Corporate', img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab' },
  { title: 'Python for Offensive Penetration Testing & Exploits', cat: 'Cyber Security', lvl: 'Intermediate', inst: 'Alex Morrison', r: 4.9, rev: '3.6k', dur: '30 Hours', lec: '100 Lectures', pr: 2299, opr: 5999, bg: 'Hot', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4' },
  { title: 'DevSecOps: SAST, DAST & Dependency Vulnerabilities', cat: 'Cyber Security', lvl: 'Intermediate', inst: 'James Vance', r: 4.8, rev: '1.9k', dur: '26 Hours', lec: '85 Lectures', pr: 2499, opr: 5999, bg: 'Updated', img: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0' },
  { title: 'API Security: Testing Broken Object Level Authorization', cat: 'Cyber Security', lvl: 'Advanced', inst: 'Rachel Green', r: 4.8, rev: '2.1k', dur: '22 Hours', lec: '70 Lectures', pr: 2299, opr: 5999, bg: 'Essential', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766' },

  // Mobile App
  { title: 'Cross-Platform App Development with Flutter & Dart', cat: 'Mobile App', lvl: 'Beginner', inst: 'Rachel Green', r: 4.8, rev: '3.1k', dur: '35 Hours', lec: '120 Lectures', pr: 1999, opr: 5499, bg: 'Popular', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c' },
  { title: 'React Native & Expo: Native iOS and Android Apps', cat: 'Mobile App', lvl: 'Intermediate', inst: 'Mark Evans', r: 4.8, rev: '2.6k', dur: '36 Hours', lec: '140 Lectures', pr: 2299, opr: 5999, bg: 'Hot', img: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4' },
  { title: 'SwiftUI & iOS 18: Modern Clean Architecture', cat: 'Mobile App', lvl: 'Intermediate', inst: 'Lucas Vance', r: 4.9, rev: '3.2k', dur: '42 Hours', lec: '155 Lectures', pr: 2799, opr: 7499, bg: 'Best Seller', img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698' },
  { title: 'Kotlin & Jetpack Compose Android Architecture', cat: 'Mobile App', lvl: 'Intermediate', inst: 'Alex Morrison', r: 4.8, rev: '2.8k', dur: '40 Hours', lec: '145 Lectures', pr: 2499, opr: 6999, bg: 'Trending', img: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb' },
  { title: 'Mobile Backend with Supabase & Firebase Auth', cat: 'Mobile App', lvl: 'Beginner', inst: 'Rachel Green', r: 4.7, rev: '1.8k', dur: '22 Hours', lec: '75 Lectures', pr: 1799, opr: 4999, bg: 'Quick Learn', img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e' },
  { title: 'Mobile Game Dev with Unity 6 & C# Physics', cat: 'Mobile App', lvl: 'Beginner', inst: 'Arthur Dent', r: 4.8, rev: '2.5k', dur: '38 Hours', lec: '130 Lectures', pr: 2299, opr: 5999, bg: 'Creative', img: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715' },
  { title: 'App Store Optimization (ASO) & Conversion Hacks', cat: 'Mobile App', lvl: 'Beginner', inst: 'Sophia Turner', r: 4.6, rev: '990', dur: '12 Hours', lec: '40 Lectures', pr: 1299, opr: 3999, bg: 'Growth', img: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f' },
  { title: 'Automated Mobile Testing with Detox & Maestro', cat: 'Mobile App', lvl: 'Advanced', inst: 'Mark Evans', r: 4.7, rev: '870', dur: '20 Hours', lec: '65 Lectures', pr: 1999, opr: 5499, bg: 'QA', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3' },
  { title: 'Offline-First Mobile Architecture with SQLite & CRDTs', cat: 'Mobile App', lvl: 'Advanced', inst: 'Alex Morrison', r: 4.9, rev: '1.4k', dur: '28 Hours', lec: '90 Lectures', pr: 2499, opr: 6999, bg: 'Pro Pick', img: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634' },
  { title: 'Micro-Animations in React Native with Reanimated 3', cat: 'Mobile App', lvl: 'Intermediate', inst: 'Sophia Turner', r: 4.9, rev: '1.9k', dur: '22 Hours', lec: '75 Lectures', pr: 1999, opr: 5499, bg: 'Hot', img: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b' }
];

// Generate exactly 150 items programmatically using unique prefixes and parameters
export const coursesData = Array.from({ length: 150 }, (_, idx) => {
  const template = baseCourseTemplates[idx % baseCourseTemplates.length];
  const iteration = Math.floor(idx / baseCourseTemplates.length);
  const title = iteration === 0 
    ? template.title 
    : `${template.title} [Edition ${iteration + 1}]`;

  return {
    id: idx + 1,
    title,
    category: template.cat,
    level: template.lvl,
    instructor: template.inst,
    rating: parseFloat((template.r - ((idx % 3) * 0.05)).toFixed(1)),
    reviews: `${(parseFloat(template.rev) + (idx * 0.05)).toFixed(1)}k`,
    duration: template.dur,
    lectures: template.lec,
    price: parseFloat((template.pr + (iteration * 3)).toFixed(2)),
    originalPrice: parseFloat((template.opr + (iteration * 5)).toFixed(2)),
    badge: template.bg,
    image: `${template.img}?auto=format&fit=crop&w=600&q=80`
  };
});

// ========================================================
// 3. INSTRUCTOR PROFILES (60 Items Total)
// ========================================================
const instructorNames = [
  'Alex Morrison', 'Elena Rostova', 'Dr. Emily Watson', 'James Vance',
  'Marcus Brody', 'Rachel Green', 'Vikram Mehta', 'Mark Evans',
  'Sophia Turner', 'David Reynolds', 'Clara Oswald', 'Arthur Dent'
];

export const courseInstructors = Array.from({ length: 60 }, (_, idx) => ({
  id: idx + 1,
  name: `${instructorNames[idx % instructorNames.length]} ${idx >= 12 ? `(${Math.floor(idx / 12) + 1})` : ''}`,
  title: ['Senior Software Architect', 'Principal UX Researcher', 'Lead AI Scientist', 'Cloud DevOps Lead', 'SecOps Director'][idx % 5],
  totalStudents: `${(idx + 1) * 2 + 8}k+ Students`,
  rating: (4.7 + ((idx % 4) * 0.07)).toFixed(1),
  activeCourses: (idx % 8) + 3,
  avatar: `https://images.unsplash.com/photo-${['1573496359142-b8d87734a5a2', '1560250097-0b93528c311a', '1580489944761-15a19d654956', '1507003211169-0a1dd7228f2d'][idx % 4]}?auto=format&fit=crop&w=300&q=80`
}));

// ========================================================
// 4. STUDENT COURSE REVIEWS (60 Items Total)
// ========================================================
const reviewComments = [
  'Incredible depth of curriculum. The capstone code reviews directly landed me a frontend offer at a tier-1 product company.',
  'Best explanation of production systems and containerization. Everything runs seamlessly in real cloud environments.',
  'Concise, practical, and devoid of unnecessary fluff. The instructor debugs real code live on video.',
  'Well structured from day one. Passing verified quizzes helped build genuine algorithmic confidence.',
  'The repository code is clean, documented, and fully compatible with modern build engines.'
];

export const studentReviews = Array.from({ length: 60 }, (_, idx) => ({
  id: idx + 1,
  courseId: (idx % 150) + 1,
  studentName: ['Julian M.', 'Pooja K.', 'Carlos R.', 'Amina S.', 'Lukas B.', 'Tanya N.'][idx % 6] + ` #${idx + 1}`,
  rating: 5,
  date: `Oct ${(idx % 28) + 1}, 2026`,
  comment: reviewComments[idx % reviewComments.length]
}));