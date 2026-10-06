import React from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';

// Import data from separate data file
import { categories, featuredCourses, instructors, testimonials } from '../../user/data/HomeOne';

const HomeOne = () => {
  return (
    <div className="home-page bg-dark text-white">
      {/* 1. Hero Section */}
      <section className="py-5 position-relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #171a1f 0%, #111317 100%)' }}>
        <Container fluid="xxl" className="py-lg-5">
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <Badge bg="info" className="bg-opacity-25 text-info px-3 py-2 rounded-pill fw-semibold mb-3">
                🚀 Welcome to the Future of Online Learning
              </Badge>
              <h1 className="display-4 fw-bold lh-sm mb-3">
                Master In-Demand Skills With <span className="text-info">Industry Experts</span>
              </h1>
              <p className="lead text-secondary mb-4">
                Explore 500+ structured courses in Web Development, Artificial Intelligence, and Design. Learn at your own pace and earn recognized certifications.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Button as={Link} to="/course-one" variant="info" size="lg" className="rounded-pill px-4 fw-bold shadow-sm">
                  Explore Courses
                </Button>
                <Button as={Link} to="/register" variant="outline-light" size="lg" className="rounded-pill px-4 fw-bold">
                  Start Free Trial
                </Button>
              </div>
              <div className="mt-4 pt-3 border-top border-secondary border-opacity-25 d-flex gap-4">
                <div>
                  <h4 className="fw-bold text-white mb-0">50K+</h4>
                  <small className="text-secondary">Active Students</small>
                </div>
                <div>
                  <h4 className="fw-bold text-white mb-0">1.2K+</h4>
                  <small className="text-secondary">Certified Mentors</small>
                </div>
                <div>
                  <h4 className="fw-bold text-white mb-0">98%</h4>
                  <small className="text-secondary">Completion Rate</small>
                </div>
              </div>
            </Col>
            <Col lg={6} className="text-center position-relative">
              <div className="p-3 border border-secondary border-opacity-25 rounded-4 bg-secondary bg-opacity-10 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                  alt="Students learning together" 
                  className="img-fluid rounded-4"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. Stats Strip */}
      <section className="py-4 border-top border-bottom border-secondary border-opacity-25 bg-black bg-opacity-25">
        <Container fluid="xxl">
          <Row className="text-center gy-3">
            <Col sm={6} md={3}>
              <h3 className="fw-bold text-info mb-1">500+</h3>
              <p className="text-secondary mb-0">Specialized Courses</p>
            </Col>
            <Col sm={6} md={3}>
              <h3 className="fw-bold text-info mb-1">100+</h3>
              <p className="text-secondary mb-0">Live Coding Labs</p>
            </Col>
            <Col sm={6} md={3}>
              <h3 className="fw-bold text-info mb-1">24/7</h3>
              <p className="text-secondary mb-0">Tutor & Forum Support</p>
            </Col>
            <Col sm={6} md={3}>
              <h3 className="fw-bold text-info mb-1">100%</h3>
              <p className="text-secondary mb-0">Verified Certificates</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. Popular Categories */}
      <section className="py-5">
        <Container fluid="xxl" className="py-lg-4">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <Badge bg="secondary" className="mb-2">Categories</Badge>
              <h2 className="fw-bold">Explore Top Categories</h2>
            </div>
            <Link to="/course-one" className="text-info text-decoration-none fw-semibold d-none d-md-block">
              View All Categories &rarr;
            </Link>
          </div>
          <Row className="g-4">
            {categories.map((cat, idx) => (
              <Col key={idx} xs={12} sm={6} lg={3}>
                <Card className="h-100 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white p-3 rounded-4">
                  <Card.Body className="text-center">
                    <div className="fs-1 mb-3">{cat.icon}</div>
                    <Card.Title className="fw-bold fs-5">{cat.title}</Card.Title>
                    <Card.Text className="text-secondary small">{cat.count}</Card.Text>
                    <Link to="/course-one" className="btn btn-sm btn-outline-info rounded-pill px-3 mt-2">
                      Explore
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 4. Featured Courses */}
      <section className="py-5 bg-black bg-opacity-25">
        <Container fluid="xxl" className="py-lg-4">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <Badge bg="info" className="text-dark fw-bold mb-2">Featured Picks</Badge>
              <h2 className="fw-bold">Most Popular Online Courses</h2>
            </div>
            <Link to="/course-one" className="text-info text-decoration-none fw-semibold">
              Browse All &rarr;
            </Link>
          </div>
          <Row className="g-4">
            {featuredCourses.map((course) => (
              <Col key={course.id} xs={12} md={6} lg={4}>
                <Card className="h-100 bg-dark text-white border border-secondary border-opacity-25 rounded-4 overflow-hidden shadow-sm">
                  <div className="position-relative">
                    <Card.Img 
                      variant="top" 
                      src={course.image} 
                      alt={course.title}
                      style={{ height: '200px', objectFit: 'cover' }} 
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
                    <span className="text-info small fw-bold text-uppercase tracking-wide mb-1">{course.category}</span>
                    <Card.Title className="fw-bold fs-5 mb-2">{course.title}</Card.Title>
                    <div className="small text-secondary mb-3">By {course.instructor}</div>
                    
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <span className="text-warning fw-bold">★ {course.rating}</span>
                      <span className="text-secondary small">({course.reviews} ratings)</span>
                    </div>

                    <div className="mt-auto d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25">
                      <div>
                        <span className="fw-bold fs-4 text-white">{course.price}</span>
                        <span className="text-secondary text-decoration-line-through ms-2 small">{course.originalPrice}</span>
                      </div>
                      <Button as={Link} to="/cart" variant="info" size="sm" className="rounded-pill px-3 fw-bold">
                        Enroll Now
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 5. Why Choose Us */}
      <section className="py-5">
        <Container fluid="xxl" className="py-lg-4">
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <Badge bg="secondary" className="mb-2">Key Advantages</Badge>
              <h2 className="fw-bold mb-4">Why Thousands Choose Learnify</h2>
              <div className="d-flex gap-3 mb-4">
                <div className="bg-info bg-opacity-10 text-info p-3 rounded-circle h-100 fs-4">🎓</div>
                <div>
                  <h5 className="fw-bold mb-1">Learn From World-Class Mentors</h5>
                  <p className="text-secondary mb-0">Courses curated and instructed by real senior software engineers and designers.</p>
                </div>
              </div>
              <div className="d-flex gap-3 mb-4">
                <div className="bg-info bg-opacity-10 text-info p-3 rounded-circle h-100 fs-4">⚡</div>
                <div>
                  <h5 className="fw-bold mb-1">Self-Paced Flexible Schedules</h5>
                  <p className="text-secondary mb-0">Study whenever you want, lifetime access to course videos, quizzes, and projects.</p>
                </div>
              </div>
              <div className="d-flex gap-3">
                <div className="bg-info bg-opacity-10 text-info p-3 rounded-circle h-100 fs-4">📜</div>
                <div>
                  <h5 className="fw-bold mb-1">Verified Career Credentials</h5>
                  <p className="text-secondary mb-0">Shareable certificates to boost your LinkedIn profile and resume credibility.</p>
                </div>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80" 
                alt="Online learning benefits" 
                className="img-fluid rounded-4 shadow border border-secondary border-opacity-25"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* 6. Top Instructors */}
      <section className="py-5 bg-black bg-opacity-25">
        <Container fluid="xxl" className="py-lg-4">
          <div className="text-center mb-5">
            <Badge bg="info" className="text-dark fw-bold mb-2">Our Faculty</Badge>
            <h2 className="fw-bold">Learn from Industry Leaders</h2>
          </div>
          <Row className="g-4">
            {instructors.map((ins) => (
              <Col key={ins.id} xs={12} sm={6} lg={4}>
                <Card className="bg-dark text-white border border-secondary border-opacity-25 text-center p-4 rounded-4">
                  <div className="mx-auto mb-3">
                    <img 
                      src={ins.image} 
                      alt={ins.name} 
                      className="rounded-circle border border-info border-2" 
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                      }}
                    />
                  </div>
                  <Card.Title className="fw-bold fs-5 mb-1">{ins.name}</Card.Title>
                  <Card.Text className="text-secondary small">{ins.role}</Card.Text>
                  <Link to="/instructor-details" className="btn btn-sm btn-outline-light rounded-pill px-3 mt-2">
                    View Profile
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 7. Testimonials */}
      <section className="py-5">
        <Container fluid="xxl" className="py-lg-4">
          <div className="text-center mb-5">
            <Badge bg="secondary" className="mb-2">Success Stories</Badge>
            <h2 className="fw-bold">What Our Learners Say</h2>
          </div>
          <Row className="g-4 justify-content-center">
            {testimonials.map((test) => (
              <Col key={test.id} md={6} lg={5}>
                <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white p-4 rounded-4 h-100">
                  <div className="fs-3 text-info mb-2">“</div>
                  <Card.Text className="text-light mb-4">{test.feedback}</Card.Text>
                  <div className="d-flex align-items-center gap-3 mt-auto">
                    <div className="bg-info text-dark rounded-circle fw-bold d-flex align-items-center justify-content-center" style={{ width: 42, height: 42 }}>
                      {test.name.charAt(0)}
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">{test.name}</h6>
                      <small className="text-secondary">{test.role}</small>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 8. Call To Action */}
      <section className="py-5 border-top border-secondary border-opacity-25" style={{ background: 'linear-gradient(180deg, #111317 0%, #171a1f 100%)' }}>
        <Container fluid="xxl" className="py-4 text-center">
          <Row className="justify-content-center">
            <Col lg={8}>
              <Badge bg="danger" className="mb-3">Limited Offer</Badge>
              <h2 className="display-6 fw-bold mb-3">Ready to Accelerate Your Career?</h2>
              <p className="text-secondary mb-4">
                Join over 50,000+ students already advancing their developer and design skills. Get access to weekly curated resources and updates.
              </p>
              <Form className="d-flex justify-content-center gap-2 max-w-md mx-auto" style={{ maxWidth: '480px' }} onSubmit={(e) => e.preventDefault()}>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address..."
                  className="rounded-pill bg-dark border-secondary text-white px-3 shadow-none"
                />
                <Button variant="info" type="submit" className="rounded-pill px-4 fw-bold shadow-sm">
                  Subscribe
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomeOne;