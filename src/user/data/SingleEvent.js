// ==========================================
// 1. SINGLE EVENT CORE INFORMATION (20 Items)
// ==========================================
export const singleEventData = {
  id: 101,
  title: 'Building Production Autonomous AI Agents with LangChain & PyTorch',
  subtitle: 'A deep-dive, 2.5-hour live interactive workshop on orchestrating autonomous multi-agent systems, vector memory retrieval, and fine-tuning open-weights models for enterprise workloads.',
  category: 'AI & Data Science',
  badge: 'Live Masterclass',
  format: 'Live Zoom Webinar & Discord Stage',
  date: 'October 24, 2026',
  time: '06:00 PM - 08:30 PM EST',
  duration: '2.5 Hours (Live)',
  language: 'English (Live Captions Available)',
  totalSeats: 300,
  seatsLeft: 18,
  price: 'Free',
  originalPrice: '₹1,499',
  discount: '100% Free Pass',
  bannerImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
  location: 'Online (Zoom Link Sent Post Registration)',
  prerequisites: 'Basic Python familiarity & foundational understanding of REST APIs',
  hasCertificate: true,
  hasLiveDiscordSupport: true,
  accessDuration: 'Lifetime Replay Access'
};

// ==========================================
// 2. WORKSHOP KEY TAKEAWAYS (20 Items)
// ==========================================
export const eventKeyTakeaways = [
  'Architect autonomous multi-agent workflows using LangGraph and AutoGen',
  'Implement Retrieval-Augmented Generation (RAG) with Pinecone vector databases',
  'Fine-tune open-weights models (Llama 3 & Mistral) using LoRA / QLoRA techniques',
  'Connect external tool execution APIs with structured JSON output schema validation',
  'Prevent hallucination and enforce safety guardrails with LangSmith evaluation metrics',
  'Containerize and deploy low-latency inference endpoints on cloud GPUs',
  'Master ReAct prompt engineering patterns for complex reasoning chains',
  'Implement persistent conversational memory using Redis and PostgreSQL pgvector',
  'Evaluate token efficiency and cost-optimization strategies for production agents',
  'Build automated human-in-the-loop approval workflows for critical tool executions',
  'Run local inference with Ollama and vLLM on Apple Silicon and NVIDIA RTX hardware',
  'Integrate web search scrapers and dynamic document summarizers inside agent swarms',
  'Implement semantic caching to reduce model API call costs by up to 60%',
  'Secure API keys and execute sandboxed code execution environments using Docker',
  'Set up OpenTelemetry distributed tracing across asynchronous agent tool calls',
  'Benchmark agent task completion accuracy using custom evaluation synthetic datasets',
  'Design fault-tolerant supervisor agent architectures with automated retries',
  'Deploy real-time streaming token responses to React frontends via Server-Sent Events',
  'Structure enterprise vector indexes with hybrid keyword and semantic re-ranking',
  'Package end-to-end AI agent microservices into deployable Kubernetes Helm charts'
];

// ==========================================
// 3. EVENT AGENDA & TIMELINE (10 Blocks)
// ==========================================
export const eventAgenda = [
  {
    id: 1,
    time: '06:00 PM - 06:15 PM',
    title: 'Welcome & State of Autonomous Agents in 2026',
    desc: 'Opening keynote: Overview of model reasoning capabilities, ReAct frameworks, and agent architectural evolution.'
  },
  {
    id: 2,
    time: '06:15 PM - 06:35 PM',
    title: 'Core Architecture: Supervisor & Specialized Worker Swarms',
    desc: 'Designing stateful multi-agent communication topologies using LangGraph and state persistence layers.'
  },
  {
    id: 3,
    time: '06:35 PM - 07:05 PM',
    title: 'Live Lab Part 1: Setting up Vector RAG & Hybrid Retrieval',
    desc: 'Connecting Pinecone vector indexes, chunking strategies, and semantic embedding generation.'
  },
  {
    id: 4,
    time: '07:05 PM - 07:35 PM',
    title: 'Live Lab Part 2: Tool Calling, Sandbox Execution & Guardrails',
    desc: 'Enforcing JSON output schemas, executing code inside secure Docker sandboxes, and blocking prompt injection.'
  },
  {
    id: 5,
    time: '07:35 PM - 07:45 PM',
    title: 'Mid-Session Break & Live Quiz Challenge',
    desc: 'Interactive 10-minute attendee knowledge check with swag giveaways and developer hardware credits.'
  },
  {
    id: 6,
    time: '07:45 PM - 08:05 PM',
    title: 'Model Quantization & Cloud GPU Inference with vLLM',
    desc: 'Optimizing throughput with continuous batching, TensorRT-LLM integration, and AWS cloud endpoints.'
  },
  {
    id: 7,
    time: '08:05 PM - 08:15 PM',
    title: 'Production Telemetry, Monitoring & LangSmith Observability',
    desc: 'Tracking token usage latency, tracing recursive agent loops, and measuring task success benchmarks.'
  },
  {
    id: 8,
    time: '08:15 PM - 08:25 PM',
    title: 'Live Code Reviews & Student Repo Audits',
    desc: 'Direct screen review of student submissions with real-time performance optimization suggestions.'
  },
  {
    id: 9,
    time: '08:25 PM - 08:30 PM',
    title: 'Wrap Up & Digital Certificate Issuance',
    desc: 'Issuing verifiable cryptographic credentials and granting access to the private Discord cohort channel.'
  },
  {
    id: 10,
    time: '08:30 PM - 08:45 PM',
    title: 'VIP Extended Q&A & Mentor Office Hours',
    desc: 'Unmoderated open mic discussion for career advice and deep technical problem solving.'
  }
];

// ==========================================
// 4. SPEAKERS & GUEST CO-HOSTS (15 Items)
// ==========================================
export const eventSpeaker = {
  id: 1,
  name: 'Dr. Emily Watson',
  role: 'Lead AI Researcher & Former DeepMind Fellow',
  company: 'Learnify Research Labs',
  avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  rating: 4.9,
  studentsCount: '34,200+',
  eventsHosted: 28,
  bio: 'Dr. Emily Watson is a research scientist specializing in distributed reinforcement learning and natural language processing. With over a decade of production AI research, she advises Fortune 500 engineering teams on transitioning experimental models into low-latency production pipelines.',
  social: {
    linkedin: '#',
    twitter: '#',
    github: '#'
  }
};

const guestCoHostTemplates = [
  { name: 'David Reynolds', role: 'Director of Curriculum & MLOps', company: 'Ex-Kaggle Grandmaster', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
  { name: 'Alex Morrison', role: 'Principal Cloud Architect', company: 'AWS Alumni', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a' },
  { name: 'Marcus Brody', role: 'SecOps & AI Security Auditor', company: 'DefCon Speaker', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7' },
  { name: 'Elena Rostova', role: 'Head of Product & Generative UX', company: 'Learnify Faculty', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956' },
  { name: 'Vikram Mehta', role: 'Data Platform Architect', company: 'Snowflake Partner', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb' },
  { name: 'Mark Evans', role: 'Staff Frontend Engineer', company: 'Next.js Core Contributor', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e' },
  { name: 'Rachel Green', role: 'Principal Mobile & Edge AI Lead', company: 'Google Dev Expert', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }
];

export const eventGuestSpeakers = Array.from({ length: 14 }, (_, idx) => {
  const tpl = guestCoHostTemplates[idx % guestCoHostTemplates.length];
  return {
    id: idx + 2,
    name: `${tpl.name} ${idx >= 7 ? `(Session Mentor ${Math.floor(idx / 7) + 1})` : ''}`,
    role: tpl.role,
    company: tpl.company,
    avatar: `${tpl.avatar}?auto=format&fit=crop&w=300&q=80`,
    contribution: ['Live Code Reviewer', 'Breakout Room Mentor', 'Technical Q&A Moderator', 'GPU Lab Assistant'][idx % 4]
  };
});

// ========================================================
// 5. REGISTERED ATTENDEES (100 Items Total)
// ========================================================
const attendeeNames = [
  'Julian Martinez', 'Priya Nambiar', 'Carlos Silva', 'Amina Sheikh', 'Lukas Becker',
  'Tanya Novak', 'Michael Zhang', 'Hannah Abbott', 'David Chen', 'Fatima Al-Sayed',
  'Marcus Aurelius', 'Siddharth Sen', 'Chloe Bourgeois', 'Gabriel Agreste', 'Kavita Iyer',
  'Liam Murphy', 'Dmitry Ivanov', 'Emily Tanaka', 'Devon Vance', 'Ananya Roy'
];

const attendeeRoles = [
  'Senior Machine Learning Engineer', 'Staff Full-Stack Developer', 'Lead Data Scientist',
  'DevOps Architect', 'Product Manager (AI/ML)', 'Cloud Solutions Engineer',
  'Software Engineer II', 'Computer Science Graduate Researcher', 'Technical Co-Founder'
];

const attendeeCompanies = [
  'Meta Platforms', 'Stripe', 'Amazon Web Services', 'Vercel', 'Canva',
  'Cloudflare', 'DeepMind', 'Spotify', 'Shopify', 'OpenAI Community Fellow'
];

export const eventRegisteredAttendees = Array.from({ length: 100 }, (_, idx) => ({
  id: idx + 1,
  name: `${attendeeNames[idx % attendeeNames.length]} ${idx >= 20 ? `(${Math.floor(idx / 20) + 1})` : ''}`,
  role: attendeeRoles[idx % attendeeRoles.length],
  company: attendeeCompanies[idx % attendeeCompanies.length],
  avatar: `https://images.unsplash.com/photo-${['1573496359142-b8d87734a5a2', '1560250097-0b93528c311a', '1580489944761-15a19d654956', '1507003211169-0a1dd7228f2d'][idx % 4]}?auto=format&fit=crop&w=150&q=80`,
  isOnline: idx % 3 === 0
}));

// ========================================================
// 6. PAST WORKSHOP TESTIMONIALS & REVIEWS (60 Items)
// ========================================================
const eventReviewQuotes = [
  'The live LangGraph coding demo made complex agent orchestration feel straightforward. The speaker answered our exact concurrency questions on stream.',
  'Easily the most practical AI workshop I have attended this year. We were given working GitHub starter repos rather than simple theory slides.',
  'Deploying vLLM to production cloud endpoints was worth hours of trial and error. The instruction quality is second to none.',
  'The breakout pair coding rooms gave us an opportunity to debug multi-agent loops together with staff mentors assisting in real time.',
  'Dr. Watson explains distributed memory models and vector indexing with incredible clarity. Can not recommend Learnify events enough.'
];

export const eventPastReviews = Array.from({ length: 60 }, (_, idx) => ({
  id: idx + 1,
  attendeeName: attendeeNames[idx % attendeeNames.length] + ` #${idx + 1}`,
  role: attendeeRoles[idx % attendeeRoles.length],
  company: attendeeCompanies[idx % attendeeCompanies.length],
  rating: 5,
  date: `Month ${(idx % 12) + 1}, 2026`,
  comment: eventReviewQuotes[idx % eventReviewQuotes.length]
}));

// ==========================================
// 7. FREQUENTLY ASKED QUESTIONS (50 Items)
// ==========================================
const singleEventFaqTemplates = [
  'Will full video recordings be provided if I cannot attend live?',
  'Are there any paid software tools or API keys required for the coding session?',
  'How do I claim my verified workshop attendance certificate?',
  'What prior programming experience is expected from attendees?',
  'Will the session slide decks and repository branches remain accessible afterwards?',
  'Can I ask questions directly using my microphone or Discord voice channels?',
  'Are cloud compute credits provided for the GPU inference portion?',
  'Can multiple engineers from the same company attend under separate registrations?',
  'What happens if the live attendee capacity hits the 300 maximum seat limit?',
  'Where will the Zoom meeting link and Discord stage invite be sent?'
];

export const eventSingleFaqs = Array.from({ length: 50 }, (_, idx) => ({
  id: idx + 1,
  question: `${singleEventFaqTemplates[idx % 10]} ${idx >= 10 ? `[Part ${Math.floor(idx / 10) + 1}]` : ''}`,
  answer: 'Yes! All confirmed registrations receive immediate calendar confirmation files, automated email invites with secure Zoom URLs, full lifetime replay rights in HD, and free cloud compute sandboxes.',
  category: idx % 2 === 0 ? 'Access & Requirements' : 'Curriculum & Certificates'
}));

// ==========================================
// 8. DOWNLOADABLE RESOURCE KITS (25 Items)
// ==========================================
export const eventResourceKits = [
  { id: 1, name: 'LangGraph Multi-Agent Architecture Diagram (PDF)', size: '3.8 MB', type: 'Schematic' },
  { id: 2, name: 'Autonomous Agent Starter Repository (Python 3.12)', size: '1.2 MB', type: 'Code Boilerplate' },
  { id: 3, name: 'Pinecone Vector RAG Setup & Chunking Pipeline Script', size: '420 KB', type: 'Python Script' },
  { id: 4, name: 'vLLM & LoRA Fine-Tuning Google Colab Notebook', size: '850 KB', type: 'Jupyter Notebook' },
  { id: 5, name: 'JSON Schema Structured Output Validator Template', size: '120 KB', type: 'Utility Module' },
  { id: 6, name: 'Docker Compose GPU Inference Environment File', size: '45 KB', type: 'Docker Config' },
  { id: 7, name: 'LangSmith Observability & Tracing Setup Guide', size: '2.1 MB', type: 'Documentation' },
  { id: 8, name: 'ReAct Prompting & Guardrail System Instructions Pack', size: '65 KB', type: 'Text Templates' },
  { id: 9, name: 'Semantic Cache Layer Middleware with Redis', size: '310 KB', type: 'Code Module' },
  { id: 10, name: 'Complete Workshop Presentation Slide Deck (Keynote/PDF)', size: '14.5 MB', type: 'Slide Deck' },
  { id: 11, name: 'Human-in-the-Loop Slack Approval Bot Integration', size: '1.8 MB', type: 'Code Template' },
  { id: 12, name: 'Agent Evaluation Benchmark Synthetic Dataset', size: '5.2 MB', type: 'JSON Dataset' },
  { id: 13, name: 'Kubernetes Helm Chart for Scalable vLLM Pods', size: '95 KB', type: 'Deployment Config' },
  { id: 14, name: 'Server-Sent Events (SSE) Streaming Node Backend', size: '640 KB', type: 'Backend Template' },
  { id: 15, name: 'React 19 Chat UI Component for Agent Responses', size: '890 KB', type: 'Frontend Component' },
  { id: 16, name: 'Ollama Local Model Download & Setup Cheatsheet', size: '180 KB', type: 'Quick Reference' },
  { id: 17, name: 'Memory Compression & Summarizer Worker Node', size: '240 KB', type: 'Python Script' },
  { id: 18, name: 'Web Scraper & Dynamic Content Cleaning Tool for Agents', size: '720 KB', type: 'Tool Script' },
  { id: 19, name: 'Sandboxed Python Interpreter Container Definition', size: '55 KB', type: 'Docker Security' },
  { id: 20, name: 'Token Cost Estimator & Rate Limiting Utility', size: '110 KB', type: 'Python Script' },
  { id: 21, name: 'Hybrid Keyword & Dense Embedding Re-Ranker Code', size: '580 KB', type: 'Retrieval Code' },
  { id: 22, name: 'Mistral & Llama 3 Prompt Format Reference Sheet', size: '220 KB', type: 'Reference Sheet' },
  { id: 23, name: 'FastAPI Agent Inference Gateway with API Key Auth', size: '1.4 MB', type: 'Backend Service' },
  { id: 24, name: 'Post-Workshop Capstone Assessment Instructions', size: '980 KB', type: 'Assignment Guide' },
  { id: 25, name: 'Cryptographic Attendance Badge Verification Signature', size: '15 KB', type: 'Certificate Token' }
];

// ==========================================
// 9. EVENT SPONSORS & PARTNERS (15 Items)
// ==========================================
export const eventSponsors = [
  { id: 1, name: 'Google Cloud Platform', tier: 'Title Partner' },
  { id: 2, name: 'Pinecone Vector DB', tier: 'Compute Sponsor' },
  { id: 3, name: 'Hugging Face', tier: 'Model Hub Partner' },
  { id: 4, name: 'AWS Startups', tier: 'Infrastructure Sponsor' },
  { id: 5, name: 'LangChain AI', tier: 'Ecosystem Partner' },
  { id: 6, name: 'NVIDIA Inception', tier: 'Hardware Sponsor' },
  { id: 7, name: 'Vercel AI SDK', tier: 'Frontend Deployment Partner' },
  { id: 8, name: 'Weights & Biases', tier: 'MLOps Sponsor' },
  { id: 9, name: 'GitHub Campus', tier: 'Open Source Supporter' },
  { id: 10, name: 'Datadog LLM Observability', tier: 'Telemetry Partner' },
  { id: 11, name: 'Redis Labs', tier: 'Caching Partner' },
  { id: 12, name: 'Modal GPU Cloud', tier: 'Serverless Compute' },
  { id: 13, name: 'Together AI', tier: 'Inference Partner' },
  { id: 14, name: 'Postman Student Network', tier: 'API Testing Supporter' },
  { id: 15, name: 'Linux Foundation Education', tier: 'Accreditation Body' }
];