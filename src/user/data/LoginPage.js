// ========================================================
// 1. SOCIAL LOGIN & SSO PROVIDERS (8 Items)
// ========================================================
export const socialLoginProviders = [
  { id: 1, name: 'Google', icon: '🌐', variant: 'outline-light' },
  { id: 2, name: 'GitHub', icon: '🐙', variant: 'outline-light' },
  { id: 3, name: 'GitLab', icon: '🦊', variant: 'outline-light' },
  { id: 4, name: 'LinkedIn', icon: '💼', variant: 'outline-light' },
  { id: 5, name: 'Microsoft Azure AD', icon: '🪟', variant: 'outline-light' },
  { id: 6, name: 'Apple ID', icon: '🍎', variant: 'outline-light' },
  { id: 7, name: 'Bitbucket', icon: '🪣', variant: 'outline-light' },
  { id: 8, name: 'Okta Enterprise SSO', icon: '🔑', variant: 'outline-light' }
];

// ========================================================
// 2. PLATFORM VALUE PROPS & HIGHLIGHTS (20 Items)
// ========================================================
export const loginHighlights = [
  { id: 1, icon: '⚡', title: '500+ Project-Driven Courses', desc: 'Resume your active progress across React, AI, Cloud, and Design tracks.' },
  { id: 2, icon: '💻', title: 'Cloud Terminal IDE Sandboxes', desc: 'Jump straight back into your containerized dev environments.' },
  { id: 3, icon: '💬', title: '50K+ Active Developer Discord', desc: 'Collaborate with peers, attend live stages, and receive mentor reviews.' },
  { id: 4, icon: '🚀', title: 'Continuous Career Velocity', desc: 'Average alumni report a 42% salary bump within 6 months of course completion.' },
  { id: 5, icon: '🎯', title: 'Zero Tutorial Hell', desc: 'Build production software with actual unit tests, CI/CD pipelines, and pull requests.' },
  { id: 6, icon: '🤖', title: 'Dedicated Cloud GPU Access', desc: 'Fine-tune large language models and deploy containerized PyTorch clusters.' },
  { id: 7, icon: '🏆', title: 'Cryptographic Credentials', desc: 'Share tamper-proof certificates with unique verification links directly to LinkedIn.' },
  { id: 8, icon: '🌍', title: 'Worldwide Study Circles', desc: 'Join study rooms across Europe, Asia-Pacific, and Americas with 24/7 peer collaboration.' },
  { id: 9, icon: '📱', title: 'Seamless Mobile Sync', desc: 'Read course docs and watch offline 1080p lesson replays on iOS and Android.' },
  { id: 10, icon: '🧠', title: 'Staff Engineer Mentorship', desc: 'Get direct code review critiques from tech leads at Google, Meta, and AWS.' },
  { id: 11, icon: '🛡️', title: 'Enterprise AppSec Principles', desc: 'Learn OWASP vulnerability mitigation and zero-trust identity architectures.' },
  { id: 12, icon: '📦', title: 'Complete Starter Boilerplates', desc: 'Download curated Monorepo, Docker Compose, and Next.js starter templates.' },
  { id: 13, icon: '🎙️', title: 'Weekly Live Coding Stages', desc: 'Participate in live interactive Discord coding clinics and architecture teardowns.' },
  { id: 14, icon: '📐', title: 'Design & Code Synchronization', desc: 'Connect Figma design tokens to modern Tailwind CSS and React component libraries.' },
  { id: 15, icon: '🤝', title: '850+ Hiring Partner Referrals', desc: 'Top learners get fast-tracked directly into engineering technical screenings.' },
  { id: 16, icon: '⏱️', title: 'Self-Paced Flexible Schedules', desc: 'Retain lifetime access to curriculums without recurring renewal pressure.' },
  { id: 17, icon: '🧪', title: 'Automated Test Feedback', desc: 'Instant automated test grading against your submitted GitHub pull requests.' },
  { id: 18, icon: '📊', title: 'Skill Telemetry Dashboards', desc: 'Track your algorithmic proficiency and framework strengths with visual radar charts.' },
  { id: 19, icon: '💡', title: 'Modern Framework Currency', desc: 'Curriculums consistently updated within weeks of major framework releases.' },
  { id: 20, icon: '🎟️', title: 'Free Cohort Webinar Passes', desc: 'Subscribers receive VIP admission to weekend hackathons and guest masterclasses.' }
];

// ========================================================
// 3. SECURITY & COMPLIANCE BADGES (15 Items)
// ========================================================
export const trustBadges = [
  '256-Bit SSL Encrypted',
  'Multi-Factor Authentication Supported',
  'GDPR & SOC-2 Compliant',
  'ISO/IEC 27001 Certified Infrastructure',
  'PCI-DSS Level 1 Secure Payments',
  'Zero-Knowledge Password Hashing (Argon2id)',
  'Encrypted Database Storage At Rest',
  'Continuous Threat Monitoring with AWS GuardDuty',
  'OpenID Connect (OIDC) & SAML 2.0 Ready',
  'Automated Brute-Force Rate Limiting',
  'Strict Content Security Policy (CSP)',
  'Regular Third-Party Penetration Audited',
  'CCPA California Privacy Rights Certified',
  'Cloudflare DDoS Enterprise Shielded',
  'Cryptographic Session Cookie Security'
];

// ========================================================
// 4. ROTATING TECH QUOTES & MICRO-LESSONS (100 Items)
// ========================================================
const quoteAuthors = [
  'Martin Fowler', 'Kent Beck', 'Linus Torvalds', 'Grace Hopper',
  'Robert C. Martin', 'Ada Lovelace', 'Alan Kay', 'Margaret Hamilton',
  'Bjarne Stroustrup', 'Donald Knuth', 'Guido van Rossum', 'Brendan Eich'
];

const techWisdom = [
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Simplicity is prerequisite for reliability. Always design components that do one thing cleanly.',
  'Make it work, make it right, make it fast. In that exact order.',
  'Talk is cheap. Show me the code and the automated test suite that validates it.',
  'The most dangerous phrase in engineering is: We have always done it this way.',
  'Premature optimization is the root of all evil in software architecture.',
  'Clean code always looks like it was written by someone who cares deeply about the user.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, write code as simply as possible.'
];

export const loginInspirationalQuotes = Array.from({ length: 100 }, (_, idx) => ({
  id: idx + 1,
  quote: techWisdom[idx % techWisdom.length],
  author: quoteAuthors[idx % quoteAuthors.length],
  topic: ['Clean Code', 'System Design', 'Testing', 'Architecture', 'Refactoring'][idx % 5],
  edition: `Wisdom Ref #${idx + 1}`
}));

// ========================================================
// 5. ALUMNI SUCCESS & JOB PLACEMENTS (80 Items)
// ========================================================
const alumniNames = [
  'Julian Martinez', 'Priya Nambiar', 'Carlos Silva', 'Amina Sheikh', 'Lukas Becker',
  'Tanya Novak', 'Michael Zhang', 'Hannah Abbott', 'David Chen', 'Fatima Al-Sayed',
  'Devon Vance', 'Ananya Roy', 'Liam Murphy', 'Dmitry Ivanov', 'Emily Tanaka', 'Marcus Aurelius'
];

const techCompanies = [
  'Meta Platforms', 'Stripe', 'Amazon Web Services', 'Vercel', 'Canva',
  'Cloudflare', 'DeepMind', 'Spotify', 'Shopify', 'Netflix Engineering'
];

const placementStories = [
  'Logged in daily for 4 months to master Next.js 15 Server Actions and landed my dream Senior Frontend role.',
  'The Docker and Kubernetes cloud sandboxes gave me the exact hands-on experience needed for my DevOps screening.',
  'Rewrote our entire startup billing engine after taking the Stripe and microservices track here.',
  'Transitioned from non-tech marketing into full-stack software development within 8 months of consistent study.',
  'Elena Rostova design system lessons allowed me to build an enterprise UI component library that impressed Canva.'
];

export const loginAlumniSuccess = Array.from({ length: 80 }, (_, idx) => ({
  id: idx + 1,
  alumni: `${alumniNames[idx % alumniNames.length]} ${idx >= 16 ? `(#${idx + 1})` : ''}`,
  role: ['Senior Frontend Engineer', 'Cloud DevOps Lead', 'Product Designer', 'Data Scientist', 'AI Engineer'][idx % 5],
  hiredAt: techCompanies[idx % techCompanies.length],
  story: placementStories[idx % placementStories.length],
  year: 2024 + (idx % 3)
}));

// ========================================================
// 6. LOGIN & ACCOUNT RECOVERY FAQS (50 Items)
// ========================================================
const faqQuestionTemplates = [
  'What should I do if I forgot my account password?',
  'How do I enable Multi-Factor Authentication (MFA) on my account?',
  'Can I merge multiple logins if I signed in with both GitHub and Google?',
  'Why am I receiving an "Invalid Credentials" error when my password is correct?',
  'How long does the "Remember me" session cookie keep me logged in?',
  'Is it safe to log into Learnify on public library or coffee shop Wi-Fi?',
  'What should I do if I am not receiving the password reset verification email?',
  'Can I change the primary email address associated with my subscription?',
  'How do I log out of all active browser sessions across different devices?',
  'Does Learnify support passwordless login via biometric Passkeys (WebAuthn)?'
];

export const loginHelpFaqs = Array.from({ length: 50 }, (_, idx) => ({
  id: idx + 1,
  question: `${faqQuestionTemplates[idx % 10]} ${idx >= 10 ? `[Query #${Math.floor(idx / 10) + 1}]` : ''}`,
  answer: 'Click "Forgot Password" on the login screen to receive a secure 1-hour reset token via email. You can also configure hardware security keys and Google Authenticator within your security dashboard.',
  category: idx % 2 === 0 ? 'Authentication & Recovery' : 'Account Security & MFA'
}));

// ========================================================
// 7. ENTERPRISE CLIENT SSO ORGANIZATIONS (40 Items)
// ========================================================
const enterpriseClients = [
  'Uber Technologies', 'Airbnb Engineering', 'Datadog Systems', 'Snowflake Data',
  'Twilio Cloud', 'GitHub Staff', 'GitLab Global', 'Cisco Academy',
  'Salesforce Labs', 'Adobe Creative Cloud', 'Atlassian Engineering', 'MongoDB University'
];

export const enterpriseSSOOrgs = Array.from({ length: 40 }, (_, idx) => ({
  id: idx + 1,
  orgName: `${enterpriseClients[idx % enterpriseClients.length]} ${idx >= 12 ? `(Div ${Math.floor(idx / 12) + 1})` : ''}`,
  domain: `@${enterpriseClients[idx % enterpriseClients.length].toLowerCase().replace(/\s+/g, '')}.com`,
  ssoProtocol: ['SAML 2.0', 'OIDC', 'Okta Verify', 'Azure AD'][idx % 4],
  seatsProvisioned: (idx % 15) * 20 + 50
}));