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

import {
  instructorDepartments,
  instructorsData,
  instructorPerks
} from '../../user/data/Instructor';

const Instructor = () => {
  const [selectedDept, setSelectedDept] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering Logic
  const filteredInstructors = instructorsData.filter((ins) => {
    const matchesDept = selectedDept === 'All' || ins.department === selectedDept;
    const matchesSearch =
      ins.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ins.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ins.bio.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="instructor-page bg-dark text-white min-vh-100">
      
      {/* 1. TOP HERO BREADCRUMB */}
      <section className="py-5 position-relative border-bottom border-secondary border-opacity-25" style={{ background: 'linear-gradient(180deg, #171a1f 0%, #111317 100%)' }}>
        <Container fluid="xxl" className="py-2 text-center">
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="d-flex justify-content-center align-items-center gap-2 small text-secondary mb-3">
                <Link to="/home-one" className="text-secondary text-decoration-none hover-text-white">Home</Link>
                <span>/</span>
                <span className="text-info fw-medium">Pages</span>
                <span>/</span>
                <span className="text-light">Instructors</span>
              </div>
              <h1 className="display-5 fw-bold mb-3 text-white">
                Learn from World-Class <span className="text-info">Industry Leaders</span>
              </h1>
              <p className="lead text-secondary fs-6 mb-4 mx-auto" style={{ maxWidth: '640px' }}>
                Our mentors are actively working staff engineers, design leads, and researchers from top technology companies.
              </p>

              {/* Instant Search Bar */}
              <div className="mx-auto" style={{ maxWidth: '480px' }}>
                <InputGroup size="lg" className="rounded-pill p-1 bg-black bg-opacity-50 border border-secondary border-opacity-50 shadow">
                  <Form.Control
                    type="search"
                    placeholder="Search by mentor name, skill, or bio..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-white border-0 ps-4 shadow-none fs-6"
                  />
                  <Button variant="info" className="rounded-pill px-4 fw-bold text-dark">
                    Search
                  </Button>
                </InputGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. DEPARTMENT TABS FILTER */}
      <section className="py-3 border-bottom border-secondary border-opacity-25 bg-black bg-opacity-25">
        <Container fluid="xxl">
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {instructorDepartments.map((dept, idx) => (
              <Button
                key={idx}
                size="sm"
                variant={selectedDept === dept ? 'info' : 'outline-secondary'}
                className="rounded-pill px-3 fw-medium"
                onClick={() => setSelectedDept(dept)}
              >
                {dept}
              </Button>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. INSTRUCTORS GRID */}
      <section className="py-5">
        <Container fluid="xxl">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <span className="text-secondary small">
              Showing <strong>{filteredInstructors.length}</strong> Instructors
            </span>
            {(selectedDept !== 'All' || searchQuery !== '') && (
              <button 
                onClick={() => { setSelectedDept('All'); setSearchQuery(''); }}
                className="btn btn-sm btn-link text-info text-decoration-none p-0"
              >
                Reset filters
              </button>
            )}
          </div>

          {filteredInstructors.length > 0 ? (
            <Row className="g-4">
              {filteredInstructors.map((ins) => (
                <Col key={ins.id} xs={12} sm={6} lg={3}>
                  <Card className="h-100 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-white rounded-4 overflow-hidden shadow-sm text-center p-3">
                    
                    {/* Badge & Avatar */}
                    <div className="position-relative mx-auto mt-2 mb-3">
                      <img 
                        src={ins.image} 
                        alt={ins.name} 
                        className="rounded-circle border border-info border-2 shadow"
                        style={{ width: '110px', height: '110px', objectFit: 'cover' }}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                        }}
                      />
                      <Badge bg="danger" className="position-absolute bottom-0 start-50 translate-middle-x rounded-pill px-2 py-1 small">
                        {ins.featuredBadge}
                      </Badge>
                    </div>

                    <Card.Body className="d-flex flex-column p-2">
                      <h5 className="fw-bold mb-1">
                        <Link to="/instructor-details" className="text-white text-decoration-none hover-text-info">
                          {ins.name}
                        </Link>
                      </h5>
                      <span className="text-info small fw-medium mb-2">{ins.role}</span>
                      <p className="text-secondary small mb-3 flex-grow-1" style={{ fontSize: '0.85rem' }}>
                        {ins.bio}
                      </p>

                      {/* Instructor Stats Strip */}
                      <div className="py-2 mb-3 rounded-3 bg-black bg-opacity-30 border border-secondary border-opacity-25 d-flex justify-content-around text-center small">
                        <div>
                          <strong className="text-warning d-block">★ {ins.rating}</strong>
                          <span className="text-secondary" style={{ fontSize: '0.7rem' }}>Rating</span>
                        </div>
                        <div>
                          <strong className="text-light d-block">{ins.coursesCount}</strong>
                          <span className="text-secondary" style={{ fontSize: '0.7rem' }}>Courses</span>
                        </div>
                        <div>
                          <strong className="text-light d-block">{ins.studentsCount.replace('+', '')}</strong>
                          <span className="text-secondary" style={{ fontSize: '0.7rem' }}>Students</span>
                        </div>
                      </div>

                      {/* View Profile Action & Social Links */}
                      <div className="d-grid gap-2">
                        <Button 
                          as={Link} 
                          to="/instructor-details" 
                          variant="outline-info" 
                          size="sm" 
                          className="rounded-pill fw-semibold"
                        >
                          View Full Profile
                        </Button>
                      </div>
                    </Card.Body>

                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <div className="text-center py-5">
              <h4 className="fw-bold text-white mb-2">No Instructors Found</h4>
              <p className="text-secondary mb-4">Try choosing another department or clearing your search keywords.</p>
              <Button 
                variant="outline-info" 
                size="sm" 
                className="rounded-pill px-4"
                onClick={() => { setSelectedDept('All'); setSearchQuery(''); }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* 4. BECOME AN INSTRUCTOR / RECRUITMENT CALLOUT */}
      <section className="py-5 border-top border-secondary border-opacity-25" style={{ background: 'linear-gradient(180deg, #111317 0%, #171a1f 100%)' }}>
        <Container fluid="xxl" className="py-4">
          <Row className="align-items-center gy-4 mb-5">
            <Col lg={6}>
              <Badge bg="info" className="text-dark fw-bold mb-2">Join Our Faculty</Badge>
              <h2 className="display-6 fw-bold mb-3">Teach What You Love. Inspire The Next Generation.</h2>
              <p className="text-secondary mb-4">
                We are always seeking passionate software engineers, designers, and system architects to create real-world project tracks and mentor ambitious students.
              </p>
              <Button as={Link} to="/register" variant="info" size="lg" className="rounded-pill px-5 fw-bold text-dark shadow">
                Apply as Instructor
              </Button>
            </Col>
            <Col lg={6}>
              <Row className="g-3">
                {instructorPerks.map((perk) => (
                  <Col sm={6} key={perk.id}>
                    <div className="p-3 rounded-4 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 h-100">
                      <div className="fs-2 mb-2">{perk.icon}</div>
                      <h6 className="fw-bold text-white mb-1">{perk.title}</h6>
                      <small className="text-secondary">{perk.desc}</small>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  );
};

export default Instructor;