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

import { quickNavLinks, popularFallbackCourses } from '../../user/data/404';

const NotFound = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/course-one?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="notfound-page bg-dark text-white min-vh-100 py-5 d-flex flex-column justify-content-center">
      <Container fluid="xxl" className="py-4">
        
        {/* 1. MAIN 404 HERO CONTENT */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            {/* Visual Glitch 404 Text */}
            <div className="position-relative d-inline-block mb-3">
              <span 
                className="display-1 fw-black text-transparent"
                style={{
                  fontSize: 'clamp(5rem, 14vw, 10rem)',
                  fontWeight: '900',
                  lineHeight: '1',
                  WebkitTextStroke: '2px rgba(13, 202, 240, 0.4)',
                  letterSpacing: '4px'
                }}
              >
                404
              </span>
              <div 
                className="position-absolute top-50 start-50 translate-middle w-100 text-info fw-bold"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', textShadow: '0 0 25px rgba(13,202,240,0.5)' }}
              >
                PAGE NOT FOUND
              </div>
            </div>

            <h2 className="fw-bold text-white mb-3">
              Looks Like You've Stepped Off The Curriculum Path
            </h2>
            <p className="lead text-secondary fs-6 mb-4 mx-auto" style={{ maxWidth: '620px' }}>
              The module, lesson, or resource you are looking for has been moved, renamed, or temporarily relocated in our latest catalog update.
            </p>

            {/* Quick Catalog Search */}
            <div className="mx-auto mb-4" style={{ maxWidth: '520px' }}>
              <Form onSubmit={handleSearchSubmit}>
                <InputGroup size="lg" className="rounded-pill p-1 bg-black bg-opacity-50 border border-secondary border-opacity-50 shadow">
                  <InputGroup.Text className="bg-transparent border-0 text-secondary ps-3">
                    🔍
                  </InputGroup.Text>
                  <Form.Control
                    type="search"
                    placeholder="Search courses, mentors, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-white border-0 shadow-none fs-6 ps-2"
                  />
                  <Button variant="info" type="submit" className="rounded-pill px-4 fw-bold text-dark">
                    Search
                  </Button>
                </InputGroup>
              </Form>
            </div>

            {/* Primary Action Buttons */}
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
              <Button as={Link} to="/" variant="info" size="lg" className="rounded-pill px-4 fw-bold text-dark shadow-sm">
                Back to Home
              </Button>
              <Button as={Link} to="/course" variant="outline-light" size="lg" className="rounded-pill px-4 fw-bold">
                Browse Courses
              </Button>
            </div>

            {/* Quick Navigation Shortcuts */}
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 pt-2">
              <span className="small text-secondary me-2">Quick Links:</span>
              {quickNavLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  className="badge bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-light text-decoration-none px-3 py-2 rounded-pill small"
                >
                  <span className="me-1">{link.icon}</span> {link.title}
                </Link>
              ))}
            </div>
          </Col>
        </Row>

        {/* 2. SUGGESTED POPULAR COURSES */}
        <div className="pt-5 border-top border-secondary border-opacity-25">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <Badge bg="secondary" className="mb-2">Top Recommendations</Badge>
              <h4 className="fw-bold text-white mb-0">Popular Courses You Might Like</h4>
            </div>
            <Link to="/course-one" className="text-info text-decoration-none small fw-semibold">
              View All Courses &rarr;
            </Link>
          </div>

          <Row className="g-4">
            {popularFallbackCourses.map((course) => (
              <Col key={course.id} xs={12} md={4}>
                <Card className="h-100 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white rounded-4 overflow-hidden shadow-sm">
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
                  <Card.Body className="d-flex flex-column p-3">
                    <span className="text-info small fw-bold text-uppercase mb-1">{course.category}</span>
                    <Card.Title className="fw-bold fs-6 mb-2 lh-base">
                      <Link to="/course-details" className="text-white text-decoration-none hover-text-info">
                        {course.title}
                      </Link>
                    </Card.Title>
                    <div className="d-flex align-items-center gap-2 small text-secondary mb-3">
                      <span className="text-warning fw-bold">★ {course.rating}</span>
                      <span>•</span>
                      <span>👨‍🎓 {course.students} students</span>
                    </div>
                    <div className="mt-auto d-flex justify-content-between align-items-center pt-2 border-top border-secondary border-opacity-25">
                      <span className="fw-bold fs-5 text-white">{course.price}</span>
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

      </Container>
    </div>
  );
};

export default NotFound;