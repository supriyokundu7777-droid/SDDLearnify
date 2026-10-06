import { useState } from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useApp } from '../../context/AppContext';

const flashcardsDecks = {
  'react-next': {
    name: 'React 19 & Next.js 15',
    icon: '⚛️',
    cards: [
      {
        id: 1,
        question: 'What is the primary difference between React 19 Server Components and SSR?',
        answer: 'Server-Side Rendering (SSR) sends HTML plus the entire client JS bundle for hydration. Server Components execute only on the server, generating HTML/JSX without shipping ANY JavaScript bundle to the browser.',
        codeSnippet: `// RSC runs on server only
export default async function Feed() {
  const posts = await db.post.findMany();
  return <div>{posts.map(p => <Post key={p.id} {...p} />)}</div>;
}`,
        difficulty: 'Core'
      },
      {
        id: 2,
        question: 'How does React 19 useActionState work?',
        answer: 'useActionState manages async form actions. It returns [state, formAction, isPending]. It automatically tracks execution status without needing manual try/catch or useState flags.',
        codeSnippet: `const [state, formAction, isPending] = useActionState(updateUserAction, initialState);`,
        difficulty: 'Intermediate'
      },
      {
        id: 3,
        question: 'What is Partial Prerendering (PPR) in Next.js 15?',
        answer: 'PPR combines static shell prerendering with dynamic streaming holes. The static shell is served instantly from edge cache, while dynamic content streams in via React Suspense.',
        codeSnippet: `// next.config.js
module.exports = {
  experimental: { ppr: 'incremental' }
};`,
        difficulty: 'Advanced'
      },
      {
        id: 4,
        question: 'What problem does the React Compiler (React Forget) solve?',
        answer: 'It automatically memoizes components and hooks at build time via static analysis, eliminating the need for manual useMemo, useCallback, and React.memo optimizations.',
        codeSnippet: `// No manual useMemo needed!
const expensiveList = items.filter(i => i.active);`,
        difficulty: 'Core'
      }
    ]
  },
  'ai-agents': {
    name: 'Autonomous AI & LangChain',
    icon: '🤖',
    cards: [
      {
        id: 5,
        question: 'What is the ReAct Prompting Framework in AI Agents?',
        answer: 'ReAct stands for "Reasoning + Acting". The model generates a Thought, selects an Action (API/Tool call), receives an Observation, and repeats until the final task goal is solved.',
        codeSnippet: `Thought: I need current weather.
Action: get_weather("San Francisco")
Observation: 68°F and Sunny
Thought: Now I can answer the user.`,
        difficulty: 'Core'
      },
      {
        id: 6,
        question: 'What is Hybrid Search in Vector Databases?',
        answer: 'Hybrid search combines dense vector semantic embeddings (cosine similarity) with sparse lexical keyword matching (BM25) to achieve maximum recall and precision.',
        codeSnippet: `results = vector_store.hybrid_search(
    query="refund policy",
    alpha=0.7 # 70% dense vector, 30% BM25 keyword
)`,
        difficulty: 'Advanced'
      },
      {
        id: 7,
        question: 'Why use LangGraph instead of standard LangChain chains?',
        answer: 'LangGraph models multi-agent workflows as stateful cyclical graphs with conditional edges and human-in-the-loop checkpoints, whereas standard chains are linear and acyclic.',
        codeSnippet: `builder = StateGraph(AgentState)
builder.add_node("researcher", researcher_node)
builder.add_edge("researcher", "editor")`,
        difficulty: 'Advanced'
      }
    ]
  },
  'cloud-devops': {
    name: 'Cloud DevOps & Kubernetes',
    icon: '☁️',
    cards: [
      {
        id: 8,
        question: 'What is the difference between a Kubernetes Pod and a Container?',
        answer: 'A Pod is the smallest deployable unit in Kubernetes. It encapsulates one or more containers that share the same network IP, IPC namespace, and shared storage volumes.',
        codeSnippet: `apiVersion: v1
kind: Pod
metadata:
  name: web-app
spec:
  containers:
  - name: frontend
    image: nginx:alpine`,
        difficulty: 'Core'
      },
      {
        id: 9,
        question: 'What is Zero-Downtime Rolling Deployment in Kubernetes?',
        answer: 'Kubernetes gradually replaces old pod instances with new pod instances. Traffic is only directed to new pods after their readiness probes return HTTP 200 OK.',
        codeSnippet: `strategy:
  type: RollingUpdate
  rollingUpdate:
    maxSurge: 25%
    maxUnavailable: 0%`,
        difficulty: 'Intermediate'
      },
      {
        id: 10,
        question: 'What is the purpose of an Ingress Controller?',
        answer: 'An Ingress Controller acts as an intelligent HTTP/HTTPS reverse proxy and load balancer that routes external traffic to cluster services based on hostname or URI path.',
        codeSnippet: `rules:
- host: api.learnify.com
  http:
    paths:
    - path: /
      backend:
        service:
          name: api-service`,
        difficulty: 'Intermediate'
      }
    ]
  },
  'system-design': {
    name: 'System Design & High Scale',
    icon: '🏛️',
    cards: [
      {
        id: 11,
        question: 'What is Consistent Hashing and why is it used in Distributed Caching?',
        answer: 'Consistent Hashing maps both servers and keys to a logical hash ring. When a server node is added or removed, only k/N keys need remapping rather than reshuffling the entire cluster.',
        codeSnippet: `// Key mapped to first clockwise server node on ring
const node = ring.getNode(hash(userKey));`,
        difficulty: 'Advanced'
      },
      {
        id: 12,
        question: 'Compare Write-Through vs Write-Back (Write-Behind) Caching',
        answer: 'In Write-Through, data is written to cache and database simultaneously (high consistency, slower write latency). In Write-Back, data is written to cache first and async batch written to DB later (faster writes, risk of data loss on crash).',
        codeSnippet: `// Write-Through: synchronous double write
await cache.set(id, data);
await db.update(id, data);`,
        difficulty: 'Intermediate'
      }
    ]
  }
};

const Flashcards = () => {
  const { masteredFlashcards, toggleFlashcardMastery, showToast } = useApp();
  const [selectedDeckKey, setSelectedDeckKey] = useState('react-next');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'need-review' | 'mastered'

  const activeDeck = flashcardsDecks[selectedDeckKey];
  const allCards = activeDeck.cards;

  const filteredCards = allCards.filter((c) => {
    const isMastered = masteredFlashcards.includes(c.id);
    if (filterMode === 'mastered') return isMastered;
    if (filterMode === 'need-review') return !isMastered;
    return true;
  });

  // Clamp index if filtered changes
  const activeCard = filteredCards[currentCardIndex] || filteredCards[0] || allCards[0];
  const isCardMastered = masteredFlashcards.includes(activeCard?.id);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentCardIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleSpeak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
      showToast('Audio Narration', 'Reading flashcard concept...', 'info');
    } else {
      showToast('Unavailable', 'Speech synthesis is not supported in this browser.', 'warning');
    }
  };

  const masteredCountInDeck = allCards.filter((c) => masteredFlashcards.includes(c.id)).length;
  const progressPercent = Math.round((masteredCountInDeck / allCards.length) * 100);

  return (
    <div className="flashcards-page bg-dark text-white min-vh-100 py-5">
      <Container fluid="xxl">
        
        {/* Header Breadcrumb */}
        <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-3">
          <div>
            <div className="d-flex align-items-center gap-2 small text-secondary mb-2">
              <Link to="/dashboard" className="text-secondary text-decoration-none hover-text-white">Dashboard</Link>
              <span>/</span>
              <span className="text-info">Spaced Repetition & Flashcards</span>
            </div>
            <h1 className="display-6 fw-bold text-white mb-1">
              ⚡ High-Yield Engineering Flashcards
            </h1>
            <p className="text-secondary mb-0">
              Master crucial architectural concepts and interview questions with active recall.
            </p>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="text-end">
              <span className="small text-secondary d-block">Deck Mastery</span>
              <strong className="text-warning">{masteredCountInDeck} / {allCards.length} Cards ({progressPercent}%)</strong>
            </div>
            <div style={{ width: '120px' }}>
              <ProgressBar now={progressPercent} variant="warning" style={{ height: 10 }} className="rounded-pill bg-black" />
            </div>
          </div>
        </div>

        {/* Deck Selectors */}
        <div className="d-flex flex-wrap gap-2 mb-4">
          {Object.entries(flashcardsDecks).map(([key, deck]) => (
            <Button
              key={key}
              variant={selectedDeckKey === key ? 'info' : 'outline-secondary'}
              className="rounded-pill px-4 fw-semibold text-nowrap d-flex align-items-center gap-2"
              onClick={() => {
                setSelectedDeckKey(key);
                setCurrentCardIndex(0);
                setIsFlipped(false);
              }}
            >
              <span>{deck.icon}</span>
              <span>{deck.name}</span>
            </Button>
          ))}
        </div>

        {/* Filter Sub-Bar */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2 p-3 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25">
          <div className="d-flex align-items-center gap-2">
            <span className="text-secondary small fw-medium">View:</span>
            <Button
              size="sm"
              variant={filterMode === 'all' ? 'info' : 'link'}
              className={`rounded-pill px-3 py-1 ${filterMode === 'all' ? 'fw-bold text-dark' : 'text-secondary text-decoration-none'}`}
              onClick={() => { setFilterMode('all'); setCurrentCardIndex(0); }}
            >
              All ({allCards.length})
            </Button>
            <Button
              size="sm"
              variant={filterMode === 'need-review' ? 'info' : 'link'}
              className={`rounded-pill px-3 py-1 ${filterMode === 'need-review' ? 'fw-bold text-dark' : 'text-secondary text-decoration-none'}`}
              onClick={() => { setFilterMode('need-review'); setCurrentCardIndex(0); }}
            >
              Need Review ({allCards.length - masteredCountInDeck})
            </Button>
            <Button
              size="sm"
              variant={filterMode === 'mastered' ? 'info' : 'link'}
              className={`rounded-pill px-3 py-1 ${filterMode === 'mastered' ? 'fw-bold text-dark' : 'text-secondary text-decoration-none'}`}
              onClick={() => { setFilterMode('mastered'); setCurrentCardIndex(0); }}
            >
              Mastered ({masteredCountInDeck})
            </Button>
          </div>

          <div className="small text-secondary font-mono">
            Card {filteredCards.length > 0 ? currentCardIndex + 1 : 0} of {filteredCards.length}
          </div>
        </div>

        {/* 3D INTERACTIVE FLIP CARD ARENA */}
        {filteredCards.length === 0 ? (
          <div className="text-center py-5 p-4 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25">
            <span className="fs-1">🎉</span>
            <h4 className="fw-bold text-white mt-2">No cards in this filter!</h4>
            <p className="text-secondary small">You have mastered all cards or need to switch filter mode.</p>
            <Button variant="info" className="rounded-pill px-4 fw-bold text-dark" onClick={() => setFilterMode('all')}>
              Show All Cards
            </Button>
          </div>
        ) : (
          <Row className="justify-content-center">
            <Col lg={9} xl={8}>
              <div
                className="flashcard-container position-relative mb-4 cursor-pointer"
                style={{ minHeight: '380px', perspective: '1000px', cursor: 'pointer' }}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div
                  className={`flashcard-inner rounded-4 p-4 p-md-5 border shadow-2xl d-flex flex-column justify-content-between transition-all ${
                    isFlipped
                      ? 'bg-secondary bg-opacity-25 border-info border-opacity-50'
                      : 'bg-secondary bg-opacity-10 border-secondary border-opacity-40'
                  }`}
                  style={{
                    minHeight: '380px',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
                    boxShadow: isFlipped ? '0 20px 40px rgba(0, 210, 255, 0.15)' : '0 10px 30px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {/* Top Bar of Card */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <Badge bg="info" className="bg-opacity-10 text-info border border-info border-opacity-30 rounded-pill px-3 py-1">
                        {activeCard.difficulty} Level
                      </Badge>
                      {isCardMastered && (
                        <Badge bg="success" className="rounded-pill px-2 py-1">
                          ✓ Mastered
                        </Badge>
                      )}
                    </div>

                    <div className="d-flex align-items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm rounded-circle p-2 text-light"
                        onClick={() => handleSpeak(isFlipped ? activeCard.answer : activeCard.question)}
                        title="Listen to card audio"
                      >
                        🔊
                      </button>
                      <span className="badge bg-dark text-secondary font-mono">
                        {isFlipped ? 'BACK / SOLUTION' : 'FRONT / PROMPT'}
                      </span>
                    </div>
                  </div>

                  {/* Card Center Content */}
                  <div className="my-auto py-3">
                    {!isFlipped ? (
                      <div>
                        <span className="text-secondary small fw-bold text-uppercase d-block mb-2 font-mono">Question / Architecture Challenge</span>
                        <h2 className="display-6 fw-bold text-white lh-base" style={{ fontSize: '1.75rem' }}>
                          {activeCard.question}
                        </h2>
                        <span className="text-info small fw-medium mt-3 d-inline-block">
                          👆 Click card or press Space to reveal answer
                        </span>
                      </div>
                    ) : (
                      <div>
                        <span className="text-info small fw-bold text-uppercase d-block mb-2 font-mono">Verified Architectural Solution</span>
                        <p className="lead text-light mb-3 fs-6 leading-relaxed">
                          {activeCard.answer}
                        </p>
                        {activeCard.codeSnippet && (
                          <div className="rounded-3 overflow-hidden border border-secondary border-opacity-50 mt-3">
                            <pre className="p-3 mb-0 bg-black text-info font-mono small" style={{ whiteSpace: 'pre-wrap' }}>
                              {activeCard.codeSnippet}
                            </pre>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Card Bottom Indicator */}
                  <div className="d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25 text-secondary small">
                    <span>Deck: {activeDeck.name}</span>
                    <span>Tap card anywhere to flip 🔄</span>
                  </div>

                </div>
              </div>

              {/* ACTION CONTROLS */}
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                <div className="d-flex gap-2">
                  <Button
                    variant="outline-secondary"
                    className="rounded-pill px-4 fw-bold"
                    onClick={handlePrev}
                  >
                    &larr; Previous
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className="rounded-pill px-4 fw-bold"
                    onClick={handleNext}
                  >
                    Next &rarr;
                  </Button>
                </div>

                <div className="d-flex gap-2">
                  <Button
                    variant={isCardMastered ? 'outline-warning' : 'outline-secondary'}
                    className="rounded-pill px-3 fw-medium"
                    onClick={() => {
                      if (isCardMastered) toggleFlashcardMastery(activeCard.id);
                    }}
                  >
                    ⚠️ Need Review
                  </Button>
                  <Button
                    variant={isCardMastered ? 'success' : 'info'}
                    className="rounded-pill px-4 fw-bold text-dark"
                    onClick={() => {
                      toggleFlashcardMastery(activeCard.id);
                      handleNext();
                    }}
                  >
                    {isCardMastered ? '✓ Mastered (+10 XP)' : 'Mark as Mastered (+10 XP) 🎉'}
                  </Button>
                </div>
              </div>

            </Col>
          </Row>
        )}

      </Container>
    </div>
  );
};

export default Flashcards;
