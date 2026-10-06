import React, { useState } from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Modal from 'react-bootstrap/Modal';
import { useApp } from '../../context/AppContext';

const weeklyStudyActivity = [
  { day: 'Mon', hours: 2.5, height: '55%' },
  { day: 'Tue', hours: 4.0, height: '85%' },
  { day: 'Wed', hours: 1.5, height: '35%' },
  { day: 'Thu', hours: 3.2, height: '70%' },
  { day: 'Fri', hours: 4.8, height: '95%' },
  { day: 'Sat', hours: 2.0, height: '45%' },
  { day: 'Sun', hours: 3.5, height: '75%' }
];

const Dashboard = () => {
  const { user, enrolledCourses, badges, claimDailyStreak, masteredFlashcards } = useApp();
  const [selectedLiveSession, setSelectedLiveSession] = useState(null);

  // Calculate high-level stats
  const totalEnrolled = enrolledCourses.length;
  const completedCourses = enrolledCourses.filter((c) => c.progress === 100);
  const inProgressCourses = enrolledCourses.filter((c) => c.progress < 100);
  const averageProgress = totalEnrolled > 0
    ? Math.round(enrolledCourses.reduce((acc, c) => acc + c.progress, 0) / totalEnrolled)
    : 0;

  // Next level computation
  const currentXP = user.points || 1450;
  const nextLevelXP = 2000;
  const xpProgress = Math.min(100, Math.round((currentXP / nextLevelXP) * 100));

  const upcomingCohorts = [
    {
      id: 1,
      title: 'Building Production Micro-Frontends with Module Federation',
      instructor: 'Mark Evans',
      date: 'Today at 8:00 PM EST',
      attendees: 142,
      tag: 'Live Coding Lab'
    },
    {
      id: 2,
      title: 'LangChain & Autonomous AI Agents Office Hours',
      instructor: 'Dr. Elena Rostova',
      date: 'Tomorrow at 6:00 PM EST',
      attendees: 289,
      tag: 'Mentor Q&A'
    }
  ];

  return (
    <div className="dashboard-page bg-dark text-white min-vh-100 py-5">
      <Container fluid="xxl">
        
        {/* 1. WELCOME HEADER & DAILY STREAK BANNER */}
        <div className="p-4 p-lg-5 rounded-4 mb-4 border border-secondary border-opacity-25" style={{ background: 'linear-gradient(135deg, #131a26 0%, #0d121c 100%)' }}>
          <Row className="align-items-center gy-4">
            <Col lg={7}>
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="bg-info text-dark fw-bold rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: 58, height: 58, fontSize: '1.35rem' }}>
                  {user.initials || 'SK'}
                </div>
                <div>
                  <h1 className="h3 fw-bold mb-0 text-white">
                    Welcome back, {user.name}! 👋
                  </h1>
                  <p className="text-secondary small mb-0">
                    {user.title} • <span className="text-info fw-semibold">Level 4 Scholar</span>
                  </p>
                </div>
              </div>

              <p className="text-light text-opacity-80 mb-3" style={{ maxWidth: '640px' }}>
                You have maintained a <strong className="text-warning">🔥 {user.streak}-day learning streak</strong>! You&apos;ve completed <strong className="text-info">{user.hoursLearned} hours</strong> of verified technical labs this month.
              </p>

              {/* Level XP Progress Bar */}
              <div className="mb-3" style={{ maxWidth: '480px' }}>
                <div className="d-flex justify-content-between small text-secondary mb-1">
                  <span>Current XP: <strong className="text-warning">{currentXP} XP</strong></span>
                  <span>Next Rank: <strong className="text-info">2000 XP (Lead Architect)</strong></span>
                </div>
                <ProgressBar now={xpProgress} variant="warning" style={{ height: 8 }} className="rounded-pill bg-black" />
              </div>

              <div className="d-flex flex-wrap gap-2">
                <Badge bg="info" className="bg-opacity-10 text-info border border-info border-opacity-25 px-3 py-2 rounded-pill">
                  🎯 Weekly Target: {user.targetWeeklyHours || 12} hrs
                </Badge>
                <Badge bg="success" className="bg-opacity-10 text-success border border-success border-opacity-25 px-3 py-2 rounded-pill">
                  ⚡ {currentXP} Total XP
                </Badge>
                <Badge bg="warning" className="bg-opacity-10 text-warning border border-warning border-opacity-25 px-3 py-2 rounded-pill">
                  🏆 {completedCourses.length} Certificates
                </Badge>
                <Badge bg="secondary" className="bg-opacity-10 text-light border border-secondary border-opacity-25 px-3 py-2 rounded-pill">
                  🃏 {masteredFlashcards.length} Flashcards Mastered
                </Badge>
              </div>
            </Col>

            {/* Daily Streak Reward Callout */}
            <Col lg={5}>
              <div className="p-4 rounded-4 bg-black bg-opacity-40 border border-warning border-opacity-30 shadow-lg text-center text-lg-start d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="badge bg-warning text-dark fw-bold rounded-pill px-3 py-1">Daily Streak Quest</span>
                    <span className="text-warning fs-5">🔥</span>
                  </div>
                  <h5 className="fw-bold text-white mb-1">Keep Your Daily Momentum Alive</h5>
                  <p className="text-secondary small mb-3">
                    Check in every day to claim bonus experience points and climb the global engineering leaderboard.
                  </p>
                </div>

                <div className="d-flex flex-wrap gap-2">
                  <Button
                    variant="warning"
                    className="rounded-pill px-4 fw-bold text-dark flex-grow-1 shadow-sm"
                    onClick={claimDailyStreak}
                  >
                    🔥 Claim Daily Bonus (+50 XP)
                  </Button>
                  <Button as={Link} to="/flashcards" variant="outline-light" className="rounded-pill px-3 fw-semibold">
                    ⚡ Review Flashcards
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* 2. STATS COUNTERS */}
        <Row className="g-3 mb-5">
          <Col xs={6} md={3}>
            <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 h-100 p-3 rounded-4 card-hover">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="text-secondary small text-uppercase fw-semibold">Enrolled Tracks</span>
                <span className="fs-5">📚</span>
              </div>
              <h2 className="display-6 fw-bold text-white mb-0">{totalEnrolled}</h2>
              <small className="text-secondary">{inProgressCourses.length} in active progress</small>
            </Card>
          </Col>

          <Col xs={6} md={3}>
            <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 h-100 p-3 rounded-4 card-hover">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="text-secondary small text-uppercase fw-semibold">Completed</span>
                <span className="fs-5">🎓</span>
              </div>
              <h2 className="display-6 fw-bold text-success mb-0">{completedCourses.length}</h2>
              <small className="text-secondary">Official credentials ready</small>
            </Card>
          </Col>

          <Col xs={6} md={3}>
            <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 h-100 p-3 rounded-4 card-hover">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="text-secondary small text-uppercase fw-semibold">Average Progress</span>
                <span className="fs-5">📈</span>
              </div>
              <h2 className="display-6 fw-bold text-info mb-0">{averageProgress}%</h2>
              <ProgressBar now={averageProgress} variant="info" style={{ height: 6 }} className="mt-2 bg-dark" />
            </Card>
          </Col>

          <Col xs={6} md={3}>
            <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 h-100 p-3 rounded-4 card-hover">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="text-secondary small text-uppercase fw-semibold">Hours Studied</span>
                <span className="fs-5">⏱️</span>
              </div>
              <h2 className="display-6 fw-bold text-warning mb-0">{user.hoursLearned}h</h2>
              <small className="text-secondary">On track for weekly goal</small>
            </Card>
          </Col>
        </Row>

        {/* 3. WEEKLY STUDY ACTIVITY & GAMIFICATION ACHIEVEMENTS */}
        <Row className="gy-4 mb-5">
          {/* Weekly Activity Visualizer */}
          <Col lg={6}>
            <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 p-4 rounded-4 h-100">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5 className="fw-bold text-white mb-0">Weekly Learning Activity</h5>
                  <small className="text-secondary">Logged interactive lab hours over the past 7 days</small>
                </div>
                <Badge bg="info" className="text-dark rounded-pill">Total: 21.5 hrs</Badge>
              </div>

              {/* Bar Chart Representation */}
              <div className="d-flex align-items-end justify-content-between pt-4 pb-2" style={{ height: '180px' }}>
                {weeklyStudyActivity.map((item, idx) => (
                  <div key={idx} className="d-flex flex-column align-items-center gap-2 flex-grow-1">
                    <span className="small text-secondary font-mono" style={{ fontSize: '0.7rem' }}>{item.hours}h</span>
                    <div
                      className="rounded-3 transition-all hover-glow"
                      style={{
                        width: '32px',
                        height: item.height,
                        background: 'linear-gradient(180deg, #00d2ff 0%, #3a7bd5 100%)',
                        boxShadow: '0 0 10px rgba(0, 210, 255, 0.2)'
                      }}
                      title={`${item.day}: ${item.hours} hours`}
                    ></div>
                    <span className="small fw-semibold text-light">{item.day}</span>
                  </div>
                ))}
              </div>
            </Card>
          </Col>

          {/* Gamification Badges Gallery */}
          <Col lg={6}>
            <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 p-4 rounded-4 h-100">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5 className="fw-bold text-white mb-0">🏆 Achievement Badges</h5>
                  <small className="text-secondary">Earn medals by coding, testing, and engaging with peers</small>
                </div>
                <span className="badge bg-warning text-dark fw-bold rounded-pill">
                  {badges.filter((b) => b.unlocked).length} / {badges.length} Unlocked
                </span>
              </div>

              <div className="row g-2 overflow-y-auto" style={{ maxHeight: '200px' }}>
                {badges.map((b) => (
                  <div key={b.id} className="col-sm-6">
                    <div className={`p-2 rounded-3 border d-flex align-items-center gap-2 ${
                      b.unlocked
                        ? 'bg-dark border-warning border-opacity-30'
                        : 'bg-black bg-opacity-40 border-secondary border-opacity-20 opacity-50'
                    }`}>
                      <div className="fs-3">{b.icon}</div>
                      <div className="text-truncate">
                        <strong className={`d-block small text-truncate ${b.unlocked ? 'text-white' : 'text-secondary'}`}>
                          {b.name}
                        </strong>
                        <span className="text-secondary text-truncate d-block" style={{ fontSize: '0.68rem' }}>
                          {b.desc}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </Col>
        </Row>

        {/* 4. INTERACTIVE PRACTICE & ENGINEERING ARENAS */}
        <div className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h3 className="h5 fw-bold text-white mb-0">Interactive Practice & Arenas</h3>
              <small className="text-secondary">Code, test, simulate interviews, and sharpen your skills</small>
            </div>
            <Badge bg="info" className="bg-opacity-10 text-info border border-info border-opacity-25 px-3 py-1 rounded-pill">
              Live Developer Workspaces
            </Badge>
          </div>

          <Row className="g-3">
            <Col md={6} xl={3}>
              <Card as={Link} to="/coding-lab" className="text-decoration-none bg-secondary bg-opacity-10 border-secondary border-opacity-25 rounded-4 p-3 h-100 card-hover transition-all">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="bg-info bg-opacity-15 text-info p-2 rounded-3 fs-4">💻</div>
                  <Badge bg="success" className="rounded-pill">Automated Tests</Badge>
                </div>
                <h5 className="fw-bold text-white fs-6 mb-1">Coding Lab & Arena</h5>
                <p className="text-secondary small mb-0">
                  Solve real-world algorithm problems with instant test assertions.
                </p>
              </Card>
            </Col>

            <Col md={6} xl={3}>
              <Card as={Link} to="/assessment" className="text-decoration-none bg-secondary bg-opacity-10 border-secondary border-opacity-25 rounded-4 p-3 h-100 card-hover transition-all">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="bg-success bg-opacity-15 text-success p-2 rounded-3 fs-4">🎯</div>
                  <Badge bg="warning" className="text-dark rounded-pill">Timed Proctored</Badge>
                </div>
                <h5 className="fw-bold text-white fs-6 mb-1">Skill Assessment</h5>
                <p className="text-secondary small mb-0">
                  Take timed technical tests to benchmark competency and earn badges.
                </p>
              </Card>
            </Col>

            <Col md={6} xl={3}>
              <Card as={Link} to="/study-lounge" className="text-decoration-none bg-secondary bg-opacity-10 border-secondary border-opacity-25 rounded-4 p-3 h-100 card-hover transition-all">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="bg-warning bg-opacity-15 text-warning p-2 rounded-3 fs-4">🧘</div>
                  <Badge bg="info" className="text-dark rounded-pill">Soundscapes</Badge>
                </div>
                <h5 className="fw-bold text-white fs-6 mb-1">Study Lounge & Pomodoro</h5>
                <p className="text-secondary small mb-0">
                  Flow timer, rain & binaural soundscapes, and focus checklists.
                </p>
              </Card>
            </Col>

            <Col md={6} xl={3}>
              <Card as={Link} to="/interview-prep" className="text-decoration-none bg-secondary bg-opacity-10 border-secondary border-opacity-25 rounded-4 p-3 h-100 card-hover transition-all">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="bg-purple bg-opacity-15 text-light p-2 rounded-3 fs-4">💼</div>
                  <Badge bg="info" className="rounded-pill">FAANG Questions</Badge>
                </div>
                <h5 className="fw-bold text-white fs-6 mb-1">Tech Interview Prep</h5>
                <p className="text-secondary small mb-0">
                  Active recall simulator with architectural solutions and readiness score.
                </p>
              </Card>
            </Col>
          </Row>
        </div>

        {/* 5. MAIN DASHBOARD CONTENT: ENROLLED COURSES & LIVE EVENTS */}
        <Row className="gy-4">
          
          {/* Left: Enrolled Courses Cards */}
          <Col lg={8}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="h5 fw-bold text-white mb-0">Enrolled Curriculums</h3>
              <Link to="/my-courses" className="text-info text-decoration-none small fw-semibold">
                View All &rarr;
              </Link>
            </div>

            <Row className="g-3">
              {enrolledCourses.map((course) => (
                <Col md={6} key={course.id}>
                  <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 h-100 rounded-4 overflow-hidden card-hover">
                    <div className="position-relative">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-100"
                        style={{ height: '160px', objectFit: 'cover' }}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80';
                        }}
                      />
                      <Badge
                        bg={course.progress === 100 ? 'success' : 'info'}
                        className="position-absolute top-0 start-0 m-3 px-3 py-1 rounded-pill"
                      >
                        {course.progress === 100 ? '✓ Completed' : `${course.progress}% Completed`}
                      </Badge>
                    </div>
                    <Card.Body className="p-3 d-flex flex-column justify-content-between">
                      <div>
                        <span className="text-secondary small d-block mb-1">{course.category}</span>
                        <h5 className="fw-bold text-white fs-6 mb-2">{course.title}</h5>
                        <p className="text-secondary small mb-3">By {course.instructor}</p>
                      </div>

                      <div>
                        <ProgressBar
                          now={course.progress}
                          variant={course.progress === 100 ? 'success' : 'info'}
                          style={{ height: '6px' }}
                          className="bg-dark mb-3"
                        />
                        <div className="d-flex gap-2">
                          <Button
                            as={Link}
                            to={`/classroom?courseId=${course.id}`}
                            variant={course.progress === 100 ? 'outline-light' : 'info'}
                            size="sm"
                            className="rounded-pill fw-bold flex-grow-1 text-truncate text-dark"
                          >
                            {course.progress === 100 ? 'Review Course' : 'Continue Learning'}
                          </Button>
                          {course.certificateUnlocked && (
                            <Button
                              as={Link}
                              to={`/certificate/${course.id}`}
                              variant="warning"
                              size="sm"
                              className="rounded-pill fw-bold text-dark px-3"
                              title="View Official Certificate"
                            >
                              🏆 Certificate
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          {/* Right Column: Upcoming Live Sessions & Verified Skills */}
          <Col lg={4}>
            <h3 className="h5 fw-bold text-white mb-3 d-flex align-items-center gap-2">
              <span>🔴</span> Upcoming Live Sessions
            </h3>

            <div className="d-flex flex-column gap-3 mb-4">
              {upcomingCohorts.map((session) => (
                <Card key={session.id} className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 p-3 rounded-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <Badge bg="danger" className="text-white px-2 py-1 small rounded-pill">
                      {session.tag}
                    </Badge>
                    <span className="text-secondary small">👥 {session.attendees} attending</span>
                  </div>
                  <h6 className="fw-bold text-white mb-1">{session.title}</h6>
                  <p className="text-secondary small mb-2">Mentor: {session.instructor}</p>
                  <div className="d-flex justify-content-between align-items-center pt-2 border-top border-secondary border-opacity-25">
                    <span className="text-info small fw-medium">⏰ {session.date}</span>
                    <Button
                      variant="outline-info"
                      size="sm"
                      className="rounded-pill px-3"
                      onClick={() => setSelectedLiveSession(session)}
                    >
                      Join Live
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Quick Skills & Achievements */}
            <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 p-4 rounded-4">
              <h5 className="fw-bold text-white fs-6 mb-3">My Verified Skills</h5>
              <div className="d-flex flex-wrap gap-2 mb-3">
                {user.skills?.map((skill, idx) => (
                  <Badge key={idx} bg="dark" className="border border-secondary border-opacity-50 text-light px-3 py-2 rounded-pill font-mono small">
                    {skill}
                  </Badge>
                ))}
              </div>
              <Button as={Link} to="/profile" variant="outline-light" size="sm" className="w-100 rounded-pill fw-semibold">
                Manage Profile & Goals
              </Button>
            </Card>
          </Col>
        </Row>

        {/* LIVE SESSION JOIN MODAL */}
        <Modal show={!!selectedLiveSession} onHide={() => setSelectedLiveSession(null)} centered contentClassName="bg-dark text-white border-secondary">
          <Modal.Header closeButton closeVariant="white" className="border-secondary border-opacity-25">
            <Modal.Title className="fs-5">🔴 Live Streaming Classroom</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-4 text-center">
            <div className="fs-1 mb-2">🎥</div>
            <h5 className="fw-bold text-white mb-2">{selectedLiveSession?.title}</h5>
            <p className="text-secondary small mb-3">
              Led by <strong>{selectedLiveSession?.instructor}</strong> • {selectedLiveSession?.date}
            </p>
            <div className="p-3 bg-black rounded-3 mb-4 text-secondary small border border-secondary border-opacity-25">
              Connecting audio, WebRTC streams, and shared collaborative code sandbox...
            </div>
            <Button variant="info" className="rounded-pill px-4 fw-bold text-dark w-100" onClick={() => setSelectedLiveSession(null)}>
              Enter Interactive Stage
            </Button>
          </Modal.Body>
        </Modal>

      </Container>
    </div>
  );
};

export default Dashboard;
