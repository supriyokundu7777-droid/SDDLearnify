// ==========================================
// 1. FILTER OPTIONS FOR SIDEBAR (42 Meta Items)
// ==========================================
export const sidebarCategories = [
  { name: 'Web Development', count: 48 },
  { name: 'UI/UX Design', count: 32 },
  { name: 'Data Science & AI', count: 40 },
  { name: 'Cloud & DevOps', count: 30 },
  { name: 'Cyber Security', count: 26 },
  { name: 'Mobile App', count: 28 },
  { name: 'Game Development', count: 18 },
  { name: 'Software Testing (QA)', count: 22 },
  { name: 'Blockchain & Web3', count: 20 },
  { name: 'Database Engineering', count: 16 },
  { name: 'Systems Programming', count: 14 },
  { name: 'Digital Marketing & Growth', count: 24 },
  { name: 'Machine Learning & MLOps', count: 36 },
  { name: 'Enterprise Architecture', count: 15 },
  { name: 'Product Management', count: 19 },
  { name: 'AR/VR Spatial Computing', count: 12 }
];

export const sidebarRatings = [
  { stars: 4.8, label: '4.8 & up', count: 95 },
  { stars: 4.5, label: '4.5 & up', count: 165 },
  { stars: 4.0, label: '4.0 & up', count: 220 },
  { stars: 3.5, label: '3.5 & up', count: 260 },
  { stars: 3.0, label: '3.0 & up', count: 300 }
];

export const sidebarLevels = [
  { name: 'All Levels', count: 300 },
  { name: 'Beginner', count: 95 },
  { name: 'Intermediate', count: 135 },
  { name: 'Advanced', count: 70 }
];

export const sidebarPrices = [
  { label: 'All Courses', value: 'all' },
  { label: 'Under ₹2,000', value: 'under2000' },
  { label: '₹2,000 to ₹3,500', value: '2000to3500' },
  { label: 'Above ₹3,500', value: 'above3500' },
  { label: 'Free Access Tier', value: 'free' }
];

export const sidebarDurations = [
  { label: '0-5 Hours', value: 'short', count: 35 },
  { label: '6-15 Hours', value: 'medium', count: 70 },
  { label: '16-30 Hours', value: 'long', count: 110 },
  { label: '30+ Hours', value: 'extraLong', count: 65 },
  { label: 'Full Cohort Bootcamp', value: 'bootcamp', count: 20 }
];

export const sidebarLanguages = [
  { label: 'English', count: 240 },
  { label: 'Spanish', count: 18 },
  { label: 'German', count: 12 },
  { label: 'French', count: 10 },
  { label: 'Hindi', count: 14 },
  { label: 'Bengali', count: 6 }
];

// ==========================================
// 2. MASTER COURSE TEMPLATES
// ==========================================
const baseCourseTemplates = [
  // Web Development
  {
    title: 'Enterprise React 19, Next.js & Server Actions Masterclass',
    category: 'Web Development',
    level: 'Intermediate',
    instructor: 'Alex Morrison',
    rating: 4.9,
    reviews: '3,840',
    duration: '42 Hours',
    lectures: '180 Lectures',
    price: 2499, originalPrice: 6999,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee'
  },
  {
    title: 'Next.js 15 App Router, Parallel Routes & Turbopack In-Depth',
    category: 'Web Development',
    level: 'Advanced',
    instructor: 'Mark Evans',
    rating: 4.9,
    reviews: '2,920',
    duration: '38 Hours',
    lectures: '145 Lectures',
    price: 2299, originalPrice: 5999,
    badge: 'Hot',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
  },
  {
    title: 'Full-Stack MERN with WebSockets, Redis Caching & Docker',
    category: 'Web Development',
    level: 'Beginner',
    instructor: 'Rachel Green',
    rating: 4.8,
    reviews: '3,100',
    duration: '40 Hours',
    lectures: '155 Lectures',
    price: 1999, originalPrice: 5499,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c'
  },
  {
    title: 'Modern TypeScript for Production Architectures & Monorepos',
    category: 'Web Development',
    level: 'Intermediate',
    instructor: 'David Reynolds',
    rating: 4.9,
    reviews: '3,210',
    duration: '30 Hours',
    lectures: '115 Lectures',
    price: 1999, originalPrice: 5499,
    badge: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
  },
  {
    title: 'Vue 3 Composition API & Pinia State Architecture',
    category: 'Web Development',
    level: 'Intermediate',
    instructor: 'Clara Oswald',
    rating: 4.7,
    reviews: '1,640',
    duration: '34 Hours',
    lectures: '120 Lectures',
    price: 1799, originalPrice: 5499,
    badge: 'Updated',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8'
  },

  // UI/UX Design
  {
    title: 'Design Systems Architecture: Figma Tokens & Code Hand-Off',
    category: 'UI/UX Design',
    level: 'Intermediate',
    instructor: 'Elena Rostova',
    rating: 4.9,
    reviews: '2,420',
    duration: '28 Hours',
    lectures: '95 Lectures',
    price: 2299, originalPrice: 5999,
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e'
  },
  {
    title: 'User Experience (UX) Research, User Journeys & Usability Audits',
    category: 'UI/UX Design',
    level: 'Beginner',
    instructor: 'Sophia Turner',
    rating: 4.8,
    reviews: '2,150',
    duration: '24 Hours',
    lectures: '85 Lectures',
    price: 1999, originalPrice: 5499,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12'
  },
  {
    title: 'Interactive Web Motion Design: After Effects, Lottie & Rive',
    category: 'UI/UX Design',
    level: 'Intermediate',
    instructor: 'Chloe Bennet',
    rating: 4.8,
    reviews: '1,890',
    duration: '26 Hours',
    lectures: '92 Lectures',
    price: 1999, originalPrice: 5499,
    badge: 'Hot',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f'
  },
  {
    title: 'Complex SaaS Analytics Dashboard & Data Visualizations',
    category: 'UI/UX Design',
    level: 'Advanced',
    instructor: 'Elena Rostova',
    rating: 5.0,
    reviews: '3,480',
    duration: '42 Hours',
    lectures: '150 Lectures',
    price: 2999, originalPrice: 7499,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97'
  },
  {
    title: 'Spatial UI & VisionOS Spatial Design Guidelines',
    category: 'UI/UX Design',
    level: 'Advanced',
    instructor: 'Arthur Dent',
    rating: 4.9,
    reviews: '1,120',
    duration: '32 Hours',
    lectures: '110 Lectures',
    price: 2799, originalPrice: 7499,
    badge: 'New Tech',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620'
  },

  // Data Science & AI
  {
    title: 'Autonomous LLM Agents, PyTorch & LangChain Engineering',
    category: 'Data Science & AI',
    level: 'Advanced',
    instructor: 'Dr. Emily Watson',
    rating: 5.0,
    reviews: '5,120',
    duration: '58 Hours',
    lectures: '220 Lectures',
    price: 3499, originalPrice: 7999,
    badge: 'Hot',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995'
  },
  {
    title: 'Machine Learning from Scratch with Python, Pandas & Scikit-Learn',
    category: 'Data Science & AI',
    level: 'Beginner',
    instructor: 'David Reynolds',
    rating: 4.9,
    reviews: '6,450',
    duration: '50 Hours',
    lectures: '195 Lectures',
    price: 2499, originalPrice: 6999,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c'
  },
  {
    title: 'Applied SQL, PowerBI & Business Intelligence Analytics',
    category: 'Data Science & AI',
    level: 'Beginner',
    instructor: 'Vikram Mehta',
    rating: 4.7,
    reviews: '4,100',
    duration: '28 Hours',
    lectures: '105 Lectures',
    price: 1799, originalPrice: 4999,
    badge: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
  },
  {
    title: 'Modern Data Engineering with Snowflake, dbt & Apache Airflow',
    category: 'Data Science & AI',
    level: 'Advanced',
    instructor: 'Vikram Mehta',
    rating: 4.9,
    reviews: '2,890',
    duration: '44 Hours',
    lectures: '160 Lectures',
    price: 3499, originalPrice: 7999,
    badge: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3'
  },
  {
    title: 'Computer Vision with OpenCV & YOLOv10 Object Detection',
    category: 'Data Science & AI',
    level: 'Intermediate',
    instructor: 'David Reynolds',
    rating: 4.8,
    reviews: '2,240',
    duration: '38 Hours',
    lectures: '135 Lectures',
    price: 2799, originalPrice: 7499,
    badge: 'Pro Pick',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a'
  },

  // Cloud & DevOps
  {
    title: 'AWS Certified Solutions Architect Associate (SAA-C03)',
    category: 'Cloud & DevOps',
    level: 'Intermediate',
    instructor: 'James Vance',
    rating: 4.9,
    reviews: '6,300',
    duration: '52 Hours',
    lectures: '170 Lectures',
    price: 2999, originalPrice: 7999,
    badge: 'Certified',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
  },
  {
    title: 'Docker & Kubernetes: Production Cluster Orchestration',
    category: 'Cloud & DevOps',
    level: 'Advanced',
    instructor: 'James Vance',
    rating: 4.9,
    reviews: '4,150',
    duration: '46 Hours',
    lectures: '160 Lectures',
    price: 2799, originalPrice: 7499,
    badge: 'Updated',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3'
  },
  {
    title: 'Terraform & Infrastructure as Code (IaC) Multi-Cloud Engineering',
    category: 'Cloud & DevOps',
    level: 'Intermediate',
    instructor: 'Mark Evans',
    rating: 4.8,
    reviews: '2,900',
    duration: '32 Hours',
    lectures: '110 Lectures',
    price: 2299, originalPrice: 5999,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31'
  },
  {
    title: 'CI/CD Pipelines with GitHub Actions, Docker & ArgoCD',
    category: 'Cloud & DevOps',
    level: 'Beginner',
    instructor: 'Alex Morrison',
    rating: 4.8,
    reviews: '3,400',
    duration: '26 Hours',
    lectures: '90 Lectures',
    price: 1999, originalPrice: 5499,
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb'
  },
  {
    title: 'Site Reliability Engineering (SRE): Monitoring Prometheus & Grafana',
    category: 'Cloud & DevOps',
    level: 'Advanced',
    instructor: 'James Vance',
    rating: 4.8,
    reviews: '1,780',
    duration: '34 Hours',
    lectures: '115 Lectures',
    price: 2499, originalPrice: 6999,
    badge: 'Pro Pick',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
  },

  // Cyber Security
  {
    title: 'Certified Ethical Hacker & Cloud Penetration Testing Labs',
    category: 'Cyber Security',
    level: 'Advanced',
    instructor: 'Marcus Brody',
    rating: 4.8,
    reviews: '3,100',
    duration: '40 Hours',
    lectures: '135 Lectures',
    price: 2799, originalPrice: 7499,
    badge: 'Pro Pick',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3'
  },
  {
    title: 'CompTIA Security+ (SY0-701) Comprehensive Guide',
    category: 'Cyber Security',
    level: 'Beginner',
    instructor: 'Tariq Al-Mansoor',
    rating: 4.8,
    reviews: '4,900',
    duration: '45 Hours',
    lectures: '160 Lectures',
    price: 2299, originalPrice: 5999,
    badge: 'Certified',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87'
  },
  {
    title: 'SOC Analyst Tier 1 & 2 Blueprint with Splunk, ELK & Wazuh',
    category: 'Cyber Security',
    level: 'Intermediate',
    instructor: 'Marcus Brody',
    rating: 4.9,
    reviews: '3,200',
    duration: '42 Hours',
    lectures: '140 Lectures',
    price: 2799, originalPrice: 7499,
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3'
  },
  {
    title: 'Cloud Security Architecture on AWS, GCP & Azure Environments',
    category: 'Cyber Security',
    level: 'Advanced',
    instructor: 'James Vance',
    rating: 4.8,
    reviews: '2,400',
    duration: '36 Hours',
    lectures: '120 Lectures',
    price: 2999, originalPrice: 7499,
    badge: 'Hot',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c'
  },
  {
    title: 'Malware Reverse Engineering & x86 Disassembly Labs',
    category: 'Cyber Security',
    level: 'Advanced',
    instructor: 'David Reynolds',
    rating: 5.0,
    reviews: '1,650',
    duration: '46 Hours',
    lectures: '150 Lectures',
    price: 3499, originalPrice: 7999,
    badge: 'Elite',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b'
  },

  // Mobile App
  {
    title: 'Cross-Platform Flutter 3 & Clean Bloc Architecture',
    category: 'Mobile App',
    level: 'Beginner',
    instructor: 'Rachel Green',
    rating: 4.8,
    reviews: '3,450',
    duration: '38 Hours',
    lectures: '130 Lectures',
    price: 1999, originalPrice: 5499,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c'
  },
  {
    title: 'React Native, Expo & NativeWind Mobile Development',
    category: 'Mobile App',
    level: 'Intermediate',
    instructor: 'Mark Evans',
    rating: 4.9,
    reviews: '3,800',
    duration: '40 Hours',
    lectures: '145 Lectures',
    price: 2499, originalPrice: 5999,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4'
  },
  {
    title: 'SwiftUI & iOS 18: Modern MVVM Architecture and SwiftData',
    category: 'Mobile App',
    level: 'Intermediate',
    instructor: 'Lucas Vance',
    rating: 4.9,
    reviews: '2,900',
    duration: '44 Hours',
    lectures: '160 Lectures',
    price: 2799, originalPrice: 7499,
    badge: 'Hot',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998'
  },
  {
    title: 'Kotlin & Jetpack Compose Modern Android App Architecture',
    category: 'Mobile App',
    level: 'Intermediate',
    instructor: 'Alex Morrison',
    rating: 4.8,
    reviews: '2,750',
    duration: '42 Hours',
    lectures: '150 Lectures',
    price: 2499, originalPrice: 6999,
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb'
  },
  {
    title: 'Micro-Animations in React Native with Reanimated 3',
    category: 'Mobile App',
    level: 'Advanced',
    instructor: 'Sophia Turner',
    rating: 4.9,
    reviews: '1,920',
    duration: '25 Hours',
    lectures: '85 Lectures',
    price: 1999, originalPrice: 5499,
    badge: 'Visual',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4'
  }
];

// ==========================================
// 3. GENERATE EXACTLY 150 COURSE ITEMS
// ==========================================
export const courseThreeItems = Array.from({ length: 150 }, (_, idx) => {
  const tpl = baseCourseTemplates[idx % baseCourseTemplates.length];
  const cycle = Math.floor(idx / baseCourseTemplates.length);
  const title = cycle === 0 ? tpl.title : `${tpl.title} [Series Track ${cycle + 1}]`;

  return {
    id: idx + 1,
    title,
    category: tpl.category,
    level: tpl.level,
    instructor: tpl.instructor,
    rating: parseFloat((tpl.rating - ((idx % 3) * 0.05)).toFixed(1)),
    reviews: `${(parseFloat(tpl.reviews.replace(',', '')) + (idx * 20)).toLocaleString()}`,
    duration: tpl.duration,
    lectures: tpl.lectures,
    price: parseFloat((tpl.price + (cycle * 2.5)).toFixed(2)),
    originalPrice: parseFloat((tpl.originalPrice + (cycle * 5)).toFixed(2)),
    badge: tpl.badge,
    image: `${tpl.image}?auto=format&fit=crop&w=600&q=80`
  };
});

// ========================================================
// 4. INSTRUCTOR DIRECTORY (60 Items Total)
// ========================================================
const instructorCatalog = [
  'Alex Morrison', 'Elena Rostova', 'Dr. Emily Watson', 'James Vance',
  'Marcus Brody', 'Rachel Green', 'Vikram Mehta', 'Mark Evans',
  'Sophia Turner', 'David Reynolds', 'Clara Oswald', 'Arthur Dent'
];

export const courseThreeInstructors = Array.from({ length: 60 }, (_, idx) => {
  const name = instructorCatalog[idx % instructorCatalog.length];
  return {
    id: idx + 1,
    name: `${name} ${idx >= 12 ? `(Cohort ${Math.floor(idx / 12) + 1})` : ''}`,
    role: ['Senior Software Architect', 'Principal UX Researcher', 'Lead AI Scientist', 'DevOps & SRE Director', 'SecOps Director'][idx % 5],
    rating: (4.7 + ((idx % 4) * 0.07)).toFixed(1),
    totalStudents: `${(idx + 1) * 2 + 10}k+ Students`,
    coursesCount: (idx % 7) + 3,
    avatar: `https://images.unsplash.com/photo-${['1573496359142-b8d87734a5a2', '1560250097-0b93528c311a', '1580489944761-15a19d654956', '1507003211169-0a1dd7228f2d'][idx % 4]}?auto=format&fit=crop&w=300&q=80`
  };
});

// ========================================================
// 5. STUDENT COURSE REVIEWS (60 Items Total)
// ========================================================
const sampleReviews = [
  'The sidebar filters made it so easy to find courses matching my exact budget and skill level. The projects are production-ready.',
  'Easily the most comprehensive guide to micro-frontends and full-stack cloud deployments. Mentors reply quickly in Discord.',
  'Figma variable tokens were explained thoroughly with direct code hand-off examples. Transformed how our agency works.',
  'Passing real technical interview assessments became straightforward after working through the hands-on labs.',
  'Well documented GitHub repositories with active bug fixes. The video lessons get straight to the point.'
];

export const courseThreeReviews = Array.from({ length: 60 }, (_, idx) => ({
  id: idx + 1,
  courseId: (idx % 150) + 1,
  studentName: ['Julian M.', 'Pooja K.', 'Carlos R.', 'Amina S.', 'Lukas B.', 'Tanya N.'][idx % 6] + ` #${idx + 1}`,
  courseTitle: courseThreeItems[idx % courseThreeItems.length].title,
  rating: 5,
  date: `Oct ${(idx % 28) + 1}, 2026`,
  comment: sampleReviews[idx % sampleReviews.length]
}));