import React from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import { 
  aboutValues, 
  milestones, 
  aboutStats, 
  leadershipTeam 
} from '../user/About';

const About = () => {
  return (
    <div className="about-page bg-dark text-white">
      {/* 1. HERO BANNER */}
      <section className="py-5 position-relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #171a1f 0%, #111317 100%)' }}>
        <Container fluid="xxl" className="py-lg-5 text-center">
          <Row className="justify-content-center">
            <Col lg={8}>
              <Badge bg="info" className="bg-opacity-10 text-info border border-info border-opacity-25 px-3 py-2 rounded-pill fw-semibold mb-3">
                About Learnify
              </Badge>
              <h1 className="display-4 fw-bold lh-sm mb-3">
                Bridging The Gap Between Ambition and <span className="text-info">Real Engineering</span>
              </h1>
              <p className="lead text-secondary mb-4 mx-auto" style={{ maxWidth: '680px' }}>
                We are building the most practical learning ecosystem for modern developers, designers, and AI creators through real industry capstone projects and mentor feedback.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Button as={Link} to="/course-one" variant="info" className="rounded-pill px-4 fw-bold shadow-sm">
                  Explore Curriculums
                </Button>
                <Button as={Link} to="/contact" variant="outline-light" className="rounded-pill px-4 fw-bold">
                  Get In Touch
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. STATS BAR */}
      <section className="py-4 border-top border-bottom border-secondary border-opacity-25 bg-black bg-opacity-25">
        <Container fluid="xxl">
          <Row className="text-center gy-3">
            {aboutStats.map((item, idx) => (
              <Col key={idx} xs={6} md={3}>
                <h2 className="display-6 fw-bold text-info mb-1">{item.value}</h2>
                <p className="text-secondary mb-0 small text-uppercase tracking-wider">{item.label}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 3. OUR STORY & PILLARS */}
      <section className="py-5">
        <Container fluid="xxl" className="py-lg-4">
          <Row className="align-items-center gy-4 mb-5">
            <Col lg={6}>
              <Badge bg="secondary" className="mb-2">Our Story</Badge>
              <h2 className="fw-bold mb-3">Empowering The Next Generation of Tech Leaders</h2>
              <p className="text-secondary mb-3">
                Learnify was born out of frustration with outdated video tutorials and theoretical tests. Tech stacks evolve fast, and developers need actual production workflows: PR reviews, containerized deployments, cloud architecture, and modern libraries.
              </p>
              <p className="text-secondary mb-4">
                Today, our curriculums are designed with staff engineers from leading companies so that everything you build can be shown directly to hiring managers with confidence.
              </p>
              <Button as={Link} to="/register" variant="outline-info" className="rounded-pill px-4 fw-semibold">
                Join Our Global Cohort
              </Button>
            </Col>
            <Col lg={6} className="text-center">
              <div className="p-3 border border-secondary border-opacity-25 rounded-4 bg-secondary bg-opacity-10 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration" 
                  className="img-fluid rounded-4"
                />
              </div>
            </Col>
          </Row>

          {/* Core Values Cards */}
          <Row className="g-4 pt-4">
            {aboutValues.map((val) => (
              <Col key={val.id} xs={12} sm={6} lg={3}>
                <Card className="h-100 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white p-3 rounded-4">
                  <Card.Body>
                    <div className="fs-1 mb-3">{val.icon}</div>
                    <Card.Title className="fw-bold fs-5 mb-2">{val.title}</Card.Title>
                    <Card.Text className="text-secondary small">{val.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 4. OUR MILESTONES TIMELINE */}
      <section className="py-5 bg-black bg-opacity-25 border-top border-bottom border-secondary border-opacity-25">
        <Container fluid="xxl" className="py-lg-4">
          <div className="text-center mb-5">
            <Badge bg="info" className="text-dark fw-bold mb-2">Our Journey</Badge>
            <h2 className="fw-bold">How Learnify Has Evolved</h2>
          </div>
          <Row className="g-4">
            {milestones.map((m, idx) => (
              <Col key={idx} xs={12} sm={6} lg={3}>
                <div className="p-4 rounded-4 bg-dark border border-secondary border-opacity-25 h-100 position-relative">
                  <span className="badge bg-info-subtle text-info fw-bold mb-3 px-3 py-1 rounded-pill">{m.year}</span>
                  <h5 className="fw-bold text-white mb-2">{m.title}</h5>
                  <p className="text-secondary small mb-0">{m.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 5. EXECUTIVE LEADERSHIP TEAM */}
      <section className="py-5">
        <Container fluid="xxl" className="py-lg-4">
          <div className="text-center mb-5">
            <Badge bg="secondary" className="mb-2">Leadership</Badge>
            <h2 className="fw-bold">Meet The Minds Guiding Learnify</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: '560px' }}>
              Built and directed by experienced practitioners who have designed systems used by millions of global users.
            </p>
          </div>
          <Row className="g-4">
            {leadershipTeam.map((leader) => (
              <Col key={leader.id} xs={12} sm={6} lg={3}>
                <Card className="h-100 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white text-center p-3 rounded-4">
                  <div className="mx-auto my-3">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="rounded-circle border border-info border-2" 
                      style={{ width: '110px', height: '110px', objectFit: 'cover' }} 
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                      }}
                    />
                  </div>
                  <Card.Body className="d-flex flex-column p-2">
                    <Card.Title className="fw-bold fs-5 mb-1">{leader.name}</Card.Title>
                    <span className="text-info small fw-medium mb-3">{leader.role}</span>
                    <Card.Text className="text-secondary small mb-4">{leader.bio}</Card.Text>
                    <div className="mt-auto pt-3 border-top border-secondary border-opacity-25 d-flex justify-content-center gap-3">
                      <a href={leader.social.linkedin} className="text-secondary hover-text-white text-decoration-none">LinkedIn</a>
                      <span className="text-secondary opacity-25">|</span>
                      <a href={leader.social.github} className="text-secondary hover-text-white text-decoration-none">GitHub</a>
                      <span className="text-secondary opacity-25">|</span>
                      <a href={leader.social.twitter} className="text-secondary hover-text-white text-decoration-none">Twitter</a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-5 border-top border-secondary border-opacity-25" style={{ background: 'linear-gradient(180deg, #111317 0%, #171a1f 100%)' }}>
        <Container fluid="xxl" className="py-4 text-center">
          <Row className="justify-content-center">
            <Col lg={7}>
              <h2 className="display-6 fw-bold mb-3">Ready to Join Our Community?</h2>
              <p className="text-secondary mb-4">
                Whether you want to learn full-stack development, master UI/UX, or train large language models, our platform provides everything you need.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Button as={Link} to="/register" variant="info" size="lg" className="rounded-pill px-5 fw-bold shadow">
                  Get Started For Free
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;