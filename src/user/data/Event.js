// ==========================================
// 1. EVENT TYPE & FORMAT FILTERS (24 Items)
// ==========================================
export const eventCategories = [
  'All',
  'Web Development',
  'UI/UX Design',
  'AI & Data Science',
  'Cloud & DevOps',
  'Cyber Security',
  'Career & Hiring',
  'Mobile App Development',
  'Software Testing (QA)',
  'Blockchain & Web3',
  'Game Development',
  'System Architecture',
  'Product Strategy',
  'Developer Tooling',
  'Database Engineering',
  'Open Source & Community'
];

export const eventFormats = [
  'All Formats',
  'Live Zoom Webinar',
  'Interactive Discord Stage',
  'In-Person Workshop',
  'Hands-on Lab Sandbox',
  'Ask Me Anything (AMA)',
  'Code Review Live Stream',
  'Hackathon & Demo Day'
];

// Helper assets
const eventCoverImages = [
  'https://images.unsplash.com/photo-1677442136019-21780ecad995',
  'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
  'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e',
  'https://images.unsplash.com/photo-1607799279861-4dd421887fb3',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3',
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'
];

const speakerAvatars = [
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  'https://images.unsplash.com/photo-1560250097-0b93528c311a',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb'
];

// Core master templates
const baseEventBlueprints = [
  {
    title: 'Building Production Autonomous AI Agents with LangChain & PyTorch',
    category: 'AI & Data Science',
    format: 'Live Zoom Webinar',
    speaker: 'Dr. Emily Watson',
    speakerRole: 'Lead AI Researcher & Former DeepMind Fellow',
    badge: 'Popular',
    price: 'Free',
    description: 'Learn how to fine-tune open-weights models and orchestrate multi-agent workflows using vector memory and tool calling.'
  },
  {
    title: 'Micro-Frontend Architecture in 2026: Hands-on Module Federation',
    category: 'Web Development',
    format: 'Interactive Discord Stage',
    speaker: 'Mark Evans',
    speakerRole: 'Staff Frontend Engineer & React Contributor',
    badge: 'Live Coding',
    price: '₹499',
    description: 'Break down large monolithic frontends into independent deployable micro-apps with zero runtime collision.'
  },
  {
    title: 'Cracking System Design Interviews: Scaling to 10M Concurrent Users',
    category: 'Career & Hiring',
    format: 'Live Zoom Webinar',
    speaker: 'Alex Morrison',
    speakerRole: 'Principal Cloud Architect & AWS Alumni',
    badge: 'Career Masterclass',
    price: 'Free',
    description: 'Master rate limiting, distributed caching with Redis, database sharding, and message queues under real interview conditions.'
  },
  {
    title: 'Design Systems in Figma: Variables, Semantic Tokens & Code Handoff',
    category: 'UI/UX Design',
    format: 'Interactive Discord Stage',
    speaker: 'Elena Rostova',
    speakerRole: 'Head of Product Design',
    badge: 'Design Sprint',
    price: '₹699',
    description: 'Learn to synchronize multi-brand design tokens with GitHub repositories, ensuring continuous design-to-code harmony.'
  },
  {
    title: 'Kubernetes Cluster Deployment on AWS with GitOps & ArgoCD',
    category: 'Cloud & DevOps',
    format: 'In-Person Workshop',
    speaker: 'James Vance',
    speakerRole: 'DevOps Director & Cloud Native Ambassador',
    badge: 'Hands-on Lab',
    price: '₹1,499',
    description: 'Deploy real EKS clusters, manage secret synchronization with Vault, and automate deployments from Git commits.'
  },
  {
    title: 'Bug Bounty Hunting: Live Web Pentesting & OWASP Top 10 Exploits',
    category: 'Cyber Security',
    format: 'Live Zoom Webinar',
    speaker: 'Marcus Brody',
    speakerRole: 'SecOps Director & DefCon Speaker',
    badge: 'Security Lab',
    price: 'Free',
    description: 'Live penetration testing demonstration using Burp Suite Pro, identifying SSRF, IDOR, and authentication bypasses on test targets.'
  },
  {
    title: 'Offline-First Cross-Platform Apps with Flutter 3 & SQLite CRDTs',
    category: 'Mobile App Development',
    format: 'Interactive Discord Stage',
    speaker: 'Rachel Green',
    speakerRole: 'Principal Mobile Dev & GDE',
    badge: 'Trending',
    price: '₹399',
    description: 'Build stateful cross-platform applications capable of bidirectional synchronization with remote cloud databases.'
  },
  {
    title: 'DeFi Protocol Auditing: Finding Reentrancy Flaws in Smart Contracts',
    category: 'Blockchain & Web3',
    format: 'Live Zoom Webinar',
    speaker: 'Lucas Vance',
    speakerRole: 'Smart Contract Auditor',
    badge: 'Elite Workshop',
    price: '₹799',
    description: 'Inspect live audited Solidity protocols, run automated Foundry test suites, and prevent flash-loan exploits.'
  }
];

// ==========================================
// 2. EVENTS DIRECTORY DATA (150 Items Total)
// ==========================================
export const eventsData = Array.from({ length: 150 }, (_, idx) => {
  const blueprint = baseEventBlueprints[idx % baseEventBlueprints.length];
  const cycle = Math.floor(idx / baseEventBlueprints.length);
  const day = ((idx * 2) % 28) + 1;
  const monthName = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb'][Math.floor(idx / 30) % 5];
  const year = monthName === 'Jan' || monthName === 'Feb' ? '2027' : '2026';

  const title = cycle === 0 ? blueprint.title : `${blueprint.title} (Cohort Session #${cycle + 1})`;

  return {
    id: idx + 1,
    title,
    category: blueprint.category,
    format: blueprint.format,
    speaker: blueprint.speaker,
    speakerRole: blueprint.speakerRole,
    speakerAvatar: `${speakerAvatars[idx % speakerAvatars.length]}?auto=format&fit=crop&w=300&q=80`,
    date: `${monthName} ${day < 10 ? `0${day}` : day}, ${year}`,
    time: `${(idx % 5) + 5}:00 PM - ${(idx % 5) + 7}:30 PM EST`,
    seatsLeft: (idx % 22) + 3,
    totalSeats: (idx % 4) * 100 + 200,
    price: blueprint.price,
    badge: blueprint.badge,
    description: blueprint.description,
    image: `${eventCoverImages[idx % eventCoverImages.length]}?auto=format&fit=crop&w=600&q=80`
  };
});

// ==========================================
// 3. KEY BENEFITS OF LIVE EVENTS (20 Items)
// ==========================================
export const eventPerks = [
  { id: 1, title: 'Direct Mentor Q&A', desc: 'Ask questions live and receive real-time debugging assistance from staff engineers.', icon: '🎙️' },
  { id: 2, title: 'Downloadable Resources', desc: 'Access slide decks, GitHub repositories, and full session recordings within 2 hours.', icon: '📦' },
  { id: 3, title: 'Attendance Badges', desc: 'Earn verifiable digital workshop badges shareable directly to your LinkedIn credentials.', icon: '🏆' },
  { id: 4, title: 'Peer Networking', desc: 'Collaborate with hundreds of engineers and designers inside private event chatrooms.', icon: '🤝' },
  { id: 5, title: 'Live Code Sandboxes', desc: 'Spin up disposable cloud containers in one click without installing dependencies locally.', icon: '⚡' },
  { id: 6, title: 'Resume & Portfolio Clinics', desc: 'Selected attendees get their code and design portfolios critiqued live by industry leads.', icon: '📄' },
  { id: 7, title: 'Hiring Partner Priority', desc: 'Sponsoring tech employers frequently scout active participants directly from live sessions.', icon: '💼' },
  { id: 8, title: 'Lifetime Video Archive', desc: 'Never worry about missing a session—watch recordings indefinitely at 1080p 60fps.', icon: '📼' },
  { id: 9, title: 'Interactive Quizzes & Polls', desc: 'Test your understanding during the session with gamified competitive code quizzes.', icon: '🎯' },
  { id: 10, title: 'Early Framework Previews', desc: 'Get hands-on experience with unreleased library versions and beta APIs before the public.', icon: '🧪' },
  { id: 11, title: 'Multi-Lingual Subtitles', desc: 'Live automated captions and downloadable transcripts available in 6 global languages.', icon: '🌐' },
  { id: 12, title: 'Exclusive Discord Role', desc: 'Unlock private workshop channels in the Learnify Discord for ongoing post-event support.', icon: '💬' },
  { id: 13, title: '1-on-1 Breakout Rooms', desc: 'Participate in structured 15-minute peer pair programming challenges during the workshop.', icon: '👥' },
  { id: 14, title: 'Certificates of Mastery', desc: 'Specialized credentials awarded to students who submit the post-event capstone lab.', icon: '📜' },
  { id: 15, title: 'Cloud Infrastructure Credits', desc: 'Eligible cloud workshops include ₹4,000 in free AWS or Google Cloud sandbox credits.', icon: '☁️' },
  { id: 16, title: 'Free Course Discounts', desc: 'Receive exclusive 40% coupons on comprehensive full-length bootcamps by the speaker.', icon: '🏷️' },
  { id: 17, title: 'Architecture Blueprints', desc: 'Download production-ready Mermaid.js diagrams and system design schematics.', icon: '📐' },
  { id: 18, title: 'Follow-Up Mentor Office Hours', desc: 'Join a private 45-minute follow-up session 48 hours later to review your lab code.', icon: '👨‍🏫' },
  { id: 19, title: 'Event Hackathon Challenges', desc: 'Compete for cash prizes and developer hardware in weekend hackathons tied to the topic.', icon: '🚀' },
  { id: 20, title: 'VIP Swag Giveaways', desc: 'Randomly selected participants win Learnify mechanical keyboards and mechanical swag packs.', icon: '🎁' }
];

// ========================================================
// 4. ATTENDEE REVIEWS & TESTIMONIALS (80 Items Total)
// ========================================================
const testimonialComments = [
  'The live system design workshop was incredible. Alex broke down how caching layers fail under high concurrency using clear animations.',
  'Getting immediate feedback on my Next.js App Router issue during the live Q&A saved me an entire week of debugging.',
  'Elena walked through Figma token syncing directly to GitHub. This single masterclass transformed our entire design-to-engineering handoff.',
  'The Discord stage format was interactive and productive. We wrote actual code in browser sandboxes together.',
  'Well organized, strictly on schedule, and zero promotional fluff. The speaker focused entirely on real production code.'
];

export const eventTestimonials = Array.from({ length: 80 }, (_, idx) => ({
  id: idx + 1,
  eventId: (idx % 150) + 1,
  name: ['Julian Martinez', 'Priya Nambiar', 'Carlos Silva', 'Amina Sheikh', 'Lukas Becker', 'Tanya Novak', 'David Chen', 'Hannah Abbott'][idx % 8] + ` #${idx + 1}`,
  role: ['Full-Stack Developer', 'UX Designer', 'DevOps Engineer', 'Security Analyst', 'AI Researcher', 'Product Manager'][idx % 6],
  company: ['Vercel', 'Canva', 'AWS', 'Cloudflare', 'DeepMind', 'Spotify'][idx % 6],
  comment: testimonialComments[idx % testimonialComments.length],
  rating: 5
}));

// ==========================================
// 5. EVENT FAQS & ATTENDANCE GUIDELINES (40 Items)
// ==========================================
const eventFaqList = [
  'How do I receive the webinar link or Discord invitation after registering?',
  'Will full video recordings be provided if I am unable to attend live?',
  'Are there any software prerequisites required before joining the coding session?',
  'Can I ask questions directly to the instructor using my microphone?',
  'Is attendance completely free, or are there hidden material costs?',
  'How are the verifiable digital certificates and badges issued?',
  'Can our entire company engineering team join under a single registration?',
  'What should I do if the workshop hits maximum attendee capacity?',
  'Are interactive cloud coding environments provided during the lab?',
  'Can I download the slides, code repositories, and architectural schematics?'
];

export const eventFaqs = Array.from({ length: 40 }, (_, idx) => ({
  id: idx + 1,
  question: `${eventFaqList[idx % 10]} ${idx >= 10 ? `[Part ${Math.floor(idx / 10) + 1}]` : ''}`,
  answer: 'Registered attendees receive calendar invites and access links instantly via email. All sessions are recorded in HD and published to your student dashboard alongside GitHub repositories within 2 hours.',
  category: idx % 2 === 0 ? 'Access & Recordings' : 'Technical & Requirements'
}));