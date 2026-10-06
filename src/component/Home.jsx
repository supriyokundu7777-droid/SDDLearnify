import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useApp } from '../context/AppContext';

// Sample top curated courses for the flagship homepage
const featuredShowcaseCourses = [
  {
    id: 1,
    title: 'Full-Stack Web Development Bootcamp with React & Node',
    category: 'Web Development',
    level: 'Beginner to Pro',
    instructor: 'Alex Morrison',
    rating: 4.9,
    reviews: '3.4k',
    duration: '42 Hours',
    lectures: '180 Lectures',
    price: 2499,
    originalPrice: 5999,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Mastering AI Agents & LangChain in Python',
    category: 'Data Science & AI',
    level: 'Intermediate',
    instructor: 'Dr. Elena Rostova',
    rating: 5.0,
    reviews: '2.8k',
    duration: '38 Hours',
    lectures: '145 Lectures',
    price: 2799,
    originalPrice: 6999,
    badge: 'Hot & Trending',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Next.js 15, Server Actions & App Router In-Depth',
    category: 'Web Development',
    level: 'Intermediate',
    instructor: 'Mark Evans',
    rating: 4.9,
    reviews: '2.1k',
    duration: '34 Hours',
    lectures: '120 Lectures',
    price: 2299,
    originalPrice: 5499,
    badge: 'Pro Pick',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'Enterprise Kubernetes & Cloud-Native DevOps CI/CD',
    category: 'Cloud & DevOps',
    level: 'Advanced',
    instructor: 'Sarah Jenkins',
    rating: 4.88,
    reviews: '1.9k',
    duration: '40 Hours',
    lectures: '160 Lectures',
    price: 2999,
    originalPrice: 6999,
    badge: 'High In Demand',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    title: 'Modern UI/UX Design Systems & Figma Masterclass',
    category: 'UI/UX Design',
    level: 'All Levels',
    instructor: 'Sophia Turner',
    rating: 4.92,
    reviews: '4.2k',
    duration: '26 Hours',
    lectures: '95 Lectures',
    price: 1999,
    originalPrice: 4999,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    title: 'Cybersecurity Threat Intelligence & Ethical Hacking',
    category: 'Cyber Security',
    level: 'Intermediate',
    instructor: 'David Reynolds',
    rating: 4.85,
    reviews: '1.6k',
    duration: '36 Hours',
    lectures: '130 Lectures',
    price: 2799,
    originalPrice: 6999,
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80'
  }
];

const categoryPills = [
  'All Tracks',
  'Web Development',
  'Data Science & AI',
  'Cloud & DevOps',
  'UI/UX Design',
  'Cyber Security'
];

const platformFeatures = [
  {
    icon: '⚡',
    title: 'In-Browser Cloud Sandboxes',
    desc: 'Code in live Node.js, Python, and Docker environments without configuring any local dev tools or dependencies.'
  },
  {
    icon: '🤖',
    title: 'AI Assisted Learning',
    desc: 'Stuck on a bug? Our built-in code tutor explains compilation errors, suggests edge tests, and reviews architecture.'
  },
  {
    icon: '🏆',
    title: 'Accredited Verifiable Credentials',
    desc: 'Earn tamper-proof certificates with unique cryptographic verification codes accepted by top tech recruiters.'
  },
  {
    icon: '👥',
    title: 'Live 1-on-1 Mentor Cohorts',
    desc: 'Join weekly live code jams and office hours with staff engineers from high-growth technology companies.'
  }
];

const Home = () => {
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All Tracks');
  const [searchQuery, setSearchQuery] = useState('');

  const handleHeroSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/course?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/course');
    }
  };

  const filteredCourses = featuredShowcaseCourses.filter((course) => {
    const matchCat = selectedCategory === 'All Tracks' || course.category === selectedCategory;
    const matchSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="home-flagship bg-dark text-white">
      
      {/* 1. HERO SECTION */}
      <section className="py-5 position-relative overflow-hidden" style={{ background: 'radial-gradient(circle at 50% 10%, #152238 0%, #0a0d14 80%)' }}>
        <Container fluid="xxl" className="py-lg-5">
          <Row className="align-items-center gy-5">
            <Col lg={7}>
              <Badge bg="info" className="bg-opacity-10 text-info border border-info border-opacity-30 px-3 py-2 rounded-pill fw-semibold mb-3 d-inline-flex align-items-center gap-2">
                <span>🚀 Spring 2026 Cohorts Open</span>
                <span className="opacity-50">•</span>
                <span className="text-white">Free Live Sandboxes</span>
              </Badge>

              <h1 className="display-4 fw-bold lh-sm mb-3">
                Master Next-Gen Tech & AI With <span className="text-gradient">Industry Architects</span>
              </h1>

              <p className="lead text-secondary mb-4" style={{ maxWidth: '640px' }}>
                Join over 50,000+ engineers building production full-stack systems, autonomous AI agents, and enterprise cloud infrastructure in interactive browser classrooms.
              </p>

              {/* Instant Hero Search Bar */}
              <Form onSubmit={handleHeroSearch} className="mb-4" style={{ maxWidth: '580px' }}>
                <InputGroup size="lg" className="rounded-pill p-1 bg-black bg-opacity-70 border border-secondary border-opacity-50 shadow-lg responsive-hero-inputgroup">
                  <Form.Control
                    type="search"
                    placeholder="Search by topic, framework, or mentor (e.g. React 19, Python, AI)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-white border-0 ps-3 ps-md-4 shadow-none fs-6"
                  />
                  <Button variant="info" type="submit" className="rounded-pill px-4 fw-bold text-dark">
                    Search Courses
                  </Button>
                </InputGroup>
              </Form>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Button as={Link} to="/course" variant="info" size="lg" className="rounded-pill px-4 fw-bold text-dark shadow-sm">
                  Browse All 500+ Curriculums &rarr;
                </Button>
                <Button as={Link} to="/classroom" variant="outline-light" size="lg" className="rounded-pill px-4 fw-bold">
                  ▶ Open Live Classroom
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-3 border-top border-secondary border-opacity-25 d-flex flex-wrap gap-4">
                <div>
                  <h4 className="fw-bold text-white mb-0">50K+</h4>
                  <small className="text-secondary">Enrolled Engineers</small>
                </div>
                <div>
                  <h4 className="fw-bold text-white mb-0">1.2K+</h4>
                  <small className="text-secondary">Staff Mentors</small>
                </div>
                <div>
                  <h4 className="fw-bold text-white mb-0">98%</h4>
                  <small className="text-secondary">Course Completion</small>
                </div>
                <div>
                  <h4 className="fw-bold text-warning mb-0">4.9 ★</h4>
                  <small className="text-secondary">Average Rating</small>
                </div>
              </div>
            </Col>

            {/* Hero Visual Mockup */}
            <Col lg={5}>
              <div className="position-relative">
                <div className="p-3 border border-secondary border-opacity-30 rounded-4 bg-secondary bg-opacity-10 shadow-2xl overflow-hidden card-hover">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                    alt="Engineers learning online"
                    className="img-fluid rounded-3 w-100"
                    style={{ maxHeight: '380px', objectFit: 'cover' }}
                  />
                  
                  {/* Floating Metric Card 1 */}
                  <div className="position-absolute bottom-0 start-0 m-4 p-3 rounded-3 bg-dark bg-opacity-90 border border-secondary border-opacity-50 shadow-lg d-flex align-items-center gap-3">
                    <span className="fs-3">💡</span>
                    <div>
                      <strong className="text-white d-block small">React 19 & Agentic AI Track</strong>
                      <span className="text-success small fw-semibold">✓ 100% Practical Labs</span>
                    </div>
                  </div>

                  {/* Floating Metric Card 2 */}
                  <div className="position-absolute top-0 end-0 m-4 p-3 rounded-3 bg-dark bg-opacity-90 border border-info border-opacity-50 shadow-lg d-none d-sm-flex align-items-center gap-2">
                    <span className="fs-4">🏆</span>
                    <div>
                      <strong className="text-info d-block small">Official Credential</strong>
                      <span className="text-secondary" style={{ fontSize: '0.75rem' }}>Verifiable on LinkedIn</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. CATEGORY FILTER TABS & FEATURED CURRICULUMS */}
      <section className="py-5 border-top border-secondary border-opacity-25 bg-black bg-opacity-25">
        <Container fluid="xxl">
          
          <div className="text-center mb-5">
            <Badge bg="info" className="bg-opacity-10 text-info border border-info border-opacity-25 px-3 py-1 rounded-pill mb-2">
              Curated Specializations
            </Badge>
            <h2 className="display-6 fw-bold text-white mb-2">Explore High-Impact Tech Tracks</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>
              Structured step-by-step tracks designed in collaboration with senior engineers from Stripe, Google, and OpenAI.
            </p>

            {/* Category Pills */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
              {categoryPills.map((cat, idx) => (
                <Button
                  key={idx}
                  variant={selectedCategory === cat ? 'info' : 'outline-secondary'}
                  className="rounded-pill px-4 fw-semibold small"
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          {/* Courses Cards Grid */}
          <Row className="g-4">
            {filteredCourses.map((course) => {
              const inWish = isInWishlist(course.id);

              return (
                <Col md={6} lg={4} key={course.id}>
                  <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 rounded-4 overflow-hidden h-100 card-hover d-flex flex-column justify-content-between">
                    <div>
                      {/* Image & Badges */}
                      <div className="position-relative">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-100"
                          style={{ height: '200px', objectFit: 'cover' }}
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80';
                          }}
                        />
                        <Badge bg="info" className="position-absolute top-0 start-0 m-3 px-3 py-1 text-dark fw-bold rounded-pill">
                          {course.badge}
                        </Badge>
                        <button
                          type="button"
                          className="btn btn-dark btn-sm rounded-circle position-absolute top-0 end-0 m-3 p-2 shadow"
                          onClick={() => toggleWishlist(course)}
                          title={inWish ? 'Remove from Wishlist' : 'Add to Wishlist'}
                        >
                          <span style={{ color: inWish ? '#ef4444' : '#fff' }}>
                            {inWish ? '❤️' : '🤍'}
                          </span>
                        </button>
                      </div>

                      {/* Card Content */}
                      <Card.Body className="p-4">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="text-info small fw-medium">{course.category}</span>
                          <span className="badge bg-dark border border-secondary border-opacity-50 text-secondary small">
                            {course.level}
                          </span>
                        </div>

                        <h3 className="h6 fw-bold text-white mb-2" style={{ minHeight: '44px' }}>
                          <Link to="/course-details" className="text-white text-decoration-none hover-text-info">
                            {course.title}
                          </Link>
                        </h3>

                        <p className="text-secondary small mb-3">By {course.instructor}</p>

                        <div className="d-flex align-items-center justify-content-between small text-secondary mb-3 pb-3 border-bottom border-secondary border-opacity-25">
                          <span className="text-warning fw-bold">★ {course.rating} ({course.reviews})</span>
                          <span>⏱️ {course.duration}</span>
                          <span>📖 {course.lectures}</span>
                        </div>

                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <span className="fs-5 fw-bold text-white">₹{course.price.toLocaleString('en-IN')}</span>
                            <span className="text-secondary text-decoration-line-through small ms-2">
                              ₹{course.originalPrice.toLocaleString('en-IN')}
                            </span>
                          </div>
                          <Badge bg="success" className="bg-opacity-10 text-success border border-success border-opacity-25 px-2 py-1">
                            Save ₹{(course.originalPrice - course.price).toLocaleString('en-IN')}
                          </Badge>
                        </div>
                      </Card.Body>
                    </div>

                    {/* Card Actions */}
                    <div className="p-4 pt-0">
                      <div className="d-flex gap-2">
                        <Button
                          variant="info"
                          className="rounded-pill fw-bold text-dark flex-grow-1 shadow-sm"
                          onClick={() => addToCart(course)}
                        >
                          🛒 Add to Cart
                        </Button>
                        <Button
                          as={Link}
                          to={`/classroom?courseId=${course.id}`}
                          variant="outline-light"
                          className="rounded-pill fw-semibold px-3"
                          title="Instant Preview"
                        >
                          Preview
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>

          <div className="text-center mt-5">
            <Button as={Link} to="/course" variant="outline-info" size="lg" className="rounded-pill px-5 fw-bold">
              View All 500+ Curriculums &rarr;
            </Button>
          </div>

        </Container>
      </section>

      {/* 3. PLATFORM ADVANTAGES */}
      <section className="py-5 position-relative">
        <Container fluid="xxl" className="py-4">
          <div className="text-center mb-5">
            <Badge bg="info" className="bg-opacity-10 text-info border border-info border-opacity-25 px-3 py-1 rounded-pill mb-2">
              Built For Senior Builders
            </Badge>
            <h2 className="display-6 fw-bold text-white mb-2">Why Top Engineers Learn on Learnify</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: '620px' }}>
              We eliminate obsolete slide decks. Every curriculum centers around real source code, containerized test runners, and mentor code reviews.
            </p>
          </div>

          <Row className="g-4">
            {platformFeatures.map((feat, idx) => (
              <Col md={6} lg={3} key={idx}>
                <Card className="bg-secondary bg-opacity-10 border-secondary border-opacity-25 p-4 rounded-4 h-100 card-hover">
                  <div className="fs-1 mb-3">{feat.icon}</div>
                  <h4 className="fw-bold text-white fs-5 mb-2">{feat.title}</h4>
                  <p className="text-secondary small leading-relaxed mb-0">{feat.desc}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 4. HIGH CONVERSION CTA BOX */}
      <section className="py-5 border-top border-secondary border-opacity-25">
        <Container fluid="xxl">
          <div className="p-5 rounded-4 text-center border border-info border-opacity-30 shadow-2xl position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #101c2e 0%, #0d121c 100%)' }}>
            <Badge bg="info" className="text-dark fw-bold px-3 py-1 rounded-pill mb-3">
              ⚡ Limited Time Offer
            </Badge>
            <h2 className="display-5 fw-bold text-white mb-3">
              Start Your Engineering Transformation Today
            </h2>
            <p className="lead text-secondary mx-auto mb-4" style={{ maxWidth: '620px' }}>
              Enroll in unlimited access to 500+ certification tracks, cloud browser sandboxes, and personal mentor reviews.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Button as={Link} to="/register" variant="info" size="lg" className="rounded-pill px-5 fw-bold text-dark shadow-sm">
                Get Started for Free
              </Button>
              <Button as={Link} to="/pricing-plan" variant="outline-light" size="lg" className="rounded-pill px-4 fw-bold">
                View Pricing Plans
              </Button>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};

export default Home;