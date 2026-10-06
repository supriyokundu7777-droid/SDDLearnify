import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import { useApp } from '../../context/AppContext';
import { playTimerDing, playXPChime, playClickSound, AmbientSoundscape } from '../../utils/soundEffects';

const INITIAL_LEADERBOARD = [
  { rank: 1, name: 'Elena Rostova', title: 'AI Research Scholar', hours: 44.5, streak: 28, points: 3420, avatar: 'ER', badge: '🔥 Diamond' },
  { rank: 2, name: 'Supriyo Kundu (You)', title: 'Pro Student', hours: 38.5, streak: 7, points: 1450, avatar: 'SK', badge: '⚡ Gold' },
  { rank: 3, name: 'Marcus Sterling', title: 'Full Stack Dev', hours: 32.0, streak: 14, points: 1280, avatar: 'MS', badge: '🥈 Silver' },
  { rank: 4, name: 'Aaliyah Chen', title: 'Cloud Engineer', hours: 29.5, streak: 11, points: 1150, avatar: 'AC', badge: '🥉 Bronze' },
  { rank: 5, name: 'David Reynolds', title: 'SecOps Apprentice', hours: 26.0, streak: 9, points: 980, avatar: 'DR', badge: '🎖️ Scholar' }
];

const StudyLounge = () => {
  const { user, addXP, unlockBadge } = useApp();

  // Pomodoro Timer State
  const [timerMode, setTimerMode] = useState('focus'); // 'focus' (25m), 'shortBreak' (5m), 'longBreak' (15m)
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionsCompleted, setSessionsCompleted] = useState(() => {
    try {
      const saved = localStorage.getItem('learnify_focus_sessions');
      return saved ? parseInt(saved, 10) : 3;
    } catch {
      return 3;
    }
  });

  // Study Tasks
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('learnify_focus_tasks');
      return saved ? JSON.parse(saved) : [
        { id: 1, title: 'Finish React 19 Server Actions module', done: true },
        { id: 2, title: 'Solve Two-Sum & Debounce in Coding Lab', done: false },
        { id: 3, title: 'Review 5 spaced repetition flashcards', done: false }
      ];
    } catch {
      return [];
    }
  });
  const [newTaskInput, setNewTaskInput] = useState('');

  // Ambient Soundscapes
  const soundscapesRef = useRef({});
  const [activeSounds, setActiveSounds] = useState({
    rain: false,
    binaural: false,
    whitenoise: false,
    cafe: false
  });
  const [soundVolumes, setSoundVolumes] = useState({
    rain: 0.5,
    binaural: 0.4,
    whitenoise: 0.3,
    cafe: 0.4
  });

  // Initialize audio objects
  useEffect(() => {
    soundscapesRef.current = {
      rain: new AmbientSoundscape('rain'),
      binaural: new AmbientSoundscape('binaural'),
      whitenoise: new AmbientSoundscape('whitenoise'),
      cafe: new AmbientSoundscape('cafe')
    };

    return () => {
      // Cleanup all soundscapes on unmount
      Object.values(soundscapesRef.current).forEach((snd) => snd.stop());
    };
  }, []);

  // Save tasks
  useEffect(() => {
    localStorage.setItem('learnify_focus_tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Pomodoro countdown effect
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          playTimerDing();

          if (timerMode === 'focus') {
            const nextCount = sessionsCompleted + 1;
            setSessionsCompleted(nextCount);
            localStorage.setItem('learnify_focus_sessions', String(nextCount));
            addXP(30, 'Deep Focus Session Completed!');
            playXPChime();
            if (nextCount >= 3) {
              unlockBadge('focus-zen');
            }
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timerMode, sessionsCompleted]);

  // Switch timer mode
  const handleSwitchMode = (mode) => {
    playClickSound();
    setIsRunning(false);
    setTimerMode(mode);
    if (mode === 'focus') setTimeLeft(25 * 60);
    else if (mode === 'shortBreak') setTimeLeft(5 * 60);
    else if (mode === 'longBreak') setTimeLeft(15 * 60);
  };

  const handleToggleTimer = () => {
    playClickSound();
    setIsRunning(!isRunning);
  };

  const handleResetTimer = () => {
    playClickSound();
    setIsRunning(false);
    if (timerMode === 'focus') setTimeLeft(25 * 60);
    else if (timerMode === 'shortBreak') setTimeLeft(5 * 60);
    else if (timerMode === 'longBreak') setTimeLeft(15 * 60);
  };

  // Toggle ambient sound
  const handleToggleSound = (type) => {
    const sound = soundscapesRef.current[type];
    if (!sound) return;

    const nextState = !activeSounds[type];
    setActiveSounds((prev) => ({ ...prev, [type]: nextState }));

    if (nextState) {
      sound.setVolume(soundVolumes[type]);
      sound.start();
    } else {
      sound.stop();
    }
  };

  const handleVolumeChange = (type, val) => {
    const floatVal = parseFloat(val);
    setSoundVolumes((prev) => ({ ...prev, [type]: floatVal }));
    const sound = soundscapesRef.current[type];
    if (sound) {
      sound.setVolume(floatVal);
    }
  };

  // Tasks actions
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskInput.trim()) return;
    const newTask = {
      id: Date.now(),
      title: newTaskInput.trim(),
      done: false
    };
    setTasks((prev) => [newTask, ...prev]);
    setNewTaskInput('');
    playClickSound();
  };

  const handleToggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const nextDone = !t.done;
          if (nextDone) {
            addXP(15, 'Focus study goal completed!');
            playXPChime();
          }
          return { ...t, done: nextDone };
        }
        return t;
      })
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  // Format time MM:SS
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const timeFormatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  const totalDuration = timerMode === 'focus' ? 25 * 60 : timerMode === 'shortBreak' ? 5 * 60 : 15 * 60;
  const progressPct = Math.round(((totalDuration - timeLeft) / totalDuration) * 100);

  return (
    <div className="study-lounge-page bg-dark text-white min-vh-100 py-5">
      <Container fluid="xxl">
        {/* Top Header */}
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4 pb-3 border-bottom border-secondary border-opacity-25">
          <div className="d-flex align-items-center gap-3">
            <div className="bg-warning bg-opacity-10 text-warning p-2 rounded-3 border border-warning border-opacity-25 fs-4">
              🧘
            </div>
            <div>
              <div className="d-flex align-items-center gap-2">
                <h1 className="h4 fw-bold mb-0 text-white">Virtual Study Lounge & Focus Arena</h1>
                <Badge bg="warning" className="bg-opacity-20 text-warning border border-warning border-opacity-25">
                  Deep Flow Mode
                </Badge>
              </div>
              <p className="text-secondary small mb-0">
                Customizable Pomodoro timer, synthesized ambient soundscapes, focus checklists, and community rankings.
              </p>
            </div>
          </div>

          <div className="d-flex align-items-center gap-2">
            <Badge bg="info" className="px-3 py-2 rounded-pill small">
              🔥 {sessionsCompleted} Focus Sessions Completed Today
            </Badge>
          </div>
        </div>

        {/* 3-Column Layout: Pomodoro Timer / Ambient Soundscapes / Study Tasks & Leaderboard */}
        <Row className="gy-4">
          
          {/* Column 1: Pomodoro Focus Timer */}
          <Col lg={4}>
            <Card className="bg-dark text-white border-secondary border-opacity-25 shadow-lg rounded-4 p-4 h-100 text-center d-flex flex-column justify-content-between">
              <div>
                {/* Mode Selector */}
                <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
                  <Button
                    variant={timerMode === 'focus' ? 'info' : 'outline-secondary'}
                    size="sm"
                    className="rounded-pill px-3 py-1 font-semibold"
                    onClick={() => handleSwitchMode('focus')}
                  >
                    🧠 Focus (25m)
                  </Button>
                  <Button
                    variant={timerMode === 'shortBreak' ? 'success' : 'outline-secondary'}
                    size="sm"
                    className="rounded-pill px-3 py-1 font-semibold"
                    onClick={() => handleSwitchMode('shortBreak')}
                  >
                    ☕ Short Break (5m)
                  </Button>
                  <Button
                    variant={timerMode === 'longBreak' ? 'warning' : 'outline-secondary'}
                    size="sm"
                    className="rounded-pill px-3 py-1 font-semibold"
                    onClick={() => handleSwitchMode('longBreak')}
                  >
                    🌴 Long Break (15m)
                  </Button>
                </div>

                {/* Big Timer Circle */}
                <div className="position-relative d-inline-flex align-items-center justify-content-center my-3" style={{ width: 230, height: 230 }}>
                  <svg width="230" height="230" viewBox="0 0 230 230" className="transform -rotate-90">
                    <circle
                      cx="115"
                      cy="115"
                      r="95"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="12"
                      fill="transparent"
                    />
                    <circle
                      cx="115"
                      cy="115"
                      r="95"
                      stroke={timerMode === 'focus' ? '#00d2ff' : timerMode === 'shortBreak' ? '#10b981' : '#f59e0b'}
                      strokeWidth="12"
                      strokeDasharray={2 * Math.PI * 95}
                      strokeDashoffset={2 * Math.PI * 95 * (1 - progressPct / 100)}
                      strokeLinecap="round"
                      fill="transparent"
                      style={{ transition: 'stroke-dashoffset 0.8s ease' }}
                    />
                  </svg>

                  <div className="position-absolute text-center">
                    <div className="display-4 fw-bold font-monospace tracking-tight text-white mb-0">
                      {timeFormatted}
                    </div>
                    <span className="text-secondary small text-uppercase tracking-wider">
                      {isRunning ? 'Flow Active' : 'Paused'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Timer Buttons */}
              <div className="d-flex justify-content-center gap-3 mt-4">
                <Button
                  variant="outline-secondary"
                  className="rounded-pill px-4"
                  onClick={handleResetTimer}
                >
                  ↺ Reset
                </Button>
                <Button
                  variant={isRunning ? 'danger' : 'info'}
                  className="rounded-pill px-5 fw-bold text-dark shadow"
                  onClick={handleToggleTimer}
                >
                  {isRunning ? '⏸ Pause' : '▶ Start Focus'}
                </Button>
              </div>
            </Card>
          </Col>

          {/* Column 2: Synthesized Ambient Soundscapes */}
          <Col lg={4}>
            <Card className="bg-dark text-white border-secondary border-opacity-25 shadow-lg rounded-4 p-4 h-100">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="h6 fw-bold text-white mb-0">🎧 Ambient Focus Soundscapes</h2>
                <Badge bg="secondary" className="small">Pure Synthesized Audio</Badge>
              </div>
              <p className="text-secondary small mb-4">
                Generate concentration soundscapes natively in your browser with zero external streaming or buffer lag.
              </p>

              <div className="d-flex flex-column gap-3">
                
                {/* 1. Rain & Storm */}
                <div className="p-3 rounded-3 bg-secondary bg-opacity-10 border border-secondary border-opacity-20">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center gap-2">
                      <span className="fs-5">🌧️</span>
                      <strong className="small text-light">Gentle Rain & Thunder</strong>
                    </div>
                    <Button
                      variant={activeSounds.rain ? 'info' : 'outline-secondary'}
                      size="sm"
                      className="rounded-pill px-3 py-0.5 small"
                      onClick={() => handleToggleSound('rain')}
                    >
                      {activeSounds.rain ? 'Stop' : 'Play'}
                    </Button>
                  </div>
                  <Form.Range
                    min="0"
                    max="1"
                    step="0.05"
                    value={soundVolumes.rain}
                    onChange={(e) => handleVolumeChange('rain', e.target.value)}
                    disabled={!activeSounds.rain}
                  />
                </div>

                {/* 2. Binaural Beats */}
                <div className="p-3 rounded-3 bg-secondary bg-opacity-10 border border-secondary border-opacity-20">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center gap-2">
                      <span className="fs-5">🧠</span>
                      <strong className="small text-light">Alpha Waves (10Hz Focus)</strong>
                    </div>
                    <Button
                      variant={activeSounds.binaural ? 'warning' : 'outline-secondary'}
                      size="sm"
                      className="rounded-pill px-3 py-0.5 small"
                      onClick={() => handleToggleSound('binaural')}
                    >
                      {activeSounds.binaural ? 'Stop' : 'Play'}
                    </Button>
                  </div>
                  <Form.Range
                    min="0"
                    max="1"
                    step="0.05"
                    value={soundVolumes.binaural}
                    onChange={(e) => handleVolumeChange('binaural', e.target.value)}
                    disabled={!activeSounds.binaural}
                  />
                </div>

                {/* 3. White / Pink Noise */}
                <div className="p-3 rounded-3 bg-secondary bg-opacity-10 border border-secondary border-opacity-20">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center gap-2">
                      <span className="fs-5">📻</span>
                      <strong className="small text-light">Concentration White Noise</strong>
                    </div>
                    <Button
                      variant={activeSounds.whitenoise ? 'success' : 'outline-secondary'}
                      size="sm"
                      className="rounded-pill px-3 py-0.5 small"
                      onClick={() => handleToggleSound('whitenoise')}
                    >
                      {activeSounds.whitenoise ? 'Stop' : 'Play'}
                    </Button>
                  </div>
                  <Form.Range
                    min="0"
                    max="1"
                    step="0.05"
                    value={soundVolumes.whitenoise}
                    onChange={(e) => handleVolumeChange('whitenoise', e.target.value)}
                    disabled={!activeSounds.whitenoise}
                  />
                </div>

                {/* 4. Cafe Hum */}
                <div className="p-3 rounded-3 bg-secondary bg-opacity-10 border border-secondary border-opacity-20">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center gap-2">
                      <span className="fs-5">☕</span>
                      <strong className="small text-light">Atmospheric Coffee Shop</strong>
                    </div>
                    <Button
                      variant={activeSounds.cafe ? 'info' : 'outline-secondary'}
                      size="sm"
                      className="rounded-pill px-3 py-0.5 small"
                      onClick={() => handleToggleSound('cafe')}
                    >
                      {activeSounds.cafe ? 'Stop' : 'Play'}
                    </Button>
                  </div>
                  <Form.Range
                    min="0"
                    max="1"
                    step="0.05"
                    value={soundVolumes.cafe}
                    onChange={(e) => handleVolumeChange('cafe', e.target.value)}
                    disabled={!activeSounds.cafe}
                  />
                </div>
              </div>
            </Card>
          </Col>

          {/* Column 3: Study Tasks & Peer Leaderboard */}
          <Col lg={4}>
            <div className="d-flex flex-column gap-4 h-100">
              
              {/* Daily Focus Goals */}
              <Card className="bg-dark text-white border-secondary border-opacity-25 shadow-sm rounded-4 p-4">
                <h2 className="h6 fw-bold text-white mb-2">🎯 Today&apos;s Focus Goals</h2>
                <Form onSubmit={handleAddTask} className="d-flex gap-2 mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Add a study goal..."
                    value={newTaskInput}
                    onChange={(e) => setNewTaskInput(e.target.value)}
                    size="sm"
                    className="bg-black text-light border-secondary border-opacity-40 rounded-pill px-3 shadow-none"
                  />
                  <Button variant="info" size="sm" type="submit" className="rounded-pill px-3 fw-bold text-dark">
                    + Add
                  </Button>
                </Form>

                <div className="d-flex flex-column gap-2" style={{ maxHeight: '180px', overflowY: 'auto' }}>
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className={`p-2 px-3 rounded-3 border d-flex justify-content-between align-items-center transition-all ${
                        task.done
                          ? 'border-success border-opacity-20 bg-success bg-opacity-10 text-secondary text-decoration-line-through'
                          : 'border-secondary border-opacity-25 bg-secondary bg-opacity-5 text-light'
                      }`}
                    >
                      <div
                        className="cursor-pointer d-flex align-items-center gap-2 small flex-grow-1"
                        onClick={() => handleToggleTask(task.id)}
                      >
                        <span>{task.done ? '✅' : '⚪'}</span>
                        <span className="text-truncate">{task.title}</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-link text-secondary p-0 text-xs shadow-none"
                        onClick={() => handleDeleteTask(task.id)}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Global Daily Leaderboard */}
              <Card className="bg-dark text-white border-secondary border-opacity-25 shadow-sm rounded-4 p-4 flex-grow-1">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h2 className="h6 fw-bold text-white mb-0">🏆 Weekly XP Leaderboard</h2>
                  <Badge bg="warning" className="bg-opacity-10 text-warning border border-warning border-opacity-25">
                    Live Rankings
                  </Badge>
                </div>

                <div className="d-flex flex-column gap-2">
                  {INITIAL_LEADERBOARD.map((item) => {
                    const isUser = item.name.includes('You');
                    return (
                      <div
                        key={item.rank}
                        className={`p-2 px-3 rounded-3 border d-flex align-items-center justify-content-between small ${
                          isUser
                            ? 'border-info border-opacity-40 bg-info bg-opacity-10 text-white'
                            : 'border-secondary border-opacity-20 bg-secondary bg-opacity-5 text-secondary'
                        }`}
                      >
                        <div className="d-flex align-items-center gap-2">
                          <span className="font-monospace fw-bold" style={{ width: 18 }}>
                            #{item.rank}
                          </span>
                          <div
                            className="rounded-circle bg-secondary bg-opacity-25 text-light d-flex align-items-center justify-content-center fw-bold font-monospace"
                            style={{ width: 28, height: 28, fontSize: '0.72rem' }}
                          >
                            {item.avatar}
                          </div>
                          <div>
                            <div className="fw-semibold text-light text-truncate" style={{ maxWidth: '120px' }}>
                              {item.name}
                            </div>
                            <div className="text-xs text-secondary">{item.hours} hrs</div>
                          </div>
                        </div>

                        <div className="text-end">
                          <div className="font-monospace fw-bold text-warning">{item.points} XP</div>
                          <div className="text-xs text-secondary">{item.badge}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StudyLounge;
