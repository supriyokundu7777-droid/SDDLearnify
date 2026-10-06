import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useApp } from '../../context/AppContext';
import { playSuccessChime, playFailureChime, playXPChime } from '../../utils/soundEffects';

const TRACKS = [
  {
    id: 'fullstack',
    title: 'Full-Stack React 19 & Architecture Specialist',
    durationMinutes: 15,
    passScore: 70,
    questions: [
      {
        id: 1,
        topic: 'React 19 Server Components',
        question: 'How do React 19 Server Components handle client-side JavaScript bundle sizes?',
        codeSnippet: `// Server Component
export default async function ProductCatalog() {
  const products = await db.query('SELECT * FROM items');
  return <CatalogList items={products} />;
}`,
        options: [
          'They convert the component into WebAssembly which downloads faster.',
          'They execute entirely on the server and send zero component JavaScript to the client browser.',
          'They bundle all NPM dependencies into a single static CSS file.',
          'They require client-side hydration for every single HTML element rendered.'
        ],
        correct: 1,
        explanation: 'Server Components execute exclusively during request/build time on the server, generating static JSX without shipping their component dependencies or implementation JS to the browser.'
      },
      {
        id: 2,
        topic: 'State Management & Actions',
        question: 'What is the purpose of the new React 19 `useActionState` hook?',
        options: [
          'To replace Redux Toolkit for complex global state stores.',
          'To handle pending states, optimistic responses, and errors from async form actions.',
          'To directly manipulate the browser DOM without virtual DOM diffing.',
          'To establish WebRTC connections between client peers.'
        ],
        correct: 1,
        explanation: '`useActionState` manages the lifecycle of async form actions, providing `[state, formAction, isPending]`.'
      },
      {
        id: 3,
        topic: 'Database & Caching',
        question: 'When implementing a write-through caching strategy with Redis and PostgreSQL, what occurs on a write operation?',
        options: [
          'Data is written to the cache first and asynchronously flushed to the database hours later.',
          'Data is written simultaneously to both the cache and the primary database before confirming success.',
          'Data bypasses the cache completely and is only cached on cache misses.',
          'The database invalidates all Redis clusters on every INSERT query.'
        ],
        correct: 1,
        explanation: 'In write-through caching, write operations update both the cache and persistent storage synchronously, ensuring consistency.'
      },
      {
        id: 4,
        topic: 'Asynchronous Architecture',
        question: 'Which mechanism prevents race conditions when multiple microservices update a shared user balance in SQL?',
        options: [
          'Optimistic Locking with version numbers or SELECT FOR UPDATE pessimistic locking.',
          'Setting the HTTP timeout to 60 seconds.',
          'Using JSON.stringify() on the payload.',
          'Switching the database connection pool to size 1.'
        ],
        correct: 0,
        explanation: 'Optimistic locking (version checks) or pessimistic row-level locking (`SELECT ... FOR UPDATE`) guarantees sequential, atomic updates.'
      },
      {
        id: 5,
        topic: 'Web Performance',
        question: 'Which Core Web Vital measures the visual stability of a webpage as elements load?',
        options: [
          'Largest Contentful Paint (LCP)',
          'Cumulative Layout Shift (CLS)',
          'Interaction to Next Paint (INP)',
          'First Input Delay (FID)'
        ],
        correct: 1,
        explanation: 'Cumulative Layout Shift (CLS) quantifies unexpected layout movement during page rendering.'
      },
      {
        id: 6,
        topic: 'Security & Auth',
        question: 'Why should JWT refresh tokens be stored in HttpOnly, Secure, SameSite cookies instead of localStorage?',
        options: [
          'Because localStorage has a strict 500-byte storage limitation.',
          'To prevent client-side JavaScript Cross-Site Scripting (XSS) attacks from stealing the token.',
          'HttpOnly cookies automatically encrypt all network traffic with SHA-256.',
          'localStorage is cleared automatically whenever the browser tab refreshes.'
        ],
        correct: 1,
        explanation: 'HttpOnly cookies cannot be accessed via JavaScript (`document.cookie`), mitigating theft via XSS vulnerabilities.'
      },
      {
        id: 7,
        topic: 'React 19 Concurrency',
        question: 'What does `useOptimistic` hook allow developers to do in React 19?',
        options: [
          'Predict cryptocurrency prices before blockchain blocks are mined.',
          'Instantly update the UI before an asynchronous server mutation finishes, automatically reverting if it fails.',
          'Speed up CPU clock speeds via multithreading.',
          'Cache API responses indefinitely across browser restarts.'
        ],
        correct: 1,
        explanation: '`useOptimistic` lets you present a speculative updated state to the user immediately while an async action is in flight.'
      },
      {
        id: 8,
        topic: 'REST vs GraphQL',
        question: 'What primary problem of traditional REST endpoints does GraphQL solve?',
        options: [
          'Database cold starts.',
          'Over-fetching and under-fetching of nested data relations.',
          'Browser Cross-Origin Resource Sharing (CORS) limits.',
          'Lack of HTTPS encryption support.'
        ],
        correct: 1,
        explanation: 'GraphQL allows the client to declare exact field structures, eliminating unnecessary data over-fetching.'
      },
      {
        id: 9,
        topic: 'Node.js Internals',
        question: 'In the Node.js Event Loop, where are Promises and `process.nextTick` callbacks resolved?',
        options: [
          'In the Timers phase.',
          'In the Microtask queue, right after the current operation finishes before moving to the next macrotask.',
          'Only after the server process exits.',
          'In the Check / setImmediate phase.'
        ],
        correct: 1,
        explanation: 'Microtasks (Promises, process.nextTick) are drained immediately after the currently running operation completes and between macrotask phases.'
      },
      {
        id: 10,
        topic: 'System Design',
        question: 'In a distributed system, what does the CAP theorem state?',
        options: [
          'A system can achieve Consistency, Availability, and Partition Tolerance simultaneously.',
          'Under a network partition, a distributed datastore must choose between Consistency or Availability.',
          'Cache memory is always faster than disk storage.',
          'All microservices must share a single monolithic relational database.'
        ],
        correct: 1,
        explanation: 'The CAP theorem states that when network partitions (P) occur, a system must trade off between absolute Consistency (C) and high Availability (A).'
      }
    ]
  },
  {
    id: 'ai-agents',
    title: 'AI Agents, LLMs & Vector Systems',
    durationMinutes: 12,
    passScore: 70,
    questions: [
      {
        id: 1,
        topic: 'Retrieval-Augmented Generation (RAG)',
        question: 'What role do vector embeddings play in a RAG pipeline?',
        options: [
          'They compress SQL tables into CSV files.',
          'They map semantic textual meaning into dense numerical vectors for cosine similarity search.',
          'They encrypt user prompts before sending to OpenAI.',
          'They generate SVG vector illustrations from prompts.'
        ],
        correct: 1,
        explanation: 'Embeddings transform texts into mathematical vectors where semantically similar texts cluster together in geometric space.'
      },
      {
        id: 2,
        topic: 'Function / Tool Calling',
        question: 'How do LLM function calling mechanisms invoke tools?',
        options: [
          'The LLM directly connects to the database via SSH and executes shell scripts.',
          'The model generates structured JSON matching a declared JSON Schema, which the hosting application executes.',
          'The model compiles C++ binaries on the fly.',
          'Function calling requires fine-tuning a model for 48 hours.'
        ],
        correct: 1,
        explanation: 'The LLM outputs structured JSON specifying the tool name and arguments based on the schema, and the application orchestrator executes the tool.'
      },
      {
        id: 3,
        topic: 'Hallucination Mitigation',
        question: 'Which technique is most effective at reducing hallucinations in high-accuracy enterprise LLM applications?',
        options: [
          'Increasing the model temperature parameter to 2.0.',
          'Grounding answers with RAG context and enforcing strict system prompt citation requirements.',
          'Removing system prompts entirely.',
          'Running the prompt through a Base64 decoder.'
        ],
        correct: 1,
        explanation: 'Providing verified context via RAG and instructing the model to reply only using cited facts drastically curbs hallucinations.'
      }
    ]
  }
];

const Assessment = () => {
  const { addXP, unlockBadge } = useApp();
  const [selectedTrack, setSelectedTrack] = useState(TRACKS[0]);
  const [examStarted, setExamStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({}); // { [qId]: selectedOptionIndex }
  const [flagged, setFlagged] = useState({}); // { [qId]: boolean }
  const [timeLeft, setTimeLeft] = useState(selectedTrack.durationMinutes * 60);
  const [isPaused, setIsPaused] = useState(false);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [scoreReport, setScoreReport] = useState(null);

  // Timer countdown
  useEffect(() => {
    if (!examStarted || examSubmitted || isPaused) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, examSubmitted, isPaused, answers]);

  const questions = selectedTrack.questions;
  const currentQ = questions[currentIdx];

  const handleStartExam = (track) => {
    setSelectedTrack(track);
    setExamStarted(true);
    setExamSubmitted(false);
    setCurrentIdx(0);
    setAnswers({});
    setFlagged({});
    setTimeLeft(track.durationMinutes * 60);
    setScoreReport(null);
  };

  const handleSelectOption = (qId, optionIdx) => {
    setAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const toggleFlag = (qId) => {
    setFlagged((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleSubmitExam = () => {
    setExamSubmitted(true);
    let correctCount = 0;
    const topicBreakdown = {};

    questions.forEach((q) => {
      const isCorrect = answers[q.id] === q.correct;
      if (isCorrect) correctCount++;

      if (!topicBreakdown[q.topic]) {
        topicBreakdown[q.topic] = { total: 0, correct: 0 };
      }
      topicBreakdown[q.topic].total += 1;
      if (isCorrect) topicBreakdown[q.topic].correct += 1;
    });

    const scorePct = Math.round((correctCount / questions.length) * 100);
    const passed = scorePct >= selectedTrack.passScore;
    const percentile = Math.min(99, Math.max(50, Math.round(50 + scorePct * 0.48)));

    const report = {
      scorePct,
      correctCount,
      totalCount: questions.length,
      passed,
      percentile,
      topicBreakdown
    };

    setScoreReport(report);

    if (passed) {
      playSuccessChime();
      playXPChime();
      addXP(150, `Passed ${selectedTrack.title} with ${scorePct}%!`);
      unlockBadge('assessment-pro');
    } else {
      playFailureChime();
    }
  };

  // Format MM:SS
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(answers).length;

  return (
    <div className="assessment-page bg-dark text-white min-vh-100 py-5">
      <Container fluid="xxl">
        {/* ==========================================================
            VIEW 1: EXAM SELECTION / WELCOME LOBBY
            ========================================================== */}
        {!examStarted && !examSubmitted && (
          <div>
            <div className="text-center mb-5" style={{ maxWidth: '780px', margin: '0 auto' }}>
              <Badge bg="info" className="bg-opacity-10 text-info border border-info border-opacity-25 px-3 py-1.5 rounded-pill mb-3">
                🎯 Official Knowledge Evaluation
              </Badge>
              <h1 className="display-6 fw-bold text-white mb-3">
                Engineering Skill Assessment Arena
              </h1>
              <p className="text-secondary leading-relaxed">
                Validate your real-world technical expertise. Take a timed proctored-style assessment to earn verified credential badges, discover skill gaps, and prove domain mastery.
              </p>
            </div>

            <Row className="gy-4 justify-content-center">
              {TRACKS.map((track) => (
                <Col key={track.id} lg={5} md={6}>
                  <Card className="bg-dark text-white border-secondary border-opacity-25 shadow-lg rounded-4 h-100 p-3 hover-scale transition-all">
                    <Card.Body className="d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <Badge bg="warning" className="bg-opacity-15 text-warning border border-warning border-opacity-25 px-2.5 py-1">
                          ⏱️ {track.durationMinutes} Minutes
                        </Badge>
                        <Badge bg="info" className="bg-opacity-15 text-info border border-info border-opacity-25 px-2.5 py-1">
                          {track.questions.length} Questions
                        </Badge>
                      </div>

                      <h3 className="h5 fw-bold text-white mb-2">{track.title}</h3>
                      <p className="text-secondary small mb-4 flex-grow-1">
                        Covers high-frequency architectural concepts, concurrency, performance benchmarks, and security trade-offs.
                      </p>

                      <div className="p-3 rounded-3 bg-secondary bg-opacity-10 border border-secondary border-opacity-20 mb-4 small">
                        <div className="d-flex justify-content-between mb-1">
                          <span className="text-secondary">Passing Mark:</span>
                          <strong className="text-success">{track.passScore}% Score</strong>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span className="text-secondary">Reward:</span>
                          <strong className="text-warning">+150 XP & Badge</strong>
                        </div>
                      </div>

                      <Button
                        variant="info"
                        className="rounded-pill py-2.5 fw-bold text-dark w-100"
                        onClick={() => handleStartExam(track)}
                      >
                        Start Assessment Now &rarr;
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}

        {/* ==========================================================
            VIEW 2: ACTIVE TIMED EXAM MODE
            ========================================================== */}
        {examStarted && !examSubmitted && currentQ && (
          <div>
            {/* Top Status Bar */}
            <div className="p-3 p-lg-4 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 mb-4 d-flex flex-wrap justify-content-between align-items-center gap-3">
              <div>
                <h2 className="h5 fw-bold text-white mb-0">{selectedTrack.title}</h2>
                <span className="text-secondary small">
                  Question {currentIdx + 1} of {questions.length} • {currentQ.topic}
                </span>
              </div>

              {/* Timer & Controls */}
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <div
                  className={`px-3 py-1.5 rounded-pill font-monospace fw-bold fs-6 border ${
                    timeLeft < 180
                      ? 'bg-danger bg-opacity-20 text-danger border-danger animate-pulse'
                      : 'bg-black text-warning border-warning border-opacity-30'
                  }`}
                >
                  ⏳ {formatTime(timeLeft)}
                </div>

                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="rounded-pill px-3"
                  onClick={() => setIsPaused(!isPaused)}
                >
                  {isPaused ? '▶ Resume' : '⏸ Pause'}
                </Button>

                <Button
                  variant="success"
                  size="sm"
                  className="rounded-pill px-3 px-sm-4 fw-bold"
                  onClick={handleSubmitExam}
                >
                  Finish & Submit
                </Button>
              </div>
            </div>

            {/* Main Exam Grid */}
            <Row className="gy-4">
              {/* Left Question Body */}
              <Col lg={8}>
                <Card className="bg-dark text-white border-secondary border-opacity-25 shadow-sm rounded-4 p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <Badge bg="secondary" className="px-3 py-1 rounded-pill">
                      Question #{currentIdx + 1}
                    </Badge>
                    <Button
                      variant={flagged[currentQ.id] ? 'warning' : 'outline-secondary'}
                      size="sm"
                      className="rounded-pill px-3 py-1 text-xs"
                      onClick={() => toggleFlag(currentQ.id)}
                    >
                      {flagged[currentQ.id] ? '🚩 Flagged for Review' : '🏳️ Flag Question'}
                    </Button>
                  </div>

                  <h3 className="h5 fw-semibold text-white mb-3 leading-relaxed">
                    {currentQ.question}
                  </h3>

                  {currentQ.codeSnippet && (
                    <pre className="p-3 bg-black rounded-3 text-info font-monospace small mb-4 border border-secondary border-opacity-20">
                      <code>{currentQ.codeSnippet}</code>
                    </pre>
                  )}

                  {/* Options List */}
                  <div className="d-flex flex-column gap-2 mb-4">
                    {currentQ.options.map((opt, oIdx) => {
                      const isSelected = answers[currentQ.id] === oIdx;
                      return (
                        <div
                          key={oIdx}
                          onClick={() => handleSelectOption(currentQ.id, oIdx)}
                          className={`p-3 rounded-3 border cursor-pointer transition-all d-flex align-items-center gap-3 ${
                            isSelected
                              ? 'border-info bg-info bg-opacity-15 text-white'
                              : 'border-secondary border-opacity-25 bg-secondary bg-opacity-5 text-secondary hover-bg-dark'
                          }`}
                        >
                          <div
                            className={`rounded-circle d-flex align-items-center justify-content-center fw-bold font-monospace ${
                              isSelected ? 'bg-info text-dark' : 'bg-secondary bg-opacity-25 text-secondary'
                            }`}
                            style={{ width: 32, height: 32, minWidth: 32 }}
                          >
                            {String.fromCharCode(65 + oIdx)}
                          </div>
                          <span className="small leading-normal text-light">{opt}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="d-flex justify-content-between pt-3 border-top border-secondary border-opacity-25">
                    <Button
                      variant="outline-secondary"
                      className="rounded-pill px-4"
                      disabled={currentIdx === 0}
                      onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
                    >
                      &larr; Previous
                    </Button>
                    <Button
                      variant="info"
                      className="rounded-pill px-4 text-dark fw-bold"
                      disabled={currentIdx === questions.length - 1}
                      onClick={() => setCurrentIdx((prev) => Math.min(questions.length - 1, prev + 1))}
                    >
                      Next &rarr;
                    </Button>
                  </div>
                </Card>
              </Col>

              {/* Right: Question Navigation Palette */}
              <Col lg={4}>
                <Card className="bg-dark text-white border-secondary border-opacity-25 shadow-sm rounded-4 p-4">
                  <h4 className="h6 fw-bold text-white mb-3">Question Palette</h4>
                  
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {questions.map((q, idx) => {
                      const isCurrent = idx === currentIdx;
                      const isAnswered = typeof answers[q.id] === 'number';
                      const isFlagged = flagged[q.id];

                      let btnClass = 'btn-outline-secondary text-secondary';
                      if (isCurrent) btnClass = 'btn-info text-dark fw-bold ring-2';
                      else if (isFlagged) btnClass = 'btn-warning text-dark fw-bold';
                      else if (isAnswered) btnClass = 'btn-success text-white';

                      return (
                        <button
                          key={q.id}
                          type="button"
                          onClick={() => setCurrentIdx(idx)}
                          className={`btn btn-sm rounded-3 font-monospace ${btnClass}`}
                          style={{ width: 42, height: 42 }}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>

                  {/* Legend */}
                  <div className="p-3 bg-secondary bg-opacity-10 rounded-3 small text-secondary d-flex flex-column gap-2">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge bg-success rounded-circle p-1" style={{ width: 12, height: 12 }}> </span>
                      <span>Answered ({answeredCount})</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge bg-warning rounded-circle p-1" style={{ width: 12, height: 12 }}> </span>
                      <span>Flagged for Review ({Object.values(flagged).filter(Boolean).length})</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge bg-info rounded-circle p-1" style={{ width: 12, height: 12 }}> </span>
                      <span>Current Active Question</span>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        )}

        {/* ==========================================================
            VIEW 3: COMPREHENSIVE SCORECARD & DIAGNOSTIC REPORT
            ========================================================== */}
        {examSubmitted && scoreReport && (
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <Card className="bg-dark text-white border-secondary border-opacity-25 shadow-xl rounded-4 overflow-hidden mb-4">
              
              {/* Header Banner */}
              <div
                className={`p-5 text-center ${
                  scoreReport.passed
                    ? 'bg-success bg-opacity-15 border-bottom border-success border-opacity-30'
                    : 'bg-danger bg-opacity-15 border-bottom border-danger border-opacity-30'
                }`}
              >
                <div className="fs-1 mb-2">{scoreReport.passed ? '🏆' : '📚'}</div>
                <h2 className="h3 fw-bold text-white mb-1">
                  {scoreReport.passed ? 'Assessment Passed with Honors!' : 'Assessment Completed - Needs Review'}
                </h2>
                <p className="text-secondary small mb-3">
                  Track: <strong className="text-light">{selectedTrack.title}</strong>
                </p>

                {/* Big Score Display */}
                <div className="display-4 fw-bold font-monospace text-info mb-2">
                  {scoreReport.scorePct}%
                </div>
                <p className="text-secondary small">
                  Correct: {scoreReport.correctCount} / {scoreReport.totalCount} questions • Percentile: <strong className="text-warning">Top {100 - scoreReport.percentile}%</strong>
                </p>

                <div className="d-flex justify-content-center gap-2 mt-3">
                  <Button
                    variant="info"
                    className="rounded-pill px-4 text-dark fw-bold"
                    onClick={() => handleStartExam(selectedTrack)}
                  >
                    ↺ Retake Assessment
                  </Button>
                  <Link to="/certificate" className="btn btn-outline-light rounded-pill px-4">
                    View Credentials Portal
                  </Link>
                </div>
              </div>

              {/* Topic Breakdown Bars */}
              <Card.Body className="p-4 p-lg-5">
                <h4 className="h6 fw-bold text-uppercase text-info tracking-wider mb-3">
                  Topic Competency Breakdown
                </h4>

                <div className="d-flex flex-column gap-3 mb-5">
                  {Object.entries(scoreReport.topicBreakdown).map(([topic, stats]) => {
                    const pct = Math.round((stats.correct / stats.total) * 100);
                    return (
                      <div key={topic}>
                        <div className="d-flex justify-content-between small text-secondary mb-1">
                          <span className="text-light">{topic}</span>
                          <span className="font-monospace fw-bold text-info">{pct}%</span>
                        </div>
                        <ProgressBar
                          now={pct}
                          variant={pct >= 70 ? 'success' : pct >= 40 ? 'warning' : 'danger'}
                          style={{ height: 6 }}
                          className="rounded-pill bg-black"
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Question by Question Review */}
                <h4 className="h6 fw-bold text-uppercase text-info tracking-wider mb-3">
                  Answer Key & Architectural Explanations
                </h4>

                <div className="d-flex flex-column gap-3">
                  {questions.map((q, idx) => {
                    const userAns = answers[q.id];
                    const isCorrect = userAns === q.correct;
                    return (
                      <div
                        key={q.id}
                        className={`p-3 rounded-3 border ${
                          isCorrect
                            ? 'border-success border-opacity-25 bg-success bg-opacity-5'
                            : 'border-danger border-opacity-25 bg-danger bg-opacity-5'
                        }`}
                      >
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="fw-semibold small text-light">
                            #{idx + 1}. {q.question}
                          </span>
                          <Badge bg={isCorrect ? 'success' : 'danger'} className="rounded-pill">
                            {isCorrect ? 'CORRECT' : 'INCORRECT'}
                          </Badge>
                        </div>

                        <div className="small mb-2">
                          <div className="text-secondary">
                            Your answer: <span className={isCorrect ? 'text-success' : 'text-danger font-semibold'}>{q.options[userAns] || 'Not answered'}</span>
                          </div>
                          {!isCorrect && (
                            <div className="text-success">
                              Correct answer: <strong>{q.options[q.correct]}</strong>
                            </div>
                          )}
                        </div>

                        <div className="p-2.5 rounded bg-black bg-opacity-50 small text-secondary">
                          <strong className="text-info">💡 Explanation: </strong>
                          {q.explanation}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card.Body>
            </Card>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Assessment;
