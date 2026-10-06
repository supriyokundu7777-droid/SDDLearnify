import { useState, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { useApp } from '../../context/AppContext';

const sampleModules = [
  {
    moduleId: 1,
    title: 'Module 1: Foundations & Architecture Setup',
    lessons: [
      { id: 1, title: '1. Course Orientation & Architecture Deep-Dive', duration: '18:45', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
      { id: 2, title: '2. Setting up Cloud Workspaces & Docker Container', duration: '24:10', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
      { id: 3, title: '3. React 19 Core: Compiler & Server Components', duration: '31:20', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
    ]
  },
  {
    moduleId: 2,
    title: 'Module 2: State Machines & Microservices',
    lessons: [
      { id: 4, title: '4. Distributed Cache with Redis & Edge KV', duration: '22:15', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' },
      { id: 5, title: '5. High Performance Database Schemas in PostgreSQL', duration: '28:40', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' },
      { id: 6, title: '6. Asynchronous Event Queues & Kafka Streaming', duration: '35:50', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4' },
    ]
  },
  {
    moduleId: 3,
    title: 'Module 3: AI Integration & Autonomous Agents',
    lessons: [
      { id: 7, title: '7. Connecting LLM Providers via Streaming API', duration: '27:10', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4' },
      { id: 8, title: '8. Function Calling & Retrieval-Augmented Generation (RAG)', duration: '40:15', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4' },
      { id: 9, title: '9. Multi-Agent Orchestration with LangGraph', duration: '33:25', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4' },
    ]
  },
  {
    moduleId: 4,
    title: 'Module 4: Production Deployment & Observability',
    lessons: [
      { id: 10, title: '10. CI/CD Pipelines, Kubernetes Helm Charts & Monitoring', duration: '45:00', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4' }
    ]
  }
];

const sampleQuizQuestions = [
  {
    id: 1,
    question: 'What is the primary benefit of React 19 Server Components over standard client components?',
    options: [
      'They run entirely in WebAssembly in the user browser.',
      'They do not ship any JavaScript bundle for rendering to the client, reducing download size.',
      'They bypass the React lifecycle and render directly as canvas graphics.',
      'They only work with legacy PHP backends.'
    ],
    correctAnswer: 1,
    explanation: 'Server Components execute exclusively on the server, producing rendered JSX/HTML without adding to the client JavaScript bundle size.'
  },
  {
    id: 2,
    question: 'When implementing RAG (Retrieval-Augmented Generation), what is stored in the vector database?',
    options: [
      'Raw SQL queries and database indexes.',
      'High-dimensional embeddings of text chunks.',
      'Pre-compiled CSS and Tailwind tokens.',
      'Binary images and WebP videos.'
    ],
    correctAnswer: 1,
    explanation: 'Vector databases store numerical embeddings (dense float vectors) that allow semantic similarity search across knowledge chunks.'
  },
  {
    id: 3,
    question: 'Which HTTP status code is most appropriate when an API client submits invalid schema payload?',
    options: ['200 OK', '400 Bad Request / 422 Unprocessable Entity', '500 Internal Server Error', '301 Moved Permanently'],
    correctAnswer: 1,
    explanation: 'Client-side payload validation issues are represented by 400 Bad Request or 422 Unprocessable Entity.'
  }
];

const sampleTranscript = [
  { time: 10, label: '00:10', text: 'Welcome to this production architecture module. In this session we unpack scalable engineering.' },
  { time: 45, label: '00:45', text: 'First, notice how our microservice container handles edge caching via Redis.' },
  { time: 90, label: '01:30', text: 'Here is the key architectural difference when utilizing React 19 Server Actions.' },
  { time: 150, label: '02:30', text: 'Notice the zero bundle size footprint when we inspect the browser network tab.' },
  { time: 240, label: '04:00', text: 'Now let us write the automated test runner to benchmark throughput under load.' }
];

const codePresets = {
  'react-action': `// React 19 Server Action Simulation
async function updateUserData(prevState, formData) {
  const username = formData.get("username");
  if (!username) return { error: "Username is required!" };
  
  // Simulated database persistence
  return { 
    success: true, 
    user: { id: 42, username, role: "FullStack Architect" } 
  };
}

console.log("Simulating Action execution...");
updateUserData(null, new Map([["username", "Supriyo"]]))
  .then(res => console.log("Result:", JSON.stringify(res, null, 2)));`,

  'async-fetch': `// Asynchronous Retry Pipeline
async function fetchWithRetry(taskName, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    console.log(\`[Attempt \${attempt}] Connecting to microservice: \${taskName}...\`);
    if (attempt === 2) {
      return { status: 200, latency: "14ms", message: "Connected successfully!" };
    }
  }
}

fetchWithRetry("Redis-Cluster-01").then(r => console.log("Cache Connected:", r));`,

  'binary-search': `// High-Performance Binary Search in JS
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

const sortedList = [10, 24, 38, 52, 69, 81, 95, 120];
console.log("Found 69 at index:", binarySearch(sortedList, 69));`
};

const Classroom = () => {
  const [searchParams] = useSearchParams();
  const courseIdParam = parseInt(searchParams.get('courseId'), 10) || 1;

  const {
    enrolledCourses,
    markLessonCompleted,
    saveLessonNote,
    showToast,
    addXP,
    unlockBadge,
    classroomQuestions,
    addClassroomQuestion,
    upvoteQuestion,
    addQuestionReply
  } = useApp();

  const videoRef = useRef(null);

  // Find enrolled course or default
  const activeCourse = useMemo(() => {
    return enrolledCourses.find((c) => c.id === courseIdParam) || enrolledCourses[0] || {
      id: 1,
      title: 'Full-Stack Web Development Bootcamp with React & Node',
      progress: 70,
      completedLessons: [1, 2, 3, 4, 5, 6, 7],
      notes: {}
    };
  }, [enrolledCourses, courseIdParam]);

  const [currentLessonId, setCurrentLessonId] = useState(activeCourse.currentLessonId || 1);
  const [activeTab, setActiveTab] = useState('overview');
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  // Note State synchronized with lesson
  const [noteContent, setNoteContent] = useState(() => activeCourse.notes?.[currentLessonId] || '');
  const [prevLessonKey, setPrevLessonKey] = useState(`${activeCourse.id}-${currentLessonId}`);

  const currentLessonKey = `${activeCourse.id}-${currentLessonId}`;
  if (prevLessonKey !== currentLessonKey) {
    setPrevLessonKey(currentLessonKey);
    setNoteContent(activeCourse.notes?.[currentLessonId] || '');
  }

  // Code Sandbox State
  const [selectedPreset, setSelectedPreset] = useState('react-action');
  const [sandboxCode, setSandboxCode] = useState(codePresets['react-action']);
  const [sandboxOutput, setSandboxOutput] = useState('');

  // Quiz State
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  // Community Q&A Form State
  const [newQuestionTitle, setNewQuestionTitle] = useState('');
  const [newQuestionContent, setNewQuestionContent] = useState('');
  const [activeReplyId, setActiveReplyId] = useState(null);
  const [replyText, setReplyText] = useState('');

  // Update playback speed on video element
  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
      showToast('Playback Speed', `Speed set to ${speed}x`, 'info');
    }
  };

  // Picture in Picture
  const handleTogglePIP = async () => {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else if (videoRef.current) {
        await videoRef.current.requestPictureInPicture();
      }
    } catch {
      showToast('Picture-in-Picture', 'PIP mode not supported or allowed.', 'warning');
    }
  };

  // Jump to specific timestamp
  const handleSeekToTime = (seconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime = seconds;
      videoRef.current.play();
      setIsPlaying(true);
      showToast('Jumped Video', `Seeking to ${seconds}s`, 'info');
    }
  };

  // Find active lesson object
  let activeLesson = null;
  for (const mod of sampleModules) {
    const found = mod.lessons.find((l) => l.id === currentLessonId);
    if (found) {
      activeLesson = found;
      break;
    }
  }
  if (!activeLesson) activeLesson = sampleModules[0].lessons[0];

  const handleLessonToggle = (lessonId) => {
    markLessonCompleted(activeCourse.id, lessonId, 10);
  };

  const handleSaveNote = (e) => {
    e.preventDefault();
    saveLessonNote(activeCourse.id, currentLessonId, noteContent);
    addXP(10, 'Personal lesson notes updated');
  };

  const handleDownloadNotes = () => {
    const text = `# Notes for ${activeCourse.title}\nLesson: ${activeLesson.title}\nDate: ${new Date().toLocaleDateString()}\n\n${noteContent || 'No notes written yet.'}`;
    const blob = new Blob([text], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `learnify-notes-lesson-${currentLessonId}.md`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Notes Downloaded', 'Exported notes as Markdown file.', 'success');
  };

  const handleRunSandbox = () => {
    try {
      let logs = [];
      const customConsole = {
        log: (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' '))
      };
      const runFn = new Function('console', sandboxCode);
      runFn(customConsole);
      setSandboxOutput(logs.join('\n') || '✓ Code executed successfully (no console output).');
      addXP(15, 'Executed code in live sandbox');
      unlockBadge('sandbox-pro');
      showToast('Sandbox Executed', 'JavaScript code evaluated successfully!', 'success');
    } catch (err) {
      setSandboxOutput(`❌ Error: ${err.message}`);
    }
  };

  const handlePresetSelect = (key) => {
    setSelectedPreset(key);
    setSandboxCode(codePresets[key]);
    setSandboxOutput('');
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    let score = 0;
    sampleQuizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);

    if (score === sampleQuizQuestions.length) {
      unlockBadge('quiz-master');
      addXP(50, 'Scored 100% on Module Quiz!');
      showToast('🏆 Perfect Score!', 'You answered every question correctly! +50 XP', 'success');
    } else {
      addXP(20, 'Module quiz completed');
      showToast('Quiz Graded', `You scored ${score}/${sampleQuizQuestions.length}!`, score >= 2 ? 'success' : 'warning');
    }
  };

  const handlePostQuestion = (e) => {
    e.preventDefault();
    if (newQuestionTitle.trim() && newQuestionContent.trim()) {
      addClassroomQuestion(activeCourse.id, newQuestionTitle.trim(), newQuestionContent.trim());
      setNewQuestionTitle('');
      setNewQuestionContent('');
    }
  };

  const handlePostReply = (qId) => {
    if (replyText.trim()) {
      addQuestionReply(qId, replyText.trim());
      setReplyText('');
      setActiveReplyId(null);
    }
  };

  const isCompleted = activeCourse.completedLessons?.includes(currentLessonId);

  return (
    <div className="classroom-page bg-dark text-white min-vh-100 py-4">
      <Container fluid="xxl">
        
        {/* TOP STATUS BAR */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4 p-3 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25">
          <div className="d-flex align-items-center gap-3">
            <Link to="/dashboard" className="btn btn-sm btn-outline-secondary rounded-pill px-3">
              &larr; Back to Dashboard
            </Link>
            <div>
              <h1 className="h5 fw-bold mb-0 text-white text-truncate" style={{ maxWidth: '520px' }}>
                {activeCourse.title}
              </h1>
              <span className="text-secondary small">Instructor: {activeCourse.instructor}</span>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="text-end d-none d-sm-block">
              <span className="text-secondary small d-block">Overall Progress</span>
              <span className="text-info fw-bold">{activeCourse.progress}% Completed</span>
            </div>
            <div style={{ width: '100px' }}>
              <ProgressBar now={activeCourse.progress} variant={activeCourse.progress === 100 ? 'success' : 'info'} style={{ height: 8 }} className="bg-dark" />
            </div>
            {activeCourse.progress === 100 && (
              <Button as={Link} to={`/certificate/${activeCourse.id}`} variant="warning" className="rounded-pill px-3 py-1 fw-bold text-dark small">
                🏆 View Certificate
              </Button>
            )}
          </div>
        </div>

        {/* MAIN CLASSROOM WORKSPACE */}
        <Row className="gy-4">
          
          {/* LEFT: VIDEO PLAYER & LESSON INTERFACES */}
          <Col lg={8}>
            
            {/* Interactive Video Player Shell */}
            <div className="position-relative rounded-4 overflow-hidden bg-black border border-secondary border-opacity-25 shadow-lg mb-3">
              <div className="ratio ratio-16x9">
                <video
                  ref={videoRef}
                  key={activeLesson.videoUrl}
                  controls
                  className="w-100 h-100"
                  poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src={activeLesson.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Player Top Overlay Title */}
              <div className="position-absolute top-0 start-0 w-100 p-3 d-flex justify-content-between align-items-center pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)' }}>
                <span className="badge bg-dark bg-opacity-75 border border-secondary border-opacity-50 px-3 py-1 rounded-pill">
                  {activeLesson.title} ({activeLesson.duration})
                </span>
                <span className={`badge ${isPlaying ? 'bg-success text-white' : 'bg-info text-dark'} fw-bold rounded-pill`}>
                  {isPlaying ? '● Playing' : 'HD 1080p'}
                </span>
              </div>
            </div>

            {/* VIDEO PLAYER ENHANCED CONTROLS BAR */}
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4 p-3 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25">
              <div className="d-flex align-items-center gap-2">
                <span className="text-secondary small fw-medium">Speed:</span>
                {[0.75, 1, 1.25, 1.5, 2].map((spd) => (
                  <Button
                    key={spd}
                    size="sm"
                    variant={playbackSpeed === spd ? 'info' : 'outline-secondary'}
                    className={`rounded-pill py-0 px-2 fw-semibold ${playbackSpeed === spd ? 'text-dark' : 'text-light'}`}
                    style={{ fontSize: '0.75rem' }}
                    onClick={() => handleSpeedChange(spd)}
                  >
                    {spd}x
                  </Button>
                ))}

                <Button
                  size="sm"
                  variant="outline-secondary"
                  className="rounded-pill py-0 px-2 fw-semibold text-light ms-2"
                  style={{ fontSize: '0.75rem' }}
                  onClick={handleTogglePIP}
                  title="Picture in Picture Mode"
                >
                  🔲 PIP
                </Button>
              </div>

              <div className="d-flex align-items-center gap-2">
                <Button
                  variant={isCompleted ? 'success' : 'outline-info'}
                  size="sm"
                  className="rounded-pill px-3 fw-bold"
                  onClick={() => handleLessonToggle(activeLesson.id)}
                >
                  {isCompleted ? '✓ Completed' : 'Mark as Complete'}
                </Button>

                {currentLessonId < 10 && (
                  <Button
                    variant="info"
                    size="sm"
                    className="rounded-pill px-3 fw-bold text-dark"
                    onClick={() => setCurrentLessonId((prev) => Math.min(10, prev + 1))}
                  >
                    Next Lesson &rarr;
                  </Button>
                )}
              </div>
            </div>

            {/* INTERACTIVE WORKSPACE TABS */}
            <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 rounded-4 overflow-hidden mb-5">
              <Card.Header className="bg-transparent border-secondary border-opacity-25 p-2">
                <Nav variant="pills" activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="gap-2 flex-wrap">
                  <Nav.Item>
                    <Nav.Link eventKey="overview" className="rounded-pill px-3 small fw-semibold">
                      📖 Overview & Resources
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="transcript" className="rounded-pill px-3 small fw-semibold">
                      📝 Interactive Transcript
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sandbox" className="rounded-pill px-3 small fw-semibold">
                      💻 Live Code Sandbox
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="quiz" className="rounded-pill px-3 small fw-semibold">
                      🎯 Knowledge Quiz
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="qa" className="rounded-pill px-3 small fw-semibold">
                      💬 Q&A Forum ({classroomQuestions.length})
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="notes" className="rounded-pill px-3 small fw-semibold">
                      ✍️ My Notes
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>

              <Card.Body className="p-4">
                
                {/* TAB 1: OVERVIEW */}
                {activeTab === 'overview' && (
                  <div>
                    <h5 className="fw-bold text-white mb-3">Key Takeaways & Core Concepts</h5>
                    <p className="text-secondary small leading-relaxed mb-4">
                      In this lesson, we explore production patterns for orchestrating complex React 19 apps alongside containerized microservices. 
                      You will understand how state hydration is avoided when utilizing zero-bundle-size server modules.
                    </p>

                    <h6 className="fw-bold text-light mb-2">Included Project Templates:</h6>
                    <div className="d-flex flex-column gap-2 mb-4">
                      <a href="#starter" onClick={(e) => { e.preventDefault(); showToast('Downloading Starter Repo', 'ZIP archive dispatching...', 'info'); }} className="p-3 rounded-3 bg-dark border border-secondary border-opacity-25 text-info text-decoration-none d-flex align-items-center justify-content-between small">
                        <span>📦 <strong>starter-code-v1.zip</strong> (Full GitHub repository template with Dockerfile)</span>
                        <span>Download (14.2 MB) &darr;</span>
                      </a>
                      <a href="#docs" onClick={(e) => { e.preventDefault(); showToast('Opening Specs', 'Architecture blueprint PDF loaded.', 'info'); }} className="p-3 rounded-3 bg-dark border border-secondary border-opacity-25 text-info text-decoration-none d-flex align-items-center justify-content-between small">
                        <span>📄 <strong>microservices-topology-cheatsheet.pdf</strong> (Production Specs)</span>
                        <span>View Specs &rarr;</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* TAB 2: INTERACTIVE TRANSCRIPT */}
                {activeTab === 'transcript' && (
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <h5 className="fw-bold text-white mb-0">Interactive Lecture Transcript</h5>
                        <small className="text-secondary">Click on any timestamp to jump the video directly to that point</small>
                      </div>
                      <Badge bg="info" className="text-dark rounded-pill">English (Auto-Captions)</Badge>
                    </div>

                    <div className="d-flex flex-column gap-2">
                      {sampleTranscript.map((t, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-3 bg-dark border border-secondary border-opacity-25 d-flex align-items-start gap-3 cursor-pointer hover-bg-secondary transition-all"
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleSeekToTime(t.time)}
                        >
                          <Button size="sm" variant="outline-info" className="rounded-pill px-2 py-0 font-mono small text-nowrap">
                            ⏱️ {t.label}
                          </Button>
                          <p className="mb-0 text-light small leading-relaxed">
                            {t.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 3: LIVE CODE SANDBOX */}
                {activeTab === 'sandbox' && (
                  <div>
                    <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
                      <div>
                        <h5 className="fw-bold text-white mb-0">In-Browser JavaScript Sandbox</h5>
                        <small className="text-secondary">Execute code in client runtime with zero build setup</small>
                      </div>

                      <div className="d-flex align-items-center gap-2">
                        {/* Preset selector */}
                        <Form.Select
                          size="sm"
                          value={selectedPreset}
                          onChange={(e) => handlePresetSelect(e.target.value)}
                          className="bg-dark text-white border-secondary border-opacity-50 rounded-pill px-3 shadow-none small"
                        >
                          <option value="react-action">Preset: React 19 Action</option>
                          <option value="async-fetch">Preset: Async Retry Pipeline</option>
                          <option value="binary-search">Preset: Binary Search</option>
                        </Form.Select>

                        <Button variant="info" size="sm" className="rounded-pill px-3 fw-bold text-dark" onClick={handleRunSandbox}>
                          ▶ Run Code (+15 XP)
                        </Button>
                      </div>
                    </div>

                    <Form.Control
                      as="textarea"
                      rows={8}
                      value={sandboxCode}
                      onChange={(e) => setSandboxCode(e.target.value)}
                      className="bg-black text-info font-mono border-secondary border-opacity-50 rounded-3 mb-3 p-3"
                      style={{ fontSize: '0.85rem' }}
                    />

                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className="fw-bold text-light mb-0 small text-uppercase font-mono">Console Output:</h6>
                      <button
                        type="button"
                        className="btn btn-link text-secondary btn-sm p-0 text-decoration-none small"
                        onClick={() => setSandboxOutput('')}
                      >
                        Clear Output
                      </button>
                    </div>

                    <pre className="p-3 rounded-3 bg-black text-light border border-secondary border-opacity-25 font-mono small mb-0" style={{ minHeight: '80px', whiteSpace: 'pre-wrap' }}>
                      {sandboxOutput || 'Click "Run Code" to evaluate output in browser runtime...'}
                    </pre>
                  </div>
                )}

                {/* TAB 4: QUIZ */}
                {activeTab === 'quiz' && (
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <h5 className="fw-bold text-white mb-0">Module Comprehension Quiz</h5>
                        <small className="text-secondary">Score 3/3 to unlock the Quiz Master achievement badge</small>
                      </div>
                      {quizSubmitted && (
                        <Badge bg={quizScore === 3 ? 'success' : quizScore >= 2 ? 'info' : 'warning'} className="px-3 py-2 rounded-pill fs-6">
                          Score: {quizScore} / {sampleQuizQuestions.length} {quizScore === 3 ? '🏆 100%!' : ''}
                        </Badge>
                      )}
                    </div>

                    <Form onSubmit={handleQuizSubmit}>
                      {sampleQuizQuestions.map((q, qIndex) => (
                        <div key={q.id} className="p-3 rounded-4 bg-dark border border-secondary border-opacity-25 mb-4">
                          <h6 className="fw-bold text-white mb-3">
                            {qIndex + 1}. {q.question}
                          </h6>
                          <div className="d-flex flex-column gap-2 mb-3">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = quizAnswers[q.id] === optIdx;
                              let btnClass = 'quiz-option-btn p-3 rounded-3';
                              if (quizSubmitted) {
                                if (optIdx === q.correctAnswer) btnClass += ' correct';
                                else if (isSelected && optIdx !== q.correctAnswer) btnClass += ' incorrect';
                              } else if (isSelected) {
                                btnClass += ' selected';
                              }

                              return (
                                <button
                                  key={optIdx}
                                  type="button"
                                  className={btnClass}
                                  onClick={() => !quizSubmitted && setQuizAnswers((prev) => ({ ...prev, [q.id]: optIdx }))}
                                >
                                  <span className="me-2 fw-bold text-info">({String.fromCharCode(65 + optIdx)})</span>
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                          {quizSubmitted && (
                            <div className="p-2 rounded bg-secondary bg-opacity-25 small text-light">
                              💡 <strong>Explanation:</strong> {q.explanation}
                            </div>
                          )}
                        </div>
                      ))}

                      <div className="d-flex gap-2">
                        <Button type="submit" variant="info" className="rounded-pill px-4 fw-bold text-dark">
                          {quizSubmitted ? 'Re-grade Quiz' : 'Submit Answers'}
                        </Button>
                        {quizSubmitted && (
                          <Button
                            variant="outline-light"
                            className="rounded-pill px-3"
                            onClick={() => {
                              setQuizSubmitted(false);
                              setQuizAnswers({});
                              setQuizScore(0);
                            }}
                          >
                            Reset
                          </Button>
                        )}
                      </div>
                    </Form>
                  </div>
                )}

                {/* TAB 5: COMMUNITY Q&A FORUM */}
                {activeTab === 'qa' && (
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <h5 className="fw-bold text-white mb-0">Classroom Peer & Mentor Discussions</h5>
                        <small className="text-secondary">Ask questions, share debugging tips, and learn with peers</small>
                      </div>
                      <Badge bg="info" className="text-dark rounded-pill">
                        {classroomQuestions.length} Questions
                      </Badge>
                    </div>

                    {/* Ask a Question Box */}
                    <div className="p-3 rounded-4 bg-dark border border-secondary border-opacity-25 mb-4">
                      <h6 className="fw-bold text-info mb-2 small text-uppercase">Post a New Question</h6>
                      <Form onSubmit={handlePostQuestion}>
                        <Form.Control
                          type="text"
                          placeholder="Summary title (e.g. How does Redis pipeline commands?)..."
                          value={newQuestionTitle}
                          onChange={(e) => setNewQuestionTitle(e.target.value)}
                          className="bg-black text-white border-secondary border-opacity-50 rounded-3 mb-2 shadow-none small"
                        />
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Describe the problem, code snippet, or concept you need clarification on..."
                          value={newQuestionContent}
                          onChange={(e) => setNewQuestionContent(e.target.value)}
                          className="bg-black text-white border-secondary border-opacity-50 rounded-3 mb-3 shadow-none small"
                        />
                        <Button type="submit" variant="info" size="sm" className="rounded-pill px-4 fw-bold text-dark" disabled={!newQuestionTitle.trim() || !newQuestionContent.trim()}>
                          Post Question (+15 XP)
                        </Button>
                      </Form>
                    </div>

                    {/* Questions List */}
                    <div className="d-flex flex-column gap-3">
                      {classroomQuestions.map((q) => (
                        <div key={q.id} className="p-3 rounded-4 bg-dark border border-secondary border-opacity-25">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <div className="d-flex align-items-center gap-2">
                              <div className="rounded-circle bg-info text-dark fw-bold d-flex align-items-center justify-content-center" style={{ width: 28, height: 28, fontSize: '0.75rem' }}>
                                {q.avatar}
                              </div>
                              <div>
                                <strong className="text-white small">{q.author}</strong>
                                <span className="text-secondary ms-2" style={{ fontSize: '0.7rem' }}>{q.date}</span>
                              </div>
                            </div>

                            {q.instructorAnswered && (
                              <Badge bg="success" className="bg-opacity-20 text-success border border-success border-opacity-30 rounded-pill px-2 py-1 small">
                                ✓ Instructor Answered
                              </Badge>
                            )}
                          </div>

                          <h6 className="fw-bold text-white mb-1">{q.title}</h6>
                          <p className="text-secondary small mb-3">{q.content}</p>

                          <div className="d-flex align-items-center gap-3 pt-2 border-top border-secondary border-opacity-25">
                            <button
                              type="button"
                              className={`btn btn-sm ${q.userUpvoted ? 'btn-info text-dark fw-bold' : 'btn-outline-secondary text-secondary'} rounded-pill py-0 px-3`}
                              style={{ fontSize: '0.75rem' }}
                              onClick={() => upvoteQuestion(q.id)}
                            >
                              ▲ {q.upvotes} Upvotes
                            </button>

                            <button
                              type="button"
                              className="btn btn-sm btn-link text-info text-decoration-none p-0 small"
                              onClick={() => setActiveReplyId(activeReplyId === q.id ? null : q.id)}
                            >
                              💬 Reply ({q.replies?.length || 0})
                            </button>
                          </div>

                          {/* Threaded Replies */}
                          {q.replies && q.replies.length > 0 && (
                            <div className="mt-3 ps-3 border-start border-info border-opacity-40 d-flex flex-column gap-2">
                              {q.replies.map((r) => (
                                <div key={r.id} className="p-2 rounded-3 bg-black bg-opacity-40 border border-secondary border-opacity-20">
                                  <div className="d-flex align-items-center gap-2 mb-1">
                                    <strong className="text-info small">{r.author}</strong>
                                    {r.role === 'Instructor' && (
                                      <Badge bg="warning" className="text-dark fw-bold" style={{ fontSize: '0.6rem' }}>Mentor</Badge>
                                    )}
                                    <span className="text-secondary" style={{ fontSize: '0.65rem' }}>{r.date}</span>
                                  </div>
                                  <p className="text-light small mb-0">{r.content}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Inline Reply Input */}
                          {activeReplyId === q.id && (
                            <div className="mt-3 pt-3 border-top border-secondary border-opacity-25 d-flex gap-2">
                              <Form.Control
                                type="text"
                                size="sm"
                                placeholder="Write a helpful answer..."
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                className="bg-black text-white border-secondary border-opacity-50 rounded-pill shadow-none"
                              />
                              <Button size="sm" variant="info" className="rounded-pill px-3 text-dark fw-bold text-nowrap" onClick={() => handlePostReply(q.id)}>
                                Submit (+15 XP)
                              </Button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 6: MY NOTES */}
                {activeTab === 'notes' && (
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="fw-bold text-white mb-0">Lesson Notes (Auto-Saved)</h5>
                      <Button variant="outline-light" size="sm" className="rounded-pill px-3" onClick={handleDownloadNotes}>
                        📥 Export as Markdown (.md)
                      </Button>
                    </div>
                    <p className="text-secondary small mb-3">
                      Take markdown or quick architecture summary notes for Lesson {currentLessonId}. These notes are stored locally to your profile.
                    </p>
                    <Form onSubmit={handleSaveNote}>
                      <Form.Control
                        as="textarea"
                        rows={7}
                        placeholder="Write down personal notes, syntax reminders, or architectural ideas here..."
                        value={noteContent}
                        onChange={(e) => setNoteContent(e.target.value)}
                        className="bg-black text-white border-secondary border-opacity-50 rounded-3 mb-3 p-3 shadow-none"
                      />
                      <Button type="submit" variant="info" className="rounded-pill px-4 fw-bold text-dark">
                        💾 Save Personal Note (+10 XP)
                      </Button>
                    </Form>
                  </div>
                )}

              </Card.Body>
            </Card>

          </Col>

          {/* RIGHT: SYLLABUS & LESSON NAVIGATION SIDEBAR */}
          <Col lg={4}>
            <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 rounded-4 p-3 sticky-top" style={{ top: '80px' }}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold text-white fs-6 mb-0">Course Curriculum</h5>
                <Badge bg="info" className="text-dark fw-bold rounded-pill">10 Lessons</Badge>
              </div>

              {/* Modules Accordion */}
              <div className="d-flex flex-column gap-3 overflow-y-auto" style={{ maxHeight: '650px' }}>
                {sampleModules.map((module) => (
                  <div key={module.moduleId} className="p-3 rounded-3 bg-dark border border-secondary border-opacity-25">
                    <h6 className="fw-bold text-info small mb-2">{module.title}</h6>
                    <div className="d-flex flex-column gap-1">
                      {module.lessons.map((lesson) => {
                        const isLessonDone = activeCourse.completedLessons?.includes(lesson.id);
                        const isCurrent = lesson.id === currentLessonId;

                        return (
                          <div
                            key={lesson.id}
                            className={`p-2 rounded-2 d-flex align-items-center justify-content-between cursor-pointer transition-all ${
                              isCurrent
                                ? 'bg-info bg-opacity-20 border border-info border-opacity-50 text-white'
                                : 'hover-bg-secondary text-secondary'
                            }`}
                            style={{ cursor: 'pointer', fontSize: '0.8rem' }}
                            onClick={() => setCurrentLessonId(lesson.id)}
                          >
                            <div className="d-flex align-items-center gap-2 text-truncate me-2">
                              <span
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleLessonToggle(lesson.id);
                                }}
                                className={`badge rounded-circle p-1 d-inline-flex align-items-center justify-content-center ${
                                  isLessonDone ? 'bg-success text-white' : 'bg-secondary text-dark'
                                }`}
                                style={{ width: '18px', height: '18px', fontSize: '0.65rem' }}
                                title="Toggle Complete"
                              >
                                {isLessonDone ? '✓' : ''}
                              </span>
                              <span className={`text-truncate ${isCurrent ? 'fw-bold text-white' : ''}`}>
                                {lesson.title}
                              </span>
                            </div>
                            <span className="opacity-75 small font-mono">{lesson.duration}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* COURSE COMPLETION CERTIFICATE BANNER */}
              {activeCourse.progress === 100 ? (
                <div className="mt-4 p-3 rounded-3 bg-success bg-opacity-10 border border-success border-opacity-30 text-center">
                  <div className="fs-3 mb-1">🎉</div>
                  <h6 className="fw-bold text-success mb-1">Curriculum Completed!</h6>
                  <p className="text-secondary small mb-3">Your official credential has been generated.</p>
                  <Button as={Link} to={`/certificate/${activeCourse.id}`} variant="warning" className="w-100 rounded-pill fw-bold text-dark">
                    🏆 View Certificate
                  </Button>
                </div>
              ) : (
                <div className="mt-4 p-3 rounded-3 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-center">
                  <span className="small text-secondary d-block mb-1">Complete all lessons to unlock:</span>
                  <span className="fw-semibold text-warning small">🏆 Official Learnify Verifiable Certificate</span>
                </div>
              )}

            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Classroom;
