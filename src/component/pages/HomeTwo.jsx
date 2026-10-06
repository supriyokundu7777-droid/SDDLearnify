import React, { useState } from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// Import data from separate file
import { 
  highlights, 
  filterTabs, 
  homeTwoCourses, 
  upcomingLiveSessions, 
  homeTwoPricing, 
  studentFeedback 
} from '../../user/data/HomeTwo';

const HomeTwo = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Course filtering logic
  const filteredCourses = homeTwoCourses.filter((course) => {
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="home-two-page bg-dark text-white">
      {/* 1. HERO SECTION WITH SEARCH-FIRST FOCUS */}
      <section className="py-5 position-relative border-bottom border-secondary border-opacity-25" style={{ background: 'radial-gradient(circle at 50% 0%, #1a2332 0%, #111317 75%)' }}>
        <Container fluid="xxl" className="py-lg-5 text-center">
          <Row className="justify-content-center">
            <Col lg={9}>
              <Badge bg="info" className="bg-opacity-10 text-info border border-info border-opacity-25 px-3 py-2 rounded-pill fw-semibold mb-3">
                🎓 Next-Gen Interactive Learning Platform
              </Badge>
              <h1 className="display-4 fw-bold lh-sm mb-3">
                Learn The Skills That Define The <span className="text-info">Modern Era</span>
              </h1>
              <p className="lead text-secondary mb-4 mx-auto" style={{ maxWidth: '700px' }}>
                Upskill with live cohorts, interactive code environments, and direct mentorship from top Silicon Valley engineers and design leads.
              </p>

              {/* Instant Search Bar */}
              <div className="mx-auto mb-4" style={{ maxWidth: '640px' }}>
                <InputGroup size="lg" className="rounded-pill p-1 bg-black bg-opacity-50 border border-secondary border-opacity-50 shadow">
                  <Form.Control
                    type="search"
                    placeholder="Search by skill, topic, or mentor..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-white border-0 ps-4 shadow-none"
                  />
                  <Button variant="info" className="rounded-pill px-4 fw-bold text-dark">
                    Search Courses
                  </Button>
                </InputGroup>
              </div>

              {/* Popular Search Tags */}
              <div className="d-flex flex-wrap align-items-center justify-content-center gap-2 small text-secondary">
                <span className="fw-medium">Popular:</span>
                {['Next.js 15', 'Figma Variables', 'Python AI', 'DevOps', 'Docker', 'Bug Bounty'].map((tag, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setSearchQuery(tag)} 
                    className="btn btn-sm btn-outline-secondary rounded-pill py-0 px-2 text-secondary border-opacity-25 hover-text-white"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. VALUE PROPOSITION HIGHLIGHT STRIP */}
      <section className="py-4 bg-black bg-opacity-25 border-bottom border-secondary border-opacity-25">
        <Container fluid="xxl">
          <Row className="g-3">
            {highlights.map((item) => (
              <Col key={item.id} xs={12} sm={6} lg={3}>
                <div className="d-flex align-items-center gap-3 p-3 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 h-100">
                  <div className="fs-2">{item.icon}</div>
                  <div>
                    <h6 className="fw-bold mb-1">{item.title}</h6>
                    <small className="text-secondary">{item.desc}</small>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 3. TABBED COURSES DIRECTORY */}
      <section className="py-5">
        <Container fluid="xxl" className="py-lg-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
            <div>
              <Badge bg="secondary" className="mb-2">Course Catalog</Badge>
              <h2 className="fw-bold mb-0">Explore Specialized Learning Tracks</h2>
            </div>

            {/* Category Switcher Tabs */}
            <div className="d-flex flex-wrap gap-2">
              {filterTabs.map((tab) => (
                <Button
                  key={tab}
                  size="sm"
                  variant={activeCategory === tab ? 'info' : 'outline-secondary'}
                  className="rounded-pill px-3 fw-medium"
                  onClick={() => setActiveCategory(tab)}
                >
                  {tab}
                </Button>
              ))}
            </div>
          </div>

          <Row className="g-4">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <Col key={course.id} xs={12} md={6} lg={4}>
                  <Card className="h-100 bg-dark text-white border border-secondary border-opacity-25 rounded-4 overflow-hidden shadow-sm">
                    <div className="position-relative">
                      <Card.Img 
                        variant="top" 
                        src={course.image} 
                        alt={course.title}
                        style={{ height: '210px', objectFit: 'cover' }} 
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80';
                        }}
                      />
                      <Badge bg="danger" className="position-absolute top-0 end-0 m-3 rounded-pill px-2 py-1">
                        {course.badge}
                      </Badge>
                    </div>
                    <Card.Body className="d-flex flex-column p-4">
                      <div className="d-flex justify-content-between align-items-center small text-secondary mb-2">
                        <span className="text-info fw-bold text-uppercase">{course.category}</span>
                        <span>{course.lessons}</span>
                      </div>
                      <Card.Title className="fw-bold fs-5 mb-2">{course.title}</Card.Title>
                      
                      <div className="small text-secondary mb-3">
                        <span className="text-light fw-medium">{course.mentor}</span> • {course.mentorRole}
                      </div>

                      <div className="d-flex align-items-center gap-2 mb-3">
                        <span className="text-warning fw-bold">★ {course.rating}</span>
                        <span className="text-secondary small">({course.enrolled} enrolled)</span>
                      </div>

                      <div className="mt-auto d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25">
                        <span className="fw-bold fs-4 text-white">{course.price}</span>
                        <Button as={Link} to="/cart" variant="info" size="sm" className="rounded-pill px-3 fw-bold">
                          Enroll Now
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col xs={12} className="text-center py-5">
                <p className="text-secondary fs-5">No courses found matching your search.</p>
                <Button variant="outline-info" size="sm" onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}>
                  Reset Filters
                </Button>
              </Col>
            )}
          </Row>
        </Container>
      </section>

      {/* 4. UPCOMING LIVE SESSIONS / WEBINARS */}
      <section className="py-5 bg-black bg-opacity-25 border-top border-bottom border-secondary border-opacity-25">
        <Container fluid="xxl" className="py-lg-4">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <Badge bg="danger" className="mb-2">Interactive Cohorts</Badge>
              <h2 className="fw-bold mb-0">Upcoming Live Masterclasses</h2>
            </div>
            <Link to="/events" className="text-info text-decoration-none fw-semibold">
              All Events &rarr;
            </Link>
          </div>

          <Row className="g-4">
            {upcomingLiveSessions.map((session) => (
              <Col key={session.id} xs={12} md={4}>
                <Card className="h-100 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white p-4 rounded-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Badge bg="warning" className="text-dark fw-bold">{session.badge}</Badge>
                    <small className="text-danger fw-semibold">{session.seatsLeft} spots remaining</small>
                  </div>
                  <Card.Title className="fw-bold fs-5 mb-2">{session.title}</Card.Title>
                  <p className="text-secondary small mb-3">Host: <span className="text-light">{session.speaker}</span></p>
                  
                  <div className="small text-secondary mt-auto pt-3 border-top border-secondary border-opacity-25 d-flex justify-content-between align-items-center">
                    <div>
                      <div>📅 {session.date}</div>
                      <div>⏰ {session.time}</div>
                    </div>
                    <Button as={Link} to="/single-event" variant="outline-info" size="sm" className="rounded-pill px-3">
                      Register
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 5. PRICING & MEMBERSHIP PLANS */}
      <section className="py-5">
        <Container fluid="xxl" className="py-lg-4">
          <div className="text-center mb-5">
            <Badge bg="info" className="text-dark fw-bold mb-2">Flexible Memberships</Badge>
            <h2 className="fw-bold">Simple, Transparent Pricing</h2>
            <p className="text-secondary">Get unrestricted access to courses, projects, and career credentials.</p>
          </div>

          <Row className="g-4 justify-content-center">
            {homeTwoPricing.map((plan) => (
              <Col key={plan.id} xs={12} md={6} lg={4}>
                <Card className={`h-100 bg-dark text-white rounded-4 p-4 border ${plan.popular ? 'border-info shadow-lg' : 'border-secondary border-opacity-25'}`}>
                  {plan.popular && (
                    <div className="text-center mb-3">
                      <Badge bg="info" className="text-dark fw-bold px-3 py-1 rounded-pill">
                        Most Popular Pick
                      </Badge>
                    </div>
                  )}
                  <h4 className="fw-bold mb-1">{plan.title}</h4>
                  <div className="d-flex align-items-baseline gap-1 my-3">
                    <span className="display-5 fw-bold text-white">{plan.price}</span>
                    <span className="text-secondary small">/ month ({plan.cycle})</span>
                  </div>

                  <ul className="list-unstyled my-4 text-secondary small d-flex flex-column gap-3">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="d-flex align-items-center gap-2">
                        <span className="text-info fw-bold">✓</span>
                        <span className="text-light">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    as={Link} 
                    to="/register" 
                    variant={plan.popular ? 'info' : 'outline-light'} 
                    className="w-100 rounded-pill py-2 fw-bold mt-auto"
                  >
                    Get Started Now
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-5 bg-black bg-opacity-25 border-top border-secondary border-opacity-25">
        <Container fluid="xxl" className="py-lg-4">
          <div className="text-center mb-5">
            <Badge bg="secondary" className="mb-2">Alumni Reviews</Badge>
            <h2 className="fw-bold">Trusted by Thousands of Engineers</h2>
          </div>
          <Row className="g-4 justify-content-center">
            {studentFeedback.map((item) => (
              <Col key={item.id} md={6} lg={5}>
                <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white p-4 rounded-4 h-100">
                  <div className="text-warning mb-3">★★★★★</div>
                  <Card.Text className="text-light mb-4">{item.feedback}</Card.Text>
                  <div className="mt-auto border-top border-secondary border-opacity-25 pt-3">
                    <h6 className="fw-bold mb-0 text-white">{item.name}</h6>
                    <small className="text-secondary">{item.role}</small>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 7. FINAL ENROLL CALLOUT */}
      <section className="py-5" style={{ background: 'linear-gradient(180deg, #111317 0%, #171a1f 100%)' }}>
        <Container fluid="xxl" className="text-center py-4">
          <h2 className="display-6 fw-bold mb-3">Start Building Your Tech Career Today</h2>
          <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: '600px' }}>
            Get instant access to thousands of hours of industry-level material and start shipping production apps.
          </p>
          <Button as={Link} to="/register" variant="info" size="lg" className="rounded-pill px-5 fw-bold shadow">
            Sign Up For Free
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default HomeTwo;