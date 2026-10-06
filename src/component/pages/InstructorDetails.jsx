import React, { useState } from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';

import {
  instructorProfile,
  instructorExperience,
  instructorSkills,
  instructorCourses,
  instructorStudentReviews
} from '../../user/data/InstructorDetails';

const InstructorDetails = () => {
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (contactMessage.trim()) {
      setMessageSent(true);
      setTimeout(() => setMessageSent(false), 4000);
      setContactSubject('');
      setContactMessage('');
    }
  };

  return (
    <div className="instructor-details-page bg-dark text-white min-vh-100">
      
      {/* 1. PROFILE COVER BANNER */}
      <section 
        className="position-relative py-5 border-bottom border-secondary border-opacity-25" 
        style={{ 
          backgroundImage: `linear-gradient(180deg, rgba(23, 26, 31, 0.85) 0%, rgba(17, 19, 23, 0.98) 100%), url(${instructorProfile.coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Container fluid="xxl" className="py-4">
          {/* Breadcrumb */}
          <div className="d-flex align-items-center gap-2 small text-secondary mb-4">
            <Link to="/home-one" className="text-secondary text-decoration-none hover-text-white">Home</Link>
            <span>/</span>
            <Link to="/instructor" className="text-secondary text-decoration-none hover-text-white">Instructors</Link>
            <span>/</span>
            <span className="text-info fw-medium">{instructorProfile.name}</span>
          </div>

          <Row className="align-items-center gy-4">
            <Col md={3} className="text-center text-md-start">
              <img 
                src={instructorProfile.avatar} 
                alt={instructorProfile.name} 
                className="rounded-circle border border-info border-3 shadow-lg"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
            </Col>
            <Col md={9}>
              <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                <h2 className="display-6 fw-bold mb-0 text-white">{instructorProfile.name}</h2>
                {instructorProfile.verified && (
                  <Badge bg="info" className="text-dark fw-bold rounded-pill px-2 py-1">
                    ✓ Verified Mentor
                  </Badge>
                )}
              </div>
              <p className="lead text-info fs-6 mb-3 fw-medium">
                {instructorProfile.role}
              </p>
              
              {/* Quick Profile Indicators */}
              <div className="d-flex flex-wrap align-items-center gap-3 text-secondary small mb-3">
                <span>🏢 {instructorProfile.company}</span>
                <span>•</span>
                <span>📍 {instructorProfile.location}</span>
                <span>•</span>
                <span className="text-warning fw-bold">★ {instructorProfile.rating} ({instructorProfile.totalReviews} reviews)</span>
                <span>•</span>
                <span className="text-light">{instructorProfile.totalStudents} Students</span>
              </div>

              {/* Social Link Action Buttons */}
              <div className="d-flex flex-wrap align-items-center gap-2">
                <a href={instructorProfile.socialLinks.linkedin} className="btn btn-sm btn-outline-secondary rounded-pill text-light px-3">
                  LinkedIn
                </a>
                <a href={instructorProfile.socialLinks.github} className="btn btn-sm btn-outline-secondary rounded-pill text-light px-3">
                  GitHub
                </a>
                <a href={instructorProfile.socialLinks.twitter} className="btn btn-sm btn-outline-secondary rounded-pill text-light px-3">
                  Twitter
                </a>
                <a href={instructorProfile.socialLinks.website} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-info rounded-pill px-3">
                  Personal Site ↗
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. MAIN LAYOUT: DETAILS + SIDEBAR CONTACT */}
      <section className="py-5">
        <Container fluid="xxl">
          <Row className="g-4">
            
            {/* === LEFT COLUMN: ABOUT, EXPERIENCE, COURSES & REVIEWS === */}
            <Col lg={8}>
              
              {/* About Mentor Card */}
              <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 mb-4">
                <h4 className="fw-bold mb-3 text-white">About {instructorProfile.name}</h4>
                <p className="text-secondary small lh-lg mb-4" style={{ whiteSpace: 'pre-line' }}>
                  {instructorProfile.about}
                </p>

                <h6 className="fw-bold text-white mb-3">Core Technical Specializations</h6>
                <div className="d-flex flex-wrap gap-2">
                  {instructorSkills.map((skill, idx) => (
                    <span key={idx} className="badge bg-black bg-opacity-40 border border-secondary border-opacity-25 text-light fw-normal px-3 py-2 rounded-pill small">
                      ⚡ {skill}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Career Experience Timeline */}
              <Card className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4 mb-4">
                <h4 className="fw-bold mb-4 text-white">Professional Experience</h4>
                <div className="d-flex flex-column gap-3">
                  {instructorExperience.map((exp, idx) => (
                    <div key={idx} className="p-3 rounded-3 bg-dark border border-secondary border-opacity-25">
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <h6 className="fw-bold mb-0 text-white">{exp.role}</h6>
                        <Badge bg="secondary" className="fw-normal">{exp.period}</Badge>
                      </div>
                      <span className="text-info small fw-medium mb-2 d-block">{exp.company}</span>
                      <p className="text-secondary small mb-0">{exp.desc}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Courses Taught by Mentor */}
              <div className="mb-5">
                <div className="d-flex justify-content-between align-items-end mb-3">
                  <h4 className="fw-bold mb-0 text-white">Courses by {instructorProfile.name} ({instructorCourses.length})</h4>
                  <Link to="/course-one" className="text-info text-decoration-none small fw-semibold">
                    Browse Catalog &rarr;
                  </Link>
                </div>

                <Row className="g-3">
                  {instructorCourses.map((course) => (
                    <Col md={6} key={course.id}>
                      <Card className="h-100 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white rounded-4 overflow-hidden shadow-sm">
                        <div className="position-relative">
                          <Card.Img 
                            variant="top" 
                            src={course.image} 
                            alt={course.title}
                            style={{ height: '170px', objectFit: 'cover' }} 
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80';
                            }}
                          />
                          <Badge bg="danger" className="position-absolute top-0 end-0 m-2 rounded-pill px-2 py-1 small">
                            {course.badge}
                          </Badge>
                        </div>
                        <Card.Body className="d-flex flex-column p-3">
                          <span className="text-info small fw-bold text-uppercase mb-1">{course.category}</span>
                          <Card.Title className="fw-bold fs-6 mb-2 lh-base">
                            <Link to="/course-details" className="text-white text-decoration-none hover-text-info">
                              {course.title}
                            </Link>
                          </Card.Title>
                          <div className="d-flex align-items-center gap-2 small text-secondary mb-3">
                            <span className="text-warning fw-bold">★ {course.rating}</span>
                            <span>({course.reviews})</span>
                            <span>•</span>
                            <span>⏱️ {course.duration}</span>
                          </div>
                          <div className="mt-auto d-flex justify-content-between align-items-center pt-2 border-top border-secondary border-opacity-25">
                            <div>
                              <span className="fw-bold fs-5 text-white">₹{course.price.toLocaleString('en-IN')}</span>
                              <span className="text-secondary text-decoration-line-through ms-2 small">₹{course.originalPrice.toLocaleString('en-IN')}</span>
                            </div>
                            <Button as={Link} to="/course-details" variant="outline-info" size="sm" className="rounded-pill px-3">
                              View Course
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>

              {/* Student Feedback & Testimonials */}
              <div>
                <h4 className="fw-bold mb-3 text-white">Student Endorsements</h4>
                <div className="d-flex flex-column gap-3">
                  {instructorStudentReviews.map((rev) => (
                    <Card key={rev.id} className="bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <div>
                          <h6 className="fw-bold text-white mb-0">{rev.studentName}</h6>
                          <small className="text-info">{rev.role}</small>
                        </div>
                        <span className="text-secondary small">{rev.date}</span>
                      </div>
                      <div className="text-warning small mb-2">★★★★★</div>
                      <p className="text-light small mb-0">{rev.comment}</p>
                    </Card>
                  ))}
                </div>
              </div>

            </Col>

            {/* === RIGHT COLUMN: STICKY CONTACT / MESSAGE CARD === */}
            <Col lg={4}>
              <div className="sticky-lg-top" style={{ top: '90px' }}>
                <Card className="bg-dark border border-secondary border-opacity-50 rounded-4 p-4 shadow-lg">
                  <h5 className="fw-bold mb-2 text-white">Message Instructor</h5>
                  <p className="text-secondary small mb-4">
                    Have a question regarding syllabus prerequisites, enterprise training, or mentor cohorts? Send a direct inquiry.
                  </p>

                  {messageSent && (
                    <div className="alert alert-success small py-2 px-3 rounded-pill mb-3 text-center">
                      ✓ Inquiry sent directly to mentor team!
                    </div>
                  )}

                  <Form onSubmit={handleContactSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label className="small text-secondary fw-semibold">Subject</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="e.g. Question on React 19 course"
                        value={contactSubject}
                        onChange={(e) => setContactSubject(e.target.value)}
                        required
                        className="bg-secondary bg-opacity-10 border-secondary text-white rounded-3 shadow-none small"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="small text-secondary fw-semibold">Your Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Write your question or request..."
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        required
                        className="bg-secondary bg-opacity-10 border-secondary text-white rounded-3 shadow-none small"
                      />
                    </Form.Group>

                    <Button variant="info" type="submit" className="w-100 rounded-pill fw-bold text-dark shadow-sm">
                      Send Inquiry
                    </Button>
                  </Form>

                  <div className="pt-4 mt-4 border-top border-secondary border-opacity-25 text-center">
                    <small className="text-secondary d-block mb-1">Average Response Time</small>
                    <span className="badge bg-secondary bg-opacity-25 text-info px-3 py-1 rounded-pill">
                      ⚡ Within 24-48 Hours
                    </span>
                  </div>
                </Card>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

    </div>
  );
};

export default InstructorDetails;