// ==========================================
// 1. FAQ CATEGORIES (12 Items)
// ==========================================
export const faqCategories = [
  { id: 'all', name: 'All Questions', icon: '❓' },
  { id: 'general', name: 'General & Platform', icon: '🌐' },
  { id: 'courses', name: 'Courses & Curriculum', icon: '📚' },
  { id: 'billing', name: 'Billing & Subscriptions', icon: '💳' },
  { id: 'technical', name: 'Labs & Technical Setup', icon: '💻' },
  { id: 'certificates', name: 'Certificates & Careers', icon: '🎓' },
  { id: 'cohorts', name: 'Cohorts & Live Events', icon: '🎙️' },
  { id: 'mentorship', name: 'Mentorship & 1-on-1s', icon: '🤝' },
  { id: 'enterprise', name: 'Teams & Enterprise', icon: '🏢' },
  { id: 'community', name: 'Community & Discord', icon: '💬' },
  { id: 'security', name: 'Security & Privacy', icon: '🛡️' },
  { id: 'projects', name: 'Capstones & Git Repos', icon: '📦' }
];

// Helper base question blueprints
const baseFaqList = [
  // General & Platform
  {
    cat: 'general',
    q: 'What makes Learnify different from other online learning platforms?',
    a: 'Learnify focuses strictly on production-ready engineering and design. Instead of passive video watching, every module requires you to write, test, debug, and deploy real code into isolated cloud browser sandboxes with automated test suites and live mentor reviews.'
  },
  {
    cat: 'general',
    q: 'Can I learn completely at my own schedule and pace?',
    a: 'Yes! All self-paced courses, recordings, slide decks, and code repositories are available 24/7 with lifetime access. You can pause, rewind, and re-watch lectures whenever it fits your daily routine.'
  },
  {
    cat: 'general',
    q: 'Is there a mobile application available for offline viewing?',
    a: 'Yes, our mobile apps for iOS and Android allow Pro and Accelerator students to download full lecture modules, slides, and transcripts for offline learning during commutes or travel.'
  },
  {
    cat: 'general',
    q: 'How do I change my primary account email or password?',
    a: 'Navigate to your Account Settings via the top-right profile avatar. Under the Security tab, you can update your email address, reset your password, and enable Multi-Factor Authentication (MFA).'
  },
  {
    cat: 'general',
    q: 'What are the system and browser requirements for the platform?',
    a: 'Any modern web browser (Google Chrome, Mozilla Firefox, Brave, Microsoft Edge, or Safari) with JavaScript enabled. We recommend Chrome or Brave for optimal WebAssembly terminal performance.'
  },

  // Courses & Curriculum
  {
    cat: 'courses',
    q: 'How often are course code repositories and versions updated?',
    a: 'Our instructional engineering faculty updates course repos within weeks of major framework releases (such as React 19, Next.js 15, and Tailwind CSS 4). You never have to worry about learning deprecated syntax or broken package dependencies.'
  },
  {
    cat: 'courses',
    q: 'Do I get access to real GitHub starter repositories and assets?',
    a: 'Yes! Every course includes production starter boilerplates, Docker Compose configuration files, Figma UI design tokens, seed databases, and testing setups hosted directly on our verified GitHub organization.'
  },
  {
    cat: 'courses',
    q: 'Are courses project-based or purely theoretical?',
    a: 'All courses are 100% project-driven. You build full-stack web applications, microservices, AI agents, mobile apps, or design systems that are deployed live to production cloud providers.'
  },
  {
    cat: 'courses',
    q: 'Can I suggest new frameworks or topics for upcoming courses?',
    a: 'Absolutely! Our quarterly curriculum roadmap is voted on by our student and alumni community in the private Discord server under the #curriculum-requests channel.'
  },
  {
    cat: 'courses',
    q: 'Do you provide downloadable slides and cheat sheets?',
    a: 'Yes, all modules come with downloadable summary PDF slide decks, architecture diagrams, command-line cheat sheets, and documentation links.'
  },

  // Technical & Labs
  {
    cat: 'technical',
    q: 'Do I need a high-end computer or GPU to run AI and machine learning labs?',
    a: 'No. Individual Pro and AI Specialist members receive dedicated cloud GPU compute hours. All model fine-tuning, vector database indexing, and Docker container builds execute remotely inside our browser-based cloud terminal.'
  },
  {
    cat: 'technical',
    q: 'What should I do if I get stuck on a coding bug or build error?',
    a: 'You have multiple support channels: post your error log in our active 50,000+ member private Discord server, submit a question in the course discussion forum, or attend our weekly live mentor office hours for screen-shared debugging.'
  },
  {
    cat: 'technical',
    q: 'How do the cloud browser coding sandboxes work?',
    a: 'Our cloud IDE runs containerized Docker instances with VS Code Web technology. Dependencies, runtimes, and databases are pre-installed, allowing you to code and preview live apps in seconds.'
  },
  {
    cat: 'technical',
    q: 'Are my code submissions evaluated automatically or manually?',
    a: 'Code exercises utilize automated CI/CD test runners providing instant pass/fail feedback. Capstone projects in Career Accelerator tracks undergo manual code reviews by Senior Staff Engineers.'
  },
  {
    cat: 'technical',
    q: 'Can I clone course repos and run them locally on my own machine?',
    a: 'Yes! Every lesson has an accompanying public or private GitHub repository branch that you can clone via git and run using standard npm, pnpm, or Docker commands.'
  },

  // Billing & Subscriptions
  {
    cat: 'billing',
    q: 'Can I cancel or switch my membership plan at any time?',
    a: 'Yes. You can upgrade, downgrade, or cancel your subscription anytime with one click in your account settings. If you cancel, your access continues undisturbed until the end of your current prepaid billing cycle.'
  },
  {
    cat: 'billing',
    q: 'What is your 30-day refund policy?',
    a: 'We offer an unconditional 30-day money-back satisfaction guarantee on all individual subscriptions and course passes. If the material does not meet your expectations, simply email support for a prompt, full refund.'
  },
  {
    cat: 'billing',
    q: 'Do you offer student or academic discounts?',
    a: 'Yes! Students with verified .edu or college email addresses receive an automatic 30% discount on all annual Pro and Accelerator plans via our student verification portal.'
  },
  {
    cat: 'billing',
    q: 'Are taxes and VAT/GST invoices provided for business expense reimbursement?',
    a: 'Yes. Automatic PDF tax invoices detailing VAT/GST numbers, company names, and billing addresses are emailed instantly after every successful transaction.'
  },
  {
    cat: 'billing',
    q: 'What payment gateways and currencies do you support?',
    a: 'We accept Visa, MasterCard, American Express, PayPal, Apple Pay, Google Pay, and localized bank transfer payment options across over 140 countries.'
  },

  // Certificates & Careers
  {
    cat: 'certificates',
    q: 'Are Learnify certificates recognized and verifiable by tech employers?',
    a: 'Yes. Each certificate includes a unique cryptographic verification URL and QR code that can be embedded directly onto LinkedIn, CVs, and GitHub profiles. Over 850+ global technology partners actively verify student credentials through our portal.'
  },
  {
    cat: 'certificates',
    q: 'Does Learnify provide job placement and interview coaching?',
    a: 'Members of our Career Accelerator and Bootcamp tracks receive bi-weekly 1-on-1 mentorship, resume and portfolio rewriting clinics, mock technical system design trials, and direct introductions to our hiring partner network.'
  },
  {
    cat: 'certificates',
    q: 'How many quizzes and capstones must I pass to earn a certificate?',
    a: 'You must complete 100% of module lessons, achieve an 80% or higher passing grade on intermediate quizzes, and submit an approved capstone project.'
  },
  {
    cat: 'certificates',
    q: 'Do certificates ever expire?',
    a: 'No. Once issued, your verified graduation credentials and project showcase URLs remain permanently hosted on Learnify servers at zero extra cost.'
  },
  {
    cat: 'certificates',
    q: 'Can I add my Learnify project URLs to my professional resume?',
    a: 'Yes! We actively encourage listing your live deployed URLs, GitHub repository links, and cryptographic certificate IDs on your resume and portfolio.'
  }
];

// ==========================================
// 2. FAQS DIRECTORY DATA (150 Items Total)
// ==========================================
export const faqsData = Array.from({ length: 150 }, (_, idx) => {
  const base = baseFaqList[idx % baseFaqList.length];
  const cycle = Math.floor(idx / baseFaqList.length);
  const question = cycle === 0 ? base.q : `${base.q} [Series Ref #${cycle + 1}]`;

  return {
    id: idx + 1,
    category: base.cat,
    question,
    answer: base.a
  };
});

// ==========================================
// 3. SUPPORT CHANNELS (20 Items)
// ==========================================
export const supportChannels = [
  { id: 1, title: 'Community Discord', desc: 'Chat with 50K+ developers and get instant peer debugging assistance.', actionText: 'Join Discord', actionLink: '#', icon: '💬' },
  { id: 2, title: 'Direct Email Support', desc: 'Our technical support team typically responds within 12-24 hours.', actionText: 'support@learnify.io', actionLink: 'mailto:support@learnify.io', icon: '✉️' },
  { id: 3, title: 'Live Office Hours', desc: 'Hop on weekly live Zoom calls with staff engineers to review code.', actionText: 'View Schedule', actionLink: '/event', icon: '🎙️' },
  { id: 4, title: 'GitHub Issues Forum', desc: 'Report errata, dependencies, or bugs directly to our repo maintainers.', actionText: 'Open Issue', actionLink: '#', icon: '🐙' },
  { id: 5, title: 'Enterprise Dedicated Slack', desc: 'Private shared Slack channels with 1-hour SLA response for team tiers.', actionText: 'Enterprise Slack', actionLink: '#', icon: '🏢' },
  { id: 6, title: 'Interactive Bot Assistant', desc: 'Query our AI docs assistant trained on all 500+ course transcripts.', actionText: 'Ask AI Bot', actionLink: '#', icon: '🤖' },
  { id: 7, title: 'Student Career Advisory', desc: 'Book resume critique appointments and technical interview slots.', actionText: 'Book Advisory', actionLink: '#', icon: '💼' },
  { id: 8, title: 'Cloud Lab Infrastructure Status', desc: 'Check live telemetry on container clusters, GPU nodes, and sandboxes.', actionText: 'View Status', actionLink: '#', icon: '⚡' },
  { id: 9, title: 'Billing & Invoice Helpdesk', desc: 'Assistance with VAT numbers, payment failures, or plan upgrades.', actionText: 'Billing Desk', actionLink: '#', icon: '💳' },
  { id: 10, title: 'Mentor 1-on-1 Booking Desk', desc: 'Schedule your bi-weekly private code review with senior mentors.', actionText: 'Schedule Call', actionLink: '#', icon: '👨‍🏫' },
  { id: 11, title: 'Certificate Verification Portal', desc: 'Verify graduate certificates and review digital skill badge authenticity.', actionText: 'Verify Credential', actionLink: '#', icon: '🎓' },
  { id: 12, title: 'Student Community Forum', desc: 'Asynchronous discussion board for deep dive algorithmic architectures.', actionText: 'Visit Forum', actionLink: '#', icon: '🌐' },
  { id: 13, title: 'Accessibility (a11y) Support', desc: 'Support for screen readers, high-contrast assets, and closed captions.', actionText: 'Contact a11y', actionLink: '#', icon: '♿' },
  { id: 14, title: 'Academic Partnership Desk', desc: 'University faculty resources and classroom license provisioning.', actionText: 'Academic Portal', actionLink: '#', icon: '🏫' },
  { id: 15, title: 'Security & Bug Bounty Reporting', desc: 'Submit vulnerability disclosures responsibly to our AppSec team.', actionText: 'Report Bounty', actionLink: '#', icon: '🛡️' },
  { id: 16, title: 'Alumni Network Directory', desc: 'Network with over 15,000+ graduates working in Silicon Valley and Europe.', actionText: 'Browse Alumni', actionLink: '#', icon: '👥' },
  { id: 17, title: 'Live Hackathon Helpdesk', desc: 'Get assistance during weekend competitive community coding sprints.', actionText: 'Hackathon Desk', actionLink: '#', icon: '🚀' },
  { id: 18, title: 'Course Instructor Inquiries', desc: 'Inquire about teaching, publishing, and authoring curriculum modules.', actionText: 'Teach With Us', actionLink: '/instructor', icon: '📝' },
  { id: 19, title: 'Press & Media Inquiries', desc: 'Interview requests and media kits for publications and podcasts.', actionText: 'Press Kit', actionLink: '#', icon: '📰' },
  { id: 20, title: 'Global WhatsApp Assistance', desc: 'Fast mobile customer support for urgent account access inquiries.', actionText: 'WhatsApp Chat', actionLink: '#', icon: '📱' }
];

// ========================================================
// 4. PLATFORM TIPS & BEST PRACTICES (80 Items Total)
// ========================================================
const tipSummaries = [
  'Code along line-by-line rather than copy-pasting solutions to build muscle memory.',
  'Always inspect the terminal error call stack—debugging is where true engineering growth happens.',
  'Commit your course checkpoints to your own personal GitHub repository daily.',
  'Participate in pair programming sessions during weekly live Discord stages.',
  'Write unit tests for edge cases before declaring your capstone project complete.'
];

export const faqCommunityTips = Array.from({ length: 80 }, (_, idx) => ({
  id: idx + 1,
  category: ['Study Habit', 'Debugging', 'Version Control', 'Networking', 'Testing'][idx % 5],
  title: `Best Practice #${idx + 1}: ${['Active Recall', 'Log Inspection', 'Git Discipline', 'Peer Feedback', 'Clean Testing'][idx % 5]}`,
  tip: tipSummaries[idx % tipSummaries.length]
}));

// ========================================================
// 5. TROUBLESHOOTING GUIDES (50 Items Total)
// ==========================================
const troubleshootingErrors = [
  { err: 'Docker Container Port 3000/5432 Already in Use', sol: 'Run "lsof -i :<port>" on macOS/Linux or "netstat -ano" on Windows to find and terminate the conflicting background process.' },
  { err: 'Module Not Found: Package Dependency Mismatch', sol: 'Delete your node_modules folder and package-lock.json, then run "npm install" with Node.js LTS (v20+).' },
  { err: 'Cloud Terminal Connection Timeout Error', sol: 'Clear browser cookies and cache for *.learnify.io or disable aggressive third-party script blocker extensions.' },
  { err: 'GitHub Personal Access Token (PAT) Auth Rejected', sol: 'Ensure your token possesses "repo" and "workflow" scopes enabled under your GitHub Developer Settings.' },
  { err: 'Next.js Hydration Warning / Mismatch', sol: 'Check for browser-only globals (such as window or localStorage) accessed during server-side initial rendering.' }
];

export const faqTroubleshootingGuides = Array.from({ length: 50 }, (_, idx) => {
  const item = troubleshootingErrors[idx % troubleshootingErrors.length];
  return {
    id: idx + 1,
    errorCode: `ERR_RESOLVE_${idx + 101}`,
    issue: `${item.err} [Guide #${idx + 1}]`,
    solution: item.sol,
    environment: ['Node.js & Docker', 'NPM Toolchain', 'Cloud Web Terminal', 'Git & GitHub', 'React / Next.js'][idx % 5]
  };
});