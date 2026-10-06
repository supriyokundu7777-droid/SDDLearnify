// ==========================================
// 1. CORE & SPECIALIZATION TIERS (20 Items)
// ==========================================
export const pricingTiers = [
  {
    id: 1,
    title: 'Starter Free',
    badge: 'Beginner',
    monthlyPrice: 0,
    annualPrice: 0,
    billingPeriod: 'forever',
    description: 'Perfect for learning coding fundamentals and trying our interactive exercises.',
    popular: false,
    ctaText: 'Start Learning Free',
    ctaVariant: 'outline-light',
    features: [
      { text: 'Access to 25+ introductory courses', included: true },
      { text: 'Community Discord server access', included: true },
      { text: 'Standard 720p video streaming', included: true },
      { text: 'Interactive browser code playground', included: true },
      { text: 'Verified certificates of completion', included: false },
      { text: 'Downloadable source code & slide decks', included: false },
      { text: 'Weekly live instructor Q&A webinars', included: false },
      { text: '1-on-1 portfolio & resume reviews', included: false }
    ]
  },
  {
    id: 2,
    title: 'Individual Pro',
    badge: 'Most Popular',
    monthlyPrice: 1499,
    annualPrice: 1299,
    billingPeriod: 'per month',
    description: 'Everything you need to master modern software engineering, design, and AI.',
    popular: true,
    ctaText: 'Start 7-Day Free Trial',
    ctaVariant: 'info',
    features: [
      { text: 'Full access to 500+ courses & bootcamps', included: true },
      { text: 'Verified digital shareable certificates', included: true },
      { text: 'HD 1080p video streaming & offline sync', included: true },
      { text: 'Downloadable GitHub repositories & slides', included: true },
      { text: 'Weekly live mentor Q&A office hours', included: true },
      { text: 'Interactive cloud GPU sandboxes (50 hrs/mo)', included: true },
      { text: 'Priority community Discord channels', included: true },
      { text: '1-on-1 quarterly mentor code critique', included: false }
    ]
  },
  {
    id: 3,
    title: 'Career Accelerator',
    badge: 'Job Ready',
    monthlyPrice: 2999,
    annualPrice: 2499,
    billingPeriod: 'per month',
    description: 'Dedicated mentorship, mock interviews, and direct hiring partner referrals.',
    popular: false,
    ctaText: 'Join Career Track',
    ctaVariant: 'outline-info',
    features: [
      { text: 'Everything included in Individual Pro', included: true },
      { text: 'Bi-weekly 1-on-1 mentor video calls', included: true },
      { text: 'Mock technical & system design interviews', included: true },
      { text: 'Personal portfolio & resume rewriting clinic', included: true },
      { text: 'Direct referrals to 850+ tech hiring partners', included: true },
      { text: 'Uncapped cloud GPU sandbox hours', included: true },
      { text: 'VIP Discord lounge with alumni staff engineers', included: true },
      { text: 'Money-back job placement guarantee', included: true }
    ]
  },
  {
    id: 4,
    title: 'Student Scholar Pass',
    badge: 'Education (.edu)',
    monthlyPrice: 999,
    annualPrice: 999,
    billingPeriod: 'per month',
    description: 'Discounted access for actively enrolled university & college students.',
    popular: false,
    ctaText: 'Verify Student ID',
    ctaVariant: 'outline-light',
    features: [
      { text: 'Full catalog access to 500+ courses', included: true },
      { text: 'Verified student completion badges', included: true },
      { text: 'Campus Discord study channels', included: true },
      { text: 'Standard CPU cloud sandboxes', included: true },
      { text: '1-on-1 mock technical interviews', included: false }
    ]
  },
  {
    id: 5,
    title: 'Frontend Specialist Pass',
    badge: 'Web Track',
    monthlyPrice: 1899,
    annualPrice: 1499,
    billingPeriod: 'per month',
    description: 'Focused strictly on React 19, Next.js 15, Vue, TypeScript, and UI systems.',
    popular: false,
    ctaText: 'Start Frontend Track',
    ctaVariant: 'outline-info',
    features: [
      { text: 'All 140+ Web Development courses', included: true },
      { text: 'Weekly CSS & responsive layout teardowns', included: true },
      { text: 'Interactive DOM browser environments', included: true },
      { text: 'Figma to React component token kits', included: true },
      { text: 'Micro-frontend architecture blueprints', included: true }
    ]
  },
  {
    id: 6,
    title: 'AI & Data Science Specialist',
    badge: 'AI Masterclass',
    monthlyPrice: 2499,
    annualPrice: 2199,
    billingPeriod: 'per month',
    description: 'Dedicated GPU cloud clusters, PyTorch, LangChain, and LLM fine-tuning tracks.',
    popular: false,
    ctaText: 'Access AI Clusters',
    ctaVariant: 'outline-info',
    features: [
      { text: 'All 110+ Data Science & AI courses', included: true },
      { text: '100 dedicated A10G Cloud GPU hours/month', included: true },
      { text: 'HuggingFace & LoRA fine-tuning sandboxes', included: true },
      { text: 'Vector database credits (Pinecone / Qdrant)', included: true },
      { text: 'Bi-weekly AI research paper teardowns', included: true }
    ]
  },
  {
    id: 7,
    title: 'Cloud DevOps & SRE Pass',
    badge: 'Cloud Native',
    monthlyPrice: 2199,
    annualPrice: 1899,
    billingPeriod: 'per month',
    description: 'AWS, Azure, GCP certification prep, Kubernetes clusters, and Terraform labs.',
    popular: false,
    ctaText: 'Start Cloud Labs',
    ctaVariant: 'outline-info',
    features: [
      { text: 'All 75+ Cloud & DevOps courses', included: true },
      { text: 'Disposable multi-node Kubernetes clusters', included: true },
      { text: 'AWS & Azure practice exam simulator', included: true },
      { text: 'Terraform & Helm production blueprints', included: true },
      { text: 'Zero-downtime rolling update simulators', included: true }
    ]
  },
  {
    id: 8,
    title: 'Cyber Security Ops Pass',
    badge: 'SecOps Lab',
    monthlyPrice: 2499,
    annualPrice: 1899,
    billingPeriod: 'per month',
    description: 'Ethical hacking sandboxes, OWASP web pentesting, and SOC alert simulations.',
    popular: false,
    ctaText: 'Enter SecOps Lab',
    ctaVariant: 'outline-info',
    features: [
      { text: 'All 55+ Cyber Security courses', included: true },
      { text: 'Browser-based isolated Kali Linux labs', included: true },
      { text: 'Simulated vulnerability targets (OWASP)', included: true },
      { text: 'Bug Bounty reporting methodology guides', included: true },
      { text: 'SIEM & Splunk log correlation challenges', included: true }
    ]
  },
  {
    id: 9,
    title: 'Mobile App Developer Pass',
    badge: 'Mobile Track',
    monthlyPrice: 1899,
    annualPrice: 1499,
    billingPeriod: 'per month',
    description: 'Complete cross-platform mastery with Flutter, React Native, and SwiftUI.',
    popular: false,
    ctaText: 'Start Mobile Track',
    ctaVariant: 'outline-info',
    features: [
      { text: 'All 70+ Mobile Development courses', included: true },
      { text: 'Cloud iOS & Android build test devices', included: true },
      { text: 'App Store & Google Play launch checklists', included: true },
      { text: 'Offline-first database sync architectures', included: true },
      { text: 'Fluid 60fps micro-interaction libraries', included: true }
    ]
  },
  {
    id: 10,
    title: 'Web3 & Blockchain Pass',
    badge: 'Smart Contracts',
    monthlyPrice: 2499,
    annualPrice: 2199,
    billingPeriod: 'per month',
    description: 'Solidity, Rust, DeFi protocols, and smart contract security auditing.',
    popular: false,
    ctaText: 'Start Web3 Track',
    ctaVariant: 'outline-info',
    features: [
      { text: 'All 40+ Web3 & Blockchain courses', included: true },
      { text: 'Foundry & Hardhat automated test pipelines', included: true },
      { text: 'Smart contract vulnerability audit sandboxes', included: true },
      { text: 'Testnet faucet automated integrations', included: true },
      { text: 'Private Web3 protocol developer lounge', included: true }
    ]
  },
  {
    id: 11,
    title: 'UI/UX Design Studio Pass',
    badge: 'Design Track',
    monthlyPrice: 1499,
    annualPrice: 1299,
    billingPeriod: 'per month',
    description: 'Figma design systems, variables, user research, and Framer development.',
    popular: false,
    ctaText: 'Start Design Track',
    ctaVariant: 'outline-info',
    features: [
      { text: 'All 85+ UI/UX Design courses', included: true },
      { text: 'Enterprise Figma UI component libraries', included: true },
      { text: 'Weekly live portfolio critique sessions', included: true },
      { text: 'Design token code hand-off templates', included: true },
      { text: 'Framer & Rive animation source files', included: true }
    ]
  },
  {
    id: 12,
    title: 'Game Development Pass',
    badge: 'Game Engine',
    monthlyPrice: 2199,
    annualPrice: 1899,
    billingPeriod: 'per month',
    description: 'Unreal Engine 5.5, Unity 6, Blender 3D modeling, and C++ game physics.',
    popular: false,
    ctaText: 'Start Game Dev',
    ctaVariant: 'outline-info',
    features: [
      { text: 'All 45+ Game Development courses', included: true },
      { text: 'High-res 3D asset packs & texture sets', included: true },
      { text: 'Multiplayer server networking modules', included: true },
      { text: 'Shader programming with HLSL / GLSL', included: true },
      { text: 'Publishing guides for Steam & Epic Store', included: true }
    ]
  },
  {
    id: 13,
    title: 'QA & Automated Testing Pass',
    badge: 'QA Engineer',
    monthlyPrice: 1899,
    annualPrice: 1499,
    billingPeriod: 'per month',
    description: 'Playwright, Cypress, Selenium, and CI/CD test automation pipelines.',
    popular: false,
    ctaText: 'Start QA Track',
    ctaVariant: 'outline-info',
    features: [
      { text: 'All 50+ Testing & QA courses', included: true },
      { text: 'Headless browser cluster test runners', included: true },
      { text: 'API load testing with k6 & JMeter', included: true },
      { text: 'ISTQB certification study guides', included: true },
      { text: 'Automated regression test templates', included: true }
    ]
  },
  {
    id: 14,
    title: 'Software Architect Masterclass',
    badge: 'Staff Engineer',
    monthlyPrice: 3999,
    annualPrice: 2999,
    billingPeriod: 'per month',
    description: 'High-level system design, distributed data patterns, and engineering leadership.',
    popular: false,
    ctaText: 'Start Architect Track',
    ctaVariant: 'outline-info',
    features: [
      { text: 'All Enterprise Architecture tracks', included: true },
      { text: 'System design review office hours', included: true },
      { text: 'Engineering management case studies', included: true },
      { text: 'RFC & architecture design doc templates', included: true },
      { text: 'Direct mentorship with Staff Engineers', included: true }
    ]
  },
  {
    id: 15,
    title: 'Bootcamp Cohort Immersion',
    badge: '12-Week Intensive',
    monthlyPrice: 14999,
    annualPrice: 11999,
    billingPeriod: 'per month (3-mo commitment)',
    description: 'Full-time immersive curriculum with daily standups, code reviews, and capstones.',
    popular: false,
    ctaText: 'Apply For Cohort',
    ctaVariant: 'outline-info',
    features: [
      { text: 'Live daily instructor-led standups', included: true },
      { text: 'Mandatory pair-programming sprints', included: true },
      { text: 'Personal dedicated senior mentor', included: true },
      { text: 'Capstone production launch support', included: true },
      { text: 'Guaranteed tech interview guarantee', included: true }
    ]
  },
  {
    id: 16,
    title: 'Team Essentials (Up to 5 Seats)',
    badge: 'Small Team',
    monthlyPrice: 6999,
    annualPrice: 5499,
    billingPeriod: 'per month (billed annually)',
    description: 'Ideal for startup development teams upskilling on modern tech stacks.',
    popular: false,
    ctaText: 'Get Team Pass',
    ctaVariant: 'outline-light',
    features: [
      { text: '5 Individual Pro licenses included', included: true },
      { text: 'Centralized admin billing invoice', included: true },
      { text: 'Shared team code sandbox workspace', included: true },
      { text: 'Basic team progress analytics', included: true }
    ]
  },
  {
    id: 17,
    title: 'Team Growth (Up to 20 Seats)',
    badge: 'Growing Org',
    monthlyPrice: 21999,
    annualPrice: 17499,
    billingPeriod: 'per month (billed annually)',
    description: 'Designed for scaling engineering teams adopting cloud microservices & AI.',
    popular: false,
    ctaText: 'Upgrade Team',
    ctaVariant: 'outline-light',
    features: [
      { text: '20 Individual Pro licenses included', included: true },
      { text: 'Custom team learning paths', included: true },
      { text: 'Dedicated Slack support channel', included: true },
      { text: 'Quarterly private team Q&A workshop', included: true }
    ]
  },
  {
    id: 18,
    title: 'Corporate Division (Up to 50 Seats)',
    badge: 'Enterprise Dept',
    monthlyPrice: 49999,
    annualPrice: 39999,
    billingPeriod: 'per month (billed annually)',
    description: 'Full enterprise departmental upskilling with LMS integration and analytics.',
    popular: false,
    ctaText: 'Contact Division Sales',
    ctaVariant: 'outline-light',
    features: [
      { text: '50 Pro licenses with SSO / Okta', included: true },
      { text: 'SCIM automated user provisioning', included: true },
      { text: 'Bi-weekly dedicated office hours', included: true },
      { text: 'Executive skill benchmark reports', included: true }
    ]
  },
  {
    id: 19,
    title: 'Global Enterprise Unlimited',
    badge: 'Custom Scale',
    monthlyPrice: 89999,
    annualPrice: 71999,
    billingPeriod: 'per month (billed annually)',
    description: 'Unlimited team seats for Fortune 500 organizations with custom training modules.',
    popular: false,
    ctaText: 'Schedule Consultation',
    ctaVariant: 'outline-light',
    features: [
      { text: 'Unlimited seats across global offices', included: true },
      { text: 'Custom internal video modules creation', included: true },
      { text: 'On-site quarterly instructor workshops', included: true },
      { text: 'Dedicated 24/7 technical account team', included: true }
    ]
  },
  {
    id: 20,
    title: 'Lifetime Individual Founder Pass',
    badge: 'One-Time VIP',
    monthlyPrice: 44999,
    annualPrice: 44999,
    billingPeriod: 'one-time lifetime payment',
    description: 'Pay once, own Learnify forever. Access every current and future course released.',
    popular: false,
    ctaText: 'Get Lifetime Access',
    ctaVariant: 'outline-info',
    features: [
      { text: 'Permanent access to all 500+ courses', included: true },
      { text: 'All future bootcamps automatically included', included: true },
      { text: 'VIP founder channel in Discord', included: true },
      { text: 'Unlimited cloud sandboxes for life', included: true },
      { text: 'Exclusive quarterly roadmap voting rights', included: true }
    ]
  }
];

// ==========================================
// 2. FEATURE COMPARISON MATRIX (30 Specs)
// ==========================================
export const comparisonFeatures = [
  { feature: 'Course Library Access', free: '25 Courses', pro: '500+ Courses', accelerator: 'All Access + Cohorts' },
  { feature: 'Completion Certificates', free: false, pro: true, accelerator: true },
  { feature: 'Downloadable Repositories', free: false, pro: true, accelerator: true },
  { feature: 'Cloud Sandbox Compute', free: 'Basic (CPU)', pro: '50 GPU Hrs/mo', accelerator: 'Unlimited GPU' },
  { feature: 'Live Instructor Webinars', free: false, pro: 'Weekly', accelerator: 'Unlimited + VIP' },
  { feature: '1-on-1 Code Reviews', free: false, pro: false, accelerator: 'Bi-Weekly' },
  { feature: 'Mock Technical Interviews', free: false, pro: false, accelerator: true },
  { feature: 'Hiring Network Referrals', free: false, pro: false, accelerator: true },
  { feature: 'High-Definition Video (1080p)', free: false, pro: true, accelerator: true },
  { feature: 'Mobile App Offline Sync', free: false, pro: true, accelerator: true },
  { feature: 'Community Discord Access', free: 'Public Lounges', pro: 'Priority Channels', accelerator: 'VIP Alumni Guild' },
  { feature: 'Direct Instructor Q&A', free: false, pro: true, accelerator: 'Priority Direct Message' },
  { feature: 'Resume & Portfolio Teardown', free: false, pro: false, accelerator: 'Guaranteed Review' },
  { feature: 'Access to Pre-Release Betas', free: false, pro: true, accelerator: true },
  { feature: 'Cloud Kubernetes Labs', free: false, pro: 'Shared Cluster', accelerator: 'Dedicated Node Pool' },
  { feature: 'Automated Quiz Verification', free: true, pro: true, accelerator: true },
  { feature: 'Interactive Terminal Shell', free: true, pro: true, accelerator: true },
  { feature: 'Multi-Lingual Subtitles', free: true, pro: true, accelerator: true },
  { feature: 'Project Starter Boilerplates', free: '5 Kits', pro: '42+ Kits', accelerator: 'All Commercial Kits' },
  { feature: 'Job Placement Guarantee', free: false, pro: false, accelerator: 'Full Money-Back Guarantee' },
  { feature: 'Alumni Network Membership', free: false, pro: true, accelerator: 'Lifetime Access' },
  { feature: 'Enterprise Team Progress Tracking', free: false, pro: false, accelerator: false },
  { feature: 'Single Sign-On (SSO / Okta)', free: false, pro: false, accelerator: false },
  { feature: 'System Design Mock Trials', free: false, pro: false, accelerator: 'Monthly Trials' },
  { feature: 'Private Study Lounges', free: false, pro: true, accelerator: true },
  { feature: 'Commercial Code Usage Rights', free: false, pro: true, accelerator: true },
  { feature: 'Early Access to Framework Updates', free: false, pro: true, accelerator: true },
  { feature: 'Dedicated Technical Mentor', free: false, pro: false, accelerator: 'Assigned Senior Staff' },
  { feature: 'Personalized Learning Roadmap', free: false, pro: true, accelerator: 'Custom Curated' },
  { feature: 'Cryptographic Credential Badges', free: false, pro: true, accelerator: true }
];

// ==========================================
// 3. ENTERPRISE & TEAM TIERS (10 Packages)
// ==========================================
export const enterpriseTier = {
  title: 'Learnify for Teams & Enterprise',
  badge: 'Custom Corporate',
  description: 'Upskill your engineering, product, and data teams with tailored curriculum tracks, centralized progress analytics, and custom SSO/SAML integration.',
  ctaText: 'Contact Enterprise Sales',
  features: [
    'Centralized admin billing & user management',
    'Custom tailored curriculum pathways',
    'Dedicated technical account mentor',
    'SSO/SAML & LMS integrations (SCIM)',
    'Detailed employee skill progress telemetry'
  ]
};

export const enterpriseTierPackages = [
  { id: 1, name: 'Startup Launchpad (5-15 Seats)', seats: '5-15', support: 'Slack Channel Support', sso: false, customTracks: false },
  { id: 2, name: 'Mid-Market Scale (16-50 Seats)', seats: '16-50', support: 'Dedicated Account Manager', sso: true, customTracks: true },
  { id: 3, name: 'Enterprise Global (50-250 Seats)', seats: '50-250', support: '24/7 Priority SLA', sso: true, customTracks: true },
  { id: 4, name: 'Strategic Fortune 500 (250+ Seats)', seats: 'Unlimited', support: 'Executive Sponsor & On-Site Workshops', sso: true, customTracks: true },
  { id: 5, name: 'University Campus License', seats: 'Up to 1,000 Students', support: 'Faculty Pedagogy Support', sso: true, customTracks: true },
  { id: 6, name: 'Government & Public Sector Tier', seats: 'Custom', support: 'FedRAMP & SOC2 Compliant Environment', sso: true, customTracks: true },
  { id: 7, name: 'Agency Reseller White-Label', seats: 'Client Pooled', support: 'Custom Co-Branding Portal', sso: true, customTracks: true },
  { id: 8, name: 'Apprenticeship Bootcamp Partner', seats: 'Cohort Based', support: 'Curriculum Synchronization', sso: false, customTracks: true },
  { id: 9, name: 'Non-Profit & NGO Social Impact', seats: 'Up to 100', support: 'Subsidized Dedicated Support', sso: true, customTracks: false },
  { id: 10, name: 'High School AP Computer Science Track', seats: 'Per Classroom', support: 'Teacher Grading Analytics', sso: true, customTracks: true }
];

// ==========================================
// 4. FREQUENTLY ASKED QUESTIONS (100 Items)
// ==========================================
const baseFaqTopics = [
  { q: 'Can I cancel or switch my plan at any time?', a: 'Yes! You can upgrade, downgrade, or cancel your membership directly from your account settings at any time with zero penalty.' },
  { q: 'How does the 7-day free trial work?', a: 'You will receive unrestricted access to our Individual Pro library for 7 full days. If you cancel before the trial concludes, your card will not be charged.' },
  { q: 'Are there student or regional purchasing discounts available?', a: 'Yes! Students with verified .edu emails receive an additional 30% discount on all annual memberships alongside automatic Purchasing Power Parity (PPP).' },
  { q: 'What is the 30-day money-back satisfaction guarantee?', a: 'If you are unsatisfied with your learning experience for any reason within your first 30 days of subscribing, reach out to support for a prompt full refund.' },
  { q: 'Do certificates expire, and are they recognized by employers?', a: 'All certificates are cryptographically verified with permanent URLs that never expire, recognized by over 850+ global hiring partners.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit/debit cards (Visa, MasterCard, Amex), PayPal, Apple Pay, Google Pay, and wire transfers for annual enterprise contracts.' },
  { q: 'Can I download lessons for offline study?', a: 'Yes! Individual Pro and Career Accelerator members can download lesson videos and lab notes via our iOS and Android mobile apps.' },
  { q: 'What happens to my project progress if I pause my membership?', a: 'All your code submissions, repository branches, and quiz progress are permanently preserved. You can resume anytime without losing data.' },
  { q: 'Does Learnify offer team invoicing with VAT/GST receipts?', a: 'Yes, full tax-compliant invoices with custom VAT/GST numbers, company names, and billing addresses are automatically generated upon payment.' },
  { q: 'Are cloud GPU computing credits included in standard plans?', a: 'Individual Pro accounts include 50 cloud GPU hours each month. Additional GPU compute hours can be provisioned at wholesale cost.' }
];

export const pricingFaqs = Array.from({ length: 100 }, (_, idx) => {
  const base = baseFaqTopics[idx % baseFaqTopics.length];
  const iteration = Math.floor(idx / baseFaqTopics.length);
  return {
    id: idx + 1,
    question: iteration === 0 ? base.q : `${base.q} [Category ${iteration + 1}]`,
    answer: base.a,
    category: ['Billing & Invoices', 'Subscriptions & Trials', 'Certifications', 'Enterprise & Teams', 'Technical Sandboxes'][idx % 5]
  };
});

// ========================================================
// 5. VERIFIED SUBSCRIBER TESTIMONIALS (80 Items Total)
// ========================================================
const subscriberNames = [
  'Julian Martinez', 'Priya Nambiar', 'Carlos Silva', 'Amina Sheikh', 'Lukas Becker',
  'Tanya Novak', 'Michael Zhang', 'Hannah Abbott', 'David Chen', 'Fatima Al-Sayed',
  'Devon Vance', 'Ananya Roy', 'Liam Murphy', 'Dmitry Ivanov', 'Emily Tanaka', 'Marcus Aurelius'
];

const subscriberQuotes = [
  'The Individual Pro subscription paid for itself within two weeks. The Next.js 15 Server Actions course was crucial for my new senior position.',
  'Having access to disposable cloud GPU sandboxes saved me hundreds of dollars compared to renting EC2 instances locally.',
  'The Career Accelerator track helped rewrite my resume and prepared me for system design interviews. Landed an offer at Stripe 3 months later.',
  'Clear, up-to-date, and zero fluff. Best learning investment I have ever made in my 8 years of software engineering.',
  'Our startup moved 15 developers onto the Team Growth tier. The shared sandboxes accelerated our microservices refactor tremendously.'
];

export const pricingTestimonials = Array.from({ length: 80 }, (_, idx) => ({
  id: idx + 1,
  name: `${subscriberNames[idx % subscriberNames.length]} ${idx >= 16 ? `(#${idx + 1})` : ''}`,
  role: ['Senior Frontend Dev', 'Staff Cloud Architect', 'Product Designer', 'DevOps Specialist', 'AI Engineer'][idx % 5],
  company: ['Vercel', 'Meta', 'Stripe', 'AWS', 'Spotify'][idx % 5],
  plan: ['Individual Pro (Annual)', 'Career Accelerator', 'Team Growth', 'Frontend Specialist'][idx % 4],
  comment: subscriberQuotes[idx % subscriberQuotes.length],
  rating: 5
}));

// ========================================================
// 6. CORPORATE & ACADEMIC PARTNERS (40 Items Total)
// ========================================================
const partnerCompanyList = [
  'Google Cloud', 'Amazon Web Services', 'Microsoft Azure', 'Meta Platforms',
  'Stripe', 'Spotify', 'Netflix Engineering', 'Vercel', 'Uber Tech',
  'Airbnb', 'Datadog', 'Snowflake', 'Twilio', 'GitHub', 'GitLab',
  'Cisco Systems', 'Shopify', 'Salesforce', 'Adobe', 'Cloudflare'
];

export const pricingPartners = Array.from({ length: 40 }, (_, idx) => ({
  id: idx + 1,
  name: `${partnerCompanyList[idx % partnerCompanyList.length]} ${idx >= 20 ? `(Global Branch ${Math.floor(idx / 20) + 1})` : ''}`,
  category: idx % 2 === 0 ? 'Enterprise Upskilling' : 'Hiring Partner',
  alumniHired: (idx % 25) + 12
}));

// ==========================================
// 7. REGIONAL PPP DISCOUNTS (30 Countries)
// ==========================================
export const regionalDiscounts = [
  { country: 'India', code: 'IN', discount: '60% Off', currency: 'INR (₹)' },
  { country: 'Brazil', code: 'BR', discount: '55% Off', currency: 'BRL (R$)' },
  { country: 'Nigeria', code: 'NG', discount: '65% Off', currency: 'NGN (₦)' },
  { country: 'Indonesia', code: 'ID', discount: '55% Off', currency: 'IDR (Rp)' },
  { country: 'Philippines', code: 'PH', discount: '50% Off', currency: 'PHP (₱)' },
  { country: 'Vietnam', code: 'VN', discount: '55% Off', currency: 'VND (₫)' },
  { country: 'Egypt', code: 'EG', discount: '60% Off', currency: 'EGP (E£)' },
  { country: 'Pakistan', code: 'PK', discount: '65% Off', currency: 'PKR (Rs)' },
  { country: 'Bangladesh', code: 'BD', discount: '65% Off', currency: 'BDT (৳)' },
  { country: 'Kenya', code: 'KE', discount: '60% Off', currency: 'KES (KSh)' },
  { country: 'Colombia', code: 'CO', discount: '50% Off', currency: 'COP ($)' },
  { country: 'Argentina', code: 'AR', discount: '60% Off', currency: 'ARS ($)' },
  { country: 'South Africa', code: 'ZA', discount: '45% Off', currency: 'ZAR (R)' },
  { country: 'Turkey', code: 'TR', discount: '55% Off', currency: 'TRY (₺)' },
  { country: 'Malaysia', code: 'MY', discount: '40% Off', currency: 'MYR (RM)' },
  { country: 'Thailand', code: 'TH', discount: '45% Off', currency: 'THB (฿)' },
  { country: 'Mexico', code: 'MX', discount: '40% Off', currency: 'MXN ($)' },
  { country: 'Peru', code: 'PE', discount: '50% Off', currency: 'PEN (S/.)' },
  { country: 'Chile', code: 'CL', discount: '35% Off', currency: 'CLP ($)' },
  { country: 'Ghana', code: 'GH', discount: '60% Off', currency: 'GHS (GH₵)' },
  { country: 'Morocco', code: 'MA', discount: '50% Off', currency: 'MAD (DH)' },
  { country: 'Romania', code: 'RO', discount: '35% Off', currency: 'RON (lei)' },
  { country: 'Poland', code: 'PL', discount: '30% Off', currency: 'PLN (zł)' },
  { country: 'Hungary', code: 'HU', discount: '35% Off', currency: 'HUF (Ft)' },
  { country: 'Czech Republic', code: 'CZ', discount: '25% Off', currency: 'CZK (Kč)' },
  { country: 'Greece', code: 'GR', discount: '25% Off', currency: 'EUR (€)' },
  { country: 'Portugal', code: 'PT', discount: '25% Off', currency: 'EUR (€)' },
  { country: 'Sri Lanka', code: 'LK', discount: '65% Off', currency: 'LKR (Rs)' },
  { country: 'Nepal', code: 'NP', discount: '65% Off', currency: 'NPR (Rs)' },
  { country: 'Ukraine', code: 'UA', discount: '55% Off', currency: 'UAH (₴)' }
];