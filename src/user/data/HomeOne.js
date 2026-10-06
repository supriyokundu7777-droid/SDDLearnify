// ==========================================
// 1. CATEGORIES DATA (12 Items)
// ==========================================
export const categories = [
  { id: 1, title: 'Web Development', count: '140+ Courses', icon: '💻', color: 'info' },
  { id: 2, title: 'UI/UX Design', count: '85+ Courses', icon: '🎨', color: 'warning' },
  { id: 3, title: 'Data Science & AI', count: '110+ Courses', icon: '🤖', color: 'success' },
  { id: 4, title: 'Digital Marketing', count: '65+ Courses', icon: '📈', color: 'danger' },
  { id: 5, title: 'Cloud & DevOps', count: '75+ Courses', icon: '☁️', color: 'primary' },
  { id: 6, title: 'Cyber Security', count: '55+ Courses', icon: '🛡️', color: 'secondary' },
  { id: 7, title: 'Mobile App Dev', count: '70+ Courses', icon: '📱', color: 'info' },
  { id: 8, title: 'Game Development', count: '45+ Courses', icon: '🎮', color: 'purple' },
  { id: 9, title: 'Business & Finance', count: '90+ Courses', icon: '💼', color: 'success' },
  { id: 10, title: 'Blockchain & Web3', count: '40+ Courses', icon: '⛓️', color: 'warning' },
  { id: 11, title: 'Software Testing (QA)', count: '50+ Courses', icon: '🧪', color: 'danger' },
  { id: 12, title: 'Video & Animation', count: '60+ Courses', icon: '🎬', color: 'primary' }
];

// Helper course generator to assemble exactly 100 courses with unique real-world titles
const courseTemplates = [
  // Web Dev
  { t: 'Full-Stack Web Development Bootcamp', c: 'Web Dev', i: 'Alex Morrison', r: '4.9', rev: '3.4k', p: '₹2,499', op: '₹4,499', b: 'Best Seller', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
  { t: 'React 19 & Next.js Masterclass', c: 'Web Dev', i: 'Mark Evans', r: '4.9', rev: '2.8k', p: '₹2,299', op: '₹3,999', b: 'Hot', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee' },
  { t: 'Node.js, Express & MongoDB Microservices', c: 'Web Dev', i: 'Rachel Green', r: '4.8', rev: '1.9k', p: '₹1,999', op: '₹3,499', b: 'Popular', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c' },
  { t: 'Modern TypeScript for Large-Scale Apps', c: 'Web Dev', i: 'David Reynolds', r: '4.9', rev: '1.5k', p: '₹1,799', op: '₹2,999', b: 'Trending', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97' },
  { t: 'Vue 3 & Nuxt Composition Architecture', c: 'Web Dev', i: 'Clara Oswald', r: '4.7', rev: '920', p: '₹1,499', op: '₹2,799', b: 'Updated', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8' },
  { t: 'MERN Stack Realtime Chat Application', c: 'Web Dev', i: 'Alex Morrison', r: '4.8', rev: '2.1k', p: '₹2,499', op: '₹4,499', b: 'Best Seller', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c' },
  { t: 'Tailwind CSS & Modern Responsive Design', c: 'Web Dev', i: 'Sophia Turner', r: '4.9', rev: '3.1k', p: '₹1,299', op: '₹2,499', b: 'Top Rated', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998' },
  { t: 'Angular Complete Enterprise Guide', c: 'Web Dev', i: 'Vikram Mehta', r: '4.6', rev: '1.2k', p: '₹2,299', op: '₹3,999', b: 'Featured', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6' },
  { t: 'GraphQL & Apollo Client In-Depth', c: 'Web Dev', i: 'Lucas Vance', r: '4.8', rev: '870', p: '₹1,999', op: '₹3,499', b: 'New', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e' },
  { t: 'Django REST Framework & React Integration', c: 'Web Dev', i: 'Tariq Al-Mansoor', r: '4.7', rev: '1.1k', p: '₹1,999', op: '₹3,499', b: 'Popular', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5' },
  
  // Design & UI/UX
  { t: 'UI/UX Design Masterclass from Scratch', c: 'Design', i: 'Sophia Turner', r: '4.8', rev: '1.8k', p: '₹1,999', op: '₹3,499', b: 'Popular', img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e' },
  { t: 'Figma to Code: Design Systems & Tokens', c: 'Design', i: 'Elena Rostova', r: '4.9', rev: '2.5k', p: '₹2,299', op: '₹3,999', b: 'Best Seller', img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159' },
  { t: 'Product Design Principles & User Research', c: 'Design', i: 'Elena Rostova', r: '4.7', rev: '1.4k', p: '₹1,799', op: '₹3,499', b: 'Featured', img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12' },
  { t: 'Motion Graphics with After Effects', c: 'Design', i: 'Chloe Bennet', r: '4.8', rev: '1.1k', p: '₹2,499', op: '₹4,499', b: 'Top Rated', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f' },
  { t: 'Mobile App UX: iOS & Android Guidelines', c: 'Design', i: 'Sophia Turner', r: '4.9', rev: '1.7k', p: '₹1,999', op: '₹3,499', b: 'Trending', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c' },
  { t: 'Wireframing & Prototyping Workshop', c: 'Design', i: 'Lucas Vance', r: '4.6', rev: '820', p: '₹1,499', op: '₹2,799', b: 'New', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4' },
  { t: 'Design Systems for Scalable Web Apps', c: 'Design', i: 'Elena Rostova', r: '4.9', rev: '2.0k', p: '₹2,799', op: '₹4,999', b: 'Best Seller', img: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2' },
  { t: 'Graphic Design Masterclass: Photoshop & Illustrator', c: 'Design', i: 'Chloe Bennet', r: '4.8', rev: '3.6k', p: '₹1,799', op: '₹2,999', b: 'Popular', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d' },
  { t: 'Web Accessibility (a11y) & Inclusive UX', c: 'Design', i: 'Dr. Emily Watson', r: '4.9', rev: '940', p: '₹1,499', op: '₹2,499', b: 'Essential', img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b' },
  { t: '3D UI Design with Spline & Three.js', c: 'Design', i: 'Arthur Dent', r: '4.8', rev: '1.3k', p: '₹2,499', op: '₹4,499', b: 'Hot', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe' },

  // Data Science & AI
  { t: 'Machine Learning & Python for Beginners', c: 'AI & Data', i: 'David Reynolds', r: '5.0', rev: '3.1k', p: '₹2,999', op: '₹4,999', b: 'Featured', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c' },
  { t: 'Deep Learning with PyTorch & TensorFlow', c: 'AI & Data', i: 'Dr. Emily Watson', r: '4.9', rev: '2.6k', p: '₹3,499', op: '₹6,099', b: 'Best Seller', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5' },
  { t: 'Natural Language Processing & LLM Fine-Tuning', c: 'AI & Data', i: 'Dr. Emily Watson', r: '4.9', rev: '2.2k', p: '₹3,499', op: '₹6,599', b: 'Hot', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995' },
  { t: 'Data Analytics with SQL & PowerBI', c: 'AI & Data', i: 'Vikram Mehta', r: '4.8', rev: '4.1k', p: '₹1,999', op: '₹3,999', b: 'Best Seller', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f' },
  { t: 'Computer Vision with OpenCV & YOLO', c: 'AI & Data', i: 'David Reynolds', r: '4.8', rev: '1.6k', p: '₹2,799', op: '₹4,999', b: 'Trending', img: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a' },
  { t: 'Generative AI & Prompt Engineering Masterclass', c: 'AI & Data', i: 'Rachel Green', r: '4.7', rev: '3.8k', p: '₹1,799', op: '₹3,499', b: 'Popular', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c' },
  { t: 'Data Structures & Algorithms in Python', c: 'AI & Data', i: 'David Reynolds', r: '4.9', rev: '4.5k', p: '₹2,299', op: '₹4,499', b: 'Must Have', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4' },
  { t: 'Applied Statistics & Probability for Data Science', c: 'AI & Data', i: 'Dr. Emily Watson', r: '4.8', rev: '1.2k', p: '₹1,999', op: '₹3,499', b: 'Academic', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71' },
  { t: 'Big Data Processing with Apache Spark & Kafka', c: 'AI & Data', i: 'Vikram Mehta', r: '4.7', rev: '980', p: '₹2,999', op: '₹4,999', b: 'Advanced', img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3' },
  { t: 'R Programming for Statistical Computing', c: 'AI & Data', i: 'Clara Oswald', r: '4.6', rev: '820', p: '₹1,799', op: '₹2,999', b: 'Updated', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952' },

  // Cloud & DevOps
  { t: 'AWS Certified Solutions Architect Associate 2026', c: 'Cloud & DevOps', i: 'James Vance', r: '4.9', rev: '5.2k', p: '₹2,999', op: '₹5,999', b: 'Best Seller', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa' },
  { t: 'Docker & Kubernetes: Enterprise Container Guide', c: 'Cloud & DevOps', i: 'James Vance', r: '4.9', rev: '3.3k', p: '₹2,499', op: '₹4,499', b: 'Hot', img: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3' },
  { t: 'CI/CD Pipelines with GitHub Actions & GitLab', c: 'Cloud & DevOps', i: 'Mark Evans', r: '4.8', rev: '1.9k', p: '₹1,999', op: '₹3,999', b: 'Trending', img: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb' },
  { t: 'Terraform & Infrastructure as Code (IaC)', c: 'Cloud & DevOps', i: 'James Vance', r: '4.8', rev: '1.4k', p: '₹2,299', op: '₹3,999', b: 'Popular', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31' },
  { t: 'Google Cloud Platform (GCP) Fundamentals', c: 'Cloud & DevOps', i: 'Tariq Al-Mansoor', r: '4.7', rev: '1.2k', p: '₹2,299', op: '₹3,999', b: 'Featured', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8' },
  { t: 'Microsoft Azure Administrator (AZ-104) Prep', c: 'Cloud & DevOps', i: 'Vikram Mehta', r: '4.8', rev: '2.1k', p: '₹2,799', op: '₹4,999', b: 'Certified', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f' },
  { t: 'Linux Server Administration & Bash Scripting', c: 'Cloud & DevOps', i: 'Alex Morrison', r: '4.9', rev: '4.2k', p: '₹1,499', op: '₹2,999', b: 'Foundational', img: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97' },
  { t: 'Site Reliability Engineering (SRE) Principles', c: 'Cloud & DevOps', i: 'James Vance', r: '4.7', rev: '890', p: '₹2,499', op: '₹4,499', b: 'Advanced', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d' },
  { t: 'Monitoring & Alerting with Prometheus & Grafana', c: 'Cloud & DevOps', i: 'Mark Evans', r: '4.8', rev: '1.1k', p: '₹1,999', op: '₹3,499', b: 'Updated', img: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83' },
  { t: 'Serverless Architecture with AWS Lambda & Node', c: 'Cloud & DevOps', i: 'Rachel Green', r: '4.8', rev: '1.5k', p: '₹2,299', op: '₹3,999', b: 'Popular', img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0' },

  // Cyber Security
  { t: 'Certified Ethical Hacking (CEH) v13 Prep', c: 'Cyber Security', i: 'Marcus Brody', r: '4.9', rev: '3.7k', p: '₹2,999', op: '₹6,099', b: 'Best Seller', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3' },
  { t: 'Web Application Penetration Testing (Bug Bounty)', c: 'Cyber Security', i: 'Marcus Brody', r: '4.9', rev: '2.9k', p: '₹2,799', op: '₹4,999', b: 'Hot', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b' },
  { t: 'CompTIA Security+ Exam Complete Blueprint', c: 'Cyber Security', i: 'Tariq Al-Mansoor', r: '4.8', rev: '3.2k', p: '₹2,499', op: '₹4,499', b: 'Certified', img: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87' },
  { t: 'Network Defense & Wireshark Deep Packet Analysis', c: 'Cyber Security', i: 'Marcus Brody', r: '4.7', rev: '1.3k', p: '₹1,999', op: '₹3,499', b: 'Popular', img: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c' },
  { t: 'Cryptography & Data Security Engineering', c: 'Cyber Security', i: 'Dr. Emily Watson', r: '4.8', rev: '960', p: '₹2,299', op: '₹3,999', b: 'Featured', img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d' },
  { t: 'SOC Analyst L1 Bootcamp (Splunk & SIEM)', c: 'Cyber Security', i: 'Marcus Brody', r: '4.8', rev: '1.8k', p: '₹2,799', op: '₹4,999', b: 'Trending', img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab' },
  { t: 'Malware Analysis & Reverse Engineering', c: 'Cyber Security', i: 'David Reynolds', r: '4.9', rev: '810', p: '₹3,499', op: '₹6,299', b: 'Advanced', img: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0' },
  { t: 'Zero Trust Architecture Implementation', c: 'Cyber Security', i: 'Tariq Al-Mansoor', r: '4.7', rev: '750', p: '₹2,499', op: '₹4,499', b: 'New', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766' },
  { t: 'Cloud Security on AWS & Azure Environments', c: 'Cyber Security', i: 'James Vance', r: '4.8', rev: '1.4k', p: '₹2,499', op: '₹4,499', b: 'Hot', img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698' },
  { t: 'Python Scripting for Penetration Testing', c: 'Cyber Security', i: 'Alex Morrison', r: '4.9', rev: '2.5k', p: '₹1,999', op: '₹3,499', b: 'Popular', img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e' },

  // Mobile App Dev
  { t: 'Flutter & Dart: Build iOS and Android Apps', c: 'Mobile App', i: 'Rachel Green', r: '4.9', rev: '4.1k', p: '₹2,499', op: '₹4,499', b: 'Best Seller', img: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715' },
  { t: 'React Native & Expo: Complete Cross-Platform Guide', c: 'Mobile App', i: 'Mark Evans', r: '4.8', rev: '3.2k', p: '₹2,299', op: '₹3,999', b: 'Popular', img: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4' },
  { t: 'SwiftUI & iOS 18 Development Essentials', c: 'Mobile App', i: 'Lucas Vance', r: '4.9', rev: '1.9k', p: '₹2,799', op: '₹4,999', b: 'Featured', img: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f' },
  { t: 'Kotlin & Jetpack Compose Android Architecture', c: 'Mobile App', i: 'Alex Morrison', r: '4.8', rev: '2.2k', p: '₹2,499', op: '₹4,499', b: 'Hot', img: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb' },
  { t: 'Mobile Backend with Firebase & Appwrite', c: 'Mobile App', i: 'Rachel Green', r: '4.7', rev: '1.3k', p: '₹1,799', op: '₹3,499', b: 'Updated', img: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634' },
  { t: 'App Store Optimization (ASO) & Launch Playbook', c: 'Mobile App', i: 'Sophia Turner', r: '4.6', rev: '890', p: '₹1,499', op: '₹2,499', b: 'Quick Learn', img: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b' },
  { t: 'Clean Architecture in Mobile Engineering', c: 'Mobile App', i: 'Mark Evans', r: '4.9', rev: '1.1k', p: '₹2,299', op: '₹3,999', b: 'Advanced', img: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f' },
  { t: 'Augmented Reality (AR) with Unity & ARKit', c: 'Mobile App', i: 'Arthur Dent', r: '4.8', rev: '920', p: '₹2,799', op: '₹4,999', b: 'Trending', img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620' },
  { t: 'Automated Testing for Flutter & React Native', c: 'Mobile App', i: 'Rachel Green', r: '4.7', rev: '680', p: '₹1,799', op: '₹2,999', b: 'New', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3' },
  { t: 'Publishing Mobile Games to Play Store & App Store', c: 'Mobile App', i: 'Arthur Dent', r: '4.8', rev: '1.5k', p: '₹1,999', op: '₹3,499', b: 'Popular', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9' },

  // Digital Marketing
  { t: 'Digital Marketing Specialist: SEO, SEM & Ads', c: 'Marketing', i: 'Sarah Jenkins', r: '4.8', rev: '4.2k', p: '₹1,799', op: '₹3,499', b: 'Best Seller', img: 'https://images.unsplash.com/photo-1556656793-08538906a9f8' },
  { t: 'Advanced SEO & Content Strategy Blueprint', c: 'Marketing', i: 'Sarah Jenkins', r: '4.9', rev: '2.5k', p: '₹1,999', op: '₹3,999', b: 'Top Rated', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df' },
  { t: 'Google Ads (PPC) & Performance Marketing 2026', c: 'Marketing', i: 'Vikram Mehta', r: '4.8', rev: '2.8k', p: '₹2,299', op: '₹3,999', b: 'Hot', img: 'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7' },
  { t: 'Social Media Growth Engine: TikTok & Instagram', c: 'Marketing', i: 'Chloe Bennet', r: '4.7', rev: '3.6k', p: '₹1,499', op: '₹2,799', b: 'Trending', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7' },
  { t: 'Email Marketing & Cold Outreach Conversion', c: 'Marketing', i: 'Sarah Jenkins', r: '4.8', rev: '1.4k', p: '₹1,499', op: '₹2,499', b: 'Essential', img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5' },
  { t: 'Copywriting That Converts: Landing Pages & Emails', c: 'Marketing', i: 'Clara Oswald', r: '4.9', rev: '3.3k', p: '₹1,799', op: '₹2,999', b: 'Popular', img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a' },
  { t: 'Affiliate Marketing & Niche Blogging Mastery', c: 'Marketing', i: 'Sarah Jenkins', r: '4.6', rev: '1.9k', p: '₹1,299', op: '₹2,499', b: 'Passive Income', img: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0' },
  { t: 'Google Analytics 4 (GA4) Certification Training', c: 'Marketing', i: 'Vikram Mehta', r: '4.8', rev: '2.1k', p: '₹1,999', op: '₹3,499', b: 'Certified', img: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48' },
  { t: 'Brand Strategy & Visual Positioning Guide', c: 'Marketing', i: 'Elena Rostova', r: '4.9', rev: '1.2k', p: '₹2,299', op: '₹3,999', b: 'Featured', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475' },
  { t: 'B2B Lead Generation on LinkedIn & Sales Navigator', c: 'Marketing', i: 'Sarah Jenkins', r: '4.7', rev: '1.7k', p: '₹1,999', op: '₹3,499', b: 'Updated', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0' },

  // Game Development
  { t: 'Unity 6 Complete Game Development Blueprint', c: 'Game Dev', i: 'Arthur Dent', r: '4.9', rev: '3.9k', p: '₹2,799', op: '₹4,999', b: 'Best Seller', img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44' },
  { t: 'Unreal Engine 5.5: Blueprint & C++ Action RPG', c: 'Game Dev', i: 'Arthur Dent', r: '4.9', rev: '3.1k', p: '₹2,999', op: '₹5,999', b: 'Hot', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420' },
  { t: 'Blender 4.0 3D Modeling & Character Sculpting', c: 'Game Dev', i: 'Chloe Bennet', r: '4.8', rev: '4.4k', p: '₹1,999', op: '₹3,999', b: 'Top Rated', img: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0' },
  { t: 'Godot 4 2D & 3D Game Programming Guide', c: 'Game Dev', i: 'Arthur Dent', r: '4.8', rev: '1.8k', p: '₹1,799', op: '₹3,499', b: 'Open Source', img: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a' },
  { t: 'Game Physics & Math for Programmers', c: 'Game Dev', i: 'David Reynolds', r: '4.9', rev: '970', p: '₹2,299', op: '₹3,999', b: 'Essential', img: 'https://images.unsplash.com/photo-1509228468518-180dd4864904' },
  { t: 'Multiplayer Game Architecture with Photon & Unity', c: 'Game Dev', i: 'Arthur Dent', r: '4.7', rev: '1.2k', p: '₹2,799', op: '₹4,999', b: 'Advanced', img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0' },
  { t: 'Pixel Art Animation for Indie Games', c: 'Game Dev', i: 'Sophia Turner', r: '4.9', rev: '2.6k', p: '₹1,299', op: '₹2,499', b: 'Creative', img: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51' },
  { t: 'Shader Programming with HLSL & GLSL', c: 'Game Dev', i: 'David Reynolds', r: '4.8', rev: '890', p: '₹2,499', op: '₹4,499', b: 'Masterclass', img: 'https://images.unsplash.com/photo-1563770660941-20978e870e26' },
  { t: 'Level Design & Environmental Storytelling', c: 'Game Dev', i: 'Elena Rostova', r: '4.7', rev: '1.1k', p: '₹1,999', op: '₹3,499', b: 'Featured', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704' },
  { t: 'Sound Design & Audio Implementation with FMOD', c: 'Game Dev', i: 'Clara Oswald', r: '4.8', rev: '760', p: '₹1,999', op: '₹3,499', b: 'Unique', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4' },

  // Software Testing & QA
  { t: 'Selenium & Cypress Automation Masterclass', c: 'QA & Testing', i: 'Tariq Al-Mansoor', r: '4.8', rev: '2.4k', p: '₹2,299', op: '₹3,999', b: 'Best Seller', img: 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40' },
  { t: 'Playwright for Modern Web App End-to-End Tests', c: 'QA & Testing', i: 'Mark Evans', r: '4.9', rev: '1.7k', p: '₹1,999', op: '₹3,999', b: 'Trending', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3' },
  { t: 'API Testing with Postman & Newman Automation', c: 'QA & Testing', i: 'Rachel Green', r: '4.8', rev: '3.1k', p: '₹1,499', op: '₹2,799', b: 'Popular', img: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7' },
  { t: 'Performance & Load Testing with JMeter & k6', c: 'QA & Testing', i: 'James Vance', r: '4.7', rev: '1.2k', p: '₹2,299', op: '₹3,999', b: 'Advanced', img: 'https://images.unsplash.com/photo-1544890225-2f3faec4cd60' },
  { t: 'Mobile Test Automation with Appium 2.0', c: 'QA & Testing', i: 'Alex Morrison', r: '4.7', rev: '990', p: '₹2,499', op: '₹4,499', b: 'Featured', img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f' },
  { t: 'ISTQB Certified Tester Foundation Level (CTFL) Prep', c: 'QA & Testing', i: 'Tariq Al-Mansoor', r: '4.9', rev: '2.8k', p: '₹1,999', op: '₹3,499', b: 'Certified', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173' },
  { t: 'Security QA: SAST, DAST & Dependency Scanning', c: 'QA & Testing', i: 'Marcus Brody', r: '4.8', rev: '830', p: '₹2,799', op: '₹4,999', b: 'Security', img: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f' },
  { t: 'Test-Driven Development (TDD) in React & Node', c: 'QA & Testing', i: 'Mark Evans', r: '4.9', rev: '1.5k', p: '₹1,999', op: '₹3,499', b: 'Pro Level', img: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d' },
  { t: 'BDD with Cucumber & Gherkin Framework', c: 'QA & Testing', i: 'Rachel Green', r: '4.6', rev: '740', p: '₹1,799', op: '₹2,999', b: 'Updated', img: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05' },
  { t: 'Continuous QA in Agile & DevOps Pipelines', c: 'QA & Testing', i: 'James Vance', r: '4.8', rev: '1.1k', p: '₹2,299', op: '₹3,999', b: 'Essential', img: 'https://images.unsplash.com/photo-1618042164219-62c820f10723' },

  // Blockchain & Web3
  { t: 'Solidity & Ethereum Smart Contract Engineering', c: 'Web3', i: 'Lucas Vance', r: '4.9', rev: '2.4k', p: '₹2,999', op: '₹5,999', b: 'Best Seller', img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0' },
  { t: 'Full-Stack Web3 DApp Development (Ethers.js)', c: 'Web3', i: 'Mark Evans', r: '4.8', rev: '1.8k', p: '₹2,799', op: '₹4,999', b: 'Hot', img: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247' },
  { t: 'Rust & Solana Smart Contract Architecture', c: 'Web3', i: 'David Reynolds', r: '4.9', rev: '1.3k', p: '₹3,499', op: '₹6,599', b: 'Trending', img: 'https://images.unsplash.com/photo-1639762681057-408e52192e55' },
  { t: 'DeFi Protocol Architecture & Liquidity Pools', c: 'Web3', i: 'Lucas Vance', r: '4.7', rev: '940', p: '₹2,999', op: '₹5,799', b: 'Advanced', img: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7' },
  { t: 'Smart Contract Auditing & Security Vulnerabilities', c: 'Web3', i: 'Marcus Brody', r: '4.8', rev: '1.1k', p: '₹3,499', op: '₹7,099', b: 'Elite', img: 'https://images.unsplash.com/photo-1644361566696-3d442b5b482a' },
  { t: 'NFT Marketplace Development with Next.js & IPFS', c: 'Web3', i: 'Alex Morrison', r: '4.7', rev: '1.6k', p: '₹2,299', op: '₹3,999', b: 'Popular', img: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52' },
  { t: 'Zero-Knowledge Proofs (ZK-SNARKs) Fundamentals', c: 'Web3', i: 'Dr. Emily Watson', r: '4.9', rev: '680', p: '₹3,499', op: '₹6,599', b: 'Cutting Edge', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e' },
  { t: 'Hyperledger Fabric for Enterprise Blockchains', c: 'Web3', i: 'Vikram Mehta', r: '4.6', rev: '790', p: '₹2,799', op: '₹4,999', b: 'Enterprise', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc' },
  { t: 'Web3 Security: Preventing Reentrancy & Frontrunning', c: 'Web3', i: 'Marcus Brody', r: '4.8', rev: '850', p: '₹2,999', op: '₹5,699', b: 'Must Have', img: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8' },
  { t: 'Bitcoin Core & Lightning Network Deep Dive', c: 'Web3', i: 'Lucas Vance', r: '4.8', rev: '990', p: '₹2,499', op: '₹4,499', b: 'Featured', img: 'https://images.unsplash.com/photo-1498049860654-af1a5c566876' }
];

// ==========================================
// 2. FEATURED COURSES (100 Items Total)
// ==========================================
export const featuredCourses = courseTemplates.map((item, index) => ({
  id: index + 1,
  title: item.t,
  category: item.c,
  instructor: item.i,
  rating: item.r,
  reviews: item.rev,
  price: item.p,
  originalPrice: item.op,
  badge: item.b,
  image: `${item.img}?auto=format&fit=crop&w=600&q=80`
}));

// ==========================================
// 3. INSTRUCTORS DATA (50 Items Total)
// ==========================================
const instructorNames = [
  'Dr. Emily Watson', 'Mark Evans', 'Elena Rostova', 'Alex Morrison', 'Sophia Turner', 
  'David Reynolds', 'Rachel Green', 'James Vance', 'Marcus Brody', 'Vikram Mehta', 
  'Sarah Jenkins', 'Arthur Dent', 'Chloe Bennet', 'Lucas Vance', 'Tariq Al-Mansoor', 
  'Clara Oswald', 'Jonathan Bell', 'Fiona Gallagher', 'Liam Neeson', 'Mia Khalifa Al-Saud',
  'Kenji Sato', 'Aarav Sharma', 'Priya Patel', 'Oliver Twist', 'Hannah Montana',
  'Nathan Drake', 'Chloe Frazer', 'Joel Miller', 'Ellie Williams', 'Alan Wake',
  'Saga Anderson', 'Leon Kennedy', 'Claire Redfield', 'Jill Valentine', 'Chris Redfield',
  'Gordon Freeman', 'Alyx Vance', 'Geralt of Rivia', 'Yennefer of Vengerberg', 'Triss Merigold',
  'Samus Aran', 'Peter Parker', 'Miles Morales', 'Gwen Stacy', 'Bruce Wayne',
  'Clark Kent', 'Diana Prince', 'Barry Allen', 'Victor Stone', 'Hal Jordan'
];

const instructorRoles = [
  'Senior React Developer', 'AI & Machine Learning Researcher', 'Lead Product Designer',
  'Full-Stack Cloud Architect', 'UI/UX Specialist & Design Lead', 'Data Scientist & Python Expert',
  'Mobile Developer (Flutter/iOS)', 'DevOps & AWS Certified Specialist', 'Ethical Hacker & SecOps',
  'Data Analytics & BI Consultant', 'Growth Marketer & SEO Strategist', 'Unity & Unreal Game Developer'
];

const instructorImages = [
  'photo-1573496359142-b8d87734a5a2', // Dr. Emily Watson
  'photo-1560250097-0b93528c311a', // Mark Evans
  'photo-1580489944761-15a19d654956', // Elena Rostova
  'photo-1507003211169-0a1dd7228f2d', // Alex Morrison
  'photo-1534528741775-53994a69daeb', // Sophia Turner
  'photo-1500648767791-00dcc994a43e', // David Reynolds
  'photo-1494790108377-be9c29b29330', // Rachel Green
  'photo-1519085360753-af0119f7cbe7', // James Vance
  'photo-1472099645785-5658abf4ff4e', // Marcus Brody
  'photo-1506794778202-cad84cf45f1d', // Vikram Mehta
  'photo-1573497019940-1c28c88b4f3e', // Sarah Jenkins
  'photo-1513956589380-bad6acb9b9d4', // Arthur Dent
  'photo-1573496799652-408c2ac9fe98', // Chloe Bennet
  'photo-1522075469751-3a6694fb2f61', // Lucas Vance
  'photo-1501196354995-cbb51c65aaea', // Tariq Al-Mansoor
  'photo-1573497491765-dccce02b29df', // Clara Oswald
  'photo-1566492031773-4f4e44671857', // Jonathan Bell
  'photo-1544005313-94ddf0286df2', // Fiona Gallagher
  'photo-1492562080023-ab3db95bfbce', // Liam Neeson
  'photo-1567532939604-b6b5b0db2604', // Mia Khalifa Al-Saud
  'photo-1507591064344-4c6ce005b128', // Kenji Sato
  'photo-1522529599102-193c0d76b5b6', // Aarav Sharma
  'photo-1508214751196-bcfd4ca60f91', // Priya Patel
  'photo-1530268729831-4b0b9e170218', // Oliver Twist
  'photo-1517841905240-472988babdf9', // Hannah Montana
  'photo-1544717305-2782549b5136', // Nathan Drake
  'photo-1524504388940-b1c1722653e1', // Chloe Frazer
  'photo-1557862921-37829c790f19', // Joel Miller
  'photo-1531746020798-e6953c6e8e04', // Ellie Williams
  'photo-1544717302-de2939b7ef71', // Alan Wake
  'photo-1529626455594-4ff0802cfb7e', // Saga Anderson
  'photo-1527980965255-d3b416303d12', // Leon Kennedy
  'photo-1488426862026-3ee34a7d66df', // Claire Redfield
  'photo-1502685104226-ee32379fefbe', // Jill Valentine
  'photo-1542909168-82c3e7fdca5c', // Chris Redfield
  'photo-1521119989659-a83eee488004', // Gordon Freeman
  'photo-1539571696357-5a69c17a67c6', // Alyx Vance
  'photo-1570295999919-56ceb5ecca61', // Geralt of Rivia
  'photo-1509967419530-da38b4704bc6', // Yennefer of Vengerberg
  'photo-1519699047748-de8e457a634e', // Triss Merigold
  'photo-1548142813-c348350df52b', // Samus Aran
  'photo-1543610892-0b1f7e6d8ac1', // Peter Parker
  'photo-1535713875002-d1d0cf377fde', // Miles Morales
  'photo-1520813792240-56fc4a3765a7', // Gwen Stacy
  'photo-1568602471122-7832951cc4c5', // Bruce Wayne
  'photo-1541823709867-1b206113eafd', // Clark Kent
  'photo-1531123897727-8f129e1688ce', // Diana Prince
  'photo-1552058544-f2b08422138a', // Barry Allen
  'photo-1547425260-76bcadfb4f2c', // Victor Stone
  'photo-1544717297-fa95b6ee9643'  // Hal Jordan
];

export const instructors = instructorNames.map((name, idx) => ({
  id: idx + 1,
  name,
  role: instructorRoles[idx % instructorRoles.length],
  students: `${(idx + 1) * 3 + 12}k+ Students`,
  rating: (4.7 + ((idx % 4) * 0.1)).toFixed(1),
  coursesCount: (idx % 12) + 4,
  image: `https://images.unsplash.com/${instructorImages[idx % instructorImages.length]}?auto=format&fit=crop&w=400&q=80`
}));

// ==========================================
// 4. TESTIMONIALS DATA (60 Items Total)
// ==========================================
const testimonialReviews = [
  'The courses gave me practical knowledge and portfolio projects to crack my Google technical interview.',
  'Learnify has the best organized learning paths. The community support and instructor feedback made all the difference!',
  'Transitioning from sales to UX design seemed impossible until I joined the Figma to Code track here.',
  'The AWS solutions architect course prepared me so thoroughly that I passed the real exam on my first try.',
  'Clear explanations, active Discord community, and updated code repositories. Worth every penny!',
  'I was stuck in tutorial hell for 8 months. Learnifys project-based assignments finally taught me how to think like an engineer.',
  'The Machine Learning labs and GPU environments saved me countless hours of local environment setup headaches.',
  'Hands down the most comprehensive Next.js and React course available on the web today.'
];

export const testimonials = Array.from({ length: 60 }, (_, idx) => ({
  id: idx + 1,
  name: [
    'James Peterson', 'Sarah Jenkins', 'Aarav Patel', 'Mei Ling', 'Carlos Silva', 
    'Fatima Al-Sayed', 'Daniel Craig', 'Kavita Rao', 'Alexander Schmidt', 'Liam O Connor'
  ][idx % 10] + ` ${idx > 9 ? `(${idx + 1})` : ''}`,
  role: [
    'Frontend Developer at Meta', 'UI/UX Designer at Stripe', 'Data Scientist at Amazon',
    'DevOps Engineer at Netflix', 'Mobile Developer at Spotify', 'Cyber Security Analyst at Cisco',
    'Junior Full-Stack Engineer', 'Associate Product Manager'
  ][idx % 8],
  rating: 5,
  feedback: testimonialReviews[idx % testimonialReviews.length]
}));

// ==========================================
// 5. FREQUENTLY ASKED QUESTIONS (30 Items)
// ==========================================
const faqTopics = [
  'How do I get access to course materials?',
  'Can I learn at my own schedule and pace?',
  'Are the certificates recognized by employers?',
  'Is there a money-back satisfaction guarantee?',
  'Can I interact directly with mentors and instructors?',
  'What prerequisites are needed before starting?',
  'Do you provide lifetime access to purchased courses?',
  'Are there hands-on real-world coding projects?',
  'Can I download course videos for offline viewing?',
  'Does Learnify offer team or business enterprise plans?'
];

export const faqs = Array.from({ length: 30 }, (_, idx) => ({
  id: idx + 1,
  question: `${faqTopics[idx % 10]} ${idx >= 10 ? `[Part ${Math.floor(idx / 10) + 1}]` : ''}`,
  answer: 'Yes! All registered students receive immediate digital access to HD video lessons, downloadable slide decks, GitHub source repositories, and our dedicated Slack/Discord study group.',
  category: idx % 3 === 0 ? 'Billing' : idx % 3 === 1 ? 'Courses' : 'Certificates'
}));

// ==========================================
// 6. UPCOMING LIVE WEBINARS & EVENTS (30 Items)
// ==========================================
const eventTopics = [
  'Building Production GenAI Apps with LangChain',
  'Mastering System Design: Scale to 10M Concurrent Users',
  'Modern UI/UX Trends: 3D Micro-interactions in 2026',
  'DevOps Career Roadmap: From Junior to Principal Cloud Architect',
  'Bug Bounty Hunting: Live Web Pentesting Demo',
  'Flutter vs React Native: State of Mobile Dev in 2026'
];

export const events = Array.from({ length: 30 }, (_, idx) => ({
  id: idx + 1,
  title: `${eventTopics[idx % eventTopics.length]} #${idx + 1}`,
  date: `Nov ${((idx * 3) % 28) + 1}, 2026`,
  time: '06:00 PM - 08:00 PM EST',
  speaker: instructors[idx % instructors.length].name,
  seatLimit: '250 Seats Available',
  mode: idx % 2 === 0 ? 'Live Zoom Webinar' : 'Interactive Discord Stage'
}));

// ==========================================
// 7. PARTNER BRANDS & ACCREDITATIONS (20 Items)
// ==========================================
export const partnerBrands = [
  { id: 1, name: 'Google Cloud' },
  { id: 2, name: 'AWS Partner Network' },
  { id: 3, name: 'Microsoft for Startups' },
  { id: 4, name: 'Meta Blueprint' },
  { id: 5, name: 'Figma Community' },
  { id: 6, name: 'Vercel Verified' },
  { id: 7, name: 'GitHub Campus' },
  { id: 8, name: 'Docker Certified' },
  { id: 9, name: 'MongoDB University' },
  { id: 10, name: 'Atlassian Community' },
  { id: 11, name: 'Cisco Networking Academy' },
  { id: 12, name: 'CompTIA Authorized' },
  { id: 13, name: 'Stripe Climate Partner' },
  { id: 14, name: 'Postman Student Expert' },
  { id: 15, name: 'Datadog Partner' },
  { id: 16, name: 'GitLab Academic Network' },
  { id: 17, name: 'OpenAI Education Community' },
  { id: 18, name: 'NVIDIA Deep Learning Institute' },
  { id: 19, name: 'Coursera Partner Network' },
  { id: 20, name: 'Linux Foundation' }
];

// ==========================================
// 8. PRICING & MEMBERSHIP PLANS (8 Items)
// ==========================================
export const pricingPlans = [
  { id: 1, title: 'Starter Free', price: '₹0', billing: 'forever', features: ['Access to 15+ Free Courses', 'Community Discord Access', 'Standard Video Quality', 'No Certificate'] },
  { id: 2, title: 'Student Pro Monthly', price: '₹1,499', billing: 'monthly', features: ['Access to 500+ Courses', 'Verified Shareable Certificates', 'Interactive Coding Labs', 'Priority Q&A Forum Response'] },
  { id: 3, title: 'Student Pro Annual', price: '₹14,999', billing: 'yearly', features: ['All Monthly Features', '2 Months Free Included', 'Downloadable Offline Lessons', '1-on-1 Quarterly Mentor Call'] },
  { id: 4, title: 'Team Essentials', price: '₹3,499', billing: 'per seat / mo', features: ['Up to 10 Team Members', 'Admin Progress Analytics', 'Custom Learning Tracks', 'Centralized Billing'] },
  { id: 5, title: 'Enterprise Global', price: '₹9,999', billing: 'per seat / mo', features: ['Unlimited Members', 'Dedicated Account Mentor', 'LMS Integration (SSO/SCIM)', 'Custom Course Creation'] },
  { id: 6, title: 'Bootcamp Pass', price: '₹19,999', billing: 'one-time', features: ['Live 12-Week Interactive Cohort', 'Direct Mentor Review', 'Resume & Interview Prep', 'Job Placement Support'] },
  { id: 7, title: 'AI & Data Specialist Pass', price: '₹6,999', billing: 'per quarter', features: ['All 110+ Data & AI Courses', 'Cloud GPU Compute Credits', 'Monthly Masterclass Webinars', 'Capstone Project Evaluation'] },
  { id: 8, title: 'Lifetime VIP Access', price: '₹39,999', billing: 'one-time lifetime', features: ['All Current & Future Courses', 'VIP Discord Channel Access', 'All Certifications Included', 'Direct Instructor Chat Access'] }
];