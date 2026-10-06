import React, { useState } from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';

const ExploreCourse = () => {
  const [selectedGoal, setSelectedGoal] = useState('fullstack');
  const [experienceLevel, setExperienceLevel] = useState('intermediate');
  const [weeklyCommitment, setWeeklyCommitment] = useState('10');
  const [recommendationReady, setRecommendationReady] = useState(false);

  const handleGenerateRecommendation = (e) => {
    e.preventDefault();
    setRecommendationReady(true);
  };

  const getRecommendation = () => {
    if (selectedGoal === 'ai') {
      return {
        title: 'Mastering AI Agents & LangChain in Python',
        category: 'Data Science & AI',
        duration: '38 Hours (approx 4 weeks at your pace)',
        level: 'Intermediate',
        instructor: 'Dr. Elena Rostova',
        matchPercent: '98%',
        summary: 'Matches your goal of building autonomous multi-agent pipelines and retrieval-augmented generation systems.',
        courseId: 2
      };
    } else if (selectedGoal === 'devops') {
      return {
        title: 'Enterprise Kubernetes & Cloud-Native DevOps CI/CD',
        category: 'Cloud & DevOps',
        duration: '40 Hours (approx 5 weeks at your pace)',
        level: 'Advanced',
        instructor: 'Sarah Jenkins',
        matchPercent: '96%',
        summary: 'Matches your desire to manage distributed container orchestration, Helm charts, and automated zero-downtime deployments.',
        courseId: 4
      };
    } else if (selectedGoal === 'uiux') {
      return {
        title: 'Modern UI/UX Design Systems & Figma Masterclass',
        category: 'UI/UX Design',
        duration: '26 Hours (approx 3 weeks at your pace)',
        level: 'All Levels',
        instructor: 'Sophia Turner',
        matchPercent: '95%',
        summary: 'Matches your interest in component design tokens, accessible UI patterns, and high-fidelity interactive prototypes.',
        courseId: 5
      };
    } else {
      return {
        title: 'Full-Stack Web Development Bootcamp with React & Node',
        category: 'Web Development',
        duration: '42 Hours (approx 4 weeks at your pace)',
        level: 'Beginner to Pro',
        instructor: 'Alex Morrison',
        matchPercent: '99%',
        summary: 'Matches your goal to build full-scale responsive web applications, secure authentication, and REST/GraphQL APIs.',
        courseId: 1
      };
    }
  };

  const recommendation = getRecommendation();

  return (
    <div className="explore-courses-advisor bg-dark text-white min-vh-100 py-5">
      <Container fluid="xxl">
        
        {/* HEADER */}
        <div className="text-center mb-5">
          <Badge bg="info" className="bg-opacity-10 text-info border border-info border-opacity-30 px-3 py-2 rounded-pill fw-semibold mb-3">
            🎯 Smart Curriculum Matcher
          </Badge>
          <h1 className="display-5 fw-bold text-white mb-3">
            Find Your Ideal <span className="text-gradient">Technical Specialization</span>
          </h1>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '640px' }}>
            Answer 3 quick questions about your career goals and availability. Our recommendation engine will formulate your custom learning blueprint.
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            
            {/* INTERACTIVE QUESTIONNAIRE */}
            <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 rounded-4 p-4 p-md-5 mb-5 shadow-xl">
              <Form onSubmit={handleGenerateRecommendation}>
                
                {/* Question 1: Career Direction */}
                <div className="mb-4 pb-4 border-bottom border-secondary border-opacity-25">
                  <h5 className="fw-bold text-white mb-2">1. What is your primary engineering objective?</h5>
                  <p className="text-secondary small mb-3">Select the focus that matches your next career milestone.</p>
                  
                  <Row className="g-2">
                    <Col sm={6}>
                      <button
                        type="button"
                        className={`w-100 p-3 rounded-3 text-start border transition-all ${
                          selectedGoal === 'fullstack'
                            ? 'bg-info bg-opacity-20 border-info text-white'
                            : 'bg-dark border-secondary border-opacity-40 text-secondary'
                        }`}
                        onClick={() => setSelectedGoal('fullstack')}
                      >
                        <strong className="d-block text-white mb-1">💻 Full-Stack Software Engineer</strong>
                        <small className="opacity-75">React 19, Next.js, Node.js & Microservices</small>
                      </button>
                    </Col>
                    <Col sm={6}>
                      <button
                        type="button"
                        className={`w-100 p-3 rounded-3 text-start border transition-all ${
                          selectedGoal === 'ai'
                            ? 'bg-info bg-opacity-20 border-info text-white'
                            : 'bg-dark border-secondary border-opacity-40 text-secondary'
                        }`}
                        onClick={() => setSelectedGoal('ai')}
                      >
                        <strong className="d-block text-white mb-1">🤖 AI & Agentic Systems Builder</strong>
                        <small className="opacity-75">Python, LLMs, LangChain & Vector RAG</small>
                      </button>
                    </Col>
                    <Col sm={6}>
                      <button
                        type="button"
                        className={`w-100 p-3 rounded-3 text-start border transition-all ${
                          selectedGoal === 'devops'
                            ? 'bg-info bg-opacity-20 border-info text-white'
                            : 'bg-dark border-secondary border-opacity-40 text-secondary'
                        }`}
                        onClick={() => setSelectedGoal('devops')}
                      >
                        <strong className="d-block text-white mb-1">☁️ Cloud DevOps & SRE</strong>
                        <small className="opacity-75">Docker, Kubernetes Helm, Terraform & AWS</small>
                      </button>
                    </Col>
                    <Col sm={6}>
                      <button
                        type="button"
                        className={`w-100 p-3 rounded-3 text-start border transition-all ${
                          selectedGoal === 'uiux'
                            ? 'bg-info bg-opacity-20 border-info text-white'
                            : 'bg-dark border-secondary border-opacity-40 text-secondary'
                        }`}
                        onClick={() => setSelectedGoal('uiux')}
                      >
                        <strong className="d-block text-white mb-1">🎨 Design Systems & UI/UX</strong>
                        <small className="opacity-75">Figma, Design Tokens, Accessibility & CSS</small>
                      </button>
                    </Col>
                  </Row>
                </div>

                {/* Question 2: Experience Level */}
                <div className="mb-4 pb-4 border-bottom border-secondary border-opacity-25">
                  <h5 className="fw-bold text-white mb-2">2. What is your current technical familiarity?</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {[
                      { id: 'beginner', label: 'Beginner (Basic programming knowledge)' },
                      { id: 'intermediate', label: 'Intermediate (1-3 years professional building)' },
                      { id: 'advanced', label: 'Senior / Principal (Deep architectural expertise)' }
                    ].map((lvl) => (
                      <Button
                        key={lvl.id}
                        type="button"
                        variant={experienceLevel === lvl.id ? 'info' : 'outline-secondary'}
                        className="rounded-pill px-3 py-2 small fw-semibold"
                        onClick={() => setExperienceLevel(lvl.id)}
                      >
                        {lvl.label}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Question 3: Weekly Commitment */}
                <div className="mb-4">
                  <h5 className="fw-bold text-white mb-2">
                    3. Weekly study commitment: <span className="text-info">{weeklyCommitment} Hours / Week</span>
                  </h5>
                  <Form.Range
                    min="4"
                    max="30"
                    step="2"
                    value={weeklyCommitment}
                    onChange={(e) => setWeeklyCommitment(e.target.value)}
                    className="form-range"
                  />
                  <div className="d-flex justify-content-between small text-secondary">
                    <span>Part-Time (4h/wk)</span>
                    <span>Balanced (14h/wk)</span>
                    <span>Bootcamp Sprint (30h/wk)</span>
                  </div>
                </div>

                <Button variant="info" type="submit" size="lg" className="w-100 rounded-pill fw-bold text-dark shadow-sm">
                  ⚡ Generate My Custom Curriculum Match
                </Button>
              </Form>
            </Card>

            {/* RECOMMENDATION RESULT CARD */}
            {recommendationReady && (
              <div className="p-4 p-md-5 rounded-4 bg-info bg-opacity-10 border border-info border-opacity-40 shadow-2xl animation-fade-in">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Badge bg="success" className="px-3 py-1 rounded-pill fw-bold">
                    ✓ {recommendation.matchPercent} Curriculum Match
                  </Badge>
                  <span className="text-secondary small">{recommendation.duration}</span>
                </div>

                <span className="text-info small fw-bold text-uppercase d-block mb-1">
                  {recommendation.category}
                </span>
                <h3 className="display-6 fw-bold text-white mb-2">{recommendation.title}</h3>
                <p className="text-secondary lead fs-6 mb-3">{recommendation.summary}</p>
                <p className="text-light small mb-4">
                  Mentored by <strong>{recommendation.instructor}</strong> • Level: <span className="text-info">{recommendation.level}</span>
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <Button as={Link} to={`/classroom?courseId=${recommendation.courseId}`} variant="info" size="lg" className="rounded-pill px-5 fw-bold text-dark shadow-sm">
                    Enroll & Start Learning &rarr;
                  </Button>
                  <Button as={Link} to="/course-one" variant="outline-light" size="lg" className="rounded-pill px-4 fw-bold">
                    Explore Other Courses
                  </Button>
                </div>
              </div>
            )}

          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default ExploreCourse;