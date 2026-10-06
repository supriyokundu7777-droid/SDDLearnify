// ==========================================
// 1. FEATURED BADGES & HIGHLIGHTS (12 Items)
// ==========================================
export const highlights = [
  { id: 1, title: 'Learn From Anywhere', desc: 'Any device, offline viewing & sync', icon: '🌍' },
  { id: 2, title: 'Live Coding Mentorship', desc: 'Weekly 1-on-1 code reviews', icon: '💻' },
  { id: 3, title: 'Job Placement Guarantee', desc: 'Career coaching & resume clinics', icon: '💼' },
  { id: 4, title: 'Industry Certificates', desc: 'Shareable on LinkedIn & CVs', icon: '🏆' },
  { id: 5, title: 'Real-time Project Sandbox', desc: 'Browser-based cloud IDE environments', icon: '⚡' },
  { id: 6, title: 'Lifetime Course Access', desc: 'Continuous updates on tech stacks', icon: '♾️' },
  { id: 7, title: 'Active Global Community', desc: '50K+ developers in private Discord', icon: '💬' },
  { id: 8, title: 'Verified Instructor Network', desc: 'Direct guidance from Tech Leads', icon: '👨‍🏫' },
  { id: 9, title: 'Self-Paced Flexible Schedules', desc: 'Learn without affecting full-time work', icon: '⏰' },
  { id: 10, title: 'Interview Preparation Labs', desc: '500+ LeetCode style live quizzes', icon: '🎯' },
  { id: 11, title: 'Enterprise Team Analytics', desc: 'Track team skill progressions easily', icon: '📊' },
  { id: 12, title: 'Hands-on Capstone Projects', desc: 'Build production-ready web platforms', icon: '🚀' }
];

// ==========================================
// 2. FILTER CATEGORIES (8 Tabs)
// ==========================================
export const filterTabs = [
  'All', 
  'Development', 
  'Design', 
  'Data Science', 
  'Cyber Security', 
  'Cloud & DevOps', 
  'Mobile App', 
  'Web3'
];

// ==========================================
// 3. FILTERED COURSES DATA (100 Items Total)
// ==========================================
const courseBlueprints = [
  // Development (15)
  { t: 'Enterprise Next.js 15 & GraphQL Production Blueprint', c: 'Development', m: 'Mark Evans', r: 'Staff Frontend Engineer', rat: '4.9', e: '4,280', l: '48 Lessons', p: '₹2,799', b: 'Popular', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee' },
  { t: 'Advanced React Architecture & Performance Optimization', c: 'Development', m: 'Alex Morrison', r: 'Principal Architect', rat: '4.9', e: '6,100', l: '52 Lessons', p: '₹2,499', b: 'Best Seller', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
  { t: 'Full-Stack MERN: Real-time Socket.IO Application', c: 'Development', m: 'Rachel Green', r: 'Full-Stack Lead', rat: '4.8', e: '3,840', l: '44 Lessons', p: '₹2,299', b: 'Trending', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c' },
  { t: 'Microservices with Node.js, NestJS & RabbitMQ', c: 'Development', m: 'Tariq Al-Mansoor', r: 'Backend Specialist', rat: '4.9', e: '2,950', l: '60 Lessons', p: '₹2,999', b: 'Hot', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97' },
  { t: 'Modern TypeScript for Large Enterprise Systems', c: 'Development', m: 'David Reynolds', r: 'Senior Software Engineer', rat: '4.8', e: '4,700', l: '38 Lessons', p: '₹1,999', b: 'Popular', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3' },
  { t: 'Vue 3 Composition API & Pinia Masterclass', c: 'Development', m: 'Clara Oswald', r: 'Frontend Specialist', rat: '4.7', e: '1,920', l: '36 Lessons', p: '₹1,799', b: 'Updated', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8' },
  { t: 'Python & Django REST Framework Web APIs', c: 'Development', m: 'Tariq Al-Mansoor', r: 'Backend Lead', rat: '4.8', e: '3,400', l: '46 Lessons', p: '₹2,299', b: 'Top Rated', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6' },
  { t: 'Go (Golang) High-Performance Web Services', c: 'Development', m: 'James Vance', r: 'Systems Engineer', rat: '4.9', e: '2,150', l: '40 Lessons', p: '₹2,499', b: 'Pro Pick', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c' },
  { t: 'Spring Boot 3 & Microservices Architecture', c: 'Development', m: 'Vikram Mehta', r: 'Java Enterprise Architect', rat: '4.7', e: '2,800', l: '58 Lessons', p: '₹2,799', b: 'Enterprise', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4' },
  { t: 'Ruby on Rails 7 Full-Stack Rapid MVP Building', c: 'Development', m: 'Lucas Vance', r: 'Startup CTO', rat: '4.6', e: '1,420', l: '34 Lessons', p: '₹1,499', b: 'Quick Learn', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998' },
  { t: 'Modern Tailwind CSS 4 Component Design Systems', c: 'Development', m: 'Sophia Turner', r: 'UI/UX Developer', rat: '4.9', e: '5,200', l: '30 Lessons', p: '₹1,499', b: 'Best Seller', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e' },
  { t: 'Rust for Web Developers: Actix-Web & SQLx', c: 'Development', m: 'David Reynolds', r: 'Systems Architect', rat: '4.9', e: '1,780', l: '44 Lessons', p: '₹2,999', b: 'Cutting Edge', img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159' },
  { t: 'PHP 8.3 & Laravel 11 Clean Architecture', c: 'Development', m: 'Alex Morrison', r: 'Full-Stack Developer', rat: '4.7', e: '3,100', l: '48 Lessons', p: '₹1,999', b: 'Updated', img: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2' },
  { t: 'gRPC & Protocol Buffers in Distributed Systems', c: 'Development', m: 'James Vance', r: 'Cloud Architect', rat: '4.8', e: '1,240', l: '28 Lessons', p: '₹2,299', b: 'Advanced', img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b' },
  { t: 'Serverless Applications with AWS Lambda & TypeScript', c: 'Development', m: 'Rachel Green', r: 'Cloud Engineer', rat: '4.8', e: '2,650', l: '36 Lessons', p: '₹2,299', b: 'Trending', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5' },

  // Design (15)
  { t: 'Advanced UI Systems, Tokens & Figma Variables', c: 'Design', m: 'Elena Rostova', r: 'Lead Product Designer', rat: '4.9', e: '3,110', l: '36 Lessons', p: '₹2,299', b: 'Trending', img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e' },
  { t: 'User Experience (UX) Research & Usability Testing', c: 'Design', m: 'Sophia Turner', r: 'Design Director', rat: '4.8', e: '2,890', l: '32 Lessons', p: '₹1,999', b: 'Popular', img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12' },
  { t: 'Mobile Product Design: iOS Human Interface & Material 3', c: 'Design', m: 'Elena Rostova', r: 'Lead Product Designer', rat: '4.9', e: '4,150', l: '40 Lessons', p: '₹2,499', b: 'Best Seller', img: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c' },
  { t: 'Framer for Designers: Build High-End Interactive Sites', c: 'Design', m: 'Chloe Bennet', r: 'Creative Technologist', rat: '4.8', e: '2,300', l: '28 Lessons', p: '₹1,799', b: 'Hot', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df' },
  { t: 'Design Systems for Scalable Web & Native Applications', c: 'Design', m: 'Elena Rostova', r: 'Design Lead', rat: '5.0', e: '3,480', l: '44 Lessons', p: '₹2,999', b: 'Pro Pick', img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d' },
  { t: 'Motion Design in UI: After Effects to Lottie Files', c: 'Design', m: 'Chloe Bennet', r: 'Motion Designer', rat: '4.8', e: '1,950', l: '30 Lessons', p: '₹1,999', b: 'Creative', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d' },
  { t: '3D Web Illustrations with Spline and Cinema4D', c: 'Design', m: 'Arthur Dent', r: '3D Artist', rat: '4.9', e: '1,620', l: '34 Lessons', p: '₹2,299', b: 'Trending', img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab' },
  { t: 'Web Accessibility Guidelines (WCAG 2.2) Masterclass', c: 'Design', m: 'Dr. Emily Watson', r: 'Accessibility Lead', rat: '4.9', e: '1,120', l: '26 Lessons', p: '₹1,799', b: 'Essential', img: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0' },
  { t: 'Wireframing & High-Fidelity Prototyping in Figma', c: 'Design', m: 'Sophia Turner', r: 'UX Consultant', rat: '4.7', e: '2,980', l: '32 Lessons', p: '₹1,499', b: 'Beginner', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766' },
  { t: 'Typography, Grids & Layouts for Digital Interfaces', c: 'Design', m: 'Elena Rostova', r: 'Art Director', rat: '4.8', e: '1,500', l: '24 Lessons', p: '₹1,499', b: 'Core Skill', img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620' },
  { t: 'Brand Identity Design from Strategy to Execution', c: 'Design', m: 'Chloe Bennet', r: 'Brand Strategist', rat: '4.8', e: '2,400', l: '36 Lessons', p: '₹1,999', b: 'Popular', img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698' },
  { t: 'Dashboard & Complex Data Visualization Design', c: 'Design', m: 'Vikram Mehta', r: 'Product Consultant', rat: '4.9', e: '2,750', l: '42 Lessons', p: '₹2,499', b: 'Featured', img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e' },
  { t: 'Design Thinking & Agile Sprint Facilitation', c: 'Design', m: 'Sophia Turner', r: 'Product Coach', rat: '4.7', e: '1,320', l: '22 Lessons', p: '₹1,499', b: 'Management', img: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715' },
  { t: 'Responsive Web Design: Breakpoints to Production', c: 'Design', m: 'Mark Evans', r: 'Frontend Developer', rat: '4.8', e: '3,200', l: '30 Lessons', p: '₹1,799', b: 'Core Skill', img: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f' },
  { t: 'AR/VR Interface Guidelines with VisionOS', c: 'Design', m: 'Arthur Dent', r: 'Spatial UI Engineer', rat: '4.9', e: '980', l: '28 Lessons', p: '₹2,799', b: 'New', img: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634' },

  // Data Science (15)
  { t: 'LLM Fine-Tuning & Prompt Engineering with PyTorch', c: 'Data Science', m: 'Dr. Emily Watson', r: 'AI Researcher', rat: '5.0', e: '5,920', l: '62 Lessons', p: '₹3,499', b: 'Best Seller', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995' },
  { t: 'Machine Learning from A to Z with Python & Scikit-Learn', c: 'Data Science', m: 'David Reynolds', r: 'Lead Data Scientist', rat: '4.9', e: '7,400', l: '64 Lessons', p: '₹2,799', b: 'Top Rated', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c' },
  { t: 'Deep Learning & Neural Networks: CNNs to Transformers', c: 'Data Science', m: 'Dr. Emily Watson', r: 'AI Researcher', rat: '4.9', e: '4,600', l: '56 Lessons', p: '₹3,499', b: 'Hot', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5' },
  { t: 'PowerBI, SQL & Applied Business Intelligence', c: 'Data Science', m: 'Vikram Mehta', r: 'Data Consultant', rat: '4.7', e: '2,420', l: '38 Lessons', p: '₹1,999', b: 'Pro Pick', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f' },
  { t: 'Computer Vision with OpenCV 5 & YOLO Object Tracking', c: 'Data Science', m: 'David Reynolds', r: 'Computer Vision Lead', rat: '4.8', e: '2,900', l: '48 Lessons', p: '₹2,999', b: 'Trending', img: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a' },
  { t: 'Data Engineering with Snowflake, dbt & Apache Airflow', c: 'Data Science', m: 'Vikram Mehta', r: 'Data Architect', rat: '4.9', e: '3,100', l: '50 Lessons', p: '₹3,499', b: 'Enterprise', img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3' },
  { t: 'Applied Natural Language Processing with HuggingFace', c: 'Data Science', m: 'Dr. Emily Watson', r: 'NLP Scientist', rat: '4.8', e: '3,800', l: '46 Lessons', p: '₹2,999', b: 'Popular', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475' },
  { t: 'Big Data Streaming with Apache Spark & Kafka', c: 'Data Science', m: 'James Vance', r: 'Cloud Data Engineer', rat: '4.8', e: '1,980', l: '42 Lessons', p: '₹2,799', b: 'Advanced', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71' },
  { t: 'Time Series Forecasting with Prophet & LSTM Networks', c: 'Data Science', m: 'David Reynolds', r: 'Quantitative Analyst', rat: '4.7', e: '1,650', l: '36 Lessons', p: '₹2,299', b: 'Specialist', img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44' },
  { t: 'Statistical Machine Learning & Hypothesis Testing', c: 'Data Science', m: 'Dr. Emily Watson', r: 'Statistician', rat: '4.9', e: '2,100', l: '34 Lessons', p: '₹1,999', b: 'Academic', img: 'https://images.unsplash.com/photo-1509228468518-180dd4864904' },
  { t: 'Vector Databases: Pinecone, Weaviate & RAG Systems', c: 'Data Science', m: 'Alex Morrison', r: 'AI Engineer', rat: '4.9', e: '3,450', l: '32 Lessons', p: '₹2,499', b: 'New', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2' },
  { t: 'Data Science for Healthcare & Bioinformatics', c: 'Data Science', m: 'Dr. Emily Watson', r: 'Bioinformatics Lead', rat: '4.8', e: '1,120', l: '40 Lessons', p: '₹2,999', b: 'Industry Focus', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4' },
  { t: 'Data Cleaning & Wrangling Masterclass with Pandas', c: 'Data Science', m: 'Vikram Mehta', r: 'Data Analyst', rat: '4.7', e: '4,200', l: '28 Lessons', p: '₹1,499', b: 'Foundation', img: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0' },
  { t: 'Reinforcement Learning & Autonomous Agents', c: 'Data Science', m: 'David Reynolds', r: 'AI Researcher', rat: '4.9', e: '1,400', l: '44 Lessons', p: '₹3,499', b: 'Cutting Edge', img: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a' },
  { t: 'MLOps: Deploying Models with MLflow & Kubernetes', c: 'Data Science', m: 'James Vance', r: 'MLOps Engineer', rat: '4.8', e: '2,600', l: '42 Lessons', p: '₹2,799', b: 'Hot', img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0' },

  // Cyber Security (15)
  { t: 'Certified Ethical Hacker & Cloud Pentesting Guide', c: 'Cyber Security', m: 'Marcus Brody', r: 'SecOps Director', rat: '4.8', e: '2,890', l: '54 Lessons', p: '₹2,999', b: 'Hot', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3' },
  { t: 'Web Application Penetration Testing: OWASP Top 10', c: 'Cyber Security', m: 'Marcus Brody', r: 'Security Researcher', rat: '4.9', e: '4,800', l: '50 Lessons', p: '₹2,799', b: 'Best Seller', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b' },
  { t: 'CompTIA Security+ (SY0-701) Complete Prep', c: 'Cyber Security', m: 'Tariq Al-Mansoor', r: 'Security Analyst', rat: '4.8', e: '5,300', l: '62 Lessons', p: '₹2,499', b: 'Certified', img: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87' },
  { t: 'Network Defense, Wireshark & Threat Hunting', c: 'Cyber Security', m: 'Marcus Brody', r: 'SecOps Specialist', rat: '4.7', e: '2,100', l: '36 Lessons', p: '₹1,999', b: 'Practical', img: 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40' },
  { t: 'Malware Reverse Engineering & Assembly Analysis', c: 'Cyber Security', m: 'David Reynolds', r: 'Reverse Engineer', rat: '4.9', e: '1,450', l: '46 Lessons', p: '₹3,499', b: 'Elite', img: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7' },
  { t: 'SOC Analyst Tier 1 & 2 Blueprint with Splunk', c: 'Cyber Security', m: 'Marcus Brody', r: 'Incident Handler', rat: '4.8', e: '3,200', l: '48 Lessons', p: '₹2,799', b: 'Trending', img: 'https://images.unsplash.com/photo-1544890225-2f3faec4cd60' },
  { t: 'Cloud Security Fundamentals in AWS & Azure', c: 'Cyber Security', m: 'James Vance', r: 'Cloud Security Architect', rat: '4.8', e: '2,750', l: '42 Lessons', p: '₹2,799', b: 'Popular', img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f' },
  { t: 'Python Scripting for Offensive Penetration Testing', c: 'Cyber Security', m: 'Alex Morrison', r: 'Exploit Developer', rat: '4.9', e: '3,900', l: '38 Lessons', p: '₹2,299', b: 'Top Pick', img: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935' },
  { t: 'Zero Trust Security Architecture Implementation', c: 'Cyber Security', m: 'Tariq Al-Mansoor', r: 'CISO Advisor', rat: '4.7', e: '1,200', l: '30 Lessons', p: '₹2,499', b: 'Corporate', img: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7' },
  { t: 'Digital Forensics & Incident Response (DFIR)', c: 'Cyber Security', m: 'Marcus Brody', r: 'Forensics Investigator', rat: '4.8', e: '1,890', l: '44 Lessons', p: '₹2,999', b: 'Specialist', img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd' },
  { t: 'DevSecOps: Secure CI/CD Pipeline Automation', c: 'Cyber Security', m: 'James Vance', r: 'DevSecOps Lead', rat: '4.9', e: '2,400', l: '36 Lessons', p: '₹2,499', b: 'Hot', img: 'https://images.unsplash.com/photo-1484417894907-623942c8ec29' },
  { t: 'API Security Testing: Postman, BurpSuite & OAuth2', c: 'Cyber Security', m: 'Rachel Green', r: 'AppSec Engineer', rat: '4.8', e: '2,650', l: '34 Lessons', p: '₹2,299', b: 'Essential', img: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a' },
  { t: 'Wireless & IoT Penetration Testing Guide', c: 'Cyber Security', m: 'Marcus Brody', r: 'Hardware Hacker', rat: '4.6', e: '1,100', l: '32 Lessons', p: '₹2,299', b: 'Advanced', img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2' },
  { t: 'Red Team Operations & Active Directory Exploits', c: 'Cyber Security', m: 'Marcus Brody', r: 'Red Team Lead', rat: '4.9', e: '2,200', l: '54 Lessons', p: '₹3,499', b: 'Pro Level', img: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db' },
  { t: 'OSINT (Open-Source Intelligence) Investigative Techniques', c: 'Cyber Security', m: 'Clara Oswald', r: 'Cyber Intelligence Analyst', rat: '4.7', e: '2,900', l: '28 Lessons', p: '₹1,799', b: 'Trending', img: 'https://images.unsplash.com/photo-1579403124614-197f69d8187b' },

  // Cloud & DevOps (10)
  { t: 'AWS Certified Solutions Architect Associate (SAA-C03)', c: 'Cloud & DevOps', m: 'James Vance', r: 'AWS Ambassador', rat: '4.9', e: '8,200', l: '66 Lessons', p: '₹2,999', b: 'Best Seller', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa' },
  { t: 'Docker & Kubernetes from Scratch to Cluster Management', c: 'Cloud & DevOps', m: 'James Vance', r: 'DevOps Lead', rat: '4.9', e: '6,400', l: '54 Lessons', p: '₹2,799', b: 'Hot', img: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3' },
  { t: 'Terraform & OpenTofu: Infrastructure as Code (IaC)', c: 'Cloud & DevOps', m: 'Mark Evans', r: 'Cloud Engineer', rat: '4.8', e: '3,200', l: '38 Lessons', p: '₹2,299', b: 'Popular', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31' },
  { t: 'CI/CD Automation with GitHub Actions & ArgoCD', c: 'Cloud & DevOps', m: 'Alex Morrison', r: 'Release Engineer', rat: '4.8', e: '3,700', l: '34 Lessons', p: '₹1,999', b: 'Trending', img: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb' },
  { t: 'Google Cloud Platform (GCP) Associate Cloud Engineer', c: 'Cloud & DevOps', m: 'Tariq Al-Mansoor', r: 'GCP Architect', rat: '4.7', e: '2,500', l: '44 Lessons', p: '₹2,499', b: 'Certified', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8' },
  { t: 'Site Reliability Engineering: Prometheus & Grafana', c: 'Cloud & DevOps', m: 'James Vance', r: 'SRE Director', rat: '4.8', e: '2,100', l: '40 Lessons', p: '₹2,499', b: 'Enterprise', img: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97' },
  { t: 'Enterprise Linux Administration & Shell Scripting', c: 'Cloud & DevOps', m: 'David Reynolds', r: 'Linux Specialist', rat: '4.9', e: '5,100', l: '48 Lessons', p: '₹1,799', b: 'Core Skill', img: 'https://images.unsplash.com/photo-1563770660941-20978e870e26' },
  { t: 'Microsoft Azure Administrator (AZ-104) Bootcamp', c: 'Cloud & DevOps', m: 'Vikram Mehta', r: 'Azure Architect', rat: '4.8', e: '3,900', l: '52 Lessons', p: '₹2,799', b: 'Popular', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704' },
  { t: 'Kafka Cluster Deployment on AWS with Strimzi', c: 'Cloud & DevOps', m: 'James Vance', r: 'Data Platform Architect', rat: '4.7', e: '1,350', l: '32 Lessons', p: '₹2,499', b: 'Advanced', img: 'https://images.unsplash.com/photo-1498049860654-af1a5c566876' },
  { t: 'FinOps: Optimizing Multi-Cloud Spend and Costs', c: 'Cloud & DevOps', m: 'Vikram Mehta', r: 'FinOps Practitioner', rat: '4.7', e: '1,100', l: '24 Lessons', p: '₹1,999', b: 'New', img: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f' },

  // Mobile App (15)
  { t: 'Cross-Platform Flutter 3 & Native Architecture', c: 'Mobile App', m: 'Rachel Green', r: 'Principal Mobile Dev', rat: '4.8', e: '3,750', l: '42 Lessons', p: '₹2,499', b: 'Featured', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c' },
  { t: 'React Native & Expo Router: Build Full-Stack Apps', c: 'Mobile App', m: 'Mark Evans', r: 'Mobile Architect', rat: '4.9', e: '4,600', l: '46 Lessons', p: '₹2,499', b: 'Best Seller', img: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4' },
  { t: 'SwiftUI & iOS 18: Build Modern Apps from Scratch', c: 'Mobile App', m: 'Lucas Vance', r: 'iOS Developer', rat: '4.9', e: '3,200', l: '54 Lessons', p: '₹2,799', b: 'Popular', img: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb' },
  { t: 'Kotlin & Jetpack Compose Android Architecture', c: 'Mobile App', m: 'Alex Morrison', r: 'Android Specialist', rat: '4.8', e: '2,950', l: '50 Lessons', p: '₹2,499', b: 'Trending', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9' },
  { t: 'Mobile App Backend Engineering with Firebase & Supabase', c: 'Mobile App', m: 'Rachel Green', r: 'Full-Stack Developer', rat: '4.7', e: '2,100', l: '34 Lessons', p: '₹1,999', b: 'Updated', img: 'https://images.unsplash.com/photo-1556656793-08538906a9f8' },
  { t: 'Mobile Game Dev with Unity: 2D Casual to Endless Runner', c: 'Mobile App', m: 'Arthur Dent', r: 'Game Developer', rat: '4.8', e: '2,700', l: '44 Lessons', p: '₹2,299', b: 'Fun', img: 'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7' },
  { t: 'Publishing, ASO & Monetization for App Stores', c: 'Mobile App', m: 'Sophia Turner', r: 'Growth Consultant', rat: '4.6', e: '1,450', l: '24 Lessons', p: '₹1,299', b: 'Quick Learn', img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5' },
  { t: 'Testing Mobile Applications with Detox & Appium', c: 'Mobile App', m: 'Mark Evans', r: 'QA Specialist', rat: '4.7', e: '1,280', l: '32 Lessons', p: '₹1,999', b: 'Advanced', img: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0' },
  { t: 'Offline-First Mobile Apps with WatermelonDB & SQLite', c: 'Mobile App', m: 'Alex Morrison', r: 'Mobile Architect', rat: '4.8', e: '1,600', l: '30 Lessons', p: '₹1,999', b: 'Pro Level', img: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48' },
  { t: 'Building Audio & Streaming Apps in Flutter', c: 'Mobile App', m: 'Rachel Green', r: 'Flutter Engineer', rat: '4.8', e: '1,150', l: '28 Lessons', p: '₹1,999', b: 'Creative', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4' },
  { t: 'Advanced iOS Concurrency with Swift 6 Async/Await', c: 'Mobile App', m: 'Lucas Vance', r: 'Principal iOS Engineer', rat: '4.9', e: '1,720', l: '36 Lessons', p: '₹2,799', b: 'Hot', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f' },
  { t: 'Coroutines & Flow in Modern Android Apps', c: 'Mobile App', m: 'Alex Morrison', r: 'Android Lead', rat: '4.8', e: '1,980', l: '34 Lessons', p: '₹2,299', b: 'Pro Pick', img: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f' },
  { t: 'BLE & IoT Bluetooth Connections on Mobile Devices', c: 'Mobile App', m: 'David Reynolds', r: 'Hardware Engineer', rat: '4.7', e: '890', l: '26 Lessons', p: '₹2,299', b: 'Specialist', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158' },
  { t: 'Micro-Interactions & Animations in React Native Reanimated', c: 'Mobile App', m: 'Sophia Turner', r: 'Design Technologist', rat: '4.9', e: '2,300', l: '32 Lessons', p: '₹1,999', b: 'Visual', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758' },
  { t: 'Building Fintech Apps: Security & PCI Compliance on Mobile', c: 'Mobile App', m: 'Marcus Brody', r: 'Security Consultant', rat: '4.8', e: '1,400', l: '38 Lessons', p: '₹2,999', b: 'Security', img: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232' },

  // Web3 & Blockchain (20)
  { t: 'Solidity & Ethereum Smart Contract Engineering Bootcamp', c: 'Web3', m: 'Lucas Vance', r: 'Smart Contract Dev', rat: '4.9', e: '3,200', l: '48 Lessons', p: '₹2,999', b: 'Best Seller', img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0' },
  { t: 'DeFi Protocol Engineering: AMMs, Lending & Yield Vaults', c: 'Web3', m: 'Lucas Vance', r: 'DeFi Architect', rat: '4.8', e: '1,950', l: '42 Lessons', p: '₹3,499', b: 'Hot', img: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7' },
  { t: 'Smart Contract Auditing: Finding Reentrancy & Exploits', c: 'Web3', m: 'Marcus Brody', r: 'Web3 Security Auditor', rat: '5.0', e: '1,700', l: '50 Lessons', p: '₹3,999', b: 'Elite', img: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f' },
  { t: 'Solana & Rust: High-Speed Web3 Architecture', c: 'Web3', m: 'David Reynolds', r: 'Solana Core Engineer', rat: '4.9', e: '2,400', l: '44 Lessons', p: '₹3,499', b: 'Trending', img: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d' },
  { t: 'Full-Stack Web3 DApp with Next.js, Wagmi & Viem', c: 'Web3', m: 'Mark Evans', r: 'DApp Engineer', rat: '4.8', e: '2,900', l: '38 Lessons', p: '₹2,499', b: 'Popular', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3' },
  { t: 'Zero-Knowledge Proofs (ZKP) with Circom & SnarkJS', c: 'Web3', m: 'Dr. Emily Watson', r: 'Cryptography Researcher', rat: '4.9', e: '1,100', l: '46 Lessons', p: '₹3,999', b: 'Advanced', img: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05' },
  { t: 'Tokenomics & DAO Governance Model Design', c: 'Web3', m: 'Lucas Vance', r: 'Crypto Economist', rat: '4.7', e: '1,500', l: '28 Lessons', p: '₹1,999', b: 'Strategy', img: 'https://images.unsplash.com/photo-1618042164219-62c820f10723' },
  { t: 'NFT Dynamic Minting with IPFS & Chainlink VRF', c: 'Web3', m: 'Alex Morrison', r: 'Web3 Engineer', rat: '4.7', e: '2,150', l: '32 Lessons', p: '₹1,999', b: 'Creative', img: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247' },
  { t: 'Hardhat & Foundry: Modern Solidity Testing Toolchain', c: 'Web3', m: 'Lucas Vance', r: 'Smart Contract Dev', rat: '4.8', e: '1,800', l: '30 Lessons', p: '₹2,299', b: 'DevTool', img: 'https://images.unsplash.com/photo-1639762681057-408e52192e55' },
  { t: 'Layer-2 Scaling: Arbitrum, Optimism & Rollup Mechanics', c: 'Web3', m: 'Tariq Al-Mansoor', r: 'Protocol Researcher', rat: '4.8', e: '1,250', l: '34 Lessons', p: '₹2,799', b: 'Infrastructure', img: 'https://images.unsplash.com/photo-1644361566696-3d442b5b482a' },
  { t: 'Account Abstraction (ERC-4337) & Smart Wallets', c: 'Web3', m: 'Mark Evans', r: 'Protocol Engineer', rat: '4.9', e: '1,400', l: '30 Lessons', p: '₹2,499', b: 'New Tech', img: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52' },
  { t: 'Bitcoin Lightning Network Node & App Development', c: 'Web3', m: 'David Reynolds', r: 'Bitcoin Engineer', rat: '4.8', e: '1,320', l: '36 Lessons', p: '₹2,499', b: 'Specialist', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe' },
  { t: 'Decentralized Identity (DID) & Verifiable Credentials', c: 'Web3', m: 'Dr. Emily Watson', r: 'Security Researcher', rat: '4.7', e: '890', l: '26 Lessons', p: '₹2,299', b: 'Identity', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420' },
  { t: 'Cosmos SDK & Tendermint Interchain Architecture', c: 'Web3', m: 'Tariq Al-Mansoor', r: 'Blockchain Engineer', rat: '4.7', e: '950', l: '38 Lessons', p: '₹2,999', b: 'Interchain', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e' },
  { t: 'Substrate & Polkadot Parachain Development', c: 'Web3', m: 'David Reynolds', r: 'Rust Developer', rat: '4.8', e: '820', l: '40 Lessons', p: '₹3,499', b: 'Framework', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc' },
  { t: 'MEV (Maximal Extractable Value) Strategies & Protection', c: 'Web3', m: 'Marcus Brody', r: 'Quant Arbitrageur', rat: '4.9', e: '1,120', l: '34 Lessons', p: '₹3,499', b: 'High Level', img: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8' },
  { t: 'Web3 Mobile DApps: Solana Mobile Stack (SMS)', c: 'Web3', m: 'Rachel Green', r: 'Mobile Web3 Dev', rat: '4.7', e: '1,050', l: '28 Lessons', p: '₹2,299', b: 'Mobile', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc' },
  { t: 'Decentralized Storage: IPFS, Arweave & Filecoin Solutions', c: 'Web3', m: 'Alex Morrison', r: 'Cloud/Web3 Architect', rat: '4.7', e: '1,300', l: '26 Lessons', p: '₹1,999', b: 'Storage', img: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952' },
  { t: 'Building Cross-Chain Bridges with Chainlink CCIP', c: 'Web3', m: 'Lucas Vance', r: 'Bridge Architect', rat: '4.8', e: '1,200', l: '32 Lessons', p: '₹2,799', b: 'Cross Chain', img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1' },
  { t: 'Crypto Trading Bots with Python & Binance Webhooks', c: 'Web3', m: 'Vikram Mehta', r: 'Algorithmic Trader', rat: '4.8', e: '3,800', l: '36 Lessons', p: '₹2,499', b: 'Popular', img: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34' }
];

export const homeTwoCourses = courseBlueprints.map((item, index) => ({
  id: index + 1,
  title: item.t,
  category: item.c,
  mentor: item.m,
  mentorRole: item.r,
  rating: item.rat,
  enrolled: item.e,
  lessons: item.l,
  price: item.p,
  badge: item.b,
  image: `${item.img}?auto=format&fit=crop&w=600&q=80`
}));

// ========================================================
// 4. UPCOMING LIVE COHORTS & MASTERCLASSES (50 Items Total)
// ========================================================
const cohortTitles = [
  'Micro-Frontend Architecture in 2026: Hands-on Workshop',
  'Cracking System Design Interviews for Big Tech',
  'Building AI Agents using Autonomous Frameworks',
  'Zero-Day Web Security Pentesting Masterclass',
  'Figma Variables to React Code Synchronization',
  'Deploying High-Throughput Kubernetes on AWS',
  'Next.js Server Actions & Streaming SSR Clinic',
  'Rust Performance Tuning for Distributed Services',
  'Designing High-Conversion Fintech Onboarding Flows',
  'Smart Contract Gas Optimization Strategies'
];

const speakers = [
  'Mark Evans', 'Alex Morrison', 'Dr. Emily Watson', 'Marcus Brody', 
  'Elena Rostova', 'James Vance', 'Rachel Green', 'David Reynolds', 
  'Sophia Turner', 'Lucas Vance'
];

export const upcomingLiveSessions = Array.from({ length: 50 }, (_, idx) => ({
  id: idx + 1,
  title: `${cohortTitles[idx % cohortTitles.length]} (Batch ${Math.floor(idx / 10) + 1})`,
  speaker: speakers[idx % speakers.length],
  date: `Oct ${((idx * 2) % 28) + 1}, 2026`,
  time: `${(idx % 6) + 4}:00 PM EST`,
  seatsLeft: (idx % 18) + 3,
  badge: ['Live Coding', 'Career', 'AI Lab', 'Security Lab', 'Design Sprint'][idx % 5]
}));

// ==========================================
// 5. TESTIMONIALS (75 Items Total)
// ==========================================
const alumniNames = [
  'Devon Vance', 'Ananya Roy', 'Michael Zhang', 'Fatima Al-Mansoor', 'Carlos Rossi',
  'Emily Tanaka', 'Liam Murphy', 'Priya Nambiar', 'Dmitry Ivanov', 'Hannah Abbott',
  'Marcus Aurelius', 'Siddharth Sen', 'Chloe Bourgeois', 'Gabriel Agreste', 'Kavita Iyer'
];

const studentQuotes = [
  'The real-world architecture taught here is something you cannot find in random tutorials. Took my career straight to senior level.',
  'Figma token workshops and design systems allowed me to pivot straight into top tech product design roles within 4 months.',
  'Passed the AWS Solutions Architect exam on my first attempt after taking the DevOps live track here!',
  'The bug bounty methods shown in the cyber security labs helped me report my first high-severity issue within 3 weeks.',
  'Direct mentor feedback during the capstone review saved me months of mistakes. Best investment in my tech career.',
  'Their community Discord has actual staff engineers willing to jump on calls to debug tricky concurrency bugs.',
  'Hands down the clearest breakdown of Next.js caching, Server Actions, and distributed microservices.'
];

export const studentFeedback = Array.from({ length: 75 }, (_, idx) => ({
  id: idx + 1,
  name: alumniNames[idx % alumniNames.length] + ` #${idx + 1}`,
  role: [
    'Frontend Developer at Vercel', 'Product Designer at Canva', 'AI Engineer at Microsoft',
    'SecOps Engineer at Cloudflare', 'Cloud Architect at AWS', 'iOS Lead at Spotify'
  ][idx % 6],
  feedback: studentQuotes[idx % studentQuotes.length],
  rating: 5
}));

// ==========================================
// 6. FREQUENTLY ASKED QUESTIONS (50 Items)
// ==========================================
const faqTopics = [
  'Can I download lectures for offline access?',
  'How often are live coding review sessions held?',
  'What happens if I miss a scheduled cohort webinar?',
  'Are the certificates verifiable on LinkedIn?',
  'Is there a money-back refund guarantee?',
  'Do you provide resume and interview preparation?',
  'Can team licenses be shared across multiple developers?',
  'What hardware specifications do I need for AI courses?',
  'Are course repositories updated for new library versions?',
  'How do 1-on-1 mentor booking sessions work?'
];

export const faqs = Array.from({ length: 50 }, (_, idx) => ({
  id: idx + 1,
  question: `${faqTopics[idx % faqTopics.length]} (Topic #${idx + 1})`,
  answer: 'Yes! All participants receive permanent digital access to recordings within 2 hours of completion, downloadable course slides, repository branches, and direct mentor Q&A channels.',
  category: idx % 2 === 0 ? 'Curriculum' : 'Enrollment'
}));

// ==========================================
// 7. MEMBERSHIP PRICING PLANS (15 Items Total)
// ==========================================
export const homeTwoPricing = [
  {
    id: 1,
    title: 'Monthly Pass',
    price: '₹1,499',
    cycle: 'billed monthly',
    popular: false,
    features: ['Unlimited access to 500+ courses', 'Downloadable source code & slides', 'Community Discord access', 'Standard completion badges']
  },
  {
    id: 2,
    title: 'Annual Pro',
    price: '₹1,199',
    cycle: 'billed annually (₹14,388/yr)',
    popular: true,
    features: ['Everything in Monthly Pass', 'Official verified certificates', 'Weekly live instructor Q&A sessions', 'Direct portfolio review', '2 months free included']
  },
  {
    id: 3,
    title: 'Career Accelerator',
    price: '₹2,999',
    cycle: 'billed monthly',
    popular: false,
    features: ['Everything in Annual Pro', '1-on-1 monthly mentor coaching', 'Mock technical interviews', 'Direct referrals to hiring partners']
  },
  {
    id: 4,
    title: 'Student Discount Pass',
    price: '₹799',
    cycle: 'billed monthly (with edu email)',
    popular: false,
    features: ['Full course catalog access', 'Interactive code playground', 'Discord student study lounges', 'Non-commercial portfolio rights']
  },
  {
    id: 5,
    title: 'Frontend Mastery Track',
    price: '₹1,899',
    cycle: 'billed monthly',
    popular: false,
    features: ['Access to all React, Vue, Next.js courses', 'Weekly CSS & UI reviews', 'Modern bundle optimization labs', 'Design system templates']
  },
  {
    id: 6,
    title: 'AI & Data Specialist Pass',
    price: '₹2,499',
    cycle: 'billed monthly',
    popular: false,
    features: ['All Machine Learning & Deep Learning tracks', 'Dedicated cloud GPU compute hours', 'HuggingFace model fine-tuning labs', 'Dataset access']
  },
  {
    id: 7,
    title: 'Cyber Security Ops Pass',
    price: '₹2,699',
    cycle: 'billed monthly',
    popular: false,
    features: ['All Pentesting and Red Team tracks', 'Browser-based Kali Linux labs', 'Bug Bounty walk-through targets', 'SOC alert simulations']
  },
  {
    id: 8,
    title: 'Cloud & DevOps Engineer Pass',
    price: '₹2,399',
    cycle: 'billed monthly',
    popular: false,
    features: ['AWS, Azure, and GCP certification blueprints', 'Kubernetes sandboxes', 'Terraform production architectures', 'SRE post-mortem workshops']
  },
  {
    id: 9,
    title: 'Mobile App Developer Track',
    price: '₹1,999',
    cycle: 'billed monthly',
    popular: false,
    features: ['Flutter, React Native & SwiftUI courses', 'CI/CD mobile pipeline templates', 'App Store and Play Store launch guides', 'UI animation assets']
  },
  {
    id: 10,
    title: 'Web3 & Smart Contract Pass',
    price: '₹2,899',
    cycle: 'billed monthly',
    popular: false,
    features: ['All Solidity, Rust & DeFi engineering tracks', 'Smart contract auditing templates', 'Testnet gas faucet integrations', 'Private Web3 builders lounge']
  },
  {
    id: 11,
    title: 'Team Starter (Up to 5 Seats)',
    price: '₹5,499',
    cycle: 'billed monthly',
    popular: false,
    features: ['5 Individual Pro accounts', 'Team progress dashboard', 'Shared coding workspaces', 'Centralized invoice billing']
  },
  {
    id: 12,
    title: 'Team Growth (Up to 20 Seats)',
    price: '₹18,999',
    cycle: 'billed monthly',
    popular: false,
    features: ['20 Individual Pro accounts', 'Skill assessment benchmarks', 'Priority enterprise support', 'Custom private workshop requests']
  },
  {
    id: 13,
    title: 'Enterprise Custom',
    price: '₹49,999',
    cycle: 'billed monthly',
    popular: false,
    features: ['Unlimited team seats', 'Custom internal training modules', 'SSO/SAML integration', 'Dedicated technical account mentor']
  },
  {
    id: 14,
    title: 'Lifetime Individual Pass',
    price: '₹39,999',
    cycle: 'one-time payment',
    popular: false,
    features: ['Permanent access to current & future courses', 'All current and future certifications', 'VIP Discord channels', 'Direct founder office hours access']
  },
  {
    id: 15,
    title: 'Executive Tech Leadership Pass',
    price: '₹6,999',
    cycle: 'billed monthly',
    popular: false,
    features: ['Engineering management tracks', 'System architecture review guides', 'Tech hiring & salary data access', 'Quarterly peer mastermind meetings']
  }
];