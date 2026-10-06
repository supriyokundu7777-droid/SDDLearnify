import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useApp } from '../../context/AppContext';
import { playClickSound, playXPChime } from '../../utils/soundEffects';

const INTERVIEW_QUESTIONS = [
  {
    id: 1,
    category: 'React 19 & Frontend',
    difficulty: 'Senior',
    title: 'Explain React 19 Server Components vs Client Components and Serialization Boundaries',
    question: 'How do Server Components and Client Components interact in React 19? What can and cannot pass through the serialization boundary?',
    answer: `In React 19, Server Components execute strictly on the server and render into a JSON-like stream of virtual DOM nodes (Flight format). Client Components execute in the browser and re-render interactively.

Key rules across the serialization boundary:
1. Serializable Data: Primitives (strings, numbers, booleans), plain Objects, Arrays, and JSX elements can pass from Server to Client.
2. Non-Serializable Data: Functions (except Server Actions declared with 'use server'), Promises (unless handled by React's \`use\` hook), and Class instances CANNOT cross the boundary.
3. Server Actions can be passed down as form action props to Client Components to enable seamless RPC (Remote Procedure Calls).`,
    codeSnippet: `// ServerComponent.jsx (Default in App Router)
import ClientButton from './ClientButton';

export default async function ProductPage({ id }) {
  const product = await db.products.findById(id); // Server-only DB access!

  async function updateStock(formData) {
    'use server'; // Server Action RPC
    await db.products.updateStock(id, formData.get('qty'));
  }

  return (
    <div>
      <h1>{product.name}</h1>
      {/* Passing server action & serialized data to Client Component */}
      <ClientButton onUpdate={updateStock} initialStock={product.stock} />
    </div>
  );
}`
  },
  {
    id: 2,
    category: 'React 19 & Frontend',
    difficulty: 'Mid-Senior',
    title: 'How does React 19 useOptimistic hook eliminate perceived network latency?',
    question: 'Describe the mechanics of `useOptimistic` during asynchronous mutations. How are rollback failures handled?',
    answer: `\`useOptimistic\` accepts the primary server state and an update callback. When an asynchronous action starts, you call the optimistic setter, causing an immediate speculative UI re-render.

If the server mutation promise resolves successfully, the server's new state replaces the optimistic state. If the promise throws an error, React automatically rolls back to the prior server state, preventing visual inconsistency.`,
    codeSnippet: `function LikeButton({ initialLikes, postId }) {
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(
    initialLikes,
    (current, update) => current + update
  );

  async function handleLike() {
    setOptimisticLikes(1); // Immediate UI update
    await api.post(\`/posts/\${postId}/like\`); // If this throws, React reverts
  }

  return <button onClick={handleLike}>❤️ {optimisticLikes}</button>;
}`
  },
  {
    id: 3,
    category: 'JavaScript & Web APIs',
    difficulty: 'Mid',
    title: 'Explain Event Loop Macrotasks vs Microtasks in Modern JavaScript',
    question: 'In what exact execution sequence do `setTimeout`, `Promise.then`, `queueMicrotask`, and synchronous code run?',
    answer: `Execution Sequence:
1. Call Stack: All synchronous code executes to completion.
2. Microtask Queue: When the call stack empties, ALL pending microtasks are drained before any macrotask executes. This includes \`Promise.then/catch/finally\`, \`queueMicrotask()\`, and \`MutationObserver\`.
3. Render Phase: The browser calculates styles, layout, and repaints (if needed).
4. Macrotask Queue (Task Queue): The engine executes ONE macrotask (e.g. \`setTimeout\`, \`setInterval\`, \`setImmediate\`, I/O).
5. The cycle repeats, checking microtasks after every single macrotask.`,
    codeSnippet: `console.log('1: Sync');

setTimeout(() => console.log('2: Timeout (Macrotask)'), 0);

Promise.resolve().then(() => console.log('3: Promise (Microtask)'));

queueMicrotask(() => console.log('4: Microtask'));

console.log('5: Sync');

// Output order: 1, 5, 3, 4, 2`
  },
  {
    id: 4,
    category: 'System Design & Architecture',
    difficulty: 'Staff',
    title: 'Designing a Rate Limiter for High-Throughput APIs',
    question: 'Compare Token Bucket vs Sliding Window Log rate-limiting algorithms. Which is preferable for 100,000 req/sec?',
    answer: `1. Token Bucket:
- A bucket holds a maximum capacity of N tokens. Tokens refill at a constant rate R tokens/sec.
- Memory: O(1) space per user (just two integers: last timestamp and current token count stored in Redis).
- Performance: Extremely fast, ideal for 100k+ req/sec.

2. Sliding Window Counter / Log:
- Tracks precise request timestamps in a Redis Sorted Set (ZSET).
- Removes items older than \`now - window\`.
- Memory: O(M) where M is request volume within window. High memory consumption under heavy traffic spikes.

Verdict: For 100,000 req/sec, Token Bucket or Sliding Window Counter (hash with rounded minute buckets) is preferred due to minimal memory footprint and O(1) Redis execution time using Lua scripts.`,
    codeSnippet: `// Redis Lua Script for Atomic Token Bucket
local key = KEYS[1]
local capacity = tonumber(ARGV[1])
local refillRate = tonumber(ARGV[2])
local now = tonumber(ARGV[3])

local data = redis.call('HMGET', key, 'tokens', 'lastUpdated')
local tokens = tonumber(data[1]) or capacity
local lastUpdated = tonumber(data[2]) or now

-- Calculate refilled tokens based on elapsed time
local delta = math.max(0, now - lastUpdated)
tokens = math.min(capacity, tokens + delta * refillRate)

if tokens >= 1 then
  tokens = tokens - 1
  redis.call('HMSET', key, 'tokens', tokens, 'lastUpdated', now)
  return 1 -- Allowed
else
  return 0 -- Rate limited
end`
  },
  {
    id: 5,
    category: 'Python & AI',
    difficulty: 'Senior',
    title: 'Building a Low-Latency RAG Pipeline with Hybrid Search and Re-Ranking',
    question: 'Why is vector-only similarity search insufficient for enterprise search, and how does Hybrid Search (BM25 + Dense) with Cross-Encoder Re-ranking resolve it?',
    answer: `Vector search alone struggles with:
1. Exact keyword identifiers (e.g. part numbers like "SKU-9942A", product names, or variable names).
2. Out-of-vocabulary or highly specialized acronyms.

Solution: Hybrid Search & Re-ranking:
1. Retrieval Phase: Run parallel BM25 (sparse lexical match for exact tokens) and dense vector embeddings search (semantic context). Combine results using Reciprocal Rank Fusion (RRF).
2. Re-Ranking Phase: Pass top 20 candidate chunks through a Cross-Encoder model (e.g. Cohere Rerank or BGE-Reranker) to evaluate the query-document pair deeply, yielding top 3-5 most pertinent context chunks for LLM generation.`,
    codeSnippet: `from langchain.retrievers import EnsembleRetriever
from langchain_community.retrievers import BM25Retriever
from langchain_community.vectorstores import Qdrant

# 1. Lexical BM25 retriever
bm25 = BM25Retriever.from_documents(docs)
bm25.k = 10

# 2. Semantic Vector retriever
vector_retriever = qdrant_store.as_retriever(search_kwargs={"k": 10})

# 3. Hybrid Ensemble with Reciprocal Rank Fusion
ensemble_retriever = EnsembleRetriever(
    retrievers=[bm25, vector_retriever],
    weights=[0.4, 0.6]
)`
  },
  {
    id: 6,
    category: 'Databases & SQL',
    difficulty: 'Senior',
    title: 'Optimizing Complex PostgreSQL Queries with Composite Indexes and EXPLAIN ANALYZE',
    question: 'How do B-Tree column ordering rules dictate whether a composite index (A, B, C) can satisfy a query filtering on (B, C)?',
    answer: `B-Tree composite indexes follow the Leftmost Prefix Rule:
- An index on (A, B, C) can accelerate queries filtering on:
  - (A)
  - (A, B)
  - (A, B, C)
- It CANNOT efficiently satisfy a query filtering solely on (B, C) without A, because the index tree is sorted primarily by column A first. The database would have to perform an Index Full Scan or Sequential Table Scan.

To optimize, column order should place the most selective equality filter columns first, followed by range filter columns (e.g. created_at > ...).`,
    codeSnippet: `-- Efficient: Uses leftmost prefix
SELECT * FROM orders 
WHERE tenant_id = 'org_123' AND status = 'shipped' 
ORDER BY created_at DESC;

-- Ideal Composite Index:
CREATE INDEX idx_orders_tenant_status_created 
ON orders (tenant_id, status, created_at DESC);`
  }
];

const CATEGORIES = ['All', 'React 19 & Frontend', 'JavaScript & Web APIs', 'System Design & Architecture', 'Python & AI', 'Databases & SQL'];

const InterviewPrep = () => {
  const { addXP } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [revealedAnswers, setRevealedAnswers] = useState({}); // { [id]: boolean }
  const [readinessScores, setReadinessScores] = useState(() => {
    try {
      const saved = localStorage.getItem('learnify_interview_readiness');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleReveal = (id) => {
    playClickSound();
    setRevealedAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleRate = (id, rating) => {
    playClickSound();
    const updated = { ...readinessScores, [id]: rating };
    setReadinessScores(updated);
    localStorage.setItem('learnify_interview_readiness', JSON.stringify(updated));

    if (rating === 'mastered') {
      addXP(15, 'Mastered tech interview question!');
      playXPChime();
    }
  };

  const filtered = useMemo(() => {
    return INTERVIEW_QUESTIONS.filter((q) => {
      const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory;
      const qText = (q.title + ' ' + q.question + ' ' + q.answer).toLowerCase();
      const matchesSearch = !searchQuery.trim() || qText.includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Overall readiness calculation
  const totalQuestions = INTERVIEW_QUESTIONS.length;
  const masteredCount = Object.values(readinessScores).filter((r) => r === 'mastered').length;
  const reviewCount = Object.values(readinessScores).filter((r) => r === 'review').length;
  const readinessPct = Math.round((masteredCount / totalQuestions) * 100);

  return (
    <div className="interview-prep-page bg-dark text-white min-vh-100 py-5">
      <Container fluid="xxl">
        {/* Header Banner */}
        <div className="p-4 p-lg-5 rounded-4 mb-4 border border-secondary border-opacity-25" style={{ background: 'linear-gradient(135deg, #161b26 0%, #0d1117 100%)' }}>
          <Row className="align-items-center gy-4">
            <Col lg={7}>
              <Badge bg="info" className="bg-opacity-10 text-info border border-info border-opacity-25 px-3 py-1.5 rounded-pill mb-3">
                💼 FAANG & High-Tier Technical Interviews
              </Badge>
              <h1 className="h3 fw-bold text-white mb-2">
                Tech Interview Practice & Architecture Deep-Dive
              </h1>
              <p className="text-secondary leading-relaxed mb-4">
                Master high-stakes system design questions, concurrency patterns, and framework internals. Test yourself with blind recall, rate your readiness, and unlock engineering confidence.
              </p>

              {/* Readiness Progress Bar */}
              <div style={{ maxWidth: '480px' }}>
                <div className="d-flex justify-content-between small text-secondary mb-1">
                  <span>Interview Readiness Index</span>
                  <span className="font-monospace fw-bold text-info">{readinessPct}% Ready</span>
                </div>
                <ProgressBar now={readinessPct} variant="info" style={{ height: 8 }} className="rounded-pill bg-black" />
                <div className="d-flex gap-3 small text-secondary mt-2">
                  <span>🟢 Mastered: <strong className="text-light">{masteredCount}</strong></span>
                  <span>🟡 Needs Review: <strong className="text-light">{reviewCount}</strong></span>
                  <span>Total Tracks: <strong className="text-light">{totalQuestions}</strong></span>
                </div>
              </div>
            </Col>

            <Col lg={5} className="d-flex justify-content-lg-end">
              <div className="p-4 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-20 text-center w-100" style={{ maxWidth: '340px' }}>
                <div className="fs-1 mb-1">🎯</div>
                <h4 className="h6 fw-bold text-white mb-1">Mock Interview Practice</h4>
                <p className="text-secondary small mb-3">
                  Reveal answers only after verbalizing or writing down your explanation.
                </p>
                <Link to="/coding-lab" className="btn btn-outline-info btn-sm rounded-pill w-100">
                  Switch to Coding Lab &rarr;
                </Link>
              </div>
            </Col>
          </Row>
        </div>

        {/* Filter and Search Bar */}
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
          <div className="d-flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`btn btn-sm rounded-pill px-3 py-1.5 transition-all ${
                  selectedCategory === cat
                    ? 'btn-info text-dark fw-bold shadow'
                    : 'btn-outline-secondary text-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <Form.Control
            type="text"
            placeholder="Search questions or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-black text-light border-secondary border-opacity-30 rounded-pill px-3 py-1.5 shadow-none w-100"
            style={{ maxWidth: '320px' }}
          />
        </div>

        {/* Questions Accordion List */}
        <div className="d-flex flex-column gap-4">
          {filtered.map((q) => {
            const isRevealed = revealedAnswers[q.id];
            const currentRating = readinessScores[q.id];

            return (
              <Card key={q.id} className="bg-dark text-white border-secondary border-opacity-25 shadow-sm rounded-4 overflow-hidden">
                <Card.Header className="bg-secondary bg-opacity-10 border-bottom border-secondary border-opacity-20 p-3 p-md-4">
                  <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-2">
                    <div className="d-flex align-items-center gap-2">
                      <Badge bg="secondary" className="px-2.5 py-1 rounded-pill small">
                        {q.category}
                      </Badge>
                      <Badge
                        bg={
                          q.difficulty === 'Senior'
                            ? 'warning'
                            : q.difficulty === 'Staff'
                            ? 'danger'
                            : 'info'
                        }
                        className="rounded-pill px-2 py-0.5"
                        style={{ fontSize: '0.72rem' }}
                      >
                        {q.difficulty}
                      </Badge>
                    </div>

                    {/* Self-Rating Badges */}
                    <div className="d-flex align-items-center gap-1.5">
                      <Button
                        variant={currentRating === 'mastered' ? 'success' : 'outline-secondary'}
                        size="sm"
                        className="rounded-pill px-2.5 py-0.5 text-xs"
                        onClick={() => handleRate(q.id, 'mastered')}
                      >
                        🟢 Mastered
                      </Button>
                      <Button
                        variant={currentRating === 'review' ? 'warning' : 'outline-secondary'}
                        size="sm"
                        className="rounded-pill px-2.5 py-0.5 text-xs"
                        onClick={() => handleRate(q.id, 'review')}
                      >
                        🟡 Review
                      </Button>
                      <Button
                        variant={currentRating === 'struggling' ? 'danger' : 'outline-secondary'}
                        size="sm"
                        className="rounded-pill px-2.5 py-0.5 text-xs"
                        onClick={() => handleRate(q.id, 'struggling')}
                      >
                        🔴 Hard
                      </Button>
                    </div>
                  </div>

                  <h3 className="h5 fw-bold text-white mb-2">{q.title}</h3>
                  <p className="text-secondary small mb-3">{q.question}</p>

                  <Button
                    variant={isRevealed ? 'outline-info' : 'info'}
                    size="sm"
                    className={`rounded-pill px-4 fw-semibold ${!isRevealed ? 'text-dark' : ''}`}
                    onClick={() => toggleReveal(q.id)}
                  >
                    {isRevealed ? '▲ Conceal Model Answer' : '▼ Reveal Architectural Answer'}
                  </Button>
                </Card.Header>

                {/* Answer Content Dropdown */}
                {isRevealed && (
                  <Card.Body className="p-4 bg-black bg-opacity-40 border-top border-secondary border-opacity-10">
                    <div className="text-light text-opacity-90 small leading-relaxed whitespace-pre-line mb-3">
                      {q.answer}
                    </div>

                    {q.codeSnippet && (
                      <div className="p-3 bg-black rounded-3 border border-secondary border-opacity-25 font-monospace small">
                        <div className="text-secondary mb-2 text-xs text-uppercase tracking-wider">
                          Code Reference / Implementation:
                        </div>
                        <pre className="text-info mb-0 overflow-x-auto">
                          <code>{q.codeSnippet}</code>
                        </pre>
                      </div>
                    )}
                  </Card.Body>
                )}
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default InterviewPrep;
